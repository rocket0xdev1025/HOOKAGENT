export const CHAIN = {
  name: "Robinhood Chain",
  id: 4663,
  explorer: "https://robinhoodchain.blockscout.com",
};

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
  ["$PRIORS", "0xeDBf91223639800BCd5756815CAf908Df3b890bE"],
  ["Treasury v5", "0xFe8fdf43c4b0443aCF8E8CD8facD62F1B770e267"],
  ["Seat vault v5", "0xC999014C6218EC41f0aE412d49AE8f2aA4c539fD"],
  ["Stock vault", "0xbEcd07EC689988e16b870C121756C4c2C8cb02B6"],
  ["ERC-8004 registry", "0x8004A169FB4a3325136EB29fA0ceB6D2e539a432"],
];

export const AGENTS = [
  {
    id: "6228",
    name: "Treasury",
    short: "Treasury",
    role: "First lines",
    status: "on",
    accent: "#7dcea0",
    line: "$5",
    score: "—",
    leaves: 0,
    quote: "A first line of $5, after a 5 USDG bond. The bond comes back once the agent is clear.",
    bio: "Treasury v5 opens a small fully backed line for a new ERC-8004 agent. It does not take the agent's keys.",
  },
  {
    id: "8793",
    name: "Raise",
    short: "Raise",
    role: "After three qualified loans",
    status: "on",
    accent: "#d1ae68",
    line: "$25",
    score: "100",
    leaves: 3,
    quote: "Three qualified loans, fourteen days, and a score of at least 100 can raise the line to $25.",
    bio: "A qualified loan runs at least seven days. Short loans still count on the record. They add little to the score.",
  },
  {
    id: "8762",
    name: "Seat",
    short: "Seat",
    role: "Owner-backed $PRIORS",
    status: "demo",
    accent: "#ece3cf",
    line: "$50",
    score: "—",
    leaves: 10,
    quote: "The owner's own $PRIORS sits behind the line. A default burns three quarters of that stake.",
    bio: "Seat vault v5 is owner-only. The vault's USDG backs the line. Lenders are not the ones who eat a default.",
  },
  {
    id: "6424",
    name: "Stock vault",
    short: "Stocks",
    role: "Robinhood stock tokens",
    status: "demo",
    accent: "#8eb0e8",
    line: "25–70%",
    score: "—",
    leaves: 0,
    quote: "Deposit stock tokens, borrow USDG against them, and get the tokens back when the loan is repaid.",
    bio: "The line is a share of the Chainlink value, never above 70%, and never above $500. A default keeps what is owed plus 20% and returns the rest.",
  },
];

export const WAYS = [
  ["Run an agent", "Get a first line", "Register an ERC-8004 identity, post a 5 USDG bond, and draw a $5 treasury line when the agent needs working capital.", ["$5 first line", "Fully backed", "Public record"], "/start"],
  ["Hold $PRIORS", "Back your agent", "Put your own $PRIORS behind the line. You earn a share of the fees. If the agent defaults, three quarters of the stake burns.", ["$25 to $50 to start", "Fees in USDG", "Owner-only for now"], "/account"],
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
  ["85,924,243", "Seat", "Vault v5", "Owner stakes $PRIORS. The vault backs the line in USDG.", "seat"],
  ["74,826,641", "Stocks", "Stock vault", "Stock tokens can open a line. Tokens return on repayment.", "stock"],
];

export const UPDATES = [
  ["v2 live", "Pool v2 replaced unbacked earned credit. Every line is backed. A default burns the backer's shares, not lender principal."],
  ["Treasury v5", "An owner posts a 5 USDG bond and can open a $5 line without an invite code. The bond returns when the agent is clear."],
  ["Seat vault v5", "The agent owner stakes their own $PRIORS. Three quarters burn on a default. The rest goes back."],
  ["Stock lines", "Thirty-five Robinhood stock tokens can collateralize a line, priced from Chainlink, capped at 70% and $500."],
  ["x402", "An agent can pay a USDG request on Robinhood Chain and borrow only the shortfall from its line."],
];

export function agentById(id) {
  return AGENTS.find((agent) => agent.id === id);
}

export function shortAddr(addr) {
  return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
}
