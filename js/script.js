//Pega os dados do array 'Orders' (do arquivo orders.js) e itera sobre cada pedido 
 Orders.forEach(order => {
  // Para cada pedido, cria um elemento de linha de tabeça (tr)
  const tr = document.createElement('tr'); 

  //Cria o conteúdo HTML para a nova linha, usando os dados do pedido atual 
  const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
  <td class="${order.shippping === 'Declined' ? 'danger' : order.shippping === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td>
  <td class="primary">Detaiils</td>
  `;

  // Insere o conteúdo HTML na linha que criamos 
  tr.innerHTML = trContent;

  // Adiciona a nova linha preenchida ao corpo da tabela (tbody) no nosso HTML
  document.querySelector('table tbody').appendChild(tr);
 });



 
  