import React from 'react';
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Home from './components/home/home'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Projects from './components/projects/projects'

const App = () => {
  return(
    <>
      <Header/>
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App