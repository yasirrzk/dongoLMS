import Layout from "../Components/layout";

const Dashboard = () => {
  return (
    <Layout activeMenu="dashboard">
      {/* Banner Welcome */}
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000] rounded-[32px] p-8 mb-10 flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-[900] italic uppercase tracking-tighter">Semangat Belajar, Budi! 🚀</h2>
          <p className="font-bold text-gray-600">Sistem pintar kami sudah menyiapkan materi baru buat kamu.</p>
        </div>
        <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Budi" className="w-32 h-32 bg-yellow-200 rounded-full border-4 border-black" alt="avatar" />
      </div>

      {/* Grid Rekomendasi */}
      <h3 className="text-xl font-black mb-6 inline-block bg-black text-white px-4 py-1 skew-x-[-2deg] uppercase">✨ Rekomendasi Untukmu</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        <MateriCard title="Pythagoras Cepat" tag="Matematika" color="bg-pink-400" icon="📐" />
        <MateriCard title="Rahasia Atom" tag="IPA" color="bg-blue-400" icon="🧪" />
        <ProgressCard />
      </div>
    </Layout>
  );
};

const MateriCard = ({ title, tag, color, icon }) => (
  <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000] rounded-[30px] overflow-hidden">
    <div className={`h-32 ${color} border-b-4 border-black flex items-center justify-center text-5xl`}>{icon}</div>
    <div className="p-5">
      <span className="bg-yellow-300 text-[10px] font-black px-2 py-1 border-2 border-black rounded uppercase">{tag}</span>
      <h4 className="text-lg font-black mt-3 uppercase leading-tight">{title}</h4>
      <button className="mt-4 w-full bg-[#FFD600] border-2 border-black py-2 rounded-xl font-black text-xs shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-none transition-all">MULAI</button>
    </div>
  </div>
);

const ProgressCard = () => (
    <div className="bg-[#1A1A1A] border-4 border-black shadow-[8px_8px_0px_#000] rounded-[30px] p-6 text-white">
        <h4 className="font-black mb-4 text-[#FFD600] uppercase italic underline decoration-blue-500">Progres Kamu</h4>
        <div className="space-y-4">
            <div>
                <p className="text-[10px] font-black uppercase text-gray-400 flex justify-between">Matematika <span>80%</span></p>
                <div className="w-full bg-gray-700 h-3 rounded-full border border-white mt-1 overflow-hidden">
                    <div className="bg-blue-400 h-full" style={{ width: '80%' }}></div>
                </div>
            </div>
        </div>
    </div>
)

export default Dashboard;