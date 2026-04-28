'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './CaseStudy.module.css';

const CaseStudy = () => {
    const caseStudies = [
        {
            title: "Yes Table",
            industry: "Food & Restaurant Tech",
            team: "BA | QA | Design | Frontend | Backend | App Developers",
            bg: "/case-study-bg-01.webp",
            icon: "/case-study-icon-01.webp",
            mockup: "/case-study-01.webp",
        },
        {
            title: "Love On Life",
            industry: "Events & Social",
            team: "BA | QA | Design | Frontend | Backend | App Developers",
            bg: "/case-study-bg-02.webp",
            icon: "/case-study-icon-02.webp",
            mockup: "/case-study-02.webp",
        },
        {
            title: "Marhofer Renewables",
            industry: "Field Service & Clean Energy",
            team: "BA | QA | Design | Frontend | Backend | App Developers",
            bg: "/case-study-bg-03.webp",
            icon: "/case-study-icon-03.webp",
            mockup: "/case-study-03.webp",
        }
    ];

    return (
        <section className={styles.caseStudySection}>
            <div className="container">
                <div className={styles.headerArea}>
                    <span className={styles.badge}>CASE STUDY</span>
                    <h2 className={styles.heading}>
                        <span className={styles.underlinedText}>
                            Problems We've
                        </span> <span className="secondarytxt">Solved</span>
                    </h2>
                </div>
            </div>
            <div className={`${styles.sliderWrapper}`}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={false}
                    breakpoints={{
                        768: { slidesPerView: 1 },
                        991: { slidesPerView: 2 },
                        1600: { slidesPerView: 3 },
                    }}
                    className={styles.casesSwiper}
                >
                    {caseStudies.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.caseStudyCard}>
                                <Image
                                    src={item.bg}
                                    alt={item.title}
                                    fill
                                    className={styles.cardBgImg}
                                />
                                <div className={styles.cardContent}>
                                    <div className={styles.cardIcon}>
                                        <Image src={item.icon} alt="icon" width={40} height={40} />
                                    </div>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardIndustry}>Industry: <span>{item.industry}</span></p>

                                    <div className={styles.teamBox}>
                                        <h4 className={styles.teamHeading}>Team Involved</h4>
                                        <p className={styles.teamList}>{item.team}</p>
                                    </div>

                                    <Link href="/case-studies" className={styles.viewBtn}>View Case Study</Link>
                                </div>
                                <div className={styles.mockupImg}>
                                    <Image src={item.mockup} alt="mockup" width={287} height={353} priority />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CaseStudy;
