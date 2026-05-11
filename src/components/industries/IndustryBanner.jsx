import React from 'react';
import Image from 'next/image';
import styles from './IndustryBanner.module.css';
import MyButton from '@/components/layout/MyButton';

const IndustryBanner = ({
    industryLabel,
    mainTitle,
    highlightedPart,
    description,
    bgImage
}) => {
    return (
        <section className={styles.industryBanner}>
            <Image
                src={bgImage}
                alt="banner background"
                fill
                priority
                className={styles.bgImage}
            />

            <div className={`container ${styles.container}`}>
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <span className={styles.industryLabel}>{industryLabel}</span>
                        <h1 className={styles.mainTitle}>
                            {mainTitle}
                            {highlightedPart && (
                                <> <span className={styles.highlight}>{highlightedPart}</span></>
                            )}
                        </h1>

                        <p className={styles.description}>
                            {description}
                        </p>

                        <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
                            <MyButton text="Get Started" className="btn_white" />
                            <MyButton text="Live Chat" className="chat btn_white" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default IndustryBanner;
