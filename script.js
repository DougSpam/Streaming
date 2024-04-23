document.querySelectorAll('#comprarProduto').forEach(item => {
    item.addEventListener('click', event => {
        const serviceName = event.target.closest('.card__vendas').querySelector('h1').textContent; 
        document.getElementById('modal').style.display = 'block'; 
        document.getElementById('modal').setAttribute('data-service', serviceName); 
    });
});

document.getElementById('cancelarCompra').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('confirmarCompra').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
    const serviceName = document.getElementById('modal').getAttribute('data-service');
    let duration = '1 mês';

    if (document.querySelector('.mensal').style.display === 'flex') {
        duration = '1 mês';
        const message = `Oi, tenho interesse em comprar ${serviceName} de ${duration}.`;
        const whatsappLink = `https://wa.me/5511913322531?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    } else if (document.querySelector('.trimestral').style.display === 'flex') {
        duration = '3 mês';
        const message = `Oi, tenho interesse em comprar ${serviceName} de ${duration}.`;
        const whatsappLink = `https://wa.me/5515996638041?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    }
    
    const message = `Oi, tenho interesse em comprar ${serviceName} de ${duration}.`;
    const whatsappLink = `https://wa.me/5511913322531?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
});




document.getElementById("btnUsuario").addEventListener("click", function() {
    document.getElementById("modalUsuario").style.display = "block";
});

document.getElementById("fecharModalUsuario").addEventListener("click", function() {
    document.getElementById("modalUsuario").style.display = "none";
});


document.getElementById("btnCarrinho").addEventListener("click", function() {
    document.getElementById("modalCarrinho").style.display = "block";
});

document.getElementById("fecharModalCarrinho").addEventListener("click", function() {
    document.getElementById("modalCarrinho").style.display = "none";
});


function filtrarCards() {
    var inputPesquisa = document.getElementById("inputPesquisa");
    var termoPesquisa = inputPesquisa.value.toUpperCase();
    var cards = document.querySelectorAll(".card__vendas");

    cards.forEach(function(card) {
        var titulo = card.querySelector("h1").innerText.toUpperCase();
        if (titulo.indexOf(termoPesquisa) > -1) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

document.getElementById("inputPesquisa").addEventListener("input", filtrarCards);

function showMensal() {

    document.querySelectorAll('.mensal').forEach(element => {
        element.style.display = 'flex';
    });
    document.querySelectorAll('.trimestral').forEach(element => {
        element.style.display = 'none';
    });
}

function showTrimestral() {
    
    document.querySelectorAll('.trimestral').forEach(element => {
        element.style.display = 'flex';
    });
    document.querySelectorAll('.mensal').forEach(element => {
        element.style.display = 'none';
    });
}

