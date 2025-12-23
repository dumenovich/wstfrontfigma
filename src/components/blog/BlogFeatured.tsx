import { Clock, ArrowRight, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BlogPostMeta, CategoryInfo } from '@/types/blog';

interface BlogFeaturedProps {
  post: BlogPostMeta;
  categoryInfo: CategoryInfo;
}

export function BlogFeatured({ post, categoryInfo }: BlogFeaturedProps) {
  return (
    <div className="group block cursor-pointer">
      <Card className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative h-64 md:h-auto overflow-hidden bg-gradient-to-br from-blue-500/30 to-purple-500/30">
            {post.image ? (
              <>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent opacity-80" />
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-6xl opacity-30">{categoryInfo.icon}</div>
              </div>
            )}

            {/* Featured Badge */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-gradient-to-r from-yellow-500/90 to-orange-500/90 text-white border-0 shadow-lg">
                <Star className="w-3.5 h-3.5 mr-1.5 fill-current" />
                Рекомендуем
              </Badge>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            {/* Category Badge */}
            <Badge
              className="mb-4 w-fit text-xs font-medium uppercase"
              style={{
                backgroundColor: `${categoryInfo.color}20`,
                borderColor: `${categoryInfo.color}40`,
                color: categoryInfo.color,
              }}
            >
              {categoryInfo.name}
            </Badge>

            {/* Title */}
            <h2 className="text-white mb-4 group-hover:text-cyan-400 transition-colors text-3xl md:text-4xl font-bold leading-tight">
              {post.title}
            </h2>

            {/* Description */}
            <p className="text-blue-200/80 mb-6 leading-relaxed">
              {post.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-blue-300/60">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
                <span>{new Date(post.publishedAt).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>

              <div className="flex items-center gap-2 text-cyan-400 group-hover:gap-3 transition-all">
                <span className="text-sm font-medium">Читать</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </Card>
    </div>
  );
}