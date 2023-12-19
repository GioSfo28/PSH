
import WindowsTop from "../hooks/WindowsTop";

import Navbar from "../components/Navbar";
import Video from "../components/Video";
import video from "../assets/Tasse.mp4"
import Footer from "../components/Footer";
import Space from "../components/Space";



function Immatricolazione() {
    WindowsTop();
    return (
        <>
            <Navbar></Navbar>
            <Space></Space>
            <div className="w-full py-10 px-4 mx-auto bg-red-900">
                <h2 className="mb-10 text-white text-4xl font-bold">Immatricolazione</h2>
                <div className="grid place-items-center">
                    <Video
                        video={video}
                        title={"Tutorial Immatricolazione"}>
                    </Video>
                </div>
                <div className="grid text-left mx-8 text-lg text-white">
                    <h2 className="text-2xl font-bold my-5">Descrizione del video:</h2>
                    <li>Guardare le graduatorie sul <a className="text-white hover:text-orange-400 underline underline-offset-4" href="https://corsidilaurea.uniroma1.it/" target="_blank" title="Corsi di laurea" rel="nofollow">catalogo dei corsi.</a></li>
                    <li> Una volta cercato il corso della propria preferenza e dopo averci cliccato sopra, entrare nella sezione <b>"ISCRIVERSI"</b>: lì comparirà la prima graduatoria e successivamente i subentri</li>
                    <li>Verificato il superamento del test, entrare su <a className="text-white hover:text-orange-400 underline underline-offset-4" href="https://www.uniroma1.it/it/pagina-strutturale/studenti" target="_blank" title="Infostud" rel="nofollow">Infostud</a>:</li>
                    <ul className="mx-3">
                        <li> - Cliccare su "CORSI DI LAUREA"</li>
                        <li> - Cercare la voce "TASSE" e cliccare su "PRIMO ANNO"</li>
                        <li> - Inserisci il codice del corso in cui risulti vincitore</li>
                        <li> - Acquisisci l'ISEE se lo hai già pronto, altrimenti hai tempo fino al <b>21 dicembre</b></li>
                        <li> - <b>Da qualche anno il valore soglia dell'ISEE è 24000€ e non 14000€ come nel video!</b></li>
                        <li> - Paghi il bollettino online e sei <b>IMMATRICOLATO!</b></li>
                        <li> - <b>LA CONFERMA DELL'IMMATRICOLAZIONE RISULTA DOPO 24-48 ORE</b></li>
                    </ul>
                </div>
            </div>

            <Space></Space>
            <Footer></Footer>
        </>
    );
}

export default Immatricolazione;