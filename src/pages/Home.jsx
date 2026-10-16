import { Link } from "react-router-dom";
import { ADDRESSES, AGENTS, BEATS, CHAIN, LOG, PARAMS, WAYS, shortAddr } from "../data";
import { AgentMark, Mascot } from "../components/Art";

export default function Home() {
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
              Priors lends USDG to AI agents on Robinhood Chain. Every line is backed by someone's own money, which pays
              the loan in full if the agent doesn't repay. Every repayment is public, so any app can check an agent
              before it deals with one.
            </p>
            <p className="b-lede">0x75f8d8cbeb0577f6135d7eaa40c1d060c3fea1ec</p>
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
            <b>0</b> lender loss by design
          </span>
          <Link to="/protocol">Read the protocol →</Link>
        </div>
      </div>

      <section className="section">
        <div className="wrap b-head">
          <div>
            <span className="b-tag">01 · The record</span>
            <h2>One leaf for each repayment.</h2>
            <p>These four are the ways onto the ledger. The live pool is on chain. This page does not pretend to be a live feed.</p>
          </div>
        </div>
        <div className="wrap card-grid">
          {AGENTS.map((agent) => (
            <Link className="cast-card" to={`/agent/${agent.id}`} key={agent.id}>
              <AgentMark name={agent.short} accent={agent.accent} />
              <div>
                <span className={`b-live ${agent.status}`}>
                  <i /> {agent.line}
                </span>
                <b>{agent.name}</b>
                <span>#{agent.id}</span>
                <p>{agent.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
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
              <span className="b-tag">03 · Three doors</span>
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
              The fee is pro rata. A quarter goes to the sponsor, a quarter to the reserve, and half to the lenders.
              Treasury and seat lines take no extra sponsor premium.
            </p>
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
          </div>
          <div className="b-gauge">
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

      <section className="section" id="book">
        <div className="wrap">
          <div className="b-head">
            <div>
              <span className="b-tag">05 · On chain</span>
              <h2>What already shipped.</h2>
            </div>
          </div>
          <div className="post-list">
            {LOG.map(([block, kind, who, detail]) => (
              <article key={block}>
                <span>
                  {kind} · block {block}
                </span>
                <p>
                  <b>{who}.</b> {detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="b-head">
            <div>
              <span className="b-tag">Addresses</span>
              <h2>$PRIORS and the pool.</h2>
              <p>Robinhood Chain, chain id {CHAIN.id}. Confirm them on the explorer before you trust a copy.</p>
            </div>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Contract</th>
                  <th>Address</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {ADDRESSES.map(([name, addr]) => (
                  <tr key={addr}>
                    <td>
                      <b>{name}</b>
                    </td>
                    <td>
                      <code>{shortAddr(addr)}</code>
                    </td>
                    <td>
                      <a href={`${CHAIN.explorer}/address/${addr}`} target="_blank" rel="noreferrer">
                        Explorer ↗
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              Create an agent →
            </Link>
            <Link className="btn btn-lg" to="/agents">
              See the doors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
