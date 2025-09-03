// =================== SELEÇÃO DOS ELEMENTOS DO HTML ===================
const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler');

// =================== LÓGICA DO MENU MOBILE ===================
// Evento para MOSTRAR o menu lateral
menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
});

// Evento para FECHAR o menu lateral
closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
});

// =================== LÓGICA DO TEMA CLARO/ESCURO ===================
 //Adiciona um "escutador" de eventos de clique ao botão
 themeToggler.addEventListener('click', () => {
  //Adiciona ou remove a classe do tema escuro body
  document.body.classList.toggle('dark-theme-variables');

  //Altera a classe 'active nos ícones de sol e lua 
  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active'); 
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
 });



// =================== PREENCHIMENTO DA TABELA DE PEDIDOS ===================
//Pega os dados do array 'Orders' (do arquivo orders.js) e itera sobre cada pedido 
 Orders.forEach(order => {
  // Para cada pedido, cria um elemento de linha de tabeça (tr)
  const tr = document.createElement('tr'); 

  //Cria o conteúdo HTML para a nova linha, usando os dados do pedido atual 
const trContent =`
  <td>${order.productName}</td>
  <td>${order.productNumber}</td>
  <td>${order.paymentStatus}</td>
  <td class="${order.shipping.trim() === 'Declined' ? 'danger' : order.shipping.trim() === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td>
  <td class="primary">Details</td>
`;

  // Insere o conteúdo HTML na linha que criamos 
  tr.innerHTML = trContent;

  // Adiciona a nova linha preenchida ao corpo da tabela (tbody) no nosso HTML
  document.querySelector('table tbody').appendChild(tr);
 });








 
  