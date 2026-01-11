import { useNavigate } from "react-router-dom";

const CardMateri = ({ title, category, kls, count, color, icon }) => {
  // 1. Inisialisasi useNavigate
  const navigate = useNavigate();

  return (
    <div className="bg-white border-4 border-black rounded-[32px] overflow-hidden shadow-[8px_8px_0px_#000] flex flex-col h-full">
      <div className={`h-40 ${color} border-b-4 border-black flex items-center justify-center text-6xl`}>
        {icon}
      </div>
      <div className="p-6 text-left flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <span className="bg-white text-black text-[10px] font-black px-2 py-1 border-2 border-black rounded uppercase tracking-tighter italic">
            {kls}
          </span>
          <span className="font-bold text-xs text-gray-400 italic">
            {count}
          </span>
        </div>
        <h4 className="text-xl font-[900] mb-6 uppercase leading-tight italic">{title}</h4>
        
        <div className="mt-auto space-y-3">
          {/* 2. Tambahkan onClick untuk navigasi ke halaman Materi */}
          <button 
            onClick={() => navigate("/materi")}
            className="w-full bg-[#FFD600] border-2 border-black py-3 rounded-xl font-black text-sm uppercase shadow-[4px_4px_0px_#000] active:shadow-none active:translate-y-1 transition-all"
          >
            Pelajari
          </button>

          {/* 3. Tambahkan onClick untuk navigasi ke halaman Kuis */}
          <button 
            onClick={() => navigate("/kuis")}
            className="w-full bg-white border-2 border-black py-3 rounded-xl font-black text-sm uppercase hover:bg-gray-100 transition-all"
          >
            Kuis
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardMateri;