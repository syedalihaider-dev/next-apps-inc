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
    title: "Agency App Development | Next Apps Inc",
    description: "Next Apps develops digital solutions for agencies, including client portals, project management, white-label apps, and automated reporting, serving businesses worldwide.",
};

const AgenciesAppPage = () => {
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

    const agencyFeatures1 = [
        {
            title: 'Client Lounge',
            content: 'Clients enter a branded space to review deliverables, leave feedback, approve work, and follow live progress.'
        },
        {
            title: 'Boards, Tasks & Timelines',
            content: 'Assign work, set deadlines, and watch project status unfold across flexible boards, timelines, and team-friendly views.'
        },
        {
            title: 'Billable Hours',
            content: 'Capture billable minutes with one tap, turn logged time into accurate timesheets for payroll and invoices.'
        },
        {
            title: 'Brand Asset Vault',
            content: 'Logos, designs, videos, and brand guidelines live in one searchable library with version history and sharing.'
        },
        {
            title: 'Feedback On The Canvas',
            content: 'Teams comment directly on designs, videos, and documents using markup tools that bring final approvals closer.'
        },
        {
            title: 'Live Campaign Insights',
            content: 'Track reach, engagement, conversions, and spend across channels through live dashboards that make client reporting simple.'
        }
    ];

    const agencyFeatures2 = [
        {
            title: 'Team Chat Hub',
            content: 'Designers, strategists, and account managers stay aligned with chat, sharing, and mentions that cut email clutter.'
        },
        {
            title: 'Invoices & Retainer Tracking',
            content: 'Send polished invoices, monitor retainers, and collect client payments through secure in-app billing with automatic reminders.'
        },
        {
            title: 'Smart Staffing',
            content: 'Balance workloads, see availability, and prevent burnout with scheduling tools that match skilled talent to projects.'
        },
        {
            title: 'Pitch & Pipeline CRM',
            content: 'Capture leads, follow pitches, and nurture client relationships inside one CRM built to win more deals.'
        },
        {
            title: 'Content Planning Calendar',
            content: 'Plan, schedule, and publish across channel from one calendar, complete with approval workflows and automatic posting.'
        },
        {
            title: 'Locked-Down Client Data',
            content: 'Briefs, contracts, and brand assets stay protected with encrypted storage, role-based permissions, and controlled client access.'
        }
    ];

    const agencySolutions = [
        {
            title: 'Marketing Growth Apps',
            description: 'Performance apps with campaign tracking, audience analytics, content scheduling, and live reporting for digital marketing agencies.',
            image: '/industries/agencies-app-development/solution-1.webp',
            active: false
        },
        {
            title: 'Studio & Creative Suites',
            description: 'Inspiring apps with mood boards, proofing tools, asset libraries, and approval workflows for design studios.',
            image: '/industries/agencies-app-development/solution-2.webp',
            active: false
        },
        {
            title: 'Account Management Platforms',
            description: 'Reliable platforms with client portals, project tracking, messaging, and invoicing integration for agencies juggling many accounts.',
            image: '/industries/agencies-app-development/solution-3.webp',
            active: false
        },
        {
            title: 'Media Planning Apps',
            description: 'Streamlined platforms for planning and buying media across channels with budget control and performance insights.',
            image: '/industries/agencies-app-development/solution-4.webp',
            active: false
        }
    ];

    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: `{
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
                title={<><span style={{ color: 'var(--primary-color)' }}>Agency App</span> Features That Improves <br /> Client Retention, <span style={{ color: 'var(--primary-color)' }}>Team </span> Productivity,  <span style={{ color: 'var(--primary-color)' }}>and Margin</span></>}
                description="We build robust, scalable solutions backed by years of experience serving businesses across Healthcare, Finance, E-Commerce, and Education — powered by technology that drives real results."
                tabsData={tabs}
            />

            <IndustryFeaturesSection
                title={<>Team-Ready <span style={{ color: 'var(--primary-color)' }}>Mobile Features</span> That Keep Client Projects <span style={{ color: 'var(--primary-color)' }}>Moving Forward</span></>}
                description="Our Award-Winning Team Of Developers, Designers, And Project Managers Creates Agency Platforms That Scale Gracefully, Impress Clients, And Keep Creative Work Flowing Smoothly."
                mockupImage="/industries/agencies-app-development/feature-phones.webp"
                features1={agencyFeatures1}
                features2={agencyFeatures2}
            />
            <IndustrySolutionsSlider
                title={<>Smarter <span style={{ color: 'var(--primary-color)' }}>Agency Platforms</span> For Today's Fast-Moving <span style={{ color: 'var(--primary-color)' }}>Client Demands</span></>}
                solutionsData={agencySolutions}
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

export default AgenciesAppPage;
