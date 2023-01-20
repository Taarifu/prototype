require("@nomicfoundation/hardhat-toolbox");
const projectId = process.env.PROJECT_ID;
const privateKey = process.env.PRIVATE_KEY;
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    alfajores: {
      url: `https://celo-alfajores.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
    celo: {
      url: "https://forno.celo.org",
      accounts: [privateKey],
    },
  },
  solidity: "0.8.4",
};
