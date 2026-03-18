const CONFIG = {
  nomeFesteggiato: "Katiuscia",
  dataFesta: "2026-05-09T20:00:00",
  dataLabel: "Sabato 9 Maggio 2026, ore 20:00",
  luogo: "Ristorante la Collina,  Via Colle del Tesoro, 5/A, 00038 Valmontone RM",
  dressCode: "Smart casual",
};

document.getElementById('nome-festeggiato').textContent = CONFIG.nomeFesteggiato;
document.getElementById('data-festa').textContent = CONFIG.dataLabel;
document.getElementById('luogo-festa').textContent = CONFIG.luogo;
document.getElementById('dress-code').textContent = CONFIG.dressCode;

// Countdown
const target = new Date(CONFIG.dataFesta).getTime();
function aggiornaCountdown() {
  const diff = target - Date.now();
  if (diff <= 0) { document.getElementById('countdown').style.display = 'none'; return; }
  const g = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById('cd-g').textContent = String(g).padStart(2,'0');
  document.getElementById('cd-h').textContent = String(h).padStart(2,'0');
  document.getElementById('cd-m').textContent = String(m).padStart(2,'0');
  document.getElementById('cd-s').textContent = String(s).padStart(2,'0');
}
aggiornaCountdown();
setInterval(aggiornaCountdown, 1000);

// RSVP
function inviaRSVP() {
  const nome = document.getElementById('inp-nome').value.trim();
  const rsvp = document.getElementById('inp-rsvp').value;
  if (!nome || !rsvp) { alert('Inserisci il tuo nome e la tua risposta!'); return; }
  const msg = {
    si:    `Non vediamo l'ora di vederti, ${nome} 🥳!  Ti meriti un prosecco! 😉`,
    forse: `Capito! Facci sapere presto, ${nome} 😊`,
    no:    `Peccato, ${nome}! Ti mancherà una serata fantastica 😢`
  };
  document.getElementById('rsvp-section').style.display = 'none';
  const s = document.getElementById('success-msg');
  s.style.display = 'flex';
  document.getElementById('success-text').textContent = msg[rsvp];
  lanciaConfetti();
}

// Stelle
const starsEl = document.getElementById('stars');
for (let i = 0; i < 80; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;--d:${2+Math.random()*4}s;--o:${0.3+Math.random()*0.7}`;
  starsEl.appendChild(s);
}

// Coriandoli
const colors = ['#f7c948','#e05c8a','#7c6af7','#4ecdc4','#ff6b6b','#fff'];
const confWrap = document.getElementById('confetti');
function lanciaConfetti() {
  for (let i = 0; i < 40; i++) {
    const d = document.createElement('div');
    d.className = 'dot';
    const size = 6 + Math.random() * 10;
    d.style.cssText = `
      left:${Math.random()*100}%;top:-20px;
      width:${size}px;height:${size}px;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      animation-duration:${2+Math.random()*3}s;
      animation-delay:${Math.random()}s;
    `;
    confWrap.appendChild(d);
    setTimeout(() => d.remove(), 5000);
  }
}