
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PublicationCardProps {
  title: string;
  venue?: string;
  year: string | number;
  abstract: string;
  status?: string;
  doi?: string;
  language: 'en' | 'fa';
}

export default function PublicationCard({
  title,
  venue,
  year,
  abstract,
  status,
  doi,
  language
}: PublicationCardProps) {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          <div className="flex gap-2">
            {venue && (
              <Badge variant="outline" className="bg-petrol/10 text-petrol dark:bg-petrol/20 dark:text-blue-300">
                {venue}
              </Badge>
            )}
            {status && (
              <Badge variant="outline" className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                {status}
              </Badge>
            )}
          </div>
        </div>
        <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
          {year}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{abstract}</p>
      </CardContent>
      {doi && (
        <CardFooter className="flex justify-between pt-0">
          <Button variant="outline" size="sm" asChild>
            <a href={doi} target="_blank" rel="noopener noreferrer">
              {language === 'en' ? "View DOI" : "مشاهده DOI"}
            </a>
          </Button>
          <Button variant="ghost" size="sm">
            {language === 'en' ? "Copy BibTeX" : "کپی BibTeX"}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
