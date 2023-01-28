import React from "react";
import Charts from "./Charts";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";

export default function Main() {
  return (
    <>
    <div>
      <div className="bg-gradient-to-r flex shadow-lg">
        <Navbar />
      </div>
      <div className="py-4 px-4 bg-gradient-to-r  bg-opacity-60 backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 sm:grid-cols-1 shadow-lg gap-2">
          <div className="md:col-span-3 grid-cols-3 sm:grid-cols-3 container-fluid shadow-lg">
            <SearchBar />
            <Charts />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Portfolio />
              
              {/* exchangecoin */}
            </div>
          </div>
      <Sidebar />
        </div>
      </div>

    </div>
    </>
  );
}
