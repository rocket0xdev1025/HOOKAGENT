import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import {
  CharacterPage,
  Characters,
  Create,
  Docs,
  Guide,
  Lab,
  Launch,
  Launches,
  Planet,
  Roadmap,
  RulesPage,
  Skills,
  Terms,
  Timeline,
  Vault,
} from "./pages/Pages";

const WALLET_KEY = "hookagents-wallet";

export default function App() {
  const [wallet, setWallet] = useState("");

  useEffect(() => {
    setWallet(localStorage.getItem(WALLET_KEY) || "");
  }, []);

  function connect(provider) {
    const address = provider === "Phantom" ? "7xK3…pQ9a" : "4mQa…Lk2s";
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
        <Route path="timeline" element={<Timeline />} />
        <Route path="characters" element={<Characters />} />
        <Route path="c/:id" element={<CharacterPage />} />
        <Route path="launches" element={<Launches />} />
        <Route path="launch" element={<Launch />} />
        <Route path="launch/rules" element={<RulesPage />} />
        <Route path="create" element={<Create />} />
        <Route path="planet" element={<Planet />} />
        <Route path="skills" element={<Skills />} />
        <Route path="docs" element={<Docs />} />
        <Route path="vault" element={<Vault wallet={wallet} />} />
        <Route path="guide" element={<Guide />} />
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="terms" element={<Terms />} />
        <Route path="lab" element={<Lab />} />
      </Route>
    </Routes>
  );
}
