const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description:
      "Stylish smartwatch with heart rate monitoring, GPS, and fitness tracking features.",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    description:
      "Ergonomic RGB gaming mouse with customizable buttons and ultra-fast response time.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&h=500&fit=crop",
    description:
      "Compact mechanical keyboard with RGB backlighting and tactile switches.",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500&h=500&fit=crop",
    description:
      "Portable Bluetooth speaker with crystal-clear sound and 20-hour battery life.",
  },
  {
    id: 6,
    name: "DSLR Camera",
    price: 699.99,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=500&fit=crop",
    description:
      "Professional DSLR camera with 24MP sensor and 4K video recording capabilities.",
  },
  {
    id: 7,
    name: "Laptop Backpack",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    description:
      "Water-resistant backpack with padded laptop compartment and multiple storage pockets.",
  },
  {
    id: 8,
    name: "Running Shoes",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    description:
      "Lightweight running shoes designed for comfort, speed, and durability.",
  },
  {
    id: 9,
    name: "Sunglasses",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop",
    description:
      "UV-protected polarized sunglasses with a modern and stylish frame.",
  },
  {
    id: 10,
    name: "Coffee Maker",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=500&h=500&fit=crop",
    description:
      "Automatic coffee maker with programmable brewing and thermal carafe.",
  },
  {
    id: 11,
    name: "Office Chair",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1505843490701-5be5d6b19d16?w=500&h=500&fit=crop",
    description:
      "Ergonomic office chair with adjustable height and lumbar support.",
  },
  {
    id: 12,
    name: "Tablet",
    price: 329.99,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
    description:
      "10-inch tablet perfect for streaming, gaming, and productivity tasks.",
  },
  {
    id: 13,
    name: "Fitness Tracker",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop",
    description:
      "Track your daily activity, sleep, calories, and workouts with ease.",
  },
  {
    id: 14,
    name: "Wireless Earbuds",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&h=500&fit=crop",
    description:
      "Compact earbuds with active noise cancellation and immersive audio.",
  },
  {
    id: 15,
    name: "External SSD",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1593642532400-2682810df593?w=500&h=500&fit=crop",
    description: "Fast and reliable portable SSD with 1TB storage capacity.",
  },
  {
    id: 16,
    name: "Monitor",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop",
    description:
      "27-inch Full HD monitor with ultra-thin bezels and vibrant colors.",
  },
  {
    id: 17,
    name: "Webcam",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop",
    description:
      "1080p HD webcam with built-in microphone for meetings and streaming.",
  },
  {
    id: 18,
    name: "Portable Charger",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop",
    description:
      "20,000mAh power bank with fast charging support for all devices.",
  },
  {
    id: 19,
    name: "Desk Lamp",
    price: 44.99,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&h=500&fit=crop",
    description: "LED desk lamp with adjustable brightness and touch controls.",
  },
  {
    id: 20,
    name: "Electric Kettle",
    price: 54.99,
    image:
      "https://images.unsplash.com/photo-1570286424717-86d9d7f0d5c2?w=500&h=500&fit=crop",
    description:
      "Fast-boiling electric kettle with stainless steel finish and auto shut-off.",
  },
  {
    id: 21,
    name: "Air Fryer",
    price: 139.99,
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&h=500&fit=crop",
    description:
      "Healthy cooking with less oil using this 5L digital air fryer.",
  },
  {
    id: 22,
    name: "Yoga Mat",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=500&fit=crop",
    description:
      "Non-slip yoga mat designed for comfort during workouts and meditation.",
  },
  {
    id: 23,
    name: "Travel Suitcase",
    price: 109.99,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&h=500&fit=crop",
    description:
      "Lightweight hard-shell suitcase with TSA-approved lock and spinner wheels.",
  },
  {
    id: 24,
    name: "Action Camera",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1519183071298-a2962be90b8e?w=500&h=500&fit=crop",
    description:
      "Capture stunning adventures with waterproof 4K action camera.",
  },
  {
    id: 25,
    name: "Smartphone",
    price: 799.99,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
    description:
      "Latest-generation smartphone with AMOLED display and advanced camera system.",
  },
  {
    id: 26,
    name: "Wireless Charger",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&h=500&fit=crop",
    description:
      "Fast wireless charging pad compatible with all Qi-enabled devices.",
  },
  {
    id: 27,
    name: "VR Headset",
    price: 399.99,
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&h=500&fit=crop",
    description:
      "Immersive virtual reality headset with high-resolution display and controllers.",
  },
  {
    id: 28,
    name: "Electric Toothbrush",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1559591937-abc3d6d1d8c6?w=500&h=500&fit=crop",
    description:
      "Rechargeable electric toothbrush with multiple brushing modes and timer.",
  },
  {
    id: 29,
    name: "Mini Projector",
    price: 219.99,
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=500&h=500&fit=crop",
    description:
      "Portable HD projector for movies, gaming, and business presentations.",
  },
  {
    id: 30,
    name: "Gaming Controller",
    price: 64.99,
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&h=500&fit=crop",
    description:
      "Wireless gaming controller with ergonomic design and long-lasting battery.",
  },
];
export default products;
