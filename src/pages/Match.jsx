import { NavLink, useNavigate } from 'react-router-dom';
import WindowsTop from '../hooks/WindowsTop.jsx';

import Navbar from '../components/Navbar.jsx';
import Space from '../components/Space.jsx';

import CardItem from '../components/CardItem.jsx';

import { getDatabase, ref, set, child, get, update, onValue } from "firebase/database";

import { useSelector } from "react-redux";

import React, { useState, useEffect } from "react";
import Select from "react-select";

import { useDispatch } from "react-redux";
import { add, reset } from "../redux/utentiSlice.js";

function Match() {
    WindowsTop();

    const utenti = useSelector((state) => state.utenti.value);
    const dispatch = useDispatch();

    const getUid = localStorage.getItem("uidData");

    useEffect(() => {

        Filtratore();

    }, []);

    
    let aborto = "";
    let alcol = "";
    let contraccezione = "";
    let eutanasia = "";
    let fede = "";
    let figli = "";
    let fumo = "";
    let lgbt = "";
    let messa = "";
    let politica = "";
    let sesso = "";
    let valoreVita = "";

    // Set per tracciare gli ID degli utenti già aggiunti
    const utentiAggiunti = new Set();

    useEffect(() => {
        async function fetchData() {
            await Filtratore();
        }
        fetchData();
    }, []);


    async function Filtratore() {
        const db = getDatabase();
        const dbRef = ref(db, '/Utenti');


        
        const dbRef2 = ref(db, '/Utenti/' + getUid + '/Informazioni');


        onValue(dbRef2, (snapshot) => {

            const a = snapshot.val();
            aborto = a.Aborto;
            alcol = a.Alcol;
            contraccezione = a.Contraccezione;
            eutanasia = a.Eutanasia;
            fede = a.Fede;
            figli = a.Figli;
            fumo = a.Fumo;
            lgbt = a.LGBT;
            messa = a.Messa;
            politica = a.Politica;
            sesso = a.Sesso;
            valoreVita = a.ValoreVita;

        }, {
            onlyOnce: true
        });



        dispatch(reset());

        onValue(dbRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                if (childKey != getUid) {
                    const dbRef1 = ref(db, '/Utenti/' + childKey + '/Informazioni');
                    const b = childSnapshot.val();
                    onValue(dbRef1, (snapshot1) => {
                        const a = snapshot1.val();
                        if (!utentiAggiunti.has(childKey)) {
                            if (aborto == a.Aborto && alcol == a.Alcol && contraccezione == a.Contraccezione && eutanasia == a.Eutanasia && fede == a.Fede && figli == a.Figli && fumo == a.Fumo && lgbt == a.LGBT && messa == a.Messa && politica == a.Politica && sesso == a.Sesso && valoreVita == a.ValoreVita ) {
                                const utenti1 = {
                                    id: childKey,
                                    aborto: a.Aborto,
                                    alcol: a.Alcol,
                                    altezza: a.Altezza,
                                    anni: a.Anni,
                                    contraccezione: a.Contraccezione,
                                    dataNascita: a.DataDiNascita,
                                    eucarestia: a.Eucarestia,
                                    eutanasia: a.Eutanasia,
                                    fede: a.Fede,
                                    figli: a.Figli,
                                    fumo: a.Fumo,
                                    genere: a.Genere,
                                    istruzione: a.Istruzione,
                                    lgbt: a.LGBT,
                                    lavoro: a.Lavoro,
                                    messa: a.Messa,
                                    politica: a.Politica,
                                    provincia: a.Provincia,
                                    sesso: a.Sesso,
                                    valoreVita: a.ValoreVita,
                                    nome: b.Nome,
                                    cognome: b.Cognome,
                                    immagineProfilo: b.ImmagineProfilo,
                                };

                                dispatch(add(utenti1));
                                
                                utentiAggiunti.add(childKey);
                            } 
                            
                        }
                        
                    }, {
                        onlyOnce: true
                    });
                }
            });
        }, {
            onlyOnce: true
        });


    }


    return (
        <>
            <Navbar></Navbar>
            <Space></Space>
            <div className="w-full grid place-items-center py-10 px-4 mx-auto bg-red-700">
                <h1 className="text-white text-center text-4xl font-bold mb-10">
                    Match profili 100% compatibili
                </h1>
                <div className="w-full grid py-10 px-4 rounded-lg mx-auto bg-white">
                    {utenti.length == 0 ?
                        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-10">
                            <h2 className='text-black'>Nessun utente compatibile al 100%</h2>
                        </div> 
                        :
                        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-10">
                            {utenti.map((utente) => (
                                <CardItem
                                    key={utente.id}
                                    utenteID={utente.id}
                                    imgURL={utente.immagineProfilo}
                                    title={utente.nome + " " + utente.cognome + ", " + utente.anni}>
                                    {utente.provincia}
                                </CardItem>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Match;