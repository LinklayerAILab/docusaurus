/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'API Configuration Guide',
      link: {
        type: 'generated-index',
        title: 'API Configuration Guide',
        description: 'View API key configuration tutorials for various exchanges',
        keywords: ['api', 'configuration', 'exchange'],
      },
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Binance',
          items: [
            'api/bnpc',
            'api/bnapp',
          ],
        },
        {
          type: 'category',
          label: 'OKX',
          items: [
            'api/okxpc',
            'api/okxapp',
          ],
        },
        {
          type: 'category',
          label: 'Bitget',
          items: [
            'api/bitgetpc',
            'api/bitgetapp',
          ],
        },
        {
          type: 'category',
          label: 'Bybit',
          items: [
            'api/bybitpc',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
