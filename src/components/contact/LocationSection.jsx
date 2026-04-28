import React from 'react';
import Image from 'next/image';
import styles from './LocationSection.module.css';
import { SITE_CONFIG } from '@/configs/site-config';

const LocationSection = () => {
    const locations = [
        {
            id: 'nyc',
            name: 'New York',
            address: SITE_CONFIG.contact.address1,
            phone: SITE_CONFIG.contact.phone,
            image: '/contact/nyc.webp'
        },
        {
            id: 'la',
            name: 'Los Angeles',
            address: SITE_CONFIG.contact.address2,
            phone: SITE_CONFIG.contact.phone,
            image: '/contact/karachi.webp'
        }
    ];

    return (
        <section className={styles.locationSection}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <div className={styles.header}>
                            <h2 className={styles.heading}>
                                Where Are We <span className={styles.purpleText}>Located</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    {locations.map((loc) => (
                        <div className="col-lg-6 mb-4" key={loc.id}>
                            <div className={styles.locationCard}>
                                <div className={styles.cardImageWrapper}>
                                    <Image
                                        src={loc.image}
                                        alt={loc.name}
                                        fill
                                        className={styles.cardBg}
                                    />
                                    <div className={styles.overlay}></div>
                                </div>

                                <div className={styles.cardContent}>
                                    <h3 className={styles.locName}>{loc.name}</h3>

                                    <div className={styles.infoRow}>
                                        <div className={styles.infoItem}>
                                            <div className={styles.iconBox}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                            </div>
                                            <div className={styles.itemText}>
                                                <span className={styles.label}>Location</span>
                                                <p className={styles.value}>{loc.address}</p>
                                            </div>
                                        </div>

                                        <div className={styles.infoItem}>
                                            <div className={styles.iconBox}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.5 19.5 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                            </div>
                                            <div className={styles.itemText}>
                                                <span className={styles.label}>Contact Us</span>
                                                <p className={styles.value}>{loc.phone}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div className="row mt-5">
                    <div className="col-lg-6 mb-4">
                        <div className={styles.mapWrapper}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.6715654519!2d-73.611116624237!3d40.6657930714002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e2760775d5e5e1%3A0x6b4c10642f4c3300!2s1595%20Grand%20Ave%2C%20Baldwin%2C%20NY%2011510%2C%20USA!5e0!3m2!1sen!2s!4v1714246800000!5m2!1sen!2s"
                                width="100%"
                                height="450"
                                style={{ border: 0, borderRadius: '12px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className={styles.mapWrapper}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.73324838612!2d-118.2612260242!3d34.050699073156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b13486c47b%3A0xc3f587784687d60!2s1001%20Wilshire%20Blvd%20%231176%2C%20Los%20Angeles%2C%20CA%2090017%2C%20USA!5e0!3m2!1sen!2s!4v1714246800000!5m2!1sen!2s"
                                width="100%"
                                height="450"
                                style={{ border: 0, borderRadius: '12px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default LocationSection;
