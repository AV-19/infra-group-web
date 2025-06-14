
import { TrendingUp, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import InvestmentDonutChart from "./InvestmentDonutChart";

const investmentStats = [
  { sector: "Green Tech", percentage: 40, color: "#22c55e" },
  { sector: "Modular Bridges", percentage: 30, color: "#3b82f6" },
  { sector: "Smart Infra", percentage: 20, color: "#a21caf" },
  { sector: "Const. Tech", percentage: 10, color: "#f59e42" }
];

const statsArr = [
  {
    value: "25+",
    label: "Startups Funded",
    color: "text-yellow-400"
  },
  {
    value: "₹200Cr+",
    label: "Total Investment",
    color: "text-green-400"
  },
  {
    value: "80%",
    label: "Success Rate",
    color: "text-blue-400"
  },
  {
    value: "12",
    label: "States Covered",
    color: "text-purple-400"
  }
];

const InvestorSpotlight = () => (
  <section className="py-8 bg-gradient-to-br from-indigo-900 via-blue-900 to-black text-white relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
      <div className="text-center mb-7">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
          Building Beyond Bridges — Investing in India's Infrastructure Future
        </h2>
        <p className="text-base opacity-90 max-w-xl mx-auto leading-relaxed">
          <span className="font-semibold text-yellow-400">R.K. Choubey Family Office</span>{" "}
          is strategically funding the next generation of infrastructure innovation.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 items-center md:items-stretch">
        {/* Pie chart column */}
        <div className="bg-white/5 rounded-xl shadow p-4 flex-1 flex flex-col items-center min-w-[210px] max-w-md">
          <h3 className="text-lg font-semibold mb-5 flex items-center">
            <TrendingUp className="mr-2 text-green-400" size={20} />
            Portfolio
          </h3>
          <div className="w-[170px] h-[170px]">
            <InvestmentDonutChart data={investmentStats} />
          </div>
          <div className="flex flex-wrap mt-4 gap-2 justify-center">
            {investmentStats.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-1 text-xs font-medium"
              >
                <span
                  className="inline-block w-3 h-3 rounded-full"
                  style={{ background: stat.color }}
                />
                <span>{stat.sector}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Stats and CTA column (success story card removed) */}
        <div className="flex-1 flex flex-col gap-4 justify-between min-w-[230px]">
          {/* Key Stats */}
          <div className="grid grid-cols-2 gap-3">
            {statsArr.map((s, i) => (
              <div
                key={i}
                className={`text-center bg-white/5 rounded-lg p-3 hover:scale-105 transition-transform text-xs shadow`}
              >
                <div className={`text-2xl font-bold mb-1 ${s.color}`}>{s.value}</div>
                <div className="opacity-80">{s.label}</div>
              </div>
            ))}
          </div>
          {/* Button */}
          <div className="flex justify-center mt-1">
            <Button
              asChild
              size="sm"
              className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold px-4 py-2 rounded-lg shadow"
            >
              <Link to="/rkchoubey-family-office">
                <Lightbulb className="mr-1" size={16} />
                Explore Opportunities
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
    {/* Subtle gradient flair at the bottom for style */}
    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-primary/80 via-transparent to-transparent pointer-events-none z-0"></div>
  </section>
);

export default InvestorSpotlight;
