
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">RKC Infratech Group</h3>
            <p className="text-gray-300 mb-4">
              Engineering, Building, and Funding India's Future through innovative infrastructure solutions and strategic investments.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Companies</h4>
            <ul className="space-y-2 text-gray-300">
              <li>RKC Infratech</li>
              <li>Imagineering Bridges India LLP</li>
              <li>Riyare Micro Construct LLP</li>
              <li>R.K. Choubey Family Office</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="text-gray-300 space-y-2">
              <p>Bhopal, Madhya Pradesh</p>
              <p>India</p>
              <p>Email: info@rkcinfratech.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 RKC Infratech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
