
import ExperienceCard from "@/components/ExperienceCard";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ExperiencePage = () => {
  const [language, setLanguage] = useState<'en' | 'fa'>('en');
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname.startsWith('/fa')) {
      setLanguage('fa');
    } else {
      setLanguage('en');
    }
  }, [location.pathname]);

  const experiences = language === 'en' 
    ? [
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
      ]
    : [
        {
          title: "مدیرعامل و مدیر محصول",
          company: "شرکت نوول مایند ساینتیستز",
          period: "تابستان ۱۴۰۲ - اکنون",
          description: [
            "همبنیانگذار و مدیرعامل شرکت نوول مایند ساینتیستز، شرکتی متمرکز بر توسعه راهکارهای نوآورانه مبتنی بر هوش مصنوعی برای حوزه سلامت.",
            "صاحب ایده و مدیر پروژه ADiagnosis، نرم‌افزاری که با استفاده از داده‌های پزشکی شخصی و هوش مصنوعی مراحل بیماری آلزایمر را ارزیابی می‌کند.",
            "مدیریت شرکت در فازهای کلیدی کاربرد دانش و ورود به بازار، رهبری عرضه محصول."
          ]
        },
        {
          title: "محقق دکترا",
          company: "آزمایشگاه علوم محاسباتی و هوش مصنوعی، دانشگاه شهید بهشتی",
          period: "۱۳۹۹ - اکنون",
          description: [
            "توسعه مدل‌های یادگیری ماشین برای تشخیص زودهنگام بیماری آلزایمر با استفاده از داده‌های تصویربرداری عصبی.",
            "راه‌حل‌های عددی برای معادلات مدل‌سازی صرع با استفاده از تکنیک‌های یادگیری عمیق.",
            "مدیریت تیمی برای طراحی نرم‌افزار بررسی پیشرفت بیماری‌های عصبی."
          ]
        },
        {
          title: "دستیار پژوهشی",
          company: "پروژه شهید احمدی روشن",
          period: "پاییز ۱۴۰۰ - تابستان ۱۴۰۱",
          description: [
            "پژوهش روی شناسایی تصاویر ذهنی با استفاده از داده‌های EEG.",
            "پیاده‌سازی شبکه‌های عصبی کانولوشنی، دستیابی به دقت بالا در پیش‌بینی عملکرد مغز.",
            "مدیریت تیم یادگیری ماشین، نظارت بر نقاط عطف پروژه و تحویل‌ها."
          ]
        },
        {
          title: "پژوهش پایان‌نامه کارشناسی ارشد",
          company: "دانشگاه تربیت مدرس",
          period: "۱۳۹۶ - ۱۳۹۸",
          description: [
            "ایجاد روشی نوین مبتنی بر دانش برای پیش‌بینی ساختار پروتئین.",
            "مدل‌سازی و تحلیل توابع پتانسیل با استفاده از B-splines برای تشخیص ساختارهای بومی پروتئین."
          ]
        }
      ];

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-petrol dark:text-white mb-6">
          {language === 'en' ? "Experience" : "تجربیات"}
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
