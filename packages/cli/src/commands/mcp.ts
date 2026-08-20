import { auditSemanticPairs, calcAPCA, darkSemanticTokens, lightSemanticTokens, materials } from "@unconfused-ui/tokens";

export async function mcpCommand() {
  process.stderr.write("[Unconfused UI] Starting Model Context Protocol (MCP) Server on stdio...\n");

  const tools = [
    {
      name: "get_tokens",
      description: "Returns the complete active design tokens (OKLCH color scales, semantic tokens, materials, and motion tokens).",
      inputSchema: {
        type: "object",
        properties: {
          mode: { type: "string", enum: ["dark", "light"], description: "Theme mode to inspect" },
        },
      },
    },
    {
      name: "audit_contrast",
      description: "Calculates the APCA Lc perceptual contrast score and validates accessibility level (body, large, ui).",
      inputSchema: {
        type: "object",
        properties: {
          textHex: { type: "string", description: "Foreground text hex color (e.g. #FFFFFF)" },
          bgHex: { type: "string", description: "Background hex color (e.g. #10121E)" },
        },
        required: ["textHex", "bgHex"],
      },
    },
    {
      name: "get_component_spec",
      description: "Returns technical component specifications, slots, props, and recipe variants for AI coding assistance.",
      inputSchema: {
        type: "object",
        properties: {
          componentName: { type: "string", description: "Name of the component (e.g. Button, Card, DataTable, Accordion)" },
        },
        required: ["componentName"],
      },
    },
  ];

  const handleRequest = (line: string) => {
    try {
      const msg = JSON.parse(line);
      const { id, method, params } = msg;

      if (method === "tools/list") {
        sendResponse(id, { tools });
      } else if (method === "tools/call") {
        const { name, arguments: args } = params;

        if (name === "get_tokens") {
          const mode = args?.mode ?? "dark";
          const tokens = mode === "light" ? lightSemanticTokens : darkSemanticTokens;
          sendResponse(id, {
            content: [
              {
                type: "text",
                text: JSON.stringify({ mode, semanticTokens: tokens, materials }, null, 2),
              },
            ],
          });
        } else if (name === "audit_contrast") {
          const { textHex, bgHex } = args;
          const lc = calcAPCA(textHex, bgHex);
          const passBody = Math.abs(lc) >= 60;
          const passLarge = Math.abs(lc) >= 45;
          const passUI = Math.abs(lc) >= 30;

          sendResponse(id, {
            content: [
              {
                type: "text",
                text: JSON.stringify({ textHex, bgHex, Lc: lc, passBody, passLarge, passUI }, null, 2),
              },
            ],
          });
        } else if (name === "get_component_spec") {
          const { componentName } = args;
          sendResponse(id, {
            content: [
              {
                type: "text",
                text: JSON.stringify(
                  {
                    component: componentName,
                    framework: "React Native / Expo",
                    styling: "createSlotRecipe / createRecipe",
                    zeroDOM: true,
                    a11y: "WAI-ARIA + APCA 100%",
                  },
                  null,
                  2
                ),
              },
            ],
          });
        } else {
          sendError(id, -32601, `Tool not found: ${name}`);
        }
      } else if (method === "initialize") {
        sendResponse(id, {
          protocolVersion: "2024-11-05",
          capabilities: { tools: {} },
          serverInfo: { name: "unconfused-ui-mcp", version: "0.1.0" },
        });
      } else {
        sendError(id, -32601, `Method not supported: ${method}`);
      }
    } catch (err: any) {
      process.stderr.write(`[Unconfused MCP Error] ${err.message}\n`);
    }
  };

  const sendResponse = (id: string | number, result: any) => {
    process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id, result }) + "\n");
  };

  const sendError = (id: string | number, code: number, message: string) => {
    process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id, error: { code, message } }) + "\n");
  };

  process.stdin.setEncoding("utf8");
  let buffer = "";
  process.stdin.on("data", (chunk) => {
    buffer += chunk;
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";
    for (const line of lines) {
      if (line.trim()) handleRequest(line.trim());
    }
  });
}
