#!/usr/bin/env node

const { build, scandir, watch, cliopts } = require('estrella');
const fs = require('fs');

build({
  entry: ['src/index.ts', 'src/background.ts'],
  outdir: 'dist',
  bundle: true,
});

const cwd = process.cwd();
const dir = 'src';
const filter = /\.(json|css)$/i;

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

scandir('src', filter, { recursive: true }).then((files) => {
  const copyFile = (file) =>
    fs.copyFileSync(`${cwd}/src/${file}`, `${cwd}/dist/${file}`);

  // Copy once
  files.map(copyFile);
  // in watch mode, copy files as they change
  cliopts.watch &&
    watch(dir, { filter, recursive: true }, (changes) => {
      changes.map((c) => copyFile(c.name.replace(/^src\//, '')));
    });
});
