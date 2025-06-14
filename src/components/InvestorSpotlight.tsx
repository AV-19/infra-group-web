
import { TrendingUp, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  <section className="py-16 bg-gradient-to-br from-indigo-900 via-blue-900 to-black text-white relative overflow-hidden" id="investor-spotlight">
    <div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10 flex flex-col gap-10 md:gap-6">
      {/* Section Header */}
      <div className="text-center mb-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
          Building Beyond Bridges — Investing in India's Infrastructure Future
        </h2>
        <p className="text-lg opacity-90 max-w-xl mx-auto font-medium leading-relaxed">
          <span className="font-semibold text-yellow-400">R.K. Choubey Family Office</span>{" "}
          is strategically funding the next generation of infrastructure innovation.
        </p>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-6 md:items-stretch">
        {/* Chart card */}
        <Card className="flex-1 bg-white/5 rounded-xl shadow-2xl p-4 flex flex-col items-center justify-between min-w-[210px] max-w-md border-none">
          <CardHeader className="flex flex-row items-center gap-2 p-0 mb-4">
            <TrendingUp className="text-green-400" size={20} />
            <CardTitle className="text-lg font-bold text-white !mb-0">Portfolio</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-2 p-0">
            <div className="w-[170px] h-[170px]">
              <InvestmentDonutChart data={investmentStats} width={170} height={170} />
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
          </CardContent>
        </Card>
        
        {/* Stats + CTA card */}
        <div className="flex-1 flex flex-col gap-6 justify-between min-w-[230px]">
          {/* Key Stats */}
          <Card className="bg-white/5 rounded-xl shadow-2xl border-none">
            <CardContent className="p-4 grid grid-cols-2 gap-4">
              {statsArr.map((s, i) => (
                <div
                  key={i}
                  className={`text-center rounded-lg px-1 py-3 hover:bg-white/10 transition text-xs`}
                >
                  <div className={`text-2xl font-bold mb-1 ${s.color}`}>{s.value}</div>
                  <div className="opacity-80">{s.label}</div>
                </div>
              ))}
            </CardContent>
          </Card>
          {/* CTA */}
          <Card className="bg-gradient-to-tr from-yellow-400 via-yellow-300/80 to-white/60 shadow-lg border-none">
            <CardContent className="p-4 flex items-center justify-center">
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold px-6 py-3 rounded-lg shadow flex items-center"
              >
                <Link to="/rkchoubey-family-office" className="flex items-center gap-2 text-lg font-semibold">
                  <Lightbulb className="mr-1" size={20} />
                  Explore Opportunities
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    {/* Bottom flair */}
    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-primary/80 via-transparent to-transparent pointer-events-none z-0"></div>
  </section>
);

export default InvestorSpotlight;

