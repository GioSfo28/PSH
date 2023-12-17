import WindowsTop from "../hooks/WindowsTop";

import testingresso from "../assets/testingresso.jpg"
import laziodisco from "../assets/Laziodisco.jpg"
import isee from "../assets/Isee.jpg"
import visite from "../assets/Visite.jpg"

import Navbar from "../components/Navbar";
import CartaBase from "../components/CartaBase";
import Footer from "../components/Footer";
import Space from "../components/Space";




function University() {
    WindowsTop();
    return (
        <>
            <Navbar></Navbar>
            <Space></Space>
            <div className="container py-10 px-4 mx-auto bg-red-900">
                <h2 className="mb-10 text-white text-4xl font-bold">Università</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <CartaBase
                        link={"/Immatricolazione"}
                        colore={"bg-orange-400"}
                        imgURL={"https://images.unsplash.com/photo-1618068656845-fa244b9f8bd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJpbWklMjBwYXNzaXxlbnwwfHwwfHx8MA%3D%3D"}
                        title={"Immatricolazione"}
                        desc1={"Video tutorial per l'immatricolazione!"}
                        desc2={""}>
                    </CartaBase>
                    <CartaBase
                        link={"/Questione-ISEE"}
                        colore={"bg-orange-400"}
                        imgURL={isee}
                        title={"Questione ISEE"}
                        desc1={"Il dramma delle NEO-MATRICOLE!"}
                        desc2={""}>
                    </CartaBase>
                    <CartaBase
                        link={"/Visite-mediche"}
                        colore={"bg-orange-400"}
                        imgURL={visite}
                        title={"Visite mediche"}
                        desc1={"Le visite obbligatorie secondo il bando!"}
                        desc2={""}>
                    </CartaBase>
                    <CartaBase
                        link={"/Q-&-A-Uni"}
                        colore={"bg-orange-400"}
                        imgURL={"https://plus.unsplash.com/premium_photo-1678216286021-e81f66761751?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGludGVycm9nYXRpdmV8ZW58MHx8MHx8fDA%3D"}
                        title={"Q & A"}
                        desc1={"Risposte alle domande più frequenti!"}
                        desc2={""}>
                    </CartaBase>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <CartaBase
                        link={"/In-Costruzione"}
                        colore={"bg-orange-400"}
                        imgURL={"https://images.unsplash.com/photo-1618068656845-fa244b9f8bd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJpbWklMjBwYXNzaXxlbnwwfHwwfHx8MA%3D%3D"}
                        title={"Appunti e dispense"}
                        desc1={"Un database di appunti/dispense condivisi tra studenti!"}
                        desc2={""}>
                    </CartaBase>
                    <CartaBase
                        link={"/In-Costruzione"}
                        colore={"bg-orange-400"}
                        imgURL={testingresso}
                        title={"Domande esami"}
                        desc1={"Un simulatore che raccoglie le domande degli esami scritti di numerose materie!"}
                        desc2={""}>
                    </CartaBase>
                    <CartaBase
                        link={"/In-Costruzione"}
                        colore={"bg-orange-400"}
                        imgURL={laziodisco}
                        title={"Recensioni esami"}
                        desc1={"Trova o condividi una recensione sull'esame che hai dato!"}
                        desc2={""}>
                    </CartaBase>
                    <CartaBase
                        link={"/In-Costruzione"}
                        colore={"bg-orange-400"}
                        imgURL={"https://plus.unsplash.com/premium_photo-1678216286021-e81f66761751?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGludGVycm9nYXRpdmV8ZW58MHx8MHx8fDA%3D"}
                        title={"Procedure"}
                        desc1={"Una raccolta di procedure infermieristiche!"}
                        desc2={""}>
                    </CartaBase>
                </div>
            </div>
            <Space></Space>
            <Footer></Footer>
        </>
    );
}

export default University;

