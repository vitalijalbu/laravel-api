"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoginPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authService */ \"./services/authService.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_authService__WEBPACK_IMPORTED_MODULE_2__]);\n_services_authService__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n // Assuming you have an authService to handle login requests\n\nfunction LoginPage() {\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleLogin = async (e)=>{\n        e.preventDefault();\n        try {\n            const userData = await (0,_services_authService__WEBPACK_IMPORTED_MODULE_2__.login)(email, password); // Assuming 'login' returns user data with a token\n            alert(\"Login successful\");\n            localStorage.setItem(\"token\", userData.token); // Save token in localStorage\n            router.push(\"/dashboard\"); // Redirect to the dashboard\n        } catch (error) {\n            alert(\"Login failed\");\n            console.error(error.response?.data || error); // Log the error to console\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\upworkclient\\\\pages\\\\login.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleLogin,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            placeholder: \"Email\",\n                            value: email,\n                            onChange: (e)=>setEmail(e.target.value),\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\upworkclient\\\\pages\\\\login.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\upworkclient\\\\pages\\\\login.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            placeholder: \"Password\",\n                            value: password,\n                            onChange: (e)=>setPassword(e.target.value),\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\upworkclient\\\\pages\\\\login.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\upworkclient\\\\pages\\\\login.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\upworkclient\\\\pages\\\\login.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\upworkclient\\\\pages\\\\login.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\upworkclient\\\\pages\\\\login.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ1EsQ0FBQyw0REFBNEQ7QUFDckU7QUFFekIsU0FBU0ksU0FBUyxHQUFHO0lBQ2xDLE1BQU0sS0FBQ0MsS0FBSyxNQUFFQyxRQUFRLE1BQUlMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3RDLE1BQU0sS0FBQ00sUUFBUSxNQUFFQyxXQUFXLE1BQUlQLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQzVDLE1BQU1RLE1BQU0sR0FBR04sc0RBQVMsRUFBRTtJQUUxQixNQUFNTyxXQUFXLEdBQUcsT0FBT0MsQ0FBQyxHQUFLO1FBQy9CQSxDQUFDLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQUk7WUFDRixNQUFNQyxRQUFRLEdBQUcsTUFBTVgsNERBQUssQ0FBQ0csS0FBSyxFQUFFRSxRQUFRLENBQUMsRUFBRyxrREFBa0Q7WUFDbEdPLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzFCQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLEVBQUVILFFBQVEsQ0FBQ0ksS0FBSyxDQUFDLENBQUMsQ0FBRSw2QkFBNkI7WUFDN0VSLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUUsNEJBQTRCO1FBQzFELEVBQUUsT0FBT0MsS0FBSyxFQUFFO1lBQ2RMLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN0Qk0sT0FBTyxDQUFDRCxLQUFLLENBQUNBLEtBQUssQ0FBQ0UsUUFBUSxFQUFFQyxJQUFJLElBQUlILEtBQUssQ0FBQyxDQUFDLENBQUUsMkJBQTJCO1FBQzVFLENBQUM7SUFDSCxDQUFDO0lBRUQscUJBQ0UsOERBQUNJLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOzBCQUFDLE9BQUs7Ozs7O29CQUFLOzBCQUNkLDhEQUFDQyxNQUFJO2dCQUFDQyxRQUFRLEVBQUVoQixXQUFXOztrQ0FDekIsOERBQUNhLEtBQUc7a0NBQ0YsNEVBQUNJLE9BQUs7NEJBQ0pDLElBQUksRUFBQyxPQUFPOzRCQUNaQyxXQUFXLEVBQUMsT0FBTzs0QkFDbkJDLEtBQUssRUFBRXpCLEtBQUs7NEJBQ1owQixRQUFRLEVBQUUsQ0FBQ3BCLENBQUMsR0FBS0wsUUFBUSxDQUFDSyxDQUFDLENBQUNxQixNQUFNLENBQUNGLEtBQUssQ0FBQzs0QkFDekNHLFFBQVE7Ozs7O2dDQUNSOzs7Ozs0QkFDRTtrQ0FDTiw4REFBQ1YsS0FBRztrQ0FDRiw0RUFBQ0ksT0FBSzs0QkFDSkMsSUFBSSxFQUFDLFVBQVU7NEJBQ2ZDLFdBQVcsRUFBQyxVQUFVOzRCQUN0QkMsS0FBSyxFQUFFdkIsUUFBUTs0QkFDZndCLFFBQVEsRUFBRSxDQUFDcEIsQ0FBQyxHQUFLSCxXQUFXLENBQUNHLENBQUMsQ0FBQ3FCLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDOzRCQUM1Q0csUUFBUTs7Ozs7Z0NBQ1I7Ozs7OzRCQUNFO2tDQUNOLDhEQUFDQyxRQUFNO3dCQUFDTixJQUFJLEVBQUMsUUFBUTtrQ0FBQyxPQUFLOzs7Ozs0QkFBUzs7Ozs7O29CQUMvQjs7Ozs7O1lBQ0gsQ0FDTjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoU2VydmljZSc7IC8vIEFzc3VtaW5nIHlvdSBoYXZlIGFuIGF1dGhTZXJ2aWNlIHRvIGhhbmRsZSBsb2dpbiByZXF1ZXN0c1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpblBhZ2UoKSB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgbG9naW4oZW1haWwsIHBhc3N3b3JkKTsgIC8vIEFzc3VtaW5nICdsb2dpbicgcmV0dXJucyB1c2VyIGRhdGEgd2l0aCBhIHRva2VuXHJcbiAgICAgIGFsZXJ0KCdMb2dpbiBzdWNjZXNzZnVsJyk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHVzZXJEYXRhLnRva2VuKTsgIC8vIFNhdmUgdG9rZW4gaW4gbG9jYWxTdG9yYWdlXHJcbiAgICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJyk7ICAvLyBSZWRpcmVjdCB0byB0aGUgZGFzaGJvYXJkXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhbGVydCgnTG9naW4gZmFpbGVkJyk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IucmVzcG9uc2U/LmRhdGEgfHwgZXJyb3IpOyAgLy8gTG9nIHRoZSBlcnJvciB0byBjb25zb2xlXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMj5Mb2dpbjwvaDI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVMb2dpbn0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9naW48L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvZ2luIiwidXNlUm91dGVyIiwiTG9naW5QYWdlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJyb3V0ZXIiLCJoYW5kbGVMb2dpbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJEYXRhIiwiYWxlcnQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwicmVzcG9uc2UiLCJkYXRhIiwiZGl2IiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "./services/authService.js":
/*!*********************************!*\
  !*** ./services/authService.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCsrfCookie\": () => (/* binding */ getCsrfCookie),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"logout\": () => (/* binding */ logout)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// services/authService.js\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"http://moneymaker.com.pk/public/\",\n    withCredentials: true\n});\nconst getCsrfCookie = async ()=>{\n    await api.get(\"/sanctum/csrf-cookie\"); // Fetch CSRF token\n};\nconst login = async (email, password)=>{\n    await getCsrfCookie(); // Ensure CSRF is set before login\n    const response = await api.post(\"/api/auth/login\", {\n        email,\n        password\n    });\n    return response.data;\n};\nconst logout = async ()=>{\n    await api.post(\"/api/auth/logout\");\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hdXRoU2VydmljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMEJBQTBCO0FBQ0E7QUFFMUIsTUFBTUMsR0FBRyxHQUFHRCxvREFBWSxDQUFDO0lBQ3ZCRyxPQUFPLEVBQUUsa0NBQWtDO0lBQzNDQyxlQUFlLEVBQUUsSUFBSTtDQUN0QixDQUFDO0FBRUssTUFBTUMsYUFBYSxHQUFHLFVBQVk7SUFDdkMsTUFBTUosR0FBRyxDQUFDSyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFFLG1CQUFtQjtBQUM3RCxDQUFDLENBQUM7QUFFSyxNQUFNQyxLQUFLLEdBQUcsT0FBT0MsS0FBSyxFQUFFQyxRQUFRLEdBQUs7SUFDOUMsTUFBTUosYUFBYSxFQUFFLENBQUMsQ0FBRSxrQ0FBa0M7SUFDMUQsTUFBTUssUUFBUSxHQUFHLE1BQU1ULEdBQUcsQ0FBQ1UsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1FBQUVILEtBQUs7UUFBRUMsUUFBUTtLQUFFLENBQUM7SUFDdkUsT0FBT0MsUUFBUSxDQUFDRSxJQUFJLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBRUssTUFBTUMsTUFBTSxHQUFHLFVBQVk7SUFDaEMsTUFBTVosR0FBRyxDQUFDVSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hdXRoU2VydmljZS5qcz81OGYyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNlcnZpY2VzL2F1dGhTZXJ2aWNlLmpzXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6ICdodHRwOi8vbW9uZXltYWtlci5jb20ucGsvcHVibGljLycsICAvLyBSZXBsYWNlIHdpdGggeW91ciBiYWNrZW5kIFVSTFxyXG4gIHdpdGhDcmVkZW50aWFsczogdHJ1ZSwgIC8vIFJlcXVpcmVkIGZvciBTYW5jdHVtIENTUkZcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q3NyZkNvb2tpZSA9IGFzeW5jICgpID0+IHtcclxuICBhd2FpdCBhcGkuZ2V0KCcvc2FuY3R1bS9jc3JmLWNvb2tpZScpOyAgLy8gRmV0Y2ggQ1NSRiB0b2tlblxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gIGF3YWl0IGdldENzcmZDb29raWUoKTsgIC8vIEVuc3VyZSBDU1JGIGlzIHNldCBiZWZvcmUgbG9naW5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvYXBpL2F1dGgvbG9naW4nLCB7IGVtYWlsLCBwYXNzd29yZCB9KTtcclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgYXBpLnBvc3QoJy9hcGkvYXV0aC9sb2dvdXQnKTtcclxufTtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiYXBpIiwiY3JlYXRlIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsImdldENzcmZDb29raWUiLCJnZXQiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsInBvc3QiLCJkYXRhIiwibG9nb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/authService.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();