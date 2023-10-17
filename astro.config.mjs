import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import {sidebar} from './sidebar.ts';


export const locales = {
	root: { label: 'Português do Brasil', lang: 'pt-BR' },
};

const site = 'https://orwik.noxian.dev';

export default defineConfig({
	site,
	integrations: [starlight({ title: 'Sitemap' })],
	integrations: [
		starlight({
			title: 'Orwik',
			logo: {
				light: '/src/assets/compass.svg',
				dark: '/src/assets/compass.svg',
			},
			social: {
				github: 'https://github.com/Orna-Brasil',
				telegram: 'https://t.me/OrnaBrasil'
			},
			head: [
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: site + 'og.svg' },
				},
				{
					tag: 'meta',
					attrs: { property: 'twitter:image', content: site + 'og.svg' },
				},
			],
			customCss: ['./src/styles/custom.css'],
			locales,
			sidebar: sidebar,
			lastUpdated: true,
		}),
	],
});