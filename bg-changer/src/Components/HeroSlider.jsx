import React, { useEffect, useState } from 'react'
import HeroImg from '../assets/heroImg.png'
import HeroImg1 from '../assets/heroImg1.png'

const HeroSlider = () => {

    const [index, setIndex] = useState(0)

    const images = [HeroImg, HeroImg1]

    useEffect(() => {

        const interval = setInterval(() => {

            setIndex((prevIndex) => {
                return prevIndex === images.length - 1
                    ? 0
                    : prevIndex + 1
            })

        }, 5000)

        return () => clearInterval(interval)

    }, [])

    return (
        <>
            <div className='min-h-screen w-full bg-black 
            flex flex-col-reverse lg:flex-row 
            items-center justify-center
            px-4 md:px-8 lg:px-16 py-8 overflow-hidden'>

                {/* LEFT CONTENT */}
                <div className='w-full lg:w-1/2 
                flex flex-col justify-center
                text-center lg:text-left
                mt-8 lg:mt-0'>

                    <p className='text-orange-400 
                        text-xs sm:text-sm 
                        tracking-[3px] uppercase mb-4'>

                        Full Stack Developer • React • Node.js

                    </p>

                    <h1 className='text-white 
                    text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                    font-bold leading-tight'>

                        Building Modern <br />
                        Web Experiences

                    </h1>

                    <p className='text-gray-400 
                    text-sm sm:text-base md:text-lg
                    mt-5 leading-7 max-w-xl
                    mx-auto lg:mx-0'>

                        I build responsive, modern, and scalable web
                        applications using React, Tailwind CSS,
                        JavaScript, and full-stack technologies —
                        focused on clean UI, smooth user experience,
                        and real-world problem solving.

                    </p>

                    {/* BUTTONS */}
                    <div className='flex flex-col sm:flex-row
                    gap-4 mt-8
                    justify-center lg:justify-start'>

                        <button className='bg-white cursor-pointer text-black 
                        px-6 py-3 rounded-lg
                        font-semibold
                        hover:bg-orange-400 hover:text-white
                        transition-all duration-300'>

                            View Projects

                        </button>

                        <button className='border border-gray-700 
                        text-white cursor-pointer px-6 py-3 rounded-lg
                        hover:bg-zinc-900 hover:text-orange-400
                        transition-all duration-300'>

                            Contact Me

                        </button>

                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className='w-full lg:w-1/2
                flex justify-center items-center
                relative'>

                    <img
                        className='w-full max-w-[700px]
                        object-contain
                        drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]'
                        src={images[index]}
                        alt="slider"
                    />

                </div>

            </div>
        </>
    )
}

export default HeroSlider