import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import rules from "../rules.json";
import { FAMILIES, NEW_RULES } from "../data";
import TradeFeed from "./TradeFeed";

export default function RulesExplorer({ initialFamily = "fair", initialRule = "max-per-wallet" }) {
  const [family, setFamily] = useState(initialFamily);
  const [ruleId, setRuleId] = useState(initialRule);

  const visible = useMemo(() => rules.filter((rule) => rule.family === family), [family]);
  const selected = rules.find((rule) => rule.id === ruleId) || visible[0];

  function pickFamily(id) {
    setFamily(id);
    const first = rules.find((rule) => rule.family === id);
    if (first) setRuleId(first.id);
  }

  return (
    <section className="section" id="rules">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{rules.length} rules · stack the ones that don't conflict</span>
          <h2>Pick your rule.</h2>
          <p className="lede">
            Each rule runs inside the token's rules. Stack several on one token, as long as they don't do the same job twice.
          </p>
        </div>
        <div className="fam-tabs" role="tablist">
          {FAMILIES.map((item) => {
            const count = rules.filter((rule) => rule.family === item.id).length;
            return (
              <button
                key={item.id}
                className={`chip${family === item.id ? " on" : ""}`}
                onClick={() => pickFamily(item.id)}
                role="tab"
                aria-selected={family === item.id}
              >
                {item.label} <span className="count">{count}</span>
              </button>
            );
          })}
        </div>
        <div className="grid-2">
          <div className="rule-list">
            {visible.map((rule) => (
              <button
                key={rule.id}
                className={`rule-item${selected?.id === rule.id ? " on" : ""}`}
                onClick={() => setRuleId(rule.id)}
              >
                <span className="em">{rule.emoji}</span>
                <span>
                  <div className="nm">
                    {rule.name}
                    {NEW_RULES.has(rule.id) && <span className="tag tag-new">new</span>}
                  </div>
                  <div className="sd">{rule.short}</div>
                </span>
                <span className="dim">›</span>
              </button>
            ))}
          </div>
          {selected && (
            <div className="rule-detail-col">
              <div className="rule-detail">
                <h3>
                  <span className="em">{selected.emoji}</span> {selected.name}
                </h3>
                <div className="row tight">
                  <span className="tag">Creator lever</span>
                </div>
                <p>{selected.long}</p>
                <div className="chips">
                  {selected.chips.map((chip) => (
                    <span className="chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
                <p className="dim note">Trades on any DEX. Checked on every transfer until the coin graduates.</p>
              </div>
              <TradeFeed rule={selected} label="Demo · sped up and simulated" />
              <div className="rule-cta">
                <Link className="btn btn-lime" to={`/launch/rules?rule=${selected.id}`}>
                  Launch with this rule →
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
