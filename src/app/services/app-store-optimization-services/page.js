import ServiceInnerBanner from '@/components/services/ServiceInnerBanner';
import styles from '@/components/services/ServiceInnerBanner.module.css';
import ServiceSection from '@/components/services/ServiceSection';
import AwardsSection from '@/components/common/AwardsSection';
import ServicesListSection from '@/components/services/ServicesListSection';
import DevelopmentSolutionsSection from '@/components/services/DevelopmentSolutionsSection';
import CompanyChoiceSection from '@/components/services/CompanyChoiceSection';
import ProcessTabs from '@/components/services/ProcessTabs';
import WhyChooseAppSection from '@/components/common/WhyChooseAppSection';
import CaseStudy from "@/components/common/CaseStudy";
import TechStackSection from '@/components/common/TechStackSection';
import IndustriesSection from '@/components/common/IndustriesSection';
import Appointment from "@/components/common/Appointment";
import Testimonials from "@/components/common/Testimonials";
import ContactSection from "@/components/common/ContactSection";

export const metadata = {
    title: "App Store Optimization  | Next App",
    description: "Next App delivers expert App Store Optimization (ASO) services, from keyword research and listing copy to screenshot design and review management. Increase organic downloads today.",
};

const tabs = [
    {
        id: 'planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'We audit your current store listing, benchmark against top competitors in your category, and define an ASO strategy that targets the keywords, creatives, and rating triggers most likely to move your rankings',
        image: '/services/project-planning.webp'
    },
    {
        id: 'wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "We design screenshot sequences, preview video storyboards, and feature graphic layouts that communicate your app's value in under three seconds, which is all the attention most store visitors give before they decide.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'prototype',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'Before rolling out changes to your live listing, we test creative variants with store page experiments to measure which title, icon, and screenshots drive the highest conversion rate against real search traffic',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'development',
        label: 'Development',
        title: 'Development',
        description: 'We implement the full optimized listing, writing keyword-rich titles and descriptions, uploading conversion-tested creatives, and configuring localized metadata for every target market you want to rank in.',
        image: '/services/development.webp'
    },
    {
        id: 'quality',
        label: 'Quality Control',
        title: 'Quality Control',
        description: "Every listing change is tracked for impact on impressions, conversion rate, and organic installs. We review performance data weekly and iterate rapidly to keep your ranking moving in the right direction.",
        image: '/services/quality-control.webp'
    },
    {
        id: 'deployment',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'ASO is ongoing, not a one-time setup. We monitor algorithm changes, seasonal keyword shifts, and competitor moves to keep your listing optimized and your install volume growing month over month.',
        image: '/services/deployment-and-launch.webp'
    }
];

const AppStoreOptimizationPage = () => {
    return (
        <main>
            <ServiceInnerBanner 
                badge="App Store Optimization"
                title={
                    <>
                    You  <span className={styles.purpleText}>Built the App. </span> We Make <span className={styles.purpleText}>Sure  </span> People <span className={styles.purpleText}> Find It.</span><span className={styles.purpleText}></span>
                    </>
                }
                description="70% of App Store visitors find apps via search. Without App Store Optimization, even top products remain unseen. We use keyword strategy, conversion-focused listing design, and review management to boost organic installs without raising your paid acquisition budget."
                bgImage="/services/android-banner-bg.webp"
            />
            <ServiceSection     
                heading="App Store Optimization  "
                purpleText="Built for Continuous Growth"
                description="ASO is not a one-time task. It is an ongoing optimization discipline that compounds over time. Here is how our ASO team improves your organic visibility and conversion rate across both the App Store and Google Play."
                features={[
                    "Certified Developers",
                    "Custom Design",
                    "Scalable Systems",
                    "Smooth Integration"
                ]}
                mockupImage="/services/ios-hand-mockup.webp"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection />
            <CompanyChoiceSection />
            <ProcessTabs 
                heading={<>Our <span className={styles.purpleText}>App Store Optimization</span> Approach Makes It <span className={styles.purpleText}>Simple</span>, <span className={styles.purpleText}>Easy</span>, & <span className={styles.purpleText}>Efficient</span></>}
                tabs={tabs}
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

export default AppStoreOptimizationPage;
