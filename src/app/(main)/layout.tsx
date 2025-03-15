import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import StatusBar from "@/components/layout/statusBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-screen text-slate-100 overflow-hidden flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <hr className="border-t border-[#7A7A7C]" />
          {/* Main content */}
          <div className="flex-1 overflow-auto p-3 bg-gradient-to-bl from-[#323233] to-[#3b3b3b]">
            {children}
          </div>
        </div>
      </div>
      <StatusBar />
    </main>
  );
}