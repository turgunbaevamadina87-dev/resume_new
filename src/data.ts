// ВСЕ данные резюме здесь. Остальной код менять не нужно.

export interface EduItem {
  period: string;
  title: string;
  lines: string[];
}
export interface Job {
  period: string;
  title: string;
  company: string;
  bullets: string[];
}

export const profile = {
  firstName: "MADINA",
  lastName: "MUKTARALIEVA",
  role: "Backend Python Developer",
  photo: "photo.jpg",
  about:
    "IT-специалист с опытом разработки, тестирования и сопровождения программных решений. Умею работать с современными технологиями, быстро осваиваю новые инструменты и эффективно решаю технические задачи. Ориентирована на качество кода и результат.",
};

export const contacts = [
  { icon: "☎", text: "+996223828215", href: "tel:+996223828215" },
  { icon: "@", text: "madinamuktaralieva@gmail.com", href: "mailto:madinamuktaralieva@gmail.com" },
  { icon: "⌖", text: "г. Бишкек" },
] as const;

export const skills: string[] = [
  "Python",
  "JAVA",
  "Git, GitHub",
  "REST API",
  "Основы ООП и алгоритмов",
];

export const languages: string[] = ["Английский", "Немецкий", "Кыргызский"];

export const education: EduItem[] = [
  {
    period: "2025–2026",
    title: "WARDIERE UNIVERSITY",
    lines: [
      "Веб-Информатика",
      "Кыргызско-Германский институт прикладной информатики",
    ],
  },
  {
    period: "2025–2026",
    title: "Учебный курс Okurmen Okuu Borboru",
    lines: [],
  },
];

export const experience: Job[] = [
  {
    period: "2022–2024",
    title: "Junior Software Developer",
    company: "Optima Bank",
    bullets: [
      "Разрабатывала и поддерживала функционал веб-приложений",
      "Писала и оптимизировала код, участвовала в code review",
      "Работала с базами данных и REST API",
      "Участвовала в командной разработке по Agile / Scrum",
    ],
  },
];
