import React, { useContext, useState } from "react";
import Link from "next/link";
import { Web3Context } from "../contexts/Web3Context";
import { utils } from "ethers";

const Navbar = () => {
  const { connected, account, connectWallet, getCoinBalance, getContract } =
    useContext(Web3Context);

  const shortenAddress = (address) => {
    if (address)
      return (
        address.slice(0, 5) +
        "..." +
        address.slice(address.length - 4, address.length)
      );
  };
  const addUser = async (userAddress, userName, userAge, userInitialValue) => {
    const contractInstance = getContract();
    const response = await contractInstance.addUser(
      userAddress,
      userName,
      userAge,
      userInitialValue
    );
    const res = await response?.wait();
    console.log("add user response:", res);
  };
  const getUser = async (address) => {
    const contractInstance = getContract();
    const response = await contractInstance.getUser(address);
    // const res = await response?.wait()
    console.log("getuser: ", response);
    console.log("getuser: ", Number(response[1]));
    console.log("getuser: ", response[2].toString());
    console.log("getuser: ", parseFloat(response[3]));
  };

  const initialValue = { name: "", age: "", balance: "" };
  const [input, setInput] = useState(initialValue);
  const connectedAccount = shortenAddress(account);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };
  const submitInput = (e) => {
    e.preventDefault();
    console.log("inputData: ", input);
  };
  return (
    <nav className="navbar">
      <Link href="/" className="dapp-name">
        Digi Assets
      </Link>
      <div className="navlinks">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>

        <div className="">
          <button className="btn" onClick={connectWallet}>
            <span className="">
              {connected ? connectedAccount : "Connect Wallet"}
            </span>
          </button>
          <button className="btn" onClick={() => getCoinBalance(account)}>
            getBalance
          </button>
          <button onClick={() => addUser(account, "faruq", 45, Number(2))}>
            adduser
          </button>
          <button onClick={() => getUser(account)}>GetUser</button>
        </div>
      </div>

      <br />
      
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          style={{ border: "2px solid black" }}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          style={{ border: "2px solid black" }}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          name="age"
          style={{ border: "2px solid black" }}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="balance">Balance</label>
        <input
          type="text"
          id="balance"
          name="balance"
          style={{ border: "2px solid black" }}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="created">Created</label>
        <input
          type="text"
          id="created"
          name="created"
          style={{ border: "2px solid black" }}
          onChange={handleChange}
        />
        <br />
        <button style={{ border: "2px solid black" }} onClick={submitInput}>
          Submit
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
//
