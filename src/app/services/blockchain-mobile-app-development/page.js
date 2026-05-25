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
    title: "Blockchain Mobile App Development | Next App",
    description: "Next App delivers expert blockchain mobile app development alongside web development, e-commerce, game development, and custom software.",
};

const tabs = [
    {
        id: 'planning',
        label: 'Project Planning',
        title: 'Project Planning',
        description: 'Blockchain projects need more upfront clarity. Our analysts help define the right blockchain protocol, consensus, tokenomics, and regulations. We scope smart contract architecture, mobile interface, and backend, then provide a detailed plan with cost and timeline estimates.',
        image: '/services/project-planning.webp'
    },
    {
        id: 'wireframes',
        label: 'Wireframes',
        title: 'Wireframes',
        description: 'Blockchain UX is tough, with wallets, gas fees, transaction confirmations, and key management confusing users. Our wireframing maps user flows to make blockchain interactions simple, providing a visual guide users can navigate easily.',
        image: '/services/wireframes.webp'
    },
    {
        id: 'prototype',
        label: 'Prototype Demo',
        title: 'Prototype Demo',
        description: 'We create an interactive front-end prototype of your blockchain app, linked to a test network for simulation without stakes. This clarifies the user journey before smart contract development, minimizing costly later changes.',
        image: '/services/prototype-demo.webp'
    },
    {
        id: 'development',
        label: 'Development',
        title: 'Development',
        description: 'Our engineers develop secure smart contracts in Solidity, Rust, or Move, and build the mobile app simultaneously, integrating wallet connectivity (MetaMask, WalletConnect), token management, and on-chain data feeds. Agile sprints ensure you receive working builds throughout.',
        image: '/services/development.webp'
    },
    {
        id: 'quality',
        label: 'Quality Control',
        title: 'Quality Control',
        description: 'Blockchain QA extends beyond typical app testing by auditing smart contracts for issues like reentrancy, overflow, and access flaws. The mobile app undergoes testing across devices, wallets, and network scenarios. Security penetration tests are performed prior to deploying code on a live blockchain.',
        image: '/services/quality-control.webp'
    },
    {
        id: 'deployment',
        label: 'Deployment and Launch',
        title: 'Deployment and Launch',
        description: 'We handle mainnet smart contract deployment, app store submissions, and Web3 setup like nodes, IPFS pinning, and indexers. Post-launch, we monitor on-chain activity, contract health, and app performance to address issues early.',
        image: '/services/deployment-and-launch.webp'
    }
];

const BlockchainMobileAppDevelopmentPage = () => {
    return (
        <main>
            <ServiceInnerBanner 
                badge="Blockchain Mobile App Development"
                title={
                    <>
                        Build on <span className={styles.purpleText}>Trust.</span> Code the Future of <span className={styles.greenText}>Decentralized</span> Business.
                    </>
                }
                description="Blockchain isn't just for crypto. It's a new paradigm for trust, transparency, and ownership. We build blockchain-powered mobile apps that bring real-world utility to decentralized technology."
                bgImage="/services/blockchain-banner-bg.png"
            />
            <ServiceSection 
                heading="Why Blockchain Mobile Apps Require More Than "
                purpleText="Just Smart Contracts"
                description="Building a blockchain app means solving hard problems at the intersection of cryptography, UX, and business logic. Our blockchain engineers have built crypto wallets, NFT marketplaces, DeFi platforms, and supply chain tracking apps — all with security and usability at their core. "
                features={[
                    "Smart Contract Development",
                    "DApp Architecture Design",
                    "Crypto Wallet Integration",
                    "Blockchain Security Audits"
                ]}
                mockupImage="/services/blockchain-hand-mockup.png"
            />
            <AwardsSection />
            <ServicesListSection />
            <DevelopmentSolutionsSection />
            <CompanyChoiceSection />
            <ProcessTabs 
                heading={<>Our <span className={styles.purpleText}>Blockchain App Development</span> Approach Makes It <span className={styles.purpleText}>Simple</span>, <span className={styles.purpleText}>Easy</span>, & <span className={styles.purpleText}>Efficient</span></>}
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

export default BlockchainMobileAppDevelopmentPage;
