/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/initialLoad.js":
/*!****************************!*\
  !*** ./src/initialLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialLoad": () => (/* binding */ initialLoad)
/* harmony export */ });
let parentElement = document.getElementById("content");

function initialLoad() {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initialLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialLoad */ "./src/initialLoad.js");


(0,_initialLoad__WEBPACK_IMPORTED_MODULE_0__.initialLoad)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3RDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQzVDO0FBQ0EseURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbExvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxMb2FkKCkge1xyXG4gIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlTWFya3VwKCkge1xyXG4gIHJldHVybiBgXHJcbiAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxyXG4gICAgICAgIDxuYXYgY2xhc3M9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZpZ2F0aW9uLWxpbmtzXCI+XHJcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIzFcIj5Ib21lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIzJcIj5NZW51PC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiIzNcIj5SZXNlcnZhdGlvbnM8L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjNFwiPkNvbnRhY3RzPC9hPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiaGVyb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVyby1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImhlcm8tc3ViaGVhZGluZ1wiPkRpc2NvdmVyIHlvdXIgdGFzdGU8L3A+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJoZXJvLWhlYWRpbmdcIj5FYXQgaGVhbHRoeSBhbmQgTmF0dXJhbCBGb29kPC9oMT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjMlwiIGNsYXNzPVwiYnRuLWN0YVwiPkRpc2NvdmVyIE1lbnU8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVyby1pbWdcIj48L2Rpdj4gXHJcbiAgICAgICAgPC9zZWN0aW9uPiBcclxuICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIj5cclxuICAgICAgICA8dWwgY2xhc3M9XCJzbS1saW5rc1wiPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+dHdpdHRlcjwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+ZmFjZWJvb2s8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPmluc3RhZ3JhbTwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgYDtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXRpYWxMb2FkIH0gZnJvbSBcIi4vaW5pdGlhbExvYWRcIjtcclxuXHJcbmluaXRpYWxMb2FkKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==