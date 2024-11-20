import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
}
