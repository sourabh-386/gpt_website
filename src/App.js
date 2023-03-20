import React from 'react'
import './App.css'
import { Brand,Cta,Navbar } from './Component'
import { Blog,Features,Footer,Header,Possibility,What } from './Container'



const App = () => {

  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <What />
      {/* <Features /> */}
      <Blog />
      <Possibility />
      <Cta />
      <Features />
      <Footer />

        
    </div>
  )
}

export default App