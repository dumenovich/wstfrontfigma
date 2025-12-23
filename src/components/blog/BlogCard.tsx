import { Clock, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BlogPostMeta, CategoryInfo } from '@/types/blog';

interface BlogCardProps {
  post: BlogPostMeta;
  categoryInfo: CategoryInfo;
}

export function BlogCard({ post, categoryInfo }: BlogCardProps) {
  return (
    <div className="group block cursor-pointer">
      <Card className="h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-cyan-500/10">
        {/* Image */}
        {post.image && (
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60" />
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Category Badge */}
          <Badge
            className="mb-3 text-xs font-medium uppercase"
            style={{
              backgroundColor: `${categoryInfo.color}20`,
              borderColor: `${categoryInfo.color}40`,
              color: categoryInfo.color,
            }}
          >
            {categoryInfo.name}
          </Badge>

          {/* Title */}
          <h3 className="text-white mb-3 group-hover:text-cyan-400 transition-colors text-xl font-bold leading-snug">
            {post.title}
          </h3>

          {/* Description */}
          <p className="text-blue-200/70 text-sm mb-4 line-clamp-2">
            {post.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4 text-blue-300/60">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span>{new Date(post.publishedAt).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </Card>
    </div>
  );
}