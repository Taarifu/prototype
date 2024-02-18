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
      accounts: ["80a5cf680930bb9ae1cba3071b4260aa101ac2fc13ec1fd6082e2e7b22a6f2ff"],
    },
    celo: {
      url: "https://forno.celo.org",
      accounts: ["80a5cf680930bb9ae1cba3071b4260aa101ac2fc13ec1fd6082e2e7b22a6f2ff"],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

};
