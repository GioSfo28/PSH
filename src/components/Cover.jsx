import Background from '../assets/Background.jpg'
import { Link } from "react-router-dom";

function Cover (){
    return (
        <div className="h-[500px] bg-opacity-90 bg-no-repeat bg-cover  grid place-items-center" style={{ backgroundImage: `url(${Background})`}}>
            <h1 className='text-white text-6xl font-bold text-center align-middle'>Incontri Cristiani</h1>
            <Link to={"/Login"}><button  className='bg-blue-500 hover:bg-blue-400 text-white rounded-full p-4'>Comincia subito!</button></Link>
        </div>
    );
}

export default Cover;