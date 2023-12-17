import WindowsTop from "../hooks/WindowsTop";

import testingresso from "../assets/testingresso.jpg"
import laziodisco from "../assets/Laziodisco.jpg"

import Navbar from "../components/Navbar";
import CartaBase from "../components/CartaBase";
import Footer from "../components/Footer";
import Space from "../components/Space";




function TestIngresso() {
    WindowsTop();
    return (
        <>
            <Navbar></Navbar>
            <Space></Space>
            <div className="container py-10 px-4 mx-auto bg-orange-400">
                <h2 className="mb-10 text-white text-4xl font-bold">Test d'ingresso</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <CartaBase
                        link={"/Primi-passi"}
                        colore={"bg-red-900"}
                        imgURL={"https://images.unsplash.com/photo-1618068656845-fa244b9f8bd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJpbWklMjBwYXNzaXxlbnwwfHwwfHx8MA%3D%3D"}
                        title={"Primi passi"}
                        desc1={"Prime cose da fare per iniziare la tua preparazione!"}
                        desc2={""}>
                    </CartaBase>
                    <CartaBase
                        link={"/Iscrizione-test-ingresso"}
                        colore={"bg-red-900"}
                        imgURL={testingresso}
                        title={"Iscrizione"}
                        desc1={"Tutorial per l'iscrizione al test!"}
                        desc2={""}>
                    </CartaBase>
                    <CartaBase
                        link={"/Q-&-A-Test"}
                        colore={"bg-red-900"}
                        imgURL={"https://plus.unsplash.com/premium_photo-1678216286021-e81f66761751?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGludGVycm9nYXRpdmV8ZW58MHx8MHx8fDA%3D"}
                        title={"Q & A"}
                        desc1={"Risposte alle domande più frequenti!"}
                        desc2={""}>
                    </CartaBase>
                    <CartaBase
                        link={"/Borsa-di-Studio"}
                        colore={"bg-red-900"}
                        imgURL={laziodisco}
                        title={"Borsa di studio"}
                        desc1={"Informazioni sulle borse di studio!"}
                        desc2={""}>
                    </CartaBase>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <CartaBase
                        link={"/Punteggi-minimi-Sapienza"}
                        colore={"bg-red-900"}
                        imgURL={"https://images.unsplash.com/photo-1565837580734-4042e3ea42ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fERhZGl8ZW58MHx8MHx8fDA%3D"}
                        title={"Punteggi minimi"}
                        desc1={"Una raccolta di punteggi minimi degli ultimi anni!"}
                        desc2={""}>
                    </CartaBase>
                    <CartaBase
                        link={"/In-Costruzione"}
                        colore={"bg-red-900"}
                        imgURL={testingresso}
                        title={"Simulatore"}
                        desc1={"Un simulatore per prepararsi al test!"}
                        desc2={""}>
                    </CartaBase>
                    <CartaBase
                        link={"/Lezioni"}
                        colore={"bg-red-900"}
                        imgURL={"https://images.unsplash.com/photo-1454166155302-ef4863c27e70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TGV6aW9uaXxlbnwwfHwwfHx8MA%3D%3D"}
                        title={"Lezioni"}
                        desc1={"Video lezioni di Biologia e Chimica per la preaprazione al test!"}
                        desc2={""}>
                    </CartaBase>
                    <CartaBase
                        link={"/In-Costruzione"}
                        colore={"bg-red-900"}
                        imgURL={"https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGlicml8ZW58MHwwfDB8fHww"}
                        title={"Libri e dispensa"}
                        desc1={"Libri consigliati per la preparazione e una dispensa di CHIMICA!"}
                        desc2={""}>
                    </CartaBase>
                </div>
            </div>
            <Space></Space>
            <Footer></Footer>
        </>
    );
}

export default TestIngresso;