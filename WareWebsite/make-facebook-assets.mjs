// One-off: generates Facebook page assets into facebook-assets/
// Run: node make-facebook-assets.mjs
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

await mkdir('facebook-assets', { recursive: true });

// Profile picture: logo mark centered on cream, 720x720
await sharp('public/logo-mark.svg', { density: 300 })
  .resize(560, 560, { fit: 'contain', background: { r: 250, g: 248, b: 243, alpha: 1 } })
  .extend({ top: 80, bottom: 80, left: 80, right: 80, background: { r: 250, g: 248, b: 243, alpha: 1 } })
  .png()
  .toFile('facebook-assets/profile-picture.png');

// Cover photo: wide crop of the building photo (FB cover ratio ~2.63:1)
const meta = await sharp('public/images/building-day.jpg').metadata();
const coverW = meta.width;
const coverH = Math.round(coverW / 2.63);
const top = Math.max(0, Math.round(meta.height * 0.22));
await sharp('public/images/building-day.jpg')
  .extract({ left: 0, top, width: coverW, height: Math.min(coverH, meta.height - top) })
  .jpeg({ quality: 88 })
  .toFile('facebook-assets/cover-photo.jpg');

console.log(`done: profile-picture.png (720x720), cover-photo.jpg (${coverW}x${coverH})`);
