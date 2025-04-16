"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "./data/products";
import AddToCartButton from "./components/AddToCartButton";

export default function Home() {
  // İlk 3 ürünü göster
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Modern Tasarım ve
                <span className="text-blue-600"> Yüksek Kalite</span>
              </h1>
              <p className="text-lg text-gray-600">
                En kaliteli ürünlerimizle tanışın. Modern tasarım anlayışı ve
                yüksek kalite standartlarıyla üretilen ürünlerimiz, yaşam
                alanlarınıza değer katar.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/products"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Ürünleri Keşfet
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  İletişime Geç
                </Link>
              </div>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-blue-100 rounded-full"></div>
              <div className="absolute inset-4">
                <Image
                  src="/image.png"
                  alt="Hero Image"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Öne Çıkan Ürünler
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
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
                  <Link
                    href={`/products/${product.id}`}
                    className="block group"
                  >
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
        <div className="text-center mt-8">
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group"
          >
            <span>Tüm Ürünleri Gör</span>
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Öne Çıkan Projeler
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            href="/projects/1"
            className="group relative h-64 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <Image
              src="/image.png"
              alt="E-Commerce Platform"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-bold text-white">
                  E-Commerce Platform
                </h3>
                <p className="text-gray-200">
                  Modern ve kullanıcı dostu bir e-ticaret platformu
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/projects/2"
            className="group relative h-64 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <Image
              src="/image.png"
              alt="Task Management App"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-bold text-white">
                  Task Management App
                </h3>
                <p className="text-gray-200">
                  Ekip çalışması için tasarlanmış görev yönetim uygulaması
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/projects/3"
            className="group relative h-64 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <Image
              src="/image.png"
              alt="AI Chat Assistant"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-bold text-white">
                  AI Chat Assistant
                </h3>
                <p className="text-gray-200">
                  Yapay zeka destekli müşteri hizmetleri chatbot&apos;u
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span>Tüm Projeleri Gör</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
