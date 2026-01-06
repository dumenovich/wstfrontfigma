import { motion, AnimatePresence } from "motion/react";
import { LogoVariant2 } from "./LogoVariants";
import { useState, useEffect } from "react";
import {
  CheckCircle2,
  BarChart3,
  FileText,
  TrendingUp,
  Sun,
  Moon,
  MapPin,
  Send,
  Compass,
  LineChart,
  Layers,
  Zap,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollReveal } from "./ScrollReveal";
import { AnimatedMap } from "./AnimatedMap";
import heroBackgroundImage from "figma:asset/798e29d2c40107009abeae5789874b5f0b72ab00.png";

type Theme = {
  bg: {
    primary: string;
    secondary: string;
    card: string;
    overlay: string;
  };
  accent: {
    green: string;
    darkGreen?: string;
    mint: string;
    mintLight?: string;
    beige?: string;
    lightGray?: string;
    cream?: string;
    lightMint?: string;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
  };
  border: string;
};

type Props = {
  theme: Theme;
  isDark: boolean;
  onLoginClick: () => void;
  toggleTheme: () => void;
};

const dashboardImage =
  "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBzY3JlZW58ZW58MXx8fHwxNzY2OTg2NTE5fDA&ixlib=rb-4.1.0&q=80&w=1080";
const propertyImage =
  "https://images.unsplash.com/photo-1762941177632-fe37c485c428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHklMjBjYXJkfGVufDF8fHx8MTc2NzA1MTU3Mnww&ixlib=rb-4.1.0&q=80&w=1080";
const landImage =
  "https://images.unsplash.com/photo-1764222233275-87dc016c11dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kJTIwZGV2ZWxvcG1lbnQlMjBhZXJpYWx8ZW58MXx8fHwxNzY3MDQ2NjExfDA&ixlib=rb-4.1.0&q=80&w=1080";
const searchImage =
  "https://images.unsplash.com/photo-1734209507417-1f70aa230aa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMHNlYXJjaCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjcwNTE1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080";
const chartImage =
  "https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNoYXJ0JTIwZ3JhcGh8ZW58MXx8fHwxNzY2OTkxNTE2fDA&ixlib=rb-4.1.0&q=80&w=1080";
const growthImage =
  "https://images.unsplash.com/photo-1762427354251-f008b64dbc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm93dGglMjBzdGF0aXN0aWNzfGVufDF8fHx8MTc2NzA1MTg2N3ww&ixlib=rb-4.1.0&q=80&w=1080";
const portfolioImage =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwcG9ydGZvbGlvfGVufDF8fHx8MTc2Njk2Njk1NHww&ixlib=rb-4.1.0&q=80&w=1080";

export default function LandingVariants({
  theme,
  isDark,
  onLoginClick,
  toggleTheme,
}: Props) {
  const [email, setEmail] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [audienceIndex, setAudienceIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const audiences = [
    "для покупателей",
    "для инвесторов",
    "для застройщиков",
  ];

  // Rotate audience text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAudienceIndex((prev) => (prev + 1) % audiences.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Track scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    alert("Спасибо за подписку! Мы сообщим о запуске.");
    setEmail("");
  };

  const faqs = [
    {
      question: "Как ZemScan помогает нйти земельные участки?",
      answer:
        "ZemScan автоматически мониторит все публичные источники данных о лотах аренды земельных участков, фильтрует их по вашим критериям и отправляет уведомления о новых возможностях.",
    },
    {
      question: "Какие данные включены в отчет о рисках?",
      answer:
        "Отчет включает анализ правового статуса участка, оценку рыночной стоимости, историю сделок, наличие обременений, экологические риски и инвестиционный потенциал.",
    },
    {
      question:
        "Можно ли интегрировать ZemScan с другими системами?",
      answer:
        "Да, мы предоставляем API для интеграции с вашими CRM, ERP и другими корпоративными системами. Документация доступна после регистрации.",
    },
    {
      question: "Сколько стоит подписка на ZemScan?",
      answer:
        "Мы предлагаем гибкие тарифные планы от 2 990 ₽/еяц  индивидуальных пользователей до корпоративных решений. Первые 14 дней бесплатно.",
    },
  ];

  return (
    <main>
      {/* Hero Section - Large Green Header with Cards */}
      <section
        className="relative px-6 pt-4 pb-32 overflow-hidden"
        style={{ backgroundColor: theme.accent.green }}
      >
        {/* Background Image from Drone - with Ken Burns + Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://pibig.info/uploads/posts/2023-11/thumbs/1699031559_pibig-info-p-polyana-trava-fon-pinterest-1.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0003})`,
            willChange: "transform, background-position",
          }}
          initial={{ scale: 1.1, backgroundPosition: "0% 50%" }}
          animate={{
            scale: 1.15,
            backgroundPosition: [
              "0% 50%",
              "100% 50%",
              "0% 50%",
            ],
          }}
          transition={{
            scale: {
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
            backgroundPosition: {
              duration: 60,
              ease: "linear",
              repeat: Infinity,
            },
          }}
        />

        {/* Dark Overlay for better text readability - with breathing effect */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ backgroundColor: "rgba(0, 0, 0, 0.28)" }}
          animate={{ backgroundColor: "rgba(0, 0, 0, 0.23)" }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Additional gradient overlay for header readability */}
        <div
          className="absolute top-0 left-0 right-0 z-0"
          style={{
            height: "200px",
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 60%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Animated Map Background */}
        <AnimatedMap />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header - Inside Hero */}
          <header className="py-4 mb-12">
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-6">
                {/* Logo with Text */}
                <div className="flex items-center gap-3">
                  <LogoVariant2
                    className="w-10 h-10"
                    style={{
                      color: "#FFFFFF",
                      filter:
                        "drop-shadow(0 2px 8px rgba(0,0,0,0.5)) drop-shadow(0 0 20px rgba(255,255,255,0.6)) drop-shadow(0 0 30px rgba(255,255,255,0.4))",
                    }}
                  />
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                    }}
                  >
                    zemscan.ru
                  </span>
                </div>

                {/* Vertical Divider */}
                <div
                  style={{
                    width: "1px",
                    height: "24px",
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                />

                {/* Журнал link - рядом с логотипом */}
                <a
                  href="#blog"
                  className="px-4 py-2 rounded-lg transition-all hover:bg-white/10"
                  style={{
                    color: "#FFFFFF",
                    fontWeight: 500,
                    fontSize: "0.9375rem",
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  Журнал
                </a>
              </div>

              <nav className="flex items-center gap-6">
                {/* Contact Email */}
                <div className="hidden md:flex flex-col items-end">
                  <span
                    className="text-xs"
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      marginBottom: "2px",
                    }}
                  >
                    Для вопросов и предложений
                  </span>
                  <a
                    href="mailto:info@zemscan.ru"
                    className="transition-opacity hover:opacity-80"
                    style={{
                      color: "#FAFFF2",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                    }}
                  >
                    info@zemscan.ru
                  </a>
                </div>

                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:bg-white/10"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "#FFFFFF",
                  }}
                  aria-label="Переключить тему"
                >
                  {isDark ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </button>
              </nav>
            </div>
          </header>

          {/* Top Content */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-16">
            {/* Left: Main Heading */}
            <div>
              <h1
                className="mb-6"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                  lineHeight: "1.1",
                  fontWeight: 500,
                  color: "#FFFFFF",
                }}
              >
                Анализ и оценка
                <br />
                земли на торгах
                <br />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={audienceIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {audiences[audienceIndex]}
                  </motion.span>
                </AnimatePresence>
              </h1>

              {/* Launch Badge */}
              <div className="mb-6">
                <div
                  className="inline-block px-5 py-2.5 rounded-full"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <p
                    style={{
                      color: "#FFFFFF",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                    }}
                  >
                    Запуск — весна 2026
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Subheading & CTA */}
            <div>
              <p
                className="mb-6 text-lg"
                style={{
                  color: "rgba(255,255,255,0.95)",
                  lineHeight: "1.5",
                }}
              >
                Мы проверяем каждый лот и показываем реальную
                картину: справедливую цену, скрытые риски и всё,
                что нужно знать до покупки. Принимайте решения
                на основе данных, а не доадок.
              </p>
              <a
                href="#subscribe"
                className="inline-block px-8 py-3 rounded-full transition-all hover:opacity-90"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: theme.accent.green,
                  border: "none",
                }}
              >
                Получить ранний доступ →
              </a>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: CheckCircle2,
                title: "15+ факторов",
                subtitle: "Полный анализ каждого участка",
                titleSize: "2rem",
              },
              {
                icon: BarChart3,
                title: "Справедливая цена",
                subtitle: "Оценка на основе рынка и аналогов",
                titleSize: "1.5rem",
              },
              {
                icon: FileText,
                title: "Скрытые риски",
                subtitle:
                  "ЗОУИТ, сервитуты, экология — до покупки",
                titleSize: "1.5rem",
              },
              {
                icon: TrendingUp,
                title: "Экономия времени",
                subtitle: "Часы нализа → минуты на решение",
                titleSize: "1.5rem",
              },
            ].map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1], // Custom easing for smooth feel
                  }}
                  whileHover={{
                    y: -8,
                    transition: {
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  className="rounded-2xl p-6 flex flex-col justify-center shadow-lg cursor-pointer"
                  style={{
                    backgroundColor: isDark
                      ? "#FFFFFF"
                      : theme.accent.lightMint || "#f8fffd",
                  }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: `${theme.accent.green}15`,
                      boxShadow: `0 0 0 1px ${theme.accent.green}30`,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: theme.accent.green }}
                    />
                  </motion.div>
                  <div
                    style={{
                      fontSize: card.titleSize,
                      fontWeight: 600,
                      color: theme.text.primary,
                    }}
                  >
                    {card.title}
                  </div>
                  <div
                    className="text-sm mt-2"
                    style={{ color: theme.text.secondary }}
                  >
                    {card.subtitle}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Problem Statement Section - After Hero */}
      <section
        className="px-6 py-24"
        style={{ backgroundColor: theme.bg.primary }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div
              className="inline-block px-4 py-2 rounded-full text-xs mb-6"
              style={{
                backgroundColor: `${theme.accent.green}15`,
                color: theme.accent.green,
                fontWeight: 600,
              }}
            >
              ПОЧЕМУ ВАЖЕН АНАЛИЗ
            </div>
            <h2
              className="mb-6"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 500,
                color: theme.text.primary,
                lineHeight: "1.2",
              }}
            >
              Ошибка при покупке земли стоит дорого — и
              исправить её нельзя
            </h2>
            <p
              className="text-lg"
              style={{
                color: theme.text.secondary,
                lineHeight: "1.6",
              }}
            >
              Мы проанализировали 200 000+ лотов и нашли, что
              каждый третий имеет скрытые ограничения.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Solution Section - Comparison */}
      <section
        className="px-6 py-24"
        style={{ backgroundColor: theme.bg.secondary }}
      >
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            {/* Header */}
            <div className="text-center mb-16">
              <div
                className="inline-block px-4 py-2 rounded-full text-xs mb-6"
                style={{
                  backgroundColor: `${theme.accent.green}15`,
                  color: theme.accent.green,
                  fontWeight: 600,
                }}
              >
                НАШЕ РЕШЕНИЕ
              </div>
              <h2
                className="mb-6"
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  fontWeight: 500,
                  color: theme.text.primary,
                  lineHeight: "1.2",
                }}
              >
                zemscan проверяет участок за вас
              </h2>
              <p
                className="text-lg max-w-3xl mx-auto"
                style={{
                  color: theme.text.secondary,
                  lineHeight: "1.6",
                }}
              >
                Автоматический анализ 15+ факторов — от охранных
                зон до рыночной цены. Вы получаете полный отчёт,
                чтобы принять взвешенное решение.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Самостоятельно */}
              <div
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: theme.bg.card,
                  border: `1px solid ${theme.border}`,
                  opacity: 0.6,
                  filter: "grayscale(20%)",
                }}
              >
                <h3
                  className="mb-8 pb-4 border-b"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    color: theme.text.muted,
                    borderColor: theme.border,
                  }}
                >
                  Самостоятельно
                </h3>
                <div className="space-y-6">
                  {[
                    { label: "Время", value: "3-6 недель" },
                    {
                      label: "Стоимость",
                      value: "До 40 000 ₽",
                    },
                    {
                      label: "Полнота",
                      value: "Зависит от опыта",
                    },
                    { label: "Риск ошибки", value: "Высокий" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div
                        className="text-sm mb-2"
                        style={{
                          color: theme.text.muted,
                          fontWeight: 500,
                          opacity: 0.7,
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: "1.125rem",
                          color: theme.text.muted,
                          opacity: 0.8,
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - С zemscan */}
              <div
                className="rounded-2xl p-8 relative"
                style={{
                  backgroundColor: theme.bg.card,
                  border: `2px solid ${theme.accent.green}`,
                  boxShadow: `0 0 0 4px ${theme.accent.green}15`,
                }}
              >
                <div
                  className="absolute -top-3 left-8 px-3 py-1 rounded-full text-xs"
                  style={{
                    backgroundColor: theme.accent.green,
                    color: "#FFFFFF",
                    fontWeight: 600,
                  }}
                >
                  Рекомендуем
                </div>
                <h3
                  className="mb-8 pb-4 border-b"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: theme.accent.green,
                    borderColor: theme.border,
                  }}
                >
                  С zemscan
                </h3>
                <div className="space-y-6">
                  {[
                    { label: "Время", value: "Минуты" },
                    {
                      label: "Стоимость",
                      value: "В разы дешевле",
                    },
                    { label: "Полнота", value: "15+ факторов" },
                    {
                      label: "Риск ошибки",
                      value: "Минимальный",
                    },
                  ].map((item, i) => (
                    <div key={i}>
                      <div
                        className="text-sm mb-2"
                        style={{
                          color: theme.text.muted,
                          fontWeight: 500,
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: "1.125rem",
                          fontWeight: 600,
                          color: theme.accent.green,
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Target Audience Section - Для кого */}
      <section
        className="px-6 py-24"
        style={{ backgroundColor: theme.bg.primary }}
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            {/* Header */}
            <div className="text-center mb-16">
              <div
                className="inline-block px-4 py-2 rounded-full text-xs mb-6"
                style={{
                  backgroundColor: `${theme.accent.green}15`,
                  color: theme.accent.green,
                  fontWeight: 600,
                }}
              >
                ДЛЯ КОГО ZEMSCAN
              </div>
              <h2
                className="mb-6"
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  fontWeight: 500,
                  color: theme.text.primary,
                  lineHeight: "1.2",
                }}
              >
                Сервис будет полезен, если вы:
              </h2>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Compass,
                  title: "Покупаете землю впервые",
                  description:
                    "Хотите купить участок на торгах и не переплатить, избежать скрытых проблем",
                },
                {
                  icon: LineChart,
                  title: "Инвестируете в землю",
                  description:
                    "Хотите понимать реальную стоимость и риски перед вложением",
                },
                {
                  icon: Layers,
                  title: "Застройщик или девелопер",
                  description:
                    "Нужен полный анализ: градпотенциал, коммуникации, ограничения",
                },
                {
                  icon: Zap,
                  title: "Цените своё время",
                  description:
                    "Нет возможности тратить недели на сбор информации из разных источников",
                },
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.5,
                    }}
                    whileHover={{
                      y: -4,
                      transition: { duration: 0.2 },
                    }}
                    className="rounded-2xl p-8 cursor-pointer"
                    style={{
                      backgroundColor: theme.bg.card,
                      border: `1px solid ${theme.border}`,
                    }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                      style={{
                        backgroundColor: `${theme.accent.green}15`,
                        boxShadow: `0 0 0 1px ${theme.accent.green}20`,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: theme.accent.green }}
                      />
                    </motion.div>
                    <h3
                      className="mb-4"
                      style={{
                        fontSize: "1.375rem",
                        fontWeight: 600,
                        color: theme.text.primary,
                        lineHeight: "1.3",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        color: theme.text.secondary,
                        lineHeight: "1.6",
                        fontSize: "1rem",
                      }}
                    >
                      {card.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section - Alternating Layout */}
      <section
        className="px-6 py-20"
        style={{ backgroundColor: theme.bg.secondary }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Feature 1 - Dashboard */}
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
              <div>
                <div
                  className="inline-block px-4 py-2 rounded-full text-xs mb-4"
                  style={{
                    backgroundColor: `${theme.accent.green}20`,
                    color: theme.accent.green,
                  }}
                >
                  МОНИТОРИНГ 24/7
                </div>
                <h2
                  className="mb-6"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 2.75rem)",
                    fontWeight: 500,
                    color: theme.text.primary,
                  }}
                >
                  Отслеживайте новые лоты в реальном времени
                </h2>
                <p
                  className="mb-6"
                  style={{
                    color: theme.text.secondary,
                    lineHeight: "1.6",
                  }}
                >
                  Получайте мгновенные уведомления о появлении
                  новых земельных участков, соответствующих
                  вашим критериям. Больше никаких упущенных
                  возможностей
                </p>
                <ul className="space-y-3">
                  {[
                    "Автоматический сбор данных с торговых площадок",
                    "Гибкие фильтры: регион, площадь, ВРИ, бюджет",
                    "Уведомления в Telegram и на email",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        className="w-5 h-5 shrink-0 mt-0.5"
                        style={{ color: theme.accent.green }}
                      />
                      <span
                        style={{ color: theme.text.secondary }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: `1px solid ${theme.border}` }}
              >
                <img
                  src={searchImage}
                  alt="Real-time monitoring"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 2 - Analytics (Reversed) */}
          <ScrollReveal delay={0.2}>
            <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
              <div
                className="order-2 md:order-1 rounded-2xl overflow-hidden"
                style={{ border: `1px solid ${theme.border}` }}
              >
                <img
                  src={propertyImage}
                  alt="Analytics"
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <div
                  className="inline-block px-4 py-2 rounded-full text-xs mb-4"
                  style={{
                    backgroundColor: `${theme.accent.green}20`,
                    color: theme.accent.green,
                  }}
                >
                  ОЦЕНКА
                </div>
                <h2
                  className="mb-6"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 2.75rem)",
                    fontWeight: 500,
                    color: theme.text.primary,
                  }}
                >
                  Узнайте реальную цену участка
                </h2>
                <p
                  className="mb-6"
                  style={{
                    color: theme.text.secondary,
                    lineHeight: "1.6",
                  }}
                >
                  Сравниваем с аналогами, учитываем кадастровую
                  стоимость и рыночные данные. Вы понимаете,
                  справедлива ли цена на торгах
                </p>
                <ul className="space-y-3">
                  {[
                    "Анализ цен на аналогичные участки в районе",
                    "Сравнение с кадастровой стоимостью",
                    "Оценка отклонения от рынка",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        className="w-5 h-5 shrink-0 mt-0.5"
                        style={{ color: theme.accent.green }}
                      />
                      <span
                        style={{ color: theme.text.secondary }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 3 - Risk Assessment */}
          <ScrollReveal delay={0.3}>
            <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
              <div>
                <div
                  className="inline-block px-4 py-2 rounded-full text-xs mb-4"
                  style={{
                    backgroundColor: `${theme.accent.green}20`,
                    color: theme.accent.green,
                  }}
                >
                  ЮРИДИЧЕСКИЙ АНАЛИЗ
                </div>
                <h2
                  className="mb-6"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 2.75rem)",
                    fontWeight: 500,
                    color: theme.text.primary,
                  }}
                >
                  Находим скрытые ограничения до покупки
                </h2>
                <p
                  className="mb-6"
                  style={{
                    color: theme.text.secondary,
                    lineHeight: "1.6",
                  }}
                >
                  Проверяем участок по всем базам данных: от
                  охранных зон до судебных споров. Вы узнаёте о
                  проблемах заранее, а не после сделки
                </p>
                <ul className="space-y-3">
                  {[
                    "Охранные зоны (ЗОУИТ): водоохранные, ЛЭП, газопроводы",
                    "Обременения: аресты, залоги, сервитуты",
                    "Категория земли и вид разрешённого использования",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        className="w-5 h-5 shrink-0 mt-0.5"
                        style={{ color: theme.accent.green }}
                      />
                      <span
                        style={{ color: theme.text.secondary }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: `1px solid ${theme.border}` }}
              >
                <img
                  src={landImage}
                  alt="Risk assessment"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 4  */}
          <ScrollReveal delay={0.2}>
            <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
              <div
                className="order-2 md:order-1 rounded-2xl overflow-hidden"
                style={{ border: `1px solid ${theme.border}` }}
              >
                <img
                  src={propertyImage}
                  alt="Analytics"
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <div
                  className="inline-block px-4 py-2 rounded-full text-xs mb-4"
                  style={{
                    backgroundColor: `${theme.accent.green}20`,
                    color: theme.accent.green,
                  }}
                >
                  ТЕХНИЧЕСКИЙ АНАЛИЗ
                </div>
                <h2
                  className="mb-6"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 2.75rem)",
                    fontWeight: 500,
                    color: theme.text.primary,
                  }}
                >
                  Оцениваем доступность коммуникаций
                </h2>
                <p
                  className="mb-6"
                  style={{
                    color: theme.text.secondary,
                    lineHeight: "1.6",
                  }}
                >
                  Показываем расстояние до инженерных сетей и
                  ориентировочную стоимость подключения. Вы
                  понимаете реальные затраты на освоение участка
                </p>
                <ul className="space-y-3">
                  {[
                    "Электричество: расстояние до ЛЭП, свободная мощность",
                    "Газ: наличие магистрали, возможность подключения",
                    "Дороги: подъезд к участку, качество покрытия",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        className="w-5 h-5 shrink-0 mt-0.5"
                        style={{ color: theme.accent.green }}
                      />
                      <span
                        style={{ color: theme.text.secondary }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Green CTA Section */}
      <section
        className="px-6 py-24"
        style={{ backgroundColor: theme.accent.green }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 500,
              color: "#FFFFFF",
            }}
          >
            простите поиск и управление
            <br />
            земельными активами
          </h2>
          <p
            className="mb-8 text-lg"
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            Начните отслеживать лоты бесплатно. Без кредитной
            карты. Отмените в любое время.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="px-10 py-4 rounded-xl transition-all hover:opacity-90"
              style={{
                backgroundColor: "#FFFFFF",
                color: theme.accent.green,
                border: "none",
              }}
            >
              Создать аккаунт
            </Button>
            <Button
              className="px-10 py-4 rounded-xl transition-all"
              style={{
                backgroundColor: "transparent",
                color: "#FFFFFF",
                border: "1px solid rgba(255,255,255,0.4)",
              }}
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Property Cards Section */}
      <section
        className="px-6 py-20"
        style={{ backgroundColor: theme.bg.secondary }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="mb-4"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 500,
                color: theme.text.primary,
              }}
            >
              Актуальные лоты
            </h2>
            <p style={{ color: theme.text.secondary }}>
              Примеры земельных участков, доступных для аренды
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Участок 12.5 а",
                location: "Московская область",
                price: "2 500 000 ₽/гд",
                type: "Коммерческая",
              },
              {
                title: "Участок 8.3 га",
                location: "Ленинградская область",
                price: "1 800 000 ₽/год",
                type: "Сельхоз",
              },
              {
                title: "Участок 5.2 га",
                location: "Краснодарский край",
                price: "3 200 000 ₽/гд",
                type: "Промышленная",
              },
            ].map((lot, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-transform hover:scale-105"
                style={{
                  backgroundColor: theme.bg.card,
                  border: `1px solid ${theme.border}`,
                }}
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={landImage}
                    alt={lot.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs"
                    style={{
                      backgroundColor: theme.accent.green,
                      color: "#FFFFFF",
                    }}
                  >
                    {lot.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="mb-2"
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      color: theme.text.primary,
                    }}
                  >
                    {lot.title}
                  </h3>
                  <div
                    className="flex items-center gap-2 mb-4"
                    style={{ color: theme.text.muted }}
                  >
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">
                      {lot.location}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 600,
                        color: theme.accent.green,
                      }}
                    >
                      {lot.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="px-6 py-20"
        style={{ backgroundColor: theme.bg.primary }}
      >
        <div className="max-w-4xl mx-auto">
          <div
            className="text-center mb-12"
            style={{ color: theme.text.muted }}
          >
            (FAQ)
          </div>

          <div>
            {faqs.map((faq, i) => (
              <div key={i}>
                <div
                  className="border-t"
                  style={{ borderColor: theme.border }}
                />
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === i ? null : i)
                  }
                  className="w-full py-8 flex items-start gap-6 text-left hover:opacity-80 transition-opacity"
                >
                  <div
                    className="text-sm shrink-0"
                    style={{
                      color: theme.text.muted,
                      minWidth: "2rem",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}.
                  </div>
                  <div className="flex-1">
                    <h3
                      className="mb-3"
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 400,
                        color: theme.text.primary,
                        lineHeight: "1.4",
                      }}
                    >
                      {faq.question}
                    </h3>
                    <AnimatePresence initial={false}>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: {
                              duration: 0.6,
                              ease: [0.04, 0.62, 0.23, 0.98],
                            },
                            opacity: {
                              duration: 0.5,
                              ease: "easeInOut",
                            },
                          }}
                          style={{ overflow: "hidden" }}
                        >
                          <motion.p
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.15,
                              ease: "easeOut",
                            }}
                            className="mt-4"
                            style={{
                              color: theme.text.muted,
                              lineHeight: "1.6",
                              fontSize: "0.9375rem",
                            }}
                          >
                            {faq.answer}
                          </motion.p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="shrink-0 mt-1">
                    <motion.div
                      className="w-6 h-6 flex items-center justify-center"
                      style={{
                        color: theme.text.primary,
                        fontSize: "1.5rem",
                        lineHeight: "1",
                      }}
                      animate={{
                        rotate: openFaq === i ? 45 : 0,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                    >
                      +
                    </motion.div>
                  </div>
                </button>
              </div>
            ))}
            <div
              className="border-t"
              style={{ borderColor: theme.border }}
            />
          </div>
        </div>
      </section>

      {/* Final CTA - Green */}
      <section
        id="subscribe"
        className="px-6 py-24"
        style={{ backgroundColor: theme.accent.green }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h2
              className="mb-6"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 500,
                color: "#FFFFFF",
              }}
            >
              Ваши бонусы за раннюю подписку
            </h2>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                badge: "Сейчас",
                badgeColor: "#4CAF50",
                title: "PDF-гайд",
                description:
                  "«7 скрытых рисков при покупке земли» — сразу на почту",
              },
              {
                badge: "При запуске",
                badgeColor: "#2196F3",
                title: "Персональная подборка",
                description:
                  "Лоты в вашем регионе по вашим критериям",
              },
              {
                badge: "Эксклюзив",
                badgeColor: "#FF9800",
                title: "Бесплатный анализ участка",
                description:
                  "Полный анализ одного участка на выбор, для первых 100 подписчиков",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: "rgba(255,255,255,0.95)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs mb-4"
                  style={{
                    backgroundColor: card.badgeColor,
                    color: "#FFFFFF",
                    fontWeight: 600,
                  }}
                >
                  {card.badge}
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: theme.text.primary,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    color: theme.text.secondary,
                    lineHeight: "1.6",
                    fontSize: "0.875rem",
                  }}
                >
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Guarantees - One Line */}
          <div className="text-center mb-12">
            <div
              className="flex items-center justify-center gap-6 flex-wrap"
              style={{
                color: "#FFFFFF",
                fontSize: "1rem",
              }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Без спама</span>
              </div>
              <span style={{ opacity: 0.5 }}>·</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>1-2 письма до запуска</span>
              </div>
              <span style={{ opacity: 0.5 }}>·</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Отписка в один клик</span>
              </div>
            </div>
          </div>

          {/* Launch Date */}
          <div className="text-center mb-8">
            <div
              className="inline-block px-5 py-2.5 rounded-full"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <p
                style={{
                  color: "#FFFFFF",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                Запуск — весна 2026
              </p>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="text-center">
            <h3
              className="mb-6"
              style={{
                fontSize: "1.5rem",
                fontWeight: 500,
                color: "#FFFFFF",
              }}
            >
              Получите ранний доступ
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-4"
            >
              <Input
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.95)",
                  border: "none",
                  color: "#1A1A1A",
                }}
              />
              <Button
                type="submit"
                className="px-8 py-4 rounded-xl transition-all hover:opacity-90"
                style={{
                  backgroundColor: "#1A1A1A",
                  color: "#FFFFFF",
                  border: "none",
                }}
              >
                Подписаться
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-6 py-16"
        style={{ backgroundColor: theme.bg.secondary }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div
            className="grid gap-12 mb-12"
            style={{
              gridTemplateColumns:
                window.innerWidth >= 768
                  ? "2fr 1fr 1fr 1fr"
                  : "1fr",
            }}
          >
            {/* Logo and Description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <LogoVariant2
                  className="w-10 h-10"
                  style={{
                    color: theme.accent.green,
                  }}
                />
                <span
                  style={{
                    color: theme.text.primary,
                    fontSize: "1.125rem",
                    fontWeight: 600,
                  }}
                >
                  zemscan.ru
                </span>
              </div>
              <p
                className="text-sm"
                style={{
                  color: theme.text.muted,
                  lineHeight: "1.6",
                }}
              >
                Профессиональная оценка земельных участков на
                основе ИИ-технологий
              </p>
            </div>

            {/* Продукт */}
            <div>
              <h4
                className="mb-4"
                style={{
                  color: theme.text.primary,
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                }}
              >
                Продукт
              </h4>
              <ul className="space-y-3">
                {[
                  { text: "Возможности", href: "#features" },
                  { text: "Тарифы", href: "#pricing" },
                  {
                    text: "Примеры отчётов",
                    href: "#examples",
                  },
                  { text: "API", href: "#api" },
                ].map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-70"
                      style={{ color: theme.text.secondary }}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Компания */}
            <div>
              <h4
                className="mb-4"
                style={{
                  color: theme.text.primary,
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                }}
              >
                Компания
              </h4>
              <ul className="space-y-3">
                {[
                  { text: "О нас", href: "#about" },
                  { text: "Блог", href: "#blog" },
                  { text: "Контакты", href: "#contacts" },
                  { text: "Вакансии", href: "#careers" },
                ].map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-70"
                      style={{ color: theme.text.secondary }}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Поддержка */}
            <div>
              <h4
                className="mb-4"
                style={{
                  color: theme.text.primary,
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                }}
              >
                Поддержка
              </h4>
              <ul className="space-y-3">
                {[
                  { text: "Помощь", href: "#help" },
                  { text: "Документация", href: "#docs" },
                  {
                    text: "info@zemscan.ru",
                    href: "mailto:info@zemscan.ru",
                  },
                ].map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-70"
                      style={{ color: theme.text.secondary }}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderColor: theme.border }}
          >
            <p
              className="text-sm"
              style={{ color: theme.text.muted }}
            >
              © 2025 zemscan | Wasteland Tech
            </p>

            <a
              href="https://t.me/zemscan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{ color: theme.accent.green }}
            >
              <Send className="w-5 h-5" />
              <span>Telegram-канал</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}