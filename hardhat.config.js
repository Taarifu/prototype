require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    alfajores: {
      url: "https://celo-alfajores.infura.io/v3/136854356e1f4ec594f7f4caeb52488b",
      accounts: [
        "bfdf8f1b00890293830c187af1e50799fd30aed642152331b01548cc9e69e8b3",
      ],
      chainId: 44787,
    },
    celo: {
      url: "https://forno.celo.org",
      accounts: [
        "bfdf8f1b00890293830c187af1e50799fd30aed642152331b01548cc9e69e8b3",
      ],
      chainId: 42220,
    },
  },
  solidity: "0.8.4",
};
