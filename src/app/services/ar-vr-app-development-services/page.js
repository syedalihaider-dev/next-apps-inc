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
    title: "AR/VR App Development | Next App",
    description: "Next App delivers expert AR/VR app development alongside web development, e-commerce, game development, and custom software.",
};

const tabs = [
    {
        id: 'planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'AR and VR projects require careful planning; early wrong technical choices can ruin the experience. Our team defines your use case, hardware, tracking needs, and content strategy, then scopes the project with honest estimates for development, 3D assets, and testing timelines.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: 'Immersive experience design differs from flat-screen apps by creating spatial wireframes and storyboards that guide user movement, object placement, interaction triggers, and flow. This phase clarifies concepts and aligns your team before 3D work begins.',
        image: '/services/wireframes.webp'
    },
    {
        id: 'prototype',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'We create a functional AR or VR prototype that can be worn or used with a phone. This proof-of-concept showcases core spatial interactions, allowing you to validate the experience aligned with your goals before full production.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'development',
        label: 'Development',
        title: 'Development',
        description: 'Our developers build your AR or VR application using Unity or Unreal Engine, integrating ARKit, ARCore, or WebXR based on your target platforms. 3D modelers, animators, and engineers work in parallel sprints, delivering iterative builds for testing throughout, not just at the end.',
        image: '/services/development.webp'
    },
    {
        id: 'quality',
        label: 'Quality Control',
        title: 'Quality Control',
        description: "AR and VR QA tests dimensions standard app testing doesn't cover, such as tracking stability, latency, motion sickness risk, spatial accuracy, and rendering performance on various devices. We test on all supported headsets and mobiles, optimize frame rates, and ensure comfort during extended use.",
        image: '/services/quality-control.webp'
    },
    {
        id: 'deployment',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'We handle app store submissions for iOS, Android AR, Meta Quest, SteamVR, and other platform VR deployments. Post-launch, we monitor performance, gather user feedback, and iterate, as immersive tech evolves fast and your product should too.',
        image: '/services/deployment-and-launch.webp'
    }
];

const ARVRAppDevelopmentPage = () => {
    return (
        <main>
            <ServiceInnerBanner 
                badge="AR/VR App Development Services"
                title={
                    <>
                        Step <span className={styles.purpleText}>Inside</span> the <span className={styles.purpleText}>Experience.</span> Your <span className={styles.purpleText}>Users</span> Will <span className={styles.purpleText}>Never</span> Look Back.
                    </>
                }
                description="Augmented and virtual reality are rewriting how people shop, learn, train, and explore. We build AR/VR applications that don't just impress, they change the way your users interact with your brand."
                bgImage="/services/ar-vr-banner-bg.png"
            />
            <ServiceSection 
                heading="The Real Business Case for "
                purpleText="AR/VR — and How We Build It"
                description="AR and VR are no longer futuristic novelties. Retailers use AR for virtual try-ons. Manufacturers use VR for safety training. The AR/VR team has built immersive experiences across industries, using Unity, ARKit, ARCore, and Unreal Engine. We start with your business goal, not the technology."
                features={[
                    "Expert Unity/Unreal Developers",
                    "Custom 3D Asset Creation",
                    "Spatial Interaction Design",
                    "Multi-Platform Support"
                ]}
                mockupImage="/services/ar-vr-hand-mockup.png"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection />
            <CompanyChoiceSection />
            <ProcessTabs 
                heading={<>Our <span className={styles.purpleText}>AR/VR App Development</span> Approach Makes It <span className={styles.purpleText}>Simple</span>, <span className={styles.purpleText}>Easy</span>, & <span className={styles.purpleText}>Efficient</span></>}
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

export default ARVRAppDevelopmentPage;
