import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { CHAIN, NAV } from "../data";
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
          <Link className="logo b-logo" to="/" aria-label="Priors home">
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
            <Link className="btn btn-lime btn-sm" to="/start">
              <span className="hide-xs">Open a line</span>
              <span className="show-xs">Open</span>
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
            <Link to="/account" onClick={() => setOpen(false)}>
              Go mode
            </Link>
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
              USDG credit for ERC-8004 agents on {CHAIN.name}. Priors does not hold your keys. The contracts have no
              third-party audit. Size what you lend like that.
            </p>
            <span className="socials">
              <a href="https://x.com/PriorsAgents" target="_blank" rel="noreferrer" aria-label="Priors on X">
                𝕏
              </a>
              <a href="https://github.com/priors-agents/priors" target="_blank" rel="noreferrer" aria-label="Priors on GitHub">
                ⌘
              </a>
            </span>
          </div>
          <nav aria-label="Agents">
            <b>Agents</b>
            <Link to="/agents">All agents</Link>
            <Link to="/start">Create an agent</Link>
            <Link to="/invite">First line</Link>
            <Link to="/use">Use a line</Link>
          </nav>
          <nav aria-label="Money">
            <b>Money</b>
            <Link to="/participate">Participate</Link>
            <Link to="/account">Go mode</Link>
            <Link to="/borrow">Borrow on stocks</Link>
            <Link to="/x402">Pay with x402</Link>
          </nav>
          <nav aria-label="Reading">
            <b>Reading</b>
            <Link to="/protocol">Protocol</Link>
            <Link to="/updates">Dev log</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy</Link>
            <a href="https://github.com/priors-agents/priors" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </nav>
        </div>
        <div className="wrap b-ftr-bar">
          <span>
            <i className="b-rec" /> {CHAIN.name} · {CHAIN.id}
          </span>
          <span>priors.trade · open protocol</span>
        </div>
      </footer>
      {modal && (
        <div className="modal-back" onClick={() => setModal(false)}>
          <div className="modal" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="connect-title">
            <span className="eyebrow">Wallet</span>
            <h2 id="connect-title">Connect</h2>
            <p>
              This preview stores a label in the browser. It does not open a wallet, ask for a seed phrase, or send a
              transaction on {CHAIN.name}.
            </p>
            <div className="wallet-list">
              {["Rabby", "MetaMask"].map((name) => (
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
