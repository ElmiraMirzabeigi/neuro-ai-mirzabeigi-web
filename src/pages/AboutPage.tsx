
import EducationTimeline from "@/components/EducationTimeline";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AboutPage = () => {
  const [language, setLanguage] = useState<'en' | 'fa'>('en');
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname.startsWith('/fa')) {
      setLanguage('fa');
    } else {
      setLanguage('en');
    }
  }, [location.pathname]);

  const skills = [
    "Python", "PyTorch", "TensorFlow", "C++", 
    "Numerical Analysis", "Neuroimaging", "Team Leadership"
  ];

  const awards = [
    {
      title: language === 'en' ? "Best Ideators Award" : "جایزه بهترین ایده‌پردازان",
      issuer: language === 'en' ? "7th Young Scientists Festival" : "هفتمین جشنواره دانشمندان جوان",
      year: 2022
    },
    {
      title: language === 'en' ? "Top 0.5% Nationwide PhD Exam" : "رتبه برتر ۰.۵٪ آزمون دکتری سراسری",
      year: 2020
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-petrol dark:text-white mb-6">
          {language === 'en' ? "About Me" : "درباره من"}
        </h1>
        
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">
            {language === 'en' ? "Education" : "تحصیلات"}
          </h2>
          <EducationTimeline language={language} />
        </div>
        
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">
            {language === 'en' ? "Skills & Expertise" : "مهارت‌ها و تخصص‌ها"}
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <Badge key={i} className="bg-petrol/10 hover:bg-petrol/20 text-petrol dark:bg-blue-900/30 dark:text-blue-300">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">
            {language === 'en' ? "Awards & Honors" : "جوایز و افتخارات"}
          </h2>
          <div className="grid gap-4">
            {awards.map((award, i) => (
              <Card key={i} className="border-l-4 border-l-petrol">
                <CardContent className="pt-6">
                  <h3 className="font-bold">{award.title}</h3>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {award.issuer && <span>{award.issuer} • </span>}
                    <span>{award.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">
            {language === 'en' ? "Curriculum Vitae" : "رزومه"}
          </h2>
          <Button className="bg-petrol hover:bg-petrol-light">
            {language === 'en' ? "Download CV (PDF)" : "دانلود رزومه (PDF)"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
