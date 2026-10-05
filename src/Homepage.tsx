import PersonalPicture from "./assets/klimes.jpg"
import GithubLogo from "./assets/github.png"
import LinkedinLogo from "./assets/linkedin.png"
import DiscordLogo from "./assets/discord.png"
import InstagramLogo from "./assets/instagram.png"
import Placeholder from "./assets/placeholder.png"
import WebsitePreview from "./assets/websitepreview.png"
import BlackjackPreview from "./assets/bjpreview.png"
import MFlogo from "./assets/mf.jpeg"
import CambridgeEnlish from "./assets/CambridgeEnglish.png"
import { Link } from "react-router-dom"

function Homepage() {
    return (
        <>
    
        <div className='flex flex-row'>
            <img src={PersonalPicture} className="rounded-4xl w-70 basis-1/5" alt="Personal Picture" />
            <div className='basis-4/5 ml-5'>
            <h1 className='font-[Raleway]'>Alexander Klimeš</h1>
            <span className='text-purple-500 font-raleway'>Student</span>
            <div className="mt-5">
                <span>
                Anything but frontend developer
                </span>
            </div>
            <div className='flex flex-row mt-10 border-t-2 border-white pt-10 gap-10 w-fit'>
                <button className='bg-white rounded-xl shadow-lg shadow-gray-200 transition duration-300 hover:-translate-y-3 hover:w-150% basis-20 cursor-pointer'>
                    <a href="https://github.com/Sasuss" target="_blank">
                        <img src={GithubLogo} alt='Github' className='p-2'></img>
                    </a>
                </button>
                <button className='bg-white rounded-xl shadow-lg shadow-gray-200 transition duration-300 hover:-translate-y-3 hover:w-150% basis-20 cursor-pointer'>
                    <a href="https://www.linkedin.com/in/alexander-klime%C5%A1-11a4ba32b/" target="_blank">
                        <img src={LinkedinLogo} alt='Github' className='p-2'></img>
                    </a>
                </button>
                <button className='bg-white rounded-xl shadow-lg shadow-gray-200 transition duration-300 hover:-translate-y-3 hover:w-150% basis-20 cursor-pointer'>
                    <a href="https://discord.com/users/640134716111978496" target="_blank">
                        <img src={DiscordLogo} alt='Github' className='p-2'></img>
                    </a>
                </button>
                <button className='bg-white rounded-xl shadow-lg shadow-gray-200 transition duration-300 hover:-translate-y-3 hover:w-150% basis-20 cursor-pointer'>
                    <a href="https://www.instagram.com/alexander.kl_/" target="_blank">
                        <img src={InstagramLogo} alt='Github' className='p-2'></img>
                    </a>
                </button>
            </div>
            </div>
            
        </div>
        
        <section>

            <div className="w-full bg-white h-0.5 my-10"></div>

            <h2>O mně</h2>
            <p className="text-lg">Jsem 18ti letý student 4. ročníku SPŠ na Proseku v oboru Vývoj Aplikací. Mezi mé nejpoužívanější jazyky patří Python, Javascript a PHP. Ve svém volném čase se věnuji hře šachu, hře na kytaru a nebo lezení.</p>
            <div className="w-full bg-white h-0.5 my-10"></div>

            <h2>Projekty</h2>


            <h3 className="font-[Raleway]">Aktualně pracuji na</h3>
            <div className="flex flex-row mt-5 mb-5 pt-5 pb-5">
            <a href="https://github.com/Sasuss/Planicek" target="_blank">
                <div className="w-sm h-80 bg-white rounded p-5 ml-10 transition duration-600 border-3 border-black hover:border-purple-500 hover:scale-110">
                <h4 className="text-black">Planíček</h4>
                <span className="text-black">Aplikace pro plánování skupinových akcí</span>
                <img src={Placeholder} alt="Placeholder" className="mt-5 m-auto"/>
                </div>
            </a>
            <a href="https://github.com/Sasuss/React-personal-site" target="_blank">
                <div className="w-sm h-80 bg-white rounded p-5 ml-10 transition duration-600 border-3 border-black hover:border-purple-500 hover:scale-110">
                <h4 className="text-black">Osobní web</h4>
                <span className="text-black">Webová stránka pro sebeprezentaci</span>
                <img src={WebsitePreview} alt="Placeholder" className="mt-5 w-full rounded"/>
                </div>
            </a>

            </div>
            <h3 className="font-[Raleway]">Hotové projekty</h3>
            <div className="flex flex-row mt-5 mb-5 pt-5 pb-5">
            <a href="https://github.com/Sasuss/Ministerstvo-financi-api" target="_blank">
                <div className="w-sm h-80 bg-white rounded p-5 ml-10 transition duration-600 border-3 border-black hover:border-purple-500 hover:scale-110">
                <h4 className="text-black">Faktury MF API</h4>
                <span className="text-black">Php API sledující faktury ministerstva financí</span>
                <img src={MFlogo} alt="Placeholder" className="mt-5 m-auto"/>
                </div>
            </a>
            <a href="https://github.com/Sasuss/Blackjack-Card-Counter" target="_blank">
                <div className="w-sm h-80 bg-white rounded p-5 ml-10 transition duration-600 border-3 border-black hover:border-purple-500 hover:scale-110">
                <h4 className="text-black">Blackjack Card Counter</h4>
                <span className="text-black">Webová aplikace pro záznam odehraných karet v blackjacku a výpočtu šance na výhru</span>
                <img src={BlackjackPreview} alt="Placeholder" className="mt-5 w-full rounded"/>
                </div>
            </a>

            </div>
            <div className="w-full bg-white h-0.5 my-10"></div>


            <h2>Certifikace</h2>
            <div className="flex flex-row mt-5 mb-5 pt-5 pb-5">
                <div className="w-sm h-80 bg-white rounded p-5 ml-10 transition duration-600 border-3 border-black hover:border-purple-500 hover:scale-110">
                <h4 className="text-black">Certificate in Advanced English</h4>

                <img src={CambridgeEnlish} alt="Placeholder" className="mt-5 w-full rounded"/>
                </div>
            </div>
            <div className="w-full bg-white h-0.5 my-10"></div>

            <h2>Blog</h2>
            
            <div className="flex flex-row mt-5 mb-5 pt-5 pb-5">
                <Link to={"/Bakingshrek"}>
                    <div className="w-xs h-90 bg-white rounded-md p-5 overflow-hidden ml-10 transition duration-600 border-3 border-black hover:border-purple-500 hover:scale-110">
                        <h3 className="text-black text-center">Perníkový shrek: Swamp Quest</h3>
                        <div className="w-full bg-black h-0.5 mb-2"></div>
                        <span className="text-black">
                           <p> Se skupinkou studentu SPŠ na Proseku jsme v rámci návrhu her vymysleli tuto:</p>
                            Shrek má novej gig. Potřebuje donést pernicky Fioně. Alternativní cesty jako pernicky jinejm princeznám. Týmy po třech, každá postava má classu: Combat, Social, Movement a subclassy.
                            Skupinka za kterou hrajeme se hýbe po mapě, mohou nastat různé eventy: menší lokace kde je buď combat nebo social.
                        </span>
                    </div>
                </Link>
            </div>
        </section>
        <footer>
            <p className="text-center">© 2026 Alexander Klimeš.</p>
            <p className="text-center">Použité ikony z <a href="https://www.flaticon.com/">flaticon</a></p>
        </footer>
        </>
    )
}


export default Homepage