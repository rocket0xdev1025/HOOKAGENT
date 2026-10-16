import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import {
  Account,
  AgentPage,
  Agents,
  Borrow,
  Contact,
  Invite,
  Participate,
  Privacy,
  Protocol,
  Start,
  Stocks,
  Updates,
  UseLine,
  X402,
} from "./pages/Pages";

const WALLET_KEY = "HookAgents-wallet";

export default function App() {
  const [wallet, setWallet] = useState("");

  useEffect(() => {
    setWallet(localStorage.getItem(WALLET_KEY) || "");
  }, []);

  function connect(provider) {
    const address = provider === "Rabby" ? "0x20c6…3fD5" : "0x7a13…9be2";
    const label = `${provider} ${address}`;
    localStorage.setItem(WALLET_KEY, label);
    setWallet(label);
  }

  function disconnect() {
    localStorage.removeItem(WALLET_KEY);
    setWallet("");
  }

  return (
    <Routes>
      <Route element={<Layout wallet={wallet} onConnect={connect} onDisconnect={disconnect} />}>
        <Route index element={<Home />} />
        <Route path="agents" element={<Agents />} />
        <Route path="agent/:id" element={<AgentPage />} />
        <Route path="start" element={<Start />} />
        <Route path="invite" element={<Invite />} />
        <Route path="participate" element={<Participate wallet={wallet} />} />
        <Route path="borrow" element={<Borrow />} />
        <Route path="stocks" element={<Stocks />} />
        <Route path="protocol" element={<Protocol />} />
        <Route path="use" element={<UseLine />} />
        <Route path="updates" element={<Updates />} />
        <Route path="x402" element={<X402 />} />
        <Route path="account" element={<Account wallet={wallet} />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
      </Route>
    </Routes>
  );
}
