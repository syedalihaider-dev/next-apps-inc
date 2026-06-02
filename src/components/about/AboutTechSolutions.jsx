import Image from 'next/image';
import styles from './AboutTechSolutions.module.css';
import MyButton from '@/components/layout/MyButton';

const AboutTechSolutions = () => {
    return (
        <section className={styles.techSection}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-3 mb-lg-0">
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/about/tech-experts.webp"
                                alt="30+ Experts"
                                width={600}
                                height={600}
                                className={styles.heroImage}
                            />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className={styles.textContent}>
                            <h2 className={styles.heading}>
                                <span className="primarytxt">Next Apps </span>
                                Presents Revolutionary<br />
                                <span className={styles.relativeText}>
                                    Trending Tech Solutions
                                </span>
                            </h2>
                            <p className={styles.paragraph}>
                                At Next App, we build innovative and high-performance mobile and web applications that help businesses grow in a fast-changing digital world. From idea to execution, our team focuses on delivering modern, scalable, and user-friendly solutions tailored to your business needs.
                            </p>

                            <div className="mt-4">
                                <MyButton text="Get Started" className="btn_black" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTechSolutions;
