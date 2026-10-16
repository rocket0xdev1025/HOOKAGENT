import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AGENTS, BEATS, CHAIN, PARAMS, RACK, ROLES, STYLES, TOKEN, WAYS } from "../data";
import { HookGlyph, Mascot, Portrait } from "../components/Art";

export default function Home() {
  const rail = useRef(null);
  const [styleId, setStyleId] = useState("hookit");
  const style = STYLES.find((item) => item.id === styleId) || STYLES[0];

  function scrollRail(dir) {
    rail.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  }

  return (
    <div className="b-home c-home">
      <section className="c-hero">
        <div className="wrap c-hero-grid">
          <div className="c-hero-copy">
            <p className="b-eyebrow">
              <i className="b-rec" /> {CHAIN.name} <span>chain {CHAIN.id} · USDG credit for agents</span>
            </p>
            <h1 className="c-h1">
              <span>Reviews can be faked.</span>
              <span className="c-out">Repaid loans can't.</span>
            </h1>
            <p className="b-lede">
              HookAgents lends USDG to AI agents on Robinhood Chain. Every line is backed by someone's own money, which pays
              the loan in full if the agent doesn't repay. Every repayment is public, so any app can check an agent
              before it deals with one.
            </p>
            <p className="b-lede token-line">
              <a href={`${CHAIN.explorer}/address/${TOKEN}`} target="_blank" rel="noreferrer">
                {TOKEN}
              </a>
            </p>
            <div className="b-modes">
              <Link className="b-mode" to="/start">
                <span className="b-mode-k">Agent</span>
                <span className="b-mode-l">Open a $5 line.</span>
                <span className="b-mode-go">Start →</span>
              </Link>
              <Link className="b-mode" to="/participate">
                <span className="b-mode-k">Lender</span>
                <span className="b-mode-l">Fund the pool in USDG.</span>
                <span className="b-mode-go">Participate →</span>
              </Link>
            </div>
          </div>
          <div className="c-hang" aria-hidden="true">
            <span className="c-string" />
            <div className="c-swing">
              <Mascot />
            </div>
            <span className="c-shadow" />
          </div>
        </div>
        <div className="c-rack-wrap">
          <div className="wrap">
            <p className="c-rack-k">Pick a way onto the ledger, or open your own</p>
          </div>
          <div className="c-rack">
            {RACK.map(([id, name, ticker, drop], index) => {
              const agent = AGENTS.find((item) => item.id === id);
              return (
                <Link className="c-charm" to={`/agent/${id}`} key={id} style={{ "--k": index, "--drop": `${drop}px` }}>
                  <HookGlyph />
                  <span className="c-charm-img">
                    <Portrait person={agent?.person || "mira"} />
                  </span>
                  <b>{name}</b>
                  <i>${ticker}</i>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <div className="b-status">
        <div className="wrap b-status-in">
          <span>
            <b>$5</b> first line
          </span>
          <span>
            <b>1%</b> per 30 days
          </span>
          <span>
            <b>50%</b> of fees to lenders
          </span>
          <span>
            <b>{CHAIN.id}</b> Robinhood Chain
          </span>
          <Link to="/agents">All agents →</Link>
        </div>
      </div>

      <section className="section b-channels" id="roster">
        <div className="wrap b-head">
          <div>
            <span className="b-tag">01 · Channels</span>
            <h2>Pick who is on the ledger.</h2>
            <p>
              A treasury line, a raise, a seat, or stock tokens. Or{" "}
              <Link className="b-link" to="/start">
                start from an empty agent
              </Link>
              .
            </p>
          </div>
          <div className="b-rail-nav">
            <button aria-label="Scroll channels left" onClick={() => scrollRail(-1)}>
              ←
            </button>
            <button aria-label="Scroll channels right" onClick={() => scrollRail(1)}>
              →
            </button>
          </div>
        </div>
        <div className="b-rail" ref={rail} tabIndex={0} aria-label="Agents">
          {AGENTS.map((agent, index) => (
            <Link className="b-ch" to={`/agent/${agent.id}`} key={agent.id} style={{ "--acc": agent.accent, "--d": `${index * 70}ms` }}>
              <div className="b-ch-img">
                <Portrait person={agent.person} />
              </div>
              <div className="b-ch-top">
                <span>CH {String(index + 1).padStart(2, "0")}</span>
                <span className={`b-live ${agent.status}`}>
                  <i /> {agent.status === "on" ? "On chain" : agent.status === "off" ? "Waiting" : "Preview"}
                </span>
              </div>
              <div className="b-ch-body">
                <span className="b-ch-mode">{agent.line}</span>
                <b>{agent.name}</b>
                <span className="b-ch-role">{agent.role}</span>
                <p>“{agent.quote}”</p>
                <span className="b-ch-go">Open {agent.short} →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section b-roles">
        <div className="wrap b-head">
          <div>
            <span className="b-tag">Formats</span>
            <h2>Not only borrowers.</h2>
            <p>Sixteen seats around the pool. Each one is a job the line already has.</p>
          </div>
        </div>
        <div className="wrap">
          <div className="b-role-grid">
            {ROLES.map(([id, name, blurb, href]) => (
              <Link className="b-role" to={href} key={id}>
                <b>{name}</b>
                <span>{blurb}</span>
              </Link>
            ))}
          </div>
          <p className="b-role-note">
            On today: a backed line, a public repayment, a fee split, and x402 in USDG. The contracts have no third-party
            audit.
          </p>
        </div>
      </section>

      <section className="section b-styles-sec">
        <div className="wrap b-head">
          <div>
            <span className="b-tag">Looks</span>
            <h2>One agent, one record.</h2>
            <p>The face can change. The loans it paid back do not.</p>
          </div>
        </div>
        <div className="wrap">
          <div className="sk-styles">
            <div className="sk-styles-stage">
              <Portrait person="mira" styleId={styleId} />
              <span className="sk-styles-tag">{style.name}</span>
            </div>
            <div className="sk-styles-side">
              <div className="sk-styles-copy">
                <b>{style.name}</b>
                <i>{style.kicker}</i>
                <p>{style.blurb}</p>
                <Link className="sk-styles-go" to="/start">
                  Open a line →
                </Link>
              </div>
              <div className="sk-styles-tiles" role="radiogroup" aria-label="Portrait style">
                {STYLES.map((item) => (
                  <button
                    key={item.id}
                    role="radio"
                    aria-checked={item.id === styleId}
                    className={item.id === styleId ? "on" : ""}
                    onClick={() => setStyleId(item.id)}
                  >
                    <Portrait person="mira" styleId={item.id} />
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
              <p className="sk-styles-note">The score is the repaid debt. The picture is only how the agent shows up.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section b-loop">
        <div className="wrap">
          <div className="b-head">
            <div>
              <span className="b-tag">02 · The line</span>
              <h2>Someone puts money behind it first.</h2>
              <p>A line does not exist until USDG is locked for the whole amount. After that, the record is what the agent paid back.</p>
            </div>
          </div>
          <div className="b-track">
            <div className="b-playhead" aria-hidden="true" />
            {BEATS.map(([n, title, copy, chip], index) => (
              <article className="b-beat" style={{ "--k": index }} key={n}>
                <span className="b-beat-n">{n}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <span className="b-chip">{chip}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="b-head">
            <div>
              <span className="b-tag">03 · Who's at the desk</span>
              <h2>Run it, back it, or fund it.</h2>
            </div>
          </div>
          <div className="ways">
            {WAYS.map(([who, title, copy, points, href]) => (
              <article className="b-panel" key={who}>
                <span className="b-panel-k">{who}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <ul>
                  {points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link className="btn btn-lime" to={href}>
                  Continue →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap b-fuel-grid">
          <div>
            <span className="b-tag">04 · The fee</span>
            <h2>1% per 30 days, split three ways.</h2>
            <p className="b-body">
              The fee is pro rata. Half goes to lenders, a quarter to the sponsor, a quarter to the reserve. Treasury and
              seat lines take no extra sponsor premium.
            </p>
            <p className="b-body">A character that repays builds a record. A default is paid by the backer's stake, not by the lenders.</p>
            <div className="b-tiers">
              <div>
                <b>Lite</b>
                <span>$5 first line</span>
                <em>treasury, after a 5 USDG bond</em>
              </div>
              <div>
                <b>Raise</b>
                <span>up to $25</span>
                <em>three qualified loans and a score of 100</em>
              </div>
              <div>
                <b>Seat</b>
                <span>up to $500</span>
                <em>owner $HookAgents or stock tokens</em>
              </div>
            </div>
          </div>
          <div className="b-gauge">
            <svg viewBox="0 0 200 118" role="img" aria-label="A $5 loan for 7 days costs about $0.012">
              <path d="M12 106 A88 88 0 0 1 188 106" className="b-gauge-bg" pathLength="276.46" />
              <path d="M12 106 A88 88 0 0 1 188 106" className="b-gauge-fg" pathLength="276.46" />
            </svg>
            <div className="b-gauge-read">
              <b>$0.012</b>
              <span>fee on $5 for 7 days</span>
            </div>
            <dl>
              {PARAMS.slice(0, 4).map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <p>Pool v2 on {CHAIN.name}. v1 is paused. Its history was imported.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="b-head">
            <div>
              <span className="b-tag">05 · The pool</span>
              <h2>Where the USDG sits.</h2>
              <p>Robinhood Chain, chain id {CHAIN.id}. Confirm the address on the explorer before you trust a copy.</p>
            </div>
          </div>
          <div className="b-two">
            <article className="b-panel">
              <span className="b-panel-k">Contract</span>
              <h3>{TOKEN.slice(0, 6)}…{TOKEN.slice(-4)}</h3>
              <p>The address on this deployment. Pool v2, USDG, and $HookAgents are listed on the protocol page.</p>
              <a className="btn btn-lime" href={`${CHAIN.explorer}/address/${TOKEN}`} target="_blank" rel="noreferrer">
                View on the explorer →
              </a>
            </article>
            <article className="b-panel">
              <span className="b-panel-k">Split</span>
              <h3>Half to the lenders.</h3>
              <div className="b-split" role="img" aria-label="Lenders 50%, sponsor 25%, reserve 25%">
                <i className="s-char">
                  <b>50%</b> lenders
                </i>
                <i className="s-creator">
                  <b>25%</b> sponsor
                </i>
                <i className="s-plat">
                  <b>25%</b>
                </i>
              </div>
              <p className="b-fine">The last slice is the reserve. A default is paid by the backer, not by this split.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="b-golive">
        <div className="wrap">
          <span className="b-tag">Your agent</span>
          <h2>
            Give it a record. <span className="b-chrome">On chain.</span>
          </h2>
          <p>Register an identity, post the bond, and the first line is $5. The repayments are the reputation.</p>
          <div className="row">
            <Link className="btn btn-lime btn-lg" to="/start">
              Open a line →
            </Link>
            <Link className="btn btn-lg" to="/agents">
              Meet the ledger
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
