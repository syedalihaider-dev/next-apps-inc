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
    title: "E-commerce App Development | Next Apps",
    description: "Next Apps builds powerful e-commerce digital solutions — from mobile apps and web platforms to e-commerce and custom software. Serving businesses globally.",
};

const EcommerceAppPage = () => {
    const services = [
        {
            title: 'Custom E-Commerce Web & App Development',
            description: 'Bespoke online stores built from scratch or on Shopify, WooCommerce, and Magento — designed to convert browsers into buyers at every step.',
            active: false
        },
        {
            title: 'Mobile Shopping App Development',
            description: 'Native iOS and Android shopping apps with seamless checkout, push notification campaigns, and personalized product recommendations.',
            active: false
        },
        {
            title: 'Headless Commerce  Architecture',
            description: 'Decouple your frontend from your backend for unlimited flexibility — deliver shopping experiences across web, mobile, kiosks, and voice assistants.',
            active: false
        },
        {
            title: 'Multi-Vendor Marketplace Development',
            description: 'Scalable marketplace platforms connecting buyers and sellers — with vendor dashboards, commission engines, and dispute management systems.',
            active: false
        },
        {
            title: 'E-Commerce ERP & Inventory Integration',
            description: 'Connect your store to your warehouse, ERP, and logistics systems for real-time inventory management and automated order fulfillment.',
            active: false
        },
        {
            title: 'Subscription & Recurring Commerce',
            description: 'Membership models, subscription boxes, and recurring billing systems with smart dunning, pause/resume, and churn prevention features.',
            active: false
        }
    ];

    const tabs = [
        {
            id: 'frictionless-checkout-process',
            title: 'One-Click & Guest Checkout',
            contentTitle: 'One-Click & Guest Checkout',
            contentDesc: 'Frictionless checkout flows that reduce cart abandonment and increase purchase completion rates across all devices.',
            icon: '/industries/ecommerce-app-development/tab-icon-01.webp', 
            image: '/industries/ecommerce-app-development/tab-mockup-01.webp'
        },
        {
            id: 'ai-powered-product-recommendations',
            title: 'AI-Powered Product Recommendations',
            contentTitle: 'AI-Powered Product Recommendations',
            contentDesc: 'Personalized recommendation engines that surface the right products to the right users at exactly the right moment.',
            icon: '/industries/ecommerce-app-development/tab-icon-02.webp',
            image: '/industries/ecommerce-app-development/tab-mockup-02.webp'
        },
        {
            id: 'advanced-search-and-filtering',
            title: 'Advanced Search & Filtering',
            contentTitle: 'Advanced Search & Filtering',
            contentDesc: 'Fast, faceted search with smart filters, autocomplete, and visual search capabilities that help customers find what they need instantly.',
            icon: '/industries/ecommerce-app-development/tab-icon-3.webp',
            image: '/industries/ecommerce-app-development/tab-mockup-03.webp'
        },
        {
            id: 'multi-payment-gateway-support',
            title: 'Multi-Payment Gateway Support',
            contentTitle: 'Multi-Payment Gateway Support',
            contentDesc: 'Accept credit cards, PayPal, Apple Pay, Google Pay, BNPL, and local payment methods — globally, with one integration.',
            icon: '/industries/ecommerce-app-development/tab-icon-04.webp',
            image: '/industries/ecommerce-app-development/tab-mockup-04.webp'
        }
    ];

    const solutions = [
        {
            title: 'Grocery Delivery Apps',
            description: 'High-performance apps featuring real-time inventory, route optimization for drivers, and seamless scheduled deliveries for local groceries.',
            image: '/industries/solution-1.webp',
            active: false
        },
        {
            title: 'Fashion & Beauty Apps',
            description: 'Engaging apps featuring virtual try-ons, high-quality product visuals, and personalized style recommendations for fashion brands.',
            image: '/industries/solution-2.webp',
            active: false
        },
        {
            title: 'Electronics & Gadgets',
            description: 'Robust platforms featuring detailed product specifications, comparison tools, and secure tech support integration for electronics retailers.',
            image: '/industries/solution-3.webp',
            active: false
        },
        {
            title: 'Subscription Box Apps',
            description: 'Recurring billing and subscription management platforms for brands offering curated monthly boxes and membership-based services.',
            image: '/industries/solution-4.webp',
            active: false
        }
    ];

    return (
        <main>
            <IndustryBanner 
                industryLabel="Ecommerce Industry"
                mainTitle={<>
                <span style={{ color: 'var(--primary-color)' }}>Sell More</span>. <span style={{ color: 'var(--primary-color)' }}>Cart Less</span>. Build an <span style={{ color: 'var(--primary-color)' }}> Online Store</span> That Actually <span style={{ color: 'var(--primary-color)' }}>Converts</span>.</>}
                description="E-commerce isn't just about having a store online — it's about building an experience that makes people want to buy. We design and develop high-converting e-commerce platforms that turn visitors into customers and customers into loyal fans."
                bgImage="/industries/ecommerce-app-development/banner-bg.webp" 
            />
            
            <IndustryServicesSection 
                title="<span style='color: var(--primary-color)'>E-Commerce Development</span> Solutions Built for <span style='color: var(--primary-color)'>Conversion</span>, <span style='color: var(--primary-color)'>Speed</span>, and <span style='color: var(--primary-color)'>Scale</span>"
                description="Your store needs to be fast, beautiful, and trusted. We build custom e-commerce platforms, mobile shopping apps, and headless commerce solutions that are engineered for performance and designed for conversion. "
                servicesData={services}
                mockupImage="/industries/ecommerce-app-development/services-mockup.webp" 
            />

            <IndustryConsultationSection 
                title={<>Your <span style={{ color: 'var(--primary-color)' }}>E-Commerce Platform</span> Should <span style={{ color: 'var(--primary-color)' }}>Work</span> As <span style={{ color: 'var(--primary-color)' }}>Hard</span> As You Do</>}
                subLabel="High-Converting E-Commerce Solutions"
                description="We've helped brands across fashion, electronics, food, and B2B grow their online revenue with platforms built for real-world traffic, real customers, and real business goals. Every store we build is a conversion machine."
            />

            <IndustryTabsSection 
                title={<><span style={{ color: 'var(--primary-color)' }}>E-Commerce</span> Features That Drive <span style={{ color: 'var(--primary-color)' }}>Sales</span>, <span style={{ color: 'var(--primary-color)' }}>Reduce Drop-Off</span>, and <span style={{ color: 'var(--primary-color)' }}>Grow Revenue</span></>}
                description="We build robust, scalable solutions backed by years of experience serving businesses in Healthcare, Finance, E-Commerce, and Education — with technology that drives real results."
                tabsData={tabs}
            />

           <IndustryFeaturesSection />
            <IndustrySolutionsSlider />
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

export default EcommerceAppPage;
