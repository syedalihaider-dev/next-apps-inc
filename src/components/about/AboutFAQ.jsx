"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './AboutFAQ.module.css';
import MyButton from '@/components/layout/MyButton';

const FAQ_DATA = [
    {
        question: "What is Next App?",
        answer: "Next Apps is a US-based digital product studio specializing in mobile app development, web development, game development, e-commerce platforms, and custom software solutions. We partner with businesses that want more than average. We create powerful, scalable, and user-focused digital products designed to deliver real results."
    },
    {
        question: "What services does Next Apps offer?",
        answer: "We offer end-to-end digital product development, including mobile apps (iOS &amp; Android), web applications, e-commerce platforms, custom software, games, blockchain solutions, and AR/VR experiences. From initial strategy and design to development, testing, and post-launch support, we handle every stage of the product lifecycle."
    },
    {
        question: "What makes Next Apps different from other app development companies?",
        answer: "We start every project by deeply understanding the real business problem. Our single unified team works across all disciplines with complete transparency; no handoffs, no hidden processes. We build for real users and design products that are scalable and built to last beyond launch."
    },
    {
        question: "What is Next App’s mission?",
        answer: "Our mission is to design and develop powerful mobile and web applications that solve genuine business challenges. We create reliable, scalable, and performance-driven solutions that improve efficiency, enhance user experience, and support long-term business growth."
    },
    {
        question: "What industries does Next Apps work with?",
        answer: "We work with businesses across multiple industries including healthcare, finance, retail, education, logistics, entertainment, and e-commerce. Our experience allows us to deliver tailored solutions regardless of industry or business size."
    },
    {
        question: "How transparent is the development process at Next App?",
        answer: "We practice 100% transparency. Clients get real-time access to milestone reviews, sprint updates, testing reports, and deployment plans. You’ll always know exactly where your project stands."
    },
    {
        question: "What is Next App’s vision?",
        answer: "Our vision is to become a globally trusted technology partner known for delivering innovative, high-quality digital products. We aim to help businesses of all sizes transform their ideas into impactful solutions that drive measurable success and long-term value."
    },
    {
        question: "What are Next App’s core values?",
        answer: "Our core values are transparency, accountability, quality, innovation, and teamwork. We believe in honest communication, attention to detail, continuous improvement, and building solutions that are not only great today but ready for tomorrow."
    },
    {
        question: "Do you only build apps or also provide strategic guidance?",
        answer: "We go far beyond just coding. We act as a true product partner helping with product strategy, user research, market analysis, technical architecture, and long-term roadmap planning. Many clients engage us for CTO-level advisory alongside development."
    },
    {
        question: "Why should I choose Next Apps for my project?",
        answer: "You should choose Next Apps if you want a partner that truly cares about outcomes, not just deliverables. We focus on understanding your goals, building for real users, delivering exceptional quality, and creating products that scale and grow with your business for years to come."
    }
];

const AboutFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className={styles.faqSection}>
            <Image
                src="/process-bg.webp"
                alt="background"
                fill
                className={styles.bgImage}
                priority
            />
            <div className={`container ${styles.contentWrapper}`}>
                <div className={`${styles.headerContent} text-center mb-3`}>
                    <span className={styles.badge}>FAQ'S</span>
                    <h2 className={styles.heading}>
                        Frequently Ask <span className="primarytxt">Questions</span>
                    </h2>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 mb-3 mb-lg-0">
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/about/faq-mobile.webp"
                                alt="FAQ Mobiles"
                                width={800}
                                height={800}
                                className={styles.faqImage}
                            />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className={styles.accordionList}>
                            {FAQ_DATA.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ''}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <div className={styles.accordionHeader}>
                                        <h3 className={styles.question}>{faq.question}</h3>
                                        <div className={styles.iconWrapper}>
                                            <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1.5L9 9.5L17 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={styles.accordionBody}>
                                        <p className={styles.answer}>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-3">
                            <MyButton text="Get Started" className="btn_white" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutFAQ;
