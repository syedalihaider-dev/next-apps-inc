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

const AutomotiveAppPage = () => {
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
            icon: '/industries/automotive-app-development/tab-icon-01.png',
            image: '/industries/automotive-app-development/tab-icon-01.png'
        },
        {
            id: 'patient-monitoring',
            title: 'Predictive Maintenance Scheduling',
            contentTitle: 'Predictive Maintenance Scheduling',
            contentDesc: 'AI-driven maintenance forecasting that uses mileage, engine data, and service history to predict failures before they happen and schedule service proactively.',
            icon: '/industries/automotive-app-development/tab-icon-02.png',
            image: '/industries/automotive-app-development/tab-icon-02.png'
        },
        {
            id: 'billing',
            title: 'Digital Retailing & Online Deal Tools',
            contentTitle: 'Digital Retailing & Online Deal Tools',
            contentDesc: 'Customer-facing digital retailing tools that let buyers build their deal, estimate trade-in value, apply for financing, and reserve a vehicle — all before setting foot in the dealership.',
            icon: '/industries/automotive-app-development/tab-icon-03.png',
            image: '/industries/automotive-app-development/tab-icon-03.png'
        },
        {
            id: 'analytics',
            title: 'Driver Behaviour & Safety Monitoring',
            contentTitle: 'Driver Behaviour & Safety Monitoring',
            contentDesc: 'Telematics-based driver scoring with harsh braking, speeding, and distraction detection — reducing accident risk and insurance premiums for commercial fleet operators..',
            icon: '/industries/automotive-app-development/tab-icon-04.png',
            image: '/industries/automotive-app-development/tab-icon-04.png'
        }
    ];

    const automotiveFeatures1 = [
        {
            title: 'Inventory Explorer',
            content: 'Browse new and pre-owned vehicles with specifications, photo galleries, and filters for price, model, and features.'
        },
        {
            title: 'Full 360-Degree Vehicle Walkarounds',
            content: 'Zoomable images, video walkarounds, and interior and exterior views let buyers inspect every angle before visiting.'
        },
        {
            title: 'Drive Bookings',
            content: 'Pick a vehicle, date, and location, then get confirmation and reminders so no test drive slips.'
        },
        {
            title: 'Service Slot Booking',
            content: 'Schedule maintenance, repairs, and inspections online with live slot availability, full service history, and visit reminders.'
        },
        {
            title: "Know Your Car's Health",
            content: 'Monitor engine status, tire pressure, battery health, and fault codes through OBD-II integration with maintenance alerts.'
        },
        {
            title: 'Live Location Tracking',
            content: 'See vehicles move in real time with route history, geofencing, and navigation for drivers and managers.'
        }
    ];

    const automotiveFeatures2 = [
        {
            title: 'Fleet Control Center',
            content: 'Oversee drivers, vehicles, fuel consumption, and maintenance schedules from a single dashboard that trims operating costs.'
        },
        {
            title: 'Smart Financing & Payments',
            content: 'Compare financing plans, estimate monthly payments, and pay securely online for purchases, leases, and service visits.'
        },
        {
            title: 'Instant Trade-Ins',
            content: 'Enter details or scan photos to get a value estimate that helps customers plan smarter upgrades.'
        },
        {
            title: 'Records & Contracts, Digitized',
            content: 'Keep registration, insurance, warranty, and service records handy, then sign purchase agreements without ever visiting dealerships.'
        },
        {
            title: 'Roadside Help Instantly',
            content: 'Request towing, battery jumps, or fuel delivery with one tap while sharing location with nearby providers.'
        },
        {
            title: 'Connected Car Remote',
            content: 'Lock doors, start engines, check fuel, and adjust climate settings from anywhere using secure connected-car integrations.'
        }
    ];

    const automotiveSolutions = [
        {
            title: 'Dealership Showroom Apps',
            description: 'Speedy apps with inventory, test drive booking, financing, and digital paperwork for dealerships and auto groups.',
            image: '/industries/solution-1.webp',
            active: false
        },
        {
            title: 'Rental & Car Sharing',
            description: 'Flexible apps with simple booking, keyless access, and payments for rental companies and mobility startups.',
            image: '/industries/solution-2.webp',
            active: false
        },
        {
            title: 'Fleet Operations Software',
            description: 'Powerful platforms with live tracking, driver behavior reports, fuel monitoring, and maintenance planning for logistics operators.',
            image: '/industries/solution-3.webp',
            active: false
        },
        {
            title: 'Garage Service Apps',
            description: 'Handy platforms combining appointment booking, repair updates, and paperless invoices for garages and service centers.',
            image: '/industries/solution-4.webp',
            active: false
        }
    ];

    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "Automotive App Development",
    "description": "Next Apps Inc develops dealer management systems, fleet tracking platforms, connected vehicle apps, EV charging networks, and mobility solutions for dealerships, fleet operators, OEMs, and automotive startups. Real-time performance and reliability built in.",
    "brand": {
        "@type": "brand",
        "name": "Next Apps Inc"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "ratingCount": "1698"
    }
}` }} />
            <IndustryBanner 
                industryLabel="Automotive Industry"
                mainTitle={<> The <span style={{ color: 'var(--primary-color)' }}>Automotive Industry</span> Is Going Digital.<span style={{ color: 'var(--primary-color)' }}> We Build the </span> Software That Drives It.</>}
                // highlightedPart={<> <span style={{ color: 'var(--primary-color)' }}>Get Better</span> <span style={{ color: '#fff' }}>and</span> <span style={{ color: 'var(--primary-color)' }}>Stay That Way.</span></>}
                description="From dealerships and fleet operators to OEMs and mobility startups, we build automotive platforms that connect vehicles, teams, and customers in ways that legacy systems never could. Your digital transformation starts with the right development partner."
                bgImage="/industries/automotive-app-development/banner-bg.png" 
            />
            
            <IndustryServicesSection 
                title="<span style='color: var(--primary-color)'>Automotive App Development</span> Solutions <br/> Built for the <span style='color: var(--primary-color)'> Road </span> <span style='color: var(--primary-color)'>Ahead</span> "
                description="The automotive industry is increasingly complex and full of digital innovation opportunities. We develop dealer management systems, fleet tracking, EV charging networks, connected vehicle apps, and mobility solutions that convert digital investments into operational efficiency."
                servicesData={services}
                mockupImage="/industries/automotive-app-development/services-mockup.png" // Placeholder
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
                title={<>Showroom-Ready <span style={{ color: 'var(--primary-color)' }}>Features</span> That Keep Drivers, Dealers, And Fleets <span style={{ color: 'var(--primary-color)' }}>Moving</span></>}
                description="Our Award-Winning Team Of Developers, Designers, And Project Managers Engineers Connected Automotive Platforms That Put Buyers, Drivers, And Dealerships In The Fast Lane."
                mockupImage="/industries/feature-phones.webp"
                features1={automotiveFeatures1}
                features2={automotiveFeatures2}
            />
            <IndustrySolutionsSlider
                title={<>Connected Mobility Solutions <span style={{ color: 'var(--primary-color)' }}>Crafted For Every</span> Modern Driver</>}
                solutionsData={automotiveSolutions}
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

export default AutomotiveAppPage;
