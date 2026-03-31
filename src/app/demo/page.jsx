'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import styles from './hire.module.css';
import {
  Download,
  Code2,
  Terminal,
  Database,
  Layers,
  Briefcase,
  ArrowRight,
  Monitor,
  Globe,
  Zap,
  DollarSign
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const TechCard = ({ title, icon: Icon, items }) => (
  <div className={styles.techCard}>
    <h3><Icon size={18} /> {title}</h3>
    <ul className={styles.techList}>
      {items.map((item, i) => (
        <li key={i} className={styles.techItem}>
          • {item}
        </li>
      ))}
    </ul>
  </div>
);

const Hire = () => {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <main className={styles.container}>
        <section className={styles.hero}>
          <h1>Hire me</h1>
          <p>
            I’m a software engineer who loves building things that live on the internet.
            I have a sharp eye for design and a passion for creating pixel-perfect,
            performant, and accessible user experiences.
          </p>
          <a href="/resume.pdf" className={styles.resumeBtn} target="_blank">
            <Download size={16} /> Download Resume
          </a>
        </section>

        <section className={styles.techStack}>
          <h2 className={styles.sectionTitle}><Code2 size={24} /> My Tech Stack</h2>
          <div className={styles.techGrid}>
            <TechCard
              title="Frontend"
              icon={Monitor}
              items={['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']}
            />
            <TechCard
              title="Backend"
              icon={Terminal}
              items={['Node.js', 'Express', 'Python', 'Go', 'GraphQL']}
            />
            <TechCard
              title="Databases"
              icon={Database}
              items={['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Supabase']}
            />
            <TechCard
              title="DevOps"
              icon={Layers}
              items={['Docker', 'AWS', 'Vercel', 'Git', 'CI/CD']}
            />
          </div>
        </section>

        <section className={styles.whyHire}>
          <h2 className={styles.sectionTitle}><Briefcase size={24} /> Why must you hire me?</h2>
          <ul className={styles.reasonList}>
            <li className={styles.reasonItem}>
              <span className={styles.arrow}>↳</span> I don't just write code, I solve problems.
            </li>
            <li className={styles.reasonItem}>
              <span className={styles.arrow}>↳</span> I have a strong foundation in both design and engineering.
            </li>
            <li className={styles.reasonItem}>
              <span className={styles.arrow}>↳</span> I'm a fast learner and I'm always looking for ways to improve.
            </li>
            <li className={styles.reasonItem}>
              <span className={styles.arrow}>↳</span> I'm a great communicator and I love working in a team.
            </li>
          </ul>
        </section>

        <section className={styles.preferences}>
          <h2 className={styles.sectionTitle}><Zap size={24} /> My Preferences</h2>
          <div className={styles.preferenceGrid}>
            <div className={styles.prefCard}>
              <h3>Amazing work culture</h3>
              <p>I thrive in environments where collaboration and open communication are valued.</p>
            </div>
            <div className={styles.prefCard}>
              <h3>Remote first</h3>
              <p>I'm most productive when I have the flexibility to work from anywhere.</p>
            </div>
            <div className={styles.prefCard}>
              <h3>Familiar Tech stack</h3>
              <p>I love working with tools that allow me to move fast and build high-quality software.</p>
            </div>
            <div className={styles.prefCard}>
              <h3>Fair compensation</h3>
              <p>I believe that my skills and dedication deserve a competitive salary.</p>
            </div>
          </div>
        </section>

        <section className={styles.radar}>
          <h2 className={styles.sectionTitle}><Globe size={24} /> Companies on my radar</h2>
          <div className={styles.logoGrid}>
            {['Apple', 'Google', 'Vercel', 'Stripe', 'Meta', 'Netflix'].map((company) => (
              <div key={company} className={styles.logoItem}>
                <span style={{ fontWeight: 800, fontSize: '1.25rem', color: '#a1a1aa' }}>{company}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <h2>So are you ready to make me an offer that I cannot refuse?</h2>
          <p style={{ marginTop: '1rem', color: '#71717a' }}>
            Slide into my inbox at <a href="mailto:jeet@example.com" style={{ color: 'inherit', fontWeight: 600 }}>jeet@example.com</a>
          </p>
          <Link href="/contact" className={styles.hireBtn}>
            HIRE ME
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Hire;