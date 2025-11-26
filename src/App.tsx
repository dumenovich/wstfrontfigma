import {
  CheckCircle2,
  MapPin,
  Zap,
  Database,
  TrendingUp,
  BarChart3,
  Bell,
  FileSearch,
  Shapes,
  Building2,
  DollarSign,
  AlertTriangle,
  Ruler,
  Home,
  Search,
  Shield,
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
import { useState } from "react";
import { Card } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";

export default function App() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState(2); // Геометрические блоки земельных участков
  const [showLogoSelector, setShowLogoSelector] =
    useState(false);
  const [showFaviconPreview, setShowFaviconPreview] =
    useState(false); // Скрыто

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setEmail(""), 300);
    }
  };

  const LogoComponent = [
    LogoVariant1,
    LogoVariant2,
    LogoVariant3,
    LogoVariant4,
    LogoVariant5,
    LogoVariant6,
  ][selectedLogo - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-white/5 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LogoComponent className="w-8 h-8" />
            <span className="text-white">zemscan.ru</span>
          </div>
          <div className="flex items-center gap-6">
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

      {/* Logo Selector */}
      {showLogoSelector && (
        <div className="relative z-20 bg-slate-900/95 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="mb-4">
              <h3 className="text-white mb-2">
                Выберите вариант логотипа
              </h3>
              <p className="text-blue-300">
                Кликните на понравившийся вариант
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

      {/* Hero */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="mb-6 text-white">
              zemscan почти готов. Сервис не просто находит лоты
              - он оценивает их.
            </h1>

            <p className="mb-12 text-blue-200 max-w-2xl mx-auto">
              Автоматический мониторинг аукционных лотов, оценка
              рыночной стоимости и уведомления — будут доступны
              с первого дня. ROI-анализ, проверка рисков и
              персональные рекомендации — подключим поэтапно, в
              течение ближайших 2–3 месяцев.
            </p>

            {/* Email Form */}
            {!isSubscribed ? (
              <form
                onSubmit={handleSubscribe}
                className="mb-16"
              >
                <div className="flex gap-3 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Введите ваш email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-md"
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0"
                  >
                    Подписаться
                  </Button>
                </div>
              </form>
            ) : (
              <div className="mb-16 inline-flex items-center gap-3 bg-green-500/20 text-green-300 px-6 py-3 rounded-lg border border-green-500/30">
                <CheckCircle2 className="w-5 h-5" />
                <p>Отлично! Мы сообщим вам о запуске.</p>
              </div>
            )}
          </div>

          {/* What's available from day one */}
          <div className="mb-20 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-white">
                Что будет доступно с первого дня
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-md border-blue-500/20 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl">
                    📡
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      Мониторинг лотов
                    </h4>
                    <p className="text-blue-200">
                      Автоматический сбор данных с ключевых
                      электронных площадок — по всем регионам
                      России. Обновление каждые 15–30 минут.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 backdrop-blur-md border-cyan-500/20 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center text-2xl">
                    💰
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      Базовая оценка стоимости
                    </h4>
                    <p className="text-blue-200">
                      Расчёт рыночной цены и цены переуступки —
                      на основе кадастровой стоимости и
                      аналогов. Доступен для всех лотов.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-md border-purple-500/20 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
                    🔔
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      Уведомления в Telegram
                    </h4>
                    <p className="text-blue-200">
                      Новые лоты приходят с краткой оценкой:
                      цена, площадь, отклонение от рынка.
                      Настройте фильтры — получайте только
                      релевантное.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-md border-green-500/20 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-2xl">
                    🧭
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      Личный кабинет
                    </h4>
                    <p className="text-blue-200">
                      Фильтры по региону, назначению, площади —
                      сохраняются между сессиями. Начните с
                      того, что важно именно вам.
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
                Как мы оцениваем участок
              </h2>
              <p className="text-blue-300">
                Наша модель учитывает более 15 факторов — чтобы
                вы понимали не только «сколько», но и «почему».
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-md border-blue-500/20 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Shapes className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      Геометрия и форма
                    </h4>
                    <p className="text-blue-200">
                      Влияет на стоимость застройки (коэффициент
                      компактности, ориентация)
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 backdrop-blur-md border-cyan-500/20 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      Инфраструктура
                    </h4>
                    <p className="text-blue-200">
                      наличие газа, воды, расстояние до столбов
                      ЛЭП, транспортная доступность, социальные
                      объекты в радиусе
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-md border-purple-500/20 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">Аналоги</h4>
                    <p className="text-blue-200">
                      Цены на актуальные аналоги с
                      корректировкой на площадь и назначение,
                      история сделок
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-md border-green-500/20 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
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

              <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 backdrop-blur-md border-orange-500/20 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      Потенциал застройки
                    </h4>
                    <p className="text-blue-200">
                      Анализируем ПЗЗ: макс. площадь, этажность,
                      плотность
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-red-500/10 to-red-600/10 backdrop-blur-md border-red-500/20 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">Риски</h4>
                    <p className="text-blue-200">
                      Сервитут, ЗОУИТ, геология, риски
                      подтопление, неблагоприятная экология
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* What will be available gradually */}
          <div className="mb-20 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-white">
                Что будет доступно поэтапно — после старта
              </h2>
              <p className="text-blue-200 max-w-3xl mx-auto">
                Мы начинаем с базового функционала — и
                постепенно добавляем новые слои аналитики.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-md border-blue-500/20 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl">
                    📊
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      ROI-анализ
                    </h4>
                    <p className="text-blue-200">
                      Расчёт срока окупаемости и инвестиционного
                      потенциала
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 backdrop-blur-md border-cyan-500/20 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center text-2xl">
                    🛡️
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      Глубокая проверка рисков
                    </h4>
                    <p className="text-blue-200">
                      Проверка по нескольким категориям:
                      юридические ограничения, экология,
                      доступность, геология
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-md border-purple-500/20 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
                    🤖
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      Персональные рекомендации
                    </h4>
                    <p className="text-blue-200">
                      В соответстствии с вашими предпочтениями
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 backdrop-blur-md border-orange-500/20 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-2xl">
                    ⚖️
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      Сравнение участков
                    </h4>
                    <p className="text-blue-200">
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
      <section className="relative z-10 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="mb-8 text-blue-200">
            Оставьте email и получите ранний доступ к платформе
            сразу после запуска
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubscribe}>
              <div className="flex gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-md"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0"
                >
                  Получить доступ
                </Button>
              </div>
            </form>
          ) : (
            <div className="inline-flex items-center gap-3 bg-green-500/20 text-green-300 px-6 py-3 rounded-lg border border-green-500/30">
              <CheckCircle2 className="w-5 h-5" />
              <p>Спасибо! Скоро свяжемся с вами.</p>
            </div>
          )}
        </div>
      </section>

      {/* Favicon Preview - временная секция для демонстрации */}
      {showFaviconPreview && <FaviconPreview />}

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-white/10 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Left - Logo and Description */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full group-hover:bg-cyan-500/30 transition-all" />
                  <LogoComponent className="w-9 h-9 relative z-10" />
                </div>
                <div className="text-white">zemscan.ru</div>
              </div>

              <div className="hidden md:block h-8 w-px bg-white/20" />

              <p className="text-blue-100/70 hidden md:block">
                Аналитика земельного рынка
              </p>
            </div>

            {/* Right - Year */}
            <div className="text-blue-400/60">© 2025</div>
          </div>
        </div>
      </footer>
    </div>
  );
}