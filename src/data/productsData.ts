// src/data/productsData.ts

import alianceSchoolImg from '@/assets/aliance-school-manager.png';
import alianceSheetImg from '@/assets/aliance-sheet.png';
import alianceShopImg from '@/assets/aliance-shop.png';

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
  image: string; // This can remain as the main/thumbnail image
  videoId?: string;
  pricing?: string;
  screenshots?: string[]; // Added for multiple screenshots
}

export const allProducts: Product[] = [
  {
    id: 1,
    name: 'Aliance School Manager',
    description: 'Comprehensive school management system for tracking students, employees, finance, and courses efficiently.',
    fullDescription: 'Aliance School Manager is a comprehensive system that helps schools efficiently manage students, employees, classes, finances, and schedules with a user-friendly interface and detailed analytics.',
    category: 'Education',
    rating: 4.9,
    users: '500+ schools',
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
    image: alianceSchoolImg, // Main image
    // --- CORRECTED SCREENSHOT PATHS HERE ---
    screenshots: [
      // If you want to use the main image as the first screenshot, keep alianceSchoolImg
      // Otherwise, list your actual screenshot paths from public/images/
      alianceSchoolImg,
      '/images/school 1.jpg', // Assuming public/images/school1.jpg
      '/images/school 2.jpg', // Assuming public/images/school2.jpg
      '/images/school 3.jpg', // Assuming public/images/school3.jpg
      '/images/school 4.jpg', // Assuming public/images/school4.jpg
      // Add more if you have them!
    ],
    videoId: 'dQw4w9WgXcQ', // Placeholder YouTube ID
    pricing: '$25/month per school'
  },
  {
    id: 2,
    name: 'Aliance Sheet',
    description: 'Advanced Excel/Spreadsheet management software with automation and data visualization capabilities.',
    fullDescription: 'Aliance Sheet allows users to automate spreadsheet tasks, visualize data dynamically, and create custom templates for improved productivity and reporting.',
    category: 'Productivity',
    rating: 4.8,
    users: '2K+ users',
    features: [
      'Automated reports',
      'Custom templates',
      'Data analysis tools',
      'Import/export Excel files'
    ],
    benefits: [
      'Save hours of manual spreadsheet work',
      'Easily create visual reports',
      'Increase productivity and accuracy',
      'Integrate with other tools seamlessly'
    ],
    status: 'New',
    image: alianceSheetImg,
    videoId: 'jNQXAC9IVRw', // Placeholder YouTube ID
    pricing: '$10/month per user'
  },
  {
    id: 3,
    name: 'Aliance Shop',
    description: 'User-friendly shop management software for small retail stores to manage sales, inventory, and daily operations.',
    fullDescription: 'Aliance Shop is designed for small retail shops to easily manage sales, inventory, payments, and reporting. It streamlines daily operations and improves efficiency for shop owners.',
    category: 'Business',
    rating: 4.7,
    users: '1K+ shops',
    features: [
      'Inventory management',
      'Sales tracking',
      'Payment integration',
      'Reports & analytics'
    ],
    benefits: [
      'Simplify shop operations',
      'Track sales and stock in real-time',
      'Manage payments efficiently',
      'Generate useful business insights'
    ],
    status: 'Featured',
    image: alianceShopImg,
    videoId: 'ScMzIvxBSi4', // Placeholder YouTube ID
    pricing: '$15/month per shop'
  }
];