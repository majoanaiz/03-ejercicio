// Seleccionamos elementos
const proyectos = document.querySelectorAll('.proyecto');
const modal = document.getElementById('modal');
const modalTexto = document.getElementById('modal-texto');
const cerrar = document.getElementById('cerrar');

// Abrir modal con info
proyectos.forEach(proyecto => {
  proyecto.addEventListener('click', () => {
    const info = proyecto.getAttribute('data-info');
    modalTexto.textContent = info;
    modal.style.display = 'flex';
  });
});

// Cerrar modal
cerrar.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar modal haciendo click fuera del contenido
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
