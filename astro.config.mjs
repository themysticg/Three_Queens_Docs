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
          label: 'Prodigy Inventory',
          items: [
            {
              label: 'Ox Inventory Rework v2',
              items: [
                { label: 'Overview', slug: 'tqrpinvv2/ox-inventory-rework-v2' },
                { label: 'Installation', slug: 'tqrpinvv2/installation' },
                { label: 'Clothing System', slug: 'tqrpinvv2/clothing-system' },
                { label: 'Utility Slots', slug: 'tqrpinvv2/utility-slots' },
                { label: 'Rarity System', slug: 'tqrpinvv2/rarity-system' },
                { label: 'Crafting System', slug: 'tqrpinvv2/crafting-system' },
                { label: 'Blueprint System', slug: 'tqrpinvv2/blueprint-system' },
                { label: 'Storage System', slug: 'tqrpinvv2/storage-system' },
                { label: 'Shop System', slug: 'tqrpinvv2/shop-system' },
                { label: 'UI Themes', slug: 'tqrpinvv2/ui-themes' },
              ],
            },
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
        {
          label: 'Servers',
          items: [
            { label: 'Servers 3Q', slug: 'servers/intro' },
          ],
        },
      ],
      lastUpdated: true,
      pagination: true,
    }),
  ],
});
