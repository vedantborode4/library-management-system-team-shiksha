import { useContext } from "react";
import { contextBor } from "./Borrowed";
import { useState } from "react";
import { X, Plus } from "lucide-react";

const BorrowChoose = () => {
  const DataBor = useContext(contextBor);

  const[indiInput ,setIndiInput] = useState("")

  const [members, setMembers] = useState([""]);
  const [bookName, setBookName] = useState("");

  const addMember = () => {
    setMembers([...members, ""]);
  };

  const removeMember = (index) => {
    if (members.length > 1) {
      setMembers(members.filter((_, i) => i !== index));
    }
  };

  const updateMember = (index, value) => {
    const newMembers = [...members];
    newMembers[index] = value;
    setMembers(newMembers);
  };

  const handleBorrow = () => {
    console.log({ bookName, members });
  };
  return (
    <div className="w-full h-screen">
      {DataBor ? (
        <div className="w-full h-200 ">
          <a
            href="/dashboard/borrowed"
            className="text-blue-400 tracking-tighter"
          >
            Go to Borrow page
          </a>
          <div className="flex items-center justify-center p-4">
            <div className="w-full max-w-2xl rounded-2xl p-8 border-2 border-zinc-600">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <div className="space-y-3">
                    {members.map((member, index) => (
                      <div key={index} className="relative">
                        <input type="text" value={member} onChange={(e) => updateMember(index, e.target.value)} placeholder={`Member ${index + 1}`} className="w-full bg-zinc-900 border-2 border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors"/>
                        {members.length > 1 && (
                          <button onClick={() => removeMember(index)} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-red-400 transition-colors">
                            <X size={18} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  <button onClick={addMember} className="w-full bg-zinc-700 border-2 border-zinc-600 rounded-lg px-4 py-3 text-zinc-300 hover:bg-zinc-600 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer" >
                    <Plus size={18} />
                    Add Member
                  </button>
                </div>

                <div className="flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} placeholder="Book Name" className="w-full bg-zinc-900 border-2 border-zinc-600 rounded-lg px-4 py-3 h-24 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors"/>
                  </div>

                  <button onClick={handleBorrow}className="w-full bg-blue-600 hover:bg-blue-500 rounded-lg px-6 py-3 text-white font-medium transition-all active:scale-95 cursor-pointer">
                    Borrow Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-200 ">
          <a href="/dashboard/borrowed" className="text-blue-400 tracking-tighter">
            Go to Borrow page
          </a>
          <div className="flex items-center justify-center p-4">
           <div className="w-full flex flex-col gap-4 max-w-2xl rounded-2xl p-8 border-2 border-zinc-600">
              <input type="text" value={indiInput} onChange={(e) => setIndiInput(e.target.value)} placeholder="Book name" className="w-full bg-zinc-900 border-2 border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors"/>
               <button className="w-full bg-blue-600 hover:bg-blue-500 rounded-lg px-6 py-3 text-white font-medium transition-all active:scale-95 cursor-pointer">
                    Borrow Book
                </button>
           </div>
          
           
          
         </div>
        </div>
      )}
    </div>
  );
};

export default BorrowChoose;
