import React from 'react'
import { Route, Routes, Link } from "react-router-dom"
import Home from './Components/Home';
import { HiHome } from "react-icons/hi"
import Post from './Components/Post';
import Blog from './Components/Blog';
import "./App.css"

const App = () => {
  return (
    <>
      <nav>
        <ul className='container'>
          <li> <Link to="/" style={{ textDecoration: "none", color: "black" }}><span style={{ fontSize: "32px" }}><HiHome /></span></Link> </li>
          <li> <Link to="/post" style={{ textDecoration: "none" }}>Add New Blog</Link> </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post' element={<Post />} />
        <Route path='/blog/:id' element={<Blog />} />
      </Routes>
    </>
  )
}

export default App