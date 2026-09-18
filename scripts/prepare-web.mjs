import { cp, mkdir, rm, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const out = path.join(root, 'www');

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

const required = ['index.html'];
for (const file of required) {
  const source = path.join(root, file);
  if (!existsSync(source)) {
    throw new Error(`Missing required web file: ${file}`);
  }
  await cp(source, path.join(out, file));
}

const optionalFolders = ['images', 'logos', 'assets'];
for (const folder of optionalFolders) {
  const source = path.join(root, folder);
  if (existsSync(source)) {
    const info = await stat(source);
    if (info.isDirectory()) {
      await cp(source, path.join(out, folder), { recursive: true });
    }
  }
}

console.log('Prepared web files in www/');
