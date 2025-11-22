import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import AnimatedText from "@/components/AnimatedText";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Message sent successfully! We'll get back to you soon.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9008079135", "+91 7483985760"],
      link: "tel:+919008079135",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@bikeservice.com", "support@bikeservice.com"],
      link: "mailto:info@bikeservice.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["NH13 mine road, Channagiri, Karnataka 577213"],
      link: "https://maps.app.goo.gl/qKc4oBQD5e6un9xV8?g_st=aw",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 8:00 PM",
        "Sunday: 10:00 AM - 6:00 PM",
      ],
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-automotive-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <AnimatedText as="h1" className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            delay={0.1}
          >
            Get in touch with us for any queries or support
          </AnimatedText>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-7 w-7 text-primary" />
                </div>
                <AnimatedText
                  as="h3"
                  className="font-semibold text-foreground mb-2"
                  delay={index * 0.1}
                >
                  {info.title}
                </AnimatedText>
                {info.details.map((detail, idx) => (
                  <AnimatedText
                    key={idx}
                    as="p"
                    className="text-sm text-muted-foreground"
                    delay={index * 0.1 + idx * 0.05}
                  >
                    {info.link && idx === 0 ? (
                      <a
                        href={info.link}
                        className="hover:text-primary transition-colors"
                        target={
                          info.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </AnimatedText>
                ))}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <AnimatedText
                as="h2"
                className="text-3xl font-bold text-foreground mb-6"
              >
                Send Us a Message
              </AnimatedText>
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+9198765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              <div>
                <AnimatedText
                  as="h2"
                  className="text-3xl font-bold text-foreground mb-6"
                >
                  Find Us Here
                </AnimatedText>
                <Card className="overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.074595670326!2d75.921307!3d14.025974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba5ba739eb060d%3A0xf1e810596b08ae95!2sStar%20Sarvice%20centar!5e0!3m2!1sen!2sin!4v1732252130000
"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Star Service Center Location"
                  ></iframe>
                </Card>
              </div>

              <Card className="p-6 bg-primary text-primary-foreground">
                <AnimatedText as="h3" className="text-xl font-semibold mb-4">
                  Quick Response
                </AnimatedText>
                <AnimatedText as="p" className="mb-4" delay={0.1}>
                  Need immediate assistance? We're here to help!
                </AnimatedText>
                <div className="space-y-3">
                  <Button
                    asChild
                    variant="secondary"
                    className="w-full bg-white hover:bg-gray-100 text-black"
                  >
                    <a href="tel:+919876543210">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Us Now
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="secondary"
                    className="w-full bg-white hover:bg-gray-100 text-black"
                  >
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
    </div>
  );
};

export default Contact;
