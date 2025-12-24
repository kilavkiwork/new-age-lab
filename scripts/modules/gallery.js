export function initGrid(btnSelector, gridSelector) {
  const btn = document.querySelector(btnSelector);
  const grid = document.querySelector(gridSelector);
  const btnText = btn?.querySelector("span");

  if (!btn || !grid || !btnText) return;

  const openGallery = () => {
    const isOpen = grid.classList.toggle("is-open");

    btnText.textContent = isOpen ? "less" : "more";
  };

  btn.addEventListener("click", openGallery);
}
