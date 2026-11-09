// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	fonts: [
		// Body text: regular, italic, and semibold (no semibold italic)
		{
			name: 'Literata',
			cssVariable: '--font-literata',
			provider: fontProviders.google(),
			weights: [400],
			styles: ['normal', 'italic'],
			fallbacks: ['Georgia', 'serif'],
		},
		{
			name: 'Literata',
			cssVariable: '--font-literata',
			provider: fontProviders.google(),
			weights: [600],
			styles: ['normal'],
			fallbacks: ['Georgia', 'serif'],
		},
		// Titles: bold only
		{
			name: 'Bricolage Grotesque',
			cssVariable: '--font-bricolage-grotesque',
			provider: fontProviders.google(),
			weights: [700],
			styles: ['normal'],
			fallbacks: ['system-ui', 'sans-serif'],
		},
	],
});
