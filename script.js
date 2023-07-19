document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function aumentar() {
    var botao = document.querySelector('.meu-botao');
    botao.style.transform = 'scale(1.1)'; /* Aumenta o tamanho em 10% */
}

function diminuir() {
    var botao = document.querySelector('.meu-botao');
    botao.style.transform = 'scale(1)'; /* Volta ao tamanho original */
}
