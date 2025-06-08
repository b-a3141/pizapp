// Carrito básico usando localStorage

// Recuperar carrito existente o iniciar nuevo
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Agregar producto
window.addToCart = function(id) {
  const menu = [
    { id: 1, nombre: "Muzzarella", precio: 4500 },
    { id: 2, nombre: "Napolitana", precio: 5200 },
    { id: 3, nombre: "Fugazzeta", precio: 4900 }
  ];
  const producto = menu.find(p => p.id === id);
  let cart = getCart();

  const existe = cart.find(p => p.id === id);
  if (existe) {
    existe.cantidad += 1;
  } else {
    cart.push({ ...producto, cantidad: 1 });
  }
  setCart(cart);
  renderCart();
};

// Mostrar carrito
function renderCart() {
  const cartDiv = document.getElementById('cart');
  const cart = getCart();
  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>El carrito está vacío.</p>";
    return;
  }
  cartDiv.innerHTML = cart
    .map(item =>
      `<div>
        ${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}
        <button onclick="removeFromCart(${item.id})">Quitar</button>
      </div>`
    ).join('');
}

// Quitar producto
window.removeFromCart = function(id) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== id);
  setCart(cart);
  renderCart();
};

// Finalizar pedido
document.addEventListener('DOMContentLoaded', () => {
  renderCart();

  document.getElementById('finalizar').addEventListener('click', () => {
    alert('¡Gracias por tu pedido!');
    localStorage.removeItem('cart');
    renderCart();
  });
});
