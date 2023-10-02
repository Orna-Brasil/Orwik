import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
				light: '/src/assets/light-logo.svg',
				dark: '/src/assets/dark-logo.svg',
			},
			social: {
				github: 'https://github.com/Orna-Brasil',
				discord: 'https://discord.gg/RyaBMYVmQV',
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
			sidebar: [
				{
					label: 'Informações Gerais',
					autogenerate: { directory: 'Informações-gerais' },
					collapsed: true,
				},
				{
					label: 'Guias',
					items: [
						{ label: 'Classes e subclasess', autogenerate: { directory: 'Guias/Classes-e-Subclasses' }, collapsed: true },
						{ label: 'Eventos', autogenerate: { directory: 'Guias/Eventos' }, collapsed: true },
						{ label: 'Modos de jogo', autogenerate: { directory: 'Guias/Modos-de-jogo' }, collapsed: true },
						  // etc.
						],
					collapsed: true,
				},
				{
					label: 'Notas de atualização',
					autogenerate: { directory: 'updatenotes' },
					collapsed: true,
				},
				//{
					//label: 'Mundo Orna',
					//autogenerate: { directory: 'Mundo-Orna' },
					//collapsed: true,
				//}
			],
			lastUpdated: true,
		}),
	],
});