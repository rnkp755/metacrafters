"use client"
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { contractAddress, abi } from '../../config';
import Card from './Card';

export default function Home() {
      const [products, setProducts] = useState([]);
      const [state, setState] = useState({
            provider: null,
            account: null,
            chainId: null,
            signer: null,
      })
      const [contract, setContract] = useState(null);
      const [connecting, setConnecting] = useState(false);

      const [productToBeAdded, setProductToBeAdded] = useState({
            name: "",
            url: "",
            amount: 0
      })

      const connectWallet = async () => {
            try {
                  setConnecting(true);
                  if (window.ethereum === null) {
                        alert("Metamsk is not installed");
                  }
                  const accounts = await window.ethereum.request({
                        method: 'eth_requestAccounts'
                  })

                  let chainIdHex = await window.ethereum.request({
                        method: 'eth_chainId'
                  })
                  let chainId = parseInt(chainIdHex, 16)

                  let selectedAccount = accounts[0];
                  if (!selectedAccount) {
                        alert("No ethereum accounts available")
                  }
                  let provider = new ethers.BrowserProvider(window.ethereum);
                  let signer = await provider.getSigner();
                  let contract = new ethers.Contract(contractAddress, abi, signer);

                  setState({
                        provider: provider,
                        account: selectedAccount,
                        chainId: chainId,
                        signer: signer
                  })
                  setContract(contract);
            } catch (error) {
                  alert("Error connecting to MetaMask")
            }
            finally {
                  setConnecting(false);
            }
      }

      const addProduct = async () => {
            try {
                  if (productToBeAdded.name.trim() === "" || productToBeAdded.url.trim() === "" || productToBeAdded.amount <= 0) {
                        alert("Please fill all the fields");
                        return;
                  }
                  console.log("Product to be added: ", productToBeAdded);
                  const tx = await contract.addProduct(productToBeAdded.name, productToBeAdded.url, productToBeAdded.amount);
                  await tx.wait();
            } catch (error) {
                  console.error("Error Adding Product: ", error);
                  alert("Error Adding Product");
            } finally {
                  setProductToBeAdded({
                        name: "",
                        url: "",
                        amount: 0
                  })
                  fetchData();
            }
      }

      const fetchData = async () => {
            try {
                  if (contract) {
                        const productsFromContract = await contract.getAllProducts();
                        const formattedProducts = productsFromContract.map((product, index) => ({
                              id: index,
                              name: product[0],
                              url: product[1],
                              currentPrice: product[2]
                        }));
                        console.log("Formatted Products: ", formattedProducts);
                        setProducts(formattedProducts);
                  }
            } catch (error) {
                  alert("Error fetching products");
            }
      };

      const handleBid = async (productId, bidAmount) => {
            try {
                  console.log("Bidding: ", productId, bidAmount);
                  if (bidAmount <= products[productId].currentPrice) {
                        alert("Can not bid less than current bid");
                        return;
                  }
                  const tx = await contract.bid(productId, bidAmount);
                  await tx.wait();
            } catch (error) {
                  console.error("Error Bidding: ", error);
                  alert("Error Bidding");
            } finally {
                  fetchData();
            }
      }

      useEffect(() => {
            fetchData();
      }, [contract]);

      return (
            <main className="flex min-h-screen flex-col items-center justify-around p-24">
                  <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={connectWallet}>
                        {connecting ? "Connecting..." : state.provider ? `Connected to ${state.account}` : "Connect Wallet"}
                  </button>

                  {
                        state.provider && (
                              <div class="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
                                    <div class="bg-blue-800 px-10 py-10 text-center text-white">
                                          <p class="font-serif text-2xl font-semibold tracking-wider">Add your product</p>
                                          <p class="text-center text-blue-100">(Authorized for admin only)</p>
                                    </div>

                                    <div className="space-y-4 px-8 py-10">
                                          <label className="block" htmlFor="name">
                                                <p className="text-gray-600">Product name</p>
                                                <input
                                                      className="w-full rounded-md border text-gray-700 bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                                                      type="text"
                                                      placeholder="What you want to sell"
                                                      value={productToBeAdded.name}
                                                      onChange={(e) => setProductToBeAdded(prevState => ({
                                                            ...prevState,
                                                            name: e.target.value
                                                      }))}
                                                />
                                          </label>
                                          <label className="block" htmlFor="url">
                                                <p className="text-gray-600">Product URL</p>
                                                <input
                                                      className="w-full rounded-md border text-gray-700 bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                                                      type="text"
                                                      placeholder="https://example.com"
                                                      value={productToBeAdded.url}
                                                      onChange={(e) => setProductToBeAdded(prevState => ({
                                                            ...prevState,
                                                            url: e.target.value
                                                      }))}
                                                />
                                          </label>
                                          <label className="block" htmlFor="amount">
                                                <p className="text-gray-600">Initial Amount</p>
                                                <input
                                                      className="w-full rounded-md border text-gray-700 bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                                                      type="number"
                                                      placeholder="Enter the amount"
                                                      value={productToBeAdded.amount}
                                                      onChange={(e) => setProductToBeAdded(prevState => ({
                                                            ...prevState,
                                                            amount: Number(e.target.value)
                                                      }))}
                                                />
                                          </label>
                                          <button
                                                className="mt-4 rounded-full bg-blue-800 px-10 py-2 font-semibold text-white"
                                                onClick={() => addProduct(productToBeAdded)}
                                          >
                                                Add
                                          </button>
                                    </div>
                              </div>

                        )
                  }

                  {
                        state.provider && products.length != 0 ? (
                              <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4">
                                    {products.map((product, index) => (
                                          <Card key={index} id={index} product={product} handleBid={handleBid} />
                                    ))}
                              </div>
                        ) : (
                              <h1 className="text-2xl justify-center items-center">No Products Available</h1>
                        )
                  }
            </main>
      );
}
