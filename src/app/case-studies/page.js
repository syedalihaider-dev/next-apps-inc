import CaseStudyBanner from '@/components/case-studies/CaseStudyBanner';
import CaseStudyProject from '@/components/case-studies/CaseStudyProject';
import YesTableProject from '@/components/case-studies/YesTableProject';
import MarhoferProject from '@/components/case-studies/MarhoferProject';
import Appointment from "@/components/common/Appointment";
import Testimonials from "@/components/common/Testimonials";
import ContactSection from "@/components/common/ContactSection";

export const metadata = {
    title: "Case Studies | Next Apps",
    description: "Explore our successful projects and see how we help businesses grow with innovative mobile solutions.",
};

const CaseStudiesPage = () => {
    return (
        <main>
            <CaseStudyBanner />
            <CaseStudyProject />
            <YesTableProject />
            <MarhoferProject />
            <Appointment />
            <Testimonials />
            <ContactSection />
        </main>
    );
};

export default CaseStudiesPage;
