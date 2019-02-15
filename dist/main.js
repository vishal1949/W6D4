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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(arrHTML) {\n    this.arrHTML = arrHTML;\n    this.emptyStr = ' ';\n  }\n  html(string){\n    if(!string){\n      return this.arrHTML[0].innerHTML(); \n    }else{\n      this.arrHTML.forEach(element => {\n        element.innerHTML = string;\n      });\n    }\n  }\n  empty(){\n    this.html(\" \");\n  }\n  append(someEl){ //someElemenet\n    this.arrHTML.forEach(element => {\n      element.innerHTML += someEl;\n    });\n  }\n  \n  attr(attrName, val){ //if one then get value, if two set val\n    // debugger\n    if(!val){\n      return this.arrHTML[0][attrName] //calling the method with the name attrname\n    }else{\n      this.arrHTML.forEach(element => {\n        element[attrName] = val;\n      });\n    }\n  }\n  \n  addClass(classname){\n      this.attr(\"className\", classname )\n  }\n\n  removeClass(){\n    this.attr(\"className\", this.emptyStr);\n  }\n\n  children(){\n    const arr = [];\n\n    this.arrHTML.forEach(element => {\n      if (!(!element.children)){\n        arr.push(element.children);\n      }\n    });\n    \n    return new DOMNodeCollection(arr);\n  }\n\n  parent(){\n    const arr = [];\n    this.arrHTML.forEach(element => {\n      if (!(!element.parentElement)){\n        arr.push(element.parentElement);\n      }\n    });\n\n    return new DOMNodeCollection(arr);\n  }\n\n  find(selector) {\n    let children = this.arrHTML.children();\n    let searchResults = [];\n    \n    children.forEach(child => {\n      searchResults.push(child.querySelectorAll(selector));\n    });\n\n    return new DOMNodeCollection(searchResults)\n  };\n\n  remove() {\n    this.arrHTML.forEach(element => {\n      element.remove();\n    });\n  };\n};\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nwindow.$l = function(arg){\n  let array = [];\n\n  if (arg instanceof HTMLElement) {\n    array.push(arg);\n  }else{\n    const vals = document.querySelectorAll(arg); //nodeList\n    array = Array.from(vals);\n  }\n  return new DOMNodeCollection(array);\n}\n\n// const dom = $l(\".first-ul\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });