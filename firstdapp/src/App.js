import React from 'react'
import './App.css';
//import {useState} from "react";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SentUSDT from './components/sentUSDT';
//const {ethers} =require("ethers");


 function App() {
//   const walletAddress ="0x5C9BFf4b5F431404216AdE36e9C4A118E0E73161";
//   const walletAbi = [{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"accountBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sendEthContract","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_user","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"sendEthUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_num","type":"uint256"}],"name":"setValue","outputs":[],"stateMutability":"nonpayable","type":"function"}];
//   const writeContract=async()=>{
    // const provider =new ethers.providers.Web3Provider(window.ethereum);
    // await provider.send("eth_requestAccounts",[]);
    // const signer=provider.getSigner();
    // const contract=new ethers.Contract(walletAddress,walletAbi,signer);
    // const balance= await contract.contractBalance();
    // const balanceEther= ethers.utils.formatEther(balance);
    //return balanceEther;
     //for payble in contract 
    //await contract.sendEthUser("0x5C9BFf4b5F431404216AdE36e9C4A118E0E73161","0.1")
    //await contract.sendEthUser("0xC3AB53B3FEDF6b5DE738Aab8cD8D7A1E52cD43CE", 0.1).send({ from: "0x5C9BFf4b5F431404216AdE36e9C4A118E0E73161"});
//  }
//   writeContract();
return (
  <>
  <div>
 <Router>
  <div className="App"></div>
    <Navbar title ="My wallet" />
   <div className="container my-4">
   
   <Switch>
   <Route path="/sentusdt">
         <SentUSDT/>
    </Route>
   <Route path="/about">
          <About/>
    </Route>
    <Route path="/">
          <TextForm heading="Wallet Contract"/>
    </Route>
          
    </Switch>
   </div>
  </Router>
  </div>
  </>);
}

export default App;
