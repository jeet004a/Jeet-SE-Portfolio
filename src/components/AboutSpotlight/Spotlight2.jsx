import React from 'react'
import styles from './spotlight2.module.css'
const Spotlight = () => {
    return (
        <svg
            className={styles.spotlight}
            viewBox="0 0 3787 2842"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter)">
                <ellipse
                    cx="1924.71"
                    cy="273.501"
                    rx="1924.71"
                    ry="273.501"
                    transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
                    fill="white"
                    fillOpacity="0.26"
                />
            </g>
            <defs>
                <filter id="filter">
                    <feGaussianBlur stdDeviation="151" />
                </filter>
            </defs>
        </svg>
    );
}

export default Spotlight