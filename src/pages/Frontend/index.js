import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './Shopping'
import Nopage from './Nopage'
import Video from './Video'
import Header from 'components/Frontend/Header';
import Footer from 'components/Frontend/Footer';
import Contact from './Contact'
import Shop1 from './shop1';
import Shop2 from './shop2';
import Shop3 from './shop3';
import Shop4 from './shop4';




export default function Index() {
  return (

    <>
      <Header />
      <main>
      <Routes>



        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact/>} />
        <Route path='video' element={<Video/>}/>
        <Route path='*' element={<Nopage />} />
        <Route path='shop1' element={<Shop1/>}/>
        <Route path='shop2' element={<Shop2/>}/>
        <Route path='shop3' element={<Shop3/>}/>
        <Route path='shop4' element={<Shop4/>}/>





      </Routes>
      </main>
      <Footer/>

    </>
  )
}
