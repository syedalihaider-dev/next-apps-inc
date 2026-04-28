import Image from 'next/image';
import styles from './AboutWhyChooseUs.module.css';
import MyButton from '@/components/layout/MyButton';

const AboutWhyChooseUs = () => {
    return (
        <section className={styles.whyChooseSection}>
            <Image
                src="/services-bg.webp"
                fill
                style={{ objectFit: 'cover' }}
                alt="bg"
                className={styles.bgImage}
            />
            <div className={`container ${styles.container}`}>
                <div className="row align-items-center">
                    {/* Left Column */}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className={styles.leftContent}>
                            <span className={styles.badge}>WHY CHOOSE US</span>
                            <h2 className={styles.heading}>
                                The <span className={styles.highlightText}>Philosophy</span> Behind Every <span className={styles.highlightText}>Product</span> We Have Ever <span className={styles.highlightText}>Shipped.</span>
                            </h2>
                            <p className={styles.paragraph}>
                                Most agencies claim to be different. We focus on doing the work differently. These three principles guide every project we take on.
                            </p>

                            <div className="mt-4">
                                <MyButton text="Get Started" className="btn_black" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Cards) */}
                    <div className="col-lg-6">
                        <div className="row">
                            {/* Card Column 1 */}
                            <div className="col-md-6">
                                <div className={styles.cardWrapper}>
                                    <div className={styles.iconBox}>
                                        <Image src="/about/development-icon.webp" alt="Development" width={46} height={46} />
                                    </div>
                                    <h4 className={styles.cardHeading}>Understand Before You Build</h4>
                                    <p className={styles.cardParagraph}>
                                        We start by identifying the real problem, not just the request. This keeps rework low and ensures we build what actually matters.
                                    </p>
                                </div>
                                <div className={styles.cardWrapper}>
                                    <div className={styles.iconBox}>
                                        <Image src="/about/custom-icon.webp" alt="Custom" width={46} height={46} />
                                    </div>
                                    <h4 className={styles.cardHeading}>Build for Real Users</h4>
                                    <p className={styles.cardParagraph}>
                                        A product is only successful if people can use it easily. We design for everyday use, not just presentations.
                                    </p>
                                </div>
                            </div>

                            {/* Card Column 2 offsets to center vertically */}
                            <div className={`col-md-6 ${styles.offsetColumn}`}>
                                <div className={styles.cardWrapper}>
                                    <div className={styles.iconBox}>
                                        <Image src="/about/quality-icon.webp" alt="Quality" width={41} height={51} />
                                    </div>
                                    <h4 className={styles.cardHeading}>Think Beyond the Launch</h4>
                                    <p className={styles.cardParagraph}>
                                        We build products that last. Scalable, maintainable, and ready to grow with your business.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutWhyChooseUs;
