
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import CompanyDirectory from "@/components/CompanyDirectory";
import MapCard from "@/components/MapCard";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-slate-100">
      {/* Header */}
      <section className="relative bg-primary text-white py-16 animate-fade-in flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-3 tracking-tight drop-shadow font-playfair animate-fade-in">
          Contact Us
        </h1>
        <span className="block h-1 w-20 bg-white/70 rounded-full mb-2"></span>
        <p className="text-xl opacity-90 leading-relaxed max-w-xl text-center animate-fade-in">
          Ready to start your next infrastructure project? Reach out to our expert team.
        </p>
      </section>

      {/* Main contact/form/map area */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left column */}
        <div className="col-span-1 space-y-7">
          <ContactInfo />
          <MapCard />
        </div>
        {/* Right column: the form */}
        <div className="col-span-2 flex items-center justify-center">
          <div className="w-full max-w-xl">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Divider & Directory */}
      <div className="max-w-3xl mx-auto flex items-center justify-center my-10">
        <div className="w-full h-px bg-gradient-to-r from-primary/10 via-slate-300 to-primary/10"></div>
      </div>
      <CompanyDirectory />
      <div className="pb-16" />
    </div>
  );
};

export default Contact;
