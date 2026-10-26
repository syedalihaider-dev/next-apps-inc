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
                                Have an  <span className={styles.highlight}> Idea? Let’s Define</span> What Comes<br /> <span className={styles.highlight}>  Next.</span>
                            </h2>
                            <p className={styles.description}>
                                Most great apps start with a conversation, not a contract. Tell us what you are building, who it is for, and the problem it solves. Our team will review your requirements and discuss the next steps with you.
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
