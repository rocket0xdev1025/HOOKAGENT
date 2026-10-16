export function LogoMark() {
  return (
    <svg className="mark" viewBox="0 0 64 64" width="34" height="34" aria-hidden="true">
      <path d="M32 6c2 10 8 16 18 18-10 2-16 8-18 18-2-10-8-16-18-18 10-2 16-8 18-18z" fill="#ece3cf" />
      <path d="M32 28c6 8 6 16 4 28" fill="none" stroke="#7dcea0" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Wordmark() {
  return <span className="word">Priors</span>;
}

export function Mascot() {
  return (
    <svg className="mascot-svg" viewBox="0 0 280 460" role="img" aria-label="A small tree, one leaf for a repaid loan">
      <path d="M140 18c8 28 28 44 62 50-34 6-54 22-62 50-8-28-28-44-62-50 34-6 54-22 62-50z" fill="#ece3cf" />
      <path d="M140 108c22 36 22 70 14 120" fill="none" stroke="#ece3cf" strokeWidth="8" strokeLinecap="round" />
      <g fill="#7dcea0">
        <ellipse cx="96" cy="210" rx="28" ry="16" transform="rotate(-28 96 210)" />
        <ellipse cx="184" cy="196" rx="30" ry="16" transform="rotate(24 184 196)" />
        <ellipse cx="118" cy="268" rx="26" ry="14" transform="rotate(-18 118 268)" />
        <ellipse cx="176" cy="286" rx="24" ry="13" transform="rotate(20 176 286)" />
        <ellipse cx="140" cy="160" rx="16" ry="10" />
      </g>
      <rect x="132" y="300" width="16" height="90" rx="8" fill="#ece3cf" />
      <ellipse cx="140" cy="400" rx="54" ry="10" fill="#ece3cf" opacity="0.18" />
    </svg>
  );
}

export function AgentMark({ name = "P", accent = "#7dcea0" }) {
  const letter = name.slice(0, 1);
  return (
    <svg className="sk-art" viewBox="0 0 400 560" role="img" aria-hidden="true">
      <rect width="400" height="560" fill="#141311" />
      <circle cx="200" cy="210" r="150" fill={accent} opacity="0.16" />
      <path d="M200 70c8 36 28 56 64 64-36 8-56 28-64 64-8-36-28-56-64-64 36-8 56-28 64-64z" fill="#ece3cf" />
      <text x="200" y="430" textAnchor="middle" fill="#ece3cf" fontFamily="Archivo, sans-serif" fontSize="92" fontWeight="700">
        {letter}
      </text>
    </svg>
  );
}
