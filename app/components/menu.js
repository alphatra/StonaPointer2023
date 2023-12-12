"use client";
import Link from 'next/link';
import styles from './style.css'
export function Menu() {
    return (
      <nav className="bg-gray-800 text-white p-4">
        <ul className={styles.navbarcontainer}>
        
          <li>
            <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded text-lime-500">
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
          
        </ul>
      </nav>
    );
  };
  
  export default Menu;


  