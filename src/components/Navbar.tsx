import { Music, User, BookOpen, Guitar } from "lucide-react";
import { NavLink as RouterNavLink } from "react-router-dom";

const navItems = [
  { label: "Partituras", icon: BookOpen, to: "/" },
  { label: "Por Instrumento", icon: Guitar, to: "/instrumentos" },
  { label: "Mi Perfil", icon: User, to: "/perfil" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <RouterNavLink to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:scale-105">
            <Music className="h-5 w-5" />
          </div>
          <span className="font-serif text-xl font-semibold text-foreground tracking-tight">
            Partituras
          </span>
        </RouterNavLink>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <RouterNavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`
              }
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </RouterNavLink>
          ))}
        </nav>

        {/* User */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium text-foreground">Compositor</p>
            <p className="text-xs text-muted-foreground">usuario@correo.com</p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-serif font-semibold text-sm">
            C
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
