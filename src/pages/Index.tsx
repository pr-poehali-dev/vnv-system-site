import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      title: "Сетевые решения",
      description: "Проектирование и внедрение современных сетевых инфраструктур",
      icon: "Network",
      features: ["LAN/WAN сети", "Wi-Fi решения", "Маршрутизация"]
    },
    {
      title: "Системы безопасности", 
      description: "Комплексные решения по информационной безопасности",
      icon: "Shield",
      features: ["Видеонаблюдение", "Контроль доступа", "Охранные системы"]
    },
    {
      title: "ИТ-аудит",
      description: "Анализ и оптимизация ИТ-инфраструктуры предприятий",
      icon: "SearchCheck", 
      features: ["Аудит безопасности", "Оценка рисков", "Рекомендации"]
    },
    {
      title: "Техподдержка 24/7",
      description: "Круглосуточная поддержка ваших ИТ-систем",
      icon: "Headphones",
      features: ["Мониторинг", "Диагностика", "Устранение сбоев"]
    }
  ];

  const projects = [
    {
      title: "Модернизация сети крупного банка",
      description: "Внедрение отказоустойчивой сетевой инфраструктуры",
      result: "Увеличение производительности на 40%",
      category: "Банковский сектор"
    },
    {
      title: "Система видеонаблюдения завода",
      description: "Установка 200+ камер с интеллектуальной аналитикой", 
      result: "100% покрытие территории",
      category: "Промышленность"
    },
    {
      title: "ИТ-инфраструктура медцентра",
      description: "Комплексное оснащение медицинского комплекса",
      result: "Полная цифровизация процессов",
      category: "Медицина"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">ВС</span>
            </div>
            <span className="font-bold text-xl">ВНВ СИСТЕМЫ</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-sm hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="text-sm hover:text-primary transition-colors">О компании</a>
            <a href="#catalog" className="text-sm hover:text-primary transition-colors">Каталог</a>
            <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
            <a href="#projects" className="text-sm hover:text-primary transition-colors">Проекты</a>
            <a href="#contacts" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </nav>
          
          <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90">
            <Icon name="Phone" size={16} />
            Связаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 animate-gradient-x bg-[length:400%_400%]"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Современные
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              ИТ-решения
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in opacity-0 animation-delay-200">
            Проектируем, внедряем и поддерживаем ИТ-инфраструктуру для вашего бизнеса
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0 animation-delay-400">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-3">
              <Icon name="Rocket" size={20} />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3">
              <Icon name="Play" size={20} />
              Смотреть презентацию
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in opacity-0 animation-delay-600">
              <div className="text-3xl font-bold">150+</div>
              <div className="text-gray-300">Реализованных проектов</div>
            </div>
            <div className="animate-fade-in opacity-0 animation-delay-700">
              <div className="text-3xl font-bold">12</div>
              <div className="text-gray-300">Лет на рынке</div>
            </div>
            <div className="animate-fade-in opacity-0 animation-delay-800">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-gray-300">Техническая поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">О компании ВНВ СИСТЕМЫ</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Мы — команда профессионалов, специализирующаяся на комплексных ИТ-решениях для бизнеса
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/img/c9c72578-f808-4c7b-b73c-2e4609656f25.jpg" 
                  alt="Офис ВНВ Системы" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Icon name="Target" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Наша миссия</h3>
                    <p className="text-gray-600">Обеспечиваем стабильную и безопасную работу ИТ-инфраструктуры наших клиентов</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Наш опыт</h3>
                    <p className="text-gray-600">12+ лет успешной работы с предприятиями различных отраслей</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Наша команда</h3>
                    <p className="text-gray-600">Высококвалифицированные специалисты с международными сертификатами</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный спектр ИТ-услуг для вашего бизнеса</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-center">{service.description}</p>
                  <Separator />
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Icon name="CheckCircle" size={16} className="text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Каталог решений</h2>
            <p className="text-xl text-gray-600">Основные направления нашей деятельности</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Server" size={64} className="text-white" />
                </div>
                <CardTitle>Серверные решения</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Поставка и настройка серверного оборудования</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">HPE</Badge>
                  <Badge variant="secondary">Dell</Badge>
                  <Badge variant="secondary">Cisco</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wifi" size={64} className="text-white" />
                </div>
                <CardTitle>Сетевое оборудование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Коммутаторы, маршрутизаторы, точки доступа</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Cisco</Badge>
                  <Badge variant="secondary">Huawei</Badge>
                  <Badge variant="secondary">Mikrotik</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Camera" size={64} className="text-white" />
                </div>
                <CardTitle>Системы безопасности</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">IP-камеры, системы контроля доступа</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Hikvision</Badge>
                  <Badge variant="secondary">Axis</Badge>
                  <Badge variant="secondary">Dahua</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Реализованные проекты</h2>
            <p className="text-xl text-gray-600">Примеры успешных внедрений</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <Badge className="w-fit mb-2">{project.category}</Badge>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{project.description}</p>
                  <Separator />
                  <div className="flex items-start space-x-2">
                    <Icon name="TrendingUp" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm font-medium text-primary">{project.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-gray-300">Свяжитесь с нами для обсуждения вашего проекта</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                  <p className="text-gray-300">г. Москва, ул. Тверская, 12, офис 501</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                  <p className="text-gray-300">+7 (495) 123-45-67</p>
                  <p className="text-gray-300">+7 (800) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">info@vnvsystems.ru</p>
                  <p className="text-gray-300">sales@vnvsystems.ru</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Получить консультацию</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                />
                <textarea 
                  placeholder="Опишите ваши задачи" 
                  rows={4}
                  className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary resize-none"
                ></textarea>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 py-3">
                  <Icon name="Send" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ВС</span>
              </div>
              <span className="font-bold text-xl text-white">ВНВ СИСТЕМЫ</span>
            </div>
            <p className="mb-4">Ваш надежный партнер в мире информационных технологий</p>
            <p className="text-sm">© 2024 ВНВ СИСТЕМЫ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}