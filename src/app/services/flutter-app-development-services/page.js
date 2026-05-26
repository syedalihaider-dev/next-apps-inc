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
    title: "Flutter App Development | Next App",
    description: "Next App delivers expert Flutter app development, one codebase, native iOS and Android performance. Build faster, ship sooner, and reach both platforms without doubling your budget.",
};

const tabs = [
    {
        id: 'planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'We assess whether Flutter is the right fit for your product, define the feature roadmap, set platform targets, and plan the Dart architecture before a single widget is built.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "Every screen, component, and navigation pattern is wireframed and approved before development begins. Flutter's widget model makes design decisions binding early, speeding up the process.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'prototype',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'We spin up a Flutter prototype quickly using hot reload so you can see and feel the real app on a device. Stakeholders get to interact before the full build, which makes feedback faster and cheaper.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'development',
        label: 'Development',
        title: 'Development',
        description: 'Our Flutter engineers write clean Dart code with well-structured state management, custom widgets, and seamless API integrations. The output is a single codebase that performs natively on every platform.',
        image: '/services/development.webp'
    },
    {
        id: 'quality',
        label: 'Quality Control',
        title: 'Quality Control',
        description: "We test on real iOS and Android devices, checking rendering consistency, performance under load, and integration stability. Flutter's single codebase means fixes apply everywhere at once.",
        image: '/services/quality-control.webp'
    },
    {
        id: 'deployment',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'We package your Flutter app for App Store and Play Store, handle signing and compliance, and walk you through the submission process until your app is live on every targeted platform..',
        image: '/services/deployment-and-launch.webp'
    }
];

const FlutterAppDevelopmentPage = () => {
    return (
        <main>
            <ServiceInnerBanner 
                badge="Flutter App Development"
                title={
                    <>
                    One  <span className={styles.purpleText}>Codebase.</span> Two <span className={styles.purpleText}>Platforms. </span>Zero <span className={styles.purpleText}> Compromise.</span><span className={styles.purpleText}></span>
                    </>
                }
                description="Flutter is Google's open-source UI framework that compiles Dart code to native ARM binaries, enabling iOS and Android apps from one codebase that perform like native and look perfect on every screen. We build Flutter apps for startups and enterprises needing both platforms without doubling development costs."
                bgImage="/services/flutter-banner-bg.png"
            />
            <ServiceSection   
                heading="Cross-Platform Flutter Apps "
                purpleText="Built to Perform"
                description="Flutter’s architecture requires a different development discipline than native platforms. Our Flutter engineers combine Dart expertise with UI design sensibilities to deliver apps that are fast, maintainable, and consistent across all devices and screen sizes."
                features={[
                    "Certified Developers",
                    "Custom Design",
                    "Scalable Systems",
                    "Smooth Integration"
                ]}
                mockupImage="/services/flutter-hand-mockup.png"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection />
            <CompanyChoiceSection />
            <ProcessTabs 
                heading={<>Our <span className={styles.purpleText}>Flutter App Development</span> Approach Makes It <span className={styles.purpleText}>Simple</span>, <span className={styles.purpleText}>Easy</span>, & <span className={styles.purpleText}>Efficient</span></>}
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

export default FlutterAppDevelopmentPage    ;
