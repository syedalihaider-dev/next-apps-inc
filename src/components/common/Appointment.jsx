import React from 'react';
import Image from 'next/image';
import styles from './Appointment.module.css';
import MyButton from '@/components/layout/MyButton';

const Appointment = () => {
    return (
        <section className={styles.appointmentSection}>
            <div className={styles.gridBg}></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className={styles.contentCol}>
                            <span className={styles.badge}>Book An Appointment</span>
                            <h2 className={styles.heading}>
                                You Have the <span className={styles.highlight}>Problem</span>. We Build the Solution. <br /> <span className={styles.highlight}>Let's Talk.</span>
                            </h2>
                            <p className={styles.description}>
                                It does not matter whether you need a mobile app, a game, an e-commerce store, a web platform, or custom software that your industry has never seen before. Bring us the problem. We will bring the plan, the team, and the track record to solve it right.
                            </p>
                            <div className={`${styles.btnWrapper} d-flex gap-3 flex-wrap`}>
                                <MyButton text="Get Started" className="btn_black" />
                                <MyButton text="Live Chat" className="btn_black chat" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.visualCol}>
                            <div className={styles.handImgWrapper}>
                                <Image
                                    src="/appointment-mobile-hand.webp"
                                    alt="Mobile App Idea"
                                    width={700}
                                    height={700}
                                    className={styles.handImg}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;
