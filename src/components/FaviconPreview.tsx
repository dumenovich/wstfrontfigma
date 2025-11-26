import { LogoVariant1, LogoVariant2, LogoVariant3, LogoVariant4, LogoVariant5, LogoVariant6 } from './LogoVariants';
import { Card } from './ui/card';

export function FaviconPreview() {
  return (
    <div className="relative z-10 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-white">Варианты Favicon</h2>
          <p className="text-blue-300">Предпросмотр иконок для вкладки браузера (16x16, 32x32)</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { id: 1, Component: LogoVariant1, name: 'Карта + Сканер' },
            { id: 2, Component: LogoVariant2, name: 'Участки' },
            { id: 3, Component: LogoVariant3, name: 'Радар' },
            { id: 4, Component: LogoVariant4, name: 'Участок + Сетка' },
            { id: 5, Component: LogoVariant5, name: 'Минимал (рекомендуется)' },
            { id: 6, Component: LogoVariant6, name: 'ZS Монограмма' }
          ].map(({ id, Component, name }) => (
            <Card key={id} className="bg-white/5 backdrop-blur-md border-white/10 p-6">
              <div className="mb-4">
                <p className="text-blue-300 mb-4">{name}</p>
              </div>
              <div className="flex items-center gap-6 justify-center bg-slate-800/50 p-6 rounded-lg">
                <div className="text-center">
                  <Component className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-blue-400">32px</span>
                </div>
                <div className="text-center">
                  <Component className="w-4 h-4 mx-auto mb-2" />
                  <span className="text-blue-400">16px</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="bg-blue-500/10 backdrop-blur-md border-blue-500/30 p-6">
            <h3 className="text-white mb-4">Рекомендация по favicon</h3>
            <p className="text-blue-200 mb-3">
              Для favicon лучше всего подходит <strong>Вариант 5 (Минимал)</strong>, так как:
            </p>
            <ul className="text-blue-300 space-y-2 ml-6 list-disc">
              <li>Хорошо читается даже в маленьком размере 16x16 пикселей</li>
              <li>Яркий градиентный фон делает иконку заметной во вкладках браузера</li>
              <li>Простой дизайн с геолокационным pin создает узнаваемость</li>
              <li>Концентрические круги намекают на сканирование/поиск</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
