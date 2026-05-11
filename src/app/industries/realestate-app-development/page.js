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
    title: " Real Estate App Development | Next Apps",
    description: "Next Apps builds powerful real estate digital solutions — from property search apps and agent CRMs to listing platforms, virtual tour tools, and property management software. Serving businesses globally.",
};

const HealthcareAppPage = () => {
    const services = [
        {
            title: ' Property Search  & <br/> Listing Platforms',
            description: 'Custom real estate portals with advanced search filters, map-based browsing, MLS/IDX feed integration, saved searches, and property alert systems for buyers, renters, and investors.',
            active: false
        },
        {
            title: 'Agent CRM &  <br/>Transaction Management',
            description: 'Purpose-built CRM platforms for real estate agents and brokerages — with lead management, pipeline tracking, offer management, document workflows, and commission reporting.',
            active: false
        },
        {
            title: 'Virtual Tour &  <br/>3D Visualization Apps',
            description: 'Immersive virtual tour applications, 3D floor plan tools, and augmented reality staging features that let buyers experience properties remotely before scheduling a physical visit.',
            active: false
        },
        {
            title: ' Property Management  <br/> & Landlord Apps',
            description: 'Comprehensive property management platforms with tenant portals, rent collection, maintenance request systems, lease management, and financial reporting for residential and commercial landlords.',
            active: false
        },
        {
            title: 'PropTech & Investment  <br/> Analysis Tools',
            description: 'Real estate investment platforms with ROI calculators, rental yield analysis, market data feeds, portfolio tracking, and deal flow management for professional property investors.',
            active: false
        },
        {
            title: 'New Development &  <br/> Off-Plan Sales Platforms',
            description: 'Custom sales platforms for real estate developers with unit configuration tools, reservation management, payment schedule tracking, and buyer communication portals for off-plan projects..',
            active: false
        }
    ];

    const tabs = [
        {
            id: 'telehealth',
            title: 'MLS/IDX Integration & Live Listings',
            contentTitle: 'MLS/IDX Integration & Live Listings',
            contentDesc: 'Real-time MLS and IDX data feed integration that keeps property listings accurate, up-to-date, and compliant with board data rules across any geographic market.',
            icon: '/industries/healthcare-app-development/tab-icon-01.webp',
            image: '/industries/healthcare-app-development/tab-mockup-01.webp'
        },
        {
            id: 'patient-monitoring',
            title: 'Smart Search & Geospatial Discovery',
            contentTitle: 'Smart Search & Geospatial Discovery',
            contentDesc: 'AI-powered property search with polygon drawing, commute time filters, school district overlays, and neighbourhood data integration — helping buyers find the right property, not just any property.',
            icon: '/industries/healthcare-app-development/tab-icon-01.webp',
            image: '/industries/healthcare-app-development/tab-mockup-01.webp'
        },
        {
            id: 'billing',
            title: 'Digital Transaction & e-Signature Workflows',
            contentTitle: 'Digital Transaction & e-Signature Workflows',
            contentDesc: 'Paperless transaction management with e-signature integration, offer submission workflows, document management, and compliance checklists that reduce deal timelines and errors.',
            icon: '/industries/healthcare-app-development/tab-icon-01.webp',
            image: '/industries/healthcare-app-development/tab-mockup-01.webp'
        },
        {
            id: 'analytics',
            title: 'Tenant & Maintenance Management',
            contentTitle: 'Tenant & Maintenance Management',
            contentDesc: 'Self-service tenant portals for rent payment, maintenance requests, lease renewal, and communication — reducing property manager workload while improving tenant satisfaction and retention.',
            icon: '/industries/healthcare-app-development/tab-icon-01.webp',
            image: '/industries/healthcare-app-development/tab-mockup-01.webp'
        }
    ];

    // const solutions = [
    //     {
    //         title: 'Doctor Consultation Apps',
    //         description: 'Custom apps that allow patients to book appointments, consult with specialists, and receive care from the comfort of their homes.',
    //         image: '/industries/solution-1.webp',
    //         active: false
    //     },
    //     {
    //         title: 'Health Tracking Wearables',
    //         description: 'Integrate mobile apps with IoT-enabled medical devices for real-time health monitoring and emergency alert systems.',
    //         image: '/industries/solution-2.webp',
    //         active: false
    //     },
    //     {
    //         title: 'Medical Training Apps',
    //         description: 'Interactive VR/AR and mobile learning platforms for medical students and professionals to enhance their clinical skills.',
    //         image: '/industries/solution-3.webp',
    //         active: false
    //     },
    //     {
    //         title: 'Wellness & Nutrition',
    //         description: 'Engaging apps that provide personalized meal plans, exercise routines, and wellness coaching for a healthier lifestyle.',
    //         image: '/industries/solution-4.webp',
    //         active: false
    //     }
    // ];

    return (
        <main>
            <IndustryBanner 
                industryLabel="Realestate Industry"
                mainTitle={<><span style={{ color: 'var(--primary-color)' }}>Real Estate Moves Fast.</span> Build the Platform<span style={{ color: 'var(--primary-color)' }}> that Moves </span> With It.</>}
                // highlightedPart={<> <span style={{ color: 'var(--primary-color)' }}>Get Better</span> <span style={{ color: '#fff' }}>and</span> <span style={{ color: 'var(--primary-color)' }}>Stay That Way.</span></>}
                description="From property portals and brokerage platforms to PropTech startups and property managers, we build digital solutions that help buyers find homes faster, agents close deals smarter, and landlords manage portfolios with less friction."
                bgImage="/industries/healthcare-app-development/banner-bg.webp" 
            />

            <IndustryServicesSection 
                title="<span style='color: var(--primary-color)'>Real Estate App Development</span> Solutions <br/> Built for Agents, <span style='color: var(--primary-color)'>Buyers,</span> and Property <span style='color: var(--primary-color)'>Managers</span> "
                description="Real estate transactions are the highest-stakes purchases most people make. Digital tools in this process must earn trust at each step. We create property search platforms, agent CRM, transaction management tools, virtual tour apps, and property management systems designed for the real estate industry’s complexity in residential, commercial, and rental markets."
                servicesData={services}
                mockupImage="/industries/healthcare-app-development/services-mockup.webp" // Placeholder
            />
   
            <IndustryConsultationSection 
                title={<>Real Estate Technology That <span style={{ color: 'var(--primary-color)' }}>Closes More Deals and</span> Builds Better Relationships</>}
                subLabel="The best agents and property businesses succeed "             
                description=" not just on price but on experience—benefiting buyers, renters, and investors. Our platforms are designed for that: intuitive search, reliable data, seamless transactions that foster referrals. We build for both ends of the deal. "
            />

            <IndustryTabsSection 
                title={<><span style={{ color: 'var(--primary-color)' }}>Real Estate</span> Features That Find <br/> Buyers Faster, <span style={{ color: 'var(--primary-color)' }}>Close Deals Smarter, </span> and Manage <span style={{ color: 'var(--primary-color)' }}>Properties Better</span></>}
                description="We build robust, scalable solutions backed by years of experience serving businesses across Healthcare, Finance, E-Commerce, and Education — powered by technology that drives real results."
                tabsData={tabs}
            />

            <IndustryFeaturesSection 
                title={<>Healthcare <span style={{ color: 'var(--primary-color)' }}>Mobile App </span> Features to Build Successful <span style={{ color: 'var(--primary-color)' }}>Medical Platforms</span></>}
                description="We deliver mission-critical medical projects successfully with our expert team of healthcare tech specialists."
            />

            <IndustrySolutionsSlider 
                title={<>Next-Gen <span style={{ color: 'var(--primary-color)' }}>Real Estate App</span> Solutions <br /> For <span className="highlightWrapper"><span className="highlightText">Modern Medicine</span></span> Needs</>}
                // solutionsData={solutions}
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

export default HealthcareAppPage;
