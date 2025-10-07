import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Typed from 'typed.js';
import Profile from './Profile';



const Landing = () => {

  const el = React.useRef(null);
  const [about , setAbout] = useState(false)
  const [login , setLogin] = useState(false)

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Discover, borrow, and manage thousands of books with our modern library <br> <pre>                          management system.</pre>'],
      typeSpeed: 15,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  let handleLogin = () => {
    setLogin(true)
  }



  return (

<div className="bg-zinc-950 w-full min-h-screen text-white flex flex-col items-center justify-between">
     
             <div className="navbar w-full h-12 flex items-center justify-between px-6">
                <div className="heading text-2xl tracking-tighter cursor-default">Libris</div>
                <div onClick={handleLogin} className="profile cursor-pointer hover:scale-[1.1] duration-[0.2s] active:scale-[1.2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
                  </div>
             </div>

            {
              login ? 
              <Profile onClose={() => setLogin(false)}/>
              : null
            }

            <div className="page flex flex-col gap-4 sm:gap-6 items-center px-4 sm:px-6 md:px-8">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center cursor-default bg-gradient-to-r from-white via-gray-300 to-black bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Your Gateway to Endless Knowledge
                  </h1>
                  <div className="flex flex-col items-center cursor-default">
                    <span ref={el} />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <button className="bg-blue-500 rounded-2xl px-4 py-3 active:scale-[1.1] duration-[0.2s] hover:bg-blue-400 cursor-pointer text-sm sm:text-base">Browse Books</button>
                    <button className="bg-zinc-600 rounded-2xl px-4 py-3 active:scale-[1.1] duration-[0.2s] hover:bg-zinc-500 cursor-pointer text-sm sm:text-base">Learn More</button>
                  </div>
            </div>

            <div className="footer w-full h-16 sm:h-20 flex px-4 sm:px-6">
                <div onClick={() => setAbout(true)} className="cursor-pointer active:scale-[0.9] duration-[0.2s]" title="About section">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m10 8 4 4-4 4"/></svg>
                </div>
                
            </div>

            <div className="about-card fixed sm:absolute left-1/2 sm:left-[3.5vw] top-1/2 sm:top-[66vh] -translate-x-1/2 sm:translate-x-0 -translate-y-1/2 sm:translate-y-0 w-[90%] max-w-[400px] sm:w-auto sm:max-w-none z-30">
              {
                about ?
                  <div className="about w-full sm:w-90 px-4 sm:px-5 py-3 rounded-2xl flex flex-col gap-3 sm:gap-4 bg-zinc-900 sm:bg-transparent">
                    <div className='text-xl sm:text-2xl tracking-tighter cursor-default flex justify-between items-center'>
                      About the Developers
                      <div onClick={() => setAbout(false)} className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                      </div>
                    </div>
                    <span className='cursor-default text-sm sm:text-base'>Meet the team behind this project</span>
                    {/* Developer 1 */}
                    <div className='w-full h-auto sm:h-30 bg-[#f7cad0] rounded-2xl text-black p-3 sm:p-1 sm:px-3 flex flex-col gap-3 sm:gap-4 justify-center'>
                      <div className='cursor-default'>
                        <h1 className='text-base sm:text-[18px] tracking-tighter'>Aum Mehta</h1>
                        <span className='text-sm sm:text-base'>Frontend</span>
                      </div>
                      <a href="https://github.com/aummehtax" className='flex items-center gap-2 sm:gap-3 text-sm sm:text-base'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        github.com/aummehtax
                      </a>
                    </div>

                    {/* Developer 2 */}
                     <div className='w-full h-auto sm:h-30 bg-[#ced4da] rounded-2xl text-black p-3 sm:p-1 sm:px-3 flex flex-col gap-3 sm:gap-4 justify-center'>
                      <div className='cursor-default'>
                        <h1 className='text-base sm:text-[18px] tracking-tighter'>Vedant Borode</h1>
                        <span className='text-sm sm:text-base'>Backend</span>
                      </div>
                      <a href="https://github.com/vedantborode4" className='flex items-center gap-2 sm:gap-3 text-sm sm:text-base'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        github.com/vedantborode4
                      </a>
                    </div>
                  </div>
                : null
              }
            </div>
     
    </div>
    
  )
}

export default Landing
