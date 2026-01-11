import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/layout";
import { kuisData } from "../Data/kuisData";

const Kuis = () => {
  const navigate = useNavigate();
  const materiAktif = "Sel Hewan";
  const daftarSoal = kuisData[materiAktif];

  // State Management
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const soalSekarang = daftarSoal[currentIdx];
  const progress = ((currentIdx + 1) / daftarSoal.length) * 100;

  const handleNext = () => {
    // Cek apakah jawaban benar
    if (selectedOption === soalSekarang.answer) {
      setScore((prev) => prev + 1);
    }

    if (currentIdx < daftarSoal.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  // Tampilan Hasil Kuis
  if (isFinished) {
    const totalSkor = Math.round((score / daftarSoal.length) * 100);

    return (
      <Layout activeMenu="materi">
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="max-w-3xl w-full bg-white border-[4px] border-black rounded-[40px] shadow-[12px_12px_0px_#000] p-10 text-center">
            <h2 className="text-3xl font-[900] uppercase italic mb-2">Kuis Selesai!</h2>
            <p className="font-bold text-gray-500 mb-8 uppercase tracking-widest">Materi: {materiAktif}</p>

            <div className="relative inline-block mb-10">
              <div className="text-8xl font-[900] text-blue-600 italic tracking-tighter">
                {totalSkor}<span className="text-black text-2xl">/100</span>
              </div>
              <div className="mt-4 bg-yellow-400 border-2 border-black px-4 py-1 rounded-full font-black text-sm uppercase">
                {totalSkor >= 70 ? "Hebat! Kamu Lulus" : "Ayo Belajar Lagi!"}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-gray-100 p-4 rounded-2xl border-2 border-black">
                <p className="text-[10px] font-black text-gray-400 uppercase">Jawaban Benar</p>
                <p className="text-2xl font-black">{score} / {daftarSoal.length}</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-2xl border-2 border-black">
                <p className="text-[10px] font-black text-gray-400 uppercase">Bonus XP</p>
                <p className="text-2xl font-black text-green-600">+{score * 10}</p>
              </div>
            </div>

            {/* Rekomendasi Adaptif (Simulasi Collaborative Filtering) */}
            <div className="bg-blue-50 border-4 border-dashed border-black p-6 rounded-[30px] mb-10 text-left">
              <h4 className="font-black text-xs uppercase text-blue-600 mb-2">Rekomendasi Untukmu:</h4>
              <p className="font-bold text-sm leading-tight">Berdasarkan hasil kuis ini, sistem menyarankan kamu mempelajari <span className="underline">Struktur Sel Tumbuhan</span> untuk memperdalam pemahamanmu.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <button 
                onClick={() => navigate("/dashboard")}
                className="flex-1 bg-black text-white py-4 rounded-2xl font-black uppercase italic shadow-[4px_4px_0px_#444] active:translate-y-1 active:shadow-none transition-all"
              >
                Dashboard
              </button>
              <button 
                onClick={() => window.location.reload()}
                className="flex-1 bg-white border-4 border-black py-4 rounded-2xl font-black uppercase italic hover:bg-gray-100 transition-all"
              >
                Ulangi Kuis
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Tampilan Pertanyaan (Sama seperti sebelumnya)
  return (
    <Layout activeMenu="materi">
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="max-w-3xl w-full bg-white border-[4px] border-black rounded-[40px] shadow-[12px_12px_0px_#000] p-8 md:p-12">
          
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-6 bg-gray-200 rounded-full border-2 border-black overflow-hidden">
              <div 
                className="bg-blue-500 h-full border-r-2 border-black transition-all" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="font-black text-lg">{currentIdx + 1}/{daftarSoal.length}</span>
          </div>

          <div className="mb-10 text-left">
            <span className="bg-black text-white px-4 py-1 rounded-full font-bold text-[10px] uppercase tracking-widest">
                Materi: {materiAktif}
            </span>
            <h2 className="text-2xl md:text-3xl font-[900] mt-4 leading-tight uppercase italic tracking-tighter text-left">
                {soalSekarang.question}
            </h2>
          </div>

          <div className="space-y-4">
            {soalSekarang.options.map((opt, i) => (
              <label 
                key={i} 
                className={`flex items-center border-4 border-black p-5 rounded-2xl cursor-pointer transition-all active:translate-y-1 ${selectedOption === opt ? 'bg-yellow-100 shadow-[6px_6px_0px_#000]' : 'bg-white hover:bg-yellow-50'}`}
              >
                <input 
                  type="radio" 
                  name="quiz" 
                  checked={selectedOption === opt}
                  className="w-6 h-6 accent-black shrink-0" 
                  onChange={() => setSelectedOption(opt)} 
                />
                <span className="ml-4 font-bold text-lg uppercase text-left tracking-tight">{opt}</span>
              </label>
            ))}
          </div>

          <div className="mt-12 flex justify-between items-center border-t-4 border-black pt-8">
            <button className="font-black text-gray-400 uppercase text-[10px] tracking-widest hover:text-black">Lewati</button>
            <button 
              onClick={handleNext}
              disabled={!selectedOption}
              className={`px-10 py-4 rounded-2xl font-[900] text-xl transition-all uppercase italic ${selectedOption ? 'bg-black text-white shadow-[6px_6px_0px_#444] hover:translate-x-1' : 'bg-gray-200 text-gray-400 cursor-not-allowed border-2 border-black'}`}
            >
              {currentIdx === daftarSoal.length - 1 ? "Selesai" : "Lanjutkan →"}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Kuis;