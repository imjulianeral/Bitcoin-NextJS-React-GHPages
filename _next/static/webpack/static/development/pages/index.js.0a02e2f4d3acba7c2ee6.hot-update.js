webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Article.js":
/*!*******************************!*\
  !*** ./components/Article.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/scrotox/Documents/Courses/ReactJS/bitcoin/components/Article.js";


var Article = function Article(props) {
  var _props$article = props.article,
      urlToImage = _props$article.urlToImage,
      url = _props$article.url,
      description = _props$article.description,
      source = _props$article.source,
      title = _props$article.title;
  var img;

  if (urlToImage !== '') {
    img = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: urlToImage,
      alt: title,
      className: "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }));
  } else {
    img = null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 col-12 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, img));
};

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ })

})
//# sourceMappingURL=index.js.0a02e2f4d3acba7c2ee6.hot-update.js.map