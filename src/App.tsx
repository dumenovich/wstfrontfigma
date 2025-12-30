import { useState } from "react";
import { Send, LogIn, Moon, Sun } from "lucide-react";
import { LogoVariant2 } from "./components/LogoVariants";
import Blog from "./components/Blog";
import Login from "./components/Login";
import LandingVariants from "./components/LandingVariants";

export default function App() {
  const [showBlogPreview, setShowBlogPreview] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  // Theme colors
  const theme = isDark ? {
    bg: {
      primary: '#0F1419',
      secondary: '#1A1F26',
      card: '#1E2329',
      overlay: '#252A31'
    },
    accent: {
      mint: '#B5EFD8',
      mintLight: '#D4F5E9',
      green: '#0D5F4E'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#E5E7EB',
      muted: '#9CA3AF'
    },
    border: '#2D3339'
  } : {
    bg: {
      primary: '#FAFFF2',      // TEXT COLOR из палитры - светлый кремово-зеленый фон
      secondary: '#F5FAE8',
      card: '#FFFFFF',
      overlay: '#F5F5F5'
    },
    accent: {
      green: '#5C7820',        // Увеличена насыщенность с ~38% до ~60% - более яркий оливковый
      darkGreen: '#3D4D21',    // Темнее основного
      olive: '#6D8A28',        // Светлее основного с повышенной насыщенностью
      sage: '#7A9D30',         // Еще светлее
      lightGreen: '#8FB438',   // Очень светлый оливковый
      beige: '#FAFFF2',        
      lightGray: '#E8F0D8',    
      cream: '#F5FAE8',        
      lightMint: '#fcfef9'     // Очень светлый для карточек Hero
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#404040',
      muted: '#737373'
    },
    border: '#E0E8D0'
  };

  // Показываем Blog Design Preview
  if (showBlogPreview) {
    return <Blog onBack={() => setShowBlogPreview(false)} />;
  }

  // Показываем Login
  if (showLogin) {
    return <Login onBack={() => setShowLogin(false)} />;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.bg.primary }}>
      {/* Main Content */}
      <LandingVariants theme={theme} isDark={isDark} onLoginClick={() => setShowLogin(true)} toggleTheme={toggleTheme} />

      {/* Footer */}
      <footer className="border-t py-12" style={{ backgroundColor: theme.bg.secondary, borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <LogoVariant2 className="w-8 h-8" style={{ color: theme.accent.green }} />
                <span style={{ color: theme.text.primary, fontWeight: 600 }}>zemscan.ru</span>
              </div>
              <p className="text-sm" style={{ color: theme.text.muted }}>
                Профессиональная оценка земельных участков на основе ИИ-технологий
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="mb-4" style={{ color: theme.text.primary, fontWeight: 600 }}>Продукт</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" style={{ color: theme.text.muted }}>Возможности</a></li>
                <li><a href="#" style={{ color: theme.text.muted }}>Тарифы</a></li>
                <li><a href="#" style={{ color: theme.text.muted }}>Примеры отчётов</a></li>
                <li><a href="#" style={{ color: theme.text.muted }}>API</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4" style={{ color: theme.text.primary, fontWeight: 600 }}>Компания</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" style={{ color: theme.text.muted }}>О нас</a></li>
                <li><a href="#" style={{ color: theme.text.muted }}>Блог</a></li>
                <li><a href="#" style={{ color: theme.text.muted }}>Контакты</a></li>
                <li><a href="#" style={{ color: theme.text.muted }}>Вакансии</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="mb-4" style={{ color: theme.text.primary, fontWeight: 600 }}>Поддержка</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" style={{ color: theme.text.muted }}>Помощь</a></li>
                <li><a href="#" style={{ color: theme.text.muted }}>Документация</a></li>
                <li><a href="mailto:info@zemscan.ru" style={{ color: theme.text.muted }}>info@zemscan.ru</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: theme.border }}>
            <p className="text-sm" style={{ color: theme.text.muted }}>
              © 2025 ZemScan. Все права защищены.
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
    </div>
  );
}