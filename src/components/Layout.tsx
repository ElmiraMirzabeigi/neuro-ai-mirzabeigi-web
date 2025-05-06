
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [language, setLanguage] = useState<'en' | 'fa'>('en');
  const location = useLocation();
  
  useEffect(() => {
    // Check if URL contains language indicator
    if (location.pathname.startsWith('/fa')) {
      setLanguage('fa');
      document.documentElement.lang = 'fa';
      document.documentElement.dir = 'rtl';
    } else {
      setLanguage('en');
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
    }
  }, [location.pathname]);

  return (
    <div className={`min-h-screen flex flex-col ${language === 'fa' ? 'dir-rtl' : 'dir-ltr'}`}>
      <Navbar language={language} setLanguage={setLanguage} />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-6">
        {children}
      </main>
      <Footer language={language} />
    </div>
  );
}
