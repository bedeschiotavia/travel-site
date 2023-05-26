import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import Modal from './modules/Modal';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

new Modal()
let stickyHeader = new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
let mobileMenu = new MobileMenu()


if (module.hot) {
    module.hot.accept()
}