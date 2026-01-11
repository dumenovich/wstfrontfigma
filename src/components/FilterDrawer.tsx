import { useState } from "react";
import { X, ChevronDown, ChevronUp, DollarSign, Map, Calendar, FileText, Landmark, Scale } from "lucide-react";

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

type FilterDrawerProps = {
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

export default function FilterDrawer({
  isOpen,
  onClose,
  filters,
  onChange,
  onApply,
  onReset,
}: FilterDrawerProps) {
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

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 transition-opacity z-40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="fixed right-0 top-0 h-full w-[420px] shadow-2xl z-50 flex flex-col"
        style={{ backgroundColor: "white" }}
      >
        {/* Header */}
        <div
          className="px-6 py-4 border-b"
          style={{
            backgroundColor: colors.lightGreen,
            borderColor: colors.border,
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2
                className="text-lg font-semibold"
                style={{ color: colors.green }}
              >
                Фильтры
              </h2>
              {getActiveFiltersCount() > 0 && (
                <p className="text-xs mt-1" style={{ color: colors.text.muted }}>
                  Применено: {getActiveFiltersCount()}
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1 hover:bg-white/50 transition-colors"
            >
              <X size={20} color={colors.green} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-4">
            {/* ОСНОВНЫЕ ПАРАМЕТРЫ */}
            <div>
              <button
                onClick={() => toggleSection("basic")}
                className="w-full flex items-center justify-between mb-3 group"
              >
                <div className="flex items-center gap-2">
                  <DollarSign
                    size={16}
                    style={{ color: colors.green }}
                  />
                  <h3
                    className="font-semibold text-sm"
                    style={{ color: colors.text.primary }}
                  >
                    Основные параметры
                  </h3>
                </div>
                {expandedSections.includes("basic") ? (
                  <ChevronUp size={16} style={{ color: colors.green }} />
                ) : (
                  <ChevronDown size={16} style={{ color: colors.green }} />
                )}
              </button>

              {expandedSections.includes("basic") && (
                <div className="space-y-3 pl-6">
                  {/* Region */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: colors.text.primary }}
                    >
                      Регион
                    </label>
                    <select
                      value={filters.region}
                      onChange={(e) =>
                        onChange({ ...filters, region: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-lg border text-sm"
                      style={{ borderColor: colors.border }}
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
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: colors.text.primary }}
                    >
                      Тип участка
                    </label>
                    <select
                      value={filters.type}
                      onChange={(e) =>
                        onChange({ ...filters, type: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-lg border text-sm"
                      style={{ borderColor: colors.border }}
                    >
                      <option value="">Все типы</option>
                      <option value="Коммерческая">Коммерческая</option>
                      <option value="ИЖС">ИЖС</option>
                      <option value="Сельхозназначение">Сельхозназначение</option>
                      <option value="Промназначение">Промназначение</option>
                    </select>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: colors.text.primary }}
                    >
                      Цена, ₽
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="От"
                        value={filters.priceMin}
                        onChange={(e) =>
                          onChange({ ...filters, priceMin: e.target.value })
                        }
                        className="px-3 py-2 rounded-lg border text-sm"
                        style={{ borderColor: colors.border }}
                      />
                      <input
                        type="text"
                        placeholder="До"
                        value={filters.priceMax}
                        onChange={(e) =>
                          onChange({ ...filters, priceMax: e.target.value })
                        }
                        className="px-3 py-2 rounded-lg border text-sm"
                        style={{ borderColor: colors.border }}
                      />
                    </div>
                  </div>

                  {/* Area Range */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: colors.text.primary }}
                    >
                      Площадь, га
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="От"
                        value={filters.areaMin}
                        onChange={(e) =>
                          onChange({ ...filters, areaMin: e.target.value })
                        }
                        className="px-3 py-2 rounded-lg border text-sm"
                        style={{ borderColor: colors.border }}
                      />
                      <input
                        type="text"
                        placeholder="До"
                        value={filters.areaMax}
                        onChange={(e) =>
                          onChange({ ...filters, areaMax: e.target.value })
                        }
                        className="px-3 py-2 rounded-lg border text-sm"
                        style={{ borderColor: colors.border }}
                      />
                    </div>
                  </div>

                  {/* Status */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: colors.text.primary }}
                    >
                      Статус
                    </label>
                    <select
                      value={filters.status}
                      onChange={(e) =>
                        onChange({ ...filters, status: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-lg border text-sm"
                      style={{ borderColor: colors.border }}
                    >
                      <option value="">Все</option>
                      <option value="active">Активные</option>
                      <option value="upcoming">Предстоящие</option>
                      <option value="ended">Завершенные</option>
                    </select>
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
                  <Landmark size={16} style={{ color: colors.green }} />
                  <h3
                    className="font-semibold text-sm"
                    style={{ color: colors.text.primary }}
                  >
                    Характеристики участка
                  </h3>
                </div>
                {expandedSections.includes("land") ? (
                  <ChevronUp size={16} style={{ color: colors.green }} />
                ) : (
                  <ChevronDown size={16} style={{ color: colors.green }} />
                )}
              </button>

              {expandedSections.includes("land") && (
                <div className="space-y-3 pl-6">
                  {/* Cadastral Number */}
                  <div>
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
                      className="w-full px-3 py-2 rounded-lg border text-sm font-mono"
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
                      className="w-full px-3 py-2 rounded-lg border text-sm"
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
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: colors.text.primary }}
                    >
                      Целевое назначение
                    </label>
                    <select
                      value={filters.purpose}
                      onChange={(e) =>
                        onChange({ ...filters, purpose: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-lg border text-sm"
                      style={{ borderColor: colors.border }}
                    >
                      <option value="">Все</option>
                      <option value="Коммерческое землепользование">Коммерческое землепользование</option>
                      <option value="Жилые дома">Жилые дома</option>
                      <option value="Сельское хозяйство">Сельское хозяйство</option>
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
                  <Scale size={16} style={{ color: colors.green }} />
                  <h3
                    className="font-semibold text-sm"
                    style={{ color: colors.text.primary }}
                  >
                    Параметры торгов
                  </h3>
                </div>
                {expandedSections.includes("auction") ? (
                  <ChevronUp size={16} style={{ color: colors.green }} />
                ) : (
                  <ChevronDown size={16} style={{ color: colors.green }} />
                )}
              </button>

              {expandedSections.includes("auction") && (
                <div className="space-y-3 pl-6">
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
                      className="w-full px-3 py-2 rounded-lg border text-sm"
                      style={{ borderColor: colors.border }}
                    >
                      <option value="">Все</option>
                      <option value="Открытый аукцион">Открытый аукцион</option>
                      <option value="Конкурс">Конкурс</option>
                      <option value="Публичное предложение">Публичное предложение</option>
                      <option value="Аукцион на понижение">Аукцион на понижение</option>
                    </select>
                  </div>

                  {/* Date Range */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: colors.text.primary }}
                    >
                      Дата аукциона
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="date"
                        value={filters.dateFrom}
                        onChange={(e) =>
                          onChange({ ...filters, dateFrom: e.target.value })
                        }
                        className="px-3 py-2 rounded-lg border text-sm"
                        style={{ borderColor: colors.border }}
                      />
                      <input
                        type="date"
                        value={filters.dateTo}
                        onChange={(e) =>
                          onChange({ ...filters, dateTo: e.target.value })
                        }
                        className="px-3 py-2 rounded-lg border text-sm"
                        style={{ borderColor: colors.border }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="px-6 py-4 border-t"
          style={{
            backgroundColor: colors.beige,
            borderColor: colors.border,
          }}
        >
          <div className="flex gap-3">
            <button
              onClick={onReset}
              className="flex-1 px-4 py-2.5 rounded-lg border transition-all hover:bg-gray-50"
              style={{
                borderColor: colors.border,
                color: colors.text.secondary,
                fontSize: "0.875rem",
                fontWeight: 500,
              }}
            >
              Сбросить
            </button>
            <button
              onClick={() => {
                onApply();
                onClose();
              }}
              className="flex-1 px-4 py-2.5 rounded-lg transition-all hover:opacity-90"
              style={{
                backgroundColor: colors.green,
                color: "white",
                fontSize: "0.875rem",
                fontWeight: 600,
              }}
            >
              Применить {getActiveFiltersCount() > 0 && `(${getActiveFiltersCount()})`}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}