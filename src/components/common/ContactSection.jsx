"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './ContactSection.module.css';
import MyButton from '@/components/layout/MyButton';
import { SITE_CONFIG } from '@/configs/site-config';

const ContactSection = ({ isNewDesign = false }) => {
    const router = useRouter();
    const [selectedServices, setSelectedServices] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        budget: '',
        msg: ''
    });
    const [status, setStatus] = useState({ loading: false, success: false, error: null });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (selectedServices.length === 0) {
            setStatus({ loading: false, success: false, error: 'Please select at least one service.' });
            return;
        }

        setStatus({ loading: true, success: false, error: null });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    services: selectedServices,
                    pageUrl: window.location.href
                })
            });

            const result = await response.json();

            if (response.ok) {
                setStatus({ loading: false, success: true, error: null });
                setFormData({ name: '', phone: '', email: '', budget: '', msg: '' });
                setSelectedServices([]);
                // Redirect user to thank you page
                router.push('/thank-you');
            } else {
                setStatus({ loading: false, success: false, error: result.error || 'Failed to submit form' });
            }
        } catch (error) {
            setStatus({ loading: false, success: false, error: 'Network error. Please try again later.' });
        }
    };

    const services = [
        { id: 'mobile-app', name: 'Mobile App' },
        { id: 'website', name: 'Website' },
        { id: 'custom-software', name: 'Custom Software' },
        { id: 'game', name: 'Game' },
        { id: 'others', name: 'Others' },
        // { id: 'ecommerce', name: 'Any Ecommerce', icon: '/service-icon-ecommerce.webp' },
    ];

    const toggleService = (name) => {
        if (selectedServices.includes(name)) {
            setSelectedServices(selectedServices.filter(s => s !== name));
        } else {
            setSelectedServices([...selectedServices, name]);
        }
    };

    return (
        <section id="contact" className={`${styles.contactSection} ${isNewDesign ? styles.contactSectionNew : ''}`}>
            <div style={{ position: "absolute", inset: 0, zIndex: -1, overflow: "hidden" }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1920"
                    height="1086"
                    viewBox="0 0 1920 1086"
                    fill="none"
                    style={{ width: "100%", height: "100%" }}
                >
                    <g filter="url(#blur)">
                        <path
                            d="M1410.67 586.078C1640 462.849 1728.67 225.782 1758.67 135.3L1805.33 -75.3901C1706.22 37.9577 1600.67 287.682 1513.33 361.669C1238.61 594.407 942.718 576.456 661.333 657.614C379.333 738.95 263.226 817.291 170 934.451C82.6667 1044.21 48.8889 1322.02 44 1461.67C161.333 1067.33 390 911.502 496 865.854C752 755.609 1190 704.652 1410.67 586.078Z"
                            fill="#ffafa1ff"
                            fillOpacity="1"
                        />
                    </g>

                    <defs>
                        <filter
                            id="blur"
                            x="-200"
                            y="-200"
                            width="2400"
                            height="1800"
                            filterUnits="userSpaceOnUse"
                        >
                            <feGaussianBlur stdDeviation="62.6667" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className={styles.gridBg}>
                <Image src="/services-bg.webp" alt="Grid Background" fill style={{ objectFit: 'cover' }} />
            </div>

            <div className="container">
                <div className={styles.header}>
                    {!isNewDesign ? (
                        <>
                            <span className={styles.badge}>CONTACT US</span>
                            <h2 className={styles.heading}>
                                Ready to <span className={styles.highlight}>Build a Strategy </span><br />
                                That Works in the <span className={styles.highlight}>Real World.</span>
                            </h2>
                        </>
                    ) : (
                        <>
                            <h2 className={styles.heading}>
                                Fueling <span className={styles.blueText}>Innovation</span> <br />
                                Through <span className={styles.blueText}>Collaboration.</span>
                            </h2>
                        </>
                    )}
                </div>

                <div className="row align-items-center mt-5">
                    <div className="col-lg-5">
                        <div className={styles.infoCol}>
                            <h3 className={styles.subHeading}>Contact Us</h3>

                            {isNewDesign ? (
                                <>
                                    <a href={`mailto:${SITE_CONFIG.contact.email}`} className={`${styles.contactItem} ${styles.contactLink}`}>
                                        <div className={styles.iconBox}>
                                            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FE2400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        </div>
                                        <span className={`${styles.contactText} ${styles.contactTextNew}`}>{SITE_CONFIG.contact.email}</span>
                                    </a>

                                    <a href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`} className={`${styles.contactItem} ${styles.contactLink}`}>
                                        <div className={styles.iconBox}>
                                            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FE2400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.5 19.5 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                        </div>
                                        <span className={`${styles.contactText} ${styles.contactTextNew}`}>{SITE_CONFIG.contact.phone}</span>
                                    </a>
                                </>
                            ) : (
                                <>
                                    <a href={`mailto:${SITE_CONFIG.contact.email}`} className={`${styles.contactItem} ${styles.contactLink}`}>
                                        <div className={styles.iconBox}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FE2400" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        </div>
                                        <span className={styles.contactText}>{SITE_CONFIG.contact.email}</span>
                                    </a>
                                    <a href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`} className={`${styles.contactItem} ${styles.contactLink}`}>
                                        <div className={styles.iconBox}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FE2400" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.5 19.5 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                        </div>
                                        <span className={styles.contactText}>{SITE_CONFIG.contact.phone}</span>
                                    </a>
                                </>
                            )}

                            <h4 className={styles.socialHeading}>Follow Us</h4>
                            <div className={styles.socialIcons}>
                                <a href={SITE_CONFIG.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className={styles.socialLink}><img src="/social-fb.webp" alt="Facebook" /></a>
                                <a href={SITE_CONFIG.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}><img src="/social-linkedin.webp" alt="LinkedIn" /></a>
                                <a href={SITE_CONFIG.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink}><img src="/social-insta.webp" alt="Instagram" /></a>
                                <a href={SITE_CONFIG.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialLink}><img src="/social-x.webp" alt="X" /></a>
                                <a href={SITE_CONFIG.socialLinks.pinterest} target="_blank" rel="noopener noreferrer" className={styles.socialLink}><img src="/social-pinterest.webp" alt="Pinterest" /></a>
                            </div>

                            <h4 className={styles.achievementsHeading}>Our Achievements</h4>
                            <div className={styles.achievementBadges}>
                                <img src="/badge-brand-of-year.webp" alt="Brand of year" />
                                <img src="/badge-expertise.webp" alt="Expertise" />
                                <img src="/badge-goodfirms.webp" alt="GoodFirms" />
                                <img src="/badge-clutch.webp" alt="Clutch" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className={styles.formCol}>
                            <h3 className={styles.servicesTitle}>Which Service Do You Need?*</h3>
                            <div className={styles.servicesPills}>
                                {services.map((service) => (
                                    <div
                                        key={service.id}
                                        className={`${styles.pill} ${selectedServices.includes(service.name) ? styles.pillActive : ''}`}
                                        onClick={() => toggleService(service.name)}
                                    >
                                        {/* <img src={service.icon} alt={service.name} className={styles.pillIcon} /> */}
                                        {service.name}
                                    </div>
                                ))}
                            </div>

                            <form className={styles.contactForm} onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className={styles.inputGroup}>
                                            <label>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                Full name*
                                            </label>
                                            <input type="text" name='name' placeholder="Your full name" value={formData.name} onChange={handleChange} required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className={styles.inputGroup}>
                                            <label>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.5 19.5 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                                Phone*
                                            </label>
                                            <input type="tel" name="phone" placeholder="Your phone number" value={formData.phone} onChange={handleChange} required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className={styles.inputGroup}>
                                            <label>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                                Email address*
                                            </label>
                                            <input type="email" name="email" placeholder="info@example.com" value={formData.email} onChange={handleChange} required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className={styles.inputGroup}>
                                            <label>
                                                {isNewDesign ? 'Select Your Budget' : (
                                                    <>
                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                                        Select Your Budget
                                                    </>
                                                )}
                                            </label>
                                            <select name="budget" value={formData.budget} onChange={handleChange} required>
                                                <option value="" disabled>Select Budget</option>
                                                <option value="$3000 to $5000">$3000 to $5000</option>
                                                <option value="$5000 to $10000">$5000 to $10000</option>
                                                <option value="$10000 to $25000">$10000 to $25000</option>
                                                <option value="$25000 to $50000">$25000 to $50000</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <div className={styles.inputGroup}>
                                            <label>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                                Project Details*
                                            </label>
                                            <textarea name="msg" placeholder="Write a message" value={formData.msg} onChange={handleChange} required></textarea>
                                        </div>
                                    </div>
                                </div>
                                {status.error && <div className="text-danger mb-3 mt-2">{status.error}</div>}
                                {status.success && <div className="text-success mb-3 mt-2">Form submitted successfully!</div>}
                                <div className={styles.submitBtn}>
                                    <MyButton
                                        text={status.loading ? "Submitting..." : "Submit Now"}
                                        className="btn_black"
                                        type="submit"
                                        disabled={status.loading}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
