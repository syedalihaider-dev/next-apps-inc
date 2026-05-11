'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './IndustrySolutionsSlider.module.css';

const IndustrySolutionsSlider = ({
    title = <>Next-Gen eLearning App Solutions For <span className="primarytxt">Modern Education</span> Needs</>,
    solutionsData = []
}) => {
    const defaultSolutions = [
        {
            title: 'Grocery Delivery Apps',
            description: 'High-performance apps featuring real-time inventory, route optimization for drivers, and seamless scheduled deliveries for local groceries.',
            image: '/industries/solution-1.webp',
            active: false
        },
        {
            title: 'Fashion & Beauty Apps',
            description: 'Engaging apps featuring virtual try-ons, high-quality product visuals, and personalized style recommendations for fashion brands.',
            image: '/industries/solution-2.webp',
            active: false
        },
        {
            title: 'Electronics & Gadgets',
            description: 'Robust platforms featuring detailed product specifications, comparison tools, and secure tech support integration for electronics retailers.',
            image: '/industries/solution-3.webp',
            active: false
        },
        {
            title: 'Subscription Box Apps',
            description: 'Recurring billing and subscription management platforms for brands offering curated monthly boxes and membership-based services.',
            image: '/industries/solution-4.webp',
            active: false
        }
    ];

    const displaySolutions = solutionsData.length > 0 ? solutionsData : defaultSolutions;

    return (
        <section className={styles.solutionsSliderSection}>
            <div className="container">
                <div className={styles.headerArea}>
                    <h2 className={styles.heading}>
                        {title}
                    </h2>
                </div>
            </div>

            <div className={styles.sliderWrapper}>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1.2}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        576: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2.5 },
                        1024: { slidesPerView: 3.5 },
                        1400: { slidesPerView: 4 },
                    }}
                    className={styles.solutionsSwiper}
                >
                    {displaySolutions.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={`${styles.solutionCard} ${item.active ? styles.activeCard : ''}`}>
                                <div className={styles.imageBox}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className={styles.cardImg}
                                    />
                                </div>
                                <div className={styles.contentBox}>
                                    <h4 className={styles.cardTitle}>{item.title}</h4>
                                    <p className={styles.cardDesc}>{item.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default IndustrySolutionsSlider;
