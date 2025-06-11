
import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  children?: ReactNode;
  className?: string;
}

const Hero = ({ title, subtitle, backgroundImage, children, className = "" }: HeroProps) => {
  const defaultBackground = "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
  
  return (
    <section 
      className={`relative min-h-[60vh] flex items-center justify-center ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage || defaultBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
};

export default Hero;
