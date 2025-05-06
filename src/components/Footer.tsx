
import { Link } from "react-router-dom";

interface FooterProps {
  language: 'en' | 'fa';
}

export default function Footer({ language }: FooterProps) {
  return (
    <footer className="bg-petrol text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">
              {language === 'en' ? "Elmira Mirzabeigi" : "المیرا میرزابیگی"}
            </h3>
            <p className="text-sm opacity-80">
              {language === 'en' 
                ? "Applied Mathematics × AI × Neuroscience" 
                : "ریاضیات کاربردی × هوش مصنوعی × علوم اعصاب"}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">
              {language === 'en' ? "Quick Links" : "دسترسی سریع"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to={language === 'en' ? "/about" : "/fa/about"} className="text-sm opacity-80 hover:opacity-100">
                  {language === 'en' ? "About" : "درباره من"}
                </Link>
              </li>
              <li>
                <Link to={language === 'en' ? "/research" : "/fa/research"} className="text-sm opacity-80 hover:opacity-100">
                  {language === 'en' ? "Research & Publications" : "تحقیقات و انتشارات"}
                </Link>
              </li>
              <li>
                <Link to={language === 'en' ? "/experience" : "/fa/experience"} className="text-sm opacity-80 hover:opacity-100">
                  {language === 'en' ? "Experience" : "تجربیات"}
                </Link>
              </li>
              <li>
                <Link to={language === 'en' ? "/contact" : "/fa/contact"} className="text-sm opacity-80 hover:opacity-100">
                  {language === 'en' ? "Contact" : "تماس"}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">
              {language === 'en' ? "Connect" : "ارتباط با من"}
            </h4>
            <div className="flex flex-col space-y-2">
              <a href="mailto:elmiramirzabeigi7@gmail.com" className="text-sm opacity-80 hover:opacity-100">
                elmiramirzabeigi7@gmail.com
              </a>
              <a href="https://github.com/ElmiraMirzabeigi" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/elmira-mirzabeigi-7b0661217/" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100">
                LinkedIn
              </a>
              <a href="https://scholar.google.com/citations?hl=en&user=Z6ditbAAAAAJ" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100">
                Google Scholar
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80 italic">
            {language === 'en' ? "Need is the mother of innovation." : "نیاز مادر نوآوری است."}
          </p>
          <p className="text-sm opacity-80 mt-2 md:mt-0">
            © {new Date().getFullYear()} {language === 'en' ? "Elmira Mirzabeigi. All rights reserved." : "المیرا میرزابیگی. تمام حقوق محفوظ است."}
          </p>
        </div>
      </div>
    </footer>
  );
}
