import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import MapCard from "@/components/MapCard";
import CompanyDirectory from "@/components/CompanyDirectory";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50">
      {/* Header */}
      <section className="bg-primary text-white py-16 animate-fade-in">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-3 drop-shadow">Contact Us</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Ready to start your next infrastructure project? Reach out to our expert team.
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="col-span-1 flex flex-col gap-6">
          <ContactInfo />
          <MapCard />
        </div>
        <div className="col-span-2 flex">
          <div className="w-full max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
      <CompanyDirectory />
    </div>
  );
};

export default Contact;
