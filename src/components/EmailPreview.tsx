import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type EmailPreviewProps = {
  isOpen: boolean;
  onClose: () => void;
  theme: {
    bg: {
      primary: string;
      secondary: string;
      card: string;
      overlay: string;
    };
    accent: {
      green: string;
      darkGreen?: string;
      mint: string;
      mintLight?: string;
      beige?: string;
      lightGray?: string;
      cream?: string;
      lightMint?: string;
    };
    text: {
      primary: string;
      secondary: string;
      muted: string;
    };
    border: string;
  };
};

export function EmailPreview({ isOpen, onClose, theme }: EmailPreviewProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(8px)",
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl"
            style={{
              backgroundColor: theme.bg.secondary,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="sticky top-4 left-full ml-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:opacity-80"
              style={{
                backgroundColor: theme.accent.green,
                color: "#FFFFFF",
              }}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Email Content */}
            <div className="p-8">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  border: `1px solid ${theme.border}`,
                  backgroundColor: theme.bg.card,
                }}
              >
                {/* Header */}
                <div
                  className="px-10 py-12 text-center"
                  style={{
                    background: `linear-gradient(135deg, ${theme.accent.green} 0%, ${theme.accent.green}dd 100%)`,
                  }}
                >
                  <h1
                    className="mb-3"
                    style={{
                      fontSize: "2rem",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    Готово! Вы подписаны
                  </h1>
                  <p
                    style={{
                      fontSize: "1.125rem",
                      color: theme.accent.cream || "#FAFFF2",
                      fontWeight: 400,
                    }}
                  >
                    Добро пожаловать в zemscan
                  </p>
                </div>

                {/* Main Content */}
                <div className="p-10">
                  {/* PDF Guide Block */}
                  <div
                    className="rounded-xl p-7 mb-8"
                    style={{
                      background: `linear-gradient(135deg, ${theme.accent.green}25 0%, ${theme.accent.green}15 100%)`,
                      border: `2px solid ${theme.accent.green}50`,
                    }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${theme.accent.green} 0%, ${theme.accent.green}cc 100%)`,
                          boxShadow: `0 4px 12px ${theme.accent.green}40`,
                        }}
                      >
                        <span style={{ fontSize: "1.75rem" }}>📥</span>
                      </div>
                      <div>
                        <h2
                          className="mb-2"
                          style={{
                            fontSize: "1.375rem",
                            fontWeight: 600,
                            color: theme.text.primary,
                          }}
                        >
                          Ваш бесплатный гайд
                        </h2>
                        <p
                          className="mb-0"
                          style={{
                            color: theme.accent.green,
                            fontSize: "1.0625rem",
                            fontWeight: 600,
                            lineHeight: "1.4",
                          }}
                        >
                          «Как не переплатить за землю: 7 скрытых рисков лотов на торгах»
                        </p>
                      </div>
                    </div>

                    <div
                      className="rounded-lg p-5 mt-4"
                      style={{
                        backgroundColor: `${theme.accent.green}08`,
                        border: `1px solid ${theme.accent.green}20`,
                      }}
                    >
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <span
                            style={{
                              color: theme.accent.green,
                              fontSize: "1.125rem",
                            }}
                          >
                            ✓
                          </span>
                          <p
                            style={{
                              margin: 0,
                              color: theme.text.secondary,
                              fontSize: "0.9375rem",
                              lineHeight: "1.5",
                            }}
                          >
                            📄 PDF прикреплён к этому письму — 23 страницы практических советов
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span
                            style={{
                              color: theme.accent.green,
                              fontSize: "1.125rem",
                            }}
                          >
                            ✓
                          </span>
                          <p
                            style={{
                              margin: 0,
                              color: theme.text.secondary,
                              fontSize: "0.9375rem",
                              lineHeight: "1.5",
                            }}
                          >
                            Чек-лист на последней странице — используйте при каждом просмотре лота
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Launch Info */}
                  <div className="mb-7">
                    <h2
                      className="mb-5"
                      style={{
                        fontSize: "1.625rem",
                        fontWeight: 600,
                        color: theme.text.primary,
                      }}
                    >
                      🚀 zemscan запустится в марте 2026
                    </h2>
                    <p
                      style={{
                        marginBottom: "1.25rem",
                        color: theme.text.secondary,
                        fontSize: "1rem",
                        lineHeight: "1.6",
                      }}
                    >
                      С первого дня вы получите:
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {[
                      {
                        emoji: "🔔",
                        title: "Персональный мониторинг",
                        description:
                          "Только лоты в выбранных регионах и по вашим критериям",
                      },
                      {
                        emoji: "📊",
                        title: "Автоматическая оценка рыночной стоимости",
                        description: "Без ручных расчётов и сомнений",
                      },
                      {
                        emoji: "📲",
                        title: "Уведомления в Telegram или email",
                        description:
                          "Мгновенно, как только появится выгодный лот",
                      },
                    ].map((feature, i) => (
                      <div
                        key={i}
                        className="rounded-lg p-4.5"
                        style={{
                          background: `linear-gradient(135deg, ${theme.accent.green}10 0%, ${theme.accent.green}05 100%)`,
                          border: `1px solid ${theme.accent.green}20`,
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="w-2 h-2 rounded-full shrink-0 mt-2"
                            style={{
                              backgroundColor: theme.accent.green,
                            }}
                          />
                          <div>
                            <p
                              className="mb-1"
                              style={{
                                color: theme.text.primary,
                                fontSize: "0.9375rem",
                                fontWeight: 600,
                                lineHeight: "1.6",
                              }}
                            >
                              {feature.emoji} {feature.title}
                            </p>
                            <p
                              style={{
                                margin: 0,
                                color: theme.text.muted,
                                fontSize: "0.875rem",
                                lineHeight: "1.5",
                              }}
                            >
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Founder Bonus */}
                  <div
                    className="rounded-xl p-6 mb-8"
                    style={{
                      background: `linear-gradient(135deg, ${theme.accent.green}20 0%, ${theme.accent.green}10 100%)`,
                      border: `2px solid ${theme.accent.green}40`,
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <span style={{ fontSize: "1.75rem" }}>✨</span>
                      <div>
                        <h3
                          className="mb-2.5"
                          style={{
                            fontSize: "1.25rem",
                            fontWeight: 600,
                            color: theme.text.primary,
                          }}
                        >
                          🎁 Бонус основателя
                        </h3>
                        <p
                          style={{
                            margin: 0,
                            color: theme.text.secondary,
                            fontSize: "0.9375rem",
                            lineHeight: "1.6",
                          }}
                        >
                          Первые 500 подписчиков получат{" "}
                          <strong style={{ color: theme.text.primary }}>
                            3 месяца оценки бесплатно
                          </strong>{" "}
                          — промокод придёт отдельным письмом в феврале.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="mb-6">
                    <h3
                      className="mb-6"
                      style={{
                        fontSize: "1.375rem",
                        fontWeight: 600,
                        color: theme.text.primary,
                      }}
                    >
                      ⏳ Что дальше?
                    </h3>
                  </div>

                  <div className="space-y-5 mb-8">
                    <div className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${theme.accent.green} 0%, ${theme.accent.green}cc 100%)`,
                          color: "#FFFFFF",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          boxShadow: `0 4px 12px ${theme.accent.green}40`,
                        }}
                      >
                        1
                      </div>
                      <div>
                        <p
                          className="mb-1"
                          style={{
                            color: theme.accent.green,
                            fontWeight: 600,
                            fontSize: "0.9375rem",
                          }}
                        >
                          → Февраль 2026
                        </p>
                        <p
                          style={{
                            margin: 0,
                            color: theme.text.muted,
                            fontSize: "0.875rem",
                            lineHeight: "1.5",
                          }}
                        >
                          Демо-отчёт + промокод на 3 месяца бесплатно
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${theme.accent.green} 0%, ${theme.accent.green}aa 100%)`,
                          color: "#FFFFFF",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          boxShadow: `0 4px 12px ${theme.accent.green}40`,
                        }}
                      >
                        2
                      </div>
                      <div>
                        <p
                          className="mb-1"
                          style={{
                            color: theme.accent.green,
                            fontWeight: 600,
                            fontSize: "0.9375rem",
                          }}
                        >
                          → Март 2026
                        </p>
                        <p
                          style={{
                            margin: 0,
                            color: theme.text.primary,
                            fontSize: "0.9375rem",
                            lineHeight: "1.5",
                            fontWeight: 600,
                          }}
                        >
                          Старт платформы. Вы — в числе первых.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Privacy Block */}
                  <div
                    className="rounded-lg p-6 mb-8"
                    style={{
                      background: `linear-gradient(135deg, ${theme.accent.green}10 0%, ${theme.accent.green}05 100%)`,
                      border: `1px solid ${theme.accent.green}20`,
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <span style={{ fontSize: "1.5rem" }}>🔒</span>
                      <div>
                        <p
                          className="mb-3"
                          style={{
                            color: theme.text.primary,
                            fontSize: "1rem",
                            fontWeight: 600,
                          }}
                        >
                          Никакого спама
                        </p>
                        <p
                          className="mb-3"
                          style={{
                            color: theme.text.secondary,
                            fontSize: "0.875rem",
                            lineHeight: "1.6",
                          }}
                        >
                          Только:
                        </p>
                        <div className="space-y-2">
                          {[
                            "Уведомления о лотах под ваш запрос",
                            "Отчёты по запросу",
                            "1–2 письма до запуска с полезными материалами",
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span
                                style={{
                                  color: theme.accent.green,
                                  fontSize: "1rem",
                                }}
                              >
                                ✓
                              </span>
                              <p
                                style={{
                                  margin: 0,
                                  color: theme.text.muted,
                                  fontSize: "0.875rem",
                                  lineHeight: "1.5",
                                }}
                              >
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Thank You */}
                  <div className="text-center py-5">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{
                        background: `linear-gradient(135deg, ${theme.accent.green}15 0%, ${theme.accent.green}10 100%)`,
                        border: `2px solid ${theme.accent.green}30`,
                      }}
                    >
                      <span style={{ fontSize: "1.5rem" }}>✨</span>
                    </div>
                    <p
                      className="mb-4"
                      style={{
                        color: theme.text.secondary,
                        fontSize: "0.9375rem",
                        lineHeight: "1.6",
                      }}
                    >
                      Спасибо, что верите в прозрачность рынка земли.
                      <br />
                      Мы делаем zemscan для вас — чтобы каждый мог найти честную
                      сделку.
                    </p>
                    <p
                      style={{
                        margin: 0,
                        color: theme.text.muted,
                        fontSize: "0.9375rem",
                      }}
                    >
                      С уважением,
                      <br />
                      <strong style={{ color: theme.text.primary }}>
                        Команда zemscan
                      </strong>
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div
                  className="px-10 py-8 text-center"
                  style={{
                    backgroundColor: theme.bg.secondary,
                    borderTop: `1px solid ${theme.border}`,
                  }}
                >
                  {/* P.S. */}
                  <div
                    className="rounded-lg p-4 mb-5"
                    style={{
                      background: `linear-gradient(135deg, ${theme.accent.green}15 0%, ${theme.accent.green}08 100%)`,
                      border: `1px solid ${theme.accent.green}30`,
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        color: theme.accent.green,
                        fontSize: "0.875rem",
                        lineHeight: "1.6",
                      }}
                    >
                      <strong>P.S.</strong> Добавьте{" "}
                      <span
                        style={{
                          background: `${theme.accent.green}15`,
                          padding: "2px 6px",
                          borderRadius: "4px",
                          fontFamily: "'Courier New', monospace",
                        }}
                      >
                        info@zemscan.ru
                      </span>{" "}
                      в контакты,
                      <br />
                      чтобы наши письма точно попадали в «Входящие»
                    </p>
                  </div>

                  <p
                    className="mb-3"
                    style={{
                      color: theme.text.muted,
                      fontSize: "0.8125rem",
                      lineHeight: "1.5",
                    }}
                  >
                    Вы получили это письмо, потому что подписались на рассылку
                    zemscan.ru
                  </p>
                  <p
                    style={{
                      margin: 0,
                      color: theme.text.muted,
                      fontSize: "0.75rem",
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        color: theme.text.muted,
                        textDecoration: "none",
                        borderBottom: `1px solid ${theme.text.muted}40`,
                      }}
                    >
                      Отписаться от рассылки
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
