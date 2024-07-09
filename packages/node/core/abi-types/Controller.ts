import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  Controller,
  ControllerMethodNames,
  ControllerEventsContext,
  ControllerEvents
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
export type ControllerEvents =
  | 'ControllerConfigured'
  | 'ControllerRemoved'
  | 'OwnershipTransferred';
export interface ControllerEventsContext {
  ControllerConfigured(...parameters: any): EventFilter;
  ControllerRemoved(...parameters: any): EventFilter;
  OwnershipTransferred(...parameters: any): EventFilter;
}
export type ControllerMethodNames =
  | 'owner'
  | 'getWorker'
  | 'configureController'
  | 'transferOwnership'
  | 'removeController';
export interface ControllerConfiguredEventEmittedResponse {
  _controller: string;
  _worker: string;
}
export interface ControllerRemovedEventEmittedResponse {
  _controller: string;
}
export interface OwnershipTransferredEventEmittedResponse {
  previousOwner: string;
  newOwner: string;
}
export interface Controller {
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  owner(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _controller Type: address, Indexed: false
   */
  getWorker(
    _controller: string,
    overrides?: ContractCallOverrides
  ): Promise<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _controller Type: address, Indexed: false
   * @param _worker Type: address, Indexed: false
   */
  configureController(
    _controller: string,
    _worker: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
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
   * @param _controller Type: address, Indexed: false
   */
  removeController(
    _controller: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
}
