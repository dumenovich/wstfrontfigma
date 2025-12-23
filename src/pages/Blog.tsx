import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Loader2 } from "lucide-react";
import { BlogManifest } from "@/types/blog";
import { BlogCard, BlogFeatured } from "@/components/blog";
import { LogoVariant2 } from "@/components/LogoVariants";
import { Badge } from "@/components/ui/badge";

export default function Blog() {
  const [manifest, setManifest] = useState<BlogManifest | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/blog/manifest.json")
      .then((res) => {
        if (!res.ok)
          throw new Error("Не удалось загрузить статьи");
        return res.json();
      })
      .then((data: BlogManifest) => {
        setManifest(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Сортировка: сначала featured, потом по дате
  const sortedPosts =
    manifest?.posts.slice().sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
      );
    }) || [];

  const featuredPost = sortedPosts.find((p) => p.featured);
  const otherPosts = sortedPosts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
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
      <div className="fixed inset-0 overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-white/5 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <LogoVariant2 className="w-8 h-8" />
              <span className="text-white">zemscan.ru</span>
            </Link>

            <div className="h-8 w-px bg-white/10" />

            <nav className="hidden md:flex items-center gap-4">
              <Link
                to="/"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Главная
              </Link>
              <span className="text-white/20">•</span>
              <span className="text-cyan-400">Блог</span>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end gap-0.5">
              <span className="text-blue-400/70 text-xs">
                Вопросы и предложения:
              </span>
              <a
                href="mailto:info@zemscan.ru"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                info@zemscan.ru
              </a>
            </div>
            <div className="h-8 w-px bg-white/10 hidden md:block" />
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
              Скоро запуск
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Title */}
          <div className="mb-12 max-w-3xl">
            <h1 className="text-white mb-4">
              Журнал о земельных торгах
            </h1>
            <p className="text-blue-200/80 text-lg">
              Гайды, аналитика, кейсы и практические советы по
              покупке земельных участков на аукционах
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-32">
              <Loader2 className="w-10 h-10 text-cyan-400 animate-spin mb-4" />
              <p className="text-blue-300/60">
                Загрузка статей...
              </p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/30 rounded-xl p-8 text-center backdrop-blur-md">
              <div className="text-5xl mb-4">⚠️</div>
              <h3 className="text-red-300 text-xl mb-2">
                Ошибка загрузки
              </h3>
              <p className="text-red-300/70">{error}</p>
            </div>
          )}

          {/* Content */}
          {manifest && !loading && (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-16">
                  <BlogFeatured
                    post={featuredPost}
                    categoryInfo={
                      manifest.categories[featuredPost.category]
                    }
                  />
                </div>
              )}

              {/* Section Title */}
              {otherPosts.length > 0 && (
                <>
                  <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-white">Все статьи</h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 via-cyan-500/20 to-transparent" />
                    <span className="text-blue-300/50 text-sm">
                      {otherPosts.length}{" "}
                      {otherPosts.length === 1
                        ? "статья"
                        : otherPosts.length < 5
                          ? "статьи"
                          : "статей"}
                    </span>
                  </div>

                  {/* Posts Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherPosts.map((post) => (
                      <BlogCard
                        key={post.slug}
                        post={post}
                        categoryInfo={
                          manifest.categories[post.category]
                        }
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Empty State */}
              {sortedPosts.length === 0 && (
                <div className="text-center py-32">
                  <div className="text-7xl mb-6 opacity-20">
                    📝
                  </div>
                  <h3 className="text-white mb-3">
                    Статьи скоро появятся
                  </h3>
                  <p className="text-blue-300/60 max-w-md mx-auto">
                    Мы работаем над полезным контентом о
                    земельных торгах. Подпишитесь, чтобы не
                    пропустить первые публикации
                  </p>
                </div>
              )}
            </>
          )}

          {/* CTA Section */}
          <div className="mt-20 relative">
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 rounded-3xl blur-2xl" />

            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-10 md:p-14 text-center overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full mb-6">
                  <span className="text-purple-300">✨</span>
                  <span className="text-purple-300 text-sm">
                    Полезный контент каждую неделю
                  </span>
                </div>

                <h3 className="text-white mb-4">
                  Получайте новые статьи на почту
                </h3>
                <p className="text-blue-200/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                  2 раза в неделю — практические гайды,
                  аналитика рынка и реальные кейсы покупки земли
                  на торгах. Никакого спама, только полезная
                  информация.
                </p>

                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all hover:scale-105"
                >
                  Подписаться на рассылку
                  <ArrowLeft className="w-5 h-5 rotate-180" />
                </Link>

                <p className="text-blue-300/50 text-sm mt-6">
                  + Бонус: PDF-гайд «7 скрытых рисков при
                  покупке земли на торгах» сразу после подписки
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-white/10 bg-gradient-to-b from-transparent to-slate-900/50 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left - Logo and Description */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full group-hover:bg-cyan-500/30 transition-all" />
                  <LogoVariant2 className="w-9 h-9 relative z-10" />
                </div>
                <div className="text-white">zemscan.ru</div>
              </div>

              <div className="hidden md:block h-8 w-px bg-white/20" />

              <p className="text-blue-100/70 hidden md:block">
                Аналитика земельного рынка
              </p>
            </div>

            {/* Right - Year and Back Link */}
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="flex items-center gap-2 text-blue-300/70 hover:text-cyan-400 transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                На главную
              </Link>
              <div className="h-6 w-px bg-white/20" />
              <div className="text-blue-400/60 text-sm">
                © 2025
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}