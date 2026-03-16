/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // Document sidebar - for LinkLayer AI documentation
  Document: [
    {
      type: 'doc',
      id: 'Document',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Start Here',
      collapsed: false,
      items: [
        'Document/StartHere/WhatIsLinkLayerAI',
        'Document/StartHere/WhyLinkLayerAI',
        'Document/StartHere/LinkLayerAITokenomics',
        'Document/StartHere/FAQ&Glossary',
      ],
    },
    {
      type: 'category',
      label: 'LinkLayerAI Products',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Document/Products/AlphaAgent',
          label: 'Alpha Agent',
        },
        {
          type: 'doc',
          id: 'Document/Products/PerpsAgent',
          label: 'Perps Agent',
        },
        {
          type: 'doc',
          id: 'Document/Products/TradingAgent',
          label: 'Trading Agent',
        },
      ],
    },
    {
      type: 'category',
      label: 'Technical Documentation',
      collapsed: false,
      items: [
        'Document/TechnicalDocumentation/TechnicalArchitectur',
        {
          type: 'doc',
          id: 'Document/TechnicalDocumentation/SmartContracts',
          label: 'Smart Contracts',
        },
        {
          type: 'doc',
          id: 'Document/TechnicalDocumentation/AuditReports',
          label: 'Audit Reports',
        },
      ],
    },
    {
      type: 'category',
      label: 'Resources & Ecosystem',
      collapsed: false,
      items: [
        'Document/Resources&Ecosystem/Litepaper',
        'Document/Resources&Ecosystem/ProhibitedCountriesandRegions',
        'Document/Resources&Ecosystem/LegalDocuments',
      ],
    },
  ],

  // API Documentation sidebar
  Guide: [
    {
      type: 'doc',
      id: 'Guide',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Binance',
      collapsed: false,
      items: ['Guide/BnPc', 'Guide/BnApp'],
    },
    {
      type: 'category',
      label: 'OKX',
      collapsed: false,
      items: ['Guide/OkxPc', 'Guide/OkxApp'],
    },
    {
      type: 'category',
      label: 'Bitget',
      collapsed: false,
      items: ['Guide/BitgetPc', 'Guide/BitgetApp'],
    },
    {
      type: 'category',
      label: 'Bybit',
      collapsed: false,
      items: ['Guide/BybitPc'],
    },
  ],

  // How to Use sidebar
  'LinkLayerAI-Guide': [
    {
      type: 'doc',
      id: 'LinkLayerAI-Guide',
      label: 'Overview',
    },
    {
      type: 'doc',
      label: 'Plugin Guide',
      id: 'LinkLayerAI-Guide/PluginGuide',
    },
    {
      type: 'doc',
      label: 'DApp PC Guide',
      id: 'LinkLayerAI-Guide/DappPcGuide',
    },
    {
      type: 'doc',
      label: 'DApp H5 Guide',
      id: 'LinkLayerAI-Guide/DappH5Guide',
    },
    {
      type: 'doc',
      label: 'Plugin Video Guide',
      id: 'LinkLayerAI-Guide/PluginVideoGuide',
    },
    {
      type: 'doc',
      label: 'DApp Video Guide',
      id: 'LinkLayerAI-Guide/DappVideoGuide',
    },
  ],
};

export default sidebars;
