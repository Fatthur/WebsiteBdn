// BTN-ACTIVE //
const buttons = document.querySelectorAll('.nav-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', function() {
    if (this.classList.contains('active')) {
      this.classList.remove('active');
    } else {
      buttons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// CARD ARTIKEL //
const btn = document.querySelector('[data-bs-target="#cardArtikel"]');
const card = document.getElementById('cardArtikel');
const overlay = document.getElementById('overlay');

btn.addEventListener('click', () => {
  overlay.classList.toggle('active');
});

card.addEventListener('hidden.bs.collapse', () => {
  overlay.classList.remove('active');
});