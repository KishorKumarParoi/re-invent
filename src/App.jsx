import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Bio from './components/Bio'
import VisitorCount from './components/VisitorCount'
import { inject } from '@vercel/analytics'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Story from './components/Story'
import Contact from './components/Contact'

inject()

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Bio />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}

export default App