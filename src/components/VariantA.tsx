import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  Search,
  Bell,
  FileText,
  TrendingUp,
  Target,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Zap,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function VariantA() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // NEW PALETTE - inspired by the reference image
  const palette = {
    bg: {
      primary: '#1A1A1A',      // Dark background
      secondary: '#0F0F0F',    // Darker section
      card: '#252525',         // Card background
      overlay: '#2B2B2B'       // Overlay elements
    },
    accent: {
      blue: '#7EAAFF',         // Light blue accent
      lime: '#B4FF4A',         // Bright lime accent
      limeGlow: '#A8FF3E'      // Glowing lime
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.8)',
      muted: 'rgba(255, 255, 255, 0.5)'
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate a delay for form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Here you would typically handle the form submission, e.g., send data to a server
    console.log('Email submitted:', email);
  };

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Когда запуск платформы?",
      answer: "Запуск планируется в течение ближайших 2-3 месяцев. Ранние подписчики получат доступ первыми."
    },
    {
      question: "Сколько будет стоить сервис?",
      answer: "Для ранних подписчиков мы предложим специальные условия. Стандартная подписка будет стоить от 1990₽/месяц."
    },
    {
      question: "Какие регионы поддерживаются?",
      answer: "На старте - вс регионы РФ с публичными торгами земельных участков через ЭТП (электронные торговые площадки)."
    },
    {
      question: "Как работают уведомления?",
      answer: "Вы настраиваете критерии (регион, бюджет, тип участка), и система автоматически присылает подходящие лоты на email и в Telegram."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column */}
            <div>
              {/* Icon and Badge */}
              <div className="flex items-center gap-3 mb-8">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    background: `linear-gradient(to bottom right, ${palette.accent.lime}, ${palette.accent.limeGlow})`,
                    boxShadow: `0 10px 30px ${palette.accent.lime}40`
                  }}
                >
                  <Zap className="w-5 h-5 fill-current" style={{ color: palette.bg.primary }} />
                </div>
                <div 
                  className="inline-flex items-center backdrop-blur-md px-4 py-2 rounded-full border"
                  style={{
                    backgroundColor: `${palette.bg.card}CC`,
                    borderColor: `${palette.text.primary}20`,
                    color: palette.text.secondary
                  }}
                >
                  <span className="text-sm">Мониторинг земельных участков</span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="mb-8" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
                <span className="block" style={{ color: palette.text.primary }}>zemscan почти готов.</span>
                <span className="block" style={{ color: palette.text.secondary }}>Сервис не просто находит лоты</span>
                <span className="block" style={{ color: palette.text.primary }}>— он <span style={{ color: palette.accent.blue }}>оценивает их.</span></span>
              </h1>

              <p className="mb-12 text-lg" style={{ color: palette.text.muted }}>
                Автоматический мониторинг аукционных лотов, оценка рыночной стоимости и уведомления — будут доступны с первого дня.
              </p>

              {/* Statistics */}
              <div className="flex items-center gap-8 mb-12">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-5xl" style={{ color: palette.text.primary }}>1200+</div>
                  </div>
                  <div style={{ color: palette.text.muted }}>Участков в базе</div>
                </div>

                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full border flex items-center justify-center hover:scale-110 transition-all cursor-pointer shadow-sm"
                    style={{
                      backgroundColor: `${palette.bg.card}80`,
                      borderColor: `${palette.text.primary}20`
                    }}
                  >
                    <Search className="w-5 h-5" strokeWidth={1} style={{ color: palette.text.muted }} />
                  </div>
                  <div 
                    className="w-12 h-12 rounded-full border flex items-center justify-center hover:scale-110 transition-all cursor-pointer shadow-sm"
                    style={{
                      backgroundColor: `${palette.bg.card}80`,
                      borderColor: `${palette.text.primary}20`
                    }}
                  >
                    <Bell className="w-5 h-5" strokeWidth={1} style={{ color: palette.text.muted }} />
                  </div>
                  <div 
                    className="w-12 h-12 rounded-full border flex items-center justify-center hover:scale-110 transition-all cursor-pointer shadow-sm"
                    style={{
                      backgroundColor: `${palette.bg.card}80`,
                      borderColor: `${palette.text.primary}20`
                    }}
                  >
                    <FileText className="w-5 h-5" strokeWidth={1} style={{ color: palette.text.muted }} />
                  </div>
                </div>
              </div>

              {/* Email Form */}
              {!isSubmitting ? (
                <div className="mb-8">
                  <div className="relative max-w-md">
                    <div 
                      className="absolute -top-6 -left-6 w-32 h-1 rounded-full blur-sm opacity-70"
                      style={{
                        background: `linear-gradient(to right, ${palette.accent.limeGlow}, ${palette.accent.lime})`
                      }}
                    />
                    
                    <div 
                      className="relative backdrop-blur-[12px] border rounded-3xl p-8 shadow-2xl"
                      style={{
                        backgroundColor: `${palette.bg.card}CC`,
                        borderColor: `${palette.text.primary}10`
                      }}
                    >
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Sparkles className="w-5 h-5" style={{ color: palette.accent.lime }} />
                        <p style={{ color: palette.text.primary }}>Получите ранний доступ</p>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-3">
                          <Input
                            type="email"
                            placeholder="Введите ваш email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="h-12 rounded-2xl"
                            style={{
                              backgroundColor: `${palette.bg.overlay}80`,
                              borderColor: `${palette.text.primary}20`,
                              color: palette.text.primary
                            }}
                          />
                          <Button
                            type="submit"
                            className="h-12 rounded-2xl shadow-lg border-0 transition-all"
                            style={{
                              background: `linear-gradient(to right, ${palette.accent.limeGlow}, ${palette.accent.lime})`,
                              color: palette.bg.primary,
                              boxShadow: `0 10px 30px ${palette.accent.lime}40`
                            }}
                          >
                            Подписаться
                          </Button>
                        </div>
                      </form>

                      <p className="text-sm mt-4" style={{ color: palette.text.muted }}>
                        + PDF-гайд по выбору участков сразу после подписки
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-8 inline-flex items-center gap-3 bg-green-500/20 text-green-400 px-6 py-3 rounded-2xl border border-green-500/30 backdrop-blur-xl">
                  <CheckCircle2 className="w-5 h-5" />
                  <p>Отлично! Мы сообщим вам о запуске.</p>
                </div>
              )}
            </div>

            {/* Right Column - Map with Live Feed */}
            <div className="relative h-[600px]">
              {/* Background map container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/5 backdrop-blur-[4px] border border-white/10 shadow-2xl">
                {/* Map image with stronger visibility */}
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('https://delovteste.ru/uploads/posts/2023-09/1693990945_22002.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(0.5) contrast(1.2) brightness(0.75) hue-rotate(190deg)',
                    opacity: 0.7
                  }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A2F3F]/60 via-transparent to-[#0F1419]/70" />

                {/* Pulsating markers on map */}
                <div className="absolute top-[20%] left-[25%] animate-pulse">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-[#4D9999] shadow-lg shadow-cyan-500/50" />
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#4D9999] animate-ping opacity-75" />
                  </div>
                </div>

                <div className="absolute top-[45%] left-[60%] animate-pulse" style={{ animationDelay: '0.5s' }}>
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-[#66B2B2] shadow-lg shadow-teal-500/50" />
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#66B2B2] animate-ping opacity-75" />
                  </div>
                </div>

                <div className="absolute top-[65%] left-[35%] animate-pulse" style={{ animationDelay: '1s' }}>
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-[#4D9999] shadow-lg shadow-cyan-500/50" />
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#4D9999] animate-ping opacity-75" />
                  </div>
                </div>

                <div className="absolute top-[30%] right-[20%] animate-pulse" style={{ animationDelay: '1.5s' }}>
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-[#66B2B2] shadow-lg shadow-teal-500/50" />
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#66B2B2] animate-ping opacity-75" />
                  </div>
                </div>

                {/* Live Feed Cards - Floating */}
                <div className="absolute top-8 right-8 space-y-3 animate-fade-in">
                  {/* Card 1 */}
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-xl hover:scale-105 transition-transform cursor-pointer w-64">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="text-white text-sm mb-1">Московская обл.</div>
                        <div className="text-white/60 text-xs">12 соток</div>
                      </div>
                      <div className="px-2 py-1 bg-green-500/20 rounded-full border border-green-500/30">
                        <span className="text-green-400 text-xs">-35%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-[#4D9999] text-lg">2.8 млн ₽</div>
                      <div className="text-white/40 text-xs">2 дня назад</div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-xl hover:scale-105 transition-transform cursor-pointer w-64" style={{ animationDelay: '0.3s' }}>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="text-white text-sm mb-1">Санкт-Петербург</div>
                        <div className="text-white/60 text-xs">8 соток</div>
                      </div>
                      <div className="px-2 py-1 bg-red-500/20 rounded-full border border-red-500/30">
                        <span className="text-red-400 text-xs">Горячий</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-[#66B2B2] text-lg">4.2 млн ₽</div>
                      <div className="text-white/40 text-xs">5 часов назад</div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-xl hover:scale-105 transition-transform cursor-pointer w-64" style={{ animationDelay: '0.6s' }}>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="text-white text-sm mb-1">Краснодарский край</div>
                        <div className="text-white/60 text-xs">15 соток</div>
                      </div>
                      <div className="px-2 py-1 bg-blue-500/20 rounded-full border border-blue-500/30">
                        <span className="text-blue-400 text-xs">Новый</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-[#4D9999] text-lg">3.5 млн ₽</div>
                      <div className="text-white/40 text-xs">1 час назад</div>
                    </div>
                  </div>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-6 left-6">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white/80 text-sm">Мониторинг активен</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Timeline - MOVED to separate section */}
      <section className="relative z-10 py-20" style={{ backgroundColor: `${palette.bg.secondary}` }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4" style={{ color: palette.text.primary }}>Что вы получите</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: palette.text.muted }}>
              Эксклюзивные преимущества для ранних подписчиков
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <Card 
                className="group relative backdrop-blur-[4px] p-6 transition-all overflow-hidden rounded-2xl border shadow-lg cursor-pointer"
                style={{
                  backgroundColor: `${palette.bg.card}80`,
                  borderColor: `${palette.text.primary}10`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${palette.bg.card}CC`;
                  e.currentTarget.style.borderColor = `${palette.accent.lime}50`;
                  e.currentTarget.style.boxShadow = `0 20px 50px ${palette.accent.lime}20`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = `${palette.bg.card}80`;
                  e.currentTarget.style.borderColor = `${palette.text.primary}10`;
                  e.currentTarget.style.boxShadow = '';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="relative mb-4">
                  <div 
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full shadow-lg"
                    style={{
                      background: `linear-gradient(to right, ${palette.accent.limeGlow}, ${palette.accent.lime})`,
                      color: palette.bg.primary
                    }}
                  >
                    <span>Сейчас</span>
                  </div>
                </div>
                <div className="relative">
                  <p className="leading-relaxed" style={{ color: palette.text.secondary }}>
                    Получите гайд <span style={{ color: palette.accent.lime }}>«7 скрытых рисков при покупке земли на торгах»</span> — сразу на почту
                  </p>
                </div>
              </Card>

              <Card 
                className="group relative backdrop-blur-[4px] p-6 transition-all overflow-hidden rounded-2xl border shadow-lg cursor-pointer"
                style={{
                  backgroundColor: `${palette.bg.card}80`,
                  borderColor: `${palette.text.primary}10`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${palette.bg.card}CC`;
                  e.currentTarget.style.borderColor = `${palette.accent.blue}50`;
                  e.currentTarget.style.boxShadow = `0 20px 50px ${palette.accent.blue}20`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = `${palette.bg.card}80`;
                  e.currentTarget.style.borderColor = `${palette.text.primary}10`;
                  e.currentTarget.style.boxShadow = '';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="relative mb-4">
                  <div 
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full shadow-lg"
                    style={{
                      background: `linear-gradient(to right, ${palette.accent.blue}DD, ${palette.accent.blue})`,
                      color: palette.text.primary
                    }}
                  >
                    <span>При запуске</span>
                  </div>
                </div>
                <div className="relative">
                  <p className="leading-relaxed" style={{ color: palette.text.secondary }}>
                    Персональная подборка лотов в вашем регионе и по профилю
                  </p>
                </div>
              </Card>

              <Card 
                className="group relative backdrop-blur-[4px] p-6 transition-all overflow-hidden rounded-2xl border shadow-lg cursor-pointer"
                style={{
                  backgroundColor: `${palette.bg.card}80`,
                  borderColor: `${palette.text.primary}10`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${palette.bg.card}CC`;
                  e.currentTarget.style.borderColor = `${palette.accent.lime}50`;
                  e.currentTarget.style.boxShadow = `0 20px 50px ${palette.accent.lime}20`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = `${palette.bg.card}80`;
                  e.currentTarget.style.borderColor = `${palette.text.primary}10`;
                  e.currentTarget.style.boxShadow = '';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="relative mb-4">
                  <div 
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full shadow-lg"
                    style={{
                      background: `linear-gradient(to right, ${palette.accent.blue}, ${palette.accent.lime})`,
                      color: palette.bg.primary
                    }}
                  >
                    <span>Эксклюзив</span>
                  </div>
                </div>
                <div className="relative">
                  <p className="leading-relaxed" style={{ color: palette.text.secondary }}>
                    Приоритетный доступ к новым функциям и спецпредложениям
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20" style={{ backgroundColor: 'transparent' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4" style={{ color: palette.text.primary }}>Ключевые возможности платформы</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: palette.text.muted }}>
              Полный цикл работы с лотами — от поиска до аналитики
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card 
              className="group relative backdrop-blur-[4px] p-6 transition-all rounded-2xl border shadow-lg cursor-pointer"
              style={{
                backgroundColor: `${palette.bg.card}80`,
                borderColor: `${palette.text.primary}10`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${palette.bg.card}CC`;
                e.currentTarget.style.borderColor = `${palette.accent.lime}70`;
                e.currentTarget.style.boxShadow = `0 20px 50px ${palette.accent.lime}30`;
                e.currentTarget.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = `${palette.bg.card}80`;
                e.currentTarget.style.borderColor = `${palette.text.primary}10`;
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="relative">
                <div 
                  className="w-14 h-14 rounded-full border flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                  style={{
                    borderColor: `${palette.text.primary}20`,
                    backgroundColor: `${palette.bg.overlay}50`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = palette.accent.lime;
                    e.currentTarget.style.backgroundColor = `${palette.accent.lime}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${palette.text.primary}20`;
                    e.currentTarget.style.backgroundColor = `${palette.bg.overlay}50`;
                  }}
                >
                  <Search className="w-6 h-6 transition-colors" strokeWidth={1.5} style={{ color: palette.text.muted }} />
                </div>
                <h3 className="mb-2" style={{ color: palette.text.primary }}>Мониторинг лотов</h3>
                <p style={{ color: palette.text.muted }}>
                  Отслеживайте все аукционы земельных участков в режиме реального времени
                </p>
              </div>
            </Card>

            <Card 
              className="group relative backdrop-blur-[4px] p-6 transition-all rounded-2xl border shadow-lg cursor-pointer"
              style={{
                backgroundColor: `${palette.bg.card}80`,
                borderColor: `${palette.text.primary}10`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${palette.bg.card}CC`;
                e.currentTarget.style.borderColor = `${palette.accent.blue}70`;
                e.currentTarget.style.boxShadow = `0 20px 50px ${palette.accent.blue}30`;
                e.currentTarget.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = `${palette.bg.card}80`;
                e.currentTarget.style.borderColor = `${palette.text.primary}10`;
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="relative">
                <div 
                  className="w-14 h-14 rounded-full border flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                  style={{
                    borderColor: `${palette.text.primary}20`,
                    backgroundColor: `${palette.bg.overlay}50`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = palette.accent.blue;
                    e.currentTarget.style.backgroundColor = `${palette.accent.blue}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${palette.text.primary}20`;
                    e.currentTarget.style.backgroundColor = `${palette.bg.overlay}50`;
                  }}
                >
                  <Bell className="w-6 h-6 transition-colors" strokeWidth={1.5} style={{ color: palette.text.muted }} />
                </div>
                <h3 className="mb-2" style={{ color: palette.text.primary }}>Умные уведомления</h3>
                <p style={{ color: palette.text.muted }}>
                  Получайте оповещения о новых лотах по вашим критериям
                </p>
              </div>
            </Card>

            <Card 
              className="group relative backdrop-blur-[4px] p-6 transition-all rounded-2xl border shadow-lg cursor-pointer"
              style={{
                backgroundColor: `${palette.bg.card}80`,
                borderColor: `${palette.text.primary}10`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${palette.bg.card}CC`;
                e.currentTarget.style.borderColor = `${palette.accent.lime}70`;
                e.currentTarget.style.boxShadow = `0 20px 50px ${palette.accent.lime}30`;
                e.currentTarget.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = `${palette.bg.card}80`;
                e.currentTarget.style.borderColor = `${palette.text.primary}10`;
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="relative">
                <div 
                  className="w-14 h-14 rounded-full border flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                  style={{
                    borderColor: `${palette.text.primary}20`,
                    backgroundColor: `${palette.bg.overlay}50`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = palette.accent.lime;
                    e.currentTarget.style.backgroundColor = `${palette.accent.lime}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${palette.text.primary}20`;
                    e.currentTarget.style.backgroundColor = `${palette.bg.overlay}50`;
                  }}
                >
                  <TrendingUp className="w-6 h-6 transition-colors" strokeWidth={1.5} style={{ color: palette.text.muted }} />
                </div>
                <h3 className="mb-2" style={{ color: palette.text.primary }}>Анализ рынка</h3>
                <p style={{ color: palette.text.muted }}>
                  Оценка рыночной стоимости и перспектив инвестиций
                </p>
              </div>
            </Card>

            <Card 
              className="group relative backdrop-blur-[4px] p-6 transition-all rounded-2xl border shadow-lg cursor-pointer"
              style={{
                backgroundColor: `${palette.bg.card}80`,
                borderColor: `${palette.text.primary}10`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${palette.bg.card}CC`;
                e.currentTarget.style.borderColor = `${palette.accent.blue}70`;
                e.currentTarget.style.boxShadow = `0 20px 50px ${palette.accent.blue}30`;
                e.currentTarget.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = `${palette.bg.card}80`;
                e.currentTarget.style.borderColor = `${palette.text.primary}10`;
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="relative">
                <div 
                  className="w-14 h-14 rounded-full border flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                  style={{
                    borderColor: `${palette.text.primary}20`,
                    backgroundColor: `${palette.bg.overlay}50`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = palette.accent.blue;
                    e.currentTarget.style.backgroundColor = `${palette.accent.blue}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${palette.text.primary}20`;
                    e.currentTarget.style.backgroundColor = `${palette.bg.overlay}50`;
                  }}
                >
                  <ShieldCheck className="w-6 h-6 transition-colors" strokeWidth={1.5} style={{ color: palette.text.muted }} />
                </div>
                <h3 className="mb-2" style={{ color: palette.text.primary }}>Отчеты о рисках</h3>
                <p style={{ color: palette.text.muted }}>
                  Детальный анализ юридических и технических рисков участка
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-20" style={{ backgroundColor: palette.bg.secondary }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4" style={{ color: palette.text.primary }}>Как это работает</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: palette.text.muted }}>
              Простой процесс от регистрации до покупки участка
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div 
                className="absolute top-0 left-8 w-px h-full hidden md:block"
                style={{
                  background: `linear-gradient(to bottom, ${palette.accent.lime}30, transparent)`
                }}
              />
              
              <div 
                className="relative backdrop-blur-[4px] border rounded-2xl p-8 transition-all shadow-lg cursor-pointer"
                style={{
                  backgroundColor: `${palette.bg.card}80`,
                  borderColor: `${palette.text.primary}10`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${palette.bg.card}CC`;
                  e.currentTarget.style.borderColor = `${palette.accent.lime}50`;
                  e.currentTarget.style.boxShadow = `0 25px 60px ${palette.accent.lime}25`;
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = `${palette.bg.card}80`;
                  e.currentTarget.style.borderColor = `${palette.text.primary}10`;
                  e.currentTarget.style.boxShadow = '';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6 shadow-lg transition-transform hover:scale-110"
                  style={{
                    background: `linear-gradient(to bottom right, ${palette.accent.limeGlow}, ${palette.accent.lime})`,
                    color: palette.bg.primary,
                    boxShadow: `0 10px 30px ${palette.accent.lime}40`
                  }}
                >
                  1
                </div>
                <h3 className="mb-3" style={{ color: palette.text.primary }}>Создайте профиль</h3>
                <p style={{ color: palette.text.muted }}>
                  Укажите ваши критерии поиска: регион, бюджет, тип участка и цели использования
                </p>
              </div>
            </div>

            <div className="relative">
              <div 
                className="absolute top-0 left-8 w-px h-full hidden md:block"
                style={{
                  background: `linear-gradient(to bottom, ${palette.accent.blue}30, transparent)`
                }}
              />
              
              <div 
                className="relative backdrop-blur-[4px] border rounded-2xl p-8 transition-all shadow-lg cursor-pointer"
                style={{
                  backgroundColor: `${palette.bg.card}80`,
                  borderColor: `${palette.text.primary}10`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${palette.bg.card}CC`;
                  e.currentTarget.style.borderColor = `${palette.accent.blue}50`;
                  e.currentTarget.style.boxShadow = `0 25px 60px ${palette.accent.blue}25`;
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = `${palette.bg.card}80`;
                  e.currentTarget.style.borderColor = `${palette.text.primary}10`;
                  e.currentTarget.style.boxShadow = '';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6 shadow-lg transition-transform hover:scale-110"
                  style={{
                    background: `linear-gradient(to bottom right, ${palette.accent.blue}DD, ${palette.accent.blue})`,
                    color: palette.text.primary,
                    boxShadow: `0 10px 30px ${palette.accent.blue}40`
                  }}
                >
                  2
                </div>
                <h3 className="mb-3" style={{ color: palette.text.primary }}>Получайте подборки</h3>
                <p style={{ color: palette.text.muted }}>
                  Система автоматически подберет релевантные лоты и пришлет уведомления
                </p>
              </div>
            </div>

            <div className="relative">
              <div 
                className="relative backdrop-blur-[4px] border rounded-2xl p-8 transition-all shadow-lg cursor-pointer"
                style={{
                  backgroundColor: `${palette.bg.card}80`,
                  borderColor: `${palette.text.primary}10`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${palette.bg.card}CC`;
                  e.currentTarget.style.borderColor = `${palette.accent.lime}50`;
                  e.currentTarget.style.boxShadow = `0 25px 60px ${palette.accent.lime}25`;
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = `${palette.bg.card}80`;
                  e.currentTarget.style.borderColor = `${palette.text.primary}10`;
                  e.currentTarget.style.boxShadow = '';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6 shadow-lg transition-transform hover:scale-110"
                  style={{
                    background: `linear-gradient(to right, ${palette.accent.blue}, ${palette.accent.lime})`,
                    color: palette.bg.primary,
                    boxShadow: `0 10px 30px ${palette.accent.lime}40`
                  }}
                >
                  3
                </div>
                <h3 className="mb-3" style={{ color: palette.text.primary }}>Анализируйте и покупайте</h3>
                <p style={{ color: palette.text.muted }}>
                  Изучите детальные отчеты о рисках и ROI, примите взвешенное решение
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - NEW */}
      <section className="relative z-10 py-20" style={{ backgroundColor: 'transparent' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4" style={{ color: palette.text.primary }}>Частые вопросы</h2>
            <p className="text-lg" style={{ color: palette.text.muted }}>
              Всё, что нужно знать о ZemScan
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="backdrop-blur-[4px] border rounded-2xl overflow-hidden shadow-lg transition-all cursor-pointer"
                style={{
                  backgroundColor: `${palette.bg.card}80`,
                  borderColor: `${palette.text.primary}10`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${palette.accent.lime}40`;
                  e.currentTarget.style.backgroundColor = `${palette.bg.card}CC`;
                  e.currentTarget.style.boxShadow = `0 10px 30px ${palette.accent.lime}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${palette.text.primary}10`;
                  e.currentTarget.style.backgroundColor = `${palette.bg.card}80`;
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left transition-all"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${palette.bg.overlay}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <span style={{ color: palette.text.primary }}>{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 transition-colors" style={{ color: palette.accent.lime }} />
                  ) : (
                    <ChevronDown className="w-5 h-5 transition-colors" style={{ color: palette.text.muted }} />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="leading-relaxed" style={{ color: palette.text.secondary }}>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - NEW */}
      <section className="relative z-10 py-20" style={{ backgroundColor: palette.bg.secondary }}>
        <div className="max-w-4xl mx-auto px-6">
          <div 
            className="relative backdrop-blur-[12px] border rounded-3xl p-12 shadow-2xl text-center transition-all"
            style={{
              background: `linear-gradient(135deg, ${palette.bg.card}80, ${palette.bg.overlay}40)`,
              borderColor: `${palette.accent.lime}30`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${palette.accent.lime}60`;
              e.currentTarget.style.boxShadow = `0 30px 70px ${palette.accent.lime}20`;
              e.currentTarget.style.transform = 'scale(1.01)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${palette.accent.lime}30`;
              e.currentTarget.style.boxShadow = '';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <div 
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl"
              style={{
                background: `radial-gradient(circle, ${palette.accent.lime}30, transparent)`
              }}
            />
            <div 
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full blur-2xl"
              style={{
                background: `radial-gradient(circle, ${palette.accent.blue}20, transparent)`
              }}
            />
            
            <div className="relative">
              <h2 className="mb-4" style={{ color: palette.text.primary }}>Не упустите ранний доступ</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: palette.text.secondary }}>
                Подпишитесь сейчас и получите гайд + эксклюзивные условия при запуске
              </p>

              {!isSubmitting ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Ваш email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12 rounded-2xl flex-1 transition-all"
                      style={{
                        backgroundColor: `${palette.bg.overlay}60`,
                        borderColor: `${palette.text.primary}20`,
                        color: palette.text.primary
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = palette.accent.lime;
                        e.currentTarget.style.boxShadow = `0 0 0 3px ${palette.accent.lime}10`;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = `${palette.text.primary}20`;
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                    <Button
                      type="submit"
                      className="h-12 px-8 rounded-2xl border-0 transition-all whitespace-nowrap"
                      style={{
                        background: `linear-gradient(to right, ${palette.accent.limeGlow}, ${palette.accent.lime})`,
                        color: palette.bg.primary,
                        boxShadow: `0 10px 30px ${palette.accent.lime}40`
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 15px 40px ${palette.accent.lime}60`;
                        e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = `0 10px 30px ${palette.accent.lime}40`;
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      }}
                    >
                      Получить доступ
                    </Button>
                  </div>
                </form>
              ) : (
                <div 
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border"
                  style={{
                    backgroundColor: '#10B98120',
                    color: '#10B981',
                    borderColor: '#10B98130'
                  }}
                >
                  <CheckCircle2 className="w-6 h-6" />
                  <p className="text-lg">Вы в списке! Проверьте почту для подтверждения.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}