import React from 'react'
import { CodeBracketIcon,EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface ProjectCardProps{
    imgUrl:string,
    title:string,
    description:string,
    gitUrl:string,
    previewUrl:string,
    tag:string[]
}

const ProjectCard = ({imgUrl,title,description,gitUrl,previewUrl,tag}:ProjectCardProps) => {
    return (
        <div>
            <div className='h-52 flex items-center justify-center md:h-72 relative group' style={{background:`url(${imgUrl})`,backgroundSize:"cover"}}>
                <div className='overlay absolute top-0 w-full h-full left-0 bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 group-hover:items-center group-hover:justify-center'>
                    <Link href={gitUrl} className='h-14 mr-2 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link:'>
                        <CodeBracketIcon className='h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'></CodeBracketIcon>
                    </Link>
                    { previewUrl ? (
                        <Link href={previewUrl} className='h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link:'>
                            <EyeIcon className='h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'></EyeIcon>
                        </Link>
                    ):
                    ("")
                    }
                </div>
            </div>
            <div className='text-white rounded-b-xl mt-3 bg-[#181818] px-4 py-6'>
                <h5 className='text-xl font-semibold mb-2'>{title}</h5>
                <p className='text-[#adb7be]'>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard
