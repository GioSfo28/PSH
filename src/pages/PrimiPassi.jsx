import WindowsTop from "../hooks/WindowsTop";

import Navbar from "../components/Navbar";
import Video from "../components/Video";
import Footer from "../components/Footer";
import Space from "../components/Space";



function PrimiPassi() {
    WindowsTop();
    return (
        <>
            <Navbar></Navbar>
            <Space></Space>
            <div className="w-full py-10 px-4 mx-auto bg-orange-400">
                <h2 className="mb-10 text-white text-4xl font-bold">Primi Passi</h2>
                <div className="grid text-left mx-8 text-lg text-white">
                    <h2 className="text-2xl font-bold my-5">Prime cose da fare:</h2>
                    <li>Entra nella Community su Whatsapp, dove troverai:
                        <ul className="mx-3"><li>- Gruppo per la Sapienza</li><li>- Gruppo per Tor Vergata</li><li>- Gruppo per la MAGISTRALE</li><li>- Gruppo Svago/Chiacchiere</li><li>- Gruppo Affitti</li></ul>   Entra subito nella "<a className="text-white hover:text-red-900 underline underline-offset-4" href="https://chat.whatsapp.com/EcRpDGPNHLCDN0kVuHxQvO" title="Gruppo WhatsApp" target="_blank" rel="nofollow">Community</a>"!</li>
                    <li>Entra nel gruppo Facebook del "<a className="text-white hover:text-red-900 underline underline-offset-4" href="https://www.facebook.com/groups/1456290811105652" title="Gruppo Facebook" target="_blank" rel="nofollow">Test Professioni Sanitarie</a>" per rimanere aggiornato su tutto ciò che riguarda il test!</li>
                    <li>Entra nel gruppo "<a className="text-white hover:text-red-900 underline underline-offset-4" href="https://t.me/ProfessioniSanitarieHelp" title="Gruppo Telegram" target="_blank" rel="nofollow">Telegram</a>" per confrontarti direttamente con gli altri studenti!</li>
                    <li>Cerchi o vendi libri/appunti? Entra nel "<a className="text-white hover:text-red-900 underline underline-offset-4" href="https://www.facebook.com/groups/502992956839774/" title="Gruppo vendo/compro libri" target="_blank" rel="nofollow">gruppo</a>"!</li>
                </div>
            </div>
            <Space></Space>
            <Footer></Footer>
        </>
    );
}

export default PrimiPassi;