// Exchange Function where user can exchange between cryptocurrencies

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoinList } from '../Redux/Action/actions';
export default function Exchange() {
    const [text1, setText1] = useState("")
    const [text2, setText2] = useState(1)
    const [units, setUnits] = useState([])
    const [value1, setValue1] = useState(1)
    const [value2, setValue2] = useState(2)
    const dispatch = useDispatch();
    const exchangeData = useSelector((state) => state.exchange);
    // console.log(exchangeData)
    const coin = exchangeData.coinList.rates;
    // console.log(coin)

    useEffect(() => {
        if (exchangeData.coinList.length === 0) {
            dispatch(fetchCoinList())
        }
    }, [])

    const change = () => {
        const unit = Object.values(coin).find((unit) => {
            return unit.value == value2
        })
        setUnits(unit.unit)
        let result = (value2 / value1) * text1;
        setText2(result)
    }
    return (
        <div className="bg-white bg-opacity-10 px-4 py-4 backdrop-blur-md rounded-lg border  border-gray-100 mr-3 shadow-lg items-center">
            <div className=" text-lg font-semibold ml-5">Exchange Coins</div>
            <div className="flex flex-row mt-8">
                <div className="pr-4 items-center">
                    <div className="flex my-1 content-center items-center py-1 px-2 lg:ml-3">
                        <p className='text-orange-400 font-semibold mr-3 '>Sell</p>
                        <select className='w-[130px] h-[2rem] bg-gray-100 rounded-lg font-semibold p-1 bg-opacity-60 backdrop-blur-md focus:ring-2 px-5 inline-flex cursor-pointer' onChange={(element) => setValue1(element.target.value)}>
                            {coin && Object.values(coin).map((h, s) => (
                                <option value={h.name} key={s} className='text-gray-600'>{h.name}</option>
                            ))}
                        </select>
                        <img src="" alt="" />
                    </div>
                    <div className="flex my-2 content-center items-center px-2 py-2 lg:ml-3">
                        <p className="text-green-600 font-semibold mr-3">Buy</p>
                        <select className="w-[130px] h-[2rem] bg-gray-100 rounded-lg font-semibold p-1 bg-opacity-60 backdrop-blur-md focus:ring-2 px-5 inline-flex cursor-pointer" onChange={(element) => setValue2(element.target.value)}>
                            {coin && Object.values(coin).map((h, s) => (
                                <option className='text-gray-600' value={h.name} key={s}>{h.name}</option>
                            ))}
                        </select>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="-mt-6 lg:pl-10 mr-3">
                    <div>
                        <label className="text-gray-400">Enter Value</label>
                        <div className="mr-[90px] w-full py-2 lg:w-[90px] md:w-full sm-w[90px] ">
                            <input type="number" placeholder="" value={text1 || ""} className="appearance-none block w-full bg-gray-100 bg-opacity-20 backdrop-blur-md text-gray-700 leading-tight focus:outline-none focus:border-gray-500 rounded border border-gray-400 px-3 py-1 outline-none" onChange={(element) => setText1(element.target.value)} />
                        </div>
                        <p className="mt-4 text-green-500 text-sm text-transform:capitalize">{parseFloat(text2).toFixed(2)}{units}</p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button className='bg-blue-600 rounded-lg py-1 px-6 text-white font-semibold hover:bg-red-600 border border-white'
                    onClick={() => change()}>
                    Exchange
                </button>
            </div>
        </div>
    )
}
