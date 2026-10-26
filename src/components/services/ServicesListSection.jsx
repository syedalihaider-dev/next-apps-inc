'use client';

import React from 'react';
import Image from 'next/image';
import styles from './ServicesListSection.module.css';
import MyButton from '@/components/layout/MyButton';

const services = [
    {
        id: '01',
        title: 'Android App Development',
        description: 'High-performance native Android apps built for speed, scalability, and seamless user experience across all Android devices.'
    },
    {
        id: '02',
        title: 'Custom iOS App Development',
        description: 'Polished, Apple-certified iOS apps crafted to reflect your brand and deliver flawless performance on every Apple device.'
    },
    {
        id: '03',
        title: 'Cross-Platform Development',
        description: 'One codebase, every platform. We build Flutter and React Native apps that feel native on both iOS and Android.'
    },
    {
        id: '04',
        title: 'Mobile Web Apps Development',
        description: 'Progressive web apps that load fast, work offline, and deliver a native-like experience directly in the browser.'
    },
    {
        id: '05',
        title: 'Mobile Game Development',
        description: 'Engaging 2D/3D games built for iOS, Android, and cross-platform — from casual games to fully immersive experiences.'
    },
    {
        id: '06',
        title: 'Blockchain Mobile App Development',
        description: 'Secure, decentralized mobile applications with smart contracts, crypto wallets, and NFT integrations.'
    },
    {
        id: '07',
        title: 'AR/VR App Development',
        description: 'Immersive augmented and virtual reality experiences that transform how users interact with your product or brand.'
    }
];

const ServicesListSection = () => {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.bgWrapper}>
                <Image
                    src="/services/services-list-bg.webp"
                    alt="section background"
                    fill
                    className={styles.bgImg}
                />
            </div>

            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>
                        Explore Our <span className={styles.neonGreen}>App Development</span> Services
                    </h2>

                    <p className={styles.headerDesc}>
                        From mobile apps and web platforms to e-commerce stores, games, blockchain, and AR/VR  we solve real business problems with the right technology.
                    </p>
                </div>

                <div className={styles.servicesContainer}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.serviceItem}>
                            <div className={styles.itemInner}>
                                <div className={styles.idCol}>
                                    <span className={styles.idText}>{service.id}</span>
                                    <div className={styles.separator}>
                                        <div className={styles.dot}></div>
                                        <div className={styles.dot}></div>
                                        <div className={styles.dot}></div>
                                    </div>
                                </div>

                                <div className={styles.titleCol}>
                                    <h4 className={styles.serviceTitle}>{service.title}</h4>
                                    <div className={styles.hoverButton}>
                                        <MyButton text="Get Started" className="btn_black" />
                                    </div>
                                </div>

                                <div className={styles.descCol}>
                                    <p className={styles.serviceDesc}>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesListSection;
