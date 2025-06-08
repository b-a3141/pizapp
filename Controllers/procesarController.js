document.addEventListener('DOMContentLoaded', () => {
  // Mostrar resumen del pedido
  const resumenDiv = document.getElementById('resumen-pedido');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = 0;
  resumenDiv.innerHTML = '<h2>Resumen del pedido:</h2>' +
    cart.map(item => {
      total += item.precio * item.cantidad;
      return `<div>${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}</div>`;
    }).join('') +
    `<strong>Total: $${total}</strong>`;

  // Mostrar campo dirección solo si es delivery
  const modo = localStorage.getItem('modoEntrega');
  if (modo === 'delivery') {
    document.getElementById('direccion-div').innerHTML = `
      <label>
        Dirección:
        <input type="text" name="direccion" required>
      </label><br>
    `;
  }

  // Procesar el formulario
  document.getElementById('form-procesar').addEventListener('submit', e => {
    e.preventDefault();
    alert('¡Pedido enviado! Pronto te contactaremos.');
    localStorage.removeItem('cart');
    // Podrías limpiar más datos o redirigir a un "Gracias"
    window.location.href = '../index.html';
  });
});
