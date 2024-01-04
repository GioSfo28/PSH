import { Link } from "react-router-dom";

function CardItem({ title, utenteID, imgURL, children, isVerificated }) {
    return (
        <div className="rounded-xl bg-zinc-950 hover:scale-105 transition-all ease-linear cursor-pointer">
            <Link to={`/Utente/${utenteID}`} key={utenteID}>
            <img src={imgURL} className="rounded-t-xl" alt=""></img>
            <div className="flex flex-col p-4">
                <h2 className="text-2xl text-white font-bold">{title}</h2>
                <h2 className="text-lg text-white">{children}</h2>
            </div>
                <div className="flex flex-col p-4">
                    {isVerificated && <label className='bg-green-500 text-white rounded-full text-center font-bold p-2' id='verificato'>✔️ Profilo verificato</label>}
                    {!isVerificated && <label className='bg-red-500 text-white rounded-full text-center font-bold p-2' id='verificato'>❌ Profilo da verificare</label>}
                </div>
            </Link>
            
        </div>
    );
}

export default CardItem;