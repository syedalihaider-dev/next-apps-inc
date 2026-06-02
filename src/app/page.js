import Banner from "@/components/home/Banner";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import CaseStudy from "@/components/common/CaseStudy";
import ProcessSection from "@/components/home/ProcessSection";
import IndustriesSection from "@/components/common/IndustriesSection";
// import Blog from "@/components/home/Blog";
import Appointment from "@/components/common/Appointment";
import Testimonials from "@/components/common/Testimonials";
import ContactSection from "@/components/common/ContactSection";
import CTASection from "@/components/common/CTASection";

export const metadata = {
    title: "Next Apps | Mobile Apps, Web & Software Development Company",
    description: "Next Apps builds mobile apps, e-commerce platforms, web solutions, custom software, and games that solve real problems. Get a free consultation today.",
};

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Services />
      <CaseStudy />
      <CTASection />
      <ProcessSection />
      <IndustriesSection />
      {/* <Blog /> */}
      <Appointment />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
