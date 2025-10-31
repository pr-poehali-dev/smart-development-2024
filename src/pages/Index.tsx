import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('contact');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '150 000+', label: 'кв.м построено', icon: 'Building2' },
    { value: '15+', label: 'реализованных проектов', icon: 'Briefcase' },
    { value: '27 лет', label: 'опыт группы компаний', icon: 'Calendar' },
    { value: '100%', label: 'решение под ключ', icon: 'CheckCircle' }
  ];

  const services = [
    {
      title: 'Технический заказчик',
      description: 'Полное сопровождение строительства от подготовки документации до ввода в эксплуатацию',
      icon: 'Clipboard',
      color: 'from-primary to-blue-600'
    },
    {
      title: 'Строительный контроль',
      description: 'Профессиональный надзор за качеством работ на всех этапах строительства',
      icon: 'Eye',
      color: 'from-accent to-orange-600'
    },
    {
      title: 'Финансовый и технический аудит',
      description: 'Экспертная оценка проектов и контроль эффективности использования средств',
      icon: 'Calculator',
      color: 'from-primary to-cyan-600'
    },
    {
      title: 'Девелопмент земельных участков',
      description: 'Освоение территорий под коммерческую недвижимость с полной подготовкой',
      icon: 'MapPin',
      color: 'from-accent to-green-600'
    },
    {
      title: 'Складские комплексы',
      description: 'Строительство и контроль возведения современных складских и логистических центров',
      icon: 'Warehouse',
      color: 'from-primary to-purple-600'
    },
    {
      title: 'Реконструкция и модернизация',
      description: 'Обновление коммерческих и производственных зданий, инженерных сетей',
      icon: 'Wrench',
      color: 'from-accent to-red-600'
    }
  ];

  const additionalServices = [
    { icon: 'Zap', title: 'Энергетические мощности', description: 'Организация и получение дополнительных мощностей' },
    { icon: 'Network', title: 'Точки подключения', description: 'Создание и согласование точек подключения ресурсов' },
    { icon: 'FileCheck', title: 'Госэкспертиза', description: 'Сопровождение документации и взаимодействие с надзором' },
    { icon: 'Bus', title: 'Транспортная инфраструктура', description: 'Реконструкция автостанций и объектов инфраструктуры' }
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
      title: 'Антикризисное управление - жилые дома', 
      area: '20 000 кв.м', 
      location: 'пгт. Томилино (введены в 2020)',
      icon: 'Home'
    }
  ];

  const advantages = [
    {
      icon: 'CheckCircle2',
      title: 'Полный цикл строительства',
      description: 'Все этапы под нашим контролем: от проектирования до финишной отделки'
    },
    {
      icon: 'FileText',
      title: 'Экспертная подготовка документации',
      description: 'Оперативное и грамотное оформление всей необходимой разрешительной документации'
    },
    {
      icon: 'TrendingUp',
      title: 'Опыт сложных проектов',
      description: 'Успешное решение задач любой степени сложности, включая антикризисное управление'
    },
    {
      icon: 'Building',
      title: 'Специализация на современных форматах',
      description: 'Строительство складских комплексов высокого класса, соответствующих рыночным требованиям'
    },
    {
      icon: 'Award',
      title: 'Доказанная надёжность',
      description: 'Успешные кейсы с крупными заказчиками: ТрансНефть, Газпром'
    },
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Строгий контроль на каждом этапе проекта'
    }
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
              <a href="#services" className="text-white/80 hover:text-white transition-colors">Услуги</a>
              <a href="#projects" className="text-white/80 hover:text-white transition-colors">Проекты</a>
              <a href="#advantages" className="text-white/80 hover:text-white transition-colors">Преимущества</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Контакты</a>
            </div>
            <Button onClick={scrollToForm} className="bg-accent hover:bg-accent/90 hidden md:flex">
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
              От идеи до сдачи объекта
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Современная девелоперская компания с 27-летним опытом. Реализуем проекты в срок и с безупречным качеством
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8" onClick={scrollToForm}>Связаться с нами</Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2" onClick={scrollToProjects}>
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
                <div className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 animate-fade-in">
            О компании «СМАРТ-Девелопмент»
          </h2>
          <div className="max-w-4xl mx-auto mb-16 text-center animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              ООО «СМАРТ-Девелопмент» — современная девелоперская компания, основанная в 2024 году. 
              Мы входим в группу предприятий с более чем 27-летним опытом работы на рынке недвижимости (с 1997 года). 
              За это время нашими специалистами реализовано свыше 15 крупных проектов и построено более 150 000 кв. м 
              коммерческой и жилой недвижимости.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Команда «СМАРТ-Девелопмент» обладает экспертизой в подготовке исходно-разрешительной документации 
              и строительстве объектов различного назначения. Мы предоставляем комплексное решение «под ключ» — 
              от идеи до сдачи объекта в эксплуатацию.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 animate-fade-in">
            Ключевые направления деятельности
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный цикл услуг в сфере девелопмента и строительства
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="p-6 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                    <Icon name={service.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <h3 className="text-3xl font-heading font-bold text-center mb-8 mt-16">
            Дополнительные компетенции
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-card to-card/50 border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-heading font-semibold mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 animate-fade-in">
            Наш опыт и реализованные проекты
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Успешно реализованные проекты различного масштаба и назначения
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="group bg-gradient-to-br from-card to-card/50 border-white/20 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="p-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon name={project.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{project.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <Icon name="Maximize" className="mr-2" size={16} />
                      <span className="text-sm">{project.area}</span>
                    </div>
                    <div className="flex items-start text-muted-foreground">
                      <Icon name="MapPin" className="mr-2 mt-0.5" size={16} />
                      <span className="text-sm">{project.location}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                <Icon name="Shield" className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-3">Антикризисное управление</h3>
                <p className="text-muted-foreground leading-relaxed">
                  В 2019–2021 годах мы завершили строительство проблемных жилых объектов в пгт. Томилино. 
                  В декабре 2020 года в эксплуатацию были введены три жилых дома общей площадью около 20 000 кв. м. 
                  Этот опыт подтверждает нашу способность успешно решать даже самые сложные задачи.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 animate-fade-in">
            Почему выбирают нас?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Надёжный партнёр для реализации проектов любой сложности
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {advantages.map((adv, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-card to-card/50 border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Icon name={adv.icon as any} className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{adv.title}</h3>
                <p className="text-muted-foreground text-sm">{adv.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto text-center">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Выбирая <span className="font-semibold text-foreground">«СМАРТ-Девелопмент»</span>, 
                вы получаете надёжного партнёра, который реализует ваши планы в срок и с безупречным качеством.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 animate-fade-in">
              Контакты
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center bg-card/50 border-white/20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-3">
                  <Icon name="Mail" className="text-white" size={24} />
                </div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">office@smrtdevelopment.ru</p>
              </Card>
              <Card className="p-6 text-center bg-card/50 border-white/20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-3">
                  <Icon name="Phone" className="text-white" size={24} />
                </div>
                <h3 className="font-semibold mb-1">Телефон</h3>
                <p className="text-sm text-muted-foreground">+7 (495) 000-00-00</p>
              </Card>
              <Card className="p-6 text-center bg-card/50 border-white/20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-3">
                  <Icon name="MapPin" className="text-white" size={24} />
                </div>
                <h3 className="font-semibold mb-1">Адрес</h3>
                <p className="text-sm text-muted-foreground">Москва</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/50 border-t border-white/10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/80 text-sm">
              © 2024 ООО «СМАРТ-Девелопмент». Все права защищены.
            </div>
            <div className="flex gap-6">
              <a href="#about" className="text-white/60 hover:text-white text-sm transition-colors">О компании</a>
              <a href="#services" className="text-white/60 hover:text-white text-sm transition-colors">Услуги</a>
              <a href="#projects" className="text-white/60 hover:text-white text-sm transition-colors">Проекты</a>
              <a href="#contact" className="text-white/60 hover:text-white text-sm transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;