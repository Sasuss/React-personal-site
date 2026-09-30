import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import PersonalPicture from "./assets/klimes.jpg"
import GithubLogo from "./assets/github.png"
import LinkedinLogo from "./assets/linkedin.png"
import DiscordLogo from "./assets/discord.png"
import InstagramLogo from "./assets/instagram.png"
import './App.css'

function App() {

  return (
    <>
      <div className='flex flex-row'>
        <img src={PersonalPicture} className="rounded-4xl w-70 basis-1/5" alt="Personal Picture" />
        <div className='basis-4/5 ml-5'>
          <h1 className='font-[Raleway]'>Alexander Klimeš</h1>
          <span className='text-purple-500 font-raleway'>LFL Founder</span>

        </div>
      </div>
      <div className='flex flex-row space-x-50 mt-5 mb-5 pl-25 pr-25'>
        <button className='bg-white rounded-xl basis-1/4 shadow-lg shadow-gray-200 transition duration-300 hover:-translate-y-3 hover:w-150%'>
          <img src={GithubLogo} alt='Github' className='p-2'></img>

        </button>
        <button className='bg-white rounded-xl basis-1/4 shadow-lg shadow-gray-200 transition duration-300 hover:-translate-y-3 hover:w-150%'>
          <img src={LinkedinLogo} alt='Github' className='p-2'></img>

        </button>
        <button className='bg-white rounded-xl basis-1/4 shadow-lg shadow-gray-200 transition duration-300 hover:-translate-y-3 hover:w-150%'>
          <img src={DiscordLogo} alt='Github' className='p-2'></img>

        </button>
        <button className='bg-white rounded-xl basis-1/4 shadow-lg shadow-gray-200 transition duration-300 hover:-translate-y-3 hover:w-150%'>
          <img src={InstagramLogo} alt='Github' className='p-2'></img>

        </button>
      </div>





      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/Sasuss" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
