/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // Document sidebar - for LinkLayer AI documentation
  document: [
    {
      type: 'doc',
      id: 'document',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Start Here',
      collapsed: false,
      items: [
        'document/startHere/WhatIsLinkLayerAI',
        'document/startHere/WhyLinkLayerAI',
        'document/startHere/LinkLayerAITokenomics',
        'document/startHere/FAQ&Glossary',
      ],
    },
    {
      type: 'category',
      label: 'LinkLayerAI Products',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'document/products/AlphaAgent',
          label: 'Alpha Agent',
        },
        {
          type: 'doc',
          id: 'document/products/PerpsAgent',
          label: 'Perps Agent',
        },
        {
          type: 'doc',
          id: 'document/products/TradingAgent',
          label: 'Trading Agent',
        },
      ],
    },
    {
      type: 'category',
      label: 'Technical Documentation',
      collapsed: false,
      items: [
        'document/technicalDocumentation/TechnicalArchitectur',
        {
          type: 'doc',
          id: 'document/technicalDocumentation/SmartContracts',
          label: 'Smart Contracts',
        },
        {
          type: 'doc',
          id: 'document/technicalDocumentation/AuditReports',
          label: 'Audit Reports',
        },
      ],
    },
    {
      type: 'category',
      label: 'Resources & Ecosystem',
      collapsed: false,
      items: [
        'document/resources&Ecosystem/Litepaper',
        'document/resources&Ecosystem/ProhibitedCountriesandRegions',
        'document/resources&Ecosystem/LegalDocuments',
      ],
    },
  ],

  // API Documentation sidebar
  guide: [
    {
      type: 'doc',
      id: 'guide',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Binance',
      collapsed: false,
      items: ['guide/bnpc', 'guide/bnapp'],
    },
    {
      type: 'category',
      label: 'OKX',
      collapsed: false,
      items: ['guide/okxpc', 'guide/okxapp'],
    },
    {
      type: 'category',
      label: 'Bitget',
      collapsed: false,
      items: ['guide/bitgetpc', 'guide/bitgetapp'],
    },
    {
      type: 'category',
      label: 'Bybit',
      collapsed: false,
      items: ['guide/bybitpc'],
    },
  ],

  // DApp User Guide sidebar
  'dapp-user-guide': [
    {
      type: 'doc',
      id: 'dapp-user-guide',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'dapp-user-guide/getting-started/introduction',
        'dapp-user-guide/getting-started/installation',
        'dapp-user-guide/getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'dapp-user-guide/features/dashboard',
        'dapp-user-guide/features/trading',
        'dapp-user-guide/features/wallet',
      ],
    },
  ],

  // Chrome Extension Setup sidebar
  'chrome-extension-setup': [
    {
      type: 'doc',
      id: 'chrome-extension-setup',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Installation',
      collapsed: false,
      items: [
        'chrome-extension-setup/installation/requirements',
        'chrome-extension-setup/installation/setup',
        'chrome-extension-setup/installation/configuration',
      ],
    },
    {
      type: 'category',
      label: 'Usage',
      collapsed: false,
      items: [
        'chrome-extension-setup/usage/basic-usage',
        'chrome-extension-setup/usage/advanced-features',
        'chrome-extension-setup/usage/troubleshooting',
      ],
    },
  ],
};

export default sidebars;
