const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const siteHeader = document.querySelector('.site-header');
const caseTriggers = document.querySelectorAll('.case-trigger');

menuButton?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? 'Close' : 'Menu';
  document.body.classList.toggle('menu-open', isOpen);
});

navLinks?.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

function closeMenu() {
  navLinks?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = 'Menu';
  document.body.classList.remove('menu-open');
}

caseTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const panel = document.getElementById(trigger.getAttribute('aria-controls'));
    const wasOpen = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!wasOpen));
    if (panel) panel.hidden = wasOpen;
    const toggle = trigger.querySelector('.case-toggle');
    if (toggle) toggle.textContent = wasOpen ? '+' : '−';
  });
});

const sections = [...document.querySelectorAll('main section[id]')];
const navAnchors = [...document.querySelectorAll('.nav-links a[href^="#"]')];

const sectionObserver = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navAnchors.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`));
}, { rootMargin: '-30% 0px -60% 0px', threshold: [0, .2, .6] });

sections.forEach((section) => sectionObserver.observe(section));

window.addEventListener('scroll', () => {
  siteHeader?.classList.toggle('scrolled', window.scrollY > 12);
}, { passive: true });

window.addEventListener('resize', () => {
  if (window.innerWidth > 800) closeMenu();
});
