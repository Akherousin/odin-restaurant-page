import "../styles/home.css";
import { homeLoad } from "./homeLoad";
import { menuLoad } from "./menuLoad";
import { contactsLoad } from "./contactsLoad";

let parentElement = document.getElementById("content");

export function initialLoad() {
  parentElement.insertAdjacentHTML("afterbegin", generateMarkup());
  addEventListeners();
}

function addEventListeners() {
  const btnHome = document.querySelector(".btn-home");
  const btnMenu = document.querySelector(".btn-menu");
  const btnContacts = document.querySelector(".btn-contacts");
  btnHome.addEventListener("click", homeLoad);
  btnMenu.addEventListener("click", menuLoad);
  btnContacts.addEventListener("click", contactsLoad);
}

function generateMarkup() {
  return `
  <header class="header">
        <nav class="navigation">
          <ul class="navigation-links">
            <li><a href="#1" class='btn-home'>Home</a></li>
            <li><a href="#2" class='btn-menu'>Menu</a></li>
            <li><a href="#4" class='btn-contacts'>Contacts</a></li>
          </ul>
        </nav>
      </header>

      <main class="main">
        <section class="hero">
            <div class="hero-content">
                <p class="hero-subheading">Discover your taste</p>
                <h1 class="hero-heading">Eat healthy and Natural Food</h1>
                <a href="#2" class="btn-cta">Discover Menu</a>
            </div>
            <div class="hero-img"></div> 
        </section> 
       </main>

      <footer class="footer">
        <ul class="sm-links">
          <li><a href="#">twitter</a></li>
          <li><a href="#">facebook</a></li>
          <li><a href="#">instagram</a></li>
        </ul>
      </footer>
    `;
}
