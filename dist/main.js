/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Kodchasan', sans-serif;\r\n}\r\n\r\n:root {\r\n  --yellow: #f0c808;\r\n  --blue: #06aed5;\r\n  --red: #dd1c1a;\r\n}\r\n\r\n/* Basic layout  */\r\n\r\n.page-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.logo {\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.logo a {\r\n  text-decoration: none;\r\n  color: var(--red);\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  gap: 2em;\r\n  list-style-type: none;\r\n}\r\n\r\n.nav-link {\r\n  text-decoration: none;\r\n  font-size: 1.6em;\r\n  padding: 0.25rem 0.5rem;\r\n  color: darkblue;\r\n  position: relative;\r\n  transition: all 2s;\r\n}\r\n\r\n.nav-link.active {\r\n  font-weight: bolder;\r\n}\r\n\r\n.total-box {\r\n  display: block;\r\n\r\n  /* border: solid 2px darkslateblue; */\r\n  background-color: var(--yellow);\r\n  padding: 0.5rem;\r\n  color: white;\r\n  border-radius: 0.25rem;\r\n  margin-left: 2rem;\r\n}\r\n\r\n#item-count {\r\n  height: 100%;\r\n  padding: 0.25rem;\r\n  border-left: solid 1px #fff;\r\n}\r\n\r\n/* Navigation link animation  */\r\n.nav-link::after {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 0;\r\n  width: 0%;\r\n  content: '.';\r\n  color: transparent;\r\n  background: #aaa;\r\n  height: 1px;\r\n  text-align: left;\r\n  opacity: 0;\r\n}\r\n\r\n.nav-link:hover {\r\n  color: #fff;\r\n  z-index: 1;\r\n}\r\n\r\n.nav-link:hover::after {\r\n  z-index: -10;\r\n  animation: fill 1s forwards;\r\n  opacity: 1;\r\n}\r\n\r\n/* Keyframes */\r\n@keyframes fill {\r\n  0% {\r\n    width: 0%;\r\n    height: 1px;\r\n  }\r\n\r\n  50% {\r\n    width: 100%;\r\n    height: 1px;\r\n  }\r\n\r\n  100% {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--blue);\r\n  }\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  background-color: #333;\r\n  padding: 2rem 1rem;\r\n  font-size: 1.2rem;\r\n}\r\n\r\nfooter p {\r\n  color: var(--blue);\r\n}\r\n\r\n.github-link {\r\n  color: var(--yellow);\r\n  text-decoration: none;\r\n}\r\n\r\n/* Gallery layout  */\r\n.gallery {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 1.5rem;\r\n  padding: 2rem;\r\n  background-color: aliceblue;\r\n  min-height: 80vh;\r\n}\r\n\r\n.gallery.hide {\r\n  display: none;\r\n}\r\n\r\n.character-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #fff;\r\n  padding: 0.5rem;\r\n  box-shadow: 0 0 20px -8px #d0d0d0cb;\r\n  border-radius: 0.25rem;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.character-card:hover {\r\n  box-shadow: 0 5px 20px 8px #d0d0d0cb;\r\n}\r\n\r\n.card-header {\r\n  padding: 0.5rem 0.25rem;\r\n  margin: 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n}\r\n\r\n.card-header h3 {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.frame {\r\n  background-color: lightskyblue;\r\n  width: 100%;\r\n  height: 250px;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.card-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: contain;\r\n}\r\n\r\n.like-btn {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0.3rem;\r\n  min-width: 5rem;\r\n  gap: 0.5rem;\r\n  background: none;\r\n  color: crimson;\r\n  border: solid 1px #333;\r\n  border-radius: 0.25em;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.like-btn:hover {\r\n  border-color: rgb(255, 165, 177);\r\n  box-shadow: 0 3px 20px -5px #f23e3e;\r\n}\r\n\r\n.like-btn:active i {\r\n  transform: scale(1.4);\r\n}\r\n\r\n.like-counter {\r\n  color: darkslateblue;\r\n  font-weight: 700;\r\n}\r\n\r\n.comment-btn {\r\n  margin: auto;\r\n  padding: 0.5rem;\r\n  font-size: 1.3rem;\r\n  background-color: cornflowerblue;\r\n  border: solid 1px cornflowerblue;\r\n  color: white;\r\n  border-radius: 0.25em;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.comment-btn:hover {\r\n  background-color: white;\r\n  color: cornflowerblue;\r\n  box-shadow: 0 3px 10px 0.8px #a2a1a19c;\r\n  transform: translateY(-3px);\r\n}\r\n\r\n.loading-text {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n/* Error Page  */\r\n.error-page {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: darksalmon;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.error-page h2 {\r\n  font-size: 3em;\r\n}\r\n\r\n.error-page.hide {\r\n  display: none;\r\n}\r\n\r\n.refresh-btn {\r\n  padding: 0.5rem 1.5rem;\r\n  font-size: 1em;\r\n  background: none;\r\n  border-radius: 25rem;\r\n  border: solid 1px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n  background-color: white;\r\n}\r\n\r\n.refresh-btn:hover {\r\n  box-shadow:\r\n    -7px -7px 20px 0 rgba(253, 120, 120, 0.4),\r\n    -4px -4px 5px 0 rgba(255, 120, 120, 0.4),\r\n    7px 7px 20px 0 #0002,\r\n    4px 4px 5px 0 #0001;\r\n}\r\n\r\n/* Popup Section */\r\n\r\n.popup {\r\n  display: none;\r\n}\r\n\r\n.popup.active {\r\n  display: block;\r\n  flex-direction: column;\r\n  background-color: cornflowerblue;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 999;\r\n  padding: 0.5rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup .close-btn {\r\n  font-size: 2.5em;\r\n  font-weight: 900;\r\n  position: absolute;\r\n  top: 2em;\r\n  right: 2em;\r\n  color: rgb(255, 255, 255);\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n.popup .close-btn:hover {\r\n  color: rgb(44, 97, 195);\r\n  cursor: pointer;\r\n  transition: 0.3s ease;\r\n}\r\n\r\n.popup-container {\r\n  padding: 0 100px;\r\n  width: 80%;\r\n  margin-inline: auto;\r\n  margin-top: 9%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 30px solid rgb(44, 97, 195);\r\n  background-color: white;\r\n}\r\n\r\n.popup-content {\r\n  margin: auto;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n  margin-bottom: 30px;\r\n  padding-top: 25px;\r\n}\r\n\r\n.popup-content h2 {\r\n  text-align: center;\r\n  font-size: 3em;\r\n  font-weight: 900;\r\n}\r\n\r\n.popup-content h3 {\r\n  font-size: 1.6em;\r\n  font-weight: 900;\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.popup-content p {\r\n  font-size: 1.2em;\r\n  font-weight: bold;\r\n}\r\n\r\n.popup-img {\r\n  padding-top: 15%;\r\n  max-width: 50%;\r\n  align-self: flex-start;\r\n}\r\n\r\n.description .label {\r\n  font-size: 1.5em;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\nform input[type='text'] {\r\n  padding: 10px 10px;\r\n  border: solid 2px rgb(21, 67, 153);\r\n  color: rgb(21, 67, 153);\r\n  border-radius: 0.25em;\r\n  height: 40px;\r\n  font-size: 1.5em;\r\n}\r\n\r\nform textarea {\r\n  padding: 10px 10px;\r\n  font-size: 1.5em;\r\n  border: solid 2px rgb(21, 67, 153);\r\n  color: rgb(21, 67, 153);\r\n  border-radius: 0.25em;\r\n  height: 100px;\r\n}\r\n\r\nform input[type='submit'] {\r\n  background-color: cornflowerblue;\r\n  border: solid 1px cornflowerblue;\r\n  color: white;\r\n  border-radius: 0.25em;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n  padding: 10px 10px;\r\n  font-size: 1.45em;\r\n}\r\n\r\nform input[type='submit']:hover {\r\n  background-color: white;\r\n  color: cornflowerblue;\r\n  box-shadow: 0 3px 10px 0.8px #a2a1a19c;\r\n  transform: translateY(-3px);\r\n}\r\n\r\n#success-message {\r\n  font-size: 0.5 em;\r\n  color: rgb(35, 167, 35);\r\n}\r\n\r\n#error-message {\r\n  font-size: 0.5 em;\r\n  color: rgb(199, 0, 0);\r\n}\r\n\r\n.new-comment {\r\n  list-style-type: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  font-size: 1.2em;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .gallery {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  .popup-container {\r\n    padding: 0.2rem;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .page-header {\r\n    padding: 0.2rem;\r\n  }\r\n\r\n  .logo a {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .nav {\r\n    gap: 1rem;\r\n  }\r\n\r\n  .nav-link {\r\n    font-size: 1rem;\r\n    padding: 0;\r\n  }\r\n}\r\n\r\n@media (max-width: 530px) {\r\n  .gallery {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .nav {\r\n    gap: 0.5rem;\r\n  }\r\n\r\n  .logo a {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .nav-link {\r\n    font-size: 0.8rem;\r\n    padding: 0;\r\n  }\r\n\r\n  .total-box .label {\r\n    display: none;\r\n  }\r\n\r\n  #item-count {\r\n    border: none;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Kodchasan', sans-serif;\r\n}\r\n\r\n:root {\r\n  --yellow: #f0c808;\r\n  --blue: #06aed5;\r\n  --red: #dd1c1a;\r\n}\r\n\r\n/* Basic layout  */\r\n\r\n.page-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.logo {\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.logo a {\r\n  text-decoration: none;\r\n  color: var(--red);\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  gap: 2em;\r\n  list-style-type: none;\r\n}\r\n\r\n.nav-link {\r\n  text-decoration: none;\r\n  font-size: 1.6em;\r\n  padding: 0.25rem 0.5rem;\r\n  color: darkblue;\r\n  position: relative;\r\n  transition: all 2s;\r\n}\r\n\r\n.nav-link.active {\r\n  font-weight: bolder;\r\n}\r\n\r\n.total-box {\r\n  display: block;\r\n\r\n  /* border: solid 2px darkslateblue; */\r\n  background-color: var(--yellow);\r\n  padding: 0.5rem;\r\n  color: white;\r\n  border-radius: 0.25rem;\r\n  margin-left: 2rem;\r\n}\r\n\r\n#item-count {\r\n  height: 100%;\r\n  padding: 0.25rem;\r\n  border-left: solid 1px #fff;\r\n}\r\n\r\n/* Navigation link animation  */\r\n.nav-link::after {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 0;\r\n  width: 0%;\r\n  content: '.';\r\n  color: transparent;\r\n  background: #aaa;\r\n  height: 1px;\r\n  text-align: left;\r\n  opacity: 0;\r\n}\r\n\r\n.nav-link:hover {\r\n  color: #fff;\r\n  z-index: 1;\r\n}\r\n\r\n.nav-link:hover::after {\r\n  z-index: -10;\r\n  animation: fill 1s forwards;\r\n  opacity: 1;\r\n}\r\n\r\n/* Keyframes */\r\n@keyframes fill {\r\n  0% {\r\n    width: 0%;\r\n    height: 1px;\r\n  }\r\n\r\n  50% {\r\n    width: 100%;\r\n    height: 1px;\r\n  }\r\n\r\n  100% {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--blue);\r\n  }\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  background-color: #333;\r\n  padding: 2rem 1rem;\r\n  font-size: 1.2rem;\r\n}\r\n\r\nfooter p {\r\n  color: var(--blue);\r\n}\r\n\r\n.github-link {\r\n  color: var(--yellow);\r\n  text-decoration: none;\r\n}\r\n\r\n/* Gallery layout  */\r\n.gallery {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 1.5rem;\r\n  padding: 2rem;\r\n  background-color: aliceblue;\r\n  min-height: 80vh;\r\n}\r\n\r\n.gallery.hide {\r\n  display: none;\r\n}\r\n\r\n.character-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #fff;\r\n  padding: 0.5rem;\r\n  box-shadow: 0 0 20px -8px #d0d0d0cb;\r\n  border-radius: 0.25rem;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.character-card:hover {\r\n  box-shadow: 0 5px 20px 8px #d0d0d0cb;\r\n}\r\n\r\n.card-header {\r\n  padding: 0.5rem 0.25rem;\r\n  margin: 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n}\r\n\r\n.card-header h3 {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.frame {\r\n  background-color: lightskyblue;\r\n  width: 100%;\r\n  height: 250px;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.card-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: contain;\r\n}\r\n\r\n.like-btn {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0.3rem;\r\n  min-width: 5rem;\r\n  gap: 0.5rem;\r\n  background: none;\r\n  color: crimson;\r\n  border: solid 1px #333;\r\n  border-radius: 0.25em;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.like-btn:hover {\r\n  border-color: rgb(255, 165, 177);\r\n  box-shadow: 0 3px 20px -5px #f23e3e;\r\n}\r\n\r\n.like-btn:active i {\r\n  transform: scale(1.4);\r\n}\r\n\r\n.like-counter {\r\n  color: darkslateblue;\r\n  font-weight: 700;\r\n}\r\n\r\n.comment-btn {\r\n  margin: auto;\r\n  padding: 0.5rem;\r\n  font-size: 1.3rem;\r\n  background-color: cornflowerblue;\r\n  border: solid 1px cornflowerblue;\r\n  color: white;\r\n  border-radius: 0.25em;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.comment-btn:hover {\r\n  background-color: white;\r\n  color: cornflowerblue;\r\n  box-shadow: 0 3px 10px 0.8px #a2a1a19c;\r\n  transform: translateY(-3px);\r\n}\r\n\r\n.loading-text {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n/* Error Page  */\r\n.error-page {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: darksalmon;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.error-page h2 {\r\n  font-size: 3em;\r\n}\r\n\r\n.error-page.hide {\r\n  display: none;\r\n}\r\n\r\n.refresh-btn {\r\n  padding: 0.5rem 1.5rem;\r\n  font-size: 1em;\r\n  background: none;\r\n  border-radius: 25rem;\r\n  border: solid 1px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n  background-color: white;\r\n}\r\n\r\n.refresh-btn:hover {\r\n  box-shadow:\r\n    -7px -7px 20px 0 rgba(253, 120, 120, 0.4),\r\n    -4px -4px 5px 0 rgba(255, 120, 120, 0.4),\r\n    7px 7px 20px 0 #0002,\r\n    4px 4px 5px 0 #0001;\r\n}\r\n\r\n/* Popup Section */\r\n\r\n.popup {\r\n  display: none;\r\n}\r\n\r\n.popup.active {\r\n  display: block;\r\n  flex-direction: column;\r\n  background-color: cornflowerblue;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 999;\r\n  padding: 0.5rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup .close-btn {\r\n  font-size: 2.5em;\r\n  font-weight: 900;\r\n  position: absolute;\r\n  top: 2em;\r\n  right: 2em;\r\n  color: rgb(255, 255, 255);\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n.popup .close-btn:hover {\r\n  color: rgb(44, 97, 195);\r\n  cursor: pointer;\r\n  transition: 0.3s ease;\r\n}\r\n\r\n.popup-container {\r\n  padding: 0 100px;\r\n  width: 80%;\r\n  margin-inline: auto;\r\n  margin-top: 9%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 30px solid rgb(44, 97, 195);\r\n  background-color: white;\r\n}\r\n\r\n.popup-content {\r\n  margin: auto;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n  margin-bottom: 30px;\r\n  padding-top: 25px;\r\n}\r\n\r\n.popup-content h2 {\r\n  text-align: center;\r\n  font-size: 3em;\r\n  font-weight: 900;\r\n}\r\n\r\n.popup-content h3 {\r\n  font-size: 1.6em;\r\n  font-weight: 900;\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.popup-content p {\r\n  font-size: 1.2em;\r\n  font-weight: bold;\r\n}\r\n\r\n.popup-img {\r\n  padding-top: 15%;\r\n  max-width: 50%;\r\n  align-self: flex-start;\r\n}\r\n\r\n.description .label {\r\n  font-size: 1.5em;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\nform input[type='text'] {\r\n  padding: 10px 10px;\r\n  border: solid 2px rgb(21, 67, 153);\r\n  color: rgb(21, 67, 153);\r\n  border-radius: 0.25em;\r\n  height: 40px;\r\n  font-size: 1.5em;\r\n}\r\n\r\nform textarea {\r\n  padding: 10px 10px;\r\n  font-size: 1.5em;\r\n  border: solid 2px rgb(21, 67, 153);\r\n  color: rgb(21, 67, 153);\r\n  border-radius: 0.25em;\r\n  height: 100px;\r\n}\r\n\r\nform input[type='submit'] {\r\n  background-color: cornflowerblue;\r\n  border: solid 1px cornflowerblue;\r\n  color: white;\r\n  border-radius: 0.25em;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n  padding: 10px 10px;\r\n  font-size: 1.45em;\r\n}\r\n\r\nform input[type='submit']:hover {\r\n  background-color: white;\r\n  color: cornflowerblue;\r\n  box-shadow: 0 3px 10px 0.8px #a2a1a19c;\r\n  transform: translateY(-3px);\r\n}\r\n\r\n#success-message {\r\n  font-size: 0.5 em;\r\n  color: rgb(35, 167, 35);\r\n}\r\n\r\n#error-message {\r\n  font-size: 0.5 em;\r\n  color: rgb(199, 0, 0);\r\n}\r\n\r\n.new-comment {\r\n  list-style-type: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  font-size: 1.2em;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .gallery {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  .popup-container {\r\n    padding: 0.2rem;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .page-header {\r\n    padding: 0.2rem;\r\n  }\r\n\r\n  .logo a {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .nav {\r\n    gap: 1rem;\r\n  }\r\n\r\n  .nav-link {\r\n    font-size: 1rem;\r\n    padding: 0;\r\n  }\r\n}\r\n\r\n@media (max-width: 530px) {\r\n  .gallery {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .nav {\r\n    gap: 0.5rem;\r\n  }\r\n\r\n  .logo a {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .nav-link {\r\n    font-size: 0.8rem;\r\n    padding: 0;\r\n  }\r\n\r\n  .total-box .label {\r\n    display: none;\r\n  }\r\n\r\n  #item-count {\r\n    border: none;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/add-comment.js":
/*!************************************!*\
  !*** ./src/modules/add-comment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/modules/constants.js");


const addComment = async (appId, itemId, uname, ucomment) => {
  const url = `${_constants_js__WEBPACK_IMPORTED_MODULE_0__.INV_API + appId}/comments?item_id=${itemId}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: itemId,
      username: uname,
      comment: ucomment,
    }),
  });
  return response.ok;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);


/***/ }),

