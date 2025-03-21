import doktorImage1 from '../assets/doktor_1.jpg';
import doktorImage2 from '../assets/doktor_2.jpg';
import doktorImage3 from '../assets/doktor_3.jpg';
import doktorImage4 from '../assets/doktor_4.jpg';
import doktorImage5 from '../assets/doktor_5.jpg';
import doktorImage6 from '../assets/doktor_6.jpg';
import doktorImage7 from '../assets/doktor_7.jpg';
import doktorImage8 from '../assets/doktor_8.jpg';
import doktorImage9 from '../assets/doktor_9.jpg';
import doktorImage11 from '../assets/doktor_11.jpg';
import doktorImage12 from '../assets/doktor_12.jpg';
import doktorImage14 from '../assets/doktor_14.jpg';

interface Doctor {
  id: number;
  photo: string;
  degree: string;
  name: string;
  specialization: string;
  description: string;
  achievements: string[];
}

const mockDoctors: Doctor[] = [
  {
    id: 1,
    photo: doktorImage5,
    degree: 'Доктор медицинских наук',
    name: 'Иван Иванов',
    specialization: 'Кардиолог',
    description: 'Специалист в области кардиологии с 15-летним опытом.',
    achievements: ['https://via.placeholder.com/100', 'https://via.placeholder.com/100'],
  },
  {
    id: 2,
    photo: doktorImage3,
    degree: 'Кандидат медицинских наук',
    name: 'Елена Петрова',
    specialization: 'Невролог',
    description: 'Опытный невролог, владеет современными методами диагностики.',
    achievements: ['https://via.placeholder.com/100'],
  },
  {
    id: 3,
    photo: doktorImage8,
    degree: 'Доктор медицинских наук',
    name: 'Павел Смирнов',
    specialization: 'Педиатр',
    description: 'Специалист в лечении детских заболеваний с 10-летним стажем.',
    achievements: ['https://via.placeholder.com/100', 'https://via.placeholder.com/100', 'https://via.placeholder.com/100'],
  },
  {
    id: 4,
    photo: doktorImage1,
    degree: 'Кандидат медицинских наук',
    name: 'Мария Кузнецова',
    specialization: 'Дерматолог',
    description: 'Эксперт в лечении кожных заболеваний и дерматологии.',
    achievements: ['https://via.placeholder.com/100'],
  },
  {
    id: 5,
    photo: doktorImage11,
    degree: 'Доктор медицинских наук',
    name: 'Анна Волкова',
    specialization: 'Хирург',
    description: 'Опытный хирург с более чем 20 успешными операциями.',
    achievements: ['https://via.placeholder.com/100', 'https://via.placeholder.com/100'],
  },
  {
    id: 6,
    photo: doktorImage14,
    degree: 'Кандидат медицинских наук',
    name: 'Дмитрий Морозов',
    specialization: 'Онколог',
    description: 'Опытный онколог, специализируется на современных методах лечения рака.',
    achievements: ['https://via.placeholder.com/100'],
  },
  {
    id: 7,
    photo: doktorImage2,
    degree: 'Доктор медицинских наук',
    name: 'Ольга Соколова',
    specialization: 'Акушер-гинеколог',
    description: 'Специалист в области женского здоровья и акушерства.',
    achievements: ['https://via.placeholder.com/100', 'https://via.placeholder.com/100'],
  },
  {
    id: 8,
    photo: doktorImage9,
    degree: 'Кандидат медицинских наук',
    name: 'Виктор Орлов',
    specialization: 'Офтальмолог',
    description: 'Профессионал в области диагностики и лечения глазных заболеваний.',
    achievements: ['https://via.placeholder.com/100'],
  },
  {
    id: 9,
    photo: doktorImage4,
    degree: 'Доктор медицинских наук',
    name: 'Татьяна Романова',
    specialization: 'Эндокринолог',
    description: 'Врач с опытом работы в области гормональных нарушений.',
    achievements: ['https://via.placeholder.com/100', 'https://via.placeholder.com/100'],
  },
  {
    id: 10,
    photo: doktorImage12,
    degree: 'Кандидат медицинских наук',
    name: 'Александр Климов',
    specialization: 'Психотерапевт',
    description: 'Специалист в области психотерапии и психологической помощи.',
    achievements: ['https://via.placeholder.com/100'],
  },
  {
    id: 11,
    photo: doktorImage6,
    degree: 'Доктор медицинских наук',
    name: 'Светлана Белова',
    specialization: 'Травматолог',
    description: 'Эксперт в лечении травм опорно-двигательной системы.',
    achievements: ['https://via.placeholder.com/100', 'https://via.placeholder.com/100', 'https://via.placeholder.com/100'],
  },
  {
    id: 12,
    photo: doktorImage7,
    degree: 'Кандидат медицинских наук',
    name: 'Егор Павлов',
    specialization: 'Реаниматолог',
    description: 'Опытный реаниматолог, специализируется на неотложной помощи.',
    achievements: ['https://via.placeholder.com/100'],
  },
];

export default mockDoctors;
