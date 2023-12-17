import WindowsTop from "../hooks/WindowsTop";

import Navbar from "../components/Navbar";
import Video from "../components/Video";
import Footer from "../components/Footer";
import Space from "../components/Space";



function Costruzione() {
    WindowsTop();
    return (
        <>
            <Navbar></Navbar>
            <Space></Space>
            <div className="container py-10 px-4 mx-auto bg-blue-700">
                <h2 className="mb-10 text-white text-4xl font-bold">Pagina in costruzione...</h2>
            </div>
            <Space></Space>
            <Footer></Footer>
        </>
    );
}

export default Costruzione;