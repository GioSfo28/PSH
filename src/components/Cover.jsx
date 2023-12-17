import Background from '../assets/Background.jpg'

function Cover (){
    return (
        <div className="h-[500px] bg-opacity-90 bg-no-repeat bg-cover  grid place-items-center" style={{ backgroundImage: `url(${Background})`}}>
            <h1 className='text-white text-6xl font-bold text-center align-middle'>Professioni Sanitarie Help</h1>
        </div>
    );
}


export default Cover;