'use client'
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion'

const HeroSection = () => {
    return (
        <section className='lg:py-16'>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} className='col-span-7 place-self-center text-center sm:text-left justify-self-start'>
                    <h1 className='text-white mb-4 text-4xl lg:text-6xl lg:leading-normal font-extrabold sm:text-4xl'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                            Hello, I&apos;m {''}
                            </span>
                            <br></br>
                            <TypeAnimation
                                sequence={[
                                'Mohammad Martakoush',
                                1200, 
                                ` A Front-End Developer`,
                                1200,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
                        Front-End Developer | Turning ideas into reality
                    </p>
                    <div>
                        <button className='bg-white px-6 sm:w-fit w-full py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
                            <a href="#contact">
                                Hire me
                            </a>
                        </button>
                        <button className='px-1 py-1 sm:w-fit w-full rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                                <a href='/CV.pdf' download>
                                    Download CV
                                </a>
                            </span>
                        </button>
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} className='col-span-5 place-self-center mt-5'>
                    <div className='rounded-full bg-[#131416] overflow-hidden w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] flex items-center justify-center'>
                        <Image src={'/images/ProfileImage.png'} width={300} height={300} alt='hero image'></Image>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection
