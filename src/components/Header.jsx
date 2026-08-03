import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavLink = ({ href, children }) => (
  <div className="relative group">
    <Link
      href={href}
      className="text-foreground hover:text-primary transition-colors"
    >
      {children}
    </Link>
    <span className="absolute -bottom-1 left-0 h-[2px] bg-primary w-0 group-hover:w-full transition-all duration-300" />
  </div>
);

export default function Header() {
  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 z-40 h-20 border-b border-border flex items-center justify-between px-5 text-2xl font-(family-name:--font-spacegrotesk) bg-card">
        <a className="flex gap-2.5 items-center" href="/">
          <div className="text-primary glow">●</div>
          <div>PORTFOLIO</div>
        </a>

        <div className="flex gap-5">
          <a href="#accueil">Accueil</a>
          <a href="#apropos">A propos</a>
          <a href="#projets">Projets</a>
          <a href="#experience">Experience</a>
        </div>
      </nav>
    </header>
  );
}
