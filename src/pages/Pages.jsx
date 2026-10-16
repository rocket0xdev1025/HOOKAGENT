import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ADDRESSES, AGENTS, CHAIN, PARAMS, UPDATES, agentById, shortAddr } from "../data";
import { Portrait } from "../components/Art";

function PageHero({ kicker, title, lede, children }) {
  return (
    <section className="page-hero">
      <div className="wrap narrow">
        <span className="b-tag">{kicker}</span>
        <h1>{title}</h1>
        {lede && <p className="b-lede">{lede}</p>}
        {children}
      </div>
    </section>
  );
}

export function Agents() {
  return (
    <>
      <PageHero kicker="Agents" title="Ways onto the ledger." lede="A new agent starts at the treasury. A longer record can raise the line, take a seat, or post stock tokens.">
        <Link className="btn btn-lime" to="/start">
          Create an agent →
        </Link>
      </PageHero>
      <section className="section">
        <div className="wrap card-grid">
          {AGENTS.map((agent) => (
            <Link className="cast-card" to={`/agent/${agent.id}`} key={agent.id}>
              <Portrait person={agent.person || "mira"} />
              <div>
                <b>{agent.name}</b>
                <span>#{agent.id} · {agent.line}</span>
                <p>{agent.quote}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export function AgentPage() {
  const { id } = useParams();
  const agent = agentById(id);
  if (!agent) {
    return (
      <PageHero kicker="Missing" title="No agent with that id.">
        <Link className="btn" to="/agents">
          Back to agents
        </Link>
      </PageHero>
    );
  }
  return (
    <>
      <section className="char-hero">
        <div className="wrap char-grid">
          <div className="char-portrait">
            <Portrait person={agent.person || "mira"} />
          </div>
          <div>
            <span className={`b-live ${agent.status}`}>
              <i /> Line {agent.line}
            </span>
            <h1>{agent.name}</h1>
            <p className="ticker">ERC-8004 #{agent.id}</p>
            <p className="b-lede">{agent.bio}</p>
            <blockquote>“{agent.quote}”</blockquote>
          </div>
        </div>
      </section>
    </>
  );
}

export function Start() {
  const [id, setId] = useState("");
  return (
    <>
      <PageHero
        kicker="Start"
        title="Create an agent."
        lede="On mainnet this is an ERC-8004 registration, then a 5 USDG bond, then a $5 line from treasury v5. This page only keeps a note. It does not sign anything."
      />
      <section className="section">
        <form
          className="wrap studio"
          onSubmit={(event) => {
            event.preventDefault();
            const note = { id: id || "pending", at: Date.now() };
            const prev = JSON.parse(localStorage.getItem("priors-starts") || "[]");
            prev.unshift(note);
            localStorage.setItem("priors-starts", JSON.stringify(prev.slice(0, 20)));
            setId("saved");
          }}
        >
          <label>
            What the agent is for
            <textarea name="purpose" rows={4} required placeholder="Pays for data, posts a record, repays in seven days." />
          </label>
          <button className="btn btn-lime" type="submit">
            Save a local note
          </button>
          {id === "saved" && <p className="b-fine">Saved in this browser. The chain step is still yours to sign, from a wallet you control.</p>}
        </form>
      </section>
    </>
  );
}

export function Invite() {
  return (
    <PageHero
      kicker="First line"
      title="Five dollars, fully backed."
      lede="Treasury v5 opens a $5 line after the owner locks a 5 USDG bond. The bond comes back when the agent has no line, no open loan, and no default, and at least four days have passed. A default sends the bond to the Safe."
    >
      <Link className="btn btn-lime" to="/start">
        Begin →
      </Link>
    </PageHero>
  );
}

export function Participate({ wallet }) {
  return (
    <>
      <PageHero
        kicker="Participate"
        title="Lend, stake, or vouch."
        lede={wallet ? `Demo session ${wallet}. Nothing here moves USDG.` : "Connect a demo label if you want this browser marked. Deposits on the real pool happen from your own wallet."}
      />
      <section className="section">
        <div className="wrap b-two">
          <article className="b-panel">
            <span className="b-panel-k">Lend</span>
            <h3>Deposit USDG</h3>
            <p>Lenders earn 50% of every fee. Leaving within 7 days of a deposit leaves 0.5% for the lenders who stayed.</p>
          </article>
          <article className="b-panel">
            <span className="b-panel-k">Root</span>
            <h3>Stake at least $10</h3>
            <p>A root vouches for agents with the owner's signed consent and earns the sponsor share of their fees.</p>
          </article>
        </div>
      </section>
    </>
  );
}

export function Borrow() {
  return (
    <>
      <PageHero
        kicker="Stocks"
        title="Borrow without selling the token."
        lede="Deposit a Robinhood stock token on Robinhood Chain, draw USDG against it, and the vault returns the token when you repay. A default keeps what is owed plus 20% and sends the rest back."
      >
        <Link className="btn" to="/stocks">
          Open a stock line
        </Link>
      </PageHero>
      <section className="section">
        <div className="wrap b-tiers">
          <div>
            <b>25–70%</b>
            <span>of Chainlink value</span>
            <em>never above 70%, never above $500</em>
          </div>
          <div>
            <b>+20%</b>
            <span>kept on a default</span>
            <em>the rest of the tokens come back</em>
          </div>
          <div>
            <b>30 days</b>
            <span>idle expiry</span>
            <em>7 days if the line was never drawn</em>
          </div>
        </div>
      </section>
    </>
  );
}

export function Stocks() {
  return (
    <PageHero
      kicker="Stock line"
      title="Your tokens, the vault's line."
      lede="Thirty-five stock tokens are accepted. Each has its own open-line cap. A record of repaid treasury credit can add up to 15 points of loan-to-value, still capped at 70%."
    />
  );
}

export function Protocol() {
  return (
    <>
      <PageHero kicker="Protocol" title="Every line is backed." lede="v2 dropped unbacked credit. Capacity comes from a backer's locked pool shares. A default burns shares worth the principal and the fee. The share price does not fall from that default." />
      <section className="section">
        <div className="wrap docs">
          {PARAMS.map(([k, v]) => (
            <article key={k}>
              <h2>{k}</h2>
              <p>{v}</p>
            </article>
          ))}
          <article>
            <h2>No audit</h2>
            <p>v2 has had internal review and no third-party audit. No path to lender principal was found. That is not a proof. Launch sizes stay small for that reason.</p>
          </article>
        </div>
        <div className="wrap" style={{ marginTop: 28 }}>
          <div className="table-wrap">
            <table>
              <tbody>
                {ADDRESSES.map(([name, addr]) => (
                  <tr key={addr}>
                    <td>
                      <b>{name}</b>
                    </td>
                    <td>
                      <a href={`${CHAIN.explorer}/address/${addr}`} target="_blank" rel="noreferrer">
                        {shortAddr(addr)}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export function UseLine() {
  return (
    <PageHero
      kicker="Use a line"
      title="Borrow, work, repay."
      lede="Draw up to the line for 1 to 30 days. Pay the fee with the principal. A loan of at least 7 days is what the score treats as qualified. Anyone can repay a loan. The record stays with the borrower."
    />
  );
}

export function Updates() {
  return (
    <>
      <PageHero kicker="Dev log" title="What changed." />
      <section className="section">
        <div className="wrap timeline">
          {UPDATES.map(([when, copy]) => (
            <article key={when}>
              <span className="b-beat-n">{when}</span>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function X402() {
  return (
    <PageHero
      kicker="x402"
      title="Pay USDG. Borrow only the gap."
      lede="A payer on Robinhood Chain can settle an x402 request in USDG. If the wallet is short, the line covers the difference and the agent repays it like any other loan. The network is eip155:4663."
    />
  );
}

export function Account({ wallet }) {
  return (
    <PageHero
      kicker="Go mode"
      title="Back your own agent."
      lede={
        wallet
          ? `${wallet} is a label in this browser. Staking $PRIORS still happens in a wallet you control, on chain ${CHAIN.id}.`
          : "An owner's $PRIORS can sit behind a line of $25 to $50. A default burns three quarters. This screen does not stake it for you."
      }
    >
      <Link className="btn btn-lime" to="/participate">
        See participate
      </Link>
    </PageHero>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero kicker="Contact" title="Write it down here." lede="The note stays in this browser. It is not sent to a server." />
      <section className="section">
        <form
          className="wrap studio"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <label>
            Note
            <textarea required rows={5} placeholder="A question about a line, a seat, or a stock token." />
          </label>
          <button className="btn btn-lime" type="submit">
            Save note
          </button>
          {sent && <p className="b-fine">Saved on this machine.</p>}
        </form>
      </section>
    </>
  );
}

export function Privacy() {
  return (
    <PageHero
      kicker="Privacy"
      title="What this preview keeps."
      lede="Demo wallet labels, start notes, and contact notes stay in local storage on this browser. Priors does not ask for a seed phrase. Chain data, when you read it yourself, is public on Robinhood Chain."
    />
  );
}
