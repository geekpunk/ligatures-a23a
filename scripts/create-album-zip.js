import AdmZip from 'adm-zip';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

console.log('Creating album zip file...');

const zip = new AdmZip();

const imagesDir = path.join(rootDir, 'images');
if (fs.existsSync(imagesDir)) {
  console.log('Adding images...');
  zip.addLocalFolder(imagesDir, 'images');
}

const songsDir = path.join(rootDir, 'public', 'songs');
if (fs.existsSync(songsDir)) {
  console.log('Adding songs...');
  zip.addLocalFolder(songsDir, 'songs');
}

const outputPath = path.join(rootDir, 'public', 'ligatures-a23a-album.zip');
zip.writeZip(outputPath);

console.log(`Album zip created at: ${outputPath}`);
console.log(`  File size: ${(fs.statSync(outputPath).size / 1024 / 1024).toFixed(2)} MB`);
