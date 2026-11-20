// Build the social share card (public/og-image.png, 1200×630) and the
// resized hero photo (src/assets/me-640.webp).
// Run: npm run og   (re-run after changing the photo, title or colours)

import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const photoSrc = resolve(root, 'src/assets/me-Photoroom.png');

const W = 1200;
const H = 630;
const PAPER = '#F3F4F6';
const INK = '#111827';
const INK_3 = '#6B7280';
const BLUE = '#1E3A8A';
const ORANGE = '#F97316';

// Text uses common system serif/sans fonts: sharp's SVG renderer can't load
// web fonts, and the PNG is committed, so it only has to look right once.
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="100%" height="100%" fill="${PAPER}"/>
  <rect x="0" y="0" width="${W}" height="10" fill="${BLUE}"/>
  <text x="72" y="118" font-family="Consolas, 'Courier New', monospace" font-size="22" letter-spacing="5" fill="${INK_3}">PORTFOLIO · CAIRO, EGYPT</text>
  <text x="68" y="262" font-family="Georgia, 'Times New Roman', serif" font-size="128" fill="${INK}">Karim</text>
  <text x="68" y="386" font-family="Georgia, 'Times New Roman', serif" font-size="128" font-style="italic" fill="${ORANGE}">Adel.</text>
  <text x="72" y="470" font-family="'Segoe UI', Arial, sans-serif" font-size="38" font-weight="600" fill="${BLUE}">Software Engineering Tech Lead</text>
  <text x="72" y="522" font-family="'Segoe UI', Arial, sans-serif" font-size="27" fill="${INK_3}">React · TypeScript · AI · Creator of ResuForge</text>
  <text x="72" y="585" font-family="Consolas, 'Courier New', monospace" font-size="22" fill="${INK}">karimadel.vercel.app</text>
  <rect x="${W - 452}" y="88" width="392" height="452" fill="none" stroke="${INK}" stroke-width="3"/>
</svg>`;

const photo = await sharp(photoSrc)
  .resize(380, 440, { fit: 'cover', position: 'top' })
  .flatten({ background: '#E5E7EB' })
  .toBuffer();

await sharp(Buffer.from(svg))
  .composite([{ input: photo, left: W - 446, top: 94 }])
  .png({ compressionLevel: 9, palette: true, quality: 90 })
  .toFile(resolve(root, 'public/og-image.png'));
console.log('  ✓ public/og-image.png (1200×630)');

// Hero photo is shown at most 320px wide; 640px covers 2× screens.
await sharp(photoSrc)
  .resize(640, 640, { fit: 'cover', position: 'top' })
  .webp({ quality: 82 })
  .toFile(resolve(root, 'src/assets/me-640.webp'));
console.log('  ✓ src/assets/me-640.webp (640×640)');
