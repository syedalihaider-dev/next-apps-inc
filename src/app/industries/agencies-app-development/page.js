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
    title: "Agency App Development | Next Apps",
    description: "Next Apps develops digital solutions for agencies, including client portals, project management, white-label apps, and automated reporting, serving businesses worldwide.",
};

const HealthcareAppPage = () => {
    const services = [
        {
            title: ' Client Portal &  <br/> Reporting Platforms',
            description: 'Custom client-facing portals with real-time campaign dashboards, approval workflows, file sharing, and automated reporting — keeping clients informed and reducing check-in overhead.',
            active: false
        },
        {
            title: 'Project & Campaign <br/> Management Tools',
            description: 'Bespoke project management platforms with task assignment, timeline tracking, resource allocation, and cross-team collaboration tools built around your agencys specific workflow model.',
            active: false
        },
        {
            title: 'White-Label <br/>App Development',
            description: 'Fully branded digital products that agencies sell to clients under their own brand — mobile apps, SaaS platforms, and web tools built once and deployed across multiple client accounts.',
            active: false
        },
        {
            title: 'CRM & Pipeline  <br/> Management Systems',
            description: 'Custom agency CRM platforms with lead scoring, proposal tracking, client relationship management, and revenue forecasting tailored to agency sales cycles and retainer structures.',
            active: false
        },
        {
            title: 'Marketing Automation <br/> & Analytics Platforms',
            description: 'Custom marketing automation tools, multi-channel campaign management platforms, and analytics dashboards that give agencies and their clients a single source of performance truth.',
            active: false
        },
        {
            title: ' Staffing & Talent  & <br/> Management Apps',
            description: 'For staffing and recruitment agencies: applicant tracking systems, contractor management portals, timesheet apps, and compliance management tools built for modern workforce operations.',
            active: false
        }
    ];

    const tabs = [
        {
            id: 'telehealth',
            title: ' Automated Client Reporting',
            contentTitle: ' Automated Client Reporting',
            contentDesc: 'Scheduled report generation that pulls live data from your campaign tools, formats it to your brand standards, and delivers to clients automatically — eliminating hours of manual report building.',
            icon: '/industries/agencies-app-development/tab-icon-01.png',
            image: '/industries/agencies-app-development/tab-icon-01.png'
        },
        {
            id: 'patient-monitoring',
            title: 'Multi-Client Workspace Architecture',
            contentTitle: 'Multi-Client Workspace Architecture',
            contentDesc: 'Platform architecture that separates client data, campaigns, and files into secure individual workspaces while giving your team a unified cross-client management view.',
            icon: '/industries/agencies-app-development/tab-icon-02.png',
            image: '/industries/agencies-app-development/tab-icon-02.png'
        },
        {
            id: 'billing',
            title: 'Approval & Feedback Workflows',
            contentTitle: 'Approval & Feedback Workflows',
            contentDesc: 'Structured approval flows for creative, copy, and campaign assets — with version history, comment threads, and sign-off tracking that replaces email chains with organized records.',
            icon: '/industries/agencies-app-development/tab-icon-03.png',
            image: '/industries/agencies-app-development/tab-icon-03.png'
        },
        {
            id: 'analytics',
            title: 'Time Tracking & Profitability Analytics',
            contentTitle: 'Time Tracking & Profitability Analytics',
            contentDesc: 'Built-in time logging, billable hours tracking, and profitability dashboards that give agency owners real-time visibility into which clients and campaigns are margin-positive.',
            icon: '/industries/agencies-app-development/tab-icon-04.png',
            image: '/industries/agencies-app-development/tab-icon-04.png'
        }
    ];

    return (
        <main>\n            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "Agencies App Development",
    "description": "Next Apps Inc builds client portals, project platforms, white-label tools, and internal systems for marketing agencies, creative studios, staffing firms, and consultancies. Scale your agency without scaling your overhead with custom digital infrastructure.",
    "brand": {
        "@type": "brand",
        "name": "Next Apps Inc"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.6",
        "ratingCount": "1578"
    }
}` }} />
            <IndustryBanner 
                industryLabel="Agencies Industry"
                mainTitle={<> Your <span style={{ color: 'var(--primary-color)' }}>Agency Does</span> Great Work. Your<span style={{ color: 'var(--primary-color)' }}> Software Should </span> Too.</>}
                // highlightedPart={<> <span style={{ color: 'var(--primary-color)' }}>Get Better</span> <span style={{ color: '#fff' }}>and</span> <span style={{ color: 'var(--primary-color)' }}>Stay That Way.</span></>}
                description="From marketing agencies and creative studios to staffing firms and consultancies, we build the client portals, project platforms, white-label tools, and internal systems that let you scale your agency without scaling your overhead."
                bgImage="/industries/agencies-app-development/banner-bg.png" 
            />
            
            <IndustryServicesSection 
                title="<span style='color: var(--primary-color)'>Agency App Development</span> Solutions <br/> Built for Client Delivery, <span style='color: var(--primary-color)'>Team </span> Efficiency, and <span style='color: var(--primary-color)'>Scale</span> "
                description="Agencies live and die by delivery. Missed deadlines, fragmented communication, and manual reporting are the enemies of margin and client retention. We build custom digital platforms that give agencies the operational infrastructure to deliver better work, manage more clients, and grow faster without hiring proportionally."
                servicesData={services}
                mockupImage="/industries/agencies-app-development/services-mockup.png" // Placeholder
            />
            
            <IndustryConsultationSection 
                title={<>Agency Technology That <span style={{ color: 'var(--primary-color)' }}>That Makes You Look</span>  Good and Run Better</>}
                // subLabel="Healthcare is too important for generic software."
                description="Agencies earn their clients' trust through the quality of their work. We help you protect that trust by giving you the digital infrastructure that makes every client relationship smoother, every delivery cleaner, and every reporting conversation more productive. "
            />

            <IndustryTabsSection 
                title={<><span style={{ color: 'var(--primary-color)' }}>Agency App</span> Features That Improves <br/> Client Retention, <span style={{ color: 'var(--primary-color)' }}>Team </span> Productivity,  <span style={{ color: 'var(--primary-color)' }}>and Margin</span></>}
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
