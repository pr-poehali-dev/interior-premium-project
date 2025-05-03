
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 z-10">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight animate-fade-in"
            >
              Интерьеры, которые<br />
              <span className="text-primary">работают на вас</span>
            </h1>
            
            <p 
              className="text-lg text-gray-600 max-w-lg animate-fade-in"
              style={{animationDelay: '0.2s'}}
            >
              Создаём продуманные до мельчайших деталей интерьеры без ошибок и стресса, чтобы вы могли жить и работать в пространстве, идеально подстроенном под ваш образ жизни.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{animationDelay: '0.4s'}}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Заказать консультацию
              </Button>
              <Button variant="outline" size="lg">
                Смотреть проекты
              </Button>
            </div>
          </div>
          
          <div
            className="relative z-10 hidden lg:block"
          >
            <div className="relative animate-fade-in" style={{animationDelay: '0.6s'}}>
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                alt="Стильный современный интерьер" 
                className="rounded-2xl w-full h-auto object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Более 100+</p>
                    <p className="text-sm text-gray-500">реализованных проектов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t from-primary/10 to-transparent rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default HeroSection;
