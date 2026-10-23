import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "uz" | "ru";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

export const translations = {
  en: {
    // Nav
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.certificates": "Certificates",
    "nav.contact": "Contact",
    "nav.resume": "Resume",

    // Hero
    "hero.badge": "Available for new opportunities",
    "hero.greeting": "Hi, I'm",
    "hero.name": "Jasurbek Yoqubjonov",
    "hero.role": "Frontend Developer & Mentor",
    "hero.desc":
      "Crafting responsive, high-performance web applications with React, TypeScript, and Tailwind CSS. Passionate about clean architecture, intuitive UX/UI design, and empowering the next generation of engineers.",
    "hero.location": "Tashkent, Uzbekistan",
    "hero.workBadge": "Frontend Dev at Technocorp",
    "hero.certBadge": "Meta Certified Front-End Developer",
    "hero.btnProjects": "View Projects",
    "hero.btnResume": "View Full Resume",
    "hero.btnContact": "Get In Touch",

    // About
    "about.tag": "Overview",
    "about.title": "About Me",
    "about.p1":
      "I am a results-oriented Frontend Developer with hands-on experience designing and building responsive, accessible, and high-performance web applications using React, TypeScript, and Tailwind CSS.",
    "about.p2":
      "Comfortable working across the complete component lifecycle — from UX/UI conception in Figma to clean component architecture, cross-browser testing, and code reviews. Alongside production development, I mentor junior developers and have completed extensive coursework in modern frontend engineering.",
    "about.metric1": "1+ Years",
    "about.metric1Label": "Hands-on Experience",
    "about.metric2": "15+",
    "about.metric2Label": "Certifications",
    "about.metric3": "100+",
    "about.metric3Label": "Students Mentored",
    "about.metric4": "B2",
    "about.metric4Label": "English Proficiency",

    // Experience
    "exp.tag": "Career Journey",
    "exp.title": "Work Experience",
    "exp.technocorp.role": "Frontend Developer",
    "exp.technocorp.period": "July 2025 – Present",
    "exp.technocorp.b1":
      "Developing responsive and high-performance web pages with React and Tailwind CSS.",
    "exp.technocorp.b2":
      "Architecting reusable components and ensuring cross-browser compatibility.",
    "exp.technocorp.b3":
      "Participating in code reviews, sprint workflows, and Git version control.",

    "exp.pdpAcademy.role": "Assistant Mentor",
    "exp.pdpAcademy.period": "Sept 2025 – Present",
    "exp.pdpAcademy.b1":
      "Helping students understand core programming concepts and make coding easier to grasp.",
    "exp.pdpAcademy.b2":
      "Conducting extra practice sessions and code debugging to boost student learning efficiency.",

    "exp.pdpJunior.role": "Assistant Mentor",
    "exp.pdpJunior.period": "Aug 2025 – Sept 2025",
    "exp.pdpJunior.b1":
      "Guided junior students through their initial Frontend Development curriculum.",
    "exp.pdpJunior.b2":
      "Delivered hands-on project mentoring and introduced fundamentals of clean code.",

    // Education
    "edu.tag": "Academic Background",
    "edu.title": "Education",
    "edu.program": "Frontend Development Program",
    "edu.school": "PDP Academy",
    "edu.period": "June 2024 – June 2025",
    "edu.desc":
      "Completed an intensive 1-year curriculum taught by senior engineers covering modern web architecture, JavaScript/TypeScript standards, React component lifecycle, clean code patterns, teamwork, and collaborative Git workflows through real-world projects.",

    // Skills
    "skills.tag": "Technical Stack",
    "skills.title": "Skills & Technologies",
    "skills.cat1.title": "Languages & Core",
    "skills.cat1.desc":
      "HTML5, CSS3, JavaScript (ES6+), TypeScript, SASS/SCSS, Semantic Markup & Accessibility (a11y).",
    "skills.cat2.title": "Libraries & State",
    "skills.cat2.desc":
      "React.js, Next.js, Redux, React Router, Tailwind CSS, Bootstrap, REST APIs, Local Storage.",
    "skills.cat3.title": "Design & Workflow",
    "skills.cat3.desc":
      "Figma, UX/UI Design Principles, Responsive Design, Git/GitHub version control, VS Code, Vercel.",

    // Spoken Languages
    "lang.title": "Spoken Languages",
    "lang.subtitle": "Language proficiency for global collaboration",
    "lang.uzbek": "Uzbek",
    "lang.uzbekLevel": "Native",
    "lang.english": "English",
    "lang.englishLevel": "B2 (Upper-Intermediate)",
    "lang.russian": "Russian",
    "lang.russianLevel": "Working Proficiency",

    // Projects
    "projects.tag": "Featured Work",
    "projects.title": "Projects",
    "projects.subtitle":
      "Explore recent projects highlighting frontend engineering, responsive design, and API integrations.",
    "projects.btnDetails": "Details",
    "projects.btnLive": "Live Demo",
    "projects.btnSource": "GitHub",

    // Project 1: Picture Valley
    "proj.pv.desc":
      "Picture Valley is a modern and responsive image gallery web application that allows users to explore and save high-quality images from an external API. Users can like or collect their favorite images, which are stored locally for future access — all with a smooth, intuitive user experience.",
    "proj.pv.f1":
      "Responsive Design – Seamless experience across all devices, built with a mobile-first approach.",
    "proj.pv.f2":
      "API Integration – Dynamically fetches images from a third-party API (Pexels).",
    "proj.pv.f3":
      "Image Liking & Collection – Users can like and collect images, stored efficiently in localStorage.",
    "proj.pv.f4":
      "Persistent Data – Liked and collected images remain saved even after refreshing or closing the browser.",

    // Project 2: Resume Maker
    "proj.rm.desc":
      "A professional and responsive Resume Maker web application that allows users to easily create, preview, and download their resumes in real-time. Designed with a user-friendly step-based form and modern UI, it ensures a smooth and intuitive experience on all devices.",
    "proj.rm.f1":
      "Responsive Design – Mobile-first, fully responsive layout that adapts to any screen size.",
    "proj.rm.f2":
      "Live Resume Renderer – Real-time preview panel that updates instantly as the user fills in their information.",
    "proj.rm.f3":
      "Data Persistence – Automatically saves user input in localStorage and restores it on page reload.",
    "proj.rm.f4":
      "Download as PDF – Allows users to export their resume as a high-quality PDF using @react-pdf/renderer.",
    "proj.rm.f5":
      "Resume Archive – Stores downloaded resumes for future reference and reuse.",

    // Certifications
    "certs.tag": "Verified Credentials",
    "certs.title": "Certifications",
    "certs.subtitle":
      "Professional credentials including Meta Front-End Developer certification and official CEFR English proficiency.",
    "certs.view": "View credential",

    // Project Details Page
    "detail.back": "Back to all projects",
    "detail.type": "Frontend Application",
    "detail.about": "About this project",
    "detail.features": "Key Features",
    "detail.tech": "Technologies Used",
    "detail.notFound": "Project not found",
    "detail.notFoundDesc":
      "The requested project could not be found or was opened directly.",
    "detail.backHome": "Back to Home",

    // Footer
    "footer.desc":
      "Frontend Developer specializing in React, TypeScript & modern web interfaces.",
    "footer.touch": "Get in Touch",
    "footer.connect": "Connect",
    "footer.rights": "All Rights Reserved.",
  },

  uz: {
    // Nav
    "nav.about": "Men haqimda",
    "nav.experience": "Tajriba",
    "nav.education": "Ta'lim",
    "nav.skills": "Ko'nikmalar",
    "nav.projects": "Loyihalar",
    "nav.certificates": "Sertifikatlar",
    "nav.contact": "Aloqa",
    "nav.resume": "Rezyume",

    // Hero
    "hero.badge": "Yangi imkoniyatlar uchun ochiq",
    "hero.greeting": "Salom, men",
    "hero.name": "Jasurbek Yoqubjonov",
    "hero.role": "Frontend Dasturchi & Mentor",
    "hero.desc":
      "React, TypeScript va Tailwind CSS yordamida zamonaviy, qulay va yuqori tezlikda ishlovchi veb-ilovalarni yarataman. Toza kod, qulay UX/UI dizayn va yangi dasturchilarga yordam berishga tayyorman.",
    "hero.location": "Toshkent, O'zbekiston",
    "hero.workBadge": "Technocorp-da Frontend Dasturchi",
    "hero.certBadge": "Meta Sertifikatlangan Front-End Dasturchi",
    "hero.btnProjects": "Loyihalarni ko'rish",
    "hero.btnResume": "To'liq rezyume",
    "hero.btnContact": "Bog'lanish",

    // About
    "about.tag": "Umumiy ma'lumot",
    "about.title": "Men Haqimda",
    "about.p1":
      "Men React, TypeScript va Tailwind CSS yordamida moslashuvchan, foydalanuvchilar uchun qulay va tezkor veb-ilovalarni ishlab chiquvchi natijaga yo'naltirilgan Frontend Dasturchiman.",
    "about.p2":
      "Komponentlarning to'liq hayotiy siklida tajribaga egaman — Figmadagi UX/UI g'oyasidan boshlab, toza komponent arxitekturasi, brauzerlararo moslik va kod ko'rib chiqishgacha. Dasturlash bilan bir qatorda, boshlang'ich dasturchilarga mentorlik qilaman.",
    "about.metric1": "1+ Yil",
    "about.metric1Label": "Amaliy tajriba",
    "about.metric2": "15+",
    "about.metric2Label": "Sertifikatlar",
    "about.metric3": "100+",
    "about.metric3Label": "O'quvchilarga mentorlik",
    "about.metric4": "B2",
    "about.metric4Label": "Ingliz tili darajasi",

    // Experience
    "exp.tag": "Karyera yo'li",
    "exp.title": "Ish Tajribasi",
    "exp.technocorp.role": "Frontend Dasturchi",
    "exp.technocorp.period": "Iyul 2025 – Hozirgacha",
    "exp.technocorp.b1":
      "React va Tailwind CSS yordamida tezkor hamda moslashuvchan veb-sahifalarni yaratish.",
    "exp.technocorp.b2":
      "Qayta ishlatiladigan komponentlar arxitekturasini qurish va brauzerlararo moslikni ta'minlash.",
    "exp.technocorp.b3":
      "Kod tahlillari (code review), sprint jarayonlari va Git versiya nazoratida ishtirok etish.",

    "exp.pdpAcademy.role": "Assistant Mentor",
    "exp.pdpAcademy.period": "Sentabr 2025 – Hozirgacha",
    "exp.pdpAcademy.b1":
      "Talabalarga dasturlashning asosiy tushunchalarini sodda va tushunarli tarzda o'rgatish.",
    "exp.pdpAcademy.b2":
      "O'rganish samaradorligini oshirish uchun qo'shimcha amaliy mashg'ulotlar va kod tahlillarini o'tkazish.",

    "exp.pdpJunior.role": "Assistant Mentor",
    "exp.pdpJunior.period": "Avgust 2025 – Sentabr 2025",
    "exp.pdpJunior.b1":
      "Yosh o'quvchilarga Frontend dasturlash bo'yicha boshlang'ich bilimlarni berish.",
    "exp.pdpJunior.b2":
      "Amaliy loyihalarda yo'l-yo'riq ko'rsatish va toza kod yozish ko'nikmalarini shakllantirish.",

    // Education
    "edu.tag": "Ta'lim yo'nalishi",
    "edu.title": "Ta'lim",
    "edu.program": "Frontend Dasturlash Kursi",
    "edu.school": "PDP Academy",
    "edu.period": "Iyun 2024 – Iyun 2025",
    "edu.desc":
      "Tajribali muhandislar rahbarligida zamonaviy veb-arxitektura, JavaScript/TypeScript standartlari, React komponentlari, toza kod amaliyotlari va Git orqali jamoaviy ishlashni o'z ichiga olgan 1 yillik intensiv dasturni muvaffaqiyatli tamomlaganman.",

    // Skills
    "skills.tag": "Texnik Ko'nikmalar",
    "skills.title": "Ko'nikmalar & Texnologiyalar",
    "skills.cat1.title": "Dasturlash Tillari & Asos",
    "skills.cat1.desc":
      "HTML5, CSS3, JavaScript (ES6+), TypeScript, SASS/SCSS, Semantik belgilar va Accessibility (a11y).",
    "skills.cat2.title": "Kutubxonalar & Holat",
    "skills.cat2.desc":
      "React.js, Next.js, Redux, React Router, Tailwind CSS, Bootstrap, REST API, Local Storage.",
    "skills.cat3.title": "Dizayn & Ish Qurollari",
    "skills.cat3.desc":
      "Figma, UX/UI tamoyillari, Responsive dizayn, Git/GitHub versiya nazorati, VS Code, Vercel.",

    // Spoken Languages
    "lang.title": "Tillar",
    "lang.subtitle": "Jamoaviy va xalqaro muloqot uchun til ko'nikmalari",
    "lang.uzbek": "O'zbek tili",
    "lang.uzbekLevel": "Ona tili",
    "lang.english": "Ingliz tili",
    "lang.englishLevel": "B2 (Yetuk daraja)",
    "lang.russian": "Rus tili",
    "lang.russianLevel": "Ishchi muloqot darajasi",

    // Projects
    "projects.tag": "Tanlangan ishlar",
    "projects.title": "Loyihalar",
    "projects.subtitle":
      "Frontend muhandisligi, moslashuvchan dizayn va API integratsiyalarini o'z ichiga olgan loyihalarim bilan tanishing.",
    "projects.btnDetails": "Batafsil",
    "projects.btnLive": "Jonli ko'rish",
    "projects.btnSource": "GitHub",

    // Project 1: Picture Valley
    "proj.pv.desc":
      "Picture Valley — tashqi API (Pexels) orqali yuqori sifatli rasmlarni qidirish va saqlash imkoniyatini beruvchi zamonaviy rasm galereyasi veb-ilovasi. Foydalanuvchilar yoqqan rasmlarini kolleksiyalarga saqlashi mumkin, barcha ma'lumotlar localStorage-da xavfsiz saqlanadi.",
    "proj.pv.f1":
      "Moslashuvchan dizayn – Barcha qurilmalarda qulay ishlash uchun mobile-first yondashuv.",
    "proj.pv.f2":
      "API Integratsiyasi – Pexels API-dan rasmlarni real vaqtda yuklab olish.",
    "proj.pv.f3":
      "Yoqtirish va Saqlash – Rasmlarni localStorage-ga tez va qulay saqlash.",
    "proj.pv.f4":
      "Doimiy ma'lumotlar – Brauzer yangilanganda ham saqlangan rasmlar yo'qolmaydi.",

    // Project 2: Resume Maker
    "proj.rm.desc":
      "Foydalanuvchilarga rezyumelarini real vaqt rejimida yaratish, ko'rish va yuklab olish imkonini beruvchi professional va qulay Resume Maker veb-ilovasi. Bosqichma-bosqich forma va zamonaviy interfeys orqali tezkor rezyume tayyorlashga mo'ljallangan.",
    "proj.rm.f1":
      "Moslashuvchan dizayn – Istalgan ekran o'lchamiga moslashuvchi qulay interfeys.",
    "proj.rm.f2":
      "Jonli ko'rinish – Forma to'ldirilishi bilan rezyume ko'rinishi real vaqtda yangilanadi.",
    "proj.rm.f3":
      "Ma'lumotlar saqlanishi – Kiritilgan ma'lumotlar localStorage-ga avtomatik yoziladi.",
    "proj.rm.f4":
      "PDF formatida yuklab olish – @react-pdf/renderer orqali brauzerdan to'g'ridan-to'g'ri PDF yaratish.",
    "proj.rm.f5":
      "Rezyume arxivi – Yuklab olingan rezyumelarni kelgusida ishlatish uchun saqlash.",

    // Certifications
    "certs.tag": "Tasdiqlangan Hujjatlar",
    "certs.title": "Sertifikatlar",
    "certs.subtitle":
      "Meta Front-End Developer xalqaro kasbiy sertifikati hamda rasmiy CEFR B2 ingliz tili sertifikatlari.",
    "certs.view": "Sertifikatni ko'rish",

    // Project Details Page
    "detail.back": "Barcha loyihalarga qaytish",
    "detail.type": "Frontend Ilova",
    "detail.about": "Loyiha haqida",
    "detail.features": "Asosiy imkoniyatlar",
    "detail.tech": "Ishlatilgan texnologiyalar",
    "detail.notFound": "Loyiha topilmadi",
    "detail.notFoundDesc":
      "So'ralgan loyiha mavjud emas yoki noto'g'ri ochilgan.",
    "detail.backHome": "Bosh sahifaga qaytish",

    // Footer
    "footer.desc":
      "React, TypeScript va zamonaviy veb-interfeyslarga ixtisoslashgan Frontend Dasturchi.",
    "footer.touch": "Bog'lanish",
    "footer.connect": "Ijtimoiy tarmoqlar",
    "footer.rights": "Barcha huquqlar himoyalangan.",
  },

  ru: {
    // Nav
    "nav.about": "Обо мне",
    "nav.experience": "Опыт",
    "nav.education": "Образование",
    "nav.skills": "Навыки",
    "nav.projects": "Проекты",
    "nav.certificates": "Сертификаты",
    "nav.contact": "Контакты",
    "nav.resume": "Резюме",

    // Hero
    "hero.badge": "Открыт для новых предложений",
    "hero.greeting": "Привет, я",
    "hero.name": "Жасурбек Якубжонов",
    "hero.role": "Frontend-разработчик & Ментор",
    "hero.desc":
      "Создаю адаптивные, высокопроизводительные веб-приложения на React, TypeScript и Tailwind CSS. Ценю чистую архитектуру кода, интуитивный UX/UI дизайн и помогаю начинающим разработчикам.",
    "hero.location": "Ташкент, Узбекистан",
    "hero.workBadge": "Frontend-разработчик в Technocorp",
    "hero.certBadge": "Сертифицированный Meta Front-End разработчик",
    "hero.btnProjects": "Смотреть проекты",
    "hero.btnResume": "Открыть резюме",
    "hero.btnContact": "Связаться",

    // About
    "about.tag": "Обзор",
    "about.title": "Обо Мне",
    "about.p1":
      "Я целеустремленный Frontend-разработчик с практическим опытом создания отзывчивых, удобных и быстрых интерфейсов на React, TypeScript и Tailwind CSS.",
    "about.p2":
      "Уверенно работаю на всех этапах жизненного цикла компонентов — от проектирования интерфейса в Figma до компонентной архитектуры, кроссбраузерного тестирования и ревью кода. Параллельно с разработкой занимаюсь наставничеством junior-разработчиков.",
    "about.metric1": "1+ год",
    "about.metric1Label": "Практического опыта",
    "about.metric2": "15+",
    "about.metric2Label": "Сертификатов",
    "about.metric3": "100+",
    "about.metric3Label": "Обученных студентов",
    "about.metric4": "B2",
    "about.metric4Label": "Уровень английского",

    // Experience
    "exp.tag": "Карьера",
    "exp.title": "Опыт Работы",
    "exp.technocorp.role": "Frontend-разработчик",
    "exp.technocorp.period": "Июль 2025 – Настоящее время",
    "exp.technocorp.b1":
      "Разработка адаптивных и оптимизированных веб-страниц с использованием React и Tailwind CSS.",
    "exp.technocorp.b2":
      "Проектирование переиспользуемых компонентов и обеспечение кроссбраузерной совместимости.",
    "exp.technocorp.b3":
      "Участие в код-ревью, спринтах и управление версиями с помощью Git.",

    "exp.pdpAcademy.role": "Ассистент-ментор",
    "exp.pdpAcademy.period": "Сентябрь 2025 – Настоящее время",
    "exp.pdpAcademy.b1":
      "Помощь студентам в освоении фундаментальных концепций программирования и веб-разработки.",
    "exp.pdpAcademy.b2":
      "Проведение дополнительных практических занятий и разбор ошибок для повышения эффективности обучения.",

    "exp.pdpJunior.role": "Ассистент-ментор",
    "exp.pdpJunior.period": "Август 2025 – Сентябрь 2025",
    "exp.pdpJunior.b1":
      "Курирование юных студентов на начальном этапе изучения Frontend-разработки.",
    "exp.pdpJunior.b2":
      "Практическое наставничество в проектах и обучение базовым принципам чистого кода.",

    // Education
    "edu.tag": "Образование",
    "edu.title": "Образование",
    "edu.program": "Программа Frontend-разработки",
    "edu.school": "PDP Academy",
    "edu.period": "Июнь 2024 – Июнь 2025",
    "edu.desc":
      "Окончил годовую интенсивную программу под руководством опытных инженеров: современная веб-архитектура, стандарты JavaScript/TypeScript, жизненный цикл React, паттерны чистого кода и командная работа в Git над реальными проектами.",

    // Skills
    "skills.tag": "Технологический стек",
    "skills.title": "Навыки & Технологии",
    "skills.cat1.title": "Языки и база",
    "skills.cat1.desc":
      "HTML5, CSS3, JavaScript (ES6+), TypeScript, SASS/SCSS, семантическая верстка и доступность (a11y).",
    "skills.cat2.title": "Библиотеки и состояние",
    "skills.cat2.desc":
      "React.js, Next.js, Redux, React Router, Tailwind CSS, Bootstrap, REST API, Local Storage.",
    "skills.cat3.title": "Дизайн и рабочие процессы",
    "skills.cat3.desc":
      "Figma, принципы UX/UI, адаптивный дизайн, Git/GitHub, VS Code, деплой на Vercel.",

    // Spoken Languages
    "lang.title": "Языки",
    "lang.subtitle": "Владение языками для международной и командной работы",
    "lang.uzbek": "Узбекский",
    "lang.uzbekLevel": "Родной",
    "lang.english": "Английский",
    "lang.englishLevel": "B2 (Выше среднего)",
    "lang.russian": "Русский",
    "lang.russianLevel": "Рабочий уровень",

    // Projects
    "projects.tag": "Портфолио",
    "projects.title": "Проекты",
    "projects.subtitle":
      "Ознакомьтесь с актуальными проектами, демонстрирующими frontend-разработку, адаптивность и интеграцию API.",
    "projects.btnDetails": "Подробнее",
    "projects.btnLive": "Демо",
    "projects.btnSource": "GitHub",

    // Project 1: Picture Valley
    "proj.pv.desc":
      "Picture Valley — современная и адаптивная галерея изображений, позволяющая находить и сохранять фото высокого разрешения через сторонний API (Pexels). Пользователи могут ставить лайки и собирать коллекции с сохранением в localStorage.",
    "proj.pv.f1":
      "Адаптивный дизайн – Безупречная работа на смартфонах, планшетах и мониторах (mobile-first).",
    "proj.pv.f2":
      "Интеграция с API – Динамическая подгрузка изображений через Pexels API.",
    "proj.pv.f3":
      "Коллекции и лайки – Удобное добавление в избранное с записью в localStorage.",
    "proj.pv.f4":
      "Сохранение данных – Избранные фотографии сохраняются даже после перезагрузки страницы.",

    // Project 2: Resume Maker
    "proj.rm.desc":
      "Профессиональное веб-приложение для создания, предварительного просмотра в реальном времени и экспорта резюме в PDF. Пошаговая форма и современный UI обеспечивают комфортную работу на любых экранах.",
    "proj.rm.f1":
      "Адаптивный интерфейс – Полноценная поддержка любых устройств и разрешений экрана.",
    "proj.rm.f2":
      "Интерактивный превью – Мгновенное обновление отображения резюме по мере заполнения полей.",
    "proj.rm.f3":
      "Сохранение прогресса – Автоматическое сохранение данных в локальное хранилище браузера.",
    "proj.rm.f4":
      "Экспорт в PDF – Генерация качественного PDF-документа прямо в браузере через @react-pdf/renderer.",
    "proj.rm.f5":
      "Архив резюме – Удобное хранение созданных резюме для быстрого доступа.",

    // Certifications
    "certs.tag": "Квалификация",
    "certs.title": "Сертификаты",
    "certs.subtitle":
      "Профессиональные сертификаты, включая программу Meta Front-End Developer и сертификат CEFR B2 по английскому языку.",
    "certs.view": "Открыть сертификат",

    // Project Details Page
    "detail.back": "Назад ко всем проектам",
    "detail.type": "Frontend-приложение",
    "detail.about": "О проекте",
    "detail.features": "Ключевые возможности",
    "detail.tech": "Использованные технологии",
    "detail.notFound": "Проект не найден",
    "detail.notFoundDesc": "Запрошенный проект не найден или открыт напрямую.",
    "detail.backHome": "На главную",

    // Footer
    "footer.desc":
      "Frontend-разработчик, специализирующийся на React, TypeScript и современных веб-интерфейсах.",
    "footer.touch": "Контакты",
    "footer.connect": "Соцсети",
    "footer.rights": "Все права защищены.",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("preferred_lang") as Language;
    if (saved && (saved === "en" || saved === "uz" || saved === "ru")) {
      return saved;
    }
    return "en";
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("preferred_lang", newLang);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string): string => {
    const dict = translations[lang] || translations.en;
    return (
      (dict as Record<string, string>)[key] ||
      (translations.en as Record<string, string>)[key] ||
      key
    );
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
