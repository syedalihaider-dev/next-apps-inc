'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ProcessTabs.module.css';
import MyButton from '@/components/layout/MyButton';

const ProcessTabs = ({ heading, purpleText, tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const activeContent = tabs.find(tab => tab.id === activeTab);

    return (
        <section className={styles.processTabsSection}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className={styles.headerArea}>
                            <h2 className={styles.heading}>
                                {heading} <span className={styles.purpleText}>{purpleText}</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className={styles.tabsContainer}>
                            {tabs.map((tab) => (
                                <div
                                    key={tab.id}
                                    className={`${styles.tabItem} ${activeTab === tab.id ? styles.activeTab : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {activeTab === tab.id && <span className={styles.tabBorder}></span>}
                                    {tab.label}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className={styles.contentCard}>
                            <div className="row g-0 align-items-center">
                                <div className="col-lg-12">
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={activeContent.image}
                                            alt={activeContent.title}
                                            width={800}
                                            height={500}
                                            className={styles.contentImage}
                                        />
                                    </div>
                                    <div className={styles.textContent}>
                                        <h3 className={styles.contentTitle}>{activeContent.title}</h3>
                                        <p className={styles.paragraph}>{activeContent.description}</p>
                                        <div className="mt-4">
                                            <MyButton text="Explore More" className="btn_black" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessTabs;
