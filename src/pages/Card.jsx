
import Navbar from '../components/Navbar.jsx';
import Space from '../components/Space.jsx';
import Footer from "../components/Footer";
import WindowsTop from '../hooks/WindowsTop.jsx';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useMemo, useEffect, useState } from "react";
import { createSelector } from 'reselect';
import { selectUtenti } from '../redux/utentiSlice.js';

import { getDatabase, ref, set, child, get, update, remove, onValue } from "firebase/database";



function Card() {
    WindowsTop();
    const { cardID } = useParams();
    const selectUtentiState = (state) => state.utenti.value;
    const selectUtenti = createSelector([selectUtentiState], (utenti) => utenti);

    // Utilizza il selettore memorizzato
    const utenti = useSelector(selectUtenti);
    const getUid = localStorage.getItem("uidData");


    const memoizedUtenti = useMemo(() => {
        return utenti.filter((utente) => utente.id === cardID);
    }, [utenti, cardID]);



    useEffect(() => {
        if (memoizedUtenti.length > 0) {
            const utente = memoizedUtenti[0];
            document.getElementById("genere").innerHTML = "♀️♂️ " + utente.genere;
            document.getElementById("altezza").innerHTML = "📏 " + utente.altezza + "cm";
            document.getElementById("provincia").innerHTML = "📍 " + utente.provincia;
            document.getElementById("dataNascita").innerHTML = "📅 " + utente.dataNascita;
            document.getElementById("anni").innerHTML = "🎂 " + utente.anni;
            document.getElementById("istruzione").innerHTML = "👨‍🎓 " + utente.istruzione;
            document.getElementById("lavoro").innerHTML = "💼 " + utente.lavoro;
            document.getElementById("figli").innerHTML = "👶 " + utente.figli;
            document.getElementById("poifigli").innerHTML = "🔜👶 " + utente.poiFigli;
            document.getElementById("fumo").innerHTML = "🚬 " + utente.fumo;
            document.getElementById("alcol").innerHTML = "🍷 " + utente.alcol;
            document.getElementById("politica").innerHTML = "🏛️ " + utente.politica;
            document.getElementById("fede").innerHTML = "🙏 " + utente.fede;
            document.getElementById("messa").innerHTML = "⛪ " + utente.messa;


            { utente.sesso == "Si" ? document.getElementById("sesso").innerHTML = "✔️ Sesso dopo il matrimonio" : document.getElementById("sesso").innerHTML = "❌ Sesso dopo il matrimonio" }
            { utente.contraccezione == "Si" ? document.getElementById("contraccezione").innerHTML = "✔️ No contraccezione" : document.getElementById("contraccezione").innerHTML = "❌ No contraccezione" }
            { utente.lgbt == "Si" ? document.getElementById("lgbt").innerHTML = "✔️ Contro LGBT" : document.getElementById("lgbt").innerHTML = "❌ Contro LGBT" }
            { utente.aborto == "Si" ? document.getElementById("aborto").innerHTML = "✔️ Contro aborto" : document.getElementById("aborto").innerHTML = "❌ Contro aborto" }
            { utente.eutanasia == "Si" ? document.getElementById("eutanasia").innerHTML = "✔️ Contro eutanasia" : document.getElementById("eutanasia").innerHTML = "❌ Contro eutanasia" }
            { utente.valoreVita == "Si" ? document.getElementById("valoreVita").innerHTML = "✔️ Sacralità della vita" : document.getElementById("valoreVita").innerHTML = "❌ Sacralità della vita" }
        }
    }, [memoizedUtenti]);

    const utente = memoizedUtenti[0];

    function cuore() {
        alert("Hai lasciato un cuore!");
        const db = getDatabase();


        update(ref(db, "Utenti/" + cardID + '/Like/' + getUid), {
            Like: 1,
        });
    }

    function eliminacuore() {
        alert("Hai rimosso il cuore!");
        const db = getDatabase();

        remove(ref(db, "Utenti/" + cardID + '/Like/' + getUid));
    }

    function chat() {
        alert("Funzione al momento non disponibile!");
    }
    const db = getDatabase();
    const [verificatoValue, setVerificatoValue] = useState(null);

    useEffect(() => {
        async function fetchVerificato() {
            try {
                const verificatoSnapshot = await get(ref(db, "Utenti/" + getUid + "/Verificato"));
                const value = verificatoSnapshot.val();
                setVerificatoValue(value);
            } catch (error) {
                console.error("Errore durante la lettura di Verificato:", error);
            }
        }

        fetchVerificato();
    }, []); // L'array vuoto [] assicura che useEffect venga eseguito solo al montaggio del componente



    return (
        <>
            <Navbar />
            <Space></Space>
            <div className="w-full grid place-items-center py-10 px-4 mx-auto bg-orange-700">
                <h2 className="mb-10 text-white text-4xl font-bold">Profilo</h2>

                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 text-black bg-white rounded-t-lg shadow'>
                    <div className='text-center grid place-items-center p-6'>
                        <label className='text-3xl font-bold' id='nomecognome'>{utente.nome + " " + utente.cognome}</label>
                        <img className='mt-5 w-auto h-[300px] rounded-xl object-cover shadow-md shadow-black' id='profilo' src={utente.immagineProfilo} />
                        <div className='my-5 grid grid-cols-2 gap-1'>
                            <label className='bg-gray-300 rounded-full text-center font-bold p-2' id='sesso'></label>
                            <label className='bg-gray-300 rounded-full text-center font-bold p-2' id='aborto'></label>
                            <label className='bg-gray-300 rounded-full text-center font-bold p-2' id='contraccezione'></label>
                            <label className='bg-gray-300 rounded-full text-center font-bold p-2' id='lgbt'></label>
                            <label className='bg-gray-300 rounded-full text-center font-bold p-2' id='valoreVita'></label>
                            <label className='bg-gray-300 rounded-full text-center font-bold p-2' id='eutanasia'></label>
                        </div>
                    </div>
                    <div className='text-left p-6'>
                        <label className='text-3xl font-bold'>Informazioni</label>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-left gap-6 p-3'>
                            <label id='genere'></label>
                            <label id='altezza'></label>
                            <label id='provincia'></label>
                            <label id='dataNascita'></label>
                            <label id='anni'></label>
                            <label id='istruzione'></label>
                            <label id='lavoro'></label>
                            <label id='figli'></label>
                            <label id='poifigli'></label>
                            <label id='fumo'></label>
                            <label id='alcol'></label>
                            <label id='politica'></label>
                            <label id='fede'></label>
                            <label id='messa'></label>
                        </div>
                        <div>
                            <h2 className='mt-10'>In cerca di:</h2>
                            <div className='my-10 md:mt-5 grid grid-cols-2'>
                                {utente.cerca.map((attivita, index) => (
                                    <label className={attivita == "Amicizia" ? 'p-5 md:p-2 mx-2 md:mx-10 text-white text-center  bg-blue-500 rounded-full' : 'p-5 md:p-2 mx-2 md:mx-10 text-white text-center  bg-red-500 rounded-full'} key={index}>{attivita}</label>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
                {verificatoValue == true ?
                    <div className='w-full grid grid-cols-1 gap-5 text-black bg-white '>
                        <div className="mb-10 grid grid-cols-1 md:flex gap-10">
                            <label className='bg-white shadow-lg shadow-black rounded-full text-center font-bold text-5xl cursor-pointer p-4 m-auto' onClick={cuore} id='love'>❤️</label>
                            <label className='bg-white shadow-lg shadow-black rounded-full  text-center font-bold text-5xl cursor-pointer p-4 m-auto' onClick={eliminacuore} id='love'>💔</label>
                            {utente.matching == true ?
                                <label className='bg-white shadow-lg shadow-black rounded-full text-center font-bold text-5xl cursor-pointer p-4 m-auto' onClick={chat} id='chat'>💬</label>
                                :
                                null
                            }
                        </div>
                    </div>
                    :
                    <div className='w-full grid grid-cols-1 gap-5 bg-white '>
                        <div className="p-4 bg-blue-500 text-white text-4xl text-bold">
                            <h2>Una volta che il tuo profilo sarà verificato potrai interagire con gli altri!</h2>
                        </div>
                    </div>
                }

                <div className='w-full grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 text-black bg-white'>
                    <div className='text-left m-4'>
                        <h2>Passioni:</h2>
                        {utente.passioni.map((attivita, index) => (
                            <li key={index}>{attivita}</li>
                        ))}
                    </div>
                    <div className='text-left m-4'>
                        <h2>Sport:</h2>
                        {utente.sport.map((attivita, index) => (
                            <li key={index}>{attivita}</li>
                        ))}
                    </div>
                    <div className='text-left m-4'>
                        <h2>Generi musicali:</h2>
                        {utente.musica.map((attivita, index) => (
                            <li key={index}>{attivita}</li>
                        ))}
                    </div>
                </div>


            </div>
            <Space></Space>
            <Footer></Footer>
        </>
    );
}

export default Card;



