const Lib = artifacts.require("Lib");
const HackMe = artifacts.require("HackMe");
const Attack = artifacts.require("Attack");

contract("DelegateCall", async (accounts) => {
    it("should successfully perform the attack", async () => {
        const HackMeInstance = await HackMe.deployed();
        console.log(HackMeInstance.address);

        const AttackInstance = await Attack.deployed();
        await AttackInstance.attack();
        const hackMeaddress = await AttackInstance.hackMe();

        console.log(hackMeaddress);
        assert.equal(HackMeInstance.address, hackMeaddress, "HackMe's owner is AttackInstance")
    })

})

