import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-[#9B59B6]/10 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💐</span>
              <h1 className="font-playfair text-2xl font-bold bg-gradient-to-r from-[#9B59B6] to-[#FFB6C1] bg-clip-text text-transparent">
                Ксения Александрова
              </h1>
            </div>
            <div className="hidden md:flex gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О декораторе' },
                { id: 'services', label: 'Услуги' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-montserrat transition-all duration-300 hover:text-[#9B59B6] ${
                    activeSection === item.id ? 'text-[#9B59B6] font-semibold' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-b from-white to-[#F5F0E8]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Уникальная флористика для вашей{' '}
                <span className="bg-gradient-to-r from-[#FFB6C1] to-[#9B59B6] bg-clip-text text-transparent">
                  свадьбы
                </span>
              </h2>
              <p className="font-montserrat text-lg text-gray-600 mb-8 leading-relaxed">
                Создаю авторские цветочные композиции, которые превращают ваш особенный день в произведение искусства
              </p>
              <Button
                onClick={() => scrollToSection('contacts')}
                className="bg-gradient-to-r from-[#FFB6C1] to-[#9B59B6] hover:opacity-90 text-white font-montserrat px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Заказать консультацию
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFB6C1]/20 to-[#9B59B6]/20 blur-3xl rounded-full"></div>
              <img
                src="https://cdn.poehali.dev/files/fe1b0a5d-4c48-479c-bd8f-23e40bcc9172.jpg"
                alt="Свадебная флористика"
                className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-4 gap-4 max-w-7xl mx-auto">
            <div className="md:col-span-2 md:row-span-2">
              <img
                src="https://cdn.poehali.dev/files/9c4a110d-c54f-46ae-86be-f6dc96723715.jpg"
                alt="Композиция с желтыми цветами"
                className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:col-span-2">
              <img
                src="https://cdn.poehali.dev/files/1c3a42bd-f996-4c1b-9fe8-880dd6cb9722.jpg"
                alt="Желтые розы"
                className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/files/05db82e2-ec72-4d94-94f6-ebd1fdfc7147.jpg"
                alt="Белые розы"
                className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <img
                src="https://cdn.poehali.dev/files/d62a1845-331d-40f5-8aa2-936d333618f4.jpg"
                alt="Суккуленты"
                className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              О декораторе
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FFB6C1] to-[#9B59B6] mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <p className="font-montserrat text-lg text-gray-700 mb-6 leading-relaxed">
                Здравствуйте! Я — Ксения Александрова, флорист-декоратор с более чем 10-летним опытом создания неповторимых цветочных композиций для свадеб.
              </p>
              <p className="font-montserrat text-lg text-gray-700 mb-6 leading-relaxed">
                Моя философия — каждая свадьба уникальна, как и пара, которая её создаёт. Я не использую шаблоны, а разрабатываю индивидуальные концепции, отражающие вашу историю любви.
              </p>
              <p className="font-montserrat text-lg text-gray-700 leading-relaxed">
                Работаю с премиальными цветами со всего мира, сочетая классические техники флористики с современными трендами и авангардными решениями.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-[#F5F0E8] rounded-xl">
                  <div className="text-3xl font-playfair font-bold text-[#9B59B6] mb-1">10+</div>
                  <div className="text-sm font-montserrat text-gray-600">лет опыта</div>
                </div>
                <div className="text-center p-4 bg-[#F5F0E8] rounded-xl">
                  <div className="text-3xl font-playfair font-bold text-[#9B59B6] mb-1">200+</div>
                  <div className="text-sm font-montserrat text-gray-600">свадеб</div>
                </div>
                <div className="text-center p-4 bg-[#F5F0E8] rounded-xl">
                  <div className="text-3xl font-playfair font-bold text-[#9B59B6] mb-1">100%</div>
                  <div className="text-sm font-montserrat text-gray-600">уникальные</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://cdn.poehali.dev/files/a9e16ab3-066c-4942-a797-270e244d9f46.jpg"
                alt="Ксения Александрова"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-b from-[#F5F0E8] to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Услуги
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FFB6C1] to-[#9B59B6] mx-auto mb-8"></div>
            <p className="font-montserrat text-lg text-gray-600">
              Художественная флористика для вашего идеального дня
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                icon: '💐',
                title: 'Букет невесты',
                description: 'Авторские букеты, созданные специально для вас. Учитываю стиль платья, тематику свадьбы и ваши пожелания.',
              },
              {
                icon: '🌸',
                title: 'Декор церемонии',
                description: 'Оформление арок, прохода к алтарю, банкетного зала. Создаю атмосферу, которая запомнится навсегда.',
              },
              {
                icon: '✨',
                title: 'Композиции на столы',
                description: 'Изысканные центральные композиции и малые формы для создания единого стиля вашего торжества.',
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-white border-[#9B59B6]/20 p-8 hover:border-[#FFB6C1] hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="font-playfair text-2xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="font-montserrat text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Extended Portfolio Gallery */}
          <div className="max-w-7xl mx-auto">
            <h3 className="font-playfair text-3xl font-bold text-center mb-12 text-gray-900">
              Портфолио работ
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {[
                {
                  src: 'https://cdn.poehali.dev/files/05db82e2-ec72-4d94-94f6-ebd1fdfc7147.jpg',
                  title: 'Классическая элегантность',
                },
                {
                  src: 'https://cdn.poehali.dev/files/a9e16ab3-066c-4942-a797-270e244d9f46.jpg',
                  title: 'Современный авангард',
                },
                {
                  src: 'https://cdn.poehali.dev/files/75a71964-f83d-4c60-a9be-f1f92b9afe4b.jpg',
                  title: 'Природная гармония',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="font-playfair text-xl font-bold text-white">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  src: 'https://cdn.poehali.dev/files/9c4a110d-c54f-46ae-86be-f6dc96723715.jpg',
                  title: 'Желтая симфония',
                },
                {
                  src: 'https://cdn.poehali.dev/files/1c3a42bd-f996-4c1b-9fe8-880dd6cb9722.jpg',
                  title: 'Композиция с суккулентами',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="font-playfair text-xl font-bold text-white">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-6 bg-gradient-to-b from-white to-[#F5F0E8]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Контакты
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FFB6C1] to-[#9B59B6] mx-auto mb-8"></div>
            <p className="font-montserrat text-lg text-gray-600">
              Свяжитесь со мной для обсуждения вашей свадьбы
            </p>
          </div>

          <Card className="bg-white border-[#9B59B6]/20 p-8 md:p-12 shadow-xl">
            <form className="space-y-6">
              <div>
                <label className="font-montserrat text-gray-700 mb-2 block font-medium">
                  Ваше имя
                </label>
                <Input
                  placeholder="Введите имя"
                  className="bg-[#F5F0E8] border-[#9B59B6]/20 text-gray-900 placeholder:text-gray-400 focus:border-[#FFB6C1] focus:ring-[#FFB6C1] transition-colors"
                />
              </div>
              <div>
                <label className="font-montserrat text-gray-700 mb-2 block font-medium">
                  Телефон
                </label>
                <Input
                  placeholder="+7 (___) ___-__-__"
                  className="bg-[#F5F0E8] border-[#9B59B6]/20 text-gray-900 placeholder:text-gray-400 focus:border-[#FFB6C1] focus:ring-[#FFB6C1] transition-colors"
                />
              </div>
              <div>
                <label className="font-montserrat text-gray-700 mb-2 block font-medium">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="example@email.com"
                  className="bg-[#F5F0E8] border-[#9B59B6]/20 text-gray-900 placeholder:text-gray-400 focus:border-[#FFB6C1] focus:ring-[#FFB6C1] transition-colors"
                />
              </div>
              <div>
                <label className="font-montserrat text-gray-700 mb-2 block font-medium">
                  Сообщение
                </label>
                <Textarea
                  placeholder="Расскажите о вашей свадьбе и пожеланиях..."
                  rows={5}
                  className="bg-[#F5F0E8] border-[#9B59B6]/20 text-gray-900 placeholder:text-gray-400 focus:border-[#FFB6C1] focus:ring-[#FFB6C1] transition-colors resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FFB6C1] to-[#9B59B6] hover:opacity-90 text-white font-montserrat py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Отправить заявку
              </Button>
            </form>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Phone" size={24} className="text-[#9B59B6]" />
                  <span className="font-montserrat text-gray-700">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Mail" size={24} className="text-[#9B59B6]" />
                  <span className="font-montserrat text-gray-700">ksenia@wedding-decor.ru</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Instagram" size={24} className="text-[#9B59B6]" />
                  <span className="font-montserrat text-gray-700">@ksenia_flowers</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 bg-white">
        <div className="container mx-auto text-center">
          <p className="font-montserrat text-gray-500">
            © 2025 Ксения Александрова. Свадебная флористика и декор
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;