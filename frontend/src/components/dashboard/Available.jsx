import { useContext } from "react"
import { contextOpen } from "./Dashboard"

const Available = () => {

  const {open} = useContext(contextOpen)
  
    
  return (
      <div className={`data-panel overflow-y-scroll panel z-10 px-5  py-3 flex flex-col gap-4 rounded-[7px] absolute top-12 bottom-0.5 right-0  bg-zinc-950  transition-all duration-[0.2s] ease-in-out ${open ? "w-[100%] md:w-[73%] xl:w-[83%]":"w-[100%]"}`}>
          
           <div class="main-card my-4 flex gap-10 flex-wrap justify-center lg:justify-start">
              <div class="card w-[100%] sm:w-[250px] flex flex-col gap-3 p-3 h-auto rounded-[7px] bg-zinc-700">
                  <img src="" alt="" class="w-full rounded-[7px] h-45 bg-zinc-500 object-cover" />
                  <div>
                      <h1 class="title text-[17px] tracking-tighter font-medium text-white">title</h1>
                      <div class="author text-zinc-400 text-[15px] tracking-tighter">author</div>
                      <div class="category text-zinc-400 text-[15px] tracking-tighter">category</div>
                  </div>
                  <div class="flex gap-3 mt-7">
                    <h1 class="price text-[13px] tracking-tighter font-medium text-white">price</h1>
                    <h1 class="quantity text-[13px] tracking-tighter font-medium text-white">quantity</h1>
                  </div>
              </div>
            
              <div class="card w-[100%] sm:w-[250px] flex flex-col gap-3 p-3 h-auto rounded-[7px] bg-zinc-700">
                  <img src="" alt="" class="w-full rounded-[7px] h-45 bg-zinc-500 object-cover" />
                  <div>
                      <h1 class="title text-[17px] tracking-tighter font-medium text-white">title</h1>
                      <div class="author text-zinc-400 text-[15px] tracking-tighter">author</div>
                      <div class="category text-zinc-400 text-[15px] tracking-tighter">category</div>
                  </div>
                  <div class="flex gap-3 mt-7">
                    <h1 class="price text-[13px] tracking-tighter font-medium text-white">price</h1>
                    <h1 class="quantity text-[13px] tracking-tighter font-medium text-white">quantity</h1>
                  </div>
              </div>
            
              <div class="card w-[100%] sm:w-[250px] flex flex-col gap-3 p-3 h-auto rounded-[7px] bg-zinc-700">
                  <img src="" alt="" class="w-full rounded-[7px] h-45 bg-zinc-500 object-cover" />
                  <div>
                      <h1 class="title text-[17px] tracking-tighter font-medium text-white">title</h1>
                      <div class="author text-zinc-400 text-[15px] tracking-tighter">author</div>
                      <div class="category text-zinc-400 text-[15px] tracking-tighter">category</div>
                  </div>
                  <div class="flex gap-3 mt-7">
                    <h1 class="price text-[13px] tracking-tighter font-medium text-white">price</h1>
                    <h1 class="quantity text-[13px] tracking-tighter font-medium text-white">quantity</h1>
                  </div>
              </div>
            
              <div class="card w-[100%] sm:w-[250px] flex flex-col gap-3 p-3 h-auto rounded-[7px] bg-zinc-700">
                  <img src="" alt="" class="w-full rounded-[7px] h-45 bg-zinc-500 object-cover" />
                  <div>
                      <h1 class="title text-[17px] tracking-tighter font-medium text-white">title</h1>
                      <div class="author text-zinc-400 text-[15px] tracking-tighter">author</div>
                      <div class="category text-zinc-400 text-[15px] tracking-tighter">category</div>
                  </div>
                  <div class="flex gap-3 mt-7">
                    <h1 class="price text-[13px] tracking-tighter font-medium text-white">price</h1>
                    <h1 class="quantity text-[13px] tracking-tighter font-medium text-white">quantity</h1>
                  </div>
              </div>
            
              <div class="card w-[100%] sm:w-[250px] flex flex-col gap-3 p-3 h-auto rounded-[7px] bg-zinc-700">
                  <img src="" alt="" class="w-full rounded-[7px] h-45 bg-zinc-500 object-cover" />
                  <div>
                      <h1 class="title text-[17px] tracking-tighter font-medium text-white">title</h1>
                      <div class="author text-zinc-400 text-[15px] tracking-tighter">author</div>
                      <div class="category text-zinc-400 text-[15px] tracking-tighter">category</div>
                  </div>
                  <div class="flex gap-3 mt-7">
                    <h1 class="price text-[13px] tracking-tighter font-medium text-white">price</h1>
                    <h1 class="quantity text-[13px] tracking-tighter font-medium text-white">quantity</h1>
                  </div>
              </div>
            
              <div class="card w-[100%] sm:w-[250px] flex flex-col gap-3 p-3 h-auto rounded-[7px] bg-zinc-700">
                  <img src="" alt="" class="w-full rounded-[7px] h-45 bg-zinc-500 object-cover" />
                  <div>
                      <h1 class="title text-[17px] tracking-tighter font-medium text-white">title</h1>
                      <div class="author text-zinc-400 text-[15px] tracking-tighter">author</div>
                      <div class="category text-zinc-400 text-[15px] tracking-tighter">category</div>
                  </div>
                  <div class="flex gap-3 mt-7">
                    <h1 class="price text-[13px] tracking-tighter font-medium text-white">price</h1>
                    <h1 class="quantity text-[13px] tracking-tighter font-medium text-white">quantity</h1>
                  </div>
              </div>
            
              <div class="card w-[100%] sm:w-[250px] flex flex-col gap-3 p-3 h-auto rounded-[7px] bg-zinc-700">
                  <img src="" alt="" class="w-full rounded-[7px] h-45 bg-zinc-500 object-cover" />
                  <div>
                      <h1 class="title text-[17px] tracking-tighter font-medium text-white">title</h1>
                      <div class="author text-zinc-400 text-[15px] tracking-tighter">author</div>
                      <div class="category text-zinc-400 text-[15px] tracking-tighter">category</div>
                  </div>
                  <div class="flex gap-3 mt-7">
                    <h1 class="price text-[13px] tracking-tighter font-medium text-white">price</h1>
                    <h1 class="quantity text-[13px] tracking-tighter font-medium text-white">quantity</h1>
                  </div>
              </div>
            
              <div class="card w-[100%] sm:w-[250px] flex flex-col gap-3 p-3 h-auto rounded-[7px] bg-zinc-700">
                  <img src="" alt="" class="w-full rounded-[7px] h-45 bg-zinc-500 object-cover" />
                  <div>
                      <h1 class="title text-[17px] tracking-tighter font-medium text-white">title</h1>
                      <div class="author text-zinc-400 text-[15px] tracking-tighter">author</div>
                      <div class="category text-zinc-400 text-[15px] tracking-tighter">category</div>
                  </div>
                  <div class="flex gap-3 mt-7">
                    <h1 class="price text-[13px] tracking-tighter font-medium text-white">price</h1>
                    <h1 class="quantity text-[13px] tracking-tighter font-medium text-white">quantity</h1>
                  </div>
              </div>
            
              <div class="card w-[100%] sm:w-[250px] flex flex-col gap-3 p-3 h-auto rounded-[7px] bg-zinc-700">
                  <img src="" alt="" class="w-full rounded-[7px] h-45 bg-zinc-500 object-cover" />
                  <div>
                      <h1 class="title text-[17px] tracking-tighter font-medium text-white">title</h1>
                      <div class="author text-zinc-400 text-[15px] tracking-tighter">author</div>
                      <div class="category text-zinc-400 text-[15px] tracking-tighter">category</div>
                  </div>
                  <div class="flex gap-3 mt-7">
                    <h1 class="price text-[13px] tracking-tighter font-medium text-white">price</h1>
                    <h1 class="quantity text-[13px] tracking-tighter font-medium text-white">quantity</h1>
                  </div>
              </div>
            
              <div class="card w-[100%] sm:w-[250px] flex flex-col gap-3 p-3 h-auto rounded-[7px] bg-zinc-700">
                  <img src="" alt="" class="w-full rounded-[7px] h-45 bg-zinc-500 object-cover" />
                  <div>
                      <h1 class="title text-[17px] tracking-tighter font-medium text-white">title</h1>
                      <div class="author text-zinc-400 text-[15px] tracking-tighter">author</div>
                      <div class="category text-zinc-400 text-[15px] tracking-tighter">category</div>
                  </div>
                  <div class="flex gap-3 mt-7">
                    <h1 class="price text-[13px] tracking-tighter font-medium text-white">price</h1>
                    <h1 class="quantity text-[13px] tracking-tighter font-medium text-white">quantity</h1>
                  </div>
              </div>
            
              <div class="card w-[100%] sm:w-[250px] flex flex-col gap-3 p-3 h-auto rounded-[7px] bg-zinc-700">
                  <img src="" alt="" class="w-full rounded-[7px] h-45 bg-zinc-500 object-cover" />
                  <div>
                      <h1 class="title text-[17px] tracking-tighter font-medium text-white">title</h1>
                      <div class="author text-zinc-400 text-[15px] tracking-tighter">author</div>
                      <div class="category text-zinc-400 text-[15px] tracking-tighter">category</div>
                  </div>
                  <div class="flex gap-3 mt-7">
                    <h1 class="price text-[13px] tracking-tighter font-medium text-white">price</h1>
                    <h1 class="quantity text-[13px] tracking-tighter font-medium text-white">quantity</h1>
                  </div>
              </div>
            
              <div class="card w-[100%] sm:w-[250px] flex flex-col gap-3 p-3 h-auto rounded-[7px] bg-zinc-700">
                  <img src="" alt="" class="w-full rounded-[7px] h-45 bg-zinc-500 object-cover" />
                  <div>
                      <h1 class="title text-[17px] tracking-tighter font-medium text-white">title</h1>
                      <div class="author text-zinc-400 text-[15px] tracking-tighter">author</div>
                      <div class="category text-zinc-400 text-[15px] tracking-tighter">category</div>
                  </div>
                  <div class="flex gap-3 mt-7">
                    <h1 class="price text-[13px] tracking-tighter font-medium text-white">price</h1>
                    <h1 class="quantity text-[13px] tracking-tighter font-medium text-white">quantity</h1>
                  </div>
              </div>
            
              <div class="card w-[100%] sm:w-[250px] flex flex-col gap-3 p-3 h-auto rounded-[7px] bg-zinc-700">
                  <img src="" alt="" class="w-full rounded-[7px] h-45 bg-zinc-500 object-cover" />
                  <div>
                      <h1 class="title text-[17px] tracking-tighter font-medium text-white">title</h1>
                      <div class="author text-zinc-400 text-[15px] tracking-tighter">author</div>
                      <div class="category text-zinc-400 text-[15px] tracking-tighter">category</div>
                  </div>
                  <div class="flex gap-3 mt-7">
                    <h1 class="price text-[13px] tracking-tighter font-medium text-white">price</h1>
                    <h1 class="quantity text-[13px] tracking-tighter font-medium text-white">quantity</h1>
                  </div>
              </div>
            
              <div class="card w-[100%] sm:w-[250px] flex flex-col gap-3 p-3 h-auto rounded-[7px] bg-zinc-700">
                  <img src="" alt="" class="w-full rounded-[7px] h-45 bg-zinc-500 object-cover" />
                  <div>
                      <h1 class="title text-[17px] tracking-tighter font-medium text-white">title</h1>
                      <div class="author text-zinc-400 text-[15px] tracking-tighter">author</div>
                      <div class="category text-zinc-400 text-[15px] tracking-tighter">category</div>
                  </div>
                  <div class="flex gap-3 mt-7">
                    <h1 class="price text-[13px] tracking-tighter font-medium text-white">price</h1>
                    <h1 class="quantity text-[13px] tracking-tighter font-medium text-white">quantity</h1>
                  </div>
              </div>
            
              <div class="card w-[100%] sm:w-[250px] flex flex-col gap-3 p-3 h-auto rounded-[7px] bg-zinc-700">
                  <img src="" alt="" class="w-full rounded-[7px] h-45 bg-zinc-500 object-cover" />
                  <div>
                      <h1 class="title text-[17px] tracking-tighter font-medium text-white">title</h1>
                      <div class="author text-zinc-400 text-[15px] tracking-tighter">author</div>
                      <div class="category text-zinc-400 text-[15px] tracking-tighter">category</div>
                  </div>
                  <div class="flex gap-3 mt-7">
                    <h1 class="price text-[13px] tracking-tighter font-medium text-white">price</h1>
                    <h1 class="quantity text-[13px] tracking-tighter font-medium text-white">quantity</h1>
                  </div>
              </div>
            
              <div class="card w-[100%] sm:w-[250px] flex flex-col gap-3 p-3 h-auto rounded-[7px] bg-zinc-700">
                  <img src="" alt="" class="w-full rounded-[7px] h-45 bg-zinc-500 object-cover" />
                  <div>
                      <h1 class="title text-[17px] tracking-tighter font-medium text-white">title</h1>
                      <div class="author text-zinc-400 text-[15px] tracking-tighter">author</div>
                      <div class="category text-zinc-400 text-[15px] tracking-tighter">category</div>
                  </div>
                  <div class="flex gap-3 mt-7">
                    <h1 class="price text-[13px] tracking-tighter font-medium text-white">price</h1>
                    <h1 class="quantity text-[13px] tracking-tighter font-medium text-white">quantity</h1>
                  </div>
              </div>
            
              <div class="card w-[100%] sm:w-[250px] flex flex-col gap-3 p-3 h-auto rounded-[7px] bg-zinc-700">
                  <img src="" alt="" class="w-full rounded-[7px] h-45 bg-zinc-500 object-cover" />
                  <div>
                      <h1 class="title text-[17px] tracking-tighter font-medium text-white">title</h1>
                      <div class="author text-zinc-400 text-[15px] tracking-tighter">author</div>
                      <div class="category text-zinc-400 text-[15px] tracking-tighter">category</div>
                  </div>
                  <div class="flex gap-3 mt-7">
                    <h1 class="price text-[13px] tracking-tighter font-medium text-white">price</h1>
                    <h1 class="quantity text-[13px] tracking-tighter font-medium text-white">quantity</h1>
                  </div>
              </div>
            
              <div class="card w-[100%] sm:w-[250px] flex flex-col gap-3 p-3 h-auto rounded-[7px] bg-zinc-700">
                  <img src="" alt="" class="w-full rounded-[7px] h-45 bg-zinc-500 object-cover" />
                  <div>
                      <h1 class="title text-[17px] tracking-tighter font-medium text-white">title</h1>
                      <div class="author text-zinc-400 text-[15px] tracking-tighter">author</div>
                      <div class="category text-zinc-400 text-[15px] tracking-tighter">category</div>
                  </div>
                  <div class="flex gap-3 mt-7">
                    <h1 class="price text-[13px] tracking-tighter font-medium text-white">price</h1>
                    <h1 class="quantity text-[13px] tracking-tighter font-medium text-white">quantity</h1>
                  </div>
              </div>
            
              <div class="card w-[100%] sm:w-[250px] flex flex-col gap-3 p-3 h-auto rounded-[7px] bg-zinc-700">
                  <img src="" alt="" class="w-full rounded-[7px] h-45 bg-zinc-500 object-cover" />
                  <div>
                      <h1 class="title text-[17px] tracking-tighter font-medium text-white">title</h1>
                      <div class="author text-zinc-400 text-[15px] tracking-tighter">author</div>
                      <div class="category text-zinc-400 text-[15px] tracking-tighter">category</div>
                  </div>
                  <div class="flex gap-3 mt-7">
                    <h1 class="price text-[13px] tracking-tighter font-medium text-white">price</h1>
                    <h1 class="quantity text-[13px] tracking-tighter font-medium text-white">quantity</h1>
                  </div>
              </div>
            
              <div class="card w-[100%] sm:w-[250px] flex flex-col gap-3 p-3 h-auto rounded-[7px] bg-zinc-700">
                  <img src="" alt="" class="w-full rounded-[7px] h-45 bg-zinc-500 object-cover" />
                  <div>
                      <h1 class="title text-[17px] tracking-tighter font-medium text-white">title</h1>
                      <div class="author text-zinc-400 text-[15px] tracking-tighter">author</div>
                      <div class="category text-zinc-400 text-[15px] tracking-tighter">category</div>
                  </div>
                  <div class="flex gap-3 mt-7">
                    <h1 class="price text-[13px] tracking-tighter font-medium text-white">price</h1>
                    <h1 class="quantity text-[13px] tracking-tighter font-medium text-white">quantity</h1>
                  </div>
              </div>
            
              <div class="card w-[100%] sm:w-[250px] flex flex-col gap-3 p-3 h-auto rounded-[7px] bg-zinc-700">
                  <img src="" alt="" class="w-full rounded-[7px] h-45 bg-zinc-500 object-cover" />
                  <div>
                      <h1 class="title text-[17px] tracking-tighter font-medium text-white">title</h1>
                      <div class="author text-zinc-400 text-[15px] tracking-tighter">author</div>
                      <div class="category text-zinc-400 text-[15px] tracking-tighter">category</div>
                  </div>
                  <div class="flex gap-3 mt-7">
                    <h1 class="price text-[13px] tracking-tighter font-medium text-white">price</h1>
                    <h1 class="quantity text-[13px] tracking-tighter font-medium text-white">quantity</h1>
                  </div>
              </div>
            
              <div class="card w-[100%] sm:w-[250px] flex flex-col gap-3 p-3 h-auto rounded-[7px] bg-zinc-700">
                  <img src="" alt="" class="w-full rounded-[7px] h-45 bg-zinc-500 object-cover" />
                  <div>
                      <h1 class="title text-[17px] tracking-tighter font-medium text-white">title</h1>
                      <div class="author text-zinc-400 text-[15px] tracking-tighter">author</div>
                      <div class="category text-zinc-400 text-[15px] tracking-tighter">category</div>
                  </div>
                  <div class="flex gap-3 mt-7">
                    <h1 class="price text-[13px] tracking-tighter font-medium text-white">price</h1>
                    <h1 class="quantity text-[13px] tracking-tighter font-medium text-white">quantity</h1>
                  </div>
              </div>
            
           </div>

      </div>  
  )
}

export default Available
