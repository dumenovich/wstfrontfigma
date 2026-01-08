import {
  CheckCircle2,
  Mail,
  Clock,
  Gift,
  Lock,
  ArrowLeft,
  Sparkles,
  Rocket,
  ExternalLink,
  Users,
  TrendingUp,
  Award,
  FileText,
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { ScrollReveal } from "./ScrollReveal";
import { useState, useEffect } from "react";
import { LogoVariant2 } from "./LogoVariants";

interface ThankYouProps {
  email: string;
  onBack?: () => void;
}

export default function ThankYou({
  email,
  onBack,
}: ThankYouProps) {
  // Генерируем случайное число подписчиков в диапазоне 180-320
  const subscribersCount =
    Math.floor(Math.random() * (320 - 180 + 1)) + 180;
  const [scrollY, setScrollY] = useState(0);

  // Track scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const theme = {
    accent: {
      green: "#5C7820",
      darkGreen: "#3D4D21",
      olive: "#6D8A28",
      sage: "#7A9D30",
      lightGreen: "#8FB438",
      beige: "#FAFFF2",
      lightGray: "#E8F0D8",
      cream: "#F5FAE8",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#404040",
      muted: "#737373",
    },
    border: "#E0E8D0",
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: theme.accent.green }}
    >
      {/* Hero Section with Background */}
      <section className="relative px-6 pt-8 pb-24 overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://pibig.info/uploads/posts/2023-11/thumbs/1699031559_pibig-info-p-polyana-trava-fon-pinterest-1.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0002})`,
            willChange: "transform",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.15 }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Dark Overlay */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}
          animate={{ backgroundColor: "rgba(0, 0, 0, 0.30)" }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Gradient overlay for better readability */}
        <div
          className="absolute top-0 left-0 right-0 z-0"
          style={{
            height: "200px",
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 60%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header - Same as Landing Page */}
          <motion.header
            className="py-4 mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between">
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

              {/* Back Button */}
              {onBack && (
                <button
                  onClick={onBack}
                  className="flex items-center gap-2 transition-all group"
                  style={{
                    color: "#FFFFFF",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                  }}
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span>Вернуться на главную</span>
                </button>
              )}
            </div>
          </motion.header>

          {/* Success Icon */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="relative inline-block mb-8">
              {/* Animated glow */}
              <motion.div
                className="absolute inset-0 blur-3xl rounded-full"
                style={{
                  backgroundColor: theme.accent.lightGreen,
                }}
                initial={{ opacity: 0.3, scale: 0.8 }}
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div
                className="relative inline-flex items-center justify-center rounded-full shadow-2xl"
                style={{
                  width: "96px",
                  height: "96px",
                  background: `linear-gradient(135deg, ${theme.accent.sage} 0%, ${theme.accent.olive} 100%)`,
                  boxShadow: `0 20px 60px rgba(92, 120, 32, 0.4)`,
                }}
              >
                <CheckCircle2
                  className="w-12 h-12"
                  style={{ color: "#FFFFFF" }}
                />
              </div>
            </div>

            <motion.h1
              className="mb-6"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                lineHeight: "1.1",
                fontWeight: 500,
                color: "#FFFFFF",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Отлично! Проверьте почту
            </motion.h1>

            <motion.p
              className="mb-8 max-w-2xl mx-auto"
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.6",
                color: "rgba(255,255,255,0.9)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Мы отправили письмо на{" "}
              <span
                style={{ color: "#FFFFFF", fontWeight: 600 }}
              >
                {email}
              </span>
            </motion.p>

            {/* Social Proof */}
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Users
                className="w-5 h-5"
                style={{ color: "#FFFFFF" }}
              />
              <p
                style={{
                  color: "#FFFFFF",
                  fontSize: "0.9375rem",
                }}
              >
                Вы один из первых{" "}
                <span style={{ fontWeight: 600 }}>
                  {subscribersCount}
                </span>{" "}
                подписчиков
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section
        className="px-6 py-16"
        style={{ backgroundColor: theme.accent.beige }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Stats Grid */}
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  icon: FileText,
                  value: "12 страниц",
                  label: "Практических советов в PDF-гайде",
                },
                {
                  icon: Award,
                  value: "3 месяца",
                  label: "Бесплатного доступа для первых 500",
                },
                {
                  icon: TrendingUp,
                  value: "15+ факторов",
                  label: "Анализа каждого участка",
                },
              ].map((stat, i) => {
                const Icon = stat.icon;
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
                    className="rounded-2xl p-8 text-center"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: `1px solid ${theme.border}`,
                    }}
                  >
                    <motion.div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{
                        backgroundColor: `${theme.accent.green}15`,
                        boxShadow: `0 0 0 1px ${theme.accent.green}20`,
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon
                        className="w-7 h-7"
                        style={{ color: theme.accent.green }}
                      />
                    </motion.div>
                    <div
                      className="mb-2"
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: 600,
                        color: theme.accent.green,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: "0.9375rem",
                        color: theme.text.secondary,
                        lineHeight: "1.4",
                      }}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* PDF Guide Card */}
          <ScrollReveal>
            <div className="relative">
              <div
                className="absolute -top-3 left-8 px-4 py-1.5 rounded-full text-xs z-10"
                style={{
                  backgroundColor: theme.accent.green,
                  color: "#FFFFFF",
                  fontWeight: 600,
                }}
              >
                Доступно сейчас
              </div>
              <Card
                className="group rounded-3xl p-10 mb-8 overflow-hidden shadow-xl hover:shadow-2xl transition-all"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: `2px solid ${theme.accent.green}`,
                }}
              >
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div
                    className="flex-shrink-0 rounded-2xl flex items-center justify-center shadow-lg text-5xl"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: `linear-gradient(135deg, ${theme.accent.sage} 0%, ${theme.accent.olive} 100%)`,
                    }}
                  >
                    📄
                  </div>
                  <div className="flex-1">
                    <h2
                      className="mb-4"
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: 600,
                        color: theme.text.primary,
                        lineHeight: "1.3",
                      }}
                    >
                      Ваш бесплатный гайд уже в письме
                    </h2>
                    <p
                      className="mb-6"
                      style={{
                        fontSize: "1.125rem",
                        color: theme.text.secondary,
                        lineHeight: "1.6",
                      }}
                    >
                      «Как не переплатить за землю: 7 скрытых
                      рисков лотов на торгах»
                    </p>
                    <div
                      className="rounded-xl p-6"
                      style={{
                        backgroundColor: theme.accent.cream,
                        border: `1px solid ${theme.border}`,
                      }}
                    >
                      <div className="space-y-3">
                        {[
                          "12 страниц практических советов от экспертов",
                          "Подробный чек-лист для проверки каждого участка",
                          "Реальные примеры скрытых рисков и как их избежать",
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2
                              className="w-5 h-5 flex-shrink-0 mt-0.5"
                              style={{
                                color: theme.accent.green,
                              }}
                            />
                            <p
                              style={{
                                color: theme.text.primary,
                                lineHeight: "1.6",
                              }}
                            >
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollReveal>

          {/* Launch Timeline */}
          <ScrollReveal delay={0.2}>
            <Card
              className="rounded-3xl p-10 mb-8 overflow-hidden shadow-lg"
              style={{
                backgroundColor: "#FFFFFF",
                border: `1px solid ${theme.border}`,
              }}
            >
              <div className="flex items-start gap-6 mb-8">
                <div
                  className="flex-shrink-0 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    width: "64px",
                    height: "64px",
                    background: `linear-gradient(135deg, ${theme.accent.sage} 0%, ${theme.accent.olive} 100%)`,
                  }}
                >
                  <Rocket
                    className="w-8 h-8"
                    style={{ color: "#FFFFFF" }}
                  />
                </div>
                <div>
                  <h2
                    className="mb-3"
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 600,
                      color: theme.text.primary,
                      lineHeight: "1.3",
                    }}
                  >
                    Что дальше? Дорожная карта
                  </h2>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: theme.text.secondary,
                    }}
                  >
                    Запуск — весна 2026
                  </p>
                </div>
              </div>

              {/* Timeline - Desktop */}
              <div className="hidden md:block">
                <div className="grid grid-cols-3 gap-8">
                  {[
                    {
                      step: "1",
                      date: "Январь 2026",
                      title: "Демо-отчёт",
                      description:
                        "Покажем пример полного анализа участка",
                      color: theme.accent.lightGreen,
                    },
                    {
                      step: "2",
                      date: "Февраль 2026",
                      title: "Промокод",
                      description:
                        "3 месяца бесплатно для первых 500",
                      color: theme.accent.sage,
                    },
                    {
                      step: "3",
                      date: "Март 2026",
                      title: "Старт платформы",
                      description:
                        "Вы — в числе первых пользователей",
                      color: theme.accent.green,
                      highlight: true,
                    },
                  ].map((item, i) => (
                    <div key={i} className="relative">
                      <div className="flex items-center mb-4">
                        <div
                          className="rounded-full flex items-center justify-center font-semibold shadow-lg"
                          style={{
                            width: "48px",
                            height: "48px",
                            backgroundColor: item.color,
                            color: "#FFFFFF",
                          }}
                        >
                          {item.step}
                        </div>
                        {i < 2 && (
                          <div
                            className="flex-1 h-0.5 ml-4"
                            style={{
                              backgroundColor: `${theme.accent.green}30`,
                            }}
                          />
                        )}
                      </div>
                      <h4
                        className="mb-2"
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          color: theme.text.muted,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {item.date}
                      </h4>
                      <h3
                        className="mb-2"
                        style={{
                          fontSize: "1.125rem",
                          fontWeight: 600,
                          color: item.highlight
                            ? theme.accent.green
                            : theme.text.primary,
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.9375rem",
                          color: theme.text.secondary,
                          lineHeight: "1.5",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline - Mobile */}
              <div className="md:hidden space-y-6">
                {[
                  {
                    step: "1",
                    date: "Январь 2026",
                    title: "Демо-отчёт",
                    description:
                      "Покажем пример полного анализа участка",
                    color: theme.accent.lightGreen,
                  },
                  {
                    step: "2",
                    date: "Февраль 2026",
                    title: "Промокод",
                    description:
                      "3 месяца бесплатно для первых 500",
                    color: theme.accent.sage,
                  },
                  {
                    step: "3",
                    date: "Март 2026",
                    title: "Старт платформы",
                    description:
                      "Вы — в числе первых пользователей",
                    color: theme.accent.green,
                    highlight: true,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className="rounded-full flex items-center justify-center font-semibold shadow-lg"
                        style={{
                          width: "48px",
                          height: "48px",
                          backgroundColor: item.color,
                          color: "#FFFFFF",
                        }}
                      >
                        {item.step}
                      </div>
                      {i < 2 && (
                        <div
                          className="w-0.5 flex-1 mt-4"
                          style={{
                            height: "60px",
                            backgroundColor: `${theme.accent.green}30`,
                          }}
                        />
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <h4
                        className="mb-1"
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: theme.text.muted,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {item.date}
                      </h4>
                      <h3
                        className="mb-2"
                        style={{
                          fontSize: "1.125rem",
                          fontWeight: 600,
                          color: item.highlight
                            ? theme.accent.green
                            : theme.text.primary,
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.9375rem",
                          color: theme.text.secondary,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Founder Bonus */}
              <div
                className="mt-8 p-6 rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${theme.accent.green}15 0%, ${theme.accent.sage}10 100%)`,
                  border: `1px solid ${theme.accent.green}30`,
                }}
              >
                <div className="flex items-start gap-4">
                  <Sparkles
                    className="w-6 h-6 flex-shrink-0 mt-1"
                    style={{ color: theme.accent.green }}
                  />
                  <div>
                    <h4
                      className="mb-2"
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: 600,
                        color: theme.accent.green,
                      }}
                    >
                      Бонус основателя
                    </h4>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: theme.text.secondary,
                        lineHeight: "1.6",
                      }}
                    >
                      Первые 500 подписчиков получат{" "}
                      <strong
                        style={{ color: theme.text.primary }}
                      >
                        3 месяца полного доступа бесплатно
                      </strong>
                      . Промокод придёт в январе 2026.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          {/* Platform Features */}
          <ScrollReveal delay={0.3}>
            <Card
              className="rounded-3xl p-10 mb-8 shadow-lg"
              style={{
                backgroundColor: "#FFFFFF",
                border: `1px solid ${theme.border}`,
              }}
            >
              <h2
                className="mb-8"
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 600,
                  color: theme.text.primary,
                }}
              >
                С первого дня вы получите
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Персональный мониторинг",
                    description:
                      "Только лоты, соответствующие вашим критериям поиска",
                  },
                  {
                    title: "Автоматическая оценка",
                    description:
                      "Справедливая цена без ручных расчётов и походов к оценщикам",
                  },
                  {
                    title: "Проверка рисков",
                    description:
                      "Обременения, ЗОУИТ, судебные споры — всё в одном отчёте",
                  },
                  {
                    title: "Уведомления в Telegram",
                    description:
                      "Мгновенные оповещения о новых лотах в вашем регионе",
                  },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl"
                    style={{
                      backgroundColor: theme.accent.cream,
                      border: `1px solid ${theme.border}`,
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                        style={{
                          backgroundColor: theme.accent.green,
                        }}
                      />
                      <div>
                        <h3
                          className="mb-2"
                          style={{
                            fontSize: "1.125rem",
                            fontWeight: 600,
                            color: theme.text.primary,
                          }}
                        >
                          {feature.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "0.9375rem",
                            color: theme.text.secondary,
                            lineHeight: "1.6",
                          }}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </ScrollReveal>

          {/* Privacy Guarantee */}
          <ScrollReveal delay={0.4}>
            <Card
              className="rounded-3xl p-10 mb-10 shadow-lg"
              style={{
                backgroundColor: "#FFFFFF",
                border: `1px solid ${theme.border}`,
              }}
            >
              <div className="flex items-start gap-6">
                <div
                  className="flex-shrink-0 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    width: "64px",
                    height: "64px",
                    background: `linear-gradient(135deg, ${theme.accent.sage} 0%, ${theme.accent.olive} 100%)`,
                  }}
                >
                  <Lock
                    className="w-8 h-8"
                    style={{ color: "#FFFFFF" }}
                  />
                </div>
                <div>
                  <h2
                    className="mb-6"
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 600,
                      color: theme.text.primary,
                    }}
                  >
                    Никакого спама
                  </h2>
                  <div className="space-y-3">
                    {[
                      "Только уведомления о лотах под ваш запрос",
                      "1-2 полезных письма до запуска платформы",
                      "Отписаться можно в один клик в любой момент",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2
                          className="w-5 h-5 flex-shrink-0 mt-0.5"
                          style={{ color: theme.accent.green }}
                        />
                        <p
                          style={{
                            fontSize: "1rem",
                            color: theme.text.secondary,
                            lineHeight: "1.6",
                          }}
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          {/* Thank You Message */}
          <ScrollReveal delay={0.5}>
            <div
              className="rounded-3xl p-10 text-center shadow-lg"
              style={{
                backgroundColor: "#FFFFFF",
                border: `1px solid ${theme.border}`,
              }}
            >
              <div
                className="inline-flex items-center justify-center rounded-full mb-6"
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: `${theme.accent.green}15`,
                  border: `1px solid ${theme.accent.green}30`,
                }}
              >
                <Sparkles
                  className="w-10 h-10"
                  style={{ color: theme.accent.green }}
                />
              </div>

              <p
                className="mb-6 max-w-2xl mx-auto"
                style={{
                  fontSize: "1.125rem",
                  color: theme.text.secondary,
                  lineHeight: "1.7",
                }}
              >
                Спасибо, что доверяете нам и верите в
                прозрачность земельного рынка. Мы делаем zemscan
                для вас — чтобы каждый мог найти честную сделку.
              </p>

              <div className="flex items-center justify-center gap-4">
                <div
                  className="w-px h-12"
                  style={{ backgroundColor: theme.border }}
                />
                <div className="text-left">
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: theme.text.muted,
                      marginBottom: "4px",
                    }}
                  >
                    С уважением,
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: theme.text.primary,
                    }}
                  >
                    Команда zemscan
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* P.S. Email Tip */}
          <div
            className="mt-8 p-6 rounded-2xl backdrop-blur-sm text-center"
            style={{
              backgroundColor: "#FFB84D15",
              border: "1px solid #FFB84D30",
            }}
          >
            <p
              style={{
                color: "#B8860B",
                fontSize: "0.9375rem",
              }}
            >
              <strong>P.S.</strong> Добавьте{" "}
              <span
                style={{
                  fontFamily: "monospace",
                  fontWeight: 600,
                  color: "#CC8800",
                }}
              >
                hello@zemscan.ru
              </span>{" "}
              в контакты, чтобы письма точно попали в
              «Входящие», а не в спам.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}