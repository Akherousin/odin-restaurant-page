import "../styles/home.css";

export function homeLoad() {
  const parentElement = document.querySelector(".main");

  parentElement.innerHTML = "";
  parentElement.insertAdjacentHTML("afterbegin", generateMarkup());
}

function generateMarkup() {
  return `
  <section class="hero">
  <div class="hero-content">
    <p class="hero-subheading">Discover your taste</p>
    <h1 class="hero-heading">Eat healthy and Natural Food</h1>
    <a href="#2" class="btn-cta">Discover Menu</a>
  </div>
  <div class="hero-img"></div> 
</section>
    `;
}
