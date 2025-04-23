import { useState } from 'react'
import './App.css'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Blogs from './components/Blogs'
import ProductOverview from './components/ProductOverview'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Topbar/>   
    <Navbar/> 
    <Hero/>
    <Blogs/>
    <ProductOverview/>
    </>
  )
}

export default App
