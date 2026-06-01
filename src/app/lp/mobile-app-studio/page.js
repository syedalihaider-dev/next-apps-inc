"use client"
import React from 'react'
import { Montserrat, DM_Sans } from 'next/font/google'
import Header from '@/components/lp/MobileAppStudio/Header'
import Banner from '@/components/lp/MobileAppStudio/Banner'
import LeadingPartner from '@/components/lp/MobileAppStudio/LeadingPartner'
import AwardsSlider from '@/components/lp/MobileAppStudio/AwardsSlider'
import Services from '@/components/lp/MobileAppStudio/Services'
import Portfolio from '@/components/lp/MobileAppStudio/Portfolio'
import CTA from '@/components/lp/MobileAppStudio/CTA'
import Process from '@/components/lp/MobileAppStudio/Process'
import ToolsMaster from '@/components/lp/MobileAppStudio/ToolsMaster'
import Testimonials from '@/components/lp/MobileAppStudio/Testimonials'
import Industries from '@/components/lp/MobileAppStudio/Industries'
import EngagementModels from '@/components/lp/MobileAppStudio/EngagementModels'
import FAQs from '@/components/lp/MobileAppStudio/FAQs'
// import Location from '@/components/lp/home/LocationSection'
import ContactForm from '@/components/lp/MobileAppStudio/ContactForm'
import Footer from '@/components/lp/MobileAppStudio/Footer'
import Popup from '@/components/lp/MobileAppStudio/Popup'
import styles from './page.module.css'
import Image from 'next/image'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
    variable: '--font-montserrat',
    display: 'swap',
})

const dmsans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-dmsans',
    display: 'swap',
})

const Page = () => {
    return (
        <main className={`${styles.lpMobileAppStudio} ${montserrat.variable} ${dmsans.variable}`}>
            <Header />
            <Banner />
            <LeadingPartner />
            <AwardsSlider />
            <Services />
            <Portfolio />
            <CTA />
            <Process />
            <div className={styles.cover}>
                <Image src="/lp/mobile-app-studio/cover-bg.png" alt="cover" fill className={styles.coverImg} />
                <ToolsMaster />
                <Testimonials />
            </div>
            <Industries />
            <EngagementModels />
            <FAQs />
            {/* <Location /> */}
            <ContactForm />
            <Footer />
        </main>
    )
}

export default Page
