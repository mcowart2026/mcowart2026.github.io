const projects = {
  "agents": {
    "title": "Operational Intelligence Agents",
    "type": "IN ACTIVE BUSINESS USE",
    "summary": "AI-assisted reporting workflows that turn daily business performance data into a focused management review. They surface accounts and teams needing attention, helping leaders move from sorting reports to investigating issues and deciding what to do next.",
    "category": "BUSINESS OPERATIONS & AI",
    "chips": [
      "Exception detection",
      "Performance analysis",
      "Management reporting"
    ],
    "description": "Built around a recurring operations problem: important signals are scattered across reports, while managers need to know where to focus. These agents review business performance across client accounts and teams, organize findings, and flag areas that warrant investigation. The result is a more focused daily review, with leadership retaining responsibility for interpreting the evidence and choosing an action.",
    "points": [
      "Review reporting data across accounts and teams to identify performance concerns.",
      "Surface exceptions and areas needing investigation in management-facing summaries.",
      "Connect AI-assisted analysis to an existing daily operational workflow.",
      "Keep business judgment and intervention decisions with human leaders."
    ],
    "stage": "In active business use. Customer data, internal reporting, and proprietary operating details remain private."
  },
  "fractal": {
    "title": "Fractal",
    "type": "SYNTHETIC-DATA TESTING",
    "summary": "A recruiting operations platform that connects applicant tracking, client relationship management, resume intake, candidate review, and interview coordination. Separate client workspaces and shared workflows help organize the path from an incoming application to a client-ready candidate.",
    "category": "RECRUITING OPERATIONS PLATFORM",
    "chips": [
      "ATS & recruiting CRM",
      "Client workspaces",
      "Interview coordination"
    ],
    "description": "Fractal brings the recruiting desk into one connected workflow. Inbound applications and resumes move through parsing, duplicate handling, candidate review, and requisition-specific pipelines. Recruiters can coordinate interviews and manage client workspaces while keeping tenant data separated. AI-assisted scoring includes supporting reasoning and a human override path, making the review process visible rather than treating a score as a final hiring decision.",
    "points": [
      "Inbound email and resume processing with duplicate handling and a manual-review queue.",
      "Client workspaces, requisitions, candidate pipelines, and submission workflows.",
      "Interview scheduling, calendar integration, invitations, reminders, and video-room workflows.",
      "Tenant permissions, AI-assisted candidate review, and auditable human overrides."
    ],
    "stage": "Testing with synthetic data. Live customer and candidate use has not been established; production integrations and release readiness require further validation."
  },
  "athlete": {
    "title": "Ultra Hybrid Athlete",
    "type": "LIMITED BETA TESTING",
    "summary": "A training platform for athletes balancing endurance and strength. It connects event-based plans, heart-rate-zone workouts, session logging, recovery trends, and an AI coaching assistant, with challenges and progress tracking designed to support consistency between training days.",
    "category": "ENDURANCE & HYBRID TRAINING",
    "chips": [
      "Training plans",
      "Heart-rate zones",
      "AI coaching"
    ],
    "description": "Ultra Hybrid Athlete connects the plan, the workout, and the follow-through. Athletes can work toward an endurance event, train with lactate-threshold-based heart-rate zones, log strength and conditioning, and review recovery and performance trends. Coach Ultra uses stored training context to support coaching conversations, while challenges, achievements, and sharing add a participation layer around the individual training experience.",
    "points": [
      "Event-based endurance plans, heart-rate-zone tools, and strength-session logging.",
      "Live workout sessions with Bluetooth heart-rate support and recorded training metrics.",
      "Recovery trends, personal records, challenges, and achievement tracking.",
      "Context-aware AI coaching informed by the athlete profile and training history."
    ],
    "stage": "In development with limited beta testing. Security hardening and broader workflow validation remain part of the build."
  },
  "armor": {
    "title": "Armor OS",
    "type": "SMALL-GROUP TESTING",
    "summary": "An athlete operating system that brings structured training, daily readiness, and workout history together. Its rules-based planning engine balances strength, conditioning, combat sports, equipment, recovery, and event goals while keeping the original prescription separate from what the athlete actually completes.",
    "category": "ATHLETE OPERATING SYSTEM",
    "chips": [
      "Adaptive programming",
      "Readiness & recovery",
      "Training history"
    ],
    "description": "Armor OS is built around continuity: what was planned, what the athlete completed, and what should change next. Its deterministic training engine combines the current phase, upcoming events, available equipment, training load, active issues, and readiness signals. Detailed logging and post-workout feedback support progression across training blocks, with decisions and modifications preserved so the program can be understood and reviewed over time.",
    "points": [
      "Structured training blocks that combine strength, endurance, carries, conditioning, and combat activity.",
      "Readiness- and issue-aware planning that accounts for recovery, equipment, and session time.",
      "Separate prescribed sessions and actual sets, loads, intervals, and workout feedback.",
      "Multi-athlete records, measurements, progress tracking, and traceable program changes."
    ],
    "stage": "Small-group testing in a private beta. Core planning uses explicit rules; broader release and ongoing usability improvements remain in progress."
  },
  "options": {
    "title": "Options King",
    "type": "PAPER TRADING / RESEARCH",
    "label": "Paper trading / research",
    "summary": "An automated SPY options trading and research platform connecting market structure, strategy gates, broker execution, and position management. It supports paper and real-money trading modes, with current paper operation used to validate strategy behavior before real-money deployment.",
    "category": "AUTOMATED TRADING & RESEARCH",
    "chips": [
      "Strategy automation",
      "Execution & risk",
      "Replay & audit"
    ],
    "description": "Options King follows a trade through its full lifecycle: identify a setup, evaluate entry conditions, select an options contract, submit orders, manage the position, and review the outcome. The research layer also records candidates that were blocked, helping distinguish a weak strategy idea from missing data or execution constraints. Replay tools and end-of-day reviews connect individual decisions to the evidence available at the time.",
    "points": [
      "Scheduled strategy evaluation using market structure, signal checks, and explicit eligibility gates.",
      "Broker integration for options orders, position monitoring, exits, and paper/live operating modes.",
      "Decision and execution records covering admitted trades, blocked candidates, and lifecycle outcomes.",
      "Replay tooling and end-of-day scorecards for investigating entries, exits, and strategy assumptions."
    ],
    "stage": "Currently operated in paper-trading and research mode. Real-money trading is supported, with deployment intended only after the strategy is proven and validated."
  },
  "dividend": {
    "title": "Dividend Sentinel",
    "type": "LOCAL RESEARCH PROTOTYPE",
    "summary": "An income-security research app that looks beyond headline yield. It screens dividend and distribution payers, distinguishes security types, reviews payout reliability and source evidence, and tracks watchlists and changes so promising research candidates can be investigated in context.",
    "category": "INCOME RESEARCH & MONITORING",
    "chips": [
      "Income screening",
      "Payout-risk review",
      "Evidence & alerts"
    ],
    "description": "Dividend Sentinel is designed for the question behind a high yield: what is paying it, how dependable is the evidence, and what has changed? It combines yield and price-range screening with security classification, payout review, and visible data-quality checks. Saved research and change alerts support follow-up, while a newsletter workflow organizes completed scan evidence into reviewable issues. It is a research application, with no brokerage connection or order placement.",
    "points": [
      "Screen dividend and distribution payers by yield, price-range position, and research filters.",
      "Distinguish common stocks, REITs, BDCs, preferreds, and different income-fund structures.",
      "Review payout-risk signals, source provenance, coverage gaps, and conflicting evidence.",
      "Maintain watchlists and research alerts, and prepare newsletter issues from recorded scans."
    ],
    "stage": "Functional local research prototype. Public launch and live newsletter delivery remain pending production data rights, infrastructure, and release preparation."
  },
  "vision": {
    "title": "Dark Helix",
    "type": "COACHING PROTOTYPE",
    "label": "Coaching prototype",
    "summary": "A League of Legends coaching prototype that turns game-state data into practical feedback. Python coaching modules compare farming, gold, and combat metrics with champion, role, and game-time benchmarks, then prioritize advice on decisions such as recalls, vision, and objective preparation.",
    "category": "GAME ANALYTICS & AI COACHING",
    "chips": [
      "League of Legends",
      "Performance benchmarks",
      "Coaching logic"
    ],
    "description": "Dark Helix explores how a game coach can make performance data useful in the moment. The available Python modules analyze farming rate, gold, combat outcomes, champion, role, and elapsed game time. Reference datasets provide comparisons, and coaching rules translate the results into prioritized suggestions. The broader bot concept brings that work toward a Discord-based coaching experience, with integration and gameplay validation still experimental.",
    "points": [
      "Game-state analysis using farming, gold, kills, deaths, assists, and elapsed time.",
      "Champion-, role-, and time-based performance comparisons using prepared reference datasets.",
      "Coaching priorities covering economy, survival, item timing, lane decisions, vision, and objectives.",
      "Python and notebook prototypes supporting the Dark Helix Bot concept."
    ],
    "stage": "Experimental coaching prototype. The reviewed source establishes game-data analysis and coaching logic; wider integration and player-outcome validation remain open work."
  }
};
const dialog = document.getElementById('project-dialog');
document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => {
  const p = projects[button.dataset.open];
  document.getElementById('dialog-title').textContent = p.title;
  document.getElementById('dialog-type').textContent = p.type;
  document.getElementById('dialog-description').textContent = p.description;
  document.getElementById('dialog-stage').textContent = p.stage;
  document.getElementById('dialog-points').replaceChildren(...p.points.map(s => { const li=document.createElement('li'); li.textContent=s; return li; }));
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(b => { b.classList.toggle('active', b===button); b.setAttribute('aria-pressed', b===button ? 'true' : 'false'); });
  const cards = [...document.querySelectorAll('.project-card')];
  cards.forEach(c => { c.hidden = button.dataset.filter !== 'all' && c.dataset.category !== button.dataset.filter; });
  const count = cards.filter(c => !c.hidden).length;
  document.getElementById('filter-status').textContent = button.dataset.filter === 'all'
    ? `Showing all ${count} projects`
    : `Showing ${count} ${button.textContent.trim().toLowerCase()} project${count === 1 ? '' : 's'}`;
}));
document.getElementById('year').textContent = new Date().getFullYear();
