import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Bio from './components/Bio'
import { Analytics } from "@vercel/analytics/next"

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Analytics />
      <Hero />
      <Bio />
      <About />
      <section className='z-0 min-h-screen text-blue-500 text-7xl flex-center' >
        Working Under Progess
      </section>
    </main>
  )
}

export default App