const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/0f1d34179ba34aedad509904d800610f');
const queryblockchain =async()=>{
    try{
        const blocknumber=await provider.getBlockNumber();
        const balance= await provider.getBalance("0x600fe3f28cEE0927a3060e1557FD6752602cB9Db")
        const balanceEther= ethers.utils.formatEther (balance);
        return balanceEther;
        
    }
    catch(err){
        console.log("error",err);

    }
    
}
queryblockchain().then((result)=>{
    console.log("ETHer",result);

})

