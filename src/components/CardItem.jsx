import { Link } from "react-router-dom";

function CardItem({ title, utenteID, imgURL, children, isVerificated, punteggio }) {
    return (
        <div className="rounded-xl shadow-md shadow-black bg-white hover:scale-105 transition-all ease-linear cursor-pointer">
            <Link to={`/Utente/${utenteID}`} key={utenteID}>
            <img src={imgURL} className="rounded-t-xl" alt=""></img>
            <div className="flex flex-col p-4">
                    <h2 className="text-2xl text-black font-bold">{title}  {isVerificated ? " ☑️" : null }</h2>
                <h2 className="text-lg text-black">{children}</h2>
                    <h2 className="text-lg text-red-500">{punteggio}</h2>
            </div>

            </Link>
            
        </div>
    );
}

export default CardItem;