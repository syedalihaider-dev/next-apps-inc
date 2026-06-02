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
    title: "Education App Development | Next Apps",
    description: "Next Apps builds powerful digital education solutions, from mobile apps and web platforms to e-commerce and custom software. Serving businesses globally.",
};

const EducationAppPage = () => {
    const services = [
        {
            title: 'Learning Management <br/> Systems (LMS)',
            description: 'Custom LMS platforms with course creation tools, student progress tracking, assessments, certifications, and multi-instructor management.',
            active: false
        },
        {
            title: 'Virtual Classroom & Live <br/> Learning Platforms',
            description: 'Real-time virtual classrooms with video conferencing, interactive whiteboards, breakout rooms, and session recording capabilities.',
            active: false
        },
        {
            title: 'Mobile Learning <br/>Apps',
            description: 'Native iOS and Android learning apps with offline content access, microlearning modules, and gamified progress systems for on-the-go education.',
            active: false
        },
        {
            title: 'Corporate Training & <br/> Upskilling Platforms',
            description: 'Enterprise learning platforms for employee onboarding, compliance training, skills development, and performance tracking across distributed teams.',
            active: false
        },
        {
            title: 'EdTech Marketplace & <br/> Course Platforms',
            description: 'Udemy-style course marketplaces with instructor dashboards, video hosting, payment processing, and student review systems.',
            active: false
        },
        {
            title: 'Educational Game <br/> Development',
            description: 'Gamified learning experiences and serious games that make complex subjects engaging for students of all ages — from K-12 to adult learners.',
            active: false
        }
    ];

    const tabs = [
        {
            id: 'adaptive-learning-paths',
            title: 'Adaptive Learning Paths',
            contentTitle: 'Adaptive Learning Paths',
            contentDesc: "AI-powered learning journeys that adapt to each student's pace, strengths, and gaps — delivering truly personalized education at scale.",
            icon: '/industries/education-app-development/tab-icon-01.webp', 
            image: '/industries/education-app-development/tab-mockup-01.webp' 
        },
        {
            id: 'interactive-tools',
            title: 'Interactive Video & Content Authoring',
            contentTitle: 'Interactive Video & Content Authoring',
            contentDesc: 'Rich multimedia course creation with interactive quizzes, branching scenarios, SCORM compatibility, and drag-and-drop authoring tools.',
            icon: '/industries/education-app-development/tab-icon-02.webp',
            image: '/industries/education-app-development/tab-mockup-02.webp'
        },
        {
            id: 'progress-tracking-analytics',
            title: 'Progress Tracking & Analytics',
            contentTitle: 'Progress Tracking & Analytics',
            contentDesc: 'Comprehensive dashboards for instructors and administrators showing learner progress, completion rates, assessment scores, and engagement metrics.',
            icon: '/industries/education-app-development/tab-icon-03.webp',
            image: '/industries/education-app-development/tab-mockup-01.webp'
        },
        {
            id: 'live-asynchronous-learning-support',
            title: ' Live & Asynchronous Learning Support',
            contentTitle: ' Live & Asynchronous Learning Support',
            contentDesc: 'Flexible platforms that support both real-time instruction and self-paced learning — with discussion forums, assignments, and peer collaboration tools.',
            icon: '/industries/education-app-development/tab-icon-04.webp',
            image: '/industries/education-app-development/tab-mockup-04.webp'
        }
    ];

    return (
        <main>
            <IndustryBanner 
                industryLabel="Education Industry"
                mainTitle={<><span style={{ color: 'var(--primary-color)' }}>Learning</span> Has Changed. Your <span style={{ color: 'var(--primary-color)' }}>EdTech Platform</span> Should Too.</>}
                // highlightedPart={<> <span style={{ color: 'var(--primary-color)' }}>Get Better</span> <span style={{ color: '#fff' }}>and</span> <span style={{ color: 'var(--primary-color)' }}>Stay That Way.</span></>}
                description="The classroom is no longer a room, it's everywhere. We build e-learning platforms, LMS systems, and educational mobile apps that make knowledge accessible, engaging, and measurable for students, teachers, and institutions worldwide."
                bgImage="/industries/education-app-development/banner-bg.webp" 
            />
            
            <IndustryServicesSection 
                title="<span style='color: var(--primary-color)'>Education App </span> Development Solutions <br/> Built for <span style='color: var(--primary-color)'>Engagement</span>, <span style='color: var(--primary-color)'>Access</span>, and <span style='color: var(--primary-color)'>Outcomes</span>"
                description="Education technology should do one thing above all else: help people learn more effectively. Our EdTech development team builds learning management systems, virtual classrooms, skills training apps, and educational games that combine pedagogical best practices with modern UX."
                servicesData={services}
                mockupImage="/industries/education-app-development/services-mockup.webp" 
            />

            <IndustryConsultationSection 
                title={<>
                <span style={{ color: 'var(--primary-color)' }}>Education Technology</span> That <span style={{ color: 'var(--primary-color)' }}>Opens Doors</span> and Keeps <span style={{ color: 'var(--primary-color)' }}>Learners Coming Back</span></>}
                subLabel="We believe everyone deserves access to great learning experiences."
                description="Our EdTech solutions are designed to be inclusive, engaging, and scalable, from a single classroom to a global platform serving millions of learners."
            />

            <IndustryTabsSection 
                title={<><span style={{ color: 'var(--primary-color)' }}>Education App Features</span> That Drive <span style={{ color: 'var(--primary-color)' }}>Learning, Engagement,</span> and <span style={{ color: 'var(--primary-color)' }}>Measurable Outcomes</span></>}
                description="We build robust, scalable solutions backed by years of experience serving businesses across Healthcare, Finance, E-Commerce, and Education,  powered by technology that drives real results."
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

export default EducationAppPage;
