import { NavLink } from 'react-router-dom';
import WindowsTop from '../hooks/WindowsTop';

import CartaBase from './CartaBase';
import testingresso from "../assets/testingresso.jpg"
import university from "../assets/university.jpg"
import lavoro from "../assets/lavoro.jpg"

function Index() {
    WindowsTop();
    return (
        <div className="container py-10 px-4 mx-auto bg-blue-700">
            <h2 className="mb-10 text-white text-4xl font-bold">Il mondo delle Professioni Sanitarie</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <CartaBase
                    link={"/Test-ingresso"}
                    colore={"bg-orange-500"}
                    imgURL={testingresso}
                    title={"📝 Test ingresso 📝"}
                    desc1={"Tutto quello che devi sapere sul test d'ingresso per Medicina e le professioni sanitarie"}
                    desc2={"Se stai cercando di intraprendere una carriera nel campo della medicina o delle professioni sanitarie, il primo passo è superare il test d'ingresso. Questo è un passaggio fondamentale che richiede una preparazione accurata e mirata."}>
                </CartaBase>
                <CartaBase
                    link={"/University"}
                    colore={"bg-red-900"}
                    imgURL={university}
                    title={"🎓 Università 🎓"}
                    desc1={"Come orientarsi nel mondo universitario: informazioni utili per gli studenti"}
                    desc2={"Se sei uno studente alle prime armi, capire come muoversi nel mondo universitario può essere complicato. Fortunatamente, ci sono molte informazioni utili che possono aiutarti ad affrontare questa nuova fase della tua vita con serenità. Qui ti forniremo una guida completa sull'immatricolazione, le visite mediche e gli esami universitari."}>
                </CartaBase>
                <CartaBase
                    link={"/"}
                    colore={"bg-green-700"}
                    imgURL={lavoro}
                    title={"💉 Lavoro 🩺"}
                    desc1={"Guida per neolaureati e mondo del lavoro: come muoversi dopo la laurea"}
                    desc2={"Essere laureati è un grande traguardo, ma può anche essere un momento di incertezza sulle scelte da fare per il futuro. In questa guida, ti aiuteremo a capire i passi da fare una volta laureato, dalla creazione della partita IVA alla costruzione di un curriculum vitae accattivante."}>
                </CartaBase>
                
            </div>
        </div>
    );
}

export default Index;