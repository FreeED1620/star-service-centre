import { Card } from "@/components/ui/card";
import { Award, Users, Clock, Target } from "lucide-react";
import workshopImage from "@/assets/workshop-interior.jpg";
import AnimatedText from "@/components/AnimatedText";

const About = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Customers" },
    { icon: Clock, value: "15+", label: "Years Experience" },
    { icon: Award, value: "50+", label: "Certified Mechanics" },
    { icon: Target, value: "99%", label: "Customer Satisfaction" },
  ];

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on the quality of parts or service",
    },
    {
      title: "Customer Trust",
      description: "Building long-term relationships through honest service",
    },
    {
      title: "Expert Team",
      description: "Highly trained and experienced mechanics",
    },
    {
      title: "Fair Pricing",
      description: "Transparent pricing with no hidden charges",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-automotive-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <AnimatedText
              as="h1"
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About Star Service Workshop
            </AnimatedText>
            <AnimatedText
              as="p"
              className="text-xl text-gray-300 leading-relaxed"
              delay={0.1}
            >
              For over 15 years, we've been the trusted choice for two-wheeler
              service and maintenance. Our commitment to quality, expertise, and
              customer satisfaction sets us apart.
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimatedText
                key={index}
                as="div"
                className="text-center"
                delay={index * 0.1}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedText
                as="h2"
                className="text-3xl font-bold text-foreground mb-6"
              >
                Our Story
              </AnimatedText>
              <div className="space-y-4 text-muted-foreground">
                <AnimatedText as="p" delay={0.1}>
                  BikeService Pro Workshop was founded in 2009 with a simple
                  mission: to provide honest, reliable, and high-quality service
                  for two-wheeler owners.
                </AnimatedText>
                <AnimatedText as="p" delay={0.2}>
                  What started as a small workshop with just three mechanics has
                  grown into one of the most trusted service centers in the
                  region. Today, we serve over 10,000 satisfied customers and
                  employ a team of 50+ certified professionals.
                </AnimatedText>
                <AnimatedText as="p" delay={0.3}>
                  Our success is built on three pillars: expert knowledge,
                  quality parts, and exceptional customer service. We treat
                  every bike as if it were our own, ensuring that it receives
                  the care and attention it deserves.
                </AnimatedText>
              </div>
            </div>
            <div className="relative">
              <img
                src={workshopImage}
                alt="Our workshop"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8">
              <AnimatedText
                as="h3"
                className="text-2xl font-bold text-foreground mb-4"
              >
                Our Mission
              </AnimatedText>
              <AnimatedText
                as="p"
                className="text-muted-foreground"
                delay={0.1}
              >
                To provide exceptional two-wheeler service and maintenance
                through expert craftsmanship, genuine parts, and a
                customer-first approach. We aim to keep every bike running
                smoothly and every customer riding safely.
              </AnimatedText>
            </Card>
            <Card className="p-8">
              <AnimatedText
                as="h3"
                className="text-2xl font-bold text-foreground mb-4"
              >
                Our Vision
              </AnimatedText>
              <AnimatedText
                as="p"
                className="text-muted-foreground"
                delay={0.1}
              >
                To be the most trusted and preferred two-wheeler service center
                in the region, known for our integrity, expertise, and
                commitment to excellence. We envision a future where every rider
                has access to quality service they can rely on.
              </AnimatedText>
            </Card>
          </div>

          <div>
            <AnimatedText
              as="h2"
              className="text-3xl font-bold text-center text-foreground mb-12"
            >
              Our Core Values
            </AnimatedText>
            <div className="grid md:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center">
                  <AnimatedText
                    as="h3"
                    className="text-lg font-semibold text-foreground mb-2"
                    delay={index * 0.1}
                  >
                    {value.title}
                  </AnimatedText>
                  <AnimatedText
                    as="p"
                    className="text-sm text-muted-foreground"
                    delay={index * 0.1 + 0.1}
                  >
                    {value.description}
                  </AnimatedText>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimatedText
              as="h2"
              className="text-3xl font-bold text-foreground mb-4"
            >
              Meet Our Expert Team
            </AnimatedText>
            <AnimatedText
              as="p"
              className="text-muted-foreground max-w-2xl mx-auto"
              delay={0.1}
            >
              Our certified mechanics bring years of experience and passion for
              two-wheelers. Each team member is dedicated to providing the best
              service possible.
            </AnimatedText>
          </div>
          <Card className="p-8 bg-primary/5 border-primary/20 text-center">
            <AnimatedText as="p" className="text-lg text-muted-foreground">
              Our team consists of 50+ certified mechanics, service advisors,
              and support staff, all working together to ensure your two-wheeler
              receives the care it deserves.
            </AnimatedText>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
