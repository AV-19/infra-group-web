
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      title: "RKC Infratech",
      description: "Expert consultancy for enabling and temporary structure design used in bridge and infrastructure projects.",
      link: "/rkc-infratech"
    },
    {
      title: "Imagineering Bridges India LLP",
      description: "Fabrication and supply of all enabling structures including precast segment moulds and launching girders.",
      link: "/imagineering-bridges"
    },
    {
      title: "Riyare Micro Construct LLP",
      description: "Specialists in bridge construction using advanced precast methods and precision engineering.",
      link: "/riyare-micro-construct"
    },
    {
      title: "R.K. Choubey Family Office",
      description: "Angel investment and CSR initiatives supporting Indian startups and infrastructure technology.",
      link: "/rkchoubey-family-office"
    }
  ];

  return (
    <div>
      <Hero
        title="RKC Infratech Group"
        subtitle="Engineering, Building, and Funding India's Future"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link to="/contact">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            <Link to="#services">Our Services</Link>
          </Button>
        </div>
      </Hero>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About RKC Infratech Group
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive infrastructure group comprising four specialized firms, each dedicated to different aspects of bridge construction, design, fabrication, and strategic investment in India's infrastructure future.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Four Specialized Firms
            </h2>
            <p className="text-xl text-gray-600">
              Each company in our group brings unique expertise to India's infrastructure development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                link={service.link}
                image="placeholder"
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` } as any}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-lg">Specialized Firms</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-lg">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build the Future Together?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's discuss how RKC Infratech Group can contribute to your next infrastructure project.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/contact">Let's Work Together</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
