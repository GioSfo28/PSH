import { NavLink, useNavigate } from 'react-router-dom';
import WindowsTop from '../hooks/WindowsTop.jsx';
import Navbar from '../components/Navbar.jsx';

import { getDatabase, ref, set, child, get, update, onValue } from "firebase/database";

import Space from '../components/Space.jsx';
import Footer from '../components/Footer.jsx';

import { selectUsers } from '../redux/usersSlice.js';
import { useSelector } from "react-redux";

import React, { useState, useEffect } from "react";


 
function Profilo() {
    WindowsTop();
    const user = useSelector(selectUsers);
    const navigate = useNavigate();

    const getUid = localStorage.getItem("uidData");

    let genere = "";
    let altezza = "";
    let provincia = "";
    let dataNascita = "";
    let anni = "";
    let aborto = "";
    let alcol = "";
    let contraccezione = "";
    let eutanasia = "";
    let fede = "";
    let figli = "";
    let fumo = "";
    let istruzione = "";
    let lgbt = "";
    let lavoro = "";
    let messa = "";
    let politica = "";
    let sesso = "";
    let valoreVita = "";


    let profilo = "";
    let nome = "";
    let cognome = "";
    const db = getDatabase();
    const dbRef = ref(db, '/Utenti/' + getUid + '/Informazioni');
    const dbRef1 = ref(db, '/Utenti/' + getUid);


    onValue(dbRef, (snapshot) => {

        const a = snapshot.val();
        genere = a.Genere;
        altezza = a.Altezza;
        provincia = a.Provincia;
        dataNascita = a.DataDiNascita;
        anni = a.Anni;
        aborto = a.Aborto;
        alcol = a.Alcol;
        contraccezione = a.Contraccezione;
        eutanasia = a.Eutanasia;
        fede = a.Fede;
        figli = a.Figli;
        fumo = a.Fumo;
        istruzione = a.Istruzione;
        lgbt = a.LGBT;
        lavoro = a.Lavoro;
        messa = a.Messa;
        politica = a.Politica;
        sesso = a.Sesso;
        valoreVita = a.ValoreVita;



        document.getElementById("genere").innerHTML = "♀️♂️ " + genere;
        document.getElementById("altezza").innerHTML = "📏 " + altezza + "cm";
        document.getElementById("provincia").innerHTML = "📍 " + provincia;
        document.getElementById("dataNascita").innerHTML = "📅 " + dataNascita;
        document.getElementById("anni").innerHTML = "🎂 " + anni;
        document.getElementById("istruzione").innerHTML = "👨‍🎓 " + istruzione;
        document.getElementById("lavoro").innerHTML = "💼 " + lavoro;
        document.getElementById("figli").innerHTML = "👶 " + figli;
        document.getElementById("fumo").innerHTML = "🚬 " + fumo;
        document.getElementById("alcol").innerHTML = "🍷 " + alcol;
        document.getElementById("politica").innerHTML = "🏛️ " + politica;
        document.getElementById("fede").innerHTML = "🙏 " + fede;
        document.getElementById("messa").innerHTML = "⛪ " + messa;


        { sesso == "Si" ? document.getElementById("sesso").innerHTML = "✔️ Sesso dopo il matrimonio" : document.getElementById("sesso").innerHTML = "❌ Sesso dopo il matrimonio" }
        { contraccezione == "Si" ? document.getElementById("contraccezione").innerHTML = "✔️ No contraccezione" : document.getElementById("contraccezione").innerHTML = "❌ No contraccezione" }
        { lgbt == "Si" ? document.getElementById("lgbt").innerHTML = "✔️ Contro LGBT" : document.getElementById("lgbt").innerHTML = "❌ Contro LGBT" }
        { aborto == "Si" ? document.getElementById("aborto").innerHTML = "✔️ Contro aborto" : document.getElementById("aborto").innerHTML = "❌ Contro aborto" }
        { eutanasia == "Si" ? document.getElementById("eutanasia").innerHTML = "✔️ Contro eutanasia" : document.getElementById("eutanasia").innerHTML = "❌ Contro eutanasia" }
        { valoreVita == "Si" ? document.getElementById("valoreVita").innerHTML = "✔️ Sacralità della vita" : document.getElementById("valoreVita").innerHTML = "❌ Sacralità della vita" }


    }, {
        onlyOnce: true
    });

    onValue(dbRef1, (snapshot) => {
        const a = snapshot.val();
        profilo = a.ImmagineProfilo;
        nome = a.Nome;
        cognome = a.Cognome;
        document.getElementById("profilo").src = profilo;
        document.getElementById("nomecognome").innerHTML = nome + " " + cognome;
    }, {
        onlyOnce: true
    });


    return (
        <>
            <Navbar></Navbar>
            <Space></Space>
            <div className="w-full grid place-items-center py-10 px-4 mx-auto bg-blue-700">
                <h2 className="mb-10 text-white text-4xl font-bold">Il tuo profilo</h2>
                {
                    user.currentUser == null ?
                        <div className='grid place-items-center mx-auto'>
                            <button><NavLink to={"/Login"}>Effettua il Login!</NavLink></button>
                        </div>
                        :
                        <div>
                            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700'>
                                <div className='text-center grid place-items-center p-6'>
                                    <label className='text-3xl font-bold' id='nomecognome'></label>
                                    <img className='mt-5 w-[300px] h-[300px]' id='profilo' />
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
                                        <label id='fumo'></label>
                                        <label id='alcol'></label>
                                        <label id='politica'></label>
                                        <label id='fede'></label>
                                        <label id='messa'></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                }

            </div>
            <Space></Space>
            <Footer></Footer>
        </>
    );
}


export default Profilo;