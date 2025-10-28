// src/data/productsData.ts

import alianceSchoolImg from '@/assets/aliance-school-manager.png';
import alianceLibraryImg from '@/assets/aliance-library-manager.png';

export interface Product {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  category: string;
  rating: number;
  users: string;
  features: string[];
  benefits: string[];
  status: string;
  image: string;
  videoId?: string; // YouTube video ID (e.g., 'dQw4w9WgXcQ')
  pricing?: string;
  screenshots?: string[];
  downloadPath?: string;
  pdfDownloads?: {
    title: string;
    path: string;
  }[];
}

export const allProducts: Product[] = [
  {
    id: 1,
    name: 'Aliance School Manager',
    description: 'Comprehensive school management system for tracking students, employees, finance, and courses efficiently.',
    fullDescription: 'Aliance School Manager is a comprehensive system that helps schools efficiently manage students, employees, classes, finances, and schedules with a user-friendly interface and detailed analytics.',
    category: 'Education',
    rating: 4.9,
    users: '10+',
    features: [
      'Multilingual support',
      'Role-based task management',
      'Finance & payment tracking',
      'Course & class scheduling'
    ],
    benefits: [
      'Streamline school administration',
      'Improve teacher-student communication',
      'Accurate finance and payment management',
      'Data-driven decision making'
    ],
    status: 'Popular',
    image: alianceSchoolImg,
    screenshots: [
      '/images/school-1.jpg',
      '/images/school-2.jpg',
      '/images/school-3.jpg',
      '/images/school-4.jpg'
    ],
    // **IMPORTANT CHANGE HERE:** Use a specific YouTube video ID, not a playlist URL
    videoId: 'fXPxrmUckyU', // **Replace with the actual YouTube video ID for Aliance School Manager**
    pricing: '15000.00 DA',
    downloadPath: '/downloads/School Demo Setup.exe',
    pdfDownloads: [
      { title: '5 طرق لإعادة إطلاق مدرستك بنجاح (دليل عملي للمدارس الطموحة للعودة بقوة)', path: '/downloads/5طرق_إلعادة_إطالق_مدرستك_بنجاح.pdf' },
      { title: '5طرق عملية لجلب طلاب جدد وجذب تسجيلات جديدة (دليل عملي من خبراء التسيير المدرسي)', path: '/downloads/5_طرق_عملية_لجلب_طلاب_جدد_وجذب_تسجيلات_جديدة.pdf' },
      { title: '5 خطوات واقعية ومجربة لتقليل الضغط وجعل إدارة مدرستك أكثر ذكاء وسلاسة.', path: '/downloads/5_خطوات_واقعية_ومجربة_لتقليل_الضغط.pdf' },
      { title: '3 خطوات لانطلاقة مدرسية ناجحة (دليل عملي للتخطيط , التنظيم , والإنطلاق بثقة', path: '/downloads/3خطوات_لانطلاقة_صحيحة.pdf' },
    ],
  },
  {
    id: 2,
    name: 'Aliance Library Manager',
    description: 'An intuitive system for managing library resources, patrons, and book circulation efficiently.',
    fullDescription: 'Aliance Library Manager offers a robust solution for libraries to automate cataloging, track loans and returns, manage patron accounts, and generate comprehensive reports, enhancing overall library operations.',
    category: 'Library Management',
    rating: 4.7,
    users: '5+',
    features: [
      'Automated cataloging and indexing',
      'Patron management with membership tracking',
      'Book lending and return system',
      'Overdue notifications and fines management'
    ],
    benefits: [
      'Simplify library administration tasks',
      'Improve access to library resources',
      'Reduce manual errors and save time',
      'Better inventory control and resource utilization'
    ],
    status: 'New',
    image: alianceLibraryImg,
    screenshots: [
      alianceLibraryImg // Placeholder for now, replace with actual screenshots if available
    ],
    videoId: undefined,
    pricing: '12000.00 DA',
    downloadPath: '/downloads/Library Demo Setup.exe',
    pdfDownloads: [
      { title: 'Library Manager User Manual', path: '/downloads/Library_Manager_Manual.pdf' },
      { title: 'Librarian Best Practices', path: '/downloads/Librarian_Best_Practices.pdf' },
    ],
  }
];