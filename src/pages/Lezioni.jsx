import WindowsTop from "../hooks/WindowsTop";

import Navbar from "../components/Navbar";
import Video from "../components/Video";
import CartaBase from "../components/CartaBase";
import Footer from "../components/Footer";
import Space from "../components/Space";

import Biologia from "../assets/Biologia.jpg"
import Chimica from "../assets/Chimica.jpg"


function Lezioni() {
    WindowsTop();
    return (
        <>
            <Navbar></Navbar>
            <Space></Space>
            <div className="w-full py-10 px-4 mx-auto bg-orange-400">
                <h2 className="mb-10 text-white text-4xl font-bold">Video Lezioni</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <CartaBase
                        link={"https://www.youtube.com/playlist?list=PL3aUg9gHS6GTFXPvPFlaZ4zX-2XPb2KEU"}
                        colore={"bg-red-900"}
                        imgURL={Biologia}
                        title={"Biologia"}
                        desc1={"Una raccolta di video lezioni gratuite di BIOLOGIA!"}
                        desc2={""}>
                    </CartaBase>
                    <CartaBase
                        link={"https://www.youtube.com/playlist?list=PL3aUg9gHS6GSQZIQNOv96PO7_qupZNgcQ"}
                        colore={"bg-red-900"}
                        imgURL={Chimica}
                        title={"Chimica"}
                        desc1={"Una raccolta di video lezioni gratuite di CHIMICA!"}
                        desc2={""}>
                    </CartaBase>
                </div>
            </div>
            <Space></Space>
            <Footer></Footer>
        </>
    );
}

export default Lezioni;