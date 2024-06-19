"use client"

import React, { useState } from 'react'

const Card = (props) => {

      const [bidAmount, setBidAmount] = useState(0);


      return (
            <div className="flex-col md:flex-row justify-between flex gap-4 items-start mx-4 py-12">
                  <div className="flex bg-white rounded-lg shadow dark:bg-gray-800 flex-col md:flex-row">
                        <div className="relative w-full md:w-48 flex justify-center items-center">
                              <img src="https://m.media-amazon.com/images/I/81DO2H9zhwL._AC_UF1000,1000_QL80_.jpg" alt="shopping image"
                                    className="object-cover w-full h-48 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
                        </div>
                        <form className="flex-auto p-6">
                              <div className="flex-col flex-wrap">
                                    <h1 className="flex-auto text-xl font-semibold dark:text-gray-50">{props.product.name}</h1>
                                    <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">{props.product.currentPrice.toString()}n</div>
                              </div>
                              <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                              <div className="flex-col mb-4 text-sm font-medium">
                                    <label className="block" htmlFor="amount">
                                          <p className="text-gray-300">Amount to bid</p>
                                          <input
                                                className="w-full rounded-md border text-gray-700 bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                                                type="number"
                                                placeholder="Enter the amount"
                                                value={bidAmount}
                                                onChange={(e) => setBidAmount(e.target.value)}
                                          />
                                    </label>
                                    <button type="button"
                                          className="py-2 px-4 my-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg " onClick={() => { props.handleBid(props.id, bidAmount); setBidAmount(0) }}>Bid
                                    </button>
                              </div>
                        </form>
                  </div >
            </div >
      )
}

export default Card