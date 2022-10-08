import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://camilonore.github.io',
	base: '/portfolio',
	renderers: ['@astrojs/renderer-react'],
});
