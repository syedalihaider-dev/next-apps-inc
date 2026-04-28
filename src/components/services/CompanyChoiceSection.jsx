import React from 'react';
import Image from 'next/image';
import styles from './CompanyChoiceSection.module.css';
import MyButton from '@/components/layout/MyButton';

const CompanyChoiceSection = () => {
    const cards = [
        {
            title: 'Discovery & Strategy',
            description: 'We get under the hood of your business — understanding your goals, users, and competition before a single line of code is written.',
            icon: '/about/development-icon.webp'
        },
        {
            title: 'UX/UI Design',
            description: "Our designers craft intuitive, beautiful interfaces that guide users naturally and reflect your brand's personality at every touchpoint.",
            icon: '/about/development-icon.webp'
        },
        {
            title: 'Development',
            description: 'Our engineers build clean, scalable code using modern frameworks — delivering both performance and flexibility for future growth.',
            icon: '/about/development-icon.webp'
        },
        {
            title: 'Launch & Deployment',
            description: 'We handle app store submissions, server deployments, and go-live checklists so your launch is smooth and stress-free.',
            icon: '/about/development-icon.webp'
        }
    ];

    return (
        <section className={styles.companySection}>
            <div className={styles.gridBg}></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className={styles.contentCol}>
                            <h2 className={styles.heading}>
                                A Process Built for <span className={styles.purpleText}>Clarity</span>, <span className={styles.purpleText}>Speed</span>, and <span className={styles.purpleText}>Zero Surprises</span>
                            </h2>
                            <p className={styles.description}>
                                From initial planning to final launch and beyond, our app development process is designed to keep you informed, in control, and confident every step of the way.
                            </p>
                            <div className={styles.btnRow}>
                                <MyButton text="Get Started" className="btn_black" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className={styles.cardsGrid}>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className={styles.col1}>
                                        <div className={styles.card}>
                                            <div className={styles.iconBox}>
                                                <Image src={cards[0].icon} alt="icon" width={40} height={40} />
                                            </div>
                                            <h4 className={styles.cardTitle}>{cards[0].title}</h4>
                                            <p className={styles.cardDesc}>{cards[0].description}</p>
                                        </div>
                                        <div className={styles.card}>
                                            <div className={styles.iconBox}>
                                                <Image src={cards[1].icon} alt="icon" width={40} height={40} />
                                            </div>
                                            <h4 className={styles.cardTitle}>{cards[1].title}</h4>
                                            <p className={styles.cardDesc}>{cards[1].description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={styles.col2}>
                                        <div className={styles.card}>
                                            <div className={styles.iconBox}>
                                                <Image src={cards[2].icon} alt="icon" width={40} height={40} />
                                            </div>
                                            <h4 className={styles.cardTitle}>{cards[2].title}</h4>
                                            <p className={styles.cardDesc}>{cards[2].description}</p>
                                        </div>
                                        <div className={styles.card}>
                                            <div className={styles.iconBox}>
                                                <Image src={cards[3].icon} alt="icon" width={40} height={40} />
                                            </div>
                                            <h4 className={styles.cardTitle}>{cards[3].title}</h4>
                                            <p className={styles.cardDesc}>{cards[3].description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyChoiceSection;
