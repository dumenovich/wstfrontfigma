import { ArrowLeft, Download, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

// Встраиваем HTML напрямую в компонент с исправленными шрифтами
const EMAIL_HTML = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Добро пожаловать в zemscan</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0f172a;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%); padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #1e293b; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5); border: 1px solid rgba(59, 130, 246, 0.2); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <tr>
            <td style="background: linear-gradient(135deg, #1e40af 0%, #0891b2 100%); padding: 48px 40px; text-align: center; position: relative;">
              <h1 style="margin: 0 0 12px 0; color: #ffffff; font-size: 32px; font-weight: 600; letter-spacing: -0.5px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                Готово! Вы подписаны
              </h1>
              <p style="margin: 0; color: #dbeafe; font-size: 18px; font-weight: 400; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                Добро пожаловать в zemscan
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%); border-radius: 12px; margin-bottom: 32px; border: 2px solid rgba(6, 182, 212, 0.3); overflow: hidden; box-shadow: 0 8px 24px rgba(6, 182, 212, 0.2);">
                <tr>
                  <td style="padding: 28px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width: 64px; vertical-align: top;">
                          <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);">
                            <span style="font-size: 28px; line-height: 56px; display: block; text-align: center;">📥</span>
                          </div>
                        </td>
                        <td style="vertical-align: top; padding-left: 16px;">
                          <h2 style="margin: 0 0 8px 0; color: #ffffff; font-size: 22px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                            Ваш бесплатный гайд
                          </h2>
                          <p style="margin: 0 0 16px 0; color: #67e8f9; font-size: 17px; font-weight: 600; line-height: 1.4; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                            «Как не переплатить за землю: 7 скрытых рисков лотов на торгах»
                          </p>
                        </td>
                      </tr>
                    </table>
                    <table width="100%" cellpadding="0" cellspacing="0" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; margin-top: 16px;">
                      <tr>
                        <td style="padding: 20px;">
                          <p style="margin: 0 0 12px 0; color: #e0f2fe; font-size: 15px; line-height: 1.5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                            ✓ 📄 PDF прикреплён к этому письму — 12 страниц практических советов
                          </p>
                          <p style="margin: 0; color: #e0f2fe; font-size: 15px; line-height: 1.5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                            ✓ Чек-лист на последней странице — используйте при каждом просмотре лота
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <h2 style="margin: 0 0 20px 0; color: #ffffff; font-size: 26px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                🚀 zemscan запустится в феврале 2026
              </h2>
              <p style="margin: 0 0 20px 0; color: #cbd5e1; font-size: 16px; line-height: 1.6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                С первого дня вы получите:
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
                <tr>
                  <td style="padding-bottom: 16px;">
                    <p style="margin: 0; color: #e0f2fe; font-size: 15px; line-height: 1.6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                      • <strong style="color: #ffffff;">🔔 Персональный мониторинг</strong><br>&nbsp;&nbsp;Только лоты в выбранных регионах и по вашим критериям
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 16px;">
                    <p style="margin: 0; color: #e0f2fe; font-size: 15px; line-height: 1.6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                      • <strong style="color: #ffffff;">📊 Автоматическая оценка рыночной стоимости</strong><br>&nbsp;&nbsp;Без ручных расчётов и сомнений
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="margin: 0; color: #e0f2fe; font-size: 15px; line-height: 1.6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                      • <strong style="color: #ffffff;">📲 Уведомления в Telegram или email</strong><br>&nbsp;&nbsp;Мгновенно, как только появится выгодный лот
                    </p>
                  </td>
                </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(236, 72, 153, 0.1) 100%); border-radius: 12px; margin-bottom: 32px; border: 2px solid rgba(168, 85, 247, 0.3); padding: 24px;">
                <tr>
                  <td>
                    <h3 style="margin: 0 0 10px 0; color: #ffffff; font-size: 20px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                      ✨ 🎁 Бонус основателя
                    </h3>
                    <p style="margin: 0; color: #e9d5ff; font-size: 15px; line-height: 1.6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                      Первые 500 подписчиков получат <strong style="color: #ffffff;">3 месяца оценки бесплатно</strong> — промокод придёт отдельным письмом в январе.
                    </p>
                  </td>
                </tr>
              </table>
              <h3 style="margin: 0 0 24px 0; color: #ffffff; font-size: 22px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                ⏳ Что дальше?
              </h3>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
                <tr>
                  <td style="padding-bottom: 20px;">
                    <p style="margin: 0 0 4px 0; color: #06b6d4; font-weight: 600; font-size: 15px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                      → Январь 2026
                    </p>
                    <p style="margin: 0; color: #94a3b8; font-size: 14px; line-height: 1.5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                      Демо-отчёт + промокод на 3 месяца бесплатно
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="margin: 0 0 4px 0; color: #06b6d4; font-weight: 600; font-size: 15px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                      → Февраль 2026
                    </p>
                    <p style="margin: 0; color: #ffffff; font-size: 15px; line-height: 1.5; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                      Старт платформы. Вы — в числе первых.
                    </p>
                  </td>
                </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%); border-radius: 10px; margin-bottom: 32px; border: 1px solid rgba(16, 185, 129, 0.2); padding: 24px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 12px 0; color: #ffffff; font-size: 16px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                      🔒 Никакого спама
                    </p>
                    <p style="margin: 0 0 12px 0; color: #cbd5e1; font-size: 14px; line-height: 1.6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                      Только:
                    </p>
                    <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 14px; line-height: 1.5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                      ✓ Уведомления о лотах под ваш запрос
                    </p>
                    <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 14px; line-height: 1.5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                      ✓ Отчёты по запросу
                    </p>
                    <p style="margin: 0; color: #94a3b8; font-size: 14px; line-height: 1.5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                      ✓ 1–2 письма до запуска с полезными материалами
                    </p>
                  </td>
                </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0" style="text-align: center; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 20px 0;">
                    <p style="margin: 0 0 16px 0; color: #cbd5e1; font-size: 15px; line-height: 1.6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                      Спасибо, что верите в прозрачность рынка земли.<br>
                      Мы делаем zemscan для вас — чтобы каждый мог найти честную сделку.
                    </p>
                    <p style="margin: 0; color: #94a3b8; font-size: 15px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                      С уважением,<br>
                      <strong style="color: #ffffff;">Команда zemscan</strong>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color: #0f172a; padding: 32px 40px; text-align: center; border-top: 1px solid rgba(59, 130, 246, 0.2);">
              <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, rgba(234, 179, 8, 0.1) 0%, rgba(202, 138, 4, 0.05) 100%); border-radius: 8px; padding: 16px; border: 1px solid rgba(234, 179, 8, 0.2); margin-bottom: 20px;">
                <tr>
                  <td>
                    <p style="margin: 0; color: #fde047; font-size: 14px; line-height: 1.6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                      <strong>P.S.</strong> Добавьте <span style="background: rgba(234, 179, 8, 0.1); padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', monospace;">info@zemscan.ru</span> в контакты,<br>
                      чтобы наши письма точно попадали в «Входящие»
                    </p>
                  </td>
                </tr>
              </table>
              <p style="margin: 0 0 12px 0; color: #64748b; font-size: 13px; line-height: 1.5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                Вы получили это письмо, потому что подписались на рассылку zemscan.ru
              </p>
              <p style="margin: 0; color: #475569; font-size: 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                <a href="mailto:info@zemscan.ru?subject=Отписаться" style="color: #64748b; text-decoration: none; border-bottom: 1px solid rgba(100, 116, 139, 0.3); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  Отписаться от рассылки
                </a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

export default function EmailPreview() {
  const handleDownload = () => {
    const blob = new Blob([EMAIL_HTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "zemscan-welcome-email.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyHtml = () => {
    navigator.clipboard.writeText(EMAIL_HTML);
    alert("HTML скопирован в буфер обмена!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group mb-6"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Вернуться на главную</span>
            </a>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="mb-2 text-white">Предпросмотр Email-шаблона</h1>
                <p className="text-blue-300">
                  Приветственное письмо для подписчиков zemscan.ru
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Mail className="w-3 h-3 mr-1" />
                  Готово к отправке
                </Badge>
                <Button
                  onClick={handleCopyHtml}
                  variant="outline"
                  className="bg-white/5 border-white/20 text-white hover:bg-white/10"
                >
                  Копировать HTML
                </Button>
                <Button
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0 shadow-lg shadow-cyan-500/30"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Скачать
                </Button>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-md border border-blue-500/20 rounded-lg p-4">
              <p className="text-blue-300 text-sm mb-1">Email адрес</p>
              <p className="text-white font-mono">info@zemscan.ru</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur-md border border-cyan-500/20 rounded-lg p-4">
              <p className="text-cyan-300 text-sm mb-1">Тема письма</p>
              <p className="text-white">Добро пожаловать в zemscan</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-md border border-purple-500/20 rounded-lg p-4">
              <p className="text-purple-300 text-sm mb-1">Вложение</p>
              <p className="text-white">7-рисков-земельных-торгов.pdf</p>
            </div>
          </div>

          {/* Email Preview */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-white">Предпросмотр</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    const iframe = document.querySelector(
                      "#email-preview"
                    ) as HTMLIFrameElement;
                    if (iframe) {
                      iframe.style.width = "375px";
                    }
                  }}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-blue-300 text-sm hover:bg-white/10 transition-colors"
                >
                  📱 Mobile
                </button>
                <button
                  onClick={() => {
                    const iframe = document.querySelector(
                      "#email-preview"
                    ) as HTMLIFrameElement;
                    if (iframe) {
                      iframe.style.width = "100%";
                    }
                  }}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-blue-300 text-sm hover:bg-white/10 transition-colors"
                >
                  💻 Desktop
                </button>
              </div>
            </div>

            {/* iframe для отображения HTML */}
            <div className="bg-white rounded-lg overflow-hidden shadow-xl">
              <iframe
                id="email-preview"
                srcDoc={EMAIL_HTML}
                className="w-full border-0 transition-all duration-300 mx-auto block"
                style={{ height: "800px", maxWidth: "100%" }}
                title="Email Preview"
              />
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-6 bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-md border border-yellow-500/20 rounded-lg p-6">
            <h3 className="text-white mb-4 flex items-center gap-2">
              💡 Как использовать этот шаблон
            </h3>
            <div className="space-y-3 text-blue-200">
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 flex-shrink-0">1.</span>
                <p>
                  <strong className="text-white">Скачайте файл</strong> через
                  кнопку "Скачать" выше
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 flex-shrink-0">2.</span>
                <p>
                  <strong className="text-white">
                    Загрузите в email-сервис
                  </strong>{" "}
                  (Mailchimp, SendGrid, Gmail, и т.д.)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 flex-shrink-0">3.</span>
                <p>
                  <strong className="text-white">
                    Прикрепите PDF-файл
                  </strong>{" "}
                  с гайдом "7 скрытых рисков при покупке земли на торгах"
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 flex-shrink-0">4.</span>
                <p>
                  <strong className="text-white">
                    Протестируйте отправку
                  </strong>{" "}
                  на свой email перед массовой рассылкой
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
