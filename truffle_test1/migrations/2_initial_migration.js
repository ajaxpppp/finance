const Lib=artifacts.require("NewLib");
const HackMe=artifacts.require("NewHackMe");
const Attack=artifacts.require("NewAttack");

module.exports=async function(deployer){
	await deployer.deploy(Lib);
	deployer.link(Lib,HackMe);
	await deployer.deploy(HackMe);
	await deployer.deploy(Attack,HackMe.address);
}