/***/ "./src/modules/add-like.js":
/*!*********************************!*\
  !*** ./src/modules/add-like.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/modules/constants.js");
/* harmony import */ var _update_likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-likes.js */ "./src/modules/update-likes.js");
/* harmony import */ var _get_likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-likes.js */ "./src/modules/get-likes.js");




const addLike = async (event) => {
  // Get item_id from clicked btn (id = #like-01349493090)
  const charId = event.target.closest('.like-btn').id.split('-')[1];
  // Create new like
  await fetch(`${_constants_js__WEBPACK_IMPORTED_MODULE_0__.INV_API + _constants_js__WEBPACK_IMPORTED_MODULE_0__.APP_ID}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: charId }),
  });
  // Update on the page
  const likedItems = await (0,_get_likes_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_update_likes_js__WEBPACK_IMPORTED_MODULE_1__["default"])(likedItems, charId);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);


/***/ }),

/***/ "./src/modules/comment-counter.js":
/*!****************************************!*\
  !*** ./src/modules/comment-counter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const countComment = (data) => {
  if (!data) return 0;
  let i = 0;
  data.forEach((element) => {
    if (element.username !== '' && element.comment !== '') {
      i += 1;
    }
  });
  return i;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComment);


/***/ }),

/***/ "./src/modules/constants.js":
/*!**********************************!*\
  !*** ./src/modules/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => (/* binding */ API_URL),
/* harmony export */   "APP_ID": () => (/* binding */ APP_ID),
/* harmony export */   "INV_API": () => (/* binding */ INV_API)
/* harmony export */ });
// Main API to fetch data
const API_URL = 'https://www.amiiboapi.com/api/amiibo';
// Involvement for likes and comments
const INV_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
// App id for involvement API
const APP_ID = 'dRuHy6BFXNSTiZHMOETw';


/***/ }),

/***/ "./src/modules/display-characters.js":
/*!*******************************************!*\
  !*** ./src/modules/display-characters.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _popup_detail_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup-detail.js */ "./src/modules/popup-detail.js");
/* harmony import */ var _add_like_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-like.js */ "./src/modules/add-like.js");



const makeElement = (tag, ...classes) => {
  const elem = document.createElement(tag);
  classes.forEach((className) => {
    elem.classList.add(className);
  });
  return elem;
};

const appendChildren = (elem, ...children) => {
  children.forEach((child) => elem.appendChild(child));
};

const makeCharacterCard = (character) => {
  const card = makeElement('section', 'character-card');
  const frame = makeElement('div', 'frame');
  const img = makeElement('img', 'card-img');
  const header = makeElement('div', 'card-header');
  const name = makeElement('h3', 'card-name');
  const likeBtn = makeElement('button', 'like-btn');
  const likeIcon = makeElement('i', 'fa-solid', 'fa-heart');
  const likeCounter = makeElement('span', 'like-counter');
  const commentBtn = makeElement('button', 'comment-btn');
  const commentIcon = makeElement('i', 'fa-regular', 'fa-comment');
  img.src = character.image;
  name.innerText = character.name;
  commentBtn.id = character.id;
  commentBtn.innerText = 'Comment';
  commentBtn.onclick = _popup_detail_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  likeCounter.innerText = 'Like 0';
  likeBtn.id = `like-${character.id}`;
  likeBtn.onclick = _add_like_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  frame.appendChild(img);
  commentBtn.appendChild(commentIcon);
  appendChildren(likeBtn, likeIcon, likeCounter);
  appendChildren(header, name, likeBtn);
  appendChildren(card, frame, header, commentBtn);
  return card;
};

const displayCharacters = (characters) => {
  const galleryContainer = document.querySelector('.gallery');
  galleryContainer.textContent = '';
  characters.forEach((character) => {
    character.id = character.head + character.tail;
    const card = makeCharacterCard(character);
    galleryContainer.appendChild(card);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCharacters);


/***/ }),

/***/ "./src/modules/display-error.js":
/*!**************************************!*\
  !*** ./src/modules/display-error.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const displayErrorPage = () => {
  const errorPage = document.querySelector('.error-page');
  const gallery = document.querySelector('.gallery');
  errorPage.classList.toggle('hide');
  gallery.classList.toggle('hide');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayErrorPage);


/***/ }),

/***/ "./src/modules/get-characters.js":
/*!***************************************!*\
  !*** ./src/modules/get-characters.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/modules/constants.js");
/* harmony import */ var _display_error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-error.js */ "./src/modules/display-error.js");



const getCharacters = async () => {
  const response = await fetch(`${_constants_js__WEBPACK_IMPORTED_MODULE_0__.API_URL}?type=figure`);
  if (!response.ok) {
    (0,_display_error_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
  const data = await response.json();
  return data.amiibo;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCharacters);


/***/ }),

/***/ "./src/modules/get-comments.js":
/*!*************************************!*\
  !*** ./src/modules/get-comments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/modules/constants.js");


const getComments = async (appId, itemId) => {
  const url = `${_constants_js__WEBPACK_IMPORTED_MODULE_0__.INV_API + appId}/comments?item_id=${itemId}`;
  const response = await fetch(url);
  if (!response.ok) return false;

  const data = await response.json();
  return data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);


/***/ }),

/***/ "./src/modules/get-likes.js":
/*!**********************************!*\
  !*** ./src/modules/get-likes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/modules/constants.js");
/* harmony import */ var _display_error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-error.js */ "./src/modules/display-error.js");



const getLikes = async () => {
  const url = `${_constants_js__WEBPACK_IMPORTED_MODULE_0__.INV_API + _constants_js__WEBPACK_IMPORTED_MODULE_0__.APP_ID}/likes`;
  const response = await fetch(url);
  if (!response.ok) {
    (0,_display_error_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
  const data = await response.json();
  return data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);


/***/ }),

/***/ "./src/modules/item-counter.js":
/*!*************************************!*\
  !*** ./src/modules/item-counter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getItemCount = () => {
  const characterCards = document.querySelectorAll('.character-card');
  return characterCards.length || 0;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getItemCount);


/***/ }),

/***/ "./src/modules/like-counter.js":
/*!*************************************!*\
  !*** ./src/modules/like-counter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const likeCounter = (likedItems, id) => {
  const item = likedItems.find((item) => item.item_id === id);
  return item ? item.likes : 0;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likeCounter);


/***/ }),

/***/ "./src/modules/popup-detail.js":
/*!*************************************!*\
  !*** ./src/modules/popup-detail.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-comment.js */ "./src/modules/add-comment.js");
/* harmony import */ var _update_comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-comments.js */ "./src/modules/update-comments.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "./src/modules/constants.js");




const popup = document.querySelector('.popup');
const gallery = document.querySelector('.gallery');
const closeBtn = document.querySelector('.close-btn');
const popImage = document.querySelector('.popup-img');
const popTitle = document.querySelector('.pop-name');
const series = document.querySelector('.series');
const gameSeries = document.querySelector('.game-series');
const submit = document.querySelector('.submit');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');
const nameInput = document.getElementById('name');
const commentInput = document.getElementById('comment');

const getItem = async (itemId) => {
  const result = await fetch(`${_constants_js__WEBPACK_IMPORTED_MODULE_2__.API_URL}/?id=${itemId}`);
  const data = await result.json();
  popImage.src = data.amiibo.image;
  popTitle.innerHTML = data.amiibo.name;
  series.innerHTML = data.amiibo.amiiboSeries;
  gameSeries.innerHTML = data.amiibo.gameSeries;
  submit.id = `submit-${itemId}`;

  await (0,_update_comments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(itemId);
};

const showPopup = (e) => {
  popup.classList.toggle('active');
  gallery.classList.toggle('hide');
  const itemId = e.target.id;
  getItem(itemId);
};

const closePopup = () => {
  popup.classList.toggle('active');
  gallery.classList.toggle('hide');
};

closeBtn.addEventListener('click', closePopup);
submit.addEventListener('click', async (e) => {
  const itemId = e.target.id.split('-')[1];
  const uname = nameInput.value;
  const ucomment = commentInput.value;
  if (uname !== '' && ucomment !== '') {
    const success = await (0,_add_comment_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_constants_js__WEBPACK_IMPORTED_MODULE_2__.APP_ID, itemId, uname, ucomment);
    if (success) {
      await (0,_update_comments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(itemId);
      successMessage.innerHTML = 'Comment succesfully added.';
      nameInput.value = '';
      commentInput.value = '';
    }
  } else {
    errorMessage.innerHTML = 'Please fill in all the fields!';
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopup);


/***/ }),

/***/ "./src/modules/update-comments.js":
/*!****************************************!*\
  !*** ./src/modules/update-comments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-comments.js */ "./src/modules/get-comments.js");
/* harmony import */ var _comment_counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment-counter.js */ "./src/modules/comment-counter.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "./src/modules/constants.js");




const newComment = document.querySelector('.new-comment');
const numberOfComments = document.getElementById('number-of-comments');

const updateComments = async (itemId) => {
  newComment.innerHTML = '';
  const comments = await (0,_get_comments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_constants_js__WEBPACK_IMPORTED_MODULE_2__.APP_ID, itemId);
  if (comments) {
    comments.forEach((element) => {
      if (element.username !== '' && element.comment !== '') {
        newComment.innerHTML += `<li>${element.creation_date} <b>${element.username} </b>: ${element.comment}</li>`;
      }
    });
  }
  numberOfComments.innerHTML = (0,_comment_counter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(comments);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateComments);


/***/ }),

/***/ "./src/modules/update-likes.js":
/*!*************************************!*\
  !*** ./src/modules/update-likes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _like_counter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./like-counter.js */ "./src/modules/like-counter.js");


const updateLikes = async (likedItems, charId) => {
  // Count likes for given id and update on the page
  const totalLikes = (0,_like_counter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(likedItems, charId);
  const likesCount = document.querySelector(`#like-${charId} .like-counter`);
  likesCount.innerText = `Like ${totalLikes}`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateLikes);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _modules_get_characters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/get-characters.js */ "./src/modules/get-characters.js");
