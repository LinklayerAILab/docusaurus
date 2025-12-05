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
        'docs/startHere/WhatIsLinkLayerAI',
        'docs/startHere/WhyLinkLayerAI',
        'docs/startHere/LinkLayerAITokenomics',
        'docs/startHere/FAQ&Glossary',
      ],
    },
    {
      type: 'category',
      label: 'LinkLayerAI Products',
      collapsed: false,
      items: [
        'docs/products/InsightsAgent',
        'docs/products/TradingSocialForum',
        'docs/products/Protocol&Tokens',
      ],
    },
    {
      type: 'category',
      label: 'Technical Documentation',
      collapsed: false,
      items: [
        'docs/technicalDocumentation/TechnicalArchitectur',
        'docs/technicalDocumentation/SmartContracts',
        'docs/technicalDocumentation/AuditReports',
      ],
    },
    {
      type: 'category',
      label: 'Resources & Ecosystem',
      collapsed: false,
      items: [
        'docs/resources&Ecosystem/Litepaper',
        'docs/resources&Ecosystem/LegalDocuments',
        'docs/resources&Ecosystem/ProhibitedCountriesandRegions',
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
