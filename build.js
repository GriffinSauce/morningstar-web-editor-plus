#!/usr/bin/env node

const { build } = require('estrella');

build({
  entry: ['src/index.ts', 'src/background.ts'],
  outdir: 'dist',
  bundle: true,
});
