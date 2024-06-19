export const contractAddress = "0x2f7a45a1198a897f2d549816fac87f7b52f8006d";
export const abi = [
      {
            "inputs": [
                  {
                        "internalType": "address",
                        "name": "_admin",
                        "type": "address"
                  }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
      },
      {
            "inputs": [
                  {
                        "internalType": "string",
                        "name": "_name",
                        "type": "string"
                  },
                  {
                        "internalType": "string",
                        "name": "_url",
                        "type": "string"
                  },
                  {
                        "internalType": "uint256",
                        "name": "_currentPrice",
                        "type": "uint256"
                  }
            ],
            "name": "addProduct",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
      },
      {
            "inputs": [],
            "name": "admin",
            "outputs": [
                  {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                  }
            ],
            "stateMutability": "view",
            "type": "function"
      },
      {
            "inputs": [
                  {
                        "internalType": "uint256",
                        "name": "index",
                        "type": "uint256"
                  },
                  {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                  }
            ],
            "name": "bid",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
      },
      {
            "inputs": [],
            "name": "getAllProducts",
            "outputs": [
                  {
                        "components": [
                              {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                              },
                              {
                                    "internalType": "string",
                                    "name": "url",
                                    "type": "string"
                              },
                              {
                                    "internalType": "uint256",
                                    "name": "currentPrice",
                                    "type": "uint256"
                              }
                        ],
                        "internalType": "struct MyBiddingPlatform.Product[]",
                        "name": "",
                        "type": "tuple[]"
                  }
            ],
            "stateMutability": "view",
            "type": "function"
      },
      {
            "inputs": [
                  {
                        "internalType": "uint256",
                        "name": "index",
                        "type": "uint256"
                  }
            ],
            "name": "getProduct",
            "outputs": [
                  {
                        "components": [
                              {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                              },
                              {
                                    "internalType": "string",
                                    "name": "url",
                                    "type": "string"
                              },
                              {
                                    "internalType": "uint256",
                                    "name": "currentPrice",
                                    "type": "uint256"
                              }
                        ],
                        "internalType": "struct MyBiddingPlatform.Product",
                        "name": "",
                        "type": "tuple"
                  }
            ],
            "stateMutability": "view",
            "type": "function"
      },
      {
            "inputs": [
                  {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                  }
            ],
            "name": "products",
            "outputs": [
                  {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                  },
                  {
                        "internalType": "string",
                        "name": "url",
                        "type": "string"
                  },
                  {
                        "internalType": "uint256",
                        "name": "currentPrice",
                        "type": "uint256"
                  }
            ],
            "stateMutability": "view",
            "type": "function"
      }
]