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
  };

  const stats = [
    { value: '150 000+', label: 'кв.м построено', icon: 'Building2' },
    { value: '15+', label: 'проектов реализовано', icon: 'Briefcase' },
    { value: '1997', label: 'год основания группы', icon: 'Calendar' },
    { value: '100%', label: 'под ключ', icon: 'CheckCircle' }
  ];

  const services = [
    {
      title: 'Девелопмент',
      description: 'Освоение земельных участков под размещение объектов коммерческой недвижимости',
      icon: 'MapPin',
      color: 'from-primary to-blue-600'
    },
    {
      title: 'Складские комплексы',
      description: 'Строительство современных складских комплексов класса A, B и C',
      icon: 'Warehouse',
      color: 'from-accent to-orange-600'
    },
    {
      title: 'Реконструкция',
      description: 'Модернизация зданий коммерческого и производственного назначения',
      icon: 'Wrench',
      color: 'from-primary to-cyan-600'
    },
    {
      title: 'Антикризисное управление',
      description: 'Завершение строительства объектов в составе проблемных реестров',
      icon: 'Shield',
      color: 'from-accent to-red-600'
    }
  ];

  const projects = [
    { title: 'Складской комплекс класса A', area: '26 000 кв.м', location: 'г.п. Томилино' },
    { title: 'Складские комплексы класса A', area: '24 000 + 17 000 кв.м', location: 'г.о. Пушкино' },
    { title: 'Производственный корпус', area: '5 000 кв.м', location: 'ОАО «ТрансНефть», ПАО «Газпром»' },
    { title: 'Жилые дома', area: '20 000 кв.м', location: 'пгт. Томилино (2020)' }
  ];

  const advantages = [
    {
      icon: 'Users',
      title: 'Собственная служба заказчика',
      description: 'и строительного контроля'
    },
    {
      icon: 'HardHat',
      title: 'Финансово – технический аудит и мониторинг',
      description: 'Комплексная экспертиза инвестиционного проекта для обеспечения эффективного использования средств и контроля качества строительства'
    },
    {
      icon: 'Award',
      title: 'СРО и допуски',
      description: 'НОПРИЗ, НОСТРОЙ, аккредитация'
    },
    {
      icon: 'FileCheck',
      title: 'Партнерские организации',
      description: 'Изыскательские, проектные, экспертные'
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
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Контакты</a>
            </div>
            <Button className="bg-accent hover:bg-accent/90 hidden md:flex">
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
            <h1 className="text-5xl md:text-7xl font-heading mb-6 bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent font-semibold">От замысла до воплощения — профессионально</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">ООО «СМАРТ-Девелопмент» — часть стабильной группы предприятий, которая успешно работает с 1997 года</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="FileText" className="mr-2" size={20} />
                Оставить заявку
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                <Icon name="Play" className="mr-2" size={20} />
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
            О компании
          </h2>
          <div className="max-w-4xl mx-auto mb-16 text-center animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              ООО «СМАРТ-Девелопмент» входит в группу предприятий с опытом работы более 20 лет. 
              За это время наши специалисты реализовали свыше 15 проектов и построили более 150 000 кв.м 
              коммерческой и жилой недвижимости.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы обладаем всеми необходимыми ресурсами для выполнения полного комплекса строительных работ 
              «под ключ» — от предпроектных изысканий до ввода объектов в эксплуатацию.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-in-left">
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
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 animate-fade-in">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="p-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon as any} className="text-primary group-hover:text-accent transition-colors" size={32} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 animate-fade-in">
            Реализованные проекты
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-card to-card/50 border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Icon name="Building" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2">{project.title}</h3>
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Icon name="Maximize" size={16} />
                      <span className="font-semibold">{project.area}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Icon name="MapPin" size={14} />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 animate-fade-in">
            Связаться с нами
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите о вашем проекте"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/50 min-h-32"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="p-6 text-center bg-card/50 border-white/20">
                <Icon name="Mail" className="mx-auto mb-3 text-primary" size={28} />
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-medium mt-1">info@smart-dev.ru</div>
              </Card>
              <Card className="p-6 text-center bg-card/50 border-white/20">
                <Icon name="Phone" className="mx-auto mb-3 text-primary" size={28} />
                <div className="text-sm text-muted-foreground">Телефон</div>
                <div className="font-medium mt-1">+7 (495) 123-45-67</div>
              </Card>
              <Card className="p-6 text-center bg-card/50 border-white/20">
                <Icon name="MapPin" className="mx-auto mb-3 text-primary" size={28} />
                <div className="text-sm text-muted-foreground">Офис</div>
                <div className="font-medium mt-1">Москва</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-heading font-bold mb-4">СМАРТ-Девелопмент</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Профессиональное строительство коммерческой недвижимости под ключ
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Девелопмент</li>
                <li>Складские комплексы</li>
                <li>Реконструкция</li>
                <li>Антикризисное управление</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@smart-dev.ru</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>© 2024 ООО «СМАРТ-Девелопмент». Все права защищены.</p>
            <p className="mt-2">Член СРО в области строительства и проектирования</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;