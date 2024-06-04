const SupplyChainFin=artifacts.require("SupplyChainFin");

module.exports=function(deployer){
	deployer.deploy(SupplyChainFin,"CBRC");
};
