import React from 'react'
import NavLink from './NavLink'

type LinkItem = {
  title: string;
  path: string;
};

const MenuOverlay = ({links}:{links:LinkItem[]}) => {
    return (
        <div className='flex flex-col items-center py-4 '>
            <ul>
                {links.map((link,index) =>(
                    <li key={index}>
                        <NavLink href={link.path} title={link.title}></NavLink>
                    </li>
            ))}
            </ul>
        </div>
    )
}

export default MenuOverlay
