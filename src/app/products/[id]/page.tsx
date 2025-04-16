import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/products";
import { notFound } from "next/navigation";
import AddToCartButton from "@/app/components/AddToCartButton";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex mb-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Ana Sayfa
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <Link
                href="/products"
                className="ml-1 text-sm font-medium text-gray-500 hover:text-blue-600 md:ml-2"
              >
                Ürünler
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                {product.name}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="mb-6">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Ürünlere Geri Dön
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ürün Görseli */}
        <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Ürün Bilgileri */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-blue-600">
              {product.price.toLocaleString("tr-TR", {
                style: "currency",
                currency: "TRY",
              })}
            </span>
            <span className="text-lg text-gray-500">
              Stok: {product.stock} Adet
            </span>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Ürün Açıklaması
            </h2>
            <p className="text-gray-600">{product.description}</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
              Özellikler
            </h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Yüksek kaliteli malzeme</li>
              <li>Dayanıklı yapı</li>
              <li>Kolay kullanım</li>
              <li>Modern tasarım</li>
            </ul>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <AddToCartButton product={product} />
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Teslimat Bilgileri
            </h3>
            <p className="text-gray-600">
              • 2-4 iş günü içinde kargoya verilir
              <br />
              • Ücretsiz kargo (250 TL ve üzeri alışverişlerde)
              <br />• 14 gün içinde ücretsiz iade
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
