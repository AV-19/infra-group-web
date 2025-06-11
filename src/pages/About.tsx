
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const leadership = [
    {
      name: "R.K. Choubey",
      position: "Chairman & Founder",
      bio: "With over 20 years of experience in infrastructure development, R.K. Choubey has been instrumental in shaping India's bridge construction landscape.",
      image: "👨‍💼"
    },
    {
      name: "Engineering Team",
      position: "Technical Leadership",
      bio: "Our team of highly qualified engineers brings decades of combined experience in structural design and construction management.",
      image: "👥"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Pioneering advanced construction methodologies and embracing cutting-edge technology.",
      icon: "💡"
    },
    {
      title: "Quality",
      description: "Uncompromising commitment to excellence in every project we undertake.",
      icon: "⭐"
    },
    {
      title: "Safety",
      description: "Prioritizing the highest safety standards in all our construction activities.",
      icon: "🛡️"
    },
    {
      title: "Sustainability",
      description: "Building infrastructure that supports long-term environmental and economic sustainability.",
      icon: "🌱"
    }
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "ISO 14001:2015 Environmental Management",
    "OHSAS 18001:2007 Occupational Health & Safety",
    "NHAI Approved Contractor",
    "Indian Railways Approved Vendor"
  ];

  return (
    <div>
      <Hero
        title="About RKC Infratech Group"
        subtitle="Building India's Infrastructure Legacy Since 2008"
      />

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be India's leading infrastructure group, setting benchmarks in bridge construction, 
                design innovation, and strategic investment in infrastructure technology.
              </p>
              <p className="text-lg text-gray-600">
                We envision a future where our expertise contributes significantly to India's 
                infrastructure development, creating lasting value for communities and the nation.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To deliver exceptional infrastructure solutions through our four specialized firms, 
                each excelling in their respective domains while maintaining the highest standards 
                of quality, safety, and innovation.
              </p>
              <p className="text-lg text-gray-600">
                We are committed to fostering technological advancement, supporting emerging talent, 
                and contributing to India's infrastructure growth through strategic investments and partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Experienced leaders driving innovation and excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">{leader.image}</span>
                  </div>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <p className="text-primary font-medium">{leader.position}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Approvals</h2>
            <p className="text-xl text-gray-600">
              Recognized excellence and compliance standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-xl">📜</span>
                </div>
                <h3 className="font-semibold text-gray-900">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
