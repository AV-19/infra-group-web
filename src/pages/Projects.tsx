
import { useState } from "react";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "RKC Infratech", "Imagineering Bridges", "Riyare Micro Construct"];

  const projects = [
    {
      title: " MAJOR BRIDGE OVER KRISHNA RIVER",
      firm: "Riyare Micro Construct",
      type: " GROUND SUPPORT SYSTEM (UNDER SLUNG LAUNCHING GIRDER)",
      location: "Vijaywada",
      year: "2024",
      details: "NAVYUGA ENGINERING COMPANY LTD",
      image: "🚇"
    },
    {
      title: "Yamuna Expressway Bridge",
      firm: "RKC Infratech",
      type: "Design Consultancy",
      location: "Uttar Pradesh",
      year: "2023",
      details: "Temporary structure design for 120m span post-tensioned girder bridge",
      image: "🌉"
    },
    {
      title: "Segment Moulds for Delhi-NCR Project",
      firm: "Imagineering Bridges",
      type: "Fabrication",
      location: "Bhopal, Madhya Pradesh",
      year: "2023",
      details: "Precision fabricated precast segment moulds for metro rail project",
      image: "⚙️"
    },
    {
      title: "Pune River Crossing",
      firm: "Riyare Micro Construct",
      type: "Extra-Dosed Bridge",
      location: "Pune, Maharashtra",
      year: "2023",
      details: "180m main span extra-dosed bridge using balanced cantilever method",
      image: "🌊"
    },
    {
      title: "Launching Girders Manufacturing",
      firm: "Imagineering Bridges",
      type: "Fabrication",
      location: "Bhopal, Madhya Pradesh",
      year: "2022",
      details: "Custom launching girders for highway overpass construction",
      image: "🏗️"
    },
    {
      title: "Highway Overpass Design",
      firm: "RKC Infratech",
      type: "Design Consultancy",
      location: "Rajasthan",
      year: "2022",
      details: "Comprehensive temporary structure design for multi-span highway bridge",
      image: "🛣️"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.firm === activeFilter);

  return (
    <div>
      <Hero
        title="Our Projects"
        subtitle="Showcasing Excellence Across India's Infrastructure Landscape"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="mb-2"
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{project.image}</span>
                  </div>
                  <CardTitle className="text-lg text-center">{project.title}</CardTitle>
                  <div className="text-center">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {project.firm}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-primary font-medium mb-2">{project.type}</p>
                  <p className="text-gray-600 mb-2">{project.location}</p>
                  <p className="text-sm text-gray-500 mb-3">{project.year}</p>
                  <p className="text-gray-600 text-sm">{project.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
