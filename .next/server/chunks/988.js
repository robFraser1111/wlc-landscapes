exports.id = 988;
exports.ids = [988];
exports.modules = {

/***/ 3308:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function ContactForm() {
  return /*#__PURE__*/_jsx("section", {
    className: styles.section,
    children: /*#__PURE__*/_jsxs("form", {
      className: styles.form,
      children: [/*#__PURE__*/_jsx("input", {
        type: "text",
        id: "name",
        name: "name",
        placeholder: "Name",
        required: true
      }), /*#__PURE__*/_jsx("input", {
        type: "text",
        id: "suburb",
        name: "suburb",
        placeholder: "Suburb",
        required: true
      }), /*#__PURE__*/_jsx("input", {
        type: "email",
        id: "email",
        name: "email",
        placeholder: "Email",
        required: true
      }), /*#__PURE__*/_jsx("input", {
        type: "text",
        id: "phone",
        name: "phone",
        placeholder: "Phone"
      }), /*#__PURE__*/_jsxs("select", {
        id: "contact",
        name: "contact",
        required: true,
        children: [/*#__PURE__*/_jsx("option", {
          value: "",
          children: "Preferred contact method"
        }), /*#__PURE__*/_jsx("option", {
          value: "email",
          children: "Email"
        }), /*#__PURE__*/_jsx("option", {
          value: "phone",
          children: "Phone"
        })]
      }), /*#__PURE__*/_jsxs("select", {
        id: "urgency",
        name: "urgency",
        required: true,
        children: [/*#__PURE__*/_jsx("option", {
          value: "",
          children: "Urgency"
        }), /*#__PURE__*/_jsx("option", {
          value: "asap",
          children: "As soon as possible"
        }), /*#__PURE__*/_jsx("option", {
          value: "next-month",
          children: "Next month"
        }), /*#__PURE__*/_jsx("option", {
          value: "not-urgent",
          children: "Not urgent"
        })]
      }), /*#__PURE__*/_jsx("textarea", {
        name: "message",
        rows: "10",
        cols: "30",
        placeholder: "Type of work required",
        required: true
      }), /*#__PURE__*/_jsx("button", {
        type: "button",
        children: "Submit"
      })]
    })
  });
}

/***/ }),

/***/ 3822:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Footer; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/facebook-square-brands.svg
/* harmony default export */ var facebook_square_brands = ({"src":"/_next/static/image/public/facebook-square-brands.4784233649c3878bdb5f838eb1760768.svg","height":512,"width":448});
;// CONCATENATED MODULE: ./public/instagram-brands.svg
/* harmony default export */ var instagram_brands = ({"src":"/_next/static/image/public/instagram-brands.f69d01330222dc16e2b7448b7963a241.svg","height":512,"width":448});
// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(647);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/footer.js






function Footer() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: (Footer_module_default()).footer,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Footer_module_default()).footerSocial,
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://www.facebook.com/wlclandscapes/",
        target: "_blank",
        rel: "noreferrer",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: facebook_square_brands,
          alt: "Facebook",
          width: 40,
          height: 40
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://www.instagram.com/wlclandscapes/",
        target: "_blank",
        rel: "noreferrer",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: instagram_brands,
          alt: "Instagram",
          width: 40,
          height: 40
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Footer_module_default()).footerContact,
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "mailto:wlclandscapes@gmail.com",
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "wlclandscapes@gmail.com"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\xA0\xA0|\xA0\xA0"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "tel:0419502546",
          children: "0419 502 546"
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "ABN 87 405 282 344"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://roo.digital",
        target: "_blank",
        rel: "noreferrer",
        children: "  Powered by RooDigital"
      })
    })]
  });
}

/***/ }),

/***/ 7007:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Header; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./public/wlc-logo-02.png
/* harmony default export */ var wlc_logo_02 = ({"src":"/_next/static/image/public/wlc-logo-02.6d6101de97492ba1e4827d11e10eb4b4.png","height":156,"width":152,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA9klEQVR42mNQKJB5bViq68UQy7CNIYahUK9Eu0G5UL6aAQgUC2RZGFQKFbYxpDAsuXbv6qPT105vZ4hk2OFc4+TCAAQaxapMDMalhvFABX+///z+/fKdy/8ZghiuMECBUoE8E4NnjbsSQzLD/9fvX/8/cuHIfwYthq0MGQzG1pWWugxw4MHg//X71w+PXj7637m0439qb8p9hmyGP+qFKmvgat5+fHPq45eP/z98+fD/2+9v0QwMDOoOVXZ5DCDAnMXAxgAEOqUaC+QKJP8blxvoKhXKJQI90MEAAgalBowMIJDKICGSx3dSNl/ivXyB9DflArk6AFVAWam2aMYzAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/envelope-solid.svg
/* harmony default export */ var envelope_solid = ({"src":"/_next/static/image/public/envelope-solid.19540afc25e2642659b801b3559455d9.svg","height":512,"width":512});
;// CONCATENATED MODULE: ./public/phone-alt-solid.svg
/* harmony default export */ var phone_alt_solid = ({"src":"/_next/static/image/public/phone-alt-solid.1f7eb5f4fe2cdc15f7a6a39fc9b0eab8.svg","height":512,"width":512});
;// CONCATENATED MODULE: ./public/bars-solid.svg
/* harmony default export */ var bars_solid = ({"src":"/_next/static/image/public/bars-solid.98464717bbc0e43dace3ac23e25ff1f0.svg","height":512,"width":448});
// EXTERNAL MODULE: ./styles/Menu.module.css
var Menu_module = __webpack_require__(4939);
var Menu_module_default = /*#__PURE__*/__webpack_require__.n(Menu_module);
;// CONCATENATED MODULE: ./components/menu.js










function Menu() {
  // Toggle the mobile menu visibity when called
  let {
    0: mobileMenu,
    1: toggleMobileMenu
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
    className: (Menu_module_default()).navigation,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Menu_module_default()).logo,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: wlc_logo_02,
          alt: "Logo",
          width: 152,
          height: 156
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Menu_module_default()).mobile,
      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => toggleMobileMenu(!mobileMenu),
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `${(Menu_module_default()).bars} ${mobileMenu ? (Menu_module_default()).clicked : null}`,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {})]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: mobileMenu ? (Menu_module_default()).show : (Menu_module_default()).hide,
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (Menu_module_default()).navItem,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: (Menu_module_default()).underline,
          href: "/" + "#services",
          onClick: () => toggleMobileMenu(false),
          children: "Services"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (Menu_module_default()).navItem,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: (Menu_module_default()).underline,
          href: "/" + "#why",
          onClick: () => toggleMobileMenu(false),
          children: "Why us?"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (Menu_module_default()).navItem,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: (Menu_module_default()).underline,
          href: "/" + "#recent",
          onClick: () => toggleMobileMenu(false),
          children: "Recent work"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (Menu_module_default()).navItem,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: (Menu_module_default()).underline,
          href: "/" + "#about",
          onClick: () => toggleMobileMenu(false),
          children: "About"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: `${(Menu_module_default()).email} ${(Menu_module_default()).navItem}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: (Menu_module_default()).hover,
          href: "mailto:wlclandscapes@gmail.com",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: envelope_solid,
            alt: "Email",
            width: 30,
            height: 30
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: `${(Menu_module_default()).phone} ${(Menu_module_default()).navItem}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: (Menu_module_default()).hover,
          href: "tel:0419502546",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: phone_alt_solid,
            alt: "Phone",
            width: 30,
            height: 30
          })
        })
      })]
    })]
  });
}
// EXTERNAL MODULE: ./styles/Header.module.css
var Header_module = __webpack_require__(6514);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./components/header.js




function Header(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    style: {
      backgroundImage: `url(${props.bg.src})`,
      backgroundSize: 'cover'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(Menu, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: (Header_module_default()).header,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: props.title
      }), props.ctaText ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Header_module_default()).cta,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: props.ctaLink,
          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: props.ctaText
            })
          })
        })
      }) : null]
    })]
  });
}

/***/ }),

/***/ 1495:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/public/hero-01.4b17d11caaa4f5c1611a716e7a21f99a.jpg","height":600,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAACP/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/9oACAECEAAAADf/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDEAAAAD//xAAYEAEAAwEAAAAAAAAAAAAAAAACAAEDIf/aAAgBAQABPwDFXoFS7P/EABcRAQEBAQAAAAAAAAAAAAAAAAECABH/2gAIAQIBAT8AapXq7//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z"});

/***/ }),

/***/ 2703:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/public/service-decking-01.2b482c5b1dfc5bc0e4296e7fca715e4b.jpg","height":414,"width":600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAE/9oACAEBAAAAACf/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAA//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAF//xAAbEAABBAMAAAAAAAAAAAAAAAACAAMREgEEMv/aAAgBAQABPwB3UYkCpJlzbMr/xAAZEQEAAgMAAAAAAAAAAAAAAAACAAEDESH/2gAIAQIBAT8AzEl3rk//xAAbEQABBAMAAAAAAAAAAAAAAAACAAEDBBEiMf/aAAgBAwEBPwCvvELl3C//2Q=="});

/***/ }),

/***/ 9132:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/public/service-landscaping-01.a6917065aa665dfa1bf7d7f3175b5e08.jpg","height":414,"width":600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAC/9oACAEBAAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAECEAAAAB//xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDEAAAAD//xAAbEAACAQUAAAAAAAAAAAAAAAABAgAREhMUIf/aAAgBAQABPwDecqy46gjtzs0//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAITUv/aAAgBAgEBPwCj6P/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z"});

/***/ }),

/***/ 4877:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/public/service-paving-01.1b4ed0f7d83e2c844f3ed500daa3855e.jpg","height":414,"width":600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAD/9oACAEBAAAAAA//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAB//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAF//xAAeEAABBAEFAAAAAAAAAAAAAAADAQIEEQAFITFBcf/aAAgBAQABPwCBqpSzAMeEVI0vXN72vmf/xAAWEQADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8ArP/EABcRAQADAAAAAAAAAAAAAAAAAAEAAlH/2gAIAQMBAT8AKmT/2Q=="});

/***/ }),

/***/ 4907:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/public/service-pool-fencing-01.f314ea35327038448614983132170e61.jpg","height":414,"width":600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAE/9oACAEBAAAAAE//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAD//xAAdEAACAQQDAAAAAAAAAAAAAAABAgQAAwUUMlFh/9oACAEBAAE/AFxcXVN+UrOo4op79Nf/xAAYEQADAQEAAAAAAAAAAAAAAAABAgMAEf/aAAgBAgEBPwCE0ZOkb//EABgRAQEAAwAAAAAAAAAAAAAAAAIBAANB/9oACAEDAQE/ANzQUhvM/9k="});

/***/ }),

/***/ 647:
/***/ (function(module) {

// Exports
module.exports = {
	"footer": "Footer_footer__317iK",
	"footerSocial": "Footer_footerSocial__2NDLq",
	"footerContact": "Footer_footerContact__2SnZm"
};


/***/ }),

/***/ 6514:
/***/ (function(module) {

// Exports
module.exports = {
	"header": "Header_header__182Qc",
	"cta": "Header_cta__3x0iI"
};


/***/ }),

/***/ 4939:
/***/ (function(module) {

// Exports
module.exports = {
	"navigation": "Menu_navigation__3267d",
	"logo": "Menu_logo__2s-rU",
	"navItem": "Menu_navItem__24VcQ",
	"mobile": "Menu_mobile__2Sj_c",
	"underline": "Menu_underline__3kY81",
	"hover": "Menu_hover__bWdsV",
	"hide": "Menu_hide__2Nt89",
	"show": "Menu_show__2TgYj",
	"email": "Menu_email__3Nuzp",
	"phone": "Menu_phone__2e0go",
	"bars": "Menu_bars__ySJ2R",
	"clicked": "Menu_clicked__1O6y9"
};


/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;