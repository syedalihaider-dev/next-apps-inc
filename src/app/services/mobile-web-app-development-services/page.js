import ServiceInnerBanner from '@/components/services/ServiceInnerBanner';
import styles from '@/components/services/ServiceInnerBanner.module.css';
import ServiceSection from '@/components/services/ServiceSection';
import AwardsSection from '@/components/common/AwardsSection';
import ServicesListSection from '@/components/services/ServicesListSection';
import DevelopmentSolutionsSection from '@/components/services/DevelopmentSolutionsSection';
import CompanyChoiceSection from '@/components/services/CompanyChoiceSection';
import ProcessTabs from '@/components/services/ProcessTabs';
import WhyChooseAppSection from '@/components/common/WhyChooseAppSection';
import CaseStudy from "@/components/common/CaseStudy";
import TechStackSection from '@/components/common/TechStackSection';
import IndustriesSection from '@/components/common/IndustriesSection';
import Appointment from "@/components/common/Appointment";
import Testimonials from "@/components/common/Testimonials";
import ContactSection from "@/components/common/ContactSection";

export const metadata = {
    title: "Mobile Web App Development | Next App",
    description: "Next App delivers expert mobile web app development alongside web development, e-commerce, game development, and custom software. Get a free consultation today.",
};

const tabs = [
    {
        id: 'planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'We evaluate your business case for a PWA versus a native app, then define the full project scope, core features, offline capabilities, integration requirements, and hosting strategy. You receive a clear plan with accurate cost estimates and a realistic launch timeline from day one.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "Mobile web apps demand a different design discipline — every screen must work perfectly in a browser while feeling like a native app. Our wireframing phase maps out every user flow with this in mind, producing a visual guide that balances mobile UX best practices with your brand's identity.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'prototype',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'We build a working prototype of your PWA that you can open in any mobile browser and interact with directly. This gives you a true preview of load speed, offline behavior, and overall feel — allowing for real feedback before full development investment is made.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'development',
        label: 'Development',
        title: 'Development',
        description: 'Our engineers build your PWA using modern frameworks like React, Vue, or Next.js with full-service worker implementation, web app manifests, and API integration. Agile delivery means you receive working builds throughout — testable in any browser, on any device, at every sprint.',
        image: '/services/development.webp'
    },
    {
        id: 'quality',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'We test your mobile web app across every major browser, device type, and network condition — including offline and slow-connection scenarios. Performance audits using Lighthouse ensure your PWA meets the highest standards for speed, accessibility, and SEO before going live.',
        image: '/services/quality-control.webp'
    },
    {
        id: 'deployment',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: "There's no App Store review for a PWA — which means faster deployment and simpler updates. We handle server configuration, CDN setup, HTTPS certification, and go-live monitoring, ensuring your mobile web app launches cleanly and performs reliably from the moment users arrive.",
        image: '/services/deployment-and-launch.webp'
    }
];

const MobileWebAppDevelopmentPage = () => {
    return (
        <main>
            <ServiceInnerBanner 
                badge="Mobile Web App Development"
                title={
                    <>
                    Your <span className={styles.purpleText}>Website</span> Shouldn't <span className={styles.purpleText}>Feel Like</span> a Website. It Should Feel Like an <span className={styles.purpleText}>App.</span>
                    </>
                }
                description="Progressive web apps blur the line between browser and native experience. We build mobile web apps that load instantly, work offline, and behave like the real thing, no App Store required."
                bgImage="/services/mobile-web-banner-bg.webp"
            />
            <ServiceSection 
                heading="Why Progressive Web Apps Are the Smart "
                purpleText="Choice for Growing Businesses"
                description="Not every product needs to be in the App Store. Progressive web apps (PWAs) give your users an app-like experience directly from their browser, with offline access, push notifications, and home screen installation. They're faster to build, easier to update, and more accessible than native apps. "
                features={[
                    "Progressive Web Apps (PWA)",
                    "Responsive Web Design",
                    "High-Speed Performance",
                    "SEO Optimized Solutions"
                ]}
                mockupImage="/services/ios-hand-mockup.webp"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection />
            <CompanyChoiceSection />
            <ProcessTabs 
                heading={<>Our <span className={styles.purpleText}>Mobile Web App Development</span> Approach Makes It <span className={styles.purpleText}>Simple</span>, <span className={styles.purpleText}>Easy</span>, & <span className={styles.purpleText}>Efficient</span></>}
                tabs={tabs}
            />
            <WhyChooseAppSection />
            <CaseStudy />
            <TechStackSection />
            <IndustriesSection />
            <Appointment />
            <Testimonials />
            <ContactSection />
        </main>
    );
};

export default MobileWebAppDevelopmentPage;
