/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // reactCompiler: true,
  async redirects() {
    return [
      // Main Pages
      {
        source: '/about-us.php',
        destination: '/about-us',
        statusCode: 301,
      },
      {
        source: '/case-studies.php',
        destination: '/case-studies',
        statusCode: 301,
      },
      {
        source: '/contact-us.php',
        destination: '/contact-us',
        statusCode: 301,
      },
      // Services Pages
      {
        source: '/ios-app-development-services.php',
        destination: '/services/ios-app-development-services',
        statusCode: 301,
      },
      {
        source: '/android-app-development-services.php',
        destination: '/services/android-app-development-services',
        statusCode: 301,
      },
      {
        source: '/react-native-app-development-services.php',
        destination: '/services/react-native-app-development-services',
        statusCode: 301,
      },
      {
        source: '/game-app-development-services.php',
        destination: '/services/mobile-game-development-services',
        statusCode: 301,
      },
      {
        source: '/flutter-app-development-services.php',
        destination: '/services/flutter-app-development-services',
        statusCode: 301,
      },
      {
        source: '/vr-app-development-services.php',
        destination: '/services/ar-vr-app-development-services',
        statusCode: 301,
      },
      {
        source: '/wearable-app-development-services.php',
        destination: '/services/wearable-app-development-services',
        statusCode: 301,
      },
      {
        source: '/app-prototyping-services.php',
        destination: '/services/app-prototyping-services',
        statusCode: 301,
      },
      {
        source: '/app-store-optimization-services.php',
        destination: '/services/app-store-optimization-services',
        statusCode: 301,
      },
      // Industry Pages
      {
        source: '/education-industry.php',
        destination: '/industries/education-app-development',
        statusCode: 301,
      },
      {
        source: '/insurance-industry.php',
        destination: '/industries/insurance-app-development',
        statusCode: 301,
      },
      {
        source: '/automotive-industry.php',
        destination: '/industries/automotive-app-development',
        statusCode: 301,
      },
      {
        source: '/agencies-industry.php',
        destination: '/industries/agencies-app-development',
        statusCode: 301,
      },
      {
        source: '/travel-industry.php',
        destination: '/industries/travel-app-development',
        statusCode: 301,
      },
      {
        source: '/financial-industry.php',
        destination: '/industries/finance-app-development',
        statusCode: 301,
      },
      {
        source: '/healthcare-app-development-services.php',
        destination: '/industries/healthcare-app-development',
        statusCode: 301,
      },
      {
        source: '/ecommerce-app-development-services.php',
        destination: '/industries/ecommerce-app-development',
        statusCode: 301,
      },
      {
        source: '/real-estate-app-development-services.php',
        destination: '/industries/real-estate-app-development',
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;

