const SupplyChainFin=artifacts.require("SupplyChainFin");

contract("SupplyChainFin",(accounts)=>{
	let Instance;
	beforeEach(async()=>{
		Instance=await SupplyChainFin.deployed();
	});
	it("test getCompany",async ()=>{
		for(var i=0;i<5;i++){
			await Instance.addCompany("company"+(i+1),accounts[i]);
		}
		var companyInfo=await Instance.getCompany(accounts[2]);
		assert.equal(companyInfo[0],"company1","companyName not exit");
	})

	it("test getBank",async()=>{
		for(var i=0;i<2;i++){
			await Instance.addBank("bank"+(i+1),accounts[i],1000);
		}
		var bankInfo=await Instance.getBank(accounts[0]);
		assert.equal(bankInfo[0],"bank1","bankName not exit");
	})
});
