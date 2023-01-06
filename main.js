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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Kodchasan', sans-serif;\r\n}\r\n\r\n:root {\r\n  --yellow: #f0c808;\r\n  --blue: #06aed5;\r\n  --red: #dd1c1a;\r\n}\r\n\r\n/* Basic layout  */\r\n\r\n.page-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.logo {\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.logo a {\r\n  text-decoration: none;\r\n  color: var(--red);\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  gap: 2em;\r\n  list-style-type: none;\r\n}\r\n\r\n.nav-link {\r\n  text-decoration: none;\r\n  font-size: 1.6em;\r\n  padding: 0.25rem 0.5rem;\r\n  color: darkblue;\r\n  position: relative;\r\n  transition: all 2s;\r\n}\r\n\r\n.nav-link.active {\r\n  font-weight: bolder;\r\n}\r\n\r\n.total-box {\r\n  display: block;\r\n\r\n  /* border: solid 2px darkslateblue; */\r\n  background-color: var(--yellow);\r\n  padding: 0.5rem;\r\n  color: white;\r\n  border-radius: 0.25rem;\r\n  margin-left: 2rem;\r\n}\r\n\r\n#item-count {\r\n  height: 100%;\r\n  padding: 0.25rem;\r\n  border-left: solid 1px #fff;\r\n}\r\n\r\n/* Navigation link animation  */\r\n.nav-link::after {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 0;\r\n  width: 0%;\r\n  content: '.';\r\n  color: transparent;\r\n  background: #aaa;\r\n  height: 1px;\r\n  text-align: left;\r\n  opacity: 0;\r\n}\r\n\r\n.nav-link:hover {\r\n  color: #fff;\r\n  z-index: 1;\r\n}\r\n\r\n.nav-link:hover::after {\r\n  z-index: -10;\r\n  animation: fill 1s forwards;\r\n  opacity: 1;\r\n}\r\n\r\n/* Keyframes */\r\n@keyframes fill {\r\n  0% {\r\n    width: 0%;\r\n    height: 1px;\r\n  }\r\n\r\n  50% {\r\n    width: 100%;\r\n    height: 1px;\r\n  }\r\n\r\n  100% {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--blue);\r\n  }\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  background-color: #333;\r\n  padding: 2rem 1rem;\r\n  font-size: 1.2rem;\r\n}\r\n\r\nfooter p {\r\n  color: var(--blue);\r\n}\r\n\r\n.github-link {\r\n  color: var(--yellow);\r\n  text-decoration: none;\r\n}\r\n\r\n/* Gallery layout  */\r\n.gallery {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 1.5rem;\r\n  padding: 2rem;\r\n  background-color: aliceblue;\r\n  min-height: 80vh;\r\n}\r\n\r\n.gallery.hide {\r\n  display: none;\r\n}\r\n\r\n.character-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #fff;\r\n  padding: 0.5rem;\r\n  box-shadow: 0 0 20px -8px #d0d0d0cb;\r\n  border-radius: 0.25rem;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.character-card:hover {\r\n  box-shadow: 0 5px 20px 8px #d0d0d0cb;\r\n}\r\n\r\n.card-header {\r\n  padding: 0.5rem 0.25rem;\r\n  margin: 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n}\r\n\r\n.card-header h3 {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.frame {\r\n  background-color: lightskyblue;\r\n  width: 100%;\r\n  height: 250px;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.card-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: contain;\r\n}\r\n\r\n.like-btn {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0.3rem;\r\n  min-width: 5rem;\r\n  gap: 0.5rem;\r\n  background: none;\r\n  color: crimson;\r\n  border: solid 1px #333;\r\n  border-radius: 0.25em;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.like-btn:hover {\r\n  border-color: rgb(255, 165, 177);\r\n  box-shadow: 0 3px 20px -5px #f23e3e;\r\n}\r\n\r\n.like-btn:active i {\r\n  transform: scale(1.4);\r\n}\r\n\r\n.like-counter {\r\n  color: darkslateblue;\r\n  font-weight: 700;\r\n}\r\n\r\n.comment-btn {\r\n  margin: auto;\r\n  padding: 0.5rem;\r\n  font-size: 1.3rem;\r\n  background-color: cornflowerblue;\r\n  border: solid 1px cornflowerblue;\r\n  color: white;\r\n  border-radius: 0.25em;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.comment-btn:hover {\r\n  background-color: white;\r\n  color: cornflowerblue;\r\n  box-shadow: 0 3px 10px 0.8px #a2a1a19c;\r\n  transform: translateY(-3px);\r\n}\r\n\r\n.loading-text {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n/* Error Page  */\r\n.error-page {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: darksalmon;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.error-page h2 {\r\n  font-size: 3em;\r\n}\r\n\r\n.error-page.hide {\r\n  display: none;\r\n}\r\n\r\n.refresh-btn {\r\n  padding: 0.5rem 1.5rem;\r\n  font-size: 1em;\r\n  background: none;\r\n  border-radius: 25rem;\r\n  border: solid 1px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n  background-color: white;\r\n}\r\n\r\n.refresh-btn:hover {\r\n  box-shadow:\r\n    -7px -7px 20px 0 rgba(253, 120, 120, 0.4),\r\n    -4px -4px 5px 0 rgba(255, 120, 120, 0.4),\r\n    7px 7px 20px 0 #0002,\r\n    4px 4px 5px 0 #0001;\r\n}\r\n\r\n/* Popup Section */\r\n\r\n.popup {\r\n  display: none;\r\n}\r\n\r\n.popup.active {\r\n  display: block;\r\n  flex-direction: column;\r\n  background-color: cornflowerblue;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 999;\r\n  padding: 0.5rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup .close-btn {\r\n  font-size: 2.5em;\r\n  font-weight: 900;\r\n  position: absolute;\r\n  top: 2em;\r\n  right: 2em;\r\n  color: rgb(255, 255, 255);\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n.popup .close-btn:hover {\r\n  color: rgb(44, 97, 195);\r\n  cursor: pointer;\r\n  transition: 0.3s ease;\r\n}\r\n\r\n.popup-container {\r\n  padding: 0 100px;\r\n  width: 80%;\r\n  margin-inline: auto;\r\n  margin-top: 9%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 30px solid rgb(44, 97, 195);\r\n  background-color: white;\r\n}\r\n\r\n.popup-content {\r\n  margin: auto;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n  margin-bottom: 30px;\r\n  padding-top: 25px;\r\n}\r\n\r\n.popup-content h2 {\r\n  text-align: center;\r\n  font-size: 3em;\r\n  font-weight: 900;\r\n}\r\n\r\n.popup-content h3 {\r\n  font-size: 1.6em;\r\n  font-weight: 900;\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.popup-content p {\r\n  font-size: 1.2em;\r\n  font-weight: bold;\r\n}\r\n\r\n.popup-img {\r\n  padding-top: 15%;\r\n  align-self: flex-start;\r\n}\r\n\r\n.description .label {\r\n  font-size: 1.5em;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\nform input[type='text'] {\r\n  padding: 10px 10px;\r\n  border: solid 2px rgb(21, 67, 153);\r\n  color: rgb(21, 67, 153);\r\n  border-radius: 0.25em;\r\n  height: 40px;\r\n  font-size: 1.5em;\r\n}\r\n\r\nform textarea {\r\n  padding: 10px 10px;\r\n  font-size: 1.5em;\r\n  border: solid 2px rgb(21, 67, 153);\r\n  color: rgb(21, 67, 153);\r\n  border-radius: 0.25em;\r\n  height: 100px;\r\n}\r\n\r\nform input[type='submit'] {\r\n  background-color: cornflowerblue;\r\n  border: solid 1px cornflowerblue;\r\n  color: white;\r\n  border-radius: 0.25em;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n  padding: 10px 10px;\r\n  font-size: 1.45em;\r\n}\r\n\r\nform input[type='submit']:hover {\r\n  background-color: white;\r\n  color: cornflowerblue;\r\n  box-shadow: 0 3px 10px 0.8px #a2a1a19c;\r\n  transform: translateY(-3px);\r\n}\r\n\r\n#success-message {\r\n  font-size: 0.5 em;\r\n  color: rgb(35, 167, 35);\r\n}\r\n\r\n#error-message {\r\n  font-size: 0.5 em;\r\n  color: rgb(199, 0, 0);\r\n}\r\n\r\n.new-comment {\r\n  list-style-type: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  font-size: 1.2em;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .gallery {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  .popup-container {\r\n    padding: 0.2rem;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .page-header {\r\n    padding: 0.2rem;\r\n  }\r\n\r\n  .logo a {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .nav {\r\n    gap: 1rem;\r\n  }\r\n\r\n  .nav-link {\r\n    font-size: 1rem;\r\n    padding: 0;\r\n  }\r\n}\r\n\r\n@media (max-width: 530px) {\r\n  .gallery {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .nav {\r\n    gap: 0.5rem;\r\n  }\r\n\r\n  .logo a {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .nav-link {\r\n    font-size: 0.8rem;\r\n    padding: 0;\r\n  }\r\n\r\n  .total-box .label {\r\n    display: none;\r\n  }\r\n\r\n  #item-count {\r\n    border: none;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Kodchasan', sans-serif;\r\n}\r\n\r\n:root {\r\n  --yellow: #f0c808;\r\n  --blue: #06aed5;\r\n  --red: #dd1c1a;\r\n}\r\n\r\n/* Basic layout  */\r\n\r\n.page-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.logo {\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.logo a {\r\n  text-decoration: none;\r\n  color: var(--red);\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  gap: 2em;\r\n  list-style-type: none;\r\n}\r\n\r\n.nav-link {\r\n  text-decoration: none;\r\n  font-size: 1.6em;\r\n  padding: 0.25rem 0.5rem;\r\n  color: darkblue;\r\n  position: relative;\r\n  transition: all 2s;\r\n}\r\n\r\n.nav-link.active {\r\n  font-weight: bolder;\r\n}\r\n\r\n.total-box {\r\n  display: block;\r\n\r\n  /* border: solid 2px darkslateblue; */\r\n  background-color: var(--yellow);\r\n  padding: 0.5rem;\r\n  color: white;\r\n  border-radius: 0.25rem;\r\n  margin-left: 2rem;\r\n}\r\n\r\n#item-count {\r\n  height: 100%;\r\n  padding: 0.25rem;\r\n  border-left: solid 1px #fff;\r\n}\r\n\r\n/* Navigation link animation  */\r\n.nav-link::after {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 0;\r\n  width: 0%;\r\n  content: '.';\r\n  color: transparent;\r\n  background: #aaa;\r\n  height: 1px;\r\n  text-align: left;\r\n  opacity: 0;\r\n}\r\n\r\n.nav-link:hover {\r\n  color: #fff;\r\n  z-index: 1;\r\n}\r\n\r\n.nav-link:hover::after {\r\n  z-index: -10;\r\n  animation: fill 1s forwards;\r\n  opacity: 1;\r\n}\r\n\r\n/* Keyframes */\r\n@keyframes fill {\r\n  0% {\r\n    width: 0%;\r\n    height: 1px;\r\n  }\r\n\r\n  50% {\r\n    width: 100%;\r\n    height: 1px;\r\n  }\r\n\r\n  100% {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--blue);\r\n  }\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  background-color: #333;\r\n  padding: 2rem 1rem;\r\n  font-size: 1.2rem;\r\n}\r\n\r\nfooter p {\r\n  color: var(--blue);\r\n}\r\n\r\n.github-link {\r\n  color: var(--yellow);\r\n  text-decoration: none;\r\n}\r\n\r\n/* Gallery layout  */\r\n.gallery {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 1.5rem;\r\n  padding: 2rem;\r\n  background-color: aliceblue;\r\n  min-height: 80vh;\r\n}\r\n\r\n.gallery.hide {\r\n  display: none;\r\n}\r\n\r\n.character-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #fff;\r\n  padding: 0.5rem;\r\n  box-shadow: 0 0 20px -8px #d0d0d0cb;\r\n  border-radius: 0.25rem;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.character-card:hover {\r\n  box-shadow: 0 5px 20px 8px #d0d0d0cb;\r\n}\r\n\r\n.card-header {\r\n  padding: 0.5rem 0.25rem;\r\n  margin: 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n}\r\n\r\n.card-header h3 {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.frame {\r\n  background-color: lightskyblue;\r\n  width: 100%;\r\n  height: 250px;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.card-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: contain;\r\n}\r\n\r\n.like-btn {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0.3rem;\r\n  min-width: 5rem;\r\n  gap: 0.5rem;\r\n  background: none;\r\n  color: crimson;\r\n  border: solid 1px #333;\r\n  border-radius: 0.25em;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.like-btn:hover {\r\n  border-color: rgb(255, 165, 177);\r\n  box-shadow: 0 3px 20px -5px #f23e3e;\r\n}\r\n\r\n.like-btn:active i {\r\n  transform: scale(1.4);\r\n}\r\n\r\n.like-counter {\r\n  color: darkslateblue;\r\n  font-weight: 700;\r\n}\r\n\r\n.comment-btn {\r\n  margin: auto;\r\n  padding: 0.5rem;\r\n  font-size: 1.3rem;\r\n  background-color: cornflowerblue;\r\n  border: solid 1px cornflowerblue;\r\n  color: white;\r\n  border-radius: 0.25em;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.comment-btn:hover {\r\n  background-color: white;\r\n  color: cornflowerblue;\r\n  box-shadow: 0 3px 10px 0.8px #a2a1a19c;\r\n  transform: translateY(-3px);\r\n}\r\n\r\n.loading-text {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n/* Error Page  */\r\n.error-page {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: darksalmon;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.error-page h2 {\r\n  font-size: 3em;\r\n}\r\n\r\n.error-page.hide {\r\n  display: none;\r\n}\r\n\r\n.refresh-btn {\r\n  padding: 0.5rem 1.5rem;\r\n  font-size: 1em;\r\n  background: none;\r\n  border-radius: 25rem;\r\n  border: solid 1px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n  background-color: white;\r\n}\r\n\r\n.refresh-btn:hover {\r\n  box-shadow:\r\n    -7px -7px 20px 0 rgba(253, 120, 120, 0.4),\r\n    -4px -4px 5px 0 rgba(255, 120, 120, 0.4),\r\n    7px 7px 20px 0 #0002,\r\n    4px 4px 5px 0 #0001;\r\n}\r\n\r\n/* Popup Section */\r\n\r\n.popup {\r\n  display: none;\r\n}\r\n\r\n.popup.active {\r\n  display: block;\r\n  flex-direction: column;\r\n  background-color: cornflowerblue;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 999;\r\n  padding: 0.5rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup .close-btn {\r\n  font-size: 2.5em;\r\n  font-weight: 900;\r\n  position: absolute;\r\n  top: 2em;\r\n  right: 2em;\r\n  color: rgb(255, 255, 255);\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n.popup .close-btn:hover {\r\n  color: rgb(44, 97, 195);\r\n  cursor: pointer;\r\n  transition: 0.3s ease;\r\n}\r\n\r\n.popup-container {\r\n  padding: 0 100px;\r\n  width: 80%;\r\n  margin-inline: auto;\r\n  margin-top: 9%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 30px solid rgb(44, 97, 195);\r\n  background-color: white;\r\n}\r\n\r\n.popup-content {\r\n  margin: auto;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n  margin-bottom: 30px;\r\n  padding-top: 25px;\r\n}\r\n\r\n.popup-content h2 {\r\n  text-align: center;\r\n  font-size: 3em;\r\n  font-weight: 900;\r\n}\r\n\r\n.popup-content h3 {\r\n  font-size: 1.6em;\r\n  font-weight: 900;\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.popup-content p {\r\n  font-size: 1.2em;\r\n  font-weight: bold;\r\n}\r\n\r\n.popup-img {\r\n  padding-top: 15%;\r\n  align-self: flex-start;\r\n}\r\n\r\n.description .label {\r\n  font-size: 1.5em;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\nform input[type='text'] {\r\n  padding: 10px 10px;\r\n  border: solid 2px rgb(21, 67, 153);\r\n  color: rgb(21, 67, 153);\r\n  border-radius: 0.25em;\r\n  height: 40px;\r\n  font-size: 1.5em;\r\n}\r\n\r\nform textarea {\r\n  padding: 10px 10px;\r\n  font-size: 1.5em;\r\n  border: solid 2px rgb(21, 67, 153);\r\n  color: rgb(21, 67, 153);\r\n  border-radius: 0.25em;\r\n  height: 100px;\r\n}\r\n\r\nform input[type='submit'] {\r\n  background-color: cornflowerblue;\r\n  border: solid 1px cornflowerblue;\r\n  color: white;\r\n  border-radius: 0.25em;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n  padding: 10px 10px;\r\n  font-size: 1.45em;\r\n}\r\n\r\nform input[type='submit']:hover {\r\n  background-color: white;\r\n  color: cornflowerblue;\r\n  box-shadow: 0 3px 10px 0.8px #a2a1a19c;\r\n  transform: translateY(-3px);\r\n}\r\n\r\n#success-message {\r\n  font-size: 0.5 em;\r\n  color: rgb(35, 167, 35);\r\n}\r\n\r\n#error-message {\r\n  font-size: 0.5 em;\r\n  color: rgb(199, 0, 0);\r\n}\r\n\r\n.new-comment {\r\n  list-style-type: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  font-size: 1.2em;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .gallery {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  .popup-container {\r\n    padding: 0.2rem;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .page-header {\r\n    padding: 0.2rem;\r\n  }\r\n\r\n  .logo a {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .nav {\r\n    gap: 1rem;\r\n  }\r\n\r\n  .nav-link {\r\n    font-size: 1rem;\r\n    padding: 0;\r\n  }\r\n}\r\n\r\n@media (max-width: 530px) {\r\n  .gallery {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .nav {\r\n    gap: 0.5rem;\r\n  }\r\n\r\n  .logo a {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .nav-link {\r\n    font-size: 0.8rem;\r\n    padding: 0;\r\n  }\r\n\r\n  .total-box .label {\r\n    display: none;\r\n  }\r\n\r\n  #item-count {\r\n    border: none;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXNCLE9BQU8sdUJBQXVCLHFCQUFxQixPQUFPLEtBQUssV0FBVyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFFBQVEsT0FBTyxPQUFPLGFBQWEsTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8s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a0IsUUFBUSxnQkFBZ0I7QUFDN0c7QUFDQSxLQUFLO0FBQ0w7QUFDQSwrQkFBK0IsK0RBQVk7QUFDM0M7O0FBRUEsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJjO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0REFBVztBQUNoQyxxREFBcUQsUUFBUTtBQUM3RCxpQ0FBaUMsV0FBVztBQUM1QztBQUNBO0FBQ0EsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7O1VDVDNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNtQztBQUNRO0FBQ1o7QUFDTjtBQUNPO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixzRUFBYTtBQUN4QztBQUNBLDJCQUEyQixpRUFBUTtBQUNuQztBQUNBO0FBQ0EsRUFBRSwwRUFBaUI7QUFDbkIsb0NBQW9DLG9FQUFXO0FBQy9DO0FBQ0EscUJBQXFCLG9FQUFZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL21vZHVsZXMvYWRkLWNvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL3NyYy9tb2R1bGVzL2FkZC1saWtlLmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9zcmMvbW9kdWxlcy9jb21tZW50LWNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL3NyYy9tb2R1bGVzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL21vZHVsZXMvZGlzcGxheS1jaGFyYWN0ZXJzLmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LWVycm9yLmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9zcmMvbW9kdWxlcy9nZXQtY2hhcmFjdGVycy5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL21vZHVsZXMvZ2V0LWNvbW1lbnRzLmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9zcmMvbW9kdWxlcy9nZXQtbGlrZXMuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL3NyYy9tb2R1bGVzL2l0ZW0tY291bnRlci5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL21vZHVsZXMvbGlrZS1jb3VudGVyLmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9zcmMvbW9kdWxlcy9wb3B1cC1kZXRhaWwuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL3NyYy9tb2R1bGVzL3VwZGF0ZS1jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL21vZHVsZXMvdXBkYXRlLWxpa2VzLmpzIiwid2VicGFjazovL3BpeGVsLWJyb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9waXhlbC1icm9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9waXhlbC1icm9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BpeGVsLWJyb3Mvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdLb2RjaGFzYW4nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLXllbGxvdzogI2YwYzgwODtcXHJcXG4gIC0tYmx1ZTogIzA2YWVkNTtcXHJcXG4gIC0tcmVkOiAjZGQxYzFhO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBCYXNpYyBsYXlvdXQgICovXFxyXFxuXFxyXFxuLnBhZ2UtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tcmVkKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyZW07XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuNmVtO1xcclxcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxyXFxuICBjb2xvcjogZGFya2JsdWU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMnM7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluay5hY3RpdmUge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvdGFsLWJveCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG5cXHJcXG4gIC8qIGJvcmRlcjogc29saWQgMnB4IGRhcmtzbGF0ZWJsdWU7ICovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaXRlbS1jb3VudCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcclxcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOYXZpZ2F0aW9uIGxpbmsgYW5pbWF0aW9uICAqL1xcclxcbi5uYXYtbGluazo6YWZ0ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDAlO1xcclxcbiAgY29udGVudDogJy4nO1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYmFja2dyb3VuZDogI2FhYTtcXHJcXG4gIGhlaWdodDogMXB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluazpob3ZlciB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluazpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgei1pbmRleDogLTEwO1xcclxcbiAgYW5pbWF0aW9uOiBmaWxsIDFzIGZvcndhcmRzO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogS2V5ZnJhbWVzICovXFxyXFxuQGtleWZyYW1lcyBmaWxsIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgd2lkdGg6IDAlO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDUwJSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICBwYWRkaW5nOiAycmVtIDFyZW07XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHAge1xcclxcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l0aHViLWxpbmsge1xcclxcbiAgY29sb3I6IHZhcigtLXllbGxvdyk7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEdhbGxlcnkgbGF5b3V0ICAqL1xcclxcbi5nYWxsZXJ5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgZ2FwOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcclxcbiAgbWluLWhlaWdodDogODB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbGxlcnkuaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhcmFjdGVyLWNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggLThweCAjZDBkMGQwY2I7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5jaGFyYWN0ZXItY2FyZDpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IDhweCAjZDBkMGQwY2I7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMC4yNXJlbTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaGVhZGVyIGgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZnJhbWUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMC4zcmVtO1xcclxcbiAgbWluLXdpZHRoOiA1cmVtO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgY29sb3I6IGNyaW1zb247XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjMzMzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWJ0bjpob3ZlciB7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYigyNTUsIDE2NSwgMTc3KTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDIwcHggLTVweCAjZjIzZTNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1idG46YWN0aXZlIGkge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1jb3VudGVyIHtcXHJcXG4gIGNvbG9yOiBkYXJrc2xhdGVibHVlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuIHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCBjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XFxyXFxuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IDAuOHB4ICNhMmExYTE5YztcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvYWRpbmctdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRXJyb3IgUGFnZSAgKi9cXHJcXG4uZXJyb3ItcGFnZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzYWxtb247XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yLXBhZ2UgaDIge1xcclxcbiAgZm9udC1zaXplOiAzZW07XFxyXFxufVxcclxcblxcclxcbi5lcnJvci1wYWdlLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZnJlc2gtYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXJlbTtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZnJlc2gtYnRuOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6XFxyXFxuICAgIC03cHggLTdweCAyMHB4IDAgcmdiYSgyNTMsIDEyMCwgMTIwLCAwLjQpLFxcclxcbiAgICAtNHB4IC00cHggNXB4IDAgcmdiYSgyNTUsIDEyMCwgMTIwLCAwLjQpLFxcclxcbiAgICA3cHggN3B4IDIwcHggMCAjMDAwMixcXHJcXG4gICAgNHB4IDRweCA1cHggMCAjMDAwMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUG9wdXAgU2VjdGlvbiAqL1xcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAuYWN0aXZlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY2xvc2UtYnRuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41ZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyZW07XFxyXFxuICByaWdodDogMmVtO1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY2xvc2UtYnRuOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoNDQsIDk3LCAxOTUpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDAgMTAwcHg7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDklO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDMwcHggc29saWQgcmdiKDQ0LCA5NywgMTk1KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGVudCB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRlbnQgaDIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAzZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGVudCBoMyB7XFxyXFxuICBmb250LXNpemU6IDEuNmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250ZW50IHAge1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW1nIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxNSU7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24gLmxhYmVsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXRbdHlwZT0ndGV4dCddIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXHJcXG4gIGJvcmRlcjogc29saWQgMnB4IHJnYigyMSwgNjcsIDE1Myk7XFxyXFxuICBjb2xvcjogcmdiKDIxLCA2NywgMTUzKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxufVxcclxcblxcclxcbmZvcm0gdGV4dGFyZWEge1xcclxcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gIGJvcmRlcjogc29saWQgMnB4IHJnYigyMSwgNjcsIDE1Myk7XFxyXFxuICBjb2xvcjogcmdiKDIxLCA2NywgMTUzKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXRbdHlwZT0nc3VibWl0J10ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCBjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjQ1ZW07XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXRbdHlwZT0nc3VibWl0J106aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XFxyXFxuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IDAuOHB4ICNhMmExYTE5YztcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Y2Nlc3MtbWVzc2FnZSB7XFxyXFxuICBmb250LXNpemU6IDAuNSBlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMzUsIDE2NywgMzUpO1xcclxcbn1cXHJcXG5cXHJcXG4jZXJyb3ItbWVzc2FnZSB7XFxyXFxuICBmb250LXNpemU6IDAuNSBlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMTk5LCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1jb21tZW50IHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuZ2FsbGVyeSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBhZ2UtaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxvZ28gYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYge1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWxpbmsge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MzBweCkge1xcclxcbiAgLmdhbGxlcnkge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYge1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2dvIGEge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWxpbmsge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b3RhbC1ib3ggLmxhYmVsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNpdGVtLWNvdW50IHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYzs7RUFFZCxxQ0FBcUM7RUFDckMsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsMkJBQTJCO0FBQzdCOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsVUFBVTtBQUNaOztBQUVB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cUI7RUFDckIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxxQ0FBcUM7RUFDdkM7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnS29kY2hhc2FuJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS15ZWxsb3c6ICNmMGM4MDg7XFxyXFxuICAtLWJsdWU6ICMwNmFlZDU7XFxyXFxuICAtLXJlZDogI2RkMWMxYTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQmFzaWMgbGF5b3V0ICAqL1xcclxcblxcclxcbi5wYWdlLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLXJlZCk7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMmVtO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjZlbTtcXHJcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcclxcbiAgY29sb3I6IGRhcmtibHVlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDJzO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsuYWN0aXZlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi50b3RhbC1ib3gge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuXFxyXFxuICAvKiBib3JkZXI6IHNvbGlkIDJweCBkYXJrc2xhdGVibHVlOyAqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2l0ZW0tY291bnQge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZzogMC4yNXJlbTtcXHJcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTmF2aWdhdGlvbiBsaW5rIGFuaW1hdGlvbiAgKi9cXHJcXG4ubmF2LWxpbms6OmFmdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHdpZHRoOiAwJTtcXHJcXG4gIGNvbnRlbnQ6ICcuJztcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJhY2tncm91bmQ6ICNhYWE7XFxyXFxuICBoZWlnaHQ6IDFweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbms6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbms6aG92ZXI6OmFmdGVyIHtcXHJcXG4gIHotaW5kZXg6IC0xMDtcXHJcXG4gIGFuaW1hdGlvbjogZmlsbCAxcyBmb3J3YXJkcztcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi8qIEtleWZyYW1lcyAqL1xcclxcbkBrZXlmcmFtZXMgZmlsbCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHdpZHRoOiAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBwIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdpdGh1Yi1saW5rIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHYWxsZXJ5IGxheW91dCAgKi9cXHJcXG4uZ2FsbGVyeSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGdhcDogMS41cmVtO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XFxyXFxufVxcclxcblxcclxcbi5nYWxsZXJ5LmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJhY3Rlci1jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IC04cHggI2QwZDBkMGNiO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhcmFjdGVyLWNhcmQ6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCA4cHggI2QwZDBkMGNiO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDAuMjVyZW07XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWhlYWRlciBoMyB7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZyYW1lIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxufVxcclxcblxcclxcbi5saWtlLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG4gIG1pbi13aWR0aDogNXJlbTtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGNvbG9yOiBjcmltc29uO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzMzMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1idG46aG92ZXIge1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAxNjUsIDE3Nyk7XFxyXFxuICBib3gtc2hhZG93OiAwIDNweCAyMHB4IC01cHggI2YyM2UzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtYnRuOmFjdGl2ZSBpIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtY291bnRlciB7XFxyXFxuICBjb2xvcjogZGFya3NsYXRlYmx1ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJ0biB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggY29ybmZsb3dlcmJsdWU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCAwLjhweCAjYTJhMWExOWM7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XFxyXFxufVxcclxcblxcclxcbi5sb2FkaW5nLXRleHQge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi8qIEVycm9yIFBhZ2UgICovXFxyXFxuLmVycm9yLXBhZ2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2FsbW9uO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5lcnJvci1wYWdlIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3ItcGFnZS5oaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5yZWZyZXNoLWJ0biB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjVyZW07XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5yZWZyZXNoLWJ0bjpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OlxcclxcbiAgICAtN3B4IC03cHggMjBweCAwIHJnYmEoMjUzLCAxMjAsIDEyMCwgMC40KSxcXHJcXG4gICAgLTRweCAtNHB4IDVweCAwIHJnYmEoMjU1LCAxMjAsIDEyMCwgMC40KSxcXHJcXG4gICAgN3B4IDdweCAyMHB4IDAgIzAwMDIsXFxyXFxuICAgIDRweCA0cHggNXB4IDAgIzAwMDE7XFxyXFxufVxcclxcblxcclxcbi8qIFBvcHVwIFNlY3Rpb24gKi9cXHJcXG5cXHJcXG4ucG9wdXAge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLmFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNsb3NlLWJ0biB7XFxyXFxuICBmb250LXNpemU6IDIuNWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMmVtO1xcclxcbiAgcmlnaHQ6IDJlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmNsb3NlLWJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogcmdiKDQ0LCA5NywgMTk1KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiAwIDEwMHB4O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiA5JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAzMHB4IHNvbGlkIHJnYig0NCwgOTcsIDE5NSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRlbnQge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgcGFkZGluZy10b3A6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250ZW50IGgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogM2VtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRlbnQgaDMge1xcclxcbiAgZm9udC1zaXplOiAxLjZlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGVudCBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWltZyB7XFxyXFxuICBwYWRkaW5nLXRvcDogMTUlO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIC5sYWJlbCB7XFxyXFxuICBmb250LXNpemU6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0W3R5cGU9J3RleHQnXSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxyXFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMjEsIDY3LCAxNTMpO1xcclxcbiAgY29sb3I6IHJnYigyMSwgNjcsIDE1Myk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHRleHRhcmVhIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoMjEsIDY3LCAxNTMpO1xcclxcbiAgY29sb3I6IHJnYigyMSwgNjcsIDE1Myk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggY29ybmZsb3dlcmJsdWU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS40NWVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0W3R5cGU9J3N1Ym1pdCddOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCAwLjhweCAjYTJhMWExOWM7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XFxyXFxufVxcclxcblxcclxcbiNzdWNjZXNzLW1lc3NhZ2Uge1xcclxcbiAgZm9udC1zaXplOiAwLjUgZW07XFxyXFxuICBjb2xvcjogcmdiKDM1LCAxNjcsIDM1KTtcXHJcXG59XFxyXFxuXFxyXFxuI2Vycm9yLW1lc3NhZ2Uge1xcclxcbiAgZm9udC1zaXplOiAwLjUgZW07XFxyXFxuICBjb2xvcjogcmdiKDE5OSwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbi5uZXctY29tbWVudCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLmdhbGxlcnkge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wYWdlLWhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2dvIGEge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2IHtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saW5rIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTMwcHgpIHtcXHJcXG4gIC5nYWxsZXJ5IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2IHtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubG9nbyBhIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saW5rIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG90YWwtYm94IC5sYWJlbCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaXRlbS1jb3VudCB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgSU5WX0FQSSB9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcclxuXHJcbmNvbnN0IGFkZENvbW1lbnQgPSBhc3luYyAoYXBwSWQsIGl0ZW1JZCwgdW5hbWUsIHVjb21tZW50KSA9PiB7XHJcbiAgY29uc3QgdXJsID0gYCR7SU5WX0FQSSArIGFwcElkfS9jb21tZW50cz9pdGVtX2lkPSR7aXRlbUlkfWA7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgaXRlbV9pZDogaXRlbUlkLFxyXG4gICAgICB1c2VybmFtZTogdW5hbWUsXHJcbiAgICAgIGNvbW1lbnQ6IHVjb21tZW50LFxyXG4gICAgfSksXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLm9rO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkQ29tbWVudDtcclxuIiwiaW1wb3J0IHsgSU5WX0FQSSwgQVBQX0lEIH0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xyXG5pbXBvcnQgdXBkYXRlTGlrZXMgZnJvbSAnLi91cGRhdGUtbGlrZXMuanMnO1xyXG5pbXBvcnQgZ2V0TGlrZXMgZnJvbSAnLi9nZXQtbGlrZXMuanMnO1xyXG5cclxuY29uc3QgYWRkTGlrZSA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gIC8vIEdldCBpdGVtX2lkIGZyb20gY2xpY2tlZCBidG4gKGlkID0gI2xpa2UtMDEzNDk0OTMwOTApXHJcbiAgY29uc3QgY2hhcklkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5saWtlLWJ0bicpLmlkLnNwbGl0KCctJylbMV07XHJcbiAgLy8gQ3JlYXRlIG5ldyBsaWtlXHJcbiAgYXdhaXQgZmV0Y2goYCR7SU5WX0FQSSArIEFQUF9JRH0vbGlrZXNgLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IGNoYXJJZCB9KSxcclxuICB9KTtcclxuICAvLyBVcGRhdGUgb24gdGhlIHBhZ2VcclxuICBjb25zdCBsaWtlZEl0ZW1zID0gYXdhaXQgZ2V0TGlrZXMoKTtcclxuICB1cGRhdGVMaWtlcyhsaWtlZEl0ZW1zLCBjaGFySWQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkTGlrZTtcclxuIiwiY29uc3QgY291bnRDb21tZW50ID0gKGRhdGEpID0+IHtcclxuICBpZiAoIWRhdGEpIHJldHVybiAwO1xyXG4gIGxldCBpID0gMDtcclxuICBkYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGlmIChlbGVtZW50LnVzZXJuYW1lICE9PSAnJyAmJiBlbGVtZW50LmNvbW1lbnQgIT09ICcnKSB7XHJcbiAgICAgIGkgKz0gMTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gaTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvdW50Q29tbWVudDtcclxuIiwiLy8gTWFpbiBBUEkgdG8gZmV0Y2ggZGF0YVxyXG5leHBvcnQgY29uc3QgQVBJX1VSTCA9ICdodHRwczovL3d3dy5hbWlpYm9hcGkuY29tL2FwaS9hbWlpYm8nO1xyXG4vLyBJbnZvbHZlbWVudCBmb3IgbGlrZXMgYW5kIGNvbW1lbnRzXHJcbmV4cG9ydCBjb25zdCBJTlZfQVBJID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XHJcbi8vIEFwcCBpZCBmb3IgaW52b2x2ZW1lbnQgQVBJXHJcbmV4cG9ydCBjb25zdCBBUFBfSUQgPSAnZFJ1SHk2QkZYTlNUaVpITU9FVHcnO1xyXG4iLCJpbXBvcnQgc2hvd1BvcHVwIGZyb20gJy4vcG9wdXAtZGV0YWlsLmpzJztcclxuaW1wb3J0IGFkZExpa2UgZnJvbSAnLi9hZGQtbGlrZS5qcyc7XHJcblxyXG5jb25zdCBtYWtlRWxlbWVudCA9ICh0YWcsIC4uLmNsYXNzZXMpID0+IHtcclxuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gIGNsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICB9KTtcclxuICByZXR1cm4gZWxlbTtcclxufTtcclxuXHJcbmNvbnN0IGFwcGVuZENoaWxkcmVuID0gKGVsZW0sIC4uLmNoaWxkcmVuKSA9PiB7XHJcbiAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGVsZW0uYXBwZW5kQ2hpbGQoY2hpbGQpKTtcclxufTtcclxuXHJcbmNvbnN0IG1ha2VDaGFyYWN0ZXJDYXJkID0gKGNoYXJhY3RlcikgPT4ge1xyXG4gIGNvbnN0IGNhcmQgPSBtYWtlRWxlbWVudCgnc2VjdGlvbicsICdjaGFyYWN0ZXItY2FyZCcpO1xyXG4gIGNvbnN0IGZyYW1lID0gbWFrZUVsZW1lbnQoJ2RpdicsICdmcmFtZScpO1xyXG4gIGNvbnN0IGltZyA9IG1ha2VFbGVtZW50KCdpbWcnLCAnY2FyZC1pbWcnKTtcclxuICBjb25zdCBoZWFkZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgJ2NhcmQtaGVhZGVyJyk7XHJcbiAgY29uc3QgbmFtZSA9IG1ha2VFbGVtZW50KCdoMycsICdjYXJkLW5hbWUnKTtcclxuICBjb25zdCBsaWtlQnRuID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsICdsaWtlLWJ0bicpO1xyXG4gIGNvbnN0IGxpa2VJY29uID0gbWFrZUVsZW1lbnQoJ2knLCAnZmEtc29saWQnLCAnZmEtaGVhcnQnKTtcclxuICBjb25zdCBsaWtlQ291bnRlciA9IG1ha2VFbGVtZW50KCdzcGFuJywgJ2xpa2UtY291bnRlcicpO1xyXG4gIGNvbnN0IGNvbW1lbnRCdG4gPSBtYWtlRWxlbWVudCgnYnV0dG9uJywgJ2NvbW1lbnQtYnRuJyk7XHJcbiAgY29uc3QgY29tbWVudEljb24gPSBtYWtlRWxlbWVudCgnaScsICdmYS1yZWd1bGFyJywgJ2ZhLWNvbW1lbnQnKTtcclxuICBpbWcuc3JjID0gY2hhcmFjdGVyLmltYWdlO1xyXG4gIG5hbWUuaW5uZXJUZXh0ID0gY2hhcmFjdGVyLm5hbWU7XHJcbiAgY29tbWVudEJ0bi5pZCA9IGNoYXJhY3Rlci5pZDtcclxuICBjb21tZW50QnRuLmlubmVyVGV4dCA9ICdDb21tZW50JztcclxuICBjb21tZW50QnRuLm9uY2xpY2sgPSBzaG93UG9wdXA7XHJcbiAgbGlrZUNvdW50ZXIuaW5uZXJUZXh0ID0gJ0xpa2UgMCc7XHJcbiAgbGlrZUJ0bi5pZCA9IGBsaWtlLSR7Y2hhcmFjdGVyLmlkfWA7XHJcbiAgbGlrZUJ0bi5vbmNsaWNrID0gYWRkTGlrZTtcclxuICBmcmFtZS5hcHBlbmRDaGlsZChpbWcpO1xyXG4gIGNvbW1lbnRCdG4uYXBwZW5kQ2hpbGQoY29tbWVudEljb24pO1xyXG4gIGFwcGVuZENoaWxkcmVuKGxpa2VCdG4sIGxpa2VJY29uLCBsaWtlQ291bnRlcik7XHJcbiAgYXBwZW5kQ2hpbGRyZW4oaGVhZGVyLCBuYW1lLCBsaWtlQnRuKTtcclxuICBhcHBlbmRDaGlsZHJlbihjYXJkLCBmcmFtZSwgaGVhZGVyLCBjb21tZW50QnRuKTtcclxuICByZXR1cm4gY2FyZDtcclxufTtcclxuXHJcbmNvbnN0IGRpc3BsYXlDaGFyYWN0ZXJzID0gKGNoYXJhY3RlcnMpID0+IHtcclxuICBjb25zdCBnYWxsZXJ5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnknKTtcclxuICBnYWxsZXJ5Q29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgY2hhcmFjdGVycy5mb3JFYWNoKChjaGFyYWN0ZXIpID0+IHtcclxuICAgIGNoYXJhY3Rlci5pZCA9IGNoYXJhY3Rlci5oZWFkICsgY2hhcmFjdGVyLnRhaWw7XHJcbiAgICBjb25zdCBjYXJkID0gbWFrZUNoYXJhY3RlckNhcmQoY2hhcmFjdGVyKTtcclxuICAgIGdhbGxlcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q2hhcmFjdGVycztcclxuIiwiY29uc3QgZGlzcGxheUVycm9yUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBlcnJvclBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItcGFnZScpO1xyXG4gIGNvbnN0IGdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeScpO1xyXG4gIGVycm9yUGFnZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgZ2FsbGVyeS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5RXJyb3JQYWdlO1xyXG4iLCJpbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xyXG5pbXBvcnQgZGlzcGxheUVycm9yUGFnZSBmcm9tICcuL2Rpc3BsYXktZXJyb3IuanMnO1xyXG5cclxuY29uc3QgZ2V0Q2hhcmFjdGVycyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9P3R5cGU9ZmlndXJlYCk7XHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgZGlzcGxheUVycm9yUGFnZSgpO1xyXG4gIH1cclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiBkYXRhLmFtaWlibztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldENoYXJhY3RlcnM7XHJcbiIsImltcG9ydCB7IElOVl9BUEkgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XHJcblxyXG5jb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChhcHBJZCwgaXRlbUlkKSA9PiB7XHJcbiAgY29uc3QgdXJsID0gYCR7SU5WX0FQSSArIGFwcElkfS9jb21tZW50cz9pdGVtX2lkPSR7aXRlbUlkfWA7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gIGlmICghcmVzcG9uc2Uub2spIHJldHVybiBmYWxzZTtcclxuXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldENvbW1lbnRzO1xyXG4iLCJpbXBvcnQgeyBJTlZfQVBJLCBBUFBfSUQgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCBkaXNwbGF5RXJyb3JQYWdlIGZyb20gJy4vZGlzcGxheS1lcnJvci5qcyc7XHJcblxyXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB1cmwgPSBgJHtJTlZfQVBJICsgQVBQX0lEfS9saWtlc2A7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIGRpc3BsYXlFcnJvclBhZ2UoKTtcclxuICB9XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldExpa2VzO1xyXG4iLCJjb25zdCBnZXRJdGVtQ291bnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2hhcmFjdGVyQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhcmFjdGVyLWNhcmQnKTtcclxuICByZXR1cm4gY2hhcmFjdGVyQ2FyZHMubGVuZ3RoIHx8IDA7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRJdGVtQ291bnQ7XHJcbiIsImNvbnN0IGxpa2VDb3VudGVyID0gKGxpa2VkSXRlbXMsIGlkKSA9PiB7XHJcbiAgY29uc3QgaXRlbSA9IGxpa2VkSXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pdGVtX2lkID09PSBpZCk7XHJcbiAgcmV0dXJuIGl0ZW0gPyBpdGVtLmxpa2VzIDogMDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxpa2VDb3VudGVyO1xyXG4iLCJpbXBvcnQgYWRkQ29tbWVudCBmcm9tICcuL2FkZC1jb21tZW50LmpzJztcbmltcG9ydCB1cGRhdGVDb21tZW50cyBmcm9tICcuL3VwZGF0ZS1jb21tZW50cy5qcyc7XG5pbXBvcnQgeyBBUFBfSUQsIEFQSV9VUkwgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5cbmNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJyk7XG5jb25zdCBnYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnknKTtcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ0bicpO1xuY29uc3QgcG9wSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtaW1nJyk7XG5jb25zdCBwb3BUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3AtbmFtZScpO1xuY29uc3Qgc2VyaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcmllcycpO1xuY29uc3QgZ2FtZVNlcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXNlcmllcycpO1xuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpO1xuY29uc3Qgc3VjY2Vzc01lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VjY2Vzcy1tZXNzYWdlJyk7XG5jb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3ItbWVzc2FnZScpO1xuY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcbmNvbnN0IGNvbW1lbnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50Jyk7XG5cbmNvbnN0IGdldEl0ZW0gPSBhc3luYyAoaXRlbUlkKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9Lz9pZD0ke2l0ZW1JZH1gKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG4gIHBvcEltYWdlLnNyYyA9IGRhdGEuYW1paWJvLmltYWdlO1xuICBwb3BUaXRsZS5pbm5lckhUTUwgPSBkYXRhLmFtaWliby5uYW1lO1xuICBzZXJpZXMuaW5uZXJIVE1MID0gZGF0YS5hbWlpYm8uYW1paWJvU2VyaWVzO1xuICBnYW1lU2VyaWVzLmlubmVySFRNTCA9IGRhdGEuYW1paWJvLmdhbWVTZXJpZXM7XG4gIHN1Ym1pdC5pZCA9IGBzdWJtaXQtJHtpdGVtSWR9YDtcblxuICBhd2FpdCB1cGRhdGVDb21tZW50cyhpdGVtSWQpO1xufTtcblxuY29uc3Qgc2hvd1BvcHVwID0gKGUpID0+IHtcbiAgcG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIGdhbGxlcnkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICBjb25zdCBpdGVtSWQgPSBlLnRhcmdldC5pZDtcbiAgZ2V0SXRlbShpdGVtSWQpO1xufTtcblxuY29uc3QgY2xvc2VQb3B1cCA9ICgpID0+IHtcbiAgcG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIGdhbGxlcnkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufTtcblxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBvcHVwKTtcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gIGNvbnN0IGl0ZW1JZCA9IGUudGFyZ2V0LmlkLnNwbGl0KCctJylbMV07XG4gIGNvbnN0IHVuYW1lID0gbmFtZUlucHV0LnZhbHVlO1xuICBjb25zdCB1Y29tbWVudCA9IGNvbW1lbnRJbnB1dC52YWx1ZTtcbiAgaWYgKHVuYW1lICE9PSAnJyAmJiB1Y29tbWVudCAhPT0gJycpIHtcbiAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgYWRkQ29tbWVudChBUFBfSUQsIGl0ZW1JZCwgdW5hbWUsIHVjb21tZW50KTtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgYXdhaXQgdXBkYXRlQ29tbWVudHMoaXRlbUlkKTtcbiAgICAgIHN1Y2Nlc3NNZXNzYWdlLmlubmVySFRNTCA9ICdDb21tZW50IHN1Y2Nlc2Z1bGx5IGFkZGVkLic7XG4gICAgICBuYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICAgIGNvbW1lbnRJbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gJ1BsZWFzZSBmaWxsIGluIGFsbCB0aGUgZmllbGRzISc7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzaG93UG9wdXA7XG4iLCJpbXBvcnQgZ2V0Q29tbWVudHMgZnJvbSAnLi9nZXQtY29tbWVudHMuanMnO1xuaW1wb3J0IGNvdW50Q29tbWVudCBmcm9tICcuL2NvbW1lbnQtY291bnRlci5qcyc7XG5pbXBvcnQgeyBBUFBfSUQgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5cbmNvbnN0IG5ld0NvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWNvbW1lbnQnKTtcbmNvbnN0IG51bWJlck9mQ29tbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtYmVyLW9mLWNvbW1lbnRzJyk7XG5cbmNvbnN0IHVwZGF0ZUNvbW1lbnRzID0gYXN5bmMgKGl0ZW1JZCkgPT4ge1xuICBuZXdDb21tZW50LmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnRzKEFQUF9JRCwgaXRlbUlkKTtcbiAgaWYgKGNvbW1lbnRzKSB7XG4gICAgY29tbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQudXNlcm5hbWUgIT09ICcnICYmIGVsZW1lbnQuY29tbWVudCAhPT0gJycpIHtcbiAgICAgICAgbmV3Q29tbWVudC5pbm5lckhUTUwgKz0gYDxsaT4ke2VsZW1lbnQuY3JlYXRpb25fZGF0ZX0gPGI+JHtlbGVtZW50LnVzZXJuYW1lfSA8L2I+OiAke2VsZW1lbnQuY29tbWVudH08L2xpPmA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgbnVtYmVyT2ZDb21tZW50cy5pbm5lckhUTUwgPSBjb3VudENvbW1lbnQoY29tbWVudHMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQ29tbWVudHM7XG4iLCJpbXBvcnQgbGlrZUNvdW50ZXIgZnJvbSAnLi9saWtlLWNvdW50ZXIuanMnO1xyXG5cclxuY29uc3QgdXBkYXRlTGlrZXMgPSBhc3luYyAobGlrZWRJdGVtcywgY2hhcklkKSA9PiB7XHJcbiAgLy8gQ291bnQgbGlrZXMgZm9yIGdpdmVuIGlkIGFuZCB1cGRhdGUgb24gdGhlIHBhZ2VcclxuICBjb25zdCB0b3RhbExpa2VzID0gbGlrZUNvdW50ZXIobGlrZWRJdGVtcywgY2hhcklkKTtcclxuICBjb25zdCBsaWtlc0NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xpa2UtJHtjaGFySWR9IC5saWtlLWNvdW50ZXJgKTtcclxuICBsaWtlc0NvdW50LmlubmVyVGV4dCA9IGBMaWtlICR7dG90YWxMaWtlc31gO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlTGlrZXM7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5pbXBvcnQgZ2V0Q2hhcmFjdGVycyBmcm9tICcuL21vZHVsZXMvZ2V0LWNoYXJhY3RlcnMuanMnO1xyXG5pbXBvcnQgZGlzcGxheUNoYXJhY3RlcnMgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXktY2hhcmFjdGVycy5qcyc7XHJcbmltcG9ydCB1cGRhdGVMaWtlcyBmcm9tICcuL21vZHVsZXMvdXBkYXRlLWxpa2VzLmpzJztcclxuaW1wb3J0IGdldExpa2VzIGZyb20gJy4vbW9kdWxlcy9nZXQtbGlrZXMuanMnO1xyXG5pbXBvcnQgZ2V0SXRlbUNvdW50IGZyb20gJy4vbW9kdWxlcy9pdGVtLWNvdW50ZXIuanMnO1xyXG5cclxuY29uc3QgcmVmcmVzaEdhbGxlcnkgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gR2V0IGNoYXJhY3RlcnMgZnJvbSBBcGlcclxuICBjb25zdCBjaGFyYWN0ZXJzID0gYXdhaXQgZ2V0Q2hhcmFjdGVycygpO1xyXG4gIC8vIEdldCB0b3RhbCBsaWtlc1xyXG4gIGNvbnN0IGxpa2VkSXRlbXMgPSBhd2FpdCBnZXRMaWtlcygpO1xyXG4gIC8vIFVwZGF0ZSBvbiB0aGUgcGFnZVxyXG4gIGNoYXJhY3RlcnMuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcclxuICBkaXNwbGF5Q2hhcmFjdGVycyhjaGFyYWN0ZXJzKTtcclxuICBjaGFyYWN0ZXJzLmZvckVhY2goKGNoYXJhY3RlcikgPT4gdXBkYXRlTGlrZXMobGlrZWRJdGVtcywgY2hhcmFjdGVyLmlkKSk7XHJcbiAgLy8gVXBkYXRlIHRvdGFsIGl0ZW1zXHJcbiAgY29uc3QgdG90YWxJdGVtcyA9IGdldEl0ZW1Db3VudCgpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtLWNvdW50JykuaW5uZXJUZXh0ID0gdG90YWxJdGVtcztcclxufTtcclxuXHJcbnJlZnJlc2hHYWxsZXJ5KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==