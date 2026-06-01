// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import lucode from 'lucode-starlight';
import { bundledLanguages } from 'shiki';
import { readFileSync } from 'fs';

const EATS_CUSTOM_LANG = JSON.parse(readFileSync('./grammar.json', 'utf-8'));

// https://astro.build/config
export default defineConfig({
	// site: 'https://cyberghxst.github.io',
	// base: '/ea.ts-docs',
	integrations: [
		starlight({
			title: 'easy-api.ts | Documentation',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Getting Started', slug: 'guides/getting_started' },
						{ label: 'Add-ons', slug: 'guides/addons' },
						{ label: 'Conditional Statements', slug: 'guides/stmt' },
						{ label: 'Custom Databases', slug: 'guides/custom_dbs' },
						{ label: 'Custom Functions', slug: 'guides/custom_functions' },
						{ label: 'Escapers', slug: 'guides/escapers' },
						{ label: 'Not Found Handler', slug: 'guides/not_found_handler' },
						{ label: 'Placeholders', slug: 'guides/placeholders' },
						{ label: 'Reverse Reading', slug: 'guides/reverse_reading' },
						{ label: 'Syntax', slug: 'guides/syntax' }
					],
				},
				{
					label: 'Functions',
					collapsed: true,
					items: [{ autogenerate: { directory: '/functions' } }]
				}
			],
			plugins: [
				lucode({
					footerText: 'Powered by Lucode',
				})
			],
		}),
	],
	markdown: {
		shikiConfig: {
			langs: [EATS_CUSTOM_LANG]
		}
	}
});
