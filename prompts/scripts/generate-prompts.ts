/**
 * Codegen script: reads .md files from prompts/ and generates prompts.gen.ts
 * with inlined string constants. Run before build.
 *
 * Usage: npx tsx scripts/generate-prompts.ts
 */
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, basename } from 'path';

const PROMPTS_DIR = join(__dirname, '..', 'prompts');
const OUTPUT_FILE = join(__dirname, '..', 'prompts.gen.ts');

function toConstName(filename: string): string {
  return basename(filename, '.md').replace(/-/g, '_').toUpperCase();
}

const files = readdirSync(PROMPTS_DIR)
  .filter((f) => f.endsWith('.md'))
  .sort();

const lines: string[] = [
  '// AUTO-GENERATED — do not edit manually.',
  '// Run `pnpm --filter @matcha-money/mcp-prompts generate` to regenerate.',
  '',
];

for (const file of files) {
  const content = readFileSync(join(PROMPTS_DIR, file), 'utf-8').trimEnd();
  const constName = toConstName(file);
  const escaped = content
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
  lines.push(`export const ${constName} = \`${escaped}\`;`);
  lines.push('');
}

writeFileSync(OUTPUT_FILE, lines.join('\n'));
console.log(`Generated ${OUTPUT_FILE} with ${files.length} prompts`);
