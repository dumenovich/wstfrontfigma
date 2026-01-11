import { useState } from "react";
import { Send, LogIn, Moon, Sun } from "lucide-react";
import { LogoVariant2 } from "./components/LogoVariants";
import Blog from "./components/Blog";
import Login from "./components/Login";
import { LandingVariants } from "./components/LandingVariants";
import BlogPage from "./pages/Blog";
import ArticlePage from "./pages/Article";
import MapPage from "./pages/Map";
import ThankYou from "./components/ThankYou";
import Unsubscribed from "./components/Unsubscribed";

export default function App() {
  const [showBlogPreview, setShowBlogPreview] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showBlogPage, setShowBlogPage] = useState(false);
  const [showArticle, setShowArticle] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showUnsubscribed, setShowUnsubscribed] = useState(false);
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);
  const [subscribedEmail, setSubscribedEmail] = useState<string>("");
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  // Theme colors
  const theme = isDark
    ? {
        bg: {
          primary: "#0F1419",
          secondary: "#1A1F26",
          card: "#1E2329",
          overlay: "#252A31",
        },
        accent: {
          mint: "#B5EFD8",
          mintLight: "#D4F5E9",
          green: "#0D5F4E",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#E5E7EB",
          muted: "#9CA3AF",
        },
        border: "#2D3339",
      }
    : {
        bg: {
          primary: "#FAFFF2", // TEXT COLOR из палитры - светлый кремово-зеленый фон
          secondary: "#EDF4DB",
          card: "#FFFFFF",
          overlay: "#F5F5F5",
        },
        accent: {
          green: "#5C7820", // Увеличена насыщенность с ~38% до ~60% - более яркий оливковый
          darkGreen: "#3D4D21", // Темнее основного
          olive: "#6D8A28", // Светлее основного с повышенной насыщенностью
          sage: "#7A9D30", // Еще светлее
          lightGreen: "#8FB438", // Очень светлый оливковый
          beige: "#FAFFF2",
          lightGray: "#E8F0D8",
          cream: "#F5FAE8",
          lightMint: "#fcfef9", // Очень светлый для карточек Hero
        },
        text: {
          primary: "#1A1A1A",
          secondary: "#404040",
          muted: "#737373",
        },
        border: "#E0E8D0",
      };

  // Показываем Blog Design Preview
  if (showBlogPreview) {
    return <Blog onBack={() => setShowBlogPreview(false)} />;
  }

  // Показываем страницу журнала
  if (showBlogPage) {
    return (
      <BlogPage
        onBack={() => setShowBlogPage(false)}
        onArticleClick={(postId) => {
          setSelectedArticleId(postId);
          setShowArticle(true);
          setShowBlogPage(false);
        }}
      />
    );
  }

  // Показываем Login
  if (showLogin) {
    return <Login onBack={() => setShowLogin(false)} />;
  }

  // Показываем статью
  if (showArticle && selectedArticleId !== null) {
    return (
      <ArticlePage
        articleId={selectedArticleId}
        onBack={() => {
          setShowArticle(false);
          setShowBlogPage(false);
        }}
        onBackToBlog={() => {
          setShowArticle(false);
          setShowBlogPage(true);
        }}
      />
    );
  }

  // Показываем карту
  if (showMap) {
    return (
      <MapPage
        onBack={() => setShowMap(false)}
        onBlogClick={() => {
          setShowMap(false);
          setShowBlogPage(true);
        }}
      />
    );
  }

  // Показываем страницу благодарности
  if (showThankYou) {
    return (
      <ThankYou 
        email={subscribedEmail || "test@example.com"} 
        onBack={() => {
          setShowThankYou(false);
          setSubscribedEmail("");
        }} 
      />
    );
  }

  // Показываем страницу отписки
  if (showUnsubscribed) {
    return <Unsubscribed previewStatus="success" onBack={() => setShowUnsubscribed(false)} />;
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: theme.bg.primary }}
    >
      {/* Main Content */}
      <LandingVariants
        theme={theme}
        isDark={isDark}
        onLoginClick={() => setShowLogin(true)}
        onBlogClick={() => setShowBlogPage(true)}
        onMapClick={() => setShowMap(true)}
        onThankYouClick={() => setShowThankYou(true)}
        onUnsubscribeClick={() => setShowUnsubscribed(true)}
        toggleTheme={toggleTheme}
        onEmailSubmit={(email) => setSubscribedEmail(email)}
      />
    </div>
  );
}