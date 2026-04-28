'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import MyButton from '@/components/layout/MyButton';
import SideMenu from './SideMenu';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when ESC key is pressed
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) setIsMenuOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <>
            <header className={styles.mainHeader}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className={styles.headerWrapper}>
                                <Link href="/" className={styles.logoPart}>
                                    <Image
                                        src="/logo.webp"
                                        alt="Logo"
                                        width={243}
                                        height={68}
                                        priority
                                        className={styles.logoImage}
                                    />
                                </Link>
                                <div className={styles.headerRight}>
                                    <div className={styles.chatButton}>
                                        <MyButton text="Live Chat" className="chat" />
                                    </div>
                                    <button
                                        className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
                                        onClick={toggleMenu}
                                        aria-label="Toggle Menu"
                                    >
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
};

export default Header;

