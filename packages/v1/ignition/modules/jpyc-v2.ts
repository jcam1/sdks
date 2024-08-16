import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

import { proxyModule } from './proxy';

export const jpycV2Module = buildModule("JPYCV2Module", (m) => {
  const { proxyContract } = m.useModule(proxyModule);

  const jpycV2Contract = m.contractAt("FiatTokenV1", proxyContract);

  return { jpycV2Contract };
});
