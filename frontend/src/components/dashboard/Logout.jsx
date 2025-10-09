import { useContext } from "react"
import { contextOpen } from "./Dashboard"

const Logout = () => {

   const {setLog} = useContext(contextOpen) 

  return (
    <div className="profile-section flex flex-col items-center gap-4 px-4 sm:px-6 py-4 fixed sm:absolute left-1/2 sm:left-auto sm:right-[39.78%]lg:right-[39.78%] top-1/2 sm:top-[30vh] -translate-x-1/2 sm:translate-x-0 -translate-y-1/2 sm:translate-y-0 w-[90%] max-w-[400px] sm:w-[85%] md:w-[75%] lg:w-[60%] xl:w-[20%] rounded-2xl z-20 bg-[#09090b] h-auto">

        <form className="w-full flex flex-col items-center gap-4 relative">
            <div className='flex items-center cursor-pointer w-full justify-center'>
                <h1 className="tracking-tighter text-xl sm:text-2xl">Logout</h1>
                <div onClick={() => setLog(false)} className="absolute right-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </div>
            </div>

            <div>
                <h1>maum5325@gmail.com</h1>
            </div>
            
            <button type="submit" className="bg-red-500 w-[70%] sm:w-[50%] rounded-2xl py-2 cursor-pointer my-3 hover:bg-red-400 active:scale-[0.9] duration-[0.2s]">Logout</button>
       </form >
       
    </div>
  )
}

export default Logout
