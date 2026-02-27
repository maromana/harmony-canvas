import { motion } from "framer-motion";
import { Music2, Clock, Star, Eye } from "lucide-react";

interface ScoreCardProps {
  title: string;
  composer: string;
  instrument: string;
  difficulty: string;
  pages: number;
  index?: number;
}

const ScoreCard = ({ title, composer, instrument, difficulty, pages, index = 0 }: ScoreCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group cursor-pointer rounded-xl border border-border bg-card p-5 transition-all hover:shadow-lg hover:shadow-primary/5 hover:border-secondary/50"
    >
      {/* Score preview placeholder */}
      <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-muted/60 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 11px, hsl(var(--foreground)) 11px, hsl(var(--foreground)) 12px)`,
          backgroundSize: '100% 12px'
        }} />
        <Music2 className="h-10 w-10 text-muted-foreground/40 group-hover:text-primary/40 transition-colors" />
        <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-md bg-card/90 px-2 py-1 text-xs text-muted-foreground">
          <Eye className="h-3 w-3" />
          {pages} pág.
        </div>
      </div>

      {/* Info */}
      <h3 className="font-serif text-lg font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{composer}</p>

      <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-primary font-medium">
          {instrument}
        </span>
        <span className="inline-flex items-center gap-1">
          <Star className="h-3 w-3 text-secondary" />
          {difficulty}
        </span>
      </div>
    </motion.div>
  );
};

export default ScoreCard;
