import { useState } from "react";
import { XCircle, ChevronDown, ChevronUp, DollarSign, Landmark, Scale, MoreVertical } from "lucide-react";

type Filters = {
  type: string;
  priceMin: string;
  priceMax: string;
  areaMin: string;
  areaMax: string;
  region: string;
  status: string;
  cadastralNumber: string;
  auctionType: string;
  dateFrom: string;
  dateTo: string;
  landCategory: string;
  purpose: string;
};

type FilterOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
  filters: Filters;
  onChange: (filters: Filters) => void;
  onApply: () => void;
  onReset: () => void;
};

const colors = {
  green: "#5C7820",
  darkGreen: "#3D4D21",
  beige: "#FAFFF2",
  lightGreen: "#E8F0D8",
  border: "#E0E8D0",
  text: {
    primary: "#1A1A1A",
    secondary: "#404040",
    muted: "#737373",
  },
};

export default function FilterOverlay({
  isOpen,
  onClose,
  filters,
  onChange,
  onApply,
  onReset,
}: FilterOverlayProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(["basic"]);

  const toggleSection = (section: string) => {
    if (expandedSections.includes(section)) {
      setExpandedSections(expandedSections.filter((s) => s !== section));
    } else {
      setExpandedSections([...expandedSections, section]);
    }
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.type) count++;
    if (filters.priceMin || filters.priceMax) count++;
    if (filters.areaMin || filters.areaMax) count++;
    if (filters.region) count++;
    if (filters.status) count++;
    if (filters.cadastralNumber) count++;
    if (filters.auctionType) count++;
    if (filters.dateFrom || filters.dateTo) count++;
    if (filters.landCategory) count++;
    if (filters.purpose) count++;
    return count;
  };

  const getSectionActiveCount = (section: string) => {
    let count = 0;
    if (section === "basic") {
      if (filters.region) count++;
      if (filters.type) count++;
      if (filters.status) count++;
      if (filters.priceMin || filters.priceMax) count++;
      if (filters.areaMin || filters.areaMax) count++;
    } else if (section === "land") {
      if (filters.cadastralNumber) count++;
      if (filters.landCategory) count++;
      if (filters.purpose) count++;
    } else if (section === "auction") {
      if (filters.auctionType) count++;
      if (filters.dateFrom || filters.dateTo) count++;
    }
    return count;
  };

  // Mock результатов (в реальном приложении - данные от API)
  const mockResultsCount = 247;
  const mockTotalValue = "1.2 млрд";

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black z-40"
        style={{ 
          opacity: isOpen ? 0.4 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transition: "opacity 300ms ease-in-out, visibility 300ms ease-in-out",
        }}
        onClick={onClose}
      />

      {/* Sliding Panel from Left */}
      <div
        className="fixed left-0 top-0 h-full shadow-2xl flex flex-col z-50"
        style={{ 
          backgroundColor: "#FFFFFF",
          width: "420px",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 350ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Header */}
        <div
          className="px-5 py-4 border-b flex items-center justify-between flex-shrink-0"
          style={{
            borderColor: colors.border,
          }}
        >
          <div>
            <h2
              className="text-base font-semibold"
              style={{ color: colors.text.primary }}
            >
              Фильтры
            </h2>
            {getActiveFiltersCount() > 0 && (
              <p className="text-xs mt-0.5" style={{ color: colors.text.muted }}>
                Применено: {getActiveFiltersCount()}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100 transition-all duration-200"
          >
            <XCircle size={20} style={{ color: colors.text.secondary }} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div 
          className="flex-1 overflow-y-auto px-6 py-4"
          style={{
            height: "calc(100% - 130px)", // фиксированная высота минус header и footer
          }}
        >
          {/* Live Results Counter */}
          <div 
            className="mb-4 p-3 rounded-lg border"
            style={{ 
              backgroundColor: colors.lightGreen,
              borderColor: colors.border,
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">📍</span>
              <span className="text-sm font-semibold" style={{ color: colors.green }}>
                Найдено: {mockResultsCount} участков
              </span>
              <span className="text-xs" style={{ color: colors.text.muted }}>
                на {mockTotalValue} ₽
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {/* ОСНОВНЫЕ ПАРАМЕТРЫ */}
            <div>
              <button
                onClick={() => toggleSection("basic")}
                className="w-full flex items-center justify-between mb-3 group"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="p-1.5 rounded-lg"
                    style={{ backgroundColor: colors.lightGreen }}
                  >
                    <DollarSign size={16} style={{ color: colors.green }} />
                  </div>
                  <h3
                    className="text-sm font-semibold"
                    style={{ color: colors.text.primary }}
                  >
                    Основные параметры
                  </h3>
                  {getSectionActiveCount("basic") > 0 && (
                    <span 
                      className="px-1.5 py-0.5 rounded text-xs font-medium"
                      style={{ 
                        backgroundColor: colors.green,
                        color: "white"
                      }}
                    >
                      {getSectionActiveCount("basic")}
                    </span>
                  )}
                </div>
                {expandedSections.includes("basic") ? (
                  <ChevronUp size={16} style={{ color: colors.green }} />
                ) : (
                  <ChevronDown size={16} style={{ color: colors.green }} />
                )}
              </button>

              {expandedSections.includes("basic") && (
                <div className="grid grid-cols-3 gap-3 pl-9">
                  {/* Region */}
                  <div>
                    <label
                      className="flex items-center gap-1.5 text-xs font-medium mb-1.5"
                      style={{ color: colors.text.primary }}
                    >
                      Регион
                      {filters.region && <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.green }} />}
                    </label>
                    <select
                      value={filters.region}
                      onChange={(e) =>
                        onChange({ ...filters, region: e.target.value })
                      }
                      className="w-full px-2.5 py-2 rounded-lg border text-xs"
                      style={{ 
                        borderColor: filters.region ? colors.green : colors.border,
                        backgroundColor: filters.region ? colors.lightGreen : "white"
                      }}
                    >
                      <option value="">Все регионы</option>
                      <option value="Московская область">Московская область</option>
                      <option value="Ленинградская область">Ленинградская область</option>
                      <option value="Республика Татарстан">Республика Татарстан</option>
                      <option value="Свердловская область">Свердловская область</option>
                      <option value="Нижегородская область">Нижегородская область</option>
                    </select>
                  </div>

                  {/* Type */}
                  <div>
                    <label
                      className="flex items-center gap-1.5 text-xs font-medium mb-1.5"
                      style={{ color: colors.text.primary }}
                    >
                      Тип участка
                      {filters.type && <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.green }} />}
                    </label>
                    <select
                      value={filters.type}
                      onChange={(e) =>
                        onChange({ ...filters, type: e.target.value })
                      }
                      className="w-full px-2.5 py-2 rounded-lg border text-xs"
                      style={{ 
                        borderColor: filters.type ? colors.green : colors.border,
                        backgroundColor: filters.type ? colors.lightGreen : "white"
                      }}
                    >
                      <option value="">Все типы</option>
                      <option value="Коммерческая">Коммерческая</option>
                      <option value="ИЖС">ИЖС</option>
                      <option value="Сельхозназначение">Сельхозназначение</option>
                      <option value="Промназначение">Промназначение</option>
                    </select>
                  </div>

                  {/* Status */}
                  <div>
                    <label
                      className="flex items-center gap-1.5 text-xs font-medium mb-1.5"
                      style={{ color: colors.text.primary }}
                    >
                      Статус
                      {filters.status && <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.green }} />}
                    </label>
                    <select
                      value={filters.status}
                      onChange={(e) =>
                        onChange({ ...filters, status: e.target.value })
                      }
                      className="w-full px-2.5 py-2 rounded-lg border text-xs"
                      style={{ 
                        borderColor: filters.status ? colors.green : colors.border,
                        backgroundColor: filters.status ? colors.lightGreen : "white"
                      }}
                    >
                      <option value="">Все</option>
                      <option value="active">Активные</option>
                      <option value="upcoming">Предстоящие</option>
                      <option value="ended">Завершенные</option>
                    </select>
                  </div>

                  {/* Price Min */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: colors.text.primary }}
                    >
                      Цена от, ₽
                    </label>
                    <input
                      type="text"
                      placeholder="Минимальная цена"
                      value={filters.priceMin}
                      onChange={(e) =>
                        onChange({ ...filters, priceMin: e.target.value })
                      }
                      className="w-full px-2.5 py-2 rounded-lg border text-xs"
                      style={{ borderColor: colors.border }}
                    />
                  </div>

                  {/* Price Max */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: colors.text.primary }}
                    >
                      Цена до, ₽
                    </label>
                    <input
                      type="text"
                      placeholder="Максимальная цена"
                      value={filters.priceMax}
                      onChange={(e) =>
                        onChange({ ...filters, priceMax: e.target.value })
                      }
                      className="w-full px-2.5 py-2 rounded-lg border text-xs"
                      style={{ borderColor: colors.border }}
                    />
                  </div>

                  {/* Area Min */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: colors.text.primary }}
                    >
                      Площадь от, га
                    </label>
                    <input
                      type="text"
                      placeholder="Минимальная площадь"
                      value={filters.areaMin}
                      onChange={(e) =>
                        onChange({ ...filters, areaMin: e.target.value })
                      }
                      className="w-full px-2.5 py-2 rounded-lg border text-xs"
                      style={{ borderColor: colors.border }}
                    />
                  </div>

                  {/* Area Max */}
                  <div className="col-span-2">
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: colors.text.primary }}
                    >
                      Площадь до, га
                    </label>
                    <input
                      type="text"
                      placeholder="Максимальная площадь"
                      value={filters.areaMax}
                      onChange={(e) =>
                        onChange({ ...filters, areaMax: e.target.value })
                      }
                      className="w-full px-2.5 py-2 rounded-lg border text-xs"
                      style={{ borderColor: colors.border }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ХАРАКТЕРИСТИКИ УЧАСТКА */}
            <div>
              <button
                onClick={() => toggleSection("land")}
                className="w-full flex items-center justify-between mb-3"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="p-1.5 rounded-lg"
                    style={{ backgroundColor: colors.lightGreen }}
                  >
                    <Landmark size={16} style={{ color: colors.green }} />
                  </div>
                  <h3
                    className="text-sm font-semibold"
                    style={{ color: colors.text.primary }}
                  >
                    Характеристики участка
                  </h3>
                  {getSectionActiveCount("land") > 0 && (
                    <span 
                      className="px-1.5 py-0.5 rounded text-xs font-medium"
                      style={{ 
                        backgroundColor: colors.green,
                        color: "white"
                      }}
                    >
                      {getSectionActiveCount("land")}
                    </span>
                  )}
                </div>
                {expandedSections.includes("land") ? (
                  <ChevronUp size={16} style={{ color: colors.green }} />
                ) : (
                  <ChevronDown size={16} style={{ color: colors.green }} />
                )}
              </button>

              {expandedSections.includes("land") && (
                <div className="grid grid-cols-3 gap-3 pl-9">
                  {/* Cadastral Number */}
                  <div className="col-span-2">
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: colors.text.primary }}
                    >
                      Кадастровый номер
                    </label>
                    <input
                      type="text"
                      placeholder="Например, 77:01:0000000:0000"
                      value={filters.cadastralNumber}
                      onChange={(e) =>
                        onChange({ ...filters, cadastralNumber: e.target.value })
                      }
                      className="w-full px-2.5 py-2 rounded-lg border text-xs font-mono"
                      style={{ borderColor: colors.border }}
                    />
                  </div>

                  {/* Land Category */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: colors.text.primary }}
                    >
                      Категория земель
                    </label>
                    <select
                      value={filters.landCategory}
                      onChange={(e) =>
                        onChange({ ...filters, landCategory: e.target.value })
                      }
                      className="w-full px-2.5 py-2 rounded-lg border text-xs"
                      style={{ borderColor: colors.border }}
                    >
                      <option value="">Все категории</option>
                      <option value="Земли населенных пунктов">Земли населенных пунктов</option>
                      <option value="Земли сельхозназначения">Земли сельхозназначения</option>
                      <option value="Земли промышленности">Земли промышленности</option>
                      <option value="Земли лесного фонда">Земли лесного фонда</option>
                    </select>
                  </div>

                  {/* Purpose */}
                  <div className="col-span-3">
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: colors.text.primary }}
                    >
                      Целевое назначение (разрешенное использование)
                    </label>
                    <select
                      value={filters.purpose}
                      onChange={(e) =>
                        onChange({ ...filters, purpose: e.target.value })
                      }
                      className="w-full px-2.5 py-2 rounded-lg border text-xs"
                      style={{ borderColor: colors.border }}
                    >
                      <option value="">Все</option>
                      <option value="Коммерческое землепользование">Коммерческое землепользование</option>
                      <option value="Жилые дома">Жилые дома индивидуальной застройки</option>
                      <option value="Сельское хозяйство">Для сельскохозяйственного производства</option>
                      <option value="Промышленное землепользование">Промышленное землепользование</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* ТОРГИ */}
            <div>
              <button
                onClick={() => toggleSection("auction")}
                className="w-full flex items-center justify-between mb-3"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="p-1.5 rounded-lg"
                    style={{ backgroundColor: colors.lightGreen }}
                  >
                    <Scale size={16} style={{ color: colors.green }} />
                  </div>
                  <h3
                    className="text-sm font-semibold"
                    style={{ color: colors.text.primary }}
                  >
                    Параметры торгов
                  </h3>
                  {getSectionActiveCount("auction") > 0 && (
                    <span 
                      className="px-1.5 py-0.5 rounded text-xs font-medium"
                      style={{ 
                        backgroundColor: colors.green,
                        color: "white"
                      }}
                    >
                      {getSectionActiveCount("auction")}
                    </span>
                  )}
                </div>
                {expandedSections.includes("auction") ? (
                  <ChevronUp size={16} style={{ color: colors.green }} />
                ) : (
                  <ChevronDown size={16} style={{ color: colors.green }} />
                )}
              </button>

              {expandedSections.includes("auction") && (
                <div className="grid grid-cols-3 gap-3 pl-9">
                  {/* Auction Type */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: colors.text.primary }}
                    >
                      Форма торгов
                    </label>
                    <select
                      value={filters.auctionType}
                      onChange={(e) =>
                        onChange({ ...filters, auctionType: e.target.value })
                      }
                      className="w-full px-2.5 py-2 rounded-lg border text-xs"
                      style={{ borderColor: colors.border }}
                    >
                      <option value="">Все</option>
                      <option value="Открытый аукцион">Открытый аукцион</option>
                      <option value="Конкурс">Конкурс</option>
                      <option value="Публичное предложение">Публичное предложение</option>
                      <option value="Аукцион на понижение">Аукцион на понижение</option>
                    </select>
                  </div>

                  {/* Date From */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: colors.text.primary }}
                    >
                      Дата аукциона с
                    </label>
                    <input
                      type="date"
                      value={filters.dateFrom}
                      onChange={(e) =>
                        onChange({ ...filters, dateFrom: e.target.value })
                      }
                      className="w-full px-2.5 py-2 rounded-lg border text-xs"
                      style={{ borderColor: colors.border }}
                    />
                  </div>

                  {/* Date To */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: colors.text.primary }}
                    >
                      Дата аукциона по
                    </label>
                    <input
                      type="date"
                      value={filters.dateTo}
                      onChange={(e) =>
                        onChange({ ...filters, dateTo: e.target.value })
                      }
                      className="w-full px-2.5 py-2 rounded-lg border text-xs"
                      style={{ borderColor: colors.border }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="px-6 py-2.5 border-t flex items-center justify-between flex-shrink-0"
          style={{
            borderColor: colors.border,
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
          <button
            onClick={onReset}
            className="px-4 py-1.5 rounded-lg border transition-all hover:bg-gray-50 text-xs"
            style={{
              borderColor: colors.border,
              color: colors.text.secondary,
              fontWeight: 500,
            }}
          >
            Сбросить {getActiveFiltersCount() > 0 && `(${getActiveFiltersCount()})`}
          </button>
          <button
            onClick={() => {
              onApply();
              onClose();
            }}
            className="px-5 py-1.5 rounded-lg transition-all hover:opacity-90 text-xs"
            style={{
              backgroundColor: colors.green,
              color: "white",
              fontWeight: 600,
            }}
          >
            Показать {mockResultsCount} результатов
          </button>
        </div>
      </div>
    </>
  );
}