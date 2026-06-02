import styles from './Banner.module.css';
import Image from 'next/image';
// import VerticalSlider from '@/components/home/VerticalSlider';
import MyButton from '@/components/layout/MyButton';

const Banner = () => {
    const slider1 = ['/banner-slider/01.webp', '/banner-slider/02.webp', '/banner-slider/03.webp', '/banner-slider/04.webp'];
    const slider2 = ['/banner-slider/05.webp', '/banner-slider/06.webp', '/banner-slider/07.webp', '/banner-slider/08.webp'];
    const slider3 = ['/banner-slider/09.webp', '/banner-slider/10.webp', '/banner-slider/11.webp', '/banner-slider/01.webp'];

    return (
        <section className={styles.bannerSection}>
            <video autoPlay loop muted playsInline className={styles.videoBackground}>
                <source src="/video/banner-video.webm" type="video/webm" />
            </video>
            <Image
                src="/banner-bg.webp"
                alt="Banner Background"
                fill
                priority
                className={styles.backgroundImage}
            />

            {/* Absolute Slider Wrapper */}
            {/* <div className={styles.absoluteSliderWrapper}>
                <div className="row g-3">
                    <div className="col-4">
                        <VerticalSlider images={slider1} direction="down" />
                    </div>
                    <div className="col-4">
                        <VerticalSlider images={slider2} direction="up" />
                    </div>
                    <div className="col-4">
                        <VerticalSlider images={slider3} direction="down" />
                    </div>
                </div>
            </div> */}

            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <div className={styles.contentWrapper}>
                            <h1 className={styles.heading}>
                                Your <span className="primarytxt">Idea Deserves </span> a Smarter  <span className="primarytxt">Digital Plan</span>.
                            </h1>
                            <p className={styles.paragraph}>
                                You have an idea. We have the team, the tools, and the track record to turn it into a product people actually use. From mobile apps and e-commerce platforms to game development and full-stack software, Next Apps delivers digital solutions that are built to perform, designed to impress, and engineered to scale.
                            </p>
                            <div className="mt-4 d-flex gap-3 flex-wrap">
                                <MyButton text="Get Started" className="popupBtn" />
                                <MyButton text="Live Chat" className="chat btn_white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Banner;
