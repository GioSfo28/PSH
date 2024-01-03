import '../App.css'
import '../index.css'

function Footer() {
    return (
        <footer className="w-full py-20 bg-[#010e30]">
            <div className='grid grid-cols-2'>
                <div>
                    <div className='font-bold text-xl cursor-pointer flex items-center text-white px-10'>
                        <span className='text-3xl text-red-600 mr-1 pt-2'>
                            <ion-icon name="chatbubbles"></ion-icon>
                        </span>
                        Incontri Cristiani
                    </div>

                </div>
                <div className='font-bold text-l cursor-pointer items-center text-white px-10'>
                    <p>Seguici sui nostri social:</p>
                    <a href="https://chat.whatsapp.com/HdymYMo0FToCCFnXqMFihA" target="_blank">
                        <span className='text-3xl text-white hover:text-green-400 mr-2 pt-2'>
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </span>
                    </a>
                    <a href="https://www.instagram.com/professioni.sanitarie.help/" target="_blank">
                        <span className='text-3xl text-white hover:text-orange-500 mr-2 pt-2'>
                            <ion-icon name="logo-instagram" ></ion-icon>
                        </span>
                    </a>
                    <a href="https://www.facebook.com/groups/1456290811105652" target="_blank">
                        <span className='text-3xl text-white hover:text-[#535bf2] mr-2 pt-2'>
                            <ion-icon name="logo-facebook"></ion-icon>
                        </span>
                    </a>
                    <a href="https://www.youtube.com/@psh-professionisanitariehe7395" target="_blank">
                        <span className='text-3xl text-white hover:text-red-500 mr-2 pt-2'>
                            <ion-icon name="logo-youtube"></ion-icon>
                        </span>
                    </a>
                    <a href="https://discord.gg/B4KqfXUeHf" target="_blank">
                        <span className='text-3xl text-white hover:text-[#535bf2] mr-2 pt-2'>
                            <ion-icon name="logo-discord"></ion-icon>
                        </span>
                    </a>
                    <a href="mailto:info@professionisanitariehelp.it">
                        <span className='text-3xl text-white hover:text-red-500 mr-2 pt-2'>
                            <ion-icon name="mail"></ion-icon>
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