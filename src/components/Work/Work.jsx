'use client';

import Image from 'next/image';
import styles from './work.module.css';

const workData = [
  {
    company: 'PayPal',
    role: 'Software Engineer',
    from: 'Oct 2022',
    to: 'Present',
    logo: 'https://picsum.photos/seed/paypal/64/64',
  },
  {
    company: 'Emerson',
    role: 'Software Engineer',
    from: 'Jul 2021',
    to: 'Sep 2022',
    logo: 'https://picsum.photos/seed/emerson/64/64',
  },
];


const Work = () => {
  return (
    <section className={styles.work}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.heading}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" />
            <path d="M3 14.25h6.25l1.093.955a1 1 0 0 0 1.314 0l1.093-.955H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" />
          </svg>
          <span>Work</span>
        </h2>

        <a href="/hire-me" className={styles.hire}>
          hire me
        </a>
      </div>

      {/* Timeline */}
      <ol className={styles.timeline}>
        {workData.map((item) => (
          <li key={item.company} className={styles.item}>
            <div className={styles.logoWrapper}>
              <Image
                src={item.logo}
                alt={item.company}
                width={28}
                height={28}
                className={styles.logo}
              />
            </div>

            <div className={styles.details}>
              <h3 className={styles.company}>{item.company}</h3>
              <p className={styles.role}>{item.role}</p>
              <p className={styles.duration}>
                <time>{item.from}</time> — <time>{item.to}</time>
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* Resume */}
      <a
        href="/resume.pdf"
        download
        target="_blank"
        className={styles.resume}
      >
        Download Resume
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" />
        </svg>
      </a>
    </section>
  )
}

export default Work