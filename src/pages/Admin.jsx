import { NavLink, useNavigate } from 'react-router-dom';
import WindowsTop from '../hooks/WindowsTop.jsx';

import Navbar from '../components/Navbar.jsx';
import Space from '../components/Space.jsx';
import Footer from '../components/Footer.jsx';


import { getDatabase, ref, remove, set, child, get, update, onValue } from "firebase/database";
import { getStorage, ref as refStorage, deleteObject } from "firebase/storage";
import { getAuth, deleteUser, } from "firebase/auth";

import { useSelector } from "react-redux";
import { selectUsers } from '../redux/usersSlice.js';

import React, { useState, useEffect } from "react";
import Select from "react-select";

import { useDispatch } from "react-redux";
import { add, reset } from "../redux/utentiSlice.js";


function Admin() {
    WindowsTop();

    const user = useSelector(selectUsers);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getUid = localStorage.getItem("uidData");


    const [immaginiProfilo, setImmaginiProfilo] = useState([]);
    const [immaginiCI, setImmaginiCI] = useState([]);
    const [nomiprof, setNomi] = useState([]);
    const [indiceImmagine, setIndiceImmagine] = useState(0);

    const db = getDatabase();
    const dbRef = ref(db, '/Utenti');

    useEffect(() => {
        // Ottieni tutte le immagini profilo degli utenti
        const immagini = [];
        const CI = [];
        const nomi = [];

        onValue(dbRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                if (childSnapshot.val().Verificato != true) {
                    const immagineProfilo = childSnapshot.val().ImmagineProfilo;
                    const immagineCI = childSnapshot.val().ImmagineCI;
                    const nomi2 = childSnapshot.val().Nome + " " + childSnapshot.val().Cognome;
                    immagini.push(immagineProfilo);
                    CI.push(immagineCI);
                    nomi.push(nomi2);
                }

            });

            // Aggiorna lo stato con l'array di immagini profilo
            setImmaginiProfilo(immagini);
            setImmaginiCI(CI);
            setNomi(nomi);

        }, {
            onlyOnce: true
        });
    }, [dbRef]);

    const mostraImmagineSuccessiva = () => {
        setIndiceImmagine((prevIndice) => (prevIndice + 1) % immaginiProfilo.length);
    };

    const mostraImmaginePrecedente = () => {
        setIndiceImmagine((prevIndice) => (prevIndice - 1 + immaginiProfilo.length) % immaginiProfilo.length);
    };

    function valida() {
        onValue(dbRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                if (immaginiProfilo[indiceImmagine] === childSnapshot.val().ImmagineProfilo) {
                    const childKey = childSnapshot.key;
                    const utenteRef = ref(db, '/Utenti/' + childKey);

                    // Esegui l'aggiornamento solo se la condizione è vera
                    update(utenteRef, {
                        Verificato: true,
                    })
                        .then(() => {
                            alert("Profilo validato!");
                            console.log("Aggiornamento completato con successo");
                        })
                        .catch((error) => {
                            console.error("Errore durante l'aggiornamento:", error);
                        });
                }
            });
        }, {
            onlyOnce: true
        });

    }

    function elimina() {
        const storage = getStorage();
       
        onValue(dbRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                if (immaginiProfilo[indiceImmagine] === childSnapshot.val().ImmagineProfilo) {
                    const childKey = childSnapshot.key;

                    // RIMUOVE L'UTENTE DAL FIREBASE DATABASE
                    remove(ref(db, '/Utenti/' + childKey));



                    /// RIMUOVE LE IMMAGINI DELL'UTENTE DALLO STORAGE
                    // Specifica il percorso del file che desideri eliminare
                    const fileRef = refStorage (storage, '/Utenti/' + childKey + "/ImmagineProfilo.jpg");
                    const fileRef2 = refStorage(storage, '/Utenti/' + childKey + "/CI.jpg");

                    // Elimina il file
                    deleteObject(fileRef)
                        .then(() => {
                            alert("Utente rimosso, ricordati di eliminare la mail dall'Auth!");
                        })
                        .catch((error) => {
                            console.error('E: ', error);
                        });

                    deleteObject(fileRef2)
                        .then(() => {
                           
                        })
                        .catch((error) => {
                            console.error('E: ', error);
                        });
                   
            

                }
            });
        }, {
            onlyOnce: true
        });

    }


    /*
   
                    // Specifica il percorso del file che desideri eliminare
                    const fileRef = ref(storage, '/Utenti/' + childKey + "/ImmagineProfilo.jpg");
                    const fileRef2 = ref(storage, '/Utenti/' + childKey + "/CI.jpg");

                    // Elimina il file
                    deleteObject(fileRef)
                        .then(() => {
                            console.log('File eliminato con successo.');
                        })
                        .catch((error) => {
                            console.error('E: ', error);
                        });

                    deleteObject(fileRef2)
                        .then(() => {
                            console.log('File eliminato con successo.');
                        })
                        .catch((error) => {
                            console.error('E: ', error);
                        });
                    const auth = getAuth();
                */



    return (
        <>
            <Navbar></Navbar>
            <Space></Space>
            <div className="w-full grid place-items-center py-10 px-4 mx-auto bg-blue-700">
                <h2 className="mb-10 text-white text-4xl font-bold">Pannello di controllo</h2>
                {user.currentUser == null ? (
                    <div className='grid place-items-center mx-auto'>
                        <button><NavLink to={"/Login"}>Effettua il Login!</NavLink></button>
                    </div>
                ) : (
                    <div>
                        <div className='w-full bg-white rounded-t-lg'>
                            <h2 className='p-5 text-bold text-4xl'>{nomiprof[indiceImmagine]}</h2>
                        </div>
                        {immaginiProfilo.length > 0 ? (
                            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 bg-white rounded-b-lg'>
                                <div className='text-center grid place-items-center p-6'>
                                    <img className='w-auto h-[350px]' src={immaginiProfilo[indiceImmagine]} alt={`Immagine profilo ${indiceImmagine}`} />
                                </div>
                                <div className='text-center grid place-items-center p-6'>
                                    <img className='w-auto h-[350px]' src={immaginiCI[indiceImmagine]} alt={`Immagine profilo ${indiceImmagine}`} />
                                </div>
                            </div>
                        ) : (
                            <div className='w-full bg-white rounded-b-lg text-center text-bold text-2xl p-6'>
                                <p>Non ci sono utenti da verificare!</p>
                            </div>
                        )}
                        <div className='m-5'>
                            <button className='mx-5' onClick={mostraImmaginePrecedente}>Immagine Precedente</button>
                            <button className='mx-5' onClick={mostraImmagineSuccessiva}>Immagine Successiva</button>
                        </div>
                        <div className='m-5'>
                            <button className='mx-5 bg-red-600 text-white' onClick={valida}>Profilo verificato ✅</button>
                        </div>
                        <div className='m-5'>
                            <button className='mx-5 bg-black text-white' onClick={elimina}>Elimina profilo ❌​</button>
                        </div>
                    </div>

                )}
            </div>
        </>
    );

}
export default Admin; 