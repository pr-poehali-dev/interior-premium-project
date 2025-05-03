
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const services = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 9.5V4C2 3.44772 2.44772 3 3 3H11C11.5523 3 12 3.44772 12 4V20C12 20.5523 11.5523 21 11 21H3C2.44772 21 2 20.5523 2 20V14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 9.5V4C22 3.44772 21.5523 3 21 3H13C12.4477 3 12 3.44772 12 4V20C12 20.5523 12.4477 21 13 21H21C21.5523 21 22 20.5523 22 20V14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 16H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 16H17.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Дизайн квартир и домов",
    description: "Создаем уютные и функциональные интерьеры для жизни, которые максимально учитывают ваш образ жизни и потребности.",
    forWhom: "Для семей и частных лиц"
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 7H15C13.8954 7 13 7.89543 13 9V19C13 20.1046 13.8954 21 15 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 21H4C2.89543 21 2 20.1046 2 19V9C2 7.89543 2.89543 7 4 7H9C10.1046 7 11 7.89543 11 9V19C11 20.1046 10.1046 21 9 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5 3.5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.5 3.5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Коммерческие интерьеры",
    description: "Разрабатываем дизайн для кафе, ресторанов, офисов и других бизнес-пространств с учетом всех бизнес-процессов.",
    forWhom: "Для владельцев бизнеса"
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 21V7L13 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 21V12L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 9V9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 13V13.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 17V17.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Ремонт под ключ",
    description: "Берем на себя полный контроль над проектом от создания дизайна до реализации, избавляя вас от стресса и проблем.",
    forWhom: "Для занятых людей"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <Container>
        <div className="text-center mb-16">
          <span className="text-primary uppercase text-sm font-semibold tracking-wider">Наши услуги</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Что мы предлагаем</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Наша студия предлагает полный спектр услуг по дизайну интерьера - от консультации до реализации проекта под ключ.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              <CardHeader>
                <div className="text-primary mb-5">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.forWhom}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-primary hover:text-primary/90 p-0 hover:bg-transparent">
                  Узнать подробнее →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Готовы создать пространство вашей мечты?</h3>
            <p className="text-gray-600">Запишитесь на бесплатную консультацию уже сегодня</p>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Заказать консультацию
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
