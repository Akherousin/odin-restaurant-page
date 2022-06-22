let parentElement = document.getElementById("content");

export function initialLoad() {
  console.log(document.querySelector("#content"));
}

function generateMarkup() {
  return `
  <header class="header">
        <nav class="navigation">
          <ul class="navigation-links">
            <li><a href="#1">Home</a></li>
            <li><a href="#2">Menu</a></li>
            <li><a href="#3">Reservations</a></li>
            <li><a href="#4">Contacts</a></li>
          </ul>
        </nav>
      </header>

      <main>
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
