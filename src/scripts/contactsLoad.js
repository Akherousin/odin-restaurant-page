import "../styles/contacts.css";
import Location from "../images/restaurant-location.png";

export function contactsLoad() {
  const parentElement = document.querySelector(".main");
  parentElement.innerHTML = "";
  parentElement.insertAdjacentHTML("afterbegin", generateMarkup());
}

function generateMarkup() {
  return `
  <section class="contacts">
          <p>📞 123 456 789</p>
          <p>🏠 Hollywood Boulevard 42, Los Angeles, USA</p>
          <img src="${Location}" />
    </section> 
         `;
}
