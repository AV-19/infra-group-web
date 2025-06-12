
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: ""
    });
  };

  const services = [
    "RKC Infratech - Design Consultancy",
    "Imagineering Bridges - Fabrication",
    "Riyare Micro Construct - Bridge Construction",
    "R.K. Choubey Family Office - Investment/CSR",
    "General Inquiry"
  ];

  const contactInfo = [
    {
      title: "Headquarters",
      details: "85,RRR HOUSE, CAPITOL HILL (ALPINE JEWEL), KOLAR ROAD
BHOPAL, Madhya Pradesh 462042, India",
      icon: "📍"
    },
    {
      title: "Email",
      details: "engg.rch@gmail.com",
      icon: "📧"
    },
    {
      title: "Phone",
      details: "+91 788012365",
      icon: "📞"
    },
    {
      title: "Business Hours",
      details: "Mon - Sun: 9:00 AM - 6:30 PM",
      icon: "🕒"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">
            Ready to start your next infrastructure project? Get in touch with our expert team.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company/Organization
                </label>
                <Input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                  placeholder="Tell us about your project requirements, timeline, and any specific questions you have..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      <p className="text-gray-600">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Location</h3>
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-primary text-6xl mb-4">🗺️</div>
                  <p className="text-gray-600">Interactive map coming soon</p>
                  <p className="text-sm text-gray-500">Bhopal, Madhya Pradesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Cards */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Contact Our Specialized Firms Directly
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "RKC Infratech",
                specialization: "Design Consultancy",
                contact: "rkcinfra@gmail.com",
                mobile : "+91 7880123365"
              },
              {
                name: "Imagineering Bridges",
                specialization: "Fabrication Services",
                contact: "rkc@imagineeringbridges.com",
                mobile : "+91 950605713"
              },
              {
                name: "Riyare Micro Construct",
                specialization: "Bridge Construction",
                contact: "riyaremicroconstruct@gmail.com",
                mobile : "+91 7880123365"
              },
              {
                name: "R.K. Choubey Family Office",
                specialization: "Investment & CSR",
                contact: "invest@rkchoubey.com",
                mobile : "+91 "
              }
            ].map((company, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">{company.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{company.specialization}</p>
                <p className="text-primary text-sm font-medium">{company.contact}</p>
                <p className="text-primary text-sm font-medium">{company.mobile}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
