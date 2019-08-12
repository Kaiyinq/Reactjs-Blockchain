const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),

  networks: {
    ganacheTest: {
      host: "localhost",
      port: 8545, // can use 7545 too
      network_id: "*"
    }
  }
};
