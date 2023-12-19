import WindowsTop from "../hooks/WindowsTop";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Space from "../components/Space";



function BorsaDiStudio() {
    WindowsTop();
    return (
        <>
            <Navbar></Navbar>
            <Space></Space>
            <div className="w-full py-10 px-4 mx-auto bg-orange-400">
                <h2 className="mb-10 text-white text-4xl font-bold">Borsa di Studio</h2>
                <div className="grid text-left mx-8 text-lg text-white">
                    <h2 className="text-2xl font-bold my-5"></h2>
                    <li>Innanzitutto il <b>BANDO esce a inizio GIUGNO</b></li>
                    <li>Possono richiederla <b>TUTTI</b> quelli aventi ISEE inferiore ai 24.000€, <b>ANCHE SE NON SAPETE SE E DOVE ENTRERETE!</b></li>
                    <li>Potete trovare tutte le informazioni sul sito: <a className="text-white hover:text-red-900 underline underline-offset-4" href="http://www.laziodisco.it/" target="_blank" title="LazioDisco" rel="nofollow">LazioDisco</a></li>
                    <li>Link al bando 2023-2024: <a className="text-white hover:text-red-900 underline underline-offset-4" href="http://www.laziodisco.it/bandi/diritto-allo-studio-2023-2024/" target="_blank" title="LazioDisco" rel="nofollow">Bando 2023-2024</a></li>
                    <li>SCADENZA RICHIESTA BORSA DI STUDIO: <b className="text-red-900 underline underline-offset-4">20 LUGLIO</b></li>
                    <li>Oppure sul gruppo Facebook dedicato (gruppo gestito da ragazzi volenterosi, non è la segreteria di LazioDisco, quindi non sono da pretendere risposte immediate o risoluzioni di problemi mai capitati prima): <a className="text-white hover:text-red-900 underline underline-offset-4" href="https://www.facebook.com/groups/686401731391492" target="_blank" title="Gruppo Facebook" rel="nofollow">Gruppo Facebook</a></li>
                </div>
            </div>
            <Space></Space>
            <Footer></Footer>
        </>
    );
}

export default BorsaDiStudio;