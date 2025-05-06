
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export default function ExperienceCard({
  title,
  company,
  period,
  description
}: ExperienceCardProps) {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in hover-scale">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
        <CardDescription className="text-md font-medium text-petrol dark:text-blue-300">
          {company}
        </CardDescription>
        <CardDescription className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {period}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-1">
          {description.map((item, index) => (
            <li key={index} className="text-sm text-gray-600 dark:text-gray-300">
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
