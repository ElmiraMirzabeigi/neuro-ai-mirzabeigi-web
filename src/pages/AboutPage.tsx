
import EducationTimeline from "@/components/EducationTimeline";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutPage = () => {
  const skills = [
    "Python", "PyTorch", "TensorFlow", "C++", 
    "Numerical Analysis", "Neuroimaging", "Team Leadership"
  ];

  const awards = [
    {
      title: "Best Ideators Award",
      issuer: "7th Young Scientists Festival",
      year: 2022
    },
    {
      title: "Top 0.5% Nationwide PhD Exam",
      year: 2020
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-petrol dark:text-accent mb-6">
          About Me
        </h1>
        
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">
            Education
          </h2>
          <EducationTimeline language="en" />
        </div>
        
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">
            Skills & Expertise
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <Badge key={i} className="bg-petrol/10 hover:bg-petrol/20 text-petrol dark:bg-accent/10 dark:text-accent dark:hover:bg-accent/20">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">
            Awards & Honors
          </h2>
          <div className="grid gap-4">
            {awards.map((award, i) => (
              <Card key={i} className="border-l-4 border-l-petrol dark:border-l-accent">
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
            Curriculum Vitae
          </h2>
          <Button className="bg-petrol hover:bg-petrol-light dark:bg-accent dark:text-gray-900 dark:hover:bg-accent/80">
            Download CV (PDF)
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
