import React from 'react'
// import debounce from "lodash.debounce"

export default function SearchInput() {

    return (
        <>
            <form className="flex pl-2 w-full">
                <div className="flex flex-grow rounded-sm ">
                    <div className="flex flex-grow items-center">
                        <span className='absolute text-[13px] lg:text-[13px] sm:text-[12px] md:text-[14px] ml-6 z-10'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="25" height="25"
                                style={{ marginLeft: "10px", marginTop: "5px" }}
                                viewBox="0 0 50  50">
                            <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                        </svg>
                    </span>
                    <input type="search" name='searchText' id='searchTextDesktop' className='flex border border-black shadow-lg focus:ring-1 md:text-md sm:text-md w-full pl-14 py-3 pr-2 p rounded-lg overflow-hidden focus-within:shadow-none outline-none sm:items-center' placeholder='Seacrh by coin ' style={{ marginLeft: "20px", marginTop: "2px" }} />
                </div>
            </div>
        </form>
        </>
    )
}
