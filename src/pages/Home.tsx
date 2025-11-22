import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  Phone,
  Calendar,
  Wrench,
  Clock,
  Shield,
} from "lucide-react";
import heroImage from "@/assets/hero-bike-service.jpg";
import AnimatedText from "@/components/AnimatedText";

const Home = () => {
  const features = [
    { icon: CheckCircle2, text: "Certified Mechanics" },
    { icon: Shield, text: "Genuine Spare Parts" },
    { icon: Clock, text: "Fast Turnaround" },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      text: "Excellent service! My bike runs like new. Highly professional team.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      text: "Best service center in the area. Fair pricing and honest recommendations.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      text: "Quick service and great customer care. Will definitely come back!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          {/* <img
            src={heroImage}
            alt="Professional bike servicing"
            className="w-full h-full object-cover"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-automotive-dark/90 to-automotive-dark/50" />
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white space-y-6 animate-fade-in">
            <AnimatedText
              as="h1"
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              Quality Service for Your Two-Wheeler
            </AnimatedText>
            <AnimatedText as="p" className="text-xl text-gray-200" delay={0.1}>
              Expert mechanics, genuine parts, and reliable service you can
              trust
            </AnimatedText>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                asChild
                size="lg"
                variant="default"
                className="bg-accent hover:bg-accent/90"
              >
                <Link to="/booking">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Service
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white hover:bg-gray-100 text-black"
              >
                <a href="tel:+919008079135">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Quick Highlights */}
            <div className="flex flex-wrap gap-6 pt-6">
              {features.map((feature, index) => (
                <AnimatedText
                  key={index}
                  as="div"
                  className="flex items-center space-x-2"
                  delay={0.2 + index * 0.1}
                >
                  <feature.icon className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </AnimatedText>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimatedText
              as="h2"
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Why Choose Star Service?
            </AnimatedText>
            <AnimatedText
              as="p"
              className="text-muted-foreground max-w-2xl mx-auto"
              delay={0.1}
            >
              We're committed to providing the best service for your two-wheeler
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Certified Experts",
                description:
                  "Our mechanics are trained and certified professionals with years of experience",
              },
              {
                icon: CheckCircle2,
                title: "Genuine Parts",
                description:
                  "We use only authentic spare parts to ensure quality and longevity",
              },
              {
                icon: Clock,
                title: "Quick Service",
                description:
                  "Fast turnaround time without compromising on quality of work",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <AnimatedText
                  as="h3"
                  className="text-xl font-bold mb-3 text-foreground"
                  delay={index * 0.1}
                >
                  {item.title}
                </AnimatedText>
                <AnimatedText
                  as="p"
                  className="text-muted-foreground leading-relaxed"
                  delay={index * 0.1 + 0.1}
                >
                  {item.description}
                </AnimatedText>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimatedText
              as="h2"
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Popular Services
            </AnimatedText>
            <AnimatedText as="p" className="text-muted-foreground" delay={0.1}>
              Comprehensive care for your two-wheeler
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "General Service", icon: Wrench },
              { name: "Engine Repair", icon: Wrench },
              { name: "Oil Change", icon: Wrench },
              { name: "Brake Service", icon: Wrench },
            ].map((service, index) => (
              <Card
                key={index}
                className="p-7 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border-border/30"
              >
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 w-18 h-18 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-9 w-9 text-accent" />
                </div>
                <AnimatedText
                  as="h3"
                  className="font-bold text-foreground"
                  delay={index * 0.1}
                >
                  {service.name}
                </AnimatedText>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimatedText
              as="h2"
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              What Our Customers Say
            </AnimatedText>
            <AnimatedText as="p" className="text-muted-foreground" delay={0.1}>
              Don't just take our word for it
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-muted/20"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <AnimatedText
                  as="p"
                  className="text-muted-foreground mb-5 leading-relaxed italic"
                  delay={index * 0.1}
                >
                  "{testimonial.text}"
                </AnimatedText>
                <AnimatedText
                  as="p"
                  className="font-bold text-foreground"
                  delay={index * 0.1 + 0.1}
                >
                  - {testimonial.name}
                </AnimatedText>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Service Your Bike?
          </AnimatedText>
          <AnimatedText as="p" className="text-xl mb-8 opacity-90" delay={0.1}>
            Book your appointment today and experience quality service
          </AnimatedText>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white hover:bg-gray-100 text-black"
          >
            <Link to="/booking">Book Appointment Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
