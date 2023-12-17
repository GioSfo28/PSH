import { NavLink } from 'react-router-dom';

function CartaBase({ link, colore, imgURL, title, desc1, desc2 }) {
    return (
        <div className="w-full px-4 mb-8">
            <NavLink to={link}>
                <div className="h-50 hover:scale-105 transition-all ease-linear cursor-pointer">
                    <img className="w-full h-[150px] rounded-t-lg" src={imgURL}></img>
                    <div className={`${colore} p-6 grow flex flex-col justify-between rounded-b-xl`}>
                        <div>
                            <span className="inline-block text-2xl font-bold text-white uppercase">{title}</span>
                            <h2 className="my-8 text-base font-bold font-heading text-white">{desc1}</h2>
                            <p className="mb-4 text-sm text-white leading-loose">{desc2}</p>
                            <button className="bg-indigo-600 text-white rounded hover:bg-indigo-400 duration-500">Scopri di più</button>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default CartaBase;