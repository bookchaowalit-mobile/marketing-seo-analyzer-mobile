import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    // Count every source file, not only the ones a test happens to import,
    // so the CI coverage gate cannot be met by leaving screens untested.
    coverage: { include: ['src/**/*.{ts,tsx}'], exclude: ['src/**/*.test.{ts,tsx}'] },
  },
});
