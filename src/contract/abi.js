

export const bondingCurveAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalSupply",
        type: "uint256",
      },
    ],
    name: "buyPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "collateralRequired",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalSupply",
        type: "uint256",
      },
    ],
    name: "sellReward",
    outputs: [
      {
        internalType: "uint256",
        name: "collateralReward",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

