
import WindowsTop from "../hooks/WindowsTop";

import Navbar from "../components/Navbar";
import Video from "../components/Video";
import Footer from "../components/Footer";
import Space from "../components/Space";



function IscrizioneTest() {
    WindowsTop();
    return (
        <>
            <Navbar></Navbar>
            <Space></Space>
            <div className="container py-10 px-4 mx-auto bg-orange-400">
                <h2 className="mb-10 text-white text-4xl font-bold">Iscrizione al test</h2>
                <div className="grid place-items-center">
                    <Video
                        video={"https://www.youtube.com/embed/5q4TmEoTHYs"}
                        title={"Tutorial iscrizione"}>
                    </Video>
                </div>
                <div className="grid text-left mx-8 text-lg text-white">
                    <h2 className="text-2xl font-bold my-5">Descrizione del video:</h2>
                    <li>Per prima cosa leggere attentamente il <a className="text-white hover:text-red-900 underline underline-offset-4" href="https://corsidilaurea.uniroma1.it/sites/default/files/documenti_ufficiali/2023/169/05418_i.pdf" target="_blank" title="Bando" rel="nofollow">bando</a></li>
                    <li>Registrarsi su <a className="text-white hover:text-red-900 underline underline-offset-4" href="https://www.uniroma1.it/it/pagina-strutturale/studenti" target="_blank" title="Infostud" rel="nofollow">Infostud</a></li>
                    <li>Stampare il bollettino di iscrizione alla prova facendo attenzione a scrivere il <b>codice prova corretto: (05418)</b></li>
                    <li>Paga il bollettino di iscrizione di 35€ direttamente online, a partire dal <b>13 luglio 2023</b> e <b>inderogabilmente entro</b> il giorno <b>3 agosto 2023</b></li>
                    <li>Effettua le scelte dei Corsi di laurea/sedi per i quali intendi concorrere entro la scadenza indicata <b>(3 Agosto)</b></li>
                    <li><b>Come effettuare le scelte?</b> <a className="text-white hover:text-red-900 underline underline-offset-4" href="Punteggi-Minimi-Sapienza.php" title="File punteggi minimi">Punteggi minimi Sapienza</a> e <a className="text-white hover:text-red-900 underline underline-offset-4" title="Come funzionano le graduatorie">"Come funzionano le graduatorie"</a> (poco più avanti su questa pagina)</li>
                    <li>Segnati in agenda la data e l'ora della prova: <b>14 Settembre 2023 alle ore 13</b></li>
                    <li>Le aule destinate allo svolgimento del test saranno pubblicate: il giorno <b>12 settembre 2023.</b></li>
                    <li><b>Dove?</b> Sul <a className="text-white hover:text-red-900 underline underline-offset-4" href="https://corsidilaurea.uniroma1.it/" target="_blank" title="Corsi di laurea" rel="nofollow">catalogo dei corsi</a> alla pagina di ciascun corso e mediante affissione presso la Segreteria studenti delle Lauree delle Professioni Sanitarie</li>
                    <li>Il test si svolgerà per <b>quelli di Roma e tutta Italia</b> in <b>Città Universitaria/Policlinico + Sant'Andrea</b>, vedi la mappa ➡️ <a className="text-white hover:text-red-900 underline underline-offset-4" href="https://goo.gl/maps/3993pzWroNK4ZuvV7" target="_blank" title="Policlinico" rel="nofollow">Maps</a></li>
                    <li>Ma anche nella sede di Latina per chi <b>RISIEDE</b> nelle provincia di Latina </li>
                    <li>Puoi esercitarti con i test degli anni precedenti sul nostro <a className="text-white hover:text-red-900 underline underline-offset-4" href="" target="_blank" title="Simulatore" rel="nofollow">simulatore</a></li>
                </div>
                <div className="grid place-items-center">
                    <h2 className="my-10 text-white text-4xl font-bold">Come funzionano le preferenze?</h2>
                    <Video
                        video={"https://www.youtube.com/embed/VfU4Jbge8C4"}
                        title={""}>
                    </Video>
                </div>
            </div>
            <Space></Space>
            <Footer></Footer>
        </>
    );
}

export default IscrizioneTest;