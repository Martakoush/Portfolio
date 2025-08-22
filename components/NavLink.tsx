import Link from "next/link"

const NavLink = ({href , title}:{href:string,title:string}) =>{
    return(
        <Link href={href} className='block py-2 pl-10 pr-4 text-[#adb7be] sm:text-xl rounded hover:text-white'>
            {title}
        </Link>
    )
}

export default NavLink