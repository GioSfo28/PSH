import '../App.css'
import '../index.css'

function Footer() {
    return (
        <footer className="w-full py-20 bg-[#010e30]">
            <div className='grid grid-cols-2'>
                <div>
                    <div className='font-bold text-3xl cursor-pointer flex items-center text-white px-10'>
                        <span className='text-3xl text-yellow-600 mr-1 pt-2'>
                            <ion-icon name="star"></ion-icon>
                        </span>
                        Legami di Luce
                    </div>

                </div>
                <div className='font-bold text-l cursor-pointer items-center text-white px-10'>
                    <p>Seguici sui nostri social:</p>
                    <a href="/" target="_blank">
                        <span className='text-3xl text-white hover:text-green-400 mr-2 pt-2'>
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </span>
                    </a>
                    <a href="https://www.instagram.com/legami.di.luce/" target="_blank">
                        <span className='text-3xl text-white hover:text-orange-500 mr-2 pt-2'>
                            <ion-icon name="logo-instagram" ></ion-icon>
                        </span>
                    </a>
                    
                    
                    
                </div>
            </div>
            <div className='mt-20 font-bold text-xs text-white'>
                <p>Designed & Powered by Giorgio Sforza © 2024 </p>
            </div>

            <div className='mt-20 grid grid-cols-3'>
                <a className='text-white' href="https://www.iubenda.com/privacy-policy/49235521/cookie-policy" title="Cookie Policy ">Cookie
                    Policy</a>

                <a className='text-white' href="https://www.iubenda.com/privacy-policy/49235521"
                    title="Privacy Policy ">Privacy Policy</a>

                <a className='text-white' href="https://www.iubenda.com/termini-e-condizioni/49235521"
                    title="Termini e Condizioni ">Termini e Condizioni</a>
            </div>

            <script type="text/javascript" src="//cdn.iubenda.com/cs/tcf/stub-v2.js"></script>
            <script type="text/javascript" src="//cdn.iubenda.com/cs/tcf/safe-tcf-v2.js"></script>
            <script type="text/javascript" src="//cdn.iubenda.com/cs/gpp/stub.js"></script>
            <script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>
        </footer>

    )
}


export default Footer;