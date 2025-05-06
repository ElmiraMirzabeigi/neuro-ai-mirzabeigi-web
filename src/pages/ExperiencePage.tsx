
import ExperienceCard from "@/components/ExperienceCard";

const ExperiencePage = () => {
  const experiences = [
    {
      title: "CEO & Product Manager",
      company: "Novel Mind Scientists (NMS) Company",
      period: "Summer 2023 - Present",
      description: [
        "Co-founded and CEO of Novel Mind Scientists, a company dedicated to developing innovative AI-driven healthcare solutions.",
        "Idea owner and project manager of ADiagnosis, software using personal medical data and AI to assess Alzheimer's disease stages.",
        "Managed the company through key phases of knowledge application and market entry, leading the product launch."
      ]
    },
    {
      title: "Ph.D. Researcher",
      company: "Computational Sciences and AI Laboratory, Shahid Beheshti University",
      period: "2020 - Present",
      description: [
        "Developing machine learning models for early detection of Alzheimer's Disease using neuroimaging data.",
        "Numerical solutions for equations modeling epilepsy using deep learning techniques.",
        "Managing a team to design software for examining the progression of neurological diseases."
      ]
    },
    {
      title: "Research Assistant",
      company: "Shahid Ahmadi Roshan Project",
      period: "Fall 2021 - Summer 2022",
      description: [
        "Worked on the identification of visual imagery using EEG data.",
        "Implemented convolutional neural networks, achieving high accuracy in brain function prediction.",
        "Managed the machine learning team, overseeing project milestones and deliverables."
      ]
    },
    {
      title: "Master's Thesis Research",
      company: "Tarbiat Modares University",
      period: "2017 - 2019",
      description: [
        "Created a novel knowledge-based method for protein structure prediction.",
        "Modeled and analyzed potential functions using B-splines for discrimination of native protein structures."
      ]
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-petrol dark:text-accent mb-6">
          Experience
        </h1>
        
        <div className="grid grid-cols-1 gap-8">
          {experiences.map((experience, i) => (
            <ExperienceCard
              key={i}
              title={experience.title}
              company={experience.company}
              period={experience.period}
              description={experience.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
