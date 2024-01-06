import { NavLink, useNavigate } from 'react-router-dom';
import WindowsTop from '../hooks/WindowsTop.jsx';

import Navbar from '../components/Navbar.jsx';
import Space from '../components/Space.jsx';
import Footer from "../components/Footer";

import CardItem from '../components/CardItem.jsx';

import { getDatabase, ref, set, child, get, update, onValue } from "firebase/database";

import { useSelector } from "react-redux";
import { selectUsers } from '../redux/usersSlice.js';


import React, { useState, useEffect } from "react";
import Select from "react-select";

import { useDispatch } from "react-redux";
import { add, reset } from "../redux/utentiSlice";

function Ricerca() {
    WindowsTop();
    const utenti = useSelector((state) => state.utenti.value);
    const dispatch = useDispatch();
    const user = useSelector(selectUsers);

    const getUid = localStorage.getItem("uidData");

    const [isChecked, setIsChecked] = useState(false);
    const [isMatch, setIsMatch] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if (isMatch) {
            setIsMatch(!isMatch);
        }
        dispatch(reset());
    };
    const handleCheckboxChange2 = () => {
        setIsMatch(!isMatch);
        if (isChecked) {
            setIsChecked(!isChecked);
        }
        dispatch(reset());
        if (isMatch == false) {
            Match();
        }
    };


    // Recupera info da localStorage o imposta un valore di default
    const [info, setInfo] = useState(
        JSON.parse(localStorage.getItem("info")) || {}
    );

    useEffect(() => {
        // Salva info in localStorage ogni volta che cambia
        localStorage.setItem("info", JSON.stringify(info));
    }, [info]);

    const genere = [
        { id: "genere", value: "Genere", label: "Genere", isDisabled: true },
        { id: "genere", value: "Maschio", label: "Maschio" },
        { id: "genere", value: "Femmina", label: "Femmina" },
    ];

    const province = [
        { id: "province", value: "Province", label: "Province", isDisabled: true },
        { id: "province", value: "Agrigento", label: "Agrigento" },
        { id: "province", value: "Alessandria", label: "Alessandria" },
        { id: "province", value: "Ancona", label: "Ancona" },
        { id: "province", value: "Aosta", label: "Aosta" },
        { id: "province", value: "Arezzo", label: "Arezzo" },
        { id: "province", value: "Ascoli Piceno", label: "Ascoli Piceno" },
        { id: "province", value: "Asti", label: "Asti" },
        { id: "province", value: "Avellino", label: "Avellino" },
        { id: "province", value: "Bari", label: "Bari" },
        { id: "province", value: "Barletta-Andria-Trani", label: "Barletta-Andria-Trani" },
        { id: "province", value: "Belluno", label: "Belluno" },
        { id: "province", value: "Benevento", label: "Benevento" },
        { id: "province", value: "Bergamo", label: "Bergamo" },
        { id: "province", value: "Biella", label: "Biella" },
        { id: "province", value: "Bologna", label: "Bologna" },
        { id: "province", value: "Bolzano", label: "Bolzano" },
        { id: "province", value: "Brescia", label: "Brescia" },
        { id: "province", value: "Brindisi", label: "Brindisi" },
        { id: "province", value: "Cagliari", label: "Cagliari" },
        { id: "province", value: "Caltanissetta", label: "Caltanissetta" },
        { id: "province", value: "Campobasso", label: "Campobasso" },
        { id: "province", value: "Caserta", label: "Caserta" },
        { id: "province", value: "Catania", label: "Catania" },
        { id: "province", value: "Catanzaro", label: "Catanzaro" },
        { id: "province", value: "Chieti", label: "Chieti" },
        { id: "province", value: "Como", label: "Como" },
        { id: "province", value: "Cosenza", label: "Cosenza" },
        { id: "province", value: "Cremona", label: "Cremona" },
        { id: "province", value: "Crotone", label: "Crotone" },
        { id: "province", value: "Cuneo", label: "Cuneo" },
        { id: "province", value: "Enna", label: "Enna" },
        { id: "province", value: "Fermo", label: "Fermo" },
        { id: "province", value: "Ferrara", label: "Ferrara" },
        { id: "province", value: "Firenze", label: "Firenze" },
        { id: "province", value: "Foggia", label: "Foggia" },
        { id: "province", value: "Forlì-Cesena", label: "Forlì-Cesena" },
        { id: "province", value: "Frosinone", label: "Frosinone" },
        { id: "province", value: "Genova", label: "Genova" },
        { id: "province", value: "Gorizia", label: "Gorizia" },
        { id: "province", value: "Grosseto", label: "Grosseto" },
        { id: "province", value: "Imperia", label: "Imperia" },
        { id: "province", value: "Isernia", label: "Isernia" },
        { id: "province", value: "L’aquila", label: "L’aquila" },
        { id: "province", value: "La spezia", label: "La spezia" },
        { id: "province", value: "Latina", label: "Latina" },
        { id: "province", value: "Lecce", label: "Lecce" },
        { id: "province", value: "Lecco", label: "Lecco" },
        { id: "province", value: "Livorno", label: "Livorno" },
        { id: "province", value: "Lodi", label: "Lodi" },
        { id: "province", value: "Lucca", label: "Lucca" },
        { id: "province", value: "Macerata", label: "Macerata" },
        { id: "province", value: "Mantova", label: "Mantova" },
        { id: "province", value: "Massa-Carrara", label: "Massa-Carrara" },
        { id: "province", value: "Matera", label: "Matera" },
        { id: "province", value: "Messina", label: "Messina" },
        { id: "province", value: "Milano", label: "Milano" },
        { id: "province", value: "Modena", label: "Modena" },
        { id: "province", value: "Monza e Brianza", label: "Monza e Brianza" },
        { id: "province", value: "Napoli", label: "Napoli" },
        { id: "province", value: "Novara", label: "Novara" },
        { id: "province", value: "Nuoro", label: "Nuoro" },
        { id: "province", value: "Oristano", label: "Oristano" },
        { id: "province", value: "Padova", label: "Padova" },
        { id: "province", value: "Palermo", label: "Palermo" },
        { id: "province", value: "Parma", label: "Parma" },
        { id: "province", value: "Pavia", label: "Pavia" },
        { id: "province", value: "Perugia", label: "Perugia" },
        { id: "province", value: "Pesaro e Urbino", label: "Pesaro e Urbino" },
        { id: "province", value: "Pescara", label: "Pescara" },
        { id: "province", value: "Piacenza", label: "Piacenza" },
        { id: "province", value: "Pisa", label: "Pisa" },
        { id: "province", value: "Pistoia", label: "Pistoia" },
        { id: "province", value: "Pordenone", label: "Pordenone" },
        { id: "province", value: "Potenza", label: "Potenza" },
        { id: "province", value: "Prato", label: "Prato" },
        { id: "province", value: "Ragusa", label: "Ragusa" },
        { id: "province", value: "Ravenna", label: "Ravenna" },
        { id: "province", value: "Reggio Calabria", label: "Reggio Calabria" },
        { id: "province", value: "Reggio Emilia", label: "Reggio Emilia" },
        { id: "province", value: "Rieti", label: "Rieti" },
        { id: "province", value: "Rimini", label: "Rimini" },
        { id: "province", value: "Roma", label: "Roma" },
        { id: "province", value: "Rovigo", label: "Rovigo" },
        { id: "province", value: "Salerno", label: "Salerno" },
        { id: "province", value: "Sassari", label: "Sassari" },
        { id: "province", value: "Savona", label: "Savona" },
        { id: "province", value: "Siena", label: "Siena" },
        { id: "province", value: "Siracusa", label: "Siracusa" },
        { id: "province", value: "Sondrio", label: "Sondrio" },
        { id: "province", value: "Sud Sardegna", label: "Sud Sardegna" },
        { id: "province", value: "Taranto", label: "Taranto" },
        { id: "province", value: "Teramo", label: "Teramo" },
        { id: "province", value: "Terni", label: "Terni" },
        { id: "province", value: "Torino", label: "Torino" },
        { id: "province", value: "Trapani", label: "Trapani" },
        { id: "province", value: "Trento", label: "Trento" },
        { id: "province", value: "Treviso", label: "Treviso" },
        { id: "province", value: "Trieste", label: "Trieste" },
        { id: "province", value: "Udine", label: "Udine" },
        { id: "province", value: "Varese", label: "Varese" },
        { id: "province", value: "Venezia", label: "Venezia" },
        { id: "province", value: "Verbano-Cusio-Ossola", label: "Verbano-Cusio-Ossola" },
        { id: "province", value: "Vercelli", label: "Vercelli" },
        { id: "province", value: "Verona", label: "Verona" },
        { id: "province", value: "Vibo valentia", label: "Vibo valentia" },
        { id: "province", value: "Vicenza", label: "Vicenza" },
        { id: "province", value: "Viterbo", label: "Viterbo" },
    ];

    const anni = [
        { id: "anni", value: "anni", label: "Età <= di", isDisabled: true },
        { id: "anni", value: "16", label: "16" },
        { id: "anni", value: "17", label: "17" },
        { id: "anni", value: "18", label: "18" },
        { id: "anni", value: "19", label: "19" },
        { id: "anni", value: "20", label: "20" },
        { id: "anni", value: "21", label: "21" },
        { id: "anni", value: "22", label: "22" },
        { id: "anni", value: "23", label: "23" },
        { id: "anni", value: "24", label: "24" },
        { id: "anni", value: "25", label: "25" },
        { id: "anni", value: "26", label: "26" },
        { id: "anni", value: "27", label: "27" },
        { id: "anni", value: "28", label: "28" },
        { id: "anni", value: "29", label: "29" },
        { id: "anni", value: "30", label: "30" },
        { id: "anni", value: "31", label: "31" },
        { id: "anni", value: "32", label: "32" },
        { id: "anni", value: "33", label: "33" },
        { id: "anni", value: "34", label: "34" },
        { id: "anni", value: "35", label: "35" },
        { id: "anni", value: "36", label: "36" },
        { id: "anni", value: "37", label: "37" },
        { id: "anni", value: "38", label: "38" },
        { id: "anni", value: "39", label: "39" },
        { id: "anni", value: "40", label: "40" },
        { id: "anni", value: "41", label: "41" },
        { id: "anni", value: "42", label: "42" },
        { id: "anni", value: "43", label: "43" },
        { id: "anni", value: "44", label: "44" },
        { id: "anni", value: "45", label: "45" },
        { id: "anni", value: "46", label: "46" },
        { id: "anni", value: "47", label: "47" },
        { id: "anni", value: "48", label: "48" },
        { id: "anni", value: "49", label: "49" },
        { id: "anni", value: "50", label: "50" },
        { id: "anni", value: "51", label: "51" },
        { id: "anni", value: "52", label: "52" },
        { id: "anni", value: "53", label: "53" },
        { id: "anni", value: "54", label: "54" },
        { id: "anni", value: "55", label: "55" },
        { id: "anni", value: "56", label: "56" },
        { id: "anni", value: "57", label: "57" },
        { id: "anni", value: "58", label: "58" },
        { id: "anni", value: "59", label: "59" },
        { id: "anni", value: "60", label: "60" },
        { id: "anni", value: "61", label: "61" },
        { id: "anni", value: "62", label: "62" },
        { id: "anni", value: "63", label: "63" },
        { id: "anni", value: "64", label: "64" },
        { id: "anni", value: "65", label: "65" },
        { id: "anni", value: "66", label: "66" },
        { id: "anni", value: "67", label: "67" },
        { id: "anni", value: "68", label: "68" },
        { id: "anni", value: "69", label: "69" },
        { id: "anni", value: "70", label: "70" },
        { id: "anni", value: "71", label: "71" },
        { id: "anni", value: "72", label: "72" },
        { id: "anni", value: "73", label: "73" },
        { id: "anni", value: "74", label: "74" },
        { id: "anni", value: "75", label: "75" },
        { id: "anni", value: "76", label: "76" },
        { id: "anni", value: "77", label: "77" },
        { id: "anni", value: "78", label: "78" },
        { id: "anni", value: "79", label: "79" },
        { id: "anni", value: "80", label: "80" },
        { id: "anni", value: "81", label: "81" },
        { id: "anni", value: "82", label: "82" },
        { id: "anni", value: "83", label: "83" },
        { id: "anni", value: "84", label: "84" },
        { id: "anni", value: "85", label: "85" },
        { id: "anni", value: "86", label: "86" },
        { id: "anni", value: "87", label: "87" },
        { id: "anni", value: "88", label: "88" },
        { id: "anni", value: "89", label: "89" },
        { id: "anni", value: "90", label: "90" },
        { id: "anni", value: "91", label: "91" },
        { id: "anni", value: "92", label: "92" },
        { id: "anni", value: "93", label: "93" },
        { id: "anni", value: "94", label: "94" },
        { id: "anni", value: "95", label: "95" },
        { id: "anni", value: "96", label: "96" },
        { id: "anni", value: "97", label: "97" },
        { id: "anni", value: "98", label: "98" },
        { id: "anni", value: "99", label: "99" },

    ];

    useEffect(() => {

        Filtratore();

    }, [info, isChecked]);

    const handleInfo = (selectedOption) => {
        switch (selectedOption.id) {
            case "genere":
                setInfo({ ...info, ["genere"]: selectedOption.value });
                break;
            case "altezza":
                setInfo({ ...info, ["altezza"]: selectedOption.value });
                break;
            case "province":
                setInfo({ ...info, ["province"]: selectedOption.value });
                break;
            case "anni":
                setInfo({ ...info, ["anni"]: selectedOption.value });
                break;
            case "alcol":
                setInfo({ ...info, ["alcol"]: selectedOption.value });
                break;
            case "fumo":
                setInfo({ ...info, ["fumo"]: selectedOption.value });
                break;
            case "oraFigli":
                setInfo({ ...info, ["oraFigli"]: selectedOption.value });
                break;
            case "politica":
                setInfo({ ...info, ["politica"]: selectedOption.value });
                break;
            case "istruzione":
                setInfo({ ...info, ["istruzione"]: selectedOption.value });
                break;
            case "lavoro":
                setInfo({ ...info, ["lavoro"]: selectedOption.value });
                break;
            case "fede":
                setInfo({ ...info, ["fede"]: selectedOption.value });
                break;
            case "messa":
                setInfo({ ...info, ["messa"]: selectedOption.value });
                break;
            case "contraccezione":
                setInfo({ ...info, ["contraccezione"]: selectedOption.value });
                break;
            case "sesso":
                setInfo({ ...info, ["sesso"]: selectedOption.value });
                break;
            case "valorevita":
                setInfo({ ...info, ["valorevita"]: selectedOption.value });
                break;
            case "aborto":
                setInfo({ ...info, ["aborto"]: selectedOption.value });
                break;
            case "eutanasia":
                setInfo({ ...info, ["eutanasia"]: selectedOption.value });
                break;
            case "lgbt":
                setInfo({ ...info, ["lgbt"]: selectedOption.value });
                break;
        }

    }


    // Set per tracciare gli ID degli utenti già aggiunti
    const utentiAggiunti = new Set();


    function Filtratore() {
        dispatch(reset());
        let aborto = "";
        let alcol = "";
        let contraccezione = "";
        let eutanasia = "";
        let fede = "";
        let figli = "";
        let poiFigli = "";
        let fumo = "";
        let lgbt = "";
        let messa = "";
        let politica = "";
        let sesso = "";
        let valoreVita = "";

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
            poiFigli = a.PoiFigli;
            fumo = a.Fumo;
            lgbt = a.LGBT;
            messa = a.Messa;
            politica = a.Politica;
            sesso = a.Sesso;
            valoreVita = a.ValoreVita;

        }, {
            onlyOnce: true
        });

        onValue(dbRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                if (childKey != getUid) {
                    let passioni = [];
                    let sport = [];
                    let musica = [];
                    let cerca = [];
                    const dbRef2 = ref(db, '/Utenti/' + childKey + '/Informazioni/Passioni');
                    const dbRef3 = ref(db, '/Utenti/' + childKey + '/Informazioni/Sport');
                    const dbRef4 = ref(db, '/Utenti/' + childKey + '/Informazioni/Musica');
                    const dbRef5 = ref(db, '/Utenti/' + childKey + '/Informazioni/Cerca');
                    onValue(dbRef2, (snapshot) => {
                        snapshot.forEach((childSnapshot) => {
                            passioni.push(childSnapshot.val())
                        }, {
                            onlyOnce: true
                        });
                    })
                    onValue(dbRef3, (snapshot) => {
                        snapshot.forEach((childSnapshot) => {
                            sport.push(childSnapshot.val())
                        }, {
                            onlyOnce: true
                        });

                    })
                    onValue(dbRef4, (snapshot) => {
                        snapshot.forEach((childSnapshot) => {
                            musica.push(childSnapshot.val())
                        }, {
                            onlyOnce: true
                        });
                    })
                    onValue(dbRef5, (snapshot) => {
                        snapshot.forEach((childSnapshot) => {
                            cerca.push(childSnapshot.val())

                        }, {
                            onlyOnce: true
                        });
                    })
                    function confrontaEAssegnaPunteggio(valoreSinistra, valoreDestra) {
                        if (valoreSinistra === valoreDestra) {
                            return 1;
                        } else {
                            return 0;
                        }
                    }
                    let punteggio = 0;
                    const dbRef1 = ref(db, '/Utenti/' + childKey + '/Informazioni');
                    const b = childSnapshot.val();
                    onValue(dbRef1, (snapshot1) => {
                        const a = snapshot1.val();
                        if (!utentiAggiunti.has(childKey)) {
                            if (info.genere == a.Genere && info.province == a.Provincia && parseInt(a.Anni) <= parseInt(info.anni)) {
                                punteggio += confrontaEAssegnaPunteggio(aborto, a.Aborto);
                                punteggio += confrontaEAssegnaPunteggio(alcol, a.Alcol);
                                punteggio += confrontaEAssegnaPunteggio(contraccezione, a.Contraccezione);
                                punteggio += confrontaEAssegnaPunteggio(eutanasia, a.Eutanasia);
                                punteggio += confrontaEAssegnaPunteggio(figli, a.Figli);
                                punteggio += confrontaEAssegnaPunteggio(fumo, a.Fumo);
                                punteggio += confrontaEAssegnaPunteggio(lgbt, a.LGBT);
                                punteggio += confrontaEAssegnaPunteggio(politica, a.Politica);
                                punteggio += confrontaEAssegnaPunteggio(sesso, a.Sesso);
                                punteggio += confrontaEAssegnaPunteggio(valoreVita, a.ValoreVita);

                                punteggio = ((100 * punteggio) / 10).toFixed();
                                punteggio = "La tua affinità è: " + punteggio + "%";
                                const utenti1 = {
                                    id: childKey,
                                    aborto: a.Aborto,
                                    alcol: a.Alcol,
                                    altezza: a.Altezza,
                                    anni: a.Anni,
                                    contraccezione: a.Contraccezione,
                                    dataNascita: a.DataDiNascita,
                                    eutanasia: a.Eutanasia,
                                    fede: a.Fede,
                                    figli: a.Figli,
                                    poiFigli: a.PoiFigli,
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
                                    descrizione: a.Descrizione,
                                    passioni: passioni,
                                    sport: sport,
                                    musica: musica,
                                    punteggio: punteggio,
                                    cerca: cerca,
                                };

                                dispatch(add(utenti1));

                                utentiAggiunti.add(childKey);
                            } else {
                                if (isChecked) {
                                    punteggio += confrontaEAssegnaPunteggio(aborto, a.Aborto);
                                    punteggio += confrontaEAssegnaPunteggio(alcol, a.Alcol);
                                    punteggio += confrontaEAssegnaPunteggio(contraccezione, a.Contraccezione);
                                    punteggio += confrontaEAssegnaPunteggio(eutanasia, a.Eutanasia);
                                    punteggio += confrontaEAssegnaPunteggio(figli, a.Figli);
                                    punteggio += confrontaEAssegnaPunteggio(fumo, a.Fumo);
                                    punteggio += confrontaEAssegnaPunteggio(lgbt, a.LGBT);
                                    punteggio += confrontaEAssegnaPunteggio(politica, a.Politica);
                                    punteggio += confrontaEAssegnaPunteggio(sesso, a.Sesso);
                                    punteggio += confrontaEAssegnaPunteggio(valoreVita, a.ValoreVita);

                                    punteggio = ((100 * punteggio) / 10).toFixed();
                                    punteggio = "La tua affinità è: " + punteggio + "%";
                                    const utenti1 = {
                                        id: childKey,
                                        aborto: a.Aborto,
                                        alcol: a.Alcol,
                                        altezza: a.Altezza,
                                        anni: a.Anni,
                                        contraccezione: a.Contraccezione,
                                        dataNascita: a.DataDiNascita,
                                        eutanasia: a.Eutanasia,
                                        fede: a.Fede,
                                        figli: a.Figli,
                                        poiFigli: a.PoiFigli,
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
                                        descrizione: a.Descrizione,
                                        passioni: passioni,
                                        sport: sport,
                                        musica: musica,
                                        punteggio: punteggio,
                                        cerca: cerca,
                                    };

                                    dispatch(add(utenti1));
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

    function Match() {
        dispatch(reset());
        let aborto = "";
        let alcol = "";
        let contraccezione = "";
        let eutanasia = "";
        let fede = "";
        let figli = "";
        let poiFigli = "";
        let fumo = "";
        let lgbt = "";
        let messa = "";
        let politica = "";
        let sesso = "";
        let valoreVita = "";

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
            poiFigli = a.PoiFigli;
            fumo = a.Fumo;
            lgbt = a.LGBT;
            messa = a.Messa;
            politica = a.Politica;
            sesso = a.Sesso;
            valoreVita = a.ValoreVita;

        }, {
            onlyOnce: true
        });


        onValue(dbRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                if (childKey != getUid) {
                    let passioni = [];
                    let sport = [];
                    let musica = [];
                    let cerca = [];
                    const dbRef2 = ref(db, '/Utenti/' + childKey + '/Informazioni/Passioni');
                    const dbRef3 = ref(db, '/Utenti/' + childKey + '/Informazioni/Sport');
                    const dbRef4 = ref(db, '/Utenti/' + childKey + '/Informazioni/Musica');
                    const dbRef5 = ref(db, '/Utenti/' + childKey + '/Informazioni/Cerca');
                    onValue(dbRef2, (snapshot) => {
                        snapshot.forEach((childSnapshot) => {
                            passioni.push(childSnapshot.val())

                        }, {
                            onlyOnce: true
                        });

                    })
                    onValue(dbRef3, (snapshot) => {
                        snapshot.forEach((childSnapshot) => {
                            sport.push(childSnapshot.val())

                        }, {
                            onlyOnce: true
                        });

                    })
                    onValue(dbRef4, (snapshot) => {
                        snapshot.forEach((childSnapshot) => {
                            musica.push(childSnapshot.val())

                        }, {
                            onlyOnce: true
                        });
                    })
                    onValue(dbRef5, (snapshot) => {
                        snapshot.forEach((childSnapshot) => {
                            cerca.push(childSnapshot.val())

                        }, {
                            onlyOnce: true
                        });
                    })

                    function confrontaEAssegnaPunteggio(valoreSinistra, valoreDestra) {
                        if (valoreSinistra === valoreDestra) {
                            return 1;
                        } else {
                            return 0;
                        }
                    }


                    let punteggio = 0;

                    const dbRef1 = ref(db, '/Utenti/' + childKey + '/Informazioni');
                    const b = childSnapshot.val();
                    onValue(dbRef1, (snapshot1) => {
                        const a = snapshot1.val();
                        if (!utentiAggiunti.has(childKey)) {
                            punteggio += confrontaEAssegnaPunteggio(aborto, a.Aborto);
                            punteggio += confrontaEAssegnaPunteggio(alcol, a.Alcol);
                            punteggio += confrontaEAssegnaPunteggio(contraccezione, a.Contraccezione);
                            punteggio += confrontaEAssegnaPunteggio(eutanasia, a.Eutanasia);
                            punteggio += confrontaEAssegnaPunteggio(figli, a.Figli);
                            punteggio += confrontaEAssegnaPunteggio(fumo, a.Fumo);
                            punteggio += confrontaEAssegnaPunteggio(lgbt, a.LGBT);
                            punteggio += confrontaEAssegnaPunteggio(politica, a.Politica);
                            punteggio += confrontaEAssegnaPunteggio(sesso, a.Sesso);
                            punteggio += confrontaEAssegnaPunteggio(valoreVita, a.ValoreVita);

                            if (punteggio >= 8) {
                                punteggio = ((100 * punteggio) / 10).toFixed();
                                punteggio = "La tua affinità è: " + punteggio + "%";
                                const utenti1 = {
                                    id: childKey,
                                    aborto: a.Aborto,
                                    alcol: a.Alcol,
                                    altezza: a.Altezza,
                                    anni: a.Anni,
                                    contraccezione: a.Contraccezione,
                                    dataNascita: a.DataDiNascita,
                                    eutanasia: a.Eutanasia,
                                    fede: a.Fede,
                                    figli: a.Figli,
                                    poiFigli: a.PoiFigli,
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
                                    descrizione: a.Descrizione,
                                    passioni: passioni,
                                    sport: sport,
                                    musica: musica,
                                    cerca: cerca,
                                    punteggio: punteggio,
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

            {user.currentUser == null ? (
                <div className='bg-blue-600 p-10 grid place-items-center mx-auto'>
                    <button><NavLink to={"/Login"}>Effettua il Login!</NavLink></button>
                </div>
            ) : (
                <div className="w-full grid place-items-center py-10 px-4 mx-auto bg-orange-600">
                    <h1 className="text-white text-center text-4xl font-bold mb-10">
                        Ricerca profili
                    </h1>
                    <div className="w-full grid pb-20 px-4 mx-auto bg-orange-600">
                        <div className='text-left'>
                            <label className='text-white text-lg p-4'>Filtri:</label>
                            <div className='flex p-4 w-[100%]'>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                                {/* Mostra uno stato a seconda se la checkbox è selezionata o meno */}
                                <p className='mx-2 text-white'>{isChecked ? '✔️ Nessun filtro' : '⬅️ Seleziona se non vuoi filtri'}</p>

                            </div>
                            <div className='flex p-4 w-[100%]'>
                                <input
                                    type="checkbox"
                                    checked={isMatch}
                                    onChange={handleCheckboxChange2}
                                />
                                {/* Mostra uno stato a seconda se la checkbox è selezionata o meno */}
                                <p className='mx-2 text-white'>{isMatch ? '✔️ Ricerca avviata' : "⬅️ Trova un match superiore all'80%"}</p>

                            </div>
                            {!isChecked && !isMatch ?
                                <div>
                                    <div className='p-4 w-[100%]'>
                                        <Select
                                            name='genere'
                                            id="genere"
                                            options={genere}
                                            onChange={handleInfo}
                                        />
                                    </div>
                                    <div className='p-4 w-[100%]'>
                                        <Select
                                            id="province"
                                            options={province}
                                            onChange={handleInfo}
                                        />
                                    </div>
                                    <div className='p-4 w-[100%]'>
                                        <Select
                                            id="anni"
                                            options={anni}
                                            onChange={handleInfo}
                                        />
                                    </div>
                                </div>
                                :
                                null
                            }

                        </div>
                    </div>

                    <div className="w-full grid py-10 px-4 rounded-lg mx-auto bg-white">
                        {utenti.length == 0 ?
                            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-10">
                                <h2 className='text-black'>Nessun utente corrisponde alla ricerca</h2>
                            </div> :

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 md:gap-5 ">
                                {utenti.map((utente) => (
                                    <CardItem
                                        key={utente.id}
                                        utenteID={utente.id}
                                        isVerificated={utente.verificato}
                                        imgURL={utente.immagineProfilo}
                                        punteggio={utente.punteggio}
                                        cerca={utente.cerca}
                                        title={utente.nome + " " + utente.cognome + ", " + utente.anni}>
                                        {utente.provincia}
                                    </CardItem>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            )}

            <Space />
            <Footer />
        </>
    );
}

export default Ricerca;