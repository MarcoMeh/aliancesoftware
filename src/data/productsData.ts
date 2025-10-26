// src/data/productsData.ts

import alianceSchoolImg from '@/assets/aliance-school-manager.png';
import alianceLibraryImg from '@/assets/aliance-library-manager.png';
// import alianceSheetImg from '@/assets/aliance-sheet.png'; // Assuming these are not used for now
// import alianceShopImg from '@/assets/aliance-shop.png'; // Assuming these are not used for now


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
  videoId?: string;
  pricing?: string;
  screenshots?: string[];
  downloadPath?: string;
  // NEW: Add pdfDownloads array
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
    videoId: 'playlist?list=PLWrTRSMeQtR3PuADMYKt1GT-GXjBbJYaS',
    pricing: '15000.00 DA',
    downloadPath: '/downloads/School Demo Setup.exe',
    // NEW: Add example PDF downloads
    pdfDownloads: [
      { title: 'School Manager Quick Start Guide', path: '/downloads/School_Manager_Quick_Start.pdf' },
      { title: 'Advanced Reporting Features', path: '/downloads/School_Manager_Reporting.pdf' },
      { title: 'System Requirements', path: '/downloads/School_Manager_Requirements.pdf' },
    ],
  },
  {
    id: 2, // New Product ID
    name: 'Aliance Library Manager',
    description: 'An intuitive system for managing library resources, patrons, and book circulation efficiently.',
    fullDescription: 'Aliance Library Manager offers a robust solution for libraries to automate cataloging, track loans and returns, manage patron accounts, and generate comprehensive reports, enhancing overall library operations.',
    category: 'Library Management',
    rating: 4.7, // Example rating
    users: '5+',  // Example users
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
    status: 'New', // Example status
    image: alianceLibraryImg, // Use the new image
    screenshots: [
      alianceLibraryImg // Placeholder for now, replace with actual screenshots if available
    ],
    videoId: undefined, // Or a YouTube ID if you have a demo video
    pricing: '12000.00 DA', // Example pricing
    downloadPath: '/downloads/Library Demo Setup.exe',
    // NEW: Add example PDF downloads
    pdfDownloads: [
      { title: 'Library Manager User Manual', path: '/downloads/Library_Manager_Manual.pdf' },
      { title: 'Librarian Best Practices', path: '/downloads/Librarian_Best_Practices.pdf' },
    ],
  }
];