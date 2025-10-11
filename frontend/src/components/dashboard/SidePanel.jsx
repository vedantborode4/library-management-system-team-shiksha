import { useNavigate } from "react-router-dom"


const SidePanel = ({open}) => {
    let navigate = useNavigate()
  return (
    <div className={`panel z-20 w-[50%] md:w-[26%] xl:w-[16%] px-5  py-3 flex flex-col gap-4 rounded-r-[7px] absolute top-12 bottom-0 left-0  transform transition-transform bg-zinc-950 duration-[0.5s] ease-in-out ${open ? "translate-x-0.5":"-translate-x-[103%]"} `}>
      <div onClick={() => navigate("/dashboard") } className="select-none w-full py-3 flex justify-center items-center cursor-pointer bg-zinc-600 rounded-[7px] hover:bg-zinc-500 duration-[0.2s] active:scale-[0.95]">Available books</div>
      <div onClick={() => navigate("/dashboard/borrowed")} className="select-none w-full py-3 flex justify-center items-center cursor-pointer bg-zinc-600 rounded-[7px] hover:bg-zinc-500 duration-[0.2s] active:scale-[0.95]">Borrow books</div>
      <div onClick={() => navigate("/dashboard/Return")} className="select-none w-full py-3 flex justify-center items-center cursor-pointer bg-zinc-600 rounded-[7px] hover:bg-zinc-500 duration-[0.2s] active:scale-[0.95]">Return books</div>
    </div>
  )
}

export default SidePanel
