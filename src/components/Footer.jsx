import React from 'react'
import VisitorCount from './VisitorCount'

const Footer = () => {
    return (
        <footer className='w-full bg-purple-600 py-5'>
            <div className='max-w-6xl mx-auto px-5'>
                <VisitorCount />

                <div className='mt-8 text-center text-white text-xs'>
                    <p>Made with 💚 by Kishor Kumar Paroi | © 2025 All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer