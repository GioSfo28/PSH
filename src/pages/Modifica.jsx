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





function Modifica() {
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
        { id: "politica", value: "Estrema Sinistra", label: "Estrema Sinistra" },
        { id: "politica", value: "Sinistra", label: "Sinistra" },
        { id: "politica", value: "Centro", label: "Centro" },
        { id: "politica", value: "Destra", label: "Destra" },
        { id: "politica", value: "Estrema Destra", label: "Estrema Destra" },
        { id: "politica", value: "Apolitico", label: "Apolitico" },
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
        { id: "fede", value: "La Fede è parte delle mie giornate", label: "La Fede è parte delle mie giornate" },
        { id: "fede", value: "La Fede è importante per me", label: "La Fede è importante per me" },
        { id: "fede", value: "Mi aggrappo alla Fede nei momenti di difficoltà", label: "Mi aggrappo alla Fede nei momenti di difficoltà" },
        { id: "fede", value: "Mi considero Cattolico, ma non praticante", label: "Mi considero Cattolico, ma non praticante" },
        { id: "fede", value: "Ho ricevuto un'educazione Cattolica, ma non sono praticante", label: "Ho ricevuto un'educazione Cattolica, ma non sono praticante" },
        { id: "fede", value: "Scoprilo conoscendomi", label: "Scoprilo conoscendomi" },
    ];

    const messa = [
        { id: "messa", value: "Ogni giorno", label: "Ogni giorno" },
        { id: "messa", value: "Una volta a settimana", label: "Una volta a settimana" },
        { id: "messa", value: "Una volta al mese", label: "Una volta al mese" },
        { id: "messa", value: "Raramente", label: "Raramente" },
        { id: "messa", value: "Mai", label: "Mai" },
    ];


    const contraccezione = [
        { id: "contraccezione", value: "Si", label: "Si" },
        { id: "contraccezione", value: "No", label: "No" },
    ];

    const valorevita = [
        { id: "valorevita", value: "Si", label: "Si" },
        { id: "valorevita", value: "No", label: "No" },
    ];

    const aborto = [
        { id: "aborto", value: "Si", label: "Si" },
        { id: "aborto", value: "No", label: "No" },
    ];

    const eutanasia = [
        { id: "eutanasia", value: "Si", label: "Si" },
        { id: "eutanasia", value: "No", label: "No" },
    ];

    const sesso = [
        { id: "sesso", value: "Si", label: "Si" },
        { id: "sesso", value: "No", label: "No" },
    ];

    const lgbt = [
        { id: "lgbt", value: "Si", label: "Si" },
        { id: "lgbt", value: "No", label: "No" },
    ];


    const listaAttivita = [
        { id: 'listaAttivita', value: 'caccia_tesoro', label: 'Caccia al Tesoro' },
        { id: 'listaAttivita', value: 'coding_progetti_personali', label: 'Coding su Progetti Personali' },
        { id: 'listaAttivita', value: 'costruzione_modelli_aeroplani', label: 'Costruzione di Modelli di Aeroplani' },
        { id: 'listaAttivita', value: 'costruzione_modelli_navali', label: 'Costruzione di Modelli Navali' },
        { id: 'listaAttivita', value: 'costruzione_mobili', label: 'Costruzione di Mobili' },
        { id: 'listaAttivita', value: 'corso_yoga', label: 'Corso di Yoga' },
        { id: 'listaAttivita', value: 'corsa', label: "Corsa all'Aperto" },
        { id: 'listaAttivita', value: 'corsi_online', label: 'Corsi Online' },
        { id: 'listaAttivita', value: 'creazione_biglietti_augurali', label: 'Creazione di Biglietti Augurali' },
        { id: 'listaAttivita', value: 'cucina', label: 'Cucina una Nuova Ricetta' },
        { id: 'listaAttivita', value: 'cucina_creativa', label: 'Cucina Creativa' },
        { id: 'listaAttivita', value: 'cucina_etnica', label: 'Cucina Etnica' },
        { id: 'listaAttivita', value: 'cucina_vegana', label: 'Cucina Vegana' },
        { id: 'listaAttivita', value: 'decorare_torte', label: 'Decorare Torte' },
        { id: 'listaAttivita', value: 'disegno', label: 'Disegno Artistico' },
        { id: 'listaAttivita', value: 'escursione_montagna', label: 'Escursione in Montagna' },
        { id: 'listaAttivita', value: 'escursione_natura', label: 'Escursione in Natura' },
        { id: 'listaAttivita', value: 'esplorazione_sotterranei', label: 'Esplorazione di Sotterranei' },
        { id: 'listaAttivita', value: 'fotografia', label: 'Fotografia' },
        { id: 'listaAttivita', value: 'fotografia_astrofotografica', label: 'Fotografia Astrofotografica' },
        { id: 'listaAttivita', value: 'fotografia_macro', label: 'Fotografia Macro' },
        { id: 'listaAttivita', value: 'giardinaggio', label: 'Giardinaggio' },
        { id: 'listaAttivita', value: 'grigliata_amici', label: 'Grigliata con gli Amici' },
        { id: 'listaAttivita', value: 'hobby_artigianato', label: 'Hobby di Artigianato' },
        { id: 'listaAttivita', value: 'karaoke', label: 'Karaoke' },
        { id: 'listaAttivita', value: 'kayak', label: 'Kayak' },
        { id: 'listaAttivita', value: 'lavoro_remoto', label: 'Lavoro Remoto' },
        { id: 'listaAttivita', value: 'lettura_filosofia', label: 'Lettura di Testi di Filosofia' },
        { id: 'listaAttivita', value: 'lettura_libri', label: 'Lettura di Libri' },
        { id: 'listaAttivita', value: 'maratona_serie_tv', label: 'Maratona di Serie TV' },
        { id: 'listaAttivita', value: 'meditazione', label: 'Meditazione' },
        { id: 'listaAttivita', value: 'meditazione_guidata', label: 'Meditazione Guidata' },
        { id: 'listaAttivita', value: 'osservazione_uccelli', label: 'Osservazione degli Uccelli' },
        { id: 'listaAttivita', value: 'osservazione_astronomica', label: 'Osservazione Astronomica' },
        { id: 'listaAttivita', value: 'paddle_board', label: 'Paddle Board' },
        { id: 'listaAttivita', value: 'palestra', label: 'Allenamento in Palestra' },
        { id: 'listaAttivita', value: 'passeggiata_notturna', label: 'Passeggiata Notturna' },
        { id: 'listaAttivita', value: 'passeggiata_parco', label: 'Passeggiata al Parco' },
        { id: 'listaAttivita', value: 'pittura', label: 'Pittura' },
        { id: 'listaAttivita', value: 'pittura_su_tela', label: 'Pittura su Tela' },
        { id: 'listaAttivita', value: 'pittura_su_tessuto', label: 'Pittura su Tessuto' },
        { id: 'listaAttivita', value: 'pratica_strumento_musicale', label: 'Pratica di uno Strumento Musicale' },
        { id: 'listaAttivita', value: 'progettazione_giochi_da_tavolo', label: 'Progettazione di Giochi da Tavolo' },
        { id: 'listaAttivita', value: 'raccogliere_conchiglie', label: 'Raccogliere Conchiglie' },
        { id: 'listaAttivita', value: 'raccogliere_funghi', label: 'Raccogliere Funghi' },
        { id: 'listaAttivita', value: 'scacchi', label: 'Giocare a Scacchi' },
        { id: 'listaAttivita', value: 'scrittura', label: 'Scrittura Creativa' },
        { id: 'listaAttivita', value: 'scrittura_diario', label: 'Scrittura di un Diario' },
        { id: 'listaAttivita', value: 'scrittura_poesie', label: 'Scrittura di Poesie' },
        { id: 'listaAttivita', value: 'scrittura_sci-fi', label: 'Scrittura di Racconti di Sci-Fi' },
        { id: 'listaAttivita', value: 'scultura', label: 'Scultura' },
        { id: 'listaAttivita', value: 'socializzare_amici', label: 'Socializzare con gli Amici' },
        { id: 'listaAttivita', value: 'spettacolo_teatrale', label: 'Spettacolo Teatrale' },
        { id: 'listaAttivita', value: 'surf', label: 'Surf' },
        { id: 'listaAttivita', value: 'svago_video_game', label: 'Svago con i Video Giochi' },
        { id: 'listaAttivita', value: 'teatro_amatoriale', label: 'Partecipazione a un Gruppo Teatrale Amatoriale' },
        { id: 'listaAttivita', value: 'teatro_immersivo', label: 'Teatro Immersivo' },
        { id: 'listaAttivita', value: 'teatro_interattivo', label: 'Partecipazione a un Progetto di Teatro Interattivo' },
        { id: 'listaAttivita', value: 'volo_aliante', label: 'Volo in Aliante' },
        { id: 'listaAttivita', value: 'videogiochi_multigiocatore', label: 'Videogiochi Multigiocatore' },
        { id: 'listaAttivita', value: 'videogiochi_retro', label: 'Videogiochi Retro' },
        { id: 'listaAttivita', value: 'viaggio_esplorativo', label: 'Viaggio Esplorativo' },
        { id: 'listaAttivita', value: 'visita_antiquariato', label: 'Visita a Negozi di Antiquariato' },
        { id: 'listaAttivita', value: 'visita_museo', label: 'Visita a un Museo' },
        { id: 'listaAttivita', value: 'visita_nuovo_ristorante', label: 'Visita a un Nuovo Ristorante' },
        { id: 'listaAttivita', value: 'volontariato', label: 'Attività di Volontariato' },
        { id: 'listaAttivita', value: 'volontariato_locale', label: 'Volontariato Locale' },
    ];



    const listaSport = [
        { id: 'listaSport', value: 'aerial_wrestling', label: 'Lotta Aerea' },
        { id: 'listaSport', value: 'aikido', label: 'Aikido' },
        { id: 'listaSport', value: 'air_wrestling', label: 'Lotta Aerea' },
        { id: 'listaSport', value: 'aquathlon', label: 'Aquathlon' },
        { id: 'listaSport', value: 'archery', label: "Tiro con l'Arco" },
        { id: 'listaSport', value: 'arrampicata', label: 'Arrampicata Sportiva' },
        { id: 'listaSport', value: 'arrampicata_libera', label: 'Arrampicata Libera' },
        { id: 'listaSport', value: 'artistic_gymnastics', label: 'Ginnastica Artistica' },
        { id: 'listaSport', value: 'athletics', label: 'Atletica Leggera' },
        { id: 'listaSport', value: 'badminton', label: 'Badminton' },
        { id: 'listaSport', value: 'barefoot_water_skiing', label: 'Sci Nautico a Piedi Nudi' },
        { id: 'listaSport', value: 'baseball', label: 'Baseball' },
        { id: 'listaSport', value: 'basket', label: 'Basket' },
        { id: 'listaSport', value: 'beach_volleyball', label: 'Pallavolo da Spiaggia' },
        { id: 'listaSport', value: 'beach_wrestling', label: 'Lotta in Spiaggia' },
        { id: 'listaSport', value: 'belt_wrestling', label: 'Lotta con la Cintura' },
        { id: 'listaSport', value: 'bmx', label: 'BMX' },
        { id: 'listaSport', value: 'bodyboarding', label: 'Bodyboard' },
        { id: 'listaSport', value: 'bocce', label: 'Bocce' },
        { id: 'listaSport', value: 'boomerang', label: 'Boomerang' },
        { id: 'listaSport', value: 'boxing', label: 'Boxe' },
        { id: 'listaSport', value: 'brazilian_jiu_jitsu', label: 'Brazilian Jiu-Jitsu' },
        { id: 'listaSport', value: 'canoe_sprint', label: 'Canoa Sprint' },
        { id: 'listaSport', value: 'canoe_slalom', label: 'Canoa Slalom' },
        { id: 'listaSport', value: 'canoe_polo', label: 'Kayak Polo' },
        { id: 'listaSport', value: 'cave_diving', label: 'Subacquea in Grotta' },
        { id: 'listaSport', value: 'catch_wrestling', label: 'Catch Wrestling' },
        { id: 'listaSport', value: 'cable_wakeboarding', label: 'Wakeboard su Cavo' },
        { id: 'listaSport', value: 'capoeira', label: 'Capoeira' },
        { id: 'listaSport', value: 'coasteering', label: 'Coasteering' },
        { id: 'listaSport', value: 'coastal_rowing', label: 'Canottaggio Costiero' },
        { id: 'listaSport', value: 'cosmic_wrestling', label: 'Wrestling Cosmico' },
        { id: 'listaSport', value: 'crossfit', label: 'CrossFit' },
        { id: 'listaSport', value: 'curling', label: 'Curling' },
        { id: 'listaSport', value: 'cycling', label: 'Ciclismo' },
        { id: 'listaSport', value: 'dance_sport', label: 'Danza Sportiva' },
        { id: 'listaSport', value: 'darts', label: 'Freccette' },
        { id: 'listaSport', value: 'dimensional_wrestling', label: 'Wrestling Dimensionale' },
        { id: 'listaSport', value: 'dragon_boat_racing', label: 'Dragon Boat Racing' },
        { id: 'listaSport', value: 'electronic_wrestling', label: 'Wrestling Elettronico' },
        { id: 'listaSport', value: 'equine_vaulting', label: 'Equitazione' },
        { id: 'listaSport', value: 'escrima', label: 'Scherma' },
        { id: 'listaSport', value: 'extreme_grappling', label: 'Grappling Estremo' },
        { id: 'listaSport', value: 'fencing', label: 'Scherma' },
        { id: 'listaSport', value: 'figure_skating', label: 'Pattinaggio Artistico' },
        { id: 'listaSport', value: 'flyboarding', label: 'Flyboard' },
        { id: 'listaSport', value: 'flyfish', label: 'Flyfish' },
        { id: 'listaSport', value: 'football', label: 'Calcio' },
        { id: 'listaSport', value: 'freediving', label: 'Apnea' },
        { id: 'listaSport', value: 'freestyle_skiing', label: 'Sci Freestyle' },
        { id: 'listaSport', value: 'freestyle_wrestling', label: 'Lotta Libera' },
        { id: 'listaSport', value: 'futsal', label: 'Futsal' },
        { id: 'listaSport', value: 'gaelic_football', label: 'Calcio Gaelico' },
        { id: 'listaSport', value: 'golf', label: 'Golf' },
        { id: 'listaSport', value: 'gymnastics', label: 'Ginnastica' },
        { id: 'listaSport', value: 'handball', label: 'Pallamano' },
        { id: 'listaSport', value: 'hapkido', label: 'Hapkido' },
        { id: 'listaSport', value: 'hockey', label: 'Hockey su Ghiaccio' },
        { id: 'listaSport', value: 'hockey_su_prato', label: 'Hockey su Prato' },
        { id: 'listaSport', value: 'horse_racing', label: 'Corsa Ippica' },
        { id: 'listaSport', value: 'hybrid_grappling', label: 'Grappling Ibrido' },
        { id: 'listaSport', value: 'hydrospeed', label: 'Hydrospeed' },
        { id: 'listaSport', value: 'ice_climbing', label: 'Arrampicata su Ghiaccio' },
        { id: 'listaSport', value: 'ice_diving', label: 'Subacquea su Ghiaccio' },
        { id: 'listaSport', value: 'ice_sailing', label: 'Vela su Ghiaccio' },
        { id: 'listaSport', value: 'ice_surfing', label: 'Surf su Ghiaccio' },
        { id: 'listaSport', value: 'ice_swimming', label: 'Nuoto su Ghiaccio' },
        { id: 'listaSport', value: 'ice_wrestling', label: "Lotta nell'Olio" },
        { id: 'listaSport', value: 'integrated_grappling', label: 'Grappling Integrato' },
        { id: 'listaSport', value: 'interdimensional_wrestling', label: 'Wrestling Interdimensionale' },
        { id: 'listaSport', value: 'jello_wrestling', label: 'Jello Wrestling' },
        { id: 'listaSport', value: 'jet_skiing', label: 'Jet Ski' },
        { id: 'listaSport', value: 'judo', label: 'Judo' },
        { id: 'listaSport', value: 'karate', label: 'Karate' },
        { id: 'listaSport', value: 'kayak_polo', label: 'Kayak Polo' },
        { id: 'listaSport', value: 'kendo', label: 'Kendo' },
        { id: 'listaSport', value: 'kickboxing', label: 'Kickboxing' },
        { id: 'listaSport', value: 'kitesurfing', label: 'Kitesurf' },
        { id: 'listaSport', value: 'kneeboarding', label: 'Kneeboard' },
        { id: 'listaSport', value: 'krav_maga', label: 'Krav Maga' },
        { id: 'listaSport', value: 'kung_fu', label: 'Kung Fu' },
        { id: 'listaSport', value: 'luge', label: 'Slittino' },
        { id: 'listaSport', value: 'luta_livre', label: 'Luta Livre' },
        { id: 'listaSport', value: 'maiu_thai', label: 'Muay Thai' },
        { id: 'listaSport', value: 'marathon_swimming', label: 'Nuoto di Fondo' },
        { id: 'listaSport', value: 'modern_pentathlon', label: 'Pentathlon Moderno' },
        { id: 'listaSport', value: 'motocross', label: 'Motocross' },
        { id: 'listaSport', value: 'mountain_biking', label: 'Mountain Bike' },
        { id: 'listaSport', value: 'muay_boran', label: 'Muay Boran' },
        { id: 'listaSport', value: 'netball', label: 'Netball' },
        { id: 'listaSport', value: 'ninjutsu', label: 'Ninjutsu' },
        { id: 'listaSport', value: 'nordic_combined', label: 'Combinata Nordica' },
        { id: 'listaSport', value: 'nuoto', label: 'Nuoto' },
        { id: 'listaSport', value: 'obstacle_course_racing', label: 'Corsa ad Ostacoli' },
        { id: 'listaSport', value: 'octopush', label: 'Octopush' },
        { id: 'listaSport', value: 'oil_wrestling', label: "Lotta nell'Olio" },
        { id: 'listaSport', value: 'paddle', label: 'Paddle' },
        { id: 'listaSport', value: 'parachuting', label: 'Paracadutismo' },
        { id: 'listaSport', value: 'paragliding', label: 'Parapendio' },
        { id: 'listaSport', value: 'pattinaggio', label: 'Pattinaggio' },
        { id: 'listaSport', value: 'pencak_silat', label: 'Pencak Silat' },
        { id: 'listaSport', value: 'pesapallo', label: 'Pesäpallo' },
        { id: 'listaSport', value: 'pickleball', label: 'Pickleball' },
        { id: 'listaSport', value: 'platform_diving', label: 'Tuffi dalla Piattaforma' },
        { id: 'listaSport', value: 'pocket_billiards', label: 'Biliardo a Tasche' },
        { id: 'listaSport', value: 'pole_dancing', label: 'Pole Dance' },
        { id: 'listaSport', value: 'polocrosse', label: 'Polocrosse' },
        { id: 'listaSport', value: 'powerboat_racing', label: 'Motonautica' },
        { id: 'listaSport', value: 'powerlifting', label: 'Powerlifting' },
        { id: 'listaSport', value: 'pradal_serey', label: 'Pradal Serey' },
        { id: 'listaSport', value: 'professional_boxing', label: 'Boxe Professionistica' },
        { id: 'listaSport', value: 'professional_wrestling', label: 'Wrestling Professionistico' },
        { id: 'listaSport', value: 'pump_track', label: 'Pump Track' },
        { id: 'listaSport', value: 'puroresu', label: 'Puroresu' },
        { id: 'listaSport', value: 'push_hands', label: 'Push Hands' },
        { id: 'listaSport', value: 'racewalking', label: 'Marcia' },
        { id: 'listaSport', value: 'racketlon', label: 'Racketlon' },
        { id: 'listaSport', value: 'radio-controlled_car_racing', label: 'Automodellismo' },
        { id: 'listaSport', value: 'rafting', label: 'Rafting' },
        { id: 'listaSport', value: 'rappelling', label: 'Rappelling' },
        { id: 'listaSport', value: 'relay_race', label: 'Staffetta' },
        { id: 'listaSport', value: 'reverse_wrestling', label: 'Wrestling Invertito' },
        { id: 'listaSport', value: 'ringball', label: 'Ringball' },
        { id: 'listaSport', value: 'ringette', label: 'Ringette' },
        { id: 'listaSport', value: 'rodeo', label: 'Rodeo' },
        { id: 'listaSport', value: 'roller_derby', label: 'Roller Derby' },
        { id: 'listaSport', value: 'rope_skipping', label: 'Salto della Corda' },
        { id: 'listaSport', value: 'rounders', label: 'Rounders' },
        { id: 'listaSport', value: 'rowing', label: 'Canottaggio' },
        { id: 'listaSport', value: 'rugby_league', label: 'Rugby a 13' },
        { id: 'listaSport', value: 'rugby_sevens', label: 'Rugby a 7' },
        { id: 'listaSport', value: 'rugby_union', label: 'Rugby a 15' },
        { id: 'listaSport', value: 'running', label: 'Corsa' },
        { id: 'listaSport', value: 'sailing', label: 'Vela' },
        { id: 'listaSport', value: 'salto_asta', label: "Salto con l'asta" },
        { id: 'listaSport', value: 'salto_lungo', label: 'Salto in lungo' },
        { id: 'listaSport', value: 'sambo', label: 'Sambo' },
        { id: 'listaSport', value: 'sandboarding', label: 'Sandboard' },
        { id: 'listaSport', value: 'savate', label: 'Savate' },
        { id: 'listaSport', value: 'sci', label: 'Sci' },
        { id: 'listaSport', value: 'scootering', label: 'Scooter Freestyle' },
        { id: 'listaSport', value: 'scuba_diving', label: 'Subacquea' },
        { id: 'listaSport', value: 'sepaktakraw', label: 'Sepak Takraw' },
        { id: 'listaSport', value: 'shin_kicking', label: 'Shin Kicking' },
        { id: 'listaSport', value: 'shooting_sport', label: 'Tiro Sportivo' },
        { id: 'listaSport', value: 'short_track_speed_skating', label: 'Short Track' },
        { id: 'listaSport', value: 'skeleton', label: 'Skeleton' },
        { id: 'listaSport', value: 'ski_ballet', label: 'Sci Balletto' },
        { id: 'listaSport', value: 'ski_flying', label: 'Salto con gli Sci' },
        { id: 'listaSport', value: 'ski_mountaineering', label: 'Sci Alpinismo' },
        { id: 'listaSport', value: 'ski_orienteering', label: 'Sci Orienteering' },
        { id: 'listaSport', value: 'ski_cross', label: 'Ski Cross' },
        { id: 'listaSport', value: 'ski_joring', label: 'Ski Joring' },
        { id: 'listaSport', value: 'skimboarding', label: 'Skimboard' },
        { id: 'listaSport', value: 'slamball', label: 'Slamball' },
        { id: 'listaSport', value: 'sled_dog_racing', label: 'Cani da Slitta' },
        { id: 'listaSport', value: 'snow_kiting', label: 'Snow Kiting' },
        { id: 'listaSport', value: 'snowboarding', label: 'Snowboard' },
        { id: 'listaSport', value: 'snowmobile_racing', label: 'Gara di Snowmobile' },
        { id: 'listaSport', value: 'soccer_tennis', label: 'Tennis Calcio' },
        { id: 'listaSport', value: 'soft_tennis', label: 'Soft Tennis' },
        { id: 'listaSport', value: 'softball', label: 'Softball' },
        { id: 'listaSport', value: 'speed_golf', label: 'Speed Golf' },
        { id: 'listaSport', value: 'speed_skating', label: 'Pattinaggio di Velocità' },
        { id: 'listaSport', value: 'speedball', label: 'Speedball' },
        { id: 'listaSport', value: 'sprint', label: 'Sprint' },
        { id: 'listaSport', value: 'sprint_football', label: 'Calcio Sprint' },
        { id: 'listaSport', value: 'squash', label: 'Squash' },
        { id: 'listaSport', value: 'synchronized_swimming', label: 'Nuoto Sincronizzato' },
        { id: 'listaSport', value: 'taekwondo', label: 'Taekwondo' },
        { id: 'listaSport', value: 'tai_chi', label: 'Tai Chi' },
        { id: 'listaSport', value: 'tamburello', label: 'Tamburello' },
        { id: 'listaSport', value: 'teamgym', label: 'TeamGym' },
        { id: 'listaSport', value: 'ten_pin_bowling', label: 'Bowling a 10 Birilli' },
        { id: 'listaSport', value: 'tennis', label: 'Tennis' },
        { id: 'listaSport', value: 'tennis_polo', label: 'Polo Tennis' },
        { id: 'listaSport', value: 'tetherball', label: 'Tetherball' },
        { id: 'listaSport', value: 'three-cushion', label: 'Biliardo a 3 Cuscini' },
        { id: 'listaSport', value: 'throwball', label: 'Throwball' },
        { id: 'listaSport', value: 'touch_rugby', label: 'Touch Rugby' },
        { id: 'listaSport', value: 'trampoline_gymnastics', label: 'Ginnastica su Trampolino' },
        { id: 'listaSport', value: 'triathlon', label: 'Triathlon' },
        { id: 'listaSport', value: 'tug_of_war', label: 'Tiro alla Fune' },
        { id: 'listaSport', value: 'ultramarathon', label: 'Ultramaratona' },
        { id: 'listaSport', value: 'underwater_hockey', label: 'Hockey Subacqueo' },
        { id: 'listaSport', value: 'underwater_ice_hockey', label: 'Hockey Subacqueo su Ghiaccio' },
        { id: 'listaSport', value: 'underwater_rugby', label: 'Rugby Subacqueo' },
        { id: 'listaSport', value: 'unicycling', label: 'Monociclismo' },
        { id: 'listaSport', value: 'urban_biking', label: 'Ciclismo Urbano' },
        { id: 'listaSport', value: 'urban_climbing', label: 'Arrampicata Urbana' },
        { id: 'listaSport', value: 'urban_golf', label: 'Golf Urbano' },
        { id: 'listaSport', value: 'urban_street_soccer', label: 'Calcio da Strada Urbano' },
        { id: 'listaSport', value: 'urban_surfing', label: 'Surf da Strada Urbano' },
        { id: 'listaSport', value: 'varzesh-e_pahlavani', label: 'Varzesh-e Pahlavani' },
        { id: 'listaSport', value: 'volleyball', label: 'Pallavolo' },
        { id: 'listaSport', value: 'volleyball_tennis', label: 'Tennis Pallavolo' },
        { id: 'listaSport', value: 'volte', label: 'Volteggi' },
        { id: 'listaSport', value: 'wakeboarding', label: 'Wakeboard' },
        { id: 'listaSport', value: 'walking_football', label: 'Calcio Camminato' },
        { id: 'listaSport', value: 'walking_rugby', label: 'Rugby Camminato' },
        { id: 'listaSport', value: 'wallball', label: 'Wallball' },
        { id: 'listaSport', value: 'wallyball', label: 'Wallyball' },
        { id: 'listaSport', value: 'water_basketball', label: 'Basket Acquatico' },
        { id: 'listaSport', value: 'water_polo', label: 'Pallanuoto' },
        { id: 'listaSport', value: 'weightlifting', label: 'Sollevamento Pesi' },
        { id: 'listaSport', value: 'wheelchair_basketball', label: 'Basket in Sedia a Rotelle' },
        { id: 'listaSport', value: 'wheelchair_curling', label: 'Curling in Sedia a Rotelle' },
        { id: 'listaSport', value: 'wheelchair_dancing', label: 'Danza in Sedia a Rotelle' },
        { id: 'listaSport', value: 'wheelchair_fencing', label: 'Scherma in Sedia a Rotelle' },
        { id: 'listaSport', value: 'wheelchair_rugby', label: 'Rugby in Sedia a Rotelle' },
        { id: 'listaSport', value: 'wheelchair_tennis', label: 'Tennis in Sedia a Rotelle' },
        { id: 'listaSport', value: 'windsurfing', label: 'Windsurf' },
        { id: 'listaSport', value: 'woodball', label: 'Woodball' },
        { id: 'listaSport', value: 'wood_chopping', label: 'Taglio del Legno' },
        { id: 'listaSport', value: 'xare', label: 'Xare' },
        { id: 'listaSport', value: 'xwing', label: 'X-Wing' },
        { id: 'listaSport', value: 'yachting', label: 'Yachting' },
        { id: 'listaSport', value: 'yoga', label: 'Yoga' },
        { id: 'listaSport', value: 'zourkhaneh', label: 'Zourkhaneh' }
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
        { id: 'listaGeneri', value: 'R&B/Soul', label: 'R&B/Soul' },
        { id: 'listaGeneri', value: 'Reggae', label: 'Reggae' },
        { id: 'listaGeneri', value: 'Rock', label: 'Rock' },
        { id: 'listaGeneri', value: 'Ska', label: 'Ska' },
        { id: 'listaGeneri', value: 'World', label: 'World' }
    ]




    const [selectedOpzioni, setSelectedOpzioni] = useState({
        attivita: [],
        sport: [],
        musica: [],
        cerca:[],
    });

    const handleReset = () => {
        setSelectedOpzioni({
            attivita: [],
            sport: [],
            musica: [],
            cerca:[],
        });
    };

    useEffect(() => {
        handleReset();
    },[]);
    

    // La tua funzione handleInfo
    const handleInfoMulti = selectedOptions => {
        
        if (selectedOptions.length > 0) {

            // Copia lo stato attuale
            const updatedOpzioni = { ...selectedOpzioni };

            for (let i = 0; i < selectedOptions.length; i++) {
                switch (selectedOptions[i].id) {
                    case "listaAttivita":
                        if(i==0){
                        updatedOpzioni.attivita = [selectedOptions[i].label];
                        }
                        else{
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
            // Esegui l'upload del file CI
            await uploadCI();

            // Se l'upload ha successo, esegui l'upload del secondo file
            await uploadFile();
            if (ciUpload && imageUpload) {

                var data2 = selectedDate.getMonth() + 1;
                var data1 = selectedDate.getDate() + "-" + data2 + "-" + selectedDate.getFullYear();
                const db = getDatabase(app);
                await update(ref(db, "Utenti/" + getUid + '/Informazioni'), {
                    Genere: info.genere,
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
                            <div className='w-full grid grid-cols-2 gap-5 px-5 place-items-center bg-white rounded-lg shadow-md shadow-black'>
                                <div className='p-4'>
                                    <label>Sei in cerca di:</label>
                                </div>
                                <div className='p-4 w-[100%]'>
                                    <Select id="cerca" isMulti options={cerca} className="basic-multi-select" onChange={handleInfoMulti} />
                                </div>
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
                                    <label>Età?</label>
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
                                    <label>Ora scatta un selfie tenendo in mano la tua carta d'identità con la foto visibile</label>
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
                            </div>
                            <h2 className="my-10 text-white text-4xl font-bold">Alcune domande personali</h2>
                            <div className='w-full grid grid-cols-2 gap-5 px-5 place-items-center bg-white rounded-lg shadow-md shadow-black'>
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
                            <div className='w-full grid grid-cols-2 gap-5 px-5 place-items-center bg-white rounded-lg shadow-md shadow-black'>
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
                            <button className='m-5' onClick={salva}>Salva</button>
                        </div>
                }

            </div>
            <Space></Space>
            <Footer></Footer>
        </>
    );
}

export default Modifica;