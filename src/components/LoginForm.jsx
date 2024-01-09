import { useState } from 'react';
import { auth } from '../firebase/config.js';
import { sendPasswordResetEmail, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/usersSlice';



import { useNavigate } from 'react-router-dom';

import { getDatabase, ref, onValue, update } from "firebase/database";


function LoginForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getStatus = localStorage.getItem("statusData");
    const getUsername = localStorage.getItem("usernameData");


    const db = getDatabase();
    const dbRef = ref(db, '/Utenti');
    

    const [userCredentials, setUserCredentials] = useState({});
    const [error, setError] = useState('');


    onAuthStateChanged(auth, (user) => {
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
        signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
            .then((userCredential) => {
                onValue(dbRef, (snapshot) => {
                    let a = "";
                    snapshot.forEach((childSnapshot) => {
                        const childKey = childSnapshot.key;
                        const childData = childSnapshot.val().Email;
                        if (childData === userCredentials.email) {
                            localStorage.setItem("uidData", childKey);
                            localStorage.setItem("statusData", childSnapshot.val().Status);
                            localStorage.setItem("verificatoData", childSnapshot.val().Verificato);
                            var prova = new Date();
                            var prova2 = prova.getMonth() + 1;
                            var prova1 = prova.getDate() + "-" + prova2 + "-" + prova.getFullYear();
                            const dbRef = ref(db, "Utenti/" + childKey);

                            update(dbRef, {
                                UltimoAccesso: prova1,
                            });
                            a = childSnapshot.val().Informazioni != undefined;
                            if (a) {
                                navigate("/Profilo");
                            } else {
                                navigate("/Questionario");
                            }
                        }
                    });
                }, {
                    onlyOnce: true
                });
                
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
                if (error.message == "Firebase: Error (auth/invalid-credential).") {
                    setError("Credenziali non valide!")
                };
                if (error.message == "Firebase: Error (auth/missing-password)."){
                    setError("Inserisci la password!");
                }
                console.log(error.message);
            });
    }

    function handlePasswordReset() {
        const email = prompt('Inserisci la tua e-mail');
        sendPasswordResetEmail(auth, email);
        alert("E-mail per il reset password inviata!");
    }
   
    

    return (
        <>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">E-mail *</label>
                <input type="email" name="email" onChange={(e) => { handleCredentials(e) }} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " autoComplete="email" placeholder="yourmail@domain.com" required=""></input>
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password*</label>
                <input type="password" name="password" onChange={(e) => { handleCredentials(e) }} id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required=""></input>
            </div>
            {
                error &&
                <div className='text-red-500 font-bold'>
                    {error}
                </div>
            }
            <button onClick={(e) => { handleLogin(e) }} className="bg-blue-500 text-white hover:bg-green-300 hover:text-black">Accedi</button>
            <p onClick={handlePasswordReset} className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer">Password dimenticata?</p>

        </>
    )
}

export default LoginForm;
