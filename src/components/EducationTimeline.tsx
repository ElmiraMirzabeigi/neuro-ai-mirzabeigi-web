
interface TimelineItemProps {
  title: string;
  institution: string;
  period: string;
  description: string;
  isLast?: boolean;
}

function TimelineItem({ title, institution, period, description, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative pb-8">
      {!isLast && (
        <span
          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-petrol dark:bg-blue-700"
          aria-hidden="true"
        />
      )}
      <div className="relative flex space-x-3">
        <div>
          <span className="h-8 w-8 rounded-full bg-petrol dark:bg-blue-700 flex items-center justify-center ring-8 ring-background">
            <svg
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div>
            <div className="text-sm font-medium text-petrol dark:text-blue-300">{title}</div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {institution} • {period}
            </p>
          </div>
          <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface EducationTimelineProps {
  language: 'en' | 'fa';
}

export default function EducationTimeline({ language }: EducationTimelineProps) {
  const educationItems = language === 'en' 
    ? [
        {
          title: "Ph.D. in Applied Mathematics",
          institution: "Tarbiat Modares University & Shahid Beheshti University",
          period: "2020 - Present",
          description: "Thesis: \"Numerical Solution of Differential Equations Using Machine Learning Methods with Emphasis on Computational Models of Neurological Diseases\""
        },
        {
          title: "M.Sc. in Applied Mathematics",
          institution: "Tarbiat Modares University",
          period: "2016 - 2019",
          description: "Thesis: \"The Study of Iterative Method for Protein Structure Refinement by Application of Optimization\""
        },
        {
          title: "B.Sc. in Mathematics",
          institution: "Al-Zahra University",
          period: "2011 - 2015",
          description: "Focus on mathematical foundations and computational methods"
        }
      ]
    : [
        {
          title: "دکترا در ریاضیات کاربردی",
          institution: "دانشگاه تربیت مدرس و دانشگاه شهید بهشتی",
          period: "۱۳۹۹ - اکنون",
          description: "پایان‌نامه: \"حل عددی معادلات دیفرانسیل با استفاده از روش‌های یادگیری ماشین با تأکید بر مدل‌های محاسباتی بیماری‌های عصبی\""
        },
        {
          title: "کارشناسی ارشد ریاضیات کاربردی",
          institution: "دانشگاه تربیت مدرس",
          period: "۱۳۹۵ - ۱۳۹۸",
          description: "پایان‌نامه: \"مطالعه روش تکراری برای بهبود ساختار پروتئین با کاربرد بهینه‌سازی\""
        },
        {
          title: "کارشناسی ریاضیات",
          institution: "دانشگاه الزهرا",
          period: "۱۳۹۰ - ۱۳۹۴",
          description: "تمرکز بر مبانی ریاضی و روش‌های محاسباتی"
        }
      ];

  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {educationItems.map((item, index) => (
          <li key={index}>
            <TimelineItem
              title={item.title}
              institution={item.institution}
              period={item.period}
              description={item.description}
              isLast={index === educationItems.length - 1}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
