export function initGrid(btnSelector, gridSelector) {
  const btn = document.querySelector(btnSelector);
  const grid = document.querySelector(gridSelector);

  if (!btn || !grid) return;

  const openGallery = () => {
    grid.classList.toggle("is-open");

    btn.textContent = grid.classList.contains("is-open") ? "less" : "more";
  };

  btn.addEventListener("click", openGallery);
}
