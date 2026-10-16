export const CHAIN = {
  name: "Robinhood Chain",
  id: 4663,
  explorer: "https://robinhoodchain.blockscout.com",
};

export const TOKEN = "0x75f8d8cbeb0577f6135d7eaa40c1d060c3fea1ec";

export const NAV = [
  { to: "/agents", label: "Agents" },
  { to: "/invite", label: "First line" },
  { to: "/participate", label: "Participate" },
  { to: "/borrow", label: "Stocks" },
  { to: "/protocol", label: "Protocol" },
  { to: "/x402", label: "x402" },
  { to: "/updates", label: "Dev log" },
];

export const ADDRESSES = [
  ["Pool v2", "0x281210097f0de7A8FB6F87310AF0f089c9C8DE21"],
  ["USDG", "0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168"],
  ["$HookAgents", "0xeDBf91223639800BCd5756815CAf908Df3b890bE"],
  ["Treasury v5", "0xFe8fdf43c4b0443aCF8E8CD8facD62F1B770e267"],
  ["Seat vault v5", "0xC999014C6218EC41f0aE412d49AE8f2aA4c539fD"],
  ["Stock vault", "0xbEcd07EC689988e16b870C121756C4c2C8cb02B6"],
  ["ERC-8004 registry", "0x8004A169FB4a3325136EB29fA0ceB6D2e539a432"],
];

export const RACK = [
  ["6228", "Treasury", "5", 18],
  ["8793", "Raise", "25", 46],
  ["8762", "Seat", "HookAgents", 8],
  ["6424", "Stocks", "USDG", 34],
  ["lend", "Lend", "FEE", 22],
  ["x402", "x402", "PAY", 52],
];

export const STYLES = [
  { id: "hookit", name: "HookAgents", kicker: "The public record", blurb: "One face on every repayment. The line, the fee, and the default are what the page is for. The picture does not change the number." },
  { id: "real", name: "Real", kicker: "A plain portrait", blurb: "The agent can look like a person. The credit record is still the loans it paid back." },
  { id: "editorial", name: "Editorial", kicker: "Hard light", blurb: "A sharper frame for the same identity. ERC-8004 is the id. The portrait is only the face." },
  { id: "anime", name: "Anime", kicker: "A drawn agent", blurb: "The style can be a drawing. The line is still USDG on Robinhood Chain." },
  { id: "storybook", name: "Storybook", kicker: "A softer picture", blurb: "Useful when the agent is a character. The repayments stay the reputation." },
  { id: "toon3d", name: "3D Toon", kicker: "A figure", blurb: "Rounded light, same agent. The bond and the line do not care how it is drawn." },
  { id: "comic", name: "Comic", kicker: "Ink", blurb: "A panel, not a promise. Nothing in the picture is the credit score." },
  { id: "pixel", name: "Pixel", kicker: "Small", blurb: "Still the same agent id when the picture is reduced to a mark." },
  { id: "clay", name: "Clay", kicker: "Matte", blurb: "A sculpted face for the public page. The pool reads the loans, not the clay." },
  { id: "neon", name: "Neon", kicker: "Night", blurb: "A darker set. The USDG and the stock tokens are unchanged." },
  { id: "oil", name: "Oil Painting", kicker: "Older light", blurb: "The record is newer than the picture. Repayments are the part that counts." },
  { id: "paint", name: "Paint Doodle", kicker: "A fast face", blurb: "Loose on purpose. The line size is still $5 to $500." },
  { id: "fried", name: "Deep Fried", kicker: "Too much", blurb: "The joke version. It does not change the fee or the default." },
  { id: "derp", name: "Derp Toon", kicker: "The bit", blurb: "Bigger head, same wallet. The owner still signs the consent." },
];

export const ROLES = [
  ["agent", "Agent", "Borrows USDG inside a backed line and repays it in public", "/start"],
  ["lender", "Lender", "Deposits USDG and receives half of every fee", "/participate"],
  ["root", "Root", "Stakes at least $10 and vouches with the owner's consent", "/participate"],
  ["seat", "Seat", "The owner puts $HookAgents behind the line", "/account"],
  ["stock", "Stock line", "Stock tokens stay deposited while USDG is drawn", "/borrow"],
  ["bond", "Invite bond", "5 USDG locked before the first $5 line", "/invite"],
  ["score", "Score", "Qualified loans, held at least 7 days, build the record", "/protocol"],
  ["x402", "x402 payer", "Pays a USDG request and borrows only the shortfall", "/x402"],
  ["sponsor", "Sponsor", "Earns a quarter of the fee on the lines it backs", "/protocol"],
  ["reserve", "Reserve", "Takes a quarter of the fee. A default does not come from lenders", "/protocol"],
  ["treasury", "Treasury", "Opens the first $5 line. Raises to $25 after three qualified loans", "/invite"],
  ["vault", "Stock vault", "Returns the tokens when the loan is repaid", "/stocks"],
  ["grace", "Grace", "Three days after due before anyone can mark a default", "/protocol"],
  ["hold", "Lender hold", "Leaving within 7 days of a deposit leaves 0.5% behind", "/participate"],
  ["consent", "Consent", "Nobody can open a line on an agent without the owner's signature", "/use"],
  ["record", "Public record", "Every repayment and default is an event on Robinhood Chain", "/agents"],
];

export const AGENTS = [
  {
    id: "6228",
    person: "alex",
    name: "Treasury",
    short: "Treasury",
    role: "First lines",
    status: "on",
    accent: "#3ab8c2",
    line: "$5",
    quote: "A first line of $5, after a 5 USDG bond. The bond comes back once the agent is clear.",
    bio: "Treasury v5 opens a small fully backed line for a new ERC-8004 agent. It does not take the agent's keys.",
  },
  {
    id: "8793",
    person: "mateo",
    name: "Raise",
    short: "Raise",
    role: "After three qualified loans",
    status: "on",
    accent: "#e0b23a",
    line: "$25",
    score: "100",
    leaves: 3,
    quote: "Three qualified loans, fourteen days, and a score of at least 100 can raise the line to $25.",
    bio: "A qualified loan runs at least seven days. Short loans still count on the record. They add little to the score.",
  },
  {
    id: "8762",
    person: "kenji",
    name: "Seat",
    short: "Seat",
    role: "Owner-backed $HookAgents",
    status: "demo",
    accent: "#8a5cf0",
    line: "$50",
    score: "—",
    leaves: 10,
    quote: "The owner's own $HookAgents sits behind the line. A default burns three quarters of that stake.",
    bio: "Seat vault v5 is owner-only. The vault's USDG backs the line. Lenders are not the ones who eat a default.",
  },
  {
    id: "6424",
    person: "freya",
    name: "Stock vault",
    short: "Stocks",
    role: "Robinhood stock tokens",
    status: "demo",
    accent: "#3a6fe0",
    line: "25–70%",
    score: "—",
    leaves: 0,
    quote: "Deposit stock tokens, borrow USDG against them, and get the tokens back when the loan is repaid.",
    bio: "The line is a share of the Chainlink value, never above 70%, and never above $500. A default keeps what is owed plus 20% and returns the rest.",
  },
  {
    id: "lend",
    person: "dev",
    name: "Lenders",
    short: "Lend",
    role: "Half of every fee",
    status: "demo",
    accent: "#e0b23a",
    line: "50%",
    quote: "Deposit USDG. Half of every fee accrues to the pool. A default is paid by the backer, not by you.",
    bio: "Leaving within 7 days of a deposit leaves 0.5% for the lenders who stayed. The contracts have no third-party audit.",
  },
  {
    id: "x402",
    person: "mira",
    name: "x402",
    short: "x402",
    role: "Pay USDG on Robinhood Chain",
    status: "demo",
    accent: "#e0b23a",
    line: "gap",
    quote: "The wallet pays the request. The line covers only what the wallet is short, then the agent repays it.",
    bio: "Payments settle in USDG on eip155:4663. The network name on the request is Robinhood Chain.",
  },
  {
    id: "bond",
    person: "hookcat",
    name: "Invite bond",
    short: "Bond",
    role: "5 USDG, refundable",
    status: "off",
    accent: "#3ab8c2",
    line: "5",
    quote: "The bond sits until the agent is clear: no line, no open loan, no default, and at least four days.",
    bio: "A default sends the bond to the Safe. A clean agent gets it back.",
  },
  {
    id: "root",
    person: "ada",
    name: "Root",
    short: "Root",
    role: "Vouch with consent",
    status: "demo",
    accent: "#3a6fe0",
    line: "$10",
    quote: "A root stakes at least $10 and can vouch only when the agent owner has signed.",
    bio: "The sponsor earns a quarter of the fee. Nobody can attach a line to an agent against the owner's will.",
  },
];

export const WAYS = [
  ["Run an agent", "Get a first line", "Register an ERC-8004 identity, post a 5 USDG bond, and draw a $5 treasury line when the agent needs working capital.", ["$5 first line", "Fully backed", "Public record"], "/start"],
  ["Hold $HookAgents", "Back your agent", "Put your own $HookAgents behind the line. You earn a share of the fees. If the agent defaults, three quarters of the stake burns.", ["$25 to $50 to start", "Fees in USDG", "Owner-only for now"], "/account"],
  ["Lend USDG", "Fund the pool", "Deposit USDG. Lenders receive 50% of every fee. A default is paid from the backer's stake, not from the pool. The contracts are unaudited, so lent USDG is still at risk.", ["50% of fees", "Withdrawals don't wait on borrowers", "0.5% if you leave within 7 days"], "/participate"],
];

export const BEATS = [
  ["01", "Back", "Someone locks USDG for the whole line: the treasury, a sponsor, or a vault. Nobody borrows until that money is there.", "$5 first line"],
  ["02", "Draw", "The agent borrows inside the line, for a day, a week, or a month. The fee is 1% per 30 days.", "up to $500"],
  ["03", "Repay", "Principal plus fee is written on chain. That repayment is the record any app can check.", "public event"],
  ["04", "Default", "If it does not repay, the backer's stake pays the loan in full. Lenders do not take that loss.", "stake burns"],
];

export const PARAMS = [
  ["Loan size", "$5 – $500"],
  ["Term", "1 – 30 days"],
  ["Fee", "1% per 30 days"],
  ["Split", "50% lenders · 25% sponsor · 25% reserve"],
  ["Grace", "3 days"],
  ["Qualified loan", "term of at least 7 days"],
  ["Root stake", "$10 minimum"],
  ["Lender hold", "7 days, then free"],
];

export const LOG = [
  ["71,702,460", "Cutover", "Pool v2", "Live on Robinhood Chain. v1 records imported.", "v2"],
  ["88,669,178", "Treasury", "v5", "First line stays $5. A 5 USDG bond opens it.", "bond"],
  ["85,924,243", "Seat", "Vault v5", "Owner stakes $HookAgents. The vault backs the line in USDG.", "seat"],
  ["74,826,641", "Stocks", "Stock vault", "Stock tokens can open a line. Tokens return on repayment.", "stock"],
];

export const UPDATES = [
  ["v2 live", "Pool v2 replaced unbacked earned credit. Every line is backed. A default burns the backer's shares, not lender principal."],
  ["Treasury v5", "An owner posts a 5 USDG bond and can open a $5 line without an invite code. The bond returns when the agent is clear."],
  ["Seat vault v5", "The agent owner stakes their own $HookAgents. Three quarters burn on a default. The rest goes back."],
  ["Stock lines", "Thirty-five Robinhood stock tokens can collateralize a line, priced from Chainlink, capped at 70% and $500."],
  ["x402", "An agent can pay a USDG request on Robinhood Chain and borrow only the shortfall from its line."],
];

export function agentById(id) {
  return AGENTS.find((agent) => agent.id === id);
}

export function shortAddr(addr) {
  return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
}
