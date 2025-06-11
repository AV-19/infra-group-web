
import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  children?: ReactNode;
  className?: string;
}

const Hero = ({ title, subtitle, backgroundImage, children, className = "" }: HeroProps) => {
  return (
    <section 
      className={`relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary to-primary/80 ${className}`}
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
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
