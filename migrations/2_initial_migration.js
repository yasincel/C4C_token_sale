const C4CToken = artifacts.require("./C4CToken.sol");

module.exports = function (deployer) {
  deployer.deploy(C4CToken);
};
