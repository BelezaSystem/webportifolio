// Portfólio — Otacílio Beleza
// JavaScript puro (sem dependências). Três responsabilidades:
// 1. Menu mobile (hambúrguer)
// 2. Animação de entrada das seções (IntersectionObserver)
// 3. Ano dinâmico no rodapé

// --- Menu mobile ---
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
	const open = links.classList.toggle('open');
	toggle.setAttribute('aria-expanded', open);
});

// Fecha o menu ao clicar em um link (navegação âncora)
links.querySelectorAll('a').forEach(a =>
	a.addEventListener('click', () => {
		links.classList.remove('open');
		toggle.setAttribute('aria-expanded', 'false');
	})
);

// --- Reveal ao rolar ---
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
			observer.unobserve(entry.target);
		}
	});
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// --- Ano no rodapé ---
document.getElementById('ano').textContent = new Date().getFullYear();
