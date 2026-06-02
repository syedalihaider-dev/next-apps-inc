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
    title: "Android App Development Services | Next App",
    description: "Next Apps delivers expert android app development alongside web development, e-commerce, game development, and custom software. Get a free consultation today.",
};

const tabs = [
    {
        id: 'planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'Our analysts help turn your Android app idea into a clear project scope, outlining features, resources, timelines, costs, and optimization opportunities without sacrificing quality.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "Before coding, we sketch all screens and user journeys. Wireframes outline structure, navigation, and interactions for review and refinement before development.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'prototype',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'A working prototype lets stakeholders interact with the app before it is built. We demo it, collect feedback, and lock in decisions early so the development phase moves without detours.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'development',
        label: 'Development',
        title: 'Development',
        description: 'Our Android engineers develop in Kotlin and Java with clean architecture. Each feature is optimized for performance across all Android devices, from budget to flagship models.',
        image: '/services/development.webp'
    },
    {
        id: 'quality',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'We test on hundreds of device profiles, screen sizes, and Android versions. Our QA checks for crashes, performance issues, accessibility problems, and Play Store compliance before shipping.',
        image: '/services/quality-control.webp'
    },
    {
        id: 'deployment',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'From Play Store listing setup to staged rollout and post-launch monitoring, we manage every step of the release so your launch lands exactly as planned.',
        image: '/services/deployment-and-launch.webp'
    }
];

const AndroidAppDevelopmentPage = () => {
    return (
        <main>
            <ServiceInnerBanner 
                badge="Android App Development Services"
                title={
                    <>
                    Turn Your <span className={styles.purpleText}>Idea</span> Into an <span className={styles.purpleText}>Android</span> App That <span className={styles.purpleText}>Users</span> Can't Put <span className={styles.purpleText}>Down</span>
                    </>
                }
                description="From concept to the Play Store, we build Android apps that perform beautifully, scale effortlessly, and solve real problems for real people, across every device, every screen size."
                bgImage="/services/android-banner-bg.png"
            />
            <ServiceSection 
                heading="Why Android Development Is More "
                purpleText="Than Just Writing Code"
                description="A great Android app requires deep knowledge of the platform, an eye for UX, and the engineering discipline to build something that scales. At Next App, our Android developers have shipped dozens of apps across retail, healthcare, fintech, and logistics, each one built for the full range of Android devices and user expectations."
                features={[
                    "Certified Developers",
                    "Custom Design",
                    "Scalable Systems",
                    "Smooth Integration"
                ]}
                mockupImage="/services/android-hand-mockup.png"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection />
            <CompanyChoiceSection />
            <ProcessTabs 
                heading={<>Our <span className={styles.purpleText}>Android App Development</span> Approach Makes It <span className={styles.purpleText}>Simple</span>, <span className={styles.purpleText}>Easy</span>, & <span className={styles.purpleText}>Efficient</span></>}
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

export default AndroidAppDevelopmentPage;
