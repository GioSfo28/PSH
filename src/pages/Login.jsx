import { useState } from 'react';



import WindowsTop from "../hooks/WindowsTop";

import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import RegisterForm from '../components/RegisterForm';
import Video from "../components/Video";
import Footer from "../components/Footer";
import Space from "../components/Space";


function Login() {
    WindowsTop();
   
    const [loginType, setLoginType] = useState('login');

    return (
        <>
        
            <Navbar></Navbar>
            <Space></Space>
            <div className="container grid place-items-center py-10 px-4 mx-auto bg-blue-700">
                <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                    <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>Login</h1>
                        <p className='text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white'> Accedi o crea un account</p>
                        <div className="inline">
                            <button
                                className={`btn ${loginType == 'login' ? 'selected' : ''} hover:bg-green-300`}
                                onClick={() => setLoginType('login')}>
                                Accedi
                            </button>
                            <button
                                className={`btn ${loginType == 'signup' ? 'selected' : ''} hover:bg-red-300`}
                                onClick={() => setLoginType('signup')}>
                                Registrati
                            </button>
                        </div>
                        <form class="space-y-4 md:space-y-6" action="#">
                            {
                                loginType == 'login' ?
                                    <LoginForm></LoginForm>
                                    :
                                    <RegisterForm></RegisterForm>
                            }
                        </form>
                    </div>
                </div>
            </div>
            <Space></Space>
            <Footer></Footer>
        </>
    )
}

export default Login;