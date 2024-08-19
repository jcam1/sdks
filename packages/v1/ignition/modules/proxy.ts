import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';
import { Uint8 } from 'soltypes';
import { encodeFunctionData } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

import { JPYC_V2_ABI } from '../../src';
import { Address } from '../../../core/src';

export const proxyModule = buildModule('ProxyModule', (m) => {
  // Deploy JPYCv2 contract
  const jpycV2Contract = m.contract('FiatTokenV1');

  // Deploy proxy contract & initialize JPYCv2 contract
  const account = privateKeyToAccount(process.env.PRIVATE_KEY as Address);
  const encodedInitializationCall = encodeFunctionData({
    abi: JPYC_V2_ABI,
    functionName: 'initialize',
    args: [
      'JPY Coin',
      'JPYC',
      'Yen',
      Uint8.from('18'),
      account.address,
      account.address,
      account.address,
      account.address,
      account.address,
    ],
  });

  const proxyContract = m.contract('ERC1967Proxy', [jpycV2Contract, encodedInitializationCall]);

  return { proxyContract };
});
