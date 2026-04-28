'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import styles from './Services.module.css';
import MyButton from '@/components/layout/MyButton';

const Services = () => {
    const swiperRef = useRef(null);

    const servicesData = [
        {
            icon: "/services-icon-01.webp",
            title: "Mobile <br /> Application",
            description: "We design and build mobile apps for iOS and Android that people actually want to open. From consumer apps to enterprise tools, every build is performance-first, brand-consistent, and built to retain users past the first session."
        },
        {
            icon: "/services-icon-02.webp",
            title: "E-commerce <br /> Development",
            description: "We build online stores and marketplaces that convert browsers into buyers. Custom storefronts, seamless checkout flows, integrated payment gateways, and backend architecture to handle real traffic from launch day through peak season."
        },
        {
            icon: "/service-icon-03.webp",
            title: "Game <br /> Development",
            description: "We develop mobile games, Unity experiences, and interactive entertainment products that keep players engaged. From hyper-casual to mid-core, our game teams handle concept, development, art, and live-ops strategy."
        },
        {
            icon: "/service-icon-fullstack.webp",
            title: "Web <br /> Development",
            description: "We build web platforms, SaaS dashboards, and full-stack solutions that perform under pressure. Our engineering teams work across the modern stack to deliver products that are fast, secure, and built to grow with your business."
        },
        {
            icon: "/service-icon-fullstack.webp",
            title: "Software <br/> Solutions",
            description: "When off-the-shelf tools do not fit, we build the thing that does. Custom software, internal tools, workflow automation, and system integrations that reduce friction and give your team the infrastructure to operate at its best."
        }
    ];

    return (
        <section className={styles.servicesSection}>
            <Image
                src="/services-bg.webp"
                alt="services Background"
                fill
                priority
                className={styles.backgroundImage}
            />
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <div className={styles.headerArea}>
                            <span className={styles.badge}>WHAT WE DO</span>
                            <h2 className={styles.heading}>
                                One <span className="secondarytxt">Technology Partner</span> for <br /> Every
                                <span className="secondarytxt"> Digital Need</span>.
                            </h2>
                        </div>
                    </div>
                </div>

                <div className={styles.sliderWrapper}>
                    <button
                        className={`${styles.navBtn} ${styles.prevBtn}`}
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <Image src="/arrow-icon.webp" alt="prev" width={40} height={40} className={styles.prevArrow} />
                    </button>

                    <div className={styles.cardsScroll}>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                576: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1400: { slidesPerView: 4 },
                            }}
                            className={styles.mySwiper}
                        >
                            {servicesData.map((service, index) => (
                                <SwiperSlide key={index}>
                                    <div className={styles.serviceCard}>
                                        <div className={styles.iconBox}>
                                            <Image src={service.icon} alt={service.title} width={45} height={45} />
                                        </div>
                                        <h4 className={styles.cardTitle} dangerouslySetInnerHTML={{ __html: service.title }}></h4>
                                        <p className={`${styles.cardDescription} scroll_block`}>{service.description}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <button
                        className={`${styles.navBtn} ${styles.nextBtn}`}
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <Image src="/arrow-icon.webp" alt="next" width={40} height={40} />
                    </button>
                </div>

                <div className="d-flex justify-content-center mt-5">
                    <MyButton text="Get Started" className="btn_black" />
                </div>
            </div>
        </section>
    );
};

export default Services;
