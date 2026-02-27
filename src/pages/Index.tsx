import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Music } from "lucide-react";
import Navbar from "@/components/Navbar";
import ScoreCard from "@/components/ScoreCard";
import SearchBar from "@/components/SearchBar";

const scores = [
  { title: "Claro de Luna", composer: "Claude Debussy", instrument: "Piano", difficulty: "Avanzado", pages: 8 },
  { title: "Nocturno Op.9 No.2", composer: "Frédéric Chopin", instrument: "Piano", difficulty: "Intermedio", pages: 4 },
  { title: "Concierto de Aranjuez", composer: "Joaquín Rodrigo", instrument: "Guitarra", difficulty: "Avanzado", pages: 12 },
  { title: "Ave María", composer: "Franz Schubert", instrument: "Voz", difficulty: "Intermedio", pages: 3 },
  { title: "Canon en Re", composer: "Johann Pachelbel", instrument: "Violín", difficulty: "Principiante", pages: 2 },
  { title: "Gymnopédie No.1", composer: "Erik Satie", instrument: "Piano", difficulty: "Intermedio", pages: 3 },
  { title: "Asturias (Leyenda)", composer: "Isaac Albéniz", instrument: "Guitarra", difficulty: "Avanzado", pages: 7 },
  { title: "Adagio en Sol menor", composer: "Tomaso Albinoni", instrument: "Violín", difficulty: "Intermedio", pages: 4 },
];

const stats = [
  { label: "Partituras", value: "2,450", icon: BookOpen },
  { label: "Populares hoy", value: "128", icon: TrendingUp },
  { label: "Compositores", value: "340", icon: Music },
];

const filters = ["Todas", "Piano", "Guitarra", "Violín", "Voz", "Orquesta"];

const Index = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("Todas");

  const filteredScores = scores.filter((s) => {
    const matchesSearch =
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.composer.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = activeFilter === "Todas" || s.instrument === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container py-8 space-y-8">
        {/* Hero section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Biblioteca de Partituras
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Explora, visualiza y organiza tu colección musical.
          </p>
        </motion.section>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <SearchBar value={search} onChange={setSearch} />
          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Scores Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredScores.map((score, i) => (
            <ScoreCard key={score.title} {...score} index={i} />
          ))}
          {filteredScores.length === 0 && (
            <div className="col-span-full py-16 text-center text-muted-foreground">
              <Music className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p className="font-serif text-lg">No se encontraron partituras</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Index;
