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
import vid1 from "@/assets/vid1.mp4";
import vid2 from "@/assets/vid2.mp4";

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
              { name: "Engine Repair", icon: Settings },
              { name: "Oil Change", icon: Droplets },
              { name: "Brake Service", icon: Disc },
            ].map((service, index) => (
              <Card
                key={index}
                className="p-7 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border-border/30"
              >
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
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

      {/* Company Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimatedText
              as="h2"
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              See Us in Action
            </AnimatedText>
            <AnimatedText as="p" className="text-muted-foreground" delay={0.1}>
              A glimpse into our service center and team
            </AnimatedText>
          </div>

          {/* Video Gallery */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Video 1 */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <video
                src="/videos/vid1.mp4"
                controls
                playsInline
                className="w-full max-h-[600px] object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video 2 */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <video
                src="/videos/vid2.mp4"
                controls
                playsInline
                className="w-full max-h-[600px] object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Photo Gallery
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img
              src="https://images.pexels.com/photos/1103/bike-service.jpg"
              alt="Mechanic at work"
              className="rounded-lg shadow-md object-cover w-full h-64"
            />
            <img
              src="https://images.pexels.com/photos/1104/workshop.jpg"
              alt="Service center interior"
              className="rounded-lg shadow-md object-cover w-full h-64"
            />
            <img
              src="https://images.pexels.com/photos/1105/customer-care.jpg"
              alt="Customer interaction"
              className="rounded-lg shadow-md object-cover w-full h-64"
            />
          </div> */}
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
