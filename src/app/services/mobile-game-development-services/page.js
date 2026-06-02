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
    title: "Mobile Game Development | Next App",
    description: "Next Apps delivers expert mobile game development, web development, e-commerce, and custom software. Get a free consultation today.",
};

const tabs = [
    {
        id: 'planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'Great games start with a clear vision and a realistic plan. Our game producers work with you to define genre, core mechanics, target audience, monetization model, and platform targets. We allocate artists, developers, and QA specialists, then provide a detailed production schedule and cost estimate.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: "Before art and code, we wireframe the game's core UX, menus, onboarding flows, HUD layout, and key screens. This ensures the non-gameplay experience is as polished as the game itself. Alongside wireframes, our game designers document core mechanics and level design concepts for team alignment.",
        image: '/services/wireframes.webp'
    },
    {
        id: 'prototype',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: "We build a playable prototype of your core gameplay loop, stripped of final art but fully functional. You get to play it, feel the mechanics, and decide if the moment-to-moment experience is right before the full production budget is committed. Feedback at this stage is cheap; feedback post-launch isn't.",
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'development',
        label: 'Development',
        title: 'Development',
        description: "Our Unity or Unreal Engine developers build your game in production sprints, delivering playable builds throughout. Art, animation, audio, and engineering work in parallel. You receive regular build drops to test, so you're never waiting until the end to see what you're getting.",
        image: '/services/development.webp'
    },
    {
        id: 'quality',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'Games require a different kind of QA. We test for bugs, frame rate consistency, input responsiveness, crash scenarios, device compatibility, and store compliance, across iOS and Android. We also conduct gameplay balance testing to ensure the experience is fun and fair from the first session.',
        image: '/services/quality-control.webp'
    },
    {
        id: 'deployment',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'We manage full App Store and Google Play submissions, including age ratings, content descriptions, trailer assets, and store listing optimization. Post-launch, we monitor crash reports, user reviews, and retention metrics so we can act fast on anything that needs improvement.',
        image: '/services/deployment-and-launch.webp'
    }
];

const MobileGameDevelopmentPage = () => {
    return (
        <main>
            <ServiceInnerBanner 
                badge="Mobile Game Development"
                title={
                    <>
                        We Don’t Just Build <span className={styles.purpleText}>Games</span>. We Build <span className={styles.purpleText}>Worlds</span> People Come <span className={styles.purpleText}> Back</span> To.
                    </>
                }
                description="Engaging mechanics, beautiful art, smooth performance, our game development team builds mobile games that players love and publishers trust. From casual titles to full immersive experiences."
                bgImage="/services/mobile-game-banner-bg.png"
            />
            <ServiceSection 
                heading="What It Takes to Build a Mobile Game That "
                purpleText="Actually Gets Played"
                description="Most games never make it past the first session. Ours do. Our game development team combines game design expertise, strong engineering, and a deep understanding of player psychology to build experiences with real retention. Whether it's a 2D casual game or a 3D multiplayer adventure, we handle the full lifecycle — concept, art, development, testing, and store submission."
                features={[
                    "2D/3D Game Development",
                    "Unity & Unreal Engine Experts",
                    "Monetization Strategy",
                    "Cross-Platform Gameplay"
                ]}
                mockupImage="/services/mobile-game-hand-mockup.png"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection />
            <CompanyChoiceSection />
            <ProcessTabs 
                heading={<>Our <span className={styles.purpleText}>Mobile Game Development</span> Approach Makes It <span className={styles.purpleText}>Simple</span>, <span className={styles.purpleText}>Easy</span>, & <span className={styles.purpleText}>Efficient</span></>}
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

export default MobileGameDevelopmentPage;
