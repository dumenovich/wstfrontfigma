import { CheckCircle2, Mail, Clock, Gift, Lock, ArrowLeft, Sparkles, Rocket, ExternalLink, Users } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface ThankYouProps {
  email: string;
  onBack?: () => void;
}

export default function ThankYou({ email, onBack }: ThankYouProps) {
  // Генерируем случайное число подписчиков в диапазоне 180-320
  const subscribersCount = Math.floor(Math.random() * (320 - 180 + 1)) + 180;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Кнопка "Назад" */}
          {onBack && (
            <button
              onClick={onBack}
              className="mb-8 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Вернуться на главную</span>
            </button>
          )}

          {/* Заголовок с иконкой успеха */}
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-green-500/30 blur-2xl rounded-full animate-pulse" />
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg shadow-green-500/50">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="mb-4 text-white">
              Отлично! Проверьте почту
            </h1>
            <p className="text-blue-200 max-w-2xl mx-auto mb-6">
              Мы отправили письмо на <span className="text-cyan-400">{email}</span>
            </p>

            {/* CTA Button - Открыть почту */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                onClick={() => window.open(`https://mail.google.com`, '_blank')}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0 h-12 px-8 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
              >
                <Mail className="w-4 h-4 mr-2" />
                Открыть почту
              </Button>
              <p className="text-blue-300/70 text-sm">
                Письмо должно прийти в течение 2 минут
              </p>
            </div>

            {/* Social Proof - Counter */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm">
              <Users className="w-5 h-5 text-purple-300" />
              <p className="text-purple-200">
                Вы один из первых <span className="text-white">{subscribersCount}</span> подписчиков
              </p>
            </div>
          </div>

          {/* Блок 1: PDF гайд - УВЕЛИЧЕННЫЙ И ЯРКИЙ */}
          <Card className="group relative bg-gradient-to-br from-blue-500/25 to-cyan-600/20 backdrop-blur-md border-blue-400/40 p-10 mb-8 hover:border-blue-400/60 transition-all overflow-hidden shadow-2xl shadow-blue-500/20">
            {/* Strong Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-cyan-500/20 opacity-50 group-hover:opacity-70 transition-opacity" />
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl" />
            
            <div className="relative flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/50 text-3xl">
                📥
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-white">
                    Ваш бесплатный гайд уже в письме!
                  </h3>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30 whitespace-nowrap">
                    Прямо сейчас
                  </Badge>
                </div>
                <p className="text-blue-100 mb-4">
                  <strong>«Как не переплатить за землю: 7 скрытых рисков лотов на торгах»</strong>
                </p>
                <div className="bg-white/10 border border-white/20 rounded-lg p-5 backdrop-blur-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-blue-50">
                      📄 PDF, 12 страниц практических советов
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-blue-50">
                      ✅ Чек-лист на последней странице — сохраните и используйте при каждом просмотре
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Блок 2: Что будет при запуске - УПРОЩЕННЫЙ */}
          <Card className="group relative bg-gradient-to-br from-cyan-500/15 to-cyan-600/10 backdrop-blur-md border-cyan-500/30 p-8 mb-6 hover:border-cyan-400/50 transition-all overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white">
                    🚀 Запуск — февраль 2026
                  </h3>
                  <p className="text-blue-300">С первого дня вы получите:</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0 mt-2" />
                  <p className="text-blue-100">
                    <strong className="text-white">Персональный мониторинг</strong> — только лоты по вашим критериям
                  </p>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0 mt-2" />
                  <p className="text-blue-100">
                    <strong className="text-white">Автоматическая оценка</strong> — без ручных расчётов
                  </p>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0 mt-2" />
                  <p className="text-blue-100">
                    <strong className="text-white">Уведомления в Telegram</strong> — мгновенно о новых лотах
                  </p>
                </div>
              </div>

              {/* Бонус основателя */}
              <div className="relative mt-6 p-5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-purple-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white mb-2">🎁 Бонус основателя</h4>
                    <p className="text-purple-100">
                      Первые 500 подписчиков получат <strong className="text-white">3 месяца оценки бесплатно</strong>. 
                      Промокод придёт в январе.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Блок 3: Timeline - УПРОЩЕННЫЙ (2 этапа) */}
          <Card className="group relative bg-gradient-to-br from-purple-500/15 to-purple-600/10 backdrop-blur-md border-purple-500/30 p-8 mb-6 hover:border-purple-400/50 transition-all overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white mb-2">
                  ⏳ Что дальше?
                </h3>
              </div>
            </div>

            {/* Horizontal Timeline для desktop */}
            <div className="relative hidden md:block">
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50 flex items-center justify-center text-white">
                      1
                    </div>
                    <div className="flex-1 h-0.5 bg-purple-400/30" />
                  </div>
                  <h4 className="text-white mb-2">Январь 2026</h4>
                  <p className="text-blue-200">
                    Демо-отчёт + промокод на 3 месяца бесплатно
                  </p>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-1 h-0.5 bg-purple-400/30" />
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg shadow-green-400/50 flex items-center justify-center text-white">
                      2
                    </div>
                  </div>
                  <h4 className="text-white mb-2">Февраль 2026</h4>
                  <p className="text-blue-200">
                    <strong className="text-white">Старт платформы. Вы — в числе первых!</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Vertical Timeline для mobile */}
            <div className="relative md:hidden space-y-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50 flex items-center justify-center text-white">
                    1
                  </div>
                  <div className="w-0.5 h-full bg-purple-400/30 mt-2" />
                </div>
                <div className="pb-6 flex-1">
                  <h4 className="text-white mb-1">Январь 2026</h4>
                  <p className="text-blue-200">
                    Демо-отчёт + промокод на 3 месяца бесплатно
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg shadow-green-400/50 flex items-center justify-center text-white">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-1">Февраль 2026</h4>
                  <p className="text-blue-200">
                    <strong className="text-white">Старт платформы. Вы — в числе первых!</strong>
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Блок 4: Гарантия прозрачности - УПРОЩЕННЫЙ */}
          <Card className="group relative bg-gradient-to-br from-green-500/15 to-green-600/10 backdrop-blur-md border-green-500/30 p-8 mb-10 hover:border-green-400/50 transition-all overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white mb-4">
                  🔒 Никакого спама
                </h3>
                <div className="space-y-2">
                  <p className="text-blue-200 flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Только уведомления о лотах под ваш запрос</span>
                  </p>
                  <p className="text-blue-200 flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>1-2 полезных письма до запуска</span>
                  </p>
                  <p className="text-blue-200 flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Отписаться можно в 1 клик</span>
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Персональная благодарность от команды */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-2xl blur-xl" />
            
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-500/30 mb-4">
                  <Sparkles className="w-8 h-8 text-cyan-400" />
                </div>
              </div>
              
              <p className="text-blue-100 mb-4 max-w-2xl mx-auto">
                Спасибо, что доверяете нам и верите в прозрачность земельного рынка. 
                Мы делаем zemscan для вас — чтобы каждый мог найти честную сделку.
              </p>
              
              <div className="flex items-center justify-center gap-3">
                <div className="w-px h-8 bg-white/10" />
                <div className="text-left">
                  <p className="text-blue-300 text-sm">С уважением,</p>
                  <p className="text-white">Команда zemscan</p>
                </div>
              </div>
            </div>
          </div>

          {/* P.S. про входящие */}
          <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg backdrop-blur-sm">
            <p className="text-yellow-200 text-center">
              <strong>P.S.</strong> Добавьте{" "}
              <span className="text-yellow-100 font-mono">hello@zemscan.ru</span> в контакты, 
              чтобы письма точно попали в «Входящие», а не в спам.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}