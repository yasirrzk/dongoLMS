import Layout from "../Components/layout";

const Kuis = () => {
  return (
    <Layout activeMenu="materi">
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="max-w-3xl w-full bg-white border-[4px] border-black rounded-[40px] shadow-[12px_12px_0px_#000] p-8 md:p-12 text-left">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-6 bg-gray-200 rounded-full border-2 border-black overflow-hidden">
              <div className="bg-blue-500 h-full w-[60%] border-r-2 border-black"></div>
            </div>
            <span className="font-black text-lg">06/10</span>
          </div>

          <div className="mb-10">
            <span className="bg-black text-white px-4 py-1 rounded-full font-bold text-[10px] uppercase">Biologi Kelas 8</span>
            <h2 className="text-2xl md:text-3xl font-[900] mt-4 leading-tight uppercase italic tracking-tighter">Berikut ini yang merupakan fungsi utama dari vakuola pada sel tumbuhan adalah...</h2>
          </div>

          <div className="space-y-4">
            {["Tempat terjadinya fotosintesis", "Tempat penyimpanan makanan", "Mengatur kegiatan sel"].map((opt, i) => (
              <label key={i} className={`flex items-center border-4 border-black p-5 rounded-2xl cursor-pointer transition-all active:translate-y-1 ${i === 1 ? 'bg-yellow-100 shadow-[6px_6px_0px_#000]' : 'bg-white hover:bg-yellow-50'}`}>
                <input type="radio" name="quiz" checked={i === 1} className="w-6 h-6 accent-black shrink-0" readOnly />
                <span className="ml-4 font-bold text-lg uppercase tracking-tight">{opt}</span>
              </label>
            ))}
          </div>

          <div className="mt-12 flex justify-between items-center border-t-4 border-black pt-8">
            <button className="font-black text-gray-500 uppercase text-xs underline">Lewati Dulu</button>
            <button className="bg-black text-white px-10 py-4 rounded-2xl font-[900] text-xl shadow-[6px_6px_0px_#444] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase italic">Lanjutkan →</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Kuis;