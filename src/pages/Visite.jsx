import WindowsTop from "../hooks/WindowsTop";

import Navbar from "../components/Navbar";
import Video from "../components/Video";
import Footer from "../components/Footer";
import Space from "../components/Space";

import visite from "../assets/Visitematricole.pdf"



function Visite() {
    WindowsTop();
    return (
        <>
            <Navbar></Navbar>
            <Space></Space>
            <div className="container py-10 px-4 mx-auto bg-red-900">
                <h2 className="mb-10 text-white text-4xl font-bold">Visite mediche</h2>
                <div className="grid text-left mx-8 text-lg text-white">
                    <li>Leggendo attentamente il <a className="text-white hover:text-orange-400 underline underline-offset-4" href="https://corsidilaurea.uniroma1.it/sites/default/files/documenti_ufficiali/2023/169/05418_i.pdf" target="_blank" title="Bando" rel="nofollow">bando</a>, si nota che ci sono delle visite obbligatorie da fare, come:</li>
                    <ul className="mx-6">
                        <li> - Prova tubercolinica con tecnica di Mantoux</li>
                        <li> - Vaccinazione contro l'Epatite B virale</li>
                    </ul>
                    <li>Da qui potete scaricare un file PDF che spiega nel dettaglio tutte le procedure per le visite: <a className="text-white hover:text-orange-400 underline underline-offset-4" href={visite} target="_blank" title="Visite mediche matricole" rel="nofollow">Visite mediche per le matricole</a></li>
                </div>
            </div>
            <Space></Space>
            <Footer></Footer>
        </>
    );
}

export default Visite;