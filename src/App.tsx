import PersonalPicture from "./assets/klimes.jpg"
import GithubLogo from "./assets/github.png"
import LinkedinLogo from "./assets/linkedin.png"
import DiscordLogo from "./assets/discord.png"
import InstagramLogo from "./assets/instagram.png"
import Placeholder from "./assets/placeholder.png"
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
            <button className='bg-white rounded-xl shadow-lg shadow-gray-200 transition duration-300 hover:-translate-y-3 hover:w-150% basis-20'>
              <img src={GithubLogo} alt='Github' className='p-2'></img>

            </button>
            <button className='bg-white rounded-xl shadow-lg shadow-gray-200 transition duration-300 hover:-translate-y-3 hover:w-150% basis-20'>
              <img src={LinkedinLogo} alt='Github' className='p-2'></img>

            </button>
            <button className='bg-white rounded-xl shadow-lg shadow-gray-200 transition duration-300 hover:-translate-y-3 hover:w-150% basis-20'>
              <img src={DiscordLogo} alt='Github' className='p-2'></img>

            </button>
            <button className='bg-white rounded-xl shadow-lg shadow-gray-200 transition duration-300 hover:-translate-y-3 hover:w-150% basis-20'>
              <img src={InstagramLogo} alt='Github' className='p-2'></img>

            </button>
          </div>
        </div>
        
      </div>

      <section>
        <h2>O mně</h2>
        <h2>Projekty</h2>
        <h3>Aktualně pracuji na</h3>
        <div className="flex flexrow mt-5 mb-5 pt-5 pb-5">
          <a href="https://github.com/Sasuss/Planicek" target="_blank">
            <div className="w-fit h-auto bg-white rounded p-5 ml-10 transition duration-600 border-3 border-black hover:border-purple-500 hover:scale-110">
              <h4 className="text-black">Planíček</h4>
              <span className="text-black">Aplikace pro plánování skupinových akcí</span>
              <img src={Placeholder} alt="Placeholder" className="m-auto"/>

            </div>
          </a>
        </div>


        <h2>Certifikace</h2>
        <h2>Blog</h2>
      </section>

    </>
  )
}

export default App
