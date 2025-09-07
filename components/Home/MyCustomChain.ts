import { defineChain } from "viem";
import { monadTestnet, base } from "viem/chains";

// ===== TYPES =====
export interface ContractAddresses {
  pixelCanvas: string;
  pixelToken: string;
  chainName: string;
}

export type ChainId = number;

export interface ChainContracts {
  [chainId: ChainId]: ContractAddresses;
}

export const customMonad = defineChain(monadTestnet);

// ===== CONTRACT ADDRESSES CHO TỪNG CHAIN =====
export const CONTRACTS: ChainContracts = {
  [base.id]: {
    pixelCanvas: "0xf00346c656dbc70de0a251E1c883B84D999d244E",
    pixelToken: "0xf00346c656dbc70de0a251E1c883B84D999d244E",
    chainName: "Base Mainnet",
  },
  [monadTestnet.id]: {
    pixelCanvas: "0x60e619E19034896712e9F774e80060E23be278C2",
    pixelToken: "0x60e619E19034896712e9F774e80060E23be278C2",
    chainName: "Monad Testnet",
  },

  // Monad Testnet
};

// ===== SUPPORTED CHAINS ARRAY =====
export const SUPPORTED_CHAINS = [customMonad, base];

// ===== HELPER FUNCTIONS =====
export const getContractAddresses = (
  chainId: ChainId
): ContractAddresses | null => {
  return CONTRACTS[chainId] || null;
};

export const isChainSupported = (chainId: ChainId): boolean => {
  return chainId in CONTRACTS;
};

export const getSupportedChainIds = (): ChainId[] => {
  return Object.keys(CONTRACTS).map((id) => parseInt(id));
};

export const getChainById = (chainId: ChainId) => {
  return SUPPORTED_CHAINS.find((chain) => chain.id === chainId);
};

// ===== DEFAULT CHAIN =====
export const DEFAULT_CHAIN = base;
export const DEFAULT_CONTRACTS = CONTRACTS[base.id];

// ===== EXPORT ALL CHAINS =====
export const chains = {
  base,
  customMonad,
};
