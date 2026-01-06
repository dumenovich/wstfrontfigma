import { ArrowLeft, Clock, Calendar, Share2, ArrowRight } from "lucide-react";
import { LogoVariant2 } from "@/components/LogoVariants";
import { mockPosts } from "./Blog";

type Props = {
  articleId: number;
  onBack: () => void;
  onBackToBlog: () => void;
};

export default function Article({ articleId, onBack, onBackToBlog }: Props) {
  const post = mockPosts.find((p) => p.id === articleId);

  if (!post) {
    return <div>Article not found</div>;
  }

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

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.cream }}>
      {/* Header */}
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
                <button
                  onClick={onBackToBlog}
                  className="transition-opacity hover:opacity-70"
                  style={{
                    color: `${colors.green}DD`,
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                  }}
                >
                  Журнал
                </button>
              </div>
            </div>

            {/* Right - Contact */}
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
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-6 pt-8">
          <button
            onClick={onBackToBlog}
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
            style={{ color: `${colors.green}CC` }}
          >
            <ArrowLeft className="w-4 h-4" />
            Все статьи
          </button>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-6 py-8 md:py-12">
          {/* Category Badge */}
          <div
            className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase mb-6"
            style={{
              backgroundColor: categoryColors[post.category],
              color: "#FFFFFF",
            }}
          >
            {post.category}
          </div>

          {/* Title */}
          <h1
            className="mb-6"
            style={{
              color: colors.green,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-6 pb-8 mb-8" style={{ borderBottom: `1px solid ${colors.border}` }}>
            <div
              className="flex items-center gap-4 text-sm"
              style={{ color: `${colors.green}99` }}
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString("ru-RU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div
            className="relative rounded-2xl overflow-hidden mb-12"
            style={{ aspectRatio: "16/9" }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none"
            style={{ color: `${colors.green}DD` }}
          >
            {/* Lead paragraph */}
            <p
              className="text-xl mb-8"
              style={{
                color: colors.green,
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              {post.description}
            </p>

            {/* Content sections */}
            <h2
              className="mt-12 mb-6"
              style={{
                color: colors.green,
                fontSize: "1.75rem",
                fontWeight: 600,
              }}
            >
              Почему это важно
            </h2>
            
            <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
              При покупке земельных участков на торгах многие инвесторы сталкиваются с непредвиденными рисками, 
              которые могут существенно повлиять на рентабельность сделки. Знание этих подводных камней позволяет 
              избежать серьезных финансовых потерь и юридических проблем.
            </p>

            <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
              По статистике, около 40% сделок с земельными участками на аукционах сталкиваются с теми или иными 
              проблемами после покупки. Это связано как с недостаточной проверкой объекта, так и с особенностями 
              законодательства в области земельных отношений.
            </p>

            <h2
              className="mt-12 mb-6"
              style={{
                color: colors.green,
                fontSize: "1.75rem",
                fontWeight: 600,
              }}
            >
              Основные категории рисков
            </h2>

            <h3
              className="mt-8 mb-4"
              style={{
                color: colors.green,
                fontSize: "1.375rem",
                fontWeight: 600,
              }}
            >
              1. Юридические риски
            </h3>

            <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Юридическая чистота участка — это первое, на что следует обратить внимание. Проблемы могут возникнуть 
              с правом собственности, наличием обременений, арестов или судебных споров. Важно проверить всю 
              историю сделок с участком и убедиться в отсутствии претензий третьих лиц.
            </p>

            <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: "0.75rem", lineHeight: 1.8 }}>
                Проверка выписки из ЕГРН на наличие обременений
              </li>
              <li style={{ marginBottom: "0.75rem", lineHeight: 1.8 }}>
                Анализ истории переходов права собственности
              </li>
              <li style={{ marginBottom: "0.75rem", lineHeight: 1.8 }}>
                Изучение судебной практики по данному участку
              </li>
              <li style={{ marginBottom: "0.75rem", lineHeight: 1.8 }}>
                Проверка наличия арендаторов и их прав
              </li>
            </ul>

            <h3
              className="mt-8 mb-4"
              style={{
                color: colors.green,
                fontSize: "1.375rem",
                fontWeight: 600,
              }}
            >
              2. Градостроительные ограничения
            </h3>

            <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Не менее важны градостроительные нормы и ограничения. Участок может находиться в зоне с особыми 
              условиями использования территории (ЗОУИТ), что значительно ограничивает возможности его 
              застройки и использования.
            </p>

            <div
              className="p-6 rounded-xl my-8"
              style={{
                backgroundColor: colors.lightCream,
                borderLeft: `4px solid ${colors.lightGreen}`,
              }}
            >
              <p
                className="font-semibold mb-2"
                style={{ color: colors.green }}
              >
                💡 Совет эксперта
              </p>
              <p style={{ lineHeight: 1.7, color: `${colors.green}DD` }}>
                Всегда запрашивайте градостроительный план земельного участка (ГПЗУ) до участия в торгах. 
                Этот документ покажет все ограничения и возможности застройки, что критически важно для 
                оценки инвестиционной привлекательности.
              </p>
            </div>

            <h3
              className="mt-8 mb-4"
              style={{
                color: colors.green,
                fontSize: "1.375rem",
                fontWeight: 600,
              }}
            >
              3. Экологические факторы
            </h3>

            <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Эколог��ческое состояние участка может потребовать значительных дополнительных инвестиций. 
              Загрязнение почвы, близость к промышленным объектам, наличие охранных зон — все это нужно 
              учитывать при оценке стоимости участка.
            </p>

            <h2
              className="mt-12 mb-6"
              style={{
                color: colors.green,
                fontSize: "1.75rem",
                fontWeight: 600,
              }}
            >
              Практические рекомендации
            </h2>

            <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Чтобы минимизировать риски, следуйте следующему чек-листу перед участием в торгах:
            </p>

            <ol style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: "0.75rem", lineHeight: 1.8 }}>
                Закажите полную выписку из ЕГРН с историей переходов
              </li>
              <li style={{ marginBottom: "0.75rem", lineHeight: 1.8 }}>
                Получите ГПЗУ и проверьте разрешенное использование
              </li>
              <li style={{ marginBottom: "0.75rem", lineHeight: 1.8 }}>
                Проведите визуальный осмотр участка и окрестностей
              </li>
              <li style={{ marginBottom: "0.75rem", lineHeight: 1.8 }}>
                Проверьте наличие коммуникаций и возможность подключения
              </li>
              <li style={{ marginBottom: "0.75rem", lineHeight: 1.8 }}>
                Изучите рыночную стоимость аналогичных участков в районе
              </li>
            </ol>

            <h2
              className="mt-12 mb-6"
              style={{
                color: colors.green,
                fontSize: "1.75rem",
                fontWeight: 600,
              }}
            >
              Заключение
            </h2>

            <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Тщательная проверка земельного участка перед покупкой на торгах — это не просто рекомендация, 
              а необходимость для успешной инвестиции. Потраченное время на due diligence многократно окупается 
              отсутствием проблем в будущем и возможностью реализовать весь потенциал приобретенного актива.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              Используйте современные сервисы мониторинга торгов и анализа рисков, чтобы принимать 
              взвешенные решения и находить действительно выгодные предложения на рынке земельных участков.
            </p>
          </div>

          {/* Share Section */}
          <div
            className="flex items-center justify-between mt-12 pt-8"
            style={{ borderTop: `1px solid ${colors.border}` }}
          >
            <button
              className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: colors.green }}
            >
              <Share2 className="w-4 h-4" />
              Поделиться статьей
            </button>

            <button
              onClick={onBackToBlog}
              className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: colors.green }}
            >
              Все статьи
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </article>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-6 pb-16">
          <div
            className="relative rounded-3xl p-10 md:p-14 text-center overflow-hidden"
            style={{
              backgroundColor: colors.lightGreen,
            }}
          >
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
                Начните мониторить торги прямо сейчас
              </h3>

              <p
                className="mb-8 max-w-2xl mx-auto leading-relaxed"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "1rem",
                }}
              >
                Подпишитесь на уведомления о новых лотах и получите доступ 
                к эксклюзивным материалам по анализу земельных участков
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
                Попробовать бесплатно
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="px-6 py-12"
        style={{ backgroundColor: colors.lightCream }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-8 flex-wrap">
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
              <span style={{ opacity: 0.5, lineHeight: "1" }}>·</span>

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