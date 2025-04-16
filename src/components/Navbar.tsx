"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items, total, removeFromCart, updateQuantity } = useCart();

  const isActive = (path: string) => {
    return pathname === path ? "text-blue-600" : "text-gray-600";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
          >
            Portfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`${isActive(
                "/"
              )} hover:text-blue-600 transition-colors font-medium`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${isActive(
                "/about"
              )} hover:text-blue-600 transition-colors font-medium`}
            >
              Hakkımda
            </Link>
            <Link
              href="/projects"
              className={`${isActive(
                "/projects"
              )} hover:text-blue-600 transition-colors font-medium`}
            >
              Projects
            </Link>
            <Link
              href="/products"
              className={` ${isActive(
                "/products"
              )} hover:text-blue-600 transition-colors font-medium`}
            >
              Ürünler
            </Link>
            <Link
              href="/contact"
              className={`${isActive(
                "/contact"
              )} hover:text-blue-600 transition-colors font-medium`}
            >
              Contact
            </Link>

            {/* Cart Icon */}
            <button
              onClick={toggleCart}
              className="relative p-2 hover:text-blue-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleCart}
              className="relative p-2 hover:text-blue-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>
            <button
              className="p-2 z-50 relative"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                  isMenuOpen ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </>
                ) : (
                  <>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col p-6 space-y-6 mt-16">
          <Link
            href="/"
            className={`${isActive(
              "/"
            )} hover:text-blue-600 transition-colors font-medium text-lg`}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${isActive(
              "/about"
            )} hover:text-blue-600 transition-colors font-medium text-lg`}
            onClick={toggleMenu}
          >
            Hakkımda
          </Link>
          <Link
            href="/projects"
            className={`${isActive(
              "/projects"
            )} hover:text-blue-600 transition-colors font-medium text-lg`}
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`${isActive(
              "/contact"
            )} hover:text-blue-600 transition-colors font-medium text-lg`}
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Cart Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-full xl:w-1/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-xl font-semibold">Sepetim</h2>
            <button
              onClick={toggleCart}
              className="p-2 hover:text-blue-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <p className="text-gray-500 text-center">Sepetiniz boş</p>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
                  >
                    <div className="relative w-20 h-20">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-blue-600 font-medium">
                        {item.price.toLocaleString("tr-TR", {
                          style: "currency",
                          currency: "TRY",
                        })}
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="text-gray-500 hover:text-blue-600"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="text-gray-500 hover:text-blue-600"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex items-center justify-between font-semibold">
                <span>Toplam:</span>
                <span>
                  {total.toLocaleString("tr-TR", {
                    style: "currency",
                    currency: "TRY",
                  })}
                </span>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Satın Al
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {(isMenuOpen || isCartOpen) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => {
            setIsMenuOpen(false);
            setIsCartOpen(false);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
