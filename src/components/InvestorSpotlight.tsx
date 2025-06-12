
import { TrendingUp, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const InvestorSpotlight = () => {
  const investmentStats = [
    { sector: "Green Technology", percentage: 40, color: "bg-green-500" },
    { sector: "Modular Bridges", percentage: 30, color: "bg-blue-500" },
    { sector: "Smart Infrastructure", percentage: 20, color: "bg-purple-500" },
    { sector: "Construction Tech", percentage: 10, color: "bg-orange-500" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Building Beyond Bridges – Investing in India's Infrastructure Future
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            R.K. Choubey Family Office is strategically funding the next generation of infrastructure innovations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Investment Distribution */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <TrendingUp className="mr-3" size={28} />
              Investment Portfolio Distribution
            </h3>
            <div className="space-y-4">
              {investmentStats.map((stat, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{stat.sector}</span>
                    <span className="font-bold">{stat.percentage}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div 
                      className={`${stat.color} h-3 rounded-full transition-all duration-1000`}
                      style={{ width: `${stat.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial & Stats */}
          <div className="space-y-8">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Users className="mr-3 text-yellow-400" size={24} />
                <h4 className="text-lg font-semibold">Success Story</h4>
              </div>
              <blockquote className="text-lg italic mb-4">
                "Choubey Family Office's strategic investment and mentorship helped us scale our precast technology startup from concept to a ₹50 crore valuation in just 18 months."
              </blockquote>
              <cite className="text-sm opacity-75">
                — Priya Sharma, CEO, ModularBridge Technologies
              </cite>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">25+</div>
                <div className="text-sm opacity-75">Startups Funded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">₹200Cr+</div>
                <div className="text-sm opacity-75">Total Investment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">80%</div>
                <div className="text-sm opacity-75">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">12</div>
                <div className="text-sm opacity-75">States Covered</div>
              </div>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400">
                <Link to="/rkchoubey-family-office">
                  <Lightbulb className="mr-2" size={20} />
                  Explore Investment Opportunities
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorSpotlight;
