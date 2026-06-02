"use client";
import { useEffect } from "react";
import React from 'react';
import Image from 'next/image';
import styles from './thank-you.module.css';
import MyButton from '@/components/layout/MyButton';

const ThankYouPage = () => {
    useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17899557039/1hVUCIPj7LccEK-hltdC",
      });
    }
  }, []);
    return (
        <main className={styles.thankYouContainer}>
            <div className={styles.backgroundGlow}></div>
            <div className={styles.gridBg}>
                <Image src="/services-bg.webp" alt="Grid Background" fill style={{ objectFit: 'cover', opacity: 0.2 }} />
            </div>

            <div className={styles.content}>
                <div className={styles.iconWrapper}>
                    <div className={styles.checkIcon}>
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                </div>

                <h1 className={styles.title}>Thank You!</h1>
                <p className={styles.subtitle}>
                    Your message has been received. Our team will get back to you within 24 hours to discuss your project.
                </p>

                <div className={styles.actionArea}>
                    <MyButton text="Back to Home" link="/" className="btn_black" />
                </div>
            </div>
        </main>
    );
};

export default ThankYouPage;
