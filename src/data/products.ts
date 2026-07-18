export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

export const products: Product[] = [
  // Houseplants
  { id: 1, name: 'Monstera Deliciosa', price: 45, image: 'https://picsum.photos/id/1015/300/200', category: 'Houseplants' },
  { id: 2, name: 'Fiddle Leaf Fig', price: 65, image: 'https://picsum.photos/id/102/300/200', category: 'Houseplants' },
  { id: 3, name: 'Snake Plant', price: 25, image: 'https://picsum.photos/id/103/300/200', category: 'Houseplants' },
  { id: 4, name: 'ZZ Plant', price: 30, image: 'https://picsum.photos/id/104/300/200', category: 'Houseplants' },
  { id: 5, name: 'Rubber Plant', price: 40, image: 'https://picsum.photos/id/106/300/200', category: 'Houseplants' },
  { id: 6, name: 'Peace Lily', price: 35, image: 'https://picsum.photos/id/107/300/200', category: 'Houseplants' },
  
  // Succulents
  { id: 7, name: 'Echeveria', price: 15, image: 'https://picsum.photos/id/1080/300/200', category: 'Succulents' },
  { id: 8, name: 'Aloe Vera', price: 20, image: 'https://picsum.photos/id/133/300/200', category: 'Succulents' },
  { id: 9, name: 'Jade Plant', price: 18, image: 'https://picsum.photos/id/201/300/200', category: 'Succulents' },
  { id: 10, name: 'Haworthia', price: 22, image: 'https://picsum.photos/id/133/300/200', category: 'Succulents' },
  { id: 11, name: 'Sedum', price: 12, image: 'https://picsum.photos/id/133/300/200', category: 'Succulents' },
  { id: 12, name: 'Cactus', price: 25, image: 'https://picsum.photos/id/133/300/200', category: 'Succulents' },
  
  // Flowering Plants
  { id: 13, name: 'Orchid', price: 50, image: 'https://picsum.photos/id/1074/300/200', category: 'Flowering' },
  { id: 14, name: 'African Violet', price: 28, image: 'https://picsum.photos/id/1075/300/200', category: 'Flowering' },
  { id: 15, name: 'Hibiscus', price: 32, image: 'https://picsum.photos/id/1076/300/200', category: 'Flowering' },
  { id: 16, name: 'Geranium', price: 24, image: 'https://picsum.photos/id/1077/300/200', category: 'Flowering' },
  { id: 17, name: 'Begonia', price: 26, image: 'https://picsum.photos/id/1078/300/200', category: 'Flowering' },
  { id: 18, name: 'Poinsettia', price: 40, image: 'https://picsum.photos/id/1079/300/200', category: 'Flowering' },
];
