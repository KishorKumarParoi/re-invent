import React from 'react'
import VisitorCount from './VisitorCount'

const Footer = () => {
    return (
        <footer className='w-full bg-linear-to-b from-purple-600 to-purple-800 py-12'>
            <div className='max-w-6xl mx-auto px-5 md:px-10'>
                <VisitorCount />

                <div className='mt-8 text-center text-white text-xs opacity-80'>
                    <p>Made with 💚 by Kishor Kumar Paroi | © 2025 All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer