import Sidebar from "./sidebar";

const Layout = ({ children, activeMenu }) => {
  return (
    <div className="flex min-h-screen w-full bg-blue-200">
      {/* Sidebar tetap di kiri */}
      <Sidebar activeMenu={activeMenu} />
      
      {/* Area Konten Utama */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;