
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-softgray to-white dark:from-gray-900 dark:to-gray-800 py-12 sm:py-20">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F3B57" className="dark:stopColor-accent" />
              <stop offset="100%" stopColor="#1a5075" className="dark:stopColor-blue-400" />
            </linearGradient>
          </defs>
          {/* Abstract brain network pattern */}
          <g fill="none" stroke="url(#gradient)" strokeWidth="1">
            {Array.from({ length: 100 }).map((_, i) => (
              <circle 
                key={i}
                cx={Math.random() * 800}
                cy={Math.random() * 800}
                r={Math.random() * 20 + 1}
                opacity={Math.random() * 0.5 + 0.2}
              />
            ))}
            {Array.from({ length: 80 }).map((_, i) => (
              <line
                key={i + "line"}
                x1={Math.random() * 800}
                y1={Math.random() * 800}
                x2={Math.random() * 800}
                y2={Math.random() * 800}
                opacity={Math.random() * 0.3 + 0.1}
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-center px-4 sm:px-6 relative">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-petrol dark:text-white">
            Elmira Mirzabeigi
          </h1>
          
          <p className="text-lg sm:text-xl font-medium mb-6 text-gray-700 dark:text-accent">
            Applied Mathematics × AI × Neuroscience
          </p>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
            I develop AI-powered mathematical models to diagnose neurological diseases earlier and more accurately.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-petrol hover:bg-petrol-light dark:bg-accent dark:text-gray-900 dark:hover:bg-accent/80">
              <Link to="/research">
                View Publications
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-petrol text-petrol hover:text-petrol-light hover:border-petrol-light dark:border-accent dark:text-accent dark:hover:border-accent/80 dark:hover:text-accent/80">
              <Link to="/contact">
                Work with Me
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center animate-fade-in">
          <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
            <img 
              src="/lovable-uploads/8e7c9530-c336-4b11-b89b-e2ba3c294fb0.png" 
              alt="Elmira Mirzabeigi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
