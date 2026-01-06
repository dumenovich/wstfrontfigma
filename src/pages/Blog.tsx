import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Clock,
  ArrowRight,
  Calendar,
  Send,
} from "lucide-react";
import { LogoVariant2 } from "@/components/LogoVariants";

type Props = {
  onBack: () => void;
  onArticleClick: (postId: number) => void;
};

// Моковые данные статей для оценки визуала
export const mockPosts = [
  {
    id: 1,
    title: "7 скрытых рисков лотов на торгах",
    description:
      "Подробный разбор юридических, экологических и финансовых подводных камней при покупке земельных участков на аукционах",
    category: "Риски",
    readTime: "12 мин",
    publishedAt: "2024-12-23",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Чек-лист проверки участка перед покупкой",
    description:
      "Полный список документов и параметров для проверки юридической чистоты участка",
    category: "Гайды",
    readTime: "8 мин",
    publishedAt: "2024-12-20",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    id: 3,
    title: "Топ-5 бесплатных сервисов для проверки земли",
    description:
      "Обзор полезных онлайн-инструментов для проверки участков перед покупкой",
    category: "Инструменты",
    readTime: "6 мин",
    publishedAt: "2024-12-17",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: 4,
    title: "Кейс: как мы нашли участок с ROI 200%",
    description:
      "История успешной покупки земельного участка на торгах с детальным разбором",
    category: "Кейсы",
    readTime: "10 мин",
    publishedAt: "2024-12-13",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: 5,
    title: "Как правильно оценить рыночную стоимость участка",
    description:
      "Методика оценки земельных участков для определения справедливой цены",
    category: "Аналитика",
    readTime: "9 мин",
    publishedAt: "2024-12-10",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
  },
  {
    id: 6,
    title: "Ошибки новичков при участии в торгах",
    description:
      "Разбор типичных ошибок и советы по их избежанию на земельных аукционах",
    category: "Практика",
    readTime: "7 мин",
    publishedAt: "2024-12-05",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
  },
];

export default function Blog({ onBack, onArticleClick }: Props) {
  // Оливково-зеленая цветовая схема
  const colors = {
    green: "#5C7820",
    lightGreen: "#7A9D30",
    cream: "#FAFFF2",
    lightCream: "#F5FAE8",
    border: "#E0E8D0",
  };

  const categoryColors: Record<string, string> = {
    Риски: "#DC2626",
    Гайды: "#7A9D30",
    Инструменты: "#0891B2",
    Кейсы: "#DB2777",
    Аналитика: "#8FB438",
    Практика: "#5C7820",
  };

  const featuredPost = mockPosts.find((post) => post.featured);
  const regularPosts = mockPosts.filter(
    (post) => !post.featured,
  );

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: colors.cream }}
    >
      {/* Header - более контрастный */}
      <header
        className="relative z-10"
        style={{
          borderBottom: `2px solid ${colors.border}`,
          backgroundColor: "#FFFFFF",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            {/* Left - Logo and Navigation */}
            <div className="flex items-center gap-8">
              <button
                onClick={onBack}
                className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
              >
                <LogoVariant2
                  className="w-10 h-10"
                  style={{ color: colors.green }}
                />
                <span
                  style={{
                    color: colors.green,
                    fontWeight: 700,
                    fontSize: "1.0625rem",
                  }}
                >
                  zemscan.ru
                </span>
              </button>

              <div className="hidden md:flex items-center gap-6">
                <button
                  onClick={onBack}
                  className="transition-opacity hover:opacity-70"
                  style={{
                    color: `${colors.green}DD`,
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                  }}
                >
                  Главная
                </button>
                <span
                  style={{
                    color: colors.green,
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                  }}
                >
                  Журнал
                </span>
              </div>
            </div>

            {/* Right - Contact and Badge */}
            <div className="flex items-center gap-6">
              <div className="hidden md:flex flex-col items-end gap-0.5">
                <span
                  className="text-xs"
                  style={{
                    color: `${colors.green}AA`,
                    fontWeight: 500,
                  }}
                >
                  Вопросы и предложения:
                </span>
                <a
                  href="mailto:info@zemscan.ru"
                  className="hover:opacity-80 transition-opacity"
                  style={{
                    color: colors.green,
                    fontWeight: 600,
                    fontSize: "0.875rem",
                  }}
                >
                  info@zemscan.ru
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Title */}
          <div className="mb-12 md:mb-16">
            <h1
              className="mb-4"
              style={{
                color: colors.green,
                fontSize: "clamp(2rem, 4vw, 2.5rem)",
                fontWeight: 500,
                lineHeight: 1.2,
              }}
            >
              Журнал о земельных торгах
            </h1>
            <p
              className="text-lg max-w-3xl"
              style={{
                color: `${colors.green}CC`,
                lineHeight: 1.6,
              }}
            >
              Гайды, аналитика, кейсы и практические советы по
              покупке земельных участков на аукционах
            </p>
          </div>

          {/* Featured Post - большая главная карточка */}
          {featuredPost && (
            <article
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer mb-16"
              style={{
                backgroundColor: "#FFFFFF",
                border: `1px solid ${colors.border}`,
              }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div
                  className="relative h-64 md:h-auto overflow-hidden"
                  style={{
                    backgroundColor: `${colors.green}10`,
                  }}
                >
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to right, transparent 0%, ${colors.green}20 100%)`,
                    }}
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  {/* Category Badge */}
                  <div
                    className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase mb-6 self-start"
                    style={{
                      backgroundColor: `${categoryColors[featuredPost.category]}`,
                      color: "#FFFFFF",
                    }}
                  >
                    {featuredPost.category}
                  </div>

                  {/* Meta Info */}
                  <div
                    className="flex items-center gap-4 text-sm mb-4"
                    style={{ color: `${colors.green}80` }}
                  >
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {new Date(
                        featuredPost.publishedAt,
                      ).toLocaleDateString("ru-RU", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className="mb-4 group-hover:opacity-80 transition-opacity"
                    style={{
                      color: colors.green,
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      fontWeight: 600,
                      lineHeight: 1.2,
                    }}
                  >
                    {featuredPost.title}
                  </h2>

                  {/* Description */}
                  <p
                    className="mb-6"
                    style={{
                      color: `${colors.green}99`,
                      fontSize: "1rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {featuredPost.description}
                  </p>

                  {/* Read More Link */}
                  <button
                    className="inline-flex items-center gap-2 text-base font-semibold transition-all self-start"
                    style={{ color: colors.lightGreen }}
                    onClick={() => onArticleClick(featuredPost.id)}
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      Читать статью
                    </span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          )}

          {/* Section Title */}
          <div className="mb-10 flex items-center gap-6">
            <h2
              style={{
                color: colors.green,
                fontSize: "1.75rem",
                fontWeight: 600,
              }}
            >
              Все статьи
            </h2>
            <div
              className="flex-1 h-px"
              style={{
                backgroundColor: colors.border,
              }}
            />
          </div>

          {/* Regular Posts Grid - небольшие карточки */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {regularPosts.map((post) => {
              return (
                <article
                  key={post.id}
                  className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer flex flex-col"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  {/* Image */}
                  <div
                    className="relative h-48 overflow-hidden flex-shrink-0"
                    style={{
                      backgroundColor: `${colors.green}10`,
                    }}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to top, #FFFFFF, transparent 60%)`,
                        opacity: 0.9,
                      }}
                    />

                    {/* Category Badge - поверх изображения */}
                    <div
                      className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold uppercase"
                      style={{
                        backgroundColor:
                          categoryColors[post.category],
                        color: "#FFFFFF",
                      }}
                    >
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Meta Info */}
                    <div
                      className="flex items-center gap-3 text-xs mb-3"
                      style={{ color: `${colors.green}80` }}
                    >
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                      <span>•</span>
                      <span>
                        {new Date(
                          post.publishedAt,
                        ).toLocaleDateString("ru-RU", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="mb-3 group-hover:opacity-80 transition-opacity"
                      style={{
                        color: colors.green,
                        fontSize: "1.125rem",
                        fontWeight: 600,
                        lineHeight: 1.3,
                      }}
                    >
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="mb-4 line-clamp-2 flex-1"
                      style={{
                        color: `${colors.green}99`,
                        fontSize: "0.875rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {post.description}
                    </p>

                    {/* Read More Link */}
                    <button
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all self-start mt-auto"
                      style={{ color: colors.lightGreen }}
                      onClick={() => onArticleClick(post.id)}
                    >
                      <span className="group-hover:translate-x-1 transition-transform inline-block">
                        Читать
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* CTA Section - в стиле главной страницы */}
          <div
            className="relative rounded-3xl p-10 md:p-14 text-center overflow-hidden"
            style={{
              backgroundColor: colors.lightGreen,
            }}
          >
            {/* Decorative pattern overlay */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `linear-gradient(${colors.green} 1px, transparent 1px),
                                 linear-gradient(90deg, ${colors.green} 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            />

            <div className="relative">
              <h3
                className="mb-4"
                style={{
                  color: "#FFFFFF",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 600,
                }}
              >
                Получайте новые статьи на почту
              </h3>

              <p
                className="mb-8 max-w-2xl mx-auto leading-relaxed"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "1rem",
                }}
              >
                2 раза в неделю — практические гайды, аналитика
                рынка и реальные кейсы покупки земли а торгх.
                Никакого спама, только полезная информация.
              </p>

              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl transition-all hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: colors.green,
                  boxShadow: "0 10px 30px -5px rgba(0,0,0,0.2)",
                }}
              >
                Подписаться на рассылку
                <ArrowRight className="w-5 h-5" />
              </button>

              <p
                className="text-sm mt-6"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                + Бонус: PDF-гайд «7 скрытых рисков при покупке
                земли на торгах» сразу после подписки
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - единообразный с лендингом */}
      <footer
        className="px-6 py-12"
        style={{ backgroundColor: colors.lightCream }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-8 flex-wrap">
            {/* Logo and Title */}
            <div className="flex items-center gap-3">
              <LogoVariant2
                className="w-8 h-8"
                style={{
                  color: colors.green,
                }}
              />
              <div className="flex items-center gap-3">
                <span
                  style={{
                    color: colors.green,
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  zemscan.ru
                </span>

                {/* Vertical Divider */}
                <div
                  style={{
                    width: "1px",
                    height: "24px",
                    backgroundColor: colors.border,
                  }}
                />

                <span
                  style={{
                    color: `${colors.green}CC`,
                    fontSize: "0.9375rem",
                  }}
                >
                  Анализ и оценка земли на торгах
                </span>
              </div>
            </div>

            {/* Links and Copyright */}
            <div
              className="flex items-baseline gap-3 flex-wrap"
              style={{
                color: `${colors.green}CC`,
                fontSize: "0.9375rem",
              }}
            >
              <a
                href="mailto:info@zemscan.ru"
                className="transition-opacity hover:opacity-70"
                style={{
                  color: `${colors.green}CC`,
                  lineHeight: "1",
                }}
              >
                info@zemscan.ru
              </a>
              <span style={{ opacity: 0.5, lineHeight: "1" }}>
                ·
              </span>
              <a
                href="https://t.me/zemscan"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70 inline-flex items-baseline gap-1.5"
                style={{
                  color: `${colors.green}CC`,
                  lineHeight: "1",
                }}
              >
                <Send
                  className="w-3.5 h-3.5"
                  style={{
                    verticalAlign: "baseline",
                    position: "relative",
                    top: "0.15em",
                  }}
                />
                <span>Telegram</span>
              </a>
              <span style={{ opacity: 0.5, lineHeight: "1" }}>
                ·
              </span>

              <span
                style={{
                  color: `${colors.green}99`,
                  fontSize: "0.8125rem",
                  lineHeight: "1",
                }}
              >
                © 2026 zemscan
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}