
import PublicationCard from "@/components/PublicationCard";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const ResearchPage = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const publications = [
    {
      title: "LyAm: Robust Non-Convex Optimization for Stable Learning in Noisy and Anomalous Environments",
      venue: "ICCV",
      year: 2025,
      abstract: "This paper introduces LyAm, a novel optimization algorithm designed for non-convex optimization problems in the presence of noise and anomalies.",
      status: "submitted",
      tags: ["Optimization"]
    },
    {
      title: "BridgeNet: A Hybrid Physics-Informed Machine Learning Framework for Solving High-Dimensional Fokker-Planck Equations",
      year: 2025,
      abstract: "BridgeNet combines traditional numerical methods with neural networks to solve complex high-dimensional partial differential equations common in neuroscience.",
      status: "under review",
      tags: ["PINNs"]
    },
    {
      title: "Efficient Convolutional Neural Network for Alzheimer's Diagnosis",
      venue: "Bioinformatics Conf",
      year: 2023,
      abstract: "A novel convolutional neural network architecture optimized for early detection of Alzheimer's disease from MRI scans with improved accuracy.",
      tags: ["Alzheimer's", "Neuroimaging"]
    }
  ];

  const filters = ["Alzheimer's", "Optimization", "PINNs", "Neuroimaging"];

  const filteredPublications = activeFilter 
    ? publications.filter(p => p.tags?.includes(activeFilter)) 
    : publications;

  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-petrol dark:text-accent mb-6">
          Research & Publications
        </h1>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-medium">
              Filter by:
            </span>
            <Badge 
              className={`cursor-pointer ${!activeFilter ? 'bg-petrol dark:bg-accent dark:text-gray-900 text-white' : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 text-gray-800'}`}
              onClick={() => setActiveFilter(null)}
            >
              All
            </Badge>
            {filters.map((filter) => (
              <Badge
                key={filter}
                className={`cursor-pointer ${activeFilter === filter ? 'bg-petrol dark:bg-accent dark:text-gray-900 text-white' : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 text-gray-800'}`}
                onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
              >
                {filter}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPublications.map((publication, i) => (
            <PublicationCard
              key={i}
              title={publication.title}
              venue={publication.venue}
              year={publication.year}
              abstract={publication.abstract}
              status={publication.status}
              language="en"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
