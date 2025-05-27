import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar';

function ContactPage() {
  return (
    <div>
      <NavBar />

      <div className='flex flex-col py-32 min-h-screen items-center justify-center'>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" placeholder="Search" />
          <kbd className="kbd kbd-sm">⌘</kbd>
          <kbd className="kbd kbd-sm">K</kbd>
        </label>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
            </g>
          </svg>
          <input type="text" className="grow" placeholder="index.php" />
        </label>
        <label className="input">
          Path
          <input type="text" className="grow" placeholder="src/app/" />
          <span className="badge badge-neutral badge-xs">Optional</span>
        </label>
      </div>

      <Footer />
    </div>
  );
}

export default ContactPage