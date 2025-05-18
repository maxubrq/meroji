import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['features/**/*.spec.ts'],
        coverage: {
            include: ['features/**/*.ts'],
        },
    },
});
