const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Globe grid */}
    <ellipse cx="32" cy="32" rx="22" ry="22" stroke="hsl(187 100% 50%)" strokeWidth="1.5" opacity="0.4" />
    <ellipse cx="32" cy="32" rx="10" ry="22" stroke="hsl(187 100% 50%)" strokeWidth="1" opacity="0.3" />
    <line x1="10" y1="32" x2="54" y2="32" stroke="hsl(187 100% 50%)" strokeWidth="1" opacity="0.3" />
    <ellipse cx="32" cy="32" rx="22" ry="8" stroke="hsl(187 100% 50%)" strokeWidth="1" opacity="0.2" />
    {/* Rocket */}
    <path d="M32 8 L38 28 L32 48 L26 28 Z" fill="url(#rocketGrad)" opacity="0.9" />
    <path d="M26 28 L22 34 L26 32 Z" fill="hsl(270 60% 55%)" opacity="0.7" />
    <path d="M38 28 L42 34 L38 32 Z" fill="hsl(270 60% 55%)" opacity="0.7" />
    {/* Exhaust */}
    <path d="M29 48 L32 58 L35 48" stroke="hsl(187 100% 50%)" strokeWidth="1.5" fill="none" opacity="0.6" />
    <circle cx="32" cy="22" r="3" fill="hsl(187 100% 50%)" opacity="0.8" />
    <defs>
      <linearGradient id="rocketGrad" x1="32" y1="8" x2="32" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="hsl(187 100% 50%)" />
        <stop offset="1" stopColor="hsl(270 60% 55%)" />
      </linearGradient>
    </defs>
  </svg>
);

export default Logo;
