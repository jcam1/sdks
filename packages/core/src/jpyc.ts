import { Uint256, Uint8 } from 'soltypes';
import { getContract, GetContractReturnType, Hash, WalletClient } from 'viem';

import { IJPYC, JPYC_V2_ABI } from './interfaces';
import {
  Address,
  Bytes32,
  InvalidAddressError,
  InvalidTransactionError,
  isValidAddress,
  LOCAL_PROXY_ADDRESS,
  V2_PROXY_ADDRESS,
} from './utils';

export class JPYC implements IJPYC {
  private readonly contractAddress: Address =
    process.env.SDK_ENV === 'local' ? LOCAL_PROXY_ADDRESS : V2_PROXY_ADDRESS;
  private readonly contractAbi: unknown[] = JPYC_V2_ABI;
  private readonly contract: GetContractReturnType<typeof this.contractAbi, WalletClient>;
  private readonly DECIMALS = 18;

  constructor(params: { client: WalletClient }) {
    if (!isValidAddress({ address: this.contractAddress })) {
      throw new InvalidAddressError(this.contractAddress);
    }
    this.contract = getContract({
      address: this.contractAddress,
      abi: this.contractAbi,
      client: params.client,
    });
  }

  /**
   * View Functions
   */

  async isMinter(params: { account: Address }): Promise<boolean> {
    const resp = await this.contract.read.isMinter([params.account]);

    return resp as boolean;
  }

  async minterAllowance(params: { minter: Address }): Promise<Uint256> {
    const resp = await this.contract.read.minterAllowance([params.minter]);

    return Uint256.from((resp as bigint).toString());
  }

  async totalSupply(): Promise<Uint256> {
    const resp = await this.contract.read.totalSupply();

    return Uint256.from((resp as bigint).toString());
  }

  async balanceOf(params: { account: Address }): Promise<Uint256> {
    const resp = await this.contract.read.balanceOf([params.account]);
    const rawBalance = BigInt((resp as bigint).toString());
    const adjustedBalance = rawBalance / BigInt(10 ** this.DECIMALS);
    return Uint256.from(adjustedBalance.toString());
  }

  async allowance(params: { owner: Address; spender: Address }): Promise<Uint256> {
    const resp = await this.contract.read.allowance([params.owner, params.spender]);

    return Uint256.from((resp as bigint).toString());
  }

  async nonces(params: { owner: Address }): Promise<Uint256> {
    const resp = await this.contract.read.nonces([params.owner]);

    return Uint256.from((resp as bigint).toString());
  }

  /**
   * Regular Functions
   */

  async configureMinter(params: { minter: Address; minterAllowedAmount: Uint256 }): Promise<Hash> {
    const args = [params.minter, params.minterAllowedAmount];

    try {
      await this.contract.simulate.configureMinter(args);
    } catch (error) {
      throw new InvalidTransactionError(error);
    }

    return await this.contract.write.configureMinter(args);
  }

  async mint(params: { to: Address; amount: Uint256 }): Promise<Hash> {
    const args = [params.to, params.amount];

    try {
      await this.contract.simulate.mint(args);
    } catch (error) {
      throw new InvalidTransactionError(error);
    }

    return await this.contract.write.mint(args);
  }

  async transfer(params: { to: Address; value: Uint256 }): Promise<Hash> {
    const rawValue = BigInt(params.value.toString());
    const adjustedValue = rawValue * BigInt(10 ** this.DECIMALS);
    const args = [params.to, Uint256.from(adjustedValue.toString())];

    try {
      await this.contract.simulate.transfer(args);
    } catch (error) {
      throw new InvalidTransactionError(error);
    }

    return await this.contract.write.transfer(args);
  }

  async transferFrom(params: { from: Address; to: Address; value: Uint256 }): Promise<Hash> {
    const args = [params.from, params.to, params.value];

    try {
      await this.contract.simulate.transferFrom(args);
    } catch (error) {
      throw new InvalidTransactionError(error);
    }

    return await this.contract.write.transferFrom(args);
  }

  async transferWithAuthorization(params: {
    from: Address;
    to: Address;
    value: Uint256;
    validAfter: Uint256;
    validBefore: Uint256;
    nonce: Bytes32;
    v: Uint8;
    r: Bytes32;
    s: Bytes32;
  }): Promise<Hash> {
    const args = [
      params.from,
      params.to,
      params.value,
      params.validAfter,
      params.validBefore,
      params.nonce,
      params.v,
      params.r,
      params.s,
    ];

    try {
      await this.contract.simulate.transferWithAuthorization(args);
    } catch (error) {
      throw new InvalidTransactionError(error);
    }

    return await this.contract.write.transferWithAuthorization(args);
  }

  async receiveWithAuthorization(params: {
    from: Address;
    to: Address;
    value: Uint256;
    validAfter: Uint256;
    validBefore: Uint256;
    nonce: Bytes32;
    v: Uint8;
    r: Bytes32;
    s: Bytes32;
  }): Promise<Hash> {
    const args = [
      params.from,
      params.to,
      params.value,
      params.validAfter,
      params.validBefore,
      params.nonce,
      params.v,
      params.r,
      params.s,
    ];

    try {
      await this.contract.simulate.receiveWithAuthorization(args);
    } catch (error) {
      throw new InvalidTransactionError(error);
    }

    return await this.contract.write.receiveWithAuthorization(args);
  }

  async cancelAuthorization(params: {
    authorizer: Address;
    nonce: Bytes32;
    v: Uint8;
    r: Bytes32;
    s: Bytes32;
  }): Promise<Hash> {
    const args = [params.authorizer, params.nonce, params.v, params.r, params.s];

    try {
      await this.contract.simulate.cancelAuthorization(args);
    } catch (error) {
      throw new InvalidTransactionError(error);
    }

    return await this.contract.write.cancelAuthorization(args);
  }

  async approve(params: { spender: Address; value: Uint256 }): Promise<Hash> {
    const args = [params.spender, params.value];

    try {
      await this.contract.simulate.approve(args);
    } catch (error) {
      throw new InvalidTransactionError(error);
    }

    return await this.contract.write.approve(args);
  }

  async increaseAllowance(params: { spender: Address; increment: Uint256 }): Promise<Hash> {
    const args = [params.spender, params.increment];

    try {
      await this.contract.simulate.increaseAllowance(args);
    } catch (error) {
      throw new InvalidTransactionError(error);
    }

    return await this.contract.write.increaseAllowance(args);
  }

  async decreaseAllowance(params: { spender: Address; decrement: Uint256 }): Promise<Hash> {
    const args = [params.spender, params.decrement];

    try {
      await this.contract.simulate.decreaseAllowance(args);
    } catch (error) {
      throw new InvalidTransactionError(error);
    }

    return await this.contract.write.decreaseAllowance(args);
  }

  async permit(params: {
    owner: Address;
    spender: Address;
    value: Uint256;
    deadline: Uint256;
    v: Uint8;
    r: Bytes32;
    s: Bytes32;
  }): Promise<Hash> {
    const args = [
      params.owner,
      params.spender,
      params.value,
      params.deadline,
      params.v,
      params.r,
      params.s,
    ];

    try {
      await this.contract.simulate.permit(args);
    } catch (error) {
      throw new InvalidTransactionError(error);
    }

    return await this.contract.write.permit(args);
  }
}
