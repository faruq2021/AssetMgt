import React, {createContext,useEffect, useState} from 'react'
import {Contract, ethers, utils} from "ethers"
import contractAbi from "../abi/assetmgt.json"


export const Web3Context = createContext(null)
const contractAddress = "0xEdF1c3E826eAC9E333fA548FDf910C86BbE14378"

function Web3ContextProvider({children}) {
    const [account, setAccount] = useState(null)
    const [connected, setConnected] = useState(false)
    const [provider, setProvider] = useState(null)
    const [signer, setSigner] = useState(null)
    const [balance, setBalance] = useState(0)
    const chainId = 5
    // if (typeof window !== undefined){
    //      setProvider(new ethers.providers.Web3Provider(typeof window !== undefined ? window?.ethereum: null)) 
    // }

    useEffect(()=>{
        if(typeof window !== 'undefined'){
            setProvider(new ethers.providers.Web3Provider(window.ethereum))
            provider && setSigner(provider.getSigner(account))
        }
    },[])
    
    const connectWallet = async ()=> {
        if(window.ethereum || window.web3) {
            try{
                const accounts = await window.ethereum.request({
                    method:"eth_requestAccounts"
                })
                setAccount(accounts[0])
                await eagerConnect() 
                if(connected){
                    alert("Connected Successfully") 
                    window.location.reload()
                }
            }catch(error){
                console.log("error on connect wallet:", error)
            }
        } else {
            alert("Please install metamask")
        }
    }
    
    const eagerConnect = async()=> {
        const networkId = await window.ethereum.request({
            method: "eth_chainId"
        })
        if(Number(networkId)!== chainId) {
            setConnected(false)
            return alert("You are currently connected to an unsupported network, please switch to Goerli testnet")
        }
        const accounts = await provider.listAccounts()
        if(!accounts.length) return 
        setConnected(true)
    }

    const getContract = ()=> {
        console.log("signer: ", signer)
        if(signer){
            const contractInstance = new Contract(contractAddress, contractAbi, signer)
        return contractInstance
        }
        


    }
    const getCoinBalance = async(address) => {
        if(connected) {
            try{
                const bal = await provider.getBalance(address) 
                const formatedBalance = utils.formatUnits(bal, 18)
                console.log(Number(formatedBalance).toFixed(4))
            }catch(error){
                console.log(error)
            }
        }
    }
    const value = {connectWallet, account, connected, getContract,getCoinBalance }
  return (
    <Web3Context.Provider value={value}>{children}</Web3Context.Provider> 
  )
}

export default Web3ContextProvider 