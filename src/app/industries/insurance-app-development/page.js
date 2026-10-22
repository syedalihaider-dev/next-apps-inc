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

const InsuranceAppPage = () => {
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

    const insuranceFeatures1 = [
        {
            title: 'Quick Quotes',
            content: 'Customers receive personalized quotes in minutes through guided forms, smart pricing, and clear side-by-side coverage comparisons.'
        },
        {
            title: 'Policy Hub & Renewals',
            content: 'Policyholders review documents, coverage, and payment history, then renew in a few taps from one dashboard.'
        },
        {
            title: 'Easy Claims',
            content: 'File claims with photos and guided steps, then follow live status updates from submission through settlement.'
        },
        {
            title: 'Smart Damage Estimates',
            content: 'Image-based analysis, automated validation, and faster decisions shorten manual review and get customers back to normal.'
        },
        {
            title: 'Premium Payments, Perfectly Timed',
            content: 'Customers pay by card, wallet, or bank transfer, with autopay choices and well-timed reminders before renewal.'
        },
        {
            title: 'Always-On ID Cards',
            content: 'Proof of insurance appears instantly, works without any internet, and refreshes automatically whenever coverage details change.'
        }
    ];

    const insuranceFeatures2 = [
        {
            title: 'Talk To Advisors',
            content: 'Policyholders reach licensed agents through in-app chat, video calls, and scheduled consultations for truly tailored guidance.'
        },
        {
            title: 'Compare Plans With Confidence',
            content: 'Deductibles, benefits, and coverage limits sit side by side so customers pick protection that truly fits.'
        },
        {
            title: 'Usage-Based Cover',
            content: 'Driving data, behavior scores, and safe-driver rewards help customers earn lower premiums through better everyday habits.'
        },
        {
            title: 'Paperless Signing & Uploads',
            content: 'Customers upload IDs and forms, pass automated checks, and sign with legally binding e-signatures from anywhere.'
        },
        {
            title: 'Fraud Spotting Intelligence',
            content: 'Pattern analysis, anomaly alerts, and risk scores flag suspicious claims early and shield insurers from losses.'
        },
        {
            title: 'Privacy-First Data Safeguards',
            content: 'Encryption, access controls, and audit trails protect policyholder data while meeting GDPR and regional regulatory requirements.'
        }
    ];

    const insuranceSolutions = [
        {
            title: 'Motor Insurance Apps',
            description: 'Speedy apps with instant quotes, digital ID cards, roadside help, and photo-based claims for auto insurers.',
            image: '/industries/solution-1.webp',
            active: false
        },
        {
            title: 'Life & Health Cover',
            description: 'Friendly apps with plan comparisons, beneficiary tools, wellness rewards, and claim submission for life insurers.',
            image: '/industries/solution-2.webp',
            active: false
        },
        {
            title: 'Property Protection Platforms',
            description: 'Sturdy platforms with policy management, damage reporting, inspection booking, and secure document storage for property insurers.',
            image: '/industries/solution-3.webp',
            active: false
        },
        {
            title: 'Broker Workflow Portals',
            description: 'Efficient portals with lead tracking, quoting, policy issuance, and commission reports for agents and brokerages.',
            image: '/industries/solution-4.webp',
            active: false
        }
    ];

    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "Insurance App Development",
    "description": "Next Apps Inc builds policy management systems, claims automation platforms, agent portals, and customer-facing apps for InsurTech startups and established carriers. Our insurance solutions handle real-world complexity with compliance-ready architecture.",
    "brand": {
        "@type": "brand",
        "name": "Next Apps Inc"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "ratingCount": "1645"
    }
}` }} />
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

            <IndustryFeaturesSection
                title={<>Policyholder-Friendly <span style={{ color: 'var(--primary-color)' }}>Mobile Features</span> That Make Coverage Feel Truly <span style={{ color: 'var(--primary-color)' }}>Effortless</span></>}
                description="Our Award-Winning Team Of Developers, Designers, And Project Managers Builds Dependable Insurance Platforms That Turn Paperwork Into Simple, Digital Experiences For Every Policyholder."
                mockupImage="/industries/feature-phones.webp"
                features1={insuranceFeatures1}
                features2={insuranceFeatures2}
            />
            <IndustrySolutionsSlider
                title={<>Modern Insurtech Apps <span style={{ color: 'var(--primary-color)' }}>Built Around Every</span> Coverage Need</>}
                solutionsData={insuranceSolutions}
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

export default InsuranceAppPage;
