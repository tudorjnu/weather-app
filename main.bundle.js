/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,
body {
  padding: 0;
  width: 100vw;
  height: 100vh;
  font-family: "Roboto Serif", sans-serif;
  background-color: #0f172a;
  color: #f1f5f9;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 6rem;
  letter-spacing: -0.09375rem;
}

h2 {
  font-size: 3.75rem;
  letter-spacing: -0.03125rem;
}

h3 {
  font-size: 3rem;
  letter-spacing: 0rem;
}

h4 {
  font-size: 2.125rem;
  letter-spacing: 0.015625rem;
}

h5 {
  font-size: 1.5rem;
  letter-spacing: 0rem;
}

h6 {
  font-size: 1.25rem;
  letter-spacing: 0.009375rem;
}

a {
  color: var(--slate-50);
  text-decoration: none;
}

hr {
  width: 95%;
  border-radius: 8px;
  border: 1px solid #f1f5f9;
  margin: 1rem auto;
}

button {
  background-color: transparent;
  border: none;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  transition: color 0.2s ease-in-out;
  transition: background-color 0.3s, color 0.3s;
}

.card {
  display: block;
  padding: 0.75rem;
  border: 1px solid #d8d8d8;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 0.25rem;
}
.card .card-title {
  font-size: 1rem;
  padding-bottom: 0.75rem;
  font-weight: bold;
}
.card .card-body {
  font-size: 1rem;
}
.card .card-body a {
  text-decoration: underline;
}

.button-solid {
  background-color: #f1f5f9;
}
.button-solid:hover {
  background-color: white;
}
.button-solid:active {
  background-color: white;
}
.button-solid:disabled {
  background-color: #aac2da;
  cursor: not-allowed;
  color: #aac2da;
}

.button-outlined {
  border-color: #aac2da;
  color: #aac2da;
}
.button-outlined:hover {
  background-color: #628fbc;
}
.button-outlined:active {
  background-color: #86a9cb;
}
.button-outlined:disabled {
  background-color: #aac2da;
  color: white;
  cursor: not-allowed;
}

body {
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-image: linear-gradient(135deg, var(--slate-800), var(--slate-900));
}

header {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#home-icon {
  font-size: 2rem;
  width: 2rem;
  height: 2rem;
}

.search-bar {
  display: flex;
  justify-content: center;
  align-items: stretch;
  border-radius: 1rem;
  border: 1px solid #f1f5f9;
}
.search-bar:hover {
  border-color: white;
}
.search-bar input {
  padding: 0.5rem;
  border-radius: 1rem;
}
.search-bar button {
  border-radius: 1rem;
  border: none;
  background-color: transparent;
  color: var(--fg-color);
}

footer {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

form#search {
  display: grid;
}

.location {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

button,
fieldset,
input,
legend,
select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  color: inherit;
  border: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

input[type=radio],
input[type=checkbox] {
  height: 1.5em;
  width: 1.5em;
  vertical-align: middle;
}

input[type=radio] {
  border-radius: 50%;
}

/* Checkbox */
input[type=checkbox] {
  background-color: transparent;
  width: 1.15em;
  height: 1.15em;
  border: 0.1em solid #f1f5f9;
  justify-self: center;
  align-self: center;
  display: grid;
  place-content: center;
}

input[type=checkbox]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  transform-origin: center center;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

input[type=checkbox]:checked::before {
  transform: scale(1);
}

input[type=checkbox]:focus {
  outline: max(2px, 0.15em) solid currentColor;
  outline-offset: max(2px, 0.15em);
  cursor: pointer;
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  color: var(--color-neutral-400);
}

/* Buttons */
button {
  background-color: transparent;
  border: none;
  border-radius: 8px;
  color: var(--fg-color);
  font-family: inherit;
  font-size: inherit;
  padding: 4px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  transition: color 0.2s ease-in-out;
  transition: background-color 0.3s, color 0.3s;
}
button:hover {
  color: var(--color-neutral-50);
  background-color: var(--color-neutral-700);
}
button[type=submit] {
  background-color: var(--accent-color);
}
button[type=submit]:hover {
  background-color: hsl(213, 73%, 40%);
}
button:active {
  background-color: var(--color-neutral-500);
}
button:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-neutral-400);
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  /* Offset the shadow by the border width */
  box-shadow: 0 0 0 2px var(--color-neutral-400);
  border-radius: 0.25rem;
}

.material-symbols-rounded {
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24;
}

main {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main__container {
  flex-grow: 1;
  display: grid;
  grid-template-areas: "current-condition current-condition" "current-location current-details";
  grid-template-rows: 200px 1fr;
  grid-gap: 5rem;
}
.main__container #condition-icon {
  align-self: flex-end;
  grid-area: current-condition;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 5rem;
}
.main__container .location {
  justify-self: flex-end;
  grid-area: current-location;
}
.main__container .current {
  justify-self: flex-start;
  grid-area: current-details;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
}
.main__container .current__icon {
  font-size: 2rem;
  align-self: center;
}
.main__container .current__element-container {
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/theme/base.scss","webpack://./src/styles/theme/variables.scss","webpack://./src/styles/index.scss","webpack://./src/styles/theme/components/card.scss","webpack://./src/styles/theme/components/buttons/solid.scss","webpack://./src/styles/theme/components/buttons/outlined.scss","webpack://./src/styles/global.scss","webpack://./src/styles/style.scss"],"names":[],"mappings":"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","sourcesContent":["html,\nbody {\n  padding: 0;\n  width: 100vw;\n  height: 100vh;\n  font-family: $base-font-stack;\n  background-color: $background-color;\n  color: $primary;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\n\nh1 {\n  font-size: 6rem;\n  letter-spacing: -0.09375rem;\n}\n\nh2 {\n  font-size: 3.75rem;\n  letter-spacing: -0.03125rem;\n}\n\nh3 {\n  font-size: 3rem;\n  letter-spacing: 0rem;\n}\n\nh4 {\n  font-size: 2.125rem;\n  letter-spacing: 0.015625rem;\n}\n\nh5 {\n  font-size: 1.5rem;\n  letter-spacing: 0rem;\n}\n\nh6 {\n  font-size: 1.25rem;\n  letter-spacing: 0.009375rem;\n}\n\na {\n  color: var(--slate-50);\n  text-decoration: none;\n}\n\n// horizontal rule\nhr {\n  width: 95%;\n  border-radius: 8px;\n  border: 1px solid $primary;\n  margin: 1rem auto;\n}\n\n\n\n// BUTTONS\nbutton {\n  background-color: transparent;\n  border: none;\n  text-decoration: none;\n  cursor: pointer;\n  display: inline-block;\n  padding: $base-padding $base-padding * 2;\n  border-radius: $base-border-radius;\n\n  transition: color 0.2s ease-in-out;\n  transition:\n    background-color 0.3s,\n    color 0.3s;\n}\n","// theme colors\n$background-color: #0f172a;\n$primary: #f1f5f9;\n$secondary: #0C2B1E;\n$error: #d32752;\n$info: #f6c31c;\n$theme: 'dark';\n\n// color pallete\n$colors: (\n  \"primary\": $primary,\n  \"secondary\": $secondary,\n  \"error\": $error,\n  \"info\": $info,\n  \"blue\": #1919e6,\n  \"red\": #e61919,\n  \"yellow\": #e6e619,\n  \"green\": #19e635,\n  \"orange\": #ffa600,\n  \"purple\": #9900ff,\n  \"gray\": #808080,\n  \"black\": black,\n  \"white\": white,\n);\n\n\n// spacing\n$base-padding: 0.75rem;\n$base-margin: 0.75rem;\n\n// borders\n$base-border-thickness: 1px;\n$base-border-radius: 0.25rem;\n$base-border-color: #d8d8d8;\n\n// box-shadow\n$base-box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n\n// font sizes\n$base-font-size: 1rem;\n$font-size-sm: $base-font-size * 0.75;\n$font-size-lg: $base-font-size * 1.5;\n$font-size-xl: $base-font-size * 2;\n$font-size-xxl: $base-font-size * 3;\n\n// font stack\n$base-font-stack: 'Roboto Serif', sans-serif;\n","@import \"theme/styles\";\n@import \"global\";\n@import \"style\";\n\n.material-symbols-rounded {\n  font-variation-settings:\n    \"FILL\" 1,\n    \"wght\" 400,\n    \"GRAD\" 0,\n    \"opsz\" 24;\n}\n\nmain {\n  padding: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.main__container {\n  flex-grow: 1;\n  display: grid;\n  grid-template-areas:\n    \"current-condition current-condition\"\n    \"current-location current-details\";\n  grid-template-rows: 200px 1fr;\n  grid-gap: 5rem;\n\n  #condition-icon {\n    align-self: flex-end;\n    grid-area: current-condition;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n\n    font-size: 5rem;\n  }\n\n  .location {\n    justify-self: flex-end;\n    grid-area: current-location;\n  }\n\n  .current {\n    justify-self: flex-start;\n    grid-area: current-details;\n\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-gap: 1rem;\n  }\n\n  .current__icon {\n    font-size: 2rem;\n    align-self: center;\n  }\n\n  .current__element-container {\n    align-self: center;\n\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n}\n","@use 'sass:math';\n\n.card {\n  display: block;\n  padding: $base-padding;\n  border: $base-border-thickness solid $base-border-color;\n  box-shadow: $base-box-shadow;\n  border-radius: $base-border-radius;\n\n  .card-title {\n    font-size: $base-font-size;\n    padding-bottom: $base-padding;\n    font-weight: bold;\n  }\n\n  .card-body {\n    font-size: $base-font-size;\n\n    a {\n      text-decoration: underline;\n    }\n  }\n}\n",".button-solid {\n  background-color: $primary;\n\n  @if $theme =='dark' {\n\n    &:hover {\n      background-color: lighten($primary, 10%);\n    }\n\n    &:active {\n      background-color: lighten($primary, 20%);\n    }\n\n    &:disabled {\n      background-color: darken($primary, 20%);\n      cursor: not-allowed;\n      color: darken($primary, 20%);\n    }\n  }\n\n  @else {\n    &:hover {\n      background-color: darken($primary, 10%);\n    }\n\n    &:active {\n      background-color: darken($primary, 20%);\n    }\n\n    &:disabled {\n      background-color: lighten($primary, 20%);\n      cursor: not-allowed;\n      color: darken($primary, 20%);\n    }\n  }\n}\n",".button-outlined {\n  border-color: darken($primary, 20%);\n  color: darken($primary, 20%);\n\n  @if $theme =='dark' {\n    &:hover {\n      background-color: darken($primary, 40%);\n    }\n\n    &:active {\n      background-color: darken($primary, 30%);\n    }\n\n    &:disabled {\n      background-color: darken($primary, 20%);\n      color: lighten($primary, 20%);\n\n      cursor: not-allowed;\n    }\n  }\n\n  @else {\n\n    &:hover {\n      background-color: lighten($primary, 40%);\n    }\n\n    &:active {\n      background-color: lighten($primary, 30%);\n    }\n\n    &:disabled {\n      background-color: lighten($primary, 20%);\n      color: lighten($primary, 20%);\n\n      cursor: not-allowed;\n    }\n  }\n\n}\n","body {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  background-image: linear-gradient(135deg, var(--slate-800), var(--slate-900));\n}\n\nheader {\n  padding: 1rem;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n#home-icon {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n}\n\n.search-bar {\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n\n  border-radius: 1rem;\n  border: 1px solid $primary;\n\n  &:hover {\n    border-color: lighten($primary, 20%);\n  }\n\n  input {\n    padding: 0.5rem;\n    border-radius: 1rem;\n  }\n\n  button {\n    border-radius: 1rem;\n    border: none;\n    background-color: transparent;\n    color: var(--fg-color);\n  }\n}\n\n\n\nfooter {\n  padding: 1rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nform#search {\n  display: grid;\n}\n\n.location {\n  padding: 1rem;\n\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n","button,\nfieldset,\ninput,\nlegend,\nselect,\ntextarea {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: transparent;\n  color: inherit;\n  border: none;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  height: 1.5em;\n  width: 1.5em;\n  vertical-align: middle;\n}\n\ninput[type=\"radio\"] {\n  border-radius: 50%;\n}\n\n/* Checkbox */\ninput[type=\"checkbox\"] {\n  background-color: transparent;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.1em solid $primary;\n\n  justify-self: center;\n  align-self: center;\n\n  display: grid;\n  place-content: center;\n}\n\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  // box-shadow: inset 1em 1em var(--accent-color);\n\n  transform-origin: center center;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: scale(1);\n}\n\ninput[type=\"checkbox\"]:focus {\n  outline: max(2px, 0.15em) solid currentColor;\n  outline-offset: max(2px, 0.15em);\n\n  cursor: pointer;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: var(--color-neutral-400);\n}\n\n/* Buttons */\nbutton {\n  background-color: transparent;\n  border: none;\n  border-radius: 8px;\n  color: var(--fg-color);\n  font-family: inherit;\n  font-size: inherit;\n  padding: 4px;\n  cursor: pointer;\n\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-start;\n\n  transition: color 0.2s ease-in-out;\n  transition:\n    background-color 0.3s,\n    color 0.3s;\n\n  &:hover {\n    color: var(--color-neutral-50);\n    background-color: var(--color-neutral-700);\n  }\n\n  &[type=\"submit\"] {\n    background-color: var(--accent-color);\n\n    &:hover {\n      background-color: hsl(213, 73%, 40%);\n    }\n  }\n\n  &:active {\n    background-color: var(--color-neutral-500);\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px var(--color-neutral-400);\n  }\n\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus {\n  outline: none;\n  /* Offset the shadow by the border width */\n  box-shadow: 0 0 0 2px var(--color-neutral-400);\n  border-radius: 0.25rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_weather_api_WeatherAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/weather-api/WeatherAPI */ "./src/components/weather-api/WeatherAPI.js");


class App {
  constructor() {
    this.init();
    this.weatherAPI = new _components_weather_api_WeatherAPI__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  init() {
    console.log("App initialized");
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/components/weather-api/WeatherAPI.js":
/*!**************************************************!*\
  !*** ./src/components/weather-api/WeatherAPI.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const weatherIconMap = {
  1000: "sunny", // or 'nights_stay' for night Clear
  1003: "partly_cloudy", // Partly cloudy
  1006: "cloud", // Cloudy
  1009: "cloud", // Overcast
  1030: "foggy", // Mist
  1063: "umbrella", // Patchy rain possible
  1066: "ac_unit", // Patchy snow possible
  1069: "ac_unit", // Patchy sleet possible
  1072: "ac_unit", // Patchy freezing drizzle possible
  1087: "thunderstorm", // Thundery outbreaks possible
  1114: "ac_unit", // Blowing snow
  1117: "ac_unit", // Blizzard
  1135: "foggy", // Fog
  1147: "foggy", // Freezing fog
  1150: "grain", // Patchy light drizzle
  1153: "grain", // Light drizzle
  1168: "ac_unit", // Freezing drizzle
  1171: "ac_unit", // Heavy freezing drizzle
  1180: "umbrella", // Patchy light rain
  1183: "umbrella", // Light rain
  1186: "umbrella", // Moderate rain at times
  1189: "umbrella", // Moderate rain
  1192: "umbrella", // Heavy rain at times
  1195: "umbrella", // Heavy rain
  1198: "ac_unit", // Light freezing rain
  1201: "ac_unit", // Moderate or heavy freezing rain
  1204: "ac_unit", // Light sleet
  1207: "ac_unit", // Moderate or heavy sleet
  1210: "ac_unit", // Patchy light snow
  1213: "ac_unit", // Light snow
  1216: "ac_unit", // Patchy moderate snow
  1219: "ac_unit", // Moderate snow
  1222: "ac_unit", // Patchy heavy snow
  1225: "ac_unit", // Heavy snow
  1237: "ac_unit", // Ice pellets
  1240: "umbrella", // Light rain shower
  1243: "umbrella", // Moderate or heavy rain shower
  1246: "umbrella", // Torrential rain shower
  1249: "ac_unit", // Light sleet showers
  1252: "ac_unit", // Moderate or heavy sleet showers
  1255: "ac_unit", // Light snow showers
  1258: "ac_unit", // Moderate or heavy snow showers
  1261: "ac_unit", // Light showers of ice pellets
  1264: "ac_unit", // Moderate or heavy showers of ice pellets
  1273: "thunderstorm", // Patchy light rain with thunder
  1276: "thunderstorm", // Moderate or heavy rain with thunder
  1279: "thunderstorm", // Patchy light snow with thunder
  1282: "thunderstorm", // Moderate or heavy snow with thunder
};

function getLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject("Geolocation is not supported by this browser.");
    }
  });
}

async function fetchLocation() {
  try {
    const position = await getLocation();
    return position.coords;
  } catch (error) {
    console.log(error);
  }
}

class WeatherAPI {
  constructor() {
    this.apiKey = "e22388f0771d490fab774625240801";

    this.domElements = {
      currentIcon: document.getElementById("condition-icon"),

      location: {
        name: document.querySelector(".location__name"),
        region: document.querySelector(".location__region"),
        country: document.querySelector(".location__country"),
        localtime: document.querySelector(".location__localtime"),
      },
      current: {
        //   temp_c: document.querySelector(".current__temp-c"),
        condition: {
          text: document.querySelector(".current__condition-text"),
          code: document.querySelector(".current__condition-code"),
        },
        wind_kph: document.getElementById("wind-kph"),
        humidity: document.getElementById("humidity"),
        feelslike: document.getElementById("feelslike"),
      },
    };
    this.init();
    setInterval(this.update.bind(this), 1000 * 10); // 10 seconds
  }

  getWeather = async () => {
    try {
      const response = await fetch(this.link, { mode: "cors" });
      const weatherData = await response.json();
      return weatherData;
    } catch (error) {
      console.log(error);
    }
  };

  parseDate(dateString) {
    const date = new Date(dateString);
    return `${date.toDateString()}, ${date.toLocaleTimeString()}`;
  }

  render() {
    const renderLocation = () => {
      this.domElements.location.name.textContent =
        this.weatherData.location.name;
      this.domElements.location.region.textContent =
        this.weatherData.location.region;
      this.domElements.location.country.textContent =
        this.weatherData.location.country;
      this.domElements.location.localtime.textContent = this.parseDate(
        this.weatherData.location.localtime,
      );
    };
    const renderCurrent = () => {
      this.domElements.current.feelslike.textContent = `${this.weatherData.current.feelslike_c} °C`;
      this.domElements.current.humidity.textContent = `${this.weatherData.current.humidity} %`;
      this.domElements.current.wind_kph.textContent = `${this.weatherData.current.wind_kph} km/h`;
      const currentConditionCode = this.weatherData.current.condition.code;
      var currentConditionIcon = weatherIconMap[currentConditionCode];
      const dayOrNight = this.weatherData.current.is_day ? "day" : "night";

      console.log("Current condition icon: " + currentConditionIcon);
      console.log("Day or night: " + dayOrNight);
      currentConditionIcon =
        currentConditionIcon === "partly_cloudy"
          ? "partly_cloudy_" + dayOrNight
          : currentConditionIcon;
      this.domElements.currentIcon.innerText = currentConditionIcon;
    };

    renderLocation();
    renderCurrent();
  }

  setLocation(city) {
    this.link = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${city}`;
  }

  async init() {
    await fetchLocation()
      .then((coords) => {
        this.lat = coords.latitude;
        this.lon = coords.longitude;
        this.link = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.lat},${this.lon}`;
      })
      .catch((error) => {
        console.log(error);
        this.lat = 53.4084;
        this.lon = 2.9916;
      });
    this.link = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.lat},${this.lon}`;
    this.weatherData = await this.getWeather();
    this.render();
  }

  async update() {
    try {
      this.weatherData = await this.getWeather();
    } catch (error) {
      console.log(error);
    }
    this.render();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherAPI);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");


// import "./styles/theme/styles.scss";



document.addEventListener("DOMContentLoaded", () => {
  new _App__WEBPACK_IMPORTED_MODULE_2__["default"]();
});


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_normalize_css_normalize_css"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywwYUFBMGEsVUFBVSxVQUFVLFVBQVUsYUFBYSxjQUFjLFdBQVcsTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLFlBQVksYUFBYSxlQUFlLE9BQU8sTUFBTSxXQUFXLGFBQWEsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLFdBQVcsS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FB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O1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1dDaERBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5zY3NzPzRjMzciLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy93ZWF0aGVyLWFwaS9XZWF0aGVyQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLFxuYm9keSB7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIFNlcmlmXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjE3MmE7XG4gIGNvbG9yOiAjZjFmNWY5O1xufVxuXG5wLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA5Mzc1cmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMy43NXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzMTI1cmVtO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDByZW07XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAyLjEyNXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDE1NjI1cmVtO1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMHJlbTtcbn1cblxuaDYge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjAwOTM3NXJlbTtcbn1cblxuYSB7XG4gIGNvbG9yOiB2YXIoLS1zbGF0ZS01MCk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaHIge1xuICB3aWR0aDogOTUlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWY1Zjk7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBjb2xvciAwLjNzO1xufVxuXG4uY2FyZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggM3B4LCByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAxcHggMnB4O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuLmNhcmQgLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jYXJkIC5jYXJkLWJvZHkge1xuICBmb250LXNpemU6IDFyZW07XG59XG4uY2FyZCAuY2FyZC1ib2R5IGEge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmJ1dHRvbi1zb2xpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XG59XG4uYnV0dG9uLXNvbGlkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uYnV0dG9uLXNvbGlkOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmJ1dHRvbi1zb2xpZDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWMyZGE7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGNvbG9yOiAjYWFjMmRhO1xufVxuXG4uYnV0dG9uLW91dGxpbmVkIHtcbiAgYm9yZGVyLWNvbG9yOiAjYWFjMmRhO1xuICBjb2xvcjogI2FhYzJkYTtcbn1cbi5idXR0b24tb3V0bGluZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjI4ZmJjO1xufVxuLmJ1dHRvbi1vdXRsaW5lZDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODZhOWNiO1xufVxuLmJ1dHRvbi1vdXRsaW5lZDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWMyZGE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tc2xhdGUtODAwKSwgdmFyKC0tc2xhdGUtOTAwKSk7XG59XG5cbmhlYWRlciB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI2hvbWUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbn1cblxuLnNlYXJjaC1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWY1Zjk7XG59XG4uc2VhcmNoLWJhcjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG4uc2VhcmNoLWJhciBpbnB1dCB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cbi5zZWFyY2gtYmFyIGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1mZy1jb2xvcik7XG59XG5cbmZvb3RlciB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5mb3JtI3NlYXJjaCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5sb2NhdGlvbiB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuYnV0dG9uLFxuZmllbGRzZXQsXG5pbnB1dCxcbmxlZ2VuZCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlucHV0W3R5cGU9cmFkaW9dLFxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBoZWlnaHQ6IDEuNWVtO1xuICB3aWR0aDogMS41ZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBDaGVja2JveCAqL1xuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEuMTVlbTtcbiAgaGVpZ2h0OiAxLjE1ZW07XG4gIGJvcmRlcjogMC4xZW0gc29saWQgI2YxZjVmOTtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDAuNjVlbTtcbiAgaGVpZ2h0OiAwLjY1ZW07XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDE0JSA0NCUsIDAgNjUlLCA1MCUgMTAwJSwgMTAwJSAxNiUsIDgwJSAwJSwgNDMlIDYyJSk7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQ6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmZvY3VzIHtcbiAgb3V0bGluZTogbWF4KDJweCwgMC4xNWVtKSBzb2xpZCBjdXJyZW50Q29sb3I7XG4gIG91dGxpbmUtb2Zmc2V0OiBtYXgoMnB4LCAwLjE1ZW0pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTQwMCk7XG59XG5cbi8qIEJ1dHRvbnMgKi9cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6IHZhcigtLWZnLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgcGFkZGluZzogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgY29sb3IgMC4zcztcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTUwKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC03MDApO1xufVxuYnV0dG9uW3R5cGU9c3VibWl0XSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5idXR0b25bdHlwZT1zdWJtaXRdOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIxMywgNzMlLCA0MCUpO1xufVxuYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtNTAwKTtcbn1cbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCB2YXIoLS1jb2xvci1uZXV0cmFsLTQwMCk7XG59XG5cbmlucHV0OmZvY3VzLFxuc2VsZWN0OmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICAvKiBPZmZzZXQgdGhlIHNoYWRvdyBieSB0aGUgYm9yZGVyIHdpZHRoICovXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCB2YXIoLS1jb2xvci1uZXV0cmFsLTQwMCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXCJGSUxMXCIgMSwgXCJ3Z2h0XCIgNDAwLCBcIkdSQURcIiAwLCBcIm9wc3pcIiAyNDtcbn1cblxubWFpbiB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWFpbl9fY29udGFpbmVyIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImN1cnJlbnQtY29uZGl0aW9uIGN1cnJlbnQtY29uZGl0aW9uXCIgXCJjdXJyZW50LWxvY2F0aW9uIGN1cnJlbnQtZGV0YWlsc1wiO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwMHB4IDFmcjtcbiAgZ3JpZC1nYXA6IDVyZW07XG59XG4ubWFpbl9fY29udGFpbmVyICNjb25kaXRpb24taWNvbiB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBncmlkLWFyZWE6IGN1cnJlbnQtY29uZGl0aW9uO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBmb250LXNpemU6IDVyZW07XG59XG4ubWFpbl9fY29udGFpbmVyIC5sb2NhdGlvbiB7XG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gIGdyaWQtYXJlYTogY3VycmVudC1sb2NhdGlvbjtcbn1cbi5tYWluX19jb250YWluZXIgLmN1cnJlbnQge1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGdyaWQtYXJlYTogY3VycmVudC1kZXRhaWxzO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgZ3JpZC1nYXA6IDFyZW07XG59XG4ubWFpbl9fY29udGFpbmVyIC5jdXJyZW50X19pY29uIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4ubWFpbl9fY29udGFpbmVyIC5jdXJyZW50X19lbGVtZW50LWNvbnRhaW5lciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3RoZW1lL2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy90aGVtZS92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3RoZW1lL2NvbXBvbmVudHMvY2FyZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3RoZW1lL2NvbXBvbmVudHMvYnV0dG9ucy9zb2xpZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3RoZW1lL2NvbXBvbmVudHMvYnV0dG9ucy9vdXRsaW5lZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dsb2JhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUNDeUNnQjtFRHhDaEIseUJDTGlCO0VETWpCLGNDTFE7QUNNVjs7QUZFQTs7Ozs7OztFQU9FLFNBQUE7RUFDQSxVQUFBO0FFQ0Y7O0FGRUE7RUFDRSxlQUFBO0VBQ0EsMkJBQUE7QUVDRjs7QUZFQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7QUVDRjs7QUZFQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBRUNGOztBRkVBO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtBRUNGOztBRkVBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBRUNGOztBRkVBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtBRUNGOztBRkVBO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtBRUNGOztBRkdBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBRUFGOztBRk1BO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQzFDbUI7RUQ0Q25CLGtDQUFB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QTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkZBQ0U7RUFFRiw2QkFBQTtFQUNBLGNBQUE7QUEyUkY7QUF6UkU7RUFDRSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBRUEsZUFBQTtBQTBSSjtBQXZSRTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7QUF5Uko7QUF0UkU7RUFDRSx3QkFBQTtFQUNBLDBCQUFBO0VBRUEsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBQXVSSjtBQXBSRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQXNSSjtBQW5SRTtFQUNFLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQW9SSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogJGJhc2UtZm9udC1zdGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xcbiAgY29sb3I6ICRwcmltYXJ5O1xcbn1cXG5cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wOTM3NXJlbTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAzLjc1cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzMTI1cmVtO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMHJlbTtcXG59XFxuXFxuaDQge1xcbiAgZm9udC1zaXplOiAyLjEyNXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxNTYyNXJlbTtcXG59XFxuXFxuaDUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMHJlbTtcXG59XFxuXFxuaDYge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDA5Mzc1cmVtO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB2YXIoLS1zbGF0ZS01MCk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8vIGhvcml6b250YWwgcnVsZVxcbmhyIHtcXG4gIHdpZHRoOiA5NSU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeTtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbn1cXG5cXG5cXG5cXG4vLyBCVVRUT05TXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogJGJhc2UtcGFkZGluZyAkYmFzZS1wYWRkaW5nICogMjtcXG4gIGJvcmRlci1yYWRpdXM6ICRiYXNlLWJvcmRlci1yYWRpdXM7XFxuXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjpcXG4gICAgYmFja2dyb3VuZC1jb2xvciAwLjNzLFxcbiAgICBjb2xvciAwLjNzO1xcbn1cXG5cIixcIi8vIHRoZW1lIGNvbG9yc1xcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxNzJhO1xcbiRwcmltYXJ5OiAjZjFmNWY5O1xcbiRzZWNvbmRhcnk6ICMwQzJCMUU7XFxuJGVycm9yOiAjZDMyNzUyO1xcbiRpbmZvOiAjZjZjMzFjO1xcbiR0aGVtZTogJ2RhcmsnO1xcblxcbi8vIGNvbG9yIHBhbGxldGVcXG4kY29sb3JzOiAoXFxuICBcXFwicHJpbWFyeVxcXCI6ICRwcmltYXJ5LFxcbiAgXFxcInNlY29uZGFyeVxcXCI6ICRzZWNvbmRhcnksXFxuICBcXFwiZXJyb3JcXFwiOiAkZXJyb3IsXFxuICBcXFwiaW5mb1xcXCI6ICRpbmZvLFxcbiAgXFxcImJsdWVcXFwiOiAjMTkxOWU2LFxcbiAgXFxcInJlZFxcXCI6ICNlNjE5MTksXFxuICBcXFwieWVsbG93XFxcIjogI2U2ZTYxOSxcXG4gIFxcXCJncmVlblxcXCI6ICMxOWU2MzUsXFxuICBcXFwib3JhbmdlXFxcIjogI2ZmYTYwMCxcXG4gIFxcXCJwdXJwbGVcXFwiOiAjOTkwMGZmLFxcbiAgXFxcImdyYXlcXFwiOiAjODA4MDgwLFxcbiAgXFxcImJsYWNrXFxcIjogYmxhY2ssXFxuICBcXFwid2hpdGVcXFwiOiB3aGl0ZSxcXG4pO1xcblxcblxcbi8vIHNwYWNpbmdcXG4kYmFzZS1wYWRkaW5nOiAwLjc1cmVtO1xcbiRiYXNlLW1hcmdpbjogMC43NXJlbTtcXG5cXG4vLyBib3JkZXJzXFxuJGJhc2UtYm9yZGVyLXRoaWNrbmVzczogMXB4O1xcbiRiYXNlLWJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuJGJhc2UtYm9yZGVyLWNvbG9yOiAjZDhkOGQ4O1xcblxcbi8vIGJveC1zaGFkb3dcXG4kYmFzZS1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggM3B4LCByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAxcHggMnB4O1xcblxcbi8vIGZvbnQgc2l6ZXNcXG4kYmFzZS1mb250LXNpemU6IDFyZW07XFxuJGZvbnQtc2l6ZS1zbTogJGJhc2UtZm9udC1zaXplICogMC43NTtcXG4kZm9udC1zaXplLWxnOiAkYmFzZS1mb250LXNpemUgKiAxLjU7XFxuJGZvbnQtc2l6ZS14bDogJGJhc2UtZm9udC1zaXplICogMjtcXG4kZm9udC1zaXplLXh4bDogJGJhc2UtZm9udC1zaXplICogMztcXG5cXG4vLyBmb250IHN0YWNrXFxuJGJhc2UtZm9udC1zdGFjazogJ1JvYm90byBTZXJpZicsIHNhbnMtc2VyaWY7XFxuXCIsXCJAaW1wb3J0IFxcXCJ0aGVtZS9zdHlsZXNcXFwiO1xcbkBpbXBvcnQgXFxcImdsb2JhbFxcXCI7XFxuQGltcG9ydCBcXFwic3R5bGVcXFwiO1xcblxcbi5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAgIFxcXCJGSUxMXFxcIiAxLFxcbiAgICBcXFwid2dodFxcXCIgNDAwLFxcbiAgICBcXFwiR1JBRFxcXCIgMCxcXG4gICAgXFxcIm9wc3pcXFwiIDI0O1xcbn1cXG5cXG5tYWluIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbl9fY29udGFpbmVyIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiY3VycmVudC1jb25kaXRpb24gY3VycmVudC1jb25kaXRpb25cXFwiXFxuICAgIFxcXCJjdXJyZW50LWxvY2F0aW9uIGN1cnJlbnQtZGV0YWlsc1xcXCI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwMHB4IDFmcjtcXG4gIGdyaWQtZ2FwOiA1cmVtO1xcblxcbiAgI2NvbmRpdGlvbi1pY29uIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGdyaWQtYXJlYTogY3VycmVudC1jb25kaXRpb247XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuXFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gIH1cXG5cXG4gIC5sb2NhdGlvbiB7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgIGdyaWQtYXJlYTogY3VycmVudC1sb2NhdGlvbjtcXG4gIH1cXG5cXG4gIC5jdXJyZW50IHtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBncmlkLWFyZWE6IGN1cnJlbnQtZGV0YWlscztcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICAgIGdyaWQtZ2FwOiAxcmVtO1xcbiAgfVxcblxcbiAgLmN1cnJlbnRfX2ljb24ge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jdXJyZW50X19lbGVtZW50LWNvbnRhaW5lciB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICB9XFxufVxcblwiLFwiQHVzZSAnc2FzczptYXRoJztcXG5cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6ICRiYXNlLXBhZGRpbmc7XFxuICBib3JkZXI6ICRiYXNlLWJvcmRlci10aGlja25lc3Mgc29saWQgJGJhc2UtYm9yZGVyLWNvbG9yO1xcbiAgYm94LXNoYWRvdzogJGJhc2UtYm94LXNoYWRvdztcXG4gIGJvcmRlci1yYWRpdXM6ICRiYXNlLWJvcmRlci1yYWRpdXM7XFxuXFxuICAuY2FyZC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogJGJhc2UtcGFkZGluZztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuXFxuICAuY2FyZC1ib2R5IHtcXG4gICAgZm9udC1zaXplOiAkYmFzZS1mb250LXNpemU7XFxuXFxuICAgIGEge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiLmJ1dHRvbi1zb2xpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcXG5cXG4gIEBpZiAkdGhlbWUgPT0nZGFyaycge1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRwcmltYXJ5LCAxMCUpO1xcbiAgICB9XFxuXFxuICAgICY6YWN0aXZlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRwcmltYXJ5LCAyMCUpO1xcbiAgICB9XFxuXFxuICAgICY6ZGlzYWJsZWQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkcHJpbWFyeSwgMjAlKTtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICAgIGNvbG9yOiBkYXJrZW4oJHByaW1hcnksIDIwJSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBlbHNlIHtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwcmltYXJ5LCAxMCUpO1xcbiAgICB9XFxuXFxuICAgICY6YWN0aXZlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHByaW1hcnksIDIwJSk7XFxuICAgIH1cXG5cXG4gICAgJjpkaXNhYmxlZCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcHJpbWFyeSwgMjAlKTtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICAgIGNvbG9yOiBkYXJrZW4oJHByaW1hcnksIDIwJSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIuYnV0dG9uLW91dGxpbmVkIHtcXG4gIGJvcmRlci1jb2xvcjogZGFya2VuKCRwcmltYXJ5LCAyMCUpO1xcbiAgY29sb3I6IGRhcmtlbigkcHJpbWFyeSwgMjAlKTtcXG5cXG4gIEBpZiAkdGhlbWUgPT0nZGFyaycge1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHByaW1hcnksIDQwJSk7XFxuICAgIH1cXG5cXG4gICAgJjphY3RpdmUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkcHJpbWFyeSwgMzAlKTtcXG4gICAgfVxcblxcbiAgICAmOmRpc2FibGVkIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHByaW1hcnksIDIwJSk7XFxuICAgICAgY29sb3I6IGxpZ2h0ZW4oJHByaW1hcnksIDIwJSk7XFxuXFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgfVxcbiAgfVxcblxcbiAgQGVsc2Uge1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRwcmltYXJ5LCA0MCUpO1xcbiAgICB9XFxuXFxuICAgICY6YWN0aXZlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRwcmltYXJ5LCAzMCUpO1xcbiAgICB9XFxuXFxuICAgICY6ZGlzYWJsZWQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJHByaW1hcnksIDIwJSk7XFxuICAgICAgY29sb3I6IGxpZ2h0ZW4oJHByaW1hcnksIDIwJSk7XFxuXFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgfVxcbiAgfVxcblxcbn1cXG5cIixcImJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXNsYXRlLTgwMCksIHZhcigtLXNsYXRlLTkwMCkpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcGFkZGluZzogMXJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jaG9tZS1pY29uIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0ZW4oJHByaW1hcnksIDIwJSk7XFxuICB9XFxuXFxuICBpbnB1dCB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIH1cXG5cXG4gIGJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB2YXIoLS1mZy1jb2xvcik7XFxuICB9XFxufVxcblxcblxcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZm9ybSNzZWFyY2gge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXCIsXCJidXR0b24sXFxuZmllbGRzZXQsXFxuaW5wdXQsXFxubGVnZW5kLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdLFxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgaGVpZ2h0OiAxLjVlbTtcXG4gIHdpZHRoOiAxLjVlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4vKiBDaGVja2JveCAqL1xcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogMS4xNWVtO1xcbiAgaGVpZ2h0OiAxLjE1ZW07XFxuICBib3JkZXI6IDAuMWVtIHNvbGlkICRwcmltYXJ5O1xcblxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMC42NWVtO1xcbiAgaGVpZ2h0OiAwLjY1ZW07XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgLy8gYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1hY2NlbnQtY29sb3IpO1xcblxcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmZvY3VzIHtcXG4gIG91dGxpbmU6IG1heCgycHgsIDAuMTVlbSkgc29saWQgY3VycmVudENvbG9yO1xcbiAgb3V0bGluZS1vZmZzZXQ6IG1heCgycHgsIDAuMTVlbSk7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTQwMCk7XFxufVxcblxcbi8qIEJ1dHRvbnMgKi9cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjb2xvcjogdmFyKC0tZmctY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjpcXG4gICAgYmFja2dyb3VuZC1jb2xvciAwLjNzLFxcbiAgICBjb2xvciAwLjNzO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTUwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC03MDApO1xcbiAgfVxcblxcbiAgJlt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMTMsIDczJSwgNDAlKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgJjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTUwMCk7XFxuICB9XFxuXFxuICAmOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLWNvbG9yLW5ldXRyYWwtNDAwKTtcXG4gIH1cXG5cXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICAvKiBPZmZzZXQgdGhlIHNoYWRvdyBieSB0aGUgYm9yZGVyIHdpZHRoICovXFxuICBib3gtc2hhZG93OiAwIDAgMCAycHggdmFyKC0tY29sb3ItbmV1dHJhbC00MDApO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgV2VhdGhlckFQSSBmcm9tIFwiLi9jb21wb25lbnRzL3dlYXRoZXItYXBpL1dlYXRoZXJBUElcIjtcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy53ZWF0aGVyQVBJID0gbmV3IFdlYXRoZXJBUEkoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc29sZS5sb2coXCJBcHAgaW5pdGlhbGl6ZWRcIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiY29uc3Qgd2VhdGhlckljb25NYXAgPSB7XG4gIDEwMDA6IFwic3VubnlcIiwgLy8gb3IgJ25pZ2h0c19zdGF5JyBmb3IgbmlnaHQgQ2xlYXJcbiAgMTAwMzogXCJwYXJ0bHlfY2xvdWR5XCIsIC8vIFBhcnRseSBjbG91ZHlcbiAgMTAwNjogXCJjbG91ZFwiLCAvLyBDbG91ZHlcbiAgMTAwOTogXCJjbG91ZFwiLCAvLyBPdmVyY2FzdFxuICAxMDMwOiBcImZvZ2d5XCIsIC8vIE1pc3RcbiAgMTA2MzogXCJ1bWJyZWxsYVwiLCAvLyBQYXRjaHkgcmFpbiBwb3NzaWJsZVxuICAxMDY2OiBcImFjX3VuaXRcIiwgLy8gUGF0Y2h5IHNub3cgcG9zc2libGVcbiAgMTA2OTogXCJhY191bml0XCIsIC8vIFBhdGNoeSBzbGVldCBwb3NzaWJsZVxuICAxMDcyOiBcImFjX3VuaXRcIiwgLy8gUGF0Y2h5IGZyZWV6aW5nIGRyaXp6bGUgcG9zc2libGVcbiAgMTA4NzogXCJ0aHVuZGVyc3Rvcm1cIiwgLy8gVGh1bmRlcnkgb3V0YnJlYWtzIHBvc3NpYmxlXG4gIDExMTQ6IFwiYWNfdW5pdFwiLCAvLyBCbG93aW5nIHNub3dcbiAgMTExNzogXCJhY191bml0XCIsIC8vIEJsaXp6YXJkXG4gIDExMzU6IFwiZm9nZ3lcIiwgLy8gRm9nXG4gIDExNDc6IFwiZm9nZ3lcIiwgLy8gRnJlZXppbmcgZm9nXG4gIDExNTA6IFwiZ3JhaW5cIiwgLy8gUGF0Y2h5IGxpZ2h0IGRyaXp6bGVcbiAgMTE1MzogXCJncmFpblwiLCAvLyBMaWdodCBkcml6emxlXG4gIDExNjg6IFwiYWNfdW5pdFwiLCAvLyBGcmVlemluZyBkcml6emxlXG4gIDExNzE6IFwiYWNfdW5pdFwiLCAvLyBIZWF2eSBmcmVlemluZyBkcml6emxlXG4gIDExODA6IFwidW1icmVsbGFcIiwgLy8gUGF0Y2h5IGxpZ2h0IHJhaW5cbiAgMTE4MzogXCJ1bWJyZWxsYVwiLCAvLyBMaWdodCByYWluXG4gIDExODY6IFwidW1icmVsbGFcIiwgLy8gTW9kZXJhdGUgcmFpbiBhdCB0aW1lc1xuICAxMTg5OiBcInVtYnJlbGxhXCIsIC8vIE1vZGVyYXRlIHJhaW5cbiAgMTE5MjogXCJ1bWJyZWxsYVwiLCAvLyBIZWF2eSByYWluIGF0IHRpbWVzXG4gIDExOTU6IFwidW1icmVsbGFcIiwgLy8gSGVhdnkgcmFpblxuICAxMTk4OiBcImFjX3VuaXRcIiwgLy8gTGlnaHQgZnJlZXppbmcgcmFpblxuICAxMjAxOiBcImFjX3VuaXRcIiwgLy8gTW9kZXJhdGUgb3IgaGVhdnkgZnJlZXppbmcgcmFpblxuICAxMjA0OiBcImFjX3VuaXRcIiwgLy8gTGlnaHQgc2xlZXRcbiAgMTIwNzogXCJhY191bml0XCIsIC8vIE1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0XG4gIDEyMTA6IFwiYWNfdW5pdFwiLCAvLyBQYXRjaHkgbGlnaHQgc25vd1xuICAxMjEzOiBcImFjX3VuaXRcIiwgLy8gTGlnaHQgc25vd1xuICAxMjE2OiBcImFjX3VuaXRcIiwgLy8gUGF0Y2h5IG1vZGVyYXRlIHNub3dcbiAgMTIxOTogXCJhY191bml0XCIsIC8vIE1vZGVyYXRlIHNub3dcbiAgMTIyMjogXCJhY191bml0XCIsIC8vIFBhdGNoeSBoZWF2eSBzbm93XG4gIDEyMjU6IFwiYWNfdW5pdFwiLCAvLyBIZWF2eSBzbm93XG4gIDEyMzc6IFwiYWNfdW5pdFwiLCAvLyBJY2UgcGVsbGV0c1xuICAxMjQwOiBcInVtYnJlbGxhXCIsIC8vIExpZ2h0IHJhaW4gc2hvd2VyXG4gIDEyNDM6IFwidW1icmVsbGFcIiwgLy8gTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXJcbiAgMTI0NjogXCJ1bWJyZWxsYVwiLCAvLyBUb3JyZW50aWFsIHJhaW4gc2hvd2VyXG4gIDEyNDk6IFwiYWNfdW5pdFwiLCAvLyBMaWdodCBzbGVldCBzaG93ZXJzXG4gIDEyNTI6IFwiYWNfdW5pdFwiLCAvLyBNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCBzaG93ZXJzXG4gIDEyNTU6IFwiYWNfdW5pdFwiLCAvLyBMaWdodCBzbm93IHNob3dlcnNcbiAgMTI1ODogXCJhY191bml0XCIsIC8vIE1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgc2hvd2Vyc1xuICAxMjYxOiBcImFjX3VuaXRcIiwgLy8gTGlnaHQgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1xuICAxMjY0OiBcImFjX3VuaXRcIiwgLy8gTW9kZXJhdGUgb3IgaGVhdnkgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1xuICAxMjczOiBcInRodW5kZXJzdG9ybVwiLCAvLyBQYXRjaHkgbGlnaHQgcmFpbiB3aXRoIHRodW5kZXJcbiAgMTI3NjogXCJ0aHVuZGVyc3Rvcm1cIiwgLy8gTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiB3aXRoIHRodW5kZXJcbiAgMTI3OTogXCJ0aHVuZGVyc3Rvcm1cIiwgLy8gUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyXG4gIDEyODI6IFwidGh1bmRlcnN0b3JtXCIsIC8vIE1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgd2l0aCB0aHVuZGVyXG59O1xuXG5mdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlamVjdChcIkdlb2xvY2F0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyBicm93c2VyLlwiKTtcbiAgICB9XG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaExvY2F0aW9uKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gYXdhaXQgZ2V0TG9jYXRpb24oKTtcbiAgICByZXR1cm4gcG9zaXRpb24uY29vcmRzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuXG5jbGFzcyBXZWF0aGVyQVBJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcGlLZXkgPSBcImUyMjM4OGYwNzcxZDQ5MGZhYjc3NDYyNTI0MDgwMVwiO1xuXG4gICAgdGhpcy5kb21FbGVtZW50cyA9IHtcbiAgICAgIGN1cnJlbnRJY29uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmRpdGlvbi1pY29uXCIpLFxuXG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICBuYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uX19uYW1lXCIpLFxuICAgICAgICByZWdpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25fX3JlZ2lvblwiKSxcbiAgICAgICAgY291bnRyeTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvbl9fY291bnRyeVwiKSxcbiAgICAgICAgbG9jYWx0aW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uX19sb2NhbHRpbWVcIiksXG4gICAgICB9LFxuICAgICAgY3VycmVudDoge1xuICAgICAgICAvLyAgIHRlbXBfYzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50X190ZW1wLWNcIiksXG4gICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgIHRleHQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudF9fY29uZGl0aW9uLXRleHRcIiksXG4gICAgICAgICAgY29kZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50X19jb25kaXRpb24tY29kZVwiKSxcbiAgICAgICAgfSxcbiAgICAgICAgd2luZF9rcGg6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luZC1rcGhcIiksXG4gICAgICAgIGh1bWlkaXR5OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImh1bWlkaXR5XCIpLFxuICAgICAgICBmZWVsc2xpa2U6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHNsaWtlXCIpLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHNldEludGVydmFsKHRoaXMudXBkYXRlLmJpbmQodGhpcyksIDEwMDAgKiAxMCk7IC8vIDEwIHNlY29uZHNcbiAgfVxuXG4gIGdldFdlYXRoZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy5saW5rLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcGFyc2VEYXRlKGRhdGVTdHJpbmcpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG4gICAgcmV0dXJuIGAke2RhdGUudG9EYXRlU3RyaW5nKCl9LCAke2RhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9YDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCByZW5kZXJMb2NhdGlvbiA9ICgpID0+IHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudHMubG9jYXRpb24ubmFtZS50ZXh0Q29udGVudCA9XG4gICAgICAgIHRoaXMud2VhdGhlckRhdGEubG9jYXRpb24ubmFtZTtcbiAgICAgIHRoaXMuZG9tRWxlbWVudHMubG9jYXRpb24ucmVnaW9uLnRleHRDb250ZW50ID1cbiAgICAgICAgdGhpcy53ZWF0aGVyRGF0YS5sb2NhdGlvbi5yZWdpb247XG4gICAgICB0aGlzLmRvbUVsZW1lbnRzLmxvY2F0aW9uLmNvdW50cnkudGV4dENvbnRlbnQgPVxuICAgICAgICB0aGlzLndlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnk7XG4gICAgICB0aGlzLmRvbUVsZW1lbnRzLmxvY2F0aW9uLmxvY2FsdGltZS50ZXh0Q29udGVudCA9IHRoaXMucGFyc2VEYXRlKFxuICAgICAgICB0aGlzLndlYXRoZXJEYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcbiAgICAgICk7XG4gICAgfTtcbiAgICBjb25zdCByZW5kZXJDdXJyZW50ID0gKCkgPT4ge1xuICAgICAgdGhpcy5kb21FbGVtZW50cy5jdXJyZW50LmZlZWxzbGlrZS50ZXh0Q29udGVudCA9IGAke3RoaXMud2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfY30gwrBDYDtcbiAgICAgIHRoaXMuZG9tRWxlbWVudHMuY3VycmVudC5odW1pZGl0eS50ZXh0Q29udGVudCA9IGAke3RoaXMud2VhdGhlckRhdGEuY3VycmVudC5odW1pZGl0eX0gJWA7XG4gICAgICB0aGlzLmRvbUVsZW1lbnRzLmN1cnJlbnQud2luZF9rcGgudGV4dENvbnRlbnQgPSBgJHt0aGlzLndlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9rcGh9IGttL2hgO1xuICAgICAgY29uc3QgY3VycmVudENvbmRpdGlvbkNvZGUgPSB0aGlzLndlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmNvZGU7XG4gICAgICB2YXIgY3VycmVudENvbmRpdGlvbkljb24gPSB3ZWF0aGVySWNvbk1hcFtjdXJyZW50Q29uZGl0aW9uQ29kZV07XG4gICAgICBjb25zdCBkYXlPck5pZ2h0ID0gdGhpcy53ZWF0aGVyRGF0YS5jdXJyZW50LmlzX2RheSA/IFwiZGF5XCIgOiBcIm5pZ2h0XCI7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCBjb25kaXRpb24gaWNvbjogXCIgKyBjdXJyZW50Q29uZGl0aW9uSWNvbik7XG4gICAgICBjb25zb2xlLmxvZyhcIkRheSBvciBuaWdodDogXCIgKyBkYXlPck5pZ2h0KTtcbiAgICAgIGN1cnJlbnRDb25kaXRpb25JY29uID1cbiAgICAgICAgY3VycmVudENvbmRpdGlvbkljb24gPT09IFwicGFydGx5X2Nsb3VkeVwiXG4gICAgICAgICAgPyBcInBhcnRseV9jbG91ZHlfXCIgKyBkYXlPck5pZ2h0XG4gICAgICAgICAgOiBjdXJyZW50Q29uZGl0aW9uSWNvbjtcbiAgICAgIHRoaXMuZG9tRWxlbWVudHMuY3VycmVudEljb24uaW5uZXJUZXh0ID0gY3VycmVudENvbmRpdGlvbkljb247XG4gICAgfTtcblxuICAgIHJlbmRlckxvY2F0aW9uKCk7XG4gICAgcmVuZGVyQ3VycmVudCgpO1xuICB9XG5cbiAgc2V0TG9jYXRpb24oY2l0eSkge1xuICAgIHRoaXMubGluayA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7dGhpcy5hcGlLZXl9JnE9JHtjaXR5fWA7XG4gIH1cblxuICBhc3luYyBpbml0KCkge1xuICAgIGF3YWl0IGZldGNoTG9jYXRpb24oKVxuICAgICAgLnRoZW4oKGNvb3JkcykgPT4ge1xuICAgICAgICB0aGlzLmxhdCA9IGNvb3Jkcy5sYXRpdHVkZTtcbiAgICAgICAgdGhpcy5sb24gPSBjb29yZHMubG9uZ2l0dWRlO1xuICAgICAgICB0aGlzLmxpbmsgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke3RoaXMuYXBpS2V5fSZxPSR7dGhpcy5sYXR9LCR7dGhpcy5sb259YDtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgdGhpcy5sYXQgPSA1My40MDg0O1xuICAgICAgICB0aGlzLmxvbiA9IDIuOTkxNjtcbiAgICAgIH0pO1xuICAgIHRoaXMubGluayA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7dGhpcy5hcGlLZXl9JnE9JHt0aGlzLmxhdH0sJHt0aGlzLmxvbn1gO1xuICAgIHRoaXMud2VhdGhlckRhdGEgPSBhd2FpdCB0aGlzLmdldFdlYXRoZXIoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLndlYXRoZXJEYXRhID0gYXdhaXQgdGhpcy5nZXRXZWF0aGVyKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyQVBJO1xuIiwiaW1wb3J0IFwibm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuLy8gaW1wb3J0IFwiLi9zdHlsZXMvdGhlbWUvc3R5bGVzLnNjc3NcIjtcblxuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBuZXcgQXBwKCk7XG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b2RvX2xpc3RcIl0gPSBzZWxmW1wid2VicGFja0NodW5rdG9kb19saXN0XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX25vcm1hbGl6ZV9jc3Nfbm9ybWFsaXplX2Nzc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9