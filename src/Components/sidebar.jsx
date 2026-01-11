import { FaHouse, FaBook, FaTrophy, FaUser } from "react-icons/fa6";

const Sidebar = ({ activeMenu }) => {
  const menus = [
    { id: 'dashboard', label: 'Dashboard', icon: <FaHouse />, path: '/' },
    { id: 'materi', label: 'Materi', icon: <FaBook />, path: '/materi' },
    { id: 'leaderboard', label: 'Peringkat', icon: <FaTrophy />, path: '/leaderboard' },
    { id: 'profil', label: 'Profil', icon: <FaUser />, path: '/profil' },
  ];

  return (
    <aside className="w-64 bg-blue-200 border-r-4 border-black h-screen sticky top-0 flex flex-col p-6 shrink-0 hidden lg:flex">
      <h1 className="text-2xl font-[800] tracking-tighter text-black uppercase mb-10">SMART<span className="text-blue-600">LMS</span></h1>
      <nav className="flex-1 space-y-4">
        {menus.map((menu) => (
          <a key={menu.id} href={menu.path} className={`flex items-center p-3 rounded-xl font-bold border-2 transition-all uppercase text-xs ${activeMenu === menu.id ? 'border-black shadow-[4px_4px_0px_#000] bg-yellow-400' : 'border-transparent hover:bg-white'}`}>
            <span className="mr-3">{menu.icon}</span> {menu.label}
          </a>
        ))}
      </nav>
      <div className="mt-auto bg-black text-white p-4 rounded-2xl border-2 border-white text-left">
        <p className="text-[10px] font-bold text-blue-400 uppercase">User:</p>
        <p className="font-black text-sm truncate uppercase">Budi Setiawan</p>
      </div>
    </aside>
  );
};

export default Sidebar;