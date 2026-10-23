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

    const healthcareFeatures1 = [
        {
            title: 'Instant Scheduling',
            content: 'Patients pick a slot, confirm in one tap, and receive gentle reminders that reduce missed appointments.'
        },
        {
            title: 'Live Video Care Rooms',
            content: 'Doctors and patients meet in secure, crystal-clear video rooms with chat, file sharing, and prescription requests.'
        },
        {
            title: 'Medical Vault',
            content: 'Medical history, lab reports, prescriptions, and care plans stay organized, always ready for patients and providers.'
        },
        {
            title: 'Dose Reminder Nudges',
            content: 'Friendly alerts for doses and refills keep treatment on schedule and help patients stay consistent daily.'
        },
        {
            title: 'Pharmacy Connect & Refills',
            content: 'Prescriptions travel straight to pharmacies, where patients compare options and follow refills without paperwork or calls.'
        },
        {
            title: 'Daily Health Journal',
            content: 'Patients log vitals, symptoms, and activity through wearables, giving care teams a clearer picture of progress.'
        }
    ];

    const healthcareFeatures2 = [
        {
            title: 'Private Care Chat',
            content: 'Encrypted conversations let patients and care teams handle questions, follow-ups, and test result discussions with confidence.'
        },
        {
            title: 'Claims, Bills & Coverage',
            content: 'Patients check claims, pay medical bills, and verify coverage inside a single transparent, easy-to-follow payment experience.'
        },
        {
            title: 'Emergency SOS',
            content: 'One tap sends alerts, shares live location, and opens critical medical details so help arrives faster.'
        },
        {
            title: 'Find The Right Doctor',
            content: 'Browse specialist profiles with credentials, verified reviews, and availability, all filtered by location and insurance acceptance.'
        },
        {
            title: 'Connected Wearable Sync',
            content: 'Smartwatches, glucose monitors, and fitness trackers stream data in real time for proactive remote patient monitoring.'
        },
        {
            title: 'HIPAA-Ready Data Protection',
            content: 'End-to-end encryption, audit logs, and role-based access keep patient records safe and aligned with HIPAA standards.'
        }
    ];

    const healthcareSolutions = [
        {
            title: 'Virtual Clinic Apps',
            description: 'Polished apps with HD video visits, secure chat, e-prescriptions, and booking for clinics and virtual providers.',
            image: '/industries/healthcare-app-development/solution-1.webp',
            active: false
        },
        {
            title: 'Active Living Wellness Apps',
            description: 'Motivating apps with workout logs, meal tracking, wearable sync, and personalized plans for health brands.',
            image: '/industries/healthcare-app-development/solution-2.webp',
            active: false
        },
        {
            title: 'Clinic Operations Platforms',
            description: 'Scalable platforms combining patient records, scheduling, billing, and analytics dashboards for busy hospitals and private clinics.',
            image: '/industries/healthcare-app-development/solution-3.webp',
            active: false
        },
        {
            title: 'Mindful Care Apps',
            description: 'Calming platforms with mood journals, guided meditation, therapist chat, and session scheduling for counseling providers.',
            image: '/industries/healthcare-app-development/solution-4.webp',
            active: false
        }
    ];

    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "Healthcare App Development",
    "description": "Next Apps Inc builds HIPAA-compliant healthcare apps, patient portals, telemedicine platforms, and clinical systems. Our healthcare solutions are designed for real clinical environments with secure video consultations, EHR integration, and medical device connectivity.",
    "brand": {
        "@type": "brand",
        "name": "Next Apps Inc"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1889"
    }
}` }} />
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

            <IndustryFeaturesSection
                title={<>Patient-Centered <span style={{ color: 'var(--primary-color)' }}>Mobile Features</span> That Power Smarter Digital <span style={{ color: 'var(--primary-color)' }}>Care Platforms</span></>}
                description="Our Award-Winning Team Of Developers, Designers, And Project Managers Turns Complex Care Journeys Into Compliant Apps That Patients And Providers Trust Every Day."
                mockupImage="/industries/healthcare-app-development/feature-phones.webp"
                features1={healthcareFeatures1}
                features2={healthcareFeatures2}
            />
            <IndustrySolutionsSlider
                title={<>Smarter Care Platforms <span style={{ color: 'var(--primary-color)' }}>Crafted For Today's</span> Connected Patients</>}
                solutionsData={healthcareSolutions}
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
