export type MaterialToken = {
  blur: number;
  tint: string;
  tintOpacity: number;
  borderLuminance: number;
  saturation: number;
  specularHighlight?: boolean;
};

export type Materials = {
  glass: MaterialToken;
  frosted: MaterialToken;
  matte: MaterialToken;
  liquid: MaterialToken;
  solid: MaterialToken;
};

/**
 * Material definitions for surfaces
 */
export const materials: Materials = {
  glass: {
    blur: 24,
    tint: "#10121E",
    tintOpacity: 0.6,
    borderLuminance: 0.12,
    saturation: 1.2,
  },
  frosted: {
    blur: 40,
    tint: "#0A0C16",
    tintOpacity: 0.85,
    borderLuminance: 0.06,
    saturation: 0.8,
  },
  matte: {
    blur: 0,
    tint: "#10121E",
    tintOpacity: 0.95,
    borderLuminance: 0.08,
    saturation: 0,
  },
  liquid: {
    blur: 32,
    tint: "#181C30",
    tintOpacity: 0.4,
    borderLuminance: 0.20,
    saturation: 1.6,
    specularHighlight: true,
  },
  solid: {
    blur: 0,
    tint: "#10121E",
    tintOpacity: 1.0,
    borderLuminance: 0.08,
    saturation: 0,
  },
};
