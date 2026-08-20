#!/usr/bin/env node
try {
  require('../dist/index.js');
} catch {
  require('../src/index.js');
}
