import { useNavigate } from "react-router-dom";

const Register = () => {
  // 1. Definisikan navigate DI DALAM komponen
  const navigate = useNavigate();

  // 2. Definisikan handleLogin DI DALAM komponen agar bisa diakses oleh tombol
  const handleRegister = (e) => {
    e.preventDefault();
    // Setelah daftar, biasanya user diarahkan ke halaman login
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center p-6">
      <div className="bg-white border-4 border-black shadow-[12px_12px_0px_#000] rounded-[40px] p-10 max-w-2xl w-full text-left">
        <h1 className="text-3xl font-[900] text-center mb-2 italic uppercase tracking-tighter">DAFTAR AKUN </h1>
        <p className="font-bold text-gray-500 text-center mb-8 italic  decoration-blue-200 decoration-4">Gabung untuk dapatkan rekomendasi materi!</p>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2 text-left">
            <label className="font-black text-xs uppercase ml-1 tracking-widest text-black/50">Nama Lengkap</label>
            <input type="text" className="w-full border-4 border-black p-3 rounded-xl mt-1 font-bold focus:bg-yellow-50 focus:shadow-[4px_4px_0px_#000] outline-none transition-all" placeholder="Budi Setiawan" />
          </div>
          
          <div className="text-left">
            <label className="font-black text-xs uppercase ml-1 tracking-widest text-black/50">Username</label>
            <input type="text" className="w-full border-4 border-black p-3 rounded-xl mt-1 font-bold focus:bg-yellow-50 focus:shadow-[4px_4px_0px_#000] outline-none transition-all" placeholder="budi_smp" />
          </div>
          
          <div className="text-left">
            <label className="font-black text-xs uppercase ml-1 tracking-widest text-black/50">Pilih Kelas</label>
            <select className="w-full border-4 border-black p-4 rounded-xl mt-1 font-bold bg-white focus:bg-yellow-50 outline-none appearance-none cursor-pointer">
              <option>Kelas 7</option>
              <option>Kelas 8</option>
              <option>Kelas 9</option>
            </select>
          </div>

          <div className="md:col-span-2 mt-4">
            <button 
              onClick={handleRegister} 
              type="submit" 
              className="w-full bg-black text-white py-4 rounded-2xl font-[900] text-xl shadow-[0_6px_0_#444] hover:translate-y-1 hover:shadow-none active:translate-y-1 transition-all uppercase italic tracking-tighter"
            >
              Buat Akun Sekarang ⚡
            </button>
            <p className="mt-6 text-center font-bold text-sm">
              Sudah punya akun? <a href="/" className="text-blue-600 underline decoration-2">Masuk di sini</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;