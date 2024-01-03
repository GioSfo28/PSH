import { NavLink } from 'react-router-dom';
import { useState } from 'react'
import Select from "react-select";
import WindowsTop from '../hooks/WindowsTop.jsx';
import Navbar from '../components/Navbar.jsx';

import Space from '../components/Space.jsx';
import Footer from '../components/Footer.jsx';

import { selectUsers } from '../redux/usersSlice.js';
import { useSelector } from "react-redux";


import { getDatabase, ref, set, onValue, remove, push, child } from "firebase/database";




function DomandeEsami() {
    WindowsTop();
    const user = useSelector(selectUsers);
    const getUsername = localStorage.getItem("usernameData");
    const getStatus = localStorage.getItem("statusData");

    //DATABASE
    const db = getDatabase();
    var dbRef = "";

    // VARIE PER SIMULATORE
    var domande = [];
    var risp_A = [];
    var risp_B = [];
    var risp_C = [];
    var risp_D = [];
    var risp_E = [];
    var risp_G = [];
    var numFigli = 0;
    var random = 0;
    var domNum = 0;
    var domNum1 = 0;
    var nr = 0;
    var next1 = 0;

    var punteggio = 0;
    var punti = 0;
    var corrette = 0;
    var sbagliate = 0;
    var NonDate = 0;
    var correx = 0;
    var materia = "";
    var diff = "";

    var PSdisable = false;
    var MEDdisable = false;

    if (getStatus == "PS") {
        MEDdisable = true;
    }
    else if (getStatus == "MED") {
        PSdisable = true;
    }
    else if (getStatus == "Admin") {
        PSdisable = false;
        MEDdisable = false;
    }

    let [mod, setMod] = useState(null);


    const difficolt = [
        { value: "MED", label: "Medicina", isDisabled: MEDdisable },
        { value: "PS", label: "Professioni Sanitarie", isDisabled: PSdisable },
    ];


    const materiePS = [
        { value: "Primo Anno", label: "Primo Anno", isDisabled: true },
        { value: "Biologia", label: "Biologia" },
        { value: "Genetica", label: "Genetica" },
        { value: "Chimica", label: "Chimica" },
        { value: "Fisica", label: "Fisica" },
        { value: "Infermieristica basata sulle evidenze (EBN)", label: "Infermieristica basata sulle evidenze (EBN)" },
        { value: "Infermieristica Generale e Clinica", label: "Infermieristica Generale e Clinica" },
        { value: "Patologia Generale", label: "Patologia Generale" },
        { value: "Anatomia Patologica", label: "Anatomia Patologica" },
        { value: "Microbiologia", label: "Microbiologia" },
        { value: "Secondo Anno", label: "Secondo Anno", isDisabled: true },
        { value: "Infermieristica in area medica", label: "Infermieristica in area medica" },
        { value: "Infermieristica clinica in area specialistica", label: "Infermieristica clinica in area specialistica" },
        { value: "Tirocinio", label: "Tirocinio", isDisabled: true },
        { value: "Tirocinio 1 Infermieristica", label: "Tirocinio 1 Infermieristica" },
        { value: "Tirocinio 2 Infermieristica", label: "Tirocinio 2 Infermieristica" },
        { value: "Tirocinio 3 Infermieristica", label: "Tirocinio 3 Infermieristica" },
    ];


    const materieMED = [
        { value: "Primo Anno", label: "Primo Anno", isDisabled: true },
        { value: "Istologia", label: "Istologia" },
        { value: "Citologia", label: "Citologia" },
        { value: "Embriologia", label: "Embriologia" },
        { value: "Chimica", label: "Chimica" },
        { value: "Biochimica 1", label: "Biochimica 1" },
        { value: "Secondo Anno", label: "Secondo Anno", isDisabled: true },
        { value: "Biochimica 2", label: "Biochimica 2" },
        { value: "Fisiologia 1", label: "Fisiologia 1" },
        { value: "Immunologia", label: "Immunologia" },
    ];


    const handleChangeDiff = (selectedOption) => {
        setMod(selectedOption.value);
    }

    // NO FUNGE

    const handleChangeMaterie = (selectedOption) => {
        materia = selectedOption.value;
        
        dbRef = ref(db, '/Domande/'+ mod +'/'+ materia);
        domNum1 = 0;

        onValue(dbRef, (snapshot) => {
            numFigli = snapshot.val().length;
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const a = childSnapshot.val();
                domande[childKey] = a.Domanda;
                risp_A[childKey] = a.A;
                risp_B[childKey] = a.B;
                risp_C[childKey] = a.C;
                risp_D[childKey] = a.D;
                risp_E[childKey] = a.E;
                risp_G[childKey] = a.RispEsatta;
            });
            document.getElementById("punteggio").innerHTML = "Domanda numero 1 di " + numFigli;
            random = Math.floor(Math.random() * (numFigli));
            domNum = random;
            document.getElementById("domanda_quiz_field").innerHTML = "1) " + domande[random];
            document.getElementById("domanda_quiz_field").value = domande[random];
            document.getElementById("risposta_A").innerHTML = "A) " + risp_A[random];
            document.getElementById("risposta_B").innerHTML = "B) " + risp_B[random];
            document.getElementById("risposta_C").innerHTML = "C) " + risp_C[random];
            if (risp_D[random] != "") {
                document.getElementById("risposta_D").innerHTML = "D) " + risp_D[random];
            } else { document.getElementById("risposta_D").innerHTML = ""; }
            if (risp_E[random] != "") {
                document.getElementById("risposta_E").innerHTML = "E) " + risp_E[random];
            } else { document.getElementById("risposta_E").innerHTML = ""; }
            document.getElementById("risposta_G").innerHTML = "Non rispondo";
            next1 = 1;
            document.getElementById("count").innerHTML = "";
        }, {
            onlyOnce: true
        });
        document.getElementById("risposta_A").style.backgroundColor = '#FFFFFF';
        document.getElementById("risposta_A").style.color = '#000000';
        document.getElementById("risposta_B").style.backgroundColor = '#FFFFFF';
        document.getElementById("risposta_B").style.color = '#000000';
        document.getElementById("risposta_C").style.backgroundColor = '#FFFFFF';
        document.getElementById("risposta_C").style.color = '#000000';
        document.getElementById("risposta_D").style.backgroundColor = '#FFFFFF';
        document.getElementById("risposta_D").style.color = '#000000';
        document.getElementById("risposta_E").style.backgroundColor = '#FFFFFF';
        document.getElementById("risposta_E").style.color = '#000000';
    }

    


    //FUNZIONI PER LA CORREZIONE
    


    // FUNZIONI PER LA GESTIONE DEGLI ERRORI

    

    
    // FUNZIONE PER AVANZARE NELLE DOMANDE
    function ZIOCARO(){
        alert(risp_G);
    }



   

    return (
        <>
            <Navbar></Navbar>
            <Space></Space>

            <div className="w-full py-10 px-4 mx-auto bg-blue-700">
                {
                    user.currentUser == null ?
                        <div className='grid place-items-center mx-auto'>
                            <button><NavLink to={"/Login"}>Effettua il Login!</NavLink></button>
                        </div>
                        :
                        <div className="w-full py-10 px-4 mx-auto bg-blue-700">
                            {getStatus == "Admin" ?
                                <button className='bg-orange-400 hover:bg-white  mb-5'><NavLink className="text-white hover:text-orange-400 py-5" to={"/Admin-Simulatore"}>Pannello di controllo</NavLink></button>
                                :
                                null
                            }
                            <h2 className="mb-10 text-white text-4xl font-bold">Domande d'esami</h2>

                            <div className='grid grid-cols-1 place-items-center'>
                                <div className='w-[250px] mb-7'>
                                    <label className='text-white m-5'>Seleziona la difficoltà:</label>
                                    <Select id="diffdom" options={difficolt} onChange={handleChangeDiff} />
                                </div>
                                <div className='w-auto  mb-7'>
                                    <label className='text-white m-5'>Seleziona la materia:</label>
                                    {mod == "PS" ? <Select id="matedom" options={materiePS} onChange={handleChangeMaterie} /> : <Select id="matedom" options={materieMED} onChange={handleChangeMaterie} /> }
                                </div>
                                <div className='m-5 bg-blue-600'>
                                    <button className='m-5 bg-green-500 text-white hover:bg-white hover:text-green-500'  id="Correggi Errori">Rivedi errori</button>
                                    <button className='m-5 bg-red-500 text-white hover:bg-white hover:text-red-500'  id="Elimina Errori">Reset errori</button>
                                </div>
                            </div>
                            <div className='w-full grid mb-5'>
                                <p className='text-white text-left' id="punteggio"></p>
                                <p className='text-white text-left' id="count"></p>
                                <button className='my-5 text-left' id="domanda_quiz_field"></button>
                                <img id="imagequiz" width="100%" height="100%" ></img>
                                <button className='my-1 text-left' id="risposta_A"></button>
                                <button className='my-1 text-left' id="risposta_B"></button>
                                <button className='my-1 text-left' id="risposta_C"></button>
                                <button className='my-1 text-left' id="risposta_D"></button>
                                <button className='my-1 text-left' id="risposta_E"></button>
                                <button className='my-1 text-left' id="risposta_G"></button>
                            </div>
                            <button className='bg-blue-400 text-white hover:bg-white hover:text-blue-400' onClick={ZIOCARO} id="Avanti">Avanti</button>
                            <div className='bg-blue-600 m-5 p-5 '>
                                <p className='text-white text-left my-2'>C'è un errore nella domanda? <b>Segnalacelo!</b> Scrivi qui sotto il problema e poi clicca su "Segnala"</p>
                                <input className='w-full my-2 rounded-full p-3' placeholder="Segnalazione" id="segnalazione_field" />
                                <button className='bg-blue-400 text-white hover:bg-white hover:text-blue-400 mt-2' id="Segnala">Segnala</button>
                            </div>
                        </div>
                }
            </div>
            <Space></Space>
            <Footer></Footer>
        </>
    );
}

export default DomandeEsami;