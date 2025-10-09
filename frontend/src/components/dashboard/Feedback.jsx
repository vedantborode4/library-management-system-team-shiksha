import { useContext } from "react"
import { contextOpen } from "./Dashboard"

const Feedback = () => {
  const {open} = useContext(contextOpen)
  return (
    <div className={`data-panel overflow-y-scroll panel z-10 px-5  py-3 flex flex-col gap-4 rounded-[7px] absolute top-12 bottom-0.5 right-0  bg-zinc-950  transition-all duration-[0.2s] ease-in-out ${open ? "w-[100%] md:w-[73%] xl:w-[83%]":"w-[100%]"}`}>
          <h2>Feedback</h2>
    </div>  
  )
}

export default Feedback
