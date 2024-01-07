const VendingMachine = artifacts.require("VendingMachine");
const OceanToken = artifacts.require("oceanToken");
module.exports = function(deployer){
    deployer.deploy(VendingMachine);
    deployer.deploy(OceanToken,1000000);
    
};