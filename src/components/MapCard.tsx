
const MapCard = () => (
  <div className="bg-white rounded-lg shadow-xl animate-fade-in p-0 mb-6">
    <h3 className="text-xl font-bold px-8 pt-6 mb-2 text-primary">Our Location</h3>
    <div className="rounded-lg overflow-hidden shadow-md mx-8">
      <iframe
        title="RKC Infratech Group Location Bhopal with Marker"
        src="https://www.google.com/maps?q=23.184408,77.403228&z=18&output=embed"
        width="100%"
        height="220"
        loading="lazy"
        allowFullScreen={true}
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-56 border-0"
      />
      <div className="text-center text-gray-600 text-xs my-2">
        85, RRR House, Capitol Hill (Alpine Jewel), Kolar Road, Bhopal, MP, India - 462042
      </div>
    </div>
  </div>
);

export default MapCard;
