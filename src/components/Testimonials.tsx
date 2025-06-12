
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Project Manager",
      company: "National Highway Authority",
      content: "RKC Infratech's precision in launching girder design helped us complete our project 2 months ahead of schedule. Their attention to detail is unmatched.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      position: "Chief Engineer",
      company: "Metro Rail Corporation",
      content: "Imagineering Bridges delivered segment molds that met our specifications to the exact millimeter. The quality of fabrication exceeded our expectations.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      position: "Infrastructure Director",
      company: "State Bridge Development Corp",
      content: "Riyare Construct's U-girder installation was flawless. Their team's expertise in bridge construction is evident in every project they undertake.",
      rating: 5
    },
    {
      name: "Anil Patel",
      position: "Investment Head",
      company: "Infrastructure Fund Ltd",
      content: "R.K. Choubey Family Office's strategic funding approach has been instrumental in scaling our infrastructure projects across multiple states.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by leading infrastructure companies across India
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.position}
                  </p>
                  <p className="text-xs text-primary font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
