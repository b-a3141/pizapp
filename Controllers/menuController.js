// Productos de ejemplo
const menu = [
  { id: 1, nombre: "Muzzarella", precio: 4500 },
  { id: 2, nombre: "Napolitana", precio: 5200 },
  { id: 3, nombre: "Fugazzeta", precio: 4900 }
];

// Renderiza menú en el HTML
function renderMenu() {
  const menuList = document.getElementById('menu-list');
  menuList.innerHTML = "";
  menu.forEach(item => {
    const div = document.createElement('div');
    div.className = "menu-item";
    div.innerHTML = `
      <span>${item.nombre} - $${item.precio}</span>
      <button onclick="addToCart(${item.id})">Agregar</button>
    `;
    menuList.appendChild(div);
  });
}

// Mostrar el modo de entrega elegido
function showModoEntrega() {
  const modo = localStorage.getItem('modoEntrega');
  const modoEntrega = document.getElementById('modoEntrega');
  modoEntrega.textContent = modo === "delivery"
    ? "Elegiste: Delivery"
    : modo === "takeaway"
    ? "Elegiste: Take Away"
    : "Elegí un modo de entrega";
}

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  showModoEntrega();
});
