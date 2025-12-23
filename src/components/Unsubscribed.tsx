import { useEffect } from 'react';
import { CheckCircle2, Info, HelpCircle, AlertTriangle, XCircle, ArrowLeft } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface UnsubscribedProps {
  previewStatus?: string;
  onBack?: () => void;
}

export default function Unsubscribed({ previewStatus, onBack }: UnsubscribedProps) {
  const status = previewStatus;

  // Запрет индексации поисковиками
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  // Если нет статуса и нет previewStatus, показываем ошибку
  if (!status) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-white text-2xl mb-4">Страница не найдена</h1>
          <Button asChild className="bg-gradient-to-r from-cyan-500 to-blue-500">
            <a href="/">На главную</a>
          </Button>
        </div>
      </div>
    );
  }

  const messages = {
    success: {
      title: 'Вы успешно отписались',
      text: 'Вы больше не будете получать письма от zemscan. Если передумаете — всегда можете подписаться снова на главной странице.',
      icon: CheckCircle2,
      iconColor: 'text-green-400',
      glowColor: 'bg-green-500/30'
    },
    already: {
      title: 'Вы уже отписаны',
      text: 'Этот email уже был отписан ранее.',
      icon: Info,
      iconColor: 'text-blue-400',
      glowColor: 'bg-blue-500/30'
    },
    not_found: {
      title: 'Подписка не найдена',
      text: 'Возможно, вы уже отписались или ссылка устарела.',
      icon: HelpCircle,
      iconColor: 'text-yellow-400',
      glowColor: 'bg-yellow-500/30'
    },
    invalid: {
      title: 'Неверная ссылка',
      text: 'Ссылка для отписки повреждена или неполная.',
      icon: AlertTriangle,
      iconColor: 'text-orange-400',
      glowColor: 'bg-orange-500/30'
    },
    error: {
      title: 'Произошла ошибка',
      text: 'Попробуйте позже или напишите нам на info@zemscan.ru',
      icon: XCircle,
      iconColor: 'text-red-400',
      glowColor: 'bg-red-500/30'
    }
  };

  const msg = messages[status as keyof typeof messages] || messages.error;
  const IconComponent = msg.icon;

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

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md w-full">
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

          <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8">
            {/* Иконка с эффектом свечения */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className={`absolute inset-0 ${msg.glowColor} blur-2xl rounded-full animate-pulse`} />
                <div className="relative bg-white/10 rounded-full p-4">
                  <IconComponent className={`w-12 h-12 ${msg.iconColor}`} />
                </div>
              </div>
            </div>

            {/* Заголовок */}
            <h1 className="text-2xl text-white text-center mb-4">
              {msg.title}
            </h1>

            {/* Текст */}
            <p className="text-slate-300 text-center mb-8 leading-relaxed">
              {msg.text}
            </p>

            {/* Кнопка на главную */}
            <div className="flex justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8"
              >
                <a href="/">
                  На главную
                </a>
              </Button>
            </div>
          </Card>

          {/* Контактная информация */}
          <div className="mt-6 text-center">
            <p className="text-slate-400 text-sm">
              Есть вопросы?{' '}
              <a 
                href="mailto:info@zemscan.ru" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                info@zemscan.ru
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}