// ===== FILTER DOGAĐANJA =====
const filterGumbi = document.querySelectorAll('.filter-btn');
const kartice = document.querySelectorAll('.kartica');

filterGumbi.forEach(gumb => {
    gumb.addEventListener('click', () => {
        
        // Makni active sa svih gumbi
        filterGumbi.forEach(g => g.classList.remove('active'));
        // Dodaj active na kliknuti gumb
        gumb.classList.add('active');

        const filter = gumb.dataset.filter;

        kartice.forEach(kartica => {
            if (filter === 'sve' || kartica.dataset.kategorija === filter) {
                kartica.style.display = 'block';
            } else {
                kartica.style.display = 'none';
            }
        });
    });
});


// ===== VALIDACIJA FORME =====
const forma = document.getElementById('kontakt-form');

if (forma) {
    forma.addEventListener('submit', (e) => {
        e.preventDefault();

        const ime = document.getElementById('ime');
        const email = document.getElementById('email');
        const poruka = document.getElementById('poruka');

        let ispravno = true;

        // Provjera imena
        if (ime.value.trim() === '') {
            document.getElementById('greska-ime').textContent = 'Ime i prezime je obavezno!';
            ispravno = false;
        } else {
            document.getElementById('greska-ime').textContent = '';
        }

        // Provjera emaila
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            document.getElementById('greska-email').textContent = 'Email adresa je obavezna!';
            ispravno = false;
        } else if (!emailRegex.test(email.value)) {
            document.getElementById('greska-email').textContent = 'Upiši ispravnu email adresu!';
            ispravno = false;
        } else {
            document.getElementById('greska-email').textContent = '';
        }

        // Provjera poruke
        if (poruka.value.trim() === '') {
            document.getElementById('greska-poruka').textContent = 'Poruka je obavezna!';
            ispravno = false;
        } else {
            document.getElementById('greska-poruka').textContent = '';
        }

        // Ako je sve ispravno
        if (ispravno) {
            document.getElementById('uspjeh-poruka').textContent = 'Poruka je uspješno poslana! Hvala ti! 🎉';
            forma.reset();
        }
    });
}// ===== HAMBURGER MENI =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('otvoreno');
    });
}