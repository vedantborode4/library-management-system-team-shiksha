import {  useState } from "react"


const Profile = ({onClose}) => {

  const[signup , setSignup] = useState(true)
    
  return (
    <div className="profile-section flex flex-col items-center gap-4 px-4 sm:px-6 py-4 fixed sm:absolute left-1/2 sm:left-auto sm:right-[39.78%]lg:right-[39.78%] top-1/2 sm:top-[30vh] -translate-x-1/2 sm:translate-x-0 -translate-y-1/2 sm:translate-y-0 w-[90%] max-w-[400px] sm:w-[85%] md:w-[75%] lg:w-[60%] xl:w-[20%] rounded-2xl z-20 bg-[#09090b] h-auto">
       {
         signup ?
        <form className="w-full flex flex-col items-center gap-4 relative">
            <div className='flex items-center cursor-pointer w-full justify-center'>
                <h1 className="tracking-tighter text-xl sm:text-2xl">Login</h1>
                <div onClick={onClose} className="absolute right-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="" className="text-[13px] my-2">Email</label>
                <input type="email" className="bg-white w-full h-10 rounded-2xl outline-none text-black px-3" />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="" className="text-[13px] my-2">Password</label>
                <input type="password" className="bg-white w-full h-10 rounded-2xl outline-none text-black px-3" />
            </div>
            <button type="submit" className="bg-red-500 w-[70%] sm:w-[50%] rounded-2xl py-2 cursor-pointer my-3 hover:bg-red-400 active:scale-[0.9] duration-[0.2s]">Login</button>
            <h1 className="text-sm sm:text-base text-center">Don't have an account? <span onClick={() => setSignup(false)} className="underline cursor-pointer">Sign up</span></h1>
       </form >
       :
       <form className="w-full flex flex-col items-center gap-4 relative">
             <div className='flex items-center cursor-pointer w-full justify-center'>
                <h1 className="tracking-tighter text-xl sm:text-2xl">Signup</h1>
                 <div onClick={onClose} className="absolute right-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="" className="text-[13px] my-2">Email</label>
                <input type="email" className="bg-white w-full h-10 rounded-2xl outline-none text-black px-3" />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="" className="text-[13px] my-2">Password</label>
                <input type="password" className="bg-white w-full h-10 rounded-2xl outline-none text-black px-3" />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="" className="text-[13px] my-2">Name</label>
                <input type="text" className="bg-white w-full h-10 rounded-2xl outline-none text-black px-3" />
            </div>
            <button type="submit" className="bg-red-500 w-[70%] sm:w-[50%] rounded-2xl py-2 cursor-pointer my-3 hover:bg-red-400 active:scale-[0.9] duration-[0.2s]">Sign up</button>
            <h1 className="text-sm sm:text-base text-center">Already have an account? <span onClick={() => setSignup(true)} className="underline cursor-pointer">Login</span></h1>
       </form >
       }
    </div>

  )
}

export default Profile
