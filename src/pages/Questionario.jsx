import { NavLink, useNavigate } from 'react-router-dom';
import WindowsTop from '../hooks/WindowsTop.jsx';
import Navbar from '../components/Navbar.jsx';

import { getDatabase, ref, set, child, get, update } from "firebase/database";
import { auth, app, storage } from '../firebase/config.js';

import { getDownloadURL, ref as storageRef, uploadBytes, } from "firebase/storage";



import CartaBase from '../components/CartaBase.jsx';
import Space from '../components/Space.jsx';
import Footer from '../components/Footer.jsx';

import { selectUsers } from '../redux/usersSlice.js';
import { useSelector } from "react-redux";

import Select from "react-select";

import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";





function Questionario() {
    WindowsTop();
    const [selectedDate, setSelectedDate] = useState(null);
    const user = useSelector(selectUsers);
    const navigate = useNavigate();
    const getUid = localStorage.getItem("uidData");

    const [imageUpload, setImageUpload] = useState(null);
    const [ciUpload, setCiUpload] = useState(null);

    async function uploadFile() {
        try {
            if (!imageUpload) {
                alert("Seleziona un'immagine profilo da caricare!");
                return;
            }

            const imageRef = storageRef(storage, `Utenti/${getUid}/ImmagineProfilo.jpg`);
            const snapshot = await uploadBytes(imageRef, imageUpload);
            const url = await getDownloadURL(snapshot.ref);

            const db = getDatabase(app);
            await update(ref(db, "Utenti/" + getUid), {
                ImmagineProfilo: url
            });

            alert("Immagine caricata correttamente!");

        } catch (error) {
            console.error("Errore durante l'upload dell'immagine profilo:", error.message);
            throw error; // Rilancia l'errore per interrompere l'esecuzione delle operazioni successive
        }
    }

    async function uploadCI() {
        try {
            if (!ciUpload) {
                alert("Carica il selfie con la carta d'identità!");
                return;
            }

            const imageRef = storageRef(storage, `Utenti/${getUid}/CI.jpg`);
            const snapshot = await uploadBytes(imageRef, ciUpload);
            const url = await getDownloadURL(snapshot.ref);

            const db = getDatabase(app);
            await update(ref(db, "Utenti/" + getUid), {
                ImmagineCI: url
            });

        } catch (error) {
            console.error("Errore durante l'upload del file CI:", error.message);
            throw error; // Rilancia l'errore per interrompere l'esecuzione delle operazioni successive
        }
    }



    const [info, setInfo] = useState({});


    const genere = [
        { id: "genere", value: "Maschio", label: "Maschio" },
        { id: "genere", value: "Femmina", label: "Femmina" },
    ];

    const contatti = [
        { id: "contatti", value: "Instagram", label: "Instagram" },
        { id: "contatti", value: "Whatsapp", label: "Whatsapp" },
    ];

    const cerca = [
        { id: "cerca", value: "Amicizia", label: "Amicizia" },
        { id: "cerca", value: "Relazione", label: "Relazione" },
    ];

    const altezza = [
        { id: "altezza", value: "110", label: "110" },
        { id: "altezza", value: "111", label: "111" },
        { id: "altezza", value: "112", label: "112" },
        { id: "altezza", value: "113", label: "113" },
        { id: "altezza", value: "114", label: "114" },
        { id: "altezza", value: "115", label: "115" },
        { id: "altezza", value: "116", label: "116" },
        { id: "altezza", value: "117", label: "117" },
        { id: "altezza", value: "118", label: "118" },
        { id: "altezza", value: "119", label: "119" },
        { id: "altezza", value: "120", label: "120" },
        { id: "altezza", value: "121", label: "121" },
        { id: "altezza", value: "122", label: "122" },
        { id: "altezza", value: "123", label: "123" },
        { id: "altezza", value: "124", label: "124" },
        { id: "altezza", value: "125", label: "125" },
        { id: "altezza", value: "126", label: "126" },
        { id: "altezza", value: "127", label: "127" },
        { id: "altezza", value: "128", label: "128" },
        { id: "altezza", value: "129", label: "129" },
        { id: "altezza", value: "130", label: "130" },
        { id: "altezza", value: "131", label: "131" },
        { id: "altezza", value: "132", label: "132" },
        { id: "altezza", value: "133", label: "133" },
        { id: "altezza", value: "134", label: "134" },
        { id: "altezza", value: "135", label: "135" },
        { id: "altezza", value: "136", label: "136" },
        { id: "altezza", value: "137", label: "137" },
        { id: "altezza", value: "138", label: "138" },
        { id: "altezza", value: "139", label: "139" },
        { id: "altezza", value: "140", label: "140" },
        { id: "altezza", value: "141", label: "141" },
        { id: "altezza", value: "142", label: "142" },
        { id: "altezza", value: "143", label: "143" },
        { id: "altezza", value: "144", label: "144" },
        { id: "altezza", value: "145", label: "145" },
        { id: "altezza", value: "146", label: "146" },
        { id: "altezza", value: "147", label: "147" },
        { id: "altezza", value: "148", label: "148" },
        { id: "altezza", value: "149", label: "149" },
        { id: "altezza", value: "150", label: "150" },
        { id: "altezza", value: "151", label: "151" },
        { id: "altezza", value: "152", label: "152" },
        { id: "altezza", value: "153", label: "153" },
        { id: "altezza", value: "154", label: "154" },
        { id: "altezza", value: "155", label: "155" },
        { id: "altezza", value: "156", label: "156" },
        { id: "altezza", value: "157", label: "157" },
        { id: "altezza", value: "158", label: "158" },
        { id: "altezza", value: "159", label: "159" },
        { id: "altezza", value: "160", label: "160" },
        { id: "altezza", value: "161", label: "161" },
        { id: "altezza", value: "162", label: "162" },
        { id: "altezza", value: "163", label: "163" },
        { id: "altezza", value: "164", label: "164" },
        { id: "altezza", value: "165", label: "165" },
        { id: "altezza", value: "166", label: "166" },
        { id: "altezza", value: "167", label: "167" },
        { id: "altezza", value: "168", label: "168" },
        { id: "altezza", value: "169", label: "169" },
        { id: "altezza", value: "170", label: "170" },
        { id: "altezza", value: "171", label: "171" },
        { id: "altezza", value: "172", label: "172" },
        { id: "altezza", value: "173", label: "173" },
        { id: "altezza", value: "174", label: "174" },
        { id: "altezza", value: "175", label: "175" },
        { id: "altezza", value: "176", label: "176" },
        { id: "altezza", value: "177", label: "177" },
        { id: "altezza", value: "178", label: "178" },
        { id: "altezza", value: "179", label: "179" },
        { id: "altezza", value: "180", label: "180" },
        { id: "altezza", value: "181", label: "181" },
        { id: "altezza", value: "182", label: "182" },
        { id: "altezza", value: "183", label: "183" },
        { id: "altezza", value: "184", label: "184" },
        { id: "altezza", value: "185", label: "185" },
        { id: "altezza", value: "186", label: "186" },
        { id: "altezza", value: "187", label: "187" },
        { id: "altezza", value: "188", label: "188" },
        { id: "altezza", value: "189", label: "189" },
        { id: "altezza", value: "190", label: "190" },
        { id: "altezza", value: "191", label: "191" },
        { id: "altezza", value: "192", label: "192" },
        { id: "altezza", value: "193", label: "193" },
        { id: "altezza", value: "194", label: "194" },
        { id: "altezza", value: "195", label: "195" },
        { id: "altezza", value: "196", label: "196" },
        { id: "altezza", value: "197", label: "197" },
        { id: "altezza", value: "198", label: "198" },
        { id: "altezza", value: "199", label: "199" },
        { id: "altezza", value: "200", label: "200" },
        { id: "altezza", value: "201", label: "201" },
        { id: "altezza", value: "202", label: "202" },
        { id: "altezza", value: "203", label: "203" },
        { id: "altezza", value: "204", label: "204" },
        { id: "altezza", value: "205", label: "205" },
        { id: "altezza", value: "206", label: "206" },
        { id: "altezza", value: "207", label: "207" },
        { id: "altezza", value: "208", label: "208" },
        { id: "altezza", value: "209", label: "209" },
        { id: "altezza", value: "210", label: "210" },
        { id: "altezza", value: "211", label: "211" },
        { id: "altezza", value: "212", label: "212" },
        { id: "altezza", value: "213", label: "213" },
        { id: "altezza", value: "214", label: "214" },
        { id: "altezza", value: "215", label: "215" },
        { id: "altezza", value: "216", label: "216" },

    ];


    const province = [
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

    const alcol = [
        { id: "alcol", value: "Mai", label: "Mai" },
        { id: "alcol", value: "Raramente", label: "Raramente" },
        { id: "alcol", value: "In compagnia", label: "In compagnia" },
        { id: "alcol", value: "Regolarmente", label: "Regolarmente" },
        { id: "alcol", value: "Anche troppo", label: "Anche troppo" },
    ];

    const fumo = [
        { id: "fumo", value: "Mai", label: "Mai" },
        { id: "fumo", value: "Raramente", label: "Raramente" },
        { id: "fumo", value: "In compagnia", label: "In compagnia" },
        { id: "fumo", value: "Regolarmente", label: "Regolarmente" },
        { id: "fumo", value: "Anche troppo", label: "Anche troppo" },
    ];

    const oraFigli = [
        { id: "oraFigli", value: "Non ho figli", label: "Non ho figli" },
        { id: "oraFigli", value: "Si, a casa full-time", label: "Si, a casa full-time" },
        { id: "oraFigli", value: "Si, a casa part-time", label: "Si, a casa part-time" },
        { id: "oraFigli", value: "Si, ma non a casa", label: "Si, ma non a casa" },
    ];

    const poiFigli = [
        { id: "poiFigli", value: "Non voglio figli", label: "Non voglio figli" },
        { id: "poiFigli", value: "Si, 1-2", label: "Si, 1-2" },
        { id: "poiFigli", value: "Si, 3-4", label: "Si, 3-4" },
        { id: "poiFigli", value: "Si, più di 4", label: "Si, più di 4" },
    ];

    const politica = [
        { id: "politica", value: "Apolitico", label: "Apolitico" },
        { id: "politica", value: "Estrema Sinistra", label: "Estrema Sinistra" },
        { id: "politica", value: "Sinistra", label: "Sinistra" },
        { id: "politica", value: "Centro", label: "Centro" },
        { id: "politica", value: "Destra", label: "Destra" },
        { id: "politica", value: "Estrema Destra", label: "Estrema Destra" },
    ];

    const istruzione = [
        { id: "istruzione", value: "Licenzia media", label: "Licenzia media" },
        { id: "istruzione", value: "Diploma scuola superiore", label: "Diploma scuola superiore" },
        { id: "istruzione", value: "Laurea Triennale", label: "Laurea Triennale" },
        { id: "istruzione", value: "Laurea", label: "Laurea" },
        { id: "istruzione", value: "Dottorato", label: "Dottorato" },
    ];

    const lavoro = [
        { id: "lavoro", value: "Artista/Musicista/Scrittore", label: "Artista/Musicista/Scrittore" },
        { id: "lavoro", value: "Banca/Servizi Finanziari/Real Estate", label: "Banca/Servizi Finanziari/Real Estate" },
        { id: "lavoro", value: "Amministrativo/Segreteria", label: "Amministrativo/Segreteria" },
        { id: "lavoro", value: "Informatica/Software/Hardware", label: "Informatica/Software/Hardware" },
        { id: "lavoro", value: "Costruttore/Artigiano", label: "Costruttore/Artigiano" },
        { id: "lavoro", value: "Educatore/Insegnante/Ricercatore", label: "Educatore/Insegnante/Ricercatore" },
        { id: "lavoro", value: "Intrattenimento/Giornalismo/Media", label: "Intrattenimento/Giornalismo/Media" },
        { id: "lavoro", value: "Executive/Management", label: "Executive/Management" },
        { id: "lavoro", value: "Ristorazione", label: "Ristorazione" },
        { id: "lavoro", value: "Albergatore/Viaggi", label: "Albergatore/Viaggi" },
        { id: "lavoro", value: "Servizi legali", label: "Servizi legali" },
        { id: "lavoro", value: "Manifatturiero/Distribuzione", label: "Manifatturiero/Distribuzione" },
        { id: "lavoro", value: "Medico/Servizi Sanitari", label: "Medico/Servizi Sanitari" },
        { id: "lavoro", value: "Politica/Governament/Militare", label: "Politica/Governament/Militare" },
        { id: "lavoro", value: "Venditore/Marketing", label: "Venditore/Marketing" },
        { id: "lavoro", value: "Libero Professionista/Impreditore", label: "Libero Professionista/Impreditore" },
        { id: "lavoro", value: "Studente", label: "Studente" },
        { id: "lavoro", value: "Tecnico/Scientifico/Ingegnere", label: "Tecnico/Scientifico/Ingegnere" },
        { id: "lavoro", value: "Trasporti", label: "Trasporti" },
        { id: "lavoro", value: "Altro", label: "Altro" },
    ];

    const fede = [
        { id: "fede", value: "Scoprilo conoscendomi", label: "Scoprilo conoscendomi" },
        { id: "fede", value: "La Fede è parte delle mie giornate", label: "La Fede è parte delle mie giornate" },
        { id: "fede", value: "La Fede è importante per me", label: "La Fede è importante per me" },
        { id: "fede", value: "Mi aggrappo alla Fede nei momenti di difficoltà", label: "Mi aggrappo alla Fede nei momenti di difficoltà" },
        { id: "fede", value: "Mi considero Cattolico, ma non praticante", label: "Mi considero Cattolico, ma non praticante" },
        { id: "fede", value: "Ho ricevuto un'educazione Cattolica, ma non sono praticante", label: "Ho ricevuto un'educazione Cattolica, ma non sono praticante" },
    ];

    const messa = [
        { id: "messa", value: "Ogni giorno", label: "Ogni giorno" },
        { id: "messa", value: "Una volta a settimana", label: "Una volta a settimana" },
        { id: "messa", value: "Una volta al mese", label: "Una volta al mese" },
        { id: "messa", value: "Raramente", label: "Raramente" },
        { id: "messa", value: "Mai", label: "Mai" },
    ];


    const contraccezione = [
        { id: "contraccezione", value: "Non rispondo", label: "Non rispondo" },
        { id: "contraccezione", value: "Si", label: "Si" },
        { id: "contraccezione", value: "No", label: "No" },
    ];

    const valorevita = [
        { id: "valorevita", value: "Non rispondo", label: "Non rispondo" },
        { id: "valorevita", value: "Si", label: "Si" },
        { id: "valorevita", value: "No", label: "No" },
    ];

    const aborto = [
        { id: "aborto", value: "Non rispondo", label: "Non rispondo" },
        { id: "aborto", value: "Si", label: "Si" },
        { id: "aborto", value: "No", label: "No" },
    ];

    const eutanasia = [
        { id: "eutanasia", value: "Non rispondo", label: "Non rispondo" },
        { id: "eutanasia", value: "Si", label: "Si" },
        { id: "eutanasia", value: "No", label: "No" },
    ];

    const sesso = [
        { id: "sesso", value: "Non rispondo", label: "Non rispondo" },
        { id: "sesso", value: "Si", label: "Si" },
        { id: "sesso", value: "No", label: "No" },
    ];

    const lgbt = [
        { id: "lgbt", value: "Non rispondo", label: "Non rispondo" },
        { id: "lgbt", value: "Si", label: "Si" },
        { id: "lgbt", value: "No", label: "No" },
    ];


    const listaAttivita = [
        { id: "listaAttivita", value: "antiquariato", label: "Antiquariato" },
        { id: "listaAttivita", value: "astrologia", label: "Astrologia" },
        { id: "listaAttivita", value: "astronomia", label: "Astronomia" },
        { id: "listaAttivita", value: "caccia_tesoro", label: "Caccia al tesoro" },
        { id: "listaAttivita", value: "coding_progetti_personali", label: "Coding su progetti personali" },
        { id: "listaAttivita", value: "corsa", label: "Corsa all'aperto" },
        { id: "listaAttivita", value: "corsi_online", label: "Corsi online" },
        { id: "listaAttivita", value: "costruzione_mobili", label: "Costruzione mobili" },
        { id: "listaAttivita", value: "costruzione_modelli_aeroplani", label: "Costruzioni di modelli aeroplani" },
        { id: "listaAttivita", value: "costruzione_modelli_navali", label: "Costruzioni di modelli navali" },
        { id: "listaAttivita", value: "cucina_etnica", label: "Cucina etnica" },
        { id: "listaAttivita", value: "cucina_vegana", label: "Cucina Vegana" },
        { id: "listaAttivita", value: "cucinare", label: "Cucinare" },
        { id: "listaAttivita", value: "cucina_creativa", label: "Cucinare in modo creativo" },
        { id: "listaAttivita", value: "decorare_torte", label: "Decorare torte" },
        { id: "listaAttivita", value: "dipingere", label: "Dipingere" },
        { id: "listaAttivita", value: "dipingere_tela", label: "Dipingere su tela" },
        { id: "listaAttivita", value: "disegnare", label: "Disegnare" },
        { id: "listaAttivita", value: "escursione_montagna", label: "Escursione in montagna" },
        { id: "listaAttivita", value: "esplorazione_sotteranei", label: "Esplorazione di sotteranei" },
        { id: "listaAttivita", value: "fai_da_te", label: "Fai da te" },
        { id: "listaAttivita", value: "fotografia", label: "Fotografia" },
        { id: "listaAttivita", value: "giardinaggio", label: "Giardinaggio" },
        { id: "listaAttivita", value: "giocare_scacchi", label: "Giocare a scacchi" },
        { id: "listaAttivita", value: "giochi_da_tavolo", label: "Giochi da tavolo" },
        { id: "listaAttivita", value: "gigliata_amici", label: "Grigliata con gli amici" },
        { id: "listaAttivita", value: "hobby_artigianato", label: "Hobby di artigianato" },
        { id: "listaAttivita", value: "karaoke", label: "Karaoke" },
        { id: "listaAttivita", value: "leggere", label: "Leggere" },
        { id: "listaAttivita", value: "leggere_filosofia", label: "Letture filosofiche" },
        { id: "listaAttivita", value: "meditazione", label: "Meditazione" },
        { id: "listaAttivita", value: "modellismo", label: "Modellismo" },
        { id: "listaAttivita", value: "numismatica", label: "Numismatica" },
        { id: "listaAttivita", value: "passeggiare", label: "Passeggiare" },
        { id: "listaAttivita", value: "pescare", label: "Pescare" },
        { id: "listaAttivita", value: "raccogliere_conchiglie", label: "Raccogliere conchiglie" },
        { id: "listaAttivita", value: "raccogliere_funghi", label: "Raccogliere funghi" },
        { id: "listaAttivita", value: "scrivere", label: "Scrivere" },
        { id: "listaAttivita", value: "scrivere_poesie", label: "Scrivere poesie" },
        { id: "listaAttivita", value: "scrivere_racconti", label: "Scrivere racconti" },
        { id: "listaAttivita", value: "scrivere_diario", label: "Scrivere un diario" },
        { id: "listaAttivita", value: "soccorritore", label: "Soccorritore" },
        { id: "listaAttivita", value: "suonare_uno_strumento", label: "Suonare uno strumento" },
        { id: "listaAttivita", value: "teatro", label: "Teatro" },
        { id: "listaAttivita", value: "serie_tv", label: "Vedere serie TV" },
        { id: "listaAttivita", value: "viaggi", label: "Viaggi" },
        { id: "listaAttivita", value: "viaggi_esotici", label: "Viaggi esotici" },
        { id: "listaAttivita", value: "viaggi_capitali", label: "Viaggi nelle capitali" },
        { id: "listaAttivita", value: "videogames", label: "Videogames" },
        { id: "listaAttivita", value: "visita_museo", label: "Visitare musei" },
        { id: "listaAttivita", value: "volo_aliante", label: "Volo in aliante" },
        { id: "listaAttivita", value: "volo_parapendio", label: "Volo in parapendio" },
        { id: "listaAttivita", value: "volontariato", label: "Volontariato" },

    ];



    const listaSport = [
        { id: "listaSport", value: "aikido", label: "Aikido" },
        { id: "listaSport", value: "apnea", label: "Apnea" },
        { id: "listaSport", value: "arrampicata", label: "Arrampicata" },
        { id: "listaSport", value: "arrampicata_libera", label: "Arrampicata libera" },
        { id: "listaSport", value: "arrampicata_sportiva", label: "Arrampicata sportiva" },
        { id: "listaSport", value: "arrampicata_su_ghiaccio", label: "Arrampicata su ghiaccio" },
        { id: "listaSport", value: "atletica_leggera", label: "Atletica leggera" },
        { id: "listaSport", value: "badminton", label: "Badminton" },
        { id: "listaSport", value: "ballo", label: "Ballo" },
        { id: "listaSport", value: "baseball", label: "Baseball" },
        { id: "listaSport", value: "basket", label: "Basket" },
        { id: "listaSport", value: "beach_volley", label: "Beach Volley" },
        { id: "listaSport", value: "biliardo", label: "Biliardo" },
        { id: "listaSport", value: "bmx", label: "BMX" },
        { id: "listaSport", value: "bocce", label: "Bocce" },
        { id: "listaSport", value: "boomerang", label: "Boomerang" },
        { id: "listaSport", value: "boxe", label: "Boxe" },
        { id: "listaSport", value: "brazilian_jiu_jits", label: "Brazilian Jiu-Jitsu" },
        { id: "listaSport", value: "calcio", label: "Calcio" },
        { id: "listaSport", value: "calisthenics", label: "Calisthenics" },
        { id: "listaSport", value: "canoa", label: "Canoa" },
        { id: "listaSport", value: "canoa_slalom", label: "Canoa slalom" },
        { id: "listaSport", value: "canottaggio", label: "Canottaggio" },
        { id: "listaSport", value: "ciclismo", label: "Ciclismo" },
        { id: "listaSport", value: "corsa_ad_ostacoli", label: "Corsa ad ostacoli" },
        { id: "listaSport", value: "crossfit", label: "Crossfit" },
        { id: "listaSport", value: "curling", label: "Curling" },
        { id: "listaSport", value: "danza", label: "Danza" },
        { id: "listaSport", value: "danza_classica", label: "Danza Classica" },
        { id: "listaSport", value: "danza_moderna", label: "Danza Moderna" },
        { id: "listaSport", value: "downhill", label: "Downhill" },
        { id: "listaSport", value: "equitazione", label: "Equitazione" },
        { id: "listaSport", value: "flyboard", label: "Flyboard" },
        { id: "listaSport", value: "freccette", label: "Freccette" },
        { id: "listaSport", value: "ginnastica_artistica", label: "Ginnastica artistica" },
        { id: "listaSport", value: "golf", label: "Golf" },
        { id: "listaSport", value: "grappling", label: "Grappling" },
        { id: "listaSport", value: "hockey_ghiaccio", label: "Hockey su ghiaccio" },
        { id: "listaSport", value: "hockey_prato", label: "Hockey su prato" },
        { id: "listaSport", value: "immersioni_sub", label: "Immersioni subacque" },
        { id: "listaSport", value: "ippica", label: "Ippica" },
        { id: "listaSport", value: "judo", label: "Judo" },
        { id: "listaSport", value: "Karate", label: "Karate" },
        { id: "listaSport", value: "kayak", label: "Kayak" },
        { id: "listaSport", value: "kickboxing", label: "Kickboxing" },
        { id: "listaSport", value: "kitesurf", label: "Kitesurf" },
        { id: "listaSport", value: "krav_maga", label: "Krav maga" },
        { id: "listaSport", value: "kung_fu", label: "Kung Fu" },
        { id: "listaSport", value: "lotta_aerea", label: "Lotta aerea" },
        { id: "listaSport", value: "lotta_libera", label: "Lotta libera" },
        { id: "listaSport", value: "maratona", label: "Maratona" },
        { id: "listaSport", value: "marcia", label: "Marcia" },
        { id: "listaSport", value: "motocross", label: "Motocross" },
        { id: "listaSport", value: "motonautica", label: "Motonautica" },
        { id: "listaSport", value: "moutain_bike", label: "Mountain bike" },
        { id: "listaSport", value: "muay_thai", label: "Muay Thai" },
        { id: "listaSport", value: "nuoto", label: "Nuoto" },
        { id: "listaSport", value: "nuoto_sincronizzato", label: "Nuoto sincronizzato" },
        { id: "listaSport", value: "paddle", label: "Paddle" },
        { id: "listaSport", value: "palestra", label: "Palestra" },
        { id: "listaSport", value: "pallamano", label: "Pallamano" },
        { id: "listaSport", value: "pallanuoto", label: "Pallanuoto" },
        { id: "listaSport", value: "pallavolo", label: "Pallavolo" },
        { id: "listaSport", value: "paracadutismo", label: "Paracadutismo" },
        { id: "listaSport", value: "parapendio", label: "Parapendio" },
        { id: "listaSport", value: "parkour", label: "Parkour" },
        { id: "listaSport", value: "pattinaggio", label: "Pattinaggio" },
        { id: "listaSport", value: "pattinaggio_artistico", label: "Pattinaggio artistico" },
        { id: "listaSport", value: "ping_pong", label: "Ping Pong" },
        { id: "listaSport", value: "pole_dance", label: "Pole Dance" },
        { id: "listaSport", value: "rafting", label: "Rafting" },
        { id: "listaSport", value: "rugby", label: "Rugby" },
        { id: "listaSport", value: "salto_con_sci", label: "Salto con gli sci" },
        { id: "listaSport", value: "salto_con_l'asta", label: "Salto con l'asta" },
        { id: "listaSport", value: "salto_della_corda", label: "Salto della corda" },
        { id: "listaSport", value: "salto_in_lungo", label: "Salto in lungo" },
        { id: "listaSport", value: "sandboard", label: "Sandboard" },
        { id: "listaSport", value: "scherma", label: "Scherma" },
        { id: "listaSport", value: "sci", label: "Sci" },
        { id: "listaSport", value: "sci_alpinismo", label: "Sci alpinismo" },
        { id: "listaSport", value: "sci_freestyle", label: "Sci freestyle" },
        { id: "listaSport", value: "sci_nautico", label: "Sci nautico" },
        { id: "listaSport", value: "slittino", label: "Slittino" },
        { id: "listaSport", value: "snowboard", label: "Snowboard" },
        { id: "listaSport", value: "sollevamento_pesi", label: "Sollevamento pesi" },
        { id: "listaSport", value: "surf", label: "Surf" },
        { id: "listaSport", value: "taekwondo", label: "Taekwondo" },
        { id: "listaSport", value: "tennis", label: "Tennis" },
        { id: "listaSport", value: "tiro_con_arco", label: "Tirco con l'arco" },
        { id: "listaSport", value: "tiro_alla_fune", label: "Tiro alla fune" },
        { id: "listaSport", value: "tiro_sportivo", label: "Tiro sportivo" },
        { id: "listaSport", value: "triathlon", label: "Triathlon" },
        { id: "listaSport", value: "tuffi", label: "Tuffi dalla piattaforma" },
        { id: "listaSport", value: "vela", label: "Vela" },
        { id: "listaSport", value: "wakeboard", label: "Wakeboard" },
        { id: "listaSport", value: "windsurf", label: "Windsurf" },
        { id: "listaSport", value: "wrestling", label: "Wrestling" },
        { id: "listaSport", value: "yoga", label: "Yoga" },

    ]

    const listaGeneri = [
        { id: 'listaGeneri', value: 'Alternativo', label: 'Alternativo' },
        { id: 'listaGeneri', value: 'Blues', label: 'Blues' },
        { id: 'listaGeneri', value: 'Classica', label: 'Classica' },
        { id: 'listaGeneri', value: 'Country', label: 'Country' },
        { id: 'listaGeneri', value: 'Dance', label: 'Dance' },
        { id: 'listaGeneri', value: 'Elettronica', label: 'Elettronica' },
        { id: 'listaGeneri', value: 'Folk', label: 'Folk' },
        { id: 'listaGeneri', value: 'Hip-Hop/Rap', label: 'Hip-Hop/Rap' },
        { id: 'listaGeneri', value: 'Indie', label: 'Indie' },
        { id: 'listaGeneri', value: 'Jazz', label: 'Jazz' },
        { id: 'listaGeneri', value: 'K-Pop', label: 'K-Pop' },
        { id: 'listaGeneri', value: 'Latino', label: 'Latino' },
        { id: 'listaGeneri', value: 'Metal', label: 'Metal' },
        { id: 'listaGeneri', value: 'Opera', label: 'Opera' },
        { id: 'listaGeneri', value: 'Pop', label: 'Pop' },
        { id: 'listaGeneri', value: 'Rap', label: 'Rap' },
        { id: 'listaGeneri', value: 'R&B/Soul', label: 'R&B/Soul' },
        { id: 'listaGeneri', value: 'Reggae', label: 'Reggae' },
        { id: 'listaGeneri', value: 'Rock', label: 'Rock' },
        { id: 'listaGeneri', value: 'Trap', label: 'Trap' },
        { id: 'listaGeneri', value: 'Ska', label: 'Ska' },
        { id: 'listaGeneri', value: 'World', label: 'World' }
    ]




    const [selectedOpzioni, setSelectedOpzioni] = useState({
        attivita: [],
        sport: [],
        musica: [],
        cerca: [],
    });

    const handleReset = () => {
        setSelectedOpzioni({
            attivita: [],
            sport: [],
            musica: [],
            cerca: [],
        });
    };

    useEffect(() => {
        handleReset();
    }, []);


    // La tua funzione handleInfo
    const handleInfoMulti = selectedOptions => {

        if (selectedOptions.length > 0) {

            // Copia lo stato attuale
            const updatedOpzioni = { ...selectedOpzioni };

            for (let i = 0; i < selectedOptions.length; i++) {
                switch (selectedOptions[i].id) {
                    case "listaAttivita":
                        if (i == 0) {
                            updatedOpzioni.attivita = [selectedOptions[i].label];
                        }
                        else {
                            updatedOpzioni.attivita.push(selectedOptions[i].label);
                        }
                        break;
                    case "listaSport":
                        if (i == 0) {
                            updatedOpzioni.sport = [selectedOptions[i].label];
                        }
                        else {
                            updatedOpzioni.sport.push(selectedOptions[i].label);
                        }

                        break;
                    case "listaGeneri":
                        if (i == 0) {
                            updatedOpzioni.musica = [selectedOptions[i].label];
                        }
                        else {
                            updatedOpzioni.musica.push(selectedOptions[i].label);
                        }

                        break;
                    case "cerca":
                        if (i == 0) {
                            updatedOpzioni.cerca = [selectedOptions[i].label];
                        }
                        else {
                            updatedOpzioni.cerca.push(selectedOptions[i].label);
                        }

                        break;
                }
            }
            setSelectedOpzioni(updatedOpzioni);

        }

    };

    const handleInfo = (selectedOption) => {

        switch (selectedOption.id) {
            case "genere":
                setInfo({ ...info, ["genere"]: selectedOption.value });
                break;
            case "contatti":
                setInfo({ ...info, ["contatti"]: selectedOption.value });
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
            case "poiFigli":
                setInfo({ ...info, ["poiFigli"]: selectedOption.value });
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



    async function salva() {
        try {
            document.getElementById("Caricamento").innerHTML = "Caricamento in corso, attendere...!";
            let profiloInsta = "";
            if (info.contatti == "Instagram") {
                profiloInsta = document.getElementById("instagram").value.trim();
            }
            // Esegui l'upload del file CI
            await uploadCI();

            // Se l'upload ha successo, esegui l'upload del secondo file
            await uploadFile();
            if (ciUpload && imageUpload) {
                let descrizione = "";
                descrizione = document.getElementById("descrizione").value.trim();
                var data2 = selectedDate.getMonth() + 1;
                var data1 = selectedDate.getDate() + "-" + data2 + "-" + selectedDate.getFullYear();
                const db = getDatabase(app);

                await update(ref(db, "Utenti/" + getUid + '/Informazioni'), {
                    Genere: info.genere,
                    Contatti: info.contatti,
                    Instagram: profiloInsta,
                    Altezza: info.altezza,
                    Provincia: info.province,
                    DataDiNascita: data1,
                    Anni: info.anni,
                    Alcol: info.alcol,
                    Fumo: info.fumo,
                    Figli: info.oraFigli,
                    PoiFigli: info.poiFigli,
                    Politica: info.politica,
                    Istruzione: info.istruzione,
                    Lavoro: info.lavoro,
                    Fede: info.fede,
                    Messa: info.messa,
                    Contraccezione: info.contraccezione,
                    Sesso: info.sesso,
                    ValoreVita: info.valorevita,
                    Aborto: info.aborto,
                    Eutanasia: info.eutanasia,
                    LGBT: info.lgbt,
                    Passioni: selectedOpzioni.attivita,
                    Sport: selectedOpzioni.sport,
                    Musica: selectedOpzioni.musica,
                    Cerca: selectedOpzioni.cerca,
                    Descrizione: descrizione,
                });

                alert("Profilo salvato con successo!");
                navigate("/Profilo");
                setInfo(null);
            }
        } catch (error) {
            // Gestisci l'errore qui, ad esempio mostra un messaggio all'utente o fai altro
            console.error("Errore durante il salvataggio del profilo:", error.message);
            alert("Non hai caricato correttamente le immagini richieste. Riprova.");
        }
    }


    return (
        <>
            <Navbar></Navbar>
            <Space></Space>
            <div className="w-full grid place-items-center py-10 px-4 mx-auto bg-blue-700">
                <h2 className="mb-10 text-white text-4xl font-bold">Completa il tuo profilo!</h2>
                {
                    user.currentUser == null ?
                        <div className='grid place-items-center mx-auto'>
                            <button><NavLink to={"/Login"}>Effettua il Login!</NavLink></button>
                        </div>
                        :
                        <div>
                            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 px-5 place-items-center text-black bg-white rounded-lg shadow-md shadow-black'>
                                <div className='p-4'>
                                    <label>Sei in cerca di (puoi selezionarle entrambe):</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select id="cerca" isMulti options={cerca} className="basic-multi-select" onChange={handleInfoMulti} />
                                </div>
                                <div className='grid p-4'>
                                    <label>Come preferisci essere contattato?</label>
                                    <label className='text-gray-500 underline underline-offset-4 '>(La modalità di contatto sarà mostrata solo in caso di MATCH)</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select name='contact' id="contact" options={contatti} onChange={handleInfo} />
                                </div>
                                {info.contatti == "Instagram" ?
                                    <>
                                        <div className='grid p-4'>
                                            <label>Profilo instagram:</label>
                                        </div>
                                        <div className='p-4 w-[100%]'>
                                            <input type="text" name="instagram" id="instagram" placeholder="@tuo_profilo" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"></input>
                                        </div>
                                    </>
                                    :
                                    null
                                }

                                <div className='p-4'>
                                    <label>Genere:</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select name='genere' id="genere" options={genere} onChange={handleInfo} />
                                </div>
                                <div className='p-4'>
                                    <label>Altezza (in cm):</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select id="altezza" options={altezza} onChange={handleInfo} />
                                </div>
                                <div className='p-4'>
                                    <label>Vivi in provincia di:</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select id="province" options={province} onChange={handleInfo} />
                                </div>
                                <div className='p-4 '>
                                    <label>Inserisci la tua data di nascita: </label>
                                </div>
                                <div className='p-4 '>
                                    <DatePicker
                                        className='border-2 border-blue-500 p-1'
                                        showIcon
                                        dateFormat="dd/MM/yyyy"
                                        selected={selectedDate}
                                        onChange={(date) => setSelectedDate(date)}
                                        maxDate={new Date()}
                                        isClearable
                                        showMonthDropdown
                                        scrollableMonthYearDropdown
                                        showYearDropdown
                                    />
                                </div>
                                <div className='p-4'>
                                    <label>Quanti anni hai?</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select id="anni" options={anni} onChange={handleInfo} />
                                </div>
                                <div className='p-4'>
                                    <label>Carica una tua foto profilo:</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <input
                                        label="Image"
                                        placeholder="Choose image"
                                        accept="image/png,image/jpeg"
                                        type="file"
                                        onChange={(e) => {
                                            setImageUpload(e.target.files[0]);
                                        }}
                                    />
                                </div>
                                <div className='p-4'>
                                    <label>Ora scatta un foto alla tua carta d'identità leggibile e con la foto visibile</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <input
                                        label="Image"
                                        placeholder="Choose image"
                                        accept="image/png,image/jpeg"
                                        type="file"
                                        onChange={(e) => {
                                            setCiUpload(e.target.files[0]);
                                        }}
                                    />
                                </div>
                                <div className='p-4'>
                                    <label>Aggiungi una tua descrizione:</label>
                                </div>
                                <div className='p-4'>
                                    <textarea className='border border-black p-2' name="descrizione" id="descrizione" cols="35" rows="10"></textarea>
                                </div>
                            </div>
                            <h2 className="my-10 text-white text-4xl font-bold">Alcune domande personali</h2>
                            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 px-5 place-items-center text-black bg-white rounded-lg shadow-md shadow-black'>
                                <div className='p-4'>
                                    <label>Bevi alcolici?</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select id="alcol" options={alcol} onChange={handleInfo} />
                                </div>
                                <div className='p-4'>
                                    <label>Fumi?</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select id="fumo" options={fumo} onChange={handleInfo} />
                                </div>
                                <div className='p-4'>
                                    <label>Attualmente hai figli?</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select id="oraFigli" options={oraFigli} onChange={handleInfo} />
                                </div>
                                <div className='p-4'>
                                    <label>Vorresti averne in futuro?</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select id="poiFigli" options={poiFigli} onChange={handleInfo} />
                                </div>
                                <div className='p-4'>
                                    <label>Descrivi la tua visione politica:</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select id="politica" options={politica} onChange={handleInfo} />
                                </div>
                                <div className='p-4'>
                                    <label>Il tuo livello di istruzione:</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select id="istruzione" options={istruzione} onChange={handleInfo} />
                                </div>
                                <div className='p-4'>
                                    <label>Il tuo ambito lavorativo:</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select id="lavoro" options={lavoro} onChange={handleInfo} />
                                </div>
                                <div className='p-4'>
                                    <label>Quanto pratichi la tua Fede?</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select id="fede" options={fede} onChange={handleInfo} />
                                </div>
                                <div className='p-4'>
                                    <label>Ogni quanto vai a Messa?</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select id="messa" options={messa} onChange={handleInfo} />
                                </div>
                                <div className='p-4'>
                                    <label>Accetti gli insegnamenti della Chiesa sulla contraccezione?</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select id="contraccezione" options={contraccezione} onChange={handleInfo} />
                                </div>
                                <div className='p-4'>
                                    <label>Accetti gli insegnamenti della Chiesa sul sesso prematrimoniale?</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select id="sesso" options={sesso} onChange={handleInfo} />
                                </div>
                                <div className='p-4'>
                                    <label>Accetti gli insegnamenti della Chiesa sulla Santità della Vita?</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select id="valorevita" options={valorevita} onChange={handleInfo} />
                                </div>
                                <div className='p-4'>
                                    <label>Accetti gli insegnamenti della Chiesa sull'aborto?</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select id="aborto" options={aborto} onChange={handleInfo} />
                                </div>
                                <div className='p-4'>
                                    <label>Accetti gli insegnamenti della Chiesa sull'eutanasia?</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select id="eutanasia" options={eutanasia} onChange={handleInfo} />
                                </div>
                                <div className='p-4'>
                                    <label>Accetti gli insegnamenti della Chiesa sulla questione LGBT?</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select id="lgbt" options={lgbt} onChange={handleInfo} />
                                </div>

                            </div>
                            <h2 className="my-10 text-white text-4xl font-bold">Ultima richiesta: le tue passioni!</h2>
                            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 px-5 place-items-center text-black bg-white rounded-lg shadow-md shadow-black'>
                                <div className='p-4'>
                                    <label>Seleziona le tue passioni:</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select id="listaAttivita" isMulti options={listaAttivita} className="basic-multi-select" onChange={handleInfoMulti} />
                                </div>
                                <div className='p-4'>
                                    <label>Seleziona i tuoi sport:</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select id="listaSport" isMulti options={listaSport} className="basic-multi-select" onChange={handleInfoMulti} />
                                </div>
                                <div className='p-4'>
                                    <label>Seleziona i tuoi gusti musicali:</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select id="listaGeneri" isMulti options={listaGeneri} className="basic-multi-select" onChange={handleInfoMulti} />
                                </div>
                            </div>
                            <button className='m-5 bg-white' onClick={salva}>Salva</button>
                            <label className="text-bold text-white text-3xl" id="Caricamento"></label>
                        </div>
                }

            </div>
            <Space></Space>
            <Footer></Footer>
        </>
    );
}

export default Questionario;