// Вариант 1: Карта с pin-точкой и сканирующими кругами
export function LogoVariant1({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      {/* Сканирующие круги */}
      <circle cx="16" cy="16" r="14" stroke="url(#grad1)" strokeWidth="1" opacity="0.3" />
      <circle cx="16" cy="16" r="10" stroke="url(#grad1)" strokeWidth="1" opacity="0.5" />
      {/* Карта-сетка */}
      <path d="M8 8 L24 8 L24 24 L8 24 Z" stroke="url(#grad1)" strokeWidth="1.5" fill="none" />
      <line x1="16" y1="8" x2="16" y2="24" stroke="url(#grad1)" strokeWidth="1" opacity="0.6" />
      <line x1="8" y1="16" x2="24" y2="16" stroke="url(#grad1)" strokeWidth="1" opacity="0.6" />
      {/* Pin */}
      <path d="M16 12 C14.9 12 14 12.9 14 14 C14 15.1 14.9 16 16 16 C17.1 16 18 15.1 18 14 C18 12.9 17.1 12 16 12 Z" fill="#06B6D4" />
      <path d="M16 10 C13.8 10 12 11.8 12 14 C12 15.5 13 17.5 16 21 C19 17.5 20 15.5 20 14 C20 11.8 18.2 10 16 10 Z" stroke="url(#grad1)" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

// Вариант 2: Участки земли с эффектом сканирования
export function LogoVariant2({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      {/* Участки */}
      <rect x="4" y="4" width="10" height="10" fill="url(#grad2)" opacity="0.7" rx="1" />
      <rect x="16" y="4" width="12" height="8" fill="url(#grad2)" opacity="0.5" rx="1" />
      <rect x="4" y="16" width="8" height="12" fill="url(#grad2)" opacity="0.6" rx="1" />
      <rect x="14" y="14" width="14" height="14" fill="url(#grad2)" opacity="0.8" rx="1" />
      {/* Сканирующая линия */}
      <line x1="2" y1="24" x2="30" y2="8" stroke="#06B6D4" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
    </svg>
  );
}

// Вариант 3: Радар/сканер
export function LogoVariant3({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      {/* Круги радара */}
      <circle cx="16" cy="16" r="14" stroke="url(#grad3)" strokeWidth="1.5" opacity="0.3" />
      <circle cx="16" cy="16" r="10" stroke="url(#grad3)" strokeWidth="1.5" opacity="0.5" />
      <circle cx="16" cy="16" r="6" stroke="url(#grad3)" strokeWidth="1.5" opacity="0.7" />
      {/* Луч сканера */}
      <path d="M16 16 L28 12" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
      <path d="M16 16 L16 4" stroke="url(#grad3)" strokeWidth="1" opacity="0.4" />
      <path d="M16 16 L28 16" stroke="url(#grad3)" strokeWidth="1" opacity="0.4" />
      {/* Центральная точка */}
      <circle cx="16" cy="16" r="2" fill="#06B6D4" />
    </svg>
  );
}

// Вариант 4: Земельный участок с линиями сканирования
export function LogoVariant4({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      {/* Контур участка */}
      <path d="M6 10 L16 6 L26 8 L28 18 L22 26 L10 28 L6 20 Z" fill="url(#grad4)" opacity="0.2" />
      <path d="M6 10 L16 6 L26 8 L28 18 L22 26 L10 28 L6 20 Z" stroke="url(#grad4)" strokeWidth="1.5" />
      {/* Сканирующие линии */}
      <line x1="6" y1="15" x2="28" y2="15" stroke="#06B6D4" strokeWidth="1" opacity="0.6" strokeDasharray="2 2" />
      <line x1="12" y1="6" x2="18" y2="28" stroke="#06B6D4" strokeWidth="1" opacity="0.6" strokeDasharray="2 2" />
      <line x1="20" y1="6" x2="14" y2="28" stroke="#06B6D4" strokeWidth="1" opacity="0.6" strokeDasharray="2 2" />
      {/* Точки углов */}
      <circle cx="16" cy="6" r="1.5" fill="#06B6D4" />
      <circle cx="26" cy="8" r="1.5" fill="#06B6D4" />
      <circle cx="22" cy="26" r="1.5" fill="#06B6D4" />
    </svg>
  );
}

// Вариант 5: Современный минималистичный (текущий стиль с улучшением)
export function LogoVariant5({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="6" fill="url(#grad5)" />
      {/* Pin с эффектом поиска */}
      <path d="M16 10 C13.8 10 12 11.8 12 14 C12 15.5 13 17.5 16 22 C19 17.5 20 15.5 20 14 C20 11.8 18.2 10 16 10 Z" fill="white" opacity="0.95" />
      <circle cx="16" cy="14" r="2" fill="url(#grad5)" />
      {/* Импульсы поиска */}
      <circle cx="16" cy="14" r="6" stroke="white" strokeWidth="1" opacity="0.3" />
      <circle cx="16" cy="14" r="8" stroke="white" strokeWidth="0.5" opacity="0.2" />
    </svg>
  );
}

// Вариант 6: ZS буквы (монограмма)
export function LogoVariant6({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="6" fill="url(#grad6)" />
      {/* Z */}
      <path d="M8 10 L14 10 L8 20 L14 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* S */}
      <path d="M18 10 C18 10 20 10 20 12 C20 14 18 14 18 14 C18 14 20 14 20 16 C20 18 18 18 18 18 M22 10 C22 10 24 10 24 12 C24 14 22 14 22 14 C22 14 24 14 24 16 C24 18 22 18 22 18" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Точка сканирования */}
      <circle cx="26" cy="24" r="2" fill="white" opacity="0.8" />
    </svg>
  );
}
