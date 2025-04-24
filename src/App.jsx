import { useState } from 'react'
import './App.css'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Blogs from './components/Blogs'
import ProductOverview from './components/ProductOverview'
import LoadMore from './components/LoadMore'


function App() {

  return (
    <>
    <Topbar/>   
    <Navbar/> 
    <Hero/>
    <Blogs/>
    <ProductOverview/>
    <LoadMore/>
    </>
  )
}

export default App
