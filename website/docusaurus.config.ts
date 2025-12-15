/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'LinkLayerAI',
  tagline: 'Your Gateway to Crypto Exchange APIs',
  favicon: 'img/icon.svg',

  // Set the production url of your site here
  url: 'https://doc.linklayer.ai',
  baseUrl: '/',

  organizationName: 'LinkLayerAI',
  projectName: 'linklayer-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          id: 'default',
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'LinkLayerAI',
      logo: {
        alt: 'LinkLayerAI Logo',
        src: 'img/icon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'document',
          position: 'left',
          label: 'Document',
        },
        {
          type: 'docSidebar',
          sidebarId: 'guide',
          position: 'left',
          label: 'API Guide',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'API Configuration Guide',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/LinkLayerAiOfficial',
            },
            {
              label: 'Twitter',
              href: 'https://x.com/intent/follow?screen_name=LinkLayerAI',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/LinklayerAILab',
            },
            {
              label: 'Official Website',
              href: 'https://www.linklayer.ai/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LinkLayerAI. All rights reserved.`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
