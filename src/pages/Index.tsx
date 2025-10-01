import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [length, setLength] = useState([3]);
  const [height, setHeight] = useState([2.4]);
  const [material, setMaterial] = useState('mdf');
  const [countertop, setCountertop] = useState('artificial');

  const calculatePrice = () => {
    const basePrice = length[0] * 15000;
    const materialMultiplier = material === 'mdf' ? 1 : material === 'chipboard' ? 0.8 : 1.3;
    const countertopPrice = countertop === 'artificial' ? 8000 : countertop === 'natural' ? 15000 : 5000;
    return Math.round((basePrice * materialMultiplier + countertopPrice * length[0]));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: '✅ Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
  };

  const portfolioItems = [
    {
      id: 1,
      title: 'Современная кухня в стиле минимализм',
      style: 'Минимализм',
      img: '/img/e364c3d2-b9c0-4fd5-bf17-25428d7fe464.jpg',
    },
    {
      id: 2,
      title: 'Классическая кухня из массива',
      style: 'Классика',
      img: '/img/bf67ea78-95c9-4c6a-b9e9-2c7d86872774.jpg',
    },
    {
      id: 3,
      title: 'Кухня в скандинавском стиле',
      style: 'Скандинавский',
      img: '/img/b2b016bf-e298-4153-9bd4-933796d9b49d.jpg',
    },
    {
      id: 4,
      title: 'Кухня хай-тек с глянцевыми фасадами',
      style: 'Хай-тек',
      img: '/img/e364c3d2-b9c0-4fd5-bf17-25428d7fe464.jpg',
    },
    {
      id: 5,
      title: 'Кухня в стиле лофт',
      style: 'Лофт',
      img: '/img/bf67ea78-95c9-4c6a-b9e9-2c7d86872774.jpg',
    },
    {
      id: 6,
      title: 'Угловая кухня с островом',
      style: 'Модерн',
      img: '/img/b2b016bf-e298-4153-9bd4-933796d9b49d.jpg',
    },
  ];

  const reviews = [
    { id: 1, name: 'Елена Смирнова', rating: 5, text: 'Заказывали кухню в марте, установили за 3 недели. Качество отличное, все по размерам. Мастера работали аккуратно!', date: '15 сентября 2024' },
    { id: 2, name: 'Дмитрий Козлов', rating: 5, text: 'Очень довольны результатом! Помогли с дизайном, предложили отличные решения. Цена соответствует качеству.', date: '28 августа 2024' },
    { id: 3, name: 'Анна Петрова', rating: 5, text: 'Спасибо за профессиональную работу! Кухня получилась именно такой, как мы хотели. Рекомендую!', date: '10 августа 2024' },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold text-xl">
                K
              </div>
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                КухниПро
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#main" className="text-foreground hover:text-primary transition-colors font-medium">Главная</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors font-medium">Наши работы</a>
              <a href="#designs" className="text-foreground hover:text-primary transition-colors font-medium">Готовый дизайн</a>
              <a href="#promo" className="text-foreground hover:text-primary transition-colors font-medium">Акции</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-3 text-sm">
                <Icon name="Phone" size={18} className="text-primary" />
                <span className="font-semibold">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Icon name="Send" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="promo" className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-2xl bg-white/90 backdrop-blur">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="inline-block px-4 py-2 bg-accent text-white rounded-full text-sm font-semibold animate-fade-in">
                      🔥 Акция до 31 октября
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                      Кухня вашей мечты <span className="bg-gradient-primary bg-clip-text text-transparent">со скидкой 25%</span>
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      Бесплатный замер, дизайн-проект в подарок и установка за 3 недели
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white font-semibold">
                        Рассчитать стоимость
                        <Icon name="ArrowRight" size={20} className="ml-2" />
                      </Button>
                      <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                        <Icon name="Phone" size={20} className="mr-2" />
                        Позвонить
                      </Button>
                    </div>
                  </div>
                  <div className="w-full md:w-auto">
                    <div className="w-64 h-64 rounded-2xl bg-gradient-accent animate-gradient bg-[length:200%_200%] flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-6xl font-bold">-25%</div>
                        <div className="text-xl font-semibold mt-2">на все кухни</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Калькулятор стоимости кухни</h2>
              <p className="text-lg text-muted-foreground">Узнайте примерную цену за 2 минуты</p>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Параметры кухни</CardTitle>
                <CardDescription>Выберите основные характеристики</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-base font-medium">Длина кухни (м)</Label>
                    <span className="text-2xl font-bold text-primary">{length[0]} м</span>
                  </div>
                  <Slider
                    value={length}
                    onValueChange={setLength}
                    min={2}
                    max={8}
                    step={0.5}
                    className="py-4"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-base font-medium">Высота фасадов (м)</Label>
                    <span className="text-2xl font-bold text-primary">{height[0]} м</span>
                  </div>
                  <Slider
                    value={height}
                    onValueChange={setHeight}
                    min={2}
                    max={3}
                    step={0.1}
                    className="py-4"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label className="text-base font-medium">Материал фасадов</Label>
                    <Select value={material} onValueChange={setMaterial}>
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="chipboard">ЛДСП (эконом)</SelectItem>
                        <SelectItem value="mdf">МДФ (стандарт)</SelectItem>
                        <SelectItem value="solid">Массив дерева (премиум)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base font-medium">Материал столешницы</Label>
                    <Select value={countertop} onValueChange={setCountertop}>
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="laminate">Ламинат (эконом)</SelectItem>
                        <SelectItem value="artificial">Искусственный камень</SelectItem>
                        <SelectItem value="natural">Натуральный камень</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-muted-foreground">Примерная стоимость</div>
                      <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                        {calculatePrice().toLocaleString()} ₽
                      </div>
                    </div>
                    <Icon name="Calculator" size={48} className="text-primary/20" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    * Итоговая стоимость рассчитывается индивидуально после замера
                  </p>
                  <Button className="w-full h-12 bg-gradient-primary text-white font-semibold" size="lg">
                    Заказать точный расчет
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши работы</h2>
            <p className="text-lg text-muted-foreground">Более 500 реализованных проектов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                    <Icon name="ExternalLink" size={18} className="text-primary flex-shrink-0 mt-1" />
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Tag" size={14} />
                    {item.style}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              Смотреть все работы
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">Нам доверяют уже более 10 лет</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription className="text-sm">{review.date}</CardDescription>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Заказать бесплатный замер</CardTitle>
                <CardDescription className="text-base">
                  Оставьте заявку и наш специалист приедет в удобное для вас время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" required className="h-12" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required className="h-12" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Адрес</Label>
                    <Input id="address" placeholder="Москва, ул. Примерная, д. 1" className="h-12" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comment">Комментарий</Label>
                    <Textarea
                      id="comment"
                      placeholder="Расскажите о ваших пожеланиях..."
                      className="min-h-24"
                    />
                  </div>

                  <Button type="submit" className="w-full h-12 bg-gradient-primary text-white font-semibold" size="lg">
                    Отправить заявку
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center font-bold">
                  K
                </div>
                <span className="text-xl font-bold">КухниПро</span>
              </div>
              <p className="text-sm text-white/60">
                Производство кухонь на заказ с 2013 года
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#main" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Наши работы</a></li>
                <li><a href="#designs" className="hover:text-white transition-colors">Готовый дизайн</a></li>
                <li><a href="#promo" className="hover:text-white transition-colors">Акции</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@kuhnipro.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 1
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="Send" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/40">
            © 2024 КухниПро. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;