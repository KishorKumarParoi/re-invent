import React from 'react'
import clsx from 'clsx'

const Button = ({ title, containerClass, id, leftIcon, rightIcon, onClick, href, download }) => {
    if (href) {
        return (
            <a
                id={id}
                href={href}
                target={download ? undefined : "_blank"}
                rel={download ? undefined : "noopener noreferrer"}
                download={download}
                className={clsx(
                    '*:group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black inline-flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95',
                    containerClass
                )}
            >
                {leftIcon}
                <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
                    <div>{title}</div>
                </span>
                {rightIcon}
            </a>
        )
    }

    return (
        <button
            id={id}
            onClick={onClick}
            className={clsx(
                '*:group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black inline-flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95',
                containerClass
            )}
        >
            {leftIcon}
            <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
                <div>{title}</div>
            </span>
            {rightIcon}
        </button>
    )
}

export default Button