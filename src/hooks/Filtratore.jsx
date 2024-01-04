
import { getDatabase, ref, set, get, onValue, remove, push, child } from "firebase/database";

import { useSelector } from "react-redux";

import React, { useState, useEffect } from "react";
import Select from "react-select";

import { useDispatch } from "react-redux";
import { add, reset } from "../redux/utentiSlice";



// Set per tracciare gli ID degli utenti già aggiunti



function Filtratore() {

    const utenti = useSelector((state) => state.utenti.value);
    const dispatch = useDispatch();

    const getUid = localStorage.getItem("uidData");
    const utentiAggiunti = new Set();
    const db = getDatabase();
    const dbRef = ref(db, '/Utenti');


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
                        if (info.genere == a.Genere && info.province == a.Provincia && parseInt(a.Anni) <= parseInt(info.anni)) {

                            const [passioni, setPassioni] = useState([]);

                            useEffect(() => {
                                const fetchData = async () => {
                                    try {
                                        const db = getDatabase();
                                        const dbRef = ref(db, '/Utenti/' + childKey + '/Informazioni/Passioni');
                                        await onValue(dbRef, (snapshot) => {

                                            const passioniArray = [];
                                            snapshot.forEach((childSnapshot) => {
                                                passioniArray.push(childSnapshot.val());
                                            });

                                            setPassioni(passioniArray);
                                        })
                                    } catch (error) {
                                        console.error("Errore durante il recupero delle passioni:", error.message);
                                    }
                                };

                                fetchData(); // Chiamata alla funzione di recupero dati
                            }, []); // L'array vuoto come dipendenza assicura che l'effetto venga eseguito solo all'inizio

                            const [sport, setSport] = useState([]);

                            useEffect(() => {
                                const fetchData = async () => {
                                    try {
                                        const db = getDatabase();
                                        const dbRef = ref(db, '/Utenti/' + childKey + '/Informazioni/Sport');
                                        await onValue(dbRef, (snapshot) => {

                                            const sportArray = [];
                                            snapshot.forEach((childSnapshot) => {
                                                sportArray.push(childSnapshot.val());
                                            });

                                            setSport(sportArray);
                                        })
                                    } catch (error) {
                                        console.error("Errore durante il recupero dello sport:", error.message);
                                    }
                                };

                                fetchData(); // Chiamata alla funzione di recupero dati
                            }, []); // L'array vuoto come dipendenza assicura che l'effetto venga eseguito solo all'inizio

                            const [musica, setMusica] = useState([]);

                            useEffect(() => {
                                const fetchData = async () => {
                                    try {
                                        const db = getDatabase();
                                        const dbRef = ref(db, '/Utenti/' + childKey + '/Informazioni/Musica');
                                        await onValue(dbRef, (snapshot) => {

                                            const musicaArray = [];
                                            snapshot.forEach((childSnapshot) => {
                                                musicaArray.push(childSnapshot.val());
                                            });

                                            setMusica(musicaArray);
                                        })
                                    } catch (error) {
                                        console.error("Errore durante il recupero della musica:", error.message);
                                    }
                                };

                                fetchData(); // Chiamata alla funzione di recupero dati
                            }, []); // L'array vuoto come dipendenza assicura che l'effetto venga eseguito solo all'inizio




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
                                verificato: b.Verificato,
                                sport: sport,
                                musica: musica,
                                passioni: passioni,
                            };

                            dispatch(add(utenti1));
                            console.log(utenti1.passioni);
                            utentiAggiunti.add(childKey);
                        } else {
                            if (isChecked) {
                                const [passioni, setPassioni] = useState([]);

                                useEffect(() => {
                                    const fetchData = async () => {
                                        try {
                                            const db = getDatabase();
                                            const dbRef = ref(db, '/Utenti/' + childKey + '/Informazioni/Passioni');
                                            await onValue(dbRef, (snapshot) => {

                                                const passioniArray = [];
                                                snapshot.forEach((childSnapshot) => {
                                                    passioniArray.push(childSnapshot.val());
                                                });

                                                setPassioni(passioniArray);
                                            })
                                        } catch (error) {
                                            console.error("Errore durante il recupero delle passioni:", error.message);
                                        }
                                    };

                                    fetchData(); // Chiamata alla funzione di recupero dati
                                }, []); // L'array vuoto come dipendenza assicura che l'effetto venga eseguito solo all'inizio

                                const [sport, setSport] = useState([]);

                                useEffect(() => {
                                    const fetchData = async () => {
                                        try {
                                            const db = getDatabase();
                                            const dbRef = ref(db, '/Utenti/' + childKey + '/Informazioni/Sport');
                                            await onValue(dbRef, (snapshot) => {

                                                const sportArray = [];
                                                snapshot.forEach((childSnapshot) => {
                                                    sportArray.push(childSnapshot.val());
                                                });

                                                setSport(sportArray);
                                            })
                                        } catch (error) {
                                            console.error("Errore durante il recupero dello sport:", error.message);
                                        }
                                    };

                                    fetchData(); // Chiamata alla funzione di recupero dati
                                }, []); // L'array vuoto come dipendenza assicura che l'effetto venga eseguito solo all'inizio

                                const [musica, setMusica] = useState([]);

                                useEffect(() => {
                                    const fetchData = async () => {
                                        try {
                                            const db = getDatabase();
                                            const dbRef = ref(db, '/Utenti/' + childKey + '/Informazioni/Musica');
                                            await onValue(dbRef, (snapshot) => {

                                                const musicaArray = [];
                                                snapshot.forEach((childSnapshot) => {
                                                    musicaArray.push(childSnapshot.val());
                                                });

                                                setMusica(musicaArray);
                                            })
                                        } catch (error) {
                                            console.error("Errore durante il recupero della musica:", error.message);
                                        }
                                    };

                                    fetchData(); // Chiamata alla funzione di recupero dati
                                }, []); // L'array vuoto come dipendenza assicura che l'effetto venga eseguito solo all'inizio

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
                                    verificato: b.Verificato,
                                    sport: sport,
                                    musica: musica,
                                    passioni: passioni,
                                };

                                dispatch(add(utenti1));
                                console.log(utenti1.passioni);
                                utentiAggiunti.add(childKey);
                            }
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


export default Filtratore;