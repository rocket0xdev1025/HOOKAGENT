import { useEffect, useState } from "react";

const WHO = ["tSnZ…4Dxe", "ni4a…Ag4c", "uq2P…ne2Q", "VJT4…y6Qd", "gKot…1f6D", "5kUr…ohVz", "PS5f…wjTw", "tpaE…hmpx"];
const VIA = ["via the pool", "via Jupiter", "via the Pump app", "via a terminal", "via FOMO", "via HookAgents"];

function makeRow(rule) {
  const who = WHO[Math.floor(Math.random() * WHO.length)];
  const via = VIA[Math.floor(Math.random() * VIA.length)];
  const size = (Math.random() * 8 + 0.4).toFixed(2);
  const side = Math.random() > 0.45 ? "Buy" : "Sell";
  const harsh = rule && ["human-check", "sniper-fee-cap", "anti-bundle", "anti-sandwich"].includes(rule.id);
  const whale = rule && rule.id === "max-per-wallet" && side === "Buy" && Math.random() > 0.55;
  const bad = whale || (harsh && side === "Buy" && Math.random() > 0.45);
  let why = "passed";
  let tag = "";
  if (bad && rule?.id === "human-check") {
    why = "Human Check: no CAPTCHA co-signature: bots can't pre-sign";
    tag = "bundler";
  } else if (bad && rule?.id === "max-per-wallet") {
    const held = (Math.random() * 3 + 1.4).toFixed(2);
    why = `Max per wallet: receiver would hold ${held}%; cap is 1.00%`;
    tag = "whale";
  } else if (bad && rule?.id === "anti-bundle") {
    why = "Anti-bundle: too many buys already in this block";
    tag = "bundler";
  } else if (bad && rule?.id === "anti-sandwich") {
    why = "Anti-Sandwich: this wallet already bought in the block";
  } else if (bad && rule?.id === "sniper-fee-cap") {
    why = "Sniper-fee cap: priority fee is over the launch limit";
    tag = "sniper";
  } else if (bad) {
    why = `${rule?.name || "Rule"}: trade refused`;
  }
  return {
    id: Math.random().toString(36).slice(2),
    line: `${side} ${size}M`,
    who: tag ? `${who} · ${tag}` : who,
    why,
    via,
    bad,
  };
}

export default function TradeFeed({ rule, label = "Demo · simulated, not real trades" }) {
  const [rows, setRows] = useState(() => [makeRow(rule), makeRow(rule), makeRow(rule), makeRow(rule)]);
  const [checked, setChecked] = useState(7);
  const [refused, setRefused] = useState(() => rows.filter((r) => r.bad).length);

  useEffect(() => {
    const seeded = [makeRow(rule), makeRow(rule), makeRow(rule), makeRow(rule)];
    setRows(seeded);
    setChecked(seeded.length);
    setRefused(seeded.filter((r) => r.bad).length);
    const timer = setInterval(() => {
      const row = makeRow(rule);
      setRows((current) => [row, ...current].slice(0, 5));
      setChecked((n) => n + 1);
      if (row.bad) setRefused((n) => n + 1);
    }, 1700);
    return () => clearInterval(timer);
  }, [rule]);

  return (
    <div className="pad">
      <div className="pad-head">
        <span className="eyebrow">{label}</span>
        <span className="counter">
          <span>
            Checked <b>{checked}</b>
          </span>
          <span className="r">
            Refused <b>{refused}</b>
          </span>
        </span>
      </div>
      <div className="feed">
        {rows.map((row, index) => (
          <div className={`feed-row${index === 0 ? " new" : ""}${row.bad ? " bad" : ""}`} key={row.id}>
            <div className="feed-main">
              <div className="feed-line1">
                <span>{row.line}</span>
                <span className="who">{row.who}</span>
              </div>
              <div className="feed-line2">
                <span className={row.bad ? "why" : "ok"}>{row.why}</span>
                <span>· {row.via}</span>
              </div>
            </div>
            <span className={`stamp ${row.bad ? "refused" : "pass"}`}>{row.bad ? "Refused" : "Passed"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
