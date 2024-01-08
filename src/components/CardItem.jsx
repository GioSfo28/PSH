import { Link } from "react-router-dom";

/*
    <div className="relative h-500">
                    <div className="bg-black rounded-xl">
                        <img src={imgURL} className="w-auto h-[500px] opacity-60 rounded-xl object-cover" alt="" />
                    </div>
                    <div className="grid px-2 absolute bottom-1 left-1">
                        <h2 className="text-2xl text-white">{title}  {isVerificated ? " ☑️" : null}</h2>
                        <h2 className="text-xl text-white text-left">{children}</h2>
                    </div>
                </div>
               
                <div className="flex flex-col p-4">
                    <h2 className="text-lg text-red-500">{punteggio}</h2>
                    <label className="mt-8">In cerca di:</label>
                    <div className="my-5">
                        {cerca && cerca.length > 0 && cerca.map((attivita, index) => (
                            <label className={attivita === "Amicizia" ? 'p-4 mx-5 text-white text-center bg-blue-500 rounded-full' : 'p-4 mx-5 text-white text-center bg-red-500 rounded-full'} key={index}>{attivita}</label>
                        ))}
                    </div>
                </div>
    */



function CardItem({ title, utenteID, imgURL, children, isVerificated, punteggio, cerca }) {
    return (
        <div className="rounded-xl shadow-md shadow-black bg-white hover:scale-105 transition-all ease-linear cursor-pointer flex items-center justify-center">
            <Link to={`/Utente/${utenteID}`} key={utenteID} className="grid place-items-center ">
                <img src={imgURL} className="w-auto h-[400px] rounded-xl object-cover" alt="" />
                <div className="flex flex-col p-4">
                    <h2 className="text-3xl text-black font-bold">{title}  {isVerificated ? " ☑️" : null}</h2>
                    <h2 className="text-2xl text-black">{children}</h2>
                    <h2 className="text-xl text-red-500">{punteggio}</h2>
                    <label className="mt-8 text-xl">In cerca di:</label>
                    <div className="my-5">
                        {cerca && cerca.length > 0 && cerca.map((attivita, index) => (
                            <label className={attivita === "Amicizia" ? 'p-4 mx-5 text-white text-center bg-blue-500 rounded-full' : 'p-4 mx-5 text-white text-center bg-red-500 rounded-full'} key={index}>{attivita}</label>
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default CardItem;