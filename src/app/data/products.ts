export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Modern Ofis Sandalyesi",
    description: "Ergonomik tasarımlı, ayarlanabilir yükseklik ve sırt desteği",
    price: 1299.99,
    image: "/image.png",
    category: "Ofis",
    stock: 15,
  },
  {
    id: 2,
    name: "Kablosuz Kulaklık",
    description: "Aktif gürültü önleme özellikli, 30 saat pil ömrü",
    price: 899.99,
    image: "/image.png",
    category: "Elektronik",
    stock: 25,
  },
  {
    id: 3,
    name: "Akıllı Saat",
    description: "Fitness takibi, kalp ritmi ölçümü ve bildirim özellikleri",
    price: 1499.99,
    image: "/image.png",
    category: "Elektronik",
    stock: 10,
  },
  {
    id: 4,
    name: "Laptop Çantası",
    description: "Su geçirmez malzeme, çok bölmeli tasarım",
    price: 299.99,
    image: "/image.png",
    category: "Aksesuar",
    stock: 30,
  },
  {
    id: 5,
    name: "Mekanik Klavye",
    description: "RGB aydınlatma, özel anahtarlar",
    price: 799.99,
    image: "/image.png",
    category: "Elektronik",
    stock: 20,
  },
  {
    id: 6,
    name: "Tablet Stand",
    description: "Ayarlanabilir açı, taşınabilir tasarım",
    price: 149.99,
    image: "/image.png",
    category: "Aksesuar",
    stock: 40,
  },
];
