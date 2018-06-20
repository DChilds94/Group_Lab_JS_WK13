/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Request = __webpack_require__(1);
const bucketListView = __webpack_require__(2);

const bucketList = new BucketList();
const request = new Request("http://localhost:3000/api/bucketlist");

const appStart = function(){
  request.get(addCountryRequestComplete);
}

const addCountryRequestComplete = function(countryToAdd){
  bucketList.addCountryToList(countryToAdd);
}

const displayCountriesRequestComplete = function(allCountries){
  allCountries.forEach(function(quote){
    bucketList.addCountryToList(countryToAdd);
  });
}



window.listen("load", appStart);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

const Request = (url) => {
    this.url = url;
}

Request.prototype.get = (next) => {
    const request = new XMLHttpRequest();
    request.open("GET", this.url);
    request.addEventListener("load", () => {
        if (this.status !== 200) return;
        const responseBody = JSON.parse(this.response);
        next(responseBody);
    })
    request.send();
}

Request.prototype.post = (country, next) => {
    const request = XMLHttpRequest();
    request.open("POST", this.url);
    request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener("load", function(){
        if (this.status !== 201) return;
        const responseBody = JSON.parse(this.response);
        next(responseBody);
    });
    request.send(JSON.stringify(country));
}

Request.prototype.delete = (next) => {
    const request = new XMLHttpRequest();
    request.open("DELETE", this.url);
    request.addEventListener("load", () => {
        if (this.status !== 204) return;
        next();
    })
    request.send();
}

module.exports = Request;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const BucketList = function(){
  this.bucketList = [];
};

BucketList.prototype.addCountryToList = function(country) {
  this.bucketList.push(country);
  this.render(country);
}

BuckList.prototype.render = function (country) {
  const table = document.querySeletcor("#bucket-list")
  const tableRow = document.createElement("tr");
  const name = document.createElement('th');
  const population = document.createElement('th');
  const capitalCity = document.createElement('th');
  name.innerText = country.name;
  population.innerText = country.population;
  capitalCity.innerText = country.capital;
  tableRow.appendChild(name);
  tableRow.appendChild(population);
  tableRow.appendChild(capitalCity);
  table.appendChild(tableRow);
  };

modules.export = BuckList;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map