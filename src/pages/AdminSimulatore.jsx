import { NavLink } from 'react-router-dom';
import Select from "react-select";
import WindowsTop from '../hooks/WindowsTop.jsx';
import Navbar from '../components/Navbar.jsx';

import Space from '../components/Space.jsx';
import Footer from '../components/Footer.jsx';

import { selectUsers } from '../redux/usersSlice.js';
import { useSelector } from "react-redux";

import { useState } from 'react';


import { getDatabase, ref, set, onValue, remove, push, child } from "firebase/database";




function AdminSimulatore() {
    WindowsTop();

    const user = useSelector(selectUsers);
    const getUsername = localStorage.getItem("usernameData");
    const getStatus = localStorage.getItem("statusData");

    //DATABASE
    const db = getDatabase();
    var dbRef = "";

    var materia = "";
    var rispostaEsatta = "";

    


    const options = [
        { value: "Logica", label: "Logica" },
        { value: "Cultura Generale", label: "Cultura Generale" },
        { value: "Biologia", label: "Biologia" },
        { value: "Chimica", label: "Chimica" },
        { value: "Matematica", label: "Matematica" },
        { value: "Fisica", label: "Fisica" },
    ];

    const risposte = [
        { value: "A", label: "A" },
        { value: "B", label: "B" },
        { value: "C", label: "C" },
        { value: "D", label: "D" },
        { value: "E", label: "E" },
    ]

    let [clear, setClear] = useState(null);
    let [mate, setMate] = useState(null);

    const handleChange = (selectedOption) => {
        setMate(selectedOption);
    }

    const handleChangeRisp = (selectedOption) => {
        setClear(selectedOption);
    }
    

    function AdmSalva() {
        rispostaEsatta = clear.value;
        materia = mate.value;
        var z = 0;
        var admdom = document.getElementById("dom_adm").value.trim();
        var rispA = document.getElementById("rispA_adm").value.trim();
        rispA = rispA.charAt(0).toUpperCase() + rispA.slice(1);
        var rispB = document.getElementById("rispB_adm").value.trim();
        rispB = rispB.charAt(0).toUpperCase() + rispB.slice(1);
        var rispC = document.getElementById("rispC_adm").value.trim();
        rispC = rispC.charAt(0).toUpperCase() + rispC.slice(1);
        var rispD = document.getElementById("rispD_adm").value.trim();
        rispD = rispD.charAt(0).toUpperCase() + rispD.slice(1);
        var rispE = document.getElementById("rispE_adm").value.trim();
        rispE = rispE.charAt(0).toUpperCase() + rispE.slice(1);

        dbRef = ref(db, 'Simulatore/Quesiti/' + materia)

        onValue(dbRef, (snapshot) => {
            if (snapshot.hasChildren()) {
                z = snapshot.val().length;
                set(ref(db, 'Simulatore/Quesiti/' + materia + '/' + z), {
                    Domanda: admdom,
                    A: rispA,
                    B: rispB,
                    C: rispC,
                    D: rispD,
                    E: rispE,
                    RispEsatta: rispostaEsatta
                })
            } else {
                set(ref(db, 'Simulatore/Quesiti/' + materia + '/' + z), {
                    Domanda: admdom,
                    A: rispA,
                    B: rispB,
                    C: rispC,
                    D: rispD,
                    E: rispE,
                    RispEsatta: rispostaEsatta
                })
            }
            alert("Domanda inserita con successo!");
            setClear(null);
            document.getElementById("dom_adm").value = "";
            document.getElementById("rispA_adm").value = "";
            document.getElementById("rispB_adm").value = "";
            document.getElementById("rispC_adm").value = "";
            document.getElementById("rispD_adm").value = "";
            document.getElementById("rispE_adm").value = "";
            document.getElementById("dom_adm").focus();
            

        }, {
            onlyOnce: true
        });
    }


    return (
        <>
            <Navbar></Navbar>
            <Space></Space>
            <div className="w-full py-10 px-4 mx-auto bg-blue-700">
                <button className='bg-orange-400 hover:bg-white  my-2'><NavLink className="text-white hover:text-orange-400 py-5" to={"/Simulatore-Test"}>Simulatore</NavLink></button>
                <h2 className="mb-10 text-white text-4xl font-bold">Pannello di controllo Simulatore</h2>

                {getStatus != "Admin" ?
                    <div className='grid place-items-center mx-auto'>
                        <button><NavLink to={"/"}>Non sei un ADMIN!</NavLink></button>
                    </div>
                    :
                    <div>
                        <div>
                            <div className='grid grid-cols-1 place-items-center'>
                                <div className='w-[250px]'>
                                    <label className='text-white m-5'>Seleziona la materia:</label>
                                    <Select value={mate} id="matedom" options={options} onChange={handleChange} />
                                </div>
                                <div className='m-5 bg-blue-600'>
                                    <button className='bg-blue-400 text-white hover:bg-white hover:text-blue-400 m-2'>Copia</button>
                                    <button className='bg-blue-400 text-white hover:bg-white hover:text-blue-400 m-2'>Stampa</button>

                                </div>
                            </div>
                        </div>
                        <div className='w-full grid mb-5'>
                            <input className='my-5 h-[40px] rounded-full p-4' placeholder="Domanda" id="dom_adm" />
                            <input className='my-1 h-[30px] rounded-full p-4' placeholder="Risposta A" id="rispA_adm" />
                            <input className='my-1 h-[30px] rounded-full p-4' placeholder="Risposta B" id="rispB_adm" />
                            <input className='my-1 h-[30px] rounded-full p-4' placeholder="Risposta C" id="rispC_adm" />
                            <input className='my-1 h-[30px] rounded-full p-4' placeholder="Risposta D" id="rispD_adm" />
                            <input className='my-1 h-[30px] rounded-full p-4' placeholder="Risposta E" id="rispE_adm" />
                        </div>
                        <div>
                            <div className='w-[150px] m-auto'>
                                <label className='text-white'>Risposta esatta:</label>
                                <Select value={clear} className='bg-blue-400' id="rispesatta" options={risposte} onChange={handleChangeRisp} />
                            </div>
                            <button className='bg-blue-400 text-white hover:bg-white hover:text-blue-400 m-5' onClick={AdmSalva}>Inserisci</button>
                        </div>
                    </div>
                }
            </div>
            <Space></Space>
            <Footer></Footer>
        </>
    );
}

export default AdminSimulatore;