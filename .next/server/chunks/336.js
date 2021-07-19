exports.id = 336;
exports.ids = [336];
exports.modules = {

/***/ 1990:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Gallery; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6691);
/* harmony import */ var _styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_3__);





function Gallery(props) {
  // onClick method changes the main image to the thumbnail clicked
  let {
    0: main,
    1: setImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.images[1]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
    className: (_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_3___default().gallery),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: (_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
        src: main,
        alt: main.src
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: (_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_3___default().thumbnails),
      children: props.images.map(image => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Gallery_module_css__WEBPACK_IMPORTED_MODULE_3___default().thumbnail),
        onClick: () => setImage(image),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
          src: image,
          alt: image.src
        })
      }, props.images[image]))
    })]
  });
}

/***/ }),

/***/ 1552:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ServiceOverview; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_ServiceOverview_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2845);
/* harmony import */ var _styles_ServiceOverview_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_ServiceOverview_module_css__WEBPACK_IMPORTED_MODULE_1__);



function ServiceOverview(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
    className: (_styles_ServiceOverview_module_css__WEBPACK_IMPORTED_MODULE_1___default().service),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (_styles_ServiceOverview_module_css__WEBPACK_IMPORTED_MODULE_1___default().overivew),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        children: "Service overview"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: props.serviceOverview
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (_styles_ServiceOverview_module_css__WEBPACK_IMPORTED_MODULE_1___default().includes),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        children: "Service includes"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        children: props.serviceIncludes.map(serviceInclude => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: serviceInclude
        }, props.serviceIncludes[serviceInclude]))
      })]
    })]
  });
}

/***/ }),

/***/ 6691:
/***/ (function(module) {

// Exports
module.exports = {
	"gallery": "Gallery_gallery__ZxDqU",
	"thumbnails": "Gallery_thumbnails__1mZgo",
	"thumbnail": "Gallery_thumbnail__17ei1",
	"main": "Gallery_main__3MqGz"
};


/***/ }),

/***/ 2845:
/***/ (function(module) {

// Exports
module.exports = {
	"service": "ServiceOverview_service__1oWjR",
	"includes": "ServiceOverview_includes__1AVTw"
};


/***/ })

};
;