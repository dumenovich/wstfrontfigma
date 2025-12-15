import { ArrowLeft, Printer, Download } from "lucide-react";
import { Button } from "./ui/button";

export default function ArticleGuide() {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
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
        <header className="text-center mb-16 print:mb-12 border-b-2 border-slate-900 pb-12 print:pb-8 print:page-break-after">
          <h1 className="text-4xl print:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Как не переплатить за землю:<br />
            7 скрытых рисков лотов на торгах
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            zemscan.ru — сервис умного мониторинга земельных торгов
          </p>
          <div className="inline-block px-6 py-2 border-2 border-slate-300 rounded">
            <p className="text-sm text-slate-500">Практическое руководство • 2025</p>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-12 print:mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-300">
            Введение
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Покупка земли на торгах — это реальный шанс приобрести участок на 30–50% ниже рыночной цены. 
              Но за низкой начальной ценой часто скрываются проблемы, которые превращают «выгодную покупку» 
              в многолетнюю головную боль.
            </p>
            <p>
              Мы проанализировали более 12 000 лотов на торгах за последние 2 года и выявили 7 самых 
              распространённых рисков, о которых организаторы торгов предпочитают молчать.
            </p>
          </div>

          <div className="mt-6 bg-slate-50 border-l-4 border-blue-600 p-6 print:break-inside-avoid">
            <p className="font-semibold text-slate-900 mb-3">В этом гайде вы узнаете:</p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Какие риски встречаются чаще всего</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Как проверить участок самостоятельно (пошаговые инструкции)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Какие шаги zemscan автоматизирует, чтобы сэкономить ваше время</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Risk 1 */}
        <section className="mb-12 print:mb-8 print:page-break-before">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-4xl font-bold text-blue-600">01</span>
            <h2 className="text-2xl font-bold text-slate-900">Участок в охранной зоне</h2>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 print:break-inside-avoid">
            <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
              <span>🚨</span> В чём проблема
            </h3>
            <p className="text-slate-700 mb-3">
              Охранные зоны — это территории с ограничениями на строительство и использование. Участок может находиться:
            </p>
            <ul className="space-y-1.5 text-slate-700 ml-4">
              <li>• В водоохранной зоне (нельзя строить ближе 50–200 м от водоёма)</li>
              <li>• В санитарно-защитной зоне (рядом с производствами, свалками)</li>
              <li>• В охранной зоне ЛЭП (линий электропередач)</li>
              <li>• В зоне газопровода или нефтепровода</li>
              <li>• В приаэродромной территории (ограничения по высоте застройки)</li>
            </ul>
          </div>

          <div className="mb-6 print:break-inside-avoid">
            <p className="font-semibold text-slate-900 mb-2">Последствия:</p>
            <ul className="space-y-1.5 text-slate-700 ml-4">
              <li>• Невозможность получить разрешение на строительство</li>
              <li>• Требование снести уже возведённые постройки</li>
              <li>• Штрафы до 1 000 000 ₽ для физлиц</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 print:break-inside-avoid">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span> Как проверить самостоятельно
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-800 mb-2">1. Публичная кадастровая карта (pkk.rosreestr.ru)</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Откройте карту и введите кадастровый номер участка</li>
                  <li>• Включите слой «Зоны с особыми условиями использования территории» (ЗОУИТ)</li>
                  <li>• Проверьте, не попадает ли участок в выделенные зоны</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">2. Градостроительный план земельного участка (ГПЗУ)</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Закажите в местной администрации или через Госуслуги</li>
                  <li>• Срок получения: 14–30 рабочих дней</li>
                  <li>• В ГПЗУ указаны ВСЕ ограничения и разрешённые параметры строительства</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">3. Запрос в Росреестр</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Закажите выписку из ЕГРН об объекте недвижимости</li>
                  <li>• В разделе 4 указаны зарегистрированные ограничения</li>
                  <li>• Стоимость: 350–870 ₽, срок: 3–5 рабочих дней</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">4. Проверка газопроводов и ЛЭП</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Обратитесь в местное отделение «Газпром газораспределение»</li>
                  <li>• Направьте запрос в сетевую организацию (МРСК, Россети)</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-300">
              <p className="text-sm text-slate-600">
                ⏱️ <strong>Время на самостоятельную проверку:</strong> 2–4 недели
              </p>
            </div>
          </div>
        </section>

        {/* Risk 2 */}
        <section className="mb-12 print:mb-8 print:page-break-before">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-4xl font-bold text-blue-600">02</span>
            <h2 className="text-2xl font-bold text-slate-900">Неподходящая категория земли или ВРИ</h2>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 print:break-inside-avoid">
            <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
              <span>🚨</span> В чём проблема
            </h3>
            <p className="text-slate-700 mb-3">
              Не на каждом участке можно строить дом. Ключевые параметры:
            </p>
            <div className="mb-3">
              <p className="font-semibold text-slate-800 mb-2">Категория земли:</p>
              <ul className="space-y-1 text-slate-700 ml-4 text-sm">
                <li>• Земли населённых пунктов ✅ — можно строить</li>
                <li>• Земли сельхозназначения ⚠️ — ограничения</li>
                <li>• Земли лесного фонда ❌ — строить нельзя</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-800 mb-2">Вид разрешённого использования (ВРИ):</p>
              <ul className="space-y-1 text-slate-700 ml-4 text-sm">
                <li>• ИЖС (индивидуальное жилищное строительство) ✅</li>
                <li>• ЛПХ (личное подсобное хозяйство) — только в границах населённого пункта</li>
                <li>• СНТ/ДНП — ограничения по прописке</li>
                <li>• «Для сельхозпроизводства» ❌ — дом строить нельзя</li>
              </ul>
            </div>
          </div>

          <div className="mb-6 print:break-inside-avoid">
            <p className="font-semibold text-slate-900 mb-2">Последствия неправильного ВРИ:</p>
            <ul className="space-y-1.5 text-slate-700 ml-4">
              <li>• Отказ в разрешении на строительство</li>
              <li>• Невозможность оформить прописку</li>
              <li>• Изменение ВРИ стоит от 50 000 до 500 000 ₽ и занимает 3–12 месяцев</li>
              <li>• Иногда изменение ВРИ вообще невозможно</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 print:break-inside-avoid">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span> Как проверить самостоятельно
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-800 mb-2">1. Выписка из ЕГРН</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Раздел 1: категория земли и ВРИ</li>
                  <li>• Закажите на rosreestr.gov.ru или через Госуслуги</li>
                  <li>• Стоимость: 350–870 ₽</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">2. Публичная кадастровая карта</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Кликните на участок → «Информация»</li>
                  <li>• Посмотрите поля «Категория» и «Разрешённое использование»</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">3. Правила землепользования и застройки (ПЗЗ)</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Найдите на сайте администрации муниципального образования</li>
                  <li>• Определите территориальную зону вашего участка</li>
                  <li>• Посмотрите список основных и условно разрешённых ВРИ</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">4. Запрос в администрацию</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Узнайте, можно ли изменить ВРИ</li>
                  <li>• Сколько это стоит и сколько займёт времени</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-300">
              <p className="text-sm text-slate-600">
                ⏱️ <strong>Время на самостоятельную проверку:</strong> 1–2 недели
              </p>
            </div>
          </div>
        </section>

        {/* Risk 3 */}
        <section className="mb-12 print:mb-8 print:page-break-before">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-4xl font-bold text-blue-600">03</span>
            <h2 className="text-2xl font-bold text-slate-900">Отсутствие коммуникаций или невозможность подключения</h2>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 print:break-inside-avoid">
            <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
              <span>🚨</span> В чём проблема
            </h3>
            <p className="text-slate-700 mb-4">
              Земля дешёвая — но к ней нет дороги, электричества, газа и воды. Подключение коммуникаций может стоить дороже самого участка:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="border border-slate-600 px-4 py-2 text-left">Коммуникация</th>
                    <th className="border border-slate-600 px-4 py-2 text-left">Стоимость подключения</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Электричество (15 кВт)</td>
                    <td className="border border-slate-300 px-4 py-2">550 ₽ — 1 500 000 ₽*</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Газ</td>
                    <td className="border border-slate-300 px-4 py-2">50 000 — 800 000 ₽</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Водопровод</td>
                    <td className="border border-slate-300 px-4 py-2">30 000 — 300 000 ₽</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Канализация</td>
                    <td className="border border-slate-300 px-4 py-2">50 000 — 500 000 ₽</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Дорога (100 м грунтовки)</td>
                    <td className="border border-slate-300 px-4 py-2">150 000 — 500 000 ₽</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-slate-600 mt-2">
                *550 ₽ — льготный тариф, если ЛЭП в пределах 300 м. Если дальше — за каждый метр платите вы.
              </p>
            </div>
          </div>

          <div className="mb-6 print:break-inside-avoid">
            <p className="font-semibold text-slate-900 mb-2">Подводные камни:</p>
            <ul className="space-y-1.5 text-slate-700 ml-4">
              <li>• «Газ рядом» ≠ можно подключиться (нужны техусловия)</li>
              <li>• «Электричество есть» — но свободной мощности может не быть</li>
              <li>• Вода только из скважины, а бурение в этом районе стоит 500 000 ₽</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 print:break-inside-avoid">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span> Как проверить самостоятельно
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-800 mb-2">1. Электричество</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Определите сетевую организацию района (МРСК, РЭС)</li>
                  <li>• Подайте заявку на получение технических условий</li>
                  <li>• В ТУ будет указано: точка подключения, мощность, стоимость</li>
                  <li>• Срок ответа: 15–30 дней</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">2. Газ</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Обратитесь в местный Горгаз / «Газпром газораспределение»</li>
                  <li>• Запросите справку о возможности подключения</li>
                  <li>• Получите предварительные техусловия</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">3. Вода</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Узнайте, есть ли центральный водопровод (в администрации)</li>
                  <li>• Если нет — найдите буровые компании в районе</li>
                  <li>• Спросите глубину скважин и стоимость бурения</li>
                  <li>• Изучите карту водоносных горизонтов</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">4. Дорога</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Проверьте подъезд к участку на карте</li>
                  <li>• Уточните статус дороги (муниципальная, частная, отсутствует)</li>
                  <li>• Если дорога частная — нужен сервитут от соседей</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-300">
              <p className="text-sm text-slate-600">
                ⏱️ <strong>Время на самостоятельную проверку:</strong> 2–4 недели
              </p>
            </div>
          </div>
        </section>

        {/* Risk 4 */}
        <section className="mb-12 print:mb-8 print:page-break-before">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-4xl font-bold text-blue-600">04</span>
            <h2 className="text-2xl font-bold text-slate-900">Проблемы с границами и соседями</h2>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 print:break-inside-avoid">
            <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
              <span>🚨</span> В чём проблема
            </h3>
            <ul className="space-y-1.5 text-slate-700 ml-4">
              <li>• Границы не установлены — участок не размежёван</li>
              <li>• Пересечение границ — соседи по факту занимают часть вашей земли</li>
              <li>• Кадастровая ошибка — координаты в ЕГРН не соответствуют реальности</li>
              <li>• Споры с соседями — судебные тяжбы могут длиться годами</li>
            </ul>
          </div>

          <div className="mb-6 print:break-inside-avoid">
            <p className="font-semibold text-slate-900 mb-2">Последствия:</p>
            <ul className="space-y-1.5 text-slate-700 ml-4">
              <li>• Невозможно зарегистрировать право собственности</li>
              <li>• Заборы и постройки придётся переносить</li>
              <li>• Судебные расходы 100 000–500 000 ₽</li>
              <li>• Межевание за ваш счёт: 10 000–50 000 ₽</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 print:break-inside-avoid">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span> Как проверить самостоятельно
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-800 mb-2">1. Выписка из ЕГРН</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Раздел 3.1 — координаты поворотных точек</li>
                  <li>• Если координат нет — границы не установлены!</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">2. Публичная кадастровая карта</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Проверьте, отображается ли участок</li>
                  <li>• Посмотрите, нет ли наложений с соседними участками</li>
                  <li>• Сравните площадь в документах и на карте</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">3. Выезд на местность</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Обязательно посетите участок</li>
                  <li>• Сравните фактические границы с кадастровыми</li>
                  <li>• Поговорите с соседями о возможных спорах</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">4. Кадастровый инженер</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Закажите вынос границ в натуру</li>
                  <li>• Стоимость: 5 000–15 000 ₽</li>
                  <li>• Инженер установит колышки по координатам ЕГРН</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-300">
              <p className="text-sm text-slate-600">
                ⏱️ <strong>Время на самостоятельную проверку:</strong> 1–2 недели
              </p>
            </div>
          </div>
        </section>

        {/* Risk 5 */}
        <section className="mb-12 print:mb-8 print:page-break-before">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-4xl font-bold text-blue-600">05</span>
            <h2 className="text-2xl font-bold text-slate-900">Арест, залог или другие обременения</h2>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 print:break-inside-avoid">
            <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
              <span>🚨</span> В чём проблема
            </h3>
            <p className="text-slate-700 mb-2">Участок может быть:</p>
            <ul className="space-y-1.5 text-slate-700 ml-4">
              <li>• Под арестом — по решению суда или ФССП</li>
              <li>• В залоге у банка — ипотека или кредит</li>
              <li>• С сервитутом — право прохода/проезда третьих лиц</li>
              <li>• В аренде — действующий договор с арендатором</li>
              <li>• С правами третьих лиц — наследники, бывшие супруги</li>
            </ul>
          </div>

          <div className="mb-6 print:break-inside-avoid">
            <p className="font-semibold text-slate-900 mb-2">Последствия:</p>
            <ul className="space-y-1.5 text-slate-700 ml-4">
              <li>• Сделку могут признать недействительной</li>
              <li>• Банк заберёт участок за долги предыдущего владельца</li>
              <li>• Вы обязаны терпеть проход соседей через ваш участок</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 print:break-inside-avoid">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span> Как проверить самостоятельно
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-800 mb-2">1. Выписка из ЕГРН</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Раздел 2 — правообладатель и вид права</li>
                  <li>• Раздел 4 — зарегистрированные ограничения</li>
                  <li>• Здесь видны ипотека, аресты, сервитуты</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">2. Проверка в ФССП</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Сайт fssp.gov.ru</li>
                  <li>• Проверьте продавца в банке исполнительных производств</li>
                  <li>• Если есть долги — участок могут арестовать</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">3. Проверка на банкротство</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Сайт ЕФРСБ (bankrot.fedresurs.ru)</li>
                  <li>• Введите ФИО или ИНН продавца</li>
                  <li>• При банкротстве сделку могут оспорить</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">4. Проверка семейного положения</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Запросите у продавца нотариальное согласие супруга</li>
                  <li>• Убедитесь, что нет несогласованного раздела имущества</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-300">
              <p className="text-sm text-slate-600">
                ⏱️ <strong>Время на самостоятельную проверку:</strong> 3–7 дней
              </p>
            </div>
          </div>
        </section>

        {/* Risk 6 */}
        <section className="mb-12 print:mb-8 print:page-break-before">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-4xl font-bold text-blue-600">06</span>
            <h2 className="text-2xl font-bold text-slate-900">Низкая ликвидность и реальная рыночная стоимость</h2>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 print:break-inside-avoid">
            <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
              <span>🚨</span> В чём проблема
            </h3>
            <p className="text-slate-700 mb-2">
              Начальная цена на торгах — это не рыночная стоимость. Она может быть:
            </p>
            <ul className="space-y-1.5 text-slate-700 ml-4">
              <li>• Завышена — для формального соблюдения процедуры</li>
              <li>• Занижена — для привлечения покупателей на проблемный участок</li>
              <li>• Не учитывает реальный спрос в районе</li>
            </ul>
          </div>

          <div className="mb-6 print:break-inside-avoid">
            <p className="font-semibold text-slate-900 mb-2">Подводные камни:</p>
            <ul className="space-y-1.5 text-slate-700 ml-4">
              <li>• Участок за 100 000 ₽, но аналоги в районе стоят 50 000 ₽</li>
              <li>• «Выгодная» покупка, которую потом невозможно продать</li>
              <li>• Отсутствие инфраструктуры = нет покупателей = низкая ликвидность</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 print:break-inside-avoid">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span> Как проверить самостоятельно
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-800 mb-2">1. Анализ объявлений на Авито и ЦИАН</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Найдите похожие участки в том же районе</li>
                  <li>• Сравните цены за сотку</li>
                  <li>• Учитывайте: коммуникации, подъезд, удалённость от города</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">2. Росреестр — сведения о сделках</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Выписка «О переходе прав» показывает цены прошлых продаж</li>
                  <li>• Стоимость: 870 ₽</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">3. Оценочные компании</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Закажите независимую оценку</li>
                  <li>• Стоимость: 3 000–15 000 ₽</li>
                  <li>• Срок: 3–7 дней</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">4. Анализ инфраструктуры</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Расстояние до города, школ, магазинов</li>
                  <li>• Качество дорог, мобильная связь</li>
                  <li>• Планы развития территории (Генплан)</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-300">
              <p className="text-sm text-slate-600">
                ⏱️ <strong>Время на самостоятельную проверку:</strong> 3–7 дней
              </p>
            </div>
          </div>
        </section>

        {/* Risk 7 */}
        <section className="mb-12 print:mb-8 print:page-break-before">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-4xl font-bold text-blue-600">07</span>
            <h2 className="text-2xl font-bold text-slate-900">Недостоверная информация в извещении о торгах</h2>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 print:break-inside-avoid">
            <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
              <span>🚨</span> В чём проблема
            </h3>
            <p className="text-slate-700 mb-2">
              Организаторы торгов не всегда предоставляют полную информацию:
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
            <p className="font-semibold text-slate-900 mb-2">Последствия:</p>
            <ul className="space-y-1.5 text-slate-700 ml-4">
              <li>• Покупаете «кота в мешке»</li>
              <li>• Реальный участок не соответствует описанию</li>
              <li>• Вернуть деньги после торгов почти невозможно</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 print:break-inside-avoid">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span> Как проверить самостоятельно
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-800 mb-2">1. Изучите все документы лота</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Скачайте и прочитайте каждый прикреплённый файл</li>
                  <li>• Сравните данные в разных документах</li>
                  <li>• Ищите несоответствия</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">2. Свяжитесь с организатором</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Задайте вопросы по телефону и email</li>
                  <li>• Попросите дополнительные документы</li>
                  <li>• Запишите ответы (для возможных споров)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">3. Обязательный осмотр</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Посетите участок лично</li>
                  <li>• Сделайте фото и видео</li>
                  <li>• Отметьте GPS-координаты границ</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">4. Проверьте организатора торгов</p>
                <ul className="space-y-1 text-slate-600 ml-4 text-sm">
                  <li>• Убедитесь в легитимности торговой площадки</li>
                  <li>• Проверьте реквизиты организатора</li>
                  <li>• Изучите отзывы на форумах</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-300">
              <p className="text-sm text-slate-600">
                ⏱️ <strong>Время на самостоятельную проверку:</strong> 3–5 дней
              </p>
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
                  <th className="border border-slate-600 px-4 py-3 text-left">Проверка</th>
                  <th className="border border-slate-600 px-4 py-3 text-left">Время</th>
                  <th className="border border-slate-600 px-4 py-3 text-left">Стоимость</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="border border-slate-300 px-4 py-2">Охранные зоны (ЗОУИТ)</td>
                  <td className="border border-slate-300 px-4 py-2">2–4 недели</td>
                  <td className="border border-slate-300 px-4 py-2">350–5 000 ₽</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2">Категория земли и ВРИ</td>
                  <td className="border border-slate-300 px-4 py-2">1–2 недели</td>
                  <td className="border border-slate-300 px-4 py-2">350–870 ₽</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-4 py-2">Коммуникации</td>
                  <td className="border border-slate-300 px-4 py-2">2–4 недели</td>
                  <td className="border border-slate-300 px-4 py-2">0–1 000 ₽</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2">Границы и межевание</td>
                  <td className="border border-slate-300 px-4 py-2">1–2 недели</td>
                  <td className="border border-slate-300 px-4 py-2">5 000–15 000 ₽</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-4 py-2">Обременения</td>
                  <td className="border border-slate-300 px-4 py-2">3–7 дней</td>
                  <td className="border border-slate-300 px-4 py-2">350–870 ₽</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2">Рыночная стоимость</td>
                  <td className="border border-slate-300 px-4 py-2">3–7 дней</td>
                  <td className="border border-slate-300 px-4 py-2">0–15 000 ₽</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-4 py-2">Проверка информации о лоте</td>
                  <td className="border border-slate-300 px-4 py-2">3–5 дней</td>
                  <td className="border border-slate-300 px-4 py-2">0 ₽</td>
                </tr>
                <tr className="bg-blue-50 font-semibold">
                  <td className="border border-slate-400 px-4 py-3">ИТОГО</td>
                  <td className="border border-slate-400 px-4 py-3">6–12 недель</td>
                  <td className="border border-slate-400 px-4 py-3">6 000–40 000 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* zemscan Automation */}
        <section className="mb-12 print:mb-8 print:page-break-before">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-300">
            Что автоматизирует zemscan
          </h2>

          <p className="text-slate-700 mb-6 leading-relaxed">
            Мы создаём сервис, который сделает эту работу за вас — быстрее, точнее и дешевле.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-2">✅ Автоматический мониторинг торгов</h3>
              <ul className="space-y-1 text-slate-700 text-sm ml-4">
                <li>• Сканируем все торговые площадки ежедневно</li>
                <li>• Фильтруем лоты по вашим критериям (регион, площадь, цена, ВРИ)</li>
                <li>• Уведомляем в Telegram или email сразу при появлении подходящего лота</li>
              </ul>
              <p className="text-blue-600 font-semibold mt-2 text-sm">
                Вы экономите: 5–10 часов в неделю на ручной мониторинг
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-2">✅ Мгновенная проверка охранных зон</h3>
              <ul className="space-y-1 text-slate-700 text-sm ml-4">
                <li>• Автоматически проверяем пересечение с ЗОУИТ</li>
                <li>• Показываем все ограничения на карте</li>
                <li>• Рассчитываем, какую часть участка можно использовать</li>
              </ul>
              <p className="text-blue-600 font-semibold mt-2 text-sm">
                Вы экономите: 2–4 недели ожидания ГПЗУ
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-2">✅ Оценка рыночной стоимости</h3>
              <ul className="space-y-1 text-slate-700 text-sm ml-4">
                <li>• Анализируем цены на аналогичные участки в районе</li>
                <li>• Сравниваем с историей продаж из Росреестра</li>
                <li>• Показываем справедливую цену и потенциал роста</li>
              </ul>
              <p className="text-blue-600 font-semibold mt-2 text-sm">
                Вы экономите: 3 000–15 000 ₽ на независимую оценку
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-2">✅ Проверка обременений и истории</h3>
              <ul className="space-y-1 text-slate-700 text-sm ml-4">
                <li>• Автоматически проверяем ЕГРН на обременения</li>
                <li>• Показываем историю переходов права</li>
                <li>• Предупреждаем о рисках (аресты, залоги, судебные споры)</li>
              </ul>
              <p className="text-blue-600 font-semibold mt-2 text-sm">
                Вы экономите: время на запросы и анализ выписок
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-2">✅ Карта коммуникаций</h3>
              <ul className="space-y-1 text-slate-700 text-sm ml-4">
                <li>• Показываем расстояние до ЛЭП, газопроводов, водопроводов</li>
                <li>• Даём ориентировочную стоимость подключения</li>
                <li>• Указываем контакты сетевых организаций</li>
              </ul>
              <p className="text-blue-600 font-semibold mt-2 text-sm">
                Вы экономите: 2–4 недели на запросы техусловий
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-2">✅ Единый отчёт по лоту</h3>
              <ul className="space-y-1 text-slate-700 text-sm ml-4">
                <li>• Все проверки в одном документе</li>
                <li>• Понятные рекомендации: покупать / не покупать</li>
                <li>• Список оставшихся вопросов для уточнения</li>
              </ul>
              <p className="text-blue-600 font-semibold mt-2 text-sm">
                Вы получаете: полную картину за 5 минут вместо 6–12 недель
              </p>
            </div>
          </div>
        </section>

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
                  <input type="checkbox" className="mt-1 w-4 h-4 print:w-5 print:h-5" />
                  <span>Выписка из ЕГРН получена</span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input type="checkbox" className="mt-1 w-4 h-4 print:w-5 print:h-5" />
                  <span>Границы участка установлены (есть координаты)</span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input type="checkbox" className="mt-1 w-4 h-4 print:w-5 print:h-5" />
                  <span>Категория земли подходит для моих целей</span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input type="checkbox" className="mt-1 w-4 h-4 print:w-5 print:h-5" />
                  <span>ВРИ позволяет строительство/использование</span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input type="checkbox" className="mt-1 w-4 h-4 print:w-5 print:h-5" />
                  <span>Обременений нет (или они меня устраивают)</span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input type="checkbox" className="mt-1 w-4 h-4 print:w-5 print:h-5" />
                  <span>Продавец проверен на банкротство и долги</span>
                </label>
              </div>
            </div>

            <div className="print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-3 bg-slate-100 px-4 py-2 rounded">
                Ограничения
              </h3>
              <div className="space-y-2 ml-2">
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input type="checkbox" className="mt-1 w-4 h-4 print:w-5 print:h-5" />
                  <span>Участок не в водоохранной зоне</span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input type="checkbox" className="mt-1 w-4 h-4 print:w-5 print:h-5" />
                  <span>Участок не в санитарно-защитной зоне</span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input type="checkbox" className="mt-1 w-4 h-4 print:w-5 print:h-5" />
                  <span>Нет охранных зон ЛЭП и газопроводов</span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input type="checkbox" className="mt-1 w-4 h-4 print:w-5 print:h-5" />
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
                  <input type="checkbox" className="mt-1 w-4 h-4 print:w-5 print:h-5" />
                  <span>Электричество — возможность подключения уточнена</span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input type="checkbox" className="mt-1 w-4 h-4 print:w-5 print:h-5" />
                  <span>Газ — возможность подключения уточнена</span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input type="checkbox" className="mt-1 w-4 h-4 print:w-5 print:h-5" />
                  <span>Вода — источник определён (центральный/скважина)</span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input type="checkbox" className="mt-1 w-4 h-4 print:w-5 print:h-5" />
                  <span>Дорога — подъезд к участку есть</span>
                </label>
              </div>
            </div>

            <div className="print:break-inside-avoid">
              <h3 className="font-semibold text-slate-900 mb-3 bg-slate-100 px-4 py-2 rounded">
                Оценка
              </h3>
              <div className="space-y-2 ml-2">
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input type="checkbox" className="mt-1 w-4 h-4 print:w-5 print:h-5" />
                  <span>Рыночная стоимость соответствует цене</span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input type="checkbox" className="mt-1 w-4 h-4 print:w-5 print:h-5" />
                  <span>Участок ликвидный (есть спрос в районе)</span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input type="checkbox" className="mt-1 w-4 h-4 print:w-5 print:h-5" />
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
                  <input type="checkbox" className="mt-1 w-4 h-4 print:w-5 print:h-5" />
                  <span>Участок осмотрен лично</span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input type="checkbox" className="mt-1 w-4 h-4 print:w-5 print:h-5" />
                  <span>Фото/видео сделаны</span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input type="checkbox" className="mt-1 w-4 h-4 print:w-5 print:h-5" />
                  <span>С соседями пообщался</span>
                </label>
                <label className="flex items-start gap-3 text-slate-700 cursor-pointer hover:bg-slate-50 p-2 rounded">
                  <input type="checkbox" className="mt-1 w-4 h-4 print:w-5 print:h-5" />
                  <span>Границы на местности соответствуют кадастру</span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12 print:mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-300">
            Следующие шаги
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-blue-600 font-bold text-xl flex-shrink-0">1.</span>
              <p className="text-slate-700 leading-relaxed">
                Сохраните этот гайд — используйте чек-лист при каждом анализе
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-blue-600 font-bold text-xl flex-shrink-0">2.</span>
              <p className="text-slate-700 leading-relaxed">
                Ждите запуска zemscan — мы автоматизируем большинство проверок
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-blue-600 font-bold text-xl flex-shrink-0">3.</span>
              <p className="text-slate-700 leading-relaxed">
                Получите 3 месяца бесплатно — ваш промокод придёт в январе 2026
              </p>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6 print:break-inside-avoid">
            <p className="text-slate-700 mb-2">
              <strong className="text-slate-900">Есть вопросы?</strong> Напишите нам:{" "}
              <a href="mailto:info@zemscan.ru" className="text-blue-600 underline">
                info@zemscan.ru
              </a>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t-2 border-slate-900 text-center print:break-inside-avoid">
          <p className="text-xl font-semibold text-slate-900 mb-2">
            zemscan.ru — прозрачность земельных торгов
          </p>
          <p className="text-sm text-slate-500">
            © 2025 zemscan. Все права защищены. Материал носит информационный характер и не является юридической консультацией.
          </p>
        </footer>
      </article>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          @page {
            size: A4;
            margin: 2cm 1.5cm;
          }
          
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
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
      `}</style>
    </div>
  );
}
