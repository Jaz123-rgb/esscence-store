import React from 'react';
import styles from './page.module.css';
import { ProductCard } from '@/components/ProductCard';

const products = [
  { name: 'Playera Roja', price: '$299.99', imageUrl: '/playeras/proverbs.jpeg' },
  { name: 'Playera Azul', price: '$349.99', imageUrl: '/playeras/yaweh_s1/IMG_2548.jpeg' },
  { name: 'Playera Negra', price: '$399.99', imageUrl: '/playeras/grey_shiirt/IMG_2563.jpeg' },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <img
        src="/essence-blanco.png" // Ruta corregida
        alt="ESSENCE Store Logo"
        className={styles.logo} // Asegúrate de definir estilos para la clase 'logo' en tu CSS
      />
      <div className={styles.grid}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}