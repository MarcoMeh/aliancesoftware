// src/data/productsData.ts

import alianceSchoolImg from '@/assets/aliance-school-manager.png';
import alianceLibraryImg from '@/assets/aliance-library-manager.png';
import alianceSheetImg from '@/assets/aliance-sheet.png';
import alianceShopImg from '@/assets/aliance-shop.png';

// Import individual screenshot images
import schoolScreenshot1 from '@/assets/school-1.jpg'; // Assuming these files exist in your assets folder
import schoolScreenshot2 from '@/assets/school-2.jpg';
import schoolScreenshot3 from '@/assets/school-3.jpg';
import schoolScreenshot4 from '@/assets/school-4.jpg';

// You might want to rename your image files to not have spaces (e.g., school_1.jpg or school-1.jpg)
// and place them inside your `@/assets` folder.
// For example:
// src/assets/aliance-school-manager.png
// src/assets/school-1.jpg
// src/assets/school-2.jpg
// src/assets/school-3.jpg
// src/assets/school-4.jpg

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
      alianceSchoolImg,
  
    ],
    videoId: 'playlist?list=PLWrTRSMeQtR3PuADMYKt1GT-GXjBbJYaS',
    pricing: '15000.00 DA',
    downloadPath: '/downloads/Aliance Demo Setup.exe',
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
      // Add paths to actual screenshots if you have them, e.g.,
      // '/assets/library-screenshot-1.jpg',
      // '/assets/library-screenshot-2.jpg'
      alianceLibraryImg // Placeholder for now
    ],
    videoId: undefined, // Or a YouTube ID if you have a demo video
    pricing: '12000.00 DA', // Example pricing
    downloadPath: '/downloads/Library Demo Setup',
  }
];