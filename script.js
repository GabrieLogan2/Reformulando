// JavaScript
const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');
const modal = document.querySelector('.image-modal');
const modalImg = modal.querySelector('.modal-image');
const modalMessage = modal.querySelector('.modal-message');

// Define as mensagens de cada imagem
const messages = [
  'Minha foto favorita, todos momentos com você SÃO MARAVILHOSOS',
  'Foto que tiramos na praia, eu te amo',
  'Nossos primeiros econtros, tenho a mesma sensação de frio na barriga como nos primeiros encontros',
  'No shopping, dia maravilhoso',
  'Primeiros encontros também, estava te enchendo de amor',
  'Mc donalds, paracemos um quebra cabeça nessa foto',
  'A gente nossos bicos, é muito gostoso ter você comigo',
  'Você e sua florzinha que eu fiz',
  'Nós dois, amo nós dois muitooo',
  'eu e tu, estaremos sempre assim',
  'eu sei fazer looks, olha esse chapéu',
  'eu e o amor da minha vida, te amo',
  'O teu maior fofoqueiro',
  'Você é mais linda que todas as flores',
  'Nossos nomes eternizado em gravatá',
  'eu e tu momo',
  'eu feliz por ter tu cmg',
  'foto no espelho de lei'
];

// Adiciona um evento de clique a cada imagem na galeria
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    modalImg.src = image.src;
    modalMessage.textContent = messages[index];
    modal.style.display = 'block';
  });
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});
