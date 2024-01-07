const Faucet = artifacts.require("Faucet");
const OceanToken = artifacts.require("oceanToken");

module.exports = function(deployer){
    deployer.deploy(Faucet, OceanToken.address)
}
