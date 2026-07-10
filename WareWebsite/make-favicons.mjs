// One-off script: generates favicon.ico, PNG favicons and apple-touch-icon
// from public/logo-mark.svg. Run: node make-favicons.mjs
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';

const svg = await readFile('public/logo-mark.svg');

async function renderPng(size, background = { r: 0, g: 0, b: 0, alpha: 0 }) {
  return sharp(svg, { density: 300 })
    .resize(size, size, { fit: 'contain', background })
    .png()
    .toBuffer();
}

// Modern ICO container holding a single 32px PNG
function pngToIco(png) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // image count
  const entry = Buffer.alloc(16);
  entry.writeUInt8(32, 0); // width
  entry.writeUInt8(32, 1); // height
  entry.writeUInt8(0, 2); // palette
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // planes
  entry.writeUInt16LE(32, 6); // bpp
  entry.writeUInt32LE(png.length, 8); // data size
  entry.writeUInt32LE(22, 12); // data offset
  return Buffer.concat([header, entry, png]);
}

const png32 = await renderPng(32);
await writeFile('public/favicon.ico', pngToIco(png32));
await writeFile('public/favicon-192.png', await renderPng(192));
await writeFile('public/favicon-512.png', await renderPng(512));
// Apple touch icons look best on a solid background
await writeFile(
  'public/apple-touch-icon.png',
  await renderPng(180, { r: 250, g: 248, b: 243, alpha: 1 })
);
console.log('done: favicon.ico, favicon-192.png, favicon-512.png, apple-touch-icon.png');
