module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/auth/[...nextauth].ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fauna */ \"./src/services/fauna.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default.a.GitHub({\n    clientId: process.env.GITHUB_ID,\n    clientSecret: process.env.GITHUB_SECRET,\n    scope: 'read:user'\n  })],\n  callbacks: {\n    async session(session) {\n      try {\n        session.user.email;\n        const userActiveSubscription = await _services_fauna__WEBPACK_IMPORTED_MODULE_3__[\"fauna\"].query(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Get(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Intersection([faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Match(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Index('subscription_by_user_ref'), faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Select(\"ref\", faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Get(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Match(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Casefold(session.user.email))))), faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Match(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Index('subscription_by_status'), \"active\")])));\n        return _objectSpread(_objectSpread({}, session), {}, {\n          activeSubscription: userActiveSubscription\n        });\n      } catch {\n        return _objectSpread(_objectSpread({}, session), {}, {\n          activeSubscription: null\n        });\n      }\n    },\n\n    async signIn(user, account, profile) {\n      const {\n        email\n      } = user;\n\n      try {\n        await _services_fauna__WEBPACK_IMPORTED_MODULE_3__[\"fauna\"].query(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].If(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Not(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Exists(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Match(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Casefold(user.email)))), faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Create(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Collection('users'), {\n          data: {\n            email\n          }\n        }), faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Get(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Match(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Casefold(user.email)))));\n        return true;\n      } catch {\n        return false;\n      }\n    }\n\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz83MmNmIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwicHJvdmlkZXJzIiwiUHJvdmlkZXJzIiwiR2l0SHViIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX1NFQ1JFVCIsInNjb3BlIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInVzZXIiLCJlbWFpbCIsInVzZXJBY3RpdmVTdWJzY3JpcHRpb24iLCJmYXVuYSIsInF1ZXJ5IiwicSIsIkdldCIsIkludGVyc2VjdGlvbiIsIk1hdGNoIiwiSW5kZXgiLCJTZWxlY3QiLCJDYXNlZm9sZCIsImFjdGl2ZVN1YnNjcmlwdGlvbiIsInNpZ25JbiIsImFjY291bnQiLCJwcm9maWxlIiwiSWYiLCJOb3QiLCJFeGlzdHMiLCJDcmVhdGUiLCJDb2xsZWN0aW9uIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFHQTtBQUVlQSwrR0FBUSxDQUFDO0FBRXRCQyxXQUFTLEVBQUUsQ0FDVEMsMERBQVMsQ0FBQ0MsTUFBVixDQUFpQjtBQUNmQyxZQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxTQURQO0FBRWZDLGdCQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxhQUZYO0FBR2ZDLFNBQUssRUFBRTtBQUhRLEdBQWpCLENBRFMsQ0FGVztBQVN0QkMsV0FBUyxFQUFFO0FBQ1QsVUFBTUMsT0FBTixDQUFjQSxPQUFkLEVBQXVCO0FBQ3JCLFVBQUk7QUFDRkEsZUFBTyxDQUFDQyxJQUFSLENBQWFDLEtBQWI7QUFFQSxjQUFNQyxzQkFBc0IsR0FBRyxNQUFNQyxxREFBSyxDQUFDQyxLQUFOLENBQ25DQyw2Q0FBQyxDQUFDQyxHQUFGLENBQ0VELDZDQUFDLENBQUNFLFlBQUYsQ0FBZSxDQUNiRiw2Q0FBQyxDQUFDRyxLQUFGLENBQ0VILDZDQUFDLENBQUNJLEtBQUYsQ0FBUSwwQkFBUixDQURGLEVBRUVKLDZDQUFDLENBQUNLLE1BQUYsQ0FDRSxLQURGLEVBRUVMLDZDQUFDLENBQUNDLEdBQUYsQ0FDRUQsNkNBQUMsQ0FBQ0csS0FBRixDQUNFSCw2Q0FBQyxDQUFDSSxLQUFGLENBQVEsZUFBUixDQURGLEVBRUVKLDZDQUFDLENBQUNNLFFBQUYsQ0FBV1osT0FBTyxDQUFDQyxJQUFSLENBQWFDLEtBQXhCLENBRkYsQ0FERixDQUZGLENBRkYsQ0FEYSxFQWFiSSw2Q0FBQyxDQUFDRyxLQUFGLENBQ0VILDZDQUFDLENBQUNJLEtBQUYsQ0FBUSx3QkFBUixDQURGLEVBRUUsUUFGRixDQWJhLENBQWYsQ0FERixDQURtQyxDQUFyQztBQXVCQSwrQ0FDS1YsT0FETDtBQUVFYSw0QkFBa0IsRUFBRVY7QUFGdEI7QUFLRCxPQS9CRCxDQStCRSxNQUFNO0FBQ04sK0NBQ0tILE9BREw7QUFFRWEsNEJBQWtCLEVBQUU7QUFGdEI7QUFJRDtBQUNGLEtBdkNROztBQXdDVCxVQUFNQyxNQUFOLENBQWFiLElBQWIsRUFBbUJjLE9BQW5CLEVBQTRCQyxPQUE1QixFQUFxQztBQUNuQyxZQUFNO0FBQUVkO0FBQUYsVUFBWUQsSUFBbEI7O0FBRUEsVUFBSTtBQUNGLGNBQU1HLHFEQUFLLENBQUNDLEtBQU4sQ0FDSkMsNkNBQUMsQ0FBQ1csRUFBRixDQUNFWCw2Q0FBQyxDQUFDWSxHQUFGLENBQ0VaLDZDQUFDLENBQUNhLE1BQUYsQ0FDRWIsNkNBQUMsQ0FBQ0csS0FBRixDQUNFSCw2Q0FBQyxDQUFDSSxLQUFGLENBQVEsZUFBUixDQURGLEVBRUVKLDZDQUFDLENBQUNNLFFBQUYsQ0FBV1gsSUFBSSxDQUFDQyxLQUFoQixDQUZGLENBREYsQ0FERixDQURGLEVBU0VJLDZDQUFDLENBQUNjLE1BQUYsQ0FDRWQsNkNBQUMsQ0FBQ2UsVUFBRixDQUFhLE9BQWIsQ0FERixFQUVFO0FBQUVDLGNBQUksRUFBRTtBQUFFcEI7QUFBRjtBQUFSLFNBRkYsQ0FURixFQWFFSSw2Q0FBQyxDQUFDQyxHQUFGLENBQ0VELDZDQUFDLENBQUNHLEtBQUYsQ0FDRUgsNkNBQUMsQ0FBQ0ksS0FBRixDQUFRLGVBQVIsQ0FERixFQUVFSiw2Q0FBQyxDQUFDTSxRQUFGLENBQVdYLElBQUksQ0FBQ0MsS0FBaEIsQ0FGRixDQURGLENBYkYsQ0FESSxDQUFOO0FBdUJBLGVBQU8sSUFBUDtBQUVELE9BMUJELENBMEJFLE1BQU07QUFDTixlQUFPLEtBQVA7QUFDRDtBQUVGOztBQXpFUTtBQVRXLENBQUQsQ0FBdkIiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHF1ZXJ5IGFzIHEgfSBmcm9tICdmYXVuYWRiJ1xuXG5pbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJ1xuaW1wb3J0IHsgc2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMnXG5cblxuaW1wb3J0IHsgZmF1bmEgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYXVuYSdcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuXG4gIHByb3ZpZGVyczogW1xuICAgIFByb3ZpZGVycy5HaXRIdWIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcbiAgICAgIHNjb3BlOiAncmVhZDp1c2VyJ1xuICAgIH0pLFxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBzZXNzaW9uKHNlc3Npb24pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNlc3Npb24udXNlci5lbWFpbFxuXG4gICAgICAgIGNvbnN0IHVzZXJBY3RpdmVTdWJzY3JpcHRpb24gPSBhd2FpdCBmYXVuYS5xdWVyeShcbiAgICAgICAgICBxLkdldChcbiAgICAgICAgICAgIHEuSW50ZXJzZWN0aW9uKFtcbiAgICAgICAgICAgICAgcS5NYXRjaChcbiAgICAgICAgICAgICAgICBxLkluZGV4KCdzdWJzY3JpcHRpb25fYnlfdXNlcl9yZWYnKSxcbiAgICAgICAgICAgICAgICBxLlNlbGVjdChcbiAgICAgICAgICAgICAgICAgIFwicmVmXCIsXG4gICAgICAgICAgICAgICAgICBxLkdldChcbiAgICAgICAgICAgICAgICAgICAgcS5NYXRjaChcbiAgICAgICAgICAgICAgICAgICAgICBxLkluZGV4KCd1c2VyX2J5X2VtYWlsJyksXG4gICAgICAgICAgICAgICAgICAgICAgcS5DYXNlZm9sZChzZXNzaW9uLnVzZXIuZW1haWwpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgICAgICAgcS5JbmRleCgnc3Vic2NyaXB0aW9uX2J5X3N0YXR1cycpLFxuICAgICAgICAgICAgICAgIFwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc2Vzc2lvbixcbiAgICAgICAgICBhY3RpdmVTdWJzY3JpcHRpb246IHVzZXJBY3RpdmVTdWJzY3JpcHRpb25cbiAgICAgICAgfVxuXG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zZXNzaW9uLFxuICAgICAgICAgIGFjdGl2ZVN1YnNjcmlwdGlvbjogbnVsbCxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgc2lnbkluKHVzZXIsIGFjY291bnQsIHByb2ZpbGUpIHtcbiAgICAgIGNvbnN0IHsgZW1haWwgfSA9IHVzZXJcbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZmF1bmEucXVlcnkoXG4gICAgICAgICAgcS5JZihcbiAgICAgICAgICAgIHEuTm90KFxuICAgICAgICAgICAgICBxLkV4aXN0cyhcbiAgICAgICAgICAgICAgICBxLk1hdGNoKFxuICAgICAgICAgICAgICAgICAgcS5JbmRleCgndXNlcl9ieV9lbWFpbCcpLFxuICAgICAgICAgICAgICAgICAgcS5DYXNlZm9sZCh1c2VyLmVtYWlsKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHEuQ3JlYXRlKFxuICAgICAgICAgICAgICBxLkNvbGxlY3Rpb24oJ3VzZXJzJyksXG4gICAgICAgICAgICAgIHsgZGF0YTogeyBlbWFpbCB9IH1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBxLkdldChcbiAgICAgICAgICAgICAgcS5NYXRjaChcbiAgICAgICAgICAgICAgICBxLkluZGV4KCd1c2VyX2J5X2VtYWlsJyksXG4gICAgICAgICAgICAgICAgcS5DYXNlZm9sZCh1c2VyLmVtYWlsKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG5cbiAgICAgICAgcmV0dXJuIHRydWVcblxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgfVxuICB9LFxuXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/*! exports provided: fauna */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fauna\", function() { return fauna; });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__[\"Client\"]({\n  secret: process.env.FAUNADB_KEY\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZmF1bmEudHM/OGY0ZCJdLCJuYW1lcyI6WyJmYXVuYSIsIkNsaWVudCIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJGQVVOQURCX0tFWSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLEtBQUssR0FBRyxJQUFJQyw4Q0FBSixDQUFXO0FBQzlCQyxRQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQztBQURVLENBQVgsQ0FBZCIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9mYXVuYS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gJ2ZhdW5hZGInXG5cbmV4cG9ydCBjb25zdCBmYXVuYSA9IG5ldyBDbGllbnQoe1xuICBzZWNyZXQ6IHByb2Nlc3MuZW52LkZBVU5BREJfS0VZXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/fauna.ts\n");

/***/ }),

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"faunadb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYXVuYWRiXCI/OWIwYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmYXVuYWRiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmF1bmFkYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///faunadb\n");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIj8yOWY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth\n");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/providers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI/NjljNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvcHJvdmlkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/providers\n");

/***/ })

/******/ });