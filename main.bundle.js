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
.main__container #condition-text {
  display: none;
}
.main__container .location {
  justify-self: flex-end;
  grid-area: current-location;
  width: clamp(200px, 30vw, 400px);
}
.main__container .current {
  justify-self: flex-start;
  grid-area: current-details;
  width: clamp(200px, 30vw, 400px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.main__container .current__element-container {
  display: grid;
  grid-template-columns: 2rem auto;
  grid-template-areas: "icon text" "icon value";
  grid-gap: 0.75rem 1.5rem;
}
.main__container .current__element-container .current__text {
  grid-area: text;
}
.main__container .current__element-container .current__value {
  grid-area: value;
}
.main__container .current__element-container .current__icon {
  grid-area: icon;
  font-size: 2rem;
  align-self: center;
}`, "",{"version":3,"sources":["webpack://./src/styles/theme/base.scss","webpack://./src/styles/theme/variables.scss","webpack://./src/styles/index.scss","webpack://./src/styles/theme/components/card.scss","webpack://./src/styles/theme/components/buttons/solid.scss","webpack://./src/styles/theme/components/buttons/outlined.scss","webpack://./src/styles/global.scss","webpack://./src/styles/style.scss"],"names":[],"mappings":"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","sourcesContent":["html,\nbody {\n  padding: 0;\n  width: 100vw;\n  height: 100vh;\n  font-family: $base-font-stack;\n  background-color: $background-color;\n  color: $primary;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\n\nh1 {\n  font-size: 6rem;\n  letter-spacing: -0.09375rem;\n}\n\nh2 {\n  font-size: 3.75rem;\n  letter-spacing: -0.03125rem;\n}\n\nh3 {\n  font-size: 3rem;\n  letter-spacing: 0rem;\n}\n\nh4 {\n  font-size: 2.125rem;\n  letter-spacing: 0.015625rem;\n}\n\nh5 {\n  font-size: 1.5rem;\n  letter-spacing: 0rem;\n}\n\nh6 {\n  font-size: 1.25rem;\n  letter-spacing: 0.009375rem;\n}\n\na {\n  color: var(--slate-50);\n  text-decoration: none;\n}\n\n// horizontal rule\nhr {\n  width: 95%;\n  border-radius: 8px;\n  border: 1px solid $primary;\n  margin: 1rem auto;\n}\n\n\n\n// BUTTONS\nbutton {\n  background-color: transparent;\n  border: none;\n  text-decoration: none;\n  cursor: pointer;\n  display: inline-block;\n  padding: $base-padding $base-padding * 2;\n  border-radius: $base-border-radius;\n\n  transition: color 0.2s ease-in-out;\n  transition:\n    background-color 0.3s,\n    color 0.3s;\n}\n","// theme colors\n$background-color: #0f172a;\n$primary: #f1f5f9;\n$secondary: #0C2B1E;\n$error: #d32752;\n$info: #f6c31c;\n$theme: 'dark';\n\n// color pallete\n$colors: (\n  \"primary\": $primary,\n  \"secondary\": $secondary,\n  \"error\": $error,\n  \"info\": $info,\n  \"blue\": #1919e6,\n  \"red\": #e61919,\n  \"yellow\": #e6e619,\n  \"green\": #19e635,\n  \"orange\": #ffa600,\n  \"purple\": #9900ff,\n  \"gray\": #808080,\n  \"black\": black,\n  \"white\": white,\n);\n\n\n// spacing\n$base-padding: 0.75rem;\n$base-margin: 0.75rem;\n\n// borders\n$base-border-thickness: 1px;\n$base-border-radius: 0.25rem;\n$base-border-color: #d8d8d8;\n\n// box-shadow\n$base-box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n\n// font sizes\n$base-font-size: 1rem;\n$font-size-sm: $base-font-size * 0.75;\n$font-size-lg: $base-font-size * 1.5;\n$font-size-xl: $base-font-size * 2;\n$font-size-xxl: $base-font-size * 3;\n\n// font stack\n$base-font-stack: 'Roboto Serif', sans-serif;\n","@import \"theme/styles\";\n@import \"global\";\n@import \"style\";\n\n.material-symbols-rounded {\n  font-variation-settings:\n    \"FILL\" 1,\n    \"wght\" 400,\n    \"GRAD\" 0,\n    \"opsz\" 24;\n}\n\nmain {\n  padding: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.main__container {\n  flex-grow: 1;\n  display: grid;\n  grid-template-areas:\n    \"current-condition current-condition\"\n    \"current-location current-details\";\n  grid-template-rows: 200px 1fr;\n  grid-gap: 5rem;\n\n  #condition-icon {\n    align-self: flex-end;\n    grid-area: current-condition;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n\n    font-size: 5rem;\n  }\n\n  #condition-text {\n    display: none;\n  }\n\n  .location {\n    justify-self: flex-end;\n    grid-area: current-location;\n    width: clamp(200px, 30vw, 400px);\n  }\n\n  .current {\n    justify-self: flex-start;\n    grid-area: current-details;\n    width: clamp(200px, 30vw, 400px);\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n\n\n  .current__element-container {\n    display: grid;\n    grid-template-columns: 2rem auto;\n    grid-template-areas:\n      \"icon text\"\n      \"icon value\";\n\n    grid-gap: $base-font-size * .75 $base-font-size*1.5;\n\n    .current__text {\n      grid-area: text;\n    }\n\n    .current__value {\n      grid-area: value;\n    }\n\n    .current__icon {\n      grid-area: icon;\n      font-size: $base-font-size * 2;\n      align-self: center;\n    }\n  }\n}\n","@use 'sass:math';\n\n.card {\n  display: block;\n  padding: $base-padding;\n  border: $base-border-thickness solid $base-border-color;\n  box-shadow: $base-box-shadow;\n  border-radius: $base-border-radius;\n\n  .card-title {\n    font-size: $base-font-size;\n    padding-bottom: $base-padding;\n    font-weight: bold;\n  }\n\n  .card-body {\n    font-size: $base-font-size;\n\n    a {\n      text-decoration: underline;\n    }\n  }\n}\n",".button-solid {\n  background-color: $primary;\n\n  @if $theme =='dark' {\n\n    &:hover {\n      background-color: lighten($primary, 10%);\n    }\n\n    &:active {\n      background-color: lighten($primary, 20%);\n    }\n\n    &:disabled {\n      background-color: darken($primary, 20%);\n      cursor: not-allowed;\n      color: darken($primary, 20%);\n    }\n  }\n\n  @else {\n    &:hover {\n      background-color: darken($primary, 10%);\n    }\n\n    &:active {\n      background-color: darken($primary, 20%);\n    }\n\n    &:disabled {\n      background-color: lighten($primary, 20%);\n      cursor: not-allowed;\n      color: darken($primary, 20%);\n    }\n  }\n}\n",".button-outlined {\n  border-color: darken($primary, 20%);\n  color: darken($primary, 20%);\n\n  @if $theme =='dark' {\n    &:hover {\n      background-color: darken($primary, 40%);\n    }\n\n    &:active {\n      background-color: darken($primary, 30%);\n    }\n\n    &:disabled {\n      background-color: darken($primary, 20%);\n      color: lighten($primary, 20%);\n\n      cursor: not-allowed;\n    }\n  }\n\n  @else {\n\n    &:hover {\n      background-color: lighten($primary, 40%);\n    }\n\n    &:active {\n      background-color: lighten($primary, 30%);\n    }\n\n    &:disabled {\n      background-color: lighten($primary, 20%);\n      color: lighten($primary, 20%);\n\n      cursor: not-allowed;\n    }\n  }\n\n}\n","body {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  background-image: linear-gradient(135deg, var(--slate-800), var(--slate-900));\n}\n\nheader {\n  padding: 1rem;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n#home-icon {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n}\n\n.search-bar {\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n\n  border-radius: 1rem;\n  border: 1px solid $primary;\n\n  &:hover {\n    border-color: lighten($primary, 20%);\n  }\n\n  input {\n    padding: 0.5rem;\n    border-radius: 1rem;\n  }\n\n  button {\n    border-radius: 1rem;\n    border: none;\n    background-color: transparent;\n    color: var(--fg-color);\n  }\n}\n\n\n\nfooter {\n  padding: 1rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nform#search {\n  display: grid;\n}\n\n.location {\n  padding: 1rem;\n\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n","button,\nfieldset,\ninput,\nlegend,\nselect,\ntextarea {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: transparent;\n  color: inherit;\n  border: none;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  height: 1.5em;\n  width: 1.5em;\n  vertical-align: middle;\n}\n\ninput[type=\"radio\"] {\n  border-radius: 50%;\n}\n\n/* Checkbox */\ninput[type=\"checkbox\"] {\n  background-color: transparent;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.1em solid $primary;\n\n  justify-self: center;\n  align-self: center;\n\n  display: grid;\n  place-content: center;\n}\n\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  // box-shadow: inset 1em 1em var(--accent-color);\n\n  transform-origin: center center;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: scale(1);\n}\n\ninput[type=\"checkbox\"]:focus {\n  outline: max(2px, 0.15em) solid currentColor;\n  outline-offset: max(2px, 0.15em);\n\n  cursor: pointer;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: var(--color-neutral-400);\n}\n\n/* Buttons */\nbutton {\n  background-color: transparent;\n  border: none;\n  border-radius: 8px;\n  color: var(--fg-color);\n  font-family: inherit;\n  font-size: inherit;\n  padding: 4px;\n  cursor: pointer;\n\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-start;\n\n  transition: color 0.2s ease-in-out;\n  transition:\n    background-color 0.3s,\n    color 0.3s;\n\n  &:hover {\n    color: var(--color-neutral-50);\n    background-color: var(--color-neutral-700);\n  }\n\n  &[type=\"submit\"] {\n    background-color: var(--accent-color);\n\n    &:hover {\n      background-color: hsl(213, 73%, 40%);\n    }\n  }\n\n  &:active {\n    background-color: var(--color-neutral-500);\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px var(--color-neutral-400);\n  }\n\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus {\n  outline: none;\n  /* Offset the shadow by the border width */\n  box-shadow: 0 0 0 2px var(--color-neutral-400);\n  border-radius: 0.25rem;\n}\n"],"sourceRoot":""}]);
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

class WeatherAPI {
  constructor() {
    this.apiKey = "e22388f0771d490fab774625240801";
    this.location = "London";

    this.domElements = {
      currentIcon: document.getElementById("condition-icon"),
      searchButton: document.getElementById("search-button"),

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

  bindKeyEvents() {
    this.domElements.searchButton.addEventListener("click", (e) => {
      e.preventDefault();
      const city = document.getElementById("city").value;
      console.log("City: " + city);
      this.setLocation(city);
      this.update();
    });
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
    this.link = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.location}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDBhQUEwYSxVQUFVLFVBQVUsVUFBVSxhQUFhLGNBQWMsV0FBVyxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksWUFBWSxhQUFhLGVBQWUsT0FBTyxNQUFNLFdBQVcsYUFBYSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sV0FBVyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFB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QUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NoREE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/NGMzNyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvQXBwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3dlYXRoZXItYXBpL1dlYXRoZXJBUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsXG5ib2R5IHtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gU2VyaWZcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTcyYTtcbiAgY29sb3I6ICNmMWY1Zjk7XG59XG5cbnAsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA2cmVtO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDkzNzVyZW07XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzLjc1cmVtO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDMxMjVyZW07XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBsZXR0ZXItc3BhY2luZzogMHJlbTtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDIuMTI1cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMTU2MjVyZW07XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwcmVtO1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDA5Mzc1cmVtO1xufVxuXG5hIHtcbiAgY29sb3I6IHZhcigtLXNsYXRlLTUwKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5ociB7XG4gIHdpZHRoOiA5NSU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjVmOTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGNvbG9yIDAuM3M7XG59XG5cbi5jYXJkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCAzcHgsIHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDFweCAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG4uY2FyZCAuY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNhcmQgLmNhcmQtYm9keSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5jYXJkIC5jYXJkLWJvZHkgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uYnV0dG9uLXNvbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcbn1cbi5idXR0b24tc29saWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5idXR0b24tc29saWQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uYnV0dG9uLXNvbGlkOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYzJkYTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgY29sb3I6ICNhYWMyZGE7XG59XG5cbi5idXR0b24tb3V0bGluZWQge1xuICBib3JkZXItY29sb3I6ICNhYWMyZGE7XG4gIGNvbG9yOiAjYWFjMmRhO1xufVxuLmJ1dHRvbi1vdXRsaW5lZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MjhmYmM7XG59XG4uYnV0dG9uLW91dGxpbmVkOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NmE5Y2I7XG59XG4uYnV0dG9uLW91dGxpbmVkOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYzJkYTtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1zbGF0ZS04MDApLCB2YXIoLS1zbGF0ZS05MDApKTtcbn1cblxuaGVhZGVyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4jaG9tZS1pY29uIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4uc2VhcmNoLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjVmOTtcbn1cbi5zZWFyY2gtYmFyOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cbi5zZWFyY2gtYmFyIGlucHV0IHtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuLnNlYXJjaC1iYXIgYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWZnLWNvbG9yKTtcbn1cblxuZm9vdGVyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmZvcm0jc2VhcmNoIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmxvY2F0aW9uIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG5idXR0b24sXG5maWVsZHNldCxcbmlucHV0LFxubGVnZW5kLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW5wdXRbdHlwZT1yYWRpb10sXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGhlaWdodDogMS41ZW07XG4gIHdpZHRoOiAxLjVlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIENoZWNrYm94ICovXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMS4xNWVtO1xuICBoZWlnaHQ6IDEuMTVlbTtcbiAgYm9yZGVyOiAwLjFlbSBzb2xpZCAjZjFmNWY5O1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMC42NWVtO1xuICBoZWlnaHQ6IDAuNjVlbTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMTQlIDQ0JSwgMCA2NSUsIDUwJSAxMDAlLCAxMDAlIDE2JSwgODAlIDAlLCA0MyUgNjIlKTtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZDo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF06Zm9jdXMge1xuICBvdXRsaW5lOiBtYXgoMnB4LCAwLjE1ZW0pIHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgb3V0bGluZS1vZmZzZXQ6IG1heCgycHgsIDAuMTVlbSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtNDAwKTtcbn1cblxuLyogQnV0dG9ucyAqL1xuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogdmFyKC0tZmctY29sb3IpO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBwYWRkaW5nOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBjb2xvciAwLjNzO1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtNTApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTcwMCk7XG59XG5idXR0b25bdHlwZT1zdWJtaXRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cbmJ1dHRvblt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjEzLCA3MyUsIDQwJSk7XG59XG5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC01MDApO1xufVxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLWNvbG9yLW5ldXRyYWwtNDAwKTtcbn1cblxuaW5wdXQ6Zm9jdXMsXG5zZWxlY3Q6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC8qIE9mZnNldCB0aGUgc2hhZG93IGJ5IHRoZSBib3JkZXIgd2lkdGggKi9cbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLWNvbG9yLW5ldXRyYWwtNDAwKTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCB7XG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcIkZJTExcIiAxLCBcIndnaHRcIiA0MDAsIFwiR1JBRFwiIDAsIFwib3BzelwiIDI0O1xufVxuXG5tYWluIHtcbiAgcGFkZGluZzogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tYWluX19jb250YWluZXIge1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiY3VycmVudC1jb25kaXRpb24gY3VycmVudC1jb25kaXRpb25cIiBcImN1cnJlbnQtbG9jYXRpb24gY3VycmVudC1kZXRhaWxzXCI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggMWZyO1xuICBncmlkLWdhcDogNXJlbTtcbn1cbi5tYWluX19jb250YWluZXIgI2NvbmRpdGlvbi1pY29uIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIGdyaWQtYXJlYTogY3VycmVudC1jb25kaXRpb247XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIGZvbnQtc2l6ZTogNXJlbTtcbn1cbi5tYWluX19jb250YWluZXIgI2NvbmRpdGlvbi10ZXh0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tYWluX19jb250YWluZXIgLmxvY2F0aW9uIHtcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgZ3JpZC1hcmVhOiBjdXJyZW50LWxvY2F0aW9uO1xuICB3aWR0aDogY2xhbXAoMjAwcHgsIDMwdncsIDQwMHB4KTtcbn1cbi5tYWluX19jb250YWluZXIgLmN1cnJlbnQge1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGdyaWQtYXJlYTogY3VycmVudC1kZXRhaWxzO1xuICB3aWR0aDogY2xhbXAoMjAwcHgsIDMwdncsIDQwMHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5tYWluX19jb250YWluZXIgLmN1cnJlbnRfX2VsZW1lbnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAycmVtIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaWNvbiB0ZXh0XCIgXCJpY29uIHZhbHVlXCI7XG4gIGdyaWQtZ2FwOiAwLjc1cmVtIDEuNXJlbTtcbn1cbi5tYWluX19jb250YWluZXIgLmN1cnJlbnRfX2VsZW1lbnQtY29udGFpbmVyIC5jdXJyZW50X190ZXh0IHtcbiAgZ3JpZC1hcmVhOiB0ZXh0O1xufVxuLm1haW5fX2NvbnRhaW5lciAuY3VycmVudF9fZWxlbWVudC1jb250YWluZXIgLmN1cnJlbnRfX3ZhbHVlIHtcbiAgZ3JpZC1hcmVhOiB2YWx1ZTtcbn1cbi5tYWluX19jb250YWluZXIgLmN1cnJlbnRfX2VsZW1lbnQtY29udGFpbmVyIC5jdXJyZW50X19pY29uIHtcbiAgZ3JpZC1hcmVhOiBpY29uO1xuICBmb250LXNpemU6IDJyZW07XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdGhlbWUvYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3RoZW1lL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdGhlbWUvY29tcG9uZW50cy9jYXJkLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdGhlbWUvY29tcG9uZW50cy9idXR0b25zL3NvbGlkLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdGhlbWUvY29tcG9uZW50cy9idXR0b25zL291dGxpbmVkLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2xvYmFsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10s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QUFBO0FBZ1JOO0FBN1FJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQStRTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogJGJhc2UtZm9udC1zdGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xcbiAgY29sb3I6ICRwcmltYXJ5O1xcbn1cXG5cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wOTM3NXJlbTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAzLjc1cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzMTI1cmVtO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMHJlbTtcXG59XFxuXFxuaDQge1xcbiAgZm9udC1zaXplOiAyLjEyNXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxNTYyNXJlbTtcXG59XFxuXFxuaDUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMHJlbTtcXG59XFxuXFxuaDYge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDA5Mzc1cmVtO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB2YXIoLS1zbGF0ZS01MCk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8vIGhvcml6b250YWwgcnVsZVxcbmhyIHtcXG4gIHdpZHRoOiA5NSU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeTtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbn1cXG5cXG5cXG5cXG4vLyBCVVRUT05TXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogJGJhc2UtcGFkZGluZyAkYmFzZS1wYWRkaW5nICogMjtcXG4gIGJvcmRlci1yYWRpdXM6ICRiYXNlLWJvcmRlci1yYWRpdXM7XFxuXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjpcXG4gICAgYmFja2dyb3VuZC1jb2xvciAwLjNzLFxcbiAgICBjb2xvciAwLjNzO1xcbn1cXG5cIixcIi8vIHRoZW1lIGNvbG9yc1xcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxNzJhO1xcbiRwcmltYXJ5OiAjZjFmNWY5O1xcbiRzZWNvbmRhcnk6ICMwQzJCMUU7XFxuJGVycm9yOiAjZDMyNzUyO1xcbiRpbmZvOiAjZjZjMzFjO1xcbiR0aGVtZTogJ2RhcmsnO1xcblxcbi8vIGNvbG9yIHBhbGxldGVcXG4kY29sb3JzOiAoXFxuICBcXFwicHJpbWFyeVxcXCI6ICRwcmltYXJ5LFxcbiAgXFxcInNlY29uZGFyeVxcXCI6ICRzZWNvbmRhcnksXFxuICBcXFwiZXJyb3JcXFwiOiAkZXJyb3IsXFxuICBcXFwiaW5mb1xcXCI6ICRpbmZvLFxcbiAgXFxcImJsdWVcXFwiOiAjMTkxOWU2LFxcbiAgXFxcInJlZFxcXCI6ICNlNjE5MTksXFxuICBcXFwieWVsbG93XFxcIjogI2U2ZTYxOSxcXG4gIFxcXCJncmVlblxcXCI6ICMxOWU2MzUsXFxuICBcXFwib3JhbmdlXFxcIjogI2ZmYTYwMCxcXG4gIFxcXCJwdXJwbGVcXFwiOiAjOTkwMGZmLFxcbiAgXFxcImdyYXlcXFwiOiAjODA4MDgwLFxcbiAgXFxcImJsYWNrXFxcIjogYmxhY2ssXFxuICBcXFwid2hpdGVcXFwiOiB3aGl0ZSxcXG4pO1xcblxcblxcbi8vIHNwYWNpbmdcXG4kYmFzZS1wYWRkaW5nOiAwLjc1cmVtO1xcbiRiYXNlLW1hcmdpbjogMC43NXJlbTtcXG5cXG4vLyBib3JkZXJzXFxuJGJhc2UtYm9yZGVyLXRoaWNrbmVzczogMXB4O1xcbiRiYXNlLWJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuJGJhc2UtYm9yZGVyLWNvbG9yOiAjZDhkOGQ4O1xcblxcbi8vIGJveC1zaGFkb3dcXG4kYmFzZS1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggM3B4LCByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAxcHggMnB4O1xcblxcbi8vIGZvbnQgc2l6ZXNcXG4kYmFzZS1mb250LXNpemU6IDFyZW07XFxuJGZvbnQtc2l6ZS1zbTogJGJhc2UtZm9udC1zaXplICogMC43NTtcXG4kZm9udC1zaXplLWxnOiAkYmFzZS1mb250LXNpemUgKiAxLjU7XFxuJGZvbnQtc2l6ZS14bDogJGJhc2UtZm9udC1zaXplICogMjtcXG4kZm9udC1zaXplLXh4bDogJGJhc2UtZm9udC1zaXplICogMztcXG5cXG4vLyBmb250IHN0YWNrXFxuJGJhc2UtZm9udC1zdGFjazogJ1JvYm90byBTZXJpZicsIHNhbnMtc2VyaWY7XFxuXCIsXCJAaW1wb3J0IFxcXCJ0aGVtZS9zdHlsZXNcXFwiO1xcbkBpbXBvcnQgXFxcImdsb2JhbFxcXCI7XFxuQGltcG9ydCBcXFwic3R5bGVcXFwiO1xcblxcbi5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQge1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAgIFxcXCJGSUxMXFxcIiAxLFxcbiAgICBcXFwid2dodFxcXCIgNDAwLFxcbiAgICBcXFwiR1JBRFxcXCIgMCxcXG4gICAgXFxcIm9wc3pcXFwiIDI0O1xcbn1cXG5cXG5tYWluIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbl9fY29udGFpbmVyIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiY3VycmVudC1jb25kaXRpb24gY3VycmVudC1jb25kaXRpb25cXFwiXFxuICAgIFxcXCJjdXJyZW50LWxvY2F0aW9uIGN1cnJlbnQtZGV0YWlsc1xcXCI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwMHB4IDFmcjtcXG4gIGdyaWQtZ2FwOiA1cmVtO1xcblxcbiAgI2NvbmRpdGlvbi1pY29uIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGdyaWQtYXJlYTogY3VycmVudC1jb25kaXRpb247XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuXFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gIH1cXG5cXG4gICNjb25kaXRpb24tdGV4dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubG9jYXRpb24ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICBncmlkLWFyZWE6IGN1cnJlbnQtbG9jYXRpb247XFxuICAgIHdpZHRoOiBjbGFtcCgyMDBweCwgMzB2dywgNDAwcHgpO1xcbiAgfVxcblxcbiAgLmN1cnJlbnQge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGdyaWQtYXJlYTogY3VycmVudC1kZXRhaWxzO1xcbiAgICB3aWR0aDogY2xhbXAoMjAwcHgsIDMwdncsIDQwMHB4KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG5cXG5cXG4gIC5jdXJyZW50X19lbGVtZW50LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMnJlbSBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgIFxcXCJpY29uIHRleHRcXFwiXFxuICAgICAgXFxcImljb24gdmFsdWVcXFwiO1xcblxcbiAgICBncmlkLWdhcDogJGJhc2UtZm9udC1zaXplICogLjc1ICRiYXNlLWZvbnQtc2l6ZSoxLjU7XFxuXFxuICAgIC5jdXJyZW50X190ZXh0IHtcXG4gICAgICBncmlkLWFyZWE6IHRleHQ7XFxuICAgIH1cXG5cXG4gICAgLmN1cnJlbnRfX3ZhbHVlIHtcXG4gICAgICBncmlkLWFyZWE6IHZhbHVlO1xcbiAgICB9XFxuXFxuICAgIC5jdXJyZW50X19pY29uIHtcXG4gICAgICBncmlkLWFyZWE6IGljb247XFxuICAgICAgZm9udC1zaXplOiAkYmFzZS1mb250LXNpemUgKiAyO1xcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIkB1c2UgJ3Nhc3M6bWF0aCc7XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAkYmFzZS1wYWRkaW5nO1xcbiAgYm9yZGVyOiAkYmFzZS1ib3JkZXItdGhpY2tuZXNzIHNvbGlkICRiYXNlLWJvcmRlci1jb2xvcjtcXG4gIGJveC1zaGFkb3c6ICRiYXNlLWJveC1zaGFkb3c7XFxuICBib3JkZXItcmFkaXVzOiAkYmFzZS1ib3JkZXItcmFkaXVzO1xcblxcbiAgLmNhcmQtdGl0bGUge1xcbiAgICBmb250LXNpemU6ICRiYXNlLWZvbnQtc2l6ZTtcXG4gICAgcGFkZGluZy1ib3R0b206ICRiYXNlLXBhZGRpbmc7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcblxcbiAgLmNhcmQtYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplO1xcblxcbiAgICBhIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIi5idXR0b24tc29saWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XFxuXFxuICBAaWYgJHRoZW1lID09J2RhcmsnIHtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcHJpbWFyeSwgMTAlKTtcXG4gICAgfVxcblxcbiAgICAmOmFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcHJpbWFyeSwgMjAlKTtcXG4gICAgfVxcblxcbiAgICAmOmRpc2FibGVkIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHByaW1hcnksIDIwJSk7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgICBjb2xvcjogZGFya2VuKCRwcmltYXJ5LCAyMCUpO1xcbiAgICB9XFxuICB9XFxuXFxuICBAZWxzZSB7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkcHJpbWFyeSwgMTAlKTtcXG4gICAgfVxcblxcbiAgICAmOmFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwcmltYXJ5LCAyMCUpO1xcbiAgICB9XFxuXFxuICAgICY6ZGlzYWJsZWQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJHByaW1hcnksIDIwJSk7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgICBjb2xvcjogZGFya2VuKCRwcmltYXJ5LCAyMCUpO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiLmJ1dHRvbi1vdXRsaW5lZCB7XFxuICBib3JkZXItY29sb3I6IGRhcmtlbigkcHJpbWFyeSwgMjAlKTtcXG4gIGNvbG9yOiBkYXJrZW4oJHByaW1hcnksIDIwJSk7XFxuXFxuICBAaWYgJHRoZW1lID09J2RhcmsnIHtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwcmltYXJ5LCA0MCUpO1xcbiAgICB9XFxuXFxuICAgICY6YWN0aXZlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHByaW1hcnksIDMwJSk7XFxuICAgIH1cXG5cXG4gICAgJjpkaXNhYmxlZCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwcmltYXJ5LCAyMCUpO1xcbiAgICAgIGNvbG9yOiBsaWdodGVuKCRwcmltYXJ5LCAyMCUpO1xcblxcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBlbHNlIHtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcHJpbWFyeSwgNDAlKTtcXG4gICAgfVxcblxcbiAgICAmOmFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcHJpbWFyeSwgMzAlKTtcXG4gICAgfVxcblxcbiAgICAmOmRpc2FibGVkIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRwcmltYXJ5LCAyMCUpO1xcbiAgICAgIGNvbG9yOiBsaWdodGVuKCRwcmltYXJ5LCAyMCUpO1xcblxcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIH1cXG4gIH1cXG5cXG59XFxuXCIsXCJib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1zbGF0ZS04MDApLCB2YXIoLS1zbGF0ZS05MDApKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2hvbWUtaWNvbiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLnNlYXJjaC1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnk7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCRwcmltYXJ5LCAyMCUpO1xcbiAgfVxcblxcbiAgaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB9XFxuXFxuICBidXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogdmFyKC0tZmctY29sb3IpO1xcbiAgfVxcbn1cXG5cXG5cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogMXJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvcm0jc2VhcmNoIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblwiLFwiYnV0dG9uLFxcbmZpZWxkc2V0LFxcbmlucHV0LFxcbmxlZ2VuZCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGhlaWdodDogMS41ZW07XFxuICB3aWR0aDogMS41ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLyogQ2hlY2tib3ggKi9cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDEuMTVlbTtcXG4gIGhlaWdodDogMS4xNWVtO1xcbiAgYm9yZGVyOiAwLjFlbSBzb2xpZCAkcHJpbWFyeTtcXG5cXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDAuNjVlbTtcXG4gIGhlaWdodDogMC42NWVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gIC8vIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tYWNjZW50LWNvbG9yKTtcXG5cXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMTQlIDQ0JSwgMCA2NSUsIDUwJSAxMDAlLCAxMDAlIDE2JSwgODAlIDAlLCA0MyUgNjIlKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpmb2N1cyB7XFxuICBvdXRsaW5lOiBtYXgoMnB4LCAwLjE1ZW0pIHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIG91dGxpbmUtb2Zmc2V0OiBtYXgoMnB4LCAwLjE1ZW0pO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC00MDApO1xcbn1cXG5cXG4vKiBCdXR0b25zICovXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY29sb3I6IHZhcigtLWZnLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246XFxuICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyxcXG4gICAgY29sb3IgMC4zcztcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC01MCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW5ldXRyYWwtNzAwKTtcXG4gIH1cXG5cXG4gICZbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjEzLCA3MyUsIDQwJSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gICY6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbmV1dHJhbC01MDApO1xcbiAgfVxcblxcbiAgJjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB2YXIoLS1jb2xvci1uZXV0cmFsLTQwMCk7XFxuICB9XFxuXFxufVxcblxcbmlucHV0OmZvY3VzLFxcbnNlbGVjdDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgLyogT2Zmc2V0IHRoZSBzaGFkb3cgYnkgdGhlIGJvcmRlciB3aWR0aCAqL1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLWNvbG9yLW5ldXRyYWwtNDAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFdlYXRoZXJBUEkgZnJvbSBcIi4vY29tcG9uZW50cy93ZWF0aGVyLWFwaS9XZWF0aGVyQVBJXCI7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMud2VhdGhlckFQSSA9IG5ldyBXZWF0aGVyQVBJKCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnNvbGUubG9nKFwiQXBwIGluaXRpYWxpemVkXCIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImNvbnN0IHdlYXRoZXJJY29uTWFwID0ge1xuICAxMDAwOiBcInN1bm55XCIsIC8vIG9yICduaWdodHNfc3RheScgZm9yIG5pZ2h0IENsZWFyXG4gIDEwMDM6IFwicGFydGx5X2Nsb3VkeVwiLCAvLyBQYXJ0bHkgY2xvdWR5XG4gIDEwMDY6IFwiY2xvdWRcIiwgLy8gQ2xvdWR5XG4gIDEwMDk6IFwiY2xvdWRcIiwgLy8gT3ZlcmNhc3RcbiAgMTAzMDogXCJmb2dneVwiLCAvLyBNaXN0XG4gIDEwNjM6IFwidW1icmVsbGFcIiwgLy8gUGF0Y2h5IHJhaW4gcG9zc2libGVcbiAgMTA2NjogXCJhY191bml0XCIsIC8vIFBhdGNoeSBzbm93IHBvc3NpYmxlXG4gIDEwNjk6IFwiYWNfdW5pdFwiLCAvLyBQYXRjaHkgc2xlZXQgcG9zc2libGVcbiAgMTA3MjogXCJhY191bml0XCIsIC8vIFBhdGNoeSBmcmVlemluZyBkcml6emxlIHBvc3NpYmxlXG4gIDEwODc6IFwidGh1bmRlcnN0b3JtXCIsIC8vIFRodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZVxuICAxMTE0OiBcImFjX3VuaXRcIiwgLy8gQmxvd2luZyBzbm93XG4gIDExMTc6IFwiYWNfdW5pdFwiLCAvLyBCbGl6emFyZFxuICAxMTM1OiBcImZvZ2d5XCIsIC8vIEZvZ1xuICAxMTQ3OiBcImZvZ2d5XCIsIC8vIEZyZWV6aW5nIGZvZ1xuICAxMTUwOiBcImdyYWluXCIsIC8vIFBhdGNoeSBsaWdodCBkcml6emxlXG4gIDExNTM6IFwiZ3JhaW5cIiwgLy8gTGlnaHQgZHJpenpsZVxuICAxMTY4OiBcImFjX3VuaXRcIiwgLy8gRnJlZXppbmcgZHJpenpsZVxuICAxMTcxOiBcImFjX3VuaXRcIiwgLy8gSGVhdnkgZnJlZXppbmcgZHJpenpsZVxuICAxMTgwOiBcInVtYnJlbGxhXCIsIC8vIFBhdGNoeSBsaWdodCByYWluXG4gIDExODM6IFwidW1icmVsbGFcIiwgLy8gTGlnaHQgcmFpblxuICAxMTg2OiBcInVtYnJlbGxhXCIsIC8vIE1vZGVyYXRlIHJhaW4gYXQgdGltZXNcbiAgMTE4OTogXCJ1bWJyZWxsYVwiLCAvLyBNb2RlcmF0ZSByYWluXG4gIDExOTI6IFwidW1icmVsbGFcIiwgLy8gSGVhdnkgcmFpbiBhdCB0aW1lc1xuICAxMTk1OiBcInVtYnJlbGxhXCIsIC8vIEhlYXZ5IHJhaW5cbiAgMTE5ODogXCJhY191bml0XCIsIC8vIExpZ2h0IGZyZWV6aW5nIHJhaW5cbiAgMTIwMTogXCJhY191bml0XCIsIC8vIE1vZGVyYXRlIG9yIGhlYXZ5IGZyZWV6aW5nIHJhaW5cbiAgMTIwNDogXCJhY191bml0XCIsIC8vIExpZ2h0IHNsZWV0XG4gIDEyMDc6IFwiYWNfdW5pdFwiLCAvLyBNb2RlcmF0ZSBvciBoZWF2eSBzbGVldFxuICAxMjEwOiBcImFjX3VuaXRcIiwgLy8gUGF0Y2h5IGxpZ2h0IHNub3dcbiAgMTIxMzogXCJhY191bml0XCIsIC8vIExpZ2h0IHNub3dcbiAgMTIxNjogXCJhY191bml0XCIsIC8vIFBhdGNoeSBtb2RlcmF0ZSBzbm93XG4gIDEyMTk6IFwiYWNfdW5pdFwiLCAvLyBNb2RlcmF0ZSBzbm93XG4gIDEyMjI6IFwiYWNfdW5pdFwiLCAvLyBQYXRjaHkgaGVhdnkgc25vd1xuICAxMjI1OiBcImFjX3VuaXRcIiwgLy8gSGVhdnkgc25vd1xuICAxMjM3OiBcImFjX3VuaXRcIiwgLy8gSWNlIHBlbGxldHNcbiAgMTI0MDogXCJ1bWJyZWxsYVwiLCAvLyBMaWdodCByYWluIHNob3dlclxuICAxMjQzOiBcInVtYnJlbGxhXCIsIC8vIE1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gc2hvd2VyXG4gIDEyNDY6IFwidW1icmVsbGFcIiwgLy8gVG9ycmVudGlhbCByYWluIHNob3dlclxuICAxMjQ5OiBcImFjX3VuaXRcIiwgLy8gTGlnaHQgc2xlZXQgc2hvd2Vyc1xuICAxMjUyOiBcImFjX3VuaXRcIiwgLy8gTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQgc2hvd2Vyc1xuICAxMjU1OiBcImFjX3VuaXRcIiwgLy8gTGlnaHQgc25vdyBzaG93ZXJzXG4gIDEyNTg6IFwiYWNfdW5pdFwiLCAvLyBNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHNob3dlcnNcbiAgMTI2MTogXCJhY191bml0XCIsIC8vIExpZ2h0IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcbiAgMTI2NDogXCJhY191bml0XCIsIC8vIE1vZGVyYXRlIG9yIGhlYXZ5IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcbiAgMTI3MzogXCJ0aHVuZGVyc3Rvcm1cIiwgLy8gUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyXG4gIDEyNzY6IFwidGh1bmRlcnN0b3JtXCIsIC8vIE1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyXG4gIDEyNzk6IFwidGh1bmRlcnN0b3JtXCIsIC8vIFBhdGNoeSBsaWdodCBzbm93IHdpdGggdGh1bmRlclxuICAxMjgyOiBcInRodW5kZXJzdG9ybVwiLCAvLyBNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHdpdGggdGh1bmRlclxufTtcblxuY2xhc3MgV2VhdGhlckFQSSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXBpS2V5ID0gXCJlMjIzODhmMDc3MWQ0OTBmYWI3NzQ2MjUyNDA4MDFcIjtcbiAgICB0aGlzLmxvY2F0aW9uID0gXCJMb25kb25cIjtcblxuICAgIHRoaXMuZG9tRWxlbWVudHMgPSB7XG4gICAgICBjdXJyZW50SWNvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25kaXRpb24taWNvblwiKSxcbiAgICAgIHNlYXJjaEJ1dHRvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYnV0dG9uXCIpLFxuXG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICBuYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uX19uYW1lXCIpLFxuICAgICAgICByZWdpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25fX3JlZ2lvblwiKSxcbiAgICAgICAgY291bnRyeTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvbl9fY291bnRyeVwiKSxcbiAgICAgICAgbG9jYWx0aW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uX19sb2NhbHRpbWVcIiksXG4gICAgICB9LFxuICAgICAgY3VycmVudDoge1xuICAgICAgICAvLyAgIHRlbXBfYzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50X190ZW1wLWNcIiksXG4gICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgIHRleHQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudF9fY29uZGl0aW9uLXRleHRcIiksXG4gICAgICAgICAgY29kZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50X19jb25kaXRpb24tY29kZVwiKSxcbiAgICAgICAgfSxcbiAgICAgICAgd2luZF9rcGg6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luZC1rcGhcIiksXG4gICAgICAgIGh1bWlkaXR5OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImh1bWlkaXR5XCIpLFxuICAgICAgICBmZWVsc2xpa2U6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHNsaWtlXCIpLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5pbml0KCk7XG4gICAgc2V0SW50ZXJ2YWwodGhpcy51cGRhdGUuYmluZCh0aGlzKSwgMTAwMCAqIDEwKTsgLy8gMTAgc2Vjb25kc1xuICB9XG5cbiAgZ2V0V2VhdGhlciA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLmxpbmssIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBwYXJzZURhdGUoZGF0ZVN0cmluZykge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgICByZXR1cm4gYCR7ZGF0ZS50b0RhdGVTdHJpbmcoKX0sICR7ZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKX1gO1xuICB9XG5cbiAgYmluZEtleUV2ZW50cygpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnRzLnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHlcIikudmFsdWU7XG4gICAgICBjb25zb2xlLmxvZyhcIkNpdHk6IFwiICsgY2l0eSk7XG4gICAgICB0aGlzLnNldExvY2F0aW9uKGNpdHkpO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCByZW5kZXJMb2NhdGlvbiA9ICgpID0+IHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudHMubG9jYXRpb24ubmFtZS50ZXh0Q29udGVudCA9XG4gICAgICAgIHRoaXMud2VhdGhlckRhdGEubG9jYXRpb24ubmFtZTtcbiAgICAgIHRoaXMuZG9tRWxlbWVudHMubG9jYXRpb24ucmVnaW9uLnRleHRDb250ZW50ID1cbiAgICAgICAgdGhpcy53ZWF0aGVyRGF0YS5sb2NhdGlvbi5yZWdpb247XG4gICAgICB0aGlzLmRvbUVsZW1lbnRzLmxvY2F0aW9uLmNvdW50cnkudGV4dENvbnRlbnQgPVxuICAgICAgICB0aGlzLndlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnk7XG4gICAgICB0aGlzLmRvbUVsZW1lbnRzLmxvY2F0aW9uLmxvY2FsdGltZS50ZXh0Q29udGVudCA9IHRoaXMucGFyc2VEYXRlKFxuICAgICAgICB0aGlzLndlYXRoZXJEYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlckN1cnJlbnQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnRzLmN1cnJlbnQuZmVlbHNsaWtlLnRleHRDb250ZW50ID0gYCR7dGhpcy53ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jfSDCsENgO1xuICAgICAgdGhpcy5kb21FbGVtZW50cy5jdXJyZW50Lmh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7dGhpcy53ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5fSAlYDtcbiAgICAgIHRoaXMuZG9tRWxlbWVudHMuY3VycmVudC53aW5kX2twaC50ZXh0Q29udGVudCA9IGAke3RoaXMud2VhdGhlckRhdGEuY3VycmVudC53aW5kX2twaH0ga20vaGA7XG4gICAgICBjb25zdCBjdXJyZW50Q29uZGl0aW9uQ29kZSA9IHRoaXMud2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24uY29kZTtcbiAgICAgIHZhciBjdXJyZW50Q29uZGl0aW9uSWNvbiA9IHdlYXRoZXJJY29uTWFwW2N1cnJlbnRDb25kaXRpb25Db2RlXTtcbiAgICAgIGNvbnN0IGRheU9yTmlnaHQgPSB0aGlzLndlYXRoZXJEYXRhLmN1cnJlbnQuaXNfZGF5ID8gXCJkYXlcIiA6IFwibmlnaHRcIjtcblxuICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IGNvbmRpdGlvbiBpY29uOiBcIiArIGN1cnJlbnRDb25kaXRpb25JY29uKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGF5IG9yIG5pZ2h0OiBcIiArIGRheU9yTmlnaHQpO1xuICAgICAgY3VycmVudENvbmRpdGlvbkljb24gPVxuICAgICAgICBjdXJyZW50Q29uZGl0aW9uSWNvbiA9PT0gXCJwYXJ0bHlfY2xvdWR5XCJcbiAgICAgICAgICA/IFwicGFydGx5X2Nsb3VkeV9cIiArIGRheU9yTmlnaHRcbiAgICAgICAgICA6IGN1cnJlbnRDb25kaXRpb25JY29uO1xuICAgICAgdGhpcy5kb21FbGVtZW50cy5jdXJyZW50SWNvbi5pbm5lclRleHQgPSBjdXJyZW50Q29uZGl0aW9uSWNvbjtcbiAgICB9O1xuXG4gICAgcmVuZGVyTG9jYXRpb24oKTtcbiAgICByZW5kZXJDdXJyZW50KCk7XG4gIH1cblxuICBzZXRMb2NhdGlvbihjaXR5KSB7XG4gICAgdGhpcy5saW5rID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHt0aGlzLmFwaUtleX0mcT0ke2NpdHl9YDtcbiAgfVxuXG4gIGFzeW5jIGluaXQoKSB7XG4gICAgdGhpcy5saW5rID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHt0aGlzLmFwaUtleX0mcT0ke3RoaXMubG9jYXRpb259YDtcbiAgICB0aGlzLndlYXRoZXJEYXRhID0gYXdhaXQgdGhpcy5nZXRXZWF0aGVyKCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZSgpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy53ZWF0aGVyRGF0YSA9IGF3YWl0IHRoaXMuZ2V0V2VhdGhlcigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlckFQSTtcbiIsImltcG9ydCBcIm5vcm1hbGl6ZS5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbi8vIGltcG9ydCBcIi4vc3R5bGVzL3RoZW1lL3N0eWxlcy5zY3NzXCI7XG5cbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgbmV3IEFwcCgpO1xufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdG9kb19saXN0XCJdID0gc2VsZltcIndlYnBhY2tDaHVua3RvZG9fbGlzdFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19ub3JtYWxpemVfY3NzX25vcm1hbGl6ZV9jc3NcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==