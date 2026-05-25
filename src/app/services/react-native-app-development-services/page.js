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
    title: "React Native App Development | Next App",
    description: "Next App offers expert React Native development for cross-platform iOS and Android apps with native UI, supported by Meta, trusted by Discord, Shopify, and Microsoft.",
};

const tabs = [
    {
        id: 'planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: "We map your product requirements against React Native's capabilities, define the feature set, allocate resources, and set delivery milestones so both sides start aligned and stay that way.",
        image: '/services/project-planning.webp'
    },
    {
        id: 'wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "We sketch every screen and user path in wireframe form before writing code. This keeps design decisions fast, cheap, and free from the assumptions that cause costly revisions later.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'prototype',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'We build a working prototype on the actual React Native stack so you can test interactions on a real device, validate the concept with stakeholders, and sign off before full development begins.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'development',
        label: 'Development',
        title: 'Development',
        description: 'Our engineers use the latest React Native, clean architecture, reusable hooks, and native modules for performance, resulting in a native-feeling app.',
        image: '/services/development.webp'
    },
    {
        id: 'quality',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'We test on real iOS and Android devices across multiple OS versions, checking for performance regressions, layout issues, and API integration stability before anything goes to production.',
        image: '/services/quality-control.webp'
    },
    {
        id: 'deployment',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'We prepare your builds for both App Store and Play Store, handle submission requirements, and stay with you through the review process until your app is live.',
        image: '/services/deployment-and-launch.webp'
    }
];

const ReactNativeAppDevelopmentPage = () => {
    return (
        <main>
            <ServiceInnerBanner 
                badge="React Native App Development"
                title={
                    <>
                    JavaScript Power. <span className={styles.purpleText}>Native Feel.</span> Both <span className={styles.purpleText}>Platforms.</span> <span className={styles.purpleText}></span><span className={styles.purpleText}></span>
                    </>
                }
                description="React Native is Meta's open-source framework that renders native UI components, not web views, on iOS and Android from a shared JavaScript codebase. It powers apps like Discord, Shopify, Microsoft Office, and Walmart. We build apps that feel native and scale by sharing one codebase."
                bgImage="/services/android-banner-bg.webp"
            />
            <ServiceSection  
                heading="JavaScript Efficiency With "
                purpleText="Native App Quality"
                description="React Native development combines the productivity of JavaScript with the performance of native components. Our React Native engineers bring full-stack mobile expertise, from architecture through App Store submission, to every engagement."
                features={[
                    "Certified Developers",
                    "Custom Design",
                    "Scalable Systems",
                    "Smooth Integration"
                ]}
                mockupImage="/services/ios-hand-mockup.webp"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection />
            <CompanyChoiceSection />
            <ProcessTabs 
                heading={<>Our <span className={styles.purpleText}>React Native App </span> Development <span className={styles.purpleText}> Approach Makes</span> It Simple,<span className={styles.purpleText}> Easy, </span> & <span className={styles.purpleText}>Efficient</span></>}
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

export default ReactNativeAppDevelopmentPage;
