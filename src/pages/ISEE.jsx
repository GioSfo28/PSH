import WindowsTop from "../hooks/WindowsTop";

import Navbar from "../components/Navbar";
import Video from "../components/Video";
import Footer from "../components/Footer";
import Space from "../components/Space";



function ISEE() {
    WindowsTop();
    return (
        <>
            <Navbar></Navbar>
            <Space></Space>
            <div className="w-full py-10 px-4 mx-auto bg-red-900">
                <h2 className="mb-10 text-white text-4xl font-bold">Questione ISEE</h2>
                <div className="grid text-left mx-8 text-lg text-white">
                    <li><b>Cosa bisogna fare durante la generazione del bollettino per immatricolarsi?</b></li>
                    <ul>
                        <li> Come già illustrato nel <a className="text-white hover:text-orange-400 underline underline-offset-4" href="/Immatricolazione" title="Tutorial">tutorial</a>, mettiamo per iscritto il procedimento:</li>
                        <li> - Cliccare su <b>"ACQUISISCI ISEE"</b>, allora ti verrà chiesto se Infostud può recuperarlo dall'INPS, clicca "CONFERMA/OK"</li>
                        <li> - Se avevi già l'ISEE pronto procedi tranquillamente, altrimenti ti dice <b>"NON HO TROVATO NESSUN ISEE"</b></li>
                        <li>- Clicca su "Conferma/Ok/Successivo"</li>
                        <li> - Compare un quiz a risposta multipla:</li>
                        <li><b>Hai un ISEE INFeriore ai 24.000€?</b></li>
                        <li><b>Hai un ISEE SUPeriore ai 24.000€?</b></li>
                        <li> - Seleziona la tua scelta e fai "Conferma"</li>
                        <li> - Poi chiede se hai esenzioni, allora clicca su <b>"Aggiorna esenzioni"</b> e successivamente trovi già selezionato "Nessuna esenzione" e clicchi su "Aggiorna".</li>
                        <li> Chi è uscito con 100 alla maturità nell'anno stesso in cui prova il test deve mettere<b>"Studente meritevole"</b>, chi ha fatto la domanda per la borsa di studio deve mettere <b>"Borsista"</b></li>
                    </ul>
                    <li><b>Fino a quando si può inserire l'ISEE?</b></li>
                    <ul>
                        <li><b>Entro il 21 dicembre.</b> Quindi poi in base al tuo ISEE ti verrà generata una seconda e terza rata. Se avete pagato di più inizialmente ci sarà uno sconto sulla seconda rata, altrimenti se avete pagato di meno, avrete un conguaglio per regolare i conti</li>
                    </ul>
                   
                    <li><b>Se l'ISEE lo ho già pronto?</b></li>
                    <ul>
                        <li>Infostud lo trova nella banca dati dell'INPS e ti genera 2 bollettini, uno per pagare solo la prima rata ed uno per pagare direttamente tutto l'anno accademico. A te la scelta!</li>
                    </ul>
                
                </div>
            </div>
            <Space></Space>
            <Footer></Footer>
        </>
    );
}

export default ISEE;