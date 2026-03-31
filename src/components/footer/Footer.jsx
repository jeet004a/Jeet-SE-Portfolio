'use client';

import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Left links */}
        <nav className={styles.links}>
          <a href="/about">About</a>
          <a href="/hire">Hire</a>
          <a href="/blog">Blog</a>
          <a href="/magic">Magic</a>
          <a href="/uses">Uses</a>
        </nav>

        {/* Right text */}
        <div className={styles.copy}>
          © 2026 — present | Jeet Wasti.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