/* harmony import */ var _modules_display_characters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display-characters.js */ "./src/modules/display-characters.js");
/* harmony import */ var _modules_update_likes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/update-likes.js */ "./src/modules/update-likes.js");
/* harmony import */ var _modules_get_likes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/get-likes.js */ "./src/modules/get-likes.js");
/* harmony import */ var _modules_item_counter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/item-counter.js */ "./src/modules/item-counter.js");







const refreshGallery = async () => {
  // Get characters from Api
  const characters = await (0,_modules_get_characters_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  // Get total likes
  const likedItems = await (0,_modules_get_likes_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  // Update on the page
  characters.sort(() => Math.random() - 0.5);
  (0,_modules_display_characters_js__WEBPACK_IMPORTED_MODULE_2__["default"])(characters);
  characters.forEach((character) => (0,_modules_update_likes_js__WEBPACK_IMPORTED_MODULE_3__["default"])(likedItems, character.id));
  // Update total items
  const totalItems = (0,_modules_item_counter_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  document.querySelector('#item-count').innerText = totalItems;
};

refreshGallery();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTZCLHNCQUFzQixPQUFPLHVCQUF1QixxQkFBcUIsT0FBTyxLQUFLLFdBQVcsZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxRQUFRLE9BQU8sT0FBTyxhQUFhLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFB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QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQmM7O0FBRTVDO0FBQ0E7QUFDQSxxQkFBcUIsNERBQVc7QUFDaEMscURBQXFELFFBQVE7QUFDN0QsaUNBQWlDLFdBQVc7QUFDNUM7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7O1VDVDNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNtQztBQUNRO0FBQ1o7QUFDTjtBQUNPOztBQUVyRDtBQUNBO0FBQ0EsMkJBQTJCLHNFQUFhO0FBQ3hDO0FBQ0EsMkJBQTJCLGlFQUFRO0FBQ25DO0FBQ0E7QUFDQSxFQUFFLDBFQUFpQjtBQUNuQixvQ0FBb0Msb0VBQVc7QUFDL0M7QUFDQSxxQkFBcUIsb0VBQVk7QUFDakM7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BpeGVsLWJyb3MvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL3NyYy9tb2R1bGVzL2FkZC1jb21tZW50LmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9zcmMvbW9kdWxlcy9hZGQtbGlrZS5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL21vZHVsZXMvY29tbWVudC1jb3VudGVyLmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9zcmMvbW9kdWxlcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL3NyYy9tb2R1bGVzL2Rpc3BsYXktY2hhcmFjdGVycy5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL21vZHVsZXMvZGlzcGxheS1lcnJvci5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL21vZHVsZXMvZ2V0LWNoYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL3NyYy9tb2R1bGVzL2dldC1jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL21vZHVsZXMvZ2V0LWxpa2VzLmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9zcmMvbW9kdWxlcy9pdGVtLWNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL3NyYy9tb2R1bGVzL2xpa2UtY291bnRlci5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL21vZHVsZXMvcG9wdXAtZGV0YWlsLmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9zcmMvbW9kdWxlcy91cGRhdGUtY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL3NyYy9tb2R1bGVzL3VwZGF0ZS1saWtlcy5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BpeGVsLWJyb3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BpeGVsLWJyb3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9waXhlbC1icm9zL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnS29kY2hhc2FuJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS15ZWxsb3c6ICNmMGM4MDg7XFxyXFxuICAtLWJsdWU6ICMwNmFlZDU7XFxyXFxuICAtLXJlZDogI2RkMWMxYTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQmFzaWMgbGF5b3V0ICAqL1xcclxcblxcclxcbi5wYWdlLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLXJlZCk7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMmVtO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjZlbTtcXHJcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcclxcbiAgY29sb3I6IGRhcmtibHVlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDJzO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsuYWN0aXZlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi50b3RhbC1ib3gge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuXFxyXFxuICAvKiBib3JkZXI6IHNvbGlkIDJweCBkYXJrc2xhdGVibHVlOyAqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2l0ZW0tY291bnQge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZzogMC4yNXJlbTtcXHJcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTmF2aWdhdGlvbiBsaW5rIGFuaW1hdGlvbiAgKi9cXHJcXG4ubmF2LWxpbms6OmFmdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHdpZHRoOiAwJTtcXHJcXG4gIGNvbnRlbnQ6ICcuJztcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJhY2tncm91bmQ6ICNhYWE7XFxyXFxuICBoZWlnaHQ6IDFweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbms6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbms6aG92ZXI6OmFmdGVyIHtcXHJcXG4gIHotaW5kZXg6IC0xMDtcXHJcXG4gIGFuaW1hdGlvbjogZmlsbCAxcyBmb3J3YXJkcztcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi8qIEtleWZyYW1lcyAqL1xcclxcbkBrZXlmcmFtZXMgZmlsbCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHdpZHRoOiAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBwIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdpdGh1Yi1saW5rIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHYWxsZXJ5IGxheW91dCAgKi9cXHJcXG4uZ2FsbGVyeSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGdhcDogMS41cmVtO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XFxyXFxufVxcclxcblxcclxcbi5nYWxsZXJ5LmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJhY3Rlci1jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IC04cHggI2QwZDBkMGNiO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhcmFjdGVyLWNhcmQ6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCA4cHggI2QwZDBkMGNiO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDAuMjVyZW07XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWhlYWRlciBoMyB7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZyYW1lIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxufVxcclxcblxcclxcbi5saWtlLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG4gIG1pbi13aWR0aDogNXJlbTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGNvbG9yOiBjcmltc29uO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzMzMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1idG46aG92ZXIge1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAxNjUsIDE3Nyk7XFxyXFxuICBib3gtc2hhZG93OiAwIDNweCAyMHB4IC01cHggI2YyM2UzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtYnRuOmFjdGl2ZSBpIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtY291bnRlciB7XFxyXFxuICBjb2xvcjogZGFya3NsYXRlYmx1ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJ0biB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggY29ybmZsb3dlcmJsdWU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCAwLjhweCAjYTJhMWExOWM7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XFxyXFxufVxcclxcblxcclxcbi5sb2FkaW5nLXRleHQge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi8qIEVycm9yIFBhZ2UgICovXFxyXFxuLmVycm9yLXBhZ2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2FsbW9uO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5lcnJvci1wYWdlIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3ItcGFnZS5oaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5yZWZyZXNoLWJ0biB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjVyZW07XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5yZWZyZXNoLWJ0bjpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OlxcclxcbiAgICAtN3B4IC03cHggMjBweCAwIHJnYmEoMjUzLCAxMjAsIDEyMCwgMC40KSxcXHJcXG4gICAgLTRweCAtNHB4IDVweCAwIHJnYmEoMjU1LCAxMjAsIDEyMCwgMC40KSxcXHJcXG4gICAgN3B4IDdweCAyMHB4IDAgIzAwMDIsXFxyXFxuICAgIDRweCA0cHggNXB4IDAgIzAwMDE7XFxyXFxufVxcclxcblxcclxcbi8qIFBvcHVwIFNlY3Rpb24gKi9cXHJcXG5cXHJcXG4ucG9wdXAge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLmFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNsb3NlLWJ0biB7XFxyXFxuICBmb250LXNpemU6IDIuNWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMmVtO1xcclxcbiAgcmlnaHQ6IDJlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNsb3NlLWJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogcmdiKDQ0LCA5NywgMTk1KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiAwIDEwMHB4O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiA5JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAzMHB4IHNvbGlkIHJnYig0NCwgOTcsIDE5NSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRlbnQge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgcGFkZGluZy10b3A6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250ZW50IGgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogM2VtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRlbnQgaDMge1xcclxcbiAgZm9udC1zaXplOiAxLjZlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGVudCBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWltZyB7XFxyXFxuICBwYWRkaW5nLXRvcDogMTUlO1xcclxcbiAgbWF4LXdpZHRoOiA1MCU7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24gLmxhYmVsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXRbdHlwZT0ndGV4dCddIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXHJcXG4gIGJvcmRlcjogc29saWQgMnB4IHJnYigyMSwgNjcsIDE1Myk7XFxyXFxuICBjb2xvcjogcmdiKDIxLCA2NywgMTUzKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxufVxcclxcblxcclxcbmZvcm0gdGV4dGFyZWEge1xcclxcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gIGJvcmRlcjogc29saWQgMnB4IHJnYigyMSwgNjcsIDE1Myk7XFxyXFxuICBjb2xvcjogcmdiKDIxLCA2NywgMTUzKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXRbdHlwZT0nc3VibWl0J10ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCBjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjQ1ZW07XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXRbdHlwZT0nc3VibWl0J106aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XFxyXFxuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IDAuOHB4ICNhMmExYTE5YztcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Y2Nlc3MtbWVzc2FnZSB7XFxyXFxuICBmb250LXNpemU6IDAuNSBlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMzUsIDE2NywgMzUpO1xcclxcbn1cXHJcXG5cXHJcXG4jZXJyb3ItbWVzc2FnZSB7XFxyXFxuICBmb250LXNpemU6IDAuNSBlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMTk5LCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1jb21tZW50IHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuZ2FsbGVyeSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBhZ2UtaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxvZ28gYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYge1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWxpbmsge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MzBweCkge1xcclxcbiAgLmdhbGxlcnkge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYge1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2dvIGEge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWxpbmsge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b3RhbC1ib3ggLmxhYmVsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNpdGVtLWNvdW50IHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpb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QUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UsZUFBZTtJQUNmLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ0tvZGNoYXNhbicsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0teWVsbG93OiAjZjBjODA4O1xcclxcbiAgLS1ibHVlOiAjMDZhZWQ1O1xcclxcbiAgLS1yZWQ6ICNkZDFjMWE7XFxyXFxufVxcclxcblxcclxcbi8qIEJhc2ljIGxheW91dCAgKi9cXHJcXG5cXHJcXG4ucGFnZS1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJlbTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXHJcXG4gIGNvbG9yOiBkYXJrYmx1ZTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAycztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rLmFjdGl2ZSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG90YWwtYm94IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcblxcclxcbiAgLyogYm9yZGVyOiBzb2xpZCAycHggZGFya3NsYXRlYmx1ZTsgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNpdGVtLWNvdW50IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxyXFxuICBib3JkZXItbGVmdDogc29saWQgMXB4ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi8qIE5hdmlnYXRpb24gbGluayBhbmltYXRpb24gICovXFxyXFxuLm5hdi1saW5rOjphZnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogMCU7XFxyXFxuICBjb250ZW50OiAnLic7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYWFhO1xcclxcbiAgaGVpZ2h0OiAxcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rOmhvdmVyOjphZnRlciB7XFxyXFxuICB6LWluZGV4OiAtMTA7XFxyXFxuICBhbmltYXRpb246IGZpbGwgMXMgZm9yd2FyZHM7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBLZXlmcmFtZXMgKi9cXHJcXG5Aa2V5ZnJhbWVzIGZpbGwge1xcclxcbiAgMCUge1xcclxcbiAgICB3aWR0aDogMCU7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgcCB7XFxyXFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxufVxcclxcblxcclxcbi5naXRodWItbGluayB7XFxyXFxuICBjb2xvcjogdmFyKC0teWVsbG93KTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogR2FsbGVyeSBsYXlvdXQgICovXFxyXFxuLmdhbGxlcnkge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBnYXA6IDEuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICBtaW4taGVpZ2h0OiA4MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FsbGVyeS5oaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jaGFyYWN0ZXItY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAtOHB4ICNkMGQwZDBjYjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJhY3Rlci1jYXJkOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggOHB4ICNkMGQwZDBjYjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjI1cmVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1oZWFkZXIgaDMge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5mcmFtZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1idG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW07XFxyXFxuICBtaW4td2lkdGg6IDVyZW07XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBjb2xvcjogY3JpbXNvbjtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtYnRuOmhvdmVyIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgMTY1LCAxNzcpO1xcclxcbiAgYm94LXNoYWRvdzogMCAzcHggMjBweCAtNXB4ICNmMjNlM2U7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWJ0bjphY3RpdmUgaSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWNvdW50ZXIge1xcclxcbiAgY29sb3I6IGRhcmtzbGF0ZWJsdWU7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG4ge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMC44cHggI2EyYTFhMTljO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZGluZy10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFcnJvciBQYWdlICAqL1xcclxcbi5lcnJvci1wYWdlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NhbG1vbjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3ItcGFnZSBoMiB7XFxyXFxuICBmb250LXNpemU6IDNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yLXBhZ2UuaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaC1idG4ge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cmVtO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaC1idG46aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzpcXHJcXG4gICAgLTdweCAtN3B4IDIwcHggMCByZ2JhKDI1MywgMTIwLCAxMjAsIDAuNCksXFxyXFxuICAgIC00cHggLTRweCA1cHggMCByZ2JhKDI1NSwgMTIwLCAxMjAsIDAuNCksXFxyXFxuICAgIDdweCA3cHggMjBweCAwICMwMDAyLFxcclxcbiAgICA0cHggNHB4IDVweCAwICMwMDAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQb3B1cCBTZWN0aW9uICovXFxyXFxuXFxyXFxuLnBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC5hY3RpdmUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5jbG9zZS1idG4ge1xcclxcbiAgZm9udC1zaXplOiAyLjVlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDJlbTtcXHJcXG4gIHJpZ2h0OiAyZW07XFxyXFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5jbG9zZS1idG46aG92ZXIge1xcclxcbiAgY29sb3I6IHJnYig0NCwgOTcsIDE5NSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogMCAxMDBweDtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogOSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMzBweCBzb2xpZCByZ2IoNDQsIDk3LCAxOTUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250ZW50IHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGVudCBoMiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDNlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250ZW50IGgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRlbnQgcCB7XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1pbWcge1xcclxcbiAgcGFkZGluZy10b3A6IDE1JTtcXHJcXG4gIG1heC13aWR0aDogNTAlO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIC5sYWJlbCB7XFxyXFxuICBmb250LXNpemU6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0W3R5cGU9J3RleHQnXSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxyXFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMjEsIDY3LCAxNTMpO1xcclxcbiAgY29sb3I6IHJnYigyMSwgNjcsIDE1Myk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHRleHRhcmVhIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMjEsIDY3LCAxNTMpO1xcclxcbiAgY29sb3I6IHJnYigyMSwgNjcsIDE1Myk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggY29ybmZsb3dlcmJsdWU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS40NWVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0W3R5cGU9J3N1Ym1pdCddOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCAwLjhweCAjYTJhMWExOWM7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XFxyXFxufVxcclxcblxcclxcbiNzdWNjZXNzLW1lc3NhZ2Uge1xcclxcbiAgZm9udC1zaXplOiAwLjUgZW07XFxyXFxuICBjb2xvcjogcmdiKDM1LCAxNjcsIDM1KTtcXHJcXG59XFxyXFxuXFxyXFxuI2Vycm9yLW1lc3NhZ2Uge1xcclxcbiAgZm9udC1zaXplOiAwLjUgZW07XFxyXFxuICBjb2xvcjogcmdiKDE5OSwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbi5uZXctY29tbWVudCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLmdhbGxlcnkge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wYWdlLWhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2dvIGEge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2IHtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saW5rIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTMwcHgpIHtcXHJcXG4gIC5nYWxsZXJ5IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2IHtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubG9nbyBhIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saW5rIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG90YWwtYm94IC5sYWJlbCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaXRlbS1jb3VudCB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgSU5WX0FQSSB9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcblxuY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jIChhcHBJZCwgaXRlbUlkLCB1bmFtZSwgdWNvbW1lbnQpID0+IHtcbiAgY29uc3QgdXJsID0gYCR7SU5WX0FQSSArIGFwcElkfS9jb21tZW50cz9pdGVtX2lkPSR7aXRlbUlkfWA7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGl0ZW1JZCxcbiAgICAgIHVzZXJuYW1lOiB1bmFtZSxcbiAgICAgIGNvbW1lbnQ6IHVjb21tZW50LFxuICAgIH0pLFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLm9rO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkQ29tbWVudDtcbiIsImltcG9ydCB7IElOVl9BUEksIEFQUF9JRCB9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcbmltcG9ydCB1cGRhdGVMaWtlcyBmcm9tICcuL3VwZGF0ZS1saWtlcy5qcyc7XG5pbXBvcnQgZ2V0TGlrZXMgZnJvbSAnLi9nZXQtbGlrZXMuanMnO1xuXG5jb25zdCBhZGRMaWtlID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gIC8vIEdldCBpdGVtX2lkIGZyb20gY2xpY2tlZCBidG4gKGlkID0gI2xpa2UtMDEzNDk0OTMwOTApXG4gIGNvbnN0IGNoYXJJZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubGlrZS1idG4nKS5pZC5zcGxpdCgnLScpWzFdO1xuICAvLyBDcmVhdGUgbmV3IGxpa2VcbiAgYXdhaXQgZmV0Y2goYCR7SU5WX0FQSSArIEFQUF9JRH0vbGlrZXNgLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXRlbV9pZDogY2hhcklkIH0pLFxuICB9KTtcbiAgLy8gVXBkYXRlIG9uIHRoZSBwYWdlXG4gIGNvbnN0IGxpa2VkSXRlbXMgPSBhd2FpdCBnZXRMaWtlcygpO1xuICB1cGRhdGVMaWtlcyhsaWtlZEl0ZW1zLCBjaGFySWQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkTGlrZTtcbiIsImNvbnN0IGNvdW50Q29tbWVudCA9IChkYXRhKSA9PiB7XG4gIGlmICghZGF0YSkgcmV0dXJuIDA7XG4gIGxldCBpID0gMDtcbiAgZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQudXNlcm5hbWUgIT09ICcnICYmIGVsZW1lbnQuY29tbWVudCAhPT0gJycpIHtcbiAgICAgIGkgKz0gMTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gaTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50Q29tbWVudDtcbiIsIi8vIE1haW4gQVBJIHRvIGZldGNoIGRhdGFcbmV4cG9ydCBjb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vd3d3LmFtaWlib2FwaS5jb20vYXBpL2FtaWlibyc7XG4vLyBJbnZvbHZlbWVudCBmb3IgbGlrZXMgYW5kIGNvbW1lbnRzXG5leHBvcnQgY29uc3QgSU5WX0FQSSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xuLy8gQXBwIGlkIGZvciBpbnZvbHZlbWVudCBBUElcbmV4cG9ydCBjb25zdCBBUFBfSUQgPSAnZFJ1SHk2QkZYTlNUaVpITU9FVHcnO1xuIiwiaW1wb3J0IHNob3dQb3B1cCBmcm9tICcuL3BvcHVwLWRldGFpbC5qcyc7XG5pbXBvcnQgYWRkTGlrZSBmcm9tICcuL2FkZC1saWtlLmpzJztcblxuY29uc3QgbWFrZUVsZW1lbnQgPSAodGFnLCAuLi5jbGFzc2VzKSA9PiB7XG4gIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGNsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0pO1xuICByZXR1cm4gZWxlbTtcbn07XG5cbmNvbnN0IGFwcGVuZENoaWxkcmVuID0gKGVsZW0sIC4uLmNoaWxkcmVuKSA9PiB7XG4gIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBlbGVtLmFwcGVuZENoaWxkKGNoaWxkKSk7XG59O1xuXG5jb25zdCBtYWtlQ2hhcmFjdGVyQ2FyZCA9IChjaGFyYWN0ZXIpID0+IHtcbiAgY29uc3QgY2FyZCA9IG1ha2VFbGVtZW50KCdzZWN0aW9uJywgJ2NoYXJhY3Rlci1jYXJkJyk7XG4gIGNvbnN0IGZyYW1lID0gbWFrZUVsZW1lbnQoJ2RpdicsICdmcmFtZScpO1xuICBjb25zdCBpbWcgPSBtYWtlRWxlbWVudCgnaW1nJywgJ2NhcmQtaW1nJyk7XG4gIGNvbnN0IGhlYWRlciA9IG1ha2VFbGVtZW50KCdkaXYnLCAnY2FyZC1oZWFkZXInKTtcbiAgY29uc3QgbmFtZSA9IG1ha2VFbGVtZW50KCdoMycsICdjYXJkLW5hbWUnKTtcbiAgY29uc3QgbGlrZUJ0biA9IG1ha2VFbGVtZW50KCdidXR0b24nLCAnbGlrZS1idG4nKTtcbiAgY29uc3QgbGlrZUljb24gPSBtYWtlRWxlbWVudCgnaScsICdmYS1zb2xpZCcsICdmYS1oZWFydCcpO1xuICBjb25zdCBsaWtlQ291bnRlciA9IG1ha2VFbGVtZW50KCdzcGFuJywgJ2xpa2UtY291bnRlcicpO1xuICBjb25zdCBjb21tZW50QnRuID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsICdjb21tZW50LWJ0bicpO1xuICBjb25zdCBjb21tZW50SWNvbiA9IG1ha2VFbGVtZW50KCdpJywgJ2ZhLXJlZ3VsYXInLCAnZmEtY29tbWVudCcpO1xuICBpbWcuc3JjID0gY2hhcmFjdGVyLmltYWdlO1xuICBuYW1lLmlubmVyVGV4dCA9IGNoYXJhY3Rlci5uYW1lO1xuICBjb21tZW50QnRuLmlkID0gY2hhcmFjdGVyLmlkO1xuICBjb21tZW50QnRuLmlubmVyVGV4dCA9ICdDb21tZW50JztcbiAgY29tbWVudEJ0bi5vbmNsaWNrID0gc2hvd1BvcHVwO1xuICBsaWtlQ291bnRlci5pbm5lclRleHQgPSAnTGlrZSAwJztcbiAgbGlrZUJ0bi5pZCA9IGBsaWtlLSR7Y2hhcmFjdGVyLmlkfWA7XG4gIGxpa2VCdG4ub25jbGljayA9IGFkZExpa2U7XG4gIGZyYW1lLmFwcGVuZENoaWxkKGltZyk7XG4gIGNvbW1lbnRCdG4uYXBwZW5kQ2hpbGQoY29tbWVudEljb24pO1xuICBhcHBlbmRDaGlsZHJlbihsaWtlQnRuLCBsaWtlSWNvbiwgbGlrZUNvdW50ZXIpO1xuICBhcHBlbmRDaGlsZHJlbihoZWFkZXIsIG5hbWUsIGxpa2VCdG4pO1xuICBhcHBlbmRDaGlsZHJlbihjYXJkLCBmcmFtZSwgaGVhZGVyLCBjb21tZW50QnRuKTtcbiAgcmV0dXJuIGNhcmQ7XG59O1xuXG5jb25zdCBkaXNwbGF5Q2hhcmFjdGVycyA9IChjaGFyYWN0ZXJzKSA9PiB7XG4gIGNvbnN0IGdhbGxlcnlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeScpO1xuICBnYWxsZXJ5Q29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gIGNoYXJhY3RlcnMuZm9yRWFjaCgoY2hhcmFjdGVyKSA9PiB7XG4gICAgY2hhcmFjdGVyLmlkID0gY2hhcmFjdGVyLmhlYWQgKyBjaGFyYWN0ZXIudGFpbDtcbiAgICBjb25zdCBjYXJkID0gbWFrZUNoYXJhY3RlckNhcmQoY2hhcmFjdGVyKTtcbiAgICBnYWxsZXJ5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDaGFyYWN0ZXJzO1xuIiwiY29uc3QgZGlzcGxheUVycm9yUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgZXJyb3JQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLXBhZ2UnKTtcbiAgY29uc3QgZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5Jyk7XG4gIGVycm9yUGFnZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gIGdhbGxlcnkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUVycm9yUGFnZTtcbiIsImltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgZGlzcGxheUVycm9yUGFnZSBmcm9tICcuL2Rpc3BsYXktZXJyb3IuanMnO1xuXG5jb25zdCBnZXRDaGFyYWN0ZXJzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9P3R5cGU9ZmlndXJlYCk7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBkaXNwbGF5RXJyb3JQYWdlKCk7XG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGEuYW1paWJvO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q2hhcmFjdGVycztcbiIsImltcG9ydCB7IElOVl9BUEkgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5cbmNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGFwcElkLCBpdGVtSWQpID0+IHtcbiAgY29uc3QgdXJsID0gYCR7SU5WX0FQSSArIGFwcElkfS9jb21tZW50cz9pdGVtX2lkPSR7aXRlbUlkfWA7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgaWYgKCFyZXNwb25zZS5vaykgcmV0dXJuIGZhbHNlO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q29tbWVudHM7XG4iLCJpbXBvcnQgeyBJTlZfQVBJLCBBUFBfSUQgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgZGlzcGxheUVycm9yUGFnZSBmcm9tICcuL2Rpc3BsYXktZXJyb3IuanMnO1xuXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdXJsID0gYCR7SU5WX0FQSSArIEFQUF9JRH0vbGlrZXNgO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBkaXNwbGF5RXJyb3JQYWdlKCk7XG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRMaWtlcztcbiIsImNvbnN0IGdldEl0ZW1Db3VudCA9ICgpID0+IHtcbiAgY29uc3QgY2hhcmFjdGVyQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhcmFjdGVyLWNhcmQnKTtcbiAgcmV0dXJuIGNoYXJhY3RlckNhcmRzLmxlbmd0aCB8fCAwO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0SXRlbUNvdW50O1xuIiwiY29uc3QgbGlrZUNvdW50ZXIgPSAobGlrZWRJdGVtcywgaWQpID0+IHtcbiAgY29uc3QgaXRlbSA9IGxpa2VkSXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pdGVtX2lkID09PSBpZCk7XG4gIHJldHVybiBpdGVtID8gaXRlbS5saWtlcyA6IDA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsaWtlQ291bnRlcjtcbiIsImltcG9ydCBhZGRDb21tZW50IGZyb20gJy4vYWRkLWNvbW1lbnQuanMnO1xuaW1wb3J0IHVwZGF0ZUNvbW1lbnRzIGZyb20gJy4vdXBkYXRlLWNvbW1lbnRzLmpzJztcbmltcG9ydCB7IEFQUF9JRCwgQVBJX1VSTCB9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcblxuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcbmNvbnN0IGdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeScpO1xuY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnRuJyk7XG5jb25zdCBwb3BJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1pbWcnKTtcbmNvbnN0IHBvcFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC1uYW1lJyk7XG5jb25zdCBzZXJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyaWVzJyk7XG5jb25zdCBnYW1lU2VyaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtc2VyaWVzJyk7XG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XG5jb25zdCBzdWNjZXNzTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWNjZXNzLW1lc3NhZ2UnKTtcbmNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvci1tZXNzYWdlJyk7XG5jb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpO1xuY29uc3QgY29tbWVudElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQnKTtcblxuY29uc3QgZ2V0SXRlbSA9IGFzeW5jIChpdGVtSWQpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vP2lkPSR7aXRlbUlkfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcbiAgcG9wSW1hZ2Uuc3JjID0gZGF0YS5hbWlpYm8uaW1hZ2U7XG4gIHBvcFRpdGxlLmlubmVySFRNTCA9IGRhdGEuYW1paWJvLm5hbWU7XG4gIHNlcmllcy5pbm5lckhUTUwgPSBkYXRhLmFtaWliby5hbWlpYm9TZXJpZXM7XG4gIGdhbWVTZXJpZXMuaW5uZXJIVE1MID0gZGF0YS5hbWlpYm8uZ2FtZVNlcmllcztcbiAgc3VibWl0LmlkID0gYHN1Ym1pdC0ke2l0ZW1JZH1gO1xuXG4gIGF3YWl0IHVwZGF0ZUNvbW1lbnRzKGl0ZW1JZCk7XG59O1xuXG5jb25zdCBzaG93UG9wdXAgPSAoZSkgPT4ge1xuICBwb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgZ2FsbGVyeS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gIGNvbnN0IGl0ZW1JZCA9IGUudGFyZ2V0LmlkO1xuICBnZXRJdGVtKGl0ZW1JZCk7XG59O1xuXG5jb25zdCBjbG9zZVBvcHVwID0gKCkgPT4ge1xuICBwb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgZ2FsbGVyeS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG59O1xuXG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUG9wdXApO1xuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgY29uc3QgaXRlbUlkID0gZS50YXJnZXQuaWQuc3BsaXQoJy0nKVsxXTtcbiAgY29uc3QgdW5hbWUgPSBuYW1lSW5wdXQudmFsdWU7XG4gIGNvbnN0IHVjb21tZW50ID0gY29tbWVudElucHV0LnZhbHVlO1xuICBpZiAodW5hbWUgIT09ICcnICYmIHVjb21tZW50ICE9PSAnJykge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCBhZGRDb21tZW50KEFQUF9JRCwgaXRlbUlkLCB1bmFtZSwgdWNvbW1lbnQpO1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICBhd2FpdCB1cGRhdGVDb21tZW50cyhpdGVtSWQpO1xuICAgICAgc3VjY2Vzc01lc3NhZ2UuaW5uZXJIVE1MID0gJ0NvbW1lbnQgc3VjY2VzZnVsbHkgYWRkZWQuJztcbiAgICAgIG5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgY29tbWVudElucHV0LnZhbHVlID0gJyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVycm9yTWVzc2FnZS5pbm5lckhUTUwgPSAnUGxlYXNlIGZpbGwgaW4gYWxsIHRoZSBmaWVsZHMhJztcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dQb3B1cDtcbiIsImltcG9ydCBnZXRDb21tZW50cyBmcm9tICcuL2dldC1jb21tZW50cy5qcyc7XG5pbXBvcnQgY291bnRDb21tZW50IGZyb20gJy4vY29tbWVudC1jb3VudGVyLmpzJztcbmltcG9ydCB7IEFQUF9JRCB9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcblxuY29uc3QgbmV3Q29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctY29tbWVudCcpO1xuY29uc3QgbnVtYmVyT2ZDb21tZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudW1iZXItb2YtY29tbWVudHMnKTtcblxuY29uc3QgdXBkYXRlQ29tbWVudHMgPSBhc3luYyAoaXRlbUlkKSA9PiB7XG4gIG5ld0NvbW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZ2V0Q29tbWVudHMoQVBQX0lELCBpdGVtSWQpO1xuICBpZiAoY29tbWVudHMpIHtcbiAgICBjb21tZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC51c2VybmFtZSAhPT0gJycgJiYgZWxlbWVudC5jb21tZW50ICE9PSAnJykge1xuICAgICAgICBuZXdDb21tZW50LmlubmVySFRNTCArPSBgPGxpPiR7ZWxlbWVudC5jcmVhdGlvbl9kYXRlfSA8Yj4ke2VsZW1lbnQudXNlcm5hbWV9IDwvYj46ICR7ZWxlbWVudC5jb21tZW50fTwvbGk+YDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBudW1iZXJPZkNvbW1lbnRzLmlubmVySFRNTCA9IGNvdW50Q29tbWVudChjb21tZW50cyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVDb21tZW50cztcbiIsImltcG9ydCBsaWtlQ291bnRlciBmcm9tICcuL2xpa2UtY291bnRlci5qcyc7XG5cbmNvbnN0IHVwZGF0ZUxpa2VzID0gYXN5bmMgKGxpa2VkSXRlbXMsIGNoYXJJZCkgPT4ge1xuICAvLyBDb3VudCBsaWtlcyBmb3IgZ2l2ZW4gaWQgYW5kIHVwZGF0ZSBvbiB0aGUgcGFnZVxuICBjb25zdCB0b3RhbExpa2VzID0gbGlrZUNvdW50ZXIobGlrZWRJdGVtcywgY2hhcklkKTtcbiAgY29uc3QgbGlrZXNDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNsaWtlLSR7Y2hhcklkfSAubGlrZS1jb3VudGVyYCk7XG4gIGxpa2VzQ291bnQuaW5uZXJUZXh0ID0gYExpa2UgJHt0b3RhbExpa2VzfWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVMaWtlcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IGdldENoYXJhY3RlcnMgZnJvbSAnLi9tb2R1bGVzL2dldC1jaGFyYWN0ZXJzLmpzJztcbmltcG9ydCBkaXNwbGF5Q2hhcmFjdGVycyBmcm9tICcuL21vZHVsZXMvZGlzcGxheS1jaGFyYWN0ZXJzLmpzJztcbmltcG9ydCB1cGRhdGVMaWtlcyBmcm9tICcuL21vZHVsZXMvdXBkYXRlLWxpa2VzLmpzJztcbmltcG9ydCBnZXRMaWtlcyBmcm9tICcuL21vZHVsZXMvZ2V0LWxpa2VzLmpzJztcbmltcG9ydCBnZXRJdGVtQ291bnQgZnJvbSAnLi9tb2R1bGVzL2l0ZW0tY291bnRlci5qcyc7XG5cbmNvbnN0IHJlZnJlc2hHYWxsZXJ5ID0gYXN5bmMgKCkgPT4ge1xuICAvLyBHZXQgY2hhcmFjdGVycyBmcm9tIEFwaVxuICBjb25zdCBjaGFyYWN0ZXJzID0gYXdhaXQgZ2V0Q2hhcmFjdGVycygpO1xuICAvLyBHZXQgdG90YWwgbGlrZXNcbiAgY29uc3QgbGlrZWRJdGVtcyA9IGF3YWl0IGdldExpa2VzKCk7XG4gIC8vIFVwZGF0ZSBvbiB0aGUgcGFnZVxuICBjaGFyYWN0ZXJzLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XG4gIGRpc3BsYXlDaGFyYWN0ZXJzKGNoYXJhY3RlcnMpO1xuICBjaGFyYWN0ZXJzLmZvckVhY2goKGNoYXJhY3RlcikgPT4gdXBkYXRlTGlrZXMobGlrZWRJdGVtcywgY2hhcmFjdGVyLmlkKSk7XG4gIC8vIFVwZGF0ZSB0b3RhbCBpdGVtc1xuICBjb25zdCB0b3RhbEl0ZW1zID0gZ2V0SXRlbUNvdW50KCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtLWNvdW50JykuaW5uZXJUZXh0ID0gdG90YWxJdGVtcztcbn07XG5cbnJlZnJlc2hHYWxsZXJ5KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=