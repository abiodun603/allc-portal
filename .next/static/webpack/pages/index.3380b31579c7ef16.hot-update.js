"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard */ \"./pages/dashboard.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin */ \"./pages/signin.js\");\n/* harmony import */ var _components_shared_layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shared/layout/layout */ \"./components/shared/layout/layout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/xerde/allc-portal/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var token = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {\n    var _state$auth, _state$auth$data, _state$auth$data$toke, _state$auth$data$toke2;\n\n    return (_state$auth = state.auth) === null || _state$auth === void 0 ? void 0 : (_state$auth$data = _state$auth.data) === null || _state$auth$data === void 0 ? void 0 : (_state$auth$data$toke = _state$auth$data.tokentoken) === null || _state$auth$data$toke === void 0 ? void 0 : (_state$auth$data$toke2 = _state$auth$data$toke.original) === null || _state$auth$data$toke2 === void 0 ? void 0 : _state$auth$data$toke2.access_token;\n  });\n  console.log(token);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: token && token !== \"\" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_shared_layout_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_dashboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 11\n    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_signin__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Home, \"bD5+gKbiITcJRDYAIJK4ZSEgato=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(function (state) {\n  return state;\n})(Home));\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1NLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU87QUFBQTs7QUFDbEIsTUFBTUMsS0FBSyxHQUFHRix3REFBVyxDQUFDLFVBQUNHLEtBQUQ7QUFBQTs7QUFBQSwwQkFBV0EsS0FBSyxDQUFDQyxJQUFqQixvRUFBVyxZQUFZQyxJQUF2Qiw4RUFBVyxpQkFBa0JDLFVBQTdCLG9GQUFXLHNCQUE4QkMsUUFBekMsMkRBQVcsdUJBQXdDQyxZQUFuRDtBQUFBLEdBQUQsQ0FBekI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlSLEtBQVo7QUFDQSxzQkFDRTtBQUFBLGNBRUlBLEtBQUssSUFBSUEsS0FBSyxLQUFLLEVBQW5CLGdCQUNFLDhEQUFDLHdFQUFEO0FBQUEsNkJBQ0UsOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixnQkFLRSw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUE4sbUJBREY7QUFhRCxDQWhCRDs7R0FBTUQ7VUFDVUQ7OztLQURWQztBQWtCTiwrREFBZUYsb0RBQU8sQ0FBQyxVQUFDSSxLQUFEO0FBQUEsU0FBV0EsS0FBWDtBQUFBLENBQUQsQ0FBUCxDQUEwQkYsSUFBMUIsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9kYXNoYm9hcmQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgU2lnbmluIGZyb20gJy4vc2lnbmluJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9sYXlvdXQvbGF5b3V0J1xuaW1wb3J0IHsgY29ubmVjdCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuY29uc3QgSG9tZSA9ICgpID0+ICB7XG4gIGNvbnN0IHRva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoPy5kYXRhPy50b2tlbnRva2VuPy5vcmlnaW5hbD8uYWNjZXNzX3Rva2VuKVxuICBjb25zb2xlLmxvZyh0b2tlbilcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge1xuICAgICAgICB0b2tlbiAmJiB0b2tlbiAhPT0gXCJcIiA/IChcbiAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPERhc2hib2FyZC8+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICk6IChcbiAgICAgICAgICA8U2lnbmluLz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0YXRlKSA9PiBzdGF0ZSkoSG9tZSlcbiJdLCJuYW1lcyI6WyJEYXNoYm9hcmQiLCJIZWFkIiwiU2lnbmluIiwiTGF5b3V0IiwiY29ubmVjdCIsInVzZVNlbGVjdG9yIiwiSG9tZSIsInRva2VuIiwic3RhdGUiLCJhdXRoIiwiZGF0YSIsInRva2VudG9rZW4iLCJvcmlnaW5hbCIsImFjY2Vzc190b2tlbiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});