import React from 'react';
import Image from 'next/image';
import styles from './WhyChooseAppSection.module.css';
import MyButton from '@/components/layout/MyButton';

const WhyChooseAppSection = ({
    title,
    desc1,
    desc2,
    mockupImage = "/services/why-choose-mockup.webp",
    underlineImage = "/blue-vector.webp"
}) => {
    const defaultTitle = (
        <>
            Why Choose <span className={styles.purpleText}>Next <br /> App</span> Mobile Apps
        </>
    );

    const defaultDesc1 = "We're Trusted By Businesses Worldwide, Turning Their Ideas Into Realities For All To See. Your App Idea Could Be Next.";
    const defaultDesc2 = "At Next App, We Help Startups, Growing Businesses, And Enterprises Transform Ideas Into Engaging, Scalable Mobile Experiences. From Strategy To Launch, Our Team Delivers High-Performance Apps Tailored To Your Market And Goals.";

    return (
        <section className={styles.whyChooseSection}>
            <div className={styles.bgBlobs}>
                <Image
                    src="/services/why-choose-bg-blobs.webp"
                    alt="background blobs"
                    fill
                    className={styles.blobImg}
                />
            </div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className={styles.contentCol}>
                            <h2 className={styles.heading}>
                                {title || defaultTitle}
                            </h2>

                            <div className={styles.description}>
                                <p>
                                    {desc1 || defaultDesc1}
                                </p>
                                <p>
                                    {desc2 || defaultDesc2}
                                </p>
                            </div>

                            <div className={styles.btnRow}>
                                <MyButton text="Get Started" className="btn_black" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.mockupWrapper}>
                <Image
                    src={mockupImage}
                    alt="Mobile App Mockup"
                    width={800}
                    height={700}
                    className={styles.mockupImg}
                    priority
                />
            </div>
        </section>
    );
};

export default WhyChooseAppSection;

