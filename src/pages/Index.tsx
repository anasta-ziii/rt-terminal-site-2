
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#eaeaea] text-[#183e4b]">
      {/* Навигационная панель */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <Icon name="Monitor" className="h-6 w-6 text-[#d74a49]" />
              <span className="text-xl font-bold">Р-Терминал Воронеж</span>
            </div>
            <nav className="hidden md:flex gap-6">
              {["Главная", "О нас", "Услуги", "Отзывы", "Контакты"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-[#1b4552] hover:text-[#d74a49] transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Баннер с ярким заголовком */}
      <section id="главная" className="relative bg-gradient-to-r from-[#183e4b] to-[#1b4552] text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=2070')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Профессиональное обслуживание компьютеров и серверов</h1>
            <p className="text-lg md:text-xl mb-8 text-[#8ba0a4]">
              Надежные IT-решения для вашего бизнеса в Воронеже и области
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#d74a49] hover:bg-[#c03c3b] text-white">
                Наши услуги
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* О нас */}
      <section id="о-нас" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">О нас</h2>
            <div className="w-20 h-1 bg-[#d74a49] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Р-Терминал Воронеж — ваш надежный IT-партнер</h3>
              <p className="mb-4 text-[#8ba0a4]">
                С 2010 года мы предоставляем комплексные решения по обслуживанию компьютерной техники и серверного оборудования для организаций Воронежа и области.
              </p>
              <p className="mb-6 text-[#8ba0a4]">
                Наша команда сертифицированных специалистов имеет обширный опыт работы с различными типами оборудования и программного обеспечения, что позволяет нам эффективно решать задачи любой сложности.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" className="text-[#d74a49]" />
                  <span>10+ лет опыта</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" className="text-[#d74a49]" />
                  <span>Команда экспертов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-[#d74a49]" />
                  <span>Гарантия качества</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock4" className="text-[#d74a49]" />
                  <span>Оперативный сервис</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069" 
                alt="Команда IT-специалистов" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Наши услуги */}
      <section id="услуги" className="bg-[#f6f6f6] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
            <div className="w-20 h-1 bg-[#d74a49] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-[#8ba0a4]">
              Мы предлагаем полный спектр услуг по обслуживанию компьютерной техники и IT-инфраструктуры для бизнеса любого масштаба
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 bg-[#1b4552]/10 rounded-full w-14 h-14 flex items-center justify-center group-hover:bg-[#d74a49]/10 transition-colors">
                    <Icon name={service.icon} className="h-6 w-6 text-[#d74a49]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-[#8ba0a4]">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="отзывы" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Отзывы клиентов</h2>
            <div className="w-20 h-1 bg-[#d74a49] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-[#f9f9f9] hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-3 items-center mb-4">
                    <div className="flex text-[#d74a49]">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className={`h-4 w-4 ${i >= testimonial.rating ? "text-[#8ba0a4]/30" : ""}`} />
                      ))}
                    </div>
                  </div>
                  <p className="mb-4 italic text-[#183e4b]">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#8ba0a4] flex items-center justify-center text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-[#8ba0a4]">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="контакты" className="bg-gradient-to-r from-[#183e4b] to-[#1b4552] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Связаться с нами</h2>
            <div className="w-20 h-1 bg-[#d74a49] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-[#8ba0a4]">
              Оставьте заявку, и наш менеджер свяжется с вами в ближайшее время для обсуждения деталей
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="bg-white text-[#183e4b] p-6 rounded-lg">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Отправить заявку</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm">Ваше имя</label>
                    <Input id="name" placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block mb-2 text-sm">Компания</label>
                    <Input id="company" placeholder="ООО 'Компания'" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm">Телефон</label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">Email</label>
                    <Input id="email" type="email" placeholder="example@domain.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm">Сообщение</label>
                    <Textarea id="message" placeholder="Опишите, что вам требуется" className="min-h-[100px]" />
                  </div>
                  <Button className="w-full bg-[#d74a49] hover:bg-[#c03c3b] text-white">
                    Отправить заявку
                  </Button>
                </div>
              </div>
            </Card>
            
            <div className="space-y-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-4">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="h-5 w-5 text-[#d74a49]" />
                    <span>г. Воронеж, ул. Ленина, д. 10, офис 301</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="h-5 w-5 text-[#d74a49]" />
                    <span>+7 (473) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="h-5 w-5 text-[#d74a49]" />
                    <span>info@r-terminal-vrn.ru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" className="h-5 w-5 text-[#d74a49]" />
                    <span>Пн-Пт: 9:00-18:00</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Наши социальные сети</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-white/10 hover:bg-[#d74a49] w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <Icon name="Facebook" className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-[#d74a49] w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <Icon name="Instagram" className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-[#d74a49] w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <Icon name="Twitter" className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-[#d74a49] w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <Icon name="Linkedin" className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-[#183e4b] text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Icon name="Monitor" className="h-6 w-6 text-[#d74a49]" />
              <span className="text-xl font-bold">Р-Терминал Воронеж</span>
            </div>
            <div className="text-[#8ba0a4] text-sm">
              © {new Date().getFullYear()} Р-Терминал Воронеж. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Данные для секции услуг
const services = [
  {
    icon: "Monitor",
    title: "Обслуживание компьютеров",
    description: "Диагностика, ремонт, модернизация и профилактическое обслуживание компьютеров и ноутбуков любых производителей."
  },
  {
    icon: "Server",
    title: "Серверное обслуживание",
    description: "Настройка, администрирование и поддержка серверов. Виртуализация, кластеризация и резервное копирование данных."
  },
  {
    icon: "Network",
    title: "Локальные сети",
    description: "Проектирование, монтаж и обслуживание локальных сетей. Настройка сетевого оборудования и обеспечение безопасности."
  },
  {
    icon: "ShieldCheck",
    title: "Информационная безопасность",
    description: "Защита от вирусов, настройка файрволов, систем обнаружения вторжений и комплексный аудит безопасности."
  },
  {
    icon: "Cog",
    title: "ИТ-аутсорсинг",
    description: "Комплексное обслуживание ИТ-инфраструктуры вашей компании с гарантированным SLA и фиксированной стоимостью."
  },
  {
    icon: "FileText",
    title: "Лицензирование ПО",
    description: "Подбор, поставка и настройка лицензионного программного обеспечения для решения бизнес-задач."
  }
];

// Данные для секции отзывов
const testimonials = [
  {
    rating: 5,
    text: "Специалисты Р-Терминал быстро выявили и устранили проблемы с нашей сетью. Теперь всё работает стабильно и без сбоев. Очень довольны сотрудничеством!",
    name: "Андрей Петров",
    company: "ООО 'Стройкомплект'"
  },
  {
    rating: 5,
    text: "Обратились с проблемой резервного копирования. Решили всё оперативно, настроили систему и провели обучение сотрудников. Рекомендую!",
    name: "Елена Симонова",
    company: "Юридическая фирма 'Право'"
  },
  {
    rating: 4,
    text: "Сотрудничаем уже третий год. Качество обслуживания на высоте, специалисты всегда на связи и оперативно реагируют на запросы.",
    name: "Дмитрий Коваленко",
    company: "ИП Коваленко Д.С."
  }
];

export default Index;
