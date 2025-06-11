
import { useState } from "react";
import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Equipment", "Facilities", "Projects", "Manufacturing"];

  const galleryItems = [
    {
      title: "Precast Segment Mould",
      category: "Equipment",
      description: "Precision engineered moulds for bridge segments",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Launching Girder in Action",
      category: "Equipment",
      description: "Heavy-duty launching girder during bridge construction",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Fabrication Workshop",
      category: "Facilities",
      description: "State-of-the-art manufacturing facility in Bhopal",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Quality Control Lab",
      category: "Facilities",
      description: "Advanced testing and quality assurance facility",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Mumbai Metro Bridge",
      category: "Projects",
      description: "Completed precast segmental bridge construction",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Highway Overpass",
      category: "Projects",
      description: "Multi-span highway bridge using post-tensioned girders",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Segment Casting",
      category: "Manufacturing",
      description: "Precast segment production line",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Steel Fabrication",
      category: "Manufacturing",
      description: "Precision steel structure fabrication",
      image: "https://images.unsplash.com/photo-1565072318004-1fe9b1a2ee89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div>
      <Hero
        title="Gallery"
        subtitle="Explore Our Equipment, Facilities, and Project Achievements"
        backgroundImage="https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium mb-2">
                    {item.category}
                  </span>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No items found for the selected category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
