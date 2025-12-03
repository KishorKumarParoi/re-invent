import React from 'react'
import clsx from 'clsx'

const Button = ({ title, containerClass, id, leftIcon }) => {

    return (
        <button id={id} className={clsx`*:group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50
        px-7 py-3 text-black ${containerClass}`}
        >
            {leftIcon}
            <span className='relative incline-flex overflow-hidden font-general text-xs uppercase'>
                <div>
                    {title}
                </div>
            </span>
        </button>
    )
}

export default Button