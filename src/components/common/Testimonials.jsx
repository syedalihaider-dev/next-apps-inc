import React from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';
import MyButton from '@/components/layout/MyButton';

const Testimonials = () => {
    return (
        <section className={styles.testimonialsSection}>
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
            <div className="container">
                <div className={styles.headerRow}>
                    <h2 className={styles.heading}>
                        What <span className={styles.highlight}>Clients Say </span><br /> About Working With Us.
                    </h2>
                    <div className={styles.viewMoreBtn}>
                        <MyButton text="Get Started" className="btn_black" />
                    </div>
                </div>

                <div className={styles.testimonialsGrid}>
                    <div className={styles.sideCol}>
                        <div className={styles.testimonialCard}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.clientName}>Ethan Armstrong</h3>
                                {/* <Image
                                    src="/trustpilot-logo.webp"
                                    width={116}
                                    height={36}
                                    alt="Trustpilot"
                                    className={styles.platformLogo}
                                /> */}
                            </div>
                            <p className={`${styles.testimonialText} scroll_block`}>
                                “I came to Next Apps with a concept and a deadline that most teams would have pushed back on. Not only did they deliver on time, they delivered something better than what I had sketched out. The communication was consistent, the team was honest when something needed to change, and the final product is one I am genuinely proud to put my name on.”
                            </p>
                        </div>
                        <div className={styles.testimonialCard}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.clientName}>Dean Warner</h3>
                                {/* <Image
                                    src="/clutch-logo.webp"
                                    width={116}
                                    height={36}
                                    alt="Clutch"
                                    className={styles.platformLogo}
                                /> */}
                            </div>
                            <p className={`${styles.testimonialText} scroll_block`}>
                                “I have worked with a lot of development agencies over the years, and the difference with Next Apps is that they actually care whether the product works, not just whether the project closes. Every milestone was delivered on time. Every change request was handled professionally. I have already brought them back for a second project.”
                            </p>
                        </div>
                    </div>

                    <div className={styles.centerImageCol}>
                        <div className={styles.centerImgWrapper}>
                            <Image
                                src="/testimonial-center.webp"
                                width={418}
                                height={492}
                                alt="Client"
                                className={styles.centerImg}
                            />
                        </div>
                    </div>

                    <div className={styles.sideCol}>
                        <div className={styles.testimonialCard}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.clientName}>Jennifer Angela</h3>
                                {/* <Image
                                    src="/trustpilot-logo.webp"
                                    width={116}
                                    height={36}
                                    alt="Trustpilot"
                                    className={styles.platformLogo}
                                /> */}
                            </div>
                            <p className={`${styles.testimonialText} scroll_block`}>
                                “I was nervous about the whole process because I had never built an app before. The team at Next Apps walked me through every stage, explained every decision, and made sure the monetization strategy was built into the product from day one. The result exceeded what I thought was possible at this budget.”
                            </p>
                        </div>
                        <div className={styles.testimonialCard}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.clientName}>Brian Staab</h3>
                                {/* <Image
                                    src="/clutch-logo.webp"
                                    width={116}
                                    height={36}
                                    alt="Trustpilot"
                                    className={styles.platformLogo}
                                /> */}
                            </div>
                            <p className={`${styles.testimonialText} scroll_block`}>
                                “We came to Next Apps for game development and they understood the genre, the audience, and the kind of experience we wanted to create without us having to over-explain. The development was clean, the testing was thorough, and the team was easy to work with from start to finish.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
