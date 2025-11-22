import { Link } from "react-router-dom";
import {
  Wrench,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import AnimatedText from "@/components/AnimatedText";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary p-2 rounded-lg">
                <Wrench className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <AnimatedText as="div" className="font-bold text-lg">Star Service Centre</AnimatedText>
              </div>
            </div>
            <AnimatedText as="p" className="text-sm text-gray-400" delay={0.1}>
              Your trusted partner for two-wheeler service and maintenance.
              Quality service, every time.
            </AnimatedText>
          </div>

          {/* Quick Links */}
          <div>
            <AnimatedText as="h3" className="font-semibold text-lg mb-4" delay={0.1}>Quick Links</AnimatedText>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <AnimatedText as="h3" className="font-semibold text-lg mb-4" delay={0.2}>Our Services</AnimatedText>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>General Service</li>
              <li>Engine Repair</li>
              <li>Oil Change</li>
              <li>Brake Service</li>
              <li>Electrical Work</li>
              <li>Water Wash</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <AnimatedText as="h3" className="font-semibold text-lg mb-4" delay={0.3}>Contact Us</AnimatedText>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0 text-accent" />
                <span>+91 9008079135</span>
              </li>
              {/* <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0 text-accent" />
                <span>info@bikeservice.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-accent" />
                <span>123 Service Road, Workshop Area, City - 400001</span>
              </li> */}
            </ul>
            <div className="flex space-x-3 mt-4">
              {/* <a
                href="#"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <AnimatedText as="p">
            &copy; {new Date().getFullYear()}Star Service Center. Powered by
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://www.instagram.com/secyra.co"
              className="text-accent hover:text-accent-foreground transition-colors"
            >
              Secyra.co
            </a>
            . All rights reserved.
          </AnimatedText>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
