import { Link, NavLink, useNavigate } from 'react-router-dom';
import WindowsTop from '../hooks/WindowsTop.jsx';
import Navbar from '../components/Navbar.jsx';
import { getDatabase, ref, onValue, set, get, } from "firebase/database";
import Space from '../components/Space.jsx';
import Footer from '../components/Footer.jsx';
import { selectUsers } from '../redux/usersSlice.js';
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { reset, add } from '../redux/utentiSlice';

function Profilo() {

    WindowsTop();
    const user = useSelector(selectUsers);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getUid = localStorage.getItem("uidData");
    const [passioni, setPassioni] = useState([]);
    const [sport, setSport] = useState([]);
    const [musica, setMusica] = useState([]);
    const [cerca, setCerca] = useState([]);
    const [numAm, setNumAm] = useState([]);
    const [utentiAggiunti, setUtentiAggiunti] = useState(new Set());

    useEffect(() => {

        const fetchData = async (field, setState) => {

            try {
                const db = getDatabase();
                const dbRef = ref(db, `/Utenti/${getUid}/Informazioni/${field}`);
                await onValue(dbRef, (snapshot) => {
                    const dataArray = [];
                    snapshot.forEach((childSnapshot) => {
                        dataArray.push(childSnapshot.val());
                    });
                    setState(dataArray);
                });

            } catch (error) {
                console.error(`Errore durante il recupero di ${field}:`, error.message);
            }
        };

        const fetchUserData = async (a) => {
            try {
                const db = getDatabase();
                const dbRef = ref(db, `/Utenti/${getUid}/Informazioni`);
                const dbRef1 = ref(db, `/Utenti/${getUid}`);

                onValue(dbRef, (snapshot) => {
                    const a = snapshot.val();
                    document.getElementById("genere").innerHTML = "♀️♂️ " + a.Genere;
                    document.getElementById("altezza").innerHTML = "📏 " + a.Altezza + "cm";
                    document.getElementById("provincia").innerHTML = "📍 " + a.Provincia;
                    document.getElementById("dataNascita").innerHTML = "📅 " + a.DataDiNascita;
                    document.getElementById("anni").innerHTML = "🎂 " + a.Anni;
                    document.getElementById("istruzione").innerHTML = "👨‍🎓 " + a.Istruzione;
                    document.getElementById("lavoro").innerHTML = "💼 " + a.Lavoro;
                    document.getElementById("figli").innerHTML = "👶 " + a.Figli;
                    document.getElementById("poifigli").innerHTML = "🔜👶 " + a.PoiFigli;
                    document.getElementById("fumo").innerHTML = "🚬 " + a.Fumo;
                    document.getElementById("alcol").innerHTML = "🍷 " + a.Alcol;
                    document.getElementById("politica").innerHTML = "🏛️ " + a.Politica;
                    document.getElementById("fede").innerHTML = "🙏 " + a.Fede;
                    document.getElementById("messa").innerHTML = "⛪ " + a.Messa;
                    document.getElementById("descrizione").innerHTML = '"'+a.Descrizione+'"';
                    document.getElementById("sesso").innerHTML = a.Sesso === "Si" ? "✔️ Sesso dopo il matrimonio" : a.Sesso === "No" ? "❌ Sesso dopo il matrimonio" : "❓​ Sesso dopo il matrimonio";
                    document.getElementById("contraccezione").innerHTML = a.Contraccezione === "Si" ? "✔️ No contraccezione" : a.Contraccezione === "No" ? "❌ No contraccezione" : "❓​ Contraccezione";
                    document.getElementById("lgbt").innerHTML = a.LGBT === "Si" ? "✔️ Contro LGBT" : a.LGBT === "No" ? "❌ Contro LGBT" : "❓ Questione LGBT";
                    document.getElementById("aborto").innerHTML = a.Aborto === "Si" ? "✔️ Contro aborto" : a.Aborto === "No" ? "❌ Contro aborto" : "❓​ Aborto";
                    document.getElementById("eutanasia").innerHTML = a.Eutanasia === "Si" ? "✔️ Contro eutanasia" : a.Eutanasia === "No" ? "❌ Contro eutanasia" : "❓​ Eutanasia";
                    document.getElementById("valoreVita").innerHTML = a.ValoreVita === "Si" ? "✔️ Sacralità della vita" : a.ValoreVita === "No" ? "❌ Sacralità della vita" : "❓​ Sacralità della vita";
                }, { onlyOnce: true });

                onValue(dbRef1, (snapshot) => {
                    const a = snapshot.val();
                    document.getElementById("profilo").src = a.ImmagineProfilo;
                    document.getElementById("nomecognome").innerHTML = a.Nome + " " + a.Cognome;
                    document.getElementById("codice").innerHTML = "Il tuo codice amico: " + a.CodiceAmico;
                    const dbRef = ref(db, "CodiciAmico/" + a.CodiceAmico);

                    let z = 0;
                    setNumAm(z);
                    onValue(dbRef, (snapshot) => {
                        snapshot.forEach((childSnapshot) => {
                            z++;
                            setNumAm(z);
                        });
                    }, {
                        onlyOnce: true
                    });

                }, { onlyOnce: true });

                await fetchData("Passioni", setPassioni);
                await fetchData("Sport", setSport);
                await fetchData("Musica", setMusica);
                await fetchData("Cerca", setCerca);


            } catch (error) {
                console.error("Errore durante il recupero dei dati utente:", error.message);
            }
        };

        const db = getDatabase();
        const dbRef = ref(db, "/Utenti");

        dispatch(reset());

        onValue(dbRef, (snapshot) => {

            snapshot.forEach((childSnapshot) => {

                const childKey = childSnapshot.key;
                if (childKey == getUid) {
                    const dbRef1 = ref(db, `/Utenti/${childKey}/Informazioni`);
                    const b = childSnapshot.val();

                    onValue(dbRef1, (snapshot1) => {
                        const a = snapshot1.val();

                        if (!utentiAggiunti.has(childKey)) {
                            fetchUserData(a, b);
                            utentiAggiunti.add(childKey);
                        }
                    }, { onlyOnce: true });
                }
            });
        }, { onlyOnce: true });
    }, []);




    return (
        <>
            <Navbar />
            <Space />

            {user.currentUser == null ? (
                <div className='grid place-items-center mx-auto'>
                    <button><NavLink to={"/Login"}>Effettua il Login!</NavLink></button>
                </div>
            ) : (
                <div className="w-full grid place-items-center py-10 px-4 mx-auto bg-blue-700">
                    <h2 className="mb-10 text-white text-4xl font-bold">Il tuo profilo</h2>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 bg-white rounded-t-lg shadow'>
                        <div className='text-black text-center grid place-items-center p-6'>
                            <label className='text-3xl font-bold ' id='nomecognome'></label>
                            <label className='text-lg font-bold ' id='codice'></label>
                            <label className='text-md font-bold ' id='codiceamico'>Hanno utilizzato il tuo codice: {numAm}</label>
                            <img className='mt-5 w-auto h-[300px] rounded-xl object-cover shadow-md shadow-black' id='profilo' />
                            <div className='my-5 grid grid-cols-2 gap-1'>
                                <label className='bg-gray-300 rounded-full text-center font-bold p-2' id='sesso'></label>
                                <label className='bg-gray-300 rounded-full text-center font-bold p-2' id='aborto'></label>
                                <label className='bg-gray-300 rounded-full text-center font-bold p-2' id='contraccezione'></label>
                                <label className='bg-gray-300 rounded-full text-center font-bold p-2' id='lgbt'></label>
                                <label className='bg-gray-300 rounded-full text-center font-bold p-2' id='valoreVita'></label>
                                <label className='bg-gray-300 rounded-full text-center font-bold p-2' id='eutanasia'></label>
                            </div>
                        </div>
                            
                        <div className='text-black text-left p-6 '>
                            <label className='text-3xl font-bold'>Informazioni</label>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-left gap-6 p-3'>
                                    <label title="Genere" id='genere'></label>
                                    <label title="Altezza" id='altezza'></label>
                                    <label title="Vive in provincia di" id='provincia'></label>
                                    <label title="Data di nascita" id='dataNascita'></label>
                                    <label title="Età" id='anni'></label>
                                    <label title="Istruzione" id='istruzione'></label>
                                    <label title="Ambiente lavorativo" id='lavoro'></label>
                                    <label title="Figli" id='figli'></label>
                                    <label title="Figli in futuro?" id='poifigli'></label>
                                    <label title="Fumo" id='fumo'></label>
                                    <label title="Alcol" id='alcol'></label>
                                    <label title="Orientamento politico" id='politica'></label>
                                    <label title="Fede" id='fede'></label>
                                    <label title="Messa" id='messa'></label>
                            </div>
                            <div className='my-8 mx-4 text-justify bg-blue-600 text-white text-lg text-bold rounded-lg p-6'>
                                <label id='descrizione'></label>
                            </div>
                            <div>
                                <h2 className='mt-10'>In cerca di:</h2>
                                <div className='mt-5 grid grid-cols-2'>
                                    {cerca.map((attivita, index) => (
                                        <label className={attivita == "Amicizia" ? 'p-5 md:p-2 mx-2 md:mx-10 text-white text-center  bg-blue-500 rounded-full' : 'p-5 md:p-2 mx-2 md:mx-10 text-white text-center  bg-red-500 rounded-full'} key={index}>{attivita}</label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 text-black bg-white rounded-b-lg '>
                        <div className='text-left m-4'>
                            <h2>Passioni:</h2>
                            {passioni.map((attivita, index) => (
                                <li key={index}>{attivita}</li>
                            ))}
                        </div>
                        <div className='text-left m-4'>
                            <h2>Sport:</h2>
                            {sport.map((attivita, index) => (
                                <li key={index}>{attivita}</li>
                            ))}
                        </div>
                        <div className='text-left m-4'>
                            <h2>Generi musicali:</h2>
                            {musica.map((attivita, index) => (
                                <li key={index}>{attivita}</li>
                            ))}
                        </div>
                    </div>
                    <Link to={"/Modifica"}><button className='bg-white m-5'>Modifica</button></Link>
                </div>

            )
            }

            <Space />
            <Footer />
        </>
    );
}

export default Profilo;
