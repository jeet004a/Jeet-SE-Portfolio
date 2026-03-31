'use client';

import styles from './homelayout.module.css';

import Bloglist from '../Blog List/Bloglist';
import Sidebar from '../Side Bar/Sidebar';

const HomeLayout = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        <Bloglist/>
        <Sidebar />
      </div>
    </section>
  );
};

export default HomeLayout;
