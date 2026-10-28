import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Bio from './components/Bio'
import VisitorCount from './components/VisitorCount'
import { inject } from '@vercel/analytics'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Features from './components/Features'
import JourneySection from './components/JourneySection'
import HackerRoom from './components/HackerRoom'
import CyberTerminal from './components/CyberTerminal'
import Certificates from './components/Certificates'
import Reviews from './components/Reviews'
import Story from './components/Story'
import Contact from './components/Contact'
import MusicPlayer from './components/MusicPlayer'

inject()

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden bg-black text-white'>
      {/* Persistent 30s Motivation Music Engine (M: Play/Pause, N: Next, P: Prev) */}
      <MusicPlayer />

      {/* Top Floating Glass Navigation with Full Resume & Flashy Gaming button */}
      <Navbar />

      {/* Cinematic Hero Video Canvas */}
      <Hero />

      {/* Principal Architect Bio */}
      <Bio />

      {/* About & Sacred Sanskrit Stotras */}
      <About />

      {/* Technical Projects & Flagship Architectures from RESUME_SINGLE_COLUMN.pdf */}
      <Features />

      {/* AI Engineering Learning Journey: 38-Module Enterprise Curriculum */}
      <JourneySection />

      {/* 3D Hacker Room & Real-Time Three.js Metaverse Telemetry */}
      <HackerRoom />

      {/* Cyber Interactive Terminal with 15 Projects & System Capabilities */}
      <CyberTerminal />

      {/* Certifications & Lifelong Learning 3D Flashcards */}
      <Certificates />

      {/* 10 Verified Client & Freelance Testimonials Moving Up and Down */}
      <Reviews />

      {/* Cinematic Story Realm */}
      <Story />

      {/* Eye-Catchy Contact Section */}
      <Contact />

      {/* Footer with Hourly Telemetry Sync & Social Links */}
      <Footer />
    </main>
  )
}

export default App