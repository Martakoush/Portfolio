'use client'
import React from 'react'
import ProjectCard from './ProjectCard'
import { useRef } from 'react';
import {motion,useInView} from 'framer-motion'

const projectsData = [
    {
        id: 1,
        title: "E-Shop",
        description: "A shopping cart application with product filtering, cart logic, and state management usingRedux Toolkit. Strong emphasis on TypeScript type safety and component architecture.",
        image: "/images/eshop.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Martakoush/EShop.git",
        previewUrl: "https://e-shop-eight-murex.vercel.app",
    },
    {
        id: 2,
        title: "Nike Store",
        description: "A visually attractive single-brand product store designed with smooth animations usingGSAP. Focuses on frontend visuals, performance, and responsive layouts.",
        image: "/images/nikeStore.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Martakoush/Nike-Store.git",
        previewUrl: "https://nike-store-six-pi.vercel.app",
    },
    {
        id: 3,
        title: "Verizon Wallet",
        description: "A modern banking app built with Next.js, TypeScript, and TailwindCSS. Features reusable components, optimized styling, and clean architecture.",
        image: "/images/bank.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Martakoush/Bank.git",
        previewUrl: "https://bank-sar.vercel.app",
    },
    {
        id: 4,
        title: "YC Blogs",
        description: "A modern blog platform powered by Sanity CMS, featuring dynamic routing, category filtering, and a clean UI. Built for seamless content management and smooth publishing.",
        image: "/images/projects/ycblog.jpg",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/Martakoush/YC-Blog.git",
        previewUrl: "https://yc-blog-6l1k.vercel.app",
    },
    {
        id: 5,
        title: "ZM Store",
        description: "A modern e-commerce platform with user roles, secure auth, product management, and responsive UI. Built to highlight scalable state management and clean design.",
        image: "/images/projects/5.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Martakoush/E-Commerce.git",
        previewUrl: "",
    },
];

const cardVariants = {
    initial:{
        y:100,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
    }
}
const ProjectsSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref,{once:true})

    return (
        <section ref={ref}>
            <h2 className='text-white text-4xl font-bold text-center mt-4 mb-8 md:mb-12' id='projects'>My Projects</h2>
            <div className='text-white flex- flex-row justify-center items-center gap-2 py-6'>
                <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'>
                    {projectsData.map((project) =>(
                        <motion.li key={project.id} className='list-none' variants={cardVariants} initial='initail' animate={isInView ? 'animate' : 'initial'}>
                            <ProjectCard previewUrl={project.previewUrl} tag={project.tag} title={project.title} gitUrl={project.gitUrl} description={project.description} imgUrl={project.image}></ProjectCard>
                        </motion.li>
                ))}
                </div>
            </div>   
        </section>
    )
}

export default ProjectsSection
