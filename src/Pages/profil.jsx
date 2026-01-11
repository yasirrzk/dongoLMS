import Layout from "../Components/layout";

const Profil = () => {
  return (
    <Layout activeMenu="profil">
      <div className="max-w-4xl mx-auto text-left">
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000] rounded-[32px] p-8 mb-8 flex flex-col md:flex-row items-center gap-8">
          <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Budi" className="w-32 h-32 md:w-40 md:h-40 bg-yellow-200 rounded-full border-4 border-black" alt="profile" />
          <div className="flex-1">
            <h2 className="text-4xl font-[900] italic uppercase tracking-tighter">Budi Setiawan</h2>
            <p className="text-lg font-bold text-blue-600 uppercase tracking-widest">Kelas 8-A (Unggulan)</p>
            <div className="flex gap-3 mt-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold border-2 border-black italic">🔥 5 Day Streak</span>
              <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold border-2 border-white uppercase italic">Rank #2</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000] rounded-[32px] p-8">
            <h3 className="text-xl font-black mb-6 uppercase italic">Detail Akun</h3>
            <div className="space-y-4 font-bold">
               <p className="text-xs uppercase text-gray-400">Email: <span className="text-black ml-2">budi@sekolah.id</span></p>
               <p className="text-xs uppercase text-gray-400">Sekolah: <span className="text-black ml-2">SMP Negeri 1 Pintar</span></p>
               <button className="mt-6 w-full bg-black text-white py-3 rounded-xl font-black text-sm uppercase italic shadow-[4px_4px_0px_#444]">Edit Profil</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profil;