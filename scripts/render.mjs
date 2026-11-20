import { mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import { basename, extname, join, resolve } from 'node:path';
import ejs from 'ejs';
import { jobs, selectedJob } from '../src/data/jobs.mjs';

const projectRoot = resolve(import.meta.dirname, '..');
const pagesDir = join(projectRoot, 'src', 'pages');
const outputDir = join(projectRoot, 'site');

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

const pageFiles = (await readdir(pagesDir)).filter((file) => extname(file) === '.ejs');

for (const file of pageFiles) {
    const inputPath = join(pagesDir, file);
    const outputName = `${basename(file, '.ejs')}.html`;
    const outputPath = join(outputDir, outputName);

    const html = await ejs.renderFile(
        inputPath,
        { jobs, selectedJob },
        {
            async: false,
            filename: inputPath
        }
    );

    await writeFile(outputPath, html, 'utf8');
}

console.log(`Rendered ${pageFiles.length} pages to ${outputDir}`);
