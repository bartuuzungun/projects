import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/products";
import AddToCartButton from "@/app/components/AddToCartButton";

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Tüm Ürünler</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          En kaliteli ürünlerimizi keşfedin. Modern tasarım ve yüksek kalite bir
          arada.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
          >
            <Link href={`/products/${product.id}`} className="relative h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex-1">
                <Link href={`/products/${product.id}`} className="block group">
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                </Link>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Fiyat:</span>
                  <span className="text-xl font-bold text-blue-600">
                    {product.price.toLocaleString("tr-TR", {
                      style: "currency",
                      currency: "TRY",
                    })}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Stok:</span>
                  <span className="text-lg font-medium text-gray-800">
                    {product.stock} Adet
                  </span>
                </div>

                <div className="flex-1">
                  <AddToCartButton product={product} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
