/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/_variables.scss":
/*!************************************!*\
  !*** ./src/styles/_variables.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://weather-app/./src/styles/_variables.scss?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://weather-app/./src/styles/styles.scss?");

/***/ }),

/***/ "./src/scripts/App.ts":
/*!****************************!*\
  !*** ./src/scripts/App.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _WeatherAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeatherAPI */ \"./src/scripts/WeatherAPI.ts\");\n/* harmony import */ var _Utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility */ \"./src/scripts/Utility.ts\");\n\r\n\r\nclass App {\r\n    weatherForm1;\r\n    weatherForm2;\r\n    weatherBox;\r\n    constructor(weatherForm1Selector, weatherForm2Selector, weatherBoxSelector) {\r\n        this.weatherForm1 = document.querySelector(weatherForm1Selector);\r\n        this.weatherForm2 = document.querySelector(weatherForm2Selector);\r\n        this.weatherBox = document.querySelector(weatherBoxSelector);\r\n    }\r\n    init() {\r\n        this.weatherForm1.addEventListener(\"submit\", async (e) => {\r\n            e.preventDefault();\r\n            const formInputs = this.getWeatherForm1Inputs();\r\n            // making sure all inputs are entered\r\n            if (formInputs.some((input) => !input.value)) {\r\n                return alert(\"Please enter all the fields.\");\r\n            }\r\n            const { value: location } = formInputs.find((input) => input.name === \"location\");\r\n            const weatherData = await _WeatherAPI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].weatherByLocation(location);\r\n            this.weatherBox.classList.remove(\"hidden\");\r\n            this.renderWeatherData(weatherData);\r\n        });\r\n        this.weatherForm2.addEventListener(\"submit\", async (e) => {\r\n            e.preventDefault();\r\n            const weatherData = await _WeatherAPI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].weatherByCurrentLocation();\r\n            this.weatherBox.classList.remove(\"hidden\");\r\n            this.renderWeatherData(weatherData);\r\n        });\r\n    }\r\n    renderWeatherData(weatherData) {\r\n        this.weatherBox.innerHTML = `\r\n            <h2>Location: ${weatherData.name}</h2>\r\n        `;\r\n        for (const stat in weatherData.main) {\r\n            const value = weatherData.main[stat];\r\n            this.weatherBox.innerHTML += `\r\n                <div class=\"component-stat-container\">\r\n                    <p class=\"component-stat-name\">${_Utility__WEBPACK_IMPORTED_MODULE_1__[\"default\"].snakeCaseToCamelCase(stat)}</p>\r\n                    <p>👉</p>\r\n                    <p class=\"component-stat-value\">${value}</p>\r\n                </div>\r\n            `;\r\n        }\r\n    }\r\n    getWeatherForm1Inputs() {\r\n        const inputs = Array.from(this.weatherForm1.querySelectorAll(\"input\"));\r\n        const prettyInputs = inputs.map((input) => ({\r\n            name: input.name,\r\n            value: input.value,\r\n        }));\r\n        return prettyInputs;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/App.ts?");

/***/ }),

/***/ "./src/scripts/Utility.ts":
/*!********************************!*\
  !*** ./src/scripts/Utility.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Utility)\n/* harmony export */ });\nclass Utility {\r\n    static snakeCaseToCamelCase(string) {\r\n        return string\r\n            .split(\"_\")\r\n            .map((sub) => sub[0].toUpperCase() + sub.slice(1))\r\n            .join(\" \");\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/Utility.ts?");

/***/ }),

/***/ "./src/scripts/WeatherAPI.ts":
/*!***********************************!*\
  !*** ./src/scripts/WeatherAPI.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WeatherAPI)\n/* harmony export */ });\nclass WeatherAPI {\r\n    static key = \"af609f14917fc7c5c84721ecf1f42f8a\";\r\n    static async weatherByCoordinates(coordinates) {\r\n        const { latitude, longitude } = coordinates;\r\n        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.key}&units=metric`);\r\n        return data.json();\r\n    }\r\n    static async weatherByCurrentLocation() {\r\n        const { coords } = await new Promise((resolve, reject) => {\r\n            navigator.geolocation.getCurrentPosition(resolve, reject);\r\n        });\r\n        return this.weatherByCoordinates({\r\n            latitude: coords.latitude,\r\n            longitude: coords.longitude,\r\n        });\r\n    }\r\n    static async weatherByLocation(location) {\r\n        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.key}&units=metric`);\r\n        return data.json();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/WeatherAPI.ts?");

/***/ }),

/***/ "./src/scripts/index.ts":
/*!******************************!*\
  !*** ./src/scripts/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_variables_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/_variables.scss */ \"./src/styles/_variables.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.scss */ \"./src/styles/styles.scss\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/scripts/App.ts\");\n\r\n\r\n\r\nconst app = new _App__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\".weather-form-enter-location\", \".weather-form-current-location\", \".weather-box\");\r\napp.init();\r\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/index.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.ts");
/******/ 	
/******/ })()
;