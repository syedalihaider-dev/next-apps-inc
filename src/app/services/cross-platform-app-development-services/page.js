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
    title: "Cross-Platform App Development Services | Next App",
    description: "Next App delivers expert cross-platform app development alongside web development, e-commerce, game development, and custom software. Get a free consultation today.",
};

const tabs = [
    {
        id: 'planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'We begin by assessing whether Flutter or React Native is the right fit for your product, audience, and business goals. Our analysts define the project scope, create a shared feature roadmap for both platforms, and produce cost and timeline estimates that reflect the true efficiency of cross-platform development.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: 'We design a unified wireframe that works beautifully across iOS and Android, accounting for platform-specific conventions while maintaining a consistent experience. This shared visual blueprint speeds up the design process and ensures both platforms feel intentional, not compromised.',
        image: '/services/wireframes.webp'
    },
    {
        id: 'prototype',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'You get an interactive prototype that works on both iOS and Android simultaneously, letting you experience the cross-platform result firsthand. Feedback gathered here shapes the final product before development begins, reducing costly revisions and keeping the project on track.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'development',
        label: 'Development',
        title: 'Development',
        description: 'Our engineers build your app using Flutter or React Native, writing shared business logic while handling platform-specific nuances where needed. Agile sprints keep you involved throughout, with regular builds delivered to both iOS and Android for testing and review at every stage.',
        image: '/services/development.webp'
    },
    {
        id: 'quality',
        label: 'Quality Control',
        title: 'Quality Control',
        description: "Cross-platform doesn't mean half-tested. We run full QA cycles on both iOS and Android, checking for platform-specific rendering issues, performance parity, and native integration accuracy. Every device type, screen size, and OS version is covered before we call it done.",
        image: '/services/quality-control.webp'
    },
    {
        id: 'deployment',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'We manage simultaneous submission to both the App Store and Google Play, coordinating review cycles, preparing store assets for both platforms, and ensuring a synchronized launch. Your app goes live on iOS and Android at the same time, with no delays and no shortcuts.',
        image: '/services/deployment-and-launch.webp'
    }
];

const CrossPlatformAppDevelopmentPage = () => {
    return (
        <main>
            <ServiceInnerBanner 
                badge="Cross Platform App Development"
                title={
                    <>
                    One <span className={styles.purpleText}> App.</span> Every <span className={styles.purpleText}>Device.</span> Zero Compromise on <span className={styles.purpleText}>Experience.</span>
                    </>
                }
                description="Why build twice when you can build once and reach everyone? Our cross-platform apps deliver native-quality experiences on iOS and Android from a single, maintainable codebase."
                bgImage="/services/cross-platform-banner-bg.png"
            />
            <ServiceSection 
                heading="Cross-Platform Done Right : "
                purpleText="Speed Without Sacrificing Quality"
                description="Many teams treat cross-platform as a shortcut. We treat it as a strategy. Using Flutter and React Native, we build apps that look, feel, and perform like native apps — while dramatically reducing development time and cost. This means you reach both iOS and Android audiences simultaneously, without the overhead of two separate teams. "
                features={[
                    "Flutter & React Native Experts",
                    "Single Codebase Efficiency",
                    "Native-Like Performance",
                    "Rapid Market Entry"
                ]}
                mockupImage="/services/cross-platform-hand-mockup.png"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection />
            <CompanyChoiceSection />
            <ProcessTabs 
                heading={<>Our <span className={styles.purpleText}>Cross Platform App Development</span> Approach Makes It <span className={styles.purpleText}>Simple</span>, <span className={styles.purpleText}>Easy</span>, & <span className={styles.purpleText}>Efficient</span></>}
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

export default CrossPlatformAppDevelopmentPage;
