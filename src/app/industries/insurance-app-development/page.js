import IndustryBanner from '@/components/industries/IndustryBanner';
import IndustryServicesSection from '@/components/industries/IndustryServicesSection';
import IndustryConsultationSection from '@/components/industries/IndustryConsultationSection';
import IndustryTabsSection from '@/components/industries/IndustryTabsSection';
import IndustryFeaturesSection from '@/components/industries/IndustryFeaturesSection';
import WhyChooseAppSection from '@/components/common/WhyChooseAppSection';
import IndustrySolutionsSlider from '@/components/common/IndustrySolutionsSlider';
import CaseStudy from "@/components/common/CaseStudy";
import TechStackSection from '@/components/common/TechStackSection';
import IndustriesSection from '@/components/common/IndustriesSection';
import Appointment from "@/components/common/Appointment";
import Testimonials from "@/components/common/Testimonials";
import ContactSection from "@/components/common/ContactSection";

export const metadata = {
    title: "Insurance App Development | Next Apps",
    description: "Next Apps builds powerful insurance digital solutions from mobile apps and web platforms to custom software and policy management systems. Serving businesses globally.",
};

const HealthcareAppPage = () => {
    const services = [
        {
            title: ' Policy Management & <br/> Quoting Platforms',
            description: 'End-to-end digital policy administration with online quoting engines, instant coverage binding, renewal automation, and multi-line policy management for brokers and direct carriers.',
            active: false
        },
        {
            title: ' Claims Processing &  <br/>Automation Apps',
            description: 'Digital first notice of loss (FNOL) systems, claims intake apps, automated fraud detection, and claims status portals that reduce processing time and improve customer satisfaction.',
            active: false
        },
        {
            title: 'Agent & <br/>Broker Portals',
            description: 'Custom producer portals with real-time commission tracking, pipeline management, policy issuance tools, and integrated CRM functionality for independent agents and captive brokers.',
            active: false
        },
        {
            title: 'Customer Self-Service <br/> Apps & Portals',
            description: 'Mobile and web apps that let policyholders view coverage, make payments, submit claims, request certificates, and communicate with their agent — 24/7, without a phone call.',
            active: false
        },
        {
            title: 'InsurTech & Embedded <br/> Insurance Platforms',
            description: 'Next-generation embedded insurance solutions, parametric insurance apps, and usage-based insurance platforms powered by IoT, telematics, and real-time data feeds.',
            active: false
        },
        {
            title: 'Regulatory Compliance & <br/> Reporting Tools',
            description: 'Automated compliance monitoring, regulatory filing systems, audit trail dashboards, and state-specific compliance workflows built for insurers operating across multiple jurisdictions..',
            active: false
        }
    ];

    const tabs = [
        {
            id: 'telehealth',
            title: 'Real-Time Policy & Coverage Data',
            contentTitle: 'Real-Time Policy & Coverage Data',
            contentDesc: 'Instant access to live policy data, coverage limits, endorsements, and document retrieval — for agents, adjusters, and policyholders simultaneously.',
            icon: '/industries/insurance-app-development/tab-icon-01.png',
            image: '/industries/insurance-app-development/tab-icon-01.png',
        },
        {
            id: 'patient-monitoring',
            title: 'Automated Claims Workflows',
            contentTitle: 'Automated Claims Workflows',
            contentDesc: 'Intelligent claims routing, automated adjudication for qualifying claims, and escalation rules that keep complex cases moving without manual bottlenecks.',
            icon: '/industries/insurance-app-development/tab-icon-02.png',
            image: '/industries/insurance-app-development/tab-icon-02.png',
        },
        {
            id: 'billing',
            title: 'Secure Document Management',
            contentTitle: 'Secure Document Management',
            contentDesc: 'Encrypted document storage, e-signature integration, and automated document generation for policies, certificates, endorsements, and claims correspondence.',
            icon: '/industries/insurance-app-development/tab-icon-03.png',
            image: '/industries/insurance-app-development/tab-icon-03.png',
        },
        {
            id: 'analytics',
            title: 'Multi-State Compliance Engine',
            contentTitle: 'Multi-State Compliance Engine',
            contentDesc: 'Rule-based compliance frameworks that adapt policy language, coverage requirements, and disclosure standards to each state or jurisdiction automatically.',
            icon: '/industries/insurance-app-development/tab-icon-04.png',
            image: '/industries/insurance-app-development/tab-icon-04.png',
        }
    ];


    return (
        <main>
            <IndustryBanner 
                industryLabel="Insurance Industry"
                mainTitle={<> The <span style={{ color: 'var(--primary-color)' }}>Insurance Industry</span> Is Changing. Your<span style={{ color: 'var(--primary-color)' }}> Digital Platform </span> Should Lead the Way.</>}
                // highlightedPart={<> <span style={{ color: 'var(--primary-color)' }}>Get Better</span> <span style={{ color: '#fff' }}>and</span> <span style={{ color: 'var(--primary-color)' }}>Stay That Way.</span></>}
                description="From InsurTech startups to established carriers, we build secure, scalable, and compliance-ready digital platforms that modernize how policies are sold, claims are processed, and customers are served — all without replacing what already works."
                bgImage="/industries/insurance-app-development/banner-bg.png" 
            />
            
            <IndustryServicesSection 
                title="<span style='color: var(--primary-color)'>Insurance App Development</span> Solutions <br/> Built for Real Compliance, <span style='color: var(--primary-color)'>Speed,</span> and Customer <span style='color: var(--primary-color)'>Trust</span> "
                description="Insurance is one of the most complex industries to digitize and one of the most rewarding when done right. We build policy management systems, claims automation platforms, agent portals, and customer-facing apps that handle real-world insurance complexity without hiding it behind bad UX."
                servicesData={services}
                mockupImage="/industries/insurance-app-development/services-mockup.png" // Placeholder
            />

            <IndustryConsultationSection 
                title={<>Insurance Technology That <span style={{ color: 'var(--primary-color)' }}>Earns Policyholder</span> Trust and Keeps It</>}
                subLabel="Insurance customers do not forgive bad digital experiences —"             
                description=" they switch carriers. Every platform we build is engineered for the regulatory complexity, data security requirements, and the kind of seamless user experience that keeps policyholders from comparing alternatives."
            />

            <IndustryTabsSection 
                title={<><span style={{ color: 'var(--primary-color)' }}>Insurance App</span> Features That Protect <br/> Policyholders, Accelerate <span style={{ color: 'var(--primary-color)' }}>Claims,</span> and <span style={{ color: 'var(--primary-color)' }}>Simplify Operations</span></>}
                description="We build robust, scalable solutions backed by years of experience serving businesses across Healthcare, Finance, E-Commerce, and Education — powered by technology that drives real results."
                tabsData={tabs}
            />

            <IndustryFeaturesSection />
            <IndustrySolutionsSlider/>
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

export default HealthcareAppPage;
