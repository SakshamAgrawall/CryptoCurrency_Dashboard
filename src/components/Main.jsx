import React from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import Sidebar from './Sidebar'

export default function Main() {
  return (
    <div>
      <Navbar/>
      <SearchBar />
      <Sidebar/>
    </div>
  )
}
