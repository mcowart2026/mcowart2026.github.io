const projects = {
  agents: { title: 'Operational Intelligence Agents', type: 'IN ACTIVE BUSINESS USE', description: 'A real operational use case: agents ingest business reporting data each morning, review patterns across client accounts and team performance, and surface findings for management review. They help identify where investigation or intervention is needed; human operators make the decisions.', points: ['Real operational data, not a synthetic demo', 'Cross-account performance analysis and exception identification', 'Daily management reporting and decision support'] },
  fractal: { title: 'Fractal', type: 'SYNTHETIC-DATA TESTING', description: 'A multi-tenant recruiting operations platform designed around separate client desks and shared recruiting workflows. The product includes applicant tracking, recruiting CRM, candidate processing, scheduling, and integrated video interviews with AI-supported documentation. It has not been deployed with live candidate or customer data.', points: ['Multi-tenant boundaries and connected process architecture', 'Candidate and client workflows with attention to duplicate handling', 'Scheduling and video-interview experience with transcript and attendance documentation'] },
  athlete: { title: 'Ultra Hybrid Athlete', type: 'LIMITED BETA TESTING', description: 'A training application for endurance and hybrid athletes, still in development with limited beta testing. Work includes training plans, workout logging, health and recovery tracking, and AI coaching, with further hardening planned.', points: ['Training workflows informed by personal domain knowledge', 'Limited beta feedback and ongoing product iteration', 'A distinct project from Armor OS'] },
  armor: { title: 'Armor OS', type: 'SMALL-GROUP TESTING', description: 'A private exploratory software system tested with a limited group of users. Still a test product rather than a broadly launched service.', points: ['MVP foundation and feature exploration', 'Controlled small-group user testing', 'Iteration before larger rollout'] },
  options: { title: 'Options King', type: 'LOCAL DEVELOPMENT', description: 'A local experiment in market-analysis and decision-support logic. It is not presented as a profitable or publicly deployed trading system.', points: ['Explicit decision rules and analytical workflows', 'Testing and validation of assumptions', 'Iterative signal-quality improvement'] },
  vision: { title: 'Game Coaching Experiments', type: 'CONCEPT / PROTOTYPE', description: 'An experimental approach to using computer vision and AI to interpret gameplay and help players learn from decisions. This is an exploration, not a commercial product.', points: ['Translate visual observations into usable feedback', 'Experiment with AI-enabled coaching workflows', 'Combine game-domain interest with system-design thinking'] }
};
const dialog = document.getElementById('project-dialog');
document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => {
  const p = projects[button.dataset.open];
  document.getElementById('dialog-title').textContent = p.title;
  document.getElementById('dialog-type').textContent = p.type;
  document.getElementById('dialog-description').textContent = p.description;
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
