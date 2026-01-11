import Layout from "../Components/layout";
import CardMateri from "../Components/cardMateri";

const Materi = () => {
  const materiList = [
    { title: "Persamaan Linear", color: "bg-blue-400", icon: "📐", kls: "KLS 8", count: "12 Video" },
    { title: "Klasifikasi Makhluk Hidup", color: "bg-green-400", icon: "🔬", kls: "KLS 7", count: "8 Materi" },
    { title: "Teks Laporan", color: "bg-pink-400", icon: "📖", kls: "KLS 9", count: "15 Materi" },
    { title: "Zat Aditif", color: "bg-orange-400", icon: "🧪", kls: "KLS 8", count: "10 Video" },
    { title: "Descriptive Text", color: "bg-purple-400", icon: "🇬🇧", kls: "KLS 7", count: "6 Materi" },
    { title: "Deret Geometri", color: "bg-red-400", icon: "🔢", kls: "KLS 9", count: "20 Materi" },
  ];

  return (
    <Layout activeMenu="materi">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 bg-white border-4 border-black p-6 rounded-[32px] shadow-[8px_8px_0px_#000] gap-4">
        <div className="text-left">
          <h1 className="text-3xl font-[900] tracking-tight uppercase italic">Perpustakaan Materi</h1>
          <p className="font-bold text-gray-600">Pilih materi yang ingin kamu kuasai hari ini!</p>
        </div>
        <input type="text" placeholder="Cari materi..." className="w-full md:w-64 border-4 border-black p-3 rounded-2xl font-bold outline-none shadow-[4px_4px_0px_#000]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {materiList.map((m, idx) => (
          <CardMateri key={idx} {...m} />
        ))}
      </div>
    </Layout>
  );
};

export default Materi;