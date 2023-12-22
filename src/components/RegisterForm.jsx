import { useState } from 'react';
import { auth, app } from '../firebase/config.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/usersSlice';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, set, child, get } from "firebase/database";





function RegisterForm() {

    const dispatch = useDispatch();
    const [userCredentials, setUserCredentials] = useState({});
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const database = getDatabase();




    function handleCredentials(e) {
        setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    }
    function handleSignup(e) {
        e.preventDefault();
        setError("");

        get(child(ref(database), `Utenti/${userCredentials.username}`)).then((snapshot) => {
            if (snapshot.exists()) {
                alert('Username "' + userCredentials.username + '" non disponibile!');
            } else {
                createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
                    .then((userCredential) => {
                        dispatch(setUser({ id: userCredential.user.uid, email: userCredential.user.email, status: "User", username: userCredentials.username}));
                        var prova = new Date();
                        var prova2 = prova.getMonth() + 1;
                        var prova1 = prova.getDate() + "-" + prova2 + "-" + prova.getFullYear();
                        const db = getDatabase(app);
                        set(ref(db, "Utenti/" + userCredentials.username), {
                            Status: "User",
                            Nome: userCredentials.nome,
                            Cognome: userCredentials.cognome,
                            Password: userCredentials.password,
                            Email: userCredentials.email,
                            Università: "Non specificato",
                            Corso: "Non specificato",
                            Canale: "Non specificato",
                            PSHCoin: 20,
                            Iscrizione: prova1,
                            UltimoAccesso: prova1
                        });
                        alert("Registrato con successo!");
                        navigate("/Dashboard");
                    }).catch((error) => {
                        if (error.message == "Firebase: Error (auth/invalid-email).") {
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
        })
    };

    return (
        <>
            <div>
                <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username*</label>
                <input type="text" name="username" onChange={(e) => { handleCredentials(e) }} id="username" autoComplete="off" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required=""></input>
            </div>
            <div>
                <label for="nome" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome*</label>
                <input type="text" name="nome" onChange={(e) => { handleCredentials(e) }} id="nome" autoComplete="given-name" placeholder="Nome" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
            </div>
            <div>
                <label for="cognome" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cognome*</label>
                <input type="text" name="cognome" onChange={(e) => { handleCredentials(e) }} id="cognome" autoComplete="family-name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cognome" required=""></input>
            </div>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail*</label>
                <input type="email" name="email" onChange={(e) => { handleCredentials(e) }} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoComplete="off" placeholder="yourmail@domain.com" required=""></input>
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
            <button onClick={(e) => { handleSignup(e) }} className="bg-blue-500 text-white hover:bg-red-300 hover:text-black">Registrati</button>

        </>
    )
}

export default RegisterForm;