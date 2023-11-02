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
				light: '/src/assets/light-compass.svg',
				dark: '/src/assets/dark-compass.svg',
			},
			social: {
				github: 'https://github.com/Orna-Brasil',
				telegram: 'https://t.me/OrnaBrasil'
			},
			customCss: ['./src/styles/custom.css'],
			locales,
			sidebar: sidebar,
			lastUpdated: true,
		}),
	],
});