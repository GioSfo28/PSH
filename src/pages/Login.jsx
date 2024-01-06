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
            <div className="w-full grid place-items-center py-10 px-4 mx-auto bg-blue-700">
                <div className='w-full bg-white rounded-lg shadow-md shadow-black md:mt-0 sm:max-w-md xl:p-0 '>
                    <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                        {
                            loginType == 'login' ?
                                <div>
                                    <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>Login</h1>
                                    <p className='text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-xl mb-5'> Accedi o crea un account</p>
                                </div>
                                :
                                <div>
                                    <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-5'>Crea un account</h1>
                                </div>
                        }

                        <div className="inline">
                            <button
                                className={`btn ${loginType == 'login' ? 'selected' : ''} bg-blue-500 text-white hover:bg-green-300 hover:text-black mr-2`}
                                onClick={() => setLoginType('login')}>
                                Accedi
                            </button>
                            <button
                                className={`btn ${loginType == 'signup' ? 'selected' : ''} bg-blue-500 text-white hover:bg-red-300 hover:text-black ml-2`}
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