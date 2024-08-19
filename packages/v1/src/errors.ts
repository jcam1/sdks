import { getSupportedChainNames, getSupportedNetworkNames } from '../../core';

/**
 * Custom error abstract class
 */

abstract class JpycSdkError extends Error {
  constructor(message: string) {
    super(message);
  }
}

/**
 * Custom error classes
 */

export class InvalidChainNameError extends JpycSdkError {
  constructor(chainName: string) {
    super(`Invalid chain "${chainName}" (supported chain names = {${getSupportedChainNames().join(', ')}}).`);
  }
}

export class InvalidNetworkNameError extends JpycSdkError {
  constructor(chainName: string, networkName: string) {
    super(`Invalid network "${networkName}" (supported network names = {${getSupportedNetworkNames({ chainName: chainName }).join(', ')}}).`);
  }
}

export class InvalidAddressError extends JpycSdkError {
  constructor(address: string) {
    super(`Invalid address "${address}".`);
  }
}

export class InvalidTransactionError extends JpycSdkError {
  constructor(error: unknown) {
    super(`Transaction simulation failed.\n${error}`);
  }
}
