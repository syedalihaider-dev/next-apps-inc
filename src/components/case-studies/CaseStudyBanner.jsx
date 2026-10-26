import React from 'react';
import Image from 'next/image';
import styles from './CaseStudyBanner.module.css';
import MyButton from '@/components/layout/MyButton';

const CaseStudyBanner = () => {
    return (
        <section className={styles.caseStudyBanner}>
            <div className={styles.bgWrapper}>
                <Image
                    src="/case-study/case-study-bg.webp"
                    alt="Case Study Background"
                    fill
                    className={styles.bgImg}
                    priority
                />
                <div className={styles.overlay}></div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <div className={styles.content}>
                            <span className={styles.badge}>Case Study</span>
                            <h1 className={styles.heading}>
                                Building <span className={styles.purpleText}>Trust</span> Through <br />
                                <span className={styles.greenText}>Quality Work.</span>
                            </h1>
                            <p className={styles.desc}>
                                Explore how Next Apps transforms complex business challenges into practical digital solutions. From event management platforms to enterprise applications, discover the projects we've developed and the problems they were designed to solve.
                            </p>
                            <div className={styles.btnWrapper}>
                                <MyButton text="Get Started" className="btn_white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudyBanner;
