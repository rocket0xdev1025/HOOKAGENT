const PEOPLE = {
  alex: { skin: "#c68642", hair: "#1c140e", shirt: "#10262b", bg1: "#0c2c32", bg2: "#071416", accent: "#3ab8c2", hairStyle: "short", brows: true },
  hookcat: { skin: "#f4efe4", hair: "#1a1a1a", shirt: "#1b1814", bg1: "#2a241c", bg2: "#100e0c", accent: "#ece3cf", hairStyle: "cat" },
  mateo: { skin: "#8d5524", hair: "#140e0c", shirt: "#1a2744", bg1: "#1c315c", bg2: "#0c1424", accent: "#7aa2ff", hairStyle: "crop" },
  dev: { skin: "#e0ac69", hair: "#2a2118", shirt: "#2a2416", bg1: "#3a3018", bg2: "#14110c", accent: "#e0b23a", hairStyle: "side", glasses: true },
  freya: { skin: "#f0c9a0", hair: "#8a3b24", shirt: "#163044", bg1: "#1a4a62", bg2: "#0b1c28", accent: "#8fd4e8", hairStyle: "long" },
  kenji: { skin: "#e8b48a", hair: "#1a1a1a", shirt: "#24182e", bg1: "#3a2458", bg2: "#140e18", accent: "#b894f0", hairStyle: "bun" },
  ada: { skin: "#6b3a22", hair: "#1a100c", shirt: "#1a2438", bg1: "#243656", bg2: "#10151f", accent: "#8eb0e8", hairStyle: "puff" },
  mira: { skin: "#f3d2b5", hair: "#f2d15a", shirt: "#2a220f", bg1: "#4a3a14", bg2: "#16130c", accent: "#f0c14a", hairStyle: "bob" },
  sample: { skin: "#e7b892", hair: "#24180f", shirt: "#1c1a22", bg1: "#2a2438", bg2: "#100e14", accent: "#ece3cf", hairStyle: "long" },
};

function Hair({ p }) {
  if (p.hairStyle === "cat") {
    return (
      <g fill={p.hair}>
        <path d="M118 168 L86 78 L168 150 Z" />
        <path d="M282 168 L314 78 L232 150 Z" />
        <path d="M100 168 L86 92 L150 150 Z" fill="#f0b4c0" opacity=".85" />
        <path d="M300 168 L314 92 L250 150 Z" fill="#f0b4c0" opacity=".85" />
        <ellipse cx="200" cy="188" rx="100" ry="78" />
      </g>
    );
  }
  if (p.hairStyle === "long") {
    return (
      <path
        fill={p.hair}
        d="M108 210 C70 250 72 360 86 470 L132 470 C112 340 130 250 150 200 C170 120 250 110 292 190 C320 250 300 380 286 470 L332 460 C360 300 330 180 270 140 C230 100 140 110 108 210Z"
      />
    );
  }
  if (p.hairStyle === "bun") {
    return (
      <g fill={p.hair}>
        <circle cx="200" cy="108" r="36" />
        <path d="M112 190 C120 120 160 100 200 100 C250 100 292 128 294 196 C270 150 230 140 200 142 C160 144 130 156 112 190Z" />
      </g>
    );
  }
  if (p.hairStyle === "puff") {
    return (
      <g fill={p.hair}>
        <circle cx="108" cy="200" r="42" />
        <circle cx="292" cy="200" r="42" />
        <path d="M120 180 C130 110 270 110 284 184 C250 140 150 140 120 180Z" />
      </g>
    );
  }
  if (p.hairStyle === "bob") {
    return (
      <path
        fill={p.hair}
        d="M104 230 C100 140 150 90 200 90 C270 90 310 150 304 240 C300 200 270 170 200 168 C140 166 112 190 104 230Z"
      />
    );
  }
  if (p.hairStyle === "crop") {
    return <path fill={p.hair} d="M118 176 C124 112 168 96 204 98 C262 102 300 140 292 188 C250 150 160 146 118 176Z" />;
  }
  if (p.hairStyle === "side") {
    return <path fill={p.hair} d="M114 188 C120 112 180 96 230 108 C280 120 304 160 286 196 C250 150 160 140 114 188Z" />;
  }
  return <path fill={p.hair} d="M116 186 C122 114 170 98 206 100 C268 106 300 150 290 196 C250 148 156 144 116 186Z" />;
}

export function Portrait({ person = "mira", styleId = "hookit" }) {
  const p = PEOPLE[person] || PEOPLE.mira;
  const gid = `${person}-${styleId}`;
  return (
    <svg viewBox="0 0 400 560" className={`sk-art style-${styleId}`} role="img" aria-hidden="true">
      <defs>
        <linearGradient id={`${gid}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.bg1} />
          <stop offset="100%" stopColor={p.bg2} />
        </linearGradient>
        <radialGradient id={`${gid}-glow`} cx="50%" cy="28%" r="65%">
          <stop offset="0%" stopColor={p.accent} stopOpacity="0.45" />
          <stop offset="100%" stopColor={p.accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="560" fill={`url(#${gid}-bg)`} />
      <rect width="400" height="560" fill={`url(#${gid}-glow)`} />
      <ellipse cx="200" cy="430" rx="210" ry="40" fill="#000" opacity=".25" />
      <path d="M48 390 C90 330 150 318 200 318 C260 318 320 338 360 400 L380 560 H20 Z" fill={p.shirt} />
      <path d="M150 330 H250 L268 430 H132 Z" fill={p.skin} />
      <ellipse cx="200" cy="236" rx="96" ry="112" fill={p.skin} />
      <Hair p={p} />
      {p.glasses && (
        <g fill="none" stroke="#1a120c" strokeWidth="4">
          <circle cx="164" cy="236" r="22" />
          <circle cx="236" cy="236" r="22" />
          <path d="M186 236 H214" />
        </g>
      )}
      <ellipse cx="166" cy="238" rx="8" ry="11" fill="#1a120c" />
      <ellipse cx="234" cy="238" rx="8" ry="11" fill="#1a120c" />
      <ellipse cx="169" cy="235" rx="2.5" ry="3" fill="#fff" opacity=".7" />
      <ellipse cx="237" cy="235" rx="2.5" ry="3" fill="#fff" opacity=".7" />
      <path d="M176 278 Q200 294 226 276" fill="none" stroke="#6a3a32" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M70 360 H150" stroke={p.accent} strokeWidth="8" opacity=".35" />
    </svg>
  );
}

export function LogoMark() {
  return (
    <svg className="mark" viewBox="0 0 64 96" width="34" height="48" aria-hidden="true">
      <path d="M30 4c10 0 16 8 16 16v8" fill="none" stroke="#ece3cf" strokeWidth="4" strokeLinecap="round" />
      <path d="M30 18c6-6 14-6 18 0" fill="none" stroke="#ece3cf" strokeWidth="3" strokeLinecap="round" />
      <circle cx="32" cy="34" r="3.2" fill="#ece3cf" />
      <rect x="14" y="40" width="36" height="34" rx="14" fill="#161513" stroke="#ece3cf" strokeWidth="3" />
      <ellipse cx="26" cy="55" rx="3.2" ry="4.4" fill="#ece3cf" />
      <ellipse cx="40" cy="55" rx="3.2" ry="4.4" fill="#ece3cf" />
      <path d="M27 64c3 3 8 3 11 0" fill="none" stroke="#ece3cf" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 78c6 10 22 10 28 0" fill="none" stroke="#ece3cf" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="word" aria-label="HookAgents">
      Pri<i>ors</i>
    </span>
  );
}

export function Mascot() {
  return (
    <svg className="mascot-svg" viewBox="0 0 280 500" role="img" aria-label="HookAgents mascot, a small robot hanging from a clip">
      <defs>
        <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#cfc8ba" />
          <stop offset="55%" stopColor="#6f6a62" />
          <stop offset="100%" stopColor="#f6f1e6" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#metal)" strokeWidth="11" strokeLinecap="round">
        <path d="M112 78c0-30 18-48 40-48s40 18 40 48v26" />
        <path d="M112 92c10-16 24-24 40-24" strokeWidth="8" />
      </g>
      <circle cx="152" cy="118" r="6" fill="#ece3cf" />
      <path d="M152 118v16" stroke="#ece3cf" strokeWidth="3" />
      <g stroke="#ece3cf" strokeWidth="12" strokeLinejoin="round" fill="#161513">
        <rect x="78" y="150" width="124" height="118" rx="58" />
        <path d="M86 250h108c18 8 28 36 24 78-6 28-22 40-40 44H102c-20-4-36-18-42-46-4-40 6-70 26-76z" />
        <rect x="36" y="268" width="42" height="96" rx="21" transform="rotate(16 57 316)" />
        <rect x="198" y="188" width="40" height="92" rx="20" transform="rotate(-36 218 234)" />
        <rect x="92" y="360" width="40" height="92" rx="20" />
        <rect x="150" y="364" width="40" height="92" rx="20" />
      </g>
      <ellipse cx="140" cy="206" rx="42" ry="36" fill="#f4efe4" />
      <ellipse cx="126" cy="204" rx="7" ry="11" fill="#161513" />
      <ellipse cx="154" cy="204" rx="7" ry="11" fill="#161513" />
      <path d="M128 222c8 7 18 7 26 0" fill="none" stroke="#161513" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="58" cy="352" rx="16" ry="13" fill="#f4efe4" />
      <ellipse cx="232" cy="214" rx="15" ry="12" fill="#f4efe4" transform="rotate(-36 232 214)" />
      <ellipse cx="112" cy="448" rx="24" ry="13" fill="#f4efe4" />
      <ellipse cx="170" cy="452" rx="24" ry="13" fill="#f4efe4" />
    </svg>
  );
}

export function HookGlyph() {
  return (
    <svg className="c-hookglyph" viewBox="0 0 40 64" aria-hidden="true">
      <path d="M12 34 a9 9 0 0 0 18 0 V16 a9 9 0 0 0 -18 0 v3" fill="none" stroke="currentColor" strokeWidth="6.5" strokeLinecap="round" />
      <path d="M21 43 V58" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}
