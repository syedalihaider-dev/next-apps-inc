import styles from './CTASection.module.css';
import Image from 'next/image';
import MyButton from '@/components/layout/MyButton';

const CTASection = () => {
    return (
        <section className={styles.ctaSection}>
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
                <div className={styles.ctaWrapper}>
                    <div className={styles.contentCol}>
                        <span className={styles.badge}>GET STARTED</span>
                        <h2 className={styles.heading}>
                            <span className="primarytxt">Stop Settling</span> For A Team That Only <span className="primarytxt"> Builds Half </span> Of What You Need.
                        </h2>
                        <p className={styles.description}>
                            Whether you need a mobile app, a game, an e-commerce store, a web platform, or custom software built from scratch, Next App is the one team that handles all of it. iOS, Android, Flutter, react native, Unity, full-stack. One conversation. One partner. One product that actually ships.
                        </p>
                        <div className={`${styles.btnWrapper} d-flex gap-3 flex-wrap`}>
                            <MyButton
                                text="Get Started"
                                className="btn_black"
                            />
                            <MyButton
                                text="Live Chat"
                                className="chat btn_white"
                            />
                        </div>
                    </div>

                    <div className={styles.visualCol}>
                        {/* Rotating Background */}
                        <div className={styles.bgCircleWrapper}>
                            <img
                                src="/cta-right-bg.webp"
                                alt="bg"
                                className={styles.rotatingBg}
                            />
                        </div>

                        {/* Hand and Phone Mockup */}
                        <div className={styles.handWrapper}>
                            <Image
                                src="/cta-mobile-casing.webp"
                                alt="hand holding phone"
                                width={550}
                                height={668}
                                className={styles.handImg}
                                priority
                            />
                            {/* Video inside the phone */}
                            <div className={styles.videoContainer}>
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className={styles.mobileVideo}
                                >
                                    <source src="/video/cta-mobile.webm" type="video/webm" />
                                </video>
                            </div>
                        </div>

                        {/* Floating Icons */}
                        <div className={`${styles.floatingIcon} ${styles.appStore}`}>
                            <Image src="/app-store-logo-icon.webp" alt="app store" width={100} height={100} />
                        </div>
                        <div className={`${styles.floatingIcon} ${styles.flutter}`}>
                            <Image src="/flutter-logo-icon.webp" alt="flutter" width={100} height={100} />
                        </div>
                        <div className={`${styles.floatingIcon} ${styles.android}`}>
                            <Image src="/android-logo-icon.webp" alt="android" width={100} height={100} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
