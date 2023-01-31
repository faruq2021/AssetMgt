import React, { useContext, useState } from "react";
import Link from "next/link";
import { Web3Context } from "../contexts/Web3Context";
import Nav from "@/components/Nav";

import { utils } from "ethers";
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import "../pages/auditAsset";

const AuditAsset = () => {
  const {
    connected,
    account,
    connectWallet,
    balance,
    getCoinBalance,
    getContract,
  } = useContext(Web3Context);
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
    <nav className="navbar" style={{ padding: 20 }}>
      <Nav />

      <Link href="/" className="dapp-name">
        {/* Digi Assets */}
      </Link>

      <div className="navlinks">
        <Link href="/about">{/* About */}</Link>
        <Link href="/contact">{/* Contact */}</Link>

        <div className="audit-bar">
          <Wrap spacing={10}>
            <WrapItem>
              <Button variant="outline" className="btn" onClick={connectWallet}>
                <span className="">
                  {connected ? connectedAccount : "Connect Wallet"}
                </span>
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                variant="outline"
                className="btn"
                onClick={() => getCoinBalance(account)}
              >
                getBalance
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                variant="outline"
                onClick={() => addUser(account, "faruq", 45, Number(2))}
              >
                adduser
              </Button>
            </WrapItem>
            <WrapItem>
              <Button variant="outline" onClick={() => getUser(account)}>
                GetUser
              </Button>
            </WrapItem>
          </Wrap>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "lightblue",
          height: 70,
          width: 500,
          margin: 20,
          padding: 10,
        }}
      >
        <p>Address: {account}</p>
        <p>Balance: {balance}</p>
      </div>

      <Grid h="200px" gridTemplateColumns={"700px 1fr"}>
        <GridItem>
          <form>
            <h1>Fill the form to register as a user</h1>
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                type="text"
                id="name"
                name="name"
                style={{ border: "2px solid black" }}
                onChange={handleChange}
              />
            </FormControl>
            {/* <FormControl>
              <FormLabel htmlFor="address">Address</FormLabel>
              <Input
                type="text"
                id="address"
                name="address"
                style={{ border: "2px solid black" }}
                value={account}
                // onChange={handleChange}
              />
            </FormControl> */}

            <FormControl>
              <FormLabel htmlFor="age">Age</FormLabel>
              <Input
                type="text"
                id="age"
                name="age"
                style={{ border: "2px solid black" }}
                onChange={handleChange}
              />
            </FormControl>

            {/* <FormControl>
              <FormLabel htmlFor="balance">Balance</FormLabel>
              <Input
                type="text"
                id="balance"
                name="balance"
                style={{ border: "2px solid black" }}
                // onChange={handleChange}
                value={balance}
              />
            </FormControl> */}

            <FormControl>
              <FormLabel htmlFor="created">Created</FormLabel>
              <Input
                type="text"
                id="created"
                name="created"
                style={{ border: "2px solid black" }}
                onChange={handleChange}
              />
            </FormControl>
            <Button style={{ border: "2px solid black" }} onClick={submitInput}>
              Submit
            </Button>
          </form>
        </GridItem>
      </Grid>
    </nav>
  );
};

export default AuditAsset;
