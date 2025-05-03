
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="text-xl font-medium">
            <span className="font-playfair">Interior</span>
            <span className="text-primary">Design</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-primary transition-colors">
              О нас
            </a>
            <a href="#portfolio" className="hover:text-primary transition-colors">
              Портфолио
            </a>
            <a href="#services" className="hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#blog" className="hover:text-primary transition-colors">
              Блог
            </a>
          </nav>

          <Button
            variant="default"
            className="hidden md:flex bg-primary hover:bg-primary/90"
          >
            Связаться
          </Button>

          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
