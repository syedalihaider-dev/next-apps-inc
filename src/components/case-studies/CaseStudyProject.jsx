import React from 'react';
import Image from 'next/image';
import styles from './CaseStudyProject.module.css';
import MyButton from '@/components/layout/MyButton';

const CaseStudyProject = () => {
    return (
        <section className={styles.caseStudyProject}>
            <div className={styles.bgOuterShape}>
                <Image
                    src="/case-study/project-mockup.webp"
                    alt="Mockup Background"
                    fill
                    className={styles.shapeImg}
                />
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className={styles.header}>
                            <h2 className={styles.heading}>
                                Explore Our <span className={styles.purpleText}>Work and Success Stories</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center mt-lg-5">
                    {/* Left Column: Client Info */}
                    <div className="col-lg-6">
                        <div className={styles.infoCol}>
                            <div className={styles.clientLogo}>
                                <div className={styles.logoWrapper}>
                                    <Image
                                        src="/case-study/project-logo.webp"
                                        alt="Client Logo"
                                        width={226}
                                        height={226}
                                        className={styles.logoImg}
                                    />
                                </div>
                            </div>

                            <div className={styles.textContent}>
                                <p>
                                    A hybrid social and event platform designed to combine event ticketing with community engagement features. <br /><br />
                                    The platform allows users to sell tickets for events while also providing a social layer where users can post, interact, and engage around events and community activities.
                                    It functions both as a ticketing system and a social platform, enabling event organizers to promote events while building a community presence around them.
                                    The system is designed to increase event visibility, encourage participation, and create a continuous engagement loop between organizers and users.
                                </p>
                            </div>
                            <div className={styles.btnWrapper}>
                                <MyButton text="Get Started" className="btn_black" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Mockups */}
                    <div className="col-lg-6 position-relative">
                        <div className={styles.phones}>
                            <Image
                                src="/case-study/project-shape.webp"
                                alt="Phones Mockup"
                                width={684}
                                height={669}
                                priority
                                className={styles.phonesImg}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudyProject;
