import Layout from "../Components/layout";

const Dashboard = () => {
  return (
    <Layout activeMenu="dashboard">
      {/* 1. Header Banner */}
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000] rounded-[32px] p-8 mb-10 flex justify-between items-center overflow-hidden relative">
        <div className="relative z-10 text-left">
          <h2 className="text-4xl md:text-5xl font-[900] italic uppercase tracking-tighter leading-none mb-3">
            Semangat Belajar, Budi! 
          </h2>
          <p className="font-bold text-gray-600 max-w-md">
            Kamu sudah belajar selama <span className="text-blue-600">5 hari berturut-turut.</span> Pertahankan semangatmu!
          </p>
        </div>
        <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Budi" className="hidden md:block w-32 h-32 bg-yellow-200 rounded-full border-4 border-black relative z-10" alt="avatar" />
        {/* Dekorasi Background */}
        <div className="absolute -right-5 -bottom-5 text-9xl opacity-5 grayscale tracking-tighter font-black">STUDY</div>
      </div>

      {/* 2. Statistik Cepat (Quick Stats) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <StatCard label="Total XP" value="1.250" color="bg-yellow-400" />
        <StatCard label="Peringkat" value="#02" color="bg-pink-400" />
        <StatCard label="Materi Selesai" value="12" color="bg-blue-400" />
        <StatCard label="Sertifikat" value="03" color="bg-green-400" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-left">
        {/* Kolom Kiri & Tengah: Rekomendasi */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-black inline-block bg-black text-white px-4 py-1 skew-x-[-2deg] uppercase tracking-widest rounded-full">
            Rekomendasi Untukmu
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MateriCard title="Pythagoras Cepat" tag="Matematika" color="bg-pink-400" icon="📐" />
            <MateriCard title="Rahasia Atom" tag="IPA" color="bg-blue-400" icon="🧪" />
          </div>

          {/* Aktivitas Terbaru */}
          <h3 className="text-xl font-black mt-4 inline-block bg-white border-2 border-black text-black px-4 py-1 skew-x-[2deg] uppercase tracking-widest rounded-full">
            🕒 Aktivitas Terbaru
          </h3>
          <div className="bg-white border-4 border-black shadow-[6px_6px_0px_#000] rounded-[24px] p-2">
            <ActivityItem title="Kuis Sel Hewan" score="80/100" time="2 jam yang lalu" />
            <ActivityItem title="Materi Aljabar" score="Selesai" time="Kemarin" />
          </div>
        </div>

        {/* Kolom Kanan: Progres & Leaderboard Mini */}
        <div className="space-y-10">
          <ProgressCard />
          
          <div className="bg-yellow-400 border-4 border-black shadow-[8px_8px_0px_#000] rounded-[30px] p-6">
            <h4 className="font-black mb-4 text-black uppercase italic border-b-2 border-black pb-2 flex justify-between items-center">
                Peringkat Kelas <i className="fa-solid fa-trophy"></i>
            </h4>
            <div className="space-y-3">
                <MiniRank name="Andi Pratama" xp="1.500" rank="1" isUser={false} />
                <MiniRank name="Budi Setiawan" xp="1.250" rank="2" isUser={true} />
                <MiniRank name="Siti Aminah" xp="1.100" rank="3" isUser={false} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// --- Sub-Components ---

const StatCard = ({ label, value, color }) => (
    <div className={`${color} border-4 border-black shadow-[4px_4px_0px_#000] rounded-2xl p-4 text-left`}>
        <p className="text-[10px] font-black uppercase text-black/60 leading-none mb-1">{label}</p>
        <p className="text-2xl font-black text-black tracking-tighter">{value}</p>
    </div>
);

const MateriCard = ({ title, tag, color, icon }) => (
  <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000] rounded-[30px] overflow-hidden flex flex-col h-full hover:translate-y-[-4px] transition-all">
    <div className={`h-32 ${color} border-b-4 border-black flex items-center justify-center text-5xl`}>{icon}</div>
    <div className="p-5 flex-1 flex flex-col justify-between">
      <div>
        <span className="bg-yellow-300 text-[10px] font-black px-2 py-1 border-2 border-black rounded uppercase">{tag}</span>
        <h4 className="text-lg font-black mt-3 uppercase leading-tight tracking-tight">{title}</h4>
      </div>
      <button className="mt-4 w-full bg-[#FFD600] border-2 border-black py-2 rounded-xl font-black text-xs shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-none transition-all uppercase italic">Mulai Belajar</button>
    </div>
  </div>
);

const ProgressCard = () => (
    <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000] rounded-[30px] p-6 text-left">
        <h4 className="font-black mb-4 text-black uppercase italic flex justify-between items-center">
            Progres Kamu <i className="fa-solid fa-chart-line"></i>
        </h4>
        <div className="space-y-4">
            <div className="not-italic">
                <p className="text-[10px] font-black uppercase text-black flex justify-between">Matematika <span>80%</span></p>
                <div className="w-full bg-gray-100 h-3 rounded-full border-2 border-black mt-1 overflow-hidden">
                    <div className="bg-blue-400 h-full border-r-2 border-black" style={{ width: '80%' }}></div>
                </div>
            </div>
            <div className="not-italic">
                <p className="text-[10px] font-black uppercase text-black flex justify-between">IPA <span>45%</span></p>
                <div className="w-full bg-gray-100 h-3 rounded-full border-2 border-black mt-1 overflow-hidden">
                    <div className="bg-green-400 h-full border-r-2 border-black" style={{ width: '45%' }}></div>
                </div>
            </div>
        </div>
    </div>
);

const ActivityItem = ({ title, score, time }) => (
    <div className="flex items-center justify-between p-3 border-b-2 last:border-b-0 border-gray-100 hover:bg-gray-50 transition-colors">
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white text-xs">📝</div>
            <div>
                <p className="font-black text-xs uppercase leading-none">{title}</p>
                <p className="text-[10px] font-bold text-gray-400">{time}</p>
            </div>
        </div>
        <span className="font-black text-sm text-blue-600 italic">{score}</span>
    </div>
);

const MiniRank = ({ name, xp, rank, isUser }) => (
    <div className={`flex items-center justify-between p-2 rounded-xl border-2 ${isUser ? 'bg-black text-white border-white' : 'bg-white text-black border-black'}`}>
        <div className="flex items-center gap-2">
            <span className="font-black text-[10px] w-4">{rank}</span>
            <p className="font-black text-[10px] uppercase truncate w-24">{name}</p>
        </div>
        <span className={`font-black text-[10px] ${isUser ? 'text-yellow-400' : 'text-blue-600'}`}>{xp} XP</span>
    </div>
);

export default Dashboard;