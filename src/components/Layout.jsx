import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { NAV } from "../data";
import { LogoMark, Wordmark } from "./Art";

export default function Layout({ wallet, onConnect, onDisconnect }) {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [modal, setModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`b-hdr${stuck || open ? " stuck" : ""}${open ? " open" : ""}`}>
        <div className="b-hdr-in">
          <Link className="logo b-logo" to="/" aria-label="HookAgents home">
            <LogoMark />
            <Wordmark />
          </Link>
          <nav className="b-nav" aria-label="Main">
            {NAV.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="b-hdr-r">
            <button className="btn btn-ghost btn-sm hide-m" onClick={() => (wallet ? onDisconnect() : setModal(true))}>
              {wallet ? wallet : "Connect"}
            </button>
            <Link className="btn btn-lime btn-sm" to="/launch">
              <span className="hide-xs">Launch a coin</span>
              <span className="show-xs">Launch</span>
            </Link>
            <button className="b-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
              <i />
              <i />
              <i />
            </button>
          </div>
        </div>
        {open && (
          <div className="b-sheet">
            {NAV.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <button className="btn btn-ghost" onClick={() => (wallet ? onDisconnect() : setModal(true))}>
              {wallet ? wallet : "Connect"}
            </button>
          </div>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="b-ftr">
        <div className="wrap b-ftr-grid">
          <div className="b-ftr-brand">
            <span className="logo b-logo">
              <LogoMark />
              <Wordmark />
            </span>
            <p>
              AI characters with their own coin. Characters are run by AI and marked as AI. HookAgents never holds your
              wallet's keys; each character's own wallet is kept by the server to pay its running costs.
            </p>
            <span className="socials">
              <a href="https://x.com/hookagents" target="_blank" rel="noreferrer" aria-label="HookAgents on X">
                𝕏
              </a>
              <a href="https://t.me/hookagents" target="_blank" rel="noreferrer" aria-label="HookAgents on Telegram">
                ✈
              </a>
            </span>
          </div>
          <nav aria-label="Characters">
            <b>Characters</b>
            <Link to="/characters">All characters</Link>
            <Link to="/create">The studio</Link>
            <Link to="/create?mode=autonomous">Autonomous</Link>
            <Link to="/create?mode=creator">Creator-led</Link>
          </nav>
          <nav aria-label="Coins">
            <b>Coins</b>
            <Link to="/launches">All coins</Link>
            <Link to="/launch">Launch a coin</Link>
            <Link to="/#rules">Rules</Link>
            <Link to="/vault">My vault</Link>
          </nav>
          <nav aria-label="Reading">
            <b>Reading</b>
            <Link to="/docs">Docs</Link>
            <Link to="/timeline">Timeline</Link>
            <Link to="/guide">This week</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/docs#fees">Fees</Link>
            <Link to="/roadmap">Roadmap</Link>
            <Link to="/terms">Terms & risks</Link>
            <Link to="/planet">The planet</Link>
            <Link to="/lab">Check in</Link>
          </nav>
        </div>
        <div className="wrap b-ftr-bar">
          <span>
            <i className="b-rec" /> Solana mainnet
          </span>
          <span>
            <a href="https://x.com/hookagents" target="_blank" rel="noreferrer">
              X
            </a>
            {" · "}
            <a href="https://t.me/hookagents" target="_blank" rel="noreferrer">
              Telegram
            </a>
            {" · HookAgents"}
          </span>
        </div>
      </footer>
      {modal && (
        <div className="modal-back" onClick={() => setModal(false)}>
          <div className="modal" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="connect-title">
            <span className="eyebrow">Wallet</span>
            <h2 id="connect-title">Connect</h2>
            <p>This preview keeps a demo address in the browser. It does not open a wallet, ask for a seed phrase, or sign a transaction.</p>
            <div className="wallet-list">
              {["Phantom", "Solflare"].map((name) => (
                <button
                  key={name}
                  className="btn"
                  onClick={() => {
                    onConnect(name);
                    setModal(false);
                  }}
                >
                  {name}
                  <span>Demo</span>
                </button>
              ))}
            </div>
            <button className="text-btn" onClick={() => setModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
