
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:py-40 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8 z-10">
            <div className="mb-4 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Профессиональный дизайн интерьеров
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-[fadeIn_0.6s_ease-out_0.1s_forwards]">
              Интерьеры, которые<br />
              <span className="text-primary">работают на вас</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]">
              Создаём продуманные до мельчайших деталей интерьеры без ошибок и стресса, чтобы вы могли жить и работать в пространстве, идеально подстроенном под ваш образ жизни.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[fadeIn_0.6s_ease-out_0.3s_forwards]">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Заказать консультацию
              </Button>
              <Button variant="outline" size="lg">
                Смотреть проекты
              </Button>
            </div>
          </div>
          
          <div className="relative z-10 hidden lg:block opacity-0 animate-[fadeIn_0.6s_ease-out_0.4s_forwards]">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                alt="Стильный современный интерьер" 
                className="rounded-2xl w-full h-auto object-cover shadow-2xl"
              />
              
              {/* Декоративный элемент */}
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
              
              {/* Второй декоративный элемент */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6V12L16 14" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">За 30 дней</p>
                    <p className="text-sm text-gray-500">от идеи до реализации</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Декоративные элементы фона */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t from-primary/10 to-transparent rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default HeroSection;
