import { useContext, useState, useEffect } from "react"
import { contextOpen } from "./Dashboard"

const Available = () => {

  const {open} = useContext(contextOpen)

  const cardsData = [
    { id: 1, title: "Book 1", author: "Author 1", category: "Category 1", price: "$10", quantity: "5", image: "https://imgs.search.brave.com/SwQINkECXsJBEa6JHd0KOHp-tCEUc5EBDN8aQ7UVBCM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGljY2xpY2tpbWcu/Y29tL2NDd0FBZVN3/VUhGb0hCY20vQ2Fu/dC1IdXJ0LU1lLWJ5/LURhdmlkLUdvZ2dp/bnMtMjAxOC1IYXJk/Y292ZXIud2VicA" },
    { id: 2, title: "Book 2", author: "Author 2", category: "Category 2", price: "$15", quantity: "3", image: "https://imgs.search.brave.com/SwQINkECXsJBEa6JHd0KOHp-tCEUc5EBDN8aQ7UVBCM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGljY2xpY2tpbWcu/Y29tL2NDd0FBZVN3/VUhGb0hCY20vQ2Fu/dC1IdXJ0LU1lLWJ5/LURhdmlkLUdvZ2dp/bnMtMjAxOC1IYXJk/Y292ZXIud2VicA" },
   
  ]

  const [cardStates, setCardStates] = useState(() => 
    cardsData.map(() => ({ 
      feedOpen: true, 
      feedbackInput: "", 
      feedbackText: "", 
      feedbackData: [] 
    }))
  )

  const handleToggleFeed = (index) => {
    setCardStates(prev => prev.map((card, i) => 
      i === index ? { ...card, feedOpen: !card.feedOpen } : card
    ))
  }

  const handleInputChange = (index, field, value) => {
    setCardStates(prev => prev.map((card, i) => 
      i === index ? { ...card, [field]: value } : card
    ))
  }

  const handleSubmitFeedBack = (index) => {
    const card = cardStates[index]
    
    if (!card.feedbackInput.trim() || !card.feedbackText.trim()) {
      alert("Please enter both your name and feedback before submitting.");
      return;
    }

    const newFeedback = {
      name: card.feedbackInput.trim(),
      text: card.feedbackText.trim()  
    }

    setCardStates(prev => prev.map((c, i) => 
      i === index ? {
        ...c,
        feedbackData: [...c.feedbackData, newFeedback],
        feedbackInput: "",
        feedbackText: ""
      } : c
    ))
  }
    
  return (
    <div className={`data-panel overflow-y-scroll panel z-10 px-5  py-3 flex flex-col gap-4 rounded-[7px] absolute top-12 bottom-0.5 right-0  bg-zinc-950  transition-all duration-[0.2s] ease-in-out ${open ? "w-[100%] md:w-[73%] xl:w-[83%]":"w-[100%]"}`}>
      
      <div class="main-card my-4 flex gap-10 flex-wrap justify-center lg:justify-start">
        
        {cardsData.map((cardData, cardIndex) => {
          const card = cardStates[cardIndex]
          
          return (
            <div key={cardData.id} class="card select-none w-[100%] sm:w-[250px] flex flex-col gap-3 p-3 h-auto rounded-[7px] bg-zinc-700">
              <img src={cardData.image} alt="" class="w-full select-none rounded-[7px] h-56 bg-zinc-500 object-cover" />
              <div>
                <h1 class="title text-[17px] tracking-tighter font-medium text-white">{cardData.title}</h1>
                <div class="author text-zinc-400 text-[15px] tracking-tighter">{cardData.author}</div>
                <div class="category text-zinc-400 text-[15px] tracking-tighter">{cardData.category}</div>
              </div>
              <div class="flex gap-3 mt-7">
                <h1 class="price text-[13px] tracking-tighter font-medium text-white">{cardData.price}</h1>
                <h1 class="quantity text-[13px] tracking-tighter font-medium text-white">{cardData.quantity}</h1>
              </div>

              <div onClick={() => handleToggleFeed(cardIndex)} className="feedback w-full p-2 rounded-[7px] flex justify-between items-center cursor-pointer select-none">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square-icon lucide-message-square"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/></svg>
                  <h1>Feedback ({card.feedbackData.length})</h1>
                </div>

                <div>
                  {
                    card.feedOpen ?
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                    </>
                    :
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
                    </>
                  }
                </div>
              </div>

              {
                card.feedOpen ?
                null
                : <>
                  <div className="feedback-user-write feedback w-full flex-col gap-4 p-2 rounded-[7px] flex  items-start cursor-pointer select-none">
                    <div className="flex items-center gap-3 ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
                      <h1>Share Your Feedback</h1>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                      <input type="text" placeholder="Your name" value={card.feedbackInput} onChange={(e) => handleInputChange(cardIndex, 'feedbackInput', e.target.value)} className="rounded-[7px] border-1 outline-none py-1 px-2 w-full" />
                      <textarea value={card.feedbackText} onChange={(e) => handleInputChange(cardIndex, 'feedbackText', e.target.value)} type="text" placeholder="Feedback here..." className="rounded-[7px] border-1 py-1 outline-none px-2 w-full" />
                      <button onClick={() => handleSubmitFeedBack(cardIndex)} className="w-full py-2 rounded-[7px] border-1 cursor-pointer my-2 active:scale-[0.9] duration-[0.2s]">Submit</button>
                    </div>
                  </div>

                  <div className="comment feedback w-full flex-col gap-4 p-2 rounded-[7px] flex  items-start cursor-pointer select-none">
                    <div className="flex items-center gap-3 ">
                    </div>

                    <div className="w-full h-60 overflow-y-scroll flex flex-col gap-2 pe-2">
                      {
                        card.feedbackData.map((feedback, i) => {
                          return(
                            <div key={i} className="w-full rounded-[7px] border-1 p-2">
                              <h1>{feedback.name}</h1>
                              <div>{feedback.text}</div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </>
              }
            </div>
          )
        })}
        
      </div>

    </div>  
  )
}

export default Available