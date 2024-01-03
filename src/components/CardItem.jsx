import { Link } from "react-router-dom";

function CardItem({ title, utenteID, imgURL, children }) {
    return (
        <div className="rounded-xl bg-zinc-950 hover:scale-105 transition-all ease-linear cursor-pointer">
            <Link to={`/Utente/${utenteID}`} key={utenteID}>
            <img src={imgURL} className="rounded-t-xl" alt=""></img>
            <div className="flex flex-col p-4">
                <h2 className="text-2xl text-white font-bold">{title}</h2>
                <h2 className="text-lg text-white">{children}</h2>
            </div>
            </Link>
            
        </div>
    );
}

export default CardItem;