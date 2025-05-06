
import Hero from "@/components/Hero";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'fa'>('en');
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname.startsWith('/fa')) {
      setLanguage('fa');
    } else {
      setLanguage('en');
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Hero language={language} />
    </div>
  );
};

export default Index;
