import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Wrench,
  Droplets,
  Zap,
  Disc,
  Sparkles,
  Battery,
  Circle,
  Truck,
  Settings,
} from "lucide-react";
import AnimatedText from "@/components/AnimatedText";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "General Service",
      description:
        "Complete inspection and servicing of your two-wheeler including oil change, filter replacement, and tune-up",
      price: "₹799 onwards",
    },
    {
      icon: Settings,
      title: "Engine Repair",
      description:
        "Expert engine diagnostics and repair services for all types of two-wheelers",
      price: "₹1,999 onwards",
    },
    {
      icon: Droplets,
      title: "Oil Change",
      description:
        "Premium quality engine oil replacement with free oil filter cleaning",
      price: "₹499 onwards",
    },
    {
      icon: Zap,
      title: "Electrical & Wiring",
      description:
        "Complete electrical system checkup, wiring repairs, and headlight alignment",
      price: "₹699 onwards",
    },
    {
      icon: Disc,
      title: "Brake Service",
      description:
        "Brake pad replacement, drum brake servicing, and brake fluid top-up",
      price: "₹599 onwards",
    },
    {
      icon: Sparkles,
      title: "Water Wash & Polish",
      description:
        "Thorough cleaning with high-pressure wash and premium polish",
      price: "₹199 onwards",
    },
    {
      icon: Battery,
      title: "Battery Service",
      description:
        "Battery health check, charging, and replacement with warranty",
      price: "₹399 onwards",
    },
    {
      icon: Circle,
      title: "Puncture & Tyres",
      description:
        "Tyre replacement, puncture repair, wheel balancing and alignment",
      price: "₹99 onwards",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-automotive-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <AnimatedText as="h1" className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            delay={0.1}
          >
            Comprehensive two-wheeler care from experts you can trust
          </AnimatedText>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-border/30"
              >
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <AnimatedText
                  as="h3"
                  className="text-xl font-bold text-foreground mb-3"
                  delay={index * 0.05}
                >
                  {service.title}
                </AnimatedText>
                <AnimatedText
                  as="p"
                  className="text-muted-foreground mb-5 text-sm leading-relaxed"
                  delay={index * 0.05 + 0.05}
                >
                  {service.description}
                </AnimatedText>
                <div className="flex items-center justify-between pt-5 border-t border-border/30">
                  <AnimatedText
                    as="span"
                    className="text-accent font-bold text-lg"
                    delay={index * 0.05 + 0.1}
                  >
                    {service.price}
                  </AnimatedText>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimatedText
              as="h2"
              className="text-3xl font-bold text-foreground mb-4"
            >
              Our Service Process
            </AnimatedText>
            <AnimatedText
              as="p"
              className="text-muted-foreground max-w-2xl mx-auto"
              delay={0.1}
            >
              Simple, transparent, and efficient process for all your service
              needs
            </AnimatedText>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                step: "01",
                title: "Book Appointment",
                description: "Schedule your service online or call us directly",
              },
              {
                step: "02",
                title: "Expert Service",
                description: "Our certified mechanics work their magic",
              },
              {
                step: "03",
                title: "Quality Check",
                description:
                  "Thorough inspection before handing over your bike",
              },
            ].map((process, index) => (
              <Card key={index} className="p-6 text-center">
                <AnimatedText
                  as="div"
                  className="text-4xl font-bold text-accent mb-3"
                  delay={index * 0.1}
                >
                  {process.step}
                </AnimatedText>
                <AnimatedText
                  as="h3"
                  className="text-lg font-semibold text-foreground mb-2"
                  delay={index * 0.1 + 0.1}
                >
                  {process.title}
                </AnimatedText>
                <AnimatedText
                  as="p"
                  className="text-sm text-muted-foreground"
                  delay={index * 0.1 + 0.15}
                >
                  {process.description}
                </AnimatedText>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedText
                as="h2"
                className="text-3xl font-bold text-foreground mb-6"
              >
                Why Choose Our Services?
              </AnimatedText>
              <ul className="space-y-4">
                {[
                  "Certified and experienced mechanics",
                  "Use of genuine spare parts only",
                  "Transparent pricing with detailed invoicing",
                  "Fast turnaround time",
                  "Customer-first approach",
                ].map((point, index) => (
                  <AnimatedText
                    key={index}
                    as="li"
                    className="flex items-start space-x-3"
                    delay={index * 0.1}
                  >
                    <div className="bg-accent/10 rounded-full p-1 mt-1">
                      <svg
                        className="w-4 h-4 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">{point}</span>
                  </AnimatedText>
                ))}
              </ul>
            </div>
            <Card className="p-8 bg-primary text-primary-foreground">
              <AnimatedText as="h3" className="text-2xl font-bold mb-4">
                Service Guarantee
              </AnimatedText>
              <AnimatedText as="p" className="mb-6" delay={0.1}>
                Your satisfaction and safety are our top priorities. We treat
                every motorcycle like our own, so you can ride with confidence.
              </AnimatedText>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="bg-white hover:bg-gray-100 text-black"
              >
                <Link to="/booking">Book Your Service Now</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedText as="h2" className="text-3xl font-bold mb-4">
            Need Expert Service for Your Bike?
          </AnimatedText>
          <AnimatedText as="p" className="text-xl mb-8 opacity-90" delay={0.1}>
            Book an appointment today and experience professional service
          </AnimatedText>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white hover:bg-gray-100 text-black"
            >
              <Link to="/booking">Book Appointment</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <a href="tel:+919876543210">Call: +91 98765 43210</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
