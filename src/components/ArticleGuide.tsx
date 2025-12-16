import React from "react";
import { ArrowLeft, Printer, Download } from "lucide-react";
import { Button } from "./ui/button";

export default function ArticleGuide() {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  // Добавляем класс для управления колонтитулом на первой странице
  React.useEffect(() => {
    const handleBeforePrint = () => {
      // При печати добавляем специальный класс
      document.body.classList.add("is-printing");
    };

    const handleAfterPrint = () => {
      document.body.classList.remove("is-printing");
    };

    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);

    return () => {
      window.removeEventListener(
        "beforeprint",
        handleBeforePrint,
      );
      window.removeEventListener(
        "afterprint",
        handleAfterPrint,
      );
    };
  }, []);

  return (
    <div className="min-h-screen bg-white print-wrapper">
      {/* Header - скрывается при печати */}
      <div className="print:hidden sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Вернуться на главную</span>
          </a>
          <div className="flex gap-3">
            <Button
              onClick={handlePrint}
              variant="outline"
              className="border-slate-300"
            >
              <Printer className="w-4 h-4 mr-2" />
              Печать
            </Button>
            <Button
              onClick={handleDownloadPDF}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Download className="w-4 h-4 mr-2" />
              Сохранить PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-6 py-12 print:py-0">
        {/* Title Page */}
        <header className="text-center mb-16 print:mb-12 border-b-2 border-slate-900 pb-12 print:pb-8 print:page-break-after page-first">
          <h1 className="text-4xl print:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Как не переплатить за землю:
            <br />7 скрытых рисков лотов на торгах
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            zemscan.ru — сервис автоматической проверки
            земельных лотов
          </p>
          <div className="inline-block px-6 py-2 border-2 border-slate-300 rounded">
            <p className="text-sm text-slate-500">
              Практическое руководство • 2025
            </p>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-12 print:mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-300">
            Введение
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Покупка земли на торгах — это реальный шанс
              приобрести участок на 30–50% ниже рыночной цены.
              Но за низкой начальной ценой часто скрываются
              проблемы, которые превращают «выгодную покупку» в
              многолетнюю головную боль.
            </p>
            <p>
              Мы проанализировали более 200 000 лотов на торгах
              за последние 2 года и выявили 7 самых
              распространённых рисков, о которых организаторы
              торгов предпочитают молчать.
            </p>
          </div>

          <div className="mt-6 bg-slate-50 border-l-4 border-blue-600 p-6 print:break-inside-avoid">
            <p className="font-semibold text-slate-900 mb-3">
              В этом гайде вы узнаете:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Какие риски встречаются чаще всего</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>
                  Как проверить участок самостоятельно
                  (пошаговые инструкции)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>
                  Какие шаги zemscan автоматизирует, чтобы
                  сэкономить ваше время
                </span>
              </li>
            </ul>
          </div>

          {/* Illustration 1: Documents */}
          <div className="mt-8 mb-4 print:break-inside-avoid">
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm">
              <img
                src="https://riakalm.ru/images/news/2024/september/rosreestr.jpg"
                alt="Документы и проверка участков"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Risk 1 */}
        <section
          className="mb-12 print:mb-8 print:page-break-before"
          data-section-title="Риск 01: Участок в охранной зоне"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl font-bold text-blue-600 flex-shrink-0">
              1
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Участок в охранной зоне
            </h2>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 print:break-inside-avoid">
            <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
              <span>🚨</span> В чём проблема
            </h3>
            <p className="text-slate-700 mb-3">
              Охранные зоны — это территории с ограничениями на
              строительство и использование. Участок может
              находиться:
            </p>
            <ul className="space-y-1.5 text-slate-700 ml-4">
              <li>
                • В водоохранной зоне (нельзя строить ближе
                50–200 м от водоёма)
              </li>
              <li>
                • В санитарно-защитной зоне (рядом с
                производствиями, свалками)
              </li>
              <li>
                • В охранной зоне ЛЭП (линий электропередач)
              </li>
              <li>• В зоне газопровода или нефтепровода</li>
              <li>
                • В приаэродромной территории (ограничения по
                высоте застройки)
              </li>
            </ul>
          </div>

          <div className="mb-6 print:break-inside-avoid">
            <p className="font-semibold text-slate-900 mb-2">
              Последствия:
            </p>
            <ul className="space-y-1.5 text-slate-700 ml-4">
              <li>
                • Невозможность получить разрешение на
                строительство
              </li>
              <li>
                • Требование снести уже возведённые постройки за
                свой счет
              </li>
              <li>
                • Штрафы до 200 000 ₽ для физлиц, без учета
                возмещения ущерба
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 print:break-inside-avoid">
            <div className="running-header">
              Риск 1: Участок в охранной зоне
            </div>
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span> Как проверить самостоятельно
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  1. Публичная кадастровая карта (nspd.gov.ru)
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>
                    • Откройте карту и введите кадастровый номер
                    участка
                  </li>
                  <li>
                    • Включите слой «Зоны с особыми условиями
                    использования территории» (ЗОУИТ)
                  </li>
                  <li>
                    • Проверьте, не попадает ли участок в
                    выделенные зоны
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  2. Градостроительный план земельного участка
                  (ГПЗУ)
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Закажите в МФЦ или через Госуслуги</li>
                  <li>• Срок получения: 14–30 рабочих дней</li>
                  <li>
                    • ГПЗУ содержит: предельные параметры
                    застройки (этажность, плотность, отступы),
                    все зоны с особыми условиями использования
                    (СЗЗ, охранные зоны, водоохранные полосы),
                    красные линии, сервитуты, требования к
                    архитектурному облику зданий
                  </li>
                  <li>
                    • В некоторых случаях в ГПЗУ уже зашиты
                    ограничения, которые делают проект
                    нерентабельным (например, уменьшение
                    полезной площади застройки из-за санитарных
                    разрывов)
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  3. Запрос в Росреестр
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>
                    • Закажите выписку из ЕГРН об объекте
                    недвижимости
                  </li>
                  <li>
                    • В разделе ограничений и обременений
                    указаны зарегистрированные ограничения
                  </li>
                  <li>
                    • Стоимость: 580–2950 ₽, срок: 3–7 рабочих
                    дней
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  4. Запрос в сетевые организации
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>
                    • Для проверки ЛЭП - Местный филиал Россети
                    / МРСК
                  </li>
                  <li>
                    • Газопровод - Газпром газораспределение /
                    Мособлгаз / ...
                  </li>
                  <li>
                    • Тепло - Местная теплоснабжающая
                    организация
                  </li>
                  <li>
                    • Вода/канализация - Местный филиал
                    "Водоканала"
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-300">
              <p className="text-sm text-slate-600">
                ⏱️{" "}
                <strong>
                  Время на самостоятельную проверку:
                </strong>{" "}
                2–4 недели
              </p>
            </div>
          </div>
        </section>

        {/* Risk 2 */}
        <section className="mb-12 print:mb-8 print:page-break-before">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl font-bold text-blue-600 flex-shrink-0">
              2
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Неподходящая категория земли или ВРИ
            </h2>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 print:break-inside-avoid">
            <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
              <span>🚨</span> В чём проблема
            </h3>
            <p className="text-slate-700 mb-3">
              Не на каждом участке можно строить дом. Ключевые
              параметры:
            </p>
            <div className="mb-3">
              <p className="font-semibold text-slate-800 mb-2">
                Категория земли:
              </p>
              <ul className="space-y-1 text-slate-700 ml-4 text-sm">
                <li>
                  • Земли населённых пунктов ✅ — можно строить
                </li>
                <li>
                  • Земли сельхозназначения ⚠️ — ограничения
                </li>
                <li>
                  • Земли лесного фонда ❌ — строить нельзя
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-800 mb-2">
                Вид разрешённого использования (ВРИ):
              </p>
              <ul className="space-y-1 text-slate-700 ml-4 text-sm">
                <li>
                  • ИЖС (индивидуальное жилищное строительство)
                  ✅
                </li>
                <li>
                  • ЛПХ — в границах населённого пункта ✅,
                  полевой ❌
                </li>
                <li>• СНТ/ДНП — ограничения по прописке</li>
                <li>
                  • «Для сельхозпроизводства» ❌ — дом строить
                  нельзя
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-6 print:break-inside-avoid">
            <p className="font-semibold text-slate-900 mb-2">
              Последствия неправильного ВРИ:
            </p>
            <ul className="space-y-1.5 text-slate-700 ml-4">
              <li>• Отказ в разрешении на строительство</li>
              <li>• Невозможность оформить прописку</li>
              <li>
                • Изменение ВРИ стоит от 50 000 ₽ до нескольких
                млн рублей (зависит от региона и кадастровой
                стоимости)
              </li>
              <li>
                • Занимает 3–12 месяцев, иногда изменение ВРИ
                вообще невозможно
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 print:break-inside-avoid">
            <div className="running-header">
              Риск 2: Неподходящая категория земли или ВРИ
            </div>
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span> Как проверить самостоятельно
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  1. Выписка из ЕГРН
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Раздел 1: категория земли и ВРИ</li>
                  <li>
                    • Закажите на rosreestr.gov.ru или через
                    Госуслуги
                  </li>
                  <li>
                    • Стоимость: 580–920 ₽, от 3 до 7 рабочих
                    дней
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  2. Публичная кадастровая карта
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Кликните на участок → «Информация»</li>
                  <li>
                    • Посмотрите поля «Категория» и «Разрешённое
                    использование»
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  3. Правила землепользования и застройки (ПЗЗ)
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>
                    • Найдите на сайте администрации
                    муниципального образования
                  </li>
                  <li>
                    • Определите территориальную зону вашего
                    участка
                  </li>
                  <li>
                    • Посмотрите список основных и условно
                    разрешённых ВРИ
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  4. Запрос в администрацию
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Узнайте, можно ли изменить ВРИ</li>
                  <li>
                    • Сколько это стоит и сколько займёт времени
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-300">
              <p className="text-sm text-slate-600">
                ⏱️{" "}
                <strong>
                  Время на самостоятельную проверку:
                </strong>{" "}
                1–2 недели
              </p>
            </div>
          </div>
        </section>

        {/* Risk 3 */}
        <section className="mb-12 print:mb-8 print:page-break-before">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl font-bold text-blue-600 flex-shrink-0">
              3
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Отсутствие коммуникаций или невозможность
              подключения
            </h2>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 print:break-inside-avoid">
            <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
              <span>🚨</span> В чём проблема
            </h3>
            <p className="text-slate-700 mb-4">
              Земля дешёвая — но к ней нет дороги,
              электричества, газа и воды. Подключение
              коммуникаций может стоить дороже самого участка:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="border border-slate-600 px-4 py-2 text-left">
                      Коммуникация
                    </th>
                    <th className="border border-slate-600 px-4 py-2 text-left">
                      Стоимость подключения
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">
                      Электричество (15 кВт)
                    </td>
                    <td className="border border-slate-300 px-4 py-2">
                      75 000 ₽ — 165 000 ₽*
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">
                      Газ
                    </td>
                    <td className="border border-slate-300 px-4 py-2">
                      бесплатно до границы участка**, внутри 100
                      000 — 300 000 ₽
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">
                      Водопровод
                    </td>
                    <td className="border border-slate-300 px-4 py-2">
                      30 000 — 300 000 ₽
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">
                      Канализация
                    </td>
                    <td className="border border-slate-300 px-4 py-2">
                      50 000 — 500 000 ₽
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">
                      Дорога (100 м грунтовки)
                    </td>
                    <td className="border border-slate-300 px-4 py-2">
                      150 000 — 500 000 ₽
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-slate-600 mt-2">
                * Если ЛЭП дальше 300 м (город) / 500 м (село) —
                за каждый метр платите вы.
              </p>
              <p className="text-xs text-slate-600 mt-2">
                ** По программе социальной газификации, если
                населённый пункт газифицирован.
              </p>
            </div>
          </div>

          <div className="mb-6 print:break-inside-avoid">
            <p className="font-semibold text-slate-900 mb-2">
              Подводные камни:
            </p>
            <ul className="space-y-1.5 text-slate-700 ml-4">
              <li>
                • «Газ рядом» ≠ можно подключиться (нужны
                техусловия)
              </li>
              <li>
                • Социальная газификация работает только в
                газифицированных населённых пунктах — проверьте
                заранее!
              </li>

              <li>
                • «Электричество есть» — но свободной мощности
                может не быть. Наличие сетей поблизости не
                гарантирует наличие свободной мощности для
                подключения
              </li>
              <li>
                • Вода только из скважины, а бурение в этом
                районе стоит 500 000 ₽
              </li>
              <li>
                • Даже при видимых коммуникациях требуется
                официальное подтверждение технической
                возможности подключения
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 print:break-inside-avoid">
            <div className="running-header">
              Риск 3: Отсутствие коммуникаций
            </div>
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span> Как проверить самостоятельно
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  1. Электричество
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>
                    • Определите сетевую организацию района
                    (МРСК, РЭС)
                  </li>
                  <li>
                    • Подайте заявку на получение технических
                    условий
                  </li>
                  <li>
                    • В ТУ будет указано: точка подключения,
                    мощность, стоимость
                  </li>
                  <li>• Срок ответа: 15–30 дней</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  2. Газ
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>
                    • Обратитесь в местную газорапределяющую
                    организацию
                  </li>
                  <li>
                    • Запросите справку о возможности
                    подключения
                  </li>
                  <li>• Получите предварительные техусловия</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  3. Вода
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>
                    • Узнайте, есть ли центральный водопровод (в
                    администрации)
                  </li>
                  <li>
                    • Если нет — найдите буровые компании в
                    районе
                  </li>
                  <li>
                    • Спросите глубину скважин и стоимость
                    бурения
                  </li>
                  <li>• Изучите карту водоносных горизонтов</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  4. Дорога
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>
                    • Проверьте подъезд к участку на карте
                  </li>
                  <li>
                    • Уточните статус дороги (муниципальная,
                    частная, отсутствует)
                  </li>
                  <li>
                    • Если дорога частная — нужен сервитут от
                    соседей
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-300">
              <p className="text-sm text-slate-600">
                ⏱️{" "}
                <strong>
                  Время на самостоятельную проверку:
                </strong>{" "}
                2–4 недели
              </p>
            </div>
          </div>
        </section>

        {/* Risk 4 */}
        <section className="mb-12 print:mb-8 print:page-break-before">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl font-bold text-blue-600 flex-shrink-0">
              4
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Проблемы с границами и соседями
            </h2>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 print:break-inside-avoid">
            <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
              <span>🚨</span> В чём проблема
            </h3>
            <ul className="space-y-1.5 text-slate-700 ml-4">
              <li>
                • Границы не установлены — участок не размежёван
              </li>
              <li>
                • Пересечение границ — соседи по факту занимают
                часть вашей земли
              </li>
              <li>
                • Кадастровая ошибка — координаты в ЕГРН не
                соответствуют реальности
              </li>
              <li>
                • Споры с соседями — судебные тяжбы могут
                длиться годами
              </li>
            </ul>
          </div>

          <div className="mb-6 print:break-inside-avoid">
            <p className="font-semibold text-slate-900 mb-2">
              Последствия:
            </p>
            <ul className="space-y-1.5 text-slate-700 ml-4">
              <li>
                • Невозможно зарегистрировать право
                собственности
              </li>
              <li>• Заборы и постройки придётся переносить</li>
              <li>• Судебные расходы 100 000–500 000 ₽</li>
              <li>• Межевание за ваш счёт: 10 000–50 000 ₽</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 print:break-inside-avoid">
            <div className="running-header">
              Риск 4: Проблемы с границами и соседями
            </div>
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span> Как проверить самостоятельно
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  1. Выписка из ЕГРН
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>
                    • Раздел 3.1 — координаты поворотных точек
                  </li>
                  <li>
                    • Если координат нет — границы не
                    установлены!
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  2. Публичная кадастровая карта
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Проверьте, отображается ли участок</li>
                  <li>
                    • Посмотрите, нет ли наложений с соседними
                    участками
                  </li>
                  <li>
                    • Сравните площадь в документах и на карте
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  3. Выезд на местность
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Обязательно посетите участок</li>
                  <li>
                    • Сравните фактические границы с
                    кадастровыми
                  </li>
                  <li>
                    • Поговорите с соседями о возможных спорах
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  4. Кадастровый инженер
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Закажите вынос границ в натуру</li>
                  <li>• Стоимость: 5 000–15 000 ₽</li>
                  <li>
                    • Инженер установит колышки по координатам
                    ЕГРН
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-300">
              <p className="text-sm text-slate-600">
                ⏱️{" "}
                <strong>
                  Время на самостоятельную проверку:
                </strong>{" "}
                1–2 недели
              </p>
            </div>
          </div>
        </section>

        {/* Illustration 2: Map */}
        <div className="mb-12 print:break-inside-avoid">
          <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm">
            <img
              src="https://www.esri-cis.com/content/dam/distributor-share/esri-cis-ru/home/arcgis/products/topomaps/topomap-100k-s3.png"
              alt="Кадастровая карта и границы участка"
              className="w-full h-56 object-cover"
            />
          </div>
          <p className="text-center text-sm text-slate-500 mt-3 italic">
            Проверка границ и кадастровых данных — критически
            важный этап
          </p>
        </div>

        {/* Risk 5 */}
        <section className="mb-12 print:mb-8 print:page-break-before">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl font-bold text-blue-600 flex-shrink-0">
              5
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Арест, залог или другие обременения
            </h2>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 print:break-inside-avoid">
            <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
              <span>🚨</span> В чём проблема
            </h3>
            <p className="text-slate-700 mb-2">
              Участок может быть:
            </p>
            <ul className="space-y-1.5 text-slate-700 ml-4">
              <li>• Под арестом — по решению суда или ФССП</li>
              <li>• В залоге у банка — ипотека или кредит</li>
              <li>
                • С сервитутом — право прохода/проезда третьих
                лиц
              </li>
              <li>
                • В аренде — действующий договор с арендатором
              </li>
              <li>
                • С правами третьих лиц — наследники, бывшие
                супруги
              </li>
            </ul>
          </div>

          <div className="mb-6 print:break-inside-avoid">
            <p className="font-semibold text-slate-900 mb-2">
              Последствия:
            </p>
            <ul className="space-y-1.5 text-slate-700 ml-4">
              <li>• Сделку могут признать недействительной</li>
              <li>
                • Банк заберёт участок за долги предыдущего
                владельца
              </li>
              <li>
                • Вы обязаны терпеть проход соседей через ваш
                участок
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 print:break-inside-avoid">
            <div className="running-header">
              Риск 5: Арест, залог или другие обременения
            </div>
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span> Как проверить самостоятельно
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  1. Выписка из ЕГРН
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>
                    • Раздел 2 — правообладатель и вид права
                  </li>
                  <li>
                    • Раздел 4 — зарегистрированные ограничения,
                    здесь видны ипотека, аресты, сервитуты
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  2. Проверка в ФССП
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Сайт fssp.gov.ru</li>
                  <li>
                    • Проверьте продавца в банке исполнительных
                    производств
                  </li>
                  <li>
                    • Если есть долги — участок могут арестовать
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  3. Проверка на банкротство
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Сайт ЕФРСБ (bankrot.fedresurs.ru)</li>
                  <li>• Введите ФИО или ИНН продавца</li>
                  <li>
                    • При банкротстве сделку могут оспорить
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  4. Проверка семейного положения
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>
                    • Запросите у продавца нотариальное согласие
                    супруга
                  </li>
                  <li>
                    • Убедитесь, что нет несогласованного
                    раздела имущества
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-300">
              <p className="text-sm text-slate-600">
                ⏱️{" "}
                <strong>
                  Время на самостоятельную проверку:
                </strong>{" "}
                3–7 дней
              </p>
            </div>
          </div>
        </section>

        {/* Risk 6 */}
        <section className="mb-12 print:mb-8 print:page-break-before">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl font-bold text-blue-600 flex-shrink-0">
              6
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Низкая ликвидность и реальная рыночная стоимость
            </h2>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 print:break-inside-avoid">
            <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
              <span>🚨</span> В чём проблема
            </h3>
            <p className="text-slate-700 mb-2">
              Начальная цена на торгах — это не рыночная
              стоимость. Она может быть:
            </p>
            <ul className="space-y-1.5 text-slate-700 ml-4">
              <li>
                • Завышена — для формального соблюдения
                процедуры
              </li>
              <li>
                • Занижена — для привлечения покупателей на
                проблемный участок
              </li>
              <li>• Не учитывает реальный спрос в районе</li>
            </ul>
          </div>

          <div className="mb-6 print:break-inside-avoid">
            <p className="font-semibold text-slate-900 mb-2">
              Подводные камни:
            </p>
            <ul className="space-y-1.5 text-slate-700 ml-4">
              <li>
                • Участок за 100 000 ₽, но аналоги в районе
                стоят 50 000 ₽
              </li>
              <li>
                • «Выгодная» покупка, которую потом невозможно
                продать
              </li>
              <li>
                • Отсутствие инфраструктуры = нет покупателей =
                низкая ликвидность
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 print:break-inside-avoid">
            <div className="running-header">
              Риск 6: Низкая ликвидность и реальная рыночная
              стоимость
            </div>
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span> Как проверить самостоятельно
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  1. Анализ объявлений на Авито и ЦИАН
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>
                    • Найдите похожие участки в том же районе
                  </li>
                  <li>• Сравните цены за сотку</li>
                  <li>
                    • Учитывайте: коммуникации, подъезд,
                    удалённость от города
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  2. Росреестр — сведения о сделках
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>
                    • Выписка «О переходе прав» показывает цены
                    прошлых продаж
                  </li>
                  <li>• Стоимость: 580-920 ₽</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  3. Оценочные компании
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Закажите независимую оценку</li>
                  <li>• Стоимость: 3 000–15 000 ₽</li>
                  <li>• Срок: 3–7 дней</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  4. Анализ инфраструктуры
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>
                    • Расстояние до города, школ, магазинов
                  </li>
                  <li>• Качество дорог, мобильная связь</li>
                  <li>• Планы развития территории (Генплан)</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-300">
              <p className="text-sm text-slate-600">
                ⏱️{" "}
                <strong>
                  Время на самостоятельную проверку:
                </strong>{" "}
                3–7 дней
              </p>
            </div>
          </div>
        </section>

        {/* Risk 7 */}
        <section className="mb-12 print:mb-8 print:page-break-before">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl font-bold text-blue-600 flex-shrink-0">
              7
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Недостоверная информация в извещении о торгах
            </h2>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 print:break-inside-avoid">
            <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
              <span>🚨</span> В чём проблема
            </h3>
            <p className="text-slate-700 mb-2">
              Организаторы торгов не всегда предоставляют полную
              информацию:
            </p>
            <ul className="space-y-1.5 text-slate-700 ml-4">
              <li>• Фото отсутствуют или устаревшие</li>
              <li>• Площадь указана неточно</li>
              <li>• Не упомянуты существенные ограничения</li>
              <li>• Ссылки на документы не работают</li>
              <li>• Контакты для осмотра недоступны</li>
            </ul>
          </div>

          <div className="mb-6 print:break-inside-avoid">
            <p className="font-semibold text-slate-900 mb-2">
              Последствия:
            </p>
            <ul className="space-y-1.5 text-slate-700 ml-4">
              <li>• Покупаете «кота в мешке»</li>
              <li>
                • Реальный участок не соответствует описанию
              </li>
              <li>
                • Вернуть деньги после торгов почти невозможно
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 print:break-inside-avoid">
            <div className="running-header">
              Риск 7: Недостоверная информация в извещении о
              торгах
            </div>
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span> Как проверить самостоятельно
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  1. Изучите все документы лота
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>
                    • Скачайте и прочитайте каждый прикреплённый
                    файл
                  </li>
                  <li>• Сравните данные в разных документах</li>
                  <li>• Ищите несоответствия</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  2. Свяжитесь с организатором
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Задайте вопросы по телефону и email</li>
                  <li>• Попросите дополнительные документы</li>
                  <li>
                    • Запишите ответы (для возможных споров)
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  3. Обязательный осмотр
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Посетите участок лично</li>
                  <li>• Сделайте фото и видео</li>
                  <li>• Отметьте GPS-координаты границ</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">
                  4. Проверьте организатора торгов
                </p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>
                    • Убедитесь в легитимности торговой площадки
                  </li>
                  <li>• Проверьте реквизиты организатора</li>
                  <li>• Изучите отзывы на форумах</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-300">
              <p className="text-sm text-slate-600">
                ⏱️{" "}
                <strong>
                  Время на самостоятельную проверку:
                </strong>{" "}
                3–5 дней
              </p>
            </div>
          </div>
        </section>

        {/* Additional Risks */}
        <section className="mb-12 print:mb-8 print:page-break-before">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-300">
            Дополнительные факторы, о которых забывают
          </h2>

          <p className="text-slate-700 mb-6 leading-relaxed">
            Помимо основных 7 рисков, есть факторы, которые
            могут существенно повлиять на стоимость и сроки
            реализации проекта:
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-6 print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-3">
                🏗️ Кадастровая стоимость
              </h3>
              <p className="text-slate-700 mb-2 text-sm">
                Влияет не только на земельный налог, но и на
                размер арендной платы при аренде у государства.
                Завышенная кадастровая стоимость может
                значительно увеличить ежегодные расходы.
              </p>
              <ul className="space-y-1 text-slate-600 text-sm ml-4">
                <li>
                  • Земельный налог: 0,3% (ИЖС, ЛПХ, сельхоз) —
                  1,5% (прочие)*
                </li>
                <li>
                  • Арендная плата за госземли: 0,3–5% от
                  кадастровой стоимости в год (с 2026 года —
                  единый федеральный порядок)
                </li>
                <li>
                  • Оспаривание кадастровой стоимости: 40 000 —
                  200 000 ₽ (экспертиза + юрист + возможные
                  судебные издержки)
                </li>
                <li>
                  • Оспаривание кадастровой стоимости занимает
                  от 3 до 12 месяцев, с 2026 года правила
                  оспаривания изменятся
                </li>
              </ul>
              <p className="text-xs text-slate-600 mt-2">
                * С 2025 года: для участков дороже 300 млн ₽ —
                1,5% даже для ИЖС
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6 print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-3">
                📐 Площадь и конфигурация участка
              </h3>
              <p className="text-slate-700 mb-2 text-sm">
                Сложная форма или наличие «врезов» может сильно
                сократить полезную площадь под застройку. При
                проектировании это оборачивается лишними
                согласованиями и переработкой генплана.
              </p>
              <ul className="space-y-1 text-slate-600 text-sm ml-4">
                <li>
                  • Узкие участки (соотношение сторон больше
                  1:3) усложняют размещение объектов
                </li>
                <li>
                  • Участки с большим перепадом высот
                  увеличивают стоимость земляных работ на 20–40%
                </li>
                <li>
                  • Неправильная форма может уменьшить полезную
                  площадь застройки на 30–50%
                </li>
                <li>
                  • «Врезы» других собственников делают
                  планирование практически невозможным
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-6 print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-3">
                🌊 Инженерно-геологические условия
              </h3>
              <p className="text-slate-700 mb-2 text-sm">
                Слабые грунты или высокий уровень грунтовых вод
                могут увеличить стоимость фундамента на 15–25%.
              </p>
              <ul className="space-y-1 text-slate-600 text-sm ml-4">
                <li>
                  • Инженерно-геологические изыскания: от 40 000
                  ₽ (для ИЖС)
                </li>
                <li>• Усиленный фундамент на слабых грунтах</li>
                <li>
                  • Дренажные системы при высоком УГВ: от 100
                  000 ₽
                </li>
                <li>
                  • Дополнительная гидроизоляция подвальных
                  помещений
                </li>
              </ul>
            </div>

            <div className="running-header">
              Дополнительные факторы, о которых забывают
            </div>
            <div className="border-l-4 border-orange-500 pl-6 print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-3">
                🌿 Экологическая ситуация
              </h3>
              <p className="text-slate-700 mb-2 text-sm">
                Рядом с промышленными зонами это критично для
                жилья и социальной инфраструктуры.
              </p>
              <ul className="space-y-1 text-slate-600 text-sm ml-4">
                <li>
                  • Близость к промышленным объектам влияет на
                  здоровье и ликвидность, дистанция зависит от
                  класса опасности
                </li>
                <li>
                  • Близость к кладбищам, очистных сооружениям и
                  свалкам/полигонам ТБО
                </li>
                <li>
                  • Загрязнение почвы может потребовать
                  рекультивации (от 150 000 ₽ для 10 соток до
                  нескольких миллионов для крупных участков)
                </li>
                <li>
                  • Шумовое загрязнение от магистралей и
                  производств
                </li>
                <li>
                  • Проверка радиационного фона (норма: до 0,30
                  мкЗв/ч). Замер можно сделать самостоятельно
                  (дозиметр от 3 000 ₽) или вызвать СЭС (от 5
                  000 ₽)
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-6 print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-3">
                ⚖️ Юридическая чистота
              </h3>
              <p className="text-slate-700 mb-2 text-sm">
                История участка и его правообладателей может
                скрывать неприятные сюрпризы.
              </p>
              <ul className="space-y-1 text-slate-600 text-sm ml-4">
                <li>
                  • Проверка всей цепочки переходов права
                  собственности
                </li>
                <li>
                  • Наличие незарегистрированных наследников
                </li>
                <li>• Самовольные постройки на участке</li>
                <li>
                  • Оспаривание сделок купли-продажи в прошлом
                </li>
              </ul>

              <p className="text-slate-700 mb-2 text-sm">
                Сроки оспаривания сделок:
              </p>
              <ul className="space-y-1 text-slate-600 text-sm ml-4">
                <li>
                  • Оспоримые сделки: **1 год** с момента, когда
                  истец узнал о нарушении
                </li>
                <li>
                  • Ничтожные сделки: **3 года** с момента
                  исполнения
                </li>
                <li>
                  • Максимальный срок: **10 лет** (даже если
                  истец "не знал")
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Summary Table */}
        <section className="mb-12 print:mb-8 print:page-break-before">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-300">
            Итого: что нужно проверить перед покупкой
          </h2>

          <div className="overflow-x-auto print:break-inside-avoid">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="border border-slate-600 px-4 py-3 text-left">
                    Проверка
                  </th>
                  <th className="border border-slate-600 px-4 py-3 text-left">
                    Время
                  </th>
                  <th className="border border-slate-600 px-4 py-3 text-left">
                    Стоимость
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="border border-slate-300 px-4 py-2">
                    Охранные зоны (ЗОУИТ)
                  </td>
                  <td className="border border-slate-300 px-4 py-2">
                    2–4 недели
                  </td>
                  <td className="border border-slate-300 px-4 py-2">
                    580-2950 ₽
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2">
                    Категория земли и ВРИ
                  </td>
                  <td className="border border-slate-300 px-4 py-2">
                    1–2 недели
                  </td>
                  <td className="border border-slate-300 px-4 py-2">
                    580–920 ₽
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-4 py-2">
                    Коммуникации
                  </td>
                  <td className="border border-slate-300 px-4 py-2">
                    2–4 недели
                  </td>
                  <td className="border border-slate-300 px-4 py-2">
                    0 ₽
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2">
                    Границы и межевание
                  </td>
                  <td className="border border-slate-300 px-4 py-2">
                    1–2 недели
                  </td>
                  <td className="border border-slate-300 px-4 py-2">
                    0–15 000 ₽
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-4 py-2">
                    Обременения
                  </td>
                  <td className="border border-slate-300 px-4 py-2">
                    3–7 дней
                  </td>
                  <td className="border border-slate-300 px-4 py-2">
                    580-2950 ₽
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2">
                    Рыночная стоимость
                  </td>
                  <td className="border border-slate-300 px-4 py-2">
                    3–7 дней
                  </td>
                  <td className="border border-slate-300 px-4 py-2">
                    0–15 000 ₽
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-4 py-2">
                    Проверка информации о лоте
                  </td>
                  <td className="border border-slate-300 px-4 py-2">
                    3–5 дней
                  </td>
                  <td className="border border-slate-300 px-4 py-2">
                    0 ₽
                  </td>
                </tr>
                <tr className="bg-blue-50 font-semibold">
                  <td className="border border-slate-400 px-4 py-3">
                    ИТОГО
                  </td>
                  <td className="border border-slate-400 px-4 py-3">
                    3–6 недель
                  </td>
                  <td className="border border-slate-400 px-4 py-3">
                    до 40 000 ₽
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* zemscan Automation */}
        <section className="mb-12 print:mb-8 print:page-break-before">
          <div className="running-header">
            Что автоматизирует zemscan
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-300">
            Что автоматизирует zemscan
          </h2>

          <p className="text-slate-700 mb-6 leading-relaxed">
            Мы создаём сервис, который сделает эту работу за вас
            — быстрее, точнее и дешевле.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-2">
                ✅ Автоматический мониторинг торгов
              </h3>
              <ul className="space-y-1 text-slate-700 text-sm ml-4">
                <li>
                  • Сканируем все торговые площадки ежедневно
                </li>
                <li>
                  • Фильтруем лоты по вашим критериям (регион,
                  площадь, цена, ВРИ)
                </li>
                <li>
                  • Уведомляем в Telegram или email сразу при
                  появлении подходящего лота
                </li>
              </ul>
              <p className="text-blue-600 font-semibold mt-2 text-sm">
                Вы экономите: 5–10 часов в неделю на ручной
                мониторинг
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-2">
                ✅ Мгновенная проверка охранных зон
              </h3>
              <ul className="space-y-1 text-slate-700 text-sm ml-4">
                <li>
                  • Автоматически проверяем пересечение с ЗОУИТ
                </li>
                <li>• Показываем все ограничения на карте</li>
                <li>
                  • Рассчитываем, какую часть участка можно
                  использовать
                </li>
              </ul>
              <p className="text-blue-600 font-semibold mt-2 text-sm">
                Вы экономите: 2–4 недели ожидания ГПЗУ
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-2">
                ✅ Оценка рыночной стоимости
              </h3>
              <ul className="space-y-1 text-slate-700 text-sm ml-4">
                <li>
                  • Анализируем цены на аналогичные участки в
                  районе
                </li>
                <li>
                  • Сравниваем с историей продаж из Росреестра
                </li>
                <li>
                  • Показываем справедливую цену и потенциал
                  роста
                </li>
              </ul>
              <p className="text-blue-600 font-semibold mt-2 text-sm">
                Вы экономите: 3 000–15 000 ₽ на независимую
                оценку
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-2">
                ✅ Проверка обременений и истории
              </h3>
              <ul className="space-y-1 text-slate-700 text-sm ml-4">
                <li>
                  • Автоматически проверяем ЕГРН на обременения
                </li>
                <li>• Показываем историю переходов права</li>
                <li>
                  • Предупреждаем о рисках (аресты, залоги,
                  судебные споры)
                </li>
              </ul>
              <p className="text-blue-600 font-semibold mt-2 text-sm">
                Вы экономите: время на запросы и анализ выписок
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-2">
                ✅ Карта коммуникаций
              </h3>
              <ul className="space-y-1 text-slate-700 text-sm ml-4">
                <li>
                  • Показываем расстояние до ЛЭП, газопроводов,
                  водопроводов
                </li>
                <li>
                  • Даём ориентировочную стоимость подключения
                </li>
                <li>
                  • Указываем контакты сетевых организаций
                </li>
              </ul>
              <p className="text-blue-600 font-semibold mt-2 text-sm">
                Вы экономите: 2–4 недели на запросы техусловий
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-2">
                ✅ Единый отчёт по лоту
              </h3>
              <ul className="space-y-1 text-slate-700 text-sm ml-4">
                <li>• Все проверки в одном документе</li>
                <li>
                  • Понятные рекомендации: покупать / не
                  покупать
                </li>
                <li>
                  • Список оставшихся вопросов для уточнения
                </li>
              </ul>
              <p className="text-blue-600 font-semibold mt-2 text-sm">
                Вы получаете: полную картину за 5 минут вместо
                нескольких недель
              </p>
            </div>
          </div>
        </section>

        {/* Illustration 3: Checklist */}
        <div className="mb-12 print:break-inside-avoid">
          <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm">
            <img
              src="https://www.unicraft.org/wp-content/uploads/2023/05/closeup-woman-using-diary-scheduling.jpg"
              alt="Планирование и проверка перед покупкой"
              className="w-full h-56 object-cover"
            />
          </div>
          <p className="text-center text-sm text-slate-500 mt-3 italic">
            Систематический подход к проверке — залог успешной
            сделки
          </p>
        </div>

        {/* Checklist */}
        <section className="mb-12 print:mb-8 print:page-break-before">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-300">
            Чек-лист проверки участка
          </h2>

          <p className="text-slate-700 mb-6">
            Распечатайте и используйте при оценке каждого лота:
          </p>

          <div className="space-y-6">
            <div className="print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-3 bg-slate-100 px-4 py-2 rounded">
                Документы
              </h3>
              <div className="space-y-2 ml-2">
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>Выписка из ЕГРН получена</span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>
                    ГПЗУ получен и изучен (параметры застройки
                    приемлемы)
                  </span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>
                    Границы участка установлены (есть
                    координаты)
                  </span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>
                    Категория земли подходит для моих целей
                  </span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>
                    ВРИ позволяет строительство/использование
                  </span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>
                    Обременений нет (или они меня устраивают)
                  </span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>
                    Продавец проверен на банкротство и долги
                  </span>
                </label>
              </div>
            </div>

            <div className="print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-3 bg-slate-100 px-4 py-2 rounded">
                Ограничения
              </h3>
              <div className="space-y-2 ml-2">
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>Участок не в водоохранной зоне</span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>
                    Участок не в санитарно-защитной зоне
                  </span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>
                    Нет охранных зон ЛЭП и газопроводов
                  </span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>Нет других ЗОУИТ</span>
                </label>
              </div>
            </div>

            <div className="print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-3 bg-slate-100 px-4 py-2 rounded">
                Коммуникации
              </h3>
              <div className="space-y-2 ml-2">
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>
                    Электричество — возможность подключения и
                    свободная мощность уточнены
                  </span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>
                    Газ — возможность подключения и свободная
                    мощность уточнены
                  </span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>
                    Вода — источник определён
                    (центральный/скважина)
                  </span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>Дорога — подъезд к участку есть</span>
                </label>
              </div>
            </div>

            <div className="print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-3 bg-slate-100 px-4 py-2 rounded">
                Дополнительные факторы
              </h3>
              <div className="space-y-2 ml-2">
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>
                    Кадастровая стоимость проверена (налоги и
                    арендная плата приемлемы)
                  </span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>
                    Форма участка удобная (нет узких мест и
                    врезов)
                  </span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>
                    Рельеф подходит (нет критичных перепадов
                    высот)
                  </span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>
                    Инженерно-геологические условия приемлемы
                    (грунты, УГВ)
                  </span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>
                    Экологическая ситуация удовлетворительна
                  </span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>
                    Юридическая история участка чиста (нет
                    спорных сделок)
                  </span>
                </label>
              </div>
            </div>

            <div className="print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-3 bg-slate-100 px-4 py-2 rounded">
                Оценка
              </h3>
              <div className="space-y-2 ml-2">
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>
                    Рыночная стоимость соответствует цене
                  </span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>
                    Участок ликвидный (есть спрос в районе)
                  </span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>Инфраструктура устраивает</span>
                </label>
              </div>
            </div>

            <div className="print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-3 bg-slate-100 px-4 py-2 rounded">
                Осмотр
              </h3>
              <div className="space-y-2 ml-2">
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>Участок осмотрен лично</span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>Фото/видео сделаны</span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>С соседями пообщался</span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 print:w-5 print:h-5"
                  />
                  <span>
                    Границы на местности соответствуют кадастру
                  </span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12 print:mb-8">
          <div className="running-header">Следующие шаги</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-300">
            Следующие шаги
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-blue-600 font-bold text-xl flex-shrink-0">
                1.
              </span>
              <p className="text-slate-700 leading-relaxed">
                Сохраните этот гайд — используйте чек-лист при
                каждом анализе
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-blue-600 font-bold text-xl flex-shrink-0">
                2.
              </span>
              <p className="text-slate-700 leading-relaxed">
                Ждите запуска zemscan — мы автоматизируем
                большинство проверок
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-blue-600 font-bold text-xl flex-shrink-0">
                3.
              </span>
              <p className="text-slate-700 leading-relaxed">
                Получите 3 месяца бесплатно — ваш промокод
                придёт в январе 2026
              </p>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6 print:break-inside-avoid">
            <p className="text-slate-700 mb-2">
              <strong className="text-slate-900">
                Есть вопросы?
              </strong>{" "}
              Напишите нам:{" "}
              <a
                href="mailto:info@zemscan.ru"
                className="text-blue-600 underline"
              >
                info@zemscan.ru
              </a>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t-2 border-slate-900 text-center print:break-inside-avoid">
          <p className="text-xl font-semibold text-slate-900 mb-2">
            zemscan.ru — прозрачность земельных сделок
          </p>
          <p className="text-sm text-slate-500">
            © 2025 zemscan. Все права защищены. Материал носит
            информационный характер и не является юридической
            консультацией.
          </p>
        </footer>
      </article>

      {/* Print Footer - отображается только при печати */}
      <div className="print-footer">
        <div className="print-footer-content">
          <span className="print-footer-left">
            zemscan.ru — прозрачность земельных сделок
          </span>
          <span className="print-footer-center">
            © 2025 zemscan. Все права защищены.
          </span>
          <span className="print-footer-right"></span>
        </div>
      </div>

      {/* Print Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .print-footer {
          display: none;
        }
        
        @media print {
          @page {
            size: A4;
            margin: 25mm 15mm 30mm 15mm;
            
            @top-center {
              content: element(running-header);
              vertical-align: bottom;
              padding-bottom: 3mm;
              border-bottom: 1pt solid #cbd5e1;
            }
            
            @bottom-left {
              content: "zemscan.ru — прозрачность земельных сделок | © 2025";
              font-size: 9pt;
              color: #64748b;
              font-weight: 500;
              vertical-align: top;
              padding-top: 5mm;
            }
            
            @bottom-right {
              content: "Стр. " counter(page);
              font-size: 9pt;
              color: #64748b;
              vertical-align: top;
              padding-top: 5mm;
            }
          }
          
          @page :first {
            @top-center {
              content: none;
            }
          }
          
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          .print-footer {
            display: none !important;
          }
          
          .running-header {
            display: block !important;
            font-size: 9pt;
            color: #64748b;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5pt;
            text-align: center;
            padding: 8pt 0;
            margin: 0pt 0 10pt 0;
            border-top: 1pt solid #e2e8f0;
            border-bottom: 1pt solid #e2e8f0;
            page-break-after: avoid;
          }
          
          section > .running-header:first-child {
            display: none !important;
          }

          .print\\:page-break-before {
            page-break-before: always;
          }

          .print\\:page-break-after {
            page-break-after: always;
          }

          .print\\:break-inside-avoid {
            page-break-inside: avoid;
          }
        }
      `,
        }}
      />
    </div>
  );
}