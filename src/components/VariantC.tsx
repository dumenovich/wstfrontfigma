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
  Quote,
  Star,
  MapPin,
  DollarSign,
  Check,
  BarChart3,
  Users,
  Building2,
} from "lucide-react";

interface VariantCProps {
  email: string;
  setEmail: (email: string) => void;
  isSubscribed: boolean;
  handleSubscribe: (e: React.FormEvent) => void;
}

export default function VariantC({ email, setEmail, isSubscribed, handleSubscribe }: VariantCProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const testimonials = [
    {
      name: "Алексей М.",
      role: "Инвестор",
      text: "Благодаря мониторингу нашел участок на 40% ниже рыночной стоимости. Окупилось с первой сделки!",
      rating: 5,
      location: "Москва"
    },
    {
      name: "Мария К.",
      role: "Предприниматель",
      text: "Отчеты о рисках спасли меня от покупки проблемного участка. Сэкономала время и деньги.",
      rating: 5,
      location: "Санкт-Петербург"
    },
    {
      name: "Дмитрий П.",
      role: "Застройщик",
      text: "Система уведомлений работает отлично — не упускаю ни одного интересного лота в моем регионе.",
      rating: 5,
      location: "Казань"
    }
  ];

  const caseStudies = [
    {
      title: "Участок под застройку в Подмосковье",
      location: "Московская область",
      savingsPercent: "42%",
      price: "3.2 млн ₽",
      description: "Инвестор нашел участок 12 соток через систему мониторинга за 2 недели до публичных торгов"
    },
    {
      title: "Коммерческая земля в центре города",
      location: "Екатеринбург",
      savingsPercent: "35%",
      price: "8.5 млн ₽",
      description: "Предприниматель получил уведомление за 3 дня до аукциона и выиграл торги"
    }
  ];

  const pricingPlans = [
    {
      name: "Стартовый",
      price: "1 990",
      period: "/месяц",
      features: [
        "Мониторинг до 3 регионов",
        "Email уведомления",
        "Базовые отчеты о рисках",
        "История торгов (30 дней)"
      ],
      highlight: false
    },
    {
      name: "Профессиональный",
      price: "4 990",
      period: "/месяц",
      features: [
        "Мониторинг всех регионов",
        "Email + Telegram уведомления",
        "Расширенные отчеты + ROI анализ",
        "История торгов (1 год)",
        "Персональные рекомендации",
        "Приоритетная поддержка"
      ],
      highlight: true,
      badge: "Популярный"
    },
    {
      name: "Корпоративный",
      price: "От 14 990",
      period: "/месяц",
      features: [
        "Всё из Профессионального",
        "До 10 пользователей",
        "API доступ",
        "Персональный менеджер",
        "Кастомные интеграции",
        "SLA 99.9%"
      ],
      highlight: false
    }
  ];

  const faqs = [
    {
      question: "Когда запуск платформы?",
      answer: "Запуск планируется в течение ближайших 2-3 месяцев. Ранние подписчики получат доступ первыми."
    },
    {
      question: "Сколько будет стоить сервис?",
      answer: "Для ранних подписчиков мы предложим специальные условия со скидкой до 50%. Стандартная подписка будет стоить от 1990₽/месяц."
    },
    {
      question: "Какие регионы поддерживаются?",
      answer: "На старте - все регионы РФ с публичными торгами земельными участками через ЭТП (электронные торговые площадки)."
    },
    {
      question: "Как работают уведомления?",
      answer: "Вы настраиваете критерии (регион, бюджет, тип участка), и система автоматически присылает подходящие лоты на email и в Telegram."
    },
    {
      question: "Можно ли попробовать бесплатно?",
      answer: "Да! Для ранних подписчиков мы предоставим бесплатный пробный период на 14 дней после запуска."
    },
    {
      question: "Гарантируете ли вы результат?",
      answer: "Мы предоставляем инструменты для поиска и анализа, но итоговое решение принимаете вы. Наши пользователи в среднем находят подходящий участок за 2-4 недели."
    }
  ];

  return (
    <>
      {/* Hero Section - Simplified & Centered */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4D9999] to-[#267373] flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md text-white/90 px-4 py-2 rounded-full border border-[#4D9999]/30">
                <span className="text-sm">Мониторинг земельных участков</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6">
              <span className="block text-white">Найдите выгодный участок</span>
              <span className="block text-white">до того, как это сделают другие</span>
            </h1>

            <p className="mb-12 text-white/60 text-xl max-w-3xl mx-auto">
              Автоматический мониторинг торгов, AI-анализ рисков и умные уведомления — всё в одной платформе
            </p>

            {/* Email Form - Centered */}
            {!isSubscribed ? (
              <div className="mb-12 max-w-lg mx-auto">
                <div className="relative bg-white/5 backdrop-blur-[12px] border border-white/10 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-[#66B2B2]" />
                    <p className="text-white">Получите ранний доступ со скидкой 50%</p>
                  </div>

                  <form onSubmit={handleSubscribe}>
                    <div className="flex flex-col gap-3">
                      <Input
                        type="email"
                        placeholder="Введите ваш email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#4D9999] focus:ring-2 focus:ring-[#4D9999]/20 h-12 rounded-2xl"
                      />
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-[#267373] via-[#4D9999] to-[#66B2B2] hover:from-[#267373]/90 hover:to-[#66B2B2]/90 border-0 h-12 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all rounded-2xl text-white"
                      >
                        Подписаться бесплатно
                      </Button>
                    </div>
                  </form>

                  <p className="text-white/40 text-sm mt-4">
                    + PDF-гайд «7 скрытых рисков при покупке земли» на почту
                  </p>
                </div>
              </div>
            ) : (
              <div className="mb-12 inline-flex items-center gap-3 bg-green-500/20 text-green-400 px-6 py-3 rounded-2xl border border-green-500/30 backdrop-blur-xl">
                <CheckCircle2 className="w-5 h-5" />
                <p>Отлично! Мы сообщим вам о запуске.</p>
              </div>
            )}

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-white text-4xl mb-1">1200+</div>
                <div className="text-white/50 text-sm">Участков в базе</div>
              </div>
              <div>
                <div className="text-white text-4xl mb-1">24/7</div>
                <div className="text-white/50 text-sm">Мониторинг торгов</div>
              </div>
              <div>
                <div className="text-white text-4xl mb-1">85%</div>
                <div className="text-white/50 text-sm">Экономия времени</div>
              </div>
              <div>
                <div className="text-white text-4xl mb-1">40%</div>
                <div className="text-white/50 text-sm">Средняя выгода</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies - NEW */}
      <section className="relative z-10 py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-white">Успешные кейсы</h2>
            <p className="text-white/60 text-lg">
              Реальные сделки наших пользователей
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {caseStudies.map((caseStudy, index) => (
              <Card key={index} className="relative bg-white/5 backdrop-blur-[4px] p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl hover:border-[#4D9999]/30 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white mb-2">{caseStudy.title}</h3>
                    <div className="flex items-center gap-2 text-white/60">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{caseStudy.location}</span>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30">
                    <span className="text-green-400">-{caseStudy.savingsPercent}</span>
                  </div>
                </div>

                <p className="text-white/70 mb-4">{caseStudy.description}</p>

                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-[#4D9999]" />
                  <span className="text-white text-xl">{caseStudy.price}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-white">Что говорят пользователи</h2>
            <p className="text-white/60 text-lg">
              Отзывы тех, кто уже тестирует платформу
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative bg-white/5 backdrop-blur-[4px] p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl hover:border-[#4D9999]/30 transition-all">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-[#4D9999]/50" />
                </div>
                
                <p className="text-white/80 mb-6 leading-relaxed">{testimonial.text}</p>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white">{testimonial.name}</div>
                    <div className="text-white/50 text-sm">{testimonial.role}</div>
                  </div>
                  <div className="flex items-center gap-1 text-white/40 text-sm">
                    <MapPin className="w-3 h-3" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-white">Ключевые возможности платформы</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Полный цикл работы с лотами — от поиска до аналитики
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group relative bg-white/5 backdrop-blur-[4px] p-6 transition-all hover:bg-white/10 rounded-2xl border border-white/10 hover:border-[#4D9999]/50 shadow-lg hover:shadow-2xl">
              <div className="relative">
                <div className="w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-4 group-hover:border-[#4D9999] group-hover:bg-[#4D9999]/10 transition-all">
                  <Search className="w-6 h-6 text-white/70 group-hover:text-[#4D9999] transition-colors" strokeWidth={1} />
                </div>
                <h3 className="text-white mb-2">Мониторинг лотов</h3>
                <p className="text-white/60">
                  Отслеживайте все аукционы земельных участков в режиме реального времени
                </p>
              </div>
            </Card>

            <Card className="group relative bg-white/5 backdrop-blur-[4px] p-6 transition-all hover:bg-white/10 rounded-2xl border border-white/10 hover:border-[#4D9999]/50 shadow-lg hover:shadow-2xl">
              <div className="relative">
                <div className="w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-4 group-hover:border-[#4D9999] group-hover:bg-[#4D9999]/10 transition-all">
                  <Bell className="w-6 h-6 text-white/70 group-hover:text-[#4D9999] transition-colors" strokeWidth={1} />
                </div>
                <h3 className="text-white mb-2">Умные уведомления</h3>
                <p className="text-white/60">
                  Получайте оповещения о новых лотах по вашим критериям
                </p>
              </div>
            </Card>

            <Card className="group relative bg-white/5 backdrop-blur-[4px] p-6 transition-all hover:bg-white/10 rounded-2xl border border-white/10 hover:border-[#4D9999]/50 shadow-lg hover:shadow-2xl">
              <div className="relative">
                <div className="w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-4 group-hover:border-[#4D9999] group-hover:bg-[#4D9999]/10 transition-all">
                  <TrendingUp className="w-6 h-6 text-white/70 group-hover:text-[#4D9999] transition-colors" strokeWidth={1} />
                </div>
                <h3 className="text-white mb-2">Анализ рынка</h3>
                <p className="text-white/60">
                  Оценка рыночной стоимости и перспектив инвестиций
                </p>
              </div>
            </Card>

            <Card className="group relative bg-white/5 backdrop-blur-[4px] p-6 transition-all hover:bg-white/10 rounded-2xl border border-white/10 hover:border-[#4D9999]/50 shadow-lg hover:shadow-2xl">
              <div className="relative">
                <div className="w-14 h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-4 group-hover:border-[#4D9999] group-hover:bg-[#4D9999]/10 transition-all">
                  <ShieldCheck className="w-6 h-6 text-white/70 group-hover:text-[#4D9999] transition-colors" strokeWidth={1} />
                </div>
                <h3 className="text-white mb-2">Отчеты о рисках</h3>
                <p className="text-white/60">
                  Детальный анализ юридических и технических рисков участка
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing - NEW */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-white">Выберите свой тариф</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Для ранних подписчиков — скидка 50% на первые 3 месяца
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-white/5 backdrop-blur-[4px] p-8 rounded-2xl border shadow-lg transition-all ${
                  plan.highlight 
                    ? 'border-[#4D9999] shadow-2xl shadow-cyan-500/20 scale-105' 
                    : 'border-white/10 hover:border-[#4D9999]/30'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1 bg-gradient-to-r from-[#4D9999] to-[#66B2B2] text-white text-sm rounded-full shadow-lg">
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-white text-xl mb-4">{plan.name}</h3>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-white text-4xl">{plan.price}</span>
                    <span className="text-white/50 text-lg pb-1"> ₽{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#4D9999] flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full h-12 rounded-2xl transition-all ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-[#267373] via-[#4D9999] to-[#66B2B2] hover:from-[#267373]/90 hover:to-[#66B2B2]/90 text-white shadow-lg shadow-cyan-500/30'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  Выбрать тариф
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-white">Как это работает</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Простой процесс от регистрации до покупки участка
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute top-0 left-8 w-px h-full bg-gradient-to-b from-[#4D9999]/30 to-transparent hidden md:block" />
              
              <div className="relative bg-white/5 backdrop-blur-[4px] border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:shadow-2xl hover:border-[#4D9999]/30 transition-all shadow-lg">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#267373] to-[#4D9999] flex items-center justify-center text-white text-2xl mb-6 shadow-lg shadow-cyan-500/30">
                  1
                </div>
                <h3 className="text-white mb-3">Создайте профиль</h3>
                <p className="text-white/60">
                  Укажите ваши критерии поиска: регион, бюджет, тип участка и цели использования
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-8 w-px h-full bg-gradient-to-b from-[#A78BFA]/30 to-transparent hidden md:block" />
              
              <div className="relative bg-white/5 backdrop-blur-[4px] border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:shadow-2xl hover:border-[#A78BFA]/30 transition-all shadow-lg">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#9333EA] flex items-center justify-center text-white text-2xl mb-6 shadow-lg shadow-purple-500/30">
                  2
                </div>
                <h3 className="text-white mb-3">Получайте подборки</h3>
                <p className="text-white/60">
                  Система автоматически подберет релевантные лоты и пришлет уведомления
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white/5 backdrop-blur-[4px] border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:shadow-2xl hover:border-[#66B2B2]/30 transition-all shadow-lg">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4D9999] to-[#66B2B2] flex items-center justify-center text-white text-2xl mb-6 shadow-lg shadow-teal-500/30">
                  3
                </div>
                <h3 className="text-white mb-3">Анализируйте и покупайте</h3>
                <p className="text-white/60">
                  Изучите детальные отчеты о рисках и ROI, примите взвешенное решение
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-white">Частые вопросы</h2>
            <p className="text-white/60 text-lg">
              Всё, что нужно знать о ZemScan
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-[4px] border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:border-[#4D9999]/30 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-all"
                >
                  <span className="text-white">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#4D9999]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/50" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative bg-gradient-to-br from-[#267373]/20 via-[#4D9999]/10 to-[#66B2B2]/20 backdrop-blur-[12px] border border-[#4D9999]/30 rounded-3xl p-12 shadow-2xl text-center">
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-[#4D9999]/30 to-transparent blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-gradient-to-tr from-[#66B2B2]/20 to-transparent blur-2xl" />
            
            <div className="relative">
              <h2 className="mb-4 text-white">Начните находить выгодные участки уже сегодня</h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Подпишитесь сейчас и получите скидку 50% + гайд в подарок
              </p>

              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Ваш email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#4D9999] focus:ring-2 focus:ring-[#4D9999]/20 h-12 rounded-2xl flex-1"
                    />
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-[#267373] via-[#4D9999] to-[#66B2B2] hover:from-[#267373]/90 hover:to-[#66B2B2]/90 border-0 h-12 px-8 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all rounded-2xl text-white whitespace-nowrap"
                    >
                      Получить доступ
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="inline-flex items-center gap-3 bg-green-500/20 text-green-400 px-8 py-4 rounded-2xl border border-green-500/30 backdrop-blur-xl">
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
