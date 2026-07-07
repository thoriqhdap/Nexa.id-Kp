import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = path.join(__dirname, 'public', 'build', 'manifest.json');
const dest = path.join(__dirname, 'resources', 'manifest.json');

try {
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log('Successfully copied manifest.json to resources/manifest.json');
    } else {
        console.error('Source manifest.json not found at ' + src);
    }
} catch (err) {
    console.error('Error copying manifest.json:', err);
}
