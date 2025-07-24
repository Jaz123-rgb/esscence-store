import React from 'react';
import styles from './ProductCard.module.css'; // Ruta corregida

interface ProductCardProps {
  name: string;
  price: string;
  imageUrl: string;
}

export function ProductCard({ name, price, imageUrl }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.image} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.price}>{price}</p>
    </div>
  );
}