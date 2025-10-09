import { createContext, useState } from "react"
import SidePanel from "./SidePanel"
import { Outlet } from "react-router-dom"
import Logout from "./Logout"


export const contextOpen = createContext() 

const Dashboard = () => {

    const[open , setOpen] = useState(true)
    const[log , setLog] = useState(false)


    let handleHam = () => {
        setOpen(open => !open)
    }

  return (
<contextOpen.Provider value={{open , setOpen , setLog }}>    
<div className="bg-zinc-950 w-full min-h-screen text-white flex flex-col items-center justify-between">
     
    <div className="navbar z-30 w-full h-12 flex items-center justify-between px-6">
        <div className="flex items-center  gap-10 ">
            <div onClick={handleHam} className="hamburger cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
            </div>
            <div className="heading text-2xl tracking-tighter cursor-default select-none">Libris</div>
        </div>
        <div onClick={() => setLog(!log)} className="profile-dash cursor-pointer hover:scale-[1.1] duration-[0.2s] active:scale-[1.2]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
            </div>
    </div>

    

    <SidePanel open={open}></SidePanel>
  
     {/* Outlet will render Available, Borrowed, or Feedback */}
    <Outlet></Outlet>

    {
        log ?
         <Logout></Logout>
        : null
    }
          
  
</div>
</contextOpen.Provider>
  )
}

export default Dashboard
