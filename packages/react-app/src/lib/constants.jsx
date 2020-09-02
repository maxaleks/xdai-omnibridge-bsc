import React from 'react';

import { CONFIG } from '../config';
import { NetworkIcon } from '../icons/NetworkIcon';

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000';

export const networkOptions = [
  {
    value: 100,
    key: 0,
    bridge: { chainId: 1, name: 'ETH Mainnet' },
    label: 'xDai',
    name: 'xDai Chain',
    icon: <NetworkIcon />,
  },
  {
    value: 1,
    key: 1,
    bridge: { chainId: 100, name: 'xDai Chain' },
    label: 'Mainnet',
    name: 'ETH Mainnet',
    icon: <NetworkIcon />,
  },
  {
    value: 77,
    key: 2,
    bridge: { chainId: 42, name: 'Kovan Testnet' },
    label: 'Sokol',
    name: 'Sokol Testnet',
    icon: <NetworkIcon />,
  },
  {
    value: 42,
    key: 3,
    bridge: { chainId: 77, name: 'Sokol Testnet' },
    label: 'Kovan',
    name: 'Kovan Testnet',
    icon: <NetworkIcon />,
  },
];

export const chainUrls = {
  100: {
    rpc: 'https://xdai.poanetwork.dev',
    explorer: 'https://blockscout.com/poa/xdai',
    chainId: 100,
    name: 'xDai Chain',
  },
  1: {
    rpc: `https://mainnet.infura.io/v3/${CONFIG.infuraId}`,
    explorer: 'https://etherscan.io/',
    chainId: 1,
    name: 'ETH Mainnet',
  },
  77: {
    rpc: 'https://sokol.poa.network',
    explorer: 'https://blockscout.com/poa/sokol',
    chainId: 77,
    name: 'Sokol Testnet',
  },
  42: {
    rpc: `https://kovan.infura.io/v3/${CONFIG.infuraId}`,
    explorer: 'https://kovan.etherscan.io/',
    chainId: 42,
    name: 'Kovan Testnet',
  },
};

export const defaultTokens = {
  100: {
    name: 'Stake on xDai',
    address: '0xb7D311E2Eb55F2f68a9440da38e7989210b9A05e',
    symbol: 'STAKE',
    decimals: 18,
    chainId: 100,
    logoURI: '',
  },
  1: {
    name: 'Stake',
    address: '0x0Ae055097C6d159879521C384F1D2123D1f195e6',
    symbol: 'STAKE',
    decimals: 18,
    chainId: 1,
    logoURI: '',
  },
  77: {
    name: 'Stake on xDai',
    address: '0xDd100c4f827ABAbB2301d562FDBD503aE0d6B1D0',
    symbol: 'STAKE',
    decimals: 18,
    chainId: 77,
    logoURI: '',
  },
  42: {
    name: 'Stake',
    address: '0x1278571f79B3a4245A0865CbF9b24cAE15Aa2938',
    symbol: 'STAKE',
    decimals: 18,
    chainId: 42,
    logoURI: '',
  },
};