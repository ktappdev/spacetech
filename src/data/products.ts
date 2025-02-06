import type { Product } from '../types/products';

export const products: Product[] = [
    {
        id: 'quantum-laser-x1000',
        name: 'QuantumLaser X1000',
        description: 'The most advanced space laser in the galaxy. Subscription required for quantum core activation. No subscription = No pew pew!',
        monthlyPrice: 299.99,
        yearlyPrice: 2999.99,
        imageUrl: '/images/quantum-laser.webp',
        features: [
            'Quantum-powered precision targeting',
            'Auto-cooling system',
            'Holographic sight',
            'Safety lock when subscription expires',
            '24/7 emergency support'
        ],
        category: 'weapons'
    },
    {
        id: 'warp-drive-infinity',
        name: 'WarpDrive Infinity',
        description: 'Travel at the speed of light! Subscription includes real-time navigation updates and quantum fuel optimization.',
        monthlyPrice: 999.99,
        yearlyPrice: 9999.99,
        imageUrl: '/images/warp-drive.webp',
        features: [
            'Faster-than-light travel capabilities',
            'AI navigation system',
            'Emergency stop feature',
            'Anti-matter containment field',
            'Galactic GPS included'
        ],
        category: 'transportation'
    },
    {
        id: 'quantum-shield-pro',
        name: 'QuantumShield Pro',
        description: 'The ultimate defense system. Keep your spacecraft protected with our premium force field technology.',
        monthlyPrice: 499.99,
        yearlyPrice: 4999.99,
        imageUrl: '/images/quantum-shield.webp',
        features: [
            'Multi-layer force field',
            'Auto-repair nanobots',
            'Impact prediction system',
            'Energy efficiency optimizer',
            'Shield strength monitoring'
        ],
        category: 'defense'
    },
    {
        id: 'telepathy-comm-ultra',
        name: 'TelepathyComm Ultra',
        description: 'Instant galactic communication device. Uses quantum entanglement for zero-lag conversations across the universe.',
        monthlyPrice: 199.99,
        yearlyPrice: 1999.99,
        imageUrl: '/images/telepathy-comm.webp',
        features: [
            'Universal translation',
            'Quantum encryption',
            'Holographic display',
            'Emergency beacon',
            'Infinite range'
        ],
        category: 'communication'
    }
]; 