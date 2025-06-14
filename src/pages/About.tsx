import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const About = () => {
  const leadership = [
    {
      name: "R.K. Choubey",
      position: "Founder, Design - Head Enabling/Temporary Structures Specialist",
      bio: "M. Tech from Dr APJ Abdul Kalam Technical university Lucknow (formerly known as UPTU) and Post Graduate in Project Management from NICMAR. He has 14+ Year experience in Temporary structure design and has worked with reputed organisation in the field of bridge engineering. Have designed various LG, Lifting Frame, Ground Support System, Precast Mould, Pre-tensioning Yard and various type of shuttering. With a passion for structural design, Mr. Choubey brings innovative solutions to bridge consultancy. A keen eye for detail ensures that every project meets industry standards and client expectations. Their experience spans various types of infrastructures, allowing for a versatile approach to problem-solving. Committed to continuous learning, they stay updated on the latest trends and technologies in the field. This dedication translates into exceptional service and client satisfaction, making them a valuable asset in every project.",
      image: "👨‍💼"
    },
    {
      name: "Sai Bhavith EV",
      position: "Sr. Manager Design",
      bio: "M.Tech in Structural Engineering from Vellore Institute of Technology, has 5+ year experience in temporary structure design and has worked with reputed design consultancy firm in India. An expert in temporary structures, this professional excels at creating efficient designs that meet project needs without compromising safety. Their hands-on experience allows them to foresee potential challenges and address them proactively. With a strong background in engineering principles, they ensure that every design is both functional and sustainable. Their collaborative approach fosters strong relationships with clients, ensuring that all requirements are understood and met. Always aiming for excellence, this individual is dedicated to delivering high-quality results on time and within budget. Expert in designing temporary structures with a focus on safety.",
      image: "👥"
    },
    {
      name: "Dheeraj Kumar",
      position: "CAD Engineer",
      bio: "Dedicated to enhancing the field of bridge consultancy, this professional combines technical expertise with innovative thinking. They have successfully worked on numerous high-profile projects, bringing a wealth of knowledge and experience. Their strategic approach to design ensures that each project is not only aesthetically pleasing but also structurally sound. An advocate for teamwork and collaboration, they work closely with clients to understand their vision and bring it to life. Their commitment to quality and efficiency sets them apart in the industry, making every project a success. Innovative CAD engineer for enabling Structure drawings with a strategic approach to drawing.",
      image: "👥"
    },
    {
      name: "Kiran Choubey",
      position: "Human Resourcse -Administration",
      bio: "She has a Bachelor’s Degree in Art from Veer Kumwar Singh University, Bihar. She holds end-to-end responsibility of Human Resource Management and Administration of the Company.",
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

  // State for expanded bios
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const handleReadMore = (index: number) => {
    setExpandedIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const truncate = (text: string, n: number) => {
    return text.length > n ? text.slice(0, n) + "..." : text;
  };

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
            {leadership.map((leader, index) => {
              const isExpanded = expandedIndexes.includes(index);
              const shouldTruncate = leader.bio.length > 120;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">{leader.image}</span>
                    </div>
                    <CardTitle className="text-xl">{leader.name}</CardTitle>
                    <p className="text-primary font-medium">{leader.position}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-2">
                      {isExpanded || !shouldTruncate
                        ? leader.bio
                        : truncate(leader.bio, 120)}
                    </p>
                    {shouldTruncate && (
                      <Button
                        variant="link"
                        className="text-primary p-0 h-auto text-sm"
                        onClick={() => handleReadMore(index)}
                      >
                        {isExpanded ? "Read less" : "Read more"}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
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
