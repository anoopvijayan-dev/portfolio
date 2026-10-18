// All site copy lives here. Lines marked CONFIRM need Anoop's check before launch.

export const site = {
  name: "Anoop Vijayan", // CONFIRM: full name as it should appear publicly
  role: "AI agent & platform engineer",
  url: "https://anoopvijayan-dev.github.io/portfolio", // switch to the custom domain once bought
  email: "anoop8vijayan@gmail.com", // CONFIRM: or a hello@ address on the new domain
  links: {
    linkedin: "https://www.linkedin.com/in/", // CONFIRM: profile URL
    github: "https://github.com/anoopvijayan-dev",
    upwork: "https://www.upwork.com/", // CONFIRM: public profile URL
  },
  availability: "Taking on a small number of part-time projects.",
};

export const hero = {
  headline: "AI agents for businesses that can’t afford to get it wrong.",
  lede:
    "I’m a senior engineer with 13 years in payments and asset management. I design, ship and run LLM agents in production, with the guardrails, audit trail and infrastructure that regulated teams need before they let software act on their behalf.",
};

// Illustrative run shown in the hero. Not real data; labelled as an example on the page.
export const traceLines: { kind: "tool" | "model" | "guard" | "human"; text: string; status?: string; tone?: "ok" | "hold" | "wait" }[] = [
  { kind: "tool", text: "merchant.get_profile(id=M-48211)", status: "ok 212ms", tone: "ok" },
  { kind: "tool", text: "transactions.summarise(days=90)", status: "ok 1.4s", tone: "ok" },
  { kind: "tool", text: "policy.check(rule=funding_eligibility)", status: "pass", tone: "ok" },
  { kind: "model", text: "risk band: medium, confidence 0.82" },
  { kind: "guard", text: "offer above auto-approve limit", status: "hold", tone: "hold" },
  { kind: "human", text: "review requested in #credit-ops", status: "waiting", tone: "wait" },
];

export const offers = [
  {
    title: "Production AI agents",
    body:
      "Tool-using agents built on MCP, delivered where your team already works: Slack, WhatsApp, email. Each one ships with evaluations, guardrails, human approval for risky steps, and a log of every action it took.",
  },
  {
    title: "Automation for regulated operations",
    body:
      "Inbox and document triage, bank-statement and cash-flow analysis, compliance tracking and close-out. Workflows where a wrong answer costs money, so the agent shows its working and knows when to stop.",
  },
  {
    title: "Platform and infrastructure for AI",
    body:
      "Multi-tenant Kubernetes on GKE, Terraform, Helm and CI/CD. Deployed into your own cloud account so your data, keys and code stay yours.",
  },
];

export type Work = {
  title: string;
  context: string; // who and when, one line
  status?: string;
  summary: string;
  stack: string[];
  outcome?: string; // CONFIRM: add real, shareable outcomes only
};

export const work: Work[] = [
  {
    title: "Merchant risk-scoring agent",
    context: "UK card-payments company",
    status: "In production",
    summary:
      "An agent that assesses merchants for a commercial funding product. It pulls account and transaction data through tools, applies eligibility policy, and hands borderline cases to people with its reasoning attached.",
    stack: ["LLM agents", "MCP", "Human review"], // CONFIRM: add language and model stack
  },
  {
    title: "Agent tooling for internal teams",
    context: "UK card-payments company",
    status: "In production",
    summary:
      "MCP tool servers and Slack-delivered agents that give engineers and operations staff governed access to internal systems, instead of each team wiring its own scripts to production data.",
    stack: ["MCP", "Slack", "Kubernetes", "Helm"],
  },
  {
    title: "Multi-tenant platform on GKE",
    context: "UK card-payments company, core platform team",
    summary:
      "Shared Kubernetes clusters that many product teams deploy onto, defined in Terraform and Helm with CI/CD pipelines. The same foundation the agents above run on.",
    stack: ["GKE", "Terraform", "Helm", "CI/CD"],
  },
  {
    title: "AI operations agent for property and care",
    context: "BridgeTrade, co-founder and CTO", // CONFIRM: OK to name publicly while employed
    summary:
      "An agent deployed per site that holds its assets, contractors and maintenance schedule, so a manager can ask it what’s overdue and have it chase contractors over WhatsApp. Built as a multi-tenant .NET modular monolith with payments through Stripe Connect.",
    stack: [".NET", "CQRS", "Semantic Kernel", "AWS Bedrock", "Stripe Connect"],
  },
  {
    title: "Compliance tracking for UK landlords",
    context: "Independent product",
    summary:
      "Certificate and hazard tracking for landlords with up to ten properties. Tenants report hazards by scanning a QR code, and the system tracks response deadlines under Awaab’s Law.",
    stack: ["NestJS", "Supabase", "Vercel"],
  },
];

export const steps = [
  {
    title: "Assessment",
    length: "1–2 weeks, fixed price",
    body:
      "We map one workflow end to end: where the data lives, what the agent may and may not do, and what failure looks like. You get a written build plan and an honest view on whether an agent is the right tool.",
  },
  {
    title: "Pilot",
    length: "4–8 weeks",
    body:
      "One workflow running in production with real users, an evaluation set, a human approving anything above an agreed threshold, and a weekly review of what it got right and wrong.",
  },
  {
    title: "Run and extend",
    length: "Monthly",
    body:
      "Monitoring, cost control and new tools as the workflow grows. You own the code and the deployment from day one.",
  },
];

export const background = [
  { org: "UK card-payments company", role: "Senior Software Engineer, core platform and AI agents", when: "Now" },
  { org: "Checkout.com", role: "Software engineering", when: "" }, // CONFIRM role and years
  { org: "Schroders", role: "Software engineering", when: "" }, // CONFIRM role and years
];

export const stack = [
  { group: "Agents", items: "MCP, Semantic Kernel, AWS Bedrock, evaluations, tool design" }, // CONFIRM: add model providers you use,
  { group: "Infrastructure", items: "GKE, Kubernetes, Terraform, Helm, AWS, Azure, CI/CD" },
  { group: "Languages", items: "C# / .NET, TypeScript" }, // CONFIRM: add Python/Go if true,
  { group: "Domains", items: "Card payments, SME lending, asset management, property compliance" },
];
