
import { getDatabase, ref, set, get, onValue, remove, push, child } from "firebase/database";

import { useSelector } from "react-redux";

import React, { useState, useEffect } from "react";
import Select from "react-select";

import { useDispatch } from "react-redux";
import { add, reset } from "../redux/utentiSlice";



function Memoria() {
    
    useEffect(() => {

        const getUid = localStorage.getItem("uidData");
        const db = getDatabase();

        const dbRef = ref(db, '/Utenti/' + getUid + '/Ricerca');

        onValue(dbRef, (snapshot) => {
            const a = snapshot.val();
            Mem(a.Genere, a.Anni, a.Provincia)

        }, {
            onlyOnce: true
        });

    }, [])

}

function Mem(gen, ann, prov) {
    const utenti = useSelector((state) => state.utenti.value);
    const dispatch = useDispatch();
    const db = getDatabase();
    const dbRef = ref(db, '/Utenti');

    dispatch(reset());

    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const dbRef1 = ref(db, '/Utenti/' + childKey + '/Informazioni');
            const b = childSnapshot.val();
            onValue(dbRef1, (snapshot1) => {
                const a = snapshot1.val();
                if (gen == a.Genere && prov == a.Provincia && parseInt(a.Anni) <= parseInt(ann)) {
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
                }

            }, {
                onlyOnce: true
            });
        });
    }, {
        onlyOnce: true
    });
}


export default Memoria;