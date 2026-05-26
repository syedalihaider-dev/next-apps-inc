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
    title: "Wearable App Development | Next App",
    description: "Next App builds expert wearable app development solutions, from Apple Watch and Wear OS apps to fitness trackers and IoT-connected wearables. Get a free consultation today.",
};

const tabs = [
    {
        id: 'planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'We define which wearable platforms your product targets, what sensor data it needs, how it communicates with the companion mobile app, and what the battery impact budget looks like, all before development begins.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "Wearable wireframes are miniaturized and touch-first. We design for glanceability, one-tap interactions, and micro-content layouts that work on screens measured in millimetres, not inches.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'prototype',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'We build a working prototype on the target wearable hardware so you can experience the app on wrist before it is built in full. Physical testing at the prototype stage saves significant rework during development.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'development',
        label: 'Development',
        title: 'Development',
        description: 'Our engineers build companion apps alongside wearable counterparts, managing data sync, background refresh, notification scheduling, and health sensor integration across watchOS and Wear OS with clean, battery-conscious code.',
        image: '/services/development.webp'
    },
    {
        id: 'quality',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'We test on physical wearable hardware across multiple watch sizes and OS versions, validating real-time sync, notification delivery, sensor accuracy, and background process behaviour under realistic usage conditions.',
        image: '/services/quality-control.webp'
    },
    {
        id: 'deployment',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'We manage App Store and Play Store submission for both the companion app and the wearable extension, handle review communication, and monitor post-launch performance across paired device combinations.git',
        image: '/services/deployment-and-launch.webp'
    }
];

const WearableAppDevelopmentPage = () => {
    return (
        <main>
            <ServiceInnerBanner 
                badge="Wearable App Development"
                title={
                    <>
                    Your <span className={styles.purpleText}>Wrist.</span> Your <span className={styles.purpleText}>Data.</span> <span className={styles.purpleText}>Your </span> App. <span className={styles.purpleText}></span>
                    </>
                }
                description="Wearable technology is no longer a novelty, it is a primary data channel for healthcare, fitness, enterprise, and consumer brands. We build native and companion wearable apps for Apple Watch, Wear OS, Fitbit, and custom IoT devices that connect seamlessly with your iOS and Android ecosystem.."
                bgImage="/services/wearable-app-banner-bg.png"
            />
            <ServiceSection 
                heading="Built for the Wrist, Designed  "
                purpleText="for Real-Time Use"
                description="Building for wearables requires a different discipline than building for phones. Every interaction must be faster, every screen more focused, and every data exchange more efficient. Here is how we approach every wearable development engagement."
                features={[
                    "Certified Developers",
                    "Custom Design",
                    "Scalable Systems",
                    "Smooth Integration"
                ]}
                mockupImage="/services/wearable-app-hand-mockup.png"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection />
            <CompanyChoiceSection />
            <ProcessTabs 
                heading={<>Our <span className={styles.purpleText}>Wearable App Development</span> Approach Makes It <span className={styles.purpleText}>Simple</span>, <span className={styles.purpleText}>Easy</span>, & <span className={styles.purpleText}>Efficient</span></>}
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

export default WearableAppDevelopmentPage;
