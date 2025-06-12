
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Send } from "lucide-react";

const CTAFooterSection = () => {
  const [activeForm, setActiveForm] = useState<string | null>(null);

  const forms = [
    {
      id: "design",
      title: "Need a Design Review?",
      fields: ["Name", "Email", "Upload Drawing"],
      color: "bg-blue-500",
      icon: "🖥"
    },
    {
      id: "fabrication",
      title: "Request Fabrication Quote",
      fields: ["Material", "Quantity", "Deadline"],
      color: "bg-orange-500",
      icon: "🏭"
    },
    {
      id: "consulting",
      title: "Consult a Bridge Engineer",
      fields: ["Project Stage", "Location"],
      color: "bg-green-500",
      icon: "🌉"
    },
    {
      id: "investment",
      title: "Seek Investment",
      fields: ["Startup Name", "Stage", "Brief"],
      color: "bg-purple-500",
      icon: "💰"
    }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Where Does Your Project Need Support?
          </h2>
          <p className="text-xl text-gray-300">
            Get started with the right expertise for your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {forms.map((form) => (
            <div key={form.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">{form.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{form.title}</h3>
              </div>

              {activeForm === form.id ? (
                <div className="space-y-3">
                  {form.fields.map((field, index) => (
                    <div key={index}>
                      {field === "Upload Drawing" ? (
                        <div className="flex items-center justify-center w-full">
                          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer hover:border-gray-500">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="w-8 h-8 mb-2 text-gray-400" />
                              <p className="text-sm text-gray-400">Upload file</p>
                            </div>
                            <input type="file" className="hidden" />
                          </label>
                        </div>
                      ) : field === "Brief" ? (
                        <textarea
                          placeholder={field}
                          className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white placeholder-gray-400"
                          rows={3}
                        />
                      ) : (
                        <input
                          type={field === "Email" ? "email" : "text"}
                          placeholder={field}
                          className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white placeholder-gray-400"
                        />
                      )}
                    </div>
                  ))}
                  <div className="flex space-x-2">
                    <Button size="sm" className={`${form.color} hover:opacity-90 flex-1`}>
                      <Send className="w-4 h-4 mr-1" />
                      Submit
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => setActiveForm(null)}
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <Button
                  onClick={() => setActiveForm(form.id)}
                  className={`w-full ${form.color} hover:opacity-90`}
                >
                  Get Started
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm mb-4">
            Not sure which service you need? Let's have a conversation.
          </p>
          <Button variant="outline" size="lg" className="border-white text-blue bg-transparent hover:bg-white hover:text-gray-900">
            Schedule a Consultation Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTAFooterSection;
