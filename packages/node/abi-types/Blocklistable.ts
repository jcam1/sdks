import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  Blocklistable,
  BlocklistableMethodNames,
  BlocklistableEventsContext,
  BlocklistableEvents
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
export type BlocklistableEvents =
  | 'Blocklisted'
  | 'BlocklisterChanged'
  | 'OwnershipTransferred'
  | 'UnBlocklisted';
export interface BlocklistableEventsContext {
  Blocklisted(...parameters: any): EventFilter;
  BlocklisterChanged(...parameters: any): EventFilter;
  OwnershipTransferred(...parameters: any): EventFilter;
  UnBlocklisted(...parameters: any): EventFilter;
}
export type BlocklistableMethodNames =
  | 'blocklist'
  | 'blocklister'
  | 'isBlocklisted'
  | 'owner'
  | 'transferOwnership'
  | 'unBlocklist'
  | 'updateBlocklister';
export interface BlocklistedEventEmittedResponse {
  _account: string;
}
export interface BlocklisterChangedEventEmittedResponse {
  newBlocklister: string;
}
export interface OwnershipTransferredEventEmittedResponse {
  previousOwner: string;
  newOwner: string;
}
export interface UnBlocklistedEventEmittedResponse {
  _account: string;
}
export interface Blocklistable {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _account Type: address, Indexed: false
   */
  blocklist(
    _account: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  blocklister(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _account Type: address, Indexed: false
   */
  isBlocklisted(
    _account: string,
    overrides?: ContractCallOverrides
  ): Promise<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  owner(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newOwner Type: address, Indexed: false
   */
  transferOwnership(
    newOwner: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _account Type: address, Indexed: false
   */
  unBlocklist(
    _account: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _newBlocklister Type: address, Indexed: false
   */
  updateBlocklister(
    _newBlocklister: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
}
