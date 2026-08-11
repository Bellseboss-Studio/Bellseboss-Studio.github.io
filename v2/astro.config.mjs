import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://bellseboss-studio.github.io',
  base: './',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
