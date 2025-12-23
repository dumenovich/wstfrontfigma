import { useState } from 'react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { LogoVariant2 } from './LogoVariants';
import { BookOpen, Home, ArrowLeft, Newspaper, FileText } from 'lucide-react';

interface HeaderVariantsPreviewProps {
  onBack: () => void;
  onSelectVariant: (variant: number) => void;
}

export default function HeaderVariantsPreview({ onBack, onSelectVariant }: HeaderVariantsPreviewProps) {
  const [hoveredVariant, setHoveredVariant] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="fixed inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10">
        {/* Top Nav */}
        <div className="border-b border-white/10 backdrop-blur-xl bg-slate-950/50">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Вернуться на главную</span>
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-12 text-center">
            <h1 className="text-4xl text-white mb-4">Выберите стиль навигации</h1>
            <p className="text-slate-300">Кликните на вариант, чтобы применить его</p>
          </div>

          <div className="space-y-8">
            {/* ВАРИАНТ 1: С иконками и подчеркиванием (Medium style) */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8">
              <div className="mb-6">
                <h3 className="text-2xl text-white mb-2">Вариант 1: С иконками + подчеркивание</h3>
                <p className="text-slate-400">Как в Medium, Substack - минималистично и понятно</p>
                <div className="mt-2 flex gap-2">
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Рекомендую</Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Профессионально</Badge>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-lg border border-white/10 overflow-hidden">
                <header className="border-b border-white/10 backdrop-blur-lg bg-white/5">
                  <div className="px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                      <div className="flex items-center gap-2">
                        <LogoVariant2 className="w-8 h-8" />
                        <span className="text-white">zemscan.ru</span>
                      </div>
                      
                      <nav className="flex items-center gap-6">
                        <button className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group">
                          <Home className="w-4 h-4" />
                          <span>Главная</span>
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 scale-x-100 group-hover:scale-x-100 transition-transform" />
                        </button>
                        <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors relative group">
                          <BookOpen className="w-4 h-4" />
                          <span>Блог</span>
                          <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-cyan-400" />
                        </button>
                      </nav>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="hidden md:flex flex-col items-end gap-0.5">
                        <span className="text-blue-400/70 text-xs">Вопросы и предложения:</span>
                        <a href="mailto:info@zemscan.ru" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          info@zemscan.ru
                        </a>
                      </div>
                      <div className="h-8 w-px bg-white/10 hidden md:block" />
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Скоро запуск</Badge>
                    </div>
                  </div>
                </header>
              </div>

              <button
                onClick={() => onSelectVariant(1)}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all"
              >
                Применить этот вариант
              </button>
            </Card>

            {/* ВАРИАНТ 2: С разделителями (классический) */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8">
              <div className="mb-6">
                <h3 className="text-2xl text-white mb-2">Вариант 2: Классический с разделителями</h3>
                <p className="text-slate-400">Четкое разделение зон навигации</p>
                <div className="mt-2 flex gap-2">
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Структурировано</Badge>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-lg border border-white/10 overflow-hidden">
                <header className="border-b border-white/10 backdrop-blur-lg bg-white/5">
                  <div className="px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <LogoVariant2 className="w-8 h-8" />
                        <span className="text-white">zemscan.ru</span>
                      </div>
                      
                      <div className="h-8 w-px bg-white/10" />
                      
                      <nav className="flex items-center gap-4">
                        <a href="#" className="text-slate-300 hover:text-white transition-colors">
                          Главная
                        </a>
                        <span className="text-white/20">•</span>
                        <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          Блог
                        </a>
                      </nav>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="hidden md:flex flex-col items-end gap-0.5">
                        <span className="text-blue-400/70 text-xs">Вопросы и предложения:</span>
                        <a href="mailto:info@zemscan.ru" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          info@zemscan.ru
                        </a>
                      </div>
                      <div className="h-8 w-px bg-white/10 hidden md:block" />
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Скоро запуск</Badge>
                    </div>
                  </div>
                </header>
              </div>

              <button
                onClick={() => onSelectVariant(2)}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all"
              >
                Применить этот вариант
              </button>
            </Card>

            {/* ВАРИАНТ 3: С бейджем "Новое" */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8">
              <div className="mb-6">
                <h3 className="text-2xl text-white mb-2">Вариант 3: С акцентным бейджем</h3>
                <p className="text-slate-400">Привлекает внимание к новому разделу</p>
                <div className="mt-2 flex gap-2">
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">Для MVP</Badge>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-lg border border-white/10 overflow-hidden">
                <header className="border-b border-white/10 backdrop-blur-lg bg-white/5">
                  <div className="px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <LogoVariant2 className="w-8 h-8" />
                        <span className="text-white">zemscan.ru</span>
                      </div>
                      
                      <div className="h-8 w-px bg-white/10" />
                      
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-400 hover:border-cyan-500/50 transition-all group">
                        <Newspaper className="w-4 h-4" />
                        <span>Блог</span>
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-xs px-2 py-0.5 animate-pulse">
                          Новое
                        </Badge>
                      </button>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="hidden md:flex flex-col items-end gap-0.5">
                        <span className="text-blue-400/70 text-xs">Вопросы и предложения:</span>
                        <a href="mailto:info@zemscan.ru" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          info@zemscan.ru
                        </a>
                      </div>
                      <div className="h-8 w-px bg-white/10 hidden md:block" />
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Скоро запуск</Badge>
                    </div>
                  </div>
                </header>
              </div>

              <button
                onClick={() => onSelectVariant(3)}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all"
              >
                Применить этот вариант
              </button>
            </Card>

            {/* ВАРИАНТ 4: Минималистичный с hover-эффектом */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8">
              <div className="mb-6">
                <h3 className="text-2xl text-white mb-2">Вариант 4: Минималистичный с эффектами</h3>
                <p className="text-slate-400">Простота + выразительные hover-состояния</p>
                <div className="mt-2 flex gap-2">
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Современно</Badge>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-lg border border-white/10 overflow-hidden">
                <header className="border-b border-white/10 backdrop-blur-lg bg-white/5">
                  <div className="px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                      <div className="flex items-center gap-2">
                        <LogoVariant2 className="w-8 h-8" />
                        <span className="text-white">zemscan.ru</span>
                      </div>
                      
                      <nav className="flex items-center gap-1">
                        <a 
                          href="#" 
                          className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                        >
                          Главная
                        </a>
                        <a 
                          href="#" 
                          className="px-4 py-2 rounded-lg text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 transition-all"
                        >
                          Блог
                        </a>
                      </nav>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="hidden md:flex flex-col items-end gap-0.5">
                        <span className="text-blue-400/70 text-xs">Вопросы и предложения:</span>
                        <a href="mailto:info@zemscan.ru" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          info@zemscan.ru
                        </a>
                      </div>
                      <div className="h-8 w-px bg-white/10 hidden md:block" />
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Скоро запуск</Badge>
                    </div>
                  </div>
                </header>
              </div>

              <button
                onClick={() => onSelectVariant(4)}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all"
              >
                Применить этот вариант
              </button>
            </Card>

            {/* ВАРИАНТ 5: Компактный с иконкой */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8">
              <div className="mb-6">
                <h3 className="text-2xl text-white mb-2">Вариант 5: Компактный с иконкой (текущий улучшенный)</h3>
                <p className="text-slate-400">Просто добавляем иконку к текущему варианту</p>
                <div className="mt-2 flex gap-2">
                  <Badge className="bg-slate-500/20 text-slate-300 border-slate-500/30">Простой</Badge>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-lg border border-white/10 overflow-hidden">
                <header className="border-b border-white/10 backdrop-blur-lg bg-white/5">
                  <div className="px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <LogoVariant2 className="w-8 h-8" />
                      <span className="text-white">zemscan.ru</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                        <FileText className="w-4 h-4" />
                        <span>Блог</span>
                      </button>
                      
                      <div className="h-8 w-px bg-white/10 hidden md:block" />
                      
                      <div className="hidden md:flex flex-col items-end gap-0.5">
                        <span className="text-blue-400/70 text-xs">Вопросы и предложения:</span>
                        <a href="mailto:info@zemscan.ru" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          info@zemscan.ru
                        </a>
                      </div>
                      <div className="h-8 w-px bg-white/10 hidden md:block" />
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Скоро запуск</Badge>
                    </div>
                  </div>
                </header>
              </div>

              <button
                onClick={() => onSelectVariant(5)}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all"
              >
                Применить этот вариант
              </button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
