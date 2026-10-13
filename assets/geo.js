const hint = document.getElementById('geo-hint');
const dismissHint = () => { if (hint) hint.classList.add('gone'); };
if (hint) hint.querySelector('button').addEventListener('click', (e) => { e.stopPropagation(); dismissHint(); });
document.querySelectorAll('.geo-badge').forEach(btn => {
  btn.setAttribute('title', 'Cliquez pour voir le changement GEO');
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    document.body.classList.add('geo-seen');
    dismissHint();
    const tip = document.getElementById(btn.getAttribute('data-tooltip'));
    const wasOpen = tip.classList.contains('open');
    document.querySelectorAll('.geo-tooltip.open').forEach(t => t.classList.remove('open'));
    document.querySelectorAll('.geo-badge').forEach(b => b.setAttribute('aria-expanded','false'));
    if (!wasOpen) { tip.classList.add('open'); btn.setAttribute('aria-expanded','true'); }
  });
});
document.querySelectorAll('.geo-tooltip').forEach(t => t.addEventListener('click', e => e.stopPropagation()));
document.addEventListener('click', () => {
  document.querySelectorAll('.geo-tooltip.open').forEach(t => t.classList.remove('open'));
  document.querySelectorAll('.geo-badge').forEach(b => b.setAttribute('aria-expanded','false'));
});
