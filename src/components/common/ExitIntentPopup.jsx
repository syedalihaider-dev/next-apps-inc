"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './ExitIntentPopup.module.css';

const ExitIntentPopup = () => {
    const router = useRouter();
    const [showExitPopup, setShowExitPopup] = useState(false);
    const [exitFormData, setExitFormData] = useState({ name: '', phone: '' });
    const [exitStatus, setExitStatus] = useState({ loading: false, success: false, error: null });

    useEffect(() => {
        const handleMouseLeave = (e) => {
            // e.clientY <= 20 detects when mouse goes to the top (towards tabs)
            if (e.clientY <= 20) {
                setShowExitPopup(true);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const handleExitSubmit = async (e) => {
        e.preventDefault();
        setExitStatus({ loading: true, success: false, error: null });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: exitFormData.name,
                    phone: exitFormData.phone,
                    email: 'no-email@exitpopup.com', // Optional field bypass
                    budget: 'Not Specified',
                    services: ['Exit Intent Popup Lead'],
                    pageUrl: window.location.href
                })
            });

            const result = await response.json();

            if (response.ok) {
                setExitStatus({ loading: false, success: true, error: null });
                setExitFormData({ name: '', phone: '' });
                setTimeout(() => setShowExitPopup(false), 2000);
                router.push('/thank-you');
            } else {
                setExitStatus({ loading: false, success: false, error: result.error || 'Failed to submit form' });
            }
        } catch (error) {
            setExitStatus({ loading: false, success: false, error: 'Network error. Please try again later.' });
        }
    };

    if (!showExitPopup) return null;

    return (
        <div className={styles.exitPopupOverlay}>
            <div className={styles.exitPopup}>
                <button className={styles.closePopupBtn} onClick={() => setShowExitPopup(false)}>&times;</button>
                <h3 className="text-center mb-4 text-dark">Let's do a zero-pressure, 10-minute introduction call to see if we're a match.</h3>
                <form onSubmit={handleExitSubmit} className="row g-3">
                    <div className="col-12">
                        <input type="text" name="name" value={exitFormData.name} onChange={(e) => setExitFormData({...exitFormData, name: e.target.value})} className="form-control py-3" placeholder="Name" required />
                    </div>
                    <div className="col-12">
                        <input type="tel" name="phone" value={exitFormData.phone} onChange={(e) => setExitFormData({...exitFormData, phone: e.target.value})} className="form-control py-3" placeholder="Phone Number" required />
                    </div>
                    {exitStatus.error && <div className="col-12 text-danger mb-1 mt-2">{exitStatus.error}</div>}
                    {exitStatus.success && <div className="col-12 text-success mb-1 mt-2">Form submitted successfully!</div>}
                    <div className="col-12 mt-4">
                        <button type="submit" className={`w-100 ${styles.submitBtn}`} disabled={exitStatus.loading}>
                            {exitStatus.loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ExitIntentPopup;
