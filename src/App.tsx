import { useState } from "react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import {
  CheckCircle2,
  Sparkles,
  Rocket,
  TrendingUp,
  Building2,
  DollarSign,
  Home,
  AlertTriangle,
  Shapes,
  Shield,
  BookOpen,
} from "lucide-react";
import {
  LogoVariant1,
  LogoVariant2,
  LogoVariant3,
  LogoVariant4,
  LogoVariant5,
  LogoVariant6,
} from "./components/LogoVariants";
import { FaviconPreview } from "./components/FaviconPreview";
import EmailPreview from "./components/EmailPreview";
import ThankYou from "./components/ThankYou";
import ArticleGuide from "./components/ArticleGuide";
import Unsubscribed from "./components/Unsubscribed";
import Blog from "./components/Blog";
import HeaderVariantsPreview from "./components/HeaderVariantsPreview";

export default function App() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState(2); // Геометрические блоки земельных участков
  const [showLogoSelector, setShowLogoSelector] =
    useState(false);
  const [showFaviconPreview, setShowFaviconPreview] =
    useState(false); // Скрыто
  const [showThankYou, setShowThankYou] = useState(false);
  const [showEmailPreview, setShowEmailPreview] =
    useState(false);
  const [showArticleGuide, setShowArticleGuide] =
    useState(false);
  const [showUnsubscribed, setShowUnsubscribed] =
    useState(false);
  const [unsubscribedStatus, setUnsubscribedStatus] =
    useState<string>("success");
  const [showBlogPreview, setShowBlogPreview] = useState(false);
  const [showHeaderVariants, setShowHeaderVariants] =
    useState(false);
  const [headerVariant, setHeaderVariant] = useState(1); // По умолчанию вариант 1
  const [showBackgroundSelector, setShowBackgroundSelector] =
    useState(false);
  const [selectedBackground, setSelectedBackground] =
    useState(1);
  const [showGradientSelector, setShowGradientSelector] =
    useState(false);
  const [selectedGradient, setSelectedGradient] = useState(1);

  const backgrounds = [
    {
      id: 1,
      name: "Satellite Urban Planning",
      url: "https://images.unsplash.com/photo-1627508080523-2e798cf8eb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBtYXAlMjB1cmJhbiUyMHBsYW5uaW5nfGVufDF8fHx8MTc2NjY4NzYxMXww&ixlib=rb-4.1.0&q=80&w=1080",
      filter: "saturate(0.5) brightness(0.8) contrast(1.3)",
    },
    {
      id: 2,
      name: "City Blocks Aerial",
      url: "https://mos-gpzu.ru/wp-content/uploads/2019/10/mos-gpzu-2.jpg",
      filter: "saturate(0.5) brightness(0.8) contrast(1.3)",
    },
    {
      id: 3,
      name: "Urban Grid View",
      url: "https://st2.depositphotos.com/12112292/42811/v/1600/depositphotos_428117086-stock-illustration-nant-city-map-france-town.jpg",
      filter: "saturate(0.5) brightness(0.8) contrast(1.3)",
    },
    {
      id: 4,
      name: "Satellite Urban Map",
      url: "https://st4.depositphotos.com/21486874/38159/v/1600/depositphotos_381595008-stock-illustration-urban-vector-city-map-of.jpg",
      filter: "saturate(0.5) brightness(0.8) contrast(1.3)",
    },
    {
      id: 5,
      name: "City Districts Aerial",
      url: "https://images.unsplash.com/photo-1682957205692-6b70103cd372?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBjaXR5JTIwYmxvY2tzfGVufDF8fHx8MTc2NjY4OTg3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      filter: "saturate(0.5) brightness(0.8) contrast(1.3)",
    },
    {
      id: 6,
      name: "Residential Satellite",
      url: "https://lh4.googleusercontent.com/gYjiBY9kcH2jXlz74ctE87xZzba7kEngPtw68ab28QQJs5frdWT-Wv50qRUR25QKZxb5N66UmDTg9EmvoU6WxA1x03GTJNDZIGf_8-zpGX5Vl3kj2IuPAJJImy2TYMuTdl6bi8FOKepkNf00-sZ5DA4",
      filter: "saturate(0.5) brightness(0.8) contrast(1.3)",
    },
  ];

  const gradients = [
    {
      id: 1,
      name: "Теплая Бирюза",
      class: "from-slate-950 via-cyan-950 to-slate-950",
      description: "Cyan основа",
    },
    {
      id: 2,
      name: "Бирюза + Изумруд",
      class: "from-cyan-950 via-emerald-950 to-cyan-950",
      description: "Cyan + Emerald",
    },
    {
      id: 3,
      name: "Бирюза + Морская волна",
      class: "from-slate-950 via-teal-950 to-cyan-950",
      description: "Teal акцент",
    },
    {
      id: 4,
      name: "Морская Глубина",
      class: "from-slate-950 via-slate-900 to-slate-950",
      description: "Slate основа",
    },
    {
      id: 5,
      name: "Глубина + Бирюза",
      class: "from-slate-950 via-cyan-900 to-slate-950",
      description: "Slate + Cyan",
    },
    {
      id: 6,
      name: "Глубина + Индиго",
      class: "from-slate-950 via-indigo-950 to-slate-900",
      description: "Slate + Indigo",
    },
    {
      id: 7,
      name: "Бирюза + Мята",
      class: "from-cyan-950 via-teal-900 to-emerald-950",
      description: "Мятный акцент",
    },
    {
      id: 8,
      name: "Глубина + Сапфир",
      class: "from-slate-950 via-blue-950 to-slate-900",
      description: "Slate + Blue",
    },
    {
      id: 9,
      name: "Бирюза + Аметист",
      class: "from-cyan-950 via-purple-950 to-slate-950",
      description: "Purple акцент",
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowThankYou(true);
      setIsSubscribed(true);
    }
  };

  const handleBackToHome = () => {
    setShowThankYou(false);
    setIsSubscribed(false);
    setEmail("");
    setShowUnsubscribed(false);
  };

  const LogoComponent = [
    LogoVariant1,
    LogoVariant2,
    LogoVariant3,
    LogoVariant4,
    LogoVariant5,
    LogoVariant6,
  ][selectedLogo - 1];

  // Показываем Email Preview страницу
  if (showEmailPreview) {
    return <EmailPreview />;
  }

  // Показываем Article Guide страницу
  if (showArticleGuide) {
    return <ArticleGuide />;
  }

  // Показываем Thank You страиу
  if (showThankYou) {
    return <ThankYou email={email} onBack={handleBackToHome} />;
  }

  // Показываем Unsubscribed страницу
  if (showUnsubscribed) {
    return (
      <Unsubscribed
        previewStatus={unsubscribedStatus}
        onBack={handleBackToHome}
      />
    );
  }

  // Показываем Blog Design Preview
  if (showBlogPreview) {
    return <Blog onBack={() => setShowBlogPreview(false)} />;
  }

  // Показываем Header Variants Preview
  if (showHeaderVariants) {
    return (
      <HeaderVariantsPreview
        onBack={() => setShowHeaderVariants(false)}
        onSelectVariant={(variant) => {
          setHeaderVariant(variant);
          setShowHeaderVariants(false);
        }}
      />
    );
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${gradients.find((g) => g.id === selectedGradient)?.class || "from-slate-950 via-blue-900 to-slate-950"}`}
    >
      {/* Radial glowing effect in top-left corner */}
      <div className="fixed top-0 left-0 w-[900px] h-[900px] -translate-x-1/3 -translate-y-1/3 pointer-events-none">
        <div className="absolute inset-0 bg-cyan-400/25 rounded-full blur-[120px] animated-glow" />
        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[160px]" />
      </div>

      {/* Real Topographic Map Background */}
      <div className="fixed inset-0 opacity-[0.12]">
        <div
          className="w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${
              backgrounds.find(
                (bg) => bg.id === selectedBackground,
              )?.url || backgrounds[0].url
            })`,
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-white/[0.03] backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Логотип + название + навигация в одну линию слева */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <LogoVariant2 className="w-9 h-9 relative z-10" />

                <div className="text-white text-base leading-none self-center">
                  zemscan.ru
                </div>
              </div>

              <div className="hidden md:block h-8 w-px bg-white/20" />

              <nav className="flex items-center gap-4 self-center">
                <a
                  href="#"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Главная
                </a>
                <span className="text-white/20">•</span>
                <button
                  onClick={() => setShowBlogPreview(true)}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Блог
                </button>
              </nav>
            </div>

            {/* Контакты + Бэдж справа */}
            <div className="flex items-center gap-6">
              <button
                onClick={() =>
                  setShowGradientSelector(!showGradientSelector)
                }
                className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-cyan-300 hover:bg-white/10 hover:border-cyan-500/30 transition-all text-sm"
              >
                🎨 Градиент
              </button>

              <button
                onClick={() =>
                  setShowBackgroundSelector(
                    !showBackgroundSelector,
                  )
                }
                className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-cyan-300 hover:bg-white/10 hover:border-cyan-500/30 transition-all text-sm"
              >
                🗺️ Фон
              </button>

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
              <Badge className="bg-blue-500/10 text-blue-200 border-white/20 backdrop-blur-xl">
                Скоро запуск
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Logo Selector */}
      {showLogoSelector && (
        <div className="relative z-20 bg-slate-900/95 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="mb-4">
              <h3 className="text-white mb-2">
                Выберите вариант логотипа
              </h3>
              <p className="text-blue-300">
                ините на понравившийся вариант
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {[
                {
                  id: 1,
                  Component: LogoVariant1,
                  name: "Карта + Сканер",
                },
                {
                  id: 2,
                  Component: LogoVariant2,
                  name: "Участки",
                },
                {
                  id: 3,
                  Component: LogoVariant3,
                  name: "Радар",
                },
                {
                  id: 4,
                  Component: LogoVariant4,
                  name: "Участок + Сетка",
                },
                {
                  id: 5,
                  Component: LogoVariant5,
                  name: "Минимал",
                },
                {
                  id: 6,
                  Component: LogoVariant6,
                  name: "ZS Монограмма",
                },
              ].map(({ id, Component, name }) => (
                <button
                  key={id}
                  onClick={() => {
                    setSelectedLogo(id);
                    setShowLogoSelector(false);
                  }}
                  className={`flex flex-col items-center gap-3 p-4 rounded-lg border-2 transition-all hover:bg-white/10 ${
                    selectedLogo === id
                      ? "border-cyan-500 bg-white/5"
                      : "border-white/10"
                  }`}
                >
                  <Component className="w-16 h-16" />
                  <span className="text-blue-300">{name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Background Selector */}
      {showBackgroundSelector && (
        <div className="relative z-20 bg-slate-900/95 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-white mb-2">
                  Выберите фоновое изображение
                </h3>
                <p className="text-blue-300">
                  Кадастровые карты и спутниковые снимки
                </p>
              </div>
              <button
                onClick={() => setShowBackgroundSelector(false)}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-blue-300 hover:bg-white/10 transition-all"
              >
                Закрыть
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {backgrounds.map(({ id, name, url, filter }) => (
                <button
                  key={id}
                  onClick={() => {
                    setSelectedBackground(id);
                    setShowBackgroundSelector(false);
                  }}
                  className={`group relative flex flex-col items-center gap-3 p-4 rounded-lg border-2 transition-all hover:bg-white/10 overflow-hidden ${
                    selectedBackground === id
                      ? "border-cyan-500 bg-white/5"
                      : "border-white/10"
                  }`}
                >
                  {/* Preview */}
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                    <div
                      className="w-full h-full bg-center bg-cover"
                      style={{
                        backgroundImage: `url(${url})`,
                        filter: filter,
                      }}
                    />
                    {selectedBackground === id && (
                      <div className="absolute inset-0 flex items-center justify-center bg-cyan-500/20">
                        <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                      </div>
                    )}
                  </div>
                  <span className="text-blue-300 text-sm text-center">
                    {name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Gradient Selector */}
      {showGradientSelector && (
        <div className="relative z-20 bg-slate-900/95 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-white mb-2">
                  Выберите градиент фона
                </h3>
                <p className="text-blue-300">
                  Разные варианты цветовых схем
                </p>
              </div>
              <button
                onClick={() => setShowGradientSelector(false)}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-blue-300 hover:bg-white/10 transition-all"
              >
                Закрыть
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {gradients.map(
                ({
                  id,
                  name,
                  class: gradientClass,
                  description,
                }) => (
                  <button
                    key={id}
                    onClick={() => {
                      setSelectedGradient(id);
                      setShowGradientSelector(false);
                    }}
                    className={`group relative flex flex-col items-center gap-3 p-4 rounded-lg border-2 transition-all hover:bg-white/10 overflow-hidden ${
                      selectedGradient === id
                        ? "border-cyan-500 bg-white/5"
                        : "border-white/10"
                    }`}
                  >
                    {/* Preview */}
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                      <div
                        className={`w-full h-full bg-center bg-cover ${gradientClass}`}
                      />
                      {selectedGradient === id && (
                        <div className="absolute inset-0 flex items-center justify-center bg-cyan-500/20">
                          <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                        </div>
                      )}
                    </div>
                    <span className="text-blue-300 text-sm text-center">
                      {name}
                    </span>
                    <span className="text-blue-300/70 text-xs text-center">
                      {description}
                    </span>
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="mb-6">
              <span className="text-white">zemscan</span>
              <span className="text-cyan-400">
                {" "}
                почти готов
              </span>
              <span className="text-white">
                . Сервис не просто находит лоты - он оценивает
                их.
              </span>
            </h1>

            <p className="mb-12 text-stone-100/90 max-w-2xl mx-auto">
              Автоматический мониторинг аукционных лотов, оцнка
              рыночной стоимости и уведомления — буду доступны с
              первого дня. ROI-анлз, проверка рисков и
              персональные рекомендации — подклюим поэтапно, в
              течение ближайших 2–3 месяцев.
            </p>

            {/* Email Form - Enhanced with stronger glassmorphism */}
            {!isSubscribed ? (
              <div className="mb-16">
                <div className="relative max-w-md mx-auto">
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20" />

                  <div className="relative bg-white/[0.07] backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Sparkles className="w-5 h-5 text-cyan-400" />
                      <p className="text-white">
                        Получите раннй доступ
                      </p>
                    </div>

                    <form onSubmit={handleSubscribe}>
                      <div className="flex flex-col gap-3">
                        <Input
                          type="email"
                          placeholder="Введите ваш email"
                          value={email}
                          onChange={(e) =>
                            setEmail(e.target.value)
                          }
                          required
                          className="bg-white/10 border-white/30 text-white placeholder:text-white/50 backdrop-blur-md focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 h-12 rounded-2xl"
                        />
                        <Button
                          type="submit"
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0 h-12 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all rounded-2xl"
                        >
                          Подписаться
                        </Button>
                      </div>
                    </form>

                    <p className="text-blue-300/70 text-sm mt-4">
                      + PDF-гайд по выбору участков сразу поле
                      подписки
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mb-16 inline-flex items-center gap-3 bg-green-500/20 text-green-300 px-6 py-3 rounded-2xl border border-green-500/30 backdrop-blur-xl">
                <CheckCircle2 className="w-5 h-5" />
                <p>Отличн! Мы сообщим вам о запуске.</p>
              </div>
            )}

            {/* Value Timeline - 3 Stages */}
            <div className="mb-16 max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {/* Stage 1: Сейчас */}
                <Card className="group relative bg-gradient-to-br from-cyan-500/20 to-cyan-600/15 backdrop-blur-2xl p-6 transition-all overflow-hidden rounded-2xl border border-cyan-400/30 shadow-lg hover:shadow-xl hover:border-cyan-400/50">
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-2xl" />

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Header Badge */}
                  <div className="relative mb-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/20 border border-cyan-400/30 rounded-full">
                      <span className="text-cyan-300">
                        Сейчас
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <p className="text-white/90 leading-relaxed">
                      Получите гайд{" "}
                      <span className="text-cyan-300">
                        «7 скрытых рисков при покупке земли на
                        торгах»
                      </span>{" "}
                      — сразу на почту
                    </p>
                  </div>
                </Card>

                {/* Stage 2: При запуске */}
                <Card className="group relative bg-gradient-to-br from-blue-500/20 to-sky-600/15 backdrop-blur-2xl p-6 transition-all overflow-hidden rounded-2xl border border-blue-400/30 shadow-lg hover:shadow-xl hover:border-blue-400/50">
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-2xl" />

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Header Badge */}
                  <div className="relative mb-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full">
                      <span className="text-blue-300">
                        При запуске
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <p className="text-white/90 leading-relaxed">
                      Персональная подборка лотов в вашем
                      регионе и по профилю
                    </p>
                  </div>
                </Card>

                {/* Stage 3: Эксклюзив */}
                <Card className="group relative bg-gradient-to-br from-indigo-500/20 to-blue-600/15 backdrop-blur-2xl p-6 transition-all overflow-hidden rounded-2xl border border-indigo-400/30 shadow-lg hover:shadow-xl hover:border-indigo-400/50">
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-2xl" />

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Header Badge */}
                  <div className="relative mb-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/20 border border-indigo-400/30 rounded-full">
                      <Sparkles className="w-4 h-4 text-indigo-300" />
                      <span className="text-indigo-300">
                        Эксклюзив
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <p className="text-white/90 leading-relaxed">
                      Первым 500 подписчиам —{" "}
                      <span className="text-indigo-300">
                        3 месяца оценки бесплатно
                      </span>
                    </p>
                  </div>
                </Card>
              </div>

              {/* Bottom Info Section */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-blue-500/5 rounded-2xl blur-xl" />

                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    {/* Left: Launch Date */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-green-400">
                          Никакого спама
                        </p>
                        <p className="text-blue-300/70 text-sm">
                          Мы не спамим. Только:
                        </p>
                      </div>
                    </div>

                    {/* Right: Promise Points */}
                    <div className="flex-1 grid md:grid-cols-3 gap-4 md:gap-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <p className="text-blue-200/80 text-sm">
                          Уведомления о лотах, подходящих вам
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <p className="text-blue-200/80 text-sm">
                          1-2 полезных письма до запска
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <p className="text-blue-200/80 text-sm">
                          Легко отпиаться — один клик
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What's available from day one */}
          <div className="mb-20 max-w-5xl mx-auto">
            {/* Decorative Line */}
            <div className="flex items-center gap-4 mb-12">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
              <div className="flex items-center gap-2 px-6 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <Rocket className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400">
                  Запуск — февраль 2026
                </span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
            </div>

            <div className="text-center mb-12">
              <h2 className="mb-4 text-white">
                Что будет доступно с пеого дня
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="group relative bg-gradient-to-br from-cyan-500/10 to-white/[0.05] backdrop-blur-2xl p-8 transition-all rounded-2xl border border-cyan-400/30 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-400/50 overflow-hidden">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent pointer-events-none rounded-2xl" />

                <div className="flex items-start gap-4 relative">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                    📡
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      Мониторинг лотов
                    </h4>
                    <p className="text-blue-200/90">
                      Автоматический сбор данных с ключевых
                      электронных площадок — по всем регионам
                      России. Обновление каждые 15–30 минут.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="group relative bg-gradient-to-br from-sky-500/10 to-white/[0.05] backdrop-blur-2xl p-8 transition-all rounded-2xl border border-sky-400/30 shadow-lg hover:shadow-xl hover:shadow-sky-500/20 hover:border-sky-400/50 overflow-hidden">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 to-transparent pointer-events-none rounded-2xl" />

                <div className="flex items-start gap-4 relative">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform">
                    💰
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      Базовая оценка стоимости
                    </h4>
                    <p className="text-blue-200/90">
                      Расчёт рыночной цены и цены переуступки —
                      на основе кадастрвой стоимости и аналогов.
                      Доступен для всех лотов.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="group relative bg-gradient-to-br from-blue-500/10 to-white/[0.05] backdrop-blur-2xl p-8 transition-all rounded-2xl border border-blue-400/30 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-400/50 overflow-hidden">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent pointer-events-none rounded-2xl" />

                <div className="flex items-start gap-4 relative">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                    🔔
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      Уведомления в Telegram
                    </h4>
                    <p className="text-blue-200/90">
                      Новые лоты приходят с краткой оценкой:
                      цена, площадь, отклонение от рынка.
                      Настройте ильтры — получайте только
                      релевантное.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="group relative bg-gradient-to-br from-indigo-500/10 to-white/[0.05] backdrop-blur-2xl p-8 transition-all rounded-2xl border border-indigo-400/30 shadow-lg hover:shadow-xl hover:shadow-indigo-500/20 hover:border-indigo-400/50 overflow-hidden">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 to-transparent pointer-events-none rounded-2xl" />

                <div className="flex items-start gap-4 relative">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                    🧭
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      Личный кабинет
                    </h4>
                    <p className="text-blue-200/90">
                      Фильтры по региону, назначению, площади —
                      сохраняются между ессиями. Начните с того,
                      что важно именно вам.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* How we evaluate lots */}
          <div className="mb-20 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-4 text-white">
                Ка ы оцениваем участок
              </h2>
              <p className="text-blue-300">
                Наша модель учитывает более 15 факторов — чтобы
                вы понимали не только «сколько», но и «почему».
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="group relative bg-gradient-to-br from-cyan-500/15 to-cyan-600/10 backdrop-blur-2xl border-cyan-400/30 p-8 hover:border-cyan-400/60 transition-all overflow-hidden rounded-2xl shadow-lg hover:shadow-xl">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                <div className="flex items-start gap-4 relative">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shapes className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      Геометрия и форма
                    </h4>
                    <p className="text-blue-200">
                      Влияет на стоимость застройки (коэффициент
                      компактности, орентация)
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="group relative bg-gradient-to-br from-sky-500/15 to-sky-600/10 backdrop-blur-2xl border-sky-400/30 p-8 hover:border-sky-400/60 transition-all overflow-hidden rounded-2xl shadow-lg hover:shadow-xl">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                <div className="flex items-start gap-4 relative">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      Инфаструктура
                    </h4>
                    <p className="text-blue-200">
                      налчие газа, воды, расстояние до столбов
                      ЛЭП, транспортная доступность, социальные
                      объекты радиусе
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="group relative bg-gradient-to-br from-blue-500/15 to-blue-600/10 backdrop-blur-2xl border-blue-400/30 p-8 hover:border-blue-400/60 transition-all overflow-hidden rounded-2xl shadow-lg hover:shadow-xl">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                <div className="flex items-start gap-4 relative">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">Аналоги</h4>
                    <p className="text-blue-200">
                      Цены на актуальые аналоги с корректировкой
                      на площадь и назначение, история сделок
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="group relative bg-gradient-to-br from-indigo-500/15 to-indigo-600/10 backdrop-blur-2xl border-indigo-400/30 p-8 hover:border-indigo-400/60 transition-all overflow-hidden rounded-2xl shadow-lg hover:shadow-xl">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                <div className="flex items-start gap-4 relative">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      Финансовая модель
                    </h4>
                    <p className="text-blue-200">
                      Рыночная цена, рекомендованная цена
                      переуступки, ROI, срок окупаемости
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="group relative bg-gradient-to-br from-violet-500/15 to-indigo-600/10 backdrop-blur-2xl border-violet-400/30 p-8 hover:border-violet-400/60 transition-all overflow-hidden rounded-2xl shadow-lg hover:shadow-xl">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                <div className="flex items-start gap-4 relative">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      Потенциал застройки
                    </h4>
                    <p className="text-blue-200">
                      Анализируем ПЗЗ: макс. площаь, этжность,
                      плотность
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="group relative bg-gradient-to-br from-purple-500/15 to-indigo-600/10 backdrop-blur-2xl border-purple-400/30 p-8 hover:border-purple-400/60 transition-all overflow-hidden rounded-2xl shadow-lg hover:shadow-xl">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                <div className="flex items-start gap-4 relative">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">Риски</h4>
                    <p className="text-blue-200">
                      Серитут, ЗОУИТ, геология, риски
                      подтопление, неблагприятная экология
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* What will be available gradually */}
          <div className="mb-12 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-white">
                Что будет доступно поэтапно — после старта
              </h2>
              <p className="text-blue-200 max-w-3xl mx-auto">
                Мы начинаем с бзового функционала — и постепенно
                добавляем новые слои аналитики.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="group relative bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 backdrop-blur-xl border-cyan-500/20 p-8 hover:border-cyan-400/50 transition-all rounded-2xl shadow-md hover:shadow-lg">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-500/50">
                  01
                </div>
                <div className="flex items-start gap-4 relative">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center text-2xl shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                    📊
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      ROI-анализ
                    </h4>
                    <p className="text-blue-200/90">
                      Расчёт срока окупаемости и инвестиционного
                      потенциа
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="group relative bg-gradient-to-br from-sky-500/10 to-sky-600/10 backdrop-blur-xl border-sky-500/20 p-8 hover:border-sky-400/50 transition-all rounded-2xl shadow-md hover:shadow-lg">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-sky-500 to-sky-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-sky-500/50">
                  02
                </div>
                <div className="flex items-start gap-4 relative">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center text-2xl shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform">
                    ️
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      Глубока проверка рисков
                    </h4>
                    <p className="text-blue-200/90">
                      Проверка по несольким категориям:
                      юридически ограничения, экология,
                      доступность, геология
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="group relative bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-xl border-blue-500/20 p-8 hover:border-blue-400/50 transition-all rounded-2xl shadow-md hover:shadow-lg">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/50">
                  03
                </div>
                <div className="flex items-start gap-4 relative">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                    🤖
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      Персональные рекомендации
                    </h4>
                    <p className="text-blue-200/90">
                      В соответстствии с вашими предпочтениями
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="group relative bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 backdrop-blur-xl border-indigo-500/20 p-8 hover:border-indigo-400/50 transition-all rounded-2xl shadow-md hover:shadow-lg">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-500/50">
                  04
                </div>
                <div className="flex items-start gap-4 relative">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                    ⚖️
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      Сравнение участков
                    </h4>
                    <p className="text-blue-200/90">
                      Side-by-side анализ 2–3 лотов
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="mb-4 text-white">
            Готовы первыми получить доступ?
          </h2>
          <p className="mb-12 text-blue-200">
            Подпишитесь сейчас — получите PDF-гайд и бонусы
            основателя
          </p>

          {!isSubscribed ? (
            <div className="max-w-md mx-auto">
              {/* Glow Effect */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-30" />

                <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
                  <form onSubmit={handleSubscribe}>
                    <div className="flex flex-col gap-3">
                      <Input
                        type="email"
                        placeholder="Ваш email"
                        value={email}
                        onChange={(e) =>
                          setEmail(e.target.value)
                        }
                        required
                        className="bg-white/10 border-white/30 text-white placeholder:text-white/50 backdrop-blur-md focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 h-12"
                      />
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0 h-12 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
                      >
                        Подписаться
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div className="inline-flex items-center gap-3 bg-green-500/20 text-green-300 px-6 py-3 rounded-lg border border-green-500/30">
              <CheckCircle2 className="w-5 h-5" />
              <p>Спасибо! Скоро свяжемся с вами.</p>
            </div>
          )}
        </div>
      </section>

      {/* Favicon Preview - временная секция для демонтраци */}
      {showFaviconPreview && <FaviconPreview />}

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-white/10 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left - Logo and Description */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full group-hover:bg-cyan-500/30 transition-all" />
                <LogoVariant2 className="w-9 h-9 relative z-10" />
              </div>

              <div className="text-white text-base leading-none self-center">
                zemscan.ru
              </div>

              <div className="hidden md:block h-8 w-px bg-white/20" />

              <p className="text-blue-300/80 hidden md:block text-base leading-none self-center">
                Аналитика земельного рынка
              </p>
            </div>

            {/* Center - Email Preview Link */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowBackgroundSelector(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-blue-300 hover:bg-white/10 hover:border-cyan-500/30 transition-all group"
              >
                <span className="text-sm">🗺️ Фон карты</span>
              </button>

              <button
                onClick={() => setShowHeaderVariants(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-blue-300 hover:bg-white/10 hover:border-cyan-500/30 transition-all group"
              >
                <span className="text-sm">
                  🎨 Header варианты
                </span>
              </button>

              <button
                onClick={() => setShowArticleGuide(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-blue-300 hover:bg-white/10 hover:border-cyan-500/30 transition-all group"
              >
                <span className="text-sm">
                  📄 Гайд: 7 рисков
                </span>
              </button>

              <button
                onClick={() => setShowEmailPreview(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-blue-300 hover:bg-white/10 hover:border-cyan-500/30 transition-all group"
              >
                <span className="text-sm">📧 Email-шабло</span>
              </button>

              {/* Выпадающее меню для тестирования статусов отписки */}
              <div className="relative group/unsub">
                <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-blue-300 hover:bg-white/10 hover:border-cyan-500/30 transition-all">
                  <span className="text-sm">🚫 Отписка</span>
                </button>

                {/* Dropdown */}
                <div className="absolute bottom-full mb-2 right-0 w-48 bg-slate-900/95 backdrop-blur-xl border border-white/20 rounded-lg shadow-xl opacity-0 invisible group-hover/unsub:opacity-100 group-hover/unsub:visible transition-all">
                  <div className="p-2 space-y-1">
                    <button
                      onClick={() => {
                        setUnsubscribedStatus("success");
                        setShowUnsubscribed(true);
                      }}
                      className="w-full text-left px-3 py-2 text-sm text-green-300 hover:bg-white/10 rounded transition-colors"
                    >
                      ✅ Успешно
                    </button>
                    <button
                      onClick={() => {
                        setUnsubscribedStatus("already");
                        setShowUnsubscribed(true);
                      }}
                      className="w-full text-left px-3 py-2 text-sm text-blue-300 hover:bg-white/10 rounded transition-colors"
                    >
                      ℹ️ Уже отписан
                    </button>
                    <button
                      onClick={() => {
                        setUnsubscribedStatus("not_found");
                        setShowUnsubscribed(true);
                      }}
                      className="w-full text-left px-3 py-2 text-sm text-yellow-300 hover:bg-white/10 rounded transition-colors"
                    >
                      ❓ Не найден
                    </button>
                    <button
                      onClick={() => {
                        setUnsubscribedStatus("invalid");
                        setShowUnsubscribed(true);
                      }}
                      className="w-full text-left px-3 py-2 text-sm text-orange-300 hover:bg-white/10 rounded transition-colors"
                    >
                      ⚠️ Неверная ссылка
                    </button>
                    <button
                      onClick={() => {
                        setUnsubscribedStatus("error");
                        setShowUnsubscribed(true);
                      }}
                      className="w-full text-left px-3 py-2 text-sm text-red-300 hover:bg-white/10 rounded transition-colors"
                    >
                      ❌ Ошика
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Year */}
            <div className="flex items-bottom gap-6">
              <div className="text-blue-400/60 text-xs">
                © 2025, Wasteland Tech
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}