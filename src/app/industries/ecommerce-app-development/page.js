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

    const ecommerceFeatures1 = [
        {
            title: 'Product Search',
            content: 'Help shoppers find products faster with smart filters, voice search, and instant suggestions across large catalogs.'
        },
        {
            title: 'Wishlist & Saved Carts',
            content: 'Let shoppers save favorites, revisit abandoned carts, and receive alerts when prices drop or stock returns.'
        },
        {
            title: 'Secure Payments',
            content: 'Accept cards, digital wallets, and bank transfers through PCI-compliant gateways built to protect every customer transaction.'
        },
        {
            title: 'Fast Mobile Checkout',
            content: 'Let customers complete purchases in seconds with saved addresses, stored payment methods, and a frictionless checkout.'
        },
        {
            title: 'Push Notifications & Offers',
            content: 'Re-engage customers with timely promotions, flash sale alerts, and personalized messages sent at the right moment.'
        },
        {
            title: 'Personalized Product Recommendations',
            content: 'Boost average order value with AI-driven suggestions based on browsing history, past purchases, and trending products.'
        }
    ];

    const ecommerceFeatures2 = [
        {
            title: 'Ratings & Reviews',
            content: 'Build trust with verified reviews, photo uploads, and star ratings that help customers choose with confidence.'
        },
        {
            title: 'Inventory & Catalog Management',
            content: 'Update listings, stock levels, and pricing in real time from one dashboard across every sales channel.'
        },
        {
            title: 'Order Tracking',
            content: 'Keep buyers informed with live shipment updates, delivery estimates, and instant alerts from warehouse to doorstep.'
        },
        {
            title: 'Loyalty & Rewards Programs',
            content: 'Turn first-time buyers into repeat customers with points, tiered rewards, referral bonuses, and exclusive member-only deals.'
        },
        {
            title: 'Multi-Vendor Marketplace Support',
            content: 'Onboard sellers, manage commissions, and run a full marketplace with vendor dashboards and fully automated payouts.'
        },
        {
            title: 'Analytics & Insights',
            content: 'Track conversion rates, cart abandonment, and best-selling products through clear dashboards that guide smarter business decisions.'
        }
    ];

    const ecommerceSolutions = [
        {
            title: 'Grocery Delivery Apps',
            description: 'High-performance apps featuring real-time inventory, route optimization for drivers, and seamless scheduled deliveries for local groceries.',
            image: '/industries/ecommerce-app-development/solution-1.webp',
            active: false
        },
        {
            title: 'Fashion & Beauty Apps',
            description: 'Engaging apps featuring virtual try-ons, high-quality product visuals, and personalized style recommendations for fashion brands.',
            image: '/industries/ecommerce-app-development/solution-2.webp',
            active: false
        },
        {
            title: 'Electronics & Gadgets',
            description: 'Robust platforms featuring detailed product specifications, comparison tools, and secure tech support integration for electronics retailers.',
            image: '/industries/ecommerce-app-development/solution-3.webp',
            active: false
        },
        {
            title: 'Subscription Box Apps',
            description: 'Recurring billing and subscription management platforms for brands offering curated monthly boxes and membership-based services.',
            image: '/industries/ecommerce-app-development/solution-4.webp',
            active: false
        }
    ];

    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "eCommerce App Development",
    "description": "Next Apps Inc builds high-converting e-commerce platforms, mobile shopping apps, and headless commerce solutions for fashion, electronics, food, and B2B businesses. Custom storefronts, seamless checkout flows, and integrated payment gateways engineered for real traffic.",
    "brand": {
        "@type": "brand",
        "name": "Next Apps Inc"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1967"
    }
}` }} />
            <IndustryBanner 
                industryLabel="Ecommerce Industry"
                mainTitle={<>
                <span style={{ color: 'var(--primary-color)' }}>Sell More</span>. <span style={{ color: 'var(--primary-color)' }}>Cart Less</span>. Build an <span style={{ color: 'var(--primary-color)' }}> Online Store</span> That Actually <span style={{ color: 'var(--primary-color)' }}>Converts</span>.</>}
                description="E-commerce isn't just about having a store online — it's about building an experience that makes people want to buy. We design and develop high-converting e-commerce platforms that turn visitors into customers and customers into loyal fans."
                bgImage="/industries/ecommerce-app-development/banner-bg.webp" 
            />
            
            <IndustryServicesSection 
                title="<span style='color: var(--primary-color)'>E-Commerce Development</span> Solutions Built for <span style='color: var(--primary-color)'>Conversion</span>, <span style='color: var(--primary-color)'>Speed</span>, and <span style='color: var(--primary-color)'>Scale</span>"
                description="Your online store needs reliable performance, clear navigation, and a convenient checkout process. We build custom e-commerce platforms, mobile shopping apps, and headless commerce solutions that are engineered for performance and designed for conversion."
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

            <IndustryFeaturesSection
                title={<>Shopping <span style={{ color: 'var(--primary-color)' }}>Mobile App Features</span> to Build Successful <span style={{ color: 'var(--primary-color)' }}>Ecommerce Platforms</span></>}
                description="We've Received Awards And Recognition For Our Quality-First Approach, Delivering High-Converting Ecommerce Platforms With Our Skilled Team Of Developers, Designers, And Project Managers."
                mockupImage="/industries/ecommerce-app-development/feature-phones.webp"
                features1={ecommerceFeatures1}
                features2={ecommerceFeatures2}
            />
            <IndustrySolutionsSlider
                title={<>Next-Gen <span style={{ color: 'var(--primary-color)' }}>Retail App Solutions</span> For Modern <span style={{ color: 'var(--primary-color)' }}>Shopping Needs</span></>}
                solutionsData={ecommerceSolutions}
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

export default EcommerceAppPage;
