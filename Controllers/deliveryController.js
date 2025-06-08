document.addEventListener('DOMContentLoaded', () => {
  const btnDelivery = document.getElementById('envio');
  const btnTakeAway = document.getElementById('retira');

  if (btnDelivery) {
    btnDelivery.addEventListener('click', () => {
      localStorage.setItem('modoEntrega', 'delivery');
      window.location.href = './views/menu.html';
    });
  }

  if (btnTakeAway) {
    btnTakeAway.addEventListener('click', () => {
      localStorage.setItem('modoEntrega', 'takeaway');
      window.location.href = './views/menu.html';
    });
  }
});
