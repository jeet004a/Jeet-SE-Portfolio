'use client'

import Image from 'next/image'
import { useState } from 'react'
// import styles from './page.module.css'

const images = [
    '/Jeet_3.jpg',
    '/Jeet_2026.jpeg',
]

const RandomProfileImage = () => {
    const [image] = useState(() => {
        return images[Math.floor(Math.random() * images.length)]
    })

    return (
        <div >
            <Image
                src={image}
                alt="Jeet Profile Image"
                width={400}
                height={500}
                priority
            // className={styles.profileImage}
            />
        </div>
    )
}

export default RandomProfileImage