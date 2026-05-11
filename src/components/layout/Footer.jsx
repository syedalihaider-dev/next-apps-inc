import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { SITE_CONFIG } from '@/configs/site-config';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Image
                src="/footer-bg.webp"
                alt="Footer Background"
                fill
                priority
                className={styles.backgroundImage}
            />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <div className={styles.footerCol}>
                            <h4 className={styles.footerTitle}>Quick Links</h4>
                            <ul className={styles.footerLinks}>
                                <li><Link href="/">HOME</Link></li>
                                <li><Link href="/about-us">ABOUT US</Link></li>
                                <li><Link href="/case-studies">CASE STUDIES</Link></li>
                                {/* <li><Link href="/services/android-app-development">OUR SERVICES</Link></li> */}
                                {/* <li><Link href="/industries/ecommerce-app-development">INDUSTRIES</Link></li> */}
                                <li><Link href="/contact-us">CONTACT US</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <div className={styles.footerCol}>
                            <h4 className={styles.footerTitle}>Services</h4>
                            <ul className={styles.footerLinks}>
                                <li><Link href="/services/android-app-development">ANDROID APP DEVELOPMENT</Link></li>
                                <li><Link href="/services/ar-vr-app-development">AR/VR APP DEVELOPMENT</Link></li>
                                <li><Link href="/services/blockchain-mobile-app-development">BLOCKCHAIN MOBILE APP DEVELOPMENT</Link></li>
                                <li><Link href="/services/cross-platform-app-development">CROSS PLATFORM APP DEVELOPMENT</Link></li>
                                <li><Link href="/services/custom-ios-app-development">CUSTOM IOS APP DEVELOPMENT</Link></li>
                                <li><Link href="/services/mobile-game-development">MOBILE GAME DEVELOPMENT</Link></li>
                                <li><Link href="/services/mobile-web-app-development">MOBILE WEB APP DEVELOPMENT</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <div className={styles.footerCol}>
                            <h4 className={styles.footerTitle}>Industries</h4>
                            <ul className={styles.footerLinks}>
                                <li><Link href="/industries/ecommerce-app-development">eCOMMERCE APP DEVELOPMENT</Link></li>
                                <li><Link href="/industries/education-app-development">EDUCATION APP DEVELOPMENT</Link></li>
                                <li><Link href="/industries/finance-app-development">FINANCE APP DEVELOPMENT</Link></li>
                                <li><Link href="/industries/healthcare-app-development">HEALTHCARE APP DEVELOPMENT</Link></li>
                            </ul>
                        </div>
                        {/* <div className={styles.footerCol}>
                            <h4 className={styles.footerTitle}>Contact Us</h4>
                            <div className={styles.contactInfo}>
                                <p className={styles.infoLabel}>EMAIL US:</p>
                                <p><a href={`mailto:${SITE_CONFIG.contact.email}`}>{SITE_CONFIG.contact.email}</a></p>
                            </div>
                            <div className={styles.contactInfo}>
                                <p className={styles.infoLabel}>PHONE:</p>
                                <p><a href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}>{SITE_CONFIG.contact.phone}</a></p>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className={styles.footerCol}>
                            <h4 className={styles.footerTitle}>Locations</h4>
                            <div className={styles.locationItem}>
                                <div className={styles.locationIcon}>
                                    <Image src="/map-icon-01.webp" alt="Map Icon" width={24} height={32} />
                                </div>
                                <div className={styles.locationText}>
                                    <p className={styles.infoLabel}>NEW YORK:</p>
                                    <p>{SITE_CONFIG.contact.address1}</p>
                                </div>
                            </div>
                            <div className={styles.locationItem}>
                                <div className={styles.locationIcon}>
                                    <Image src="/map-icon-02.webp" alt="Map Icon" width={24} height={32} />
                                </div>
                                <div className={styles.locationText}>
                                    <p className={styles.infoLabel}>LOS ANGELES:</p>
                                    <p>{SITE_CONFIG.contact.address2}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <div className="row align-items-center">
                        <div className="col-lg-12 text-center">
                            <p className={styles.copyright}>
                                &copy; COPYRIGHT 2026 | Next App | ALL RIGHTS RESERVED
                            </p>
                        </div>
                        {/* <div className="col-lg-6 text-md-end">
                            <ul className={styles.bottomLinks}>
                                <li><Link href="#">PRIVACY POLICY</Link></li>
                                <li><span className={styles.separator}>|</span></li>
                                <li><Link href="#">TERMS & CONDITIONS</Link></li>
                                <li><span className={styles.separator}>|</span></li>
                                <li><Link href="#">FAQ</Link></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
