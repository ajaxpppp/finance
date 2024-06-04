const NewHackMe=artifacts.require("NewHackMe");
const NewAttack=artifacts.require("NewAttack");

contract("DelegateCall",async (accounts)=>{
      it("should fail perform the attack",async ()=>{
	      const HackMeInstance=await NewHackMe.deployed();
	      const AttackInstance=await NewAttack.deployed();

	      const hackMeowner=await HackMeInstance.owner();

	      await AttackInstance.attack();
	      assert.equal(hackMeowner,HackMeInstance.address,"HackMe's owner is AttackInstance");
	})
})
