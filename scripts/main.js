import { initMenu } from "./modules/menu.js";
import { updateSlides } from "./modules/slider.js";
import { initGrid } from "./modules/gallery.js";

initMenu();
initGrid(".gallery__btn", ".gallery__items");
