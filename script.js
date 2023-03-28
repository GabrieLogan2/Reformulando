 // Seleciona os elementos HTML que serão manipulados
 const gallery = document.querySelector('.gallery');
 const images = gallery.querySelectorAll('img');
 
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
   'Nós dois, amo nós dois muitooo'
 ];
 
 // Adiciona um evento de clique a cada imagem na galeria
 images.forEach((image, index) => {
   image.addEventListener('click', () => {
     alert(messages[index]);
   });
 });