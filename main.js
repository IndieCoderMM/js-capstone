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
const INV_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const addComment = async (appId, itemId, uname, ucomment) => {
  const url = `${INV_API + appId}/comments?item_id=${itemId}`;
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
  const data = await response.json();
  return data || null;
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
const INV_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const getComments = async (appId, itemId) => {
  const url = `${INV_API + appId}/comments?item_id=${itemId}`;
  const response = await fetch(url).catch((err) => err);
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
/* harmony import */ var _get_comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-comments.js */ "./src/modules/get-comments.js");
/* harmony import */ var _add_comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-comment.js */ "./src/modules/add-comment.js");
/* harmony import */ var _comment_counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment-counter.js */ "./src/modules/comment-counter.js");




const popup = document.querySelector('.popup');
const gallery = document.querySelector('.gallery');
const closeBtn = document.querySelector('.close-btn');
const API_URL = 'https://www.amiiboapi.com/api/amiibo';
const popImage = document.querySelector('.popup-img');
const popTitle = document.querySelector('.pop-name');
const series = document.querySelector('.series');
const gameSeries = document.querySelector('.game-series');
const newComment = document.querySelector('.new-comment');
const submit = document.querySelector('.submit');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');
const numberOfComments = document.getElementById('number-of-comments');

const getItem = async (itemId) => {
  const result = await fetch(`${API_URL}/?id=${itemId}`);
  const data = await result.json();
  popImage.src = data.amiibo.image;
  popTitle.innerHTML = data.amiibo.name;
  series.innerHTML = data.amiibo.amiiboSeries;
  gameSeries.innerHTML = data.amiibo.gameSeries;
  let nOfComments = 0;
  try {
    const comment = await (0,_get_comments_js__WEBPACK_IMPORTED_MODULE_0__["default"])('dRuHy6BFXNSTiZHMOETw', itemId);
    newComment.innerHTML = '';
    if (comment) {
      comment.forEach((element) => {
        if (element.username !== '' && element.comment !== '') {
          newComment.innerHTML += `<li>${element.creation_date} <b>${element.username} </b>: ${element.comment}</li>`;
        }
      });
      nOfComments = (0,_comment_counter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(comment);
    }
  } catch (error) {
    nOfComments = 0;
  }

  numberOfComments.innerHTML = nOfComments;
  submit.addEventListener('click', () => {
    const uname = document.getElementById('name').value;
    const ucomment = document.getElementById('comment').value;
    if (uname !== '' && ucomment !== '') {
      (0,_add_comment_js__WEBPACK_IMPORTED_MODULE_1__["default"])('dRuHy6BFXNSTiZHMOETw', itemId, uname, ucomment);
      successMessage.innerHTML = 'Comment succesfully added. Please reload to see changes.';
    } else {
      errorMessage.innerHTML = 'Please fill in all the fields.';
    }
  });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopup);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXNCLE9BQU8sdUJBQXVCLHFCQUFxQixPQUFPLEtBQUssV0FBVyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFFBQVEsT0FBTyxPQUFPLGFBQWEsTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8s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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ21DO0FBQ1E7QUFDWjtBQUNOO0FBQ087O0FBRXJEO0FBQ0E7QUFDQSwyQkFBMkIsc0VBQWE7QUFDeEM7QUFDQSwyQkFBMkIsaUVBQVE7QUFDbkM7QUFDQSxFQUFFLDBFQUFpQjtBQUNuQixvQ0FBb0Msb0VBQVc7QUFDL0M7QUFDQSxxQkFBcUIsb0VBQVk7QUFDakM7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BpeGVsLWJyb3MvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL3NyYy9tb2R1bGVzL2FkZC1jb21tZW50LmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9zcmMvbW9kdWxlcy9hZGQtbGlrZS5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL21vZHVsZXMvY29tbWVudC1jb3VudGVyLmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9zcmMvbW9kdWxlcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL3NyYy9tb2R1bGVzL2Rpc3BsYXktY2hhcmFjdGVycy5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL21vZHVsZXMvZGlzcGxheS1lcnJvci5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL21vZHVsZXMvZ2V0LWNoYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL3NyYy9tb2R1bGVzL2dldC1jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL21vZHVsZXMvZ2V0LWxpa2VzLmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9zcmMvbW9kdWxlcy9pdGVtLWNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL3NyYy9tb2R1bGVzL2xpa2UtY291bnRlci5qcyIsIndlYnBhY2s6Ly9waXhlbC1icm9zLy4vc3JjL21vZHVsZXMvcG9wdXAtZGV0YWlsLmpzIiwid2VicGFjazovL3BpeGVsLWJyb3MvLi9zcmMvbW9kdWxlcy91cGRhdGUtbGlrZXMuanMiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waXhlbC1icm9zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BpeGVsLWJyb3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BpeGVsLWJyb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9waXhlbC1icm9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcGl4ZWwtYnJvcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ0tvZGNoYXNhbicsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0teWVsbG93OiAjZjBjODA4O1xcclxcbiAgLS1ibHVlOiAjMDZhZWQ1O1xcclxcbiAgLS1yZWQ6ICNkZDFjMWE7XFxyXFxufVxcclxcblxcclxcbi8qIEJhc2ljIGxheW91dCAgKi9cXHJcXG5cXHJcXG4ucGFnZS1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJlbTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXHJcXG4gIGNvbG9yOiBkYXJrYmx1ZTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAycztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rLmFjdGl2ZSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG90YWwtYm94IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcblxcclxcbiAgLyogYm9yZGVyOiBzb2xpZCAycHggZGFya3NsYXRlYmx1ZTsgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNpdGVtLWNvdW50IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxyXFxuICBib3JkZXItbGVmdDogc29saWQgMXB4ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi8qIE5hdmlnYXRpb24gbGluayBhbmltYXRpb24gICovXFxyXFxuLm5hdi1saW5rOjphZnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogMCU7XFxyXFxuICBjb250ZW50OiAnLic7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYWFhO1xcclxcbiAgaGVpZ2h0OiAxcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rOmhvdmVyOjphZnRlciB7XFxyXFxuICB6LWluZGV4OiAtMTA7XFxyXFxuICBhbmltYXRpb246IGZpbGwgMXMgZm9yd2FyZHM7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBLZXlmcmFtZXMgKi9cXHJcXG5Aa2V5ZnJhbWVzIGZpbGwge1xcclxcbiAgMCUge1xcclxcbiAgICB3aWR0aDogMCU7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgcCB7XFxyXFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxufVxcclxcblxcclxcbi5naXRodWItbGluayB7XFxyXFxuICBjb2xvcjogdmFyKC0teWVsbG93KTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogR2FsbGVyeSBsYXlvdXQgICovXFxyXFxuLmdhbGxlcnkge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBnYXA6IDEuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICBtaW4taGVpZ2h0OiA4MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FsbGVyeS5oaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jaGFyYWN0ZXItY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAtOHB4ICNkMGQwZDBjYjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJhY3Rlci1jYXJkOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggOHB4ICNkMGQwZDBjYjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjI1cmVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1oZWFkZXIgaDMge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5mcmFtZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1idG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW07XFxyXFxuICBtaW4td2lkdGg6IDVyZW07XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBjb2xvcjogY3JpbXNvbjtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4ICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtYnRuOmhvdmVyIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgMTY1LCAxNzcpO1xcclxcbiAgYm94LXNoYWRvdzogMCAzcHggMjBweCAtNXB4ICNmMjNlM2U7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWJ0bjphY3RpdmUgaSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWNvdW50ZXIge1xcclxcbiAgY29sb3I6IGRhcmtzbGF0ZWJsdWU7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG4ge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMC44cHggI2EyYTFhMTljO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZGluZy10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFcnJvciBQYWdlICAqL1xcclxcbi5lcnJvci1wYWdlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NhbG1vbjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3ItcGFnZSBoMiB7XFxyXFxuICBmb250LXNpemU6IDNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yLXBhZ2UuaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaC1idG4ge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cmVtO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaC1idG46aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzpcXHJcXG4gICAgLTdweCAtN3B4IDIwcHggMCByZ2JhKDI1MywgMTIwLCAxMjAsIDAuNCksXFxyXFxuICAgIC00cHggLTRweCA1cHggMCByZ2JhKDI1NSwgMTIwLCAxMjAsIDAuNCksXFxyXFxuICAgIDdweCA3cHggMjBweCAwICMwMDAyLFxcclxcbiAgICA0cHggNHB4IDVweCAwICMwMDAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQb3B1cCBTZWN0aW9uICovXFxyXFxuXFxyXFxuLnBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC5hY3RpdmUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5jbG9zZS1idG4ge1xcclxcbiAgZm9udC1zaXplOiAyLjVlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDJlbTtcXHJcXG4gIHJpZ2h0OiAyZW07XFxyXFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5jbG9zZS1idG46aG92ZXIge1xcclxcbiAgY29sb3I6IHJnYig0NCwgOTcsIDE5NSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogMCAxMDBweDtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogOSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMzBweCBzb2xpZCByZ2IoNDQsIDk3LCAxOTUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250ZW50IHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGVudCBoMiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDNlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250ZW50IGgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRlbnQgcCB7XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1pbWcge1xcclxcbiAgcGFkZGluZy10b3A6IDE1JTtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiAubGFiZWwge1xcclxcbiAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dFt0eXBlPSd0ZXh0J10ge1xcclxcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcclxcbiAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDIxLCA2NywgMTUzKTtcXHJcXG4gIGNvbG9yOiByZ2IoMjEsIDY3LCAxNTMpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAycHggcmdiKDIxLCA2NywgMTUzKTtcXHJcXG4gIGNvbG9yOiByZ2IoMjEsIDY3LCAxNTMpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNDVlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dFt0eXBlPSdzdWJtaXQnXTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMC44cHggI2EyYTFhMTljO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VjY2Vzcy1tZXNzYWdlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC41IGVtO1xcclxcbiAgY29sb3I6IHJnYigzNSwgMTY3LCAzNSk7XFxyXFxufVxcclxcblxcclxcbiNlcnJvci1tZXNzYWdlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC41IGVtO1xcclxcbiAgY29sb3I6IHJnYigxOTksIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWNvbW1lbnQge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5nYWxsZXJ5IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGFnZS1oZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubG9nbyBhIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdiB7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbGluayB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUzMHB4KSB7XFxyXFxuICAuZ2FsbGVyeSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdiB7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxvZ28gYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbGluayB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvdGFsLWJveCAubGFiZWwge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2l0ZW0tY291bnQge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUEsa0JBQWtCOztBQUVsQjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JC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SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdLb2RjaGFzYW4nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLXllbGxvdzogI2YwYzgwODtcXHJcXG4gIC0tYmx1ZTogIzA2YWVkNTtcXHJcXG4gIC0tcmVkOiAjZGQxYzFhO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBCYXNpYyBsYXlvdXQgICovXFxyXFxuXFxyXFxuLnBhZ2UtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tcmVkKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyZW07XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuNmVtO1xcclxcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxyXFxuICBjb2xvcjogZGFya2JsdWU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMnM7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluay5hY3RpdmUge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvdGFsLWJveCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG5cXHJcXG4gIC8qIGJvcmRlcjogc29saWQgMnB4IGRhcmtzbGF0ZWJsdWU7ICovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaXRlbS1jb3VudCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcclxcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOYXZpZ2F0aW9uIGxpbmsgYW5pbWF0aW9uICAqL1xcclxcbi5uYXYtbGluazo6YWZ0ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDAlO1xcclxcbiAgY29udGVudDogJy4nO1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYmFja2dyb3VuZDogI2FhYTtcXHJcXG4gIGhlaWdodDogMXB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluazpob3ZlciB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluazpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgei1pbmRleDogLTEwO1xcclxcbiAgYW5pbWF0aW9uOiBmaWxsIDFzIGZvcndhcmRzO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogS2V5ZnJhbWVzICovXFxyXFxuQGtleWZyYW1lcyBmaWxsIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgd2lkdGg6IDAlO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDUwJSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICBwYWRkaW5nOiAycmVtIDFyZW07XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHAge1xcclxcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l0aHViLWxpbmsge1xcclxcbiAgY29sb3I6IHZhcigtLXllbGxvdyk7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEdhbGxlcnkgbGF5b3V0ICAqL1xcclxcbi5nYWxsZXJ5IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgZ2FwOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcclxcbiAgbWluLWhlaWdodDogODB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbGxlcnkuaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhcmFjdGVyLWNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggLThweCAjZDBkMGQwY2I7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5jaGFyYWN0ZXItY2FyZDpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCAyMHB4IDhweCAjZDBkMGQwY2I7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMC4yNXJlbTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaGVhZGVyIGgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZnJhbWUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMC4zcmVtO1xcclxcbiAgbWluLXdpZHRoOiA1cmVtO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgY29sb3I6IGNyaW1zb247XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCAjMzMzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWJ0bjpob3ZlciB7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYigyNTUsIDE2NSwgMTc3KTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDIwcHggLTVweCAjZjIzZTNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1idG46YWN0aXZlIGkge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1jb3VudGVyIHtcXHJcXG4gIGNvbG9yOiBkYXJrc2xhdGVibHVlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuIHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCBjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XFxyXFxuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IDAuOHB4ICNhMmExYTE5YztcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvYWRpbmctdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRXJyb3IgUGFnZSAgKi9cXHJcXG4uZXJyb3ItcGFnZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzYWxtb247XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yLXBhZ2UgaDIge1xcclxcbiAgZm9udC1zaXplOiAzZW07XFxyXFxufVxcclxcblxcclxcbi5lcnJvci1wYWdlLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZnJlc2gtYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXJlbTtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZnJlc2gtYnRuOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6XFxyXFxuICAgIC03cHggLTdweCAyMHB4IDAgcmdiYSgyNTMsIDEyMCwgMTIwLCAwLjQpLFxcclxcbiAgICAtNHB4IC00cHggNXB4IDAgcmdiYSgyNTUsIDEyMCwgMTIwLCAwLjQpLFxcclxcbiAgICA3cHggN3B4IDIwcHggMCAjMDAwMixcXHJcXG4gICAgNHB4IDRweCA1cHggMCAjMDAwMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUG9wdXAgU2VjdGlvbiAqL1xcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAuYWN0aXZlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY2xvc2UtYnRuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41ZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyZW07XFxyXFxuICByaWdodDogMmVtO1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuY2xvc2UtYnRuOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoNDQsIDk3LCAxOTUpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDAgMTAwcHg7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDklO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDMwcHggc29saWQgcmdiKDQ0LCA5NywgMTk1KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGVudCB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRlbnQgaDIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAzZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGVudCBoMyB7XFxyXFxuICBmb250LXNpemU6IDEuNmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250ZW50IHAge1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW1nIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxNSU7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24gLmxhYmVsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXRbdHlwZT0ndGV4dCddIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXHJcXG4gIGJvcmRlcjogc29saWQgMnB4IHJnYigyMSwgNjcsIDE1Myk7XFxyXFxuICBjb2xvcjogcmdiKDIxLCA2NywgMTUzKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxufVxcclxcblxcclxcbmZvcm0gdGV4dGFyZWEge1xcclxcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gIGJvcmRlcjogc29saWQgMnB4IHJnYigyMSwgNjcsIDE1Myk7XFxyXFxuICBjb2xvcjogcmdiKDIxLCA2NywgMTUzKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXRbdHlwZT0nc3VibWl0J10ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCBjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjQ1ZW07XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXRbdHlwZT0nc3VibWl0J106aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XFxyXFxuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IDAuOHB4ICNhMmExYTE5YztcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Y2Nlc3MtbWVzc2FnZSB7XFxyXFxuICBmb250LXNpemU6IDAuNSBlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMzUsIDE2NywgMzUpO1xcclxcbn1cXHJcXG5cXHJcXG4jZXJyb3ItbWVzc2FnZSB7XFxyXFxuICBmb250LXNpemU6IDAuNSBlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMTk5LCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1jb21tZW50IHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuZ2FsbGVyeSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBhZ2UtaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxvZ28gYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYge1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWxpbmsge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MzBweCkge1xcclxcbiAgLmdhbGxlcnkge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYge1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2dvIGEge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWxpbmsge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b3RhbC1ib3ggLmxhYmVsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNpdGVtLWNvdW50IHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBJTlZfQVBJID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XG5cbmNvbnN0IGFkZENvbW1lbnQgPSBhc3luYyAoYXBwSWQsIGl0ZW1JZCwgdW5hbWUsIHVjb21tZW50KSA9PiB7XG4gIGNvbnN0IHVybCA9IGAke0lOVl9BUEkgKyBhcHBJZH0vY29tbWVudHM/aXRlbV9pZD0ke2l0ZW1JZH1gO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpdGVtSWQsXG4gICAgICB1c2VybmFtZTogdW5hbWUsXG4gICAgICBjb21tZW50OiB1Y29tbWVudCxcbiAgICB9KSxcbiAgfSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhIHx8IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGRDb21tZW50OyIsImltcG9ydCB7IElOVl9BUEksIEFQUF9JRCB9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcbmltcG9ydCB1cGRhdGVMaWtlcyBmcm9tICcuL3VwZGF0ZS1saWtlcy5qcyc7XG5pbXBvcnQgZ2V0TGlrZXMgZnJvbSAnLi9nZXQtbGlrZXMuanMnO1xuXG5jb25zdCBhZGRMaWtlID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gIC8vIEdldCBpdGVtX2lkIGZyb20gY2xpY2tlZCBidG4gKGlkID0gI2xpa2UtMDEzNDk0OTMwOTApXG4gIGNvbnN0IGNoYXJJZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubGlrZS1idG4nKS5pZC5zcGxpdCgnLScpWzFdO1xuICAvLyBDcmVhdGUgbmV3IGxpa2VcbiAgYXdhaXQgZmV0Y2goYCR7SU5WX0FQSSArIEFQUF9JRH0vbGlrZXNgLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXRlbV9pZDogY2hhcklkIH0pLFxuICB9KTtcbiAgLy8gVXBkYXRlIG9uIHRoZSBwYWdlXG4gIGNvbnN0IGxpa2VkSXRlbXMgPSBhd2FpdCBnZXRMaWtlcygpO1xuICB1cGRhdGVMaWtlcyhsaWtlZEl0ZW1zLCBjaGFySWQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkTGlrZTtcbiIsImNvbnN0IGNvdW50Q29tbWVudCA9IChkYXRhKSA9PiB7XG4gIGxldCBpID0gMDtcbiAgZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQudXNlcm5hbWUgIT09ICcnICYmIGVsZW1lbnQuY29tbWVudCAhPT0gJycpIHtcbiAgICAgIGkgKz0gMTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gaTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50Q29tbWVudDsiLCIvLyBNYWluIEFQSSB0byBmZXRjaCBkYXRhXG5leHBvcnQgY29uc3QgQVBJX1VSTCA9ICdodHRwczovL3d3dy5hbWlpYm9hcGkuY29tL2FwaS9hbWlpYm8nO1xuLy8gSW52b2x2ZW1lbnQgZm9yIGxpa2VzIGFuZCBjb21tZW50c1xuZXhwb3J0IGNvbnN0IElOVl9BUEkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcbi8vIEFwcCBpZCBmb3IgaW52b2x2ZW1lbnQgQVBJXG5leHBvcnQgY29uc3QgQVBQX0lEID0gJ2RSdUh5NkJGWE5TVGlaSE1PRVR3JztcbiIsImltcG9ydCBzaG93UG9wdXAgZnJvbSAnLi9wb3B1cC1kZXRhaWwuanMnO1xuaW1wb3J0IGFkZExpa2UgZnJvbSAnLi9hZGQtbGlrZS5qcyc7XG5cbmNvbnN0IG1ha2VFbGVtZW50ID0gKHRhZywgLi4uY2xhc3NlcykgPT4ge1xuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBjbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9KTtcbiAgcmV0dXJuIGVsZW07XG59O1xuXG5jb25zdCBhcHBlbmRDaGlsZHJlbiA9IChlbGVtLCAuLi5jaGlsZHJlbikgPT4ge1xuICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gZWxlbS5hcHBlbmRDaGlsZChjaGlsZCkpO1xufTtcblxuY29uc3QgbWFrZUNoYXJhY3RlckNhcmQgPSAoY2hhcmFjdGVyKSA9PiB7XG4gIGNvbnN0IGNhcmQgPSBtYWtlRWxlbWVudCgnc2VjdGlvbicsICdjaGFyYWN0ZXItY2FyZCcpO1xuICBjb25zdCBmcmFtZSA9IG1ha2VFbGVtZW50KCdkaXYnLCAnZnJhbWUnKTtcbiAgY29uc3QgaW1nID0gbWFrZUVsZW1lbnQoJ2ltZycsICdjYXJkLWltZycpO1xuICBjb25zdCBoZWFkZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgJ2NhcmQtaGVhZGVyJyk7XG4gIGNvbnN0IG5hbWUgPSBtYWtlRWxlbWVudCgnaDMnLCAnY2FyZC1uYW1lJyk7XG4gIGNvbnN0IGxpa2VCdG4gPSBtYWtlRWxlbWVudCgnYnV0dG9uJywgJ2xpa2UtYnRuJyk7XG4gIGNvbnN0IGxpa2VJY29uID0gbWFrZUVsZW1lbnQoJ2knLCAnZmEtc29saWQnLCAnZmEtaGVhcnQnKTtcbiAgY29uc3QgbGlrZUNvdW50ZXIgPSBtYWtlRWxlbWVudCgnc3BhbicsICdsaWtlLWNvdW50ZXInKTtcbiAgY29uc3QgY29tbWVudEJ0biA9IG1ha2VFbGVtZW50KCdidXR0b24nLCAnY29tbWVudC1idG4nKTtcbiAgY29uc3QgY29tbWVudEljb24gPSBtYWtlRWxlbWVudCgnaScsICdmYS1yZWd1bGFyJywgJ2ZhLWNvbW1lbnQnKTtcbiAgaW1nLnNyYyA9IGNoYXJhY3Rlci5pbWFnZTtcbiAgbmFtZS5pbm5lclRleHQgPSBjaGFyYWN0ZXIubmFtZTtcbiAgY29tbWVudEJ0bi5pZCA9IGNoYXJhY3Rlci5pZDtcbiAgY29tbWVudEJ0bi5pbm5lclRleHQgPSAnQ29tbWVudCc7XG4gIGNvbW1lbnRCdG4ub25jbGljayA9IHNob3dQb3B1cDtcbiAgbGlrZUNvdW50ZXIuaW5uZXJUZXh0ID0gJ0xpa2UgMCc7XG4gIGxpa2VCdG4uaWQgPSBgbGlrZS0ke2NoYXJhY3Rlci5pZH1gO1xuICBsaWtlQnRuLm9uY2xpY2sgPSBhZGRMaWtlO1xuICBmcmFtZS5hcHBlbmRDaGlsZChpbWcpO1xuICBjb21tZW50QnRuLmFwcGVuZENoaWxkKGNvbW1lbnRJY29uKTtcbiAgYXBwZW5kQ2hpbGRyZW4obGlrZUJ0biwgbGlrZUljb24sIGxpa2VDb3VudGVyKTtcbiAgYXBwZW5kQ2hpbGRyZW4oaGVhZGVyLCBuYW1lLCBsaWtlQnRuKTtcbiAgYXBwZW5kQ2hpbGRyZW4oY2FyZCwgZnJhbWUsIGhlYWRlciwgY29tbWVudEJ0bik7XG4gIHJldHVybiBjYXJkO1xufTtcblxuY29uc3QgZGlzcGxheUNoYXJhY3RlcnMgPSAoY2hhcmFjdGVycykgPT4ge1xuICBjb25zdCBnYWxsZXJ5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnknKTtcbiAgZ2FsbGVyeUNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICBjaGFyYWN0ZXJzLmZvckVhY2goKGNoYXJhY3RlcikgPT4ge1xuICAgIGNoYXJhY3Rlci5pZCA9IGNoYXJhY3Rlci5oZWFkICsgY2hhcmFjdGVyLnRhaWw7XG4gICAgY29uc3QgY2FyZCA9IG1ha2VDaGFyYWN0ZXJDYXJkKGNoYXJhY3Rlcik7XG4gICAgZ2FsbGVyeUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q2hhcmFjdGVycztcbiIsImNvbnN0IGRpc3BsYXlFcnJvclBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGVycm9yUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1wYWdlJyk7XG4gIGNvbnN0IGdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeScpO1xuICBlcnJvclBhZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICBnYWxsZXJ5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlFcnJvclBhZ2U7XG4iLCJpbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xuaW1wb3J0IGRpc3BsYXlFcnJvclBhZ2UgZnJvbSAnLi9kaXNwbGF5LWVycm9yLmpzJztcblxuY29uc3QgZ2V0Q2hhcmFjdGVycyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfT90eXBlPWZpZ3VyZWApO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgZGlzcGxheUVycm9yUGFnZSgpO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhLmFtaWlibztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENoYXJhY3RlcnM7XG4iLCJjb25zdCBJTlZfQVBJID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XG5cbmNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGFwcElkLCBpdGVtSWQpID0+IHtcbiAgY29uc3QgdXJsID0gYCR7SU5WX0FQSSArIGFwcElkfS9jb21tZW50cz9pdGVtX2lkPSR7aXRlbUlkfWA7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKS5jYXRjaCgoZXJyKSA9PiBlcnIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENvbW1lbnRzO1xuIiwiaW1wb3J0IHsgSU5WX0FQSSwgQVBQX0lEIH0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xuaW1wb3J0IGRpc3BsYXlFcnJvclBhZ2UgZnJvbSAnLi9kaXNwbGF5LWVycm9yLmpzJztcblxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHVybCA9IGAke0lOVl9BUEkgKyBBUFBfSUR9L2xpa2VzYDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgZGlzcGxheUVycm9yUGFnZSgpO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TGlrZXM7XG4iLCJjb25zdCBnZXRJdGVtQ291bnQgPSAoKSA9PiB7XG4gIGNvbnN0IGNoYXJhY3RlckNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYXJhY3Rlci1jYXJkJyk7XG4gIHJldHVybiBjaGFyYWN0ZXJDYXJkcy5sZW5ndGggfHwgMDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldEl0ZW1Db3VudDtcbiIsImNvbnN0IGxpa2VDb3VudGVyID0gKGxpa2VkSXRlbXMsIGlkKSA9PiB7XG4gIGNvbnN0IGl0ZW0gPSBsaWtlZEl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaXRlbV9pZCA9PT0gaWQpO1xuICByZXR1cm4gaXRlbSA/IGl0ZW0ubGlrZXMgOiAwO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbGlrZUNvdW50ZXI7XG4iLCJpbXBvcnQgZ2V0Q29tbWVudHMgZnJvbSAnLi9nZXQtY29tbWVudHMuanMnO1xuaW1wb3J0IGFkZENvbW1lbnQgZnJvbSAnLi9hZGQtY29tbWVudC5qcyc7XG5pbXBvcnQgY291bnRDb21tZW50IGZyb20gJy4vY29tbWVudC1jb3VudGVyLmpzJztcblxuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcbmNvbnN0IGdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeScpO1xuY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnRuJyk7XG5jb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vd3d3LmFtaWlib2FwaS5jb20vYXBpL2FtaWlibyc7XG5jb25zdCBwb3BJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1pbWcnKTtcbmNvbnN0IHBvcFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC1uYW1lJyk7XG5jb25zdCBzZXJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyaWVzJyk7XG5jb25zdCBnYW1lU2VyaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtc2VyaWVzJyk7XG5jb25zdCBuZXdDb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1jb21tZW50Jyk7XG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XG5jb25zdCBzdWNjZXNzTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWNjZXNzLW1lc3NhZ2UnKTtcbmNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvci1tZXNzYWdlJyk7XG5jb25zdCBudW1iZXJPZkNvbW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bWJlci1vZi1jb21tZW50cycpO1xuXG5jb25zdCBnZXRJdGVtID0gYXN5bmMgKGl0ZW1JZCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS8/aWQ9JHtpdGVtSWR9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXN1bHQuanNvbigpO1xuICBwb3BJbWFnZS5zcmMgPSBkYXRhLmFtaWliby5pbWFnZTtcbiAgcG9wVGl0bGUuaW5uZXJIVE1MID0gZGF0YS5hbWlpYm8ubmFtZTtcbiAgc2VyaWVzLmlubmVySFRNTCA9IGRhdGEuYW1paWJvLmFtaWlib1NlcmllcztcbiAgZ2FtZVNlcmllcy5pbm5lckhUTUwgPSBkYXRhLmFtaWliby5nYW1lU2VyaWVzO1xuICBsZXQgbk9mQ29tbWVudHMgPSAwO1xuICB0cnkge1xuICAgIGNvbnN0IGNvbW1lbnQgPSBhd2FpdCBnZXRDb21tZW50cygnZFJ1SHk2QkZYTlNUaVpITU9FVHcnLCBpdGVtSWQpO1xuICAgIG5ld0NvbW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgaWYgKGNvbW1lbnQpIHtcbiAgICAgIGNvbW1lbnQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC51c2VybmFtZSAhPT0gJycgJiYgZWxlbWVudC5jb21tZW50ICE9PSAnJykge1xuICAgICAgICAgIG5ld0NvbW1lbnQuaW5uZXJIVE1MICs9IGA8bGk+JHtlbGVtZW50LmNyZWF0aW9uX2RhdGV9IDxiPiR7ZWxlbWVudC51c2VybmFtZX0gPC9iPjogJHtlbGVtZW50LmNvbW1lbnR9PC9saT5gO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIG5PZkNvbW1lbnRzID0gY291bnRDb21tZW50KGNvbW1lbnQpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBuT2ZDb21tZW50cyA9IDA7XG4gIH1cblxuICBudW1iZXJPZkNvbW1lbnRzLmlubmVySFRNTCA9IG5PZkNvbW1lbnRzO1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgdW5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IHVjb21tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQnKS52YWx1ZTtcbiAgICBpZiAodW5hbWUgIT09ICcnICYmIHVjb21tZW50ICE9PSAnJykge1xuICAgICAgYWRkQ29tbWVudCgnZFJ1SHk2QkZYTlNUaVpITU9FVHcnLCBpdGVtSWQsIHVuYW1lLCB1Y29tbWVudCk7XG4gICAgICBzdWNjZXNzTWVzc2FnZS5pbm5lckhUTUwgPSAnQ29tbWVudCBzdWNjZXNmdWxseSBhZGRlZC4gUGxlYXNlIHJlbG9hZCB0byBzZWUgY2hhbmdlcy4nO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gJ1BsZWFzZSBmaWxsIGluIGFsbCB0aGUgZmllbGRzLic7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHNob3dQb3B1cCA9IChlKSA9PiB7XG4gIHBvcHVwLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICBnYWxsZXJ5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgY29uc3QgaXRlbUlkID0gZS50YXJnZXQuaWQ7XG4gIGdldEl0ZW0oaXRlbUlkKTtcbn07XG5cbmNvbnN0IGNsb3NlUG9wdXAgPSAoKSA9PiB7XG4gIHBvcHVwLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICBnYWxsZXJ5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn07XG5cbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQb3B1cCk7XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dQb3B1cDtcbiIsImltcG9ydCBsaWtlQ291bnRlciBmcm9tICcuL2xpa2UtY291bnRlci5qcyc7XG5cbmNvbnN0IHVwZGF0ZUxpa2VzID0gYXN5bmMgKGxpa2VkSXRlbXMsIGNoYXJJZCkgPT4ge1xuICAvLyBDb3VudCBsaWtlcyBmb3IgZ2l2ZW4gaWQgYW5kIHVwZGF0ZSBvbiB0aGUgcGFnZVxuICBjb25zdCB0b3RhbExpa2VzID0gbGlrZUNvdW50ZXIobGlrZWRJdGVtcywgY2hhcklkKTtcbiAgY29uc3QgbGlrZXNDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNsaWtlLSR7Y2hhcklkfSAubGlrZS1jb3VudGVyYCk7XG4gIGxpa2VzQ291bnQuaW5uZXJUZXh0ID0gYExpa2UgJHt0b3RhbExpa2VzfWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVMaWtlcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IGdldENoYXJhY3RlcnMgZnJvbSAnLi9tb2R1bGVzL2dldC1jaGFyYWN0ZXJzLmpzJztcbmltcG9ydCBkaXNwbGF5Q2hhcmFjdGVycyBmcm9tICcuL21vZHVsZXMvZGlzcGxheS1jaGFyYWN0ZXJzLmpzJztcbmltcG9ydCB1cGRhdGVMaWtlcyBmcm9tICcuL21vZHVsZXMvdXBkYXRlLWxpa2VzLmpzJztcbmltcG9ydCBnZXRMaWtlcyBmcm9tICcuL21vZHVsZXMvZ2V0LWxpa2VzLmpzJztcbmltcG9ydCBnZXRJdGVtQ291bnQgZnJvbSAnLi9tb2R1bGVzL2l0ZW0tY291bnRlci5qcyc7XG5cbmNvbnN0IHJlZnJlc2hHYWxsZXJ5ID0gYXN5bmMgKCkgPT4ge1xuICAvLyBHZXQgY2hhcmFjdGVycyBmcm9tIEFwaVxuICBjb25zdCBjaGFyYWN0ZXJzID0gYXdhaXQgZ2V0Q2hhcmFjdGVycygpO1xuICAvLyBHZXQgdG90YWwgbGlrZXNcbiAgY29uc3QgbGlrZWRJdGVtcyA9IGF3YWl0IGdldExpa2VzKCk7XG4gIC8vIFVwZGF0ZSBvbiB0aGUgcGFnZVxuICBkaXNwbGF5Q2hhcmFjdGVycyhjaGFyYWN0ZXJzKTtcbiAgY2hhcmFjdGVycy5mb3JFYWNoKChjaGFyYWN0ZXIpID0+IHVwZGF0ZUxpa2VzKGxpa2VkSXRlbXMsIGNoYXJhY3Rlci5pZCkpO1xuICAvLyBVcGRhdGUgdG90YWwgaXRlbXNcbiAgY29uc3QgdG90YWxJdGVtcyA9IGdldEl0ZW1Db3VudCgpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1jb3VudCcpLmlubmVyVGV4dCA9IHRvdGFsSXRlbXM7XG59O1xuXG5yZWZyZXNoR2FsbGVyeSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9