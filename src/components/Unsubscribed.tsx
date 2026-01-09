import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Info,
  HelpCircle,
  AlertTriangle,
  XCircle,
  ArrowLeft,
  Mail,
} from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "motion/react";
import { LogoVariant2 } from "./LogoVariants";

interface UnsubscribedProps {
  previewStatus?: string;
  onBack?: () => void;
}

export default function Unsubscribed({ previewStatus, onBack }: UnsubscribedProps) {
  const [scrollY, setScrollY] = useState(0);

  // Get status from URL using native JavaScript instead of useSearchParams
  const urlParams = new URLSearchParams(window.location.search);
  const urlStatus = urlParams.get("status");
  
  // Use preview status if provided, otherwise use URL status
  const status = previewStatus || urlStatus;

  // Запрет индексации поисковиками
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  // Track scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const theme = {
    accent: {
      green: "#5C7820",
      darkGreen: "#3D4D21",
      olive: "#6D8A28",
      sage: "#7A9D30",
      lightGreen: "#8FB438",
      beige: "#FAFFF2",
      lightGray: "#E8F0D8",
      cream: "#F5FAE8",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#404040",
      muted: "#737373",
    },
    border: "#E0E8D0",
  };

  // Protection from direct access - redirect to main page if no status
  useEffect(() => {
    if (!status) {
      window.location.href = "/";
    }
  }, [status]);

  // If no status, show loading or return null while redirecting
  if (!status) {
    return null;
  }

  const messages = {
    success: {
      title: "Вы успешно отписались",
      text: "Вы больше не будете получать письма от zemscan. Если передумаете — всегда можете подписаться снова на главной странице",
      icon: CheckCircle2,
      iconColor: theme.accent.green,
      glowColor: theme.accent.sage,
    },
    already: {
      title: "Вы уже отписаны",
      text: "Этот email уже был отписан ранее",
      icon: Info,
      iconColor: theme.accent.olive,
      glowColor: theme.accent.lightGreen,
    },
    not_found: {
      title: "Подписка не найдена",
      text: "Возможно, вы уже отписались или ссылка устарела",
      icon: HelpCircle,
      iconColor: "#D97706",
      glowColor: "#FCD34D",
    },
    invalid: {
      title: "Неверная ссылка",
      text: "Ссылка повреждена или неполная",
      icon: AlertTriangle,
      iconColor: "#EA580C",
      glowColor: "#FB923C",
    },
    error: {
      title: "Произошла ошибка",
      text: "Попробуйте позже или напишите нам на info@zemscan.ru",
      icon: XCircle,
      iconColor: "#DC2626",
      glowColor: "#F87171",
    },
  };

  const msg = messages[status as keyof typeof messages] || messages.error;
  const IconComponent = msg.icon;

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: theme.accent.green }}
    >
      {/* Hero Section with Background */}
      <section className="relative px-6 pt-4 pb-12 min-h-screen overflow-hidden flex flex-col">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://pibig.info/uploads/posts/2023-11/thumbs/1699031559_pibig-info-p-polyana-trava-fon-pinterest-1.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transform: `translateY(${scrollY * 0.3}px) scale(${
              1 + scrollY * 0.0002
            })`,
            willChange: "transform",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.15 }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Dark Overlay */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}
          animate={{ backgroundColor: "rgba(0, 0, 0, 0.30)" }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Gradient overlay for better readability */}
        <div
          className="absolute top-0 left-0 right-0 z-0"
          style={{
            height: "200px",
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.35) 60%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-7xl w-full mx-auto relative z-10">
          {/* Header - Same as Landing Page */}
          <motion.header
            className="py-4 mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between">
              {/* Logo with Text */}
              <a
                href="/"
                className="flex items-center gap-3 transition-opacity hover:opacity-80"
              >
                <LogoVariant2
                  className="w-10 h-10"
                  style={{
                    color: "#FFFFFF",
                    filter:
                      "drop-shadow(0 2px 8px rgba(0,0,0,0.5)) drop-shadow(0 0 20px rgba(255,255,255,0.6)) drop-shadow(0 0 30px rgba(255,255,255,0.4))",
                  }}
                />
                <span
                  style={{
                    color: "#FFFFFF",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                  }}
                >
                  zemscan.ru
                </span>
              </a>

              {/* Back Button */}
              <a
                href="/"
                className="flex items-center gap-2 transition-all group"
                style={{
                  color: "#FFFFFF",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Вернуться на главную</span>
              </a>
            </div>
          </motion.header>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-2xl mx-auto"
          >
            <Card
              className="rounded-3xl p-8 md:p-10 shadow-2xl"
              style={{
                backgroundColor: "#FFFFFF",
                border: `2px solid ${theme.border}`,
              }}
            >
              {/* Icon with Glow Effect */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  {/* Animated glow */}
                  <motion.div
                    className="absolute inset-0 blur-3xl rounded-full"
                    style={{
                      backgroundColor: msg.glowColor,
                    }}
                    initial={{ opacity: 0.3, scale: 0.8 }}
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div
                    className="relative rounded-full shadow-2xl flex items-center justify-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: `linear-gradient(135deg, ${msg.iconColor} 0%, ${msg.glowColor} 100%)`,
                      boxShadow: `0 20px 60px ${msg.iconColor}40`,
                    }}
                  >
                    <IconComponent
                      className="w-10 h-10"
                      style={{ color: "#FFFFFF" }}
                    />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h1
                className="text-center mb-4"
                style={{
                  fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
                  fontWeight: 600,
                  color: theme.text.primary,
                  lineHeight: "1.2",
                }}
              >
                {msg.title}
              </h1>

              {/* Description */}
              <p
                className="text-center mb-8 max-w-md mx-auto"
                style={{
                  fontSize: "1rem",
                  color: theme.text.secondary,
                  lineHeight: "1.6",
                }}
              >
                {msg.text}
              </p>

              {/* Divider */}
              <div
                className="h-px mb-5"
                style={{ backgroundColor: theme.border }}
              />

              {/* Contact Info */}
              <div className="text-center">
                <p
                  className="flex items-center justify-center gap-2"
                  style={{
                    fontSize: "0.875rem",
                    color: theme.text.muted,
                  }}
                >
                  <Mail className="w-4 h-4" />
                  <span>
                    Есть вопросы?{" "}
                    <a
                      href="mailto:info@zemscan.ru"
                      className="transition-colors"
                      style={{
                        color: theme.accent.green,
                        fontWeight: 500,
                      }}
                    >
                      info@zemscan.ru
                    </a>
                  </span>
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}