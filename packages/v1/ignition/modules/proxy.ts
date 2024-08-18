import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { Uint8 } from 'soltypes';
import { encodeFunctionData } from 'viem';

import { JPYC_V2_ABI } from '../../src';

export const proxyModule = buildModule("ProxyModule", (m) => {
  // Deploy JPYCv2 contract
  const jpycV2Contract = m.contract("FiatTokenV1");

  // Deploy proxy contract & initialize JPYCv2 contract
  const encodedInitializationCall = encodeFunctionData({
    abi: JPYC_V2_ABI,
    functionName: 'initialize',
    args: [
      'JPY Coin',
      'JPYC',
      'Yen',
      Uint8.from('18'),
      '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
      '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
      '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
      '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
      '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    ],
  });

  const proxyContract = m.contract("ERC1967Proxy", [
    jpycV2Contract,
    encodedInitializationCall,
  ]);

  return { proxyContract };
});
