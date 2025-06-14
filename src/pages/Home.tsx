
import Hero from "@/components/Hero";
import PainPointsSection from "@/components/PainPointsSection";
import EnhancedServiceCard from "@/components/EnhancedServiceCard";
import ProjectShowcase from "@/components/ProjectShowcase";
import InvestorSpotlight from "@/components/InvestorSpotlight";
import CTAFooterSection from "@/components/CTAFooterSection";
import CounterSection from "@/components/CounterSection";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const firms = [
    {
      title: "RKC INFRATECH",
      tagline: "Where every bolt is drawn before it's cast",
      keyService: "Launching girder design",
      icon: "🖥",
      link: "/rkc-infratech",
      accentColor: "#3B82F6"
    },
    {
      title: "IMAGINEERING BRIDGES",
      tagline: "Fabrication that meets design specs to the millimeter",
      keyService: "Segment mold supply",
      icon: "🏭",
      link: "/imagineering-bridges",
      accentColor: "#F97316"
    },
    {
      title: "RIYARE CONSTRUCT",
      tagline: "Building bridges that outlive their blueprints",
      keyService: "U-girder installation",
      icon: "🌉",
      link: "/riyare-micro-construct",
      accentColor: "#10B981"
    },
    {
      title: "CHOUBEY OFFICE",
      tagline: "Fueling India's next-generation infrastructure",
      keyService: "Angel funding",
      icon: "💰",
      link: "/rkchoubey-family-office",
      accentColor: "#8B5CF6"
    }
  ];

  return (
    <div>
      <Hero
        title="Precision Infrastructure Solutions – From Design to Execution"
        subtitle="4 specialized firms. 1 seamless workflow."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <a href="#firms">Explore Our Expertise</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-blue bg-transparent hover:bg-white hover:text-primary">
            <Link to="/contact">Get a Consultation</Link>
          </Button>
        </div>
      </Hero>

      {/* Pain Points Section */}
      <PainPointsSection />

      {/* The 4 Firms Section */}
      <section id="firms" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Network of Specialized Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Each company brings unique expertise to India's infrastructure development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {firms.map((firm, index) => (
              <EnhancedServiceCard
                key={index}
                title={firm.title}
                tagline={firm.tagline}
                keyService={firm.keyService}
                icon={firm.icon}
                link={firm.link}
                accentColor={firm.accentColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <ProjectShowcase />

      {/* Stats/Counter Section */}
      <CounterSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Investor Spotlight */}
      <InvestorSpotlight />

      {/* CTA Footer Section */}
      <CTAFooterSection />
    </div>
  );
};

export default Home;
