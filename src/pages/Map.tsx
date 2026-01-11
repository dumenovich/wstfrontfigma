import { LogoVariant2 } from "../components/LogoVariants";
import { useState, useEffect, useRef } from "react";
import { MapPin, X, Filter, ChevronDown, ChevronUp, List, TrendingUp, Calendar, DollarSign, SlidersHorizontal, FileText, Landmark, Scale, Search, ChevronLeft, ChevronRight, Star, GitCompare, Folder, Bell, User, Home, Layers, Ruler, Share2, ZoomIn, ZoomOut, Navigation, Compass, MessageSquare, Edit3 } from "lucide-react";
import FilterOverlay from "../components/FilterOverlay";

type MapPageProps = {
  onBack: () => void;
  onBlogClick: () => void;
};

type Lot = {
  id: number;
  title: string;
  type: string;
  area: number; // в га
  price: number; // в рублях
  cadastralNumber: string;
  auctionType: string; // Форма торгов
  purpose: string; // Целевое назначение
  location: {
    city: string;
    region: string;
    address: string;
    lat: number;
    lng: number;
  };
  auctionDate: string;
  status: "active" | "upcoming" | "ended";
};

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

type MapLayer = {
  id: string;
  name: string;
  enabled: boolean;
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

// Моковые данные лотов
const mockLots: Lot[] = [
  {
    id: 1,
    title: "Участок под коммерческую застройку",
    type: "Коммерческая",
    area: 2.5,
    price: 15000000,
    cadastralNumber: "77:01:0000000:0000",
    auctionType: "Открытый аукцион",
    purpose: "Коммерческое землепользование",
    location: {
      city: "Москва",
      region: "Московская область",
      address: "Новая Москва, п. Коммунарка",
      lat: 55.5833,
      lng: 37.4833,
    },
    auctionDate: "2025-02-15",
    status: "active",
  },
  {
    id: 2,
    title: "Земля сельхозназначения",
    type: "Сельхозназначение",
    area: 15.0,
    price: 8500000,
    cadastralNumber: "77:01:0000000:0001",
    auctionType: "Открытый аукцион",
    purpose: "Сельское хозяйство",
    location: {
      city: "Подольск",
      region: "Московская область",
      address: "Подольский район, д. Дубровицы",
      lat: 55.4333,
      lng: 37.5167,
    },
    auctionDate: "2025-02-20",
    status: "active",
  },
  {
    id: 3,
    title: "Участок под жилую застройку",
    type: "ИЖС",
    area: 0.8,
    price: 4200000,
    cadastralNumber: "78:01:0000000:0000",
    auctionType: "Открытый аукцион",
    purpose: "Жилые дома",
    location: {
      city: "Санкт-Петербург",
      region: "Ленинградская область",
      address: "Всеволожский район, п. Новое Девяткино",
      lat: 60.05,
      lng: 30.45,
    },
    auctionDate: "2025-02-18",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Промышленный участок",
    type: "Промназначение",
    area: 5.2,
    price: 22000000,
    cadastralNumber: "77:01:0000000:0002",
    auctionType: "Открытый аукцион",
    purpose: "Промышленное землепользование",
    location: {
      city: "Казань",
      region: "Республика Татарстан",
      address: "Зеленодольский район, п. Васильево",
      lat: 55.8406,
      lng: 48.9735,
    },
    auctionDate: "2025-02-25",
    status: "upcoming",
  },
  {
    id: 5,
    title: "Участок под торговый центр",
    type: "Коммеческая",
    area: 1.2,
    price: 18000000,
    cadastralNumber: "77:01:0000000:0003",
    auctionType: "Открытый аукцион",
    purpose: "Коммерческое землепользование",
    location: {
      city: "Екатеринбург",
      region: "Свердловская обасть",
      address: "Верх-Исетский район",
      lat: 56.8389,
      lng: 60.5974,
    },
    auctionDate: "2025-02-12",
    status: "active",
  },
  {
    id: 6,
    title: "Участок под складской комплекс",
    type: "Промназначение",
    area: 3.8,
    price: 12000000,
    cadastralNumber: "77:01:0000000:0004",
    auctionType: "Открытый аукцион",
    purpose: "Промышленное землепользование",
    location: {
      city: "Нижний Новгород",
      region: "Нижегородская область",
      address: "Богородский район",
      lat: 56.3269,
      lng: 44.0059,
    },
    auctionDate: "2025-03-01",
    status: "upcoming",
  },
];

export default function MapPage({ onBack, onBlogClick }: MapPageProps) {
  const [selectedLot, setSelectedLot] = useState<Lot | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<any>(null);
  const [filters, setFilters] = useState<Filters>({
    type: "",
    priceMin: "",
    priceMax: "",
    areaMin: "",
    areaMax: "",
    region: "",
    status: "",
    cadastralNumber: "",
    auctionType: "",
    dateFrom: "",
    dateTo: "",
    landCategory: "",
    purpose: "",
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(true);
  const [mapLayers, setMapLayers] = useState<MapLayer[]>([
    { id: "roads", name: "Дороги", enabled: true },
    { id: "buildings", name: "Здания", enabled: true },
    { id: "water", name: "Вода", enabled: true },
    { id: "greenery", name: "Растительность", enabled: true },
  ]);

  const handleLotClick = (lot: Lot) => {
    setSelectedLot(lot);
    if (mapInstance) {
      mapInstance.setView([lot.location.lat, lot.location.lng], 12);
    }
  };

  // Initialize Leaflet map
  useEffect(() => {
    if (!mapRef.current) return;

    // Load Leaflet and MarkerCluster from CDN
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const loadCSS = (href: string) => {
      const existingLink = document.querySelector(`link[href="${href}"]`);
      if (existingLink) return;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    };

    // Load CSS files
    loadCSS("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css");
    loadCSS("https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css");
    loadCSS("https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css");

    // Load scripts sequentially
    Promise.all([
      loadScript("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"),
    ]).then(() => {
      return loadScript("https://unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js");
    }).then(() => {
      const L = (window as any).L;
      
      // Add custom cluster styles
      const style = document.createElement("style");
      style.textContent = `
        .marker-cluster-small,
        .marker-cluster-medium,
        .marker-cluster-large {
          background-color: ${colors.lightGreen};
          border: 3px solid ${colors.green};
        }
        .marker-cluster-small div,
        .marker-cluster-medium div,
        .marker-cluster-large div {
          background-color: ${colors.green};
          color: white;
          font-weight: 600;
          font-size: 14px;
        }
        .marker-cluster {
          box-shadow: 0 2px 8px rgba(92, 120, 32, 0.3);
        }
      `;
      document.head.appendChild(style);

      // Initialize map
      const map = L.map(mapRef.current!, {
        center: [55.7558, 37.6173], // Moscow center
        zoom: 5,
        zoomControl: true,
      });

      // Add tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      // Create marker cluster group
      const markers = L.markerClusterGroup({
        maxClusterRadius: 80,
        spiderfyOnMaxZoom: true,
        showCoverageOnHover: false,
        zoomToBoundsOnClick: true,
      });

      // Function to create custom icon based on status
      const createCustomIcon = (status: string) => {
        const iconColor = 
          status === "active" ? colors.green :
          status === "upcoming" ? "#D97706" :
          "#6B7280";
        
        return L.divIcon({
          className: "custom-marker",
          html: `
            <div style="
              background-color: ${iconColor};
              width: 32px;
              height: 32px;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              border: 3px solid white;
              box-shadow: 0 2px 8px rgba(0,0,0,0.2);
              display: flex;
              align-items: center;
              justify-content: center;
            ">
              <div style="
                width: 12px;
                height: 12px;
                background-color: white;
                border-radius: 50%;
                transform: rotate(45deg);
              "></div>
            </div>
          `,
          iconSize: [32, 32],
          iconAnchor: [16, 32],
        });
      };

      // Add markers for each lot
      mockLots.forEach((lot) => {
        const marker = L.marker([lot.location.lat, lot.location.lng], {
          icon: createCustomIcon(lot.status),
        });

        marker.on("click", () => {
          handleLotClick(lot);
        });

        markers.addLayer(marker);
      });

      map.addLayer(markers);
      setMapInstance(map);

      return () => {
        map.remove();
      };
    });
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Helper to get active filter chips
  const getActiveFilterChips = () => {
    const chips: { label: string; value: string; key: keyof Filters }[] = [];
    
    if (filters.region) chips.push({ label: filters.region, value: filters.region, key: "region" });
    if (filters.type) chips.push({ label: filters.type, value: filters.type, key: "type" });
    if (filters.status) {
      const statusLabel = filters.status === "active" ? "Активные" : filters.status === "upcoming" ? "Предстоящие" : "Завершенные";
      chips.push({ label: statusLabel, value: filters.status, key: "status" });
    }
    if (filters.priceMin || filters.priceMax) {
      const priceLabel = `Цена: ${filters.priceMin || "∞"} - ${filters.priceMax || "∞"} ₽`;
      chips.push({ label: priceLabel, value: "price", key: "priceMin" });
    }
    if (filters.areaMin || filters.areaMax) {
      const areaLabel = `Площадь: ${filters.areaMin || "∞"} - ${filters.areaMax || "∞"} га`;
      chips.push({ label: areaLabel, value: "area", key: "areaMin" });
    }
    if (filters.auctionType) chips.push({ label: filters.auctionType, value: filters.auctionType, key: "auctionType" });
    if (filters.landCategory) chips.push({ label: filters.landCategory, value: filters.landCategory, key: "landCategory" });
    if (filters.purpose) chips.push({ label: filters.purpose, value: filters.purpose, key: "purpose" });
    if (filters.cadastralNumber) chips.push({ label: `КН: ${filters.cadastralNumber}`, value: filters.cadastralNumber, key: "cadastralNumber" });
    if (filters.dateFrom || filters.dateTo) {
      const dateLabel = `Дата: ${filters.dateFrom || "∞"} - ${filters.dateTo || "∞"}`;
      chips.push({ label: dateLabel, value: "date", key: "dateFrom" });
    }
    
    return chips;
  };

  const removeFilter = (key: keyof Filters) => {
    if (key === "priceMin") {
      setFilters({ ...filters, priceMin: "", priceMax: "" });
    } else if (key === "areaMin") {
      setFilters({ ...filters, areaMin: "", areaMax: "" });
    } else if (key === "dateFrom") {
      setFilters({ ...filters, dateFrom: "", dateTo: "" });
    } else {
      setFilters({ ...filters, [key]: "" });
    }
  };

  return (
    <div
      className="h-screen flex flex-col"
      style={{ backgroundColor: colors.beige }}
    >
      {/* Main Content - Full Height */}
      <main className="relative h-full overflow-hidden">
        <div className="h-full flex">
          {/* Map Container - takes full space */}
          <div className="flex-1 relative">
            {/* Leaflet Map - Full size, lowest z-index */}
            <div 
              ref={mapRef} 
              className="absolute inset-0"
              style={{ zIndex: 1 }}
            />

            {/* Top Bar - Search + Layer Toggles + Filters */}
            <div
              className="absolute top-4 left-4 right-4 flex items-center gap-3"
              style={{ zIndex: 100 }}
            >
              {/* Menu Button */}
              <button
                className="w-10 h-10 flex items-center justify-center rounded-lg transition-all flex-shrink-0"
                style={{
                  backgroundColor: "white",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                  color: colors.text.secondary,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.2)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                title="Меню"
              >
                <div className="flex flex-col gap-[3px]">
                  <div className="w-4 h-[2px]" style={{ backgroundColor: colors.text.secondary }} />
                  <div className="w-4 h-[2px]" style={{ backgroundColor: colors.text.secondary }} />
                  <div className="w-4 h-[2px]" style={{ backgroundColor: colors.text.secondary }} />
                </div>
              </button>

              {/* Search Bar */}
              <div
                className="flex items-center gap-2 px-4 py-2.5 rounded-full transition-all"
                style={{
                  backgroundColor: "white",
                  width: "380px",
                  flexShrink: 0,
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Search size={18} style={{ color: colors.text.muted }} />
                <input
                  type="text"
                  placeholder="Кадастровый номер, адрес или координаты"
                  className="flex-1 outline-none text-sm"
                  style={{
                    backgroundColor: "transparent",
                    color: colors.text.primary,
                  }}
                />
                <button
                  className="p-1 hover:bg-gray-100 rounded-full transition-all"
                  title="Очистить"
                >
                  <X size={16} style={{ color: colors.text.muted }} />
                </button>
              </div>

              {/* Layer Toggles */}
              <div className="flex items-center gap-2">
                {mapLayers.map((layer) => (
                  <button
                    key={layer.id}
                    onClick={() =>
                      setMapLayers(
                        mapLayers.map((l) =>
                          l.id === layer.id ? { ...l, enabled: !l.enabled } : l
                        )
                      )
                    }
                    className="px-3 py-1.5 rounded-full text-sm transition-all"
                    style={{
                      backgroundColor: "white",
                      color: layer.enabled ? colors.green : colors.text.secondary,
                      fontWeight: layer.enabled ? 500 : 400,
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.2)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {layer.name}
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div
                className="h-6 w-px"
                style={{ backgroundColor: "#E5E7EB" }}
              />

              {/* Active Filter Chips */}
              {getActiveFilterChips().slice(0, 2).map((chip, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 pl-3 pr-2 py-1.5 rounded-full text-sm"
                  style={{
                    backgroundColor: "white",
                    color: colors.text.secondary,
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <span>{chip.label}</span>
                  <button
                    onClick={() => removeFilter(chip.key)}
                    className="hover:bg-gray-100 rounded-full p-0.5 transition-all"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}

              {/* More filters indicator */}
              {getActiveFilterChips().length > 2 && (
                <div
                  className="px-3 py-1.5 rounded-full text-sm"
                  style={{
                    backgroundColor: "white",
                    color: colors.text.secondary,
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  +{getActiveFilterChips().length - 2}
                </div>
              )}

              {/* Filter Button */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center gap-2 pl-3 pr-4 py-1.5 rounded-full transition-all ml-auto"
                style={{
                  backgroundColor: colors.green,
                  color: "white",
                  flexShrink: 0,
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Filter size={16} />
                <span className="text-sm font-medium">Фильтры</span>
                {getActiveFilterChips().length > 0 && (
                  <span
                    className="w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: "white",
                      color: colors.green,
                    }}
                  >
                    {getActiveFilterChips().length}
                  </span>
                )}
              </button>
            </div>
            
            {/* Right Tools Panel */}
            <div
              className="absolute right-4 top-20 flex flex-col gap-2"
              style={{ zIndex: 100 }}
            >
              {/* Layers Button */}
              <button
                className="w-11 h-11 flex items-center justify-center rounded-lg shadow-lg transition-all hover:scale-105"
                style={{
                  backgroundColor: "white",
                  border: `1px solid ${colors.border}`,
                  color: colors.text.secondary,
                }}
                title="Слои карты"
              >
                <Layers size={20} />
              </button>

              {/* Ruler/Measure Button */}
              <button
                className="w-11 h-11 flex items-center justify-center rounded-lg shadow-lg transition-all hover:scale-105"
                style={{
                  backgroundColor: "white",
                  border: `1px solid ${colors.border}`,
                  color: colors.text.secondary,
                }}
                title="Измерение расстояния"
              >
                <Ruler size={20} />
              </button>

              {/* Share Button */}
              <button
                className="w-11 h-11 flex items-center justify-center rounded-lg shadow-lg transition-all hover:scale-105"
                style={{
                  backgroundColor: "white",
                  border: `1px solid ${colors.border}`,
                  color: colors.text.secondary,
                }}
                title="Поделиться карто"
              >
                <Share2 size={20} />
              </button>

              <div
                className="w-11 border-t my-1"
                style={{ borderColor: colors.border }}
              />

              {/* Zoom In */}
              <button
                className="w-11 h-11 flex items-center justify-center rounded-lg shadow-lg transition-all hover:scale-105"
                style={{
                  backgroundColor: "white",
                  border: `1px solid ${colors.border}`,
                  color: colors.text.secondary,
                }}
                title="Приблизить"
                onClick={() => mapInstance?.zoomIn()}
              >
                <ZoomIn size={20} />
              </button>

              {/* Zoom Out */}
              <button
                className="w-11 h-11 flex items-center justify-center rounded-lg shadow-lg transition-all hover:scale-105"
                style={{
                  backgroundColor: "white",
                  border: `1px solid ${colors.border}`,
                  color: colors.text.secondary,
                }}
                title="Отдалить"
                onClick={() => mapInstance?.zoomOut()}
              >
                <ZoomOut size={20} />
              </button>

              {/* Geolocation Button */}
              <button
                className="w-11 h-11 flex items-center justify-center rounded-lg shadow-lg transition-all hover:scale-105"
                style={{
                  backgroundColor: "white",
                  border: `1px solid ${colors.border}`,
                  color: colors.text.secondary,
                }}
                title="Моё местоположение"
              >
                <Navigation size={20} />
              </button>

              {/* Compass Button */}
              <button
                className="w-11 h-11 flex items-center justify-center rounded-lg shadow-lg transition-all hover:scale-105"
                style={{
                  backgroundColor: "white",
                  border: `1px solid ${colors.border}`,
                  color: colors.text.secondary,
                }}
                title="Сбросить ориентацию"
              >
                <Compass size={20} />
              </button>
            </div>

            {/* Bottom Footer - над картой */}
            <div
              className="absolute bottom-0 left-0 right-0 px-4 py-2 flex items-center justify-between gap-4 text-xs"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(8px)",
                borderTop: `1px solid ${colors.border}`,
                zIndex: 100,
                display: "none", // Временно скрыта
              }}
            >
              {/* Left: Legend + Counter */}
              <div className="flex items-center gap-4">
                {/* Legend */}
                <button
                  className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100 transition-all"
                  style={{ color: colors.text.secondary }}
                >
                  <MapPin size={14} style={{ color: colors.green }} />
                  <span>Легенда</span>
                </button>

                {/* Counter */}
                <div
                  className="flex items-center gap-2 px-2 py-1"
                  style={{ color: colors.text.muted }}
                >
                  <span>Видимо:</span>
                  <span style={{ color: colors.green, fontWeight: 600 }}>1,247</span>
                  <span className="mx-1">•</span>
                  <span>Всего:</span>
                  <span style={{ color: colors.text.primary, fontWeight: 600 }}>
                    58,432
                  </span>
                </div>
              </div>

              {/* Center: Coordinates */}
              <button
                className="px-2 py-1 rounded hover:bg-gray-100 transition-all font-mono"
                style={{ color: colors.text.secondary }}
                title="Клик для копирования"
              >
                55.7558, 37.6173
              </button>

              {/* Right: Scale + Beta + Copyright */}
              <div className="flex items-center gap-4">
                {/* Scale */}
                <div
                  className="flex items-center gap-2"
                  style={{ color: colors.text.muted }}
                >
                  <div
                    className="w-20 h-1 relative"
                    style={{
                      background: `linear-gradient(to right, ${colors.border} 0%, ${colors.border} 10%, transparent 10%, transparent 20%, ${colors.border} 20%, ${colors.border} 30%, transparent 30%, transparent 40%, ${colors.border} 40%, ${colors.border} 50%, transparent 50%, transparent 60%, ${colors.border} 60%, ${colors.border} 70%, transparent 70%, transparent 80%, ${colors.border} 80%, ${colors.border} 90%, transparent 90%, transparent 100%)`,
                      borderBottom: `2px solid ${colors.border}`,
                      borderLeft: `2px solid ${colors.border}`,
                      borderRight: `2px solid ${colors.border}`,
                    }}
                  />
                  <span>50 км</span>
                </div>

                {/* Beta Badge */}
                <span
                  className="px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: colors.lightGreen,
                    color: colors.green,
                    fontWeight: 600,
                  }}
                >
                  BETA
                </span>

                {/* Copyright */}
                <span style={{ color: colors.text.muted }}>
                  © {new Date().getFullYear()} ZemScan
                </span>
              </div>
            </div>
          </div>
          
          {/* Filter Drawer */}
          <FilterOverlay
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            filters={filters}
            onChange={setFilters}
            onApply={() => console.log("Apply filters", filters)}
            onReset={() =>
              setFilters({
                type: "",
                priceMin: "",
                priceMax: "",
                areaMin: "",
                areaMax: "",
                region: "",
                status: "",
                cadastralNumber: "",
                auctionType: "",
                dateFrom: "",
                dateTo: "",
                landCategory: "",
                purpose: "",
              })
            }
          />
        </div>
      </main>

      {/* Lot Details Popup */}
      {selectedLot && (
        <div
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 max-w-2xl w-full mx-4 rounded-xl shadow-2xl overflow-hidden"
          style={{
            zIndex: 1000,
            backgroundColor: "white",
            border: `2px solid ${colors.border}`,
          }}
        >
          <div
            className="px-6 py-4 flex items-center justify-between"
            style={{ backgroundColor: colors.lightGreen }}
          >
            <div className="flex items-center gap-3">
              <h3
                className="font-semibold text-lg"
                style={{ color: colors.green }}
              >
                {selectedLot.title}
              </h3>
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor:
                    selectedLot.status === "active"
                      ? colors.green
                      : selectedLot.status === "upcoming"
                      ? "#D97706"
                      : "#6B7280",
                  color: "white",
                }}
              >
                {selectedLot.status === "active"
                  ? "Активный"
                  : selectedLot.status === "upcoming"
                  ? "Скоро"
                  : "Завершен"}
              </span>
            </div>
            <button
              onClick={() => setSelectedLot(null)}
              className="transition-all hover:bg-white/30 rounded-full p-1"
            >
              <X size={20} color={colors.green} />
            </button>
          </div>
          <div className="px-6 py-5 space-y-4">
            {/* Location */}
            <div className="flex items-center gap-2 pb-3 border-b" style={{ borderColor: colors.border }}>
              <MapPin size={16} style={{ color: colors.green }} />
              <p
                className="text-sm"
                style={{ color: colors.text.secondary }}
              >
                {selectedLot.location.address}, {selectedLot.location.city}
              </p>
            </div>
            
            {/* Main Info Grid */}
            <div className="grid grid-cols-4 gap-4">
              <div>
                <p className="text-xs mb-1" style={{ color: colors.text.muted }}>
                  Тип участка
                </p>
                <p
                  className="text-sm font-medium"
                  style={{ color: colors.text.primary }}
                >
                  {selectedLot.type}
                </p>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: colors.text.muted }}>
                  Площадь
                </p>
                <p
                  className="text-sm font-medium"
                  style={{ color: colors.text.primary }}
                >
                  {selectedLot.area} га
                </p>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: colors.text.muted }}>
                  Стартовая цена
                </p>
                <p
                  className="text-sm font-semibold"
                  style={{ color: colors.green }}
                >
                  {formatPrice(selectedLot.price)}
                </p>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: colors.text.muted }}>
                  Дата аукциона
                </p>
                <p
                  className="text-sm font-medium"
                  style={{ color: colors.text.primary }}
                >
                  {formatDate(selectedLot.auctionDate)}
                </p>
              </div>
            </div>

            {/* Additional Details */}
            <div className="pt-2 space-y-2">
              <div className="flex items-center justify-between py-2 px-3 rounded-lg" style={{ backgroundColor: colors.beige }}>
                <span className="text-xs" style={{ color: colors.text.muted }}>
                  Кадастровый номер
                </span>
                <span
                  className="text-sm font-mono font-medium"
                  style={{ color: colors.text.primary }}
                >
                  {selectedLot.cadastralNumber}
                </span>
              </div>
              <div className="flex items-center justify-between py-2 px-3 rounded-lg" style={{ backgroundColor: colors.beige }}>
                <span className="text-xs" style={{ color: colors.text.muted }}>
                  Форма торгов
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: colors.text.primary }}
                >
                  {selectedLot.auctionType}
                </span>
              </div>
              <div className="flex items-center justify-between py-2 px-3 rounded-lg" style={{ backgroundColor: colors.beige }}>
                <span className="text-xs" style={{ color: colors.text.muted }}>
                  Целевое назначение
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: colors.text.primary }}
                >
                  {selectedLot.purpose}
                </span>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                className="w-full px-6 py-3 rounded-lg transition-all hover:opacity-90"
                style={{
                  backgroundColor: colors.green,
                  color: "white",
                  fontWeight: 600,
                }}
              >
                Подробнее о лоте
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}