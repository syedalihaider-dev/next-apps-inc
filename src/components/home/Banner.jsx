"use client";
import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import VerticalSlider from '@/components/home/VerticalSlider';
import MyButton from '@/components/layout/MyButton';

const Banner = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        budget: ''
    });
    const [status, setStatus] = useState({ loading: false, success: false, error: null });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    budget: formData.budget,
                    services: formData.service ? [formData.service] : [],
                    pageUrl: window.location.href
                })
            });

            const result = await response.json();

            if (response.ok) {
                setStatus({ loading: false, success: true, error: null });
                setFormData({ name: '', phone: '', email: '', service: '', budget: '' });
                router.push('/thank-you');
            } else {
                setStatus({ loading: false, success: false, error: result.error || 'Failed to submit form' });
            }
        } catch (error) {
            setStatus({ loading: false, success: false, error: 'Network error. Please try again later.' });
        }
    };

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
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12 mb-5 mb-lg-0">
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
                    
                    <div className="col-lg-5 col-md-12">
                        <div className={styles.formWrapper}>
                            <h3 className="text-white mb-4 fw-bold">Let's Discuss Your Project</h3>
                            <form className="row g-3" onSubmit={handleSubmit}>
                                <div className="col-md-6 col-12">
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control py-3" placeholder="Name" required />
                                </div>
                                <div className="col-md-6 col-12">
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-control py-3" placeholder="Phone Number" required />
                                </div>
                                <div className="col-12">
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control py-3" placeholder="Email Address" required />
                                </div>
                                <div className="col-md-6 col-12">
                                    <select name="service" value={formData.service} onChange={handleChange} className="form-select py-3" required>
                                        <option value="" disabled>Select a Service</option>
                                        <option value="Mobile App">Mobile App</option>
                                        <option value="Website">Website</option>
                                        <option value="Custom Software">Custom Software</option>
                                        <option value="Game">Game</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <div className="col-md-6 col-12">
                                    <select name="budget" value={formData.budget} onChange={handleChange} className="form-select py-3" required>
                                        <option value="" disabled>Select Your Budget</option>
                                        <option value="$3000 to $5000">$3000 to $5000</option>
                                        <option value="$5000 to $10000">$5000 to $10000</option>
                                        <option value="$10000 to $25000">$10000 to $25000</option>
                                        <option value="$25000 to $50000">$25000 to $50000</option>
                                    </select>
                                </div>
                                {status.error && <div className="col-12 text-danger mb-1 mt-2">{status.error}</div>}
                                {status.success && <div className="col-12 text-success mb-1 mt-2">Form submitted successfully!</div>}
                                <div className="col-12 mt-3">
                                    <button type="submit" className={`w-100 ${styles.submitBtn}`} disabled={status.loading}>
                                        {status.loading ? 'Submitting...' : 'Book a Quick Intro'}
                                    </button>
                                </div>
                                <div className="col-12 text-center mt-3">
                                    <Link href="/about-us" className="text-white text-decoration-underline" style={{ fontSize: '15px', opacity: 0.8, letterSpacing: '0.5px' }}>Just browsing</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default Banner;
