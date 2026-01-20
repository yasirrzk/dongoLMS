import React from "react";
import Layout from "../Components/layout";

const Leaderboard = () => {
  // Data simulasi (Mock Data) untuk leaderboard
  const topSiswa = [
    { id: 1, name: "Andi Pratama", xp: "15.200", avatar: "Andi", rank: "01", medal: "🥇" },
    { id: 2, name: "Devita Anggraeni", xp: "12.450", avatar: "Devita", rank: "02", isUser: true },
    { id: 3, name: "Siti Aminah", xp: "11.100", avatar: "Siti", rank: "03", medal: "🥉" },
    { id: 4, name: "Rizky Fauzi", xp: "10.850", avatar: "Rizky", rank: "04" },
    { id: 5, name: "Dewi Lestari", xp: "9.600", avatar: "Dewi", rank: "05" },
  ];

  return (
    <Layout activeMenu="leaderboard">
      <div className="max-w-4xl mx-auto text-left">
        {/* Header Section */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000] rounded-[32px] p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-[900] italic uppercase tracking-tighter mb-2">🏆 Papan Peringkat</h1>
            <p className="font-bold text-gray-600 uppercase text-sm italic">Jadilah yang terbaik di kelasmu!</p>
          </div>
          <div className="bg-yellow-400 border-4 border-black p-4 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full border-2 border-black flex items-center justify-center font-black">#2</div>
            <div>
              <p className="text-[10px] font-black uppercase text-black/60 leading-none">Peringkat Kamu</p>
              <p className="text-xl font-black uppercase tracking-tighter">Budi Setiawan</p>
            </div>
          </div>
        </div>

        {/* Tabel Leaderboard */}
        <div className="bg-white border-4 border-black shadow-[12px_12px_0px_#000] rounded-[40px] overflow-hidden">
          {/* Table Head */}
          <div className="bg-black text-white p-6 grid grid-cols-6 font-black uppercase tracking-widest text-xs italic">
            <div className="col-span-1 text-center">Pos</div>
            <div className="col-span-3">Nama Siswa</div>
            <div className="col-span-2 text-right">Total XP</div>
          </div>

          {/* Table Body */}
          <div className="divide-y-4 divide-black">
            {topSiswa.map((siswa) => (
              <RankRow key={siswa.id} {...siswa} />
            ))}
          </div>

          {/* Footer Info */}
          <div className="p-6 bg-gray-50 text-center">
            <button className="font-black text-sm uppercase underline decoration-2 hover:text-blue-600 transition-colors">
              Lihat Seluruh Peringkat Sekolah ↓
            </button>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-100 border-4 border-dashed border-black p-6 rounded-[30px] flex items-center gap-6">
          <div className="text-4xl">💡</div>
          <p className="font-bold text-sm text-blue-900 italic">
            Tips: Selesaikan kuis harian dan dapatkan skor sempurna untuk melompat ke peringkat teratas!
          </p>
        </div>
      </div>
    </Layout>
  );
};

// --- Sub-Component untuk Baris Peringkat ---

const RankRow = ({ rank, name, xp, avatar, isUser, medal }) => (
  <div className={`grid grid-cols-6 items-center p-5 transition-colors ${isUser ? 'bg-blue-100' : 'bg-white hover:bg-yellow-50'}`}>
    <div className="col-span-1 text-center font-[900] text-2xl tracking-tighter italic">
      {medal ? medal : rank}
    </div>
    <div className="col-span-3 flex items-center gap-4">
      <img 
        src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${avatar}`} 
        className="w-12 h-12 bg-white border-2 border-black rounded-full" 
        alt="avatar" 
      />
      <div>
        <p className={`font-black uppercase text-sm tracking-tight ${isUser ? 'text-blue-600' : 'text-black'}`}>
          {name} {isUser && <span className="ml-1 bg-black text-white text-[8px] px-2 py-0.5 rounded italic">KAMU</span>}
        </p>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Kelas 8-A</p>
      </div>
    </div>
    <div className="col-span-2 text-right font-[900] text-xl tracking-tighter italic text-black">
      {xp} <span className="text-[10px] not-italic text-gray-400">XP</span>
    </div>
  </div>
);

export default Leaderboard;