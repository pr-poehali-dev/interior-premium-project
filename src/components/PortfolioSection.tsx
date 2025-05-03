
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "Современная квартира для семьи",
    category: "Жилое",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
  },
  {
    id: 2,
    title: "Офисное пространство IT-компании",
    category: "Коммерческое",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
  },
  {
    id: 3,
    title: "Кофейня в скандинавском стиле",
    category: "Коммерческое",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 4,
    title: "Лофт-студия для блогера",
    category: "Жилое",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: 5,
    title: "Минималистичный дом за городом",
    category: "Жилое",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80"
  },
  {
    id: 6,
    title: "Ресторан с открытой кухней",
    category: "Коммерческое",
    image: "https://images.unsplash.com/photo-1557425493-6f90ae4659fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  }
];

const categories = ["Все", "Жилое", "Коммерческое"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  const filteredItems = activeCategory === "Все" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-primary uppercase text-sm font-semibold tracking-wider mb-2">Наши работы</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-playfair mb-8">Реализованные проекты</h3>
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={activeCategory === category ? "bg-primary hover:bg-primary/90" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              className="relative group rounded-xl overflow-hidden cursor-pointer"
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-[4/3]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div 
                className={`absolute inset-0 bg-black/60 flex items-end p-6 transition-opacity duration-300 ${
                  hoveredItem === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div>
                  <span className="text-primary text-sm font-medium">{item.category}</span>
                  <h4 className="text-white text-xl font-medium mt-1">{item.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg">Смотреть все проекты</Button>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
