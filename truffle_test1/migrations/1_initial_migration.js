const Lib = artifacts.require("Lib");
const HackMe = artifacts.require("HackMe");
const Attack = artifacts.require("Attack");

module.exports = async function(deployer) {
  await deployer.deploy(Lib);
  await deployer.deploy(HackMe,Lib.address);
  await deployer.deploy(Attack, HackMe.address);
};
