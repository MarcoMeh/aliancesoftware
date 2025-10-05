// src/data/productsData.ts

import alianceSchoolImg from '@/assets/aliance-school-manager.png';
import alianceSheetImg from '@/assets/aliance-sheet.png';
import alianceShopImg from '@/assets/aliance-shop.png';

export interface Product {
  id: number;
  name: string; // Keep as string, translate in components
  description: string; // Keep as string, translate in components
  fullDescription: string; // Keep as string, translate in components
  category: string; // Keep as string, translate in components if needed
  rating: number;
  users: string; // This can be a number if you want to translate the "users" string, or keep as string and translate "users" part
  features: string[]; // Keep as string array, translate in components if needed
  benefits: string[]; // Keep as string array, translate in components if needed
  status: string; // Keep as string, translate in components
  image: string;
  videoId?: string;
  pricing?: string;
  screenshots?: string[];
}

export const allProducts: Product[] = [
  {
    id: 1,
    name: 'Aliance School Manager', // This name will be a translation key or directly displayed
    description: 'Comprehensive school management system for tracking students, employees, finance, and courses efficiently.', // This description will be a translation key or directly displayed
    fullDescription: 'Aliance School Manager is a comprehensive system that helps schools efficiently manage students, employees, classes, finances, and schedules with a user-friendly interface and detailed analytics.', // This description will be a translation key or directly displayed
    category: 'Education', // This category will be a translation key or directly displayed
    rating: 4.9,
    users: '500+', // Changed to just the number part if we translate "users" word
    features: [ // These features will be translation keys or directly displayed
      'Multilingual support',
      'Role-based task management',
      'Finance & payment tracking',
      'Course & class scheduling'
    ],
    benefits: [ // These benefits will be translation keys or directly displayed
      'Streamline school administration',
      'Improve teacher-student communication',
      'Accurate finance and payment management',
      'Data-driven decision making'
    ],
    status: 'Popular', // This status will be a translation key
    image: alianceSchoolImg,
    screenshots: [
      alianceSchoolImg,
      '/images/school 1.jpg',
      '/images/school 2.jpg',
      '/images/school 3.jpg',
      '/images/school 4.jpg',
    ],
    videoId: 'playlist?list=PLWrTRSMeQtR3PuADMYKt1GT-GXjBbJYaS',
    pricing: '15000.00 DA'
  }
];

// Add more products if needed
/*
  {
    id: 2,
    name: 'Aliance Sheet',
    description: 'Advanced accounting software for businesses of all sizes.',
    fullDescription: 'Aliance Sheet is an advanced accounting software designed for businesses of all sizes, offering features like ledger management, invoicing, payroll, and financial reporting.',
    category: 'Finance',
    rating: 4.7,
    users: '200+ businesses',
    features: [
      'Automated invoicing',
      'Payroll management',
      'Detailed financial reports',
      'Bank reconciliation'
    ],
    benefits: [
      'Simplify accounting tasks',
      'Reduce manual errors',
      'Gain insights into financial health',
      'Ensure compliance'
    ],
    status: 'New',
    image: alianceSheetImg,
    screenshots: [
      alianceSheetImg,
      '/images/sheet 1.jpg',
      // Add more Aliance Sheet screenshots
    ],
    videoId: 'VIDEO_ID_FOR_ALIANCE_SHEET',
    pricing: '10000.00 DA'
  },
  {
    id: 3,
    name: 'Aliance Shop',
    description: 'Robust POS system and inventory management for retail stores.',
    fullDescription: 'Aliance Shop is a robust Point of Sale (POS) system combined with comprehensive inventory management, perfect for retail stores looking to optimize sales and stock control.',
    category: 'Retail',
    rating: 4.8,
    users: '300+ stores',
    features: [
      'Intuitive POS interface',
      'Real-time inventory tracking',
      'Customer management',
      'Sales analytics'
    ],
    benefits: [
      'Speed up checkout process',
      'Prevent stockouts',
      'Enhance customer loyalty',
      'Optimize sales strategies'
    ],
    status: 'Featured',
    image: alianceShopImg,
    screenshots: [
      alianceShopImg,
      '/images/shop 1.jpg',
      // Add more Aliance Shop screenshots
    ],
    videoId: 'VIDEO_ID_FOR_ALIANCE_SHOP',
    pricing: '12000.00 DA'
  }
];
*/