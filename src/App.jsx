import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Layout from './pages/Layout'
import NewsPatchnotes from './components/NewsPatchnotes'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="LandingPage" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="patchnotes" element={<NewsPatchnotes />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
