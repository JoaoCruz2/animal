let btnNext = document.querySelector('.next');
let btnBack = document.querySelector('.back');

let listItems = document.querySelectorAll('.list .list-item');
let thumbItems = document.querySelectorAll('.thumb .thumb-item');

let currentIndex = 0;

// Adiciona eventos de clique
btnNext.onclick = () => moveItemsOnClick('next');
btnBack.onclick = () => moveItemsOnClick('back');

function moveItemsOnClick(type) {
    // Altera o índice com base no tipo de clique
    if (type === 'next') {
        currentIndex = (currentIndex + 1) % listItems.length;
    } else {
        currentIndex = (currentIndex - 1 + listItems.length) % listItems.length;
    }
    
    updateDisplay();
}

function updateDisplay() {
    // Atualiza a opacidade da lista principal
    listItems.forEach((item, index) => {
        if (index === currentIndex) {
            item.style.opacity = '1'; // Mostra o item atual
        } else {
            item.style.opacity = '0'; // Esconde os outros
        }
    });

    // Atualiza a classe ativa nas miniaturas
    thumbItems.forEach((thumb, index) => {
        if (index === currentIndex) {
            thumb.classList.add('active'); // Adiciona classe ativa
        } else {
            thumb.classList.remove('active'); // Remove classe ativa
        }
    });
}

// Inicializa a exibição
updateDisplay();

