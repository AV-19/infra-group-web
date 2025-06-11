
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectCarousel = () => {
  const featuredProjects = [
    {
      title: "Mumbai Metro Viaduct",
      type: "Precast Segmental Bridge",
      span: "42 spans, 850m total length",
      image: "🚇"
    },
    {
      title: "Yamuna Expressway Bridge",
      type: "Post-Tensioned Girder",
      span: "120m span length",
      image: "🌉"
    },
    {
      title: "Delhi-NCR Flyover",
      type: "U-Girder Construction",
      span: "8 spans, 320m length",
      image: "🏗️"
    },
    {
      title: "Pune River Crossing",
      type: "Extra-Dosed Bridge",
      span: "180m main span",
      image: "🌊"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600">
            Showcasing our expertise across diverse infrastructure challenges
          </p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {featuredProjects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-3xl">{project.image}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-primary font-medium mb-2">{project.type}</p>
                        <p className="text-gray-600">{project.span}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectCarousel;
