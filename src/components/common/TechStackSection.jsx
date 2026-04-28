'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from './TechStackSection.module.css';

const categories = [
    // 'DESIGN',
    // 'FRONT-END',
    // 'BACK-END',
    // 'DATABASE',
    // 'CLOUD',
    // 'FRAMEWORK',
    // 'PROJECT MANAGEMENT'
];

const techStacks = {
    'FRONT-END': [
        { name: 'Flutter', icon: '/tech-stack/flutter.webp' },
        { name: 'React Native', icon: '/tech-stack/react.webp' },
        { name: 'Figma', icon: '/tech-stack/figma.webp' },
        { name: 'Node JS', icon: '/tech-stack/node-js.webp' },
        { name: 'Express JS', icon: '/tech-stack/express-js.webp' },
        { name: 'Mongo DB', icon: '/tech-stack/mangodb.webp' },
        { name: 'HTML5', icon: '/tech-stack/html.webp' },
        { name: 'MySQL', icon: '/tech-stack/my-sql.webp' },
    ],

    // 'DESIGN': [
    //     { name: 'Flutter', icon: '/tech-stack/flutter.webp' },
    //     { name: 'React Native', icon: '/tech-stack/react-native.webp' },
    //     { name: 'Ionic', icon: '/tech-stack/ionic.webp' },
    //     { name: 'Swift', icon: '/tech-stack/swift.webp' },
    //     { name: 'TypeScript', icon: '/tech-stack/typescript.webp' },
    //     { name: 'Xamarin', icon: '/tech-stack/xamarin.webp' },
    //     { name: 'HTML5', icon: '/tech-stack/html.webp' },
    //     { name: 'Kotlin', icon: '/tech-stack/kotlin.webp' }
    // ],
    // 'BACK-END': [
    //     { name: 'Flutter', icon: '/tech-stack/flutter.webp' },
    //     { name: 'React Native', icon: '/tech-stack/react-native.webp' },
    //     { name: 'Ionic', icon: '/tech-stack/ionic.webp' },
    //     { name: 'Swift', icon: '/tech-stack/swift.webp' },
    //     { name: 'TypeScript', icon: '/tech-stack/typescript.webp' },
    //     { name: 'Xamarin', icon: '/tech-stack/xamarin.webp' },
    //     { name: 'HTML5', icon: '/tech-stack/html.webp' },
    //     { name: 'Kotlin', icon: '/tech-stack/kotlin.webp' }
    // ],
    // 'DATABASE': [
    //     { name: 'Flutter', icon: '/tech-stack/flutter.webp' },
    //     { name: 'React Native', icon: '/tech-stack/react-native.webp' },
    //     { name: 'Ionic', icon: '/tech-stack/ionic.webp' },
    //     { name: 'Swift', icon: '/tech-stack/swift.webp' },
    //     { name: 'TypeScript', icon: '/tech-stack/typescript.webp' },
    //     { name: 'Xamarin', icon: '/tech-stack/xamarin.webp' },
    //     { name: 'HTML5', icon: '/tech-stack/html.webp' },
    //     { name: 'Kotlin', icon: '/tech-stack/kotlin.webp' }
    // ],
    // 'CLOUD': [
    //     { name: 'Flutter', icon: '/tech-stack/flutter.webp' },
    //     { name: 'React Native', icon: '/tech-stack/react-native.webp' },
    //     { name: 'Ionic', icon: '/tech-stack/ionic.webp' },
    //     { name: 'Swift', icon: '/tech-stack/swift.webp' },
    //     { name: 'TypeScript', icon: '/tech-stack/typescript.webp' },
    //     { name: 'Xamarin', icon: '/tech-stack/xamarin.webp' },
    //     { name: 'HTML5', icon: '/tech-stack/html.webp' },
    //     { name: 'Kotlin', icon: '/tech-stack/kotlin.webp' }
    // ],
    // 'FRAMEWORK': [
    //     { name: 'Flutter', icon: '/tech-stack/flutter.webp' },
    //     { name: 'React Native', icon: '/tech-stack/react-native.webp' },
    //     { name: 'Ionic', icon: '/tech-stack/ionic.webp' },
    //     { name: 'Swift', icon: '/tech-stack/swift.webp' },
    //     { name: 'TypeScript', icon: '/tech-stack/typescript.webp' },
    //     { name: 'Xamarin', icon: '/tech-stack/xamarin.webp' },
    //     { name: 'HTML5', icon: '/tech-stack/html.webp' },
    //     { name: 'Kotlin', icon: '/tech-stack/kotlin.webp' }
    // ],
    // 'PROJECT MANAGEMENT': [
    //     { name: 'Flutter', icon: '/tech-stack/flutter.webp' },
    //     { name: 'React Native', icon: '/tech-stack/react-native.webp' },
    //     { name: 'Ionic', icon: '/tech-stack/ionic.webp' },
    //     { name: 'Swift', icon: '/tech-stack/swift.webp' },
    //     { name: 'TypeScript', icon: '/tech-stack/typescript.webp' },
    //     { name: 'Xamarin', icon: '/tech-stack/xamarin.webp' },
    //     { name: 'HTML5', icon: '/tech-stack/html.webp' },
    //     { name: 'Kotlin', icon: '/tech-stack/kotlin.webp' }
    // ]
};

const TechStackSection = () => {
    const [activeTab, setActiveTab] = useState('FRONT-END');
    const activeStack = techStacks[activeTab] || techStacks['FRONT-END'];

    return (
        <section className={styles.techStackSection}>
            <div className="container">
                <div className={styles.headerArea}>
                    <h2 className={styles.heading}>
                        Our Tech Stack For <br />
                        <span className={styles.purpleText}>Mobile App Development</span>
                    </h2>
                </div>

                <div className={styles.tabsWrapper}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`${styles.tabBtn} ${activeTab === cat ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className={styles.techGrid}>
                    <Swiper
                        key={activeTab} // Force re-render on tab change
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={2}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            576: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            992: { slidesPerView: 6 },
                            1200: { slidesPerView: 8 },
                        }}
                        className={styles.techSwiper}
                    >
                        {activeStack.map((tech, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.techCard}>
                                    <div className={styles.iconBox}>
                                        <Image
                                            src={tech.icon}
                                            alt={tech.name}
                                            width={166}
                                            height={150}
                                            className={styles.techIcon}
                                        />
                                    </div>
                                    <h5 className={styles.techName}>{tech.name}</h5>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default TechStackSection;
