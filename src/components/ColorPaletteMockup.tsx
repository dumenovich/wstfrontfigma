import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Sparkles, Zap, Search, Bell, FileText, X } from "lucide-react";

interface ColorPaletteMockupProps {
  onClose: () => void;
}

type PaletteType = 'slate-lime' | 'charcoal-red' | 'teal-coral' | 'steel-cyan' | 'midnight-yellow' | 'gray-magenta';

const palettes = {
  'slate-lime': {
    name: 'Dark Slate + Lime',
    description: 'Tech / Финтех / Стартап вайб',
    bg: {
      primary: '#0F1419',
      secondary: '#1A1F2E',
      tertiary: '#262D3E',
      card: '#1E2530'
    },
    accent: {
      primary: '#BFFF00',
      secondary: '#9FE500',
      tertiary: '#7ACC00'
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
      muted: 'rgba(255, 255, 255, 0.5)'
    },
    map: {
      opacity: 0.22,
      overlayColor: '#1A2F3F',
      overlayOpacity: 0.75,
      filter: 'grayscale(0.85) contrast(1.4) brightness(0.4) hue-rotate(190deg)'
    },
    mapWidget: {
      opacity: 0.65,
      overlayGradient: 'linear-gradient(to bottom right, rgba(26, 47, 63, 0.6), rgba(15, 20, 25, 0.7))',
      filter: 'grayscale(0.5) contrast(1.2) brightness(0.7) hue-rotate(190deg)'
    }
  },
  'charcoal-red': {
    name: 'Dark Charcoal + Electric Red',
    description: 'Агрессивный / Премиум / Срочность',
    bg: {
      primary: '#0D0D0D',
      secondary: '#1A1A1A',
      tertiary: '#2A2A2A',
      card: '#1C1C1C'
    },
    accent: {
      primary: '#FF3B30',
      secondary: '#E82828',
      tertiary: '#C41E1E'
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
      muted: 'rgba(255, 255, 255, 0.5)'
    },
    map: {
      opacity: 0.25,
      overlayColor: '#1A0A0A',
      overlayOpacity: 0.7,
      filter: 'grayscale(0.9) contrast(1.5) brightness(0.35) hue-rotate(340deg)'
    },
    mapWidget: {
      opacity: 0.7,
      overlayGradient: 'linear-gradient(to bottom right, rgba(26, 10, 10, 0.5), rgba(13, 13, 13, 0.7))',
      filter: 'grayscale(0.6) contrast(1.25) brightness(0.75) hue-rotate(340deg)'
    }
  },
  'teal-coral': {
    name: 'Dark Teal Mono + Coral',
    description: 'Сбалансированный / Профессиональный',
    bg: {
      primary: '#0A1A1A',
      secondary: '#142828',
      tertiary: '#1E3535',
      card: '#152A2A'
    },
    accent: {
      primary: '#FF6B6B',
      secondary: '#FF5252',
      tertiary: '#E84545'
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
      muted: 'rgba(255, 255, 255, 0.5)'
    },
    map: {
      opacity: 0.24,
      overlayColor: '#0F2828',
      overlayOpacity: 0.72,
      filter: 'grayscale(0.75) contrast(1.3) brightness(0.42) hue-rotate(165deg) saturate(0.8)'
    },
    mapWidget: {
      opacity: 0.68,
      overlayGradient: 'linear-gradient(to bottom right, rgba(15, 40, 40, 0.55), rgba(10, 26, 26, 0.7))',
      filter: 'grayscale(0.45) contrast(1.2) brightness(0.72) hue-rotate(165deg) saturate(0.9)'
    }
  },
  'steel-cyan': {
    name: 'Dark Steel + Neon Cyan',
    description: 'Futuristic / Cyberpunk',
    bg: {
      primary: '#0E1117',
      secondary: '#1C1E26',
      tertiary: '#2D313E',
      card: '#1A1D28'
    },
    accent: {
      primary: '#00F0FF',
      secondary: '#00D9E8',
      tertiary: '#00B8C5'
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
      muted: 'rgba(255, 255, 255, 0.5)'
    },
    map: {
      opacity: 0.26,
      overlayColor: '#0A1520',
      overlayOpacity: 0.68,
      filter: 'grayscale(0.7) contrast(1.45) brightness(0.38) hue-rotate(180deg) saturate(1.1)'
    },
    mapWidget: {
      opacity: 0.72,
      overlayGradient: 'linear-gradient(to bottom right, rgba(10, 21, 32, 0.5), rgba(14, 17, 23, 0.7))',
      filter: 'grayscale(0.4) contrast(1.3) brightness(0.8) hue-rotate(180deg) saturate(1.2)'
    }
  },
  'midnight-yellow': {
    name: 'Midnight + Electric Yellow',
    description: 'Контрастны / Вни��ание',
    bg: {
      primary: '#0B0E14',
      secondary: '#161B22',
      tertiary: '#21262D',
      card: '#1A1F26'
    },
    accent: {
      primary: '#FFD600',
      secondary: '#F5C400',
      tertiary: '#E0B000'
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
      muted: 'rgba(255, 255, 255, 0.5)'
    },
    map: {
      opacity: 0.23,
      overlayColor: '#0F1520',
      overlayOpacity: 0.73,
      filter: 'grayscale(0.8) contrast(1.4) brightness(0.4) hue-rotate(200deg) saturate(0.9)'
    },
    mapWidget: {
      opacity: 0.66,
      overlayGradient: 'linear-gradient(to bottom right, rgba(15, 21, 32, 0.55), rgba(11, 14, 20, 0.7))',
      filter: 'grayscale(0.5) contrast(1.25) brightness(0.73) hue-rotate(200deg) saturate(0.95)'
    }
  },
  'gray-magenta': {
    name: 'Dark Gray + Magenta',
    description: 'Классический / Эксклюзивный',
    bg: {
      primary: '#1A1A1A',
      secondary: '#2A2A2A',
      tertiary: '#3A3A3A',
      card: '#2C2C2C'
    },
    accent: {
      primary: '#FF00FF',
      secondary: '#E800E8',
      tertiary: '#C400C4'
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
      muted: 'rgba(255, 255, 255, 0.5)'
    },
    map: {
      opacity: 0.38,
      overlayColor: '#0A0A0A',
      overlayOpacity: 0.35,
      filter: 'grayscale(0.3) contrast(1.15) brightness(0.65) saturate(0.7)'
    },
    mapWidget: {
      opacity: 0.85,
      overlayGradient: 'linear-gradient(to bottom right, rgba(10, 10, 10, 0.25), rgba(26, 26, 26, 0.35))',
      filter: 'grayscale(0.2) contrast(1.1) brightness(0.8) saturate(0.8)'
    }
  }
};

export default function ColorPaletteMockup({ onClose }: ColorPaletteMockupProps) {
  const [selectedPalette, setSelectedPalette] = useState<PaletteType>('slate-lime');
  
  const palette = palettes[selectedPalette];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: palette.bg.primary }}>
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all"
        style={{
          backgroundColor: palette.bg.card,
          border: `1px solid ${palette.accent.primary}40`
        }}
      >
        <X className="w-5 h-5" style={{ color: palette.text.primary }} />
      </button>

      {/* Palette Switcher */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div 
          className="rounded-2xl p-1.5 backdrop-blur-xl shadow-2xl"
          style={{
            backgroundColor: `${palette.bg.card}CC`,
            border: `1px solid ${palette.accent.primary}30`
          }}
        >
          <div className="grid grid-cols-6 gap-1">
            {(Object.keys(palettes) as PaletteType[]).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedPalette(key)}
                className="px-4 py-2 rounded-xl transition-all text-xs whitespace-nowrap"
                style={{
                  backgroundColor: selectedPalette === key ? palette.accent.primary : 'transparent',
                  color: selectedPalette === key ? palette.bg.primary : palette.text.secondary
                }}
              >
                {key === 'slate-lime' && 'Lime'}
                {key === 'charcoal-red' && 'Red'}
                {key === 'teal-coral' && 'Coral'}
                {key === 'steel-cyan' && 'Cyan'}
                {key === 'midnight-yellow' && 'Yellow'}
                {key === 'gray-magenta' && 'Magenta'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient background */}
      <div 
        className="fixed inset-0"
        style={{
          background: `linear-gradient(to bottom right, ${palette.bg.secondary}, ${palette.bg.primary}, ${palette.bg.tertiary})`
        }}
      />

      {/* Glassmorphism circles */}
      <div 
        className="fixed top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full blur-3xl"
        style={{
          background: `linear-gradient(to bottom right, ${palette.accent.primary}20, transparent)`
        }}
      />
      <div 
        className="fixed bottom-[-30%] left-[-15%] w-[900px] h-[900px] rounded-full blur-3xl"
        style={{
          background: `linear-gradient(to top right, ${palette.accent.secondary}15, transparent)`
        }}
      />

      {/* Background map with palette-specific settings */}
      <div 
        className="fixed inset-0"
        style={{
          opacity: palette.map.opacity,
          backgroundImage: `url('https://superomsk.ru/images/uploading/7174db6d6a45f43c13dcf14b50e4e66f.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: palette.map.filter,
          mixBlendMode: 'lighten'
        }}
      />
      
      {/* Map color overlay */}
      <div 
        className="fixed inset-0"
        style={{
          backgroundColor: palette.map.overlayColor,
          opacity: palette.map.overlayOpacity,
          mixBlendMode: 'multiply'
        }}
      />

      {/* Info banner */}
      <div className="fixed bottom-6 left-6 z-50 max-w-sm">
        <div 
          className="rounded-2xl p-4 backdrop-blur-xl shadow-2xl"
          style={{
            backgroundColor: `${palette.bg.card}E6`,
            border: `1px solid ${palette.accent.primary}30`
          }}
        >
          <div className="text-sm mb-1" style={{ color: palette.accent.primary }}>
            {palette.name}
          </div>
          <div className="text-xs" style={{ color: palette.text.muted }}>
            {palette.description}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              {/* Badge */}
              <div className="flex items-center gap-3 mb-8">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    background: `linear-gradient(to bottom right, ${palette.accent.primary}, ${palette.accent.secondary})`,
                    boxShadow: `0 10px 30px ${palette.accent.primary}40`
                  }}
                >
                  <Zap className="w-5 h-5 fill-current" style={{ color: palette.bg.primary }} />
                </div>
                <div 
                  className="inline-flex items-center backdrop-blur-md px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: `${palette.bg.card}CC`,
                    border: `1px solid ${palette.accent.primary}30`,
                    color: palette.text.secondary
                  }}
                >
                  <span className="text-sm">Мониторинг земельных участков</span>
                </div>
              </div>

              {/* Heading */}
              <h1 className="mb-8" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
                <span className="block" style={{ color: palette.text.primary }}>zemscan почти готов.</span>
                <span className="block" style={{ color: palette.text.secondary }}>Сервис не просто находит лоты</span>
                <span className="block" style={{ color: palette.text.primary }}>— он оценивает их.</span>
              </h1>

              <p className="mb-12 text-lg" style={{ color: palette.text.muted }}>
                Автоматический мониторинг аукционных отов, оценка рыночной стоимости и уведомления
              </p>

              {/* Statistics */}
              <div className="flex items-center gap-8 mb-12">
                <div>
                  <div className="text-5xl mb-2" style={{ color: palette.text.primary }}>1200+</div>
                  <div style={{ color: palette.text.muted }}>Участков в базе</div>
                </div>

                <div className="flex items-center gap-3">
                  {[Search, Bell, FileText].map((Icon, idx) => (
                    <div 
                      key={idx}
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer"
                      style={{
                        backgroundColor: `${palette.bg.card}80`,
                        border: `1px solid ${palette.text.primary}20`
                      }}
                    >
                      <Icon className="w-5 h-5" strokeWidth={1} style={{ color: palette.text.muted }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Email Form */}
              <div className="relative max-w-md">
                <div 
                  className="absolute -top-6 -left-6 w-32 h-1 rounded-full blur-sm opacity-70"
                  style={{
                    background: `linear-gradient(to right, ${palette.accent.tertiary}, ${palette.accent.primary})`
                  }}
                />
                
                <div 
                  className="relative backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
                  style={{
                    backgroundColor: `${palette.bg.card}CC`,
                    border: `1px solid ${palette.text.primary}10`
                  }}
                >
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5" style={{ color: palette.accent.primary }} />
                    <p style={{ color: palette.text.primary }}>Получите ранний доступ</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Input
                      type="email"
                      placeholder="Введите ваш email"
                      className="h-12 rounded-2xl"
                      style={{
                        backgroundColor: `${palette.bg.tertiary}80`,
                        border: `1px solid ${palette.text.primary}20`,
                        color: palette.text.primary
                      }}
                    />
                    <Button
                      className="h-12 rounded-2xl shadow-lg transition-all"
                      style={{
                        background: `linear-gradient(to right, ${palette.accent.tertiary}, ${palette.accent.primary})`,
                        color: palette.bg.primary,
                        border: 'none',
                        boxShadow: `0 10px 30px ${palette.accent.primary}40`
                      }}
                    >
                      Подписаться
                    </Button>
                  </div>

                  <p className="text-sm mt-4" style={{ color: palette.text.muted }}>
                    + PDF-гайд по выбору участков сразу после подписки
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Map Preview */}
            <div className="relative h-[600px]">
              <div 
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm"
                style={{
                  backgroundColor: `${palette.bg.card}40`,
                  border: `1px solid ${palette.text.primary}10`
                }}
              >
                {/* Map */}
                <div 
                  className="absolute inset-0"
                  style={{
                    opacity: palette.mapWidget.opacity,
                    backgroundImage: `url('https://delovteste.ru/uploads/posts/2023-09/1693990945_22002.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: palette.mapWidget.filter
                  }}
                />

                {/* Gradient overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: palette.mapWidget.overlayGradient
                  }}
                />

                {/* Pulsating markers */}
                {[
                  { top: '20%', left: '25%' },
                  { top: '45%', left: '60%' },
                  { top: '65%', left: '35%' },
                  { top: '30%', right: '20%' }
                ].map((pos, idx) => (
                  <div key={idx} className="absolute animate-pulse" style={pos}>
                    <div className="relative">
                      <div 
                        className="w-4 h-4 rounded-full shadow-lg"
                        style={{ backgroundColor: palette.accent.primary }}
                      />
                      <div 
                        className="absolute inset-0 w-4 h-4 rounded-full animate-ping opacity-75"
                        style={{ backgroundColor: palette.accent.primary }}
                      />
                    </div>
                  </div>
                ))}

                {/* Feed cards */}
                <div className="absolute top-8 right-8 space-y-3">
                  {[
                    { region: 'Московская обл.', area: '12 соток', price: '2.8 млн ₽', badge: '-35%', badgeColor: 'success' },
                    { region: 'Санкт-Петербург', area: '8 соток', price: '4.2 млн ₽', badge: 'Горячий', badgeColor: 'danger' },
                    { region: 'Краснодарский край', area: '15 соток', price: '3.5 млн ₽', badge: 'Новый', badgeColor: 'info' }
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      className="backdrop-blur-xl rounded-xl p-4 shadow-xl hover:scale-105 transition-transform cursor-pointer w-64"
                      style={{
                        backgroundColor: `${palette.bg.card}E6`,
                        border: `1px solid ${palette.text.primary}20`
                      }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="text-sm mb-1" style={{ color: palette.text.primary }}>{item.region}</div>
                          <div className="text-xs" style={{ color: palette.text.muted }}>{item.area}</div>
                        </div>
                        <div 
                          className="px-2 py-1 rounded-full text-xs"
                          style={{
                            backgroundColor: `${palette.accent.primary}20`,
                            border: `1px solid ${palette.accent.primary}30`,
                            color: palette.accent.primary
                          }}
                        >
                          {item.badge}
                        </div>
                      </div>
                      <div className="text-lg" style={{ color: palette.accent.primary }}>{item.price}</div>
                    </div>
                  ))}
                </div>

                {/* Status indicator */}
                <div className="absolute bottom-6 left-6">
                  <div 
                    className="backdrop-blur-xl rounded-full px-4 py-2 flex items-center gap-2"
                    style={{
                      backgroundColor: `${palette.bg.card}E6`,
                      border: `1px solid ${palette.text.primary}20`
                    }}
                  >
                    <div 
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: palette.accent.primary }}
                    />
                    <span className="text-sm" style={{ color: palette.text.secondary }}>Мониторинг активен</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}