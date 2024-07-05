import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  FiatTokenV2,
  FiatTokenV2MethodNames,
  FiatTokenV2EventsContext,
  FiatTokenV2Events
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
export type FiatTokenV2Events =
  | 'Allowlisted'
  | 'AllowlisterChanged'
  | 'Approval'
  | 'AuthorizationCanceled'
  | 'AuthorizationUsed'
  | 'Blocklisted'
  | 'BlocklisterChanged'
  | 'Burn'
  | 'Mint'
  | 'MinterAdminChanged'
  | 'MinterConfigured'
  | 'MinterRemoved'
  | 'OwnershipTransferred'
  | 'Pause'
  | 'PauserChanged'
  | 'RescuerChanged'
  | 'Transfer'
  | 'UnAllowlisted'
  | 'UnBlocklisted'
  | 'Unpause'
  | 'Upgraded';
export interface FiatTokenV2EventsContext {
  Allowlisted(...parameters: any): EventFilter;
  AllowlisterChanged(...parameters: any): EventFilter;
  Approval(...parameters: any): EventFilter;
  AuthorizationCanceled(...parameters: any): EventFilter;
  AuthorizationUsed(...parameters: any): EventFilter;
  Blocklisted(...parameters: any): EventFilter;
  BlocklisterChanged(...parameters: any): EventFilter;
  Burn(...parameters: any): EventFilter;
  Mint(...parameters: any): EventFilter;
  MinterAdminChanged(...parameters: any): EventFilter;
  MinterConfigured(...parameters: any): EventFilter;
  MinterRemoved(...parameters: any): EventFilter;
  OwnershipTransferred(...parameters: any): EventFilter;
  Pause(...parameters: any): EventFilter;
  PauserChanged(...parameters: any): EventFilter;
  RescuerChanged(...parameters: any): EventFilter;
  Transfer(...parameters: any): EventFilter;
  UnAllowlisted(...parameters: any): EventFilter;
  UnBlocklisted(...parameters: any): EventFilter;
  Unpause(...parameters: any): EventFilter;
  Upgraded(...parameters: any): EventFilter;
}
export type FiatTokenV2MethodNames =
  | 'CANCEL_AUTHORIZATION_TYPEHASH'
  | 'PERMIT_TYPEHASH'
  | 'RECEIVE_WITH_AUTHORIZATION_TYPEHASH'
  | 'TRANSFER_WITH_AUTHORIZATION_TYPEHASH'
  | '_domainSeparatorV4'
  | 'allowance'
  | 'allowlist'
  | 'allowlistLimitAmount'
  | 'allowlister'
  | 'approve'
  | 'authorizationState'
  | 'balanceOf'
  | 'blocklist'
  | 'blocklister'
  | 'burn'
  | 'cancelAuthorization'
  | 'configureMinter'
  | 'currency'
  | 'decimals'
  | 'decreaseAllowance'
  | 'increaseAllowance'
  | 'initializeV2'
  | 'isAllowlisted'
  | 'isBlocklisted'
  | 'isMinter'
  | 'mint'
  | 'minterAdmin'
  | 'minterAllowance'
  | 'name'
  | 'nonces'
  | 'owner'
  | 'pause'
  | 'paused'
  | 'pauser'
  | 'permit'
  | 'proxiableUUID'
  | 'receiveWithAuthorization'
  | 'removeMinter'
  | 'rescueERC20'
  | 'rescuer'
  | 'symbol'
  | 'totalSupply'
  | 'transfer'
  | 'transferFrom'
  | 'transferOwnership'
  | 'transferWithAuthorization'
  | 'unAllowlist'
  | 'unBlocklist'
  | 'unpause'
  | 'updateAllowlister'
  | 'updateBlocklister'
  | 'updateMinterAdmin'
  | 'updatePauser'
  | 'updateRescuer'
  | 'upgradeTo'
  | 'upgradeToAndCall';
export interface AllowlistedEventEmittedResponse {
  _account: string;
}
export interface AllowlisterChangedEventEmittedResponse {
  newAllowlister: string;
}
export interface ApprovalEventEmittedResponse {
  owner: string;
  spender: string;
  value: BigNumberish;
}
export interface AuthorizationCanceledEventEmittedResponse {
  authorizer: string;
  nonce: Arrayish;
}
export interface AuthorizationUsedEventEmittedResponse {
  authorizer: string;
  nonce: Arrayish;
}
export interface BlocklistedEventEmittedResponse {
  _account: string;
}
export interface BlocklisterChangedEventEmittedResponse {
  newBlocklister: string;
}
export interface BurnEventEmittedResponse {
  burner: string;
  amount: BigNumberish;
}
export interface MintEventEmittedResponse {
  minter: string;
  to: string;
  amount: BigNumberish;
}
export interface MinterAdminChangedEventEmittedResponse {
  newMinterAdmin: string;
}
export interface MinterConfiguredEventEmittedResponse {
  minter: string;
  minterAllowedAmount: BigNumberish;
}
export interface MinterRemovedEventEmittedResponse {
  oldMinter: string;
}
export interface OwnershipTransferredEventEmittedResponse {
  previousOwner: string;
  newOwner: string;
}
export interface PauserChangedEventEmittedResponse {
  newAddress: string;
}
export interface RescuerChangedEventEmittedResponse {
  newRescuer: string;
}
export interface TransferEventEmittedResponse {
  from: string;
  to: string;
  value: BigNumberish;
}
export interface UnAllowlistedEventEmittedResponse {
  _account: string;
}
export interface UnBlocklistedEventEmittedResponse {
  _account: string;
}
export interface UpgradedEventEmittedResponse {
  implementation: string;
}
export interface FiatTokenV2 {
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  CANCEL_AUTHORIZATION_TYPEHASH(
    overrides?: ContractCallOverrides
  ): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  PERMIT_TYPEHASH(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  RECEIVE_WITH_AUTHORIZATION_TYPEHASH(
    overrides?: ContractCallOverrides
  ): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  TRANSFER_WITH_AUTHORIZATION_TYPEHASH(
    overrides?: ContractCallOverrides
  ): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  _domainSeparatorV4(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param owner Type: address, Indexed: false
   * @param spender Type: address, Indexed: false
   */
  allowance(
    owner: string,
    spender: string,
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _account Type: address, Indexed: false
   */
  allowlist(
    _account: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  allowlistLimitAmount(overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  allowlister(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param spender Type: address, Indexed: false
   * @param value Type: uint256, Indexed: false
   */
  approve(
    spender: string,
    value: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param authorizer Type: address, Indexed: false
   * @param nonce Type: bytes32, Indexed: false
   */
  authorizationState(
    authorizer: string,
    nonce: Arrayish,
    overrides?: ContractCallOverrides
  ): Promise<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param account Type: address, Indexed: false
   */
  balanceOf(
    account: string,
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
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
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _amount Type: uint256, Indexed: false
   */
  burn(
    _amount: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param authorizer Type: address, Indexed: false
   * @param nonce Type: bytes32, Indexed: false
   * @param v Type: uint8, Indexed: false
   * @param r Type: bytes32, Indexed: false
   * @param s Type: bytes32, Indexed: false
   */
  cancelAuthorization(
    authorizer: string,
    nonce: Arrayish,
    v: BigNumberish,
    r: Arrayish,
    s: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param minter Type: address, Indexed: false
   * @param minterAllowedAmount Type: uint256, Indexed: false
   */
  configureMinter(
    minter: string,
    minterAllowedAmount: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  currency(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  decimals(overrides?: ContractCallOverrides): Promise<number>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param spender Type: address, Indexed: false
   * @param decrement Type: uint256, Indexed: false
   */
  decreaseAllowance(
    spender: string,
    decrement: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param spender Type: address, Indexed: false
   * @param increment Type: uint256, Indexed: false
   */
  increaseAllowance(
    spender: string,
    increment: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  initializeV2(
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _account Type: address, Indexed: false
   */
  isAllowlisted(
    _account: string,
    overrides?: ContractCallOverrides
  ): Promise<boolean>;
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
   * @param account Type: address, Indexed: false
   */
  isMinter(
    account: string,
    overrides?: ContractCallOverrides
  ): Promise<boolean>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _to Type: address, Indexed: false
   * @param _amount Type: uint256, Indexed: false
   */
  mint(
    _to: string,
    _amount: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  minterAdmin(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param minter Type: address, Indexed: false
   */
  minterAllowance(
    minter: string,
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  name(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param owner Type: address, Indexed: false
   */
  nonces(owner: string, overrides?: ContractCallOverrides): Promise<BigNumber>;
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
   */
  pause(overrides?: ContractTransactionOverrides): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  paused(overrides?: ContractCallOverrides): Promise<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  pauser(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param owner Type: address, Indexed: false
   * @param spender Type: address, Indexed: false
   * @param value Type: uint256, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   * @param v Type: uint8, Indexed: false
   * @param r Type: bytes32, Indexed: false
   * @param s Type: bytes32, Indexed: false
   */
  permit(
    owner: string,
    spender: string,
    value: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: Arrayish,
    s: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  proxiableUUID(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param from Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   * @param value Type: uint256, Indexed: false
   * @param validAfter Type: uint256, Indexed: false
   * @param validBefore Type: uint256, Indexed: false
   * @param nonce Type: bytes32, Indexed: false
   * @param v Type: uint8, Indexed: false
   * @param r Type: bytes32, Indexed: false
   * @param s Type: bytes32, Indexed: false
   */
  receiveWithAuthorization(
    from: string,
    to: string,
    value: BigNumberish,
    validAfter: BigNumberish,
    validBefore: BigNumberish,
    nonce: Arrayish,
    v: BigNumberish,
    r: Arrayish,
    s: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param minter Type: address, Indexed: false
   */
  removeMinter(
    minter: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param tokenContract Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   * @param amount Type: uint256, Indexed: false
   */
  rescueERC20(
    tokenContract: string,
    to: string,
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  rescuer(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  symbol(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  totalSupply(overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param to Type: address, Indexed: false
   * @param value Type: uint256, Indexed: false
   */
  transfer(
    to: string,
    value: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param from Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   * @param value Type: uint256, Indexed: false
   */
  transferFrom(
    from: string,
    to: string,
    value: BigNumberish,
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
   * @param from Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   * @param value Type: uint256, Indexed: false
   * @param validAfter Type: uint256, Indexed: false
   * @param validBefore Type: uint256, Indexed: false
   * @param nonce Type: bytes32, Indexed: false
   * @param v Type: uint8, Indexed: false
   * @param r Type: bytes32, Indexed: false
   * @param s Type: bytes32, Indexed: false
   */
  transferWithAuthorization(
    from: string,
    to: string,
    value: BigNumberish,
    validAfter: BigNumberish,
    validBefore: BigNumberish,
    nonce: Arrayish,
    v: BigNumberish,
    r: Arrayish,
    s: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _account Type: address, Indexed: false
   */
  unAllowlist(
    _account: string,
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
   */
  unpause(
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _newAllowlister Type: address, Indexed: false
   */
  updateAllowlister(
    _newAllowlister: string,
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
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _newMinterAdmin Type: address, Indexed: false
   */
  updateMinterAdmin(
    _newMinterAdmin: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _newPauser Type: address, Indexed: false
   */
  updatePauser(
    _newPauser: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newRescuer Type: address, Indexed: false
   */
  updateRescuer(
    newRescuer: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newImplementation Type: address, Indexed: false
   */
  upgradeTo(
    newImplementation: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param newImplementation Type: address, Indexed: false
   * @param data Type: bytes, Indexed: false
   */
  upgradeToAndCall(
    newImplementation: string,
    data: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
}
