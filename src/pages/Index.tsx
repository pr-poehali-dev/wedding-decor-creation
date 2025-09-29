import { useState } from 'react';
import { Button } from '@/components/ui/button';
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
    <div className="min-h-screen bg-white">
      {/* Minimalist Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            <h1 className="font-playfair text-xl tracking-wider text-gray-900">
              КСЕНИЯ АЛЕКСАНДРОВА
            </h1>
            <div className="hidden md:flex gap-12">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О мне' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-montserrat text-sm tracking-wide transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-gray-900 font-medium' 
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Modern & Minimal */}
      <section id="home" className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 animate-fade-in">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gray-50 text-gray-700 text-sm font-montserrat tracking-wider rounded-full">
                  ФЛОРИСТ-ДЕКОРАТОР
                </span>
              </div>
              <h2 className="font-playfair text-6xl lg:text-7xl font-light mb-8 leading-tight text-gray-900">
                Botanical
                <br />
                <span className="italic">Elegance</span>
              </h2>
              <p className="font-montserrat text-gray-600 text-lg mb-12 leading-relaxed max-w-md">
                Авторская флористика для свадеб. Создаю уникальные композиции, отражающие вашу историю любви.
              </p>
              <Button
                onClick={() => scrollToSection('contacts')}
                className="bg-gray-900 hover:bg-gray-800 text-white font-montserrat px-10 py-7 text-sm tracking-wider rounded-none transition-all duration-300"
              >
                СВЯЗАТЬСЯ СО МНОЙ
              </Button>
            </div>
            <div className="lg:col-span-7 animate-scale-in">
              <div className="relative">
                <img
                  src="https://cdn.poehali.dev/files/fe1b0a5d-4c48-479c-bd8f-23e40bcc9172.jpg"
                  alt="Botanical Wedding Florals"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gray-50 -z-10 hidden lg:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Banner */}
      <section className="py-24">
        <div className="relative h-[70vh]">
          <img
            src="https://cdn.poehali.dev/files/9c4a110d-c54f-46ae-86be-f6dc96723715.jpg"
            alt="Floral Composition"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="font-playfair text-5xl italic mb-4">Каждая деталь имеет значение</p>
              <div className="w-16 h-px bg-white mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Minimal & Elegant */}
      <section id="about" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/files/a9e16ab3-066c-4942-a797-270e244d9f46.jpg"
                alt="About Ksenia"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            <div className="space-y-8">
              <div>
                <span className="text-gray-400 font-montserrat text-sm tracking-widest">О ДЕКОРАТОРЕ</span>
                <h3 className="font-playfair text-5xl font-light mt-4 mb-6 text-gray-900">
                  Философия работы
                </h3>
              </div>
              <div className="space-y-6 font-montserrat text-gray-600 leading-relaxed">
                <p>
                  Меня зовут Ксения Александрова, и вот уже более 10 лет я создаю флористические композиции для свадеб, которые становятся частью вашей истории.
                </p>
                <p>
                  Я не следую трендам слепо — я создаю их. Моя философия строится на честности материалов, чистоте линий и глубоком понимании ботаники. Каждая композиция — это баланс между природной красотой и архитектурной формой.
                </p>
                <p>
                  Работаю только с сезонными цветами премиум-качества, сотрудничаю напрямую с европейскими питомниками и экспериментирую с необычными текстурами.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="font-playfair text-4xl text-gray-900 mb-2">10+</div>
                  <div className="font-montserrat text-sm text-gray-500 tracking-wide">ЛЕТ ОПЫТА</div>
                </div>
                <div>
                  <div className="font-playfair text-4xl text-gray-900 mb-2">200+</div>
                  <div className="font-montserrat text-sm text-gray-500 tracking-wide">СВАДЕБ</div>
                </div>
                <div>
                  <div className="font-playfair text-4xl text-gray-900 mb-2">100%</div>
                  <div className="font-montserrat text-sm text-gray-500 tracking-wide">АВТОРСКОЕ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - 2025 Trend */}
      <section className="py-24 bg-gray-50 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-gray-400 font-montserrat text-sm tracking-widest">ЧТО Я ПРЕДЛАГАЮ</span>
            <h3 className="font-playfair text-5xl font-light mt-4 text-gray-900">Услуги</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Букет невесты',
                description: 'Авторский букет — центральный элемент образа. Создаю композиции, которые дополняют силуэт и стиль платья.',
              },
              {
                title: 'Церемония',
                description: 'Оформление церемониального пространства: арки, инсталляции, декор прохода. Работа с архитектурой места.',
              },
              {
                title: 'Банкет',
                description: 'Флористическая концепция для приёма: композиции на столы, акцентные инсталляции, декор зон.',
              },
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="mb-6 text-gray-300 font-playfair text-6xl">0{index + 1}</div>
                <h4 className="font-playfair text-2xl mb-4 text-gray-900">{service.title}</h4>
                <p className="font-montserrat text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio - Masonry Grid */}
      <section id="portfolio" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-gray-400 font-montserrat text-sm tracking-widest">ИЗБРАННЫЕ РАБОТЫ</span>
            <h3 className="font-playfair text-5xl font-light mt-4 text-gray-900">Портфолио</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-8">
              <div className="group relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/05db82e2-ec72-4d94-94f6-ebd1fdfc7147.jpg"
                  alt="White Elegance"
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>
              <div className="group relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/1c3a42bd-f996-4c1b-9fe8-880dd6cb9722.jpg"
                  alt="Yellow Composition"
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>
            </div>
            
            <div className="space-y-8 md:mt-16">
              <div className="group relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/a9e16ab3-066c-4942-a797-270e244d9f46.jpg"
                  alt="Purple Avant-garde"
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>
              <div className="group relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/75a71964-f83d-4c60-a9be-f1f92b9afe4b.jpg"
                  alt="Natural Harmony"
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="group relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/9c4a110d-c54f-46ae-86be-f6dc96723715.jpg"
                  alt="Yellow Symphony"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>
              <div className="group relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/d62a1845-331d-40f5-8aa2-936d333618f4.jpg"
                  alt="Succulent Details"
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts - Minimal Form */}
      <section id="contacts" className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gray-400 font-montserrat text-sm tracking-widest">ДАВАЙТЕ ОБСУДИМ</span>
            <h3 className="font-playfair text-5xl font-light mt-4 mb-6 text-gray-900">
              Вашу свадьбу
            </h3>
            <p className="font-montserrat text-gray-600 max-w-xl mx-auto">
              Расскажите о ваших идеях, и я предложу концепцию, которая идеально подойдёт для вашего торжества
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input
                  placeholder="Ваше имя"
                  className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 font-montserrat rounded-none h-14 focus:border-gray-900 focus:ring-0 transition-colors"
                />
              </div>
              <div>
                <Input
                  placeholder="Телефон"
                  className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 font-montserrat rounded-none h-14 focus:border-gray-900 focus:ring-0 transition-colors"
                />
              </div>
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 font-montserrat rounded-none h-14 focus:border-gray-900 focus:ring-0 transition-colors"
              />
            </div>
            <div>
              <Textarea
                placeholder="Расскажите о вашей свадьбе: дата, место, стиль, пожелания..."
                rows={6}
                className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 font-montserrat rounded-none resize-none focus:border-gray-900 focus:ring-0 transition-colors"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-montserrat py-7 text-sm tracking-wider rounded-none transition-all duration-300"
            >
              ОТПРАВИТЬ ЗАЯВКУ
            </Button>
          </form>

          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-center gap-12 text-center">
              <div className="flex items-center justify-center gap-3">
                <Icon name="Phone" size={20} className="text-gray-400" />
                <span className="font-montserrat text-gray-700 text-sm">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="Mail" size={20} className="text-gray-400" />
                <span className="font-montserrat text-gray-700 text-sm">ksenia@wedding-decor.ru</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="Instagram" size={20} className="text-gray-400" />
                <span className="font-montserrat text-gray-700 text-sm">@ksenia_flowers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Ultra Minimal */}
      <footer className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-montserrat text-gray-400 text-sm tracking-wide">
            © 2025 Ксения Александрова
          </p>
          <p className="font-montserrat text-gray-400 text-sm tracking-wide">
            Флорист-декоратор / Москва
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;