export default function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="max-w-4xl mx-auto px-10 py-12 flex flex-col items-center gap-6 text-muted-foreground">
        {/* Nom */}
        <p className="text-2xl font-bold text-foreground tracking-wide">
          Maxence <span className="text-primary">BARTHELEMY</span>
        </p>

        <hr className="w-full border-border" />

        {/* Localisation */}
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <span>Lyon, France</span>
        </div>

        {/* Liens */}
        <div className="flex items-center gap-6 text-sm">
          <a
            href="mailto:maxencebarth12@gmail.com"
            className="hover:text-primary transition-colors"
          >
            maxencebarth12@gmail.com
          </a>
          <span className="text-border">|</span>
          <a
            href="https://www.linkedin.com/in/maxence-barthelemy-bb624a374/"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-border">|</span>
          <a
            href="https://github.com/maxence468"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
