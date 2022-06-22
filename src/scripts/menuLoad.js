import "../styles/menu.css";

export function menuLoad() {
  const parentElement = document.querySelector(".main");
  parentElement.innerHTML = "";
  parentElement.insertAdjacentHTML("afterbegin", generateMarkup());
}

function generateMarkup() {
  return `
  <section class="menu">
          <h2 class="menu-heading">Our Food Menu</h2>
          <ul class="menu-list">
            <li>
              <h3 class="menu-categories">Main Course</h3>
              <ul>
                <li class="menu-dish">
                  <p>Super delicious Zuppa Toscana</p>
                  <p>$40</p>
                </li>
                <li class="menu-dish">
                  <p>Bacon Coli Baked Australian Beef</p>
                  <p>$40</p>
                </li>
              </ul>
            </li>
            <li>
              <h3 class="menu-categories">Soups and Salads</h3>
              <ul>
                <li class="menu-dish">
                  <p>Salat Banana Flower</p>
                  <p>$40</p>
                </li>
                <li class="menu-dish">
                  <p>Gourmet Mushroom Risotto</p>
                  <p>$40</p>
                </li>
              </ul>
            </li>
            <li>
              <h3 class="menu-categories">Desserts</h3>
              <ul>
                <li class="menu-dish">
                  <p>Ice Cream Tarte Apple</p>
                  <p>$40</p>
                </li>
                <li class="menu-dish">
                  <p>Fruit Mile Feuile</p>
                  <p>$40</p>
                </li>
              </ul>
            </li>
            <li>
              <h3 class="menu-categories">Drinks</h3>
              <ul>
                <li class="menu-dish">
                  <p>Double Chocolate Mud Pie</p>
                  <p>$40</p>
                </li>
                <li class="menu-dish">
                  <p>Panmacotte Cream Cake</p>
                  <p>$40</p>
                </li>
              </ul>
            </li>
          </ul>
        </section>
    `;
}
