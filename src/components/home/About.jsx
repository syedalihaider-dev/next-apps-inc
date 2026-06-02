import Image from 'next/image';
import styles from './About.module.css';
import MyButton from '@/components/layout/MyButton';

const About = () => {
    return (
        <section className={styles.aboutSection}>
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
                <div className="row align-items-center">
                    <div className="col-lg-9 col-md-8">
                        <div className={styles.headerArea}>
                            <span className={styles.badge}>WHO WE ARE</span>
                            <h2 className={styles.heading}>
                                We Build Apps Around <span className="secondarytxt">Real Business Problems</span>
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 d-flex justify-content-end align-items-start">
                        <div className={styles.videoWrapper}>
                            <video autoPlay loop muted playsInline className={styles.laptopVideo}>
                                <source src="/video/video-01.webm" type="video/webm" />
                            </video>
                        </div>
                    </div>
                </div>

                <div className="row align-items-end mt-5">
                    <div className="col-lg-6">
                        <div className={styles.handWrapper}>
                            <div className={styles.springElement}>
                                <Image
                                    src="/spring.webp"
                                    alt="spring"
                                    width={500}
                                    height={500}
                                    className={styles.springImage}
                                />
                            </div>
                            <Image
                                src="/mobile-hand.webp"
                                alt="hand holding mobile"
                                width={700}
                                height={900}
                                className={styles.handImage}
                            />
                            <div className={styles.gifOverlay}>
                                {/* <Image
                                    src="/mobile.gif"
                                    alt="mobile ui"
                                    width={280}
                                    height={600}
                                    className={styles.gifImage}
                                    unoptimized
                                /> */}
                                <video autoPlay loop muted playsInline className={styles.gifImage}>
                                    <source src="/video/mobile.webm" type="video/webm" />
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.contentArea}>
                            <div className={styles.paragraphs}>
                                <p>
                                    Next Apps did not start in a boardroom. It started with a question: why do so many digital products look good in a demo but disappoint in the real world? A small team of developers, designers, and product thinkers set out to answer that question differently.
                                </p>
                                <p>
                                    That instinct, to go deeper before writing a line of code, became the philosophy behind everything we do. Today, Next Apps operates across Pakistan and the USA, working with startups, growing businesses, and enterprises that trust us.
                                </p>
                            </div>
                            <div className="mt-4">
                                <MyButton text="Get Started" className="popupBtn" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
