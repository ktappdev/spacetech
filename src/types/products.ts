export interface Product {
    id: string;
    name: string;
    description: string;
    monthlyPrice: number;
    yearlyPrice: number;
    imageUrl: string;
    features: string[];
    category: 'weapons' | 'transportation' | 'defense' | 'communication';
}

export interface Subscription {
    productId: string;
    userId: string;
    startDate: Date;
    endDate: Date;
    status: 'active' | 'expired' | 'cancelled';
} 