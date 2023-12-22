import { useState} from "react";
import { getDatabase, ref, set, onValue, remove, push, child } from "firebase/database";


function Domande() {
    
    let Domande1 = "";
    const db = getDatabase();
    let dbRef = "";

    let [domande, setDomande] = useState([]);

    dbRef = ref(db, '/Domande/MED/Istologia');
    domNum1 = 0;
    onValue(dbRef, (snapshot) => {
        numFigli = snapshot.val().length;
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const a = childSnapshot.val();
            setDomande([
                ...domande,
                [a.Domanda]
            ])
            alert(domande);
        })

    }, {
        onlyOnce: true
    });

    
    return alert(Domande1);
}


export default Domande;