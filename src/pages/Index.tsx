import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '150 000+', label: 'кв.м построено', icon: 'Building2' },
    { value: '15+', label: 'реализованных проектов', icon: 'Briefcase' },
    { value: '27 лет', label: 'опыт группы компаний', icon: 'Calendar' },
    { value: '100%', label: 'решение под ключ', icon: 'CheckCircle' }
  ];

  const directions = [
    {
      title: 'Девелопмент и освоение земельных участков',
      description: 'Размещение объектов коммерческой недвижимости',
      icon: 'MapPin',
      color: 'from-primary to-blue-600'
    },
    {
      title: 'Строительство складских комплексов',
      description: 'Современные складские и логистические центры',
      icon: 'Warehouse',
      color: 'from-accent to-orange-600'
    },
    {
      title: 'Реконструкция и модернизация',
      description: 'Обновление зданий коммерческого и производственного назначения',
      icon: 'Wrench',
      color: 'from-primary to-cyan-600'
    },
    {
      title: 'Антикризисное управление',
      description: 'Завершение строительства объектов из проблемных реестров',
      icon: 'Shield',
      color: 'from-accent to-green-600'
    }
  ];

  const projects = [
    { 
      title: 'Складской комплекс класса A', 
      area: '26 000 кв.м', 
      location: 'г.п. Томилино, Московская область',
      icon: 'Building2'
    },
    { 
      title: 'Складские комплексы класса A', 
      area: '24 000 + 17 000 кв.м', 
      location: 'г.о. Пушкино, Московская область',
      icon: 'Warehouse'
    },
    { 
      title: 'Производственный корпус', 
      area: '5 000 кв.м', 
      location: 'ОАО «ТрансНефть», ПАО «Газпром»',
      icon: 'Factory'
    },
    { 
      title: 'Складские комплексы классов A, B, C', 
      area: '25 000 кв.м', 
      location: 'Различные объекты',
      icon: 'Package'
    },
    { 
      title: 'Реконструкция зданий', 
      area: '3 000 кв.м', 
      location: 'Административные и производственные объекты',
      icon: 'HardHat'
    },
    { 
      title: 'Предприятия пищевой промышленности', 
      area: '10 000 кв.м', 
      location: 'г.о. Люберцы, Московская область',
      icon: 'Utensils'
    },
    { 
      title: 'Жилые дома (антикризисное управление)', 
      area: '20 000 кв.м', 
      location: 'пгт. Томилино, введены в 2020 г.',
      icon: 'Home'
    }
  ];

  const capabilities = [
    {
      icon: 'Users',
      title: 'Собственная служба заказчика',
      description: 'Профессиональная команда для контроля всех этапов'
    },
    {
      icon: 'Eye',
      title: 'Строительный контроль',
      description: 'Надзор за качеством и сроками выполнения работ'
    },
    {
      icon: 'HardHat',
      title: 'Служба генерального подрядчика',
      description: 'Полное управление строительным процессом'
    },
    {
      icon: 'FileCheck',
      title: 'Партнёрские организации',
      description: 'Изыскательские, проектные и экспертные компании'
    }
  ];

  const additionalServices = [
    { icon: 'Zap', title: 'Энергетические мощности', description: 'Организация и получение дополнительных мощностей' },
    { icon: 'Network', title: 'Точки подключения', description: 'Создание и согласование точек сбора ресурсов' },
    { icon: 'FileText', title: 'Госэкспертиза', description: 'Сопровождение документации и взаимодействие с надзором' },
    { icon: 'Bus', title: 'Транспортная инфраструктура', description: 'Реконструкция автостанций и объектов' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <header className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-heading font-bold text-white">
              СМАРТ-Девелопмент
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-white/80 hover:text-white transition-colors">О компании</a>
              <a href="#directions" className="text-white/80 hover:text-white transition-colors">Направления</a>
              <a href="#projects" className="text-white/80 hover:text-white transition-colors">Проекты</a>
              <a href="#additional" className="text-white/80 hover:text-white transition-colors">Компетенции</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Контакты</a>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="bg-accent hover:bg-accent/90 hidden md:flex">
              <Icon name="Phone" className="mr-2" size={18} />
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading mb-6 bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent font-semibold">
              Девелопмент и строительство под ключ
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              27 лет опыта. От предпроектных изысканий до ввода объектов в эксплуатацию
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8" onClick={() => scrollToSection('contact')}>
                Обсудить проект
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2" onClick={() => scrollToSection('projects')}>
                <Icon name="Building2" className="mr-2" size={20} />
                Наши проекты
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-scale-in">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center bg-card/50 backdrop-blur-sm border-white/20 hover:bg-card/80 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon name={stat.icon as any} className="text-white" size={24} />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 animate-fade-in">
            О компании
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-white/20 mb-8">
              <p className="text-lg leading-relaxed mb-4">
                <strong>ООО «СМАРТ-Девелопмент»</strong> образовано в 2024 году и входит в группу предприятий, деятельность которой ведётся с 1997 года.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                За более чем <strong>двадцатилетний период</strong> специалистами группы реализовано свыше <strong>15 проектов</strong> и построено более <strong>150 000 кв. м</strong> коммерческой и жилой недвижимости.
              </p>
              <p className="text-lg leading-relaxed">
                Компания обладает всеми необходимыми ресурсами для выполнения <strong>полного комплекса строительных работ «под ключ»</strong> — от предпроектных изысканий до ввода объектов в эксплуатацию.
              </p>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {capabilities.map((item, index) => (
                <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-white/20 hover:bg-card/80 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="directions" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 animate-fade-in">
            Основные направления деятельности
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {directions.map((direction, index) => (
              <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${direction.color} flex items-center justify-center mb-6`}>
                  <Icon name={direction.icon as any} className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{direction.title}</h3>
                <p className="text-muted-foreground text-lg">{direction.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 animate-fade-in">
            Реализованные проекты
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-white/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Icon name={project.icon as any} className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="space-y-1">
                  <p className="text-primary font-semibold">{project.area}</p>
                  <p className="text-muted-foreground text-sm">{project.location}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center flex-shrink-0">
                  <Icon name="TrendingUp" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Антикризисное управление</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    В период с 2019 по 2021 год специалисты компании осуществляли антикризисное управление проектом завершения строительства жилых домов, входящих в реестр проблемных объектов в пгт. Томилино. По итогам в декабре 2020 года введены в эксплуатацию три жилых дома общей площадью порядка 20 000 кв.м.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="additional" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 animate-fade-in">
            Дополнительные компетенции
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-white/20 hover:bg-card/80 transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon as any} className="text-white" size={24} />
                </div>
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-cyan-600 flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Квалификация и профессиональные допуски</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Сотрудники компании проходят регулярное повышение квалификации, обладают допусками <strong>НОПРИЗ и НОСТРОЙ</strong>, что подтверждает их профессиональную компетентность. 
                    ООО «СМАРТ-Девелопмент» состоит в <strong>саморегулируемой организации (СРО)</strong> в области строительства и проектирования.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 animate-fade-in">
              Контакты
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center bg-card/50 border-white/20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-3">
                  <Icon name="MapPin" className="text-white" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Адрес</h3>
                <p className="text-muted-foreground text-sm">Московская область</p>
              </Card>

              <Card className="p-6 text-center bg-card/50 border-white/20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-3">
                  <Icon name="Mail" className="text-white" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">info@smart-dev.ru</p>
              </Card>

              <Card className="p-6 text-center bg-card/50 border-white/20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-3">
                  <Icon name="Phone" className="text-white" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground text-sm">+7 (___) ___-__-__</p>
              </Card>
            </div>

            <Card className="mt-8 p-8 bg-card/50 backdrop-blur-sm border-white/20 text-center">
              <p className="text-lg mb-6">
                Готовы обсудить ваш проект? Свяжитесь с нами для получения консультации.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Написать нам
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/50 py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p className="mb-2 font-heading font-bold text-xl text-white">ООО «СМАРТ-Девелопмент»</p>
            <p className="text-sm">
              © {new Date().getFullYear()} Все права защищены. Член СРО в области строительства и проектирования.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
