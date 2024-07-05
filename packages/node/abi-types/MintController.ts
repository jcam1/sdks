import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  MintController,
  MintControllerMethodNames,
  MintControllerEventsContext,
  MintControllerEvents
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
export type MintControllerEvents =
  | 'MinterManagerSet'
  | 'MinterConfigured'
  | 'MinterRemoved'
  | 'MinterAllowanceIncremented'
  | 'MinterAllowanceDecremented'
  | 'ControllerConfigured'
  | 'ControllerRemoved'
  | 'OwnershipTransferred';
export interface MintControllerEventsContext {
  MinterManagerSet(...parameters: any): EventFilter;
  MinterConfigured(...parameters: any): EventFilter;
  MinterRemoved(...parameters: any): EventFilter;
  MinterAllowanceIncremented(...parameters: any): EventFilter;
  MinterAllowanceDecremented(...parameters: any): EventFilter;
  ControllerConfigured(...parameters: any): EventFilter;
  ControllerRemoved(...parameters: any): EventFilter;
  OwnershipTransferred(...parameters: any): EventFilter;
}
export type MintControllerMethodNames =
  | 'incrementMinterAllowance'
  | 'setMinterManager'
  | 'decrementMinterAllowance'
  | 'owner'
  | 'getMinterManager'
  | 'getWorker'
  | 'configureController'
  | 'configureMinter'
  | 'removeMinter'
  | 'transferOwnership'
  | 'removeController'
  | 'new';
export interface MinterManagerSetEventEmittedResponse {
  _oldMinterManager: string;
  _newMinterManager: string;
}
export interface MinterConfiguredEventEmittedResponse {
  _msgSender: string;
  _minter: string;
  _allowance: BigNumberish;
}
export interface MinterRemovedEventEmittedResponse {
  _msgSender: string;
  _minter: string;
}
export interface MinterAllowanceIncrementedEventEmittedResponse {
  _msgSender: string;
  _minter: string;
  _increment: BigNumberish;
  _newAllowance: BigNumberish;
}
export interface MinterAllowanceDecrementedEventEmittedResponse {
  msgSender: string;
  minter: string;
  decrement: BigNumberish;
  newAllowance: BigNumberish;
}
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
export interface MintController {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _allowanceIncrement Type: uint256, Indexed: false
   */
  incrementMinterAllowance(
    _allowanceIncrement: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _newMinterManager Type: address, Indexed: false
   */
  setMinterManager(
    _newMinterManager: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _allowanceDecrement Type: uint256, Indexed: false
   */
  decrementMinterAllowance(
    _allowanceDecrement: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
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
   */
  getMinterManager(overrides?: ContractCallOverrides): Promise<string>;
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
   * @param _newAllowance Type: uint256, Indexed: false
   */
  configureMinter(
    _newAllowance: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  removeMinter(
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
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   * @param _minterManager Type: address, Indexed: false
   */
  'new'(
    _minterManager: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
}
