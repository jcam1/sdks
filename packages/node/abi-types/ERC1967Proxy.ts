import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  ERC1967Proxy,
  ERC1967ProxyMethodNames,
  ERC1967ProxyEventsContext,
  ERC1967ProxyEvents
>;

export declare type EventFilter = {
  address?: string;
  topics?: Array<string>;
  fromBlock?: string | number;
  toBlock?: string | number;
};

export interface ContractTransactionOverrides {
  /**
   * The maximum units of gas for the transaction to use
   */
  gasLimit?: number;
  /**
   * The price (in wei) per unit of gas
   */
  gasPrice?: BigNumber | string | number | Promise<any>;
  /**
   * The nonce to use in the transaction
   */
  nonce?: number;
  /**
   * The amount to send with the transaction (i.e. msg.value)
   */
  value?: BigNumber | string | number | Promise<any>;
  /**
   * The chain ID (or network ID) to use
   */
  chainId?: number;
}

export interface ContractCallOverrides {
  /**
   * The address to execute the call as
   */
  from?: string;
  /**
   * The maximum units of gas for the transaction to use
   */
  gasLimit?: number;
}
export type ERC1967ProxyEvents = 'Upgraded';
export interface ERC1967ProxyEventsContext {
  Upgraded(...parameters: any): EventFilter;
}
export type ERC1967ProxyMethodNames = 'new';
export interface UpgradedEventEmittedResponse {
  implementation: string;
}
export interface ERC1967Proxy {
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: constructor
   * @param _logic Type: address, Indexed: false
   * @param _data Type: bytes, Indexed: false
   */
  'new'(
    _logic: string,
    _data: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
}
