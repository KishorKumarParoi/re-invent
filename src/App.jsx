import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Bio from './components/Bio'
import { inject } from '@vercel/analytics'

// Initialize Vercel Analytics for web
inject()

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero />
      <Bio />
      <About />
      <section className='z-0 min-h-screen text-blue-500 text-7xl flex-center'>
        Working Under Progress
      </section>
    </main>
  )
}

export default App