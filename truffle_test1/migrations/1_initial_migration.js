const Lib=artifacts.require("Lib");
const HandMe=artifacts.require("HackMe");
const Attack=artifacts.require("Attack");

module.exports=async function(deployer){
	await deployer.deploy(Lib);
	deployer.deploy(Lib,HackMe);
	await deployer.deploy(HackMe);
	await deployer.deploy(Attack,HackMe.address);
}
