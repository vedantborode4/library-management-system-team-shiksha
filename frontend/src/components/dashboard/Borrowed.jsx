import { createContext, useContext, useState } from "react"
import { contextOpen } from "./Dashboard"
import BorrowChoose from "./BorrowChoose"

export const contextBor = createContext()

const Borrowed = () => {
  const {open} = useContext(contextOpen)
  const[chooseBorrow ,setChooseBorrow] = useState(true)
  const[BuyBor ,setBuyBor] = useState(false)
  
  return (
    <contextBor.Provider value={BuyBor}>
    <div className={`data-panel overflow-y-scroll panel z-10 px-5  py-3 flex flex-col justify-center gap-4 rounded-[7px] absolute top-12 bottom-0.5 right-0  bg-zinc-950  transition-all duration-[0.2s] ease-in-out ${open ? "w-[100%] md:w-[73%] xl:w-[83%]":"w-[100%]"}`}>
          {
            chooseBorrow ?
             <div className="page select-none flex flex-col gap-4 sm:gap-10 items-center px-4 sm:px-6 md:px-8">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center cursor-default bg-gradient-to-r from-white via-gray-300 to-black bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  How Would You Like to Borrow?
                  </h1>

                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <button onClick={() => {
                      setChooseBorrow(false)
                      setBuyBor(false)
                    }} className="bg-blue-500 flex justify-center rounded-2xl px-4 py-3 active:scale-[1.1] duration-[0.2s] hover:bg-blue-400 cursor-pointer text-sm sm:text-base">Individual</button>
                    <button onClick={() => {
                      setChooseBorrow(false)
                      setBuyBor(true)
                    }} className="bg-blue-500 flex justify-center rounded-2xl px-4 py-3 active:scale-[1.1] duration-[0.2s] hover:bg-blue-400 cursor-pointer text-sm sm:text-base">Buy in group</button>
                   
                  </div>
             </div>

             : 
             <BorrowChoose></BorrowChoose>
          }
    </div>  
    </contextBor.Provider>
  )
}

export default Borrowed