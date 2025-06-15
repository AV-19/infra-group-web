
import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const companies = [
  {
    name: "RKC Infratech",
    specialization: "Design Consultancy",
    contact: "rkcinfra@gmail.com",
    mobile: "+91 7880123365"
  },
  {
    name: "Imagineering Bridges",
    specialization: "Fabrication Services",
    contact: "rkc@imagineeringbridges.com",
    mobile: "+91 950605713"
  },
  {
    name: "Riyare Micro Construct",
    specialization: "Bridge Construction",
    contact: "riyaremicroconstruct@gmail.com",
    mobile: "+91 7880123365"
  },
  {
    name: "R.K. Choubey Family Office",
    specialization: "Investment & CSR",
    contact: "invest@rkchoubey.com",
    mobile: ""
  }
];

const colorVariants = [
  "from-blue-100 via-blue-50 to-white",
  "from-green-100 via-green-50 to-white",
  "from-yellow-100 via-yellow-50 to-white",
  "from-purple-100 via-purple-50 to-white"
];

const CompanyDirectory = () => (
  <section className="mt-16 animate-fade-in">
    <h2 className="text-3xl font-bold text-center text-primary mb-8">
      Contact Our Specialized Firms Directly
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {companies.map((company, i) => (
        <Card
          key={company.name}
          className={`rounded-xl shadow-md p-6 flex flex-col items-center text-center bg-gradient-to-br ${colorVariants[i % colorVariants.length]} hover:shadow-xl transition-shadow`}
        >
          <h3 className="font-semibold text-gray-900 mb-1 text-lg">{company.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{company.specialization}</p>
          <div className="flex flex-col items-center gap-1 text-primary">
            <div className="flex items-center gap-1">
              <Mail size={16} className="mr-1" />
              <a href={`mailto:${company.contact}`} className="underline">{company.contact}</a>
            </div>
            {company.mobile && (
              <div className="flex items-center gap-1">
                <Phone size={16} className="mr-1" />
                <a href={`tel:${company.mobile.replace(/\s/g, "")}`} className="underline">{company.mobile}</a>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  </section>
);

export default CompanyDirectory;
