import Navbar from "../components/Navbar";
import Space from "../components/Space.jsx";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useMemo, useEffect } from "react";
import { createSelector } from 'reselect';
import { selectUtenti } from '../redux/utentiSlice.js';



function Card() {
    const { cardID } = useParams();
    const selectUtentiState = (state) => state.utenti.value;
    const selectUtenti = createSelector([selectUtentiState], (utenti) => utenti);

    // Utilizza il selettore memorizzato
    const utenti = useSelector(selectUtenti);


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


    return (
        <>
            <Navbar />
            <Space></Space>
            <div className="w-full grid place-items-center py-10 px-4 mx-auto bg-orange-700">
                <h2 className="mb-10 text-white text-4xl font-bold">Profilo</h2>

                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700'>
                    <div className='text-center grid place-items-center p-6'>
                        <label className='text-3xl font-bold' id='nomecognome'>{utente.nome + " " + utente.cognome}</label>
                        <img className='mt-5 w-[300px] h-[300px]' id='profilo' src={utente.immagineProfilo} />
                        <div className='my-5 grid grid-cols-2 gap-1'>
                            <label className='bg-gray-300 rounded-full text-center font-bold p-2' id='sesso'>{ }</label>
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
                            <label id='fumo'></label>
                            <label id='alcol'></label>
                            <label id='politica'></label>
                            <label id='fede'></label>
                            <label id='messa'></label>
                        </div>
                    </div>
                </div>
            </div>
            <Space></Space>
        </>
    );
}

export default Card;



