// scripts/convert-images.js
// Simple image conversion script using sharp
// Usage: npm run images:convert

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');

async function convertFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;
  const outPath = filePath.replace(ext, '.webp');
  try {
    await sharp(filePath).webp({ quality: 80 }).toFile(outPath);
    console.log(`Converted: ${filePath} -> ${outPath}`);
  } catch (err) {
    console.error('Failed to convert', filePath, err);
  }
}

async function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
    } else {
      await convertFile(fullPath);
    }
  }
}

walk(IMAGES_DIR).then(() => console.log('Image conversion completed')).catch((e) => console.error(e));
