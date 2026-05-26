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
    title: " Travel App Development | Next App",
    description: "Next App offers comprehensive travel digital solutions, including booking platforms, OTAs, hotel management systems, tour apps, and traveler tools, serving businesses worldwide.",
};

const HealthcareAppPage = () => {
    const services = [
        {
            title: 'Travel Booking <br/>App Development',
            description: 'Full-stack OTA platforms with flight, hotel, car, and activity search, multi-supplier GDS integration, dynamic packaging, and real-time availability and pricing engines.',
            active: false
        },
        {
            title: 'Hotel Booking <br/>App Development',
            description: 'Custom hotel booking apps for accommodation businesses — direct booking engines, PMS integrations, mobile check-in apps, and guest experience platforms that reduce OTA commission dependency.',
            active: false
        },
        {
            title: 'Flight Booking <br/>App Development',
            description: 'Specialist flight booking apps for airlines and OTAs — seat selection, ancillary revenue tools, real-time flight status, itinerary management, and multi-currency payment processing.',
            active: false
        },
        {
            title: 'Tourism App <br/>Development',
            description: 'Custom tourism apps for destination management organizations and tour operators — with itinerary builder tools, activity booking, guide management, and traveller communication workflows.',
            active: false
        },
        {
            title: 'Travel Companion <br/>& Itinerary Apps',
            description: 'Consumer-facing travel mobile apps with itinerary management, destination guides, real-time alerts, offline access, and collaborative trip planning for iOS and Android.',
            active: false
        },
        {
            title: 'Corporate Travel <br/>Management Platforms',
            description: 'Business travel booking tools with policy compliance, approval workflows, expense reporting, and traveller tracking — reducing costs and improving duty of care for corporate programs.',
            active: false
        }
    ];

    const tabs = [
        {
            id: 'real-time-availability-dynamic-pricing',
            title: 'Real-Time Availability & Dynamic Pricing',
            contentTitle: 'Real-Time Availability & Dynamic Pricing',
            contentDesc: 'Live inventory feeds with real-time pricing from GDS and supplier APIs are essential for travel and hotel booking apps.',
            icon: '/industries/real-estate-app-development/tab-icon-01.png',
            image: '/industries/real-estate-app-development/tab-icon-01.png'
        },
        {
            id: 'intelligent-search-personalisation',
            title: 'Intelligent Search & Personalisation',
            contentTitle: 'Intelligent Search & Personalisation',
            contentDesc: 'AI-powered search and recommendation engines that highlight the most relevant destinations, properties, and experiences, setting apart quality travel apps from basic search tools.',
            icon: '/industries/real-estate-app-development/tab-icon-02.png',
            image: '/industries/real-estate-app-development/tab-icon-02.png'
        },
        {
            id: 'seamless-multi-provider-checkout',
            title: 'Seamless Multi-Provider Checkout',
            contentTitle: 'Seamless Multi-Provider Checkout',
            contentDesc: 'Single-cart checkout for mixed flight, hotel, and activity bookings with multi-payment support and automated booking documentation is essential to any conversion-optimized travel booking platform.',
            icon: '/industries/real-estate-app-development/tab-icon-03.png',
            image: '/industries/real-estate-app-development/tab-icon-03.png'
        },
        {
            id: 'traveller-communication-alerts',
            title: 'Traveller Communication & Alerts',
            contentTitle: 'Traveller Communication & Alerts',
            contentDesc: 'Automated pre-trip reminders, real-time disruption alerts, check-in notifications, and post-trip feedback requests keep travellers informed at every stage of their journey.',
            icon: '/industries/real-estate-app-development/tab-icon-04.png',
            image: '/industries/real-estate-app-development/tab-icon-04.png'
        }
    ];

    return (
        <main>
            <IndustryBanner 
                industryLabel="Travel Industry"
                mainTitle={<><span style={{ color: 'var(--primary-color)' }}>Travel Is Back.</span> Build the Platform That Brings<span style={{ color: 'var(--primary-color)' }}> Travellers </span> to You.</>}
                // highlightedPart={<> <span style={{ color: 'var(--primary-color)' }}>Get Better</span> <span style={{ color: '#fff' }}>and</span> <span style={{ color: 'var(--primary-color)' }}>Stay That Way.</span></>}
                description="We build travel tech, online agencies, hotels, airlines, making bookings seamless, experiences memorable, and operations efficient. Next App delivers mobile apps, web platforms, and custom software for businesses of all sizes."
                bgImage="/industries/real-estate-app-development/banner-bg.png" 
            />

            <IndustryServicesSection 
                title="<span style='color: var(--primary-color)'>Travel App Development</span> Solutions Built for Booking Volume, <span style='color: var(--primary-color)'>Experience Quality,</span> and <span style='color: var(--primary-color)'>Operational Scale</span> "
                description="Travel app development is highly competitive. Friction points in booking lose customers. Our services focus on key metrics: conversion, booking completion, repeat visits, and supplier efficiency."
                servicesData={services}
                mockupImage="/industries/real-estate-app-development/services-mockup.png" // Placeholder
            />
   
            <IndustryConsultationSection 
                title={<>
                Travel App Company <span style={{ color: 'var(--primary-color)' }}>Turns One Trip</span> into Lifelong Bookings</>}
                subLabel="Travelers have more options and less patience for inconvenience."             
                description="We develop apps that turn first bookings into repeat visits with seamless UX, personalized suggestions, and reliable performance during peak seasons. Our US and Pakistan teams create travel mobile apps that make your platform memorable and encourage repeat use."
            />

            <IndustryTabsSection 
                title={<><span style={{ color: 'var(--primary-color)' }}>Travel App</span> Features That Find <br/> Features That Drive <span style={{ color: 'var(--primary-color)' }}>Bookings, Reduce Drop-Off, </span> and Improve <span style={{ color: 'var(--primary-color)' }}>Traveller Experience</span></>}
                description="We build scalable solutions with years of experience in Healthcare, Finance, E-Commerce, and Education, backed by technology that delivers results."
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
