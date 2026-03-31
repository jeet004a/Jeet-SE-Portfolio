'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import { ThemeContext } from '@/context/ThemeContext'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import Socialbox from '../Header Social Box/Socialbox'
import { usePathname } from "next/navigation";
import Image from 'next/image'

const Navbar = () => {
    const { toggle } = useContext(ThemeContext);
    const pathname = usePathname();
    const [navHidden, setNavHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY || document.documentElement.scrollTop || 0;
            if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
                setNavHidden(true);
            } else {
                setNavHidden(false);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Close mobile menu on Escape key
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, []);

    const navLinks = [
        { href: "/about", label: "About" },
        { href: "/hire", label: "Hire" },
        { href: "/blog", label: "Blog" },  //if you want to open seperatly use -> external: true
        { href: "/magic", label: "Magic" },
        { href: "/uses", label: "Uses" },
    ];

    return (
        <>
            <div className={`${styles.container} ${navHidden ? styles.containerHidden : ''}`}>
                {pathname != '/' && <div className={styles.logo}>
                    <Link href="/" aria-label="Home">
                        <Image
                            src="https://avatars.githubusercontent.com/u/60826412?v=4&size=64"
                            alt="Profile photo"
                            width={36}
                            height={36}
                            priority
                            className={styles.profileImage}
                        />
                    </Link>
                </div>}

                {/* Desktop nav */}
                <div className={styles.navst}>
                    <nav className={styles.nav}>
                        <ul className={styles.navbar}>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        target={link.external ? "_blank" : undefined}
                                        className={`${styles.link} ${pathname === link.href ? styles.active : ""}`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Mobile menu button */}
                <button
                    className={styles.menuBtn}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={styles.menuLabel}>Menu</span>
                    <span className={`${styles.menuIcon} ${menuOpen ? styles.menuIconOpen : ''}`}>
                        <span></span>
                        <span></span>
                    </span>
                </button>

                <div className={styles.togglebtn}>
                    <Socialbox></Socialbox>
                    <DarkModeToggle></DarkModeToggle>
                </div>
            </div>

            {/* Mobile menu overlay */}
            {menuOpen && <div className={styles.backdrop} onClick={() => setMenuOpen(false)} />}
            <nav className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ''}`}>
                <ul className={styles.mobileList}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileLinkActive : ""}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                                <svg
                                    width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    className={styles.mobileLinkArrow}
                                >
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className={styles.mobileFooter}>
                    <Socialbox />
                    <DarkModeToggle />
                </div>
            </nav>
        </>
    )
}

export default Navbar