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

/***/ "./styles/formcomponent.style.js":
/*!***************************************!*\
  !*** ./styles/formcomponent.style.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Label\": function() { return /* binding */ Label; },\n/* harmony export */   \"FormField\": function() { return /* binding */ FormField; },\n/* harmony export */   \"PasswordType\": function() { return /* binding */ PasswordType; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_theme_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/theme/theme */ \"./assets/theme/theme.js\");\n\n\nvar Label = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].label.withConfig({\n  displayName: \"formcomponentstyle__Label\",\n  componentId: \"sc-1ds93ic-0\"\n})([\"font-weight:500;color:\", \";font-size:\", \";\"], _assets_theme_theme__WEBPACK_IMPORTED_MODULE_0__.COLORS.kblackCom, _assets_theme_theme__WEBPACK_IMPORTED_MODULE_0__.SIZES.body4);\nvar FormField = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"formcomponentstyle__FormField\",\n  componentId: \"sc-1ds93ic-1\"\n})([\"width:100%;margin:15px 0;input,select,textarea{outline:none;border:none;font-size:1px;font-family:\\\"Poppins\\\",sans-serif;background:#fff;width:100%;box-sizing:border-box;height:48px;padding:0 18px;border:1px solid #d9dcef;border-radius:3px;::placeholder{color:\", \";}}textarea{line-height:1em;}::placeholder{color:red;}.file-input::-webkit-file-upload-button{visibility:hidden;display:none;}.file-input::before{content:\\\"select some file\\\";display:inline-block;background:linear-gradient(top,#f9f9f9,#e3e3e3);border:1px solid #999;border-radius:3px;padding:5px 8px;outline:none;white-space:nowrap;-webkit-user-select:none;cursor:pointer;text-shadow:1px 1px #fff;font-weight:700;font-size:10pt;}\"], _assets_theme_theme__WEBPACK_IMPORTED_MODULE_0__.COLORS.ksecondary);\nvar PasswordType = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"formcomponentstyle__PasswordType\",\n  componentId: \"sc-1ds93ic-2\"\n})([\"border:1px solid #d9dcef;border-radius:3px;position:relative;display:flex;padding-right:5px;input{width:95%;border:none;::placeholder{color:\", \";}}.p_visible{width:5%;display:flex;justify-content:center;align-items:flex-start;align-self:center;cursor:pointer;font-size:16px;}\"], _assets_theme_theme__WEBPACK_IMPORTED_MODULE_0__.COLORS.ksecondary);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvZm9ybWNvbXBvbmVudC5zdHlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNRyxLQUFLLEdBQUdILDBFQUFIO0FBQUE7QUFBQTtBQUFBLG1EQUdQQyxpRUFITyxFQUlIQyw0REFKRyxDQUFYO0FBT0EsSUFBTUssU0FBUyxHQUFHUCx3RUFBSDtBQUFBO0FBQUE7QUFBQSw4ckJBb0JQQyxrRUFwQk8sQ0FBZjtBQXFEQSxJQUFNUyxZQUFZLEdBQUdWLHdFQUFIO0FBQUE7QUFBQTtBQUFBLDRSQVlWQyxrRUFaVSxDQUFsQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZm9ybWNvbXBvbmVudC5zdHlsZS5qcz83YjNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBDT0xPUlMsIFNJWkVTIH0gZnJvbSBcIi4uL2Fzc2V0cy90aGVtZS90aGVtZVwiO1xuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIC8qKiBzdHlsZSB0aGUgbGFiZWwgb2YgaW5wdXQgZmllbGQgKi9cbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICR7Q09MT1JTLmtibGFja0NvbX07XG4gIGZvbnQtc2l6ZTogJHtTSVpFUy5ib2R5NH07XG5gO1xuXG5leHBvcnQgY29uc3QgRm9ybUZpZWxkID0gc3R5bGVkLmRpdmBcbiAgLyoqIHN0eWxlIGlucHV0IGZpZWxkIGhlcmUgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTVweCAwO1xuICBpbnB1dCxcbiAgc2VsZWN0LFxuICB0ZXh0YXJlYSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgcGFkZGluZzogMCAxOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOWRjZWY7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG4gICAgOjpwbGFjZWhvbGRlcntcbiAgICAgIGNvbG9yOiAke0NPTE9SUy5rc2Vjb25kYXJ5fTtcbiAgICB9XG4gIH1cbiAgdGV4dGFyZWEge1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG5cbiAgfVxuXG4gIDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cblxuICAuZmlsZS1pbnB1dDo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5maWxlLWlucHV0OjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwic2VsZWN0IHNvbWUgZmlsZVwiO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjZjlmOWY5LCAjZTNlM2UzKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxMHB0O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUGFzc3dvcmRUeXBlID0gc3R5bGVkLmRpdmBcbiAgLyoqIHN0eWxlIHBhc3N3b3JkIGlucHV0IGhlcmUgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZGNlZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgaW5wdXQge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgYm9yZGVyOiBub25lO1xuXG4gICAgOjpwbGFjZWhvbGRlcntcbiAgICAgIGNvbG9yOiAke0NPTE9SUy5rc2Vjb25kYXJ5fTtcbiAgICB9XG4gIH1cbiAgLnBfdmlzaWJsZSB7XG4gICAgd2lkdGg6IDUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuXG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkNPTE9SUyIsIlNJWkVTIiwiTGFiZWwiLCJsYWJlbCIsImtibGFja0NvbSIsImJvZHk0IiwiRm9ybUZpZWxkIiwiZGl2Iiwia3NlY29uZGFyeSIsIlBhc3N3b3JkVHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/formcomponent.style.js\n");

/***/ })

});