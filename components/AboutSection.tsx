'use client'
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
        <ul className="list-disc pl-2">
            <li>Frontend: HTML5, CSS3, Tailwind CSS, Material UI, SASS, JavaScript (ES6+), TypeScript, React.js, Next.js, GSAP, AOS</li>
            <li>State Management & Data Handling: Redux, Redux Toolkit, RTK Query, Context API, React Hook Form, Yup</li>
            <li>Tools & Practices: Git, GitHub, Responsive Web Design, API fetching (Axios, Fetch), Authentication (NextAuth)</li>
        </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
        <ul className="list-disc pl-2">
            <li>Bachelor’s Degree in Telecommunications Engineering – Tishreen University, Latakia, Syria</li>
        </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab,setTab] = useState('skills')
    const [isPending,startTransition] = useTransition()

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id)
        })
    }
    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src={'/images/about-image.png'} width={500} height={500} alt='about image'></Image>
                <div className='mt-4 md:mt0- text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold'>About Me</h2>
                    <p className='text-base md:text-lg'>
                        I am a passionate Frontend Developer with a strong foundation in modern web technologies, specializing in building responsive, user-friendly, and scalable web applications. My expertise includes React, Next.js, Material UI, and state management tools like Redux and RTK Query. I am committed to writing clean, maintainable code and delivering high-quality UI/UX experiences. I am continuously learning and integrating best practices to stay up-to-date with the latest industry trends.
                    </p>
                    <div className='flex flex-row mt-8 justify-start'>
                        <TabButton selectTab={()=>handleTabChange('skills')} active = {tab === 'skills'}>Skills </TabButton>
                        <TabButton selectTab={()=>handleTabChange('education')} active = {tab === 'education'}>Education </TabButton>
                    </div>
                    <div className='mt-8'>
                        {TAB_DATA.find((t) => t.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
