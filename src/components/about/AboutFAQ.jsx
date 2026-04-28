"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './AboutFAQ.module.css';
import MyButton from '@/components/layout/MyButton';

const FAQ_DATA = [
    {
        question: "How do I choose the best tech solution for my business?",
        answer: "Lorem Ipsum Dolor Sit Amet Consectetur. Nec In Turpis Vivamus Duis At A Vitae Hac Auc Tor. Vel Euismod Diam Nunc Nisl Eu Facilisis Integer Amet Eget. Suspendisse Orci Faucibus Gravida Scelerisque. Vitae A Volutpat Sed Enim. Nulla Consectetur."
    },
    {
        question: "Can Next App handle custom app development?",
        answer: "Lorem Ipsum Dolor Sit Amet Consectetur. Nec In Turpis Vivamus Duis At A Vitae Hac Auc Tor. Vel Euismod Diam Nunc Nisl Eu Facilisis Integer Amet Eget. Suspendisse Orci Faucibus Gravida Scelerisque."
    },
    {
        question: "What is the typical timeline for a development project?",
        answer: "Lorem Ipsum Dolor Sit Amet Consectetur. Nec In Turpis Vivamus Duis At A Vitae Hac Auc Tor. Vel Euismod Diam Nunc Nisl Eu Facilisis Integer Amet Eget. Suspendisse Orci Faucibus Gravida Scelerisque."
    },
    {
        question: "Do you offer post-launch support and maintenance?",
        answer: "Lorem Ipsum Dolor Sit Amet Consectetur. Nec In Turpis Vivamus Duis At A Vitae Hac Auc Tor. Vel Euismod Diam Nunc Nisl Eu Facilisis Integer Amet Eget. Suspendisse Orci Faucibus Gravida Scelerisque."
    },
    {
        question: "How secure is my data with your cloud solutions?",
        answer: "Lorem Ipsum Dolor Sit Amet Consectetur. Nec In Turpis Vivamus Duis At A Vitae Hac Auc Tor. Vel Euismod Diam Nunc Nisl Eu Facilisis Integer Amet Eget. Suspendisse Orci Faucibus Gravida Scelerisque."
    },
    {
        question: "What platforms do you specialize in for mobile apps?",
        answer: "Lorem Ipsum Dolor Sit Amet Consectetur. Nec In Turpis Vivamus Duis At A Vitae Hac Auc Tor. Vel Euismod Diam Nunc Nisl Eu Facilisis Integer Amet Eget. Suspendisse Orci Faucibus Gravida Scelerisque."
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
