
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  image?: string;
  className?: string;
}

const ServiceCard = ({ title, description, link, image, className = "" }: ServiceCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${className}`}>
      {image && (
        <div className="h-48 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
          <div className="text-primary text-6xl">🏗️</div>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Link 
          to={link}
          className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
        >
          Learn More
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
