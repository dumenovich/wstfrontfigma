import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  ArrowRight, 
  Clock, 
  Calendar,
  TrendingUp,
  Shield,
  FileText,
  BookOpen,
  ArrowLeft
} from 'lucide-react';
import {
  LogoVariant2
} from './LogoVariants';

interface BlogDesignPreviewProps {
  onBack: () => void;
}

export default function BlogDesignPreview({ onBack }: BlogDesignPreviewProps) {
  const [activeVariant, setActiveVariant] = useState<1 | 2 | 3>(1);

  // Моковые данные статей (как будет выглядеть через месяц)
  const articles = [
    {
      id: 1,
      title: '7 скрытых рисков лотов на торгах',
      description: 'Подробный разбор юридических, экологических и финансовых подводных камней при покупке земельных участков на аукционах',
      category: 'Риски',
      categoryColor: 'from-red-500 to-orange-500',
      readTime: 12,
      date: '23 декабря 2024',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Чек-лист проверки участка перед покупкой',
      description: 'Пошаговая инструкция с бесплатными сервисами и шаблоном для скачивания',
      category: 'Гайды',
      categoryColor: 'from-blue-500 to-cyan-500',
      readTime: 8,
      date: '20 декабря 2024',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
      featured: false
    },
    {
      id: 3,
      title: 'Топ-5 бесплатных сервисов для проверки земли',
      description: 'Обзор ЕГРН, Росреестра, публичной кадастровой карты и других инструментов',
      category: 'Инструменты',
      categoryColor: 'from-purple-500 to-pink-500',
      readTime: 6,
      date: '17 декабря 2024',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      featured: false
    },
    {
      id: 4,
      title: 'Кейс: как мы нашли участок с ROI 200%',
      description: 'История успешной покупки участка на торгах и его последующей перепродажи',
      category: 'Кейсы',
      categoryColor: 'from-green-500 to-emerald-500',
      readTime: 10,
      date: '13 декабря 2024',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      featured: false
    },
    {
      id: 5,
      title: 'Аренда земли в 2025: тренды и прогнозы',
      description: 'Анализ рынка, статистика торгов и рекомендации для инвесторов',
      category: 'Аналитика',
      categoryColor: 'from-indigo-500 to-blue-500',
      readTime: 15,
      date: '10 декабря 2024',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      featured: false
    },
    {
      id: 6,
      title: 'Что делать при обнаружении обременений',
      description: 'Юридические аспекты и пошаговый алгоритм действий',
      category: 'Право',
      categoryColor: 'from-orange-500 to-red-500',
      readTime: 9,
      date: '6 декабря 2024',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="fixed inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10">
        {/* Header - как на главной */}
        <header className="border-b border-white/10 backdrop-blur-lg bg-white/5">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 group"
            >
              <LogoVariant2 className="w-8 h-8" />
              <span className="text-white">zemscan.ru</span>
            </button>
            
            <div className="flex items-center gap-6">
              <button className="text-cyan-400">Блог</button>
              
              <div className="h-8 w-px bg-white/10 hidden md:block" />
              
              <div className="hidden md:flex flex-col items-end gap-0.5">
                <span className="text-blue-400/70 text-xs">
                  Вопросы и предложения:
                </span>
                <a
                  href="mailto:info@zemscan.ru"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  info@zemscan.ru
                </a>
              </div>
              <div className="h-8 w-px bg-white/10 hidden md:block" />
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                Скоро запуск
              </Badge>
            </div>
          </div>
        </header>
        
        {/* Page Title */}
        <div className="border-b border-white/10 bg-gradient-to-b from-transparent to-slate-950/30">
          <div className="max-w-7xl mx-auto px-6 py-12 text-center">
            <h1 className="text-4xl md:text-5xl mb-4">
              <span className="text-white">Блог о земельных торгах</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Гайды, аналитика, кейсы и практические советы по покупке земельных участков на аукционах
            </p>
          </div>
        </div>

        {/* Variant Selector - только для превью */}
        <div className="bg-slate-900/50 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <p className="text-slate-400 text-sm mb-4">
              <strong className="text-cyan-400">Превью дизайна:</strong> Выберите вариант оформления (2 статьи/неделю, ~8 статей/месяц)
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setActiveVariant(1)}
                className={`px-6 py-3 rounded-lg transition-all ${
                  activeVariant === 1
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                Вариант 1: Hero + Grid
              </button>
              <button
                onClick={() => setActiveVariant(2)}
                className={`px-6 py-3 rounded-lg transition-all ${
                  activeVariant === 2
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                Вариант 2: Featured + Compact
              </button>
              <button
                onClick={() => setActiveVariant(3)}
                className={`px-6 py-3 rounded-lg transition-all ${
                  activeVariant === 3
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                Вариант 3: Magazine Style
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          {activeVariant === 1 && <Variant1 articles={articles} />}
          {activeVariant === 2 && <Variant2 articles={articles} />}
          {activeVariant === 3 && <Variant3 articles={articles} />}
        </div>
        
        {/* Footer */}
        <footer className="border-t border-white/10 bg-gradient-to-b from-transparent to-slate-900/50 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <LogoVariant2 className="w-9 h-9" />
                  <div className="text-white">zemscan.ru</div>
                </div>
                <div className="hidden md:block h-8 w-px bg-white/20" />
                <p className="text-blue-100/70 hidden md:block">
                  Аналитика земельного рынка
                </p>
              </div>
              <div className="text-blue-400/60">© 2025</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// ВАРИАНТ 1: Hero Featured + Grid (лучше всего для малого количества статей)
function Variant1({ articles }: { articles: any[] }) {
  const featured = articles[0];
  const rest = articles.slice(1, 6);

  return (
    <div className="space-y-12">
      {/* Описание */}
      <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6">
        <h3 className="text-xl text-white mb-2">✨ Hero + Grid</h3>
        <p className="text-slate-300 text-sm mb-3">
          <strong>Для кого:</strong> Когда важно показать качество каждой статьи. Акцент на главном материале.
        </p>
        <p className="text-slate-400 text-sm">
          <strong>Плюсы:</strong> Премиум-вид даже с 2-3 статьями, главная статья получает максимум внимания
          <br />
          <strong>Минусы:</strong> Занимает много места на странице
        </p>
      </Card>

      {/* Hero Featured Article */}
      <Card className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-[1.01]">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-80 md:h-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/50 z-10" />
            <img 
              src={featured.image} 
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <Badge className={`absolute top-4 left-4 z-20 bg-gradient-to-r ${featured.categoryColor} border-0 text-white`}>
              {featured.category}
            </Badge>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Calendar className="w-4 h-4" />
                {featured.date}
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Clock className="w-4 h-4" />
                {featured.readTime} мин
              </div>
            </div>

            <h2 className="text-3xl text-white mb-4 group-hover:text-cyan-400 transition-colors">
              {featured.title}
            </h2>

            <p className="text-slate-300 mb-6 leading-relaxed">
              {featured.description}
            </p>

            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white w-fit group/btn">
              Читать статью
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Grid of Other Articles */}
      <div>
        <h3 className="text-xl text-white mb-6">Все статьи</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article) => (
            <Card 
              key={article.id}
              className="group overflow-hidden bg-white/5 backdrop-blur-xl border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className={`absolute top-3 left-3 bg-gradient-to-r ${article.categoryColor} border-0 text-white text-xs`}>
                  {article.category}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-slate-400 text-xs">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime} мин
                  </div>
                  <span>•</span>
                  <div>{article.date}</div>
                </div>

                <h3 className="text-lg text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {article.description}
                </p>

                <div className="flex items-center gap-2 text-cyan-400 text-sm group-hover:gap-3 transition-all">
                  <span>Читать</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// ВАРИАНТ 2: Featured + Compact List (компактно, но стильно)
function Variant2({ articles }: { articles: any[] }) {
  const featured = articles[0];
  const rest = articles.slice(1, 6);

  return (
    <div className="space-y-12">
      {/* Описание */}
      <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6">
        <h3 className="text-xl text-white mb-2">📰 Featured + Compact List</h3>
        <p className="text-slate-300 text-sm mb-3">
          <strong>Для кого:</strong> Когда нужно компактно показать много статей без потери визуала.
        </p>
        <p className="text-slate-400 text-sm">
          <strong>Плюсы:</strong> Компактно, масштабируется до 20+ статей, главная статья выделена
          <br />
          <strong>Минусы:</strong> Остальные статьи менее заметны
        </p>
      </Card>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left: Featured Article */}
        <div className="lg:col-span-2">
          <Card className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border-white/10 hover:border-cyan-500/30 transition-all duration-300 h-full">
            <div className="relative h-96 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-10" />
              <img 
                src={featured.image} 
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="relative -mt-32 z-20 p-8">
              <Badge className={`bg-gradient-to-r ${featured.categoryColor} border-0 text-white mb-4`}>
                {featured.category}
              </Badge>

              <h2 className="text-3xl text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {featured.title}
              </h2>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {featured.description}
              </p>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  {featured.date}
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Clock className="w-4 h-4" />
                  {featured.readTime} мин
                </div>
              </div>

              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white group/btn">
                Читать стать
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Right: Compact List */}
        <div className="space-y-4">
          <h3 className="text-xl text-white mb-4">Последние статьи</h3>
          {rest.map((article) => (
            <Card 
              key={article.id}
              className="group bg-white/5 backdrop-blur-xl border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer p-4"
            >
              <Badge className={`bg-gradient-to-r ${article.categoryColor} border-0 text-white text-xs mb-2`}>
                {article.category}
              </Badge>
              
              <h4 className="text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                {article.title}
              </h4>

              <div className="flex items-center gap-3 text-slate-400 text-xs">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime} мин
                </div>
                <span>•</span>
                <div>{article.date}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// ВАРИАНТ 3: Magazine Style (асимметричная сетка, современно)
function Variant3({ articles }: { articles: any[] }) {
  return (
    <div className="space-y-12">
      {/* Описание */}
      <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6">
        <h3 className="text-xl text-white mb-2">📖 Magazine Style</h3>
        <p className="text-slate-300 text-sm mb-3">
          <strong>Для кого:</strong> Модный editorial-стиль, как в Medium/Substack.
        </p>
        <p className="text-slate-400 text-sm">
          <strong>Плюсы:</strong> Современный вид, динамичная сетка, все статьи визуально равноценны
          <br />
          <strong>Минусы:</strong> Сложнее выделить главную статью
        </p>
      </Card>

      {/* Asymmetric Grid */}
      <div className="grid md:grid-cols-12 gap-6">
        {/* Large card - spans 8 cols */}
        <Card className="md:col-span-8 group overflow-hidden bg-white/5 backdrop-blur-xl border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-80 md:h-auto overflow-hidden">
              <img 
                src={articles[0].image} 
                alt={articles[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <Badge className={`absolute top-4 left-4 bg-gradient-to-r ${articles[0].categoryColor} border-0 text-white`}>
                {articles[0].category}
              </Badge>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {articles[0].title}
              </h3>
              <p className="text-slate-300 mb-4 text-sm">
                {articles[0].description}
              </p>
              <div className="flex items-center gap-3 text-slate-400 text-xs">
                <Clock className="w-3 h-3" />
                {articles[0].readTime} мин
              </div>
            </div>
          </div>
        </Card>

        {/* Small cards - span 4 cols */}
        <div className="md:col-span-4 space-y-6">
          {articles.slice(1, 3).map((article) => (
            <Card 
              key={article.id}
              className="group overflow-hidden bg-white/5 backdrop-blur-xl border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className={`absolute top-3 right-3 bg-gradient-to-r ${article.categoryColor} border-0 text-white text-xs`}>
                  {article.category}
                </Badge>
              </div>
              <div className="p-6">
                <h4 className="text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {article.title}
                </h4>
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <Clock className="w-3 h-3" />
                  {article.readTime} мин
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Medium cards - 4 cols each */}
        {articles.slice(3, 6).map((article) => (
          <Card 
            key={article.id}
            className="md:col-span-4 group overflow-hidden bg-white/5 backdrop-blur-xl border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer"
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <Badge className={`absolute top-4 left-4 bg-gradient-to-r ${article.categoryColor} border-0 text-white text-xs`}>
                {article.category}
              </Badge>
            </div>
            <div className="p-6">
              <h4 className="text-lg text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                {article.title}
              </h4>
              <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                {article.description}
              </p>
              <div className="flex items-center gap-3 text-slate-400 text-xs">
                <Clock className="w-3 h-3" />
                {article.readTime} мин
                <span>•</span>
                {article.date}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}