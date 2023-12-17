import WindowsTop from "../hooks/WindowsTop";

import Navbar from "../components/Navbar";
import Video from "../components/Video";
import Footer from "../components/Footer";
import Space from "../components/Space";

import Punteggi1 from "../assets/Punteggi1.png"
import Punteggi2 from "../assets/Punteggi2.png"
import Punteggi3 from "../assets/Punteggi3.png"
import Punteggi4 from "../assets/Punteggi4.png"



function Punteggi() {
    WindowsTop();
    return (
        <>
            <Navbar></Navbar>
            <Space></Space>
            <div className="container py-10 px-4 mx-auto bg-orange-400">
                <h2 className="mb-10 text-white text-4xl font-bold">Punteggi minimi</h2>
                <h3 className="mb-10 text-white text-2xl font-bold">Qui trovate tutti i punteggi minimi della Sapienza degli ultimi 6 anni</h3>
                <div className="grid place-items-center mx-8 text-lg text-white">
                    <div className="mb-10">
                        <img className="h-full rounded-lg" src={Punteggi1}></img>
                    </div>
                    <div className="mb-10">
                        <img className="h-full rounded-lg" src={Punteggi2}></img>
                    </div>
                    <div className="mb-10">
                        <img className="h-full rounded-lg" src={Punteggi3}></img>
                    </div>
                    <div className="mb-10">
                        <img className="h-full rounded-lg" src={Punteggi4}></img>
                    </div>
                </div>
            </div>
            <Space></Space>
            <Footer></Footer>
        </>
    );
}

export default Punteggi;