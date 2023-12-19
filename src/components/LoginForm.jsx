import { useState } from 'react';
import { database } from '../firebase/config.js';
import { sendPasswordResetEmail, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/usersSlice';

import { useNavigate } from 'react-router-dom';





function LoginForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [userCredentials, setUserCredentials] = useState({});
    const [error, setError] = useState('');

    onAuthStateChanged(database, (user) => {
        if (user) {
            dispatch(setUser({ id: user.uid, email: user.email }));
        } else {
            dispatch(setUser(null));
        }
    });


    function handleCredentials(e) {
        setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    }

    function handleLogin(e) {
        e.preventDefault();
        setError("");
        signInWithEmailAndPassword(database, userCredentials.email, userCredentials.password)
            .then((userCredential) => {
                navigate("/Dashboard");
            })
            .catch((error) => {
                if (error.message == "Firebase: Error (auth/invalid-email).") {
                    setError("E-mail non valida!")
                };
                if (error.message == "Firebase: Error (auth/wrong-password).") {
                    setError("Password errata!")
                };
                if (error.message == "Firebase: Error (auth/user-not-found).") {
                    setError("E-Mail NON registrata!")
                };
                console.log(error.message);
            });
    }

    function handlePasswordReset() {
        const email = prompt('Inserisci la tua e-mail');
        sendPasswordResetEmail(database, email);
        alert("E-mail per il reset password inviata!");
    }


    return (
        <>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail *</label>
                <input type="email" name="email" onChange={(e) => { handleCredentials(e) }} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoComplete="email" placeholder="yourmail@domain.com" required=""></input>
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password*</label>
                <input type="password" name="password" onChange={(e) => { handleCredentials(e) }} id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
            </div>
            {
                error &&
                <div className='text-red-500 font-bold'>
                    {error}
                </div>
            }
            <button onClick={(e) => { handleLogin(e) }} className="bg-blue-500 text-white hover:bg-green-300 hover:text-black">Accedi</button>
            <p onClick={handlePasswordReset} className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Password dimenticata?</p>

        </>
    )
}

export default LoginForm;