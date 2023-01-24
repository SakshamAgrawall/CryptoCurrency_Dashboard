import React from 'react'

export default function SearchBar() {
    return (
        <>
            <div className="flex" >
                <span className="flex" >
                    <select className='border outline-none font-mono text-xl cursor-pointer  rounded-md w-[60px] text-center sm:w-[80px] z-1 pr-3 pl-2' style={{ marginLeft: "20px", marginTop: "20px" }} >
                        <option value={"usd"} className="text-green-600">USD</option>
                        <option value={"inr"} className="text-green-600">INR</option>
                        <option value={"eur"} className="text-green-600">EUR</option>
                        <option value={"jpy"} className="text-green-600">JPY</option>
                        <option value={"gbp"} className="text-green-600">GBP</option>
                        <option value={"aud"} className="text-green-600">AUD</option>
                        <option value={"cad"} className="text-green-600">CAD</option>
                    </select>
                </span>
                <div className="relative w-full">
                    <SearchInput  />
                </div>
            </div>
        </>
    )
}
