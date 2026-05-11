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
    title: "Automotive App Development | Next Apps",
    description: "Next Apps develops automotive digital solutions, from dealer management and fleet platforms to EV charging and connected vehicle software, serving global businesses.",
};

const HealthcareAppPage = () => {
    const services = [
        {
            title: ' Dealer Management  <br/> System (DMS) Apps',
            description: 'Custom dealer management platforms with inventory management, CRM, F&I tools, service scheduling, and real-time reporting for single-point and dealer group operations.',
            active: false
        },
        {
            title: ' Fleet Management & <br/> Telematics Platforms',
            description: 'End-to-end fleet management apps with GPS tracking, driver behaviour monitoring, maintenance scheduling, fuel analytics, and route optimization for commercial vehicle operators.',
            active: false
        },
        {
            title: 'Connected Vehicle  <br/>& IoT Applications',
            description: 'Over-the-air update systems, vehicle health monitoring apps, and connected car platforms that turn vehicle data into actionable insights for both drivers and service teams.',
            active: false
        },
        {
            title: 'EV Charging Network  <br/> Management',
            description: 'Charge point operator platforms with network management, session billing, reservation systems, and driver-facing mobile apps for electric vehicle infrastructure operators.',
            active: false
        },
        {
            title: 'Mobility-as-a-Service  <br/> (MaaS) Platforms',
            description: 'Ride-sharing, car subscription, and multi-modal mobility platforms with dynamic pricing, driver matching, trip management, and integrated payment processing.',
            active: false
        },
        {
            title: 'Automotive E-Commerce <br/> & Parts Platforms',
            description: 'Online parts catalogues, service booking systems, and automotive e-commerce platforms built to handle complex fitment data, bulk ordering, and nationwide delivery logistics.',
            active: false
        }
    ];

    const tabs = [
        {
            id: 'telehealth',
            title: 'Real-Time Vehicle & Asset Tracking',
            contentTitle: 'Real-Time Vehicle & Asset Tracking',
            contentDesc: 'Live GPS tracking with geofencing, trip history, idle time alerts, and asset utilization reporting — across any fleet size, any vehicle type.',
            icon: '/industries/healthcare-app-development/tab-icon-01.webp',
            image: '/industries/healthcare-app-development/tab-mockup-01.webp'
        },
        {
            id: 'patient-monitoring',
            title: 'Predictive Maintenance Scheduling',
            contentTitle: 'Predictive Maintenance Scheduling',
            contentDesc: 'AI-driven maintenance forecasting that uses mileage, engine data, and service history to predict failures before they happen and schedule service proactively.',
            icon: '/industries/healthcare-app-development/tab-icon-01.webp',
            image: '/industries/healthcare-app-development/tab-mockup-01.webp'
        },
        {
            id: 'billing',
            title: 'Digital Retailing & Online Deal Tools',
            contentTitle: 'Digital Retailing & Online Deal Tools',
            contentDesc: 'Customer-facing digital retailing tools that let buyers build their deal, estimate trade-in value, apply for financing, and reserve a vehicle — all before setting foot in the dealership.',
            icon: '/industries/healthcare-app-development/tab-icon-01.webp',
            image: '/industries/healthcare-app-development/tab-mockup-01.webp'
        },
        {
            id: 'analytics',
            title: 'Driver Behaviour & Safety Monitoring',
            contentTitle: 'Driver Behaviour & Safety Monitoring',
            contentDesc: 'Telematics-based driver scoring with harsh braking, speeding, and distraction detection — reducing accident risk and insurance premiums for commercial fleet operators..',
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
                industryLabel="Automotive Industry"
                mainTitle={<> The <span style={{ color: 'var(--primary-color)' }}>Automotive Industry</span> Is Going Digital.<span style={{ color: 'var(--primary-color)' }}> We Build the </span> Software That Drives It.</>}
                // highlightedPart={<> <span style={{ color: 'var(--primary-color)' }}>Get Better</span> <span style={{ color: '#fff' }}>and</span> <span style={{ color: 'var(--primary-color)' }}>Stay That Way.</span></>}
                description="From dealerships and fleet operators to OEMs and mobility startups, we build automotive platforms that connect vehicles, teams, and customers in ways that legacy systems never could. Your digital transformation starts with the right development partner."
                bgImage="/industries/healthcare-app-development/banner-bg.webp" 
            />
            
            <IndustryServicesSection 
                title="<span style='color: var(--primary-color)'>Automotive App Development</span> Solutions <br/> Built for the <span style='color: var(--primary-color)'> Road </span> <span style='color: var(--primary-color)'>Ahead</span> "
                description="The automotive industry is increasingly complex and full of digital innovation opportunities. We develop dealer management systems, fleet tracking, EV charging networks, connected vehicle apps, and mobility solutions that convert digital investments into operational efficiency."
                servicesData={services}
                mockupImage="/industries/healthcare-app-development/services-mockup.webp" // Placeholder
            />

            <IndustryConsultationSection 
                title={<>Automotive Technology That <span style={{ color: 'var(--primary-color)' }}> Keeps Operations Moving</span> and Customers Coming Back</>}
                subLabel="The automotive industry runs on precision, timing, and trust."             
                description=" A dealer whose DMS goes down loses deals. A fleet operator with a broken tracking system loses visibility. We build automotive software with the reliability, real-time performance, and user experience that modern automotive businesses require."
            />

            <IndustryTabsSection 
                title={<><span style={{ color: 'var(--primary-color)' }}>Insurance App</span> Features That Optimize  <br/> Operations, Protect Assets, and <span style={{ color: 'var(--primary-color)' }}>Delight Drivers</span><span style={{ color: 'var(--primary-color)' }}></span></>}
                description="We build robust, scalable solutions backed by years of experience serving businesses across Healthcare, Finance, E-Commerce, and Education — powered by technology that drives real results."
                tabsData={tabs}
            />

            <IndustryFeaturesSection 
                title={<>Healthcare <span style={{ color: 'var(--primary-color)' }}>Mobile App </span> Features to Build Successful <span style={{ color: 'var(--primary-color)' }}>Medical Platforms</span></>}
                description="We deliver mission-critical medical projects successfully with our expert team of healthcare tech specialists."
            />

            <IndustrySolutionsSlider 
                title={<>Next-Gen <span style={{ color: 'var(--primary-color)' }}>Automotive App</span> Solutions <br /> For <span className="highlightWrapper"><span className="highlightText">Modern Medicine</span></span> Needs</>}
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
