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
    title: "App Prototyping | Next App",
    description: " Next App delivers expert app prototyping services — from wireframes and clickable mockups to interactive MVP demos. Validate your idea before full investment.",
};

const tabs = [
    {
        id: 'planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: "We define the prototype's scope, demo needs, audience, and decision points to stay focused and prevent scope creep before development.",
        image: '/services/project-planning.webp'
    },
    {
        id: 'wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "We begin with low-fidelity wireframes to outline user flow and screen structure, allowing quick, cost-effective changes before finalizing the architecture.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'prototype',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'We build a high-fidelity interactive prototype in Figma or directly in your target framework. You get something that looks and behaves like the real app so feedback is specific, not speculative.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'development',
        label: 'Development',
        title: 'Development',
        description: 'We build functional prototypes in the actual tech stack, making them the foundation of the real product with no throwaway work or translation loss.',
        image: '/services/development.webp'
    },
    {
        id: 'quality',
        label: 'Quality Control',
        title: 'Quality Control',
        description: "We review prototypes for flow, interaction, and edge cases before presenting them. A confusing prototype isn't useful feedback but a design problem to fix first.",
        image: '/services/quality-control.webp'
    },
    {
        id: 'deployment',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'We share prototypes via shareable links, testflight builds, or live staging environments, whichever gets the right feedback from the right people fastest.',
        image: '/services/deployment-and-launch.webp'
    }
];

const AppPrototypingPage = () => {
    return (
        <main>
            <ServiceInnerBanner 
                badge="App Prototyping"
                title={
                    <>
                    See Your <span className={styles.purpleText}>App Before </span> It's Built. <span className={styles.purpleText}> Ship It  </span>With <span className={styles.purpleText}> Confidence.</span><span className={styles.purpleText}></span>
                    </>
                }
                description="Building without prototyping is the most expensive way to discover a product problem. Our app prototyping service turns your concept into a clickable, testable, investor-ready demonstration in days, not months  so you validate your idea before committing full development resources."
                bgImage="/services/app-prototyping-banner-bg.png"
            />
            <ServiceSection     
                heading="Digital Solutions That Drive "
                purpleText=" Measurable Growth"
                description="We build robust, scalable solutions backed by years of experience serving businesses across Healthcare, Finance, E-Commerce, and Education  powered by technology that drives real results."
                features={[
                    "Certified Developers",
                    "Custom Design",
                    "Scalable Systems",
                    "Smooth Integration"
                ]}
                mockupImage="/services/app-prototyping-hand-mockup.png"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection />
            <CompanyChoiceSection />
            <ProcessTabs 
                heading={<>Our <span className={styles.purpleText}>App Prototyping</span> Approach Makes It <span className={styles.purpleText}>Simple</span>, <span className={styles.purpleText}>Easy</span>, & <span className={styles.purpleText}>Efficient</span></>}
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

export default AppPrototypingPage;
