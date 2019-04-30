webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/News.js":
/*!****************************!*\
  !*** ./components/News.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Article */ "./components/Article.js");
var _jsxFileName = "/home/scrotox/Documents/Courses/ReactJS/bitcoin/components/News.js";



var News = function News(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.news.articles.map(function (article) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Article__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: article.url,
      article: article,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ })

})
//# sourceMappingURL=index.js.1752bbe4ed5c73bf804f.hot-update.js.map