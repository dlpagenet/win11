function toggleMenu() {
    const menu = document.getElementById('startMenu');
    menu.classList.toggle('active');
}

// Zamykanie menu przy kliknięciu w pulpit
document.querySelector('.desktop').onclick = function(e) {
    if (e.target.className === 'desktop') {
        document.getElementById('startMenu').classList.remove('active');
    }
}