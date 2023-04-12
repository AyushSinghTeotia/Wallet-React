import React, { useState} from "react";
import { ethers } from "ethers";

export default function (props) {
  const [inputAddress, setAddress] = useState("");
  const [inputAmount, setAmount] = useState(0);
  const walletAddress ="0x5C9BFf4b5F431404216AdE36e9C4A118E0E73161";
  const walletAbi = [{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"accountBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sendEthContract","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_user","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"sendEthUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_num","type":"uint256"}],"name":"setValue","outputs":[],"stateMutability":"nonpayable","type":"function"}];

  const sendEthUser = async (userAddress, amount) => {
  const provider =new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts",[]);
  const signer=provider.getSigner();
  const contract=new ethers.Contract(walletAddress,walletAbi,signer);
    try {
      // Convert amount to wei
      const amountWei = ethers.utils.parseEther(amount.toString());
      // Call the function
      const tx = await contract.sendEthUser(userAddress, amountWei);
      await tx.wait();
      // Transaction successful
      console.log("Transaction successful");
    } catch (error) {
      // Handle error
      console.error("Error sending Ether:", error);
    }
  };

  //sendEthUser("0x600fe3f28cEE0927a3060e1557FD6752602cB9Db",0.1)

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEthUser(inputAddress, inputAmount);
  }
  
 return (
    <>
    <div>
        <h1 className="text-center">{props.heading}</h1>
        <h5 className="text-center">0xf8ddD6b598cD6724f6382B614315BfF1268049cC</h5>
    <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputAddress">User address</label>
    <input type="text" className="form-control my-2" id="exampleInputAddress" aria-describedby="addressHelp" placeholder="Address" value={inputAddress} onChange={(e) =>setAddress(e.target.value)}  />
   
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputAmount">Amount</label>
    <input type="number" className="form-control" id="exampleInputAmount" placeholder="value" value={inputAmount} onChange={(e) => setAmount(e.target.value)}/>
  </div>
  {/* <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
  </div> */}
  <button type="submit" className="btn btn-primary my-3" >Sent ETH</button>
</form>
    </div>

    </>
    
  )
}
