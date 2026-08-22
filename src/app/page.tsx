import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { AboutSection } from "@/components/AboutSection";
import { CoursesSection } from "@/components/CoursesSection";
import { StatsSection } from "@/components/StatsSection";
import { ContactCTA } from "@/components/ContactCTA";
import { CategorySection } from "@/components/CategorySection";
import { FacultySection } from "@/components/FacultySection";
import { BelieversSection } from "@/components/BelieversSection";
import { TopperSection } from "@/components/TopperSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhyTakshashila } from "@/components/WhyTakshashila";
import { LibrarySection } from "@/components/LibrarySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* 1. Navbar with top bar */}
      <Navbar />

      {/* 2. Hero Slider */}
      <HeroSection />

      {/* 3. Orange marquee ticker */}
      <MarqueeTicker />

      {/* 4. About Section */}
      <AboutSection />

      {/* 5. All Courses */}
      <CoursesSection />

      {/* 6. Orange Stats Bar */}
      <StatsSection />

      {/* 7. Contact CTA */}
      <ContactCTA />

      {/* 8. IAS | PCS | HAS Category Cards */}
      <CategorySection />

      {/* 9. Faculty / Director Section */}
      <FacultySection />

      {/* 10. Meet Our Believers (Students) */}
      <BelieversSection />

      {/* 11. Toppers Section - orange bg */}
      <TopperSection />

      {/* 12. Video + Written Testimonials */}
      <TestimonialsSection />

      {/* 13. Why Choose Us */}
      <WhyTakshashila />

      {/* 14. Library Section */}
      <LibrarySection />

      {/* 15. Contact Form + Map */}
      <ContactSection />

      {/* 16. Footer with Map */}
      <Footer />
    </main>
  );
}
