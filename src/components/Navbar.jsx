import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Button from './Button';



const Nav = () => {
    let Links = [
        { name: "🏠HOME", linkto: "/" },
        { name: "📝TEST INGRESSO", linkto: "/Test-ingresso" },
        { name: "🎓UNIVERSITÀ", linkto: "/University" },
        { name: "🩺LAVORO", linkto: "/cards" },
        { name: "BLOG", linkto: "/cards" },
    ];
    let[open,setOpen]=useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7 '>
                <div className='font-bold text-2xl cursor-pointer flex items-center'>
                    <span className='text-3xl text-red-600 mr-1 pt-2'>
                        <ion-icon name="heart"></ion-icon>
                    </span>
                    PSH
                </div>
                <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close': 'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
                    {
                        Links.map((Link) => (
                            <li key={Link.name} className='md:ml-8 text-lg md:my-0 my-7'>
                                <NavLink to={Link.linkto} className='text-black hover:text-red-500 duration-500'>{Link.name}</NavLink>
                            </li>
                        ))
                    }
                    <Button>📞 CONTATTI</Button>
                </ul>

            </div>
        </div>
    )
}

export default Nav;