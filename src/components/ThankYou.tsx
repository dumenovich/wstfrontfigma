import { CheckCircle2, Mail, Clock, Gift, Lock, ArrowLeft, Sparkles, Rocket } from "lucide-react";
import { Card } from "./ui/card";
import { LogoVariant2 } from "./LogoVariants";

interface ThankYouProps {
  email: string;
  onBack?: () => void;
}

export default function ThankYou({ email, onBack }: ThankYouProps) {
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
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-green-500/30 blur-2xl rounded-full animate-pulse" />
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg shadow-green-500/50">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="mb-4 text-white">
              Готово! Проверьте почту
            </h1>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Мы отправили письмо на <span className="text-cyan-400">{email}</span>
            </p>
          </div>

          {/* Блок 1: Немедленно - PDF гайд */}
          <Card className="group relative bg-gradient-to-br from-blue-500/15 to-blue-600/10 backdrop-blur-md border-blue-500/30 p-8 mb-6 hover:border-blue-400/50 transition-all overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white mb-2">
                  📥 Бесплатный гайд готов к скачиванию
                </h3>
                <p className="text-blue-200 mb-4">
                  <strong>«Как не переплатить за землю: 7 скрытых рисков лотов на торгах»</strong>
                </p>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-blue-100">
                    📄 PDF, 12 страниц, чек-лист на последней странице — сохраните его, 
                    пригодится уже при первом просмотре лотов.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Блок 2: Что будет при запуске */}
          <Card className="group relative bg-gradient-to-br from-cyan-500/15 to-cyan-600/10 backdrop-blur-md border-cyan-500/30 p-8 mb-6 hover:border-cyan-400/50 transition-all overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white">
                  🚀 zemscan запустится в феврале 2026
                </h3>
              </div>
              <p className="text-blue-200 mb-6">С первого дня вы получите:</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1">🔔 Персональный мониторинг</h4>
                    <p className="text-blue-200">
                      Только лоты в выбранных регионах и по вашим критериям
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1">📊 Автоматическая оценка рыночной стоимости</h4>
                    <p className="text-blue-200">
                      Без ручных расчётов и сомнений
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1">📲 Уведомления в Telegram или email</h4>
                    <p className="text-blue-200">
                      Мгновенно, как только появится выгодный лот
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Бонус основателя */}
            <div className="relative mt-6 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg">
              <div className="flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white mb-2">🎁 Бонус основателя</h4>
                  <p className="text-blue-100">
                    Первые 500 подписчиков получат <strong className="text-white">3 месяца оценки бесплатно</strong> — 
                    промокод придёт отдельным письмом в январе.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Блок 3: Timeline - Что дальше */}
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

            <div className="relative space-y-4">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50" />
                  <div className="w-0.5 h-full bg-purple-400/30 mt-2" />
                </div>
                <div className="pb-6">
                  <h4 className="text-white mb-1">Конец декабря 2025</h4>
                  <p className="text-blue-200">
                    Демо-отчёт по реальному участку (вы сможете проверить любой кадастровый номер)
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50" />
                  <div className="w-0.5 h-full bg-purple-400/30 mt-2" />
                </div>
                <div className="pb-6">
                  <h4 className="text-white mb-1">Январь 2026</h4>
                  <p className="text-blue-200">
                    Финальный анонс + промокод на 3 месяца бесплатно
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Февраль 2026</h4>
                  <p className="text-blue-200">
                    <strong className="text-white">Старт. Вы — в числе первых.</strong>
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Блок 4: Гарантия прозрачности */}
          <Card className="group relative bg-gradient-to-br from-green-500/15 to-green-600/10 backdrop-blur-md border-green-500/30 p-8 mb-8 hover:border-green-400/50 transition-all overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white mb-3">
                  🔒 Мы не будем использовать ваш email для спама
                </h3>
                <div className="space-y-2">
                  <p className="text-blue-200 flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Уведомления о лотах под ваш запрос</span>
                  </p>
                  <p className="text-blue-200 flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Отчёты по запросу</span>
                  </p>
                  <p className="text-blue-200 flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>1–2 письма до запуска с полезными материалами</span>
                  </p>
                </div>
                <p className="text-blue-100 mt-4">
                  Без навязчивости. Отписаться можно в 1 клик, в любой момент.
                </p>
              </div>
            </div>
          </Card>

          {/* Финальный блок - благодарность */}
          <div className="text-center mb-8">
            <p className="text-blue-200 mb-2">
              Спасибо, что верите в прозрачность рынка земли.
            </p>
            <p className="text-blue-400">
              С уважением,<br />
              <strong className="text-white">Команда zemscan</strong>
            </p>
          </div>

          {/* P.S. про входящие */}
          <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg backdrop-blur-sm">
            <p className="text-yellow-200 text-center">
              <strong>P.S.</strong> Не потеряйте письмо — добавьте{" "}
              <span className="text-yellow-100 font-mono">hello@zemscan.ru</span> в контакты, 
              чтобы мы точно попали в «Входящие».
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
