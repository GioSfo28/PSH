import WindowsTop from "../hooks/WindowsTop";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Space from "../components/Space";



function QAUni() {
    WindowsTop();
    return (
        <>
            <Navbar></Navbar>
            <Space></Space>
            <div className="w-full py-10 px-4 mx-auto bg-red-900">
                <h2 className="mb-10 text-white text-4xl font-bold">Domande & Risposte</h2>
                <div className="grid text-left mx-8 text-lg text-white">
                    <h2 className="text-2xl font-bold my-5">Risposte alle domande più frequenti:</h2>
                    <li><b>Come funzionano i subentri?</b></li>
                    <ul>
                        <li>Non devi fare nulla, soltanto aspettare, non c'è da selezionare "resta in graduatoria" o cose simili come per MEDICINA. I subentri solitamente sono 6/7, l'anno scorso ce ne sono stati 7. Alla fine dei subentri negli ultimi 5 anni è uscito un ulteriore bando che rimetteva in gioco i posti rimasti ancora liberi</li>
                    </ul>
                    <li><b>Una volta subentrato che devo fare?</b></li>
                    <ul>
                        <li> - Entrare su <a className="text-white hover:text-orange-400 underline underline-offset-4" href="https://www.uniroma1.it/it/pagina-strutturale/studenti" target="_blank" title="Infostud" rel="nofollow">Infostud</a></li>
                        <li> - Cercare la voce <b>"Gestione subentri"</b></li>
                        <li> - Cliccare su <b>"Effettua passaggio"</b></li>
                        <li> <b>NON</b> c'è da pagare altro, se ci si è già immatricolati precedentemente</li>
                    </ul>
                    <li><b>Se mi immatricolo rimango in graduatoria?</b></li>
                    <ul>
                        <li>Se ti immatricoli in sesta scelta, rimani in gara per le scelte superiori. Allo stesso modo se non ti immatricoli, ma rinunci al posto dove sei entrato (es. 4° scelta) rimani comunque in gara per le prime 3 scelte</li>
                    </ul>
                    <li><b>Posso immatricolarmi in una scelta inferiore a quella dove risulto vincitore?</b></li>
                    <ul>
                        <li>No, se risulti vincitore in 1° scelta NON c'è alcun modo per immatricolarsi in seconda, terza, quarta... scelta</li>
                    </ul>
                    <li><b>Posso frequentare le lezioni di una scelta in cui non risulto vincitore?</b></li>
                    <ul>
                        <li>Potete frequentare le lezioni di qualsiasi corso.</li>
                        <li>Le lezioni sono APERTE, quindi se siete immatricolati in 4° scelta, ma pensate di riuscire a subentrare nella 2° e volete seguire le lezioni lì, potete farlo da subito. Ovviamente senza firmare il foglio firme.</li>
                    </ul>
                    <li><b>Come faccio a capire se ho il debito OFA?</b></li>
                    <ul>
                        <li>Gli OFA, Obblighi Formativi Aggiuntivi, si hanno solamente con un punteggio <b>INFERIORE a 10 punti TOTALI</b>, quindi 10 punti in tutto il test. Per come funzionano e cosa dovrete fare vi verrà spiegato tutto per mail a <b>DICEMBRE</b>, ma nel vostro profilo Infostud alla sezione "OFA" potete vedere se li avete o meno</li>
                    </ul>
                    <li><b>Dove trovo gli orari delle lezioni?</b></li>
                    <ul>
                        <li>Verranno pubblicati all'interno del <a className="text-white hover:text-orange-400 underline underline-offset-4" href="https://corsidilaurea.uniroma1.it/" target="_blank" title="Corsi di laurea" rel="nofollow"> vostro corso</a>, ma invece di entrare nella sezione <b>"ISCRIVERSI"</b> dove trovate la graduatoria, andate su <b>"FREQUENTARE"</b>, lì verranno pubblicati gli orari. Se non ci sono, provare tra qualche giorno</li>
                    </ul>
                    <li><b>Quando e dove posso vedere il mio test?</b></li>
                    <ul>
                        <li>Circa 2 settimane dopo l'uscita della graduatoria sarà possibile vedere il proprio test. Nella stessa sezione delle graduatorie comparirà "Vedi il tuo test"</li>
                    </ul>
                    <li><b>Per il trasferimento da altro corso di studi?</b></li>
                    <ul>
                        <li>Questo <b>NON</b> è il procedimento per chi subentra da altre scelte, ma per chi proviene da ALTRO CORSO di studi. Seguire le indicazioni da questo <a className="text-white hover:text-orange-400 underline underline-offset-4" href="https://www.uniroma1.it/it/content/passaggio-ad-altro-corso-di-studio?fbclid=IwAR3QIJhrX9e0o7aeGsx4eUizGaN9RrXNK3eBiKhrYLicJEDw7GSWk9PAYHU" target="_blank" title="Passaggio da altro corso" rel="nofollow">link</a></li>
                    </ul>
                    <li><b>Per il trasferimento da altra università?</b></li>
                    <ul>
                        <li>Procedimento per chi proviene da <b>ALTRA UNIVERSITA'</b>. Seguire le indicazioni da questo <a className="text-white hover:text-orange-400 underline underline-offset-4" href="https://www.uniroma1.it/it/content/trasferimento-ad-altra-universita?fbclid=IwAR3Eq9HD6Jx7gtAuiYkuukVOQ84G7i6t-xtjLLbt3Zdlv_P5ZDAMMTfZWac" target="_blank" title="Passaggio da altra a" rel="nofollow">link</a></li>
                    </ul>
                </div>
            </div>
            <Space></Space>
            <Footer></Footer>
        </>
    );
}

export default QAUni;