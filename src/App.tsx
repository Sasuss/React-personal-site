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
import './App.css'

function App() {

  return (
    <>
      <div className='flex flex-row'>
        <img src={PersonalPicture} className="rounded-4xl w-70 basis-1/5" alt="Personal Picture" />
        <div className='basis-4/5 ml-5'>
          <h1 className='font-[Raleway]'>Alexander Klimeš</h1>
          <span className='text-purple-500 font-raleway'>Student</span>
          <div>
            <span>
              Jsem 18ti letý student na Střední průmyslové škole na Proseku v oboru vývoj aplikací který zatím není schopný vymyslet zbytek textu a tak se dá lorem ipsum. Lorem koucum dolor sit amet, consectetur adipiscing elit. Fusce sed elementum elit. Nulla eget lorem ac sem fermentum consequat. Donec placerat ex nec lobortis vulputate. Proin at dapibus ipsum. Cras rutrum commodo eros eu dapibus. Cras tempus purus eget tristique accumsan. Proin vel hendrerit augue. Nulla facilisi. Donec in massa in lorem scelerisque auctor. Quisque vel efficitur eros.
            </span>
          </div>
          <div className='flex flex-row mt-10 border-t-2 border-white pt-10 gap-10 w-fit'>
            <button className='bg-white rounded-xl shadow-lg shadow-gray-200 transition duration-300 hover:-translate-y-3 hover:w-150% basis-20 cursor-pointer'>
              <img src={GithubLogo} alt='Github' className='p-2'></img>

            </button>
            <button className='bg-white rounded-xl shadow-lg shadow-gray-200 transition duration-300 hover:-translate-y-3 hover:w-150% basis-20 cursor-pointer'>
              <img src={LinkedinLogo} alt='Github' className='p-2'></img>

            </button>
            <button className='bg-white rounded-xl shadow-lg shadow-gray-200 transition duration-300 hover:-translate-y-3 hover:w-150% basis-20 cursor-pointer'>
              <img src={DiscordLogo} alt='Github' className='p-2'></img>

            </button>
            <button className='bg-white rounded-xl shadow-lg shadow-gray-200 transition duration-300 hover:-translate-y-3 hover:w-150% basis-20 cursor-pointer'>
              <img src={InstagramLogo} alt='Github' className='p-2'></img>

            </button>
          </div>
        </div>
        
      </div>
      <section>
        <div className="w-full bg-white h-0.5 my-10"></div>

        <h2>O mně</h2>
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
          <div className="w-xs h-90 bg-white rounded-md p-5 overflow-hidden ml-10 transition duration-600 border-3 border-black hover:border-purple-500 hover:scale-110">
            <h3 className="text-black text-center">Lorem Ipsum</h3>
            <div className="w-full bg-black h-0.5 mb-2"></div>
            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sagittis enim, eu viverra diam. Nam nec augue lectus. Sed in porttitor leo. Mauris mattis, urna vitae scelerisque tincidunt, enim magna efficitur diam, vitae vehicula dui massa ac risus. Etiam in sodales lectus. Integer sed blandit nibh. Ut at rhoncus tellus. Maecenas vitae ipsum ornare, porta eros a, condimentum nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla orci velit, laoreet in lacus sed, tempus scelerisque mi. Nunc ultrices turpis ut sem sodales pharetra. Quisque pretium fringilla nisl at facilisis.

Cras felis urna, imperdiet nec elit at, volutpat feugiat lacus. Duis nisi lacus, fermentum quis ipsum eu, ultrices luctus metus. In sed erat ut diam dictum viverra. Fusce eleifend aliquam lacus nec commodo. Mauris in congue velit. Donec ullamcorper nibh sed mauris cursus, quis lacinia purus vehicula. In eu metus ut justo imperdiet tempus et a quam.

Donec vestibulum tempor interdum. Suspendisse semper sollicitudin justo, non dignissim risus venenatis quis. In bibendum volutpat odio eu consequat. Nam faucibus quam nec dolor mollis condimentum. Etiam justo purus, dapibus quis risus ut, malesuada facilisis ipsum. Mauris non eros et neque luctus ultrices. Maecenas varius dui tortor, a pulvinar tellus sollicitudin vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam vel eleifend turpis, vel placerat diam. Quisque a vehicula est, nec commodo ante. Nam ac eros non lectus finibus lobortis. Integer ut nisi imperdiet, luctus leo quis, gravida erat. Nullam fermentum ullamcorper auctor. Fusce ut lacus sit amet est rhoncus pulvinar eget vel odio.
            </p>
          </div>
        </div>
      </section>

    </>
  )
}

export default App
