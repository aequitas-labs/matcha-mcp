import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([globalIgnores(['prompts.gen.ts', 'scripts/**'])]);
