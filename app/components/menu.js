"use client";
import Link from 'next/link';

export function Menu() {
    return (
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:bg-gray-700 px-3 py-2 rounded">
              about
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:bg-gray-700 px-3 py-2 rounded">
              contact
            </Link>
          </li>
          {/* Możesz dodać więcej linków tutaj */}
        </ul>
      </nav>
    );
  };
  
  export default Menu;