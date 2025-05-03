
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div>
              <h2 className="text-primary uppercase text-sm font-semibold tracking-wider mb-2">О нас</h2>
              <h3 className="text-3xl md:text-4xl font-bold font-playfair mb-6">Эстетика и функциональность в каждой детали</h3>
              <p className="text-gray-600 mb-8">
                Мы — команда дизайнеров, которые создают не просто красивые картинки, а полноценные проекты, учитывающие все технические нюансы и ваш образ жизни. Каждый проект уникален, как и история его владельца.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-primary text-2xl font-bold mb-2">100+</div>
                <p className="text-gray-600">Реализованных проектов</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-primary text-2xl font-bold mb-2">9 лет</div>
                <p className="text-gray-600">Опыта в дизайне</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-primary text-2xl font-bold mb-2">90%</div>
                <p className="text-gray-600">Клиентов по рекомендации</p>
              </div>
            </div>
            
            <Button variant="outline" className="mt-4">Узнать больше</Button>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Дизайнер интерьера за работой"
              className="rounded-xl shadow-xl w-full h-auto z-10 relative"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-xl z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/20 rounded-xl z-0"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
