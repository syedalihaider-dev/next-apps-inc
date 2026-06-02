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
    title: "Finance App Development | Next Apps",
    description: "Next Apps builds powerful finance digital solutions — from mobile apps and web platforms to e-commerce and custom software. Serving businesses globally.",
};

const FinanceAppPage = () => {
    const services = [
        {
            title: 'Digital Banking & <br/>Neobank Platforms',
            description: 'Full-stack digital banking solutions with account management, transfers, cards, and personalized financial insights built for the modern consumer.',
            active: false
        },
        {
            title: ' Investment & Portfolio <br/>Management Apps',
            description: 'Intuitive investment platforms with real-time market data, portfolio tracking, automated rebalancing, and personalized financial planning tools.',
            active: false
        },
        {
            title: 'Payment Gateway & <br/>Wallet Integration',
            description: 'Secure, multi-currency payment systems with support for cards, bank transfers, crypto, and digital wallets — built for global transactions.',
            active: false
        },
        {
            title: 'Accounting & Financial <br/>Management Software',
            description: 'Custom accounting platforms with invoicing, payroll, expense tracking, tax automation, and real-time financial reporting capabilities.',
            active: false
        },
        {
            title: 'Lending & Credit <br/>Management Systems',
            description: 'End-to-end loan origination, credit scoring, and repayment management platforms with automated KYC/AML compliance workflows.',
            active: false
        },
        {
            title: 'RegTech & Compliance <br/>Monitoring Tools',
            description: 'Automated regulatory compliance monitoring, audit trail tracking, and risk management dashboards tailored to financial industry standards.',
            active: false
        }
    ];

    const tabs = [
        {
            id: 'security',
            title: 'Bank-Grade Data Encryption',
            contentTitle: 'Bank-Grade Data Encryption',
            contentDesc: 'AES-256 encryption, secure APIs, and zero-trust architecture to protect every transaction and user record at rest and in transit.',
            // icon: '/industries/finance-app-development/tab-icon-01.webp', 
            image: '/industries/finance-app-development/tab-mockup-01.webp' 
        },
        {
            id: 'real-time',
            title: 'Real-Time Transaction Processing',
            contentTitle: 'Real-Time Transaction Processing',
            contentDesc: 'High-performance payment processing engines capable of handling millions of daily transactions with sub-second response times.',
            // icon: '/industries/finance-app-development/tab-icon-02.webp',
            image: '/industries/finance-app-development/tab-mockup-02.webp'
        },
        {
            id: 'automation',
            title: 'KYC/AML Compliance Integration',
            contentTitle: 'KYC/AML Compliance Integration',
            contentDesc: 'Automated Know Your Customer and Anti-Money Laundering workflows with identity verification, document scanning, and risk scoring.',
            // icon: '/industries/finance-app-development/tab-icon-03.webp',
            image: '/industries/finance-app-development/tab-mockup-03.webp'
        },
        {
            id: 'analytics',
            title: 'Multi-Currency & Cross-Border Support',
            contentTitle: 'Multi-Currency & Cross-Border Support',
            contentDesc: 'Global financial platforms with real-time FX rates, multi-currency wallets, and international payment routing built in from day one.',
            // icon: '/industries/finance-app-development/tab-icon-04.webp',
            image: '/industries/finance-app-development/tab-mockup-04.webp'
        }
    ];

    return (
        <main>
            <IndustryBanner 
                industryLabel="Finance Industry"
                mainTitle={<>The Future of Finance Is <span style={{ color: 'var(--primary-color)' }}>Digital</span>. We'll <span style={{ color: 'var(--primary-color)' }}>Help</span> You Lead <span style={{ color: 'var(--primary-color)' }}>It.</span></>}
                // highlightedPart={<> </>}
                description="From fintech startups to established financial institutions, we build secure, scalable, and regulation-ready digital platforms that redefine how money moves, how data is analyzed, and how customers engage with financial services."
                bgImage="/industries/finance-app-development/banner-bg.webp" 
            />
            
            <IndustryServicesSection 
                title="<span style='color: var(--primary-color)'>Finance App Development</span> Solutions Built for <span style='color: var(--primary-color)'>Security</span>, <span style='color: var(--primary-color)'>Scale</span>, and <span style='color: var(--primary-color)'>Compliance</span>"
                description="Financial software can't afford bugs, downtime, or security gaps. Our fintech development team builds banking platforms, investment tools, payment systems, and accounting applications with enterprise-grade security and the agility of a modern digital product."
                servicesData={services}
                mockupImage="/industries/finance-app-development/services-mockup.webp" 
            />

            <IndustryConsultationSection 
                title={<><span style={{ color: 'var(--primary-color)' }}>Financial Technology</span> That Earns <span style={{ color: 'var(--primary-color)' }}>Trust</span> and Keeps It</>}
                subLabel="Finance is built on trust."
                description="Every app we build is engineered with a security-first architecture, regulatory compliance, and the reliability your customers and regulators demand. We're not just developers — we're your long-term fintech partner."
            />

            <IndustryTabsSection 
                title={<><span style={{ color: 'var(--primary-color)' }}>Finance App</span> Features That Protect <span style={{ color: 'var(--primary-color)' }}>Assets</span>, Accelerate Transactions, and <span style={{ color: 'var(--primary-color)' }}>Delight Customers</span></>}
                description="We build robust, scalable solutions backed by years of experience serving businesses across Healthcare, Finance, E-Commerce, and Education — powered by technology that drives real results."
                tabsData={tabs}
            />

            <IndustryFeaturesSection />
            <IndustrySolutionsSlider/>\
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

export default FinanceAppPage;
