import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  MinterManagementInterface,
  MinterManagementInterfaceMethodNames,
  MinterManagementInterfaceEventsContext,
  MinterManagementInterfaceEvents
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
export type MinterManagementInterfaceEvents = undefined;
export interface MinterManagementInterfaceEventsContext {}
export type MinterManagementInterfaceMethodNames =
  | 'removeMinter'
  | 'configureMinter'
  | 'minterAllowance'
  | 'isMinter';
export interface MinterManagementInterface {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _minter Type: address, Indexed: false
   */
  removeMinter(
    _minter: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _minter Type: address, Indexed: false
   * @param _minterAllowedAmount Type: uint256, Indexed: false
   */
  configureMinter(
    _minter: string,
    _minterAllowedAmount: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _minter Type: address, Indexed: false
   */
  minterAllowance(
    _minter: string,
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _account Type: address, Indexed: false
   */
  isMinter(
    _account: string,
    overrides?: ContractCallOverrides
  ): Promise<boolean>;
}
