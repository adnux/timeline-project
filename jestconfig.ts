import type { Config } from 'jest';

const config: () => Promise<Config> = async (): Promise<Config> => {
  return {
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}',
      '!src/index.tsx',
      '!**/node_modules/**',
    ],
    coveragePathIgnorePatterns: [
      'src/index.tsx',
      'src/reportWebVitals.ts',
    ],
    watchPathIgnorePatterns: [
      'src/reportWebVitals.ts',
      'src/index.tsx',
    ],
    verbose: true,
  };
};

export default config;
