
import Navbar from '../components/Navbar.jsx';
import Space from '../components/Space.jsx';
import Footer from "../components/Footer";
import WindowsTop from '../hooks/WindowsTop.jsx';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useMemo, useEffect, useState, } from "react";
import Modal from 'react-modal';
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

    // FINESTRA MODALE
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState('');

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirm = () => {
        // Puoi gestire l'input del messaggio qui
        alert("Hai lasciato un ❤️ con il messaggio!");
        const db = getDatabase();


        update(ref(db, "Utenti/" + cardID + '/Like/' + getUid), {
            Like: 1,
            Messaggio: message,
        });

        // Chiudi la finestra modale
        closeModal();
    };



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
            document.getElementById("descrizione").innerHTML = '"' + utente.descrizione + '"';

            { utente.sesso == "Si" ? document.getElementById("sesso").innerHTML = "✔️ Sesso dopo il matrimonio" : utente.sesso == "No" ? document.getElementById("sesso").innerHTML = "❌ Sesso dopo il matrimonio" : document.getElementById("sesso").innerHTML = "❓​ Sesso dopo il matrimonio" }
            { utente.contraccezione == "Si" ? document.getElementById("contraccezione").innerHTML = "✔️ No contraccezione" : utente.contraccezione == "No" ? document.getElementById("contraccezione").innerHTML = "❌ No contraccezione" : document.getElementById("contraccezione").innerHTML = "❓​ Contraccezione"; }
            { utente.lgbt == "Si" ? document.getElementById("lgbt").innerHTML = "✔️ Contro LGBT" : utente.lgbt == "No" ? document.getElementById("lgbt").innerHTML = "❌ Contro LGBT" : document.getElementById("lgbt").innerHTML = "❓ Questione LGBT" }
            { utente.aborto == "Si" ? document.getElementById("aborto").innerHTML = "✔️ Contro aborto" : utente.aborto == "No" ? document.getElementById("aborto").innerHTML = "❌ Contro aborto" : document.getElementById("aborto").innerHTML = "❓​ Aborto" }
            { utente.eutanasia == "Si" ? document.getElementById("eutanasia").innerHTML = "✔️ Contro eutanasia" : utente.eutanasia == "No" ? document.getElementById("eutanasia").innerHTML = "❌ Contro eutanasia" : document.getElementById("eutanasia").innerHTML = "❓​ Eutanasia" }
            { utente.valoreVita == "Si" ? document.getElementById("valoreVita").innerHTML = "✔️ Sacralità della vita" : utente.valoreVita == "No" ? document.getElementById("valoreVita").innerHTML = "❌ Sacralità della vita" : document.getElementById("valoreVita").innerHTML = "❓​ Sacralità della vita" }
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
        if (utente.contatti == "Whatsapp") {
            if (confirm(utente.nome + " ha deciso di condividere il suo contatto Whatsapp, vuoi aprirlo?")) {
                window.open('https://wa.me/39' + utente.cellulare, '_blank');
            };
        }
        else {
            let linkInsta = utente.instagram.split("@");
            if (confirm(utente.nome + " ha deciso di condividere il suo profilo Instagram, vuoi aprirlo?")) {
                window.open('https://www.instagram.com/' + linkInsta[1], '_blank');
            };
        }
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
                {utente.messaggio ?
                    <>
                        <div className='w-full grid grid-cols-1 text-black text-left bg-white rounded-lg shadow-lg shadow-black m-5 p-5'>

                            <label className='text-3xl font-bold' id='messaggio'>{"Messaggio ricevuto: " + utente.messaggio}</label>
                        </div>
                    </> :
                    null
                }
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 text-black bg-white rounded-t-lg shadow'>
                    <div className='text-center grid place-items-center p-6'>
                        <label className='text-3xl font-bold' id='nomecognome'>{utente.nome + ", " + utente.anni + (utente.verificato ? " ☑️" : "")}</label>
                        <img className='mt-5 w-auto h-[350px] rounded-xl object-cover shadow-md shadow-black hover:scale-150 transition-all ease-linear' id='profilo' src={utente.immagineProfilo} />
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
                            <label title="Lascia un like" className='bg-white shadow-lg shadow-black rounded-full text-center font-bold text-5xl cursor-pointer p-4 m-auto' onClick={openModal} id='love'>❤️</label>
                            <label title="Togli il like" className='bg-white shadow-lg shadow-black rounded-full  text-center font-bold text-5xl cursor-pointer p-4 m-auto' onClick={eliminacuore} id='love'>💔</label>
                            <Modal
                                isOpen={isModalOpen}
                                onRequestClose={closeModal}
                                contentLabel="Finestra Modale"
                                style={{
                                    overlay: {
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    },
                                    content: {
                                        width: '50%', // Imposta la larghezza desiderata
                                        height: '50%', // Imposta l'altezza desiderata
                                        margin: 'auto', // Per centrare la modal
                                    },
                                }}
                            >
                                <div className='grid m-5'>
                                    <h2 className='m-5 text-2xl text-bold text-black'>Oltre al ❤️ lascia un messaggio per rompere il ghiaccio!</h2>
                                    <textarea
                                        className='m-5 border border-black p-2 text-lg'
                                        type="text"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                    <div className='flex m-5 gap-5'>
                                        <button className='bg-blue-400 text-white hover:bg-blue-500' onClick={handleConfirm}>Conferma</button>
                                        <button className='bg-red-400 text-white hover:bg-red-500' onClick={closeModal}>Annulla</button>
                                    </div>
                                </div>
                            </Modal>
                            {utente.matching == true ?
                                <label title="Contattami!" className='bg-white shadow-lg shadow-black rounded-full text-center font-bold text-5xl cursor-pointer p-4 m-auto' onClick={chat} id='chat'>💬</label>
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



