import { bondingCurveAbi } from "../contract/abi";
import Web3 from "web3";

// create instance of web3 using nework RPC url

let web3 = new Web3(process.env.REACT_APP_RPC_URL);

// calculate bzz token

export const getEquivalentBzzTokens = async (bzzSupply, daiAmount) => {
  try {
    if (bzzSupply && daiAmount && web3) {
      // get contract address
      const BONDING_CURVE_ADDRESS = process.env.REACT_APP_BONDING_CURVE_ADDRESS;

      // create contract instance from web3 by passing contract abu and address
      const bondingCurve = await new web3.eth.Contract(
        bondingCurveAbi,
        BONDING_CURVE_ADDRESS
      );

      // define 1 dai with 1000000 precision
      let dai = (1 * 10) ^ 6;

      // convert supply into ether unit
      bzzSupply = await web3.utils.toWei(bzzSupply, "ether");

      // call buyPrice method to get the price of 1 dai token
      let receivingAmount = await bondingCurve.methods
        .buyPrice(dai.toString(), bzzSupply.toString())
        .call();

      // convert value of price from ether
      receivingAmount = await web3.utils.fromWei(receivingAmount, "ether");

      // calculate bzz token for given dai amount
      let bzzToken = daiAmount / ((receivingAmount * 10) ^ 6);

      return bzzToken;
    } else {
      return "";
    }
  } catch (err) {
    console.log("err", err);
  }
};
