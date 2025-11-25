import AnimatedText from "@/components/AnimatedText";
import { Card } from "@/components/ui/card";

const Arecanut = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <AnimatedText
            as="h1"
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Arecanut Business
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            delay={0.1}
          >
            We specialize in sustainable cultivation and processing of premium
            betel nuts (Arecanut), serving both local and export markets. Our
            commitment to quality and tradition ensures every nut meets the
            highest standards.
          </AnimatedText>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">About Arecanut</h2>
            <p className="text-muted-foreground leading-relaxed">
              Arecanut, also known as betel nut, is widely used across Asia for
              cultural, medicinal, and commercial purposes. Our farms and
              processing units ensure quality and sustainability at every stage.
            </p>
          </Card>

          <Card className="p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
            <p className="text-muted-foreground leading-relaxed">
              From cultivation to drying and packaging, we follow strict quality
              standards. Our products are prepared for both domestic and
              international markets.
            </p>
          </Card>
        </div>

        {/* Gallery Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src="https://3.imimg.com/data3/YK/QS/MY-11002287/arecanut-1000x1000.jpg"
            alt="Arecanut farm"
            className="rounded-lg shadow-md object-cover w-full h-64"
          />
          <img
            src="https://spiisry.in/wp-content/uploads/2023/06/image.webp"
            alt="Processing unit"
            className="rounded-lg shadow-md object-cover w-full h-64"
          />
          <img
            src="https://images.meesho.com/images/products/429966196/esvxj_512.webp?width=512"
            alt="Packaged Arecanut"
            className="rounded-lg shadow-md object-cover w-full h-64"
          />
        </div>
      </div>
    </div>
  );
};

export default Arecanut;
