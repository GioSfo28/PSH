import { Link } from "react-router-dom";

function CardItem({ title, utenteID, imgURL, children, isVerificated, punteggio, cerca }) {
    return (
        <div className="rounded-xl shadow-md shadow-black bg-white hover:scale-105 transition-all ease-linear cursor-pointer flex items-center justify-center">
            <Link to={`/Utente/${utenteID}`} key={utenteID} className="grid place-items-center ">
                <img src={imgURL} className="w-auto h-[300px] rounded-xl object-cover" alt="" />
                <div className="flex flex-col p-4">
                    <h2 className="text-2xl text-black font-bold">{title}  {isVerificated ? " ☑️" : null}</h2>
                    <h2 className="text-lg text-black">{children}</h2>
                    <h2 className="text-lg text-red-500">{punteggio}</h2>
                    <label className="mt-8">In cerca di:</label>
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