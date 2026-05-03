// Rasterize public/favicon.svg → all PNG variants + favicon.ico
// Run: node scripts/build-favicons.mjs

import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const src  = resolve(root, 'public/favicon.svg');
const out  = (name) => resolve(root, 'public', name);

const TARGETS = [
  { file: 'favicon-16x16.png',          size:  16 },
  { file: 'favicon-32x32.png',          size:  32 },
  { file: 'apple-touch-icon.png',       size: 180 },
  { file: 'android-chrome-192x192.png', size: 192 },
  { file: 'android-chrome-512x512.png', size: 512 },
];

const svg = await readFile(src);

for (const { file, size } of TARGETS) {
  await sharp(svg, { density: 384 })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(out(file));
  console.log(`  ✓ ${file}  (${size}×${size})`);
}

// .ico bundles 16 + 32 + 48 for cross-browser legacy
const icoSizes = [16, 32, 48];
const buffers = await Promise.all(
  icoSizes.map((s) =>
    sharp(svg, { density: 384 }).resize(s, s).png().toBuffer()
  )
);
const ico = await pngToIco(buffers);
await writeFile(out('favicon.ico'), ico);
console.log(`  ✓ favicon.ico  (${icoSizes.join(', ')})`);

console.log('\nDone.');
