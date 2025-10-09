// src/data/productsData.ts

import alianceSchoolImg from '@/assets/aliance-school-manager.png';
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
    pricing: '15000.00 DA'
  }
];