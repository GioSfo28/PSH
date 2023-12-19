import { NavLink } from 'react-router-dom';
import WindowsTop from '../hooks/WindowsTop';
import Navbar from '../components/Navbar.jsx';

import CartaBase from '../components/CartaBase';
import Space from '../components/Space.jsx';
import Footer from '../components/Footer.jsx';

function Dashboard() {
    WindowsTop();
    return (
        <>
            <Navbar></Navbar>
            <Space></Space>
            <div className="w-full py-10 px-4 mx-auto bg-blue-700">
                <h2 className="mb-10 text-white text-4xl font-bold">Simulatori</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <CartaBase
                        link={"/In-Costruzione"}
                        colore={"bg-orange-400"}
                        imgURL={"https://images.unsplash.com/photo-1565837580734-4042e3ea42ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fERhZGl8ZW58MHx8MHx8fDA%3D"}
                        title={"Simulatore test"}
                        desc1={"Un simulatore gratuito per la preparazione al test d'ingresso!"}
                        desc2={""}
                        testo={"In arrivo"}>
                    </CartaBase>
                    <CartaBase
                        link={"/In-Costruzione"}
                        colore={"bg-red-900"}
                        imgURL={"https://images.unsplash.com/photo-1565837580734-4042e3ea42ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fERhZGl8ZW58MHx8MHx8fDA%3D"}
                        title={"Domande d'esame"}
                        desc1={"Un simulatore con una raccolta delle domande d'esame uscite negli anni su cui esercitarsi!"}
                        desc2={""}
                        testo={"In arrivo"}>
                    </CartaBase>
                    <CartaBase
                        link={"/In-Costruzione"}
                        colore={"bg-green-700"}
                        imgURL={"https://images.unsplash.com/photo-1565837580734-4042e3ea42ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fERhZGl8ZW58MHx8MHx8fDA%3D"}
                        title={"Simulatore concorsi"}
                        desc1={"Una raccolta delle domande per prepararsi ai concorsi!"}
                        desc2={""}
                        testo={"In arrivo"}>
                    </CartaBase>
                </div>
            </div>
            <Space></Space>
            <Footer></Footer>
        </>
    );
}

export default Dashboard;