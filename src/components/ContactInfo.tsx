
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const info = [
  {
    icon: <MapPin className="text-primary" />,
    label: "Headquarter",
    content: "85, RRR House, Capitol Hill (Alpine Jewel), Kolar Road, Bhopal, MP, India - 462042",
  },
  {
    icon: <Mail className="text-primary" />,
    label: "Email",
    content: "engg.rch@gmail.com",
    link: "mailto:engg.rch@gmail.com"
  },
  {
    icon: <Phone className="text-primary" />,
    label: "Phone",
    content: "+91 7880123365",
    link: "tel:+917880123365"
  },
  {
    icon: <Clock className="text-primary" />,
    label: "Business Hours",
    content: "Mon - Sun: 9:00 AM - 6:30 PM",
  }
];

const ContactInfo = () => (
  <Card className="mb-6 animate-fade-in shadow-xl">
    <CardHeader>
      <CardTitle className="text-2xl text-primary mb-2">Get in Touch</CardTitle>
      <p className="text-muted-foreground text-sm">
        We're here to support your infrastructure project at every stage.
      </p>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {info.map((item, i) => (
          <div className="flex items-start gap-3" key={i}>
            <div className="pt-1">{item.icon}</div>
            <div>
              <div className="font-medium text-gray-800">{item.label}</div>
              {item.link ? (
                <a href={item.link} className="text-primary underline text-sm">{item.content}</a>
              ) : (
                <div className="text-gray-600 text-sm">{item.content}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default ContactInfo;
