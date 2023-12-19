import { useState } from 'react';
import { database } from '../firebase/config.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/usersSlice';
import { useNavigate } from 'react-router-dom';



function RegisterForm() {

    const dispatch = useDispatch();
    const [userCredentials, setUserCredentials] = useState({});
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function handleCredentials(e){
        setUserCredentials({...userCredentials, [e.target.name]: e.target.value});
    }


    function handleSignup(e) {
        e.preventDefault();
        setError("");
        createUserWithEmailAndPassword(database, userCredentials.email, userCredentials.password)
            .then((userCredential) => {
                dispatch(setUser({ id: userCredential.user.uid, email: userCredential.user.email }));
                navigate("/Dashboard");
            })
            .catch((error) => {
                if (error.message == "Firebase: Error (auth/invalid-email)."){
                    setError("E-mail non valida!")
                };
                if (error.message == "Firebase: Password should be at least 6 characters (auth/weak-password).") {
                    setError("Inserire una password maggiore di 6 caratteri!")
                };
                if (error.message == "Firebase: Error (auth/email-already-in-use).") {
                    setError("E-Mail già registrata!")
                };
            });
    }

    return (
        <>
            <div>
                <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username*</label>
                <input type="text" name="username" id="username" autoComplete="off" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required=""></input>
            </div>
            <div>
                <label for="nome" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome*</label>
                <input type="text" nome="nome" id="nome" autoComplete="given-name" placeholder="Nome" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
            </div>
            <div>
                <label for="cognome" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cognome*</label>
                <input type="text" name="cognome" id="cognome" autoComplete="family-name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cognome" required=""></input>
            </div>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail*</label>
                <input type="email" name="email" onChange={(e) => { handleCredentials(e) }} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoComplete="off" placeholder="yourmail@domain.com" required=""></input>
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password*</label>
                <input type="password" name="password" onChange={(e)=>{handleCredentials(e)}} id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
            </div>
            {
                error &&
                <div className='text-red-500 font-bold'>
                    {error}
                </div>
            }
            <button onClick={(e) => { handleSignup(e) }} className="bg-blue-500 text-white hover:bg-red-300 hover:text-black">Registrati</button>
            
        </>
    )
}

export default RegisterForm;