webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Event.js":
/*!*****************************!*\
  !*** ./components/Event.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/scrotox/Documents/Courses/ReactJS/bitcoin/components/Event.js";


var Event = function Event() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "qwertyu");
};

/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ }),

/***/ "./components/Events.js":
/*!******************************!*\
  !*** ./components/Events.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Event */ "./components/Event.js");

var _jsxFileName = "/home/scrotox/Documents/Courses/ReactJS/bitcoin/components/Events.js";



var Events = function Events(props) {
  var eventsID = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(props.events);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "list-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, eventsID.map(function (key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Event__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: key,
      info: props.events[key],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ })

})
//# sourceMappingURL=index.js.161b844dd0b9a1207d1b.hot-update.js.map