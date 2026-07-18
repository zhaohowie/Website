// One-off: generates public/og-image.jpg (1200x630) for social link previews.
// Run: node make-og-image.mjs
import sharp from 'sharp';

const src = 'public/images/building-day.jpg';
const meta = await sharp(src).metadata();

// Crop to the 1.91:1 ratio Facebook/Twitter expect, favouring the building.
const targetRatio = 1200 / 630;
let cropW = meta.width;
let cropH = Math.round(cropW / targetRatio);
if (cropH > meta.height) {
  cropH = meta.height;
  cropW = Math.round(cropH * targetRatio);
}
const left = Math.round((meta.width - cropW) / 2);
const top = Math.round((meta.height - cropH) * 0.35);

await sharp(src)
  .extract({ left, top, width: cropW, height: cropH })
  .resize(1200, 630)
  .jpeg({ quality: 86 })
  .toFile('public/og-image.jpg');

console.log('done: public/og-image.jpg (1200x630)');
