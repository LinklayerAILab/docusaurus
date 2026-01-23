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
};

export default sidebars;
