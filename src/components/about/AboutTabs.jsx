'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './AboutTabs.module.css';

const tabs = [
    {
        id: 'mission',
        label: 'Mission',
        title: 'Mission',
        p1: 'At Next App, our mission is to design and develop powerful mobile and web applications that solve real business challenges. We focus on understanding each client’s goals, users, and market needs before building solutions that are reliable, scalable, and performance-driven.',
        p2: 'Our team works closely with businesses across multiple industries to create digital products that improve efficiency, enhance user experience, and support long-term growth. We don’t just build apps — we build solutions that deliver measurable results.'
    },
    {
        id: 'vision',
        label: 'Vision',
        title: 'Vision',
        p1: 'Our vision is to become a globally trusted technology partner known for delivering innovative and high-quality mobile and web applications. We aim to help businesses transform their ideas into impactful digital products that stand out in competitive markets.',
        p2: 'We envision a future where businesses of all sizes can leverage modern technology to scale faster, reach wider audiences, and deliver seamless digital experiences that drive success and long-term value.'
    },
    {
        id: 'values',
        label: 'Values',
        title: 'Values',
        p1: 'At Next App, our values are built on transparency, accountability, and a commitment to quality. We believe in maintaining clear communication with our clients and delivering every project with honesty, reliability, and attention to detail.',
        p2: 'Innovation, teamwork, and continuous improvement guide our daily work. We focus on building scalable, secure, and user-friendly applications that not only meet today’s requirements but also support future growth and evolving business needs.'
    }
];

const Counter = ({ end, duration = 2000, startAnimation }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startAnimation) return;

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [startAnimation, end, duration]);

    return <>{count}</>;
};

const AboutTabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const activeContent = tabs.find(tab => tab.id === activeTab);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className={styles.aboutTabsSection} ref={sectionRef}>
            <div className={styles.aboutTabsCard}>
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
                <div className="container position-relative z-1">
                    <div className={`row ${styles.statsRow}`}>
                        <div className="col-6 col-md-3 col-lg-3 text-center">
                            <h3 className={styles.statNumber}>
                                <Counter end={15} startAnimation={isVisible} />
                                <span className={styles.plus}>+</span>
                            </h3>
                            <p className={styles.statLabel}>Years of Experience</p>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 text-center">
                            <h3 className={styles.statNumber}>
                                <Counter end={200} startAnimation={isVisible} />
                                <span className={styles.plus}>+</span>
                            </h3>
                            <p className={styles.statLabel}>Projects Delivered</p>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 text-center">
                            <h3 className={styles.statNumber}>
                                <Counter end={98} startAnimation={isVisible} />
                                <span className={styles.plus}>%</span>
                            </h3>
                            <p className={styles.statLabel}>Client Retention Rate</p>
                        </div>
                        <div className="col-6 col-md-3 col-lg-3 text-center">
                            <h3 className={styles.statNumber}>
                                <Counter end={50} startAnimation={isVisible} />
                                <span className={styles.plus}>+</span>
                            </h3>
                            <p className={styles.statLabel}>Full-Time Specialists</p>
                        </div>
                    </div>

                    <div className="row mt-5 pt-lg-5">
                        <div className="col-md-5 col-lg-5">
                            <div className={styles.logoWrapper}>
                                <Image src="/about/black-logo.webp" alt="Nextapp" width={301} height={83} className={styles.logoImage} />
                            </div>
                            <div className={styles.tabsContainer}>
                                {tabs.map((tab) => (
                                    <div
                                        key={tab.id}
                                        className={`${styles.tabItem} ${activeTab === tab.id ? styles.activeTab : ''}`}
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        {activeTab === tab.id && <span className={styles.tabDash}>—</span>} {tab.label}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-7">
                            <div className={styles.contentWrapper}>
                                <p className={styles.paragraph}>{activeContent.p1}</p>
                                <p className={styles.paragraph}>{activeContent.p2}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Watermark text */}
                <div className={styles.watermark}>
                    Our {activeContent.title}
                </div>
            </div>
        </section>
    );
};

export default AboutTabs;
