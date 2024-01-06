import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Button from './Button';


import { auth } from '../firebase/config.js';
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/usersSlice';

import { selectUsers } from '../redux/usersSlice.js';
import { useSelector } from "react-redux";



const Nav = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUsers);
    const navigate = useNavigate();
   

    const [status, setStatus] = useState(null);

    useEffect(() => {
        async function fetchVerificato() {
            try {
                const getStatus = localStorage.getItem("statusData");
                setStatus(getStatus);
            } catch (error) {
                console.error("Errore durante la lettura di Verificato:", error);
            }
        }

        fetchVerificato();
    }, []); // L'array vuoto [] assicura che useEffect venga eseguito solo al montaggio del componente

    function handleSignIn() {
        navigate("/Login");
    };

    function handleAdmin() {
        navigate("/Admin");
    };

    function handleSignOut() {
        if (confirm('Vuoi eseguire il logout?')) {
            signOut(auth).then(() => {
                dispatch(setUser(null));
                localStorage.clear();
                navigate("/Login");
            }).catch((error) => {
                console.log(error);
            });
        };

    };

    let Links = [
        { name: "Profilo", linkto: "/Profilo" },
        { name: "Ricerca", linkto: "/Ricerca" },
        { name: "Like", linkto: "/Like" },
        { name: "Match", linkto: "/Match" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-10'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7 '>
                <div className='font-bold text-black text-2xl cursor-pointer flex items-center'>
                    <span className='text-3xl text-red-600 mr-1 pt-2'>
                        <ion-icon name="chatbubbles"></ion-icon>
                    </span>
                    Incontri Cristiani
                </div>
                <div onClick={() => setOpen(!open)} className='text-3xl text-black absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
                    {status == "Admin" ? <button onClick={handleAdmin} className='bg-red-700 text-white py-2 px-6 rounded md:ml-8 hover:bg-red-500 duration-500'> ⭐ ADMIN</button> : null}
                    {
                        user.currentUser != null ?
                            Links.map((Link) => (
                                <li key={Link.name} className='md:ml-8 text-lg md:my-0 my-7'>
                                   <NavLink to={Link.linkto} className='text-black hover:text-red-500 duration-500'>{Link.name}</NavLink>
                                </li>
                            ))
                            :
                            null
                    }
                    {
                        user.currentUser == null ? <button onClick={handleSignIn} className='bg-indigo-700 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-600 duration-500'>🔑 ACCEDI</button> : <button onClick={handleSignOut} className='bg-indigo-700 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-600 duration-500'> ❌ LOGOUT</button>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Nav;