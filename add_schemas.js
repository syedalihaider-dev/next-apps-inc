const fs = require('fs');
const path = require('path');

const schemas = {
  'services/android-app-development-services': `{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "Android App Development",
    "description": "Next Apps Inc builds high-performance native Android apps for startups and enterprises across retail, healthcare, fintech, and logistics. Our certified Android developers deliver scalable, seamless apps optimized for every device and screen size with custom design and smooth API integration.",
    "brand": {
        "@type": "brand",
        "name": "Next Apps Inc"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1876"
    }
}`,
  'services/app-prototyping-services': `{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "App Prototyping",
    "description": "Next Apps Inc turns your app concept into a clickable, testable, investor-ready prototype in days. Our prototyping service helps you validate your idea before committing full development resources, saving time and money on costly revisions later.",
    "brand": {
        "@type": "brand",
        "name": "Next Apps Inc"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "ratingCount": "1654"
    }
}`,
  'services/app-store-optimization-services': `{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "App Store Optimization",
    "description": "Next Apps Inc boosts your app's organic visibility on the App Store and Google Play through keyword strategy, conversion-focused listing design, and review management. Our ASO experts help you get more installs without increasing your paid acquisition budget.",
    "brand": {
        "@type": "brand",
        "name": "Next Apps Inc"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.6",
        "ratingCount": "1589"
    }
}`,
  'services/ar-vr-app-development-services': `{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "AR/VR App Development",
    "description": "Next Apps Inc builds immersive augmented and virtual reality applications using Unity, ARKit, ARCore, and Unreal Engine. From virtual try-ons to safety training simulations, our AR/VR team creates experiences that transform how users interact with your brand.",
    "brand": {
        "@type": "brand",
        "name": "Next Apps Inc"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1921"
    }
}`,
  'services/blockchain-mobile-app-development-services': `{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "Blockchain Mobile App Development",
    "description": "Next Apps Inc develops secure blockchain-powered mobile apps including crypto wallets, NFT marketplaces, DeFi platforms, and supply chain tracking apps. Our blockchain engineers handle smart contracts, DApp architecture, and security audits with usability at the core.",
    "brand": {
        "@type": "brand",
        "name": "Next Apps Inc"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "ratingCount": "1742"
    }
}`,
  'services/cross-platform-app-development-services': `{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "Cross Platform App Development",
    "description": "Next Apps Inc builds cross-platform apps using Flutter and React Native that feel native on both iOS and Android from a single codebase. Reach both platforms simultaneously without the overhead of two separate teams, reducing development time and cost.",
    "brand": {
        "@type": "brand",
        "name": "Next Apps Inc"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "2103"
    }
}`,
  'services/flutter-app-development-services': `{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "Flutter App Development",
    "description": "Next Apps Inc builds Flutter apps for startups and enterprises needing both iOS and Android platforms without doubling development costs. Our Flutter engineers combine Dart expertise with UI design sensibilities to deliver fast, maintainable apps that look perfect on every screen.",
    "brand": {
        "@type": "brand",
        "name": "Next Apps Inc"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1834"
    }
}`,
  'services/ios-app-development-services': `{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "iOS App Development",
    "description": "Next Apps Inc crafts polished Apple-certified iOS apps using advanced Swift development. Our iOS developers respect Apple's Human Interface Guidelines while pushing boundaries, delivering bespoke UI/UX design and exclusive Apple feature integration for flawless performance.",
    "brand": {
        "@type": "brand",
        "name": "Next Apps Inc"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "2056"
    }
}`,
  'services/mobile-game-development-services': `{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "Mobile Game Development",
    "description": "Next Apps Inc develops engaging 2D and 3D mobile games using Unity and Unreal Engine. From casual titles to fully immersive multiplayer experiences, our game development team handles concept, art, development, testing, monetization strategy, and store submission.",
    "brand": {
        "@type": "brand",
        "name": "Next Apps Inc"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "ratingCount": "1687"
    }
}`,
  'services/mobile-web-app-development-services': `{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "Mobile Web App Development",
    "description": "Next Apps Inc builds progressive web apps that load fast, work offline, and deliver a native-like experience directly in the browser. PWAs are faster to build, easier to update, and more accessible than native apps — no App Store required.",
    "brand": {
        "@type": "brand",
        "name": "Next Apps Inc"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.6",
        "ratingCount": "1534"
    }
}`,
  'services/react-native-app-development-services': `{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "React Native App Development",
    "description": "Next Apps Inc builds React Native apps that render native UI components on iOS and Android from a shared JavaScript codebase. Our React Native engineers bring full-stack mobile expertise from architecture through App Store submission to every engagement.",
    "brand": {
        "@type": "brand",
        "name": "Next Apps Inc"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1912"
    }
}`,
  'services/wearable-app-development-services': `{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "Wearable App Development",
    "description": "Next Apps Inc builds native and companion wearable apps for Apple Watch, Wear OS, Fitbit, and custom IoT devices. Our wearable developers create focused, real-time experiences optimized for the wrist with seamless connectivity to your iOS and Android ecosystem.",
    "brand": {
        "@type": "brand",
        "name": "Next Apps Inc"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "ratingCount": "1623"
    }
}`,
  'industries/ecommerce-app-development': `{
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
}`,
  'industries/education-app-development': `{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "Education App Development",
    "description": "Next Apps Inc develops e-learning platforms, LMS systems, virtual classrooms, and educational mobile apps. Our EdTech team builds engaging learning management systems, corporate training platforms, and gamified educational experiences for students, teachers, and institutions.",
    "brand": {
        "@type": "brand",
        "name": "Next Apps Inc"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "ratingCount": "1756"
    }
}`,
  'industries/finance-app-development': `{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "Finance App Development",
    "description": "Next Apps Inc builds secure, scalable fintech platforms including digital banking, investment tools, payment systems, and accounting applications. Our finance development team delivers enterprise-grade security with bank-grade encryption and regulatory compliance.",
    "brand": {
        "@type": "brand",
        "name": "Next Apps Inc"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "2134"
    }
}`,
  'industries/healthcare-app-development': `{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "Healthcare App Development",
    "description": "Next Apps Inc builds HIPAA-compliant healthcare apps, patient portals, telemedicine platforms, and clinical systems. Our healthcare solutions are designed for real clinical environments with secure video consultations, EHR integration, and medical device connectivity.",
    "brand": {
        "@type": "brand",
        "name": "Next Apps Inc"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1889"
    }
}`,
  'industries/insurance-app-development': `{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "Insurance App Development",
    "description": "Next Apps Inc builds policy management systems, claims automation platforms, agent portals, and customer-facing apps for InsurTech startups and established carriers. Our insurance solutions handle real-world complexity with compliance-ready architecture.",
    "brand": {
        "@type": "brand",
        "name": "Next Apps Inc"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "ratingCount": "1645"
    }
}`,
  'industries/agencies-app-development': `{
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
}`,
  'industries/real-estate-app-development': `{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "Real Estate App Development",
    "description": "Next Apps Inc builds property search platforms, agent CRM, transaction management tools, virtual tour apps, and property management systems for residential, commercial, and rental markets. MLS/IDX integration, map-based browsing, and digital deal closing.",
    "brand": {
        "@type": "brand",
        "name": "Next Apps Inc"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1823"
    }
}`,
  'industries/automotive-app-development': `{
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
}`,
  'industries/travel-app-development': `{
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "Travel App Development",
    "description": "Next Apps Inc builds travel booking platforms, hotel reservation systems, flight booking apps, and tourism solutions for OTAs, hotels, airlines, and tour operators. GDS integration, dynamic pricing, and seamless multi-provider checkout for travel businesses.",
    "brand": {
        "@type": "brand",
        "name": "Next Apps Inc"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1756"
    }
}`
};

const srcDir = path.join(__dirname, 'src', 'app');

for (const [route, schemaStr] of Object.entries(schemas)) {
  const pagePath = path.join(srcDir, route, 'page.js');
  
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    if (!content.includes('type="application/ld+json"')) {
      const escapedSchema = schemaStr.replace(/`/g, '\\\\`');
      const scriptMarkup = '\\n            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `' + escapedSchema + '` }} />';
      
      content = content.replace('<main>', '<main>' + scriptMarkup);
      fs.writeFileSync(pagePath, content, 'utf8');
      console.log('Successfully updated', pagePath);
    }
  } else {
    console.error('File not found:', pagePath);
  }
}
