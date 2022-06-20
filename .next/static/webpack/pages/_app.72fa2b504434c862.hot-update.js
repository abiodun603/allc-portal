"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./redux/features/authSlice.js":
/*!*************************************!*\
  !*** ./redux/features/authSlice.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchAsyncAuth\": function() { return /* binding */ fetchAsyncAuth; }\n/* harmony export */ });\n/* harmony import */ var _Users_xerde_allc_portal_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_xerde_allc_portal_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_xerde_allc_portal_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_xerde_allc_portal_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_xerde_allc_portal_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/config */ \"./api/config.js\");\n\n\n\nvar _extraReducers;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_xerde_allc_portal_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar fetchAsyncAuth = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.createAsyncThunk)(\"auth/fetchAsyncAuth\", /*#__PURE__*/function () {\n  var _ref = (0,_Users_xerde_allc_portal_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_xerde_allc_portal_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(data) {\n    var url, response;\n    return _Users_xerde_allc_portal_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            url = \"/api/loginlogin\";\n            console.log(data);\n            _context.next = 4;\n            return axios__WEBPACK_IMPORTED_MODULE_3___default().post(_api_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].apiUrl + url, data, {\n              headers: {\n                \"Content-Type\": \"application/json\"\n              },\n              validateStatus: function validateStatus(status) {\n                return true;\n              }\n            });\n\n          case 4:\n            response = _context.sent;\n            console.log(response);\n            return _context.abrupt(\"return\", response.data);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}());\nvar initialState = {\n  data: {},\n  status: 'idle',\n  error: null\n};\nvar authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.createSlice)({\n  name: \"auth\",\n  initialState: initialState,\n  extraReducers: (_extraReducers = {}, (0,_Users_xerde_allc_portal_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_extraReducers, fetchAsyncAuth.pending, function (state) {\n    state.status = \"pending\";\n    console.log(\"pending\");\n  }), (0,_Users_xerde_allc_portal_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_extraReducers, fetchAsyncAuth.fulfilled, function (state, _ref2) {\n    var payload = _ref2.payload;\n    console.log(\"Fetched Successfully\");\n    state.status = \"fetching\";\n    return _objectSpread(_objectSpread({}, state), {}, {\n      data: payload\n    });\n  }), (0,_Users_xerde_allc_portal_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_extraReducers, fetchAsyncAuth.rejected, function (state) {\n    state.status = \"error\";\n    console.log(\"rejected\");\n  }), _extraReducers)\n}); // export const getAuthToken = ((state) => state?.auth?.data?.tokentoken?.original?.access_token);\n// export const getAuthEmail = ((state) => state?.auth?.data?.tokentoken?.original?.access_token);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (authSlice.reducer);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9mZWF0dXJlcy9hdXRoU2xpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdPLElBQU1JLGNBQWMsR0FBRUgsa0VBQWdCLENBQzNDLHFCQUQyQztBQUFBLDBTQUUzQyxpQkFBTUksSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUUMsWUFBQUEsR0FEUixHQUNjLGlCQURkO0FBRUVDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaO0FBRkY7QUFBQSxtQkFHeUJILGlEQUFBLENBQVdDLDBEQUFBLEdBQWdCRyxHQUEzQixFQUFpQ0QsSUFBakMsRUFBdUM7QUFDNURNLGNBQUFBLE9BQU8sRUFBRTtBQUNQLGdDQUFnQjtBQURULGVBRG1EO0FBSTVEQyxjQUFBQSxjQUFjLEVBQUcsd0JBQUNDLE1BQUQsRUFBWTtBQUMzQix1QkFBTyxJQUFQO0FBQ0Q7QUFOMkQsYUFBdkMsQ0FIekI7O0FBQUE7QUFHUUMsWUFBQUEsUUFIUjtBQVdFUCxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU0sUUFBWjtBQVhGLDZDQVlTQSxRQUFRLENBQUNULElBWmxCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBRjJDOztBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXRDO0FBbUJQLElBQU1VLFlBQVksR0FBRztBQUNuQlYsRUFBQUEsSUFBSSxFQUFFLEVBRGE7QUFFbkJRLEVBQUFBLE1BQU0sRUFBRSxNQUZXO0FBR25CRyxFQUFBQSxLQUFLLEVBQUU7QUFIWSxDQUFyQjtBQU9BLElBQU1DLFNBQVMsR0FBR2pCLDZEQUFXLENBQUM7QUFDNUJrQixFQUFBQSxJQUFJLEVBQUUsTUFEc0I7QUFFNUJILEVBQUFBLFlBQVksRUFBWkEsWUFGNEI7QUFHNUJJLEVBQUFBLGFBQWEsc0xBQ1ZmLGNBQWMsQ0FBQ2dCLE9BREwsRUFDZSxVQUFDQyxLQUFELEVBQVc7QUFDbkNBLElBQUFBLEtBQUssQ0FBQ1IsTUFBTixHQUFlLFNBQWY7QUFDQU4sSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNELEdBSlUsaUtBTVZKLGNBQWMsQ0FBQ2tCLFNBTkwsRUFNaUIsVUFBQ0QsS0FBRCxTQUFzQjtBQUFBLFFBQWJFLE9BQWEsU0FBYkEsT0FBYTtBQUNoRGhCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0FhLElBQUFBLEtBQUssQ0FBQ1IsTUFBTixHQUFlLFVBQWY7QUFDQSwyQ0FBV1EsS0FBWDtBQUFrQmhCLE1BQUFBLElBQUksRUFBRWtCO0FBQXhCO0FBQ0QsR0FWVSxpS0FZVm5CLGNBQWMsQ0FBQ29CLFFBWkwsRUFZZ0IsVUFBQ0gsS0FBRCxFQUFXO0FBQ3BDQSxJQUFBQSxLQUFLLENBQUNSLE1BQU4sR0FBZSxPQUFmO0FBQ0FOLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDRCxHQWZVO0FBSGUsQ0FBRCxDQUE3QixFQXNCQTtBQUNBOztBQUNBLCtEQUFlUyxTQUFTLENBQUNRLE9BQXpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L2ZlYXR1cmVzL2F1dGhTbGljZS5qcz9mNjJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uL2FwaS9jb25maWdcIlxuXG5cbmV4cG9ydCBjb25zdCBmZXRjaEFzeW5jQXV0aD0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJhdXRoL2ZldGNoQXN5bmNBdXRoXCIsXG4gIGFzeW5jKGRhdGEpID0+IHtcbiAgICBjb25zdCB1cmwgPSBcIi9hcGkvbG9naW5sb2dpblwiO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGNvbmZpZy5hcGlVcmwgKyB1cmwgLCBkYXRhLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9LFxuICAgICAgdmFsaWRhdGVTdGF0dXMgOiAoc3RhdHVzKSA9PiB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9ICAgXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbiAgfVxuICBcbilcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBkYXRhOiB7fSxcbiAgc3RhdHVzOiAnaWRsZScsXG4gIGVycm9yOiBudWxsXG59XG5cblxuY29uc3QgYXV0aFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcImF1dGhcIixcbiAgaW5pdGlhbFN0YXRlLFxuICBleHRyYVJlZHVjZXJzOiB7XG4gICAgW2ZldGNoQXN5bmNBdXRoLnBlbmRpbmddOiAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwicGVuZGluZ1wiXG4gICAgICBjb25zb2xlLmxvZyhcInBlbmRpbmdcIilcbiAgICB9LFxuXG4gICAgW2ZldGNoQXN5bmNBdXRoLmZ1bGZpbGxlZF06IChzdGF0ZSwge3BheWxvYWR9KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkZldGNoZWQgU3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgc3RhdGUuc3RhdHVzID0gXCJmZXRjaGluZ1wiXG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBkYXRhOiBwYXlsb2FkfVxuICAgIH0sXG5cbiAgICBbZmV0Y2hBc3luY0F1dGgucmVqZWN0ZWRdOiAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLnN0YXR1cyA9IFwiZXJyb3JcIlxuICAgICAgY29uc29sZS5sb2coXCJyZWplY3RlZFwiKVxuICAgIH1cbiAgfVxufSlcblxuLy8gZXhwb3J0IGNvbnN0IGdldEF1dGhUb2tlbiA9ICgoc3RhdGUpID0+IHN0YXRlPy5hdXRoPy5kYXRhPy50b2tlbnRva2VuPy5vcmlnaW5hbD8uYWNjZXNzX3Rva2VuKTtcbi8vIGV4cG9ydCBjb25zdCBnZXRBdXRoRW1haWwgPSAoKHN0YXRlKSA9PiBzdGF0ZT8uYXV0aD8uZGF0YT8udG9rZW50b2tlbj8ub3JpZ2luYWw/LmFjY2Vzc190b2tlbik7XG5leHBvcnQgZGVmYXVsdCBhdXRoU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwiYXhpb3MiLCJjb25maWciLCJmZXRjaEFzeW5jQXV0aCIsImRhdGEiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsImFwaVVybCIsImhlYWRlcnMiLCJ2YWxpZGF0ZVN0YXR1cyIsInN0YXR1cyIsInJlc3BvbnNlIiwiaW5pdGlhbFN0YXRlIiwiZXJyb3IiLCJhdXRoU2xpY2UiLCJuYW1lIiwiZXh0cmFSZWR1Y2VycyIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsInBheWxvYWQiLCJyZWplY3RlZCIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/features/authSlice.js\n");

/***/ })

});