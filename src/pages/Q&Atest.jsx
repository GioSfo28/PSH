import WindowsTop from "../hooks/WindowsTop";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Space from "../components/Space";



function QATest() {
    WindowsTop();
    return (
        <>
            <Navbar></Navbar>
            <Space></Space>
            <div className="w-full py-10 px-4 mx-auto bg-orange-400">
                <h2 className="mb-10 text-white text-4xl font-bold">Domande & Risposte</h2>
                <div className="grid text-left mx-8 text-lg text-white">
                    <h2 className="text-2xl font-bold my-5">Risposte alle domande più frequenti:</h2>
                    <li><b>Quando esce il bando per l'iscrizione al test?</b> Solitamente a fine giugno/inizio luglio</li>
                    <li><b>Quale sarà la sede del test?</b> La sede del test sarà in aule della Città Universitaria/Policlinico + Sant'Andrea. Le aule esatte verranno pubblicate poi sul sito qualche giorno prima del test</li>
                    <li><b>Che differenza c'è con Tor Vergata?</b> A Tor Vergata il test avrà una graduatoria a PREFERENZA, mentre alla Sapienza la graduatoria è a PUNTEGGIO. (Guarda il video nella sezione "Iscriversi al test")</li>
                    <li><b>Posso mettere più scelte di diverse università?</b> No, il test per le professioni sanitarie non è unico a livello nazionale come per medicina, quindi puoi scegliere UNA SOLA università dove provare il test, in quella università ci saranno più corsi disponibili che puoi scegliere, ma non è possibile scegliere corsi contemporaneamente della Sapienza, Tor Vergata, Federico II di Napoli o di Milano</li>
                    <li><b>Quante scelte posso mettere?</b> Alla Sapienza è possibile mettere 6 scelte, a Tor Vergata 3</li>
                    <li><b>Le scelte devono essere tutte di corsi diversi?</b> No, puoi mettere anche 6 scelte tutte di fisioterapia o 6 scelte di infermieristica, oppure 2 di fisio, 2 di logopedia e 2 di infermieristica. In poche parole puoi mettere quelle che vuoi, ricordandoti che essendo la graduatoria a punteggio comunque vanno messe in ordine dal punteggio minimo più alto, basandosi sui punteggi minimi dell'anno precedente, e poi quelle con punteggi minimi più bassi. (Vedi video spiegazione sopra) </li>
                    <li><b>L'anno successivo posso passare da infermieristica a fisioterapia?</b> No, non è possibile fare questo passaggio. Bisogna comunque rifare il test e verranno convalidati degli esami in comune fatti a infermieristica, ma il tirocinio è vincolante, ovvero bisogna fare il tirocinio specifico di quel corso di laurea per accedere direttamente al secondo anno</li>
                    <li><b>Quanti corsi di fisioterapia ci sono?</b> Alla Sapienza ci sono 9 corsi di Fisioterapia tra cui puoi scegliere</li>
                </div>
            </div>
            <Space></Space>
            <Footer></Footer>
        </>
    );
}

export default QATest;