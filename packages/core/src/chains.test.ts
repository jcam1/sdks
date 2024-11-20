import {
  getSupportedChainNames,
  getSupportedNetworkNames,
  isValidChainName,
  isValidNetworkName,
} from './';

describe('Unit tests of chain utility functions', () => {
  describe('Unit tests of getSupportedChainNames()', () => {
    test('returns correct chains', () => {
      const supportedChainNames = getSupportedChainNames();
      expect(supportedChainNames).toStrictEqual([
        'local',
        'ethereum',
        'polygon',
        'gnosis',
        'avalanche',
        'astar',
        'shiden',
      ]);
    });
  });

  describe('Unit tests of isValidChainName()', () => {
    test('returns true if valid chain name', () => {
      const chainName = 'ethereum';
      expect(isValidChainName({ chainName: chainName })).toStrictEqual(true);
    });

    test('returns false if invalid chain name', () => {
      const chainName = 'invalidchain';
      expect(isValidChainName({ chainName: chainName })).toStrictEqual(false);
    });
  });

  describe('Unit tests of getSupportedNetworkNames()', () => {
    test('returns correct networks for "local" chain', () => {
      const supportedNetworkNames = getSupportedNetworkNames({ chainName: 'local' });
      expect(supportedNetworkNames).toStrictEqual(['mainnet']);
    });

    test('returns correct networks for "ethereum" chain', () => {
      const supportedNetworkNames = getSupportedNetworkNames({ chainName: 'ethereum' });
      expect(supportedNetworkNames).toStrictEqual(['mainnet', 'goerli', 'sepolia']);
    });

    test('returns correct networks for "polygon" chain', () => {
      const supportedNetworkNames = getSupportedNetworkNames({ chainName: 'polygon' });
      expect(supportedNetworkNames).toStrictEqual(['mainnet', 'amoy']);
    });

    test('returns correct networks for "gnosis" chain', () => {
      const supportedNetworkNames = getSupportedNetworkNames({ chainName: 'gnosis' });
      expect(supportedNetworkNames).toStrictEqual(['mainnet', 'chiado']);
    });

    test('returns correct networks for "avalanche" chain', () => {
      const supportedNetworkNames = getSupportedNetworkNames({ chainName: 'avalanche' });
      expect(supportedNetworkNames).toStrictEqual(['mainnet', 'fuji']);
    });

    test('returns correct networks for "astar" chain', () => {
      const supportedNetworkNames = getSupportedNetworkNames({ chainName: 'astar' });
      expect(supportedNetworkNames).toStrictEqual(['mainnet']);
    });

    test('returns correct networks for "shiden" chain', () => {
      const supportedNetworkNames = getSupportedNetworkNames({ chainName: 'shiden' });
      expect(supportedNetworkNames).toStrictEqual(['mainnet']);
    });
  });

  describe('Unit tests of isValidNetworkName()', () => {
    test('returns true if valid network name', () => {
      const chainName = 'ethereum';
      const networkName = 'goerli';
      expect(
        isValidNetworkName({
          chainName: chainName,
          networkName: networkName,
        }),
      ).toStrictEqual(true);
    });

    test('returns false if invalid chain name', () => {
      const chainName = 'invalidchain';
      const networkName = 'goerli';
      expect(
        isValidNetworkName({
          chainName: chainName,
          networkName: networkName,
        }),
      ).toStrictEqual(false);
    });

    test('returns false if invalid network name', () => {
      const chainName = 'ethereum';
      const networkName = 'invalidnetwork';
      expect(
        isValidNetworkName({
          chainName: chainName,
          networkName: networkName,
        }),
      ).toStrictEqual(false);
    });
  });
});
