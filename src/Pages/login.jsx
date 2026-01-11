import { useNavigate } from "react-router-dom";

const Login = () => {
  // 1. Definisikan navigate di dalam komponen utama
  const navigate = useNavigate();

  // 2. Definisikan handleLogin secara sejajar (bukan di dalam fungsi lain)
  const handleLogin = (e) => {
    e.preventDefault();
    // Arahkan ke dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center p-6">
      <div className="bg-white border-[4px] border-black shadow-[12px_12px_0px_#000] rounded-[40px] p-10 max-w-md w-full text-center">
        <h1 className="text-4xl font-[900] mb-2 tracking-tighter uppercase italic">
          SMART<span className="text-blue-600">LMS</span>
        </h1>
        <p className="font-bold text-gray-600 mb-8 italic text-sm  decoration-4">
          Belajar jadi lebih seru & pas buat kamu!
        </p>

        <form className="space-y-4 text-left">
          <div>
            <label className="font-black ml-2 uppercase text-xs tracking-widest">
              Username
            </label>
            <input
              type="text"
              placeholder="budi_keren"
              className="w-full border-4 border-black p-4 rounded-2xl focus:outline-none focus:bg-yellow-50 font-bold mt-1 shadow-[4px_4px_0px_#ddd]"
            />
          </div>
          <div>
            <label className="font-black ml-2 uppercase text-xs tracking-widest">
              Password
            </label>
            <input
              type="password"
              placeholder="******"
              className="w-full border-4 border-black p-4 rounded-2xl focus:outline-none focus:bg-yellow-50 font-bold mt-1 shadow-[4px_4px_0px_#ddd]"
            />
          </div>
          {/* Pastikan handleLogin dipanggil di sini */}
          <button
            onClick={handleLogin}
            type="submit"
            className="w-full bg-[#1A1A1A] text-white py-5 rounded-2xl font-[900] text-xl hover:translate-y-1 transition shadow-[0px_6px_0px_#444] active:shadow-none uppercase italic tracking-tighter"
          >
            Masuk Sekarang 
          </button>
        </form>
        <p className="mt-6 font-bold text-sm">
          Belum punya akun?{" "}
          <a href="/register" className="text-blue-600 underline">
            Daftar di sini
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
