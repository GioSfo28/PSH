import { NavLink } from 'react-router-dom';
import Select from "react-select";
import WindowsTop from '../hooks/WindowsTop.jsx';
import Navbar from '../components/Navbar.jsx';

import Space from '../components/Space.jsx';
import Footer from '../components/Footer.jsx';

import { selectUsers } from '../redux/usersSlice.js';
import { useSelector } from "react-redux";


import { getDatabase, ref, set, onValue, remove, push, child } from "firebase/database";




function SimulatoreTest() {
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

    const options = [
        { value: "Logica", label: "Logica" },
        { value: "Cultura Generale", label: "Cultura Generale" },
        { value: "Biologia", label: "Biologia" },
        { value: "Chimica", label: "Chimica" },
        { value: "Matematica", label: "Matematica" },
        { value: "Fisica", label: "Fisica" },
    ];

    const handleChange = (selectedOption) => {
        materia = selectedOption.value;
        dbRef = ref(db, '/Simulatore/Quesiti/' + materia);
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
    function CorreggiA() {
        if (risp_G[domNum] === "A") {
            document.getElementById("risposta_A").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_A").style.color = '#000000';
            punteggio += 1.5;
            corrette += 1;

        } else if (risp_G[domNum] === "B") {
            document.getElementById("risposta_A").style.backgroundColor = '#FF0000';
            document.getElementById("risposta_B").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_B").style.color = '#000000';
            punteggio -= 0.40;
            sbagliate += 1;
            if (correx != 1) {
                RegistraErrore();
            }

        } else if (risp_G[domNum] === "C") {
            document.getElementById("risposta_A").style.backgroundColor = '#FF0000';
            document.getElementById("risposta_C").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_C").style.color = '#000000';
            punteggio -= 0.40;
            sbagliate += 1;
            if (correx != 1) {
                RegistraErrore();
            }

        } else if (risp_G[domNum] === "D") {
            document.getElementById("risposta_A").style.backgroundColor = '#FF0000';
            document.getElementById("risposta_D").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_D").style.color = '#000000';
            punteggio -= 0.40;
            sbagliate += 1;
            if (correx != 1) {
                RegistraErrore();
            }

        } else if (risp_G[domNum] === "E") {
            document.getElementById("risposta_A").style.backgroundColor = '#FF0000';
            document.getElementById("risposta_E").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_E").style.color = '#000000';
            punteggio -= 0.40;
            sbagliate += 1;
            if (correx != 1) {
                RegistraErrore();
            }
        };
        document.getElementById("count").innerHTML = "Il tuo punteggio è di: " + punteggio.toFixed(2) + " su " + (next1 * 1.5) + " totali";
    };

    function CorreggiB() {
        if (risp_G[domNum] === "B") {
            document.getElementById("risposta_B").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_B").style.color = '#000000';
            punteggio += 1.5;
            corrette += 1;

        } else if (risp_G[domNum] === "A") {
            document.getElementById("risposta_B").style.backgroundColor = '#FF0000';
            document.getElementById("risposta_A").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_A").style.color = '#000000';
            punteggio -= 0.40;
            sbagliate += 1;
            if (correx != 1) {
                RegistraErrore();
            }

        } else if (risp_G[domNum] === "C") {
            document.getElementById("risposta_B").style.backgroundColor = '#FF0000';
            document.getElementById("risposta_C").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_C").style.color = '#000000';
            punteggio -= 0.40;
            sbagliate += 1;
            if (correx != 1) {
                RegistraErrore();
            }

        } else if (risp_G[domNum] === "D") {
            document.getElementById("risposta_B").style.backgroundColor = '#FF0000';
            document.getElementById("risposta_D").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_D").style.color = '#000000';
            punteggio -= 0.40;
            sbagliate += 1;
            if (correx != 1) {
                RegistraErrore();
            }

        } else if (risp_G[domNum] === "E") {
            document.getElementById("risposta_B").style.backgroundColor = '#FF0000';
            document.getElementById("risposta_E").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_E").style.color = '#000000';
            punteggio -= 0.40;
            sbagliate += 1;
            if (correx != 1) {
                RegistraErrore();
            }
        };
        document.getElementById("count").innerHTML = "Il tuo punteggio è di: " + punteggio.toFixed(2) + " su " + (next1 * 1.5) + " totali";
    };

    function CorreggiC() {
        if (risp_G[domNum] === "C") {
            document.getElementById("risposta_C").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_C").style.color = '#000000';
            punteggio += 1.5;
            corrette += 1;

        } else if (risp_G[domNum] === "A") {
            document.getElementById("risposta_C").style.backgroundColor = '#FF0000';
            document.getElementById("risposta_A").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_A").style.color = '#000000';
            punteggio -= 0.40;
            sbagliate += 1;
            if (correx != 1) {
                RegistraErrore();
            }

        } else if (risp_G[domNum] === "B") {
            document.getElementById("risposta_C").style.backgroundColor = '#FF0000';
            document.getElementById("risposta_B").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_B").style.color = '#000000';
            punteggio -= 0.40;
            sbagliate += 1;
            if (correx != 1) {
                RegistraErrore();
            }

        } else if (risp_G[domNum] === "D") {
            document.getElementById("risposta_C").style.backgroundColor = '#FF0000';
            document.getElementById("risposta_D").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_D").style.color = '#000000';
            punteggio -= 0.40;
            sbagliate += 1;
            if (correx != 1) {
                RegistraErrore();
            }

        } else if (risp_G[domNum] === "E") {
            document.getElementById("risposta_C").style.backgroundColor = '#FF0000';
            document.getElementById("risposta_E").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_E").style.color = '#000000';
            punteggio -= 0.40;
            sbagliate += 1;
            if (correx != 1) {
                RegistraErrore();
            }

        };
        document.getElementById("count").innerHTML = "Il tuo punteggio è di: " + punteggio.toFixed(2) + " su " + (next1 * 1.5) + " totali";
    };

    function CorreggiD() {
        if (risp_G[domNum] === "D") {
            document.getElementById("risposta_D").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_D").style.color = '#000000';
            punteggio += 1.5;
            corrette += 1;

        } else if (risp_G[domNum] === "A") {
            document.getElementById("risposta_D").style.backgroundColor = '#FF0000';
            document.getElementById("risposta_A").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_A").style.color = '#000000';
            punteggio -= 0.40;
            sbagliate += 1;
            if (correx != 1) {
                RegistraErrore();
            }

        } else if (risp_G[domNum] === "B") {
            document.getElementById("risposta_D").style.backgroundColor = '#FF0000';
            document.getElementById("risposta_B").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_B").style.color = '#000000';
            punteggio -= 0.40;
            sbagliate += 1;
            if (correx != 1) {
                RegistraErrore();
            }

        } else if (risp_G[domNum] === "C") {
            document.getElementById("risposta_D").style.backgroundColor = '#FF0000';
            document.getElementById("risposta_C").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_C").style.color = '#000000';
            punteggio -= 0.40;
            sbagliate += 1;
            if (correx != 1) {
                RegistraErrore();
            }

        } else if (risp_G[domNum] === "E") {
            document.getElementById("risposta_D").style.backgroundColor = '#FF0000';
            document.getElementById("risposta_E").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_E").style.color = '#000000';
            punteggio -= 0.40;
            sbagliate += 1;
            if (correx != 1) {
                RegistraErrore();
            }
        };
        document.getElementById("count").innerHTML = "Il tuo punteggio è di: " + punteggio.toFixed(2) + " su " + (next1 * 1.5) + " totali";
    };

    function CorreggiE() {
        if (risp_G[domNum] === "E") {
            document.getElementById("risposta_E").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_E").style.color = '#000000';
            punteggio += 1.5;
            corrette += 1;

        } else if (risp_G[domNum] === "A") {
            document.getElementById("risposta_E").style.backgroundColor = '#FF0000';
            document.getElementById("risposta_A").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_A").style.color = '#000000';
            punteggio -= 0.40;
            sbagliate += 1;
            if (correx != 1) {
                RegistraErrore();
            }

        } else if (risp_G[domNum] === "B") {
            document.getElementById("risposta_E").style.backgroundColor = '#FF0000';
            document.getElementById("risposta_B").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_B").style.color = '#000000';
            punteggio -= 0.40;
            sbagliate += 1;
            if (correx != 1) {
                RegistraErrore();
            }

        } else if (risp_G[domNum] === "C") {
            document.getElementById("risposta_E").style.backgroundColor = '#FF0000';
            document.getElementById("risposta_C").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_C").style.color = '#000000';
            punteggio -= 0.40;
            sbagliate += 1;
            if (correx != 1) {
                RegistraErrore();
            }

        } else if (risp_G[domNum] === "D") {
            document.getElementById("risposta_E").style.backgroundColor = '#FF0000';
            document.getElementById("risposta_D").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_D").style.color = '#000000';
            punteggio -= 0.40;
            sbagliate += 1;
            if (correx != 1) {
                RegistraErrore();
            }

        };
        document.getElementById("count").innerHTML = "Il tuo punteggio è di: " + punteggio.toFixed(2) + " su " + (next1 * 1.5) + " totali, <b>voto: " + ((30 * punteggio) / (next1 * 1.5)).toFixed(2) + "</b>";
    };

    function CorreggiG() {
        if (risp_G[domNum] === "E") {
            document.getElementById("risposta_E").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_E").style.color = '#000000';
            NonDate += 1;
            if (correx != 1) {
                RegistraErrore();
            }

        } else if (risp_G[domNum] === "A") {
            document.getElementById("risposta_A").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_A").style.color = '#000000';
            NonDate += 1;
            if (correx != 1) {
                RegistraErrore();
            }

        } else if (risp_G[domNum] === "B") {
            document.getElementById("risposta_B").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_B").style.color = '#000000';
            NonDate += 1;
            if (correx != 1) {
                RegistraErrore();
            }

        } else if (risp_G[domNum] === "C") {
            document.getElementById("risposta_C").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_C").style.color = '#000000';
            NonDate += 1;
            if (correx != 1) {
                RegistraErrore();
            }

        } else if (risp_G[domNum] === "D") {
            document.getElementById("risposta_D").style.backgroundColor = '#00FF00';
            document.getElementById("risposta_D").style.color = '#000000';
            NonDate += 1;
            if (correx != 1) {
                RegistraErrore();
            }

        };

    };


    // FUNZIONI PER LA GESTIONE DEGLI ERRORI

    function RegistraErrore() {
        var z = "0";
        dbRef = ref(db, 'Utenti/' + getUsername + '/Domande errate/Simulatore/' + materia);

        onValue(dbRef, (snapshot) => {

            if (!snapshot.hasChildren()) {
                set(ref(db, 'Utenti/' + getUsername + '/Domande errate/Simulatore/' + materia + '/' + z), {
                    Domanda: domande[random],
                    A: risp_A[random],
                    B: risp_B[random],
                    C: risp_C[random],
                    D: risp_D[random],
                    E: risp_E[random],
                    RispEsatta: risp_G[random]
                });
            }
            else {
                z = snapshot.val().length;
                set(ref(db, 'Utenti/' + getUsername + '/Domande errate/Simulatore/' + materia + '/' + z), {
                    Domanda: domande[random],
                    A: risp_A[random],
                    B: risp_B[random],
                    C: risp_C[random],
                    D: risp_D[random],
                    E: risp_E[random],
                    RispEsatta: risp_G[random]
                });
            }
        }, {
            onlyOnce: true
        });
    };

    function CorreggiErrori() {
        correx = 1;
        punteggio = 0;
        corrette = 0;
        sbagliate = 0;
        NonDate = 0;

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
        document.getElementById("risposta_G").style.backgroundColor = '#FFFFFF';
        document.getElementById("risposta_G").style.color = '#000000';

        dbRef = ref(db, 'Utenti/' + getUsername + '/Domande errate/Simulatore/' + materia);

        onValue(dbRef, (snapshot) => {
            if (snapshot.hasChildren()) {
                numFigli = snapshot.val().length;
                alert("Trovati " + numFigli + " errori da rivedere!");
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
                })
                domNum = 0;
                domNum1 = 0;
                document.getElementById("punteggio").innerHTML = "Domanda numero 1 di " + numFigli;
                document.getElementById("domanda_quiz_field").innerHTML = "1) " + domande[0];
                document.getElementById("domanda_quiz_field").value = domande[0];
                document.getElementById("risposta_A").innerHTML = "A) " + risp_A[0];
                document.getElementById("risposta_B").innerHTML = "B) " + risp_B[0];
                document.getElementById("risposta_C").innerHTML = "C) " + risp_C[0];
                if (risp_D[0] != "") {
                    document.getElementById("risposta_D").innerHTML = "D) " + risp_D[0];
                } else { document.getElementById("risposta_D").innerHTML = ""; }
                if (risp_E[0] != "") {
                    document.getElementById("risposta_E").innerHTML = "E) " + risp_E[0];
                } else { document.getElementById("risposta_E").innerHTML = ""; }
                document.getElementById("risposta_G").innerHTML = "Non rispondo";
                next1 = 1;
                document.getElementById("count").innerHTML = "";
            } else {
                alert("Errori per questa materia non registrati!");
            }
        }, {
            onlyOnce: true
        });

    }

    function EliminaErrori() {

        remove(ref(db, 'Utenti/' + getUsername + '/Domande errate/Simulatore/' + materia));

        alert("Gli errori della materia '" + materia + "' sono stati eliminati!");

        correx = 0;
        punteggio = 0;
        corrette = 0;
        sbagliate = 0;
        NonDate = 0;

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
        document.getElementById("risposta_G").style.backgroundColor = '#FFFFFF';
        document.getElementById("risposta_G").style.color = '#000000';

        document.getElementById("punteggio").innerHTML = "";
        document.getElementById("count").innerHTML = "";

        document.getElementById("domanda_quiz_field").innerHTML = "Seleziona una materia!";
        document.getElementById("risposta_A").innerHTML = "";
        document.getElementById("risposta_B").innerHTML = "";
        document.getElementById("risposta_C").innerHTML = "";
        document.getElementById("risposta_D").innerHTML = "";
        document.getElementById("risposta_E").innerHTML = "";
        document.getElementById("risposta_G").innerHTML = "";
    }

    // FUNZIONE PER AVANZARE NELLE DOMANDE
    function Next() {
        if (next1 != 0 && correx === 0) {
            next1 += 1;
            if (numFigli === domNum1 + 1) {
                alert("Domande finite!");
                document.getElementById("punteggio").innerHTML = "Il tuo punteggio è stato di: " + ((30 * punteggio) / (numFigli * 1)).toFixed(2);
                document.getElementById("count").innerHTML = "Risposte corrette: " + corrette + "<br>Risposte sbagliate: " + sbagliate + "<br>Risposte non date: " + NonDate;
                next1 = 0;
                document.getElementById("domanda_quiz_field").innerHTML = "Seleziona una materia!";
                document.getElementById("risposta_A").innerHTML = "";
                document.getElementById("risposta_B").innerHTML = "";
                document.getElementById("risposta_C").innerHTML = "";
                document.getElementById("risposta_D").innerHTML = "";
                document.getElementById("risposta_E").innerHTML = "";
                document.getElementById("risposta_G").innerHTML = "";
            } else {
                domNum += 1;
                domNum1 += 1;
                punti = domNum1 * 1.5;
                nr = (domNum1 + 1)

                document.getElementById("punteggio").innerHTML = "Domanda numero " + nr + " di " + numFigli;
                domande.splice(random, 1);
                risp_A.splice(random, 1);
                risp_B.splice(random, 1);
                risp_C.splice(random, 1);
                risp_D.splice(random, 1);
                risp_E.splice(random, 1);
                risp_G.splice(random, 1);
                random = Math.floor(Math.random() * (domande.length - 1));
                domNum = random;
                document.getElementById("domanda_quiz_field").innerHTML = nr + ") " + domande[random];
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
            }

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
            document.getElementById("risposta_G").style.backgroundColor = '#FFFFFF';
            document.getElementById("risposta_G").style.color = '#000000';
        } else {
            if (numFigli === domNum1 + 1) {
                alert("Domande finite!");
                document.getElementById("domanda_quiz_field").innerHTML = "Seleziona una materia!";
                document.getElementById("risposta_A").innerHTML = "";
                document.getElementById("risposta_B").innerHTML = "";
                document.getElementById("risposta_C").innerHTML = "";
                document.getElementById("risposta_D").innerHTML = "";
                document.getElementById("risposta_E").innerHTML = "";
                document.getElementById("risposta_G").innerHTML = "";
            }
            else {
                next1 += 1;
                domNum += 1;
                domNum1 += 1;

                punti = domNum1;
                nr = (domNum1 + 1)

                document.getElementById("punteggio").innerHTML = "Domanda numero " + nr + " di " + numFigli;
                document.getElementById("domanda_quiz_field").innerHTML = nr + ") " + domande[domNum];
                document.getElementById("domanda_quiz_field").value = domande[domNum];
                document.getElementById("risposta_A").innerHTML = "A) " + risp_A[domNum];
                document.getElementById("risposta_B").innerHTML = "B) " + risp_B[domNum];
                document.getElementById("risposta_C").innerHTML = "C) " + risp_C[domNum];
                if (risp_D[domNum] != "") {
                    document.getElementById("risposta_D").innerHTML = "D) " + risp_D[domNum];
                } else { document.getElementById("risposta_D").innerHTML = ""; }
                if (risp_E[domNum] != "") {
                    document.getElementById("risposta_E").innerHTML = "E) " + risp_E[domNum];
                } else { document.getElementById("risposta_E").innerHTML = ""; }
                document.getElementById("risposta_G").innerHTML = "Non rispondo";
            }
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
            document.getElementById("risposta_G").style.backgroundColor = '#FFFFFF';
            document.getElementById("risposta_G").style.color = '#000000';

        };
    }

    // FUNZIONE PER LE SEGNALAZIONI
    function Segnala() {
        dbRef = ref(db, 'Segnalazioni/Domande/Simulatore/');

        push(child(dbRef, materia), {
            Domanda: document.getElementById("domanda_quiz_field").value,
            Segnalazione: document.getElementById("segnalazione_field").value.trim(),
            Utente: getUsername,
        });
        
        alert("Segnalazione inviata!");
        document.getElementById("segnalazione_field").value = "";
    }

    return (
        <>
            <Navbar></Navbar>
            <Space></Space>
            
            <div className="w-full py-10 px-4 mx-auto bg-blue-700">
                {getStatus == "Admin" ?
                    <button className='bg-orange-400 hover:bg-white  my-2'><NavLink className="text-white hover:text-orange-400 py-5" to={"/Admin-Simulatore"}>Pannello di controllo</NavLink></button>
                    :
                    null
                }
                {
                    user.currentUser == null ?
                        <div className='grid place-items-center mx-auto'>
                            <button><NavLink to={"/Login"}>Effettua il Login!</NavLink></button>
                        </div>
                        :
                        <div className="w-full py-10 px-4 mx-auto bg-blue-700">
                            <h2 className="mb-10 text-white text-4xl font-bold">Simulatore Test</h2>
                            
                            <div className='grid grid-cols-1 place-items-center'>
                                <div className='w-[250px]'>
                                    <label className='text-white m-5'>Seleziona la materia:</label>
                                    <Select id="matedom" options={options} onChange={handleChange} />
                                </div>
                                <div className='m-5 bg-blue-600'>
                                    <button className='m-5 bg-green-500 text-white hover:bg-white hover:text-green-500' onClick={CorreggiErrori} id="Correggi Errori">Rivedi errori</button>
                                    <button className='m-5 bg-red-500 text-white hover:bg-white hover:text-red-500' onClick={EliminaErrori} id="Elimina Errori">Reset errori</button>
                                </div>
                            </div>
                            <div className='w-full grid mb-5'>
                                <p className='text-white text-left' id="punteggio"></p>
                                <p className='text-white text-left' id="count"></p>
                                <button className='my-5 text-left' id="domanda_quiz_field"></button>
                                <img id="imagequiz" width="100%" height="100%" ></img>
                                <button className='my-1 text-left' onClick={CorreggiA} id="risposta_A"></button>
                                <button className='my-1 text-left' onClick={CorreggiB} id="risposta_B"></button>
                                <button className='my-1 text-left' onClick={CorreggiC} id="risposta_C"></button>
                                <button className='my-1 text-left' onClick={CorreggiD} id="risposta_D"></button>
                                <button className='my-1 text-left' onClick={CorreggiE} id="risposta_E"></button>
                                <button className='my-1 text-left' onClick={CorreggiG} id="risposta_G"></button>
                            </div>
                            <button className='bg-blue-400 text-white hover:bg-white hover:text-blue-400' onClick={Next} id="Avanti">Avanti</button>
                            <div className='bg-blue-600 m-5 p-5 '>
                                <p className='text-white text-left my-2'>C'è un errore nella domanda? <b>Segnalacelo!</b> Scrivi qui sotto il problema e poi clicca su "Segnala"</p>
                                <input className='w-full my-2 rounded-full p-3' placeholder="Segnalazione" id="segnalazione_field" />
                                <button className='bg-blue-400 text-white hover:bg-white hover:text-blue-400 mt-2' onClick={Segnala} id="Segnala">Segnala</button>
                            </div>
                        </div>
                }
            </div>
            <Space></Space>
            <Footer></Footer>
        </>
    );
}

export default SimulatoreTest;