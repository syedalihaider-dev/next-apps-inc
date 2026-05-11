'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './SideMenu.module.css';

const services = [
    { name: 'ANDROID APP DEVELOPMENT', href: '/services/android-app-development' },
    { name: 'AR/VR APP DEVELOPMENT', href: '/services/ar-vr-app-development' },
    { name: 'BLOCKCHAIN MOBILE APP DEVELOPMENT', href: '/services/blockchain-mobile-app-development' },
    { name: 'CROSS PLATFORM APP DEVELOPMENT', href: '/services/cross-platform-app-development' },
    { name: 'CUSTOM IOS APP DEVELOPMENT', href: '/services/custom-ios-app-development' },
    { name: 'MOBILE GAME DEVELOPMENT', href: '/services/mobile-game-development' },
    { name: 'MOBILE WEB APP DEVELOPMENT', href: '/services/mobile-web-app-development' },
];

const industries = [
    { name: 'ECOMMERCE APP DEVELOPMENT', href: '/industries/ecommerce-app-development' },
    { name: 'EDUCATION APP DEVELOPMENT', href: '/industries/education-app-development' },
    { name: 'FINANCE APP DEVELOPMENT', href: '/industries/finance-app-development' },
    { name: 'HEALTHCARE APP DEVELOPMENT', href: '/industries/healthcare-app-development' },
    { name: 'INSURANCE APP DEVELOPMENT', href: '/industries/insurance-app-development' },
    { name: 'AGENCIES APP DEVELOPMENT', href: '/industries/agencies-app-development' },
    { name: 'REAL ESTATE APP DEVELOPMENT', href: '/industries/real-estate-app-development' },
    { name: 'AUTOMATIVE APP DEVELOPMENT', href: '/industries/automotive-app-development' },
];

import { SITE_CONFIG } from '@/configs/site-config';

const SideMenu = ({ isOpen, onClose }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (name) => {
        if (openDropdown === name) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(name);
        }
    };

    return (
        <>
            <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} onClick={onClose}></div>
            <div className={`${styles.sideMenu} ${isOpen ? styles.open : ''}`}>
                <button className={styles.closeButton} onClick={onClose} aria-label="Close Menu">
                    &times;
                </button>

                <div className={styles.menuContent}>
                    <ul className={styles.nav}>
                        <li className={styles.navItem}>
                            <Link href="/" className={styles.navLink} onClick={onClose}>
                                HOME
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/about-us" className={styles.navLink} onClick={onClose}>
                                ABOUT US
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <button
                                className={styles.navLink}
                                onClick={() => toggleDropdown('services')}
                            >
                                SERVICES
                                <span className={`${styles.dropdownIcon} ${openDropdown === 'services' ? styles.active : ''}`}>
                                    ▼
                                </span>
                            </button>
                            <ul className={`${styles.submenu} ${openDropdown === 'services' ? styles.open : ''}`}>
                                {services.map((service, index) => (
                                    <li key={index} className={styles.submenuItem}>
                                        <Link href={service.href} className={styles.submenuLink} onClick={onClose}>
                                            {service.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className={styles.navItem}>
                            <button
                                className={styles.navLink}
                                onClick={() => toggleDropdown('industries')}
                            >
                                INDUSTRIES
                                <span className={`${styles.dropdownIcon} ${openDropdown === 'industries' ? styles.active : ''}`}>
                                    ▼
                                </span>
                            </button>
                            <ul className={`${styles.submenu} ${openDropdown === 'industries' ? styles.open : ''}`}>
                                {industries.map((industry, index) => (
                                    <li key={index} className={styles.submenuItem}>
                                        <Link href={industry.href} className={styles.submenuLink} onClick={onClose}>
                                            {industry.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/case-studies" className={styles.navLink} onClick={onClose}>
                                CASE STUDIES
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/contact-us" className={styles.navLink} onClick={onClose}>
                                CONTACT US
                            </Link>
                        </li>
                    </ul>

                    <div className={styles.socialLinks}>
                        <a href={SITE_CONFIG.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">FB</a>
                        <a href={SITE_CONFIG.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitter">TW</a>
                        <a href={SITE_CONFIG.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">LN</a>
                        <a href={SITE_CONFIG.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">IG</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideMenu;
