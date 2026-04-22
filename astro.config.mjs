import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'http://docs.threequeens.net',
  outDir: './dist',
  integrations: [
    starlight({
      title: 'Three Queens Docs',
      description: 'Documentation for Three Queens FiveM scripts.',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: false,
      },
      social: [
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.gg/3FNDE4vm6F',
        },
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/themysticg',
        },
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'getting-started/introduction' },
            { label: 'Installation', slug: 'getting-started/installation' },
          ],
        },
        {
          label: 'Example Script',
          items: [
            { label: 'Overview', slug: 'example-script/overview' },
            { label: 'Configuration', slug: 'example-script/configuration' },
            { label: 'Exports', slug: 'example-script/exports' },
          ],
        },
        {
          label: 'Tools',
          items: [
            { label: 'Image Uploader', slug: 'tools/image-uploader' },
          ],
        },
      ],
      lastUpdated: true,
      pagination: true,
    }),
  ],
});
