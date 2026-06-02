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
    title: "Healthcare App Development | Next Apps",
    description: "Next Apps builds powerful healthcare digital solutions — from mobile apps and web platforms to e-commerce and custom software. Serving businesses globally.",
};

const HealthcareAppPage = () => {
    const services = [
        {
            title: 'Telemedicine & Remote <br/> Consultation Apps',
            description: 'HIPAA-compliant video consultation platforms with scheduling, e-prescriptions, and secure messaging built for the modern patient journey.',
            active: false
        },
        {
            title: 'Patient Management <br/>& EHR Portals',
            description: 'Custom patient portals and Electronic Health Record systems that give clinicians instant access to critical data while keeping patients informed.',
            active: false
        },
        {
            title: 'Healthcare Analytics & <br/>Reporting Dashboards',
            description: 'Real-time dashboards that surface clinical insights, patient trends, and operational KPIs to help administrators make faster, smarter decisions.',
            active: false
        },
        {
            title: 'Medical Device & <br/> IoT Integration',
            description: 'Seamlessly connect wearables, monitors, and medical IoT devices to your digital platform for continuous, real-time patient data streams.',
            active: false
        },
        {
            title: 'Pharmacy & Medication <br/> Management Apps',
            description: 'Digitize prescription management, refill reminders, and medication adherence tracking — reducing errors and improving patient compliance.',
            active: false
        },
        {
            title: 'Mental Health & <br/>Wellness Platforms',
            description: 'Compassionate digital experiences for mental health providers — including therapy scheduling, mood tracking, crisis support tools, and journaling features.',
            active: false
        }
    ];

    const tabs = [
        {
            id: 'telehealth',
            title: 'HIPAA-Compliant Data Architecture',
            contentTitle: 'HIPAA-Compliant Data Architecture',
            contentDesc: 'Every data flow, storage layer, and API endpoint is built to meet HIPAA standards without compromising speed or usability.',
            icon: '/industries/healthcare-app-development/tab-icon-01.webp',
            image: '/industries/healthcare-app-development/tab-mockup-01.webp'
        },
        {
            id: 'patient-monitoring',
            title: 'Secure Video Consultations',
            contentTitle: 'Secure Video Consultations',
            contentDesc: 'Low-latency, encrypted telehealth video sessions with waiting rooms, session recording, and multi-party support.',
            icon: '/industries/healthcare-app-development/tab-icon-01.webp',
            image: '/industries/healthcare-app-development/tab-mockup-01.webp'
        },
        {
            id: 'billing',
            title: 'Appointment Scheduling & Reminders',
            contentTitle: 'Appointment Scheduling & Reminders',
            contentDesc: 'Smart scheduling systems with automated SMS/email reminders that reduce no-shows and optimize provider calendars.',
            icon: '/industries/healthcare-app-development/tab-icon-01.webp',
            image: '/industries/healthcare-app-development/tab-mockup-01.webp'
        },
        {
            id: 'analytics',
            title: 'Electronic Health Records Integration',
            contentTitle: 'Electronic Health Records Integration',
            contentDesc: 'Deep integration with major EHR systems including Epic, Cerner, and HL7 FHIR APIs for seamless data exchange.',
            icon: '/industries/healthcare-app-development/tab-icon-01.webp',
            image: '/industries/healthcare-app-development/tab-mockup-01.webp'
        }
    ];

    
    return (
        <main>
            <IndustryBanner 
                industryLabel="Healthcare Industry"
                mainTitle={<><span style={{ color: 'var(--primary-color)' }}>Technology</span> That Helps <span style={{ color: 'var(--primary-color)' }}>People</span></>}
                highlightedPart={<> <span style={{ color: 'var(--primary-color)' }}>Get Better</span> <span style={{ color: '#fff' }}>and</span> <span style={{ color: 'var(--primary-color)' }}>Stay That Way.</span></>}
                description="Healthcare moves fast. Your digital tools should too. We build HIPAA-compliant healthcare apps, patient portals, and clinical platforms that improve outcomes, reduce friction, and put people first."
                bgImage="/industries/healthcare-app-development/banner-bg.webp" 
            />
            
            <IndustryServicesSection 
                title="<span style='color: var(--primary-color)'>Healthcare App Development</span> Solutions <br/> Built for Real <span style='color: var(--primary-color)'>Clinical Environments</span>"
                description="We don't just build healthcare apps — we build tools that clinicians trust, patients rely on, and administrators can actually manage. From telemedicine platforms to EHR integrations, our healthcare solutions are designed with compliance, security, and user experience as non-negotiable foundations. Whether it's a mobile app, web platform, or custom software solution, Next Apps delivers complete digital products for the modern healthcare organization."
                servicesData={services}
                mockupImage="/industries/healthcare-app-development/services-mockup.webp" // Placeholder
            />

            <IndustryConsultationSection 
                title={<>Your Healthcare <span style={{ color: 'var(--primary-color)' }}>Vision Deserves</span> a Technology Partner Who Gets It</>}
                subLabel="Healthcare is too important for generic software."
                description="We bring together deep domain knowledge and full-stack digital capabilities — mobile apps, web platforms, e-commerce, and custom software — to build solutions that work in the real-world of clinical care."
            />

            <IndustryTabsSection 
                title={<>Build <span style={{ color: 'var(--primary-color)' }}>Healthcare</span> Platforms With Features <br/> That Actually Matter to <span style={{ color: 'var(--primary-color)' }}>Clinicians</span> and <span style={{ color: 'var(--primary-color)' }}>Patients</span></>}
                description="We build robust, scalable solutions backed by years of experience serving businesses in Healthcare, Finance, E-Commerce, and Education — with technology that drives real results."
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
