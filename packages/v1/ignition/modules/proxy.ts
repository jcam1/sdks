import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export const proxyModule = buildModule("ProxyModule", (m) => {
  // Deploy JPYCv2 Contract
  const jpycV2Contract = m.contract("FiatTokenV1");

  // Deploy proxy contract
  const proxyContract = m.contract("ERC1967Proxy", [
    jpycV2Contract,
    "0x",
  ]);

  return { proxyContract };
});
