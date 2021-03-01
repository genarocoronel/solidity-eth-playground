import { task } from "hardhat/config";
import { HardhatUserConfig } from "hardhat/config";

import "@nomiclabs/hardhat-waffle";
import "hardhat-gas-reporter";
import "@eth-optimism/plugins/hardhat/compiler";
import "@eth-optimism/plugins/hardhat/ethers";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version: "0.7.3",
    settings: { optimizer: { enabled: true, runs: 1000 } },
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 100,
  },
};

export default config;
