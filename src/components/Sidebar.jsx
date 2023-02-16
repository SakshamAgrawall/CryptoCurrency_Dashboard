// This component contains about the change in the price of crypto curriencies in last 24 hrs

import React, { useContext } from "react";
import { CryptoContext } from "../Context/Context";
import { App } from "../App.css";

export default function Sidebar() {
  const { cryptoData, currency } = useContext(CryptoContext);
  return (
    <div className=" bg-white scroll-smooth backdrop-blur-md border rounded-lg shadow-lg scrollspy" data-bs-spy="scroll" data-bs-target="#scrollspy1" data-bs-offset="200">
      <div>
        <p className="text-black text-bold text-[20px] text-center mt-4 font-bold">
          Cryptocurrency by market cap
        </p>
      </div>
      <div>
        {cryptoData ? (
          <div className="w-full table-auto ">
            <div>
              {cryptoData.map((element) => {
                return (
                  <div
                    key={element.id}
                    className="text-center text-lg border-b"
                  >
                    <img
                      src={element.image}
                      alt={element.name}
                      className="flex absolute w-[1.5rem] h-[1.6rem] ml-2"
                    />
                    <span className="flex flex-row pl-9 mt-3 text-[20px]">
                      {element.name}
                    </span>
                    <div className="flex flex-row justify-end mr-2">
                      <div
                        className={`text-[20px] 
                        ${
                          element.market_cap_change_percetage_24h > 0
                            ? "text-green-700"
                            : "text-red-700"
                        }`}
                      >
                        <i
                          className={`mr-1 text-[25px] ${
                            element.market_cap_change_percetage_24h > 0
                              ? "fa-solid fa-caret-up"
                              : "fa-solid fa-caret-down"
                          }`}
                        ></i>
                        <span>
                          {parseFloat(
                            element.market_cap_change_percentage_24h
                          ).toFixed(2)}
                          %
                        </span>
                      </div>
                    </div>
                    <div className="-ml-9">
                      <span className="text-[15px] -mt-4 ml-3 flex pl-8 mx-4 mb-4 truncate">
                        Mkt.Cap{" "}
                        {/* Intl.NumberFormat() --function that formats a number according to the locale and formatting options of this Intl.NumberFormat object */}
                        {new Intl.NumberFormat("en-IN", {   
                          style: "currency",
                          currency: currency,
                        }).format(element.market_cap)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>  
    </div>
  );
}
