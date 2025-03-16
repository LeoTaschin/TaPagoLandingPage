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
exports.id = "app/api/send-email/route";
exports.ids = ["app/api/send-email/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.ts&appDir=%2FUsers%2Fleonardotaschin%2FDesktop%2FTaPagoLandingPage%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fleonardotaschin%2FDesktop%2FTaPagoLandingPage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.ts&appDir=%2FUsers%2Fleonardotaschin%2FDesktop%2FTaPagoLandingPage%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fleonardotaschin%2FDesktop%2FTaPagoLandingPage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_leonardotaschin_Desktop_TaPagoLandingPage_src_app_api_send_email_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/send-email/route.ts */ \"(rsc)/./src/app/api/send-email/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/send-email/route\",\n        pathname: \"/api/send-email\",\n        filename: \"route\",\n        bundlePath: \"app/api/send-email/route\"\n    },\n    resolvedPagePath: \"/Users/leonardotaschin/Desktop/TaPagoLandingPage/src/app/api/send-email/route.ts\",\n    nextConfigOutput,\n    userland: _Users_leonardotaschin_Desktop_TaPagoLandingPage_src_app_api_send_email_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/send-email/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kLWVtYWlsJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzZW5kLWVtYWlsJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2VuZC1lbWFpbCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmxlb25hcmRvdGFzY2hpbiUyRkRlc2t0b3AlMkZUYVBhZ29MYW5kaW5nUGFnZSUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZsZW9uYXJkb3Rhc2NoaW4lMkZEZXNrdG9wJTJGVGFQYWdvTGFuZGluZ1BhZ2UmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDZ0M7QUFDN0c7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXBhZ28tbGFuZGluZy8/MWQzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvbGVvbmFyZG90YXNjaGluL0Rlc2t0b3AvVGFQYWdvTGFuZGluZ1BhZ2Uvc3JjL2FwcC9hcGkvc2VuZC1lbWFpbC9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc2VuZC1lbWFpbC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3NlbmQtZW1haWxcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3NlbmQtZW1haWwvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvbGVvbmFyZG90YXNjaGluL0Rlc2t0b3AvVGFQYWdvTGFuZGluZ1BhZ2Uvc3JjL2FwcC9hcGkvc2VuZC1lbWFpbC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zZW5kLWVtYWlsL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.ts&appDir=%2FUsers%2Fleonardotaschin%2FDesktop%2FTaPagoLandingPage%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fleonardotaschin%2FDesktop%2FTaPagoLandingPage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/send-email/route.ts":
/*!*****************************************!*\
  !*** ./src/app/api/send-email/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resend */ \"(rsc)/./node_modules/resend/dist/index.mjs\");\n(__webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\").config)();\n\n\nconst dynamic = \"force-dynamic\"; // Força a execução no servidor\nconst resend = new resend__WEBPACK_IMPORTED_MODULE_1__.Resend(process.env.RESEND_API_KEY);\nasync function POST(request) {\n    const receiverEmail = process.env.RECEIVER_EMAIL;\n    try {\n        const { name, email, age, phone, deviceType } = await request.json();\n        const { data, error } = await resend.emails.send({\n            from: \"TaPago <onboarding@resend.dev>\",\n            to: \"tapagoconfirmacao@gmail.com\",\n            subject: \"Nova Inscri\\xe7\\xe3o TaPago\",\n            html: `\n        <h2>Nova inscrição recebida!</h2>\n        <p><strong>Nome:</strong> ${name}</p>\n        <p><strong>Email:</strong> ${email}</p>\n        <p><strong>Idade:</strong> ${age}</p>\n        <p><strong>Telefone:</strong> ${phone}</p>\n        <p><strong>Dispositivo:</strong> ${deviceType}</p>\n      `\n        });\n        if (error) {\n            console.error(\"Erro ao enviar email:\", error);\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Erro ao enviar email\"\n            }, {\n                status: 500\n            });\n        }\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: \"Email enviado com sucesso!\"\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Erro:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Erro ao processar requisi\\xe7\\xe3o\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zZW5kLWVtYWlsL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQUEscUZBQXdCO0FBRWtCO0FBQ1g7QUFFeEIsTUFBTUksVUFBVSxnQkFBZ0IsQ0FBQywrQkFBK0I7QUFFdkUsTUFBTUMsU0FBUyxJQUFJRiwwQ0FBTUEsQ0FBQ0csUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBRTdDLGVBQWVDLEtBQUtDLE9BQWdCO0lBQ3pDLE1BQU1DLGdCQUFnQkwsUUFBUUMsR0FBRyxDQUFDSyxjQUFjO0lBRWhELElBQUk7UUFDRixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxHQUFHLEVBQUVDLEtBQUssRUFBRUMsVUFBVSxFQUFFLEdBQUcsTUFBTVAsUUFBUVEsSUFBSTtRQUVsRSxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTWYsT0FBT2dCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO1lBQy9DQyxNQUFNO1lBQ05DLElBQUk7WUFDSkMsU0FBUztZQUNUQyxNQUFNLENBQUM7O2tDQUVxQixFQUFFYixLQUFLO21DQUNOLEVBQUVDLE1BQU07bUNBQ1IsRUFBRUMsSUFBSTtzQ0FDSCxFQUFFQyxNQUFNO3lDQUNMLEVBQUVDLFdBQVc7TUFDaEQsQ0FBQztRQUNIO1FBRUEsSUFBSUcsT0FBTztZQUNUTyxRQUFRUCxLQUFLLENBQUMseUJBQXlCQTtZQUN2QyxPQUFPbEIsa0ZBQVlBLENBQUNnQixJQUFJLENBQ3RCO2dCQUFFRSxPQUFPO1lBQXVCLEdBQ2hDO2dCQUFFUSxRQUFRO1lBQUk7UUFFbEI7UUFFQSxPQUFPMUIsa0ZBQVlBLENBQUNnQixJQUFJLENBQ3RCO1lBQUVXLFNBQVM7UUFBNkIsR0FDeEM7WUFBRUQsUUFBUTtRQUFJO0lBRWxCLEVBQUUsT0FBT1IsT0FBTztRQUNkTyxRQUFRUCxLQUFLLENBQUMsU0FBU0E7UUFDdkIsT0FBT2xCLGtGQUFZQSxDQUFDZ0IsSUFBSSxDQUN0QjtZQUFFRSxPQUFPO1FBQStCLEdBQ3hDO1lBQUVRLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFwYWdvLWxhbmRpbmcvLi9zcmMvYXBwL2FwaS9zZW5kLWVtYWlsL3JvdXRlLnRzPzZhYjgiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XG5cbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xuaW1wb3J0IHsgUmVzZW5kIH0gZnJvbSAncmVzZW5kJ1xuXG5leHBvcnQgY29uc3QgZHluYW1pYyA9IFwiZm9yY2UtZHluYW1pY1wiOyAvLyBGb3LDp2EgYSBleGVjdcOnw6NvIG5vIHNlcnZpZG9yXG5cbmNvbnN0IHJlc2VuZCA9IG5ldyBSZXNlbmQocHJvY2Vzcy5lbnYuUkVTRU5EX0FQSV9LRVkpXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3QgcmVjZWl2ZXJFbWFpbCA9IHByb2Nlc3MuZW52LlJFQ0VJVkVSX0VNQUlMO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgYWdlLCBwaG9uZSwgZGV2aWNlVHlwZSB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKClcblxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHJlc2VuZC5lbWFpbHMuc2VuZCh7XG4gICAgICBmcm9tOiAnVGFQYWdvIDxvbmJvYXJkaW5nQHJlc2VuZC5kZXY+JyxcbiAgICAgIHRvOiAndGFwYWdvY29uZmlybWFjYW9AZ21haWwuY29tJyxcbiAgICAgIHN1YmplY3Q6ICdOb3ZhIEluc2NyacOnw6NvIFRhUGFnbycsXG4gICAgICBodG1sOiBgXG4gICAgICAgIDxoMj5Ob3ZhIGluc2NyacOnw6NvIHJlY2ViaWRhITwvaDI+XG4gICAgICAgIDxwPjxzdHJvbmc+Tm9tZTo8L3N0cm9uZz4gJHtuYW1lfTwvcD5cbiAgICAgICAgPHA+PHN0cm9uZz5FbWFpbDo8L3N0cm9uZz4gJHtlbWFpbH08L3A+XG4gICAgICAgIDxwPjxzdHJvbmc+SWRhZGU6PC9zdHJvbmc+ICR7YWdlfTwvcD5cbiAgICAgICAgPHA+PHN0cm9uZz5UZWxlZm9uZTo8L3N0cm9uZz4gJHtwaG9uZX08L3A+XG4gICAgICAgIDxwPjxzdHJvbmc+RGlzcG9zaXRpdm86PC9zdHJvbmc+ICR7ZGV2aWNlVHlwZX08L3A+XG4gICAgICBgLFxuICAgIH0pXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gZW52aWFyIGVtYWlsOicsIGVycm9yKVxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiAnRXJybyBhbyBlbnZpYXIgZW1haWwnIH0sXG4gICAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgbWVzc2FnZTogJ0VtYWlsIGVudmlhZG8gY29tIHN1Y2Vzc28hJyB9LFxuICAgICAgeyBzdGF0dXM6IDIwMCB9XG4gICAgKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm86JywgZXJyb3IpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogJ0Vycm8gYW8gcHJvY2Vzc2FyIHJlcXVpc2nDp8OjbycgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgIClcbiAgfVxufVxuIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJjb25maWciLCJOZXh0UmVzcG9uc2UiLCJSZXNlbmQiLCJkeW5hbWljIiwicmVzZW5kIiwicHJvY2VzcyIsImVudiIsIlJFU0VORF9BUElfS0VZIiwiUE9TVCIsInJlcXVlc3QiLCJyZWNlaXZlckVtYWlsIiwiUkVDRUlWRVJfRU1BSUwiLCJuYW1lIiwiZW1haWwiLCJhZ2UiLCJwaG9uZSIsImRldmljZVR5cGUiLCJqc29uIiwiZGF0YSIsImVycm9yIiwiZW1haWxzIiwic2VuZCIsImZyb20iLCJ0byIsInN1YmplY3QiLCJodG1sIiwiY29uc29sZSIsInN0YXR1cyIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/send-email/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/dotenv","vendor-chunks/resend"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.ts&appDir=%2FUsers%2Fleonardotaschin%2FDesktop%2FTaPagoLandingPage%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fleonardotaschin%2FDesktop%2FTaPagoLandingPage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();