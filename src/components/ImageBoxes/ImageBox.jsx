'use client'
import Image from 'next/image';
import styles from './imagebox.module.css';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    label: 'dream',
    rotate: 'rotate2',
  },
  {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    label: 'explore',
    rotate: 'rotateNeg2',
  },
  {
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    label: 'build',
    rotate: 'rotate2',
  },
  {
    src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
    label: 'belong',
    rotate: 'rotate2',
  },
  {
    src: 'https://fastly.picsum.photos/id/1018/1200/800.jpg?hmac=ytfeVLw2v0Qw-AO63D1RgGpbOvqrIYQ1Gjj-4iRk8VI',
    label: 'relax',
    rotate: 'rotateNeg2',
  },
];
import React from 'react'

const ImageBox = () => {
  return (
    <div className={styles.strip}>
      {images.map((img) => (
        <div
          key={img.label}
          className={`${styles.card} ${styles[img.rotate]}`}
        >
          <Image
            src={img.src}
            alt={img.label}
            fill
            priority
            sizes="(min-width: 640px) 18rem, 11rem"
            className={styles.image}
          />

          <div className={styles.overlay}>
            <span className={styles.text}>{img.label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ImageBox