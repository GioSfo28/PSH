import { Link, NavLink, useNavigate } from 'react-router-dom';
import WindowsTop from '../hooks/WindowsTop.jsx';
import Navbar from '../components/Navbar.jsx';
import { getDatabase, ref, onValue } from "firebase/database";
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
                    document.getElementById("sesso").innerHTML = a.Sesso === "Si" ? "✔️ Sesso dopo il matrimonio" : "❌ Sesso dopo il matrimonio";
                    document.getElementById("contraccezione").innerHTML = a.Contraccezione === "Si" ? "✔️ No contraccezione" : "❌ No contraccezione";
                    document.getElementById("lgbt").innerHTML = a.LGBT === "Si" ? "✔️ Contro LGBT" : "❌ Contro LGBT";
                    document.getElementById("aborto").innerHTML = a.Aborto === "Si" ? "✔️ Contro aborto" : "❌ Contro aborto";
                    document.getElementById("eutanasia").innerHTML = a.Eutanasia === "Si" ? "✔️ Contro eutanasia" : "❌ Contro eutanasia";
                    document.getElementById("valoreVita").innerHTML = a.ValoreVita === "Si" ? "✔️ Sacralità della vita" : "❌ Sacralità della vita";
                }, { onlyOnce: true });

                onValue(dbRef1, (snapshot) => {
                    const a = snapshot.val();
                    document.getElementById("profilo").src = a.ImmagineProfilo;
                    document.getElementById("nomecognome").innerHTML = a.Nome + " " + a.Cognome;
                }, { onlyOnce: true });

                const conditionsMet = a.Genere === a.Genere && a.Provincia === a.Provincia && parseInt(a.Anni) <= parseInt(a.Anni);
                const isChecked = true; // Imposta a true o false a seconda delle tue esigenze

                if (conditionsMet || (isChecked && !utentiAggiunti.has(getUid))) {
                    await fetchData("Passioni", setPassioni);
                    await fetchData("Sport", setSport);
                    await fetchData("Musica", setMusica);
                    await fetchData("Cerca", setCerca);

                    const utenti1 = {
                        id: getUid,
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
                        nome: a.Nome,
                        cognome: a.Cognome,
                        immagineProfilo: a.ImmagineProfilo,
                        verificato: a.Verificato,
                    };

                    dispatch(add(utenti1));
                    utentiAggiunti.add(getUid);
                }
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
            <div className="w-full grid place-items-center py-10 px-4 mx-auto bg-blue-700">
                <h2 className="mb-10 text-white text-4xl font-bold">Il tuo profilo</h2>
                {user.currentUser == null ? (
                    <div className='grid place-items-center mx-auto'>
                        <button><NavLink to={"/Login"}>Effettua il Login!</NavLink></button>
                    </div>
                ) : (
                    <div>
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 bg-white rounded-t-lg shadow'>
                            <div className='text-center grid place-items-center p-6'>
                                <label className='text-3xl font-bold ' id='nomecognome'></label>
                                <img className='mt-5 w-[300px] h-[300px] shadow-md shadow-black' id='profilo' />
                                <div className='my-5 grid grid-cols-2 gap-1'>
                                    <label className='bg-gray-300 rounded-full text-center font-bold p-2' id='sesso'></label>
                                    <label className='bg-gray-300 rounded-full text-center font-bold p-2' id='aborto'></label>
                                    <label className='bg-gray-300 rounded-full text-center font-bold p-2' id='contraccezione'></label>
                                    <label className='bg-gray-300 rounded-full text-center font-bold p-2' id='lgbt'></label>
                                    <label className='bg-gray-300 rounded-full text-center font-bold p-2' id='valoreVita'></label>
                                    <label className='bg-gray-300 rounded-full text-center font-bold p-2' id='eutanasia'></label>
                                </div>
                            </div>
                            <div className='text-left p-6 '>
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
                                    <div className='mt-5 grid grid-cols-2'>
                                        {cerca.map((attivita, index) => (
                                            <label className={attivita == "Amicizia" ? 'p-2 mx-10 text-white text-center  bg-blue-500 rounded-full' : 'p-2 mx-10 text-white text-center  bg-red-500 rounded-full'} key={index}>{attivita}</label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 bg-white rounded-b-lg '>
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
                            <Link to={"/Modifica"}><button className='m-5'>Modifica</button></Link>
                    </div>
                )}
            </div>
            <Space />
            <Footer />
        </>
    );
}

export default Profilo;
