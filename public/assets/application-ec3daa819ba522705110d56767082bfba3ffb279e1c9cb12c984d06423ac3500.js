/**!

 @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat
 handlebars v4.0.6

Copyright (C) 2011-2016 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _handlebarsRuntime = __webpack_require__(1);

	var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);

	// Compiler imports

	var _handlebarsCompilerAst = __webpack_require__(19);

	var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);

	var _handlebarsCompilerBase = __webpack_require__(20);

	var _handlebarsCompilerCompiler = __webpack_require__(25);

	var _handlebarsCompilerJavascriptCompiler = __webpack_require__(26);

	var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);

	var _handlebarsCompilerVisitor = __webpack_require__(23);

	var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);

	var _handlebarsNoConflict = __webpack_require__(18);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	var _create = _handlebarsRuntime2['default'].create;
	function create() {
	  var hb = _create();

	  hb.compile = function (input, options) {
	    return _handlebarsCompilerCompiler.compile(input, options, hb);
	  };
	  hb.precompile = function (input, options) {
	    return _handlebarsCompilerCompiler.precompile(input, options, hb);
	  };

	  hb.AST = _handlebarsCompilerAst2['default'];
	  hb.Compiler = _handlebarsCompilerCompiler.Compiler;
	  hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
	  hb.Parser = _handlebarsCompilerBase.parser;
	  hb.parse = _handlebarsCompilerBase.parse;

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst.Visitor = _handlebarsCompilerVisitor2['default'];

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9oYW5kbGViYXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7aUNBQW9CLHNCQUFzQjs7Ozs7O3FDQUcxQiwyQkFBMkI7Ozs7c0NBQ0gsNEJBQTRCOzswQ0FDdEIsZ0NBQWdDOztvREFDL0MsMkNBQTJDOzs7O3lDQUN0RCwrQkFBK0I7Ozs7b0NBRTVCLDBCQUEwQjs7OztBQUVqRCxJQUFJLE9BQU8sR0FBRywrQkFBUSxNQUFNLENBQUM7QUFDN0IsU0FBUyxNQUFNLEdBQUc7QUFDaEIsTUFBSSxFQUFFLEdBQUcsT0FBTyxFQUFFLENBQUM7O0FBRW5CLElBQUUsQ0FBQyxPQUFPLEdBQUcsVUFBUyxLQUFLLEVBQUUsT0FBTyxFQUFFO0FBQ3BDLFdBQU8sb0NBQVEsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztHQUNwQyxDQUFDO0FBQ0YsSUFBRSxDQUFDLFVBQVUsR0FBRyxVQUFTLEtBQUssRUFBRSxPQUFPLEVBQUU7QUFDdkMsV0FBTyx1Q0FBVyxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0dBQ3ZDLENBQUM7O0FBRUYsSUFBRSxDQUFDLEdBQUcscUNBQU0sQ0FBQztBQUNiLElBQUUsQ0FBQyxRQUFRLHVDQUFXLENBQUM7QUFDdkIsSUFBRSxDQUFDLGtCQUFrQixvREFBcUIsQ0FBQztBQUMzQyxJQUFFLENBQUMsTUFBTSxpQ0FBUyxDQUFDO0FBQ25CLElBQUUsQ0FBQyxLQUFLLGdDQUFRLENBQUM7O0FBRWpCLFNBQU8sRUFBRSxDQUFDO0NBQ1g7O0FBRUQsSUFBSSxJQUFJLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O0FBRXJCLGtDQUFXLElBQUksQ0FBQyxDQUFDOztBQUVqQixJQUFJLENBQUMsT0FBTyx5Q0FBVSxDQUFDOztBQUV2QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDOztxQkFFUixJQUFJIiwiZmlsZSI6ImhhbmRsZWJhcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcnVudGltZSBmcm9tICcuL2hhbmRsZWJhcnMucnVudGltZSc7XG5cbi8vIENvbXBpbGVyIGltcG9ydHNcbmltcG9ydCBBU1QgZnJvbSAnLi9oYW5kbGViYXJzL2NvbXBpbGVyL2FzdCc7XG5pbXBvcnQgeyBwYXJzZXIgYXMgUGFyc2VyLCBwYXJzZSB9IGZyb20gJy4vaGFuZGxlYmFycy9jb21waWxlci9iYXNlJztcbmltcG9ydCB7IENvbXBpbGVyLCBjb21waWxlLCBwcmVjb21waWxlIH0gZnJvbSAnLi9oYW5kbGViYXJzL2NvbXBpbGVyL2NvbXBpbGVyJztcbmltcG9ydCBKYXZhU2NyaXB0Q29tcGlsZXIgZnJvbSAnLi9oYW5kbGViYXJzL2NvbXBpbGVyL2phdmFzY3JpcHQtY29tcGlsZXInO1xuaW1wb3J0IFZpc2l0b3IgZnJvbSAnLi9oYW5kbGViYXJzL2NvbXBpbGVyL3Zpc2l0b3InO1xuXG5pbXBvcnQgbm9Db25mbGljdCBmcm9tICcuL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QnO1xuXG5sZXQgX2NyZWF0ZSA9IHJ1bnRpbWUuY3JlYXRlO1xuZnVuY3Rpb24gY3JlYXRlKCkge1xuICBsZXQgaGIgPSBfY3JlYXRlKCk7XG5cbiAgaGIuY29tcGlsZSA9IGZ1bmN0aW9uKGlucHV0LCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNvbXBpbGUoaW5wdXQsIG9wdGlvbnMsIGhiKTtcbiAgfTtcbiAgaGIucHJlY29tcGlsZSA9IGZ1bmN0aW9uKGlucHV0LCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHByZWNvbXBpbGUoaW5wdXQsIG9wdGlvbnMsIGhiKTtcbiAgfTtcblxuICBoYi5BU1QgPSBBU1Q7XG4gIGhiLkNvbXBpbGVyID0gQ29tcGlsZXI7XG4gIGhiLkphdmFTY3JpcHRDb21waWxlciA9IEphdmFTY3JpcHRDb21waWxlcjtcbiAgaGIuUGFyc2VyID0gUGFyc2VyO1xuICBoYi5wYXJzZSA9IHBhcnNlO1xuXG4gIHJldHVybiBoYjtcbn1cblxubGV0IGluc3QgPSBjcmVhdGUoKTtcbmluc3QuY3JlYXRlID0gY3JlYXRlO1xuXG5ub0NvbmZsaWN0KGluc3QpO1xuXG5pbnN0LlZpc2l0b3IgPSBWaXNpdG9yO1xuXG5pbnN0WydkZWZhdWx0J10gPSBpbnN0O1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0O1xuIl19


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	// istanbul ignore next

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _handlebarsBase = __webpack_require__(2);

	var base = _interopRequireWildcard(_handlebarsBase);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _handlebarsSafeString = __webpack_require__(16);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(4);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(3);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(17);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(18);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9oYW5kbGViYXJzLnJ1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OEJBQXNCLG1CQUFtQjs7SUFBN0IsSUFBSTs7Ozs7b0NBSU8sMEJBQTBCOzs7O21DQUMzQix3QkFBd0I7Ozs7K0JBQ3ZCLG9CQUFvQjs7SUFBL0IsS0FBSzs7aUNBQ1Esc0JBQXNCOztJQUFuQyxPQUFPOztvQ0FFSSwwQkFBMEI7Ozs7O0FBR2pELFNBQVMsTUFBTSxHQUFHO0FBQ2hCLE1BQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O0FBRTFDLE9BQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUUsQ0FBQyxVQUFVLG9DQUFhLENBQUM7QUFDM0IsSUFBRSxDQUFDLFNBQVMsbUNBQVksQ0FBQztBQUN6QixJQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNqQixJQUFFLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDOztBQUU3QyxJQUFFLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUNoQixJQUFFLENBQUMsUUFBUSxHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQzNCLFdBQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7R0FDbkMsQ0FBQzs7QUFFRixTQUFPLEVBQUUsQ0FBQztDQUNYOztBQUVELElBQUksSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUVyQixrQ0FBVyxJQUFJLENBQUMsQ0FBQzs7QUFFakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzs7cUJBRVIsSUFBSSIsImZpbGUiOiJoYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBiYXNlIGZyb20gJy4vaGFuZGxlYmFycy9iYXNlJztcblxuLy8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuLy8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcbmltcG9ydCBTYWZlU3RyaW5nIGZyb20gJy4vaGFuZGxlYmFycy9zYWZlLXN0cmluZyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vaGFuZGxlYmFycy9leGNlcHRpb24nO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9oYW5kbGViYXJzL3V0aWxzJztcbmltcG9ydCAqIGFzIHJ1bnRpbWUgZnJvbSAnLi9oYW5kbGViYXJzL3J1bnRpbWUnO1xuXG5pbXBvcnQgbm9Db25mbGljdCBmcm9tICcuL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QnO1xuXG4vLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2VcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XG5cbiAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcbiAgaGIuU2FmZVN0cmluZyA9IFNhZmVTdHJpbmc7XG4gIGhiLkV4Y2VwdGlvbiA9IEV4Y2VwdGlvbjtcbiAgaGIuVXRpbHMgPSBVdGlscztcbiAgaGIuZXNjYXBlRXhwcmVzc2lvbiA9IFV0aWxzLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgaGIuVk0gPSBydW50aW1lO1xuICBoYi50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHNwZWMpIHtcbiAgICByZXR1cm4gcnVudGltZS50ZW1wbGF0ZShzcGVjLCBoYik7XG4gIH07XG5cbiAgcmV0dXJuIGhiO1xufVxuXG5sZXQgaW5zdCA9IGNyZWF0ZSgpO1xuaW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cbm5vQ29uZmxpY3QoaW5zdCk7XG5cbmluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3Q7XG4iXX0=


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utils = __webpack_require__(3);

	var _exception = __webpack_require__(4);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(5);

	var _decorators = __webpack_require__(13);

	var _logger = __webpack_require__(15);

	var _logger2 = _interopRequireDefault(_logger);

	var VERSION = '4.0.6';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cUJBQTRDLFNBQVM7O3lCQUMvQixhQUFhOzs7O3VCQUNFLFdBQVc7OzBCQUNSLGNBQWM7O3NCQUNuQyxVQUFVOzs7O0FBRXRCLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQzs7QUFDeEIsSUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7OztBQUU1QixJQUFNLGdCQUFnQixHQUFHO0FBQzlCLEdBQUMsRUFBRSxhQUFhO0FBQ2hCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxVQUFVO0FBQ2IsR0FBQyxFQUFFLGtCQUFrQjtBQUNyQixHQUFDLEVBQUUsaUJBQWlCO0FBQ3BCLEdBQUMsRUFBRSxVQUFVO0NBQ2QsQ0FBQzs7O0FBRUYsSUFBTSxVQUFVLEdBQUcsaUJBQWlCLENBQUM7O0FBRTlCLFNBQVMscUJBQXFCLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7QUFDbkUsTUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQzdCLE1BQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUMvQixNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxFQUFFLENBQUM7O0FBRW5DLGtDQUF1QixJQUFJLENBQUMsQ0FBQztBQUM3Qix3Q0FBMEIsSUFBSSxDQUFDLENBQUM7Q0FDakM7O0FBRUQscUJBQXFCLENBQUMsU0FBUyxHQUFHO0FBQ2hDLGFBQVcsRUFBRSxxQkFBcUI7O0FBRWxDLFFBQU0scUJBQVE7QUFDZCxLQUFHLEVBQUUsb0JBQU8sR0FBRzs7QUFFZixnQkFBYyxFQUFFLHdCQUFTLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDakMsUUFBSSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3RDLFVBQUksRUFBRSxFQUFFO0FBQUUsY0FBTSwyQkFBYyx5Q0FBeUMsQ0FBQyxDQUFDO09BQUU7QUFDM0Usb0JBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM1QixNQUFNO0FBQ0wsVUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDekI7R0FDRjtBQUNELGtCQUFnQixFQUFFLDBCQUFTLElBQUksRUFBRTtBQUMvQixXQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDM0I7O0FBRUQsaUJBQWUsRUFBRSx5QkFBUyxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ3ZDLFFBQUksZ0JBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBRTtBQUN0QyxvQkFBTyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzdCLE1BQU07QUFDTCxVQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtBQUNsQyxjQUFNLHlFQUEwRCxJQUFJLG9CQUFpQixDQUFDO09BQ3ZGO0FBQ0QsVUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7S0FDL0I7R0FDRjtBQUNELG1CQUFpQixFQUFFLDJCQUFTLElBQUksRUFBRTtBQUNoQyxXQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDNUI7O0FBRUQsbUJBQWlCLEVBQUUsMkJBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUNwQyxRQUFJLGdCQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDdEMsVUFBSSxFQUFFLEVBQUU7QUFBRSxjQUFNLDJCQUFjLDRDQUE0QyxDQUFDLENBQUM7T0FBRTtBQUM5RSxvQkFBTyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQy9CLE1BQU07QUFDTCxVQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUM1QjtHQUNGO0FBQ0QscUJBQW1CLEVBQUUsNkJBQVMsSUFBSSxFQUFFO0FBQ2xDLFdBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUM5QjtDQUNGLENBQUM7O0FBRUssSUFBSSxHQUFHLEdBQUcsb0JBQU8sR0FBRyxDQUFDOzs7UUFFcEIsV0FBVztRQUFFLE1BQU0iLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlRnJhbWUsIGV4dGVuZCwgdG9TdHJpbmd9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuL2V4Y2VwdGlvbic7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdEhlbHBlcnN9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnN9IGZyb20gJy4vZGVjb3JhdG9ycyc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSAnNC4wLjYnO1xuZXhwb3J0IGNvbnN0IENPTVBJTEVSX1JFVklTSU9OID0gNztcblxuZXhwb3J0IGNvbnN0IFJFVklTSU9OX0NIQU5HRVMgPSB7XG4gIDE6ICc8PSAxLjAucmMuMicsIC8vIDEuMC5yYy4yIGlzIGFjdHVhbGx5IHJldjIgYnV0IGRvZXNuJ3QgcmVwb3J0IGl0XG4gIDI6ICc9PSAxLjAuMC1yYy4zJyxcbiAgMzogJz09IDEuMC4wLXJjLjQnLFxuICA0OiAnPT0gMS54LngnLFxuICA1OiAnPT0gMi4wLjAtYWxwaGEueCcsXG4gIDY6ICc+PSAyLjAuMC1iZXRhLjEnLFxuICA3OiAnPj0gNC4wLjAnXG59O1xuXG5jb25zdCBvYmplY3RUeXBlID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBIYW5kbGViYXJzRW52aXJvbm1lbnQoaGVscGVycywgcGFydGlhbHMsIGRlY29yYXRvcnMpIHtcbiAgdGhpcy5oZWxwZXJzID0gaGVscGVycyB8fCB7fTtcbiAgdGhpcy5wYXJ0aWFscyA9IHBhcnRpYWxzIHx8IHt9O1xuICB0aGlzLmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzIHx8IHt9O1xuXG4gIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnModGhpcyk7XG4gIHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnModGhpcyk7XG59XG5cbkhhbmRsZWJhcnNFbnZpcm9ubWVudC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBIYW5kbGViYXJzRW52aXJvbm1lbnQsXG5cbiAgbG9nZ2VyOiBsb2dnZXIsXG4gIGxvZzogbG9nZ2VyLmxvZyxcblxuICByZWdpc3RlckhlbHBlcjogZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7IHRocm93IG5ldyBFeGNlcHRpb24oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgaGVscGVycycpOyB9XG4gICAgICBleHRlbmQodGhpcy5oZWxwZXJzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oZWxwZXJzW25hbWVdID0gZm47XG4gICAgfVxuICB9LFxuICB1bnJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuaGVscGVyc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uKG5hbWUsIHBhcnRpYWwpIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgZXh0ZW5kKHRoaXMucGFydGlhbHMsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHBhcnRpYWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oYEF0dGVtcHRpbmcgdG8gcmVnaXN0ZXIgYSBwYXJ0aWFsIGNhbGxlZCBcIiR7bmFtZX1cIiBhcyB1bmRlZmluZWRgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFydGlhbHNbbmFtZV0gPSBwYXJ0aWFsO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5wYXJ0aWFsc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7IHRocm93IG5ldyBFeGNlcHRpb24oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgZGVjb3JhdG9ycycpOyB9XG4gICAgICBleHRlbmQodGhpcy5kZWNvcmF0b3JzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWNvcmF0b3JzW25hbWVdID0gZm47XG4gICAgfVxuICB9LFxuICB1bnJlZ2lzdGVyRGVjb3JhdG9yOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuZGVjb3JhdG9yc1tuYW1lXTtcbiAgfVxufTtcblxuZXhwb3J0IGxldCBsb2cgPSBsb2dnZXIubG9nO1xuXG5leHBvcnQge2NyZWF0ZUZyYW1lLCBsb2dnZXJ9O1xuIl19


/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTSxNQUFNLEdBQUc7QUFDYixLQUFHLEVBQUUsT0FBTztBQUNaLEtBQUcsRUFBRSxNQUFNO0FBQ1gsS0FBRyxFQUFFLE1BQU07QUFDWCxLQUFHLEVBQUUsUUFBUTtBQUNiLEtBQUcsRUFBRSxRQUFRO0FBQ2IsS0FBRyxFQUFFLFFBQVE7QUFDYixLQUFHLEVBQUUsUUFBUTtDQUNkLENBQUM7O0FBRUYsSUFBTSxRQUFRLEdBQUcsWUFBWTtJQUN2QixRQUFRLEdBQUcsV0FBVyxDQUFDOztBQUU3QixTQUFTLFVBQVUsQ0FBQyxHQUFHLEVBQUU7QUFDdkIsU0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDcEI7O0FBRU0sU0FBUyxNQUFNLENBQUMsR0FBRyxvQkFBbUI7QUFDM0MsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDekMsU0FBSyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDNUIsVUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFO0FBQzNELFdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7T0FDOUI7S0FDRjtHQUNGOztBQUVELFNBQU8sR0FBRyxDQUFDO0NBQ1o7O0FBRU0sSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7Ozs7OztBQUtoRCxJQUFJLFVBQVUsR0FBRyxvQkFBUyxLQUFLLEVBQUU7QUFDL0IsU0FBTyxPQUFPLEtBQUssS0FBSyxVQUFVLENBQUM7Q0FDcEMsQ0FBQzs7O0FBR0YsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDbkIsVUFJTSxVQUFVLEdBSmhCLFVBQVUsR0FBRyxVQUFTLEtBQUssRUFBRTtBQUMzQixXQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLG1CQUFtQixDQUFDO0dBQ3BGLENBQUM7Q0FDSDtRQUNPLFVBQVUsR0FBVixVQUFVOzs7OztBQUlYLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksVUFBUyxLQUFLLEVBQUU7QUFDdEQsU0FBTyxBQUFDLEtBQUssSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEdBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7Q0FDakcsQ0FBQzs7Ozs7QUFHSyxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQ3BDLE9BQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDaEQsUUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFO0FBQ3RCLGFBQU8sQ0FBQyxDQUFDO0tBQ1Y7R0FDRjtBQUNELFNBQU8sQ0FBQyxDQUFDLENBQUM7Q0FDWDs7QUFHTSxTQUFTLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtBQUN2QyxNQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTs7QUFFOUIsUUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtBQUMzQixhQUFPLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUN4QixNQUFNLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtBQUN6QixhQUFPLEVBQUUsQ0FBQztLQUNYLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNsQixhQUFPLE1BQU0sR0FBRyxFQUFFLENBQUM7S0FDcEI7Ozs7O0FBS0QsVUFBTSxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUM7R0FDdEI7O0FBRUQsTUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFBRSxXQUFPLE1BQU0sQ0FBQztHQUFFO0FBQzlDLFNBQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7Q0FDN0M7O0FBRU0sU0FBUyxPQUFPLENBQUMsS0FBSyxFQUFFO0FBQzdCLE1BQUksQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtBQUN6QixXQUFPLElBQUksQ0FBQztHQUNiLE1BQU0sSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFDL0MsV0FBTyxJQUFJLENBQUM7R0FDYixNQUFNO0FBQ0wsV0FBTyxLQUFLLENBQUM7R0FDZDtDQUNGOztBQUVNLFNBQVMsV0FBVyxDQUFDLE1BQU0sRUFBRTtBQUNsQyxNQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLE9BQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQ3ZCLFNBQU8sS0FBSyxDQUFDO0NBQ2QiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlc2NhcGUgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmI3gyNzsnLFxuICAnYCc6ICcmI3g2MDsnLFxuICAnPSc6ICcmI3gzRDsnXG59O1xuXG5jb25zdCBiYWRDaGFycyA9IC9bJjw+XCInYD1dL2csXG4gICAgICBwb3NzaWJsZSA9IC9bJjw+XCInYD1dLztcblxuZnVuY3Rpb24gZXNjYXBlQ2hhcihjaHIpIHtcbiAgcmV0dXJuIGVzY2FwZVtjaHJdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKG9iai8qICwgLi4uc291cmNlICovKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnQgbGV0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLy8gU291cmNlZCBmcm9tIGxvZGFzaFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxuLyogZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSAqL1xubGV0IGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfTtcbn1cbmV4cG9ydCB7aXNGdW5jdGlvbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZ1bmMtc3R5bGUgKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpID8gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScgOiBmYWxzZTtcbn07XG5cbi8vIE9sZGVyIElFIHZlcnNpb25zIGRvIG5vdCBkaXJlY3RseSBzdXBwb3J0IGluZGV4T2Ygc28gd2UgbXVzdCBpbXBsZW1lbnQgb3VyIG93biwgc2FkbHkuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZihhcnJheSwgdmFsdWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICAgIGlmIChzdHJpbmcgJiYgc3RyaW5nLnRvSFRNTCkge1xuICAgICAgcmV0dXJuIHN0cmluZy50b0hUTUwoKTtcbiAgICB9IGVsc2UgaWYgKHN0cmluZyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nICsgJyc7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgYSBzdHJpbmcgY29udmVyc2lvbiBhcyB0aGlzIHdpbGwgYmUgZG9uZSBieSB0aGUgYXBwZW5kIHJlZ2FyZGxlc3MgYW5kXG4gICAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG4gICAgLy8gYW4gb2JqZWN0J3MgdG8gc3RyaW5nIGhhcyBlc2NhcGVkIGNoYXJhY3RlcnMgaW4gaXQuXG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG4gIH1cblxuICBpZiAoIXBvc3NpYmxlLnRlc3Qoc3RyaW5nKSkgeyByZXR1cm4gc3RyaW5nOyB9XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShiYWRDaGFycywgZXNjYXBlQ2hhcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XG4gIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZyYW1lKG9iamVjdCkge1xuICBsZXQgZnJhbWUgPSBleHRlbmQoe30sIG9iamVjdCk7XG4gIGZyYW1lLl9wYXJlbnQgPSBvYmplY3Q7XG4gIHJldHVybiBmcmFtZTtcbn1cblxuIl19


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  try {
	    if (loc) {
	      this.lineNumber = line;

	      // Work around issue under safari where we can't directly set the column value
	      /* istanbul ignore next */
	      if (Object.defineProperty) {
	        Object.defineProperty(this, 'column', {
	          value: column,
	          enumerable: true
	        });
	      } else {
	        this.column = column;
	      }
	    }
	  } catch (nop) {
	    /* Ignore if the browser is very particular */
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsSUFBTSxVQUFVLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFbkcsU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUNoQyxNQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUc7TUFDdEIsSUFBSSxZQUFBO01BQ0osTUFBTSxZQUFBLENBQUM7QUFDWCxNQUFJLEdBQUcsRUFBRTtBQUNQLFFBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztBQUN0QixVQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7O0FBRTFCLFdBQU8sSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7R0FDeEM7O0FBRUQsTUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzs7O0FBRzFELE9BQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0FBQ2hELFFBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7R0FDOUM7OztBQUdELE1BQUksS0FBSyxDQUFDLGlCQUFpQixFQUFFO0FBQzNCLFNBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7R0FDMUM7O0FBRUQsTUFBSTtBQUNGLFFBQUksR0FBRyxFQUFFO0FBQ1AsVUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Ozs7QUFJdkIsVUFBSSxNQUFNLENBQUMsY0FBYyxFQUFFO0FBQ3pCLGNBQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTtBQUNwQyxlQUFLLEVBQUUsTUFBTTtBQUNiLG9CQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7T0FDSixNQUFNO0FBQ0wsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7T0FDdEI7S0FDRjtHQUNGLENBQUMsT0FBTyxHQUFHLEVBQUU7O0dBRWI7Q0FDRjs7QUFFRCxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7O3FCQUVuQixTQUFTIiwiZmlsZSI6ImV4Y2VwdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZXJyb3JQcm9wcyA9IFsnZGVzY3JpcHRpb24nLCAnZmlsZU5hbWUnLCAnbGluZU51bWJlcicsICdtZXNzYWdlJywgJ25hbWUnLCAnbnVtYmVyJywgJ3N0YWNrJ107XG5cbmZ1bmN0aW9uIEV4Y2VwdGlvbihtZXNzYWdlLCBub2RlKSB7XG4gIGxldCBsb2MgPSBub2RlICYmIG5vZGUubG9jLFxuICAgICAgbGluZSxcbiAgICAgIGNvbHVtbjtcbiAgaWYgKGxvYykge1xuICAgIGxpbmUgPSBsb2Muc3RhcnQubGluZTtcbiAgICBjb2x1bW4gPSBsb2Muc3RhcnQuY29sdW1uO1xuXG4gICAgbWVzc2FnZSArPSAnIC0gJyArIGxpbmUgKyAnOicgKyBjb2x1bW47XG4gIH1cblxuICBsZXQgdG1wID0gRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cbiAgLy8gVW5mb3J0dW5hdGVseSBlcnJvcnMgYXJlIG5vdCBlbnVtZXJhYmxlIGluIENocm9tZSAoYXQgbGVhc3QpLCBzbyBgZm9yIHByb3AgaW4gdG1wYCBkb2Vzbid0IHdvcmsuXG4gIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGVycm9yUHJvcHMubGVuZ3RoOyBpZHgrKykge1xuICAgIHRoaXNbZXJyb3JQcm9wc1tpZHhdXSA9IHRtcFtlcnJvclByb3BzW2lkeF1dO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRXhjZXB0aW9uKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKGxvYykge1xuICAgICAgdGhpcy5saW5lTnVtYmVyID0gbGluZTtcblxuICAgICAgLy8gV29yayBhcm91bmQgaXNzdWUgdW5kZXIgc2FmYXJpIHdoZXJlIHdlIGNhbid0IGRpcmVjdGx5IHNldCB0aGUgY29sdW1uIHZhbHVlXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2NvbHVtbicsIHtcbiAgICAgICAgICB2YWx1ZTogY29sdW1uLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKG5vcCkge1xuICAgIC8qIElnbm9yZSBpZiB0aGUgYnJvd3NlciBpcyB2ZXJ5IHBhcnRpY3VsYXIgKi9cbiAgfVxufVxuXG5FeGNlcHRpb24ucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEV4Y2VwdGlvbjtcbiJdfQ==


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _helpersBlockHelperMissing = __webpack_require__(6);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(7);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(8);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(9);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(10);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(11);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(12);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7eUNBQXVDLGdDQUFnQzs7OzsyQkFDOUMsZ0JBQWdCOzs7O29DQUNQLDBCQUEwQjs7Ozt5QkFDckMsY0FBYzs7OzswQkFDYixlQUFlOzs7OzZCQUNaLGtCQUFrQjs7OzsyQkFDcEIsZ0JBQWdCOzs7O0FBRWxDLFNBQVMsc0JBQXNCLENBQUMsUUFBUSxFQUFFO0FBQy9DLHlDQUEyQixRQUFRLENBQUMsQ0FBQztBQUNyQywyQkFBYSxRQUFRLENBQUMsQ0FBQztBQUN2QixvQ0FBc0IsUUFBUSxDQUFDLENBQUM7QUFDaEMseUJBQVcsUUFBUSxDQUFDLENBQUM7QUFDckIsMEJBQVksUUFBUSxDQUFDLENBQUM7QUFDdEIsNkJBQWUsUUFBUSxDQUFDLENBQUM7QUFDekIsMkJBQWEsUUFBUSxDQUFDLENBQUM7Q0FDeEIiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWdpc3RlckJsb2NrSGVscGVyTWlzc2luZyBmcm9tICcuL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcnO1xuaW1wb3J0IHJlZ2lzdGVyRWFjaCBmcm9tICcuL2hlbHBlcnMvZWFjaCc7XG5pbXBvcnQgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nIGZyb20gJy4vaGVscGVycy9oZWxwZXItbWlzc2luZyc7XG5pbXBvcnQgcmVnaXN0ZXJJZiBmcm9tICcuL2hlbHBlcnMvaWYnO1xuaW1wb3J0IHJlZ2lzdGVyTG9nIGZyb20gJy4vaGVscGVycy9sb2cnO1xuaW1wb3J0IHJlZ2lzdGVyTG9va3VwIGZyb20gJy4vaGVscGVycy9sb29rdXAnO1xuaW1wb3J0IHJlZ2lzdGVyV2l0aCBmcm9tICcuL2hlbHBlcnMvd2l0aCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckRlZmF1bHRIZWxwZXJzKGluc3RhbmNlKSB7XG4gIHJlZ2lzdGVyQmxvY2tIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJFYWNoKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJJZihpbnN0YW5jZSk7XG4gIHJlZ2lzdGVyTG9nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJMb29rdXAoaW5zdGFuY2UpO1xuICByZWdpc3RlcldpdGgoaW5zdGFuY2UpO1xufVxuIl19


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(3);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBc0IsVUFBVTs7cUJBRWpCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3ZFLFFBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPO1FBQ3pCLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFDcEIsYUFBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakIsTUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtBQUMvQyxhQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QixNQUFNLElBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUMzQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLGVBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ2hELE1BQU07QUFDTCxlQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUN0QjtLQUNGLE1BQU07QUFDTCxhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDN0I7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJibG9jay1oZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNBcnJheX0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignYmxvY2tIZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIGxldCBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuICAgICAgICBmbiA9IG9wdGlvbnMuZm47XG5cbiAgICBpZiAoY29udGV4dCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZuKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoY29udGV4dCA9PT0gZmFsc2UgfHwgY29udGV4dCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gaW52ZXJzZSh0aGlzKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkoY29udGV4dCkpIHtcbiAgICAgIGlmIChjb250ZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utils = __webpack_require__(3);

	var _exception = __webpack_require__(4);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined;

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: [context[field], field]
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvZWFjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O3FCQUErQyxVQUFVOzt5QkFDbkMsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksQ0FBQyxPQUFPLEVBQUU7QUFDWixZQUFNLDJCQUFjLDZCQUE2QixDQUFDLENBQUM7S0FDcEQ7O0FBRUQsUUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUU7UUFDZixPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU87UUFDekIsQ0FBQyxHQUFHLENBQUM7UUFDTCxHQUFHLEdBQUcsRUFBRTtRQUNSLElBQUksWUFBQSxDQUFDOztBQUVULFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDaEIsVUFBSSxHQUFHLG1CQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQzs7QUFFRCxhQUFTLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtBQUN6QyxVQUFJLElBQUksRUFBRTtBQUNSLFlBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQztBQUN6QixZQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7T0FDcEI7O0FBRUQsU0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzdCLFlBQUksRUFBRSxJQUFJO0FBQ1YsbUJBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUM7T0FDckMsQ0FBQyxDQUFDO0tBQ0o7O0FBRUQsUUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQzFDLFVBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNwQixhQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2QyxjQUFJLENBQUMsSUFBSSxPQUFPLEVBQUU7QUFDaEIseUJBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1dBQy9DO1NBQ0Y7T0FDRixNQUFNO0FBQ0wsWUFBSSxRQUFRLFlBQUEsQ0FBQzs7QUFFYixhQUFLLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRTtBQUN2QixjQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Ozs7QUFJL0IsZ0JBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQiwyQkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDaEM7QUFDRCxvQkFBUSxHQUFHLEdBQUcsQ0FBQztBQUNmLGFBQUMsRUFBRSxDQUFDO1dBQ0w7U0FDRjtBQUNELFlBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQix1QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RDO09BQ0Y7S0FDRjs7QUFFRCxRQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDWCxTQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JCOztBQUVELFdBQU8sR0FBRyxDQUFDO0dBQ1osQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoiZWFjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlRnJhbWUsIGlzQXJyYXksIGlzRnVuY3Rpb259IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2VhY2gnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdNdXN0IHBhc3MgaXRlcmF0b3IgdG8gI2VhY2gnKTtcbiAgICB9XG5cbiAgICBsZXQgZm4gPSBvcHRpb25zLmZuLFxuICAgICAgICBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgcmV0ID0gJycsXG4gICAgICAgIGRhdGE7XG5cbiAgICBpZiAoaXNGdW5jdGlvbihjb250ZXh0KSkgeyBjb250ZXh0ID0gY29udGV4dC5jYWxsKHRoaXMpOyB9XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhKSB7XG4gICAgICBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleGVjSXRlcmF0aW9uKGZpZWxkLCBpbmRleCwgbGFzdCkge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgZGF0YS5rZXkgPSBmaWVsZDtcbiAgICAgICAgZGF0YS5pbmRleCA9IGluZGV4O1xuICAgICAgICBkYXRhLmZpcnN0ID0gaW5kZXggPT09IDA7XG4gICAgICAgIGRhdGEubGFzdCA9ICEhbGFzdDtcbiAgICAgIH1cblxuICAgICAgcmV0ID0gcmV0ICsgZm4oY29udGV4dFtmaWVsZF0sIHtcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgYmxvY2tQYXJhbXM6IFtjb250ZXh0W2ZpZWxkXSwgZmllbGRdXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dCAmJiB0eXBlb2YgY29udGV4dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChpc0FycmF5KGNvbnRleHQpKSB7XG4gICAgICAgIGZvciAobGV0IGogPSBjb250ZXh0Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgIGlmIChpIGluIGNvbnRleHQpIHtcbiAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24oaSwgaSwgaSA9PT0gY29udGV4dC5sZW5ndGggLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwcmlvcktleTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gY29udGV4dCkge1xuICAgICAgICAgIGlmIChjb250ZXh0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIC8vIFdlJ3JlIHJ1bm5pbmcgdGhlIGl0ZXJhdGlvbnMgb25lIHN0ZXAgb3V0IG9mIHN5bmMgc28gd2UgY2FuIGRldGVjdFxuICAgICAgICAgICAgLy8gdGhlIGxhc3QgaXRlcmF0aW9uIHdpdGhvdXQgaGF2ZSB0byBzY2FuIHRoZSBvYmplY3QgdHdpY2UgYW5kIGNyZWF0ZVxuICAgICAgICAgICAgLy8gYW4gaXRlcm1lZGlhdGUga2V5cyBhcnJheS5cbiAgICAgICAgICAgIGlmIChwcmlvcktleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24ocHJpb3JLZXksIGkgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByaW9yS2V5ID0ga2V5O1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGV4ZWNJdGVyYXRpb24ocHJpb3JLZXksIGkgLSAxLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpID09PSAwKSB7XG4gICAgICByZXQgPSBpbnZlcnNlKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuIl19


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _exception = __webpack_require__(4);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozt5QkFBc0IsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsaUNBQWdDO0FBQ3ZFLFFBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O0FBRTFCLGFBQU8sU0FBUyxDQUFDO0tBQ2xCLE1BQU07O0FBRUwsWUFBTSwyQkFBYyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDdkY7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJoZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbigvKiBbYXJncywgXW9wdGlvbnMgKi8pIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gQSBtaXNzaW5nIGZpZWxkIGluIGEge3tmb299fSBjb25zdHJ1Y3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ01pc3NpbmcgaGVscGVyOiBcIicgKyBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdLm5hbWUgKyAnXCInKTtcbiAgICB9XG4gIH0pO1xufVxuIl19


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(3);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};

	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBa0MsVUFBVTs7cUJBRTdCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVMsV0FBVyxFQUFFLE9BQU8sRUFBRTtBQUMzRCxRQUFJLGtCQUFXLFdBQVcsQ0FBQyxFQUFFO0FBQUUsaUJBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQUU7Ozs7O0FBS3RFLFFBQUksQUFBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsV0FBVyxJQUFLLGVBQVEsV0FBVyxDQUFDLEVBQUU7QUFDdkUsYUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCLE1BQU07QUFDTCxhQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7R0FDRixDQUFDLENBQUM7O0FBRUgsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxXQUFXLEVBQUUsT0FBTyxFQUFFO0FBQy9ELFdBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztHQUN2SCxDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJpZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNFbXB0eSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignaWYnLCBmdW5jdGlvbihjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGNvbmRpdGlvbmFsKSkgeyBjb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsLmNhbGwodGhpcyk7IH1cblxuICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgaXMgdG8gcmVuZGVyIHRoZSBwb3NpdGl2ZSBwYXRoIGlmIHRoZSB2YWx1ZSBpcyB0cnV0aHkgYW5kIG5vdCBlbXB0eS5cbiAgICAvLyBUaGUgYGluY2x1ZGVaZXJvYCBvcHRpb24gbWF5IGJlIHNldCB0byB0cmVhdCB0aGUgY29uZHRpb25hbCBhcyBwdXJlbHkgbm90IGVtcHR5IGJhc2VkIG9uIHRoZVxuICAgIC8vIGJlaGF2aW9yIG9mIGlzRW1wdHkuIEVmZmVjdGl2ZWx5IHRoaXMgZGV0ZXJtaW5lcyBpZiAwIGlzIGhhbmRsZWQgYnkgdGhlIHBvc2l0aXZlIHBhdGggb3IgbmVnYXRpdmUuXG4gICAgaWYgKCghb3B0aW9ucy5oYXNoLmluY2x1ZGVaZXJvICYmICFjb25kaXRpb25hbCkgfHwgaXNFbXB0eShjb25kaXRpb25hbCkpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3VubGVzcycsIGZ1bmN0aW9uKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnNbJ2lmJ10uY2FsbCh0aGlzLCBjb25kaXRpb25hbCwge2ZuOiBvcHRpb25zLmludmVyc2UsIGludmVyc2U6IG9wdGlvbnMuZm4sIGhhc2g6IG9wdGlvbnMuaGFzaH0pO1xuICB9KTtcbn1cbiJdfQ==


/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsa0NBQWlDO0FBQzlELFFBQUksSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ2xCLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0MsVUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6Qjs7QUFFRCxRQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxRQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtBQUM5QixXQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDNUIsTUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO0FBQ3JELFdBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUM1QjtBQUNELFFBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRWhCLFlBQVEsQ0FBQyxHQUFHLE1BQUEsQ0FBWixRQUFRLEVBQVMsSUFBSSxDQUFDLENBQUM7R0FDeEIsQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uKC8qIG1lc3NhZ2UsIG9wdGlvbnMgKi8pIHtcbiAgICBsZXQgYXJncyA9IFt1bmRlZmluZWRdLFxuICAgICAgICBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIGxldCBsZXZlbCA9IDE7XG4gICAgaWYgKG9wdGlvbnMuaGFzaC5sZXZlbCAhPSBudWxsKSB7XG4gICAgICBsZXZlbCA9IG9wdGlvbnMuaGFzaC5sZXZlbDtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGEubGV2ZWwgIT0gbnVsbCkge1xuICAgICAgbGV2ZWwgPSBvcHRpb25zLmRhdGEubGV2ZWw7XG4gICAgfVxuICAgIGFyZ3NbMF0gPSBsZXZlbDtcblxuICAgIGluc3RhbmNlLmxvZyguLi4gYXJncyk7XG4gIH0pO1xufVxuIl19


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	};

	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9va3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3JELFdBQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUMxQixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJsb29rdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9va3VwJywgZnVuY3Rpb24ob2JqLCBmaWVsZCkge1xuICAgIHJldHVybiBvYmogJiYgb2JqW2ZpZWxkXTtcbiAgfSk7XG59XG4iXX0=


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(3);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;

	      return fn(context, {
	        data: data,
	        blockParams: [context]
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvd2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUFrQyxVQUFVOztxQkFFN0IsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLENBQUMsZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNyQixVQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDOztBQUV4QixhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUU7QUFDakIsWUFBSSxFQUFFLElBQUk7QUFDVixtQkFBVyxFQUFFLENBQUMsT0FBTyxDQUFDO09BQ3ZCLENBQUMsQ0FBQztLQUNKLE1BQU07QUFDTCxhQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJ3aXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc0VtcHR5LCBpc0Z1bmN0aW9ufSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCd3aXRoJywgZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQpKSB7IGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7IH1cblxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm47XG5cbiAgICBpZiAoIWlzRW1wdHkoY29udGV4dCkpIHtcbiAgICAgIGxldCBkYXRhID0gb3B0aW9ucy5kYXRhO1xuXG4gICAgICByZXR1cm4gZm4oY29udGV4dCwge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBibG9ja1BhcmFtczogW2NvbnRleHRdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9XG4gIH0pO1xufVxuIl19


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _decoratorsInline = __webpack_require__(14);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Z0NBQTJCLHFCQUFxQjs7OztBQUV6QyxTQUFTLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtBQUNsRCxnQ0FBZSxRQUFRLENBQUMsQ0FBQztDQUMxQiIsImZpbGUiOiJkZWNvcmF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2lzdGVySW5saW5lIGZyb20gJy4vZGVjb3JhdG9ycy9pbmxpbmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyhpbnN0YW5jZSkge1xuICByZWdpc3RlcklubGluZShpbnN0YW5jZSk7XG59XG5cbiJdfQ==


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(3);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMvaW5saW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQXFCLFVBQVU7O3FCQUVoQixVQUFTLFFBQVEsRUFBRTtBQUNoQyxVQUFRLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFO0FBQzNFLFFBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ25CLFdBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLFNBQUcsR0FBRyxVQUFTLE9BQU8sRUFBRSxPQUFPLEVBQUU7O0FBRS9CLFlBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDbEMsaUJBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxRCxZQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLGlCQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUM5QixlQUFPLEdBQUcsQ0FBQztPQUNaLENBQUM7S0FDSDs7QUFFRCxTQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUU3QyxXQUFPLEdBQUcsQ0FBQztHQUNaLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6ImlubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVyRGVjb3JhdG9yKCdpbmxpbmUnLCBmdW5jdGlvbihmbiwgcHJvcHMsIGNvbnRhaW5lciwgb3B0aW9ucykge1xuICAgIGxldCByZXQgPSBmbjtcbiAgICBpZiAoIXByb3BzLnBhcnRpYWxzKSB7XG4gICAgICBwcm9wcy5wYXJ0aWFscyA9IHt9O1xuICAgICAgcmV0ID0gZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGFydGlhbHMgc3RhY2sgZnJhbWUgcHJpb3IgdG8gZXhlYy5cbiAgICAgICAgbGV0IG9yaWdpbmFsID0gY29udGFpbmVyLnBhcnRpYWxzO1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBleHRlbmQoe30sIG9yaWdpbmFsLCBwcm9wcy5wYXJ0aWFscyk7XG4gICAgICAgIGxldCByZXQgPSBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3JpZ2luYWw7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHByb3BzLnBhcnRpYWxzW29wdGlvbnMuYXJnc1swXV0gPSBvcHRpb25zLmZuO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG4iXX0=


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(3);

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2xvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUFzQixTQUFTOztBQUUvQixJQUFJLE1BQU0sR0FBRztBQUNYLFdBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztBQUM3QyxPQUFLLEVBQUUsTUFBTTs7O0FBR2IsYUFBVyxFQUFFLHFCQUFTLEtBQUssRUFBRTtBQUMzQixRQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUM3QixVQUFJLFFBQVEsR0FBRyxlQUFRLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDOUQsVUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO0FBQ2pCLGFBQUssR0FBRyxRQUFRLENBQUM7T0FDbEIsTUFBTTtBQUNMLGFBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO09BQzdCO0tBQ0Y7O0FBRUQsV0FBTyxLQUFLLENBQUM7R0FDZDs7O0FBR0QsS0FBRyxFQUFFLGFBQVMsS0FBSyxFQUFjO0FBQy9CLFNBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVsQyxRQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEVBQUU7QUFDL0UsVUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxVQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFOztBQUNwQixjQUFNLEdBQUcsS0FBSyxDQUFDO09BQ2hCOzt3Q0FQbUIsT0FBTztBQUFQLGVBQU87OztBQVEzQixhQUFPLENBQUMsTUFBTSxPQUFDLENBQWYsT0FBTyxFQUFZLE9BQU8sQ0FBQyxDQUFDO0tBQzdCO0dBQ0Y7Q0FDRixDQUFDOztxQkFFYSxNQUFNIiwiZmlsZSI6ImxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5kZXhPZn0gZnJvbSAnLi91dGlscyc7XG5cbmxldCBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcbiAgbGV2ZWw6ICdpbmZvJyxcblxuICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG4gIGxvb2t1cExldmVsOiBmdW5jdGlvbihsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbGV2ZWxNYXAgPSBpbmRleE9mKGxvZ2dlci5tZXRob2RNYXAsIGxldmVsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcbiAgICAgICAgbGV2ZWwgPSBsZXZlbE1hcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH0sXG5cbiAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcbiAgbG9nOiBmdW5jdGlvbihsZXZlbCwgLi4ubWVzc2FnZSkge1xuICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWwpIHtcbiAgICAgIGxldCBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIGlmICghY29uc29sZVttZXRob2RdKSB7ICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIG1ldGhvZCA9ICdsb2cnO1xuICAgICAgfVxuICAgICAgY29uc29sZVttZXRob2RdKC4uLm1lc3NhZ2UpOyAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcjtcbiJdfQ==


/***/ },
/* 16 */
/***/ function(module, exports) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDMUIsTUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDdEI7O0FBRUQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBVztBQUN2RSxTQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0NBQ3pCLENBQUM7O3FCQUVhLFVBQVUiLCJmaWxlIjoic2FmZS1zdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcbiAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnJyArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FmZVN0cmluZztcbiJdfQ==


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	// istanbul ignore next

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _utils = __webpack_require__(3);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(4);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(2);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    _setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;

	  function _setup(options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  }

	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context != depths[0]) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  // Use the current closure context to save the partial-block if this partial
	  var currentPartialBlock = options.data && options.data['partial-block'];
	  options.partial = true;

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    (function () {
	      options.data = _base.createFrame(options.data);
	      // Wrapper function to get access to currentPartialBlock from the closure
	      var fn = options.fn;
	      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context, options) {
	        // Restore the partial-block from the closure for the execution of the block
	        // i.e. the part inside the block of the partial call.
	        options.data = _base.createFrame(options.data);
	        options.data['partial-block'] = currentPartialBlock;
	        return fn(context, options);
	      };
	      if (fn.partials) {
	        options.partials = Utils.extend({}, options.partials, fn.partials);
	      }
	    })();
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3J1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQXVCLFNBQVM7O0lBQXBCLEtBQUs7O3lCQUNLLGFBQWE7Ozs7b0JBQzhCLFFBQVE7O0FBRWxFLFNBQVMsYUFBYSxDQUFDLFlBQVksRUFBRTtBQUMxQyxNQUFNLGdCQUFnQixHQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUN2RCxlQUFlLDBCQUFvQixDQUFDOztBQUUxQyxNQUFJLGdCQUFnQixLQUFLLGVBQWUsRUFBRTtBQUN4QyxRQUFJLGdCQUFnQixHQUFHLGVBQWUsRUFBRTtBQUN0QyxVQUFNLGVBQWUsR0FBRyx1QkFBaUIsZUFBZSxDQUFDO1VBQ25ELGdCQUFnQixHQUFHLHVCQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBQzVELFlBQU0sMkJBQWMseUZBQXlGLEdBQ3ZHLHFEQUFxRCxHQUFHLGVBQWUsR0FBRyxtREFBbUQsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNoSyxNQUFNOztBQUVMLFlBQU0sMkJBQWMsd0ZBQXdGLEdBQ3RHLGlEQUFpRCxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNuRjtHQUNGO0NBQ0Y7O0FBRU0sU0FBUyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTs7QUFFMUMsTUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNSLFVBQU0sMkJBQWMsbUNBQW1DLENBQUMsQ0FBQztHQUMxRDtBQUNELE1BQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO0FBQ3ZDLFVBQU0sMkJBQWMsMkJBQTJCLEdBQUcsT0FBTyxZQUFZLENBQUMsQ0FBQztHQUN4RTs7QUFFRCxjQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDOzs7O0FBSWxELEtBQUcs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LEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0FBQ3pFLE1BQUksRUFBRSxDQUFDLFNBQVMsRUFBRTtBQUNoQixRQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDZixRQUFJLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDNUYsU0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7R0FDM0I7QUFDRCxTQUFPLElBQUksQ0FBQztDQUNiIiwiZmlsZSI6InJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi9leGNlcHRpb24nO1xuaW1wb3J0IHsgQ09NUElMRVJfUkVWSVNJT04sIFJFVklTSU9OX0NIQU5HRVMsIGNyZWF0ZUZyYW1lIH0gZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmV2aXNpb24oY29tcGlsZXJJbmZvKSB7XG4gIGNvbnN0IGNvbXBpbGVyUmV2aXNpb24gPSBjb21waWxlckluZm8gJiYgY29tcGlsZXJJbmZvWzBdIHx8IDEsXG4gICAgICAgIGN1cnJlbnRSZXZpc2lvbiA9IENPTVBJTEVSX1JFVklTSU9OO1xuXG4gIGlmIChjb21waWxlclJldmlzaW9uICE9PSBjdXJyZW50UmV2aXNpb24pIHtcbiAgICBpZiAoY29tcGlsZXJSZXZpc2lvbiA8IGN1cnJlbnRSZXZpc2lvbikge1xuICAgICAgY29uc3QgcnVudGltZVZlcnNpb25zID0gUkVWSVNJT05fQ0hBTkdFU1tjdXJyZW50UmV2aXNpb25dLFxuICAgICAgICAgICAgY29tcGlsZXJWZXJzaW9ucyA9IFJFVklTSU9OX0NIQU5HRVNbY29tcGlsZXJSZXZpc2lvbl07XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhbiBvbGRlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiAnICtcbiAgICAgICAgICAgICdQbGVhc2UgdXBkYXRlIHlvdXIgcHJlY29tcGlsZXIgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgcnVudGltZVZlcnNpb25zICsgJykgb3IgZG93bmdyYWRlIHlvdXIgcnVudGltZSB0byBhbiBvbGRlciB2ZXJzaW9uICgnICsgY29tcGlsZXJWZXJzaW9ucyArICcpLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2UgdGhlIGVtYmVkZGVkIHZlcnNpb24gaW5mbyBzaW5jZSB0aGUgcnVudGltZSBkb2Vzbid0IGtub3cgYWJvdXQgdGhpcyByZXZpc2lvbiB5ZXRcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGEgbmV3ZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArXG4gICAgICAgICAgICAnUGxlYXNlIHVwZGF0ZSB5b3VyIHJ1bnRpbWUgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgY29tcGlsZXJJbmZvWzFdICsgJykuJyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMsIGVudikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoIWVudikge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ05vIGVudmlyb25tZW50IHBhc3NlZCB0byB0ZW1wbGF0ZScpO1xuICB9XG4gIGlmICghdGVtcGxhdGVTcGVjIHx8ICF0ZW1wbGF0ZVNwZWMubWFpbikge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1Vua25vd24gdGVtcGxhdGUgb2JqZWN0OiAnICsgdHlwZW9mIHRlbXBsYXRlU3BlYyk7XG4gIH1cblxuICB0ZW1wbGF0ZVNwZWMubWFpbi5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWMubWFpbl9kO1xuXG4gIC8vIE5vdGU6IFVzaW5nIGVudi5WTSByZWZlcmVuY2VzIHJhdGhlciB0aGFuIGxvY2FsIHZhciByZWZlcmVuY2VzIHRocm91Z2hvdXQgdGhpcyBzZWN0aW9uIHRvIGFsbG93XG4gIC8vIGZvciBleHRlcm5hbCB1c2VycyB0byBvdmVycmlkZSB0aGVzZSBhcyBwc3VlZG8tc3VwcG9ydGVkIEFQSXMuXG4gIGVudi5WTS5jaGVja1JldmlzaW9uKHRlbXBsYXRlU3BlYy5jb21waWxlcik7XG5cbiAgZnVuY3Rpb24gaW52b2tlUGFydGlhbFdyYXBwZXIocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAgIGNvbnRleHQgPSBVdGlscy5leHRlbmQoe30sIGNvbnRleHQsIG9wdGlvbnMuaGFzaCk7XG4gICAgfVxuXG4gICAgcGFydGlhbCA9IGVudi5WTS5yZXNvbHZlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIGxldCByZXN1bHQgPSBlbnYuVk0uaW52b2tlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHJlc3VsdCA9PSBudWxsICYmIGVudi5jb21waWxlKSB7XG4gICAgICBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV0gPSBlbnYuY29tcGlsZShwYXJ0aWFsLCB0ZW1wbGF0ZVNwZWMuY29tcGlsZXJPcHRpb25zLCBlbnYpO1xuICAgICAgcmVzdWx0ID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgIGlmIChvcHRpb25zLmluZGVudCkge1xuICAgICAgICBsZXQgbGluZXMgPSByZXN1bHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGlmICghbGluZXNbaV0gJiYgaSArIDEgPT09IGwpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpbmVzW2ldID0gb3B0aW9ucy5pbmRlbnQgKyBsaW5lc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBsaW5lcy5qb2luKCdcXG4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1RoZSBwYXJ0aWFsICcgKyBvcHRpb25zLm5hbWUgKyAnIGNvdWxkIG5vdCBiZSBjb21waWxlZCB3aGVuIHJ1bm5pbmcgaW4gcnVudGltZS1vbmx5IG1vZGUnKTtcbiAgICB9XG4gIH1cblxuICAvLyBKdXN0IGFkZCB3YXRlclxuICBsZXQgY29udGFpbmVyID0ge1xuICAgIHN0cmljdDogZnVuY3Rpb24ob2JqLCBuYW1lKSB7XG4gICAgICBpZiAoIShuYW1lIGluIG9iaikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignXCInICsgbmFtZSArICdcIiBub3QgZGVmaW5lZCBpbiAnICsgb2JqKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmpbbmFtZV07XG4gICAgfSxcbiAgICBsb29rdXA6IGZ1bmN0aW9uKGRlcHRocywgbmFtZSkge1xuICAgICAgY29uc3QgbGVuID0gZGVwdGhzLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGRlcHRoc1tpXSAmJiBkZXB0aHNbaV1bbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBkZXB0aHNbaV1bbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxhbWJkYTogZnVuY3Rpb24oY3VycmVudCwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBjdXJyZW50ID09PSAnZnVuY3Rpb24nID8gY3VycmVudC5jYWxsKGNvbnRleHQpIDogY3VycmVudDtcbiAgICB9LFxuXG4gICAgZXNjYXBlRXhwcmVzc2lvbjogVXRpbHMuZXNjYXBlRXhwcmVzc2lvbixcbiAgICBpbnZva2VQYXJ0aWFsOiBpbnZva2VQYXJ0aWFsV3JhcHBlcixcblxuICAgIGZuOiBmdW5jdGlvbihpKSB7XG4gICAgICBsZXQgcmV0ID0gdGVtcGxhdGVTcGVjW2ldO1xuICAgICAgcmV0LmRlY29yYXRvciA9IHRlbXBsYXRlU3BlY1tpICsgJ19kJ107XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0sXG5cbiAgICBwcm9ncmFtczogW10sXG4gICAgcHJvZ3JhbTogZnVuY3Rpb24oaSwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuICAgICAgbGV0IHByb2dyYW1XcmFwcGVyID0gdGhpcy5wcm9ncmFtc1tpXSxcbiAgICAgICAgICBmbiA9IHRoaXMuZm4oaSk7XG4gICAgICBpZiAoZGF0YSB8fCBkZXB0aHMgfHwgYmxvY2tQYXJhbXMgfHwgZGVjbGFyZWRCbG9ja1BhcmFtcykge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHdyYXBQcm9ncmFtKHRoaXMsIGksIGZuLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgICAgIH0gZWxzZSBpZiAoIXByb2dyYW1XcmFwcGVyKSB7XG4gICAgICAgIHByb2dyYW1XcmFwcGVyID0gdGhpcy5wcm9ncmFtc1tpXSA9IHdyYXBQcm9ncmFtKHRoaXMsIGksIGZuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9ncmFtV3JhcHBlcjtcbiAgICB9LFxuXG4gICAgZGF0YTogZnVuY3Rpb24odmFsdWUsIGRlcHRoKSB7XG4gICAgICB3aGlsZSAodmFsdWUgJiYgZGVwdGgtLSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLl9wYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBtZXJnZTogZnVuY3Rpb24ocGFyYW0sIGNvbW1vbikge1xuICAgICAgbGV0IG9iaiA9IHBhcmFtIHx8IGNvbW1vbjtcblxuICAgICAgaWYgKHBhcmFtICYmIGNvbW1vbiAmJiAocGFyYW0gIT09IGNvbW1vbikpIHtcbiAgICAgICAgb2JqID0gVXRpbHMuZXh0ZW5kKHt9LCBjb21tb24sIHBhcmFtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuXG4gICAgbm9vcDogZW52LlZNLm5vb3AsXG4gICAgY29tcGlsZXJJbmZvOiB0ZW1wbGF0ZVNwZWMuY29tcGlsZXJcbiAgfTtcblxuICBmdW5jdGlvbiByZXQoY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGRhdGEgPSBvcHRpb25zLmRhdGE7XG5cbiAgICBfc2V0dXAob3B0aW9ucyk7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwgJiYgdGVtcGxhdGVTcGVjLnVzZURhdGEpIHtcbiAgICAgIGRhdGEgPSBpbml0RGF0YShjb250ZXh0LCBkYXRhKTtcbiAgICB9XG4gICAgbGV0IGRlcHRocyxcbiAgICAgICAgYmxvY2tQYXJhbXMgPSB0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgPyBbXSA6IHVuZGVmaW5lZDtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocykge1xuICAgICAgaWYgKG9wdGlvbnMuZGVwdGhzKSB7XG4gICAgICAgIGRlcHRocyA9IGNvbnRleHQgIT0gb3B0aW9ucy5kZXB0aHNbMF0gPyBbY29udGV4dF0uY29uY2F0KG9wdGlvbnMuZGVwdGhzKSA6IG9wdGlvbnMuZGVwdGhzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVwdGhzID0gW2NvbnRleHRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1haW4oY29udGV4dC8qLCBvcHRpb25zKi8pIHtcbiAgICAgIHJldHVybiAnJyArIHRlbXBsYXRlU3BlYy5tYWluKGNvbnRhaW5lciwgY29udGV4dCwgY29udGFpbmVyLmhlbHBlcnMsIGNvbnRhaW5lci5wYXJ0aWFscywgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gICAgfVxuICAgIG1haW4gPSBleGVjdXRlRGVjb3JhdG9ycyh0ZW1wbGF0ZVNwZWMubWFpbiwgbWFpbiwgY29udGFpbmVyLCBvcHRpb25zLmRlcHRocyB8fCBbXSwgZGF0YSwgYmxvY2tQYXJhbXMpO1xuICAgIHJldHVybiBtYWluKGNvbnRleHQsIG9wdGlvbnMpO1xuICB9XG4gIHJldC5pc1RvcCA9IHRydWU7XG5cbiAgZnVuY3Rpb24gX3NldHVwKG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMucGFydGlhbCkge1xuICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5oZWxwZXJzLCBlbnYuaGVscGVycyk7XG5cbiAgICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlUGFydGlhbCkge1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5wYXJ0aWFscywgZW52LnBhcnRpYWxzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlUGFydGlhbCB8fCB0ZW1wbGF0ZVNwZWMudXNlRGVjb3JhdG9ycykge1xuICAgICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLmRlY29yYXRvcnMsIGVudi5kZWNvcmF0b3JzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBvcHRpb25zLmhlbHBlcnM7XG4gICAgICBjb250YWluZXIucGFydGlhbHMgPSBvcHRpb25zLnBhcnRpYWxzO1xuICAgICAgY29udGFpbmVyLmRlY29yYXRvcnMgPSBvcHRpb25zLmRlY29yYXRvcnM7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBQcm9ncmFtKGNvbnRhaW5lciwgaSwgZm4sIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgZnVuY3Rpb24gcHJvZyhjb250ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgICBsZXQgY3VycmVudERlcHRocyA9IGRlcHRocztcbiAgICBpZiAoZGVwdGhzICYmIGNvbnRleHQgIT0gZGVwdGhzWzBdKSB7XG4gICAgICBjdXJyZW50RGVwdGhzID0gW2NvbnRleHRdLmNvbmNhdChkZXB0aHMpO1xuICAgIH1cblxuICAgIHJldHVybiBmbihjb250YWluZXIsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsXG4gICAgICAgIG9wdGlvbnMuZGF0YSB8fCBkYXRhLFxuICAgICAgICBibG9ja1BhcmFtcyAmJiBbb3B0aW9ucy5ibG9ja1BhcmFtc10uY29uY2F0KGJsb2NrUGFyYW1zKSxcbiAgICAgICAgY3VycmVudERlcHRocyk7XG4gIH1cblxuICBwcm9nID0gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcyk7XG5cbiAgcHJvZy5wcm9ncmFtID0gaTtcbiAgcHJvZy5kZXB0aCA9IGRlcHRocyA/IGRlcHRocy5sZW5ndGggOiAwO1xuICBwcm9nLmJsb2NrUGFyYW1zID0gZGVjbGFyZWRCbG9ja1BhcmFtcyB8fCAwO1xuICByZXR1cm4gcHJvZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgaWYgKCFwYXJ0aWFsKSB7XG4gICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gJ0BwYXJ0aWFsLWJsb2NrJykge1xuICAgICAgcGFydGlhbCA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdO1xuICAgIH1cbiAgfSBlbHNlIGlmICghcGFydGlhbC5jYWxsICYmICFvcHRpb25zLm5hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgZHluYW1pYyBwYXJ0aWFsIHRoYXQgcmV0dXJuZWQgYSBzdHJpbmdcbiAgICBvcHRpb25zLm5hbWUgPSBwYXJ0aWFsO1xuICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW3BhcnRpYWxdO1xuICB9XG4gIHJldHVybiBwYXJ0aWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIC8vIFVzZSB0aGUgY3VycmVudCBjbG9zdXJlIGNvbnRleHQgdG8gc2F2ZSB0aGUgcGFydGlhbC1ibG9jayBpZiB0aGlzIHBhcnRpYWxcbiAgY29uc3QgY3VycmVudFBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcbiAgb3B0aW9ucy5wYXJ0aWFsID0gdHJ1ZTtcblxuICBsZXQgcGFydGlhbEJsb2NrO1xuICBpZiAob3B0aW9ucy5mbiAmJiBvcHRpb25zLmZuICE9PSBub29wKSB7XG4gICAgb3B0aW9ucy5kYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAvLyBXcmFwcGVyIGZ1bmN0aW9uIHRvIGdldCBhY2Nlc3MgdG8gY3VycmVudFBhcnRpYWxCbG9jayBmcm9tIHRoZSBjbG9zdXJlXG4gICAgbGV0IGZuID0gb3B0aW9ucy5mbjtcbiAgICBwYXJ0aWFsQmxvY2sgPSBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGZ1bmN0aW9uIHBhcnRpYWxCbG9ja1dyYXBwZXIoY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgLy8gUmVzdG9yZSB0aGUgcGFydGlhbC1ibG9jayBmcm9tIHRoZSBjbG9zdXJlIGZvciB0aGUgZXhlY3V0aW9uIG9mIHRoZSBibG9ja1xuICAgICAgLy8gaS5lLiB0aGUgcGFydCBpbnNpZGUgdGhlIGJsb2NrIG9mIHRoZSBwYXJ0aWFsIGNhbGwuXG4gICAgICBvcHRpb25zLmRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBjdXJyZW50UGFydGlhbEJsb2NrO1xuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgaWYgKGZuLnBhcnRpYWxzKSB7XG4gICAgICBvcHRpb25zLnBhcnRpYWxzID0gVXRpbHMuZXh0ZW5kKHt9LCBvcHRpb25zLnBhcnRpYWxzLCBmbi5wYXJ0aWFscyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCAmJiBwYXJ0aWFsQmxvY2spIHtcbiAgICBwYXJ0aWFsID0gcGFydGlhbEJsb2NrO1xuICB9XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1RoZSBwYXJ0aWFsICcgKyBvcHRpb25zLm5hbWUgKyAnIGNvdWxkIG5vdCBiZSBmb3VuZCcpO1xuICB9IGVsc2UgaWYgKHBhcnRpYWwgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIHJldHVybiBwYXJ0aWFsKGNvbnRleHQsIG9wdGlvbnMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkgeyByZXR1cm4gJyc7IH1cblxuZnVuY3Rpb24gaW5pdERhdGEoY29udGV4dCwgZGF0YSkge1xuICBpZiAoIWRhdGEgfHwgISgncm9vdCcgaW4gZGF0YSkpIHtcbiAgICBkYXRhID0gZGF0YSA/IGNyZWF0ZUZyYW1lKGRhdGEpIDoge307XG4gICAgZGF0YS5yb290ID0gY29udGV4dDtcbiAgfVxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcykge1xuICBpZiAoZm4uZGVjb3JhdG9yKSB7XG4gICAgbGV0IHByb3BzID0ge307XG4gICAgcHJvZyA9IGZuLmRlY29yYXRvcihwcm9nLCBwcm9wcywgY29udGFpbmVyLCBkZXB0aHMgJiYgZGVwdGhzWzBdLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgICBVdGlscy5leHRlbmQocHJvZywgcHJvcHMpO1xuICB9XG4gIHJldHVybiBwcm9nO1xufVxuIl19


/***/ },
/* 18 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};

	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL25vLWNvbmZsaWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3FCQUNlLFVBQVMsVUFBVSxFQUFFOztBQUVsQyxNQUFJLElBQUksR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxHQUFHLE1BQU07TUFDdEQsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7O0FBRWxDLFlBQVUsQ0FBQyxVQUFVLEdBQUcsWUFBVztBQUNqQyxRQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO0FBQ2xDLFVBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO0tBQy9CO0FBQ0QsV0FBTyxVQUFVLENBQUM7R0FDbkIsQ0FBQztDQUNIIiwiZmlsZSI6Im5vLWNvbmZsaWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIHdpbmRvdyAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oSGFuZGxlYmFycykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBsZXQgcm9vdCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93LFxuICAgICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcbiAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xuICAgIH1cbiAgICByZXR1cm4gSGFuZGxlYmFycztcbiAgfTtcbn1cbiJdfQ==

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var AST = {
	  // Public API used to evaluate derived attributes regarding AST nodes
	  helpers: {
	    // a mustache is definitely a helper if:
	    // * it is an eligible helper, and
	    // * it has at least one parameter or hash segment
	    helperExpression: function helperExpression(node) {
	      return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
	    },

	    scopedId: function scopedId(path) {
	      return (/^\.|this\b/.test(path.original)
	      );
	    },

	    // an ID is simple if it only has one part, and that part is not
	    // `..` or `this`.
	    simpleId: function simpleId(path) {
	      return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
	    }
	  }
	};

	// Must be exported as an object rather than the root of the module as the jison lexer
	// must modify the object to operate properly.
	exports['default'] = AST;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2NvbXBpbGVyL2FzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFJLEdBQUcsR0FBRzs7QUFFUixTQUFPLEVBQUU7Ozs7QUFJUCxvQkFBZ0IsRUFBRSwwQkFBUyxJQUFJLEVBQUU7QUFDL0IsYUFBTyxBQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssZUFBZSxJQUM3QixDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssbUJBQW1CLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxnQkFBZ0IsQ0FBQSxJQUNuRSxDQUFDLEVBQUUsQUFBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFLLElBQUksQ0FBQyxJQUFJLENBQUEsQUFBQyxBQUFDLENBQUM7S0FDaEU7O0FBRUQsWUFBUSxFQUFFLGtCQUFTLElBQUksRUFBRTtBQUN2QixhQUFPLEFBQUMsYUFBWSxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQUM7S0FDM0M7Ozs7QUFJRCxZQUFRLEVBQUUsa0JBQVMsSUFBSSxFQUFFO0FBQ3ZCLGFBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQzlFO0dBQ0Y7Q0FDRixDQUFDOzs7O3FCQUthLEdBQUciLCJmaWxlIjoiYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IEFTVCA9IHtcbiAgLy8gUHVibGljIEFQSSB1c2VkIHRvIGV2YWx1YXRlIGRlcml2ZWQgYXR0cmlidXRlcyByZWdhcmRpbmcgQVNUIG5vZGVzXG4gIGhlbHBlcnM6IHtcbiAgICAvLyBhIG11c3RhY2hlIGlzIGRlZmluaXRlbHkgYSBoZWxwZXIgaWY6XG4gICAgLy8gKiBpdCBpcyBhbiBlbGlnaWJsZSBoZWxwZXIsIGFuZFxuICAgIC8vICogaXQgaGFzIGF0IGxlYXN0IG9uZSBwYXJhbWV0ZXIgb3IgaGFzaCBzZWdtZW50XG4gICAgaGVscGVyRXhwcmVzc2lvbjogZnVuY3Rpb24obm9kZSkge1xuICAgICAgcmV0dXJuIChub2RlLnR5cGUgPT09ICdTdWJFeHByZXNzaW9uJylcbiAgICAgICAgICB8fCAoKG5vZGUudHlwZSA9PT0gJ011c3RhY2hlU3RhdGVtZW50JyB8fCBub2RlLnR5cGUgPT09ICdCbG9ja1N0YXRlbWVudCcpXG4gICAgICAgICAgICAmJiAhISgobm9kZS5wYXJhbXMgJiYgbm9kZS5wYXJhbXMubGVuZ3RoKSB8fCBub2RlLmhhc2gpKTtcbiAgICB9LFxuXG4gICAgc2NvcGVkSWQ6IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgIHJldHVybiAoL15cXC58dGhpc1xcYi8pLnRlc3QocGF0aC5vcmlnaW5hbCk7XG4gICAgfSxcblxuICAgIC8vIGFuIElEIGlzIHNpbXBsZSBpZiBpdCBvbmx5IGhhcyBvbmUgcGFydCwgYW5kIHRoYXQgcGFydCBpcyBub3RcbiAgICAvLyBgLi5gIG9yIGB0aGlzYC5cbiAgICBzaW1wbGVJZDogZnVuY3Rpb24ocGF0aCkge1xuICAgICAgcmV0dXJuIHBhdGgucGFydHMubGVuZ3RoID09PSAxICYmICFBU1QuaGVscGVycy5zY29wZWRJZChwYXRoKSAmJiAhcGF0aC5kZXB0aDtcbiAgICB9XG4gIH1cbn07XG5cblxuLy8gTXVzdCBiZSBleHBvcnRlZCBhcyBhbiBvYmplY3QgcmF0aGVyIHRoYW4gdGhlIHJvb3Qgb2YgdGhlIG1vZHVsZSBhcyB0aGUgamlzb24gbGV4ZXJcbi8vIG11c3QgbW9kaWZ5IHRoZSBvYmplY3QgdG8gb3BlcmF0ZSBwcm9wZXJseS5cbmV4cG9ydCBkZWZhdWx0IEFTVDtcbiJdfQ==


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.parse = parse;
	// istanbul ignore next

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _parser = __webpack_require__(21);

	var _parser2 = _interopRequireDefault(_parser);

	var _whitespaceControl = __webpack_require__(22);

	var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);

	var _helpers = __webpack_require__(24);

	var Helpers = _interopRequireWildcard(_helpers);

	var _utils = __webpack_require__(3);

	exports.parser = _parser2['default'];

	var yy = {};
	_utils.extend(yy, Helpers);

	function parse(input, options) {
	  // Just return if an already-compiled AST was passed in.
	  if (input.type === 'Program') {
	    return input;
	  }

	  _parser2['default'].yy = yy;

	  // Altering the shared object here, but this is ok as parser is a sync operation
	  yy.locInfo = function (locInfo) {
	    return new yy.SourceLocation(options && options.srcName, locInfo);
	  };

	  var strip = new _whitespaceControl2['default'](options);
	  return strip.accept(_parser2['default'].parse(input));
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2NvbXBpbGVyL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3NCQUFtQixVQUFVOzs7O2lDQUNDLHNCQUFzQjs7Ozt1QkFDM0IsV0FBVzs7SUFBeEIsT0FBTzs7cUJBQ0ksVUFBVTs7UUFFeEIsTUFBTTs7QUFFZixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDWixjQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFYixTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFOztBQUVwQyxNQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO0FBQUUsV0FBTyxLQUFLLENBQUM7R0FBRTs7QUFFL0Msc0JBQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQzs7O0FBR2YsSUFBRSxDQUFDLE9BQU8sR0FBRyxVQUFTLE9BQU8sRUFBRTtBQUM3QixXQUFPLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztHQUNuRSxDQUFDOztBQUVGLE1BQUksS0FBSyxHQUFHLG1DQUFzQixPQUFPLENBQUMsQ0FBQztBQUMzQyxTQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Q0FDMUMiLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXJzZXIgZnJvbSAnLi9wYXJzZXInO1xuaW1wb3J0IFdoaXRlc3BhY2VDb250cm9sIGZyb20gJy4vd2hpdGVzcGFjZS1jb250cm9sJztcbmltcG9ydCAqIGFzIEhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IHsgcGFyc2VyIH07XG5cbmxldCB5eSA9IHt9O1xuZXh0ZW5kKHl5LCBIZWxwZXJzKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKGlucHV0LCBvcHRpb25zKSB7XG4gIC8vIEp1c3QgcmV0dXJuIGlmIGFuIGFscmVhZHktY29tcGlsZWQgQVNUIHdhcyBwYXNzZWQgaW4uXG4gIGlmIChpbnB1dC50eXBlID09PSAnUHJvZ3JhbScpIHsgcmV0dXJuIGlucHV0OyB9XG5cbiAgcGFyc2VyLnl5ID0geXk7XG5cbiAgLy8gQWx0ZXJpbmcgdGhlIHNoYXJlZCBvYmplY3QgaGVyZSwgYnV0IHRoaXMgaXMgb2sgYXMgcGFyc2VyIGlzIGEgc3luYyBvcGVyYXRpb25cbiAgeXkubG9jSW5mbyA9IGZ1bmN0aW9uKGxvY0luZm8pIHtcbiAgICByZXR1cm4gbmV3IHl5LlNvdXJjZUxvY2F0aW9uKG9wdGlvbnMgJiYgb3B0aW9ucy5zcmNOYW1lLCBsb2NJbmZvKTtcbiAgfTtcblxuICBsZXQgc3RyaXAgPSBuZXcgV2hpdGVzcGFjZUNvbnRyb2wob3B0aW9ucyk7XG4gIHJldHVybiBzdHJpcC5hY2NlcHQocGFyc2VyLnBhcnNlKGlucHV0KSk7XG59XG4iXX0=


/***/ },
/* 21 */
/***/ function(module, exports) {

	// File ignored in coverage tests via setting in .istanbul.yml
	/* parser generated by jison 0.4.16 */
	/*
	  Returns a Parser object of the following structure:

	  Parser: {
	    yy: {}
	  }

	  Parser.prototype: {
	    yy: {},
	    trace: function(),
	    symbols_: {associative list: name ==> number},
	    terminals_: {associative list: number ==> name},
	    productions_: [...],
	    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
	    table: [...],
	    defaultActions: {...},
	    parseError: function(str, hash),
	    parse: function(input),

	    lexer: {
	        EOF: 1,
	        parseError: function(str, hash),
	        setInput: function(input),
	        input: function(),
	        unput: function(str),
	        more: function(),
	        less: function(n),
	        pastInput: function(),
	        upcomingInput: function(),
	        showPosition: function(),
	        test_match: function(regex_match_array, rule_index),
	        next: function(),
	        lex: function(),
	        begin: function(condition),
	        popState: function(),
	        _currentRules: function(),
	        topState: function(),
	        pushState: function(condition),

	        options: {
	            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
	            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
	            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
	        },

	        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
	        rules: [...],
	        conditions: {associative list: name ==> set},
	    }
	  }


	  token location info (@$, _$, etc.): {
	    first_line: n,
	    last_line: n,
	    first_column: n,
	    last_column: n,
	    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
	  }


	  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
	    text:        (matched text)
	    token:       (the produced terminal token, if any)
	    line:        (yylineno)
	  }
	  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
	    loc:         (yylloc)
	    expected:    (string describing the set of expected tokens)
	    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
	  }
	*/
	"use strict";

	exports.__esModule = true;
	var handlebars = (function () {
	    var o = function o(k, v, _o, l) {
	        for (_o = _o || {}, l = k.length; l--; _o[k[l]] = v);return _o;
	    },
	        $V0 = [2, 46],
	        $V1 = [1, 20],
	        $V2 = [5, 14, 15, 19, 29, 34, 39, 44, 47, 48, 51, 55, 60],
	        $V3 = [1, 35],
	        $V4 = [1, 28],
	        $V5 = [1, 29],
	        $V6 = [1, 30],
	        $V7 = [1, 31],
	        $V8 = [1, 32],
	        $V9 = [1, 34],
	        $Va = [14, 15, 19, 29, 34, 39, 44, 47, 48, 51, 55, 60],
	        $Vb = [14, 15, 19, 29, 34, 44, 47, 48, 51, 55, 60],
	        $Vc = [1, 44],
	        $Vd = [14, 15, 19, 29, 34, 47, 48, 51, 55, 60],
	        $Ve = [33, 65, 72, 80, 81, 82, 83, 84, 85],
	        $Vf = [23, 33, 54, 65, 68, 72, 75, 80, 81, 82, 83, 84, 85],
	        $Vg = [1, 51],
	        $Vh = [23, 33, 54, 65, 68, 72, 75, 80, 81, 82, 83, 84, 85, 87],
	        $Vi = [2, 45],
	        $Vj = [54, 65, 72, 80, 81, 82, 83, 84, 85],
	        $Vk = [1, 58],
	        $Vl = [1, 59],
	        $Vm = [15, 18],
	        $Vn = [1, 67],
	        $Vo = [33, 65, 72, 75, 80, 81, 82, 83, 84, 85],
	        $Vp = [23, 65, 72, 80, 81, 82, 83, 84, 85],
	        $Vq = [1, 79],
	        $Vr = [65, 68, 72, 80, 81, 82, 83, 84, 85],
	        $Vs = [33, 75],
	        $Vt = [23, 33, 54, 68, 72, 75],
	        $Vu = [1, 109],
	        $Vv = [1, 121],
	        $Vw = [72, 77];
	    var parser = { trace: function trace() {},
	        yy: {},
	        symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "partialBlock": 12, "content": 13, "COMMENT": 14, "CONTENT": 15, "openRawBlock": 16, "rawBlock_repetition_plus0": 17, "END_RAW_BLOCK": 18, "OPEN_RAW_BLOCK": 19, "helperName": 20, "openRawBlock_repetition0": 21, "openRawBlock_option0": 22, "CLOSE_RAW_BLOCK": 23, "openBlock": 24, "block_option0": 25, "closeBlock": 26, "openInverse": 27, "block_option1": 28, "OPEN_BLOCK": 29, "openBlock_repetition0": 30, "openBlock_option0": 31, "openBlock_option1": 32, "CLOSE": 33, "OPEN_INVERSE": 34, "openInverse_repetition0": 35, "openInverse_option0": 36, "openInverse_option1": 37, "openInverseChain": 38, "OPEN_INVERSE_CHAIN": 39, "openInverseChain_repetition0": 40, "openInverseChain_option0": 41, "openInverseChain_option1": 42, "inverseAndProgram": 43, "INVERSE": 44, "inverseChain": 45, "inverseChain_option0": 46, "OPEN_ENDBLOCK": 47, "OPEN": 48, "mustache_repetition0": 49, "mustache_option0": 50, "OPEN_UNESCAPED": 51, "mustache_repetition1": 52, "mustache_option1": 53, "CLOSE_UNESCAPED": 54, "OPEN_PARTIAL": 55, "partialName": 56, "partial_repetition0": 57, "partial_option0": 58, "openPartialBlock": 59, "OPEN_PARTIAL_BLOCK": 60, "openPartialBlock_repetition0": 61, "openPartialBlock_option0": 62, "param": 63, "sexpr": 64, "OPEN_SEXPR": 65, "sexpr_repetition0": 66, "sexpr_option0": 67, "CLOSE_SEXPR": 68, "hash": 69, "hash_repetition_plus0": 70, "hashSegment": 71, "ID": 72, "EQUALS": 73, "blockParams": 74, "OPEN_BLOCK_PARAMS": 75, "blockParams_repetition_plus0": 76, "CLOSE_BLOCK_PARAMS": 77, "path": 78, "dataName": 79, "STRING": 80, "NUMBER": 81, "BOOLEAN": 82, "UNDEFINED": 83, "NULL": 84, "DATA": 85, "pathSegments": 86, "SEP": 87, "$accept": 0, "$end": 1 },
	        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
	        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 1], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
	        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, /* action[1] */$$, /* vstack */_$ /* lstack */) {
	            /* this == yyval */

	            var $0 = $$.length - 1;
	            switch (yystate) {
	                case 1:
	                    return $$[$0 - 1];
	                    break;
	                case 2:
	                    this.$ = yy.prepareProgram($$[$0]);
	                    break;
	                case 3:case 4:case 5:case 6:case 7:case 8:case 20:case 27:case 28:case 33:case 34:case 40:case 41:
	                    this.$ = $$[$0];
	                    break;
	                case 9:

	                    this.$ = {
	                        type: 'CommentStatement',
	                        value: yy.stripComment($$[$0]),
	                        strip: yy.stripFlags($$[$0], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 10:

	                    this.$ = {
	                        type: 'ContentStatement',
	                        original: $$[$0],
	                        value: $$[$0],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 11:
	                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 12:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
	                    break;
	                case 13:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
	                    break;
	                case 14:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
	                    break;
	                case 15:
	                    this.$ = { open: $$[$0 - 5], path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 16:case 17:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 18:
	                    this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
	                    break;
	                case 19:

	                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
	                        program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
	                    program.chained = true;

	                    this.$ = { strip: $$[$0 - 2].strip, program: program, chain: true };

	                    break;
	                case 21:
	                    this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
	                    break;
	                case 22:case 23:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 24:

	                    this.$ = {
	                        type: 'PartialStatement',
	                        name: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        indent: '',
	                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 25:
	                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 26:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 4], $$[$0]) };
	                    break;
	                case 29:

	                    this.$ = {
	                        type: 'SubExpression',
	                        path: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 30:
	                    this.$ = { type: 'Hash', pairs: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 31:
	                    this.$ = { type: 'HashPair', key: yy.id($$[$0 - 2]), value: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 32:
	                    this.$ = yy.id($$[$0 - 1]);
	                    break;
	                case 35:
	                    this.$ = { type: 'StringLiteral', value: $$[$0], original: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 36:
	                    this.$ = { type: 'NumberLiteral', value: Number($$[$0]), original: Number($$[$0]), loc: yy.locInfo(this._$) };
	                    break;
	                case 37:
	                    this.$ = { type: 'BooleanLiteral', value: $$[$0] === 'true', original: $$[$0] === 'true', loc: yy.locInfo(this._$) };
	                    break;
	                case 38:
	                    this.$ = { type: 'UndefinedLiteral', original: undefined, value: undefined, loc: yy.locInfo(this._$) };
	                    break;
	                case 39:
	                    this.$ = { type: 'NullLiteral', original: null, value: null, loc: yy.locInfo(this._$) };
	                    break;
	                case 42:
	                    this.$ = yy.preparePath(true, $$[$0], this._$);
	                    break;
	                case 43:
	                    this.$ = yy.preparePath(false, $$[$0], this._$);
	                    break;
	                case 44:
	                    $$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });this.$ = $$[$0 - 2];
	                    break;
	                case 45:
	                    this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
	                    break;
	                case 46:case 50:case 58:case 64:case 70:case 78:case 82:case 86:case 90:case 94:
	                    this.$ = [];
	                    break;
	                case 47:case 49:case 51:case 59:case 65:case 71:case 79:case 83:case 87:case 91:case 95:case 99:case 101:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 48:case 98:case 100:
	                    this.$ = [$$[$0]];
	                    break;
	            }
	        },
	        table: [o([5, 14, 15, 19, 29, 34, 48, 51, 55, 60], $V0, { 3: 1, 4: 2, 6: 3 }), { 1: [3] }, { 5: [1, 4] }, o([5, 39, 44, 47], [2, 2], { 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 24: 15, 27: 16, 16: 17, 59: 19, 14: [1, 12], 15: $V1, 19: [1, 23], 29: [1, 21], 34: [1, 22], 48: [1, 13], 51: [1, 14], 55: [1, 18], 60: [1, 24] }), { 1: [2, 1] }, o($V2, [2, 47]), o($V2, [2, 3]), o($V2, [2, 4]), o($V2, [2, 5]), o($V2, [2, 6]), o($V2, [2, 7]), o($V2, [2, 8]), o($V2, [2, 9]), { 20: 25, 72: $V3, 78: 26, 79: 27, 80: $V4, 81: $V5, 82: $V6, 83: $V7, 84: $V8, 85: $V9, 86: 33 }, { 20: 36, 72: $V3, 78: 26, 79: 27, 80: $V4, 81: $V5, 82: $V6, 83: $V7, 84: $V8, 85: $V9, 86: 33 }, o($Va, $V0, { 6: 3, 4: 37 }), o($Vb, $V0, { 6: 3, 4: 38 }), { 13: 40, 15: $V1, 17: 39 }, { 20: 42, 56: 41, 64: 43, 65: $Vc, 72: $V3, 78: 26, 79: 27, 80: $V4, 81: $V5, 82: $V6, 83: $V7, 84: $V8, 85: $V9, 86: 33 }, o($Vd, $V0, { 6: 3, 4: 45 }), o([5, 14, 15, 18, 19, 29, 34, 39, 44, 47, 48, 51, 55, 60], [2, 10]), { 20: 46, 72: $V3, 78: 26, 79: 27, 80: $V4, 81: $V5, 82: $V6, 83: $V7, 84: $V8, 85: $V9, 86: 33 }, { 20: 47, 72: $V3, 78: 26, 79: 27, 80: $V4, 81: $V5, 82: $V6, 83: $V7, 84: $V8, 85: $V9, 86: 33 }, { 20: 48, 72: $V3, 78: 26, 79: 27, 80: $V4, 81: $V5, 82: $V6, 83: $V7, 84: $V8, 85: $V9, 86: 33 }, { 20: 42, 56: 49, 64: 43, 65: $Vc, 72: $V3, 78: 26, 79: 27, 80: $V4, 81: $V5, 82: $V6, 83: $V7, 84: $V8, 85: $V9, 86: 33 }, o($Ve, [2, 78], { 49: 50 }), o($Vf, [2, 33]), o($Vf, [2, 34]), o($Vf, [2, 35]), o($Vf, [2, 36]), o($Vf, [2, 37]), o($Vf, [2, 38]), o($Vf, [2, 39]), o($Vf, [2, 43], { 87: $Vg }), { 72: $V3, 86: 52 }, o($Vh, $Vi), o($Vj, [2, 82], { 52: 53 }), { 25: 54, 38: 56, 39: $Vk, 43: 57, 44: $Vl, 45: 55, 47: [2, 54] }, { 28: 60, 43: 61, 44: $Vl, 47: [2, 56] }, { 13: 63, 15: $V1, 18: [1, 62] }, o($Vm, [2, 48]), o($Ve, [2, 86], { 57: 64 }), o($Ve, [2, 40]), o($Ve, [2, 41]), { 20: 65, 72: $V3, 78: 26, 79: 27, 80: $V4, 81: $V5, 82: $V6, 83: $V7, 84: $V8, 85: $V9, 86: 33 }, { 26: 66, 47: $Vn }, o($Vo, [2, 58], { 30: 68 }), o($Vo, [2, 64], { 35: 69 }), o($Vp, [2, 50], { 21: 70 }), o($Ve, [2, 90], { 61: 71 }), { 20: 75, 33: [2, 80], 50: 72, 63: 73, 64: 76, 65: $Vc, 69: 74, 70: 77, 71: 78, 72: $Vq, 78: 26, 79: 27, 80: $V4, 81: $V5, 82: $V6, 83: $V7, 84: $V8, 85: $V9, 86: 33 }, { 72: [1, 80] }, o($Vf, [2, 42], { 87: $Vg }), { 20: 75, 53: 81, 54: [2, 84], 63: 82, 64: 76, 65: $Vc, 69: 83, 70: 77, 71: 78, 72: $Vq, 78: 26, 79: 27, 80: $V4, 81: $V5, 82: $V6, 83: $V7, 84: $V8, 85: $V9, 86: 33 }, { 26: 84, 47: $Vn }, { 47: [2, 55] }, o($Va, $V0, { 6: 3, 4: 85 }), { 47: [2, 20] }, { 20: 86, 72: $V3, 78: 26, 79: 27, 80: $V4, 81: $V5, 82: $V6, 83: $V7, 84: $V8, 85: $V9, 86: 33 }, o($Vd, $V0, { 6: 3, 4: 87 }), { 26: 88, 47: $Vn }, { 47: [2, 57] }, o($V2, [2, 11]), o($Vm, [2, 49]), { 20: 75, 33: [2, 88], 58: 89, 63: 90, 64: 76, 65: $Vc, 69: 91, 70: 77, 71: 78, 72: $Vq, 78: 26, 79: 27, 80: $V4, 81: $V5, 82: $V6, 83: $V7, 84: $V8, 85: $V9, 86: 33 }, o($Vr, [2, 94], { 66: 92 }), o($V2, [2, 25]), { 20: 93, 72: $V3, 78: 26, 79: 27, 80: $V4, 81: $V5, 82: $V6, 83: $V7, 84: $V8, 85: $V9, 86: 33 }, o($Vs, [2, 60], { 78: 26, 79: 27, 86: 33, 20: 75, 64: 76, 70: 77, 71: 78, 31: 94, 63: 95, 69: 96, 65: $Vc, 72: $Vq, 80: $V4, 81: $V5, 82: $V6, 83: $V7, 84: $V8, 85: $V9 }), o($Vs, [2, 66], { 78: 26, 79: 27, 86: 33, 20: 75, 64: 76, 70: 77, 71: 78, 36: 97, 63: 98, 69: 99, 65: $Vc, 72: $Vq, 80: $V4, 81: $V5, 82: $V6, 83: $V7, 84: $V8, 85: $V9 }), { 20: 75, 22: 100, 23: [2, 52], 63: 101, 64: 76, 65: $Vc, 69: 102, 70: 77, 71: 78, 72: $Vq, 78: 26, 79: 27, 80: $V4, 81: $V5, 82: $V6, 83: $V7, 84: $V8, 85: $V9, 86: 33 }, { 20: 75, 33: [2, 92], 62: 103, 63: 104, 64: 76, 65: $Vc, 69: 105, 70: 77, 71: 78, 72: $Vq, 78: 26, 79: 27, 80: $V4, 81: $V5, 82: $V6, 83: $V7, 84: $V8, 85: $V9, 86: 33 }, { 33: [1, 106] }, o($Ve, [2, 79]), { 33: [2, 81] }, o($Vf, [2, 27]), o($Vf, [2, 28]), o([23, 33, 54, 68, 75], [2, 30], { 71: 107, 72: [1, 108] }), o($Vt, [2, 98]), o($Vh, $Vi, { 73: $Vu }), o($Vh, [2, 44]), { 54: [1, 110] }, o($Vj, [2, 83]), { 54: [2, 85] }, o($V2, [2, 13]), { 38: 56, 39: $Vk, 43: 57, 44: $Vl, 45: 112, 46: 111, 47: [2, 76] }, o($Vo, [2, 70], { 40: 113 }), { 47: [2, 18] }, o($V2, [2, 14]), { 33: [1, 114] }, o($Ve, [2, 87]), { 33: [2, 89] }, { 20: 75, 63: 116, 64: 76, 65: $Vc, 67: 115, 68: [2, 96], 69: 117, 70: 77, 71: 78, 72: $Vq, 78: 26, 79: 27, 80: $V4, 81: $V5, 82: $V6, 83: $V7, 84: $V8, 85: $V9, 86: 33 }, { 33: [1, 118] }, { 32: 119, 33: [2, 62], 74: 120, 75: $Vv }, o($Vo, [2, 59]), o($Vs, [2, 61]), { 33: [2, 68], 37: 122, 74: 123, 75: $Vv }, o($Vo, [2, 65]), o($Vs, [2, 67]), { 23: [1, 124] }, o($Vp, [2, 51]), { 23: [2, 53] }, { 33: [1, 125] }, o($Ve, [2, 91]), { 33: [2, 93] }, o($V2, [2, 22]), o($Vt, [2, 99]), { 73: $Vu }, { 20: 75, 63: 126, 64: 76, 65: $Vc, 72: $V3, 78: 26, 79: 27, 80: $V4, 81: $V5, 82: $V6, 83: $V7, 84: $V8, 85: $V9, 86: 33 }, o($V2, [2, 23]), { 47: [2, 19] }, { 47: [2, 77] }, o($Vs, [2, 72], { 78: 26, 79: 27, 86: 33, 20: 75, 64: 76, 70: 77, 71: 78, 41: 127, 63: 128, 69: 129, 65: $Vc, 72: $Vq, 80: $V4, 81: $V5, 82: $V6, 83: $V7, 84: $V8, 85: $V9 }), o($V2, [2, 24]), { 68: [1, 130] }, o($Vr, [2, 95]), { 68: [2, 97] }, o($V2, [2, 21]), { 33: [1, 131] }, { 33: [2, 63] }, { 72: [1, 133], 76: 132 }, { 33: [1, 134] }, { 33: [2, 69] }, { 15: [2, 12] }, o($Vd, [2, 26]), o($Vt, [2, 31]), { 33: [2, 74], 42: 135, 74: 136, 75: $Vv }, o($Vo, [2, 71]), o($Vs, [2, 73]), o($Vf, [2, 29]), o($Va, [2, 15]), { 72: [1, 138], 77: [1, 137] }, o($Vw, [2, 100]), o($Vb, [2, 16]), { 33: [1, 139] }, { 33: [2, 75] }, { 33: [2, 32] }, o($Vw, [2, 101]), o($Va, [2, 17])],
	        defaultActions: { 4: [2, 1], 55: [2, 55], 57: [2, 20], 61: [2, 57], 74: [2, 81], 83: [2, 85], 87: [2, 18], 91: [2, 89], 102: [2, 53], 105: [2, 93], 111: [2, 19], 112: [2, 77], 117: [2, 97], 120: [2, 63], 123: [2, 69], 124: [2, 12], 136: [2, 75], 137: [2, 32] },
	        parseError: function parseError(str, hash) {
	            if (hash.recoverable) {
	                this.trace(str);
	            } else {
	                var _parseError = function _parseError(msg, hash) {
	                    this.message = msg;
	                    this.hash = hash;
	                };

	                _parseError.prototype = new Error();

	                throw new _parseError(str, hash);
	            }
	        },
	        parse: function parse(input) {
	            var self = this,
	                stack = [0],
	                tstack = [],
	                vstack = [null],
	                lstack = [],
	                table = this.table,
	                yytext = '',
	                yylineno = 0,
	                yyleng = 0,
	                recovering = 0,
	                TERROR = 2,
	                EOF = 1;
	            var args = lstack.slice.call(arguments, 1);
	            var lexer = Object.create(this.lexer);
	            var sharedState = { yy: {} };
	            for (var k in this.yy) {
	                if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
	                    sharedState.yy[k] = this.yy[k];
	                }
	            }
	            lexer.setInput(input, sharedState.yy);
	            sharedState.yy.lexer = lexer;
	            sharedState.yy.parser = this;
	            if (typeof lexer.yylloc == 'undefined') {
	                lexer.yylloc = {};
	            }
	            var yyloc = lexer.yylloc;
	            lstack.push(yyloc);
	            var ranges = lexer.options && lexer.options.ranges;
	            if (typeof sharedState.yy.parseError === 'function') {
	                this.parseError = sharedState.yy.parseError;
	            } else {
	                this.parseError = Object.getPrototypeOf(this).parseError;
	            }
	            function popStack(n) {
	                stack.length = stack.length - 2 * n;
	                vstack.length = vstack.length - n;
	                lstack.length = lstack.length - n;
	            }
	            _token_stack: var lex = function lex() {
	                var token;
	                token = lexer.lex() || EOF;
	                if (typeof token !== 'number') {
	                    token = self.symbols_[token] || token;
	                }
	                return token;
	            };
	            var symbol,
	                preErrorSymbol,
	                state,
	                action,
	                a,
	                r,
	                yyval = {},
	                p,
	                len,
	                newState,
	                expected;
	            while (true) {
	                state = stack[stack.length - 1];
	                if (this.defaultActions[state]) {
	                    action = this.defaultActions[state];
	                } else {
	                    if (symbol === null || typeof symbol == 'undefined') {
	                        symbol = lex();
	                    }
	                    action = table[state] && table[state][symbol];
	                }
	                if (typeof action === 'undefined' || !action.length || !action[0]) {
	                    var errStr = '';
	                    expected = [];
	                    for (p in table[state]) {
	                        if (this.terminals_[p] && p > TERROR) {
	                            expected.push('\'' + this.terminals_[p] + '\'');
	                        }
	                    }
	                    if (lexer.showPosition) {
	                        errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
	                    } else {
	                        errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
	                    }
	                    this.parseError(errStr, {
	                        text: lexer.match,
	                        token: this.terminals_[symbol] || symbol,
	                        line: lexer.yylineno,
	                        loc: yyloc,
	                        expected: expected
	                    });
	                }
	                if (action[0] instanceof Array && action.length > 1) {
	                    throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
	                }
	                switch (action[0]) {
	                    case 1:
	                        stack.push(symbol);
	                        vstack.push(lexer.yytext);
	                        lstack.push(lexer.yylloc);
	                        stack.push(action[1]);
	                        symbol = null;
	                        if (!preErrorSymbol) {
	                            yyleng = lexer.yyleng;
	                            yytext = lexer.yytext;
	                            yylineno = lexer.yylineno;
	                            yyloc = lexer.yylloc;
	                            if (recovering > 0) {
	                                recovering--;
	                            }
	                        } else {
	                            symbol = preErrorSymbol;
	                            preErrorSymbol = null;
	                        }
	                        break;
	                    case 2:
	                        len = this.productions_[action[1]][1];
	                        yyval.$ = vstack[vstack.length - len];
	                        yyval._$ = {
	                            first_line: lstack[lstack.length - (len || 1)].first_line,
	                            last_line: lstack[lstack.length - 1].last_line,
	                            first_column: lstack[lstack.length - (len || 1)].first_column,
	                            last_column: lstack[lstack.length - 1].last_column
	                        };
	                        if (ranges) {
	                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
	                        }
	                        r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));
	                        if (typeof r !== 'undefined') {
	                            return r;
	                        }
	                        if (len) {
	                            stack = stack.slice(0, -1 * len * 2);
	                            vstack = vstack.slice(0, -1 * len);
	                            lstack = lstack.slice(0, -1 * len);
	                        }
	                        stack.push(this.productions_[action[1]][0]);
	                        vstack.push(yyval.$);
	                        lstack.push(yyval._$);
	                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
	                        stack.push(newState);
	                        break;
	                    case 3:
	                        return true;
	                }
	            }
	            return true;
	        } };
	    /* generated by jison-lex 0.3.4 */
	    var lexer = (function () {
	        var lexer = {

	            EOF: 1,

	            parseError: function parseError(str, hash) {
	                if (this.yy.parser) {
	                    this.yy.parser.parseError(str, hash);
	                } else {
	                    throw new Error(str);
	                }
	            },

	            // resets the lexer, sets new input
	            setInput: function setInput(input, yy) {
	                this.yy = yy || this.yy || {};
	                this._input = input;
	                this._more = this._backtrack = this.done = false;
	                this.yylineno = this.yyleng = 0;
	                this.yytext = this.matched = this.match = '';
	                this.conditionStack = ['INITIAL'];
	                this.yylloc = {
	                    first_line: 1,
	                    first_column: 0,
	                    last_line: 1,
	                    last_column: 0
	                };
	                if (this.options.ranges) {
	                    this.yylloc.range = [0, 0];
	                }
	                this.offset = 0;
	                return this;
	            },

	            // consumes and returns one char from the input
	            input: function input() {
	                var ch = this._input[0];
	                this.yytext += ch;
	                this.yyleng++;
	                this.offset++;
	                this.match += ch;
	                this.matched += ch;
	                var lines = ch.match(/(?:\r\n?|\n).*/g);
	                if (lines) {
	                    this.yylineno++;
	                    this.yylloc.last_line++;
	                } else {
	                    this.yylloc.last_column++;
	                }
	                if (this.options.ranges) {
	                    this.yylloc.range[1]++;
	                }

	                this._input = this._input.slice(1);
	                return ch;
	            },

	            // unshifts one char (or a string) into the input
	            unput: function unput(ch) {
	                var len = ch.length;
	                var lines = ch.split(/(?:\r\n?|\n)/g);

	                this._input = ch + this._input;
	                this.yytext = this.yytext.substr(0, this.yytext.length - len);
	                //this.yyleng -= len;
	                this.offset -= len;
	                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
	                this.match = this.match.substr(0, this.match.length - 1);
	                this.matched = this.matched.substr(0, this.matched.length - 1);

	                if (lines.length - 1) {
	                    this.yylineno -= lines.length - 1;
	                }
	                var r = this.yylloc.range;

	                this.yylloc = {
	                    first_line: this.yylloc.first_line,
	                    last_line: this.yylineno + 1,
	                    first_column: this.yylloc.first_column,
	                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
	                };

	                if (this.options.ranges) {
	                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
	                }
	                this.yyleng = this.yytext.length;
	                return this;
	            },

	            // When called from action, caches matched text and appends it on next action
	            more: function more() {
	                this._more = true;
	                return this;
	            },

	            // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
	            reject: function reject() {
	                if (this.options.backtrack_lexer) {
	                    this._backtrack = true;
	                } else {
	                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
	                        text: "",
	                        token: null,
	                        line: this.yylineno
	                    });
	                }
	                return this;
	            },

	            // retain first n characters of the match
	            less: function less(n) {
	                this.unput(this.match.slice(n));
	            },

	            // displays already matched input, i.e. for error messages
	            pastInput: function pastInput() {
	                var past = this.matched.substr(0, this.matched.length - this.match.length);
	                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
	            },

	            // displays upcoming input, i.e. for error messages
	            upcomingInput: function upcomingInput() {
	                var next = this.match;
	                if (next.length < 20) {
	                    next += this._input.substr(0, 20 - next.length);
	                }
	                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
	            },

	            // displays the character position where the lexing error occurred, i.e. for error messages
	            showPosition: function showPosition() {
	                var pre = this.pastInput();
	                var c = new Array(pre.length + 1).join("-");
	                return pre + this.upcomingInput() + "\n" + c + "^";
	            },

	            // test the lexed token: return FALSE when not a match, otherwise return token
	            test_match: function test_match(match, indexed_rule) {
	                var token, lines, backup;

	                if (this.options.backtrack_lexer) {
	                    // save context
	                    backup = {
	                        yylineno: this.yylineno,
	                        yylloc: {
	                            first_line: this.yylloc.first_line,
	                            last_line: this.last_line,
	                            first_column: this.yylloc.first_column,
	                            last_column: this.yylloc.last_column
	                        },
	                        yytext: this.yytext,
	                        match: this.match,
	                        matches: this.matches,
	                        matched: this.matched,
	                        yyleng: this.yyleng,
	                        offset: this.offset,
	                        _more: this._more,
	                        _input: this._input,
	                        yy: this.yy,
	                        conditionStack: this.conditionStack.slice(0),
	                        done: this.done
	                    };
	                    if (this.options.ranges) {
	                        backup.yylloc.range = this.yylloc.range.slice(0);
	                    }
	                }

	                lines = match[0].match(/(?:\r\n?|\n).*/g);
	                if (lines) {
	                    this.yylineno += lines.length;
	                }
	                this.yylloc = {
	                    first_line: this.yylloc.last_line,
	                    last_line: this.yylineno + 1,
	                    first_column: this.yylloc.last_column,
	                    last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
	                };
	                this.yytext += match[0];
	                this.match += match[0];
	                this.matches = match;
	                this.yyleng = this.yytext.length;
	                if (this.options.ranges) {
	                    this.yylloc.range = [this.offset, this.offset += this.yyleng];
	                }
	                this._more = false;
	                this._backtrack = false;
	                this._input = this._input.slice(match[0].length);
	                this.matched += match[0];
	                token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
	                if (this.done && this._input) {
	                    this.done = false;
	                }
	                if (token) {
	                    return token;
	                } else if (this._backtrack) {
	                    // recover context
	                    for (var k in backup) {
	                        this[k] = backup[k];
	                    }
	                    return false; // rule action called reject() implying the next rule should be tested instead.
	                }
	                return false;
	            },

	            // return next match in input
	            next: function next() {
	                if (this.done) {
	                    return this.EOF;
	                }
	                if (!this._input) {
	                    this.done = true;
	                }

	                var token, match, tempMatch, index;
	                if (!this._more) {
	                    this.yytext = '';
	                    this.match = '';
	                }
	                var rules = this._currentRules();
	                for (var i = 0; i < rules.length; i++) {
	                    tempMatch = this._input.match(this.rules[rules[i]]);
	                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
	                        match = tempMatch;
	                        index = i;
	                        if (this.options.backtrack_lexer) {
	                            token = this.test_match(tempMatch, rules[i]);
	                            if (token !== false) {
	                                return token;
	                            } else if (this._backtrack) {
	                                match = false;
	                                continue; // rule action called reject() implying a rule MISmatch.
	                            } else {
	                                    // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
	                                    return false;
	                                }
	                        } else if (!this.options.flex) {
	                            break;
	                        }
	                    }
	                }
	                if (match) {
	                    token = this.test_match(match, rules[index]);
	                    if (token !== false) {
	                        return token;
	                    }
	                    // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
	                    return false;
	                }
	                if (this._input === "") {
	                    return this.EOF;
	                } else {
	                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
	                        text: "",
	                        token: null,
	                        line: this.yylineno
	                    });
	                }
	            },

	            // return next match that has a token
	            lex: function lex() {
	                var r = this.next();
	                if (r) {
	                    return r;
	                } else {
	                    return this.lex();
	                }
	            },

	            // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
	            begin: function begin(condition) {
	                this.conditionStack.push(condition);
	            },

	            // pop the previously active lexer condition state off the condition stack
	            popState: function popState() {
	                var n = this.conditionStack.length - 1;
	                if (n > 0) {
	                    return this.conditionStack.pop();
	                } else {
	                    return this.conditionStack[0];
	                }
	            },

	            // produce the lexer rule set which is active for the currently active lexer condition state
	            _currentRules: function _currentRules() {
	                if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
	                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
	                } else {
	                    return this.conditions["INITIAL"].rules;
	                }
	            },

	            // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
	            topState: function topState(n) {
	                n = this.conditionStack.length - 1 - Math.abs(n || 0);
	                if (n >= 0) {
	                    return this.conditionStack[n];
	                } else {
	                    return "INITIAL";
	                }
	            },

	            // alias for begin(condition)
	            pushState: function pushState(condition) {
	                this.begin(condition);
	            },

	            // return the number of states currently on the stack
	            stateStackSize: function stateStackSize() {
	                return this.conditionStack.length;
	            },
	            options: {},
	            performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {

	                function strip(start, end) {
	                    return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
	                }

	                var YYSTATE = YY_START;
	                switch ($avoiding_name_collisions) {
	                    case 0:
	                        if (yy_.yytext.slice(-2) === "\\\\") {
	                            strip(0, 1);
	                            this.begin("mu");
	                        } else if (yy_.yytext.slice(-1) === "\\") {
	                            strip(0, 1);
	                            this.begin("emu");
	                        } else {
	                            this.begin("mu");
	                        }
	                        if (yy_.yytext) return 15;

	                        break;
	                    case 1:
	                        return 15;
	                        break;
	                    case 2:
	                        this.popState();
	                        return 15;

	                        break;
	                    case 3:
	                        this.begin('raw');return 15;
	                        break;
	                    case 4:
	                        this.popState();
	                        // Should be using `this.topState()` below, but it currently
	                        // returns the second top instead of the first top. Opened an
	                        // issue about it at https://github.com/zaach/jison/issues/291
	                        if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
	                            return 15;
	                        } else {
	                            yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
	                            return 18;
	                        }

	                        break;
	                    case 5:
	                        return 15;
	                        break;
	                    case 6:
	                        this.popState();
	                        return 14;

	                        break;
	                    case 7:
	                        return 65;
	                        break;
	                    case 8:
	                        return 68;
	                        break;
	                    case 9:
	                        return 19;
	                        break;
	                    case 10:
	                        this.popState();
	                        this.begin('raw');
	                        return 23;

	                        break;
	                    case 11:
	                        return 55;
	                        break;
	                    case 12:
	                        return 60;
	                        break;
	                    case 13:
	                        return 29;
	                        break;
	                    case 14:
	                        return 47;
	                        break;
	                    case 15:
	                        this.popState();return 44;
	                        break;
	                    case 16:
	                        this.popState();return 44;
	                        break;
	                    case 17:
	                        return 34;
	                        break;
	                    case 18:
	                        return 39;
	                        break;
	                    case 19:
	                        return 51;
	                        break;
	                    case 20:
	                        return 48;
	                        break;
	                    case 21:
	                        this.unput(yy_.yytext);
	                        this.popState();
	                        this.begin('com');

	                        break;
	                    case 22:
	                        this.popState();
	                        return 14;

	                        break;
	                    case 23:
	                        return 48;
	                        break;
	                    case 24:
	                        return 73;
	                        break;
	                    case 25:
	                        return 72;
	                        break;
	                    case 26:
	                        return 72;
	                        break;
	                    case 27:
	                        return 87;
	                        break;
	                    case 28:
	                        // ignore whitespace
	                        break;
	                    case 29:
	                        this.popState();return 54;
	                        break;
	                    case 30:
	                        this.popState();return 33;
	                        break;
	                    case 31:
	                        yy_.yytext = strip(1, 2).replace(/\\"/g, '"');return 80;
	                        break;
	                    case 32:
	                        yy_.yytext = strip(1, 2).replace(/\\'/g, "'");return 80;
	                        break;
	                    case 33:
	                        return 85;
	                        break;
	                    case 34:
	                        return 82;
	                        break;
	                    case 35:
	                        return 82;
	                        break;
	                    case 36:
	                        return 83;
	                        break;
	                    case 37:
	                        return 84;
	                        break;
	                    case 38:
	                        return 81;
	                        break;
	                    case 39:
	                        return 75;
	                        break;
	                    case 40:
	                        return 77;
	                        break;
	                    case 41:
	                        return 72;
	                        break;
	                    case 42:
	                        yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');return 72;
	                        break;
	                    case 43:
	                        return 'INVALID';
	                        break;
	                    case 44:
	                        return 5;
	                        break;
	                }
	            },
	            rules: [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/],
	            conditions: { "mu": { "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "inclusive": false }, "emu": { "rules": [2], "inclusive": false }, "com": { "rules": [6], "inclusive": false }, "raw": { "rules": [3, 4, 5], "inclusive": false }, "INITIAL": { "rules": [0, 1, 44], "inclusive": true } }
	        };
	        return lexer;
	    })();
	    parser.lexer = lexer;
	    function Parser() {
	        this.yy = {};
	    }
	    Parser.prototype = parser;parser.Parser = Parser;
	    return new Parser();
	})();exports["default"] = handlebars;
	module.exports = exports["default"];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2NvbXBpbGVyL3BhcnNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBFQSxJQUFJLFVBQVUsR0FBRyxDQUFDLFlBQVU7QUFDNUIsUUFBSSxDQUFDLEdBQUMsV0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUM7QUFBQyxhQUFJLEVBQUMsR0FBQyxFQUFDLElBQUUsRUFBRSxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFDLENBQUE7S0FBQztRQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7UUFBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1FBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO1FBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztRQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7UUFBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1FBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztRQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7UUFBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1FBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztRQUFDLEdBQUcsR0FBQyxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO1FBQUMsR0FBRyxHQUFDLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQztRQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7UUFBQyxHQUFHLEdBQUMsQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLENBQUM7UUFBQyxHQUFHLEdBQUMsQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQztRQUFDLEdBQUcsR0FBQyxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQztRQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7UUFBQyxHQUFHLEdBQUMsQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO1FBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztRQUFDLEdBQUcsR0FBQyxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO1FBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztRQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7UUFBQyxHQUFHLEdBQUMsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO1FBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztRQUFDLEdBQUcsR0FBQyxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQztRQUFDLEdBQUcsR0FBQyxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO1FBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztRQUFDLEdBQUcsR0FBQyxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO1FBQUMsR0FBRyxHQUFDLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQztRQUFDLEdBQUcsR0FBQyxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDO1FBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQztRQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMs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QyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FB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QUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUM5RCwwQkFBTTtBQUFBLEFBQ04scUJBQUssRUFBRTtBQUNQLHdCQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDL0UsMEJBQU07QUFBQSxBQUNOLHFCQUFLLEVBQUU7QUFDUCx3QkFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLDBCQUFNO0FBQUEsQUFDTixxQkFBSyxFQUFFO0FBQ1Asd0JBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUs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Q0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQztBQUN0RiwwQkFBTTtBQUFBLEFBQ04scUJBQUssRUFBRTtBQUNQLHdCQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDL0MsMEJBQU07QUFBQSxBQUNOLHFCQUFLLEVBQUU7QUFDUCx3QkFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hELDBCQUFNO0FBQUEsQUFDTixxQkFBSyxFQUFFO0FBQ04sc0JBQUUsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQUFBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEcsMEJBQU07QUFBQSxBQUNOLHFCQUFLLEVBQUU7QUFDUCx3QkFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDbkQsMEJBQU07QUFBQSxBQUNOLHFCQUFLLEVBQUUsQ0FBQyxBQUFDLEtBQUssRUFBRSxDQUFDLEFBQUMsS0FBSyxFQUFFLENBQUMsQUFBQyxLQUFLLEVBQUUsQ0FBQyxBQUFDLEtBQUssRUFBRSxDQUFDLEFBQUMsS0FBSyxFQUFFLENBQUMsQUFBQyxLQUFLLEVBQUUsQ0FBQyxBQUFDLEtBQUssRUFBRSxDQUFDLEFBQUMsS0FBSyxFQUFFLENBQUMsQUFBQyxLQUFLLEVBQUU7QUFDeEYsd0JBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ1osMEJBQU07QUFBQSxBQUNOLHFCQUFLLEVBQUUsQ0FBQyxBQUFDLEtBQUssRUFBRSxDQUFDLEFBQUMsS0FBSyxFQUFFLENBQUMsQUFBQyxLQUFLLEVBQUUsQ0FBQyxBQUFDLEtBQUssRUFBRSxDQUFDLEFBQUMsS0FBSyxFQUFFLENBQUMsQUFBQyxLQUFLLEVBQUUsQ0FBQyxBQUFDLEtBQUssRUFBRSxDQUFDLEFBQUMsS0FBSyxFQUFFLENBQUMsQUFBQyxLQUFLLEVBQUUsQ0FBQyxBQUFDLEtBQUssRUFBRSxDQUFDLEFBQUMsS0FBSyxFQUFFLENBQUMsQUFBQyxLQUFLLEdBQUc7QUFDcEgsc0JBQUUsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RCLDBCQUFNO0FBQUEsQUFDTixxQkFBSyxFQUFFLENBQUMsQUFBQyxLQUFLLEVBQUUsQ0FBQyxBQUFDLEtBQUssR0FBRztBQUMxQix3QkFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLDBCQUFNO0FBQUEsYUFDTDtTQUNBO0FBQ0QsYUFBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLEVBQUMsR0FBRyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RxSSxzQkFBYyxFQUFFLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUs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QkFBTTtBQUFBLEFBQ04seUJBQUssRUFBRTtBQUMyQiw0QkFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ2hCLDRCQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xCLCtCQUFPLEVBQUUsQ0FBQzs7QUFFNUMsOEJBQU07QUFBQSxBQUNOLHlCQUFLLEVBQUU7QUFBQywrQkFBTyxFQUFFLENBQUM7QUFDbEIsOEJBQU07QUFBQSxBQUNOLHlCQUFLLEVBQUU7QUFBQywrQkFBTyxFQUFFLENBQUM7QUFDbEIsOEJBQU07QUFBQSxBQUNOLHlCQUFLLEVBQUU7QUFBQywrQkFBTyxFQUFFLENBQUM7QUFDbEIsOEJBQU07QUFBQSxBQUNOLHlCQUFLLEVBQUU7QUFBQywrQkFBTyxFQUFFLENBQUM7QUFDbEIsOEJBQU07QUFBQSxBQUNOLHlCQUFLLEVBQUU7QUFBQyw0QkFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEFBQUMsT0FBTyxFQUFFLENBQUM7QUFDbkMsOEJBQU07QUFBQSxBQUNOLHlCQUFLLEVBQUU7QUFBQyw0QkFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEFBQUMsT0FBTyxFQUFFLENBQUM7QUFDbkMsOEJBQU07QUFBQSxBQUNOLHlCQUFLLEVBQUU7QUFBQywrQkFBTyxFQUFFLENBQUM7QUFDbEIsOEJBQU07QUFBQSxBQUNOLHlCQUFLLEVBQUU7QUFBQywrQkFBTyxFQUFFLENBQUM7QUFDbEIsOEJBQU07QUFBQSxBQUNOLHlCQUFLLEVBQUU7QUFBQywrQkFBTyxFQUFFLENBQUM7QUFDbEIsOEJBQU07QUFBQSxBQUNOLHlCQUFLLEVBQUU7QUFBQywrQkFBTyxFQUFFLENBQUM7QUFDbEIsOEJBQU07QUFBQSxBQUNOLHlCQUFLLEVBQUU7QUFDTCw0QkFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdkIsNEJBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNoQiw0QkFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFcEIsOEJBQU07QUFBQSxB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QyxXQUFXLEVBQUMsS0FBSyxFQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsS0FBSyxFQUFDLEVBQUMsU0FBUyxFQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLEVBQUM7U0FDbFUsQUFBQyxDQUFDO0FBQ0gsZUFBTyxLQUFLLENBQUM7S0FDWixDQUFBLEVBQUcsQ0FBQztBQUNMLFVBQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ3JCLGFBQVMsTUFBTSxHQUFJO0FBQ2pCLFlBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0tBQ2Q7QUFDRCxVQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNqRCxXQUFPLElBQUksTUFBTSxFQUFBLENBQUM7Q0FDakIsQ0FBQSxFQUFHLENBQUMscUJBQWUsVUFBVSIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGaWxlIGlnbm9yZWQgaW4gY292ZXJhZ2UgdGVzdHMgdmlhIHNldHRpbmcgaW4gLmlzdGFuYnVsLnltbFxuLyogcGFyc2VyIGdlbmVyYXRlZCBieSBqaXNvbiAwLjQuMTYgKi9cbi8qXG4gIFJldHVybnMgYSBQYXJzZXIgb2JqZWN0IG9mIHRoZSBmb2xsb3dpbmcgc3RydWN0dXJlOlxuXG4gIFBhcnNlcjoge1xuICAgIHl5OiB7fVxuICB9XG5cbiAgUGFyc2VyLnByb3RvdHlwZToge1xuICAgIHl5OiB7fSxcbiAgICB0cmFjZTogZnVuY3Rpb24oKSxcbiAgICBzeW1ib2xzXzoge2Fzc29jaWF0aXZlIGxpc3Q6IG5hbWUgPT0+IG51bWJlcn0sXG4gICAgdGVybWluYWxzXzoge2Fzc29jaWF0aXZlIGxpc3Q6IG51bWJlciA9PT4gbmFtZX0sXG4gICAgcHJvZHVjdGlvbnNfOiBbLi4uXSxcbiAgICBwZXJmb3JtQWN0aW9uOiBmdW5jdGlvbiBhbm9ueW1vdXMoeXl0ZXh0LCB5eWxlbmcsIHl5bGluZW5vLCB5eSwgeXlzdGF0ZSwgJCQsIF8kKSxcbiAgICB0YWJsZTogWy4uLl0sXG4gICAgZGVmYXVsdEFjdGlvbnM6IHsuLi59LFxuICAgIHBhcnNlRXJyb3I6IGZ1bmN0aW9uKHN0ciwgaGFzaCksXG4gICAgcGFyc2U6IGZ1bmN0aW9uKGlucHV0KSxcblxuICAgIGxleGVyOiB7XG4gICAgICAgIEVPRjogMSxcbiAgICAgICAgcGFyc2VFcnJvcjogZnVuY3Rpb24oc3RyLCBoYXNoKSxcbiAgICAgICAgc2V0SW5wdXQ6IGZ1bmN0aW9uKGlucHV0KSxcbiAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCksXG4gICAgICAgIHVucHV0OiBmdW5jdGlvbihzdHIpLFxuICAgICAgICBtb3JlOiBmdW5jdGlvbigpLFxuICAgICAgICBsZXNzOiBmdW5jdGlvbihuKSxcbiAgICAgICAgcGFzdElucHV0OiBmdW5jdGlvbigpLFxuICAgICAgICB1cGNvbWluZ0lucHV0OiBmdW5jdGlvbigpLFxuICAgICAgICBzaG93UG9zaXRpb246IGZ1bmN0aW9uKCksXG4gICAgICAgIHRlc3RfbWF0Y2g6IGZ1bmN0aW9uKHJlZ2V4X21hdGNoX2FycmF5LCBydWxlX2luZGV4KSxcbiAgICAgICAgbmV4dDogZnVuY3Rpb24oKSxcbiAgICAgICAgbGV4OiBmdW5jdGlvbigpLFxuICAgICAgICBiZWdpbjogZnVuY3Rpb24oY29uZGl0aW9uKSxcbiAgICAgICAgcG9wU3RhdGU6IGZ1bmN0aW9uKCksXG4gICAgICAgIF9jdXJyZW50UnVsZXM6IGZ1bmN0aW9uKCksXG4gICAgICAgIHRvcFN0YXRlOiBmdW5jdGlvbigpLFxuICAgICAgICBwdXNoU3RhdGU6IGZ1bmN0aW9uKGNvbmRpdGlvbiksXG5cbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgcmFuZ2VzOiBib29sZWFuICAgICAgICAgICAob3B0aW9uYWw6IHRydWUgPT0+IHRva2VuIGxvY2F0aW9uIGluZm8gd2lsbCBpbmNsdWRlIGEgLnJhbmdlW10gbWVtYmVyKVxuICAgICAgICAgICAgZmxleDogYm9vbGVhbiAgICAgICAgICAgICAob3B0aW9uYWw6IHRydWUgPT0+IGZsZXgtbGlrZSBsZXhpbmcgYmVoYXZpb3VyIHdoZXJlIHRoZSBydWxlcyBhcmUgdGVzdGVkIGV4aGF1c3RpdmVseSB0byBmaW5kIHRoZSBsb25nZXN0IG1hdGNoKVxuICAgICAgICAgICAgYmFja3RyYWNrX2xleGVyOiBib29sZWFuICAob3B0aW9uYWw6IHRydWUgPT0+IGxleGVyIHJlZ2V4ZXMgYXJlIHRlc3RlZCBpbiBvcmRlciBhbmQgZm9yIGVhY2ggbWF0Y2hpbmcgcmVnZXggdGhlIGFjdGlvbiBjb2RlIGlzIGludm9rZWQ7IHRoZSBsZXhlciB0ZXJtaW5hdGVzIHRoZSBzY2FuIHdoZW4gYSB0b2tlbiBpcyByZXR1cm5lZCBieSB0aGUgYWN0aW9uIGNvZGUpXG4gICAgICAgIH0sXG5cbiAgICAgICAgcGVyZm9ybUFjdGlvbjogZnVuY3Rpb24oeXksIHl5XywgJGF2b2lkaW5nX25hbWVfY29sbGlzaW9ucywgWVlfU1RBUlQpLFxuICAgICAgICBydWxlczogWy4uLl0sXG4gICAgICAgIGNvbmRpdGlvbnM6IHthc3NvY2lhdGl2ZSBsaXN0OiBuYW1lID09PiBzZXR9LFxuICAgIH1cbiAgfVxuXG5cbiAgdG9rZW4gbG9jYXRpb24gaW5mbyAoQCQsIF8kLCBldGMuKToge1xuICAgIGZpcnN0X2xpbmU6IG4sXG4gICAgbGFzdF9saW5lOiBuLFxuICAgIGZpcnN0X2NvbHVtbjogbixcbiAgICBsYXN0X2NvbHVtbjogbixcbiAgICByYW5nZTogW3N0YXJ0X251bWJlciwgZW5kX251bWJlcl0gICAgICAgKHdoZXJlIHRoZSBudW1iZXJzIGFyZSBpbmRleGVzIGludG8gdGhlIGlucHV0IHN0cmluZywgcmVndWxhciB6ZXJvLWJhc2VkKVxuICB9XG5cblxuICB0aGUgcGFyc2VFcnJvciBmdW5jdGlvbiByZWNlaXZlcyBhICdoYXNoJyBvYmplY3Qgd2l0aCB0aGVzZSBtZW1iZXJzIGZvciBsZXhlciBhbmQgcGFyc2VyIGVycm9yczoge1xuICAgIHRleHQ6ICAgICAgICAobWF0Y2hlZCB0ZXh0KVxuICAgIHRva2VuOiAgICAgICAodGhlIHByb2R1Y2VkIHRlcm1pbmFsIHRva2VuLCBpZiBhbnkpXG4gICAgbGluZTogICAgICAgICh5eWxpbmVubylcbiAgfVxuICB3aGlsZSBwYXJzZXIgKGdyYW1tYXIpIGVycm9ycyB3aWxsIGFsc28gcHJvdmlkZSB0aGVzZSBtZW1iZXJzLCBpLmUuIHBhcnNlciBlcnJvcnMgZGVsaXZlciBhIHN1cGVyc2V0IG9mIGF0dHJpYnV0ZXM6IHtcbiAgICBsb2M6ICAgICAgICAgKHl5bGxvYylcbiAgICBleHBlY3RlZDogICAgKHN0cmluZyBkZXNjcmliaW5nIHRoZSBzZXQgb2YgZXhwZWN0ZWQgdG9rZW5zKVxuICAgIHJlY292ZXJhYmxlOiAoYm9vbGVhbjogVFJVRSB3aGVuIHRoZSBwYXJzZXIgaGFzIGEgZXJyb3IgcmVjb3ZlcnkgcnVsZSBhdmFpbGFibGUgZm9yIHRoaXMgcGFydGljdWxhciBlcnJvcilcbiAgfVxuKi9cbnZhciBoYW5kbGViYXJzID0gKGZ1bmN0aW9uKCl7XG52YXIgbz1mdW5jdGlvbihrLHYsbyxsKXtmb3Iobz1vfHx7fSxsPWsubGVuZ3RoO2wtLTtvW2tbbF1dPXYpO3JldHVybiBvfSwkVjA9WzIsNDZdLCRWMT1bMSwyMF0sJFYyPVs1LDE0LDE1LDE5LDI5LDM0LDM5LDQ0LDQ3LDQ4LDUxLDU1LDYwXSwkVjM9WzEsMzVdLCRWND1bMSwyOF0sJFY1PVsxLDI5XSwkVjY9WzEsMzBdLCRWNz1bMSwzMV0sJFY4PVsxLDMyXSwkVjk9WzEsMzRdLCRWYT1bMTQsMTUsMTksMjksMzQsMzksNDQsNDcsNDgsNTEsNTUsNjBdLCRWYj1bMTQsMTUsMTksMjksMzQsNDQsNDcsNDgsNTEsNTUsNjBdLCRWYz1bMSw0NF0sJFZkPVsxNCwxNSwxOSwyOSwzNCw0Nyw0OCw1MSw1NSw2MF0sJFZlPVszMyw2NSw3Miw4MCw4MSw4Miw4Myw4NCw4NV0sJFZmPVsyMywzMyw1NCw2NSw2OCw3Miw3NSw4MCw4MSw4Miw4Myw4NCw4NV0sJFZnPVsxLDUxXSwkVmg9WzIzLDMzLDU0LDY1LDY4LDcyLDc1LDgwLDgxLDgyLDgzLDg0LDg1LDg3XSwkVmk9WzIsNDVdLCRWaj1bNTQsNjUsNzIsODAsODEsODIsODMsODQsODVdLCRWaz1bMSw1OF0sJFZsPVsxLDU5XSwkVm09WzE1LDE4XSwkVm49WzEsNjddLCRWbz1bMzMsNjUsNzIsNzUsODAsODEsODIsODMsODQsODVdLCRWcD1bMjMsNjUsNzIsODAsODEsODIsODMsODQsODVdLCRWcT1bMSw3OV0sJFZyPVs2NSw2OCw3Miw4MCw4MSw4Miw4Myw4NCw4NV0sJFZzPVszMyw3NV0sJFZ0PVsyMywzMyw1NCw2OCw3Miw3NV0sJFZ1PVsxLDEwOV0sJFZ2PVsxLDEyMV0sJFZ3PVs3Miw3N107XG52YXIgcGFyc2VyID0ge3RyYWNlOiBmdW5jdGlvbiB0cmFjZSgpIHsgfSxcbnl5OiB7fSxcbnN5bWJvbHNfOiB7XCJlcnJvclwiOjIsXCJyb290XCI6MyxcInByb2dyYW1cIjo0LFwiRU9GXCI6NSxcInByb2dyYW1fcmVwZXRpdGlvbjBcIjo2LFwic3RhdGVtZW50XCI6NyxcIm11c3RhY2hlXCI6OCxcImJsb2NrXCI6OSxcInJhd0Jsb2NrXCI6MTAsXCJwYXJ0aWFsXCI6MTEsXCJwYXJ0aWFsQmxvY2tcIjoxMixcImNvbnRlbnRcIjoxMyxcIkNPTU1FTlRcIjoxNCxcIkNPTlRFTlRcIjoxNSxcIm9wZW5SYXdCbG9ja1wiOjE2LFwicmF3QmxvY2tfcmVwZXRpdGlvbl9wbHVzMFwiOjE3LFwiRU5EX1JBV19CTE9DS1wiOjE4LFwiT1BFTl9SQVdfQkxPQ0tcIjoxOSxcImhlbHBlck5hbWVcIjoyMCxcIm9wZW5SYXdCbG9ja19yZXBldGl0aW9uMFwiOjIxLFwib3BlblJhd0Jsb2NrX29wdGlvbjBcIjoyMixcIkNMT1NFX1JBV19CTE9DS1wiOjIzLFwib3BlbkJsb2NrXCI6MjQsXCJibG9ja19vcHRpb24wXCI6MjUsXCJjbG9zZUJsb2NrXCI6MjYsXCJvcGVuSW52ZXJzZVwiOjI3LFwiYmxvY2tfb3B0aW9uMVwiOjI4LFwiT1BFTl9CTE9DS1wiOjI5LFwib3BlbkJsb2NrX3JlcGV0aXRpb24wXCI6MzAsXCJvcGVuQmxvY2tfb3B0aW9uMFwiOjMxLFwib3BlbkJsb2NrX29wdGlvbjFcIjozMixcIkNMT1NFXCI6MzMsXCJPUEVOX0lOVkVSU0VcIjozNCxcIm9wZW5JbnZlcnNlX3JlcGV0aXRpb24wXCI6MzUsXCJvcGVuSW52ZXJzZV9vcHRpb24wXCI6MzYsXCJvcGVuSW52ZXJzZV9vcHRpb24xXCI6MzcsXCJvcGVuSW52ZXJzZUNoYWluXCI6MzgsXCJPUEVOX0lOVkVSU0VfQ0hBSU5cIjozOSxcIm9wZW5JbnZlcnNlQ2hhaW5fcmVwZXRpdGlvbjBcIjo0MCxcIm9wZW5JbnZlcnNlQ2hhaW5fb3B0aW9uMFwiOjQxLFwib3BlbkludmVyc2VDaGFpbl9vcHRpb24xXCI6NDIsXCJpbnZlcnNlQW5kUHJvZ3JhbVwiOjQzLFwiSU5WRVJTRVwiOjQ0LFwiaW52ZXJzZUNoYWluXCI6NDUsXCJpbnZlcnNlQ2hhaW5fb3B0aW9uMFwiOjQ2LFwiT1BFTl9FTkRCTE9DS1wiOjQ3LFwiT1BFTlwiOjQ4LFwibXVzdGFjaGVfcmVwZXRpdGlvbjBcIjo0OSxcIm11c3RhY2hlX29wdGlvbjBcIjo1MCxcIk9QRU5fVU5FU0NBUEVEXCI6NTEsXCJtdXN0YWNoZV9yZXBldGl0aW9uMVwiOjUyLFwibXVzdGFjaGVfb3B0aW9uMVwiOjUzLFwiQ0xPU0VfVU5FU0NBUEVEXCI6NTQsXCJPUEVOX1BBUlRJQUxcIjo1NSxcInBhcnRpYWxOYW1lXCI6NTYsXCJwYXJ0aWFsX3JlcGV0aXRpb24wXCI6NTcsXCJwYXJ0aWFsX29wdGlvbjBcIjo1OCxcIm9wZW5QYXJ0aWFsQmxvY2tcIjo1OSxcIk9QRU5fUEFSVElBTF9CTE9DS1wiOjYwLFwib3BlblBhcnRpYWxCbG9ja19yZXBldGl0aW9uMFwiOjYxLFwib3BlblBhcnRpYWxCbG9ja19vcHRpb24wXCI6NjIsXCJwYXJhbVwiOjYzLFwic2V4cHJcIjo2NCxcIk9QRU5fU0VYUFJcIjo2NSxcInNleHByX3JlcGV0aXRpb24wXCI6NjYsXCJzZXhwcl9vcHRpb24wXCI6NjcsXCJDTE9TRV9TRVhQUlwiOjY4LFwiaGFzaFwiOjY5LFwiaGFzaF9yZXBldGl0aW9uX3BsdXMwXCI6NzAsXCJoYXNoU2VnbWVudFwiOjcxLFwiSURcIjo3MixcIkVRVUFMU1wiOjczLFwiYmxvY2tQYXJhbXNcIjo3NCxcIk9QRU5fQkxPQ0tfUEFSQU1TXCI6NzUsXCJibG9ja1BhcmFtc19yZXBldGl0aW9uX3BsdXMwXCI6NzYsXCJDTE9TRV9CTE9DS19QQVJBTVNcIjo3NyxcInBhdGhcIjo3OCxcImRhdGFOYW1lXCI6NzksXCJTVFJJTkdcIjo4MCxcIk5VTUJFUlwiOjgxLFwiQk9PTEVBTlwiOjgyLFwiVU5ERUZJTkVEXCI6ODMsXCJOVUxMXCI6ODQsXCJEQVRBXCI6ODUsXCJwYXRoU2VnbWVudHNcIjo4NixcIlNFUFwiOjg3LFwiJGFjY2VwdFwiOjAsXCIkZW5kXCI6MX0sXG50ZXJtaW5hbHNfOiB7MjpcImVycm9yXCIsNTpcIkVPRlwiLDE0OlwiQ09NTUVOVFwiLDE1OlwiQ09OVEVOVFwiLDE4OlwiRU5EX1JBV19CTE9DS1wiLDE5OlwiT1BFTl9SQVdfQkxPQ0tcIiwyMzpcIkNMT1NFX1JBV19CTE9DS1wiLDI5OlwiT1BFTl9CTE9DS1wiLDMzOlwiQ0xPU0VcIiwzNDpcIk9QRU5fSU5WRVJTRVwiLDM5OlwiT1BFTl9JTlZFUlNFX0NIQUlOXCIsNDQ6XCJJTlZFUlNFXCIsNDc6XCJPUEVOX0VOREJMT0NLXCIsNDg6XCJPUEVOXCIsNTE6XCJPUEVOX1VORVNDQVBFRFwiLDU0OlwiQ0xPU0VfVU5FU0NBUEVEXCIsNTU6XCJPUEVOX1BBUlRJQUxcIiw2MDpcIk9QRU5fUEFSVElBTF9CTE9DS1wiLDY1OlwiT1BFTl9TRVhQUlwiLDY4OlwiQ0xPU0VfU0VYUFJcIiw3MjpcIklEXCIsNzM6XCJFUVVBTFNcIiw3NTpcIk9QRU5fQkxPQ0tfUEFSQU1TXCIsNzc6XCJDTE9TRV9CTE9DS19QQVJBTVNcIiw4MDpcIlNUUklOR1wiLDgxOlwiTlVNQkVSXCIsODI6XCJCT09MRUFOXCIsODM6XCJVTkRFRklORURcIiw4NDpcIk5VTExcIiw4NTpcIkRBVEFcIiw4NzpcIlNFUFwifSxcbnByb2R1Y3Rpb25zXzogWzAsWzMsMl0sWzQsMV0sWzcsMV0sWzcsMV0sWzcsMV0sWzcsMV0sWzcsMV0sWzcsMV0sWzcsMV0sWzEzLDFdLFsxMCwzXSxbMTYsNV0sWzksNF0sWzksNF0sWzI0LDZdLFsyNyw2XSxbMzgsNl0sWzQzLDJdLFs0NSwzXSxbNDUsMV0sWzI2LDNdLFs4LDVdLFs4LDVdLFsxMSw1XSxbMTIsM10sWzU5LDVdLFs2MywxXSxbNjMsMV0sWzY0LDVdLFs2OSwxXSxbNzEsM10sWzc0LDNdLFsyMCwxXSxbMjAsMV0sWzIwLDFdLFsyMCwxXSxbMjAsMV0sWzIwLDFdLFsyMCwxXSxbNTYsMV0sWzU2LDFdLFs3OSwyXSxbNzgsMV0sWzg2LDNdLFs4NiwxXSxbNiwwXSxbNiwyXSxbMTcsMV0sWzE3LDJdLFsyMSwwXSxbMjEsMl0sWzIyLDBdLFsyMiwxXSxbMjUsMF0sWzI1LDFdLFsyOCwwXSxbMjgsMV0sWzMwLDBdLFszMCwyXSxbMzEsMF0sWzMxLDFdLFszMiwwXSxbMzIsMV0sWzM1LDBdLFszNSwyXSxbMzYsMF0sWzM2LDFdLFszNywwXSxbMzcsMV0sWzQwLDBdLFs0MCwyXSxbNDEsMF0sWzQxLDFdLFs0MiwwXSxbNDIsMV0sWzQ2LDBdLFs0NiwxXSxbNDksMF0sWzQ5LDJdLFs1MCwwXSxbNTAsMV0sWzUyLDBdLFs1MiwyXSxbNTMsMF0sWzUzLDFdLFs1NywwXSxbNTcsMl0sWzU4LDBdLFs1OCwxXSxbNjEsMF0sWzYxLDJdLFs2MiwwXSxbNjIsMV0sWzY2LDBdLFs2NiwyXSxbNjcsMF0sWzY3LDFdLFs3MCwxXSxbNzAsMl0sWzc2LDFdLFs3NiwyXV0sXG5wZXJmb3JtQWN0aW9uOiBmdW5jdGlvbiBhbm9ueW1vdXMoeXl0ZXh0LCB5eWxlbmcsIHl5bGluZW5vLCB5eSwgeXlzdGF0ZSAvKiBhY3Rpb25bMV0gKi8sICQkIC8qIHZzdGFjayAqLywgXyQgLyogbHN0YWNrICovKSB7XG4vKiB0aGlzID09IHl5dmFsICovXG5cbnZhciAkMCA9ICQkLmxlbmd0aCAtIDE7XG5zd2l0Y2ggKHl5c3RhdGUpIHtcbmNhc2UgMTpcbiByZXR1cm4gJCRbJDAtMV07IFxuYnJlYWs7XG5jYXNlIDI6XG50aGlzLiQgPSB5eS5wcmVwYXJlUHJvZ3JhbSgkJFskMF0pO1xuYnJlYWs7XG5jYXNlIDM6IGNhc2UgNDogY2FzZSA1OiBjYXNlIDY6IGNhc2UgNzogY2FzZSA4OiBjYXNlIDIwOiBjYXNlIDI3OiBjYXNlIDI4OiBjYXNlIDMzOiBjYXNlIDM0OiBjYXNlIDQwOiBjYXNlIDQxOlxudGhpcy4kID0gJCRbJDBdO1xuYnJlYWs7XG5jYXNlIDk6XG5cbiAgICB0aGlzLiQgPSB7XG4gICAgICB0eXBlOiAnQ29tbWVudFN0YXRlbWVudCcsXG4gICAgICB2YWx1ZTogeXkuc3RyaXBDb21tZW50KCQkWyQwXSksXG4gICAgICBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMF0sICQkWyQwXSksXG4gICAgICBsb2M6IHl5LmxvY0luZm8odGhpcy5fJClcbiAgICB9O1xuICBcbmJyZWFrO1xuY2FzZSAxMDpcblxuICAgIHRoaXMuJCA9IHtcbiAgICAgIHR5cGU6ICdDb250ZW50U3RhdGVtZW50JyxcbiAgICAgIG9yaWdpbmFsOiAkJFskMF0sXG4gICAgICB2YWx1ZTogJCRbJDBdLFxuICAgICAgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpXG4gICAgfTtcbiAgXG5icmVhaztcbmNhc2UgMTE6XG50aGlzLiQgPSB5eS5wcmVwYXJlUmF3QmxvY2soJCRbJDAtMl0sICQkWyQwLTFdLCAkJFskMF0sIHRoaXMuXyQpO1xuYnJlYWs7XG5jYXNlIDEyOlxudGhpcy4kID0geyBwYXRoOiAkJFskMC0zXSwgcGFyYW1zOiAkJFskMC0yXSwgaGFzaDogJCRbJDAtMV0gfTtcbmJyZWFrO1xuY2FzZSAxMzpcbnRoaXMuJCA9IHl5LnByZXBhcmVCbG9jaygkJFskMC0zXSwgJCRbJDAtMl0sICQkWyQwLTFdLCAkJFskMF0sIGZhbHNlLCB0aGlzLl8kKTtcbmJyZWFrO1xuY2FzZSAxNDpcbnRoaXMuJCA9IHl5LnByZXBhcmVCbG9jaygkJFskMC0zXSwgJCRbJDAtMl0sICQkWyQwLTFdLCAkJFskMF0sIHRydWUsIHRoaXMuXyQpO1xuYnJlYWs7XG5jYXNlIDE1OlxudGhpcy4kID0geyBvcGVuOiAkJFskMC01XSwgcGF0aDogJCRbJDAtNF0sIHBhcmFtczogJCRbJDAtM10sIGhhc2g6ICQkWyQwLTJdLCBibG9ja1BhcmFtczogJCRbJDAtMV0sIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwLTVdLCAkJFskMF0pIH07XG5icmVhaztcbmNhc2UgMTY6IGNhc2UgMTc6XG50aGlzLiQgPSB7IHBhdGg6ICQkWyQwLTRdLCBwYXJhbXM6ICQkWyQwLTNdLCBoYXNoOiAkJFskMC0yXSwgYmxvY2tQYXJhbXM6ICQkWyQwLTFdLCBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMC01XSwgJCRbJDBdKSB9O1xuYnJlYWs7XG5jYXNlIDE4OlxudGhpcy4kID0geyBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMC0xXSwgJCRbJDAtMV0pLCBwcm9ncmFtOiAkJFskMF0gfTtcbmJyZWFrO1xuY2FzZSAxOTpcblxuICAgIHZhciBpbnZlcnNlID0geXkucHJlcGFyZUJsb2NrKCQkWyQwLTJdLCAkJFskMC0xXSwgJCRbJDBdLCAkJFskMF0sIGZhbHNlLCB0aGlzLl8kKSxcbiAgICAgICAgcHJvZ3JhbSA9IHl5LnByZXBhcmVQcm9ncmFtKFtpbnZlcnNlXSwgJCRbJDAtMV0ubG9jKTtcbiAgICBwcm9ncmFtLmNoYWluZWQgPSB0cnVlO1xuXG4gICAgdGhpcy4kID0geyBzdHJpcDogJCRbJDAtMl0uc3RyaXAsIHByb2dyYW06IHByb2dyYW0sIGNoYWluOiB0cnVlIH07XG4gIFxuYnJlYWs7XG5jYXNlIDIxOlxudGhpcy4kID0ge3BhdGg6ICQkWyQwLTFdLCBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMC0yXSwgJCRbJDBdKX07XG5icmVhaztcbmNhc2UgMjI6IGNhc2UgMjM6XG50aGlzLiQgPSB5eS5wcmVwYXJlTXVzdGFjaGUoJCRbJDAtM10sICQkWyQwLTJdLCAkJFskMC0xXSwgJCRbJDAtNF0sIHl5LnN0cmlwRmxhZ3MoJCRbJDAtNF0sICQkWyQwXSksIHRoaXMuXyQpO1xuYnJlYWs7XG5jYXNlIDI0OlxuXG4gICAgdGhpcy4kID0ge1xuICAgICAgdHlwZTogJ1BhcnRpYWxTdGF0ZW1lbnQnLFxuICAgICAgbmFtZTogJCRbJDAtM10sXG4gICAgICBwYXJhbXM6ICQkWyQwLTJdLFxuICAgICAgaGFzaDogJCRbJDAtMV0sXG4gICAgICBpbmRlbnQ6ICcnLFxuICAgICAgc3RyaXA6IHl5LnN0cmlwRmxhZ3MoJCRbJDAtNF0sICQkWyQwXSksXG4gICAgICBsb2M6IHl5LmxvY0luZm8odGhpcy5fJClcbiAgICB9O1xuICBcbmJyZWFrO1xuY2FzZSAyNTpcbnRoaXMuJCA9IHl5LnByZXBhcmVQYXJ0aWFsQmxvY2soJCRbJDAtMl0sICQkWyQwLTFdLCAkJFskMF0sIHRoaXMuXyQpO1xuYnJlYWs7XG5jYXNlIDI2OlxudGhpcy4kID0geyBwYXRoOiAkJFskMC0zXSwgcGFyYW1zOiAkJFskMC0yXSwgaGFzaDogJCRbJDAtMV0sIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwLTRdLCAkJFskMF0pIH07XG5icmVhaztcbmNhc2UgMjk6XG5cbiAgICB0aGlzLiQgPSB7XG4gICAgICB0eXBlOiAnU3ViRXhwcmVzc2lvbicsXG4gICAgICBwYXRoOiAkJFskMC0zXSxcbiAgICAgIHBhcmFtczogJCRbJDAtMl0sXG4gICAgICBoYXNoOiAkJFskMC0xXSxcbiAgICAgIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKVxuICAgIH07XG4gIFxuYnJlYWs7XG5jYXNlIDMwOlxudGhpcy4kID0ge3R5cGU6ICdIYXNoJywgcGFpcnM6ICQkWyQwXSwgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpfTtcbmJyZWFrO1xuY2FzZSAzMTpcbnRoaXMuJCA9IHt0eXBlOiAnSGFzaFBhaXInLCBrZXk6IHl5LmlkKCQkWyQwLTJdKSwgdmFsdWU6ICQkWyQwXSwgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpfTtcbmJyZWFrO1xuY2FzZSAzMjpcbnRoaXMuJCA9IHl5LmlkKCQkWyQwLTFdKTtcbmJyZWFrO1xuY2FzZSAzNTpcbnRoaXMuJCA9IHt0eXBlOiAnU3RyaW5nTGl0ZXJhbCcsIHZhbHVlOiAkJFskMF0sIG9yaWdpbmFsOiAkJFskMF0sIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKX07XG5icmVhaztcbmNhc2UgMzY6XG50aGlzLiQgPSB7dHlwZTogJ051bWJlckxpdGVyYWwnLCB2YWx1ZTogTnVtYmVyKCQkWyQwXSksIG9yaWdpbmFsOiBOdW1iZXIoJCRbJDBdKSwgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpfTtcbmJyZWFrO1xuY2FzZSAzNzpcbnRoaXMuJCA9IHt0eXBlOiAnQm9vbGVhbkxpdGVyYWwnLCB2YWx1ZTogJCRbJDBdID09PSAndHJ1ZScsIG9yaWdpbmFsOiAkJFskMF0gPT09ICd0cnVlJywgbG9jOiB5eS5sb2NJbmZvKHRoaXMuXyQpfTtcbmJyZWFrO1xuY2FzZSAzODpcbnRoaXMuJCA9IHt0eXBlOiAnVW5kZWZpbmVkTGl0ZXJhbCcsIG9yaWdpbmFsOiB1bmRlZmluZWQsIHZhbHVlOiB1bmRlZmluZWQsIGxvYzogeXkubG9jSW5mbyh0aGlzLl8kKX07XG5icmVhaztcbmNhc2UgMzk6XG50aGlzLiQgPSB7dHlwZTogJ051bGxMaXRlcmFsJywgb3JpZ2luYWw6IG51bGwsIHZhbHVlOiBudWxsLCBsb2M6IHl5LmxvY0luZm8odGhpcy5fJCl9O1xuYnJlYWs7XG5jYXNlIDQyOlxudGhpcy4kID0geXkucHJlcGFyZVBhdGgodHJ1ZSwgJCRbJDBdLCB0aGlzLl8kKTtcbmJyZWFrO1xuY2FzZSA0MzpcbnRoaXMuJCA9IHl5LnByZXBhcmVQYXRoKGZhbHNlLCAkJFskMF0sIHRoaXMuXyQpO1xuYnJlYWs7XG5jYXNlIDQ0OlxuICQkWyQwLTJdLnB1c2goe3BhcnQ6IHl5LmlkKCQkWyQwXSksIG9yaWdpbmFsOiAkJFskMF0sIHNlcGFyYXRvcjogJCRbJDAtMV19KTsgdGhpcy4kID0gJCRbJDAtMl07IFxuYnJlYWs7XG5jYXNlIDQ1OlxudGhpcy4kID0gW3twYXJ0OiB5eS5pZCgkJFskMF0pLCBvcmlnaW5hbDogJCRbJDBdfV07XG5icmVhaztcbmNhc2UgNDY6IGNhc2UgNTA6IGNhc2UgNTg6IGNhc2UgNjQ6IGNhc2UgNzA6IGNhc2UgNzg6IGNhc2UgODI6IGNhc2UgODY6IGNhc2UgOTA6IGNhc2UgOTQ6XG50aGlzLiQgPSBbXTtcbmJyZWFrO1xuY2FzZSA0NzogY2FzZSA0OTogY2FzZSA1MTogY2FzZSA1OTogY2FzZSA2NTogY2FzZSA3MTogY2FzZSA3OTogY2FzZSA4MzogY2FzZSA4NzogY2FzZSA5MTogY2FzZSA5NTogY2FzZSA5OTogY2FzZSAxMDE6XG4kJFskMC0xXS5wdXNoKCQkWyQwXSk7XG5icmVhaztcbmNhc2UgNDg6IGNhc2UgOTg6IGNhc2UgMTAwOlxudGhpcy4kID0gWyQkWyQwXV07XG5icmVhaztcbn1cbn0sXG50YWJsZTogW28oWzUsMTQsMTUsMTksMjksMzQsNDgsNTEsNTUsNjBdLCRWMCx7MzoxLDQ6Miw2OjN9KSx7MTpbM119LHs1OlsxLDRdfSxvKFs1LDM5LDQ0LDQ3XSxbMiwyXSx7Nzo1LDg6Niw5OjcsMTA6OCwxMTo5LDEyOjEwLDEzOjExLDI0OjE1LDI3OjE2LDE2OjE3LDU5OjE5LDE0OlsxLDEyXSwxNTokVjEsMTk6WzEsMjNdLDI5OlsxLDIxXSwzNDpbMSwyMl0sNDg6WzEsMTNdLDUxOlsxLDE0XSw1NTpbMSwxOF0sNjA6WzEsMjRdfSksezE6WzIsMV19LG8oJFYyLFsyLDQ3XSksbygkVjIsWzIsM10pLG8oJFYyLFsyLDRdKSxvKCRWMixbMiw1XSksbygkVjIsWzIsNl0pLG8oJFYyLFsyLDddKSxvKCRWMixbMiw4XSksbygkVjIsWzIsOV0pLHsyMDoyNSw3MjokVjMsNzg6MjYsNzk6MjcsODA6JFY0LDgxOiRWNSw4MjokVjYsODM6JFY3LDg0OiRWOCw4NTokVjksODY6MzN9LHsyMDozNiw3MjokVjMsNzg6MjYsNzk6MjcsODA6JFY0LDgxOiRWNSw4MjokVjYsODM6JFY3LDg0OiRWOCw4NTokVjksODY6MzN9LG8oJFZhLCRWMCx7NjozLDQ6Mzd9KSxvKCRWYiwkVjAsezY6Myw0OjM4fSksezEzOjQwLDE1OiRWMSwxNzozOX0sezIwOjQyLDU2OjQxLDY0OjQzLDY1OiRWYyw3MjokVjMsNzg6MjYsNzk6MjcsODA6JFY0LDgxOiRWNSw4MjokVjYsODM6JFY3LDg0OiRWOCw4NTokVjksODY6MzN9LG8oJFZkLCRWMCx7NjozLDQ6NDV9KSxvKFs1LDE0LDE1LDE4LDE5LDI5LDM0LDM5LDQ0LDQ3LDQ4LDUxLDU1LDYwXSxbMiwxMF0pLHsyMDo0Niw3MjokVjMsNzg6MjYsNzk6MjcsODA6JFY0LDgxOiRWNSw4MjokVjYsODM6JFY3LDg0OiRWOCw4NTokVjksODY6MzN9LHsyMDo0Nyw3MjokVjMsNzg6MjYsNzk6MjcsODA6JFY0LDgxOiRWNSw4MjokVjYsODM6JFY3LDg0OiRWOCw4NTokVjksODY6MzN9LHsyMDo0OCw3MjokVjMsNzg6MjYsNzk6MjcsODA6JFY0LDgxOiRWNSw4MjokVjYsODM6JFY3LDg0OiRWOCw4NTokVjksODY6MzN9LHsyMDo0Miw1Njo0OSw2NDo0Myw2NTokVmMsNzI6JFYzLDc4OjI2LDc5OjI3LDgwOiRWNCw4MTokVjUsODI6JFY2LDgzOiRWNyw4NDokVjgsODU6JFY5LDg2OjMzfSxvKCRWZSxbMiw3OF0sezQ5OjUwfSksbygkVmYsWzIsMzNdKSxvKCRWZixbMiwzNF0pLG8oJFZmLFsyLDM1XSksbygkVmYsWzIsMzZdKSxvKCRWZixbMiwzN10pLG8oJFZmLFsyLDM4XSksbygkVmYsWzIsMzldKSxvKCRWZixbMiw0M10sezg3OiRWZ30pLHs3MjokVjMsODY6NTJ9LG8oJFZoLCRWaSksbygkVmosWzIsODJdLHs1Mjo1M30pLHsyNTo1NCwzODo1NiwzOTokVmssNDM6NTcsNDQ6JFZsLDQ1OjU1LDQ3OlsyLDU0XX0sezI4OjYwLDQzOjYxLDQ0OiRWbCw0NzpbMiw1Nl19LHsxMzo2MywxNTokVjEsMTg6WzEsNjJdfSxvKCRWbSxbMiw0OF0pLG8oJFZlLFsyLDg2XSx7NTc6NjR9KSxvKCRWZSxbMiw0MF0pLG8oJFZlLFsyLDQxXSksezIwOjY1LDcyOiRWMyw3ODoyNiw3OToyNyw4MDokVjQsODE6JFY1LDgyOiRWNiw4MzokVjcsODQ6JFY4LDg1OiRWOSw4NjozM30sezI2OjY2LDQ3OiRWbn0sbygkVm8sWzIsNThdLHszMDo2OH0pLG8oJFZvLFsyLDY0XSx7MzU6Njl9KSxvKCRWcCxbMiw1MF0sezIxOjcwfSksbygkVmUsWzIsOTBdLHs2MTo3MX0pLHsyMDo3NSwzMzpbMiw4MF0sNTA6NzIsNjM6NzMsNjQ6NzYsNjU6JFZjLDY5Ojc0LDcwOjc3LDcxOjc4LDcyOiRWcSw3ODoyNiw3OToyNyw4MDokVjQsODE6JFY1LDgyOiRWNiw4MzokVjcsODQ6JFY4LDg1OiRWOSw4NjozM30sezcyOlsxLDgwXX0sbygkVmYsWzIsNDJdLHs4NzokVmd9KSx7MjA6NzUsNTM6ODEsNTQ6WzIsODRdLDYzOjgyLDY0Ojc2LDY1OiRWYyw2OTo4Myw3MDo3Nyw3MTo3OCw3MjokVnEsNzg6MjYsNzk6MjcsODA6JFY0LDgxOiRWNSw4MjokVjYsODM6JFY3LDg0OiRWOCw4NTokVjksODY6MzN9LHsyNjo4NCw0NzokVm59LHs0NzpbMiw1NV19LG8oJFZhLCRWMCx7NjozLDQ6ODV9KSx7NDc6WzIsMjBdfSx7MjA6ODYsNzI6JFYzLDc4OjI2LDc5OjI3LDgwOiRWNCw4MTokVjUsODI6JFY2LDgzOiRWNyw4NDokVjgsODU6JFY5LDg2OjMzfSxvKCRWZCwkVjAsezY6Myw0Ojg3fSksezI2Ojg4LDQ3OiRWbn0sezQ3OlsyLDU3XX0sbygkVjIsWzIsMTFdKSxvKCRWbSxbMiw0OV0pLHsyMDo3NSwzMzpbMiw4OF0sNTg6ODksNjM6OTAsNjQ6NzYsNjU6JFZjLDY5OjkxLDcwOjc3LDcxOjc4LDcyOiRWcSw3ODoyNiw3OToyNyw4MDokVjQsODE6JFY1LDgyOiRWNiw4MzokVjcsODQ6JFY4LDg1OiRWOSw4NjozM30sbygkVnIsWzIsOTRdLHs2Njo5Mn0pLG8oJFYyLFsyLDI1XSksezIwOjkzLDcyOiRWMyw3ODoyNiw3OToyNyw4MDokVjQsODE6JFY1LDgyOiRWNiw4MzokVjcsODQ6JFY4LDg1OiRWOSw4NjozM30sbygkVnMsWzIsNjBdLHs3ODoyNiw3OToyNyw4NjozMywyMDo3NSw2NDo3Niw3MDo3Nyw3MTo3OCwzMTo5NCw2Mzo5NSw2OTo5Niw2NTokVmMsNzI6JFZxLDgwOiRWNCw4MTokVjUsODI6JFY2LDgzOiRWNyw4NDokVjgsODU6JFY5fSksbygkVnMsWzIsNjZdLHs3ODoyNiw3OToyNyw4NjozMywyMDo3NSw2NDo3Niw3MDo3Nyw3MTo3OCwzNjo5Nyw2Mzo5OCw2OTo5OSw2NTokVmMsNzI6JFZxLDgwOiRWNCw4MTokVjUsODI6JFY2LDgzOiRWNyw4NDokVjgsODU6JFY5fSksezIwOjc1LDIyOjEwMCwyMzpbMiw1Ml0sNjM6MTAxLDY0Ojc2LDY1OiRWYyw2OToxMDIsNzA6NzcsNzE6NzgsNzI6JFZxLDc4OjI2LDc5OjI3LDgwOiRWNCw4MTokVjUsODI6JFY2LDgzOiRWNyw4NDokVjgsODU6JFY5LDg2OjMzfSx7MjA6NzUsMzM6WzIsOTJdLDYyOjEwMyw2MzoxMDQsNjQ6NzYsNjU6JFZjLDY5OjEwNSw3MDo3Nyw3MTo3OCw3MjokVnEsNzg6MjYsNzk6MjcsODA6JFY0LDgxOiRWNSw4MjokVjYsODM6JFY3LDg0OiRWOCw4NTokVjksODY6MzN9LHszMzpbMSwxMDZdfSxvKCRWZSxbMiw3OV0pLHszMzpbMiw4MV19LG8oJFZmLFsyLDI3XSksbygkVmYsWzIsMjhdKSxvKFsyMywzMyw1NCw2OCw3NV0sWzIsMzBdLHs3MToxMDcsNzI6WzEsMTA4XX0pLG8oJFZ0LFsyLDk4XSksbygkVmgsJFZpLHs3MzokVnV9KSxvKCRWaCxbMiw0NF0pLHs1NDpbMSwxMTBdfSxvKCRWaixbMiw4M10pLHs1NDpbMiw4NV19LG8oJFYyLFsyLDEzXSksezM4OjU2LDM5OiRWayw0Mzo1Nyw0NDokVmwsNDU6MTEyLDQ2OjExMSw0NzpbMiw3Nl19LG8oJFZvLFsyLDcwXSx7NDA6MTEzfSksezQ3OlsyLDE4XX0sbygkVjIsWzIsMTRdKSx7MzM6WzEsMTE0XX0sbygkVmUsWzIsODddKSx7MzM6WzIsODldfSx7MjA6NzUsNjM6MTE2LDY0Ojc2LDY1OiRWYyw2NzoxMTUsNjg6WzIsOTZdLDY5OjExNyw3MDo3Nyw3MTo3OCw3MjokVnEsNzg6MjYsNzk6MjcsODA6JFY0LDgxOiRWNSw4MjokVjYsODM6JFY3LDg0OiRWOCw4NTokVjksODY6MzN9LHszMzpbMSwxMThdfSx7MzI6MTE5LDMzOlsyLDYyXSw3NDoxMjAsNzU6JFZ2fSxvKCRWbyxbMiw1OV0pLG8oJFZzLFsyLDYxXSksezMzOlsyLDY4XSwzNzoxMjIsNzQ6MTIzLDc1OiRWdn0sbygkVm8sWzIsNjVdKSxvKCRWcyxbMiw2N10pLHsyMzpbMSwxMjRdfSxvKCRWcCxbMiw1MV0pLHsyMzpbMiw1M119LHszMzpbMSwxMjVdfSxvKCRWZSxbMiw5MV0pLHszMzpbMiw5M119LG8oJFYyLFsyLDIyXSksbygkVnQsWzIsOTldKSx7NzM6JFZ1fSx7MjA6NzUsNjM6MTI2LDY0Ojc2LDY1OiRWYyw3MjokVjMsNzg6MjYsNzk6MjcsODA6JFY0LDgxOiRWNSw4MjokVjYsODM6JFY3LDg0OiRWOCw4NTokVjksODY6MzN9LG8oJFYyLFsyLDIzXSksezQ3OlsyLDE5XX0sezQ3OlsyLDc3XX0sbygkVnMsWzIsNzJdLHs3ODoyNiw3OToyNyw4NjozMywyMDo3NSw2NDo3Niw3MDo3Nyw3MTo3OCw0MToxMjcsNjM6MTI4LDY5OjEyOSw2NTokVmMsNzI6JFZxLDgwOiRWNCw4MTokVjUsODI6JFY2LDgzOiRWNyw4NDokVjgsODU6JFY5fSksbygkVjIsWzIsMjRdKSx7Njg6WzEsMTMwXX0sbygkVnIsWzIsOTVdKSx7Njg6WzIsOTddfSxvKCRWMixbMiwyMV0pLHszMzpbMSwxMzFdfSx7MzM6WzIsNjNdfSx7NzI6WzEsMTMzXSw3NjoxMzJ9LHszMzpbMSwxMzRdfSx7MzM6WzIsNjldfSx7MTU6WzIsMTJdfSxvKCRWZCxbMiwyNl0pLG8oJFZ0LFsyLDMxXSksezMzOlsyLDc0XSw0MjoxMzUsNzQ6MTM2LDc1OiRWdn0sbygkVm8sWzIsNzFdKSxvKCRWcyxbMiw3M10pLG8oJFZmLFsyLDI5XSksbygkVmEsWzIsMTVdKSx7NzI6WzEsMTM4XSw3NzpbMSwxMzddfSxvKCRWdyxbMiwxMDBdKSxvKCRWYixbMiwxNl0pLHszMzpbMSwxMzldfSx7MzM6WzIsNzVdfSx7MzM6WzIsMzJdfSxvKCRWdyxbMiwxMDFdKSxvKCRWYSxbMiwxN10pXSxcbmRlZmF1bHRBY3Rpb25zOiB7NDpbMiwxXSw1NTpbMiw1NV0sNTc6WzIsMjBdLDYxOlsyLDU3XSw3NDpbMiw4MV0sODM6WzIsODVdLDg3OlsyLDE4XSw5MTpbMiw4OV0sMTAyOlsyLDUzXSwxMDU6WzIsOTNdLDExMTpbMiwxOV0sMTEyOlsyLDc3XSwxMTc6WzIsOTddLDEyMDpbMiw2M10sMTIzOlsyLDY5XSwxMjQ6WzIsMTJdLDEzNjpbMiw3NV0sMTM3OlsyLDMyXX0sXG5wYXJzZUVycm9yOiBmdW5jdGlvbiBwYXJzZUVycm9yKHN0ciwgaGFzaCkge1xuICAgIGlmIChoYXNoLnJlY292ZXJhYmxlKSB7XG4gICAgICAgIHRoaXMudHJhY2Uoc3RyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmdW5jdGlvbiBfcGFyc2VFcnJvciAobXNnLCBoYXNoKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtc2c7XG4gICAgICAgICAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICAgICAgICB9XG4gICAgICAgIF9wYXJzZUVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuXG4gICAgICAgIHRocm93IG5ldyBfcGFyc2VFcnJvcihzdHIsIGhhc2gpO1xuICAgIH1cbn0sXG5wYXJzZTogZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsIHN0YWNrID0gWzBdLCB0c3RhY2sgPSBbXSwgdnN0YWNrID0gW251bGxdLCBsc3RhY2sgPSBbXSwgdGFibGUgPSB0aGlzLnRhYmxlLCB5eXRleHQgPSAnJywgeXlsaW5lbm8gPSAwLCB5eWxlbmcgPSAwLCByZWNvdmVyaW5nID0gMCwgVEVSUk9SID0gMiwgRU9GID0gMTtcbiAgICB2YXIgYXJncyA9IGxzdGFjay5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGxleGVyID0gT2JqZWN0LmNyZWF0ZSh0aGlzLmxleGVyKTtcbiAgICB2YXIgc2hhcmVkU3RhdGUgPSB7IHl5OiB7fSB9O1xuICAgIGZvciAodmFyIGsgaW4gdGhpcy55eSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMueXksIGspKSB7XG4gICAgICAgICAgICBzaGFyZWRTdGF0ZS55eVtrXSA9IHRoaXMueXlba107XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV4ZXIuc2V0SW5wdXQoaW5wdXQsIHNoYXJlZFN0YXRlLnl5KTtcbiAgICBzaGFyZWRTdGF0ZS55eS5sZXhlciA9IGxleGVyO1xuICAgIHNoYXJlZFN0YXRlLnl5LnBhcnNlciA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBsZXhlci55eWxsb2MgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbGV4ZXIueXlsbG9jID0ge307XG4gICAgfVxuICAgIHZhciB5eWxvYyA9IGxleGVyLnl5bGxvYztcbiAgICBsc3RhY2sucHVzaCh5eWxvYyk7XG4gICAgdmFyIHJhbmdlcyA9IGxleGVyLm9wdGlvbnMgJiYgbGV4ZXIub3B0aW9ucy5yYW5nZXM7XG4gICAgaWYgKHR5cGVvZiBzaGFyZWRTdGF0ZS55eS5wYXJzZUVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucGFyc2VFcnJvciA9IHNoYXJlZFN0YXRlLnl5LnBhcnNlRXJyb3I7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYXJzZUVycm9yID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLnBhcnNlRXJyb3I7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBvcFN0YWNrKG4pIHtcbiAgICAgICAgc3RhY2subGVuZ3RoID0gc3RhY2subGVuZ3RoIC0gMiAqIG47XG4gICAgICAgIHZzdGFjay5sZW5ndGggPSB2c3RhY2subGVuZ3RoIC0gbjtcbiAgICAgICAgbHN0YWNrLmxlbmd0aCA9IGxzdGFjay5sZW5ndGggLSBuO1xuICAgIH1cbiAgICBfdG9rZW5fc3RhY2s6XG4gICAgICAgIHZhciBsZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgICAgICB0b2tlbiA9IGxleGVyLmxleCgpIHx8IEVPRjtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSBzZWxmLnN5bWJvbHNfW3Rva2VuXSB8fCB0b2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfTtcbiAgICB2YXIgc3ltYm9sLCBwcmVFcnJvclN5bWJvbCwgc3RhdGUsIGFjdGlvbiwgYSwgciwgeXl2YWwgPSB7fSwgcCwgbGVuLCBuZXdTdGF0ZSwgZXhwZWN0ZWQ7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgc3RhdGUgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdEFjdGlvbnNbc3RhdGVdKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSB0aGlzLmRlZmF1bHRBY3Rpb25zW3N0YXRlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzeW1ib2wgPT09IG51bGwgfHwgdHlwZW9mIHN5bWJvbCA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHN5bWJvbCA9IGxleCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0aW9uID0gdGFibGVbc3RhdGVdICYmIHRhYmxlW3N0YXRlXVtzeW1ib2xdO1xuICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAndW5kZWZpbmVkJyB8fCAhYWN0aW9uLmxlbmd0aCB8fCAhYWN0aW9uWzBdKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVyclN0ciA9ICcnO1xuICAgICAgICAgICAgICAgIGV4cGVjdGVkID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChwIGluIHRhYmxlW3N0YXRlXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50ZXJtaW5hbHNfW3BdICYmIHAgPiBURVJST1IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkLnB1c2goJ1xcJycgKyB0aGlzLnRlcm1pbmFsc19bcF0gKyAnXFwnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxleGVyLnNob3dQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBlcnJTdHIgPSAnUGFyc2UgZXJyb3Igb24gbGluZSAnICsgKHl5bGluZW5vICsgMSkgKyAnOlxcbicgKyBsZXhlci5zaG93UG9zaXRpb24oKSArICdcXG5FeHBlY3RpbmcgJyArIGV4cGVjdGVkLmpvaW4oJywgJykgKyAnLCBnb3QgXFwnJyArICh0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wpICsgJ1xcJyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyU3RyID0gJ1BhcnNlIGVycm9yIG9uIGxpbmUgJyArICh5eWxpbmVubyArIDEpICsgJzogVW5leHBlY3RlZCAnICsgKHN5bWJvbCA9PSBFT0YgPyAnZW5kIG9mIGlucHV0JyA6ICdcXCcnICsgKHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCkgKyAnXFwnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucGFyc2VFcnJvcihlcnJTdHIsIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbGV4ZXIubWF0Y2gsXG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiB0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgIGxpbmU6IGxleGVyLnl5bGluZW5vLFxuICAgICAgICAgICAgICAgICAgICBsb2M6IHl5bG9jLFxuICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogZXhwZWN0ZWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGlvblswXSBpbnN0YW5jZW9mIEFycmF5ICYmIGFjdGlvbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhcnNlIEVycm9yOiBtdWx0aXBsZSBhY3Rpb25zIHBvc3NpYmxlIGF0IHN0YXRlOiAnICsgc3RhdGUgKyAnLCB0b2tlbjogJyArIHN5bWJvbCk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChhY3Rpb25bMF0pIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgc3RhY2sucHVzaChzeW1ib2wpO1xuICAgICAgICAgICAgdnN0YWNrLnB1c2gobGV4ZXIueXl0ZXh0KTtcbiAgICAgICAgICAgIGxzdGFjay5wdXNoKGxleGVyLnl5bGxvYyk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGFjdGlvblsxXSk7XG4gICAgICAgICAgICBzeW1ib2wgPSBudWxsO1xuICAgICAgICAgICAgaWYgKCFwcmVFcnJvclN5bWJvbCkge1xuICAgICAgICAgICAgICAgIHl5bGVuZyA9IGxleGVyLnl5bGVuZztcbiAgICAgICAgICAgICAgICB5eXRleHQgPSBsZXhlci55eXRleHQ7XG4gICAgICAgICAgICAgICAgeXlsaW5lbm8gPSBsZXhlci55eWxpbmVubztcbiAgICAgICAgICAgICAgICB5eWxvYyA9IGxleGVyLnl5bGxvYztcbiAgICAgICAgICAgICAgICBpZiAocmVjb3ZlcmluZyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3ZlcmluZy0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3ltYm9sID0gcHJlRXJyb3JTeW1ib2w7XG4gICAgICAgICAgICAgICAgcHJlRXJyb3JTeW1ib2wgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGxlbiA9IHRoaXMucHJvZHVjdGlvbnNfW2FjdGlvblsxXV1bMV07XG4gICAgICAgICAgICB5eXZhbC4kID0gdnN0YWNrW3ZzdGFjay5sZW5ndGggLSBsZW5dO1xuICAgICAgICAgICAgeXl2YWwuXyQgPSB7XG4gICAgICAgICAgICAgICAgZmlyc3RfbGluZTogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5maXJzdF9saW5lLFxuICAgICAgICAgICAgICAgIGxhc3RfbGluZTogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5sYXN0X2xpbmUsXG4gICAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiBsc3RhY2tbbHN0YWNrLmxlbmd0aCAtIChsZW4gfHwgMSldLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5sYXN0X2NvbHVtblxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChyYW5nZXMpIHtcbiAgICAgICAgICAgICAgICB5eXZhbC5fJC5yYW5nZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5yYW5nZVswXSxcbiAgICAgICAgICAgICAgICAgICAgbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5yYW5nZVsxXVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByID0gdGhpcy5wZXJmb3JtQWN0aW9uLmFwcGx5KHl5dmFsLCBbXG4gICAgICAgICAgICAgICAgeXl0ZXh0LFxuICAgICAgICAgICAgICAgIHl5bGVuZyxcbiAgICAgICAgICAgICAgICB5eWxpbmVubyxcbiAgICAgICAgICAgICAgICBzaGFyZWRTdGF0ZS55eSxcbiAgICAgICAgICAgICAgICBhY3Rpb25bMV0sXG4gICAgICAgICAgICAgICAgdnN0YWNrLFxuICAgICAgICAgICAgICAgIGxzdGFja1xuICAgICAgICAgICAgXS5jb25jYXQoYXJncykpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgICAgIHN0YWNrID0gc3RhY2suc2xpY2UoMCwgLTEgKiBsZW4gKiAyKTtcbiAgICAgICAgICAgICAgICB2c3RhY2sgPSB2c3RhY2suc2xpY2UoMCwgLTEgKiBsZW4pO1xuICAgICAgICAgICAgICAgIGxzdGFjayA9IGxzdGFjay5zbGljZSgwLCAtMSAqIGxlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFjay5wdXNoKHRoaXMucHJvZHVjdGlvbnNfW2FjdGlvblsxXV1bMF0pO1xuICAgICAgICAgICAgdnN0YWNrLnB1c2goeXl2YWwuJCk7XG4gICAgICAgICAgICBsc3RhY2sucHVzaCh5eXZhbC5fJCk7XG4gICAgICAgICAgICBuZXdTdGF0ZSA9IHRhYmxlW3N0YWNrW3N0YWNrLmxlbmd0aCAtIDJdXVtzdGFja1tzdGFjay5sZW5ndGggLSAxXV07XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5ld1N0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn19O1xuLyogZ2VuZXJhdGVkIGJ5IGppc29uLWxleCAwLjMuNCAqL1xudmFyIGxleGVyID0gKGZ1bmN0aW9uKCl7XG52YXIgbGV4ZXIgPSAoe1xuXG5FT0Y6MSxcblxucGFyc2VFcnJvcjpmdW5jdGlvbiBwYXJzZUVycm9yKHN0ciwgaGFzaCkge1xuICAgICAgICBpZiAodGhpcy55eS5wYXJzZXIpIHtcbiAgICAgICAgICAgIHRoaXMueXkucGFyc2VyLnBhcnNlRXJyb3Ioc3RyLCBoYXNoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzdHIpO1xuICAgICAgICB9XG4gICAgfSxcblxuLy8gcmVzZXRzIHRoZSBsZXhlciwgc2V0cyBuZXcgaW5wdXRcbnNldElucHV0OmZ1bmN0aW9uIChpbnB1dCwgeXkpIHtcbiAgICAgICAgdGhpcy55eSA9IHl5IHx8IHRoaXMueXkgfHwge307XG4gICAgICAgIHRoaXMuX2lucHV0ID0gaW5wdXQ7XG4gICAgICAgIHRoaXMuX21vcmUgPSB0aGlzLl9iYWNrdHJhY2sgPSB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy55eWxpbmVubyA9IHRoaXMueXlsZW5nID0gMDtcbiAgICAgICAgdGhpcy55eXRleHQgPSB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoID0gJyc7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sgPSBbJ0lOSVRJQUwnXTtcbiAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgICBmaXJzdF9saW5lOiAxLFxuICAgICAgICAgICAgZmlyc3RfY29sdW1uOiAwLFxuICAgICAgICAgICAgbGFzdF9saW5lOiAxLFxuICAgICAgICAgICAgbGFzdF9jb2x1bW46IDBcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICAgIHRoaXMueXlsbG9jLnJhbmdlID0gWzAsMF07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4vLyBjb25zdW1lcyBhbmQgcmV0dXJucyBvbmUgY2hhciBmcm9tIHRoZSBpbnB1dFxuaW5wdXQ6ZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLl9pbnB1dFswXTtcbiAgICAgICAgdGhpcy55eXRleHQgKz0gY2g7XG4gICAgICAgIHRoaXMueXlsZW5nKys7XG4gICAgICAgIHRoaXMub2Zmc2V0Kys7XG4gICAgICAgIHRoaXMubWF0Y2ggKz0gY2g7XG4gICAgICAgIHRoaXMubWF0Y2hlZCArPSBjaDtcbiAgICAgICAgdmFyIGxpbmVzID0gY2gubWF0Y2goLyg/Olxcclxcbj98XFxuKS4qL2cpO1xuICAgICAgICBpZiAobGluZXMpIHtcbiAgICAgICAgICAgIHRoaXMueXlsaW5lbm8rKztcbiAgICAgICAgICAgIHRoaXMueXlsbG9jLmxhc3RfbGluZSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy55eWxsb2MubGFzdF9jb2x1bW4rKztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2VbMV0rKztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lucHV0ID0gdGhpcy5faW5wdXQuc2xpY2UoMSk7XG4gICAgICAgIHJldHVybiBjaDtcbiAgICB9LFxuXG4vLyB1bnNoaWZ0cyBvbmUgY2hhciAob3IgYSBzdHJpbmcpIGludG8gdGhlIGlucHV0XG51bnB1dDpmdW5jdGlvbiAoY2gpIHtcbiAgICAgICAgdmFyIGxlbiA9IGNoLmxlbmd0aDtcbiAgICAgICAgdmFyIGxpbmVzID0gY2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcblxuICAgICAgICB0aGlzLl9pbnB1dCA9IGNoICsgdGhpcy5faW5wdXQ7XG4gICAgICAgIHRoaXMueXl0ZXh0ID0gdGhpcy55eXRleHQuc3Vic3RyKDAsIHRoaXMueXl0ZXh0Lmxlbmd0aCAtIGxlbik7XG4gICAgICAgIC8vdGhpcy55eWxlbmcgLT0gbGVuO1xuICAgICAgICB0aGlzLm9mZnNldCAtPSBsZW47XG4gICAgICAgIHZhciBvbGRMaW5lcyA9IHRoaXMubWF0Y2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgdGhpcy5tYXRjaCA9IHRoaXMubWF0Y2guc3Vic3RyKDAsIHRoaXMubWF0Y2gubGVuZ3RoIC0gMSk7XG4gICAgICAgIHRoaXMubWF0Y2hlZCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIGlmIChsaW5lcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLnl5bGluZW5vIC09IGxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSB0aGlzLnl5bGxvYy5yYW5nZTtcblxuICAgICAgICB0aGlzLnl5bGxvYyA9IHtcbiAgICAgICAgICAgIGZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMueXlsaW5lbm8gKyAxLFxuICAgICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICBsYXN0X2NvbHVtbjogbGluZXMgP1xuICAgICAgICAgICAgICAgIChsaW5lcy5sZW5ndGggPT09IG9sZExpbmVzLmxlbmd0aCA/IHRoaXMueXlsbG9jLmZpcnN0X2NvbHVtbiA6IDApXG4gICAgICAgICAgICAgICAgICsgb2xkTGluZXNbb2xkTGluZXMubGVuZ3RoIC0gbGluZXMubGVuZ3RoXS5sZW5ndGggLSBsaW5lc1swXS5sZW5ndGggOlxuICAgICAgICAgICAgICB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4gLSBsZW5cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2UgPSBbclswXSwgclswXSArIHRoaXMueXlsZW5nIC0gbGVuXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnl5bGVuZyA9IHRoaXMueXl0ZXh0Lmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuLy8gV2hlbiBjYWxsZWQgZnJvbSBhY3Rpb24sIGNhY2hlcyBtYXRjaGVkIHRleHQgYW5kIGFwcGVuZHMgaXQgb24gbmV4dCBhY3Rpb25cbm1vcmU6ZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9tb3JlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuLy8gV2hlbiBjYWxsZWQgZnJvbSBhY3Rpb24sIHNpZ25hbHMgdGhlIGxleGVyIHRoYXQgdGhpcyBydWxlIGZhaWxzIHRvIG1hdGNoIHRoZSBpbnB1dCwgc28gdGhlIG5leHQgbWF0Y2hpbmcgcnVsZSAocmVnZXgpIHNob3VsZCBiZSB0ZXN0ZWQgaW5zdGVhZC5cbnJlamVjdDpmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9iYWNrdHJhY2sgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VFcnJvcignTGV4aWNhbCBlcnJvciBvbiBsaW5lICcgKyAodGhpcy55eWxpbmVubyArIDEpICsgJy4gWW91IGNhbiBvbmx5IGludm9rZSByZWplY3QoKSBpbiB0aGUgbGV4ZXIgd2hlbiB0aGUgbGV4ZXIgaXMgb2YgdGhlIGJhY2t0cmFja2luZyBwZXJzdWFzaW9uIChvcHRpb25zLmJhY2t0cmFja19sZXhlciA9IHRydWUpLlxcbicgKyB0aGlzLnNob3dQb3NpdGlvbigpLCB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgICAgICBsaW5lOiB0aGlzLnl5bGluZW5vXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbi8vIHJldGFpbiBmaXJzdCBuIGNoYXJhY3RlcnMgb2YgdGhlIG1hdGNoXG5sZXNzOmZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHRoaXMudW5wdXQodGhpcy5tYXRjaC5zbGljZShuKSk7XG4gICAgfSxcblxuLy8gZGlzcGxheXMgYWxyZWFkeSBtYXRjaGVkIGlucHV0LCBpLmUuIGZvciBlcnJvciBtZXNzYWdlc1xucGFzdElucHV0OmZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBhc3QgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGggLSB0aGlzLm1hdGNoLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiAocGFzdC5sZW5ndGggPiAyMCA/ICcuLi4nOicnKSArIHBhc3Quc3Vic3RyKC0yMCkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xuICAgIH0sXG5cbi8vIGRpc3BsYXlzIHVwY29taW5nIGlucHV0LCBpLmUuIGZvciBlcnJvciBtZXNzYWdlc1xudXBjb21pbmdJbnB1dDpmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBuZXh0ID0gdGhpcy5tYXRjaDtcbiAgICAgICAgaWYgKG5leHQubGVuZ3RoIDwgMjApIHtcbiAgICAgICAgICAgIG5leHQgKz0gdGhpcy5faW5wdXQuc3Vic3RyKDAsIDIwLW5leHQubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG5leHQuc3Vic3RyKDAsMjApICsgKG5leHQubGVuZ3RoID4gMjAgPyAnLi4uJyA6ICcnKSkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xuICAgIH0sXG5cbi8vIGRpc3BsYXlzIHRoZSBjaGFyYWN0ZXIgcG9zaXRpb24gd2hlcmUgdGhlIGxleGluZyBlcnJvciBvY2N1cnJlZCwgaS5lLiBmb3IgZXJyb3IgbWVzc2FnZXNcbnNob3dQb3NpdGlvbjpmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwcmUgPSB0aGlzLnBhc3RJbnB1dCgpO1xuICAgICAgICB2YXIgYyA9IG5ldyBBcnJheShwcmUubGVuZ3RoICsgMSkuam9pbihcIi1cIik7XG4gICAgICAgIHJldHVybiBwcmUgKyB0aGlzLnVwY29taW5nSW5wdXQoKSArIFwiXFxuXCIgKyBjICsgXCJeXCI7XG4gICAgfSxcblxuLy8gdGVzdCB0aGUgbGV4ZWQgdG9rZW46IHJldHVybiBGQUxTRSB3aGVuIG5vdCBhIG1hdGNoLCBvdGhlcndpc2UgcmV0dXJuIHRva2VuXG50ZXN0X21hdGNoOmZ1bmN0aW9uIChtYXRjaCwgaW5kZXhlZF9ydWxlKSB7XG4gICAgICAgIHZhciB0b2tlbixcbiAgICAgICAgICAgIGxpbmVzLFxuICAgICAgICAgICAgYmFja3VwO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgICAvLyBzYXZlIGNvbnRleHRcbiAgICAgICAgICAgIGJhY2t1cCA9IHtcbiAgICAgICAgICAgICAgICB5eWxpbmVubzogdGhpcy55eWxpbmVubyxcbiAgICAgICAgICAgICAgICB5eWxsb2M6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RfbGluZTogdGhpcy55eWxsb2MuZmlyc3RfbGluZSxcbiAgICAgICAgICAgICAgICAgICAgbGFzdF9saW5lOiB0aGlzLmxhc3RfbGluZSxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgIGxhc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeXl0ZXh0OiB0aGlzLnl5dGV4dCxcbiAgICAgICAgICAgICAgICBtYXRjaDogdGhpcy5tYXRjaCxcbiAgICAgICAgICAgICAgICBtYXRjaGVzOiB0aGlzLm1hdGNoZXMsXG4gICAgICAgICAgICAgICAgbWF0Y2hlZDogdGhpcy5tYXRjaGVkLFxuICAgICAgICAgICAgICAgIHl5bGVuZzogdGhpcy55eWxlbmcsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgICAgICAgICAgICBfbW9yZTogdGhpcy5fbW9yZSxcbiAgICAgICAgICAgICAgICBfaW5wdXQ6IHRoaXMuX2lucHV0LFxuICAgICAgICAgICAgICAgIHl5OiB0aGlzLnl5LFxuICAgICAgICAgICAgICAgIGNvbmRpdGlvblN0YWNrOiB0aGlzLmNvbmRpdGlvblN0YWNrLnNsaWNlKDApLFxuICAgICAgICAgICAgICAgIGRvbmU6IHRoaXMuZG9uZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgYmFja3VwLnl5bGxvYy5yYW5nZSA9IHRoaXMueXlsbG9jLnJhbmdlLnNsaWNlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGluZXMgPSBtYXRjaFswXS5tYXRjaCgvKD86XFxyXFxuP3xcXG4pLiovZyk7XG4gICAgICAgIGlmIChsaW5lcykge1xuICAgICAgICAgICAgdGhpcy55eWxpbmVubyArPSBsaW5lcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy55eWxsb2MgPSB7XG4gICAgICAgICAgICBmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5sYXN0X2xpbmUsXG4gICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMueXlsaW5lbm8gKyAxLFxuICAgICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbixcbiAgICAgICAgICAgIGxhc3RfY29sdW1uOiBsaW5lcyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgbGluZXNbbGluZXMubGVuZ3RoIC0gMV0ubGVuZ3RoIC0gbGluZXNbbGluZXMubGVuZ3RoIC0gMV0ubWF0Y2goL1xccj9cXG4/LylbMF0ubGVuZ3RoIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbiArIG1hdGNoWzBdLmxlbmd0aFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnl5dGV4dCArPSBtYXRjaFswXTtcbiAgICAgICAgdGhpcy5tYXRjaCArPSBtYXRjaFswXTtcbiAgICAgICAgdGhpcy5tYXRjaGVzID0gbWF0Y2g7XG4gICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2UgPSBbdGhpcy5vZmZzZXQsIHRoaXMub2Zmc2V0ICs9IHRoaXMueXlsZW5nXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tb3JlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2JhY2t0cmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuX2lucHV0LnNsaWNlKG1hdGNoWzBdLmxlbmd0aCk7XG4gICAgICAgIHRoaXMubWF0Y2hlZCArPSBtYXRjaFswXTtcbiAgICAgICAgdG9rZW4gPSB0aGlzLnBlcmZvcm1BY3Rpb24uY2FsbCh0aGlzLCB0aGlzLnl5LCB0aGlzLCBpbmRleGVkX3J1bGUsIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSk7XG4gICAgICAgIGlmICh0aGlzLmRvbmUgJiYgdGhpcy5faW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JhY2t0cmFjaykge1xuICAgICAgICAgICAgLy8gcmVjb3ZlciBjb250ZXh0XG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIGJhY2t1cCkge1xuICAgICAgICAgICAgICAgIHRoaXNba10gPSBiYWNrdXBba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIHJ1bGUgYWN0aW9uIGNhbGxlZCByZWplY3QoKSBpbXBseWluZyB0aGUgbmV4dCBydWxlIHNob3VsZCBiZSB0ZXN0ZWQgaW5zdGVhZC5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuLy8gcmV0dXJuIG5leHQgbWF0Y2ggaW4gaW5wdXRcbm5leHQ6ZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5FT0Y7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9pbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0b2tlbixcbiAgICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgICAgdGVtcE1hdGNoLFxuICAgICAgICAgICAgaW5kZXg7XG4gICAgICAgIGlmICghdGhpcy5fbW9yZSkge1xuICAgICAgICAgICAgdGhpcy55eXRleHQgPSAnJztcbiAgICAgICAgICAgIHRoaXMubWF0Y2ggPSAnJztcbiAgICAgICAgfVxuICAgICAgICB2YXIgcnVsZXMgPSB0aGlzLl9jdXJyZW50UnVsZXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGVtcE1hdGNoID0gdGhpcy5faW5wdXQubWF0Y2godGhpcy5ydWxlc1tydWxlc1tpXV0pO1xuICAgICAgICAgICAgaWYgKHRlbXBNYXRjaCAmJiAoIW1hdGNoIHx8IHRlbXBNYXRjaFswXS5sZW5ndGggPiBtYXRjaFswXS5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSB0ZW1wTWF0Y2g7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja3RyYWNrX2xleGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy50ZXN0X21hdGNoKHRlbXBNYXRjaCwgcnVsZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYmFja3RyYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7IC8vIHJ1bGUgYWN0aW9uIGNhbGxlZCByZWplY3QoKSBpbXBseWluZyBhIHJ1bGUgTUlTbWF0Y2guXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbHNlOiB0aGlzIGlzIGEgbGV4ZXIgcnVsZSB3aGljaCBjb25zdW1lcyBpbnB1dCB3aXRob3V0IHByb2R1Y2luZyBhIHRva2VuIChlLmcuIHdoaXRlc3BhY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMuZmxleCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICB0b2tlbiA9IHRoaXMudGVzdF9tYXRjaChtYXRjaCwgcnVsZXNbaW5kZXhdKTtcbiAgICAgICAgICAgIGlmICh0b2tlbiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlbHNlOiB0aGlzIGlzIGEgbGV4ZXIgcnVsZSB3aGljaCBjb25zdW1lcyBpbnB1dCB3aXRob3V0IHByb2R1Y2luZyBhIHRva2VuIChlLmcuIHdoaXRlc3BhY2UpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lucHV0ID09PSBcIlwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5FT0Y7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUVycm9yKCdMZXhpY2FsIGVycm9yIG9uIGxpbmUgJyArICh0aGlzLnl5bGluZW5vICsgMSkgKyAnLiBVbnJlY29nbml6ZWQgdGV4dC5cXG4nICsgdGhpcy5zaG93UG9zaXRpb24oKSwge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgICAgICAgbGluZTogdGhpcy55eWxpbmVub1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4vLyByZXR1cm4gbmV4dCBtYXRjaCB0aGF0IGhhcyBhIHRva2VuXG5sZXg6ZnVuY3Rpb24gbGV4KCkge1xuICAgICAgICB2YXIgciA9IHRoaXMubmV4dCgpO1xuICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sZXgoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbi8vIGFjdGl2YXRlcyBhIG5ldyBsZXhlciBjb25kaXRpb24gc3RhdGUgKHB1c2hlcyB0aGUgbmV3IGxleGVyIGNvbmRpdGlvbiBzdGF0ZSBvbnRvIHRoZSBjb25kaXRpb24gc3RhY2spXG5iZWdpbjpmdW5jdGlvbiBiZWdpbihjb25kaXRpb24pIHtcbiAgICAgICAgdGhpcy5jb25kaXRpb25TdGFjay5wdXNoKGNvbmRpdGlvbik7XG4gICAgfSxcblxuLy8gcG9wIHRoZSBwcmV2aW91c2x5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGUgb2ZmIHRoZSBjb25kaXRpb24gc3RhY2tcbnBvcFN0YXRlOmZ1bmN0aW9uIHBvcFN0YXRlKCkge1xuICAgICAgICB2YXIgbiA9IHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgaWYgKG4gPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFjay5wb3AoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmRpdGlvblN0YWNrWzBdO1xuICAgICAgICB9XG4gICAgfSxcblxuLy8gcHJvZHVjZSB0aGUgbGV4ZXIgcnVsZSBzZXQgd2hpY2ggaXMgYWN0aXZlIGZvciB0aGUgY3VycmVudGx5IGFjdGl2ZSBsZXhlciBjb25kaXRpb24gc3RhdGVcbl9jdXJyZW50UnVsZXM6ZnVuY3Rpb24gX2N1cnJlbnRSdWxlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoICYmIHRoaXMuY29uZGl0aW9uU3RhY2tbdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uc1t0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoIC0gMV1dLnJ1bGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uc1tcIklOSVRJQUxcIl0ucnVsZXM7XG4gICAgICAgIH1cbiAgICB9LFxuXG4vLyByZXR1cm4gdGhlIGN1cnJlbnRseSBhY3RpdmUgbGV4ZXIgY29uZGl0aW9uIHN0YXRlOyB3aGVuIGFuIGluZGV4IGFyZ3VtZW50IGlzIHByb3ZpZGVkIGl0IHByb2R1Y2VzIHRoZSBOLXRoIHByZXZpb3VzIGNvbmRpdGlvbiBzdGF0ZSwgaWYgYXZhaWxhYmxlXG50b3BTdGF0ZTpmdW5jdGlvbiB0b3BTdGF0ZShuKSB7XG4gICAgICAgIG4gPSB0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aCAtIDEgLSBNYXRoLmFicyhuIHx8IDApO1xuICAgICAgICBpZiAobiA+PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFja1tuXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcIklOSVRJQUxcIjtcbiAgICAgICAgfVxuICAgIH0sXG5cbi8vIGFsaWFzIGZvciBiZWdpbihjb25kaXRpb24pXG5wdXNoU3RhdGU6ZnVuY3Rpb24gcHVzaFN0YXRlKGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmJlZ2luKGNvbmRpdGlvbik7XG4gICAgfSxcblxuLy8gcmV0dXJuIHRoZSBudW1iZXIgb2Ygc3RhdGVzIGN1cnJlbnRseSBvbiB0aGUgc3RhY2tcbnN0YXRlU3RhY2tTaXplOmZ1bmN0aW9uIHN0YXRlU3RhY2tTaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFjay5sZW5ndGg7XG4gICAgfSxcbm9wdGlvbnM6IHt9LFxucGVyZm9ybUFjdGlvbjogZnVuY3Rpb24gYW5vbnltb3VzKHl5LHl5XywkYXZvaWRpbmdfbmFtZV9jb2xsaXNpb25zLFlZX1NUQVJUKSB7XG5cbmZ1bmN0aW9uIHN0cmlwKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIHl5Xy55eXRleHQgPSB5eV8ueXl0ZXh0LnN1YnN0cihzdGFydCwgeXlfLnl5bGVuZy1lbmQpO1xufVxuXG5cbnZhciBZWVNUQVRFPVlZX1NUQVJUO1xuc3dpdGNoKCRhdm9pZGluZ19uYW1lX2NvbGxpc2lvbnMpIHtcbmNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoeXlfLnl5dGV4dC5zbGljZSgtMikgPT09IFwiXFxcXFxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwKDAsMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpbihcIm11XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoeXlfLnl5dGV4dC5zbGljZSgtMSkgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaXAoMCwxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKFwiZW11XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJtdVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih5eV8ueXl0ZXh0KSByZXR1cm4gMTU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmJyZWFrO1xuY2FzZSAxOnJldHVybiAxNTtcbmJyZWFrO1xuY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuYnJlYWs7XG5jYXNlIDM6dGhpcy5iZWdpbigncmF3Jyk7IHJldHVybiAxNTtcbmJyZWFrO1xuY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaG91bGQgYmUgdXNpbmcgYHRoaXMudG9wU3RhdGUoKWAgYmVsb3csIGJ1dCBpdCBjdXJyZW50bHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm5zIHRoZSBzZWNvbmQgdG9wIGluc3RlYWQgb2YgdGhlIGZpcnN0IHRvcC4gT3BlbmVkIGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXNzdWUgYWJvdXQgaXQgYXQgaHR0cHM6Ly9naXRodWIuY29tL3phYWNoL2ppc29uL2lzc3Vlcy8yOTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aC0xXSA9PT0gJ3JhdycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeXlfLnl5dGV4dCA9IHl5Xy55eXRleHQuc3Vic3RyKDUsIHl5Xy55eWxlbmctOSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5icmVhaztcbmNhc2UgNTogcmV0dXJuIDE1OyBcbmJyZWFrO1xuY2FzZSA2OlxuICB0aGlzLnBvcFN0YXRlKCk7XG4gIHJldHVybiAxNDtcblxuYnJlYWs7XG5jYXNlIDc6cmV0dXJuIDY1O1xuYnJlYWs7XG5jYXNlIDg6cmV0dXJuIDY4O1xuYnJlYWs7XG5jYXNlIDk6IHJldHVybiAxOTsgXG5icmVhaztcbmNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4oJ3JhdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAyMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuYnJlYWs7XG5jYXNlIDExOnJldHVybiA1NTtcbmJyZWFrO1xuY2FzZSAxMjpyZXR1cm4gNjA7XG5icmVhaztcbmNhc2UgMTM6cmV0dXJuIDI5O1xuYnJlYWs7XG5jYXNlIDE0OnJldHVybiA0NztcbmJyZWFrO1xuY2FzZSAxNTp0aGlzLnBvcFN0YXRlKCk7IHJldHVybiA0NDtcbmJyZWFrO1xuY2FzZSAxNjp0aGlzLnBvcFN0YXRlKCk7IHJldHVybiA0NDtcbmJyZWFrO1xuY2FzZSAxNzpyZXR1cm4gMzQ7XG5icmVhaztcbmNhc2UgMTg6cmV0dXJuIDM5O1xuYnJlYWs7XG5jYXNlIDE5OnJldHVybiA1MTtcbmJyZWFrO1xuY2FzZSAyMDpyZXR1cm4gNDg7XG5icmVhaztcbmNhc2UgMjE6XG4gIHRoaXMudW5wdXQoeXlfLnl5dGV4dCk7XG4gIHRoaXMucG9wU3RhdGUoKTtcbiAgdGhpcy5iZWdpbignY29tJyk7XG5cbmJyZWFrO1xuY2FzZSAyMjpcbiAgdGhpcy5wb3BTdGF0ZSgpO1xuICByZXR1cm4gMTQ7XG5cbmJyZWFrO1xuY2FzZSAyMzpyZXR1cm4gNDg7XG5icmVhaztcbmNhc2UgMjQ6cmV0dXJuIDczO1xuYnJlYWs7XG5jYXNlIDI1OnJldHVybiA3MjtcbmJyZWFrO1xuY2FzZSAyNjpyZXR1cm4gNzI7XG5icmVhaztcbmNhc2UgMjc6cmV0dXJuIDg3O1xuYnJlYWs7XG5jYXNlIDI4Oi8vIGlnbm9yZSB3aGl0ZXNwYWNlXG5icmVhaztcbmNhc2UgMjk6dGhpcy5wb3BTdGF0ZSgpOyByZXR1cm4gNTQ7XG5icmVhaztcbmNhc2UgMzA6dGhpcy5wb3BTdGF0ZSgpOyByZXR1cm4gMzM7XG5icmVhaztcbmNhc2UgMzE6eXlfLnl5dGV4dCA9IHN0cmlwKDEsMikucmVwbGFjZSgvXFxcXFwiL2csJ1wiJyk7IHJldHVybiA4MDtcbmJyZWFrO1xuY2FzZSAzMjp5eV8ueXl0ZXh0ID0gc3RyaXAoMSwyKS5yZXBsYWNlKC9cXFxcJy9nLFwiJ1wiKTsgcmV0dXJuIDgwO1xuYnJlYWs7XG5jYXNlIDMzOnJldHVybiA4NTtcbmJyZWFrO1xuY2FzZSAzNDpyZXR1cm4gODI7XG5icmVhaztcbmNhc2UgMzU6cmV0dXJuIDgyO1xuYnJlYWs7XG5jYXNlIDM2OnJldHVybiA4MztcbmJyZWFrO1xuY2FzZSAzNzpyZXR1cm4gODQ7XG5icmVhaztcbmNhc2UgMzg6cmV0dXJuIDgxO1xuYnJlYWs7XG5jYXNlIDM5OnJldHVybiA3NTtcbmJyZWFrO1xuY2FzZSA0MDpyZXR1cm4gNzc7XG5icmVhaztcbmNhc2UgNDE6cmV0dXJuIDcyO1xuYnJlYWs7XG5jYXNlIDQyOnl5Xy55eXRleHQgPSB5eV8ueXl0ZXh0LnJlcGxhY2UoL1xcXFwoW1xcXFxcXF1dKS9nLCckMScpOyByZXR1cm4gNzI7XG5icmVhaztcbmNhc2UgNDM6cmV0dXJuICdJTlZBTElEJztcbmJyZWFrO1xuY2FzZSA0NDpyZXR1cm4gNTtcbmJyZWFrO1xufVxufSxcbnJ1bGVzOiBbL14oPzpbXlxceDAwXSo/KD89KFxce1xceykpKS8sL14oPzpbXlxceDAwXSspLywvXig/OlteXFx4MDBdezIsfT8oPz0oXFx7XFx7fFxcXFxcXHtcXHt8XFxcXFxcXFxcXHtcXHt8JCkpKS8sL14oPzpcXHtcXHtcXHtcXHsoPz1bXlxcL10pKS8sL14oPzpcXHtcXHtcXHtcXHtcXC9bXlxccyFcIiMlLSxcXC5cXC87LT5AXFxbLVxcXmBcXHstfl0rKD89Wz19XFxzXFwvLl0pXFx9XFx9XFx9XFx9KS8sL14oPzpbXlxceDAwXSo/KD89KFxce1xce1xce1xceykpKS8sL14oPzpbXFxzXFxTXSo/LS0ofik/XFx9XFx9KS8sL14oPzpcXCgpLywvXig/OlxcKSkvLC9eKD86XFx7XFx7XFx7XFx7KS8sL14oPzpcXH1cXH1cXH1cXH0pLywvXig/Olxce1xceyh+KT8+KS8sL14oPzpcXHtcXHsofik/Iz4pLywvXig/Olxce1xceyh+KT8jXFwqPykvLC9eKD86XFx7XFx7KH4pP1xcLykvLC9eKD86XFx7XFx7KH4pP1xcXlxccyoofik/XFx9XFx9KS8sL14oPzpcXHtcXHsofik/XFxzKmVsc2VcXHMqKH4pP1xcfVxcfSkvLC9eKD86XFx7XFx7KH4pP1xcXikvLC9eKD86XFx7XFx7KH4pP1xccyplbHNlXFxiKS8sL14oPzpcXHtcXHsofik/XFx7KS8sL14oPzpcXHtcXHsofik/JikvLC9eKD86XFx7XFx7KH4pPyEtLSkvLC9eKD86XFx7XFx7KH4pPyFbXFxzXFxTXSo/XFx9XFx9KS8sL14oPzpcXHtcXHsofik/XFwqPykvLC9eKD86PSkvLC9eKD86XFwuXFwuKS8sL14oPzpcXC4oPz0oWz1+fVxcc1xcLy4pfF0pKSkvLC9eKD86W1xcLy5dKS8sL14oPzpcXHMrKS8sL14oPzpcXH0ofik/XFx9XFx9KS8sL14oPzoofik/XFx9XFx9KS8sL14oPzpcIihcXFxcW1wiXXxbXlwiXSkqXCIpLywvXig/OicoXFxcXFsnXXxbXiddKSonKS8sL14oPzpAKS8sL14oPzp0cnVlKD89KFt+fVxccyldKSkpLywvXig/OmZhbHNlKD89KFt+fVxccyldKSkpLywvXig/OnVuZGVmaW5lZCg/PShbfn1cXHMpXSkpKS8sL14oPzpudWxsKD89KFt+fVxccyldKSkpLywvXig/Oi0/WzAtOV0rKD86XFwuWzAtOV0rKT8oPz0oW359XFxzKV0pKSkvLC9eKD86YXNcXHMrXFx8KS8sL14oPzpcXHwpLywvXig/OihbXlxccyFcIiMlLSxcXC5cXC87LT5AXFxbLVxcXmBcXHstfl0rKD89KFs9fn1cXHNcXC8uKXxdKSkpKS8sL14oPzpcXFsoXFxcXFxcXXxbXlxcXV0pKlxcXSkvLC9eKD86LikvLC9eKD86JCkvXSxcbmNvbmRpdGlvbnM6IHtcIm11XCI6e1wicnVsZXNcIjpbNyw4LDksMTAsMTEsMTIsMTMsMTQsMTUsMTYsMTcsMTgsMTksMjAsMjEsMjIsMjMsMjQsMjUsMjYsMjcsMjgsMjksMzAsMzEsMzIsMzMsMzQsMzUsMzYsMzcsMzgsMzksNDAsNDEsNDIsNDMsNDRdLFwiaW5jbHVzaXZlXCI6ZmFsc2V9LFwiZW11XCI6e1wicnVsZXNcIjpbMl0sXCJpbmNsdXNpdmVcIjpmYWxzZX0sXCJjb21cIjp7XCJydWxlc1wiOls2XSxcImluY2x1c2l2ZVwiOmZhbHNlfSxcInJhd1wiOntcInJ1bGVzXCI6WzMsNCw1XSxcImluY2x1c2l2ZVwiOmZhbHNlfSxcIklOSVRJQUxcIjp7XCJydWxlc1wiOlswLDEsNDRdLFwiaW5jbHVzaXZlXCI6dHJ1ZX19XG59KTtcbnJldHVybiBsZXhlcjtcbn0pKCk7XG5wYXJzZXIubGV4ZXIgPSBsZXhlcjtcbmZ1bmN0aW9uIFBhcnNlciAoKSB7XG4gIHRoaXMueXkgPSB7fTtcbn1cblBhcnNlci5wcm90b3R5cGUgPSBwYXJzZXI7cGFyc2VyLlBhcnNlciA9IFBhcnNlcjtcbnJldHVybiBuZXcgUGFyc2VyO1xufSkoKTtleHBvcnQgZGVmYXVsdCBoYW5kbGViYXJzO1xuIl19


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _visitor = __webpack_require__(23);

	var _visitor2 = _interopRequireDefault(_visitor);

	function WhitespaceControl() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  this.options = options;
	}
	WhitespaceControl.prototype = new _visitor2['default']();

	WhitespaceControl.prototype.Program = function (program) {
	  var doStandalone = !this.options.ignoreStandalone;

	  var isRoot = !this.isRootSeen;
	  this.isRootSeen = true;

	  var body = program.body;
	  for (var i = 0, l = body.length; i < l; i++) {
	    var current = body[i],
	        strip = this.accept(current);

	    if (!strip) {
	      continue;
	    }

	    var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
	        _isNextWhitespace = isNextWhitespace(body, i, isRoot),
	        openStandalone = strip.openStandalone && _isPrevWhitespace,
	        closeStandalone = strip.closeStandalone && _isNextWhitespace,
	        inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

	    if (strip.close) {
	      omitRight(body, i, true);
	    }
	    if (strip.open) {
	      omitLeft(body, i, true);
	    }

	    if (doStandalone && inlineStandalone) {
	      omitRight(body, i);

	      if (omitLeft(body, i)) {
	        // If we are on a standalone node, save the indent info for partials
	        if (current.type === 'PartialStatement') {
	          // Pull out the whitespace from the final line
	          current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
	        }
	      }
	    }
	    if (doStandalone && openStandalone) {
	      omitRight((current.program || current.inverse).body);

	      // Strip out the previous content node if it's whitespace only
	      omitLeft(body, i);
	    }
	    if (doStandalone && closeStandalone) {
	      // Always strip the next node
	      omitRight(body, i);

	      omitLeft((current.inverse || current.program).body);
	    }
	  }

	  return program;
	};

	WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
	  this.accept(block.program);
	  this.accept(block.inverse);

	  // Find the inverse program that is involed with whitespace stripping.
	  var program = block.program || block.inverse,
	      inverse = block.program && block.inverse,
	      firstInverse = inverse,
	      lastInverse = inverse;

	  if (inverse && inverse.chained) {
	    firstInverse = inverse.body[0].program;

	    // Walk the inverse chain to find the last inverse that is actually in the chain.
	    while (lastInverse.chained) {
	      lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
	    }
	  }

	  var strip = {
	    open: block.openStrip.open,
	    close: block.closeStrip.close,

	    // Determine the standalone candiacy. Basically flag our content as being possibly standalone
	    // so our parent can determine if we actually are standalone
	    openStandalone: isNextWhitespace(program.body),
	    closeStandalone: isPrevWhitespace((firstInverse || program).body)
	  };

	  if (block.openStrip.close) {
	    omitRight(program.body, null, true);
	  }

	  if (inverse) {
	    var inverseStrip = block.inverseStrip;

	    if (inverseStrip.open) {
	      omitLeft(program.body, null, true);
	    }

	    if (inverseStrip.close) {
	      omitRight(firstInverse.body, null, true);
	    }
	    if (block.closeStrip.open) {
	      omitLeft(lastInverse.body, null, true);
	    }

	    // Find standalone else statments
	    if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
	      omitLeft(program.body);
	      omitRight(firstInverse.body);
	    }
	  } else if (block.closeStrip.open) {
	    omitLeft(program.body, null, true);
	  }

	  return strip;
	};

	WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
	  return mustache.strip;
	};

	WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
	  /* istanbul ignore next */
	  var strip = node.strip || {};
	  return {
	    inlineStandalone: true,
	    open: strip.open,
	    close: strip.close
	  };
	};

	function isPrevWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = body.length;
	  }

	  // Nodes that end with newlines are considered whitespace (but are special
	  // cased for strip operations)
	  var prev = body[i - 1],
	      sibling = body[i - 2];
	  if (!prev) {
	    return isRoot;
	  }

	  if (prev.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
	  }
	}
	function isNextWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = -1;
	  }

	  var next = body[i + 1],
	      sibling = body[i + 2];
	  if (!next) {
	    return isRoot;
	  }

	  if (next.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
	  }
	}

	// Marks the node to the right of the position as omitted.
	// I.e. {{foo}}' ' will mark the ' ' node as omitted.
	//
	// If i is undefined, then the first child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitRight(body, i, multiple) {
	  var current = body[i == null ? 0 : i + 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
	    return;
	  }

	  var original = current.value;
	  current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
	  current.rightStripped = current.value !== original;
	}

	// Marks the node to the left of the position as omitted.
	// I.e. ' '{{foo}} will mark the ' ' node as omitted.
	//
	// If i is undefined then the last child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitLeft(body, i, multiple) {
	  var current = body[i == null ? body.length - 1 : i - 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
	    return;
	  }

	  // We omit the last node if it's whitespace only and not preceeded by a non-content node.
	  var original = current.value;
	  current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
	  current.leftStripped = current.value !== original;
	  return current.leftStripped;
	}

	exports['default'] = WhitespaceControl;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2NvbXBpbGVyL3doaXRlc3BhY2UtY29udHJvbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O3VCQUFvQixXQUFXOzs7O0FBRS9CLFNBQVMsaUJBQWlCLEdBQWU7TUFBZCxPQUFPLHlEQUFHLEVBQUU7O0FBQ3JDLE1BQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0NBQ3hCO0FBQ0QsaUJBQWlCLENBQUMsU0FBUyxHQUFHLDBCQUFhLENBQUM7O0FBRTVDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsVUFBUyxPQUFPLEVBQUU7QUFDdEQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDOztBQUVwRCxNQUFJLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDOUIsTUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7O0FBRXZCLE1BQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7QUFDeEIsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUMzQyxRQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUVqQyxRQUFJLENBQUMsS0FBSyxFQUFFO0FBQ1YsZUFBUztLQUNWOztBQUVELFFBQUksaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUM7UUFDckQsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUM7UUFFckQsY0FBYyxHQUFHLEtBQUssQ0FBQyxjQUFjLElBQUksaUJBQWlCO1FBQzFE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QUFDeEQsTUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLGtCQUFrQixJQUFLLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxZQUFZLEFBQUMsRUFBRTtBQUMxRixXQUFPO0dBQ1I7OztBQUdELE1BQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7QUFDN0IsU0FBTyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUksTUFBTSxHQUFLLFNBQVMsQUFBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzdFLFNBQU8sQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUM7QUFDbEQsU0FBTyxPQUFPLENBQUMsWUFBWSxDQUFDO0NBQzdCOztxQkFFYyxpQkFBaUIiLCJmaWxlIjoid2hpdGVzcGFjZS1jb250cm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpc2l0b3IgZnJvbSAnLi92aXNpdG9yJztcblxuZnVuY3Rpb24gV2hpdGVzcGFjZUNvbnRyb2wob3B0aW9ucyA9IHt9KSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG59XG5XaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUgPSBuZXcgVmlzaXRvcigpO1xuXG5XaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuUHJvZ3JhbSA9IGZ1bmN0aW9uKHByb2dyYW0pIHtcbiAgY29uc3QgZG9TdGFuZGFsb25lID0gIXRoaXMub3B0aW9ucy5pZ25vcmVTdGFuZGFsb25lO1xuXG4gIGxldCBpc1Jvb3QgPSAhdGhpcy5pc1Jvb3RTZWVuO1xuICB0aGlzLmlzUm9vdFNlZW4gPSB0cnVlO1xuXG4gIGxldCBib2R5ID0gcHJvZ3JhbS5ib2R5O1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGJvZHkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGN1cnJlbnQgPSBib2R5W2ldLFxuICAgICAgICBzdHJpcCA9IHRoaXMuYWNjZXB0KGN1cnJlbnQpO1xuXG4gICAgaWYgKCFzdHJpcCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgbGV0IF9pc1ByZXZXaGl0ZXNwYWNlID0gaXNQcmV2V2hpdGVzcGFjZShib2R5LCBpLCBpc1Jvb3QpLFxuICAgICAgICBfaXNOZXh0V2hpdGVzcGFjZSA9IGlzTmV4dFdoaXRlc3BhY2UoYm9keSwgaSwgaXNSb290KSxcblxuICAgICAgICBvcGVuU3RhbmRhbG9uZSA9IHN0cmlwLm9wZW5TdGFuZGFsb25lICYmIF9pc1ByZXZXaGl0ZXNwYWNlLFxuICAgICAgICBjbG9zZVN0YW5kYWxvbmUgPSBzdHJpcC5jbG9zZVN0YW5kYWxvbmUgJiYgX2lzTmV4dFdoaXRlc3BhY2UsXG4gICAgICAgIGlubGluZVN0YW5kYWxvbmUgPSBzdHJpcC5pbmxpbmVTdGFuZGFsb25lICYmIF9pc1ByZXZXaGl0ZXNwYWNlICYmIF9pc05leHRXaGl0ZXNwYWNlO1xuXG4gICAgaWYgKHN0cmlwLmNsb3NlKSB7XG4gICAgICBvbWl0UmlnaHQoYm9keSwgaSwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmIChzdHJpcC5vcGVuKSB7XG4gICAgICBvbWl0TGVmdChib2R5LCBpLCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoZG9TdGFuZGFsb25lICYmIGlubGluZVN0YW5kYWxvbmUpIHtcbiAgICAgIG9taXRSaWdodChib2R5LCBpKTtcblxuICAgICAgaWYgKG9taXRMZWZ0KGJvZHksIGkpKSB7XG4gICAgICAgIC8vIElmIHdlIGFyZSBvbiBhIHN0YW5kYWxvbmUgbm9kZSwgc2F2ZSB0aGUgaW5kZW50IGluZm8gZm9yIHBhcnRpYWxzXG4gICAgICAgIGlmIChjdXJyZW50LnR5cGUgPT09ICdQYXJ0aWFsU3RhdGVtZW50Jykge1xuICAgICAgICAgIC8vIFB1bGwgb3V0IHRoZSB3aGl0ZXNwYWNlIGZyb20gdGhlIGZpbmFsIGxpbmVcbiAgICAgICAgICBjdXJyZW50LmluZGVudCA9ICgvKFsgXFx0XSskKS8pLmV4ZWMoYm9keVtpIC0gMV0ub3JpZ2luYWwpWzFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkb1N0YW5kYWxvbmUgJiYgb3BlblN0YW5kYWxvbmUpIHtcbiAgICAgIG9taXRSaWdodCgoY3VycmVudC5wcm9ncmFtIHx8IGN1cnJlbnQuaW52ZXJzZSkuYm9keSk7XG5cbiAgICAgIC8vIFN0cmlwIG91dCB0aGUgcHJldmlvdXMgY29udGVudCBub2RlIGlmIGl0J3Mgd2hpdGVzcGFjZSBvbmx5XG4gICAgICBvbWl0TGVmdChib2R5LCBpKTtcbiAgICB9XG4gICAgaWYgKGRvU3RhbmRhbG9uZSAmJiBjbG9zZVN0YW5kYWxvbmUpIHtcbiAgICAgIC8vIEFsd2F5cyBzdHJpcCB0aGUgbmV4dCBub2RlXG4gICAgICBvbWl0UmlnaHQoYm9keSwgaSk7XG5cbiAgICAgIG9taXRMZWZ0KChjdXJyZW50LmludmVyc2UgfHwgY3VycmVudC5wcm9ncmFtKS5ib2R5KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvZ3JhbTtcbn07XG5cbldoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5CbG9ja1N0YXRlbWVudCA9XG5XaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuRGVjb3JhdG9yQmxvY2sgPVxuV2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLlBhcnRpYWxCbG9ja1N0YXRlbWVudCA9IGZ1bmN0aW9uKGJsb2NrKSB7XG4gIHRoaXMuYWNjZXB0KGJsb2NrLnByb2dyYW0pO1xuICB0aGlzLmFjY2VwdChibG9jay5pbnZlcnNlKTtcblxuICAvLyBGaW5kIHRoZSBpbnZlcnNlIHByb2dyYW0gdGhhdCBpcyBpbnZvbGVkIHdpdGggd2hpdGVzcGFjZSBzdHJpcHBpbmcuXG4gIGxldCBwcm9ncmFtID0gYmxvY2sucHJvZ3JhbSB8fCBibG9jay5pbnZlcnNlLFxuICAgICAgaW52ZXJzZSA9IGJsb2NrLnByb2dyYW0gJiYgYmxvY2suaW52ZXJzZSxcbiAgICAgIGZpcnN0SW52ZXJzZSA9IGludmVyc2UsXG4gICAgICBsYXN0SW52ZXJzZSA9IGludmVyc2U7XG5cbiAgaWYgKGludmVyc2UgJiYgaW52ZXJzZS5jaGFpbmVkKSB7XG4gICAgZmlyc3RJbnZlcnNlID0gaW52ZXJzZS5ib2R5WzBdLnByb2dyYW07XG5cbiAgICAvLyBXYWxrIHRoZSBpbnZlcnNlIGNoYWluIHRvIGZpbmQgdGhlIGxhc3QgaW52ZXJzZSB0aGF0IGlzIGFjdHVhbGx5IGluIHRoZSBjaGFpbi5cbiAgICB3aGlsZSAobGFzdEludmVyc2UuY2hhaW5lZCkge1xuICAgICAgbGFzdEludmVyc2UgPSBsYXN0SW52ZXJzZS5ib2R5W2xhc3RJbnZlcnNlLmJvZHkubGVuZ3RoIC0gMV0ucHJvZ3JhbTtcbiAgICB9XG4gIH1cblxuICBsZXQgc3RyaXAgPSB7XG4gICAgb3BlbjogYmxvY2sub3BlblN0cmlwLm9wZW4sXG4gICAgY2xvc2U6IGJsb2NrLmNsb3NlU3RyaXAuY2xvc2UsXG5cbiAgICAvLyBEZXRlcm1pbmUgdGhlIHN0YW5kYWxvbmUgY2FuZGlhY3kuIEJhc2ljYWxseSBmbGFnIG91ciBjb250ZW50IGFzIGJlaW5nIHBvc3NpYmx5IHN0YW5kYWxvbmVcbiAgICAvLyBzbyBvdXIgcGFyZW50IGNhbiBkZXRlcm1pbmUgaWYgd2UgYWN0dWFsbHkgYXJlIHN0YW5kYWxvbmVcbiAgICBvcGVuU3RhbmRhbG9uZTogaXNOZXh0V2hpdGVzcGFjZShwcm9ncmFtLmJvZHkpLFxuICAgIGNsb3NlU3RhbmRhbG9uZTogaXNQcmV2V2hpdGVzcGFjZSgoZmlyc3RJbnZlcnNlIHx8IHByb2dyYW0pLmJvZHkpXG4gIH07XG5cbiAgaWYgKGJsb2NrLm9wZW5TdHJpcC5jbG9zZSkge1xuICAgIG9taXRSaWdodChwcm9ncmFtLmJvZHksIG51bGwsIHRydWUpO1xuICB9XG5cbiAgaWYgKGludmVyc2UpIHtcbiAgICBsZXQgaW52ZXJzZVN0cmlwID0gYmxvY2suaW52ZXJzZVN0cmlwO1xuXG4gICAgaWYgKGludmVyc2VTdHJpcC5vcGVuKSB7XG4gICAgICBvbWl0TGVmdChwcm9ncmFtLmJvZHksIG51bGwsIHRydWUpO1xuICAgIH1cblxuICAgIGlmIChpbnZlcnNlU3RyaXAuY2xvc2UpIHtcbiAgICAgIG9taXRSaWdodChmaXJzdEludmVyc2UuYm9keSwgbnVsbCwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmIChibG9jay5jbG9zZVN0cmlwLm9wZW4pIHtcbiAgICAgIG9taXRMZWZ0KGxhc3RJbnZlcnNlLmJvZHksIG51bGwsIHRydWUpO1xuICAgIH1cblxuICAgIC8vIEZpbmQgc3RhbmRhbG9uZSBlbHNlIHN0YXRtZW50c1xuICAgIGlmICghdGhpcy5vcHRpb25zLmlnbm9yZVN0YW5kYWxvbmVcbiAgICAgICAgJiYgaXNQcmV2V2hpdGVzcGFjZShwcm9ncmFtLmJvZHkpXG4gICAgICAgICYmIGlzTmV4dFdoaXRlc3BhY2UoZmlyc3RJbnZlcnNlLmJvZHkpKSB7XG4gICAgICBvbWl0TGVmdChwcm9ncmFtLmJvZHkpO1xuICAgICAgb21pdFJpZ2h0KGZpcnN0SW52ZXJzZS5ib2R5KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYmxvY2suY2xvc2VTdHJpcC5vcGVuKSB7XG4gICAgb21pdExlZnQocHJvZ3JhbS5ib2R5LCBudWxsLCB0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBzdHJpcDtcbn07XG5cbldoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5EZWNvcmF0b3IgPVxuV2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLk11c3RhY2hlU3RhdGVtZW50ID0gZnVuY3Rpb24obXVzdGFjaGUpIHtcbiAgcmV0dXJuIG11c3RhY2hlLnN0cmlwO1xufTtcblxuV2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLlBhcnRpYWxTdGF0ZW1lbnQgPVxuICAgIFdoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5Db21tZW50U3RhdGVtZW50ID0gZnVuY3Rpb24obm9kZSkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBsZXQgc3RyaXAgPSBub2RlLnN0cmlwIHx8IHt9O1xuICByZXR1cm4ge1xuICAgIGlubGluZVN0YW5kYWxvbmU6IHRydWUsXG4gICAgb3Blbjogc3RyaXAub3BlbixcbiAgICBjbG9zZTogc3RyaXAuY2xvc2VcbiAgfTtcbn07XG5cblxuZnVuY3Rpb24gaXNQcmV2V2hpdGVzcGFjZShib2R5LCBpLCBpc1Jvb3QpIHtcbiAgaWYgKGkgPT09IHVuZGVmaW5lZCkge1xuICAgIGkgPSBib2R5Lmxlbmd0aDtcbiAgfVxuXG4gIC8vIE5vZGVzIHRoYXQgZW5kIHdpdGggbmV3bGluZXMgYXJlIGNvbnNpZGVyZWQgd2hpdGVzcGFjZSAoYnV0IGFyZSBzcGVjaWFsXG4gIC8vIGNhc2VkIGZvciBzdHJpcCBvcGVyYXRpb25zKVxuICBsZXQgcHJldiA9IGJvZHlbaSAtIDFdLFxuICAgICAgc2libGluZyA9IGJvZHlbaSAtIDJdO1xuICBpZiAoIXByZXYpIHtcbiAgICByZXR1cm4gaXNSb290O1xuICB9XG5cbiAgaWYgKHByZXYudHlwZSA9PT0gJ0NvbnRlbnRTdGF0ZW1lbnQnKSB7XG4gICAgcmV0dXJuIChzaWJsaW5nIHx8ICFpc1Jvb3QgPyAoL1xccj9cXG5cXHMqPyQvKSA6ICgvKF58XFxyP1xcbilcXHMqPyQvKSkudGVzdChwcmV2Lm9yaWdpbmFsKTtcbiAgfVxufVxuZnVuY3Rpb24gaXNOZXh0V2hpdGVzcGFjZShib2R5LCBpLCBpc1Jvb3QpIHtcbiAgaWYgKGkgPT09IHVuZGVmaW5lZCkge1xuICAgIGkgPSAtMTtcbiAgfVxuXG4gIGxldCBuZXh0ID0gYm9keVtpICsgMV0sXG4gICAgICBzaWJsaW5nID0gYm9keVtpICsgMl07XG4gIGlmICghbmV4dCkge1xuICAgIHJldHVybiBpc1Jvb3Q7XG4gIH1cblxuICBpZiAobmV4dC50eXBlID09PSAnQ29udGVudFN0YXRlbWVudCcpIHtcbiAgICByZXR1cm4gKHNpYmxpbmcgfHwgIWlzUm9vdCA/ICgvXlxccyo/XFxyP1xcbi8pIDogKC9eXFxzKj8oXFxyP1xcbnwkKS8pKS50ZXN0KG5leHQub3JpZ2luYWwpO1xuICB9XG59XG5cbi8vIE1hcmtzIHRoZSBub2RlIHRvIHRoZSByaWdodCBvZiB0aGUgcG9zaXRpb24gYXMgb21pdHRlZC5cbi8vIEkuZS4ge3tmb299fScgJyB3aWxsIG1hcmsgdGhlICcgJyBub2RlIGFzIG9taXR0ZWQuXG4vL1xuLy8gSWYgaSBpcyB1bmRlZmluZWQsIHRoZW4gdGhlIGZpcnN0IGNoaWxkIHdpbGwgYmUgbWFya2VkIGFzIHN1Y2guXG4vL1xuLy8gSWYgbXVsaXRwbGUgaXMgdHJ1dGh5IHRoZW4gYWxsIHdoaXRlc3BhY2Ugd2lsbCBiZSBzdHJpcHBlZCBvdXQgdW50aWwgbm9uLXdoaXRlc3BhY2Vcbi8vIGNvbnRlbnQgaXMgbWV0LlxuZnVuY3Rpb24gb21pdFJpZ2h0KGJvZHksIGksIG11bHRpcGxlKSB7XG4gIGxldCBjdXJyZW50ID0gYm9keVtpID09IG51bGwgPyAwIDogaSArIDFdO1xuICBpZiAoIWN1cnJlbnQgfHwgY3VycmVudC50eXBlICE9PSAnQ29udGVudFN0YXRlbWVudCcgfHwgKCFtdWx0aXBsZSAmJiBjdXJyZW50LnJpZ2h0U3RyaXBwZWQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IG9yaWdpbmFsID0gY3VycmVudC52YWx1ZTtcbiAgY3VycmVudC52YWx1ZSA9IGN1cnJlbnQudmFsdWUucmVwbGFjZShtdWx0aXBsZSA/ICgvXlxccysvKSA6ICgvXlsgXFx0XSpcXHI/XFxuPy8pLCAnJyk7XG4gIGN1cnJlbnQucmlnaHRTdHJpcHBlZCA9IGN1cnJlbnQudmFsdWUgIT09IG9yaWdpbmFsO1xufVxuXG4vLyBNYXJrcyB0aGUgbm9kZSB0byB0aGUgbGVmdCBvZiB0aGUgcG9zaXRpb24gYXMgb21pdHRlZC5cbi8vIEkuZS4gJyAne3tmb299fSB3aWxsIG1hcmsgdGhlICcgJyBub2RlIGFzIG9taXR0ZWQuXG4vL1xuLy8gSWYgaSBpcyB1bmRlZmluZWQgdGhlbiB0aGUgbGFzdCBjaGlsZCB3aWxsIGJlIG1hcmtlZCBhcyBzdWNoLlxuLy9cbi8vIElmIG11bGl0cGxlIGlzIHRydXRoeSB0aGVuIGFsbCB3aGl0ZXNwYWNlIHdpbGwgYmUgc3RyaXBwZWQgb3V0IHVudGlsIG5vbi13aGl0ZXNwYWNlXG4vLyBjb250ZW50IGlzIG1ldC5cbmZ1bmN0aW9uIG9taXRMZWZ0KGJvZHksIGksIG11bHRpcGxlKSB7XG4gIGxldCBjdXJyZW50ID0gYm9keVtpID09IG51bGwgPyBib2R5Lmxlbmd0aCAtIDEgOiBpIC0gMV07XG4gIGlmICghY3VycmVudCB8fCBjdXJyZW50LnR5cGUgIT09ICdDb250ZW50U3RhdGVtZW50JyB8fCAoIW11bHRpcGxlICYmIGN1cnJlbnQubGVmdFN0cmlwcGVkKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFdlIG9taXQgdGhlIGxhc3Qgbm9kZSBpZiBpdCdzIHdoaXRlc3BhY2Ugb25seSBhbmQgbm90IHByZWNlZWRlZCBieSBhIG5vbi1jb250ZW50IG5vZGUuXG4gIGxldCBvcmlnaW5hbCA9IGN1cnJlbnQudmFsdWU7XG4gIGN1cnJlbnQudmFsdWUgPSBjdXJyZW50LnZhbHVlLnJlcGxhY2UobXVsdGlwbGUgPyAoL1xccyskLykgOiAoL1sgXFx0XSskLyksICcnKTtcbiAgY3VycmVudC5sZWZ0U3RyaXBwZWQgPSBjdXJyZW50LnZhbHVlICE9PSBvcmlnaW5hbDtcbiAgcmV0dXJuIGN1cnJlbnQubGVmdFN0cmlwcGVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXaGl0ZXNwYWNlQ29udHJvbDtcbiJdfQ==


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _exception = __webpack_require__(4);

	var _exception2 = _interopRequireDefault(_exception);

	function Visitor() {
	  this.parents = [];
	}

	Visitor.prototype = {
	  constructor: Visitor,
	  mutating: false,

	  // Visits a given value. If mutating, will replace the value if necessary.
	  acceptKey: function acceptKey(node, name) {
	    var value = this.accept(node[name]);
	    if (this.mutating) {
	      // Hacky sanity check: This may have a few false positives for type for the helper
	      // methods but will generally do the right thing without a lot of overhead.
	      if (value && !Visitor.prototype[value.type]) {
	        throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
	      }
	      node[name] = value;
	    }
	  },

	  // Performs an accept operation with added sanity check to ensure
	  // required keys are not removed.
	  acceptRequired: function acceptRequired(node, name) {
	    this.acceptKey(node, name);

	    if (!node[name]) {
	      throw new _exception2['default'](node.type + ' requires ' + name);
	    }
	  },

	  // Traverses a given array. If mutating, empty respnses will be removed
	  // for child elements.
	  acceptArray: function acceptArray(array) {
	    for (var i = 0, l = array.length; i < l; i++) {
	      this.acceptKey(array, i);

	      if (!array[i]) {
	        array.splice(i, 1);
	        i--;
	        l--;
	      }
	    }
	  },

	  accept: function accept(object) {
	    if (!object) {
	      return;
	    }

	    /* istanbul ignore next: Sanity code */
	    if (!this[object.type]) {
	      throw new _exception2['default']('Unknown type: ' + object.type, object);
	    }

	    if (this.current) {
	      this.parents.unshift(this.current);
	    }
	    this.current = object;

	    var ret = this[object.type](object);

	    this.current = this.parents.shift();

	    if (!this.mutating || ret) {
	      return ret;
	    } else if (ret !== false) {
	      return object;
	    }
	  },

	  Program: function Program(program) {
	    this.acceptArray(program.body);
	  },

	  MustacheStatement: visitSubExpression,
	  Decorator: visitSubExpression,

	  BlockStatement: visitBlock,
	  DecoratorBlock: visitBlock,

	  PartialStatement: visitPartial,
	  PartialBlockStatement: function PartialBlockStatement(partial) {
	    visitPartial.call(this, partial);

	    this.acceptKey(partial, 'program');
	  },

	  ContentStatement: function ContentStatement() /* content */{},
	  CommentStatement: function CommentStatement() /* comment */{},

	  SubExpression: visitSubExpression,

	  PathExpression: function PathExpression() /* path */{},

	  StringLiteral: function StringLiteral() /* string */{},
	  NumberLiteral: function NumberLiteral() /* number */{},
	  BooleanLiteral: function BooleanLiteral() /* bool */{},
	  UndefinedLiteral: function UndefinedLiteral() /* literal */{},
	  NullLiteral: function NullLiteral() /* literal */{},

	  Hash: function Hash(hash) {
	    this.acceptArray(hash.pairs);
	  },
	  HashPair: function HashPair(pair) {
	    this.acceptRequired(pair, 'value');
	  }
	};

	function visitSubExpression(mustache) {
	  this.acceptRequired(mustache, 'path');
	  this.acceptArray(mustache.params);
	  this.acceptKey(mustache, 'hash');
	}
	function visitBlock(block) {
	  visitSubExpression.call(this, block);

	  this.acceptKey(block, 'program');
	  this.acceptKey(block, 'inverse');
	}
	function visitPartial(partial) {
	  this.acceptRequired(partial, 'name');
	  this.acceptArray(partial.params);
	  this.acceptKey(partial, 'hash');
	}

	exports['default'] = Visitor;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2NvbXBpbGVyL3Zpc2l0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozt5QkFBc0IsY0FBYzs7OztBQUVwQyxTQUFTLE9BQU8sR0FBRztBQUNqQixNQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztDQUNuQjs7QUFFRCxPQUFPLENBQUMsU0FBUyxHQUFHO0FBQ2xCLGFBQVcsRUFBRSxPQUFPO0FBQ3BCLFVBQVEsRUFBRSxLQUFLOzs7QUFHZixXQUFTLEVBQUUsbUJBQVMsSUFBSSxFQUFFLElBQUksRUFBRTtBQUM5QixRQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLFFBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTs7O0FBR2pCLFVBQUksS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDM0MsY0FBTSwyQkFBYyx3QkFBd0IsR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLHlCQUF5QixHQUFHLElBQUksR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO09BQ3BIO0FBQ0QsVUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztLQUNwQjtHQUNGOzs7O0FBSUQsZ0JBQWMsRUFBRSx3QkFBUyxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ25DLFFBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDOztBQUUzQixRQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ2YsWUFBTSwyQkFBYyxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQztLQUN0RDtHQUNGOzs7O0FBSUQsYUFBVyxFQUFFLHFCQUFTLEtBQUssRUFBRTtBQUMzQixTQUFLLElBQUksQ0FBQyxHQUFH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O0FBQ2xDLE1BQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQ2xDO0FBQ0QsU0FBUyxVQUFVLENBQUMsS0FBSyxFQUFFO0FBQ3pCLG9CQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7O0FBRXJDLE1BQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2pDLE1BQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0NBQ2xDO0FBQ0QsU0FBUyxZQUFZLENBQUMsT0FBTyxFQUFFO0FBQzdCLE1BQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3JDLE1BQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLE1BQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQ2pDOztxQkFFYyxPQUFPIiwiZmlsZSI6InZpc2l0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4uL2V4Y2VwdGlvbic7XG5cbmZ1bmN0aW9uIFZpc2l0b3IoKSB7XG4gIHRoaXMucGFyZW50cyA9IFtdO1xufVxuXG5WaXNpdG9yLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFZpc2l0b3IsXG4gIG11dGF0aW5nOiBmYWxzZSxcblxuICAvLyBWaXNpdHMgYSBnaXZlbiB2YWx1ZS4gSWYgbXV0YXRpbmcsIHdpbGwgcmVwbGFjZSB0aGUgdmFsdWUgaWYgbmVjZXNzYXJ5LlxuICBhY2NlcHRLZXk6IGZ1bmN0aW9uKG5vZGUsIG5hbWUpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLmFjY2VwdChub2RlW25hbWVdKTtcbiAgICBpZiAodGhpcy5tdXRhdGluZykge1xuICAgICAgLy8gSGFja3kgc2FuaXR5IGNoZWNrOiBUaGlzIG1heSBoYXZlIGEgZmV3IGZhbHNlIHBvc2l0aXZlcyBmb3IgdHlwZSBmb3IgdGhlIGhlbHBlclxuICAgICAgLy8gbWV0aG9kcyBidXQgd2lsbCBnZW5lcmFsbHkgZG8gdGhlIHJpZ2h0IHRoaW5nIHdpdGhvdXQgYSBsb3Qgb2Ygb3ZlcmhlYWQuXG4gICAgICBpZiAodmFsdWUgJiYgIVZpc2l0b3IucHJvdG90eXBlW3ZhbHVlLnR5cGVdKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1VuZXhwZWN0ZWQgbm9kZSB0eXBlIFwiJyArIHZhbHVlLnR5cGUgKyAnXCIgZm91bmQgd2hlbiBhY2NlcHRpbmcgJyArIG5hbWUgKyAnIG9uICcgKyBub2RlLnR5cGUpO1xuICAgICAgfVxuICAgICAgbm9kZVtuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgfSxcblxuICAvLyBQZXJmb3JtcyBhbiBhY2NlcHQgb3BlcmF0aW9uIHdpdGggYWRkZWQgc2FuaXR5IGNoZWNrIHRvIGVuc3VyZVxuICAvLyByZXF1aXJlZCBrZXlzIGFyZSBub3QgcmVtb3ZlZC5cbiAgYWNjZXB0UmVxdWlyZWQ6IGZ1bmN0aW9uKG5vZGUsIG5hbWUpIHtcbiAgICB0aGlzLmFjY2VwdEtleShub2RlLCBuYW1lKTtcblxuICAgIGlmICghbm9kZVtuYW1lXSkge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbihub2RlLnR5cGUgKyAnIHJlcXVpcmVzICcgKyBuYW1lKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVHJhdmVyc2VzIGEgZ2l2ZW4gYXJyYXkuIElmIG11dGF0aW5nLCBlbXB0eSByZXNwbnNlcyB3aWxsIGJlIHJlbW92ZWRcbiAgLy8gZm9yIGNoaWxkIGVsZW1lbnRzLlxuICBhY2NlcHRBcnJheTogZnVuY3Rpb24oYXJyYXkpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFycmF5Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdGhpcy5hY2NlcHRLZXkoYXJyYXksIGkpO1xuXG4gICAgICBpZiAoIWFycmF5W2ldKSB7XG4gICAgICAgIGFycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgaS0tO1xuICAgICAgICBsLS07XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGFjY2VwdDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgaWYgKCFvYmplY3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogU2FuaXR5IGNvZGUgKi9cbiAgICBpZiAoIXRoaXNbb2JqZWN0LnR5cGVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdVbmtub3duIHR5cGU6ICcgKyBvYmplY3QudHlwZSwgb2JqZWN0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jdXJyZW50KSB7XG4gICAgICB0aGlzLnBhcmVudHMudW5zaGlmdCh0aGlzLmN1cnJlbnQpO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnQgPSBvYmplY3Q7XG5cbiAgICBsZXQgcmV0ID0gdGhpc1tvYmplY3QudHlwZV0ob2JqZWN0KTtcblxuICAgIHRoaXMuY3VycmVudCA9IHRoaXMucGFyZW50cy5zaGlmdCgpO1xuXG4gICAgaWYgKCF0aGlzLm11dGF0aW5nIHx8IHJldCkge1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9IGVsc2UgaWYgKHJldCAhPT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfVxuICB9LFxuXG4gIFByb2dyYW06IGZ1bmN0aW9uKHByb2dyYW0pIHtcbiAgICB0aGlzLmFjY2VwdEFycmF5KHByb2dyYW0uYm9keSk7XG4gIH0sXG5cbiAgTXVzdGFjaGVTdGF0ZW1lbnQ6IHZpc2l0U3ViRXhwcmVzc2lvbixcbiAgRGVjb3JhdG9yOiB2aXNpdFN1YkV4cHJlc3Npb24sXG5cbiAgQmxvY2tTdGF0ZW1lbnQ6IHZpc2l0QmxvY2ssXG4gIERlY29yYXRvckJsb2NrOiB2aXNpdEJsb2NrLFxuXG4gIFBhcnRpYWxTdGF0ZW1lbnQ6IHZpc2l0UGFydGlhbCxcbiAgUGFydGlhbEJsb2NrU3RhdGVtZW50OiBmdW5jdGlvbihwYXJ0aWFsKSB7XG4gICAgdmlzaXRQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCk7XG5cbiAgICB0aGlzLmFjY2VwdEtleShwYXJ0aWFsLCAncHJvZ3JhbScpO1xuICB9LFxuXG4gIENvbnRlbnRTdGF0ZW1lbnQ6IGZ1bmN0aW9uKC8qIGNvbnRlbnQgKi8pIHt9LFxuICBDb21tZW50U3RhdGVtZW50OiBmdW5jdGlvbigvKiBjb21tZW50ICovKSB7fSxcblxuICBTdWJFeHByZXNzaW9uOiB2aXNpdFN1YkV4cHJlc3Npb24sXG5cbiAgUGF0aEV4cHJlc3Npb246IGZ1bmN0aW9uKC8qIHBhdGggKi8pIHt9LFxuXG4gIFN0cmluZ0xpdGVyYWw6IGZ1bmN0aW9uKC8qIHN0cmluZyAqLykge30sXG4gIE51bWJlckxpdGVyYWw6IGZ1bmN0aW9uKC8qIG51bWJlciAqLykge30sXG4gIEJvb2xlYW5MaXRlcmFsOiBmdW5jdGlvbigvKiBib29sICovKSB7fSxcbiAgVW5kZWZpbmVkTGl0ZXJhbDogZnVuY3Rpb24oLyogbGl0ZXJhbCAqLykge30sXG4gIE51bGxMaXRlcmFsOiBmdW5jdGlvbigvKiBsaXRlcmFsICovKSB7fSxcblxuICBIYXNoOiBmdW5jdGlvbihoYXNoKSB7XG4gICAgdGhpcy5hY2NlcHRBcnJheShoYXNoLnBhaXJzKTtcbiAgfSxcbiAgSGFzaFBhaXI6IGZ1bmN0aW9uKHBhaXIpIHtcbiAgICB0aGlzLmFjY2VwdFJlcXVpcmVkKHBhaXIsICd2YWx1ZScpO1xuICB9XG59O1xuXG5mdW5jdGlvbiB2aXNpdFN1YkV4cHJlc3Npb24obXVzdGFjaGUpIHtcbiAgdGhpcy5hY2NlcHRSZXF1aXJlZChtdXN0YWNoZSwgJ3BhdGgnKTtcbiAgdGhpcy5hY2NlcHRBcnJheShtdXN0YWNoZS5wYXJhbXMpO1xuICB0aGlzLmFjY2VwdEtleShtdXN0YWNoZSwgJ2hhc2gnKTtcbn1cbmZ1bmN0aW9uIHZpc2l0QmxvY2soYmxvY2spIHtcbiAgdmlzaXRTdWJFeHByZXNzaW9uLmNhbGwodGhpcywgYmxvY2spO1xuXG4gIHRoaXMuYWNjZXB0S2V5KGJsb2NrLCAncHJvZ3JhbScpO1xuICB0aGlzLmFjY2VwdEtleShibG9jaywgJ2ludmVyc2UnKTtcbn1cbmZ1bmN0aW9uIHZpc2l0UGFydGlhbChwYXJ0aWFsKSB7XG4gIHRoaXMuYWNjZXB0UmVxdWlyZWQocGFydGlhbCwgJ25hbWUnKTtcbiAgdGhpcy5hY2NlcHRBcnJheShwYXJ0aWFsLnBhcmFtcyk7XG4gIHRoaXMuYWNjZXB0S2V5KHBhcnRpYWwsICdoYXNoJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc2l0b3I7XG4iXX0=


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.SourceLocation = SourceLocation;
	exports.id = id;
	exports.stripFlags = stripFlags;
	exports.stripComment = stripComment;
	exports.preparePath = preparePath;
	exports.prepareMustache = prepareMustache;
	exports.prepareRawBlock = prepareRawBlock;
	exports.prepareBlock = prepareBlock;
	exports.prepareProgram = prepareProgram;
	exports.preparePartialBlock = preparePartialBlock;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _exception = __webpack_require__(4);

	var _exception2 = _interopRequireDefault(_exception);

	function validateClose(open, close) {
	  close = close.path ? close.path.original : close;

	  if (open.path.original !== close) {
	    var errorNode = { loc: open.path.loc };

	    throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
	  }
	}

	function SourceLocation(source, locInfo) {
	  this.source = source;
	  this.start = {
	    line: locInfo.first_line,
	    column: locInfo.first_column
	  };
	  this.end = {
	    line: locInfo.last_line,
	    column: locInfo.last_column
	  };
	}

	function id(token) {
	  if (/^\[.*\]$/.test(token)) {
	    return token.substr(1, token.length - 2);
	  } else {
	    return token;
	  }
	}

	function stripFlags(open, close) {
	  return {
	    open: open.charAt(2) === '~',
	    close: close.charAt(close.length - 3) === '~'
	  };
	}

	function stripComment(comment) {
	  return comment.replace(/^\{\{~?\!-?-?/, '').replace(/-?-?~?\}\}$/, '');
	}

	function preparePath(data, parts, loc) {
	  loc = this.locInfo(loc);

	  var original = data ? '@' : '',
	      dig = [],
	      depth = 0;

	  for (var i = 0, l = parts.length; i < l; i++) {
	    var part = parts[i].part,

	    // If we have [] syntax then we do not treat path references as operators,
	    // i.e. foo.[this] resolves to approximately context.foo['this']
	    isLiteral = parts[i].original !== part;
	    original += (parts[i].separator || '') + part;

	    if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
	      if (dig.length > 0) {
	        throw new _exception2['default']('Invalid path: ' + original, { loc: loc });
	      } else if (part === '..') {
	        depth++;
	      }
	    } else {
	      dig.push(part);
	    }
	  }

	  return {
	    type: 'PathExpression',
	    data: data,
	    depth: depth,
	    parts: dig,
	    original: original,
	    loc: loc
	  };
	}

	function prepareMustache(path, params, hash, open, strip, locInfo) {
	  // Must use charAt to support IE pre-10
	  var escapeFlag = open.charAt(3) || open.charAt(2),
	      escaped = escapeFlag !== '{' && escapeFlag !== '&';

	  var decorator = /\*/.test(open);
	  return {
	    type: decorator ? 'Decorator' : 'MustacheStatement',
	    path: path,
	    params: params,
	    hash: hash,
	    escaped: escaped,
	    strip: strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareRawBlock(openRawBlock, contents, close, locInfo) {
	  validateClose(openRawBlock, close);

	  locInfo = this.locInfo(locInfo);
	  var program = {
	    type: 'Program',
	    body: contents,
	    strip: {},
	    loc: locInfo
	  };

	  return {
	    type: 'BlockStatement',
	    path: openRawBlock.path,
	    params: openRawBlock.params,
	    hash: openRawBlock.hash,
	    program: program,
	    openStrip: {},
	    inverseStrip: {},
	    closeStrip: {},
	    loc: locInfo
	  };
	}

	function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
	  if (close && close.path) {
	    validateClose(openBlock, close);
	  }

	  var decorator = /\*/.test(openBlock.open);

	  program.blockParams = openBlock.blockParams;

	  var inverse = undefined,
	      inverseStrip = undefined;

	  if (inverseAndProgram) {
	    if (decorator) {
	      throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
	    }

	    if (inverseAndProgram.chain) {
	      inverseAndProgram.program.body[0].closeStrip = close.strip;
	    }

	    inverseStrip = inverseAndProgram.strip;
	    inverse = inverseAndProgram.program;
	  }

	  if (inverted) {
	    inverted = inverse;
	    inverse = program;
	    program = inverted;
	  }

	  return {
	    type: decorator ? 'DecoratorBlock' : 'BlockStatement',
	    path: openBlock.path,
	    params: openBlock.params,
	    hash: openBlock.hash,
	    program: program,
	    inverse: inverse,
	    openStrip: openBlock.strip,
	    inverseStrip: inverseStrip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareProgram(statements, loc) {
	  if (!loc && statements.length) {
	    var firstLoc = statements[0].loc,
	        lastLoc = statements[statements.length - 1].loc;

	    /* istanbul ignore else */
	    if (firstLoc && lastLoc) {
	      loc = {
	        source: firstLoc.source,
	        start: {
	          line: firstLoc.start.line,
	          column: firstLoc.start.column
	        },
	        end: {
	          line: lastLoc.end.line,
	          column: lastLoc.end.column
	        }
	      };
	    }
	  }

	  return {
	    type: 'Program',
	    body: statements,
	    strip: {},
	    loc: loc
	  };
	}

	function preparePartialBlock(open, program, close, locInfo) {
	  validateClose(open, close);

	  return {
	    type: 'PartialBlockStatement',
	    name: open.path,
	    params: open.params,
	    hash: open.hash,
	    program: program,
	    openStrip: open.strip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2NvbXBpbGVyL2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBQXNCLGNBQWM7Ozs7QUFFcEMsU0FBUyxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUNsQyxPQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7O0FBRWpELE1BQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUFFO0FBQ2hDLFFBQUksU0FBUyxHQUFHLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDLENBQUM7O0FBRXJDLFVBQU0sMkJBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLEdBQUcsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0dBQ2hGO0NBQ0Y7O0FBRU0sU0FBUyxjQUFjLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRTtBQUM5QyxNQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixNQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1gsUUFBSSxFQUFFLE9BQU8sQ0FBQyxVQUFVO0FBQ3hCLFVBQU0sRUFBRSxPQUFPLENBQUMsWUFBWTtHQUM3QixDQUFDO0FBQ0YsTUFBSSxDQUFDLEdBQUcsR0FBRztBQUNULFFBQUksRUFBRSxPQUFPLENBQUMsU0FBUztBQUN2QixVQUFNLEVBQUUsT0FBTyxDQUFDLFdBQVc7R0FDNUIsQ0FBQztDQUNIOztBQUVNLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRTtBQUN4QixNQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDMUIsV0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0dBQzFD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L2V4Y2VwdGlvbic7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2xvc2Uob3BlbiwgY2xvc2UpIHtcbiAgY2xvc2UgPSBjbG9zZS5wYXRoID8gY2xvc2UucGF0aC5vcmlnaW5hbCA6IGNsb3NlO1xuXG4gIGlmIChvcGVuLnBhdGgub3JpZ2luYWwgIT09IGNsb3NlKSB7XG4gICAgbGV0IGVycm9yTm9kZSA9IHtsb2M6IG9wZW4ucGF0aC5sb2N9O1xuXG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbihvcGVuLnBhdGgub3JpZ2luYWwgKyBcIiBkb2Vzbid0IG1hdGNoIFwiICsgY2xvc2UsIGVycm9yTm9kZSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNvdXJjZUxvY2F0aW9uKHNvdXJjZSwgbG9jSW5mbykge1xuICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgdGhpcy5zdGFydCA9IHtcbiAgICBsaW5lOiBsb2NJbmZvLmZpcnN0X2xpbmUsXG4gICAgY29sdW1uOiBsb2NJbmZvLmZpcnN0X2NvbHVtblxuICB9O1xuICB0aGlzLmVuZCA9IHtcbiAgICBsaW5lOiBsb2NJbmZvLmxhc3RfbGluZSxcbiAgICBjb2x1bW46IGxvY0luZm8ubGFzdF9jb2x1bW5cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkKHRva2VuKSB7XG4gIGlmICgvXlxcWy4qXFxdJC8udGVzdCh0b2tlbikpIHtcbiAgICByZXR1cm4gdG9rZW4uc3Vic3RyKDEsIHRva2VuLmxlbmd0aCAtIDIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0b2tlbjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBGbGFncyhvcGVuLCBjbG9zZSkge1xuICByZXR1cm4ge1xuICAgIG9wZW46IG9wZW4uY2hhckF0KDIpID09PSAnficsXG4gICAgY2xvc2U6IGNsb3NlLmNoYXJBdChjbG9zZS5sZW5ndGggLSAzKSA9PT0gJ34nXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpcENvbW1lbnQoY29tbWVudCkge1xuICByZXR1cm4gY29tbWVudC5yZXBsYWNlKC9eXFx7XFx7fj9cXCEtPy0/LywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLy0/LT9+P1xcfVxcfSQvLCAnJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlUGF0aChkYXRhLCBwYXJ0cywgbG9jKSB7XG4gIGxvYyA9IHRoaXMubG9jSW5mbyhsb2MpO1xuXG4gIGxldCBvcmlnaW5hbCA9IGRhdGEgPyAnQCcgOiAnJyxcbiAgICAgIGRpZyA9IFtdLFxuICAgICAgZGVwdGggPSAwO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gcGFydHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHBhcnQgPSBwYXJ0c1tpXS5wYXJ0LFxuICAgICAgICAvLyBJZiB3ZSBoYXZlIFtdIHN5bnRheCB0aGVuIHdlIGRvIG5vdCB0cmVhdCBwYXRoIHJlZmVyZW5jZXMgYXMgb3BlcmF0b3JzLFxuICAgICAgICAvLyBpLmUuIGZvby5bdGhpc10gcmVzb2x2ZXMgdG8gYXBwcm94aW1hdGVseSBjb250ZXh0LmZvb1sndGhpcyddXG4gICAgICAgIGlzTGl0ZXJhbCA9IHBhcnRzW2ldLm9yaWdpbmFsICE9PSBwYXJ0O1xuICAgIG9yaWdpbmFsICs9IChwYXJ0c1tpXS5zZXBhcmF0b3IgfHwgJycpICsgcGFydDtcblxuICAgIGlmICghaXNMaXRlcmFsICYmIChwYXJ0ID09PSAnLi4nIHx8IHBhcnQgPT09ICcuJyB8fCBwYXJ0ID09PSAndGhpcycpKSB7XG4gICAgICBpZiAoZGlnLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignSW52YWxpZCBwYXRoOiAnICsgb3JpZ2luYWwsIHtsb2N9KTtcbiAgICAgIH0gZWxzZSBpZiAocGFydCA9PT0gJy4uJykge1xuICAgICAgICBkZXB0aCsrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkaWcucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6ICdQYXRoRXhwcmVzc2lvbicsXG4gICAgZGF0YSxcbiAgICBkZXB0aCxcbiAgICBwYXJ0czogZGlnLFxuICAgIG9yaWdpbmFsLFxuICAgIGxvY1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZU11c3RhY2hlKHBhdGgsIHBhcmFtcywgaGFzaCwgb3Blbiwgc3RyaXAsIGxvY0luZm8pIHtcbiAgLy8gTXVzdCB1c2UgY2hhckF0IHRvIHN1cHBvcnQgSUUgcHJlLTEwXG4gIGxldCBlc2NhcGVGbGFnID0gb3Blbi5jaGFyQXQoMykgfHwgb3Blbi5jaGFyQXQoMiksXG4gICAgICBlc2NhcGVkID0gZXNjYXBlRmxhZyAhPT0gJ3snICYmIGVzY2FwZUZsYWcgIT09ICcmJztcblxuICBsZXQgZGVjb3JhdG9yID0gKC9cXCovLnRlc3Qob3BlbikpO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGRlY29yYXRvciA/ICdEZWNvcmF0b3InIDogJ011c3RhY2hlU3RhdGVtZW50JyxcbiAgICBwYXRoLFxuICAgIHBhcmFtcyxcbiAgICBoYXNoLFxuICAgIGVzY2FwZWQsXG4gICAgc3RyaXAsXG4gICAgbG9jOiB0aGlzLmxvY0luZm8obG9jSW5mbylcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVSYXdCbG9jayhvcGVuUmF3QmxvY2ssIGNvbnRlbnRzLCBjbG9zZSwgbG9jSW5mbykge1xuICB2YWxpZGF0ZUNsb3NlKG9wZW5SYXdCbG9jaywgY2xvc2UpO1xuXG4gIGxvY0luZm8gPSB0aGlzLmxvY0luZm8obG9jSW5mbyk7XG4gIGxldCBwcm9ncmFtID0ge1xuICAgIHR5cGU6ICdQcm9ncmFtJyxcbiAgICBib2R5OiBjb250ZW50cyxcbiAgICBzdHJpcDoge30sXG4gICAgbG9jOiBsb2NJbmZvXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQmxvY2tTdGF0ZW1lbnQnLFxuICAgIHBhdGg6IG9wZW5SYXdCbG9jay5wYXRoLFxuICAgIHBhcmFtczogb3BlblJhd0Jsb2NrLnBhcmFtcyxcbiAgICBoYXNoOiBvcGVuUmF3QmxvY2suaGFzaCxcbiAgICBwcm9ncmFtLFxuICAgIG9wZW5TdHJpcDoge30sXG4gICAgaW52ZXJzZVN0cmlwOiB7fSxcbiAgICBjbG9zZVN0cmlwOiB7fSxcbiAgICBsb2M6IGxvY0luZm9cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVCbG9jayhvcGVuQmxvY2ssIHByb2dyYW0sIGludmVyc2VBbmRQcm9ncmFtLCBjbG9zZSwgaW52ZXJ0ZWQsIGxvY0luZm8pIHtcbiAgaWYgKGNsb3NlICYmIGNsb3NlLnBhdGgpIHtcbiAgICB2YWxpZGF0ZUNsb3NlKG9wZW5CbG9jaywgY2xvc2UpO1xuICB9XG5cbiAgbGV0IGRlY29yYXRvciA9ICgvXFwqLy50ZXN0KG9wZW5CbG9jay5vcGVuKSk7XG5cbiAgcHJvZ3JhbS5ibG9ja1BhcmFtcyA9IG9wZW5CbG9jay5ibG9ja1BhcmFtcztcblxuICBsZXQgaW52ZXJzZSxcbiAgICAgIGludmVyc2VTdHJpcDtcblxuICBpZiAoaW52ZXJzZUFuZFByb2dyYW0pIHtcbiAgICBpZiAoZGVjb3JhdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdVbmV4cGVjdGVkIGludmVyc2UgYmxvY2sgb24gZGVjb3JhdG9yJywgaW52ZXJzZUFuZFByb2dyYW0pO1xuICAgIH1cblxuICAgIGlmIChpbnZlcnNlQW5kUHJvZ3JhbS5jaGFpbikge1xuICAgICAgaW52ZXJzZUFuZFByb2dyYW0ucHJvZ3JhbS5ib2R5WzBdLmNsb3NlU3RyaXAgPSBjbG9zZS5zdHJpcDtcbiAgICB9XG5cbiAgICBpbnZlcnNlU3RyaXAgPSBpbnZlcnNlQW5kUHJvZ3JhbS5zdHJpcDtcbiAgICBpbnZlcnNlID0gaW52ZXJzZUFuZFByb2dyYW0ucHJvZ3JhbTtcbiAgfVxuXG4gIGlmIChpbnZlcnRlZCkge1xuICAgIGludmVydGVkID0gaW52ZXJzZTtcbiAgICBpbnZlcnNlID0gcHJvZ3JhbTtcbiAgICBwcm9ncmFtID0gaW52ZXJ0ZWQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IGRlY29yYXRvciA/ICdEZWNvcmF0b3JCbG9jaycgOiAnQmxvY2tTdGF0ZW1lbnQnLFxuICAgIHBhdGg6IG9wZW5CbG9jay5wYXRoLFxuICAgIHBhcmFtczogb3BlbkJsb2NrLnBhcmFtcyxcbiAgICBoYXNoOiBvcGVuQmxvY2suaGFzaCxcbiAgICBwcm9ncmFtLFxuICAgIGludmVyc2UsXG4gICAgb3BlblN0cmlwOiBvcGVuQmxvY2suc3RyaXAsXG4gICAgaW52ZXJzZVN0cmlwLFxuICAgIGNsb3NlU3RyaXA6IGNsb3NlICYmIGNsb3NlLnN0cmlwLFxuICAgIGxvYzogdGhpcy5sb2NJbmZvKGxvY0luZm8pXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlUHJvZ3JhbShzdGF0ZW1lbnRzLCBsb2MpIHtcbiAgaWYgKCFsb2MgJiYgc3RhdGVtZW50cy5sZW5ndGgpIHtcbiAgICBjb25zdCBmaXJzdExvYyA9IHN0YXRlbWVudHNbMF0ubG9jLFxuICAgICAgICAgIGxhc3RMb2MgPSBzdGF0ZW1lbnRzW3N0YXRlbWVudHMubGVuZ3RoIC0gMV0ubG9jO1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoZmlyc3RMb2MgJiYgbGFzdExvYykge1xuICAgICAgbG9jID0ge1xuICAgICAgICBzb3VyY2U6IGZpcnN0TG9jLnNvdXJjZSxcbiAgICAgICAgc3RhcnQ6IHtcbiAgICAgICAgICBsaW5lOiBmaXJzdExvYy5zdGFydC5saW5lLFxuICAgICAgICAgIGNvbHVtbjogZmlyc3RMb2Muc3RhcnQuY29sdW1uXG4gICAgICAgIH0sXG4gICAgICAgIGVuZDoge1xuICAgICAgICAgIGxpbmU6IGxhc3RMb2MuZW5kLmxpbmUsXG4gICAgICAgICAgY29sdW1uOiBsYXN0TG9jLmVuZC5jb2x1bW5cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6ICdQcm9ncmFtJyxcbiAgICBib2R5OiBzdGF0ZW1lbnRzLFxuICAgIHN0cmlwOiB7fSxcbiAgICBsb2M6IGxvY1xuICB9O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlUGFydGlhbEJsb2NrKG9wZW4sIHByb2dyYW0sIGNsb3NlLCBsb2NJbmZvKSB7XG4gIHZhbGlkYXRlQ2xvc2Uob3BlbiwgY2xvc2UpO1xuXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1BhcnRpYWxCbG9ja1N0YXRlbWVudCcsXG4gICAgbmFtZTogb3Blbi5wYXRoLFxuICAgIHBhcmFtczogb3Blbi5wYXJhbXMsXG4gICAgaGFzaDogb3Blbi5oYXNoLFxuICAgIHByb2dyYW0sXG4gICAgb3BlblN0cmlwOiBvcGVuLnN0cmlwLFxuICAgIGNsb3NlU3RyaXA6IGNsb3NlICYmIGNsb3NlLnN0cmlwLFxuICAgIGxvYzogdGhpcy5sb2NJbmZvKGxvY0luZm8pXG4gIH07XG59XG5cbiJdfQ==


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable new-cap */

	'use strict';

	exports.__esModule = true;
	exports.Compiler = Compiler;
	exports.precompile = precompile;
	exports.compile = compile;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _exception = __webpack_require__(4);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(3);

	var _ast = __webpack_require__(19);

	var _ast2 = _interopRequireDefault(_ast);

	var slice = [].slice;

	function Compiler() {}

	// the foundHelper register will disambiguate helper lookup from finding a
	// function in a context. This is necessary for mustache compatibility, which
	// requires that context functions in blocks are evaluated by blockHelperMissing,
	// and then proceed as if the resulting value was provided to blockHelperMissing.

	Compiler.prototype = {
	  compiler: Compiler,

	  equals: function equals(other) {
	    var len = this.opcodes.length;
	    if (other.opcodes.length !== len) {
	      return false;
	    }

	    for (var i = 0; i < len; i++) {
	      var opcode = this.opcodes[i],
	          otherOpcode = other.opcodes[i];
	      if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
	        return false;
	      }
	    }

	    // We know that length is the same between the two arrays because they are directly tied
	    // to the opcode behavior above.
	    len = this.children.length;
	    for (var i = 0; i < len; i++) {
	      if (!this.children[i].equals(other.children[i])) {
	        return false;
	      }
	    }

	    return true;
	  },

	  guid: 0,

	  compile: function compile(program, options) {
	    this.sourceNode = [];
	    this.opcodes = [];
	    this.children = [];
	    this.options = options;

	    options.blockParams = options.blockParams || [];

	    // These changes will propagate to the other compiler components
	    var knownHelpers = options.knownHelpers;
	    options.knownHelpers = {
	      'helperMissing': true,
	      'blockHelperMissing': true,
	      'each': true,
	      'if': true,
	      'unless': true,
	      'with': true,
	      'log': true,
	      'lookup': true
	    };
	    if (knownHelpers) {
	      for (var _name in knownHelpers) {
	        /* istanbul ignore else */
	        if (_name in knownHelpers) {
	          options.knownHelpers[_name] = knownHelpers[_name];
	        }
	      }
	    }

	    return this.accept(program);
	  },

	  compileProgram: function compileProgram(program) {
	    var childCompiler = new this.compiler(),
	        // eslint-disable-line new-cap
	    result = childCompiler.compile(program, this.options),
	        guid = this.guid++;

	    this.usePartial = this.usePartial || result.usePartial;

	    this.children[guid] = result;
	    this.useDepths = this.useDepths || result.useDepths;

	    return guid;
	  },

	  accept: function accept(node) {
	    /* istanbul ignore next: Sanity code */
	    if (!this[node.type]) {
	      throw new _exception2['default']('Unknown type: ' + node.type, node);
	    }

	    this.sourceNode.unshift(node);
	    var ret = this[node.type](node);
	    this.sourceNode.shift();
	    return ret;
	  },

	  Program: function Program(program) {
	    this.options.blockParams.unshift(program.blockParams);

	    var body = program.body,
	        bodyLength = body.length;
	    for (var i = 0; i < bodyLength; i++) {
	      this.accept(body[i]);
	    }

	    this.options.blockParams.shift();

	    this.isSimple = bodyLength === 1;
	    this.blockParams = program.blockParams ? program.blockParams.length : 0;

	    return this;
	  },

	  BlockStatement: function BlockStatement(block) {
	    transformLiteralToPath(block);

	    var program = block.program,
	        inverse = block.inverse;

	    program = program && this.compileProgram(program);
	    inverse = inverse && this.compileProgram(inverse);

	    var type = this.classifySexpr(block);

	    if (type === 'helper') {
	      this.helperSexpr(block, program, inverse);
	    } else if (type === 'simple') {
	      this.simpleSexpr(block);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('blockValue', block.path.original);
	    } else {
	      this.ambiguousSexpr(block, program, inverse);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('ambiguousBlockValue');
	    }

	    this.opcode('append');
	  },

	  DecoratorBlock: function DecoratorBlock(decorator) {
	    var program = decorator.program && this.compileProgram(decorator.program);
	    var params = this.setupFullMustacheParams(decorator, program, undefined),
	        path = decorator.path;

	    this.useDecorators = true;
	    this.opcode('registerDecorator', params.length, path.original);
	  },

	  PartialStatement: function PartialStatement(partial) {
	    this.usePartial = true;

	    var program = partial.program;
	    if (program) {
	      program = this.compileProgram(partial.program);
	    }

	    var params = partial.params;
	    if (params.length > 1) {
	      throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
	    } else if (!params.length) {
	      if (this.options.explicitPartialContext) {
	        this.opcode('pushLiteral', 'undefined');
	      } else {
	        params.push({ type: 'PathExpression', parts: [], depth: 0 });
	      }
	    }

	    var partialName = partial.name.original,
	        isDynamic = partial.name.type === 'SubExpression';
	    if (isDynamic) {
	      this.accept(partial.name);
	    }

	    this.setupFullMustacheParams(partial, program, undefined, true);

	    var indent = partial.indent || '';
	    if (this.options.preventIndent && indent) {
	      this.opcode('appendContent', indent);
	      indent = '';
	    }

	    this.opcode('invokePartial', isDynamic, partialName, indent);
	    this.opcode('append');
	  },
	  PartialBlockStatement: function PartialBlockStatement(partialBlock) {
	    this.PartialStatement(partialBlock);
	  },

	  MustacheStatement: function MustacheStatement(mustache) {
	    this.SubExpression(mustache);

	    if (mustache.escaped && !this.options.noEscape) {
	      this.opcode('appendEscaped');
	    } else {
	      this.opcode('append');
	    }
	  },
	  Decorator: function Decorator(decorator) {
	    this.DecoratorBlock(decorator);
	  },

	  ContentStatement: function ContentStatement(content) {
	    if (content.value) {
	      this.opcode('appendContent', content.value);
	    }
	  },

	  CommentStatement: function CommentStatement() {},

	  SubExpression: function SubExpression(sexpr) {
	    transformLiteralToPath(sexpr);
	    var type = this.classifySexpr(sexpr);

	    if (type === 'simple') {
	      this.simpleSexpr(sexpr);
	    } else if (type === 'helper') {
	      this.helperSexpr(sexpr);
	    } else {
	      this.ambiguousSexpr(sexpr);
	    }
	  },
	  ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
	    var path = sexpr.path,
	        name = path.parts[0],
	        isBlock = program != null || inverse != null;

	    this.opcode('getContext', path.depth);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    path.strict = true;
	    this.accept(path);

	    this.opcode('invokeAmbiguous', name, isBlock);
	  },

	  simpleSexpr: function simpleSexpr(sexpr) {
	    var path = sexpr.path;
	    path.strict = true;
	    this.accept(path);
	    this.opcode('resolvePossibleLambda');
	  },

	  helperSexpr: function helperSexpr(sexpr, program, inverse) {
	    var params = this.setupFullMustacheParams(sexpr, program, inverse),
	        path = sexpr.path,
	        name = path.parts[0];

	    if (this.options.knownHelpers[name]) {
	      this.opcode('invokeKnownHelper', params.length, name);
	    } else if (this.options.knownHelpersOnly) {
	      throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
	    } else {
	      path.strict = true;
	      path.falsy = true;

	      this.accept(path);
	      this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
	    }
	  },

	  PathExpression: function PathExpression(path) {
	    this.addDepth(path.depth);
	    this.opcode('getContext', path.depth);

	    var name = path.parts[0],
	        scoped = _ast2['default'].helpers.scopedId(path),
	        blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

	    if (blockParamId) {
	      this.opcode('lookupBlockParam', blockParamId, path.parts);
	    } else if (!name) {
	      // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
	      this.opcode('pushContext');
	    } else if (path.data) {
	      this.options.data = true;
	      this.opcode('lookupData', path.depth, path.parts, path.strict);
	    } else {
	      this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
	    }
	  },

	  StringLiteral: function StringLiteral(string) {
	    this.opcode('pushString', string.value);
	  },

	  NumberLiteral: function NumberLiteral(number) {
	    this.opcode('pushLiteral', number.value);
	  },

	  BooleanLiteral: function BooleanLiteral(bool) {
	    this.opcode('pushLiteral', bool.value);
	  },

	  UndefinedLiteral: function UndefinedLiteral() {
	    this.opcode('pushLiteral', 'undefined');
	  },

	  NullLiteral: function NullLiteral() {
	    this.opcode('pushLiteral', 'null');
	  },

	  Hash: function Hash(hash) {
	    var pairs = hash.pairs,
	        i = 0,
	        l = pairs.length;

	    this.opcode('pushHash');

	    for (; i < l; i++) {
	      this.pushParam(pairs[i].value);
	    }
	    while (i--) {
	      this.opcode('assignToHash', pairs[i].key);
	    }
	    this.opcode('popHash');
	  },

	  // HELPERS
	  opcode: function opcode(name) {
	    this.opcodes.push({ opcode: name, args: slice.call(arguments, 1), loc: this.sourceNode[0].loc });
	  },

	  addDepth: function addDepth(depth) {
	    if (!depth) {
	      return;
	    }

	    this.useDepths = true;
	  },

	  classifySexpr: function classifySexpr(sexpr) {
	    var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);

	    var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

	    // a mustache is an eligible helper if:
	    // * its id is simple (a single part, not `this` or `..`)
	    var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);

	    // if a mustache is an eligible helper but not a definite
	    // helper, it is ambiguous, and will be resolved in a later
	    // pass or at runtime.
	    var isEligible = !isBlockParam && (isHelper || isSimple);

	    // if ambiguous, we can possibly resolve the ambiguity now
	    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
	    if (isEligible && !isHelper) {
	      var _name2 = sexpr.path.parts[0],
	          options = this.options;

	      if (options.knownHelpers[_name2]) {
	        isHelper = true;
	      } else if (options.knownHelpersOnly) {
	        isEligible = false;
	      }
	    }

	    if (isHelper) {
	      return 'helper';
	    } else if (isEligible) {
	      return 'ambiguous';
	    } else {
	      return 'simple';
	    }
	  },

	  pushParams: function pushParams(params) {
	    for (var i = 0, l = params.length; i < l; i++) {
	      this.pushParam(params[i]);
	    }
	  },

	  pushParam: function pushParam(val) {
	    this.accept(val);
	  },

	  setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
	    var params = sexpr.params;
	    this.pushParams(params);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    if (sexpr.hash) {
	      this.accept(sexpr.hash);
	    } else {
	      this.opcode('emptyHash', omitEmpty);
	    }

	    return params;
	  },

	  blockParamIndex: function blockParamIndex(name) {
	    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
	      var blockParams = this.options.blockParams[depth],
	          param = blockParams && _utils.indexOf(blockParams, name);
	      if (blockParams && param >= 0) {
	        return [depth, param];
	      }
	    }
	  }
	};

	function precompile(input, options, env) {
	  if (options === undefined) options = {};

	  validateInput(input, options);

	  var environment = compileEnvironment(input, options, env);
	  return new env.JavaScriptCompiler().compile(environment, options);
	}

	function compile(input, options, env) {
	  if (options === undefined) options = {};

	  validateInput(input, options);

	  var compiled = undefined;

	  function compileInput() {
	    var environment = compileEnvironment(input, options, env),
	        templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
	    return env.template(templateSpec);
	  }

	  // Template is only compiled on first use and cached after that point.
	  return function (context, execOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled.call(this, context, execOptions);
	  };
	}

	function validateInput(input, options) {
	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
	  }

	  if (options.trackIds || options.stringParams) {
	    throw new _exception2['default']('TrackIds and stringParams are no longer supported. See Github #1145');
	  }

	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }
	}
	function compileEnvironment(input, options, env) {
	  var ast = env.parse(input, options);
	  return new env.Compiler().compile(ast, options);
	}

	function argEquals(a, b) {
	  if (a === b) {
	    return true;
	  }

	  if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
	    for (var i = 0; i < a.length; i++) {
	      if (!argEquals(a[i], b[i])) {
	        return false;
	      }
	    }
	    return true;
	  }
	}

	function transformLiteralToPath(sexpr) {
	  if (!sexpr.path.parts) {
	    var literal = sexpr.path;
	    // Casting to string here to make false and 0 literal values play nicely with the rest
	    // of the system.
	    sexpr.path = {
	      type: 'PathExpression',
	      data: false,
	      depth: 0,
	      parts: [literal.original + ''],
	      original: literal.original + '',
	      loc: literal.loc
	    };
	  }
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2NvbXBpbGVyL2NvbXBpbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozt5QkFFc0IsY0FBYzs7OztxQkFDTCxVQUFVOzttQkFDekIsT0FBTzs7OztBQUV2QixJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDOztBQUVoQixTQUFTLFFBQVEsR0FBRyxFQUFFOzs7Ozs7O0FBTzdCLFFBQVEsQ0FBQyxTQUFTLEdBQUc7QUFDbkIsVUFBUSxFQUFFLFFBQVE7O0FBRWxCLFFBQU0sRUFBRSxnQkFBUyxLQUFLLEVBQUU7QUFDdEIsUUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7QUFDOUIsUUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7QUFDaEMsYUFBTyxLQUFLLENBQUM7S0FDZDs7QUFFRCxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVCLFVBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1VBQ3hCLFdBQVcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25DLFVBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxXQUFXLENBQUMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3JGLGVBQU8sS0FBSyxDQUFDO09BQ2Q7S0FDRjs7OztBQUlELE9BQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUMzQixTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVCLFVBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxD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LENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2pDLFVBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQzFCLGVBQU8sS0FBSyxDQUFDO09BQ2Q7S0FDRjtBQUNELFdBQU8sSUFBSSxDQUFDO0dBQ2I7Q0FDRjs7QUFFRCxTQUFTLHNCQUFzQixDQUFDLEtBQUssRUFBRTtBQUNyQyxNQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDckIsUUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQzs7O0FBR3pCLFNBQUssQ0FBQyxJQUFJLEdBQUc7QUFDWCxVQUFJLEVBQUUsZ0JBQWdCO0FBQ3RCLFVBQUksRUFBRSxLQUFLO0FBQ1gsV0FBSyxFQUFFLENBQUM7QUFDUixXQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUM5QixjQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsR0FBRyxFQUFFO0FBQy9CLFNBQUcsRUFBRSxPQUFPLENBQUMsR0FBRztLQUNqQixDQUFDO0dBQ0g7Q0FDRiIsImZpbGUiOiJjb21waWxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5ldy1jYXAgKi9cblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuLi9leGNlcHRpb24nO1xuaW1wb3J0IHtpc0FycmF5LCBpbmRleE9mfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgQVNUIGZyb20gJy4vYXN0JztcblxuY29uc3Qgc2xpY2UgPSBbXS5zbGljZTtcblxuZXhwb3J0IGZ1bmN0aW9uIENvbXBpbGVyKCkge31cblxuLy8gdGhlIGZvdW5kSGVscGVyIHJlZ2lzdGVyIHdpbGwgZGlzYW1iaWd1YXRlIGhlbHBlciBsb29rdXAgZnJvbSBmaW5kaW5nIGFcbi8vIGZ1bmN0aW9uIGluIGEgY29udGV4dC4gVGhpcyBpcyBuZWNlc3NhcnkgZm9yIG11c3RhY2hlIGNvbXBhdGliaWxpdHksIHdoaWNoXG4vLyByZXF1aXJlcyB0aGF0IGNvbnRleHQgZnVuY3Rpb25zIGluIGJsb2NrcyBhcmUgZXZhbHVhdGVkIGJ5IGJsb2NrSGVscGVyTWlzc2luZyxcbi8vIGFuZCB0aGVuIHByb2NlZWQgYXMgaWYgdGhlIHJlc3VsdGluZyB2YWx1ZSB3YXMgcHJvdmlkZWQgdG8gYmxvY2tIZWxwZXJNaXNzaW5nLlxuXG5Db21waWxlci5wcm90b3R5cGUgPSB7XG4gIGNvbXBpbGVyOiBDb21waWxlcixcblxuICBlcXVhbHM6IGZ1bmN0aW9uKG90aGVyKSB7XG4gICAgbGV0IGxlbiA9IHRoaXMub3Bjb2Rlcy5sZW5ndGg7XG4gICAgaWYgKG90aGVyLm9wY29kZXMubGVuZ3RoICE9PSBsZW4pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBsZXQgb3Bjb2RlID0gdGhpcy5vcGNvZGVzW2ldLFxuICAgICAgICAgIG90aGVyT3Bjb2RlID0gb3RoZXIub3Bjb2Rlc1tpXTtcbiAgICAgIGlmIChvcGNvZGUub3Bjb2RlICE9PSBvdGhlck9wY29kZS5vcGNvZGUgfHwgIWFyZ0VxdWFscyhvcGNvZGUuYXJncywgb3RoZXJPcGNvZGUuYXJncykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdlIGtub3cgdGhhdCBsZW5ndGggaXMgdGhlIHNhbWUgYmV0d2VlbiB0aGUgdHdvIGFycmF5cyBiZWNhdXNlIHRoZXkgYXJlIGRpcmVjdGx5IHRpZWRcbiAgICAvLyB0byB0aGUgb3Bjb2RlIGJlaGF2aW9yIGFib3ZlLlxuICAgIGxlbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5jaGlsZHJlbltpXS5lcXVhbHMob3RoZXIuY2hpbGRyZW5baV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICBndWlkOiAwLFxuXG4gIGNvbXBpbGU6IGZ1bmN0aW9uKHByb2dyYW0sIG9wdGlvbnMpIHtcbiAgICB0aGlzLnNvdXJjZU5vZGUgPSBbXTtcbiAgICB0aGlzLm9wY29kZXMgPSBbXTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIG9wdGlvbnMuYmxvY2tQYXJhbXMgPSBvcHRpb25zLmJsb2NrUGFyYW1zIHx8IFtdO1xuXG4gICAgLy8gVGhlc2UgY2hhbmdlcyB3aWxsIHByb3BhZ2F0ZSB0byB0aGUgb3RoZXIgY29tcGlsZXIgY29tcG9uZW50c1xuICAgIGxldCBrbm93bkhlbHBlcnMgPSBvcHRpb25zLmtub3duSGVscGVycztcbiAgICBvcHRpb25zLmtub3duSGVscGVycyA9IHtcbiAgICAgICdoZWxwZXJNaXNzaW5nJzogdHJ1ZSxcbiAgICAgICdibG9ja0hlbHBlck1pc3NpbmcnOiB0cnVlLFxuICAgICAgJ2VhY2gnOiB0cnVlLFxuICAgICAgJ2lmJzogdHJ1ZSxcbiAgICAgICd1bmxlc3MnOiB0cnVlLFxuICAgICAgJ3dpdGgnOiB0cnVlLFxuICAgICAgJ2xvZyc6IHRydWUsXG4gICAgICAnbG9va3VwJzogdHJ1ZVxuICAgIH07XG4gICAgaWYgKGtub3duSGVscGVycykge1xuICAgICAgZm9yIChsZXQgbmFtZSBpbiBrbm93bkhlbHBlcnMpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKG5hbWUgaW4ga25vd25IZWxwZXJzKSB7XG4gICAgICAgICAgb3B0aW9ucy5rbm93bkhlbHBlcnNbbmFtZV0gPSBrbm93bkhlbHBlcnNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5hY2NlcHQocHJvZ3JhbSk7XG4gIH0sXG5cbiAgY29tcGlsZVByb2dyYW06IGZ1bmN0aW9uKHByb2dyYW0pIHtcbiAgICBsZXQgY2hpbGRDb21waWxlciA9IG5ldyB0aGlzLmNvbXBpbGVyKCksIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxuICAgICAgICByZXN1bHQgPSBjaGlsZENvbXBpbGVyLmNvbXBpbGUocHJvZ3JhbSwgdGhpcy5vcHRpb25zKSxcbiAgICAgICAgZ3VpZCA9IHRoaXMuZ3VpZCsrO1xuXG4gICAgdGhpcy51c2VQYXJ0aWFsID0gdGhpcy51c2VQYXJ0aWFsIHx8IHJlc3VsdC51c2VQYXJ0aWFsO1xuXG4gICAgdGhpcy5jaGlsZHJlbltndWlkXSA9IHJlc3VsdDtcbiAgICB0aGlzLnVzZURlcHRocyA9IHRoaXMudXNlRGVwdGhzIHx8IHJlc3VsdC51c2VEZXB0aHM7XG5cbiAgICByZXR1cm4gZ3VpZDtcbiAgfSxcblxuICBhY2NlcHQ6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogU2FuaXR5IGNvZGUgKi9cbiAgICBpZiAoIXRoaXNbbm9kZS50eXBlXSkge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVW5rbm93biB0eXBlOiAnICsgbm9kZS50eXBlLCBub2RlKTtcbiAgICB9XG5cbiAgICB0aGlzLnNvdXJjZU5vZGUudW5zaGlmdChub2RlKTtcbiAgICBsZXQgcmV0ID0gdGhpc1tub2RlLnR5cGVdKG5vZGUpO1xuICAgIHRoaXMuc291cmNlTm9kZS5zaGlmdCgpO1xuICAgIHJldHVybiByZXQ7XG4gIH0sXG5cbiAgUHJvZ3JhbTogZnVuY3Rpb24ocHJvZ3JhbSkge1xuICAgIHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtcy51bnNoaWZ0KHByb2dyYW0uYmxvY2tQYXJhbXMpO1xuXG4gICAgbGV0IGJvZHkgPSBwcm9ncmFtLmJvZHksXG4gICAgICAgIGJvZHlMZW5ndGggPSBib2R5Lmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvZHlMZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5hY2NlcHQoYm9keVtpXSk7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zLmJsb2NrUGFyYW1zLnNoaWZ0KCk7XG5cbiAgICB0aGlzLmlzU2ltcGxlID0gYm9keUxlbmd0aCA9PT0gMTtcbiAgICB0aGlzLmJsb2NrUGFyYW1zID0gcHJvZ3JhbS5ibG9ja1BhcmFtcyA/IHByb2dyYW0uYmxvY2tQYXJhbXMubGVuZ3RoIDogMDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIEJsb2NrU3RhdGVtZW50OiBmdW5jdGlvbihibG9jaykge1xuICAgIHRyYW5zZm9ybUxpdGVyYWxUb1BhdGgoYmxvY2spO1xuXG4gICAgbGV0IHByb2dyYW0gPSBibG9jay5wcm9ncmFtLFxuICAgICAgICBpbnZlcnNlID0gYmxvY2suaW52ZXJzZTtcblxuICAgIHByb2dyYW0gPSBwcm9ncmFtICYmIHRoaXMuY29tcGlsZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgaW52ZXJzZSA9IGludmVyc2UgJiYgdGhpcy5jb21waWxlUHJvZ3JhbShpbnZlcnNlKTtcblxuICAgIGxldCB0eXBlID0gdGhpcy5jbGFzc2lmeVNleHByKGJsb2NrKTtcblxuICAgIGlmICh0eXBlID09PSAnaGVscGVyJykge1xuICAgICAgdGhpcy5oZWxwZXJTZXhwcihibG9jaywgcHJvZ3JhbSwgaW52ZXJzZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnc2ltcGxlJykge1xuICAgICAgdGhpcy5zaW1wbGVTZXhwcihibG9jayk7XG5cbiAgICAgIC8vIG5vdyB0aGF0IHRoZSBzaW1wbGUgbXVzdGFjaGUgaXMgcmVzb2x2ZWQsIHdlIG5lZWQgdG9cbiAgICAgIC8vIGV2YWx1YXRlIGl0IGJ5IGV4ZWN1dGluZyBgYmxvY2tIZWxwZXJNaXNzaW5nYFxuICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgcHJvZ3JhbSk7XG4gICAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBpbnZlcnNlKTtcbiAgICAgIHRoaXMub3Bjb2RlKCdlbXB0eUhhc2gnKTtcbiAgICAgIHRoaXMub3Bjb2RlKCdibG9ja1ZhbHVlJywgYmxvY2sucGF0aC5vcmlnaW5hbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYW1iaWd1b3VzU2V4cHIoYmxvY2ssIHByb2dyYW0sIGludmVyc2UpO1xuXG4gICAgICAvLyBub3cgdGhhdCB0aGUgc2ltcGxlIG11c3RhY2hlIGlzIHJlc29sdmVkLCB3ZSBuZWVkIHRvXG4gICAgICAvLyBldmFsdWF0ZSBpdCBieSBleGVjdXRpbmcgYGJsb2NrSGVscGVyTWlzc2luZ2BcbiAgICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIHByb2dyYW0pO1xuICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgaW52ZXJzZSk7XG4gICAgICB0aGlzLm9wY29kZSgnZW1wdHlIYXNoJyk7XG4gICAgICB0aGlzLm9wY29kZSgnYW1iaWd1b3VzQmxvY2tWYWx1ZScpO1xuICAgIH1cblxuICAgIHRoaXMub3Bjb2RlKCdhcHBlbmQnKTtcbiAgfSxcblxuICBEZWNvcmF0b3JCbG9jayhkZWNvcmF0b3IpIHtcbiAgICBsZXQgcHJvZ3JhbSA9IGRlY29yYXRvci5wcm9ncmFtICYmIHRoaXMuY29tcGlsZVByb2dyYW0oZGVjb3JhdG9yLnByb2dyYW0pO1xuICAgIGxldCBwYXJhbXMgPSB0aGlzLnNldHVwRnVsbE11c3RhY2hlUGFyYW1zKGRlY29yYXRvciwgcHJvZ3JhbSwgdW5kZWZpbmVkKSxcbiAgICAgICAgcGF0aCA9IGRlY29yYXRvci5wYXRoO1xuXG4gICAgdGhpcy51c2VEZWNvcmF0b3JzID0gdHJ1ZTtcbiAgICB0aGlzLm9wY29kZSgncmVnaXN0ZXJEZWNvcmF0b3InLCBwYXJhbXMubGVuZ3RoLCBwYXRoLm9yaWdpbmFsKTtcbiAgfSxcblxuICBQYXJ0aWFsU3RhdGVtZW50OiBmdW5jdGlvbihwYXJ0aWFsKSB7XG4gICAgdGhpcy51c2VQYXJ0aWFsID0gdHJ1ZTtcblxuICAgIGxldCBwcm9ncmFtID0gcGFydGlhbC5wcm9ncmFtO1xuICAgIGlmIChwcm9ncmFtKSB7XG4gICAgICBwcm9ncmFtID0gdGhpcy5jb21waWxlUHJvZ3JhbShwYXJ0aWFsLnByb2dyYW0pO1xuICAgIH1cblxuICAgIGxldCBwYXJhbXMgPSBwYXJ0aWFsLnBhcmFtcztcbiAgICBpZiAocGFyYW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1Vuc3VwcG9ydGVkIG51bWJlciBvZiBwYXJ0aWFsIGFyZ3VtZW50czogJyArIHBhcmFtcy5sZW5ndGgsIHBhcnRpYWwpO1xuICAgIH0gZWxzZSBpZiAoIXBhcmFtcy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXhwbGljaXRQYXJ0aWFsQ29udGV4dCkge1xuICAgICAgICB0aGlzLm9wY29kZSgncHVzaExpdGVyYWwnLCAndW5kZWZpbmVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMucHVzaCh7dHlwZTogJ1BhdGhFeHByZXNzaW9uJywgcGFydHM6IFtdLCBkZXB0aDogMH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBwYXJ0aWFsTmFtZSA9IHBhcnRpYWwubmFtZS5vcmlnaW5hbCxcbiAgICAgICAgaXNEeW5hbWljID0gcGFydGlhbC5uYW1lLnR5cGUgPT09ICdTdWJFeHByZXNzaW9uJztcbiAgICBpZiAoaXNEeW5hbWljKSB7XG4gICAgICB0aGlzLmFjY2VwdChwYXJ0aWFsLm5hbWUpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0dXBGdWxsTXVzdGFjaGVQYXJhbXMocGFydGlhbCwgcHJvZ3JhbSwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgIGxldCBpbmRlbnQgPSBwYXJ0aWFsLmluZGVudCB8fCAnJztcbiAgICBpZiAodGhpcy5vcHRpb25zLnByZXZlbnRJbmRlbnQgJiYgaW5kZW50KSB7XG4gICAgICB0aGlzLm9wY29kZSgnYXBwZW5kQ29udGVudCcsIGluZGVudCk7XG4gICAgICBpbmRlbnQgPSAnJztcbiAgICB9XG5cbiAgICB0aGlzLm9wY29kZSgnaW52b2tlUGFydGlhbCcsIGlzRHluYW1pYywgcGFydGlhbE5hbWUsIGluZGVudCk7XG4gICAgdGhpcy5vcGNvZGUoJ2FwcGVuZCcpO1xuICB9LFxuICBQYXJ0aWFsQmxvY2tTdGF0ZW1lbnQ6IGZ1bmN0aW9uKHBhcnRpYWxCbG9jaykge1xuICAgIHRoaXMuUGFydGlhbFN0YXRlbWVudChwYXJ0aWFsQmxvY2spO1xuICB9LFxuXG4gIE11c3RhY2hlU3RhdGVtZW50OiBmdW5jdGlvbihtdXN0YWNoZSkge1xuICAgIHRoaXMuU3ViRXhwcmVzc2lvbihtdXN0YWNoZSk7XG5cbiAgICBpZiAobXVzdGFjaGUuZXNjYXBlZCAmJiAhdGhpcy5vcHRpb25zLm5vRXNjYXBlKSB7XG4gICAgICB0aGlzLm9wY29kZSgnYXBwZW5kRXNjYXBlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wY29kZSgnYXBwZW5kJyk7XG4gICAgfVxuICB9LFxuICBEZWNvcmF0b3IoZGVjb3JhdG9yKSB7XG4gICAgdGhpcy5EZWNvcmF0b3JCbG9jayhkZWNvcmF0b3IpO1xuICB9LFxuXG5cbiAgQ29udGVudFN0YXRlbWVudDogZnVuY3Rpb24oY29udGVudCkge1xuICAgIGlmIChjb250ZW50LnZhbHVlKSB7XG4gICAgICB0aGlzLm9wY29kZSgnYXBwZW5kQ29udGVudCcsIGNvbnRlbnQudmFsdWUpO1xuICAgIH1cbiAgfSxcblxuICBDb21tZW50U3RhdGVtZW50OiBmdW5jdGlvbigpIHt9LFxuXG4gIFN1YkV4cHJlc3Npb246IGZ1bmN0aW9uKHNleHByKSB7XG4gICAgdHJhbnNmb3JtTGl0ZXJhbFRvUGF0aChzZXhwcik7XG4gICAgbGV0IHR5cGUgPSB0aGlzLmNsYXNzaWZ5U2V4cHIoc2V4cHIpO1xuXG4gICAgaWYgKHR5cGUgPT09ICdzaW1wbGUnKSB7XG4gICAgICB0aGlzLnNpbXBsZVNleHByKHNleHByKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdoZWxwZXInKSB7XG4gICAgICB0aGlzLmhlbHBlclNleHByKHNleHByKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hbWJpZ3VvdXNTZXhwcihzZXhwcik7XG4gICAgfVxuICB9LFxuICBhbWJpZ3VvdXNTZXhwcjogZnVuY3Rpb24oc2V4cHIsIHByb2dyYW0sIGludmVyc2UpIHtcbiAgICBsZXQgcGF0aCA9IHNleHByLnBhdGgsXG4gICAgICAgIG5hbWUgPSBwYXRoLnBhcnRzWzBdLFxuICAgICAgICBpc0Jsb2NrID0gcHJvZ3JhbSAhPSBudWxsIHx8IGludmVyc2UgIT0gbnVsbDtcblxuICAgIHRoaXMub3Bjb2RlKCdnZXRDb250ZXh0JywgcGF0aC5kZXB0aCk7XG5cbiAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBwcm9ncmFtKTtcbiAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBpbnZlcnNlKTtcblxuICAgIHBhdGguc3RyaWN0ID0gdHJ1ZTtcbiAgICB0aGlzLmFjY2VwdChwYXRoKTtcblxuICAgIHRoaXMub3Bjb2RlKCdpbnZva2VBbWJpZ3VvdXMnLCBuYW1lLCBpc0Jsb2NrKTtcbiAgfSxcblxuICBzaW1wbGVTZXhwcjogZnVuY3Rpb24oc2V4cHIpIHtcbiAgICBsZXQgcGF0aCA9IHNleHByLnBhdGg7XG4gICAgcGF0aC5zdHJpY3QgPSB0cnVlO1xuICAgIHRoaXMuYWNjZXB0KHBhdGgpO1xuICAgIHRoaXMub3Bjb2RlKCdyZXNvbHZlUG9zc2libGVMYW1iZGEnKTtcbiAgfSxcblxuICBoZWxwZXJTZXhwcjogZnVuY3Rpb24oc2V4cHIsIHByb2dyYW0sIGludmVyc2UpIHtcbiAgICBsZXQgcGFyYW1zID0gdGhpcy5zZXR1cEZ1bGxNdXN0YWNoZVBhcmFtcyhzZXhwciwgcHJvZ3JhbSwgaW52ZXJzZSksXG4gICAgICAgIHBhdGggPSBzZXhwci5wYXRoLFxuICAgICAgICBuYW1lID0gcGF0aC5wYXJ0c1swXTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMua25vd25IZWxwZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLm9wY29kZSgnaW52b2tlS25vd25IZWxwZXInLCBwYXJhbXMubGVuZ3RoLCBuYW1lKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5rbm93bkhlbHBlcnNPbmx5KSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdZb3Ugc3BlY2lmaWVkIGtub3duSGVscGVyc09ubHksIGJ1dCB1c2VkIHRoZSB1bmtub3duIGhlbHBlciAnICsgbmFtZSwgc2V4cHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXRoLnN0cmljdCA9IHRydWU7XG4gICAgICBwYXRoLmZhbHN5ID0gdHJ1ZTtcblxuICAgICAgdGhpcy5hY2NlcHQocGF0aCk7XG4gICAgICB0aGlzLm9wY29kZSgnaW52b2tlSGVscGVyJywgcGFyYW1zLmxlbmd0aCwgcGF0aC5vcmlnaW5hbCwgQVNULmhlbHBlcnMuc2ltcGxlSWQocGF0aCkpO1xuICAgIH1cbiAgfSxcblxuICBQYXRoRXhwcmVzc2lvbjogZnVuY3Rpb24ocGF0aCkge1xuICAgIHRoaXMuYWRkRGVwdGgocGF0aC5kZXB0aCk7XG4gICAgdGhpcy5vcGNvZGUoJ2dldENvbnRleHQnLCBwYXRoLmRlcHRoKTtcblxuICAgIGxldCBuYW1lID0gcGF0aC5wYXJ0c1swXSxcbiAgICAgICAgc2NvcGVkID0gQVNULmhlbHBlcnMuc2NvcGVkSWQocGF0aCksXG4gICAgICAgIGJsb2NrUGFyYW1JZCA9ICFwYXRoLmRlcHRoICYmICFzY29wZWQgJiYgdGhpcy5ibG9ja1BhcmFtSW5kZXgobmFtZSk7XG5cbiAgICBpZiAoYmxvY2tQYXJhbUlkKSB7XG4gICAgICB0aGlzLm9wY29kZSgnbG9va3VwQmxvY2tQYXJhbScsIGJsb2NrUGFyYW1JZCwgcGF0aC5wYXJ0cyk7XG4gICAgfSBlbHNlIGlmICghbmFtZSkge1xuICAgICAgLy8gQ29udGV4dCByZWZlcmVuY2UsIGkuZS4gYHt7Zm9vIC59fWAgb3IgYHt7Zm9vIC4ufX1gXG4gICAgICB0aGlzLm9wY29kZSgncHVzaENvbnRleHQnKTtcbiAgICB9IGVsc2UgaWYgKHBhdGguZGF0YSkge1xuICAgICAgdGhpcy5vcHRpb25zLmRhdGEgPSB0cnVlO1xuICAgICAgdGhpcy5vcGNvZGUoJ2xvb2t1cERhdGEnLCBwYXRoLmRlcHRoLCBwYXRoLnBhcnRzLCBwYXRoLnN0cmljdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3Bjb2RlKCdsb29rdXBPbkNvbnRleHQnLCBwYXRoLnBhcnRzLCBwYXRoLmZhbHN5LCBwYXRoLnN0cmljdCwgc2NvcGVkKTtcbiAgICB9XG4gIH0sXG5cbiAgU3RyaW5nTGl0ZXJhbDogZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgdGhpcy5vcGNvZGUoJ3B1c2hTdHJpbmcnLCBzdHJpbmcudmFsdWUpO1xuICB9LFxuXG4gIE51bWJlckxpdGVyYWw6IGZ1bmN0aW9uKG51bWJlcikge1xuICAgIHRoaXMub3Bjb2RlKCdwdXNoTGl0ZXJhbCcsIG51bWJlci52YWx1ZSk7XG4gIH0sXG5cbiAgQm9vbGVhbkxpdGVyYWw6IGZ1bmN0aW9uKGJvb2wpIHtcbiAgICB0aGlzLm9wY29kZSgncHVzaExpdGVyYWwnLCBib29sLnZhbHVlKTtcbiAgfSxcblxuICBVbmRlZmluZWRMaXRlcmFsOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm9wY29kZSgncHVzaExpdGVyYWwnLCAndW5kZWZpbmVkJyk7XG4gIH0sXG5cbiAgTnVsbExpdGVyYWw6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMub3Bjb2RlKCdwdXNoTGl0ZXJhbCcsICdudWxsJyk7XG4gIH0sXG5cbiAgSGFzaDogZnVuY3Rpb24oaGFzaCkge1xuICAgIGxldCBwYWlycyA9IGhhc2gucGFpcnMsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBsID0gcGFpcnMubGVuZ3RoO1xuXG4gICAgdGhpcy5vcGNvZGUoJ3B1c2hIYXNoJyk7XG5cbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgdGhpcy5wdXNoUGFyYW0ocGFpcnNbaV0udmFsdWUpO1xuICAgIH1cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLm9wY29kZSgnYXNzaWduVG9IYXNoJywgcGFpcnNbaV0ua2V5KTtcbiAgICB9XG4gICAgdGhpcy5vcGNvZGUoJ3BvcEhhc2gnKTtcbiAgfSxcblxuICAvLyBIRUxQRVJTXG4gIG9wY29kZTogZnVuY3Rpb24obmFtZSkge1xuICAgIHRoaXMub3Bjb2Rlcy5wdXNoKHsgb3Bjb2RlOiBuYW1lLCBhcmdzOiBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIGxvYzogdGhpcy5zb3VyY2VOb2RlWzBdLmxvYyB9KTtcbiAgfSxcblxuICBhZGREZXB0aDogZnVuY3Rpb24oZGVwdGgpIHtcbiAgICBpZiAoIWRlcHRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy51c2VEZXB0aHMgPSB0cnVlO1xuICB9LFxuXG4gIGNsYXNzaWZ5U2V4cHI6IGZ1bmN0aW9uKHNleHByKSB7XG4gICAgbGV0IGlzU2ltcGxlID0gQVNULmhlbHBlcnMuc2ltcGxlSWQoc2V4cHIucGF0aCk7XG5cbiAgICBsZXQgaXNCbG9ja1BhcmFtID0gaXNTaW1wbGUgJiYgISF0aGlzLmJsb2NrUGFyYW1JbmRleChzZXhwci5wYXRoLnBhcnRzWzBdKTtcblxuICAgIC8vIGEgbXVzdGFjaGUgaXMgYW4gZWxpZ2libGUgaGVscGVyIGlmOlxuICAgIC8vICogaXRzIGlkIGlzIHNpbXBsZSAoYSBzaW5nbGUgcGFydCwgbm90IGB0aGlzYCBvciBgLi5gKVxuICAgIGxldCBpc0hlbHBlciA9ICFpc0Jsb2NrUGFyYW0gJiYgQVNULmhlbHBlcnMuaGVscGVyRXhwcmVzc2lvbihzZXhwcik7XG5cbiAgICAvLyBpZiBhIG11c3RhY2hlIGlzIGFuIGVsaWdpYmxlIGhlbHBlciBidXQgbm90IGEgZGVmaW5pdGVcbiAgICAvLyBoZWxwZXIsIGl0IGlzIGFtYmlndW91cywgYW5kIHdpbGwgYmUgcmVzb2x2ZWQgaW4gYSBsYXRlclxuICAgIC8vIHBhc3Mgb3IgYXQgcnVudGltZS5cbiAgICBsZXQgaXNFbGlnaWJsZSA9ICFpc0Jsb2NrUGFyYW0gJiYgKGlzSGVscGVyIHx8IGlzU2ltcGxlKTtcblxuICAgIC8vIGlmIGFtYmlndW91cywgd2UgY2FuIHBvc3NpYmx5IHJlc29sdmUgdGhlIGFtYmlndWl0eSBub3dcbiAgICAvLyBBbiBlbGlnaWJsZSBoZWxwZXIgaXMgb25lIHRoYXQgZG9lcyBub3QgaGF2ZSBhIGNvbXBsZXggcGF0aCwgaS5lLiBgdGhpcy5mb29gLCBgLi4vZm9vYCBldGMuXG4gICAgaWYgKGlzRWxpZ2libGUgJiYgIWlzSGVscGVyKSB7XG4gICAgICBsZXQgbmFtZSA9IHNleHByLnBhdGgucGFydHNbMF0sXG4gICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgICAgaWYgKG9wdGlvbnMua25vd25IZWxwZXJzW25hbWVdKSB7XG4gICAgICAgIGlzSGVscGVyID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5rbm93bkhlbHBlcnNPbmx5KSB7XG4gICAgICAgIGlzRWxpZ2libGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNIZWxwZXIpIHtcbiAgICAgIHJldHVybiAnaGVscGVyJztcbiAgICB9IGVsc2UgaWYgKGlzRWxpZ2libGUpIHtcbiAgICAgIHJldHVybiAnYW1iaWd1b3VzJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdzaW1wbGUnO1xuICAgIH1cbiAgfSxcblxuICBwdXNoUGFyYW1zOiBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHBhcmFtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRoaXMucHVzaFBhcmFtKHBhcmFtc1tpXSk7XG4gICAgfVxuICB9LFxuXG4gIHB1c2hQYXJhbTogZnVuY3Rpb24odmFsKSB7XG4gICAgdGhpcy5hY2NlcHQodmFsKTtcbiAgfSxcblxuICBzZXR1cEZ1bGxNdXN0YWNoZVBhcmFtczogZnVuY3Rpb24oc2V4cHIsIHByb2dyYW0sIGludmVyc2UsIG9taXRFbXB0eSkge1xuICAgIGxldCBwYXJhbXMgPSBzZXhwci5wYXJhbXM7XG4gICAgdGhpcy5wdXNoUGFyYW1zKHBhcmFtcyk7XG5cbiAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBwcm9ncmFtKTtcbiAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBpbnZlcnNlKTtcblxuICAgIGlmIChzZXhwci5oYXNoKSB7XG4gICAgICB0aGlzLmFjY2VwdChzZXhwci5oYXNoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGNvZGUoJ2VtcHR5SGFzaCcsIG9taXRFbXB0eSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfSxcblxuICBibG9ja1BhcmFtSW5kZXg6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBmb3IgKGxldCBkZXB0aCA9IDAsIGxlbiA9IHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtcy5sZW5ndGg7IGRlcHRoIDwgbGVuOyBkZXB0aCsrKSB7XG4gICAgICBsZXQgYmxvY2tQYXJhbXMgPSB0aGlzLm9wdGlvbnMuYmxvY2tQYXJhbXNbZGVwdGhdLFxuICAgICAgICAgIHBhcmFtID0gYmxvY2tQYXJhbXMgJiYgaW5kZXhPZihibG9ja1BhcmFtcywgbmFtZSk7XG4gICAgICBpZiAoYmxvY2tQYXJhbXMgJiYgcGFyYW0gPj0gMCkge1xuICAgICAgICByZXR1cm4gW2RlcHRoLCBwYXJhbV07XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlY29tcGlsZShpbnB1dCwgb3B0aW9ucyA9IHt9LCBlbnYpIHtcbiAgdmFsaWRhdGVJbnB1dChpbnB1dCwgb3B0aW9ucyk7XG5cbiAgbGV0IGVudmlyb25tZW50ID0gY29tcGlsZUVudmlyb25tZW50KGlucHV0LCBvcHRpb25zLCBlbnYpO1xuICByZXR1cm4gbmV3IGVudi5KYXZhU2NyaXB0Q29tcGlsZXIoKS5jb21waWxlKGVudmlyb25tZW50LCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGUoaW5wdXQsIG9wdGlvbnMgPSB7fSwgZW52KSB7XG4gIHZhbGlkYXRlSW5wdXQoaW5wdXQsIG9wdGlvbnMpO1xuXG4gIGxldCBjb21waWxlZDtcblxuICBmdW5jdGlvbiBjb21waWxlSW5wdXQoKSB7XG4gICAgbGV0IGVudmlyb25tZW50ID0gY29tcGlsZUVudmlyb25tZW50KGlucHV0LCBvcHRpb25zLCBlbnYpLFxuICAgICAgICB0ZW1wbGF0ZVNwZWMgPSBuZXcgZW52LkphdmFTY3JpcHRDb21waWxlcigpLmNvbXBpbGUoZW52aXJvbm1lbnQsIG9wdGlvbnMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgcmV0dXJuIGVudi50ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMpO1xuICB9XG5cbiAgLy8gVGVtcGxhdGUgaXMgb25seSBjb21waWxlZCBvbiBmaXJzdCB1c2UgYW5kIGNhY2hlZCBhZnRlciB0aGF0IHBvaW50LlxuICByZXR1cm4gZnVuY3Rpb24oY29udGV4dCwgZXhlY09wdGlvbnMpIHtcbiAgICBpZiAoIWNvbXBpbGVkKSB7XG4gICAgICBjb21waWxlZCA9IGNvbXBpbGVJbnB1dCgpO1xuICAgIH1cbiAgICByZXR1cm4gY29tcGlsZWQuY2FsbCh0aGlzLCBjb250ZXh0LCBleGVjT3B0aW9ucyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlSW5wdXQoaW5wdXQsIG9wdGlvbnMpIHtcbiAgaWYgKGlucHV0ID09IG51bGwgfHwgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycgJiYgaW5wdXQudHlwZSAhPT0gJ1Byb2dyYW0nKSkge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1lvdSBtdXN0IHBhc3MgYSBzdHJpbmcgb3IgSGFuZGxlYmFycyBBU1QgdG8gSGFuZGxlYmFycy5jb21waWxlLiBZb3UgcGFzc2VkICcgKyBpbnB1dCk7XG4gIH1cblxuICBpZiAob3B0aW9ucy50cmFja0lkcyB8fCBvcHRpb25zLnN0cmluZ1BhcmFtcykge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1RyYWNrSWRzIGFuZCBzdHJpbmdQYXJhbXMgYXJlIG5vIGxvbmdlciBzdXBwb3J0ZWQuIFNlZSBHaXRodWIgIzExNDUnKTtcbiAgfVxuXG4gIGlmICghKCdkYXRhJyBpbiBvcHRpb25zKSkge1xuICAgIG9wdGlvbnMuZGF0YSA9IHRydWU7XG4gIH1cbiAgaWYgKG9wdGlvbnMuY29tcGF0KSB7XG4gICAgb3B0aW9ucy51c2VEZXB0aHMgPSB0cnVlO1xuICB9XG59XG5mdW5jdGlvbiBjb21waWxlRW52aXJvbm1lbnQoaW5wdXQsIG9wdGlvbnMsIGVudikge1xuICBsZXQgYXN0ID0gZW52LnBhcnNlKGlucHV0LCBvcHRpb25zKTtcbiAgcmV0dXJuIG5ldyBlbnYuQ29tcGlsZXIoKS5jb21waWxlKGFzdCwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGFyZ0VxdWFscyhhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoaXNBcnJheShhKSAmJiBpc0FycmF5KGIpICYmIGEubGVuZ3RoID09PSBiLmxlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFhcmdFcXVhbHMoYVtpXSwgYltpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1MaXRlcmFsVG9QYXRoKHNleHByKSB7XG4gIGlmICghc2V4cHIucGF0aC5wYXJ0cykge1xuICAgIGxldCBsaXRlcmFsID0gc2V4cHIucGF0aDtcbiAgICAvLyBDYXN0aW5nIHRvIHN0cmluZyBoZXJlIHRvIG1ha2UgZmFsc2UgYW5kIDAgbGl0ZXJhbCB2YWx1ZXMgcGxheSBuaWNlbHkgd2l0aCB0aGUgcmVzdFxuICAgIC8vIG9mIHRoZSBzeXN0ZW0uXG4gICAgc2V4cHIucGF0aCA9IHtcbiAgICAgIHR5cGU6ICdQYXRoRXhwcmVzc2lvbicsXG4gICAgICBkYXRhOiBmYWxzZSxcbiAgICAgIGRlcHRoOiAwLFxuICAgICAgcGFydHM6IFtsaXRlcmFsLm9yaWdpbmFsICsgJyddLFxuICAgICAgb3JpZ2luYWw6IGxpdGVyYWwub3JpZ2luYWwgKyAnJyxcbiAgICAgIGxvYzogbGl0ZXJhbC5sb2NcbiAgICB9O1xuICB9XG59XG4iXX0=


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _base = __webpack_require__(2);

	var _exception = __webpack_require__(4);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(3);

	var _codeGen = __webpack_require__(27);

	var _codeGen2 = _interopRequireDefault(_codeGen);

	function Literal(value) {
	  this.value = value;
	}

	function JavaScriptCompiler() {}

	JavaScriptCompiler.prototype = {
	  // PUBLIC API: You can override these methods in a subclass to provide
	  // alternative compiled forms for name lookup and buffering semantics
	  nameLookup: function nameLookup(parent, name /* , type*/) {
	    if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
	      return [parent, '.', name];
	    } else {
	      return [parent, '[', JSON.stringify(name), ']'];
	    }
	  },
	  depthedLookup: function depthedLookup(name) {
	    return [this.aliasable('container.lookup'), '(depths, "', name, '")'];
	  },

	  compilerInfo: function compilerInfo() {
	    var revision = _base.COMPILER_REVISION,
	        versions = _base.REVISION_CHANGES[revision];
	    return [revision, versions];
	  },

	  appendToBuffer: function appendToBuffer(source, location, explicit) {
	    // Force a source as this simplifies the merge logic.
	    if (!_utils.isArray(source)) {
	      source = [source];
	    }
	    source = this.source.wrap(source, location);

	    if (this.environment.isSimple) {
	      return ['return ', source, ';'];
	    } else if (explicit) {
	      // This is a case where the buffer operation occurs as a child of another
	      // construct, generally braces. We have to explicitly output these buffer
	      // operations to ensure that the emitted code goes in the correct location.
	      return ['buffer += ', source, ';'];
	    } else {
	      source.appendToBuffer = true;
	      return source;
	    }
	  },

	  initializeBuffer: function initializeBuffer() {
	    return this.quotedString('');
	  },
	  // END PUBLIC API

	  compile: function compile(environment, options, context, asObject) {
	    this.environment = environment;
	    this.options = options;
	    this.precompile = !asObject;

	    this.name = this.environment.name;
	    this.isChild = !!context;
	    this.context = context || {
	      decorators: [],
	      programs: [],
	      environments: []
	    };

	    this.preamble();

	    this.stackSlot = 0;
	    this.stackVars = [];
	    this.aliases = {};
	    this.registers = { list: [] };
	    this.hashes = [];
	    this.compileStack = [];
	    this.inlineStack = [];
	    this.blockParams = [];

	    this.compileChildren(environment, options);

	    this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
	    this.useBlockParams = this.useBlockParams || environment.useBlockParams;

	    var opcodes = environment.opcodes,
	        opcode = undefined,
	        firstLoc = undefined,
	        i = undefined,
	        l = undefined;

	    for (i = 0, l = opcodes.length; i < l; i++) {
	      opcode = opcodes[i];

	      this.source.currentLocation = opcode.loc;
	      firstLoc = firstLoc || opcode.loc;
	      this[opcode.opcode].apply(this, opcode.args);
	    }

	    // Flush any trailing content that might be pending.
	    this.source.currentLocation = firstLoc;
	    this.pushSource('');

	    /* istanbul ignore next */
	    if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
	      throw new _exception2['default']('Compile completed with content left on stack');
	    }

	    if (!this.decorators.isEmpty()) {
	      this.useDecorators = true;

	      this.decorators.prepend('var decorators = container.decorators;\n');
	      this.decorators.push('return fn;');

	      if (asObject) {
	        this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
	      } else {
	        this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
	        this.decorators.push('}\n');
	        this.decorators = this.decorators.merge();
	      }
	    } else {
	      this.decorators = undefined;
	    }

	    var fn = this.createFunctionContext(asObject);
	    if (!this.isChild) {
	      var ret = {
	        compiler: this.compilerInfo(),
	        main: fn
	      };

	      if (this.decorators) {
	        ret.main_d = this.decorators; // eslint-disable-line camelcase
	        ret.useDecorators = true;
	      }

	      var _context = this.context;
	      var programs = _context.programs;
	      var decorators = _context.decorators;

	      for (i = 0, l = programs.length; i < l; i++) {
	        if (programs[i]) {
	          ret[i] = programs[i];
	          if (decorators[i]) {
	            ret[i + '_d'] = decorators[i];
	            ret.useDecorators = true;
	          }
	        }
	      }

	      if (this.environment.usePartial) {
	        ret.usePartial = true;
	      }
	      if (this.options.data) {
	        ret.useData = true;
	      }
	      if (this.useDepths) {
	        ret.useDepths = true;
	      }
	      if (this.useBlockParams) {
	        ret.useBlockParams = true;
	      }
	      if (this.options.compat) {
	        ret.compat = true;
	      }

	      if (!asObject) {
	        ret.compiler = JSON.stringify(ret.compiler);

	        this.source.currentLocation = { start: { line: 1, column: 0 } };
	        ret = this.objectLiteral(ret);

	        if (options.srcName) {
	          ret = ret.toStringWithSourceMap({ file: options.destName });
	          ret.map = ret.map && ret.map.toString();
	        } else {
	          ret = ret.toString();
	        }
	      } else {
	        ret.compilerOptions = this.options;
	      }

	      return ret;
	    } else {
	      return fn;
	    }
	  },

	  preamble: function preamble() {
	    // track the last context pushed into place to allow skipping the
	    // getContext opcode when it would be a noop
	    this.lastContext = 0;
	    this.source = new _codeGen2['default'](this.options.srcName);
	    this.decorators = new _codeGen2['default'](this.options.srcName);
	  },

	  createFunctionContext: function createFunctionContext(asObject) {
	    var varDeclarations = '';

	    var locals = this.stackVars.concat(this.registers.list);
	    if (locals.length > 0) {
	      varDeclarations += ', ' + locals.join(', ');
	    }

	    // Generate minimizer alias mappings
	    //
	    // When using true SourceNodes, this will update all references to the given alias
	    // as the source nodes are reused in situ. For the non-source node compilation mode,
	    // aliases will not be used, but this case is already being run on the client and
	    // we aren't concern about minimizing the template size.
	    var aliasCount = 0;
	    for (var alias in this.aliases) {
	      // eslint-disable-line guard-for-in
	      var node = this.aliases[alias];

	      if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
	        varDeclarations += ', alias' + ++aliasCount + '=' + alias;
	        node.children[0] = 'alias' + aliasCount;
	      }
	    }

	    var params = ['container', 'depth0', 'helpers', 'partials', 'data'];

	    if (this.useBlockParams || this.useDepths) {
	      params.push('blockParams');
	    }
	    if (this.useDepths) {
	      params.push('depths');
	    }

	    // Perform a second pass over the output to merge content when possible
	    var source = this.mergeSource(varDeclarations);

	    if (asObject) {
	      params.push(source);

	      return Function.apply(this, params);
	    } else {
	      return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
	    }
	  },
	  mergeSource: function mergeSource(varDeclarations) {
	    var isSimple = this.environment.isSimple,
	        appendOnly = !this.forceBuffer,
	        appendFirst = undefined,
	        sourceSeen = undefined,
	        bufferStart = undefined,
	        bufferEnd = undefined;
	    this.source.each(function (line) {
	      if (line.appendToBuffer) {
	        if (bufferStart) {
	          line.prepend('  + ');
	        } else {
	          bufferStart = line;
	        }
	        bufferEnd = line;
	      } else {
	        if (bufferStart) {
	          if (!sourceSeen) {
	            appendFirst = true;
	          } else {
	            bufferStart.prepend('buffer += ');
	          }
	          bufferEnd.add(';');
	          bufferStart = bufferEnd = undefined;
	        }

	        sourceSeen = true;
	        if (!isSimple) {
	          appendOnly = false;
	        }
	      }
	    });

	    if (appendOnly) {
	      if (bufferStart) {
	        bufferStart.prepend('return ');
	        bufferEnd.add(';');
	      } else if (!sourceSeen) {
	        this.source.push('return "";');
	      }
	    } else {
	      varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());

	      if (bufferStart) {
	        bufferStart.prepend('return buffer + ');
	        bufferEnd.add(';');
	      } else {
	        this.source.push('return buffer;');
	      }
	    }

	    if (varDeclarations) {
	      this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
	    }

	    return this.source.merge();
	  },

	  // [blockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // On stack, after: return value of blockHelperMissing
	  //
	  // The purpose of this opcode is to take a block of the form
	  // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
	  // replace it on the stack with the result of properly
	  // invoking blockHelperMissing.
	  blockValue: function blockValue(name) {
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs(name, 0, params);

	    var blockName = this.popStack();
	    params.splice(1, 0, blockName);

	    this.push(this.source.functionCall(blockHelperMissing, 'call', params));
	  },

	  // [ambiguousBlockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // Compiler value, before: lastHelper=value of last found helper, if any
	  // On stack, after, if no lastHelper: same as [blockValue]
	  // On stack, after, if lastHelper: value
	  ambiguousBlockValue: function ambiguousBlockValue() {
	    // We're being a bit cheeky and reusing the options value from the prior exec
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs('', 0, params, true);

	    this.flushInline();

	    var current = this.topStack();
	    params.splice(1, 0, current);

	    this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
	  },

	  // [appendContent]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  //
	  // Appends the string value of `content` to the current buffer
	  appendContent: function appendContent(content) {
	    if (this.pendingContent) {
	      content = this.pendingContent + content;
	    } else {
	      this.pendingLocation = this.source.currentLocation;
	    }

	    this.pendingContent = content;
	  },

	  // [append]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Coerces `value` to a String and appends it to the current buffer.
	  //
	  // If `value` is truthy, or 0, it is coerced into a string and appended
	  // Otherwise, the empty string is appended
	  append: function append() {
	    if (this.isInline()) {
	      this.replaceStack(function (current) {
	        return [' != null ? ', current, ' : ""'];
	      });

	      this.pushSource(this.appendToBuffer(this.popStack()));
	    } else {
	      var local = this.popStack();
	      this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
	      if (this.environment.isSimple) {
	        this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
	      }
	    }
	  },

	  // [appendEscaped]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Escape `value` and append it to the buffer
	  appendEscaped: function appendEscaped() {
	    this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
	  },

	  // [getContext]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  // Compiler value, after: lastContext=depth
	  //
	  // Set the value of the `lastContext` compiler value to the depth
	  getContext: function getContext(depth) {
	    this.lastContext = depth;
	  },

	  // [pushContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext, ...
	  //
	  // Pushes the value of the current context onto the stack.
	  pushContext: function pushContext() {
	    this.pushStackLiteral(this.contextName(this.lastContext));
	  },

	  // [lookupOnContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext[name], ...
	  //
	  // Looks up the value of `name` on the current context and pushes
	  // it onto the stack.
	  lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
	    var i = 0;

	    if (!scoped && this.options.compat && !this.lastContext) {
	      // The depthed query is expected to handle the undefined logic for the root level that
	      // is implemented below, so we evaluate that directly in compat mode
	      this.push(this.depthedLookup(parts[i++]));
	    } else {
	      this.pushContext();
	    }

	    this.resolvePath('context', parts, i, falsy, strict);
	  },

	  // [lookupBlockParam]
	  //
	  // On stack, before: ...
	  // On stack, after: blockParam[name], ...
	  //
	  // Looks up the value of `parts` on the given block param and pushes
	  // it onto the stack.
	  lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
	    this.useBlockParams = true;

	    this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
	    this.resolvePath('context', parts, 1);
	  },

	  // [lookupData]
	  //
	  // On stack, before: ...
	  // On stack, after: data, ...
	  //
	  // Push the data lookup operator
	  lookupData: function lookupData(depth, parts, strict) {
	    if (!depth) {
	      this.pushStackLiteral('data');
	    } else {
	      this.pushStackLiteral('container.data(data, ' + depth + ')');
	    }

	    this.resolvePath('data', parts, 0, true, strict);
	  },

	  resolvePath: function resolvePath(type, parts, i, falsy, strict) {
	    // istanbul ignore next

	    var _this = this;

	    if (this.options.strict || this.options.assumeObjects) {
	      this.push(strictLookup(this.options.strict && strict, this, parts, type));
	      return;
	    }

	    var len = parts.length;
	    for (; i < len; i++) {
	      /* eslint-disable no-loop-func */
	      this.replaceStack(function (current) {
	        var lookup = _this.nameLookup(current, parts[i], type);
	        // We want to ensure that zero and false are handled properly if the context (falsy flag)
	        // needs to have the special handling for these values.
	        if (!falsy) {
	          return [' != null ? ', lookup, ' : ', current];
	        } else {
	          // Otherwise we can use generic falsy handling
	          return [' && ', lookup];
	        }
	      });
	      /* eslint-enable no-loop-func */
	    }
	  },

	  // [resolvePossibleLambda]
	  //
	  // On stack, before: value, ...
	  // On stack, after: resolved value, ...
	  //
	  // If the `value` is a lambda, replace it on the stack by
	  // the return value of the lambda
	  resolvePossibleLambda: function resolvePossibleLambda() {
	    this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
	  },

	  emptyHash: function emptyHash(omitEmpty) {
	    this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
	  },
	  pushHash: function pushHash() {
	    if (this.hash) {
	      this.hashes.push(this.hash);
	    }
	    this.hash = { values: {} };
	  },
	  popHash: function popHash() {
	    var hash = this.hash;
	    this.hash = this.hashes.pop();

	    this.push(this.objectLiteral(hash.values));
	  },

	  // [pushString]
	  //
	  // On stack, before: ...
	  // On stack, after: quotedString(string), ...
	  //
	  // Push a quoted version of `string` onto the stack
	  pushString: function pushString(string) {
	    this.pushStackLiteral(this.quotedString(string));
	  },

	  // [pushLiteral]
	  //
	  // On stack, before: ...
	  // On stack, after: value, ...
	  //
	  // Pushes a value onto the stack. This operation prevents
	  // the compiler from creating a temporary variable to hold
	  // it.
	  pushLiteral: function pushLiteral(value) {
	    this.pushStackLiteral(value);
	  },

	  // [pushProgram]
	  //
	  // On stack, before: ...
	  // On stack, after: program(guid), ...
	  //
	  // Push a program expression onto the stack. This takes
	  // a compile-time guid and converts it into a runtime-accessible
	  // expression.
	  pushProgram: function pushProgram(guid) {
	    if (guid != null) {
	      this.pushStackLiteral(this.programExpression(guid));
	    } else {
	      this.pushStackLiteral(null);
	    }
	  },

	  // [registerDecorator]
	  //
	  // On stack, before: hash, program, params..., ...
	  // On stack, after: ...
	  //
	  // Pops off the decorator's parameters, invokes the decorator,
	  // and inserts the decorator into the decorators list.
	  registerDecorator: function registerDecorator(paramSize, name) {
	    var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
	        options = this.setupHelperArgs(name, paramSize);

	    this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
	  },

	  // [invokeHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // Pops off the helper's parameters, invokes the helper,
	  // and pushes the helper's return value onto the stack.
	  //
	  // If the helper is not found, `helperMissing` is called.
	  invokeHelper: function invokeHelper(paramSize, name, isSimple) {
	    var nonHelper = this.popStack(),
	        helper = this.setupHelper(paramSize, name),
	        simple = isSimple ? [helper.name, ' || '] : '';

	    var lookup = ['('].concat(simple, nonHelper);
	    if (!this.options.strict) {
	      lookup.push(' || ', this.aliasable('helpers.helperMissing'));
	    }
	    lookup.push(')');

	    this.push(this.source.functionCall(lookup, 'call', helper.callParams));
	  },

	  // [invokeKnownHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // This operation is used when the helper is known to exist,
	  // so a `helperMissing` fallback is not required.
	  invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
	    var helper = this.setupHelper(paramSize, name);
	    this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
	  },

	  // [invokeAmbiguous]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of disambiguation
	  //
	  // This operation is used when an expression like `{{foo}}`
	  // is provided, but we don't know at compile-time whether it
	  // is a helper or a path.
	  //
	  // This operation emits more code than the other options,
	  // and can be avoided by passing the `knownHelpers` and
	  // `knownHelpersOnly` flags at compile-time.
	  invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
	    this.useRegister('helper');

	    var nonHelper = this.popStack();

	    this.emptyHash();
	    var helper = this.setupHelper(0, name, helperCall);

	    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

	    var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
	    if (!this.options.strict) {
	      lookup[0] = '(helper = ';
	      lookup.push(' != null ? helper : ', this.aliasable('helpers.helperMissing'));
	    }

	    this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
	  },

	  // [invokePartial]
	  //
	  // On stack, before: context, ...
	  // On stack after: result of partial invocation
	  //
	  // This operation pops off a context, invokes a partial with that context,
	  // and pushes the result of the invocation back.
	  invokePartial: function invokePartial(isDynamic, name, indent) {
	    var params = [],
	        options = this.setupParams(name, 1, params);

	    if (isDynamic) {
	      name = this.popStack();
	      delete options.name;
	    }

	    if (indent) {
	      options.indent = JSON.stringify(indent);
	    }
	    options.helpers = 'helpers';
	    options.partials = 'partials';
	    options.decorators = 'container.decorators';

	    if (!isDynamic) {
	      params.unshift(this.nameLookup('partials', name, 'partial'));
	    } else {
	      params.unshift(name);
	    }

	    if (this.options.compat) {
	      options.depths = 'depths';
	    }
	    options = this.objectLiteral(options);
	    params.push(options);

	    this.push(this.source.functionCall('container.invokePartial', '', params));
	  },

	  // [assignToHash]
	  //
	  // On stack, before: value, ..., hash, ...
	  // On stack, after: ..., hash, ...
	  //
	  // Pops a value off the stack and assigns it to the current hash
	  assignToHash: function assignToHash(key) {
	    this.hash.values[key] = this.popStack();
	  },

	  // HELPERS

	  compiler: JavaScriptCompiler,

	  compileChildren: function compileChildren(environment, options) {
	    var children = environment.children,
	        child = undefined,
	        compiler = undefined;

	    for (var i = 0, l = children.length; i < l; i++) {
	      child = children[i];
	      compiler = new this.compiler(); // eslint-disable-line new-cap

	      var existing = this.matchExistingProgram(child);

	      if (existing == null) {
	        this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
	        var index = this.context.programs.length;
	        child.index = index;
	        child.name = 'program' + index;
	        this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
	        this.context.decorators[index] = compiler.decorators;
	        this.context.environments[index] = child;

	        this.useDepths = this.useDepths || compiler.useDepths;
	        this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
	        child.useDepths = this.useDepths;
	        child.useBlockParams = this.useBlockParams;
	      } else {
	        child.index = existing.index;
	        child.name = 'program' + existing.index;

	        this.useDepths = this.useDepths || existing.useDepths;
	        this.useBlockParams = this.useBlockParams || existing.useBlockParams;
	      }
	    }
	  },
	  matchExistingProgram: function matchExistingProgram(child) {
	    for (var i = 0, len = this.context.environments.length; i < len; i++) {
	      var environment = this.context.environments[i];
	      if (environment && environment.equals(child)) {
	        return environment;
	      }
	    }
	  },

	  programExpression: function programExpression(guid) {
	    var child = this.environment.children[guid],
	        programParams = [child.index, 'data', child.blockParams];

	    if (this.useBlockParams || this.useDepths) {
	      programParams.push('blockParams');
	    }
	    if (this.useDepths) {
	      programParams.push('depths');
	    }

	    return 'container.program(' + programParams.join(', ') + ')';
	  },

	  useRegister: function useRegister(name) {
	    if (!this.registers[name]) {
	      this.registers[name] = true;
	      this.registers.list.push(name);
	    }
	  },

	  push: function push(expr) {
	    if (!(expr instanceof Literal)) {
	      expr = this.source.wrap(expr);
	    }

	    this.inlineStack.push(expr);
	    return expr;
	  },

	  pushStackLiteral: function pushStackLiteral(item) {
	    this.push(new Literal(item));
	  },

	  pushSource: function pushSource(source) {
	    if (this.pendingContent) {
	      this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
	      this.pendingContent = undefined;
	    }

	    if (source) {
	      this.source.push(source);
	    }
	  },

	  replaceStack: function replaceStack(callback) {
	    var prefix = ['('],
	        stack = undefined,
	        createdStack = undefined,
	        usedLiteral = undefined;

	    /* istanbul ignore next */
	    if (!this.isInline()) {
	      throw new _exception2['default']('replaceStack on non-inline');
	    }

	    // We want to merge the inline statement into the replacement statement via ','
	    var top = this.popStack(true);

	    if (top instanceof Literal) {
	      // Literals do not need to be inlined
	      stack = [top.value];
	      prefix = ['(', stack];
	      usedLiteral = true;
	    } else {
	      // Get or create the current stack name for use by the inline
	      createdStack = true;
	      var _name = this.incrStack();

	      prefix = ['((', this.push(_name), ' = ', top, ')'];
	      stack = this.topStack();
	    }

	    var item = callback.call(this, stack);

	    if (!usedLiteral) {
	      this.popStack();
	    }
	    if (createdStack) {
	      this.stackSlot--;
	    }
	    this.push(prefix.concat(item, ')'));
	  },

	  incrStack: function incrStack() {
	    this.stackSlot++;
	    if (this.stackSlot > this.stackVars.length) {
	      this.stackVars.push('stack' + this.stackSlot);
	    }
	    return this.topStackName();
	  },
	  topStackName: function topStackName() {
	    return 'stack' + this.stackSlot;
	  },
	  flushInline: function flushInline() {
	    var inlineStack = this.inlineStack;
	    this.inlineStack = [];
	    for (var i = 0, len = inlineStack.length; i < len; i++) {
	      var entry = inlineStack[i];
	      /* istanbul ignore if */
	      if (entry instanceof Literal) {
	        this.compileStack.push(entry);
	      } else {
	        var stack = this.incrStack();
	        this.pushSource([stack, ' = ', entry, ';']);
	        this.compileStack.push(stack);
	      }
	    }
	  },
	  isInline: function isInline() {
	    return this.inlineStack.length;
	  },

	  popStack: function popStack(wrapped) {
	    var inline = this.isInline(),
	        item = (inline ? this.inlineStack : this.compileStack).pop();

	    if (!wrapped && item instanceof Literal) {
	      return item.value;
	    } else {
	      if (!inline) {
	        /* istanbul ignore next */
	        if (!this.stackSlot) {
	          throw new _exception2['default']('Invalid stack pop');
	        }
	        this.stackSlot--;
	      }
	      return item;
	    }
	  },

	  topStack: function topStack() {
	    var stack = this.isInline() ? this.inlineStack : this.compileStack,
	        item = stack[stack.length - 1];

	    /* istanbul ignore if */
	    if (item instanceof Literal) {
	      return item.value;
	    } else {
	      return item;
	    }
	  },

	  contextName: function contextName(context) {
	    if (this.useDepths && context) {
	      return 'depths[' + context + ']';
	    } else {
	      return 'depth' + context;
	    }
	  },

	  quotedString: function quotedString(str) {
	    return this.source.quotedString(str);
	  },

	  objectLiteral: function objectLiteral(obj) {
	    return this.source.objectLiteral(obj);
	  },

	  aliasable: function aliasable(name) {
	    var ret = this.aliases[name];
	    if (ret) {
	      ret.referenceCount++;
	      return ret;
	    }

	    ret = this.aliases[name] = this.source.wrap(name);
	    ret.aliasable = true;
	    ret.referenceCount = 1;

	    return ret;
	  },

	  setupHelper: function setupHelper(paramSize, name, blockHelper) {
	    var params = [],
	        paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
	    var foundHelper = this.nameLookup('helpers', name, 'helper'),
	        callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : {}');

	    return {
	      params: params,
	      paramsInit: paramsInit,
	      name: foundHelper,
	      callParams: [callContext].concat(params)
	    };
	  },

	  setupParams: function setupParams(helper, paramSize, params) {
	    var options = {},
	        objectArgs = !params,
	        param = undefined;

	    if (objectArgs) {
	      params = [];
	    }

	    options.name = this.quotedString(helper);
	    options.hash = this.popStack();

	    var inverse = this.popStack(),
	        program = this.popStack();

	    // Avoid setting fn and inverse if neither are set. This allows
	    // helpers to do a check for `if (options.fn)`
	    if (program || inverse) {
	      options.fn = program || 'container.noop';
	      options.inverse = inverse || 'container.noop';
	    }

	    // The parameters go on to the stack in order (making sure that they are evaluated in order)
	    // so we need to pop them off the stack in reverse order
	    var i = paramSize;
	    while (i--) {
	      param = this.popStack();
	      params[i] = param;
	    }

	    if (objectArgs) {
	      options.args = this.source.generateArray(params);
	    }

	    if (this.options.data) {
	      options.data = 'data';
	    }
	    if (this.useBlockParams) {
	      options.blockParams = 'blockParams';
	    }
	    return options;
	  },

	  setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
	    var options = this.setupParams(helper, paramSize, params);
	    options = this.objectLiteral(options);
	    if (useRegister) {
	      this.useRegister('options');
	      params.push('options');
	      return ['options=', options];
	    } else if (params) {
	      params.push(options);
	      return '';
	    } else {
	      return options;
	    }
	  }
	};

	(function () {
	  var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');

	  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

	  for (var i = 0, l = reservedWords.length; i < l; i++) {
	    compilerWords[reservedWords[i]] = true;
	  }
	})();

	JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
	  return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
	};

	function strictLookup(requireTerminal, compiler, parts, type) {
	  var stack = compiler.popStack(),
	      i = 0,
	      len = parts.length;
	  if (requireTerminal) {
	    len--;
	  }

	  for (; i < len; i++) {
	    stack = compiler.nameLookup(stack, parts[i], type);
	  }

	  if (requireTerminal) {
	    return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ')'];
	  } else {
	    return stack;
	  }
	}

	exports['default'] = JavaScriptCompiler;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2NvbXBpbGVyL2phdmFzY3JpcHQtY29tcGlsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztvQkFBb0QsU0FBUzs7eUJBQ3ZDLGNBQWM7Ozs7cUJBQ2QsVUFBVTs7dUJBQ1osWUFBWTs7OztBQUVoQyxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDdEIsTUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Q0FDcEI7O0FBRUQsU0FBUyxrQkFBa0IsR0FBRyxFQUFFOztBQUVoQyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUc7OztBQUc3QixZQUFVLEVBQUUsb0JBQVMsTUFBTSxFQUFFLElBQUksY0FBYTtBQUM1QyxRQUFJLGtCQUFrQixDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzFELGFBQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzVCLE1BQU07QUFDTCxhQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ2pEO0dBQ0Y7QUFDRCxlQUFhLEVBQUUsdUJBQVMsSUFBSSxFQUFFO0FBQzVCLFdBQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztHQUN2RTs7QUFFRCxjQUFZLEVBQUUsd0JBQVc7QUFDdkIsUUFBTSxRQUFRLDBCQUFvQjtRQUM1QixRQUFRLEdBQUcsdUJBQWlCLFFBQVEsQ0FBQyxDQUFDO0FBQzVDLFdBQU8sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7R0FDN0I7O0FBRUQsZ0JBQWMsRUFBRSx3QkFBUyxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTs7QUFFbkQsUUFBSSxDQUFDLGVBQVEsTUFBTSxDQUFDLEVBQUU7QUFD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LEVBQUU7QUFDbkIsU0FBSyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztHQUNwRDs7QUFFRCxNQUFJLGVBQWUsRUFBRTtBQUNuQixXQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7R0FDekcsTUFBTTtBQUNMLFdBQU8sS0FBSyxDQUFDO0dBQ2Q7Q0FDRjs7cUJBRWMsa0JBQWtCIiwiZmlsZSI6ImphdmFzY3JpcHQtY29tcGlsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDT01QSUxFUl9SRVZJU0lPTiwgUkVWSVNJT05fQ0hBTkdFUyB9IGZyb20gJy4uL2Jhc2UnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuLi9leGNlcHRpb24nO1xuaW1wb3J0IHtpc0FycmF5fSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgQ29kZUdlbiBmcm9tICcuL2NvZGUtZ2VuJztcblxuZnVuY3Rpb24gTGl0ZXJhbCh2YWx1ZSkge1xuICB0aGlzLnZhbHVlID0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEphdmFTY3JpcHRDb21waWxlcigpIHt9XG5cbkphdmFTY3JpcHRDb21waWxlci5wcm90b3R5cGUgPSB7XG4gIC8vIFBVQkxJQyBBUEk6IFlvdSBjYW4gb3ZlcnJpZGUgdGhlc2UgbWV0aG9kcyBpbiBhIHN1YmNsYXNzIHRvIHByb3ZpZGVcbiAgLy8gYWx0ZXJuYXRpdmUgY29tcGlsZWQgZm9ybXMgZm9yIG5hbWUgbG9va3VwIGFuZCBidWZmZXJpbmcgc2VtYW50aWNzXG4gIG5hbWVMb29rdXA6IGZ1bmN0aW9uKHBhcmVudCwgbmFtZS8qICwgdHlwZSovKSB7XG4gICAgaWYgKEphdmFTY3JpcHRDb21waWxlci5pc1ZhbGlkSmF2YVNjcmlwdFZhcmlhYmxlTmFtZShuYW1lKSkge1xuICAgICAgcmV0dXJuIFtwYXJlbnQsICcuJywgbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbcGFyZW50LCAnWycsIEpTT04uc3RyaW5naWZ5KG5hbWUpLCAnXSddO1xuICAgIH1cbiAgfSxcbiAgZGVwdGhlZExvb2t1cDogZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiBbdGhpcy5hbGlhc2FibGUoJ2NvbnRhaW5lci5sb29rdXAnKSwgJyhkZXB0aHMsIFwiJywgbmFtZSwgJ1wiKSddO1xuICB9LFxuXG4gIGNvbXBpbGVySW5mbzogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcmV2aXNpb24gPSBDT01QSUxFUl9SRVZJU0lPTixcbiAgICAgICAgICB2ZXJzaW9ucyA9IFJFVklTSU9OX0NIQU5HRVNbcmV2aXNpb25dO1xuICAgIHJldHVybiBbcmV2aXNpb24sIHZlcnNpb25zXTtcbiAgfSxcblxuICBhcHBlbmRUb0J1ZmZlcjogZnVuY3Rpb24oc291cmNlLCBsb2NhdGlvbiwgZXhwbGljaXQpIHtcbiAgICAvLyBGb3JjZSBhIHNvdXJjZSBhcyB0aGlzIHNpbXBsaWZpZXMgdGhlIG1lcmdlIGxvZ2ljLlxuICAgIGlmICghaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICBzb3VyY2UgPSBbc291cmNlXTtcbiAgICB9XG4gICAgc291cmNlID0gdGhpcy5zb3VyY2Uud3JhcChzb3VyY2UsIGxvY2F0aW9uKTtcblxuICAgIGlmICh0aGlzLmVudmlyb25tZW50LmlzU2ltcGxlKSB7XG4gICAgICByZXR1cm4gWydyZXR1cm4gJywgc291cmNlLCAnOyddO1xuICAgIH0gZWxzZSBpZiAoZXhwbGljaXQpIHtcbiAgICAgIC8vIFRoaXMgaXMgYSBjYXNlIHdoZXJlIHRoZSBidWZmZXIgb3BlcmF0aW9uIG9jY3VycyBhcyBhIGNoaWxkIG9mIGFub3RoZXJcbiAgICAgIC8vIGNvbnN0cnVjdCwgZ2VuZXJhbGx5IGJyYWNlcy4gV2UgaGF2ZSB0byBleHBsaWNpdGx5IG91dHB1dCB0aGVzZSBidWZmZXJcbiAgICAgIC8vIG9wZXJhdGlvbnMgdG8gZW5zdXJlIHRoYXQgdGhlIGVtaXR0ZWQgY29kZSBnb2VzIGluIHRoZSBjb3JyZWN0IGxvY2F0aW9uLlxuICAgICAgcmV0dXJuIFsnYnVmZmVyICs9ICcsIHNvdXJjZSwgJzsnXTtcbiAgICB9IGVsc2Uge1xuICAgICAgc291cmNlLmFwcGVuZFRvQnVmZmVyID0gdHJ1ZTtcbiAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfVxuICB9LFxuXG4gIGluaXRpYWxpemVCdWZmZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnF1b3RlZFN0cmluZygnJyk7XG4gIH0sXG4gIC8vIEVORCBQVUJMSUMgQVBJXG5cbiAgY29tcGlsZTogZnVuY3Rpb24oZW52aXJvbm1lbnQsIG9wdGlvbnMsIGNvbnRleHQsIGFzT2JqZWN0KSB7XG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5wcmVjb21waWxlID0gIWFzT2JqZWN0O1xuXG4gICAgdGhpcy5uYW1lID0gdGhpcy5lbnZpcm9ubWVudC5uYW1lO1xuICAgIHRoaXMuaXNDaGlsZCA9ICEhY29udGV4dDtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0IHx8IHtcbiAgICAgIGRlY29yYXRvcnM6IFtdLFxuICAgICAgcHJvZ3JhbXM6IFtdLFxuICAgICAgZW52aXJvbm1lbnRzOiBbXVxuICAgIH07XG5cbiAgICB0aGlzLnByZWFtYmxlKCk7XG5cbiAgICB0aGlzLnN0YWNrU2xvdCA9IDA7XG4gICAgdGhpcy5zdGFja1ZhcnMgPSBbXTtcbiAgICB0aGlzLmFsaWFzZXMgPSB7fTtcbiAgICB0aGlzLnJlZ2lzdGVycyA9IHsgbGlzdDogW10gfTtcbiAgICB0aGlzLmhhc2hlcyA9IFtdO1xuICAgIHRoaXMuY29tcGlsZVN0YWNrID0gW107XG4gICAgdGhpcy5pbmxpbmVTdGFjayA9IFtdO1xuICAgIHRoaXMuYmxvY2tQYXJhbXMgPSBbXTtcblxuICAgIHRoaXMuY29tcGlsZUNoaWxkcmVuKGVudmlyb25tZW50LCBvcHRpb25zKTtcblxuICAgIHRoaXMudXNlRGVwdGhzID0gdGhpcy51c2VEZXB0aHMgfHwgZW52aXJvbm1lbnQudXNlRGVwdGhzIHx8IGVudmlyb25tZW50LnVzZURlY29yYXRvcnMgfHwgdGhpcy5vcHRpb25zLmNvbXBhdDtcbiAgICB0aGlzLnVzZUJsb2NrUGFyYW1zID0gdGhpcy51c2VCbG9ja1BhcmFtcyB8fCBlbnZpcm9ubWVudC51c2VCbG9ja1BhcmFtcztcblxuICAgIGxldCBvcGNvZGVzID0gZW52aXJvbm1lbnQub3Bjb2RlcyxcbiAgICAgICAgb3Bjb2RlLFxuICAgICAgICBmaXJzdExvYyxcbiAgICAgICAgaSxcbiAgICAgICAgbDtcblxuICAgIGZvciAoaSA9IDAsIGwgPSBvcGNvZGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgb3Bjb2RlID0gb3Bjb2Rlc1tpXTtcblxuICAgICAgdGhpcy5zb3VyY2UuY3VycmVudExvY2F0aW9uID0gb3Bjb2RlLmxvYztcbiAgICAgIGZpcnN0TG9jID0gZmlyc3RMb2MgfHwgb3Bjb2RlLmxvYztcbiAgICAgIHRoaXNbb3Bjb2RlLm9wY29kZV0uYXBwbHkodGhpcywgb3Bjb2RlLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIEZsdXNoIGFueSB0cmFpbGluZyBjb250ZW50IHRoYXQgbWlnaHQgYmUgcGVuZGluZy5cbiAgICB0aGlzLnNvdXJjZS5jdXJyZW50TG9jYXRpb24gPSBmaXJzdExvYztcbiAgICB0aGlzLnB1c2hTb3VyY2UoJycpO1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodGhpcy5zdGFja1Nsb3QgfHwgdGhpcy5pbmxpbmVTdGFjay5sZW5ndGggfHwgdGhpcy5jb21waWxlU3RhY2subGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdDb21waWxlIGNvbXBsZXRlZCB3aXRoIGNvbnRlbnQgbGVmdCBvbiBzdGFjaycpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5kZWNvcmF0b3JzLmlzRW1wdHkoKSkge1xuICAgICAgdGhpcy51c2VEZWNvcmF0b3JzID0gdHJ1ZTtcblxuICAgICAgdGhpcy5kZWNvcmF0b3JzLnByZXBlbmQoJ3ZhciBkZWNvcmF0b3JzID0gY29udGFpbmVyLmRlY29yYXRvcnM7XFxuJyk7XG4gICAgICB0aGlzLmRlY29yYXRvcnMucHVzaCgncmV0dXJuIGZuOycpO1xuXG4gICAgICBpZiAoYXNPYmplY3QpIHtcbiAgICAgICAgdGhpcy5kZWNvcmF0b3JzID0gRnVuY3Rpb24uYXBwbHkodGhpcywgWydmbicsICdwcm9wcycsICdjb250YWluZXInLCAnZGVwdGgwJywgJ2RhdGEnLCAnYmxvY2tQYXJhbXMnLCAnZGVwdGhzJywgdGhpcy5kZWNvcmF0b3JzLm1lcmdlKCldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5wcmVwZW5kKCdmdW5jdGlvbihmbiwgcHJvcHMsIGNvbnRhaW5lciwgZGVwdGgwLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XFxuJyk7XG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycy5wdXNoKCd9XFxuJyk7XG4gICAgICAgIHRoaXMuZGVjb3JhdG9ycyA9IHRoaXMuZGVjb3JhdG9ycy5tZXJnZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlY29yYXRvcnMgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgbGV0IGZuID0gdGhpcy5jcmVhdGVGdW5jdGlvbkNvbnRleHQoYXNPYmplY3QpO1xuICAgIGlmICghdGhpcy5pc0NoaWxkKSB7XG4gICAgICBsZXQgcmV0ID0ge1xuICAgICAgICBjb21waWxlcjogdGhpcy5jb21waWxlckluZm8oKSxcbiAgICAgICAgbWFpbjogZm5cbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLmRlY29yYXRvcnMpIHtcbiAgICAgICAgcmV0Lm1haW5fZCA9IHRoaXMuZGVjb3JhdG9yczsgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAgICAgICByZXQudXNlRGVjb3JhdG9ycyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB7cHJvZ3JhbXMsIGRlY29yYXRvcnN9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgZm9yIChpID0gMCwgbCA9IHByb2dyYW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAocHJvZ3JhbXNbaV0pIHtcbiAgICAgICAgICByZXRbaV0gPSBwcm9ncmFtc1tpXTtcbiAgICAgICAgICBpZiAoZGVjb3JhdG9yc1tpXSkge1xuICAgICAgICAgICAgcmV0W2kgKyAnX2QnXSA9IGRlY29yYXRvcnNbaV07XG4gICAgICAgICAgICByZXQudXNlRGVjb3JhdG9ycyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmVudmlyb25tZW50LnVzZVBhcnRpYWwpIHtcbiAgICAgICAgcmV0LnVzZVBhcnRpYWwgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kYXRhKSB7XG4gICAgICAgIHJldC51c2VEYXRhID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnVzZURlcHRocykge1xuICAgICAgICByZXQudXNlRGVwdGhzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnVzZUJsb2NrUGFyYW1zKSB7XG4gICAgICAgIHJldC51c2VCbG9ja1BhcmFtcyA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhdCkge1xuICAgICAgICByZXQuY29tcGF0ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhc09iamVjdCkge1xuICAgICAgICByZXQuY29tcGlsZXIgPSBKU09OLnN0cmluZ2lmeShyZXQuY29tcGlsZXIpO1xuXG4gICAgICAgIHRoaXMuc291cmNlLmN1cnJlbnRMb2NhdGlvbiA9IHtzdGFydDoge2xpbmU6IDEsIGNvbHVtbjogMH19O1xuICAgICAgICByZXQgPSB0aGlzLm9iamVjdExpdGVyYWwocmV0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zcmNOYW1lKSB7XG4gICAgICAgICAgcmV0ID0gcmV0LnRvU3RyaW5nV2l0aFNvdXJjZU1hcCh7ZmlsZTogb3B0aW9ucy5kZXN0TmFtZX0pO1xuICAgICAgICAgIHJldC5tYXAgPSByZXQubWFwICYmIHJldC5tYXAudG9TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXQgPSByZXQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0LmNvbXBpbGVyT3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZuO1xuICAgIH1cbiAgfSxcblxuICBwcmVhbWJsZTogZnVuY3Rpb24oKSB7XG4gICAgLy8gdHJhY2sgdGhlIGxhc3QgY29udGV4dCBwdXNoZWQgaW50byBwbGFjZSB0byBhbGxvdyBza2lwcGluZyB0aGVcbiAgICAvLyBnZXRDb250ZXh0IG9wY29kZSB3aGVuIGl0IHdvdWxkIGJlIGEgbm9vcFxuICAgIHRoaXMubGFzdENvbnRleHQgPSAwO1xuICAgIHRoaXMuc291cmNlID0gbmV3IENvZGVHZW4odGhpcy5vcHRpb25zLnNyY05hbWUpO1xuICAgIHRoaXMuZGVjb3JhdG9ycyA9IG5ldyBDb2RlR2VuKHRoaXMub3B0aW9ucy5zcmNOYW1lKTtcbiAgfSxcblxuICBjcmVhdGVGdW5jdGlvbkNvbnRleHQ6IGZ1bmN0aW9uKGFzT2JqZWN0KSB7XG4gICAgbGV0IHZhckRlY2xhcmF0aW9ucyA9ICcnO1xuXG4gICAgbGV0IGxvY2FscyA9IHRoaXMuc3RhY2tWYXJzLmNvbmNhdCh0aGlzLnJlZ2lzdGVycy5saXN0KTtcbiAgICBpZiAobG9jYWxzLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhckRlY2xhcmF0aW9ucyArPSAnLCAnICsgbG9jYWxzLmpvaW4oJywgJyk7XG4gICAgfVxuXG4gICAgLy8gR2VuZXJhdGUgbWluaW1pemVyIGFsaWFzIG1hcHBpbmdzXG4gICAgLy9cbiAgICAvLyBXaGVuIHVzaW5nIHRydWUgU291cmNlTm9kZXMsIHRoaXMgd2lsbCB1cGRhdGUgYWxsIHJlZmVyZW5jZXMgdG8gdGhlIGdpdmVuIGFsaWFzXG4gICAgLy8gYXMgdGhlIHNvdXJjZSBub2RlcyBhcmUgcmV1c2VkIGluIHNpdHUuIEZvciB0aGUgbm9uLXNvdXJjZSBub2RlIGNvbXBpbGF0aW9uIG1vZGUsXG4gICAgLy8gYWxpYXNlcyB3aWxsIG5vdCBiZSB1c2VkLCBidXQgdGhpcyBjYXNlIGlzIGFscmVhZHkgYmVpbmcgcnVuIG9uIHRoZSBjbGllbnQgYW5kXG4gICAgLy8gd2UgYXJlbid0IGNvbmNlcm4gYWJvdXQgbWluaW1pemluZyB0aGUgdGVtcGxhdGUgc2l6ZS5cbiAgICBsZXQgYWxpYXNDb3VudCA9IDA7XG4gICAgZm9yIChsZXQgYWxpYXMgaW4gdGhpcy5hbGlhc2VzKSB7ICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZ3VhcmQtZm9yLWluXG4gICAgICBsZXQgbm9kZSA9IHRoaXMuYWxpYXNlc1thbGlhc107XG5cbiAgICAgIGlmICh0aGlzLmFsaWFzZXMuaGFzT3duUHJvcGVydHkoYWxpYXMpICYmIG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5yZWZlcmVuY2VDb3VudCA+IDEpIHtcbiAgICAgICAgdmFyRGVjbGFyYXRpb25zICs9ICcsIGFsaWFzJyArICgrK2FsaWFzQ291bnQpICsgJz0nICsgYWxpYXM7XG4gICAgICAgIG5vZGUuY2hpbGRyZW5bMF0gPSAnYWxpYXMnICsgYWxpYXNDb3VudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcGFyYW1zID0gWydjb250YWluZXInLCAnZGVwdGgwJywgJ2hlbHBlcnMnLCAncGFydGlhbHMnLCAnZGF0YSddO1xuXG4gICAgaWYgKHRoaXMudXNlQmxvY2tQYXJhbXMgfHwgdGhpcy51c2VEZXB0aHMpIHtcbiAgICAgIHBhcmFtcy5wdXNoKCdibG9ja1BhcmFtcycpO1xuICAgIH1cbiAgICBpZiAodGhpcy51c2VEZXB0aHMpIHtcbiAgICAgIHBhcmFtcy5wdXNoKCdkZXB0aHMnKTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIGEgc2Vjb25kIHBhc3Mgb3ZlciB0aGUgb3V0cHV0IHRvIG1lcmdlIGNvbnRlbnQgd2hlbiBwb3NzaWJsZVxuICAgIGxldCBzb3VyY2UgPSB0aGlzLm1lcmdlU291cmNlKHZhckRlY2xhcmF0aW9ucyk7XG5cbiAgICBpZiAoYXNPYmplY3QpIHtcbiAgICAgIHBhcmFtcy5wdXNoKHNvdXJjZSk7XG5cbiAgICAgIHJldHVybiBGdW5jdGlvbi5hcHBseSh0aGlzLCBwYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2Uud3JhcChbJ2Z1bmN0aW9uKCcsIHBhcmFtcy5qb2luKCcsJyksICcpIHtcXG4gICcsIHNvdXJjZSwgJ30nXSk7XG4gICAgfVxuICB9LFxuICBtZXJnZVNvdXJjZTogZnVuY3Rpb24odmFyRGVjbGFyYXRpb25zKSB7XG4gICAgbGV0IGlzU2ltcGxlID0gdGhpcy5lbnZpcm9ubWVudC5pc1NpbXBsZSxcbiAgICAgICAgYXBwZW5kT25seSA9ICF0aGlzLmZvcmNlQnVmZmVyLFxuICAgICAgICBhcHBlbmRGaXJzdCxcblxuICAgICAgICBzb3VyY2VTZWVuLFxuICAgICAgICBidWZmZXJTdGFydCxcbiAgICAgICAgYnVmZmVyRW5kO1xuICAgIHRoaXMuc291cmNlLmVhY2goKGxpbmUpID0+IHtcbiAgICAgIGlmIChsaW5lLmFwcGVuZFRvQnVmZmVyKSB7XG4gICAgICAgIGlmIChidWZmZXJTdGFydCkge1xuICAgICAgICAgIGxpbmUucHJlcGVuZCgnICArICcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJ1ZmZlclN0YXJ0ID0gbGluZTtcbiAgICAgICAgfVxuICAgICAgICBidWZmZXJFbmQgPSBsaW5lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGJ1ZmZlclN0YXJ0KSB7XG4gICAgICAgICAgaWYgKCFzb3VyY2VTZWVuKSB7XG4gICAgICAgICAgICBhcHBlbmRGaXJzdCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZmZlclN0YXJ0LnByZXBlbmQoJ2J1ZmZlciArPSAnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnVmZmVyRW5kLmFkZCgnOycpO1xuICAgICAgICAgIGJ1ZmZlclN0YXJ0ID0gYnVmZmVyRW5kID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgc291cmNlU2VlbiA9IHRydWU7XG4gICAgICAgIGlmICghaXNTaW1wbGUpIHtcbiAgICAgICAgICBhcHBlbmRPbmx5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgaWYgKGFwcGVuZE9ubHkpIHtcbiAgICAgIGlmIChidWZmZXJTdGFydCkge1xuICAgICAgICBidWZmZXJTdGFydC5wcmVwZW5kKCdyZXR1cm4gJyk7XG4gICAgICAgIGJ1ZmZlckVuZC5hZGQoJzsnKTtcbiAgICAgIH0gZWxzZSBpZiAoIXNvdXJjZVNlZW4pIHtcbiAgICAgICAgdGhpcy5zb3VyY2UucHVzaCgncmV0dXJuIFwiXCI7Jyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhckRlY2xhcmF0aW9ucyArPSAnLCBidWZmZXIgPSAnICsgKGFwcGVuZEZpcnN0ID8gJycgOiB0aGlzLmluaXRpYWxpemVCdWZmZXIoKSk7XG5cbiAgICAgIGlmIChidWZmZXJTdGFydCkge1xuICAgICAgICBidWZmZXJTdGFydC5wcmVwZW5kKCdyZXR1cm4gYnVmZmVyICsgJyk7XG4gICAgICAgIGJ1ZmZlckVuZC5hZGQoJzsnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc291cmNlLnB1c2goJ3JldHVybiBidWZmZXI7Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhckRlY2xhcmF0aW9ucykge1xuICAgICAgdGhpcy5zb3VyY2UucHJlcGVuZCgndmFyICcgKyB2YXJEZWNsYXJhdGlvbnMuc3Vic3RyaW5nKDIpICsgKGFwcGVuZEZpcnN0ID8gJycgOiAnO1xcbicpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zb3VyY2UubWVyZ2UoKTtcbiAgfSxcblxuICAvLyBbYmxvY2tWYWx1ZV1cbiAgLy9cbiAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgdmFsdWVcbiAgLy8gT24gc3RhY2ssIGFmdGVyOiByZXR1cm4gdmFsdWUgb2YgYmxvY2tIZWxwZXJNaXNzaW5nXG4gIC8vXG4gIC8vIFRoZSBwdXJwb3NlIG9mIHRoaXMgb3Bjb2RlIGlzIHRvIHRha2UgYSBibG9jayBvZiB0aGUgZm9ybVxuICAvLyBge3sjdGhpcy5mb299fS4uLnt7L3RoaXMuZm9vfX1gLCByZXNvbHZlIHRoZSB2YWx1ZSBvZiBgZm9vYCwgYW5kXG4gIC8vIHJlcGxhY2UgaXQgb24gdGhlIHN0YWNrIHdpdGggdGhlIHJlc3VsdCBvZiBwcm9wZXJseVxuICAvLyBpbnZva2luZyBibG9ja0hlbHBlck1pc3NpbmcuXG4gIGJsb2NrVmFsdWU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBsZXQgYmxvY2tIZWxwZXJNaXNzaW5nID0gdGhpcy5hbGlhc2FibGUoJ2hlbHBlcnMuYmxvY2tIZWxwZXJNaXNzaW5nJyksXG4gICAgICAgIHBhcmFtcyA9IFt0aGlzLmNvbnRleHROYW1lKDApXTtcbiAgICB0aGlzLnNldHVwSGVscGVyQXJncyhuYW1lLCAwLCBwYXJhbXMpO1xuXG4gICAgbGV0IGJsb2NrTmFtZSA9IHRoaXMucG9wU3RhY2soKTtcbiAgICBwYXJhbXMuc3BsaWNlKDEsIDAsIGJsb2NrTmFtZSk7XG5cbiAgICB0aGlzLnB1c2godGhpcy5zb3VyY2UuZnVuY3Rpb25DYWxsKGJsb2NrSGVscGVyTWlzc2luZywgJ2NhbGwnLCBwYXJhbXMpKTtcbiAgfSxcblxuICAvLyBbYW1iaWd1b3VzQmxvY2tWYWx1ZV1cbiAgLy9cbiAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgdmFsdWVcbiAgLy8gQ29tcGlsZXIgdmFsdWUsIGJlZm9yZTogbGFzdEhlbHBlcj12YWx1ZSBvZiBsYXN0IGZvdW5kIGhlbHBlciwgaWYgYW55XG4gIC8vIE9uIHN0YWNrLCBhZnRlciwgaWYgbm8gbGFzdEhlbHBlcjogc2FtZSBhcyBbYmxvY2tWYWx1ZV1cbiAgLy8gT24gc3RhY2ssIGFmdGVyLCBpZiBsYXN0SGVscGVyOiB2YWx1ZVxuICBhbWJpZ3VvdXNCbG9ja1ZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAvLyBXZSdyZSBiZWluZyBhIGJpdCBjaGVla3kgYW5kIHJldXNpbmcgdGhlIG9wdGlvbnMgdmFsdWUgZnJvbSB0aGUgcHJpb3IgZXhlY1xuICAgIGxldCBibG9ja0hlbHBlck1pc3NpbmcgPSB0aGlzLmFsaWFzYWJsZSgnaGVscGVycy5ibG9ja0hlbHBlck1pc3NpbmcnKSxcbiAgICAgICAgcGFyYW1zID0gW3RoaXMuY29udGV4dE5hbWUoMCldO1xuICAgIHRoaXMuc2V0dXBIZWxwZXJBcmdzKCcnLCAwLCBwYXJhbXMsIHRydWUpO1xuXG4gICAgdGhpcy5mbHVzaElubGluZSgpO1xuXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLnRvcFN0YWNrKCk7XG4gICAgcGFyYW1zLnNwbGljZSgxLCAwLCBjdXJyZW50KTtcblxuICAgIHRoaXMucHVzaFNvdXJjZShbXG4gICAgICAgICdpZiAoIScsIHRoaXMubGFzdEhlbHBlciwgJykgeyAnLFxuICAgICAgICAgIGN1cnJlbnQsICcgPSAnLCB0aGlzLnNvdXJjZS5mdW5jdGlvbkNhbGwoYmxvY2tIZWxwZXJNaXNzaW5nLCAnY2FsbCcsIHBhcmFtcyksXG4gICAgICAgICd9J10pO1xuICB9LFxuXG4gIC8vIFthcHBlbmRDb250ZW50XVxuICAvL1xuICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cbiAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi5cbiAgLy9cbiAgLy8gQXBwZW5kcyB0aGUgc3RyaW5nIHZhbHVlIG9mIGBjb250ZW50YCB0byB0aGUgY3VycmVudCBidWZmZXJcbiAgYXBwZW5kQ29udGVudDogZnVuY3Rpb24oY29udGVudCkge1xuICAgIGlmICh0aGlzLnBlbmRpbmdDb250ZW50KSB7XG4gICAgICBjb250ZW50ID0gdGhpcy5wZW5kaW5nQ29udGVudCArIGNvbnRlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGVuZGluZ0xvY2F0aW9uID0gdGhpcy5zb3VyY2UuY3VycmVudExvY2F0aW9uO1xuICAgIH1cblxuICAgIHRoaXMucGVuZGluZ0NvbnRlbnQgPSBjb250ZW50O1xuICB9LFxuXG4gIC8vIFthcHBlbmRdXG4gIC8vXG4gIC8vIE9uIHN0YWNrLCBiZWZvcmU6IHZhbHVlLCAuLi5cbiAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi5cbiAgLy9cbiAgLy8gQ29lcmNlcyBgdmFsdWVgIHRvIGEgU3RyaW5nIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBjdXJyZW50IGJ1ZmZlci5cbiAgLy9cbiAgLy8gSWYgYHZhbHVlYCBpcyB0cnV0aHksIG9yIDAsIGl0IGlzIGNvZXJjZWQgaW50byBhIHN0cmluZyBhbmQgYXBwZW5kZWRcbiAgLy8gT3RoZXJ3aXNlLCB0aGUgZW1wdHkgc3RyaW5nIGlzIGFwcGVuZGVkXG4gIGFwcGVuZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaXNJbmxpbmUoKSkge1xuICAgICAgdGhpcy5yZXBsYWNlU3RhY2soKGN1cnJlbnQpID0+IFsnICE9IG51bGwgPyAnLCBjdXJyZW50LCAnIDogXCJcIiddKTtcblxuICAgICAgdGhpcy5wdXNoU291cmNlKHRoaXMuYXBwZW5kVG9CdWZmZXIodGhpcy5wb3BTdGFjaygpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBsb2NhbCA9IHRoaXMucG9wU3RhY2soKTtcbiAgICAgIHRoaXMucHVzaFNvdXJjZShbJ2lmICgnLCBsb2NhbCwgJyAhPSBudWxsKSB7ICcsIHRoaXMuYXBwZW5kVG9CdWZmZXIobG9jYWwsIHVuZGVmaW5lZCwgdHJ1ZSksICcgfSddKTtcbiAgICAgIGlmICh0aGlzLmVudmlyb25tZW50LmlzU2ltcGxlKSB7XG4gICAgICAgIHRoaXMucHVzaFNvdXJjZShbJ2Vsc2UgeyAnLCB0aGlzLmFwcGVuZFRvQnVmZmVyKFwiJydcIiwgdW5kZWZpbmVkLCB0cnVlKSwgJyB9J10pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvLyBbYXBwZW5kRXNjYXBlZF1cbiAgLy9cbiAgLy8gT24gc3RhY2ssIGJlZm9yZTogdmFsdWUsIC4uLlxuICAvLyBPbiBzdGFjaywgYWZ0ZXI6IC4uLlxuICAvL1xuICAvLyBFc2NhcGUgYHZhbHVlYCBhbmQgYXBwZW5kIGl0IHRvIHRoZSBidWZmZXJcbiAgYXBwZW5kRXNjYXBlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5wdXNoU291cmNlKHRoaXMuYXBwZW5kVG9CdWZmZXIoXG4gICAgICAgIFt0aGlzLmFsaWFzYWJsZSgnY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24nKSwgJygnLCB0aGlzLnBvcFN0YWNrKCksICcpJ10pKTtcbiAgfSxcblxuICAvLyBbZ2V0Q29udGV4dF1cbiAgLy9cbiAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG4gIC8vIE9uIHN0YWNrLCBhZnRlcjogLi4uXG4gIC8vIENvbXBpbGVyIHZhbHVlLCBhZnRlcjogbGFzdENvbnRleHQ9ZGVwdGhcbiAgLy9cbiAgLy8gU2V0IHRoZSB2YWx1ZSBvZiB0aGUgYGxhc3RDb250ZXh0YCBjb21waWxlciB2YWx1ZSB0byB0aGUgZGVwdGhcbiAgZ2V0Q29udGV4dDogZnVuY3Rpb24oZGVwdGgpIHtcbiAgICB0aGlzLmxhc3RDb250ZXh0ID0gZGVwdGg7XG4gIH0sXG5cbiAgLy8gW3B1c2hDb250ZXh0XVxuICAvL1xuICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cbiAgLy8gT24gc3RhY2ssIGFmdGVyOiBjdXJyZW50Q29udGV4dCwgLi4uXG4gIC8vXG4gIC8vIFB1c2hlcyB0aGUgdmFsdWUgb2YgdGhlIGN1cnJlbnQgY29udGV4dCBvbnRvIHRoZSBzdGFjay5cbiAgcHVzaENvbnRleHQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCh0aGlzLmNvbnRleHROYW1lKHRoaXMubGFzdENvbnRleHQpKTtcbiAgfSxcblxuICAvLyBbbG9va3VwT25Db250ZXh0XVxuICAvL1xuICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cbiAgLy8gT24gc3RhY2ssIGFmdGVyOiBjdXJyZW50Q29udGV4dFtuYW1lXSwgLi4uXG4gIC8vXG4gIC8vIExvb2tzIHVwIHRoZSB2YWx1ZSBvZiBgbmFtZWAgb24gdGhlIGN1cnJlbnQgY29udGV4dCBhbmQgcHVzaGVzXG4gIC8vIGl0IG9udG8gdGhlIHN0YWNrLlxuICBsb29rdXBPbkNvbnRleHQ6IGZ1bmN0aW9uKHBhcnRzLCBmYWxzeSwgc3RyaWN0LCBzY29wZWQpIHtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICBpZiAoIXNjb3BlZCAmJiB0aGlzLm9wdGlvbnMuY29tcGF0ICYmICF0aGlzLmxhc3RDb250ZXh0KSB7XG4gICAgICAvLyBUaGUgZGVwdGhlZCBxdWVyeSBpcyBleHBlY3RlZCB0byBoYW5kbGUgdGhlIHVuZGVmaW5lZCBsb2dpYyBmb3IgdGhlIHJvb3QgbGV2ZWwgdGhhdFxuICAgICAgLy8gaXMgaW1wbGVtZW50ZWQgYmVsb3csIHNvIHdlIGV2YWx1YXRlIHRoYXQgZGlyZWN0bHkgaW4gY29tcGF0IG1vZGVcbiAgICAgIHRoaXMucHVzaCh0aGlzLmRlcHRoZWRMb29rdXAocGFydHNbaSsrXSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnB1c2hDb250ZXh0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZXNvbHZlUGF0aCgnY29udGV4dCcsIHBhcnRzLCBpLCBmYWxzeSwgc3RyaWN0KTtcbiAgfSxcblxuICAvLyBbbG9va3VwQmxvY2tQYXJhbV1cbiAgLy9cbiAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG4gIC8vIE9uIHN0YWNrLCBhZnRlcjogYmxvY2tQYXJhbVtuYW1lXSwgLi4uXG4gIC8vXG4gIC8vIExvb2tzIHVwIHRoZSB2YWx1ZSBvZiBgcGFydHNgIG9uIHRoZSBnaXZlbiBibG9jayBwYXJhbSBhbmQgcHVzaGVzXG4gIC8vIGl0IG9udG8gdGhlIHN0YWNrLlxuICBsb29rdXBCbG9ja1BhcmFtOiBmdW5jdGlvbihibG9ja1BhcmFtSWQsIHBhcnRzKSB7XG4gICAgdGhpcy51c2VCbG9ja1BhcmFtcyA9IHRydWU7XG5cbiAgICB0aGlzLnB1c2goWydibG9ja1BhcmFtc1snLCBibG9ja1BhcmFtSWRbMF0sICddWycsIGJsb2NrUGFyYW1JZFsxXSwgJ10nXSk7XG4gICAgdGhpcy5yZXNvbHZlUGF0aCgnY29udGV4dCcsIHBhcnRzLCAxKTtcbiAgfSxcblxuICAvLyBbbG9va3VwRGF0YV1cbiAgLy9cbiAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG4gIC8vIE9uIHN0YWNrLCBhZnRlcjogZGF0YSwgLi4uXG4gIC8vXG4gIC8vIFB1c2ggdGhlIGRhdGEgbG9va3VwIG9wZXJhdG9yXG4gIGxvb2t1cERhdGE6IGZ1bmN0aW9uKGRlcHRoLCBwYXJ0cywgc3RyaWN0KSB7XG4gICAgaWYgKCFkZXB0aCkge1xuICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKCdkYXRhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCgnY29udGFpbmVyLmRhdGEoZGF0YSwgJyArIGRlcHRoICsgJyknKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlc29sdmVQYXRoKCdkYXRhJywgcGFydHMsIDAsIHRydWUsIHN0cmljdCk7XG4gIH0sXG5cbiAgcmVzb2x2ZVBhdGg6IGZ1bmN0aW9uKHR5cGUsIHBhcnRzLCBpLCBmYWxzeSwgc3RyaWN0KSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zdHJpY3QgfHwgdGhpcy5vcHRpb25zLmFzc3VtZU9iamVjdHMpIHtcbiAgICAgIHRoaXMucHVzaChzdHJpY3RMb29rdXAodGhpcy5vcHRpb25zLnN0cmljdCAmJiBzdHJpY3QsIHRoaXMsIHBhcnRzLCB0eXBlKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxlbiA9IHBhcnRzLmxlbmd0aDtcbiAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1sb29wLWZ1bmMgKi9cbiAgICAgIHRoaXMucmVwbGFjZVN0YWNrKChjdXJyZW50KSA9PiB7XG4gICAgICAgIGxldCBsb29rdXAgPSB0aGlzLm5hbWVMb29rdXAoY3VycmVudCwgcGFydHNbaV0sIHR5cGUpO1xuICAgICAgICAvLyBXZSB3YW50IHRvIGVuc3VyZSB0aGF0IHplcm8gYW5kIGZhbHNlIGFyZSBoYW5kbGVkIHByb3Blcmx5IGlmIHRoZSBjb250ZXh0IChmYWxzeSBmbGFnKVxuICAgICAgICAvLyBuZWVkcyB0byBoYXZlIHRoZSBzcGVjaWFsIGhhbmRsaW5nIGZvciB0aGVzZSB2YWx1ZXMuXG4gICAgICAgIGlmICghZmFsc3kpIHtcbiAgICAgICAgICByZXR1cm4gWycgIT0gbnVsbCA/ICcsIGxvb2t1cCwgJyA6ICcsIGN1cnJlbnRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSB3ZSBjYW4gdXNlIGdlbmVyaWMgZmFsc3kgaGFuZGxpbmdcbiAgICAgICAgICByZXR1cm4gWycgJiYgJywgbG9va3VwXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWxvb3AtZnVuYyAqL1xuICAgIH1cbiAgfSxcblxuICAvLyBbcmVzb2x2ZVBvc3NpYmxlTGFtYmRhXVxuICAvL1xuICAvLyBPbiBzdGFjaywgYmVmb3JlOiB2YWx1ZSwgLi4uXG4gIC8vIE9uIHN0YWNrLCBhZnRlcjogcmVzb2x2ZWQgdmFsdWUsIC4uLlxuICAvL1xuICAvLyBJZiB0aGUgYHZhbHVlYCBpcyBhIGxhbWJkYSwgcmVwbGFjZSBpdCBvbiB0aGUgc3RhY2sgYnlcbiAgLy8gdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgbGFtYmRhXG4gIHJlc29sdmVQb3NzaWJsZUxhbWJkYTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5wdXNoKFt0aGlzLmFsaWFzYWJsZSgnY29udGFpbmVyLmxhbWJkYScpLCAnKCcsIHRoaXMucG9wU3RhY2soKSwgJywgJywgdGhpcy5jb250ZXh0TmFtZSgwKSwgJyknXSk7XG4gIH0sXG5cbiAgZW1wdHlIYXNoOiBmdW5jdGlvbihvbWl0RW1wdHkpIHtcbiAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwob21pdEVtcHR5ID8gJ3VuZGVmaW5lZCcgOiAne30nKTtcbiAgfSxcbiAgcHVzaEhhc2g6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmhhc2gpIHtcbiAgICAgIHRoaXMuaGFzaGVzLnB1c2godGhpcy5oYXNoKTtcbiAgICB9XG4gICAgdGhpcy5oYXNoID0ge3ZhbHVlczoge319O1xuICB9LFxuICBwb3BIYXNoOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaGFzaCA9IHRoaXMuaGFzaDtcbiAgICB0aGlzLmhhc2ggPSB0aGlzLmhhc2hlcy5wb3AoKTtcblxuICAgIHRoaXMucHVzaCh0aGlzLm9iamVjdExpdGVyYWwoaGFzaC52YWx1ZXMpKTtcbiAgfSxcblxuICAvLyBbcHVzaFN0cmluZ11cbiAgLy9cbiAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG4gIC8vIE9uIHN0YWNrLCBhZnRlcjogcXVvdGVkU3RyaW5nKHN0cmluZyksIC4uLlxuICAvL1xuICAvLyBQdXNoIGEgcXVvdGVkIHZlcnNpb24gb2YgYHN0cmluZ2Agb250byB0aGUgc3RhY2tcbiAgcHVzaFN0cmluZzogZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKHRoaXMucXVvdGVkU3RyaW5nKHN0cmluZykpO1xuICB9LFxuXG4gIC8vIFtwdXNoTGl0ZXJhbF1cbiAgLy9cbiAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG4gIC8vIE9uIHN0YWNrLCBhZnRlcjogdmFsdWUsIC4uLlxuICAvL1xuICAvLyBQdXNoZXMgYSB2YWx1ZSBvbnRvIHRoZSBzdGFjay4gVGhpcyBvcGVyYXRpb24gcHJldmVudHNcbiAgLy8gdGhlIGNvbXBpbGVyIGZyb20gY3JlYXRpbmcgYSB0ZW1wb3JhcnkgdmFyaWFibGUgdG8gaG9sZFxuICAvLyBpdC5cbiAgcHVzaExpdGVyYWw6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKHZhbHVlKTtcbiAgfSxcblxuICAvLyBbcHVzaFByb2dyYW1dXG4gIC8vXG4gIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHByb2dyYW0oZ3VpZCksIC4uLlxuICAvL1xuICAvLyBQdXNoIGEgcHJvZ3JhbSBleHByZXNzaW9uIG9udG8gdGhlIHN0YWNrLiBUaGlzIHRha2VzXG4gIC8vIGEgY29tcGlsZS10aW1lIGd1aWQgYW5kIGNvbnZlcnRzIGl0IGludG8gYSBydW50aW1lLWFjY2Vzc2libGVcbiAgLy8gZXhwcmVzc2lvbi5cbiAgcHVzaFByb2dyYW06IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICBpZiAoZ3VpZCAhPSBudWxsKSB7XG4gICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwodGhpcy5wcm9ncmFtRXhwcmVzc2lvbihndWlkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbChudWxsKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gW3JlZ2lzdGVyRGVjb3JhdG9yXVxuICAvL1xuICAvLyBPbiBzdGFjaywgYmVmb3JlOiBoYXNoLCBwcm9ncmFtLCBwYXJhbXMuLi4sIC4uLlxuICAvLyBPbiBzdGFjaywgYWZ0ZXI6IC4uLlxuICAvL1xuICAvLyBQb3BzIG9mZiB0aGUgZGVjb3JhdG9yJ3MgcGFyYW1ldGVycywgaW52b2tlcyB0aGUgZGVjb3JhdG9yLFxuICAvLyBhbmQgaW5zZXJ0cyB0aGUgZGVjb3JhdG9yIGludG8gdGhlIGRlY29yYXRvcnMgbGlzdC5cbiAgcmVnaXN0ZXJEZWNvcmF0b3IocGFyYW1TaXplLCBuYW1lKSB7XG4gICAgbGV0IGZvdW5kRGVjb3JhdG9yID0gdGhpcy5uYW1lTG9va3VwKCdkZWNvcmF0b3JzJywgbmFtZSwgJ2RlY29yYXRvcicpLFxuICAgICAgICBvcHRpb25zID0gdGhpcy5zZXR1cEhlbHBlckFyZ3MobmFtZSwgcGFyYW1TaXplKTtcblxuICAgIHRoaXMuZGVjb3JhdG9ycy5wdXNoKFtcbiAgICAgICdmbiA9ICcsXG4gICAgICB0aGlzLmRlY29yYXRvcnMuZnVuY3Rpb25DYWxsKGZvdW5kRGVjb3JhdG9yLCAnJywgWydmbicsICdwcm9wcycsICdjb250YWluZXInLCBvcHRpb25zXSksXG4gICAgICAnIHx8IGZuOydcbiAgICBdKTtcbiAgfSxcblxuICAvLyBbaW52b2tlSGVscGVyXVxuICAvL1xuICAvLyBPbiBzdGFjaywgYmVmb3JlOiBoYXNoLCBpbnZlcnNlLCBwcm9ncmFtLCBwYXJhbXMuLi4sIC4uLlxuICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHJlc3VsdCBvZiBoZWxwZXIgaW52b2NhdGlvblxuICAvL1xuICAvLyBQb3BzIG9mZiB0aGUgaGVscGVyJ3MgcGFyYW1ldGVycywgaW52b2tlcyB0aGUgaGVscGVyLFxuICAvLyBhbmQgcHVzaGVzIHRoZSBoZWxwZXIncyByZXR1cm4gdmFsdWUgb250byB0aGUgc3RhY2suXG4gIC8vXG4gIC8vIElmIHRoZSBoZWxwZXIgaXMgbm90IGZvdW5kLCBgaGVscGVyTWlzc2luZ2AgaXMgY2FsbGVkLlxuICBpbnZva2VIZWxwZXI6IGZ1bmN0aW9uKHBhcmFtU2l6ZSwgbmFtZSwgaXNTaW1wbGUpIHtcbiAgICBsZXQgbm9uSGVscGVyID0gdGhpcy5wb3BTdGFjaygpLFxuICAgICAgICBoZWxwZXIgPSB0aGlzLnNldHVwSGVscGVyKHBhcmFtU2l6ZSwgbmFtZSksXG4gICAgICAgIHNpbXBsZSA9IGlzU2ltcGxlID8gW2hlbHBlci5uYW1lLCAnIHx8ICddIDogJyc7XG5cbiAgICBsZXQgbG9va3VwID0gWycoJ10uY29uY2F0KHNpbXBsZSwgbm9uSGVscGVyKTtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5zdHJpY3QpIHtcbiAgICAgIGxvb2t1cC5wdXNoKCcgfHwgJywgdGhpcy5hbGlhc2FibGUoJ2hlbHBlcnMuaGVscGVyTWlzc2luZycpKTtcbiAgICB9XG4gICAgbG9va3VwLnB1c2goJyknKTtcblxuICAgIHRoaXMucHVzaCh0aGlzLnNvdXJjZS5mdW5jdGlvbkNhbGwobG9va3VwLCAnY2FsbCcsIGhlbHBlci5jYWxsUGFyYW1zKSk7XG4gIH0sXG5cbiAgLy8gW2ludm9rZUtub3duSGVscGVyXVxuICAvL1xuICAvLyBPbiBzdGFjaywgYmVmb3JlOiBoYXNoLCBpbnZlcnNlLCBwcm9ncmFtLCBwYXJhbXMuLi4sIC4uLlxuICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHJlc3VsdCBvZiBoZWxwZXIgaW52b2NhdGlvblxuICAvL1xuICAvLyBUaGlzIG9wZXJhdGlvbiBpcyB1c2VkIHdoZW4gdGhlIGhlbHBlciBpcyBrbm93biB0byBleGlzdCxcbiAgLy8gc28gYSBgaGVscGVyTWlzc2luZ2AgZmFsbGJhY2sgaXMgbm90IHJlcXVpcmVkLlxuICBpbnZva2VLbm93bkhlbHBlcjogZnVuY3Rpb24ocGFyYW1TaXplLCBuYW1lKSB7XG4gICAgbGV0IGhlbHBlciA9IHRoaXMuc2V0dXBIZWxwZXIocGFyYW1TaXplLCBuYW1lKTtcbiAgICB0aGlzLnB1c2godGhpcy5zb3VyY2UuZnVuY3Rpb25DYWxsKGhlbHBlci5uYW1lLCAnY2FsbCcsIGhlbHBlci5jYWxsUGFyYW1zKSk7XG4gIH0sXG5cbiAgLy8gW2ludm9rZUFtYmlndW91c11cbiAgLy9cbiAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgcGFyYW1zLi4uLCAuLi5cbiAgLy8gT24gc3RhY2ssIGFmdGVyOiByZXN1bHQgb2YgZGlzYW1iaWd1YXRpb25cbiAgLy9cbiAgLy8gVGhpcyBvcGVyYXRpb24gaXMgdXNlZCB3aGVuIGFuIGV4cHJlc3Npb24gbGlrZSBge3tmb299fWBcbiAgLy8gaXMgcHJvdmlkZWQsIGJ1dCB3ZSBkb24ndCBrbm93IGF0IGNvbXBpbGUtdGltZSB3aGV0aGVyIGl0XG4gIC8vIGlzIGEgaGVscGVyIG9yIGEgcGF0aC5cbiAgLy9cbiAgLy8gVGhpcyBvcGVyYXRpb24gZW1pdHMgbW9yZSBjb2RlIHRoYW4gdGhlIG90aGVyIG9wdGlvbnMsXG4gIC8vIGFuZCBjYW4gYmUgYXZvaWRlZCBieSBwYXNzaW5nIHRoZSBga25vd25IZWxwZXJzYCBhbmRcbiAgLy8gYGtub3duSGVscGVyc09ubHlgIGZsYWdzIGF0IGNvbXBpbGUtdGltZS5cbiAgaW52b2tlQW1iaWd1b3VzOiBmdW5jdGlvbihuYW1lLCBoZWxwZXJDYWxsKSB7XG4gICAgdGhpcy51c2VSZWdpc3RlcignaGVscGVyJyk7XG5cbiAgICBsZXQgbm9uSGVscGVyID0gdGhpcy5wb3BTdGFjaygpO1xuXG4gICAgdGhpcy5lbXB0eUhhc2goKTtcbiAgICBsZXQgaGVscGVyID0gdGhpcy5zZXR1cEhlbHBlcigwLCBuYW1lLCBoZWxwZXJDYWxsKTtcblxuICAgIGxldCBoZWxwZXJOYW1lID0gdGhpcy5sYXN0SGVscGVyID0gdGhpcy5uYW1lTG9va3VwKCdoZWxwZXJzJywgbmFtZSwgJ2hlbHBlcicpO1xuXG4gICAgbGV0IGxvb2t1cCA9IFsnKCcsICcoaGVscGVyID0gJywgaGVscGVyTmFtZSwgJyB8fCAnLCBub25IZWxwZXIsICcpJ107XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuc3RyaWN0KSB7XG4gICAgICBsb29rdXBbMF0gPSAnKGhlbHBlciA9ICc7XG4gICAgICBsb29rdXAucHVzaChcbiAgICAgICAgJyAhPSBudWxsID8gaGVscGVyIDogJyxcbiAgICAgICAgdGhpcy5hbGlhc2FibGUoJ2hlbHBlcnMuaGVscGVyTWlzc2luZycpXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMucHVzaChbXG4gICAgICAgICcoJywgbG9va3VwLFxuICAgICAgICAoaGVscGVyLnBhcmFtc0luaXQgPyBbJyksKCcsIGhlbHBlci5wYXJhbXNJbml0XSA6IFtdKSwgJyksJyxcbiAgICAgICAgJyh0eXBlb2YgaGVscGVyID09PSAnLCB0aGlzLmFsaWFzYWJsZSgnXCJmdW5jdGlvblwiJyksICcgPyAnLFxuICAgICAgICB0aGlzLnNvdXJjZS5mdW5jdGlvbkNhbGwoJ2hlbHBlcicsICdjYWxsJywgaGVscGVyLmNhbGxQYXJhbXMpLCAnIDogaGVscGVyKSknXG4gICAgXSk7XG4gIH0sXG5cbiAgLy8gW2ludm9rZVBhcnRpYWxdXG4gIC8vXG4gIC8vIE9uIHN0YWNrLCBiZWZvcmU6IGNvbnRleHQsIC4uLlxuICAvLyBPbiBzdGFjayBhZnRlcjogcmVzdWx0IG9mIHBhcnRpYWwgaW52b2NhdGlvblxuICAvL1xuICAvLyBUaGlzIG9wZXJhdGlvbiBwb3BzIG9mZiBhIGNvbnRleHQsIGludm9rZXMgYSBwYXJ0aWFsIHdpdGggdGhhdCBjb250ZXh0LFxuICAvLyBhbmQgcHVzaGVzIHRoZSByZXN1bHQgb2YgdGhlIGludm9jYXRpb24gYmFjay5cbiAgaW52b2tlUGFydGlhbDogZnVuY3Rpb24oaXNEeW5hbWljLCBuYW1lLCBpbmRlbnQpIHtcbiAgICBsZXQgcGFyYW1zID0gW10sXG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLnNldHVwUGFyYW1zKG5hbWUsIDEsIHBhcmFtcyk7XG5cbiAgICBpZiAoaXNEeW5hbWljKSB7XG4gICAgICBuYW1lID0gdGhpcy5wb3BTdGFjaygpO1xuICAgICAgZGVsZXRlIG9wdGlvbnMubmFtZTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZW50KSB7XG4gICAgICBvcHRpb25zLmluZGVudCA9IEpTT04uc3RyaW5naWZ5KGluZGVudCk7XG4gICAgfVxuICAgIG9wdGlvbnMuaGVscGVycyA9ICdoZWxwZXJzJztcbiAgICBvcHRpb25zLnBhcnRpYWxzID0gJ3BhcnRpYWxzJztcbiAgICBvcHRpb25zLmRlY29yYXRvcnMgPSAnY29udGFpbmVyLmRlY29yYXRvcnMnO1xuXG4gICAgaWYgKCFpc0R5bmFtaWMpIHtcbiAgICAgIHBhcmFtcy51bnNoaWZ0KHRoaXMubmFtZUxvb2t1cCgncGFydGlhbHMnLCBuYW1lLCAncGFydGlhbCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1zLnVuc2hpZnQobmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb21wYXQpIHtcbiAgICAgIG9wdGlvbnMuZGVwdGhzID0gJ2RlcHRocyc7XG4gICAgfVxuICAgIG9wdGlvbnMgPSB0aGlzLm9iamVjdExpdGVyYWwob3B0aW9ucyk7XG4gICAgcGFyYW1zLnB1c2gob3B0aW9ucyk7XG5cbiAgICB0aGlzLnB1c2godGhpcy5zb3VyY2UuZnVuY3Rpb25DYWxsKCdjb250YWluZXIuaW52b2tlUGFydGlhbCcsICcnLCBwYXJhbXMpKTtcbiAgfSxcblxuICAvLyBbYXNzaWduVG9IYXNoXVxuICAvL1xuICAvLyBPbiBzdGFjaywgYmVmb3JlOiB2YWx1ZSwgLi4uLCBoYXNoLCAuLi5cbiAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi4sIGhhc2gsIC4uLlxuICAvL1xuICAvLyBQb3BzIGEgdmFsdWUgb2ZmIHRoZSBzdGFjayBhbmQgYXNzaWducyBpdCB0byB0aGUgY3VycmVudCBoYXNoXG4gIGFzc2lnblRvSGFzaDogZnVuY3Rpb24oa2V5KSB7XG4gICAgdGhpcy5oYXNoLnZhbHVlc1trZXldID0gdGhpcy5wb3BTdGFjaygpO1xuICB9LFxuXG4gIC8vIEhFTFBFUlNcblxuICBjb21waWxlcjogSmF2YVNjcmlwdENvbXBpbGVyLFxuXG4gIGNvbXBpbGVDaGlsZHJlbjogZnVuY3Rpb24oZW52aXJvbm1lbnQsIG9wdGlvbnMpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSBlbnZpcm9ubWVudC5jaGlsZHJlbiwgY2hpbGQsIGNvbXBpbGVyO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBjb21waWxlciA9IG5ldyB0aGlzLmNvbXBpbGVyKCk7ICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxuXG4gICAgICBsZXQgZXhpc3RpbmcgPSB0aGlzLm1hdGNoRXhpc3RpbmdQcm9ncmFtKGNoaWxkKTtcblxuICAgICAgaWYgKGV4aXN0aW5nID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnByb2dyYW1zLnB1c2goJycpOyAgICAgLy8gUGxhY2Vob2xkZXIgdG8gcHJldmVudCBuYW1lIGNvbmZsaWN0cyBmb3IgbmVzdGVkIGNoaWxkcmVuXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuY29udGV4dC5wcm9ncmFtcy5sZW5ndGg7XG4gICAgICAgIGNoaWxkLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIGNoaWxkLm5hbWUgPSAncHJvZ3JhbScgKyBpbmRleDtcbiAgICAgICAgdGhpcy5jb250ZXh0LnByb2dyYW1zW2luZGV4XSA9IGNvbXBpbGVyLmNvbXBpbGUoY2hpbGQsIG9wdGlvbnMsIHRoaXMuY29udGV4dCwgIXRoaXMucHJlY29tcGlsZSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5kZWNvcmF0b3JzW2luZGV4XSA9IGNvbXBpbGVyLmRlY29yYXRvcnM7XG4gICAgICAgIHRoaXMuY29udGV4dC5lbnZpcm9ubWVudHNbaW5kZXhdID0gY2hpbGQ7XG5cbiAgICAgICAgdGhpcy51c2VEZXB0aHMgPSB0aGlzLnVzZURlcHRocyB8fCBjb21waWxlci51c2VEZXB0aHM7XG4gICAgICAgIHRoaXMudXNlQmxvY2tQYXJhbXMgPSB0aGlzLnVzZUJsb2NrUGFyYW1zIHx8IGNvbXBpbGVyLnVzZUJsb2NrUGFyYW1zO1xuICAgICAgICBjaGlsZC51c2VEZXB0aHMgPSB0aGlzLnVzZURlcHRocztcbiAgICAgICAgY2hpbGQudXNlQmxvY2tQYXJhbXMgPSB0aGlzLnVzZUJsb2NrUGFyYW1zO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQuaW5kZXggPSBleGlzdGluZy5pbmRleDtcbiAgICAgICAgY2hpbGQubmFtZSA9ICdwcm9ncmFtJyArIGV4aXN0aW5nLmluZGV4O1xuXG4gICAgICAgIHRoaXMudXNlRGVwdGhzID0gdGhpcy51c2VEZXB0aHMgfHwgZXhpc3RpbmcudXNlRGVwdGhzO1xuICAgICAgICB0aGlzLnVzZUJsb2NrUGFyYW1zID0gdGhpcy51c2VCbG9ja1BhcmFtcyB8fCBleGlzdGluZy51c2VCbG9ja1BhcmFtcztcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1hdGNoRXhpc3RpbmdQcm9ncmFtOiBmdW5jdGlvbihjaGlsZCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmNvbnRleHQuZW52aXJvbm1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBsZXQgZW52aXJvbm1lbnQgPSB0aGlzLmNvbnRleHQuZW52aXJvbm1lbnRzW2ldO1xuICAgICAgaWYgKGVudmlyb25tZW50ICYmIGVudmlyb25tZW50LmVxdWFscyhjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIGVudmlyb25tZW50O1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBwcm9ncmFtRXhwcmVzc2lvbjogZnVuY3Rpb24oZ3VpZCkge1xuICAgIGxldCBjaGlsZCA9IHRoaXMuZW52aXJvbm1lbnQuY2hpbGRyZW5bZ3VpZF0sXG4gICAgICAgIHByb2dyYW1QYXJhbXMgPSBbY2hpbGQuaW5kZXgsICdkYXRhJywgY2hpbGQuYmxvY2tQYXJhbXNdO1xuXG4gICAgaWYgKHRoaXMudXNlQmxvY2tQYXJhbXMgfHwgdGhpcy51c2VEZXB0aHMpIHtcbiAgICAgIHByb2dyYW1QYXJhbXMucHVzaCgnYmxvY2tQYXJhbXMnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudXNlRGVwdGhzKSB7XG4gICAgICBwcm9ncmFtUGFyYW1zLnB1c2goJ2RlcHRocycpO1xuICAgIH1cblxuICAgIHJldHVybiAnY29udGFpbmVyLnByb2dyYW0oJyArIHByb2dyYW1QYXJhbXMuam9pbignLCAnKSArICcpJztcbiAgfSxcblxuICB1c2VSZWdpc3RlcjogZnVuY3Rpb24obmFtZSkge1xuICAgIGlmICghdGhpcy5yZWdpc3RlcnNbbmFtZV0pIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJzW25hbWVdID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVnaXN0ZXJzLmxpc3QucHVzaChuYW1lKTtcbiAgICB9XG4gIH0sXG5cbiAgcHVzaDogZnVuY3Rpb24oZXhwcikge1xuICAgIGlmICghKGV4cHIgaW5zdGFuY2VvZiBMaXRlcmFsKSkge1xuICAgICAgZXhwciA9IHRoaXMuc291cmNlLndyYXAoZXhwcik7XG4gICAgfVxuXG4gICAgdGhpcy5pbmxpbmVTdGFjay5wdXNoKGV4cHIpO1xuICAgIHJldHVybiBleHByO1xuICB9LFxuXG4gIHB1c2hTdGFja0xpdGVyYWw6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICB0aGlzLnB1c2gobmV3IExpdGVyYWwoaXRlbSkpO1xuICB9LFxuXG4gIHB1c2hTb3VyY2U6IGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgIGlmICh0aGlzLnBlbmRpbmdDb250ZW50KSB7XG4gICAgICB0aGlzLnNvdXJjZS5wdXNoKFxuICAgICAgICAgIHRoaXMuYXBwZW5kVG9CdWZmZXIodGhpcy5zb3VyY2UucXVvdGVkU3RyaW5nKHRoaXMucGVuZGluZ0NvbnRlbnQpLCB0aGlzLnBlbmRpbmdMb2NhdGlvbikpO1xuICAgICAgdGhpcy5wZW5kaW5nQ29udGVudCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlKSB7XG4gICAgICB0aGlzLnNvdXJjZS5wdXNoKHNvdXJjZSk7XG4gICAgfVxuICB9LFxuXG4gIHJlcGxhY2VTdGFjazogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBsZXQgcHJlZml4ID0gWycoJ10sXG4gICAgICAgIHN0YWNrLFxuICAgICAgICBjcmVhdGVkU3RhY2ssXG4gICAgICAgIHVzZWRMaXRlcmFsO1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAoIXRoaXMuaXNJbmxpbmUoKSkge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbigncmVwbGFjZVN0YWNrIG9uIG5vbi1pbmxpbmUnKTtcbiAgICB9XG5cbiAgICAvLyBXZSB3YW50IHRvIG1lcmdlIHRoZSBpbmxpbmUgc3RhdGVtZW50IGludG8gdGhlIHJlcGxhY2VtZW50IHN0YXRlbWVudCB2aWEgJywnXG4gICAgbGV0IHRvcCA9IHRoaXMucG9wU3RhY2sodHJ1ZSk7XG5cbiAgICBpZiAodG9wIGluc3RhbmNlb2YgTGl0ZXJhbCkge1xuICAgICAgLy8gTGl0ZXJhbHMgZG8gbm90IG5lZWQgdG8gYmUgaW5saW5lZFxuICAgICAgc3RhY2sgPSBbdG9wLnZhbHVlXTtcbiAgICAgIHByZWZpeCA9IFsnKCcsIHN0YWNrXTtcbiAgICAgIHVzZWRMaXRlcmFsID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gR2V0IG9yIGNyZWF0ZSB0aGUgY3VycmVudCBzdGFjayBuYW1lIGZvciB1c2UgYnkgdGhlIGlubGluZVxuICAgICAgY3JlYXRlZFN0YWNrID0gdHJ1ZTtcbiAgICAgIGxldCBuYW1lID0gdGhpcy5pbmNyU3RhY2soKTtcblxuICAgICAgcHJlZml4ID0gWycoKCcsIHRoaXMucHVzaChuYW1lKSwgJyA9ICcsIHRvcCwgJyknXTtcbiAgICAgIHN0YWNrID0gdGhpcy50b3BTdGFjaygpO1xuICAgIH1cblxuICAgIGxldCBpdGVtID0gY2FsbGJhY2suY2FsbCh0aGlzLCBzdGFjayk7XG5cbiAgICBpZiAoIXVzZWRMaXRlcmFsKSB7XG4gICAgICB0aGlzLnBvcFN0YWNrKCk7XG4gICAgfVxuICAgIGlmIChjcmVhdGVkU3RhY2spIHtcbiAgICAgIHRoaXMuc3RhY2tTbG90LS07XG4gICAgfVxuICAgIHRoaXMucHVzaChwcmVmaXguY29uY2F0KGl0ZW0sICcpJykpO1xuICB9LFxuXG4gIGluY3JTdGFjazogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdGFja1Nsb3QrKztcbiAgICBpZiAodGhpcy5zdGFja1Nsb3QgPiB0aGlzLnN0YWNrVmFycy5sZW5ndGgpIHsgdGhpcy5zdGFja1ZhcnMucHVzaCgnc3RhY2snICsgdGhpcy5zdGFja1Nsb3QpOyB9XG4gICAgcmV0dXJuIHRoaXMudG9wU3RhY2tOYW1lKCk7XG4gIH0sXG4gIHRvcFN0YWNrTmFtZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICdzdGFjaycgKyB0aGlzLnN0YWNrU2xvdDtcbiAgfSxcbiAgZmx1c2hJbmxpbmU6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBpbmxpbmVTdGFjayA9IHRoaXMuaW5saW5lU3RhY2s7XG4gICAgdGhpcy5pbmxpbmVTdGFjayA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBpbmxpbmVTdGFjay5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgbGV0IGVudHJ5ID0gaW5saW5lU3RhY2tbaV07XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChlbnRyeSBpbnN0YW5jZW9mIExpdGVyYWwpIHtcbiAgICAgICAgdGhpcy5jb21waWxlU3RhY2sucHVzaChlbnRyeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgc3RhY2sgPSB0aGlzLmluY3JTdGFjaygpO1xuICAgICAgICB0aGlzLnB1c2hTb3VyY2UoW3N0YWNrLCAnID0gJywgZW50cnksICc7J10pO1xuICAgICAgICB0aGlzLmNvbXBpbGVTdGFjay5wdXNoKHN0YWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGlzSW5saW5lOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbmxpbmVTdGFjay5sZW5ndGg7XG4gIH0sXG5cbiAgcG9wU3RhY2s6IGZ1bmN0aW9uKHdyYXBwZWQpIHtcbiAgICBsZXQgaW5saW5lID0gdGhpcy5pc0lubGluZSgpLFxuICAgICAgICBpdGVtID0gKGlubGluZSA/IHRoaXMuaW5saW5lU3RhY2sgOiB0aGlzLmNvbXBpbGVTdGFjaykucG9wKCk7XG5cbiAgICBpZiAoIXdyYXBwZWQgJiYgKGl0ZW0gaW5zdGFuY2VvZiBMaXRlcmFsKSkge1xuICAgICAgcmV0dXJuIGl0ZW0udmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghaW5saW5lKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGlmICghdGhpcy5zdGFja1Nsb3QpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdJbnZhbGlkIHN0YWNrIHBvcCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhY2tTbG90LS07XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gIH0sXG5cbiAgdG9wU3RhY2s6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBzdGFjayA9ICh0aGlzLmlzSW5saW5lKCkgPyB0aGlzLmlubGluZVN0YWNrIDogdGhpcy5jb21waWxlU3RhY2spLFxuICAgICAgICBpdGVtID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIExpdGVyYWwpIHtcbiAgICAgIHJldHVybiBpdGVtLnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gIH0sXG5cbiAgY29udGV4dE5hbWU6IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICBpZiAodGhpcy51c2VEZXB0aHMgJiYgY29udGV4dCkge1xuICAgICAgcmV0dXJuICdkZXB0aHNbJyArIGNvbnRleHQgKyAnXSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnZGVwdGgnICsgY29udGV4dDtcbiAgICB9XG4gIH0sXG5cbiAgcXVvdGVkU3RyaW5nOiBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2UucXVvdGVkU3RyaW5nKHN0cik7XG4gIH0sXG5cbiAgb2JqZWN0TGl0ZXJhbDogZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlLm9iamVjdExpdGVyYWwob2JqKTtcbiAgfSxcblxuICBhbGlhc2FibGU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBsZXQgcmV0ID0gdGhpcy5hbGlhc2VzW25hbWVdO1xuICAgIGlmIChyZXQpIHtcbiAgICAgIHJldC5yZWZlcmVuY2VDb3VudCsrO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICByZXQgPSB0aGlzLmFsaWFzZXNbbmFtZV0gPSB0aGlzLnNvdXJjZS53cmFwKG5hbWUpO1xuICAgIHJldC5hbGlhc2FibGUgPSB0cnVlO1xuICAgIHJldC5yZWZlcmVuY2VDb3VudCA9IDE7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9LFxuXG4gIHNldHVwSGVscGVyOiBmdW5jdGlvbihwYXJhbVNpemUsIG5hbWUsIGJsb2NrSGVscGVyKSB7XG4gICAgbGV0IHBhcmFtcyA9IFtdLFxuICAgICAgICBwYXJhbXNJbml0ID0gdGhpcy5zZXR1cEhlbHBlckFyZ3MobmFtZSwgcGFyYW1TaXplLCBwYXJhbXMsIGJsb2NrSGVscGVyKTtcbiAgICBsZXQgZm91bmRIZWxwZXIgPSB0aGlzLm5hbWVMb29rdXAoJ2hlbHBlcnMnLCBuYW1lLCAnaGVscGVyJyksXG4gICAgICAgIGNhbGxDb250ZXh0ID0gdGhpcy5hbGlhc2FibGUoYCR7dGhpcy5jb250ZXh0TmFtZSgwKX0gIT0gbnVsbCA/ICR7dGhpcy5jb250ZXh0TmFtZSgwKX0gOiB7fWApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgcGFyYW1zSW5pdDogcGFyYW1zSW5pdCxcbiAgICAgIG5hbWU6IGZvdW5kSGVscGVyLFxuICAgICAgY2FsbFBhcmFtczogW2NhbGxDb250ZXh0XS5jb25jYXQocGFyYW1zKVxuICAgIH07XG4gIH0sXG5cbiAgc2V0dXBQYXJhbXM6IGZ1bmN0aW9uKGhlbHBlciwgcGFyYW1TaXplLCBwYXJhbXMpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHt9LFxuICAgICAgICBvYmplY3RBcmdzID0gIXBhcmFtcyxcbiAgICAgICAgcGFyYW07XG5cbiAgICBpZiAob2JqZWN0QXJncykge1xuICAgICAgcGFyYW1zID0gW107XG4gICAgfVxuXG4gICAgb3B0aW9ucy5uYW1lID0gdGhpcy5xdW90ZWRTdHJpbmcoaGVscGVyKTtcbiAgICBvcHRpb25zLmhhc2ggPSB0aGlzLnBvcFN0YWNrKCk7XG5cbiAgICBsZXQgaW52ZXJzZSA9IHRoaXMucG9wU3RhY2soKSxcbiAgICAgICAgcHJvZ3JhbSA9IHRoaXMucG9wU3RhY2soKTtcblxuICAgIC8vIEF2b2lkIHNldHRpbmcgZm4gYW5kIGludmVyc2UgaWYgbmVpdGhlciBhcmUgc2V0LiBUaGlzIGFsbG93c1xuICAgIC8vIGhlbHBlcnMgdG8gZG8gYSBjaGVjayBmb3IgYGlmIChvcHRpb25zLmZuKWBcbiAgICBpZiAocHJvZ3JhbSB8fCBpbnZlcnNlKSB7XG4gICAgICBvcHRpb25zLmZuID0gcHJvZ3JhbSB8fCAnY29udGFpbmVyLm5vb3AnO1xuICAgICAgb3B0aW9ucy5pbnZlcnNlID0gaW52ZXJzZSB8fCAnY29udGFpbmVyLm5vb3AnO1xuICAgIH1cblxuICAgIC8vIFRoZSBwYXJhbWV0ZXJzIGdvIG9uIHRvIHRoZSBzdGFjayBpbiBvcmRlciAobWFraW5nIHN1cmUgdGhhdCB0aGV5IGFyZSBldmFsdWF0ZWQgaW4gb3JkZXIpXG4gICAgLy8gc28gd2UgbmVlZCB0byBwb3AgdGhlbSBvZmYgdGhlIHN0YWNrIGluIHJldmVyc2Ugb3JkZXJcbiAgICBsZXQgaSA9IHBhcmFtU2l6ZTtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBwYXJhbSA9IHRoaXMucG9wU3RhY2soKTtcbiAgICAgIHBhcmFtc1tpXSA9IHBhcmFtO1xuICAgIH1cblxuICAgIGlmIChvYmplY3RBcmdzKSB7XG4gICAgICBvcHRpb25zLmFyZ3MgPSB0aGlzLnNvdXJjZS5nZW5lcmF0ZUFycmF5KHBhcmFtcyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kYXRhKSB7XG4gICAgICBvcHRpb25zLmRhdGEgPSAnZGF0YSc7XG4gICAgfVxuICAgIGlmICh0aGlzLnVzZUJsb2NrUGFyYW1zKSB7XG4gICAgICBvcHRpb25zLmJsb2NrUGFyYW1zID0gJ2Jsb2NrUGFyYW1zJztcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH0sXG5cbiAgc2V0dXBIZWxwZXJBcmdzOiBmdW5jdGlvbihoZWxwZXIsIHBhcmFtU2l6ZSwgcGFyYW1zLCB1c2VSZWdpc3Rlcikge1xuICAgIGxldCBvcHRpb25zID0gdGhpcy5zZXR1cFBhcmFtcyhoZWxwZXIsIHBhcmFtU2l6ZSwgcGFyYW1zKTtcbiAgICBvcHRpb25zID0gdGhpcy5vYmplY3RMaXRlcmFsKG9wdGlvbnMpO1xuICAgIGlmICh1c2VSZWdpc3Rlcikge1xuICAgICAgdGhpcy51c2VSZWdpc3Rlcignb3B0aW9ucycpO1xuICAgICAgcGFyYW1zLnB1c2goJ29wdGlvbnMnKTtcbiAgICAgIHJldHVybiBbJ29wdGlvbnM9Jywgb3B0aW9uc107XG4gICAgfSBlbHNlIGlmIChwYXJhbXMpIHtcbiAgICAgIHBhcmFtcy5wdXNoKG9wdGlvbnMpO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG4gIH1cbn07XG5cblxuKGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXNlcnZlZFdvcmRzID0gKFxuICAgICdicmVhayBlbHNlIG5ldyB2YXInICtcbiAgICAnIGNhc2UgZmluYWxseSByZXR1cm4gdm9pZCcgK1xuICAgICcgY2F0Y2ggZm9yIHN3aXRjaCB3aGlsZScgK1xuICAgICcgY29udGludWUgZnVuY3Rpb24gdGhpcyB3aXRoJyArXG4gICAgJyBkZWZhdWx0IGlmIHRocm93JyArXG4gICAgJyBkZWxldGUgaW4gdHJ5JyArXG4gICAgJyBkbyBpbnN0YW5jZW9mIHR5cGVvZicgK1xuICAgICcgYWJzdHJhY3QgZW51bSBpbnQgc2hvcnQnICtcbiAgICAnIGJvb2xlYW4gZXhwb3J0IGludGVyZmFjZSBzdGF0aWMnICtcbiAgICAnIGJ5dGUgZXh0ZW5kcyBsb25nIHN1cGVyJyArXG4gICAgJyBjaGFyIGZpbmFsIG5hdGl2ZSBzeW5jaHJvbml6ZWQnICtcbiAgICAnIGNsYXNzIGZsb2F0IHBhY2thZ2UgdGhyb3dzJyArXG4gICAgJyBjb25zdCBnb3RvIHByaXZhdGUgdHJhbnNpZW50JyArXG4gICAgJyBkZWJ1Z2dlciBpbXBsZW1lbnRzIHByb3RlY3RlZCB2b2xhdGlsZScgK1xuICAgICcgZG91YmxlIGltcG9ydCBwdWJsaWMgbGV0IHlpZWxkIGF3YWl0JyArXG4gICAgJyBudWxsIHRydWUgZmFsc2UnXG4gICkuc3BsaXQoJyAnKTtcblxuICBjb25zdCBjb21waWxlcldvcmRzID0gSmF2YVNjcmlwdENvbXBpbGVyLlJFU0VSVkVEX1dPUkRTID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSByZXNlcnZlZFdvcmRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbXBpbGVyV29yZHNbcmVzZXJ2ZWRXb3Jkc1tpXV0gPSB0cnVlO1xuICB9XG59KCkpO1xuXG5KYXZhU2NyaXB0Q29tcGlsZXIuaXNWYWxpZEphdmFTY3JpcHRWYXJpYWJsZU5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiAhSmF2YVNjcmlwdENvbXBpbGVyLlJFU0VSVkVEX1dPUkRTW25hbWVdICYmICgvXlthLXpBLVpfJF1bMC05YS16QS1aXyRdKiQvKS50ZXN0KG5hbWUpO1xufTtcblxuZnVuY3Rpb24gc3RyaWN0TG9va3VwKHJlcXVpcmVUZXJtaW5hbCwgY29tcGlsZXIsIHBhcnRzLCB0eXBlKSB7XG4gIGxldCBzdGFjayA9IGNvbXBpbGVyLnBvcFN0YWNrKCksXG4gICAgICBpID0gMCxcbiAgICAgIGxlbiA9IHBhcnRzLmxlbmd0aDtcbiAgaWYgKHJlcXVpcmVUZXJtaW5hbCkge1xuICAgIGxlbi0tO1xuICB9XG5cbiAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgIHN0YWNrID0gY29tcGlsZXIubmFtZUxvb2t1cChzdGFjaywgcGFydHNbaV0sIHR5cGUpO1xuICB9XG5cbiAgaWYgKHJlcXVpcmVUZXJtaW5hbCkge1xuICAgIHJldHVybiBbY29tcGlsZXIuYWxpYXNhYmxlKCdjb250YWluZXIuc3RyaWN0JyksICcoJywgc3RhY2ssICcsICcsIGNvbXBpbGVyLnF1b3RlZFN0cmluZyhwYXJ0c1tpXSksICcpJ107XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0YWNrO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEphdmFTY3JpcHRDb21waWxlcjtcbiJdfQ==


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* global define */
	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(3);

	var SourceNode = undefined;

	try {
	  /* istanbul ignore next */
	  if (false) {
	    // We don't support this in AMD environments. For these environments, we asusme that
	    // they are running on the browser and thus have no need for the source-map library.
	    var SourceMap = require('source-map');
	    SourceNode = SourceMap.SourceNode;
	  }
	} catch (err) {}
	/* NOP */

	/* istanbul ignore if: tested but not covered in istanbul due to dist build  */
	if (!SourceNode) {
	  SourceNode = function (line, column, srcFile, chunks) {
	    this.src = '';
	    if (chunks) {
	      this.add(chunks);
	    }
	  };
	  /* istanbul ignore next */
	  SourceNode.prototype = {
	    add: function add(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src += chunks;
	    },
	    prepend: function prepend(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src = chunks + this.src;
	    },
	    toStringWithSourceMap: function toStringWithSourceMap() {
	      return { code: this.toString() };
	    },
	    toString: function toString() {
	      return this.src;
	    }
	  };
	}

	function castChunk(chunk, codeGen, loc) {
	  if (_utils.isArray(chunk)) {
	    var ret = [];

	    for (var i = 0, len = chunk.length; i < len; i++) {
	      ret.push(codeGen.wrap(chunk[i], loc));
	    }
	    return ret;
	  } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
	    // Handle primitives that the SourceNode will throw up on
	    return chunk + '';
	  }
	  return chunk;
	}

	function CodeGen(srcFile) {
	  this.srcFile = srcFile;
	  this.source = [];
	}

	CodeGen.prototype = {
	  isEmpty: function isEmpty() {
	    return !this.source.length;
	  },
	  prepend: function prepend(source, loc) {
	    this.source.unshift(this.wrap(source, loc));
	  },
	  push: function push(source, loc) {
	    this.source.push(this.wrap(source, loc));
	  },

	  merge: function merge() {
	    var source = this.empty();
	    this.each(function (line) {
	      source.add(['  ', line, '\n']);
	    });
	    return source;
	  },

	  each: function each(iter) {
	    for (var i = 0, len = this.source.length; i < len; i++) {
	      iter(this.source[i]);
	    }
	  },

	  empty: function empty() {
	    var loc = this.currentLocation || { start: {} };
	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
	  },
	  wrap: function wrap(chunk) {
	    var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || { start: {} } : arguments[1];

	    if (chunk instanceof SourceNode) {
	      return chunk;
	    }

	    chunk = castChunk(chunk, this, loc);

	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
	  },

	  functionCall: function functionCall(fn, type, params) {
	    params = this.generateList(params);
	    return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
	  },

	  quotedString: function quotedString(str) {
	    return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
	    .replace(/\u2029/g, '\\u2029') + '"';
	  },

	  objectLiteral: function objectLiteral(obj) {
	    var pairs = [];

	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        var value = castChunk(obj[key], this);
	        if (value !== 'undefined') {
	          pairs.push([this.quotedString(key), ':', value]);
	        }
	      }
	    }

	    var ret = this.generateList(pairs);
	    ret.prepend('{');
	    ret.add('}');
	    return ret;
	  },

	  generateList: function generateList(entries) {
	    var ret = this.empty();

	    for (var i = 0, len = entries.length; i < len; i++) {
	      if (i) {
	        ret.add(',');
	      }

	      ret.add(castChunk(entries[i], this));
	    }

	    return ret;
	  },

	  generateArray: function generateArray(entries) {
	    var ret = this.generateList(entries);
	    ret.prepend('[');
	    ret.add(']');

	    return ret;
	  }
	};

	exports['default'] = CodeGen;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2NvbXBpbGVyL2NvZGUtZ2VuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3FCQUNzQixVQUFVOztBQUVoQyxJQUFJLFVBQVUsWUFBQSxDQUFDOztBQUVmLElBQUk7O0FBRUYsTUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFOzs7QUFHL0MsUUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3RDLGNBQVUsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDO0dBQ25DO0NBQ0YsQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUViOzs7O0FBQUEsQUFHRCxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQ2YsWUFBVSxHQUFHLFVBQVMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQ25ELFFBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2QsUUFBSSxNQUFNLEVBQUU7QUFDVixVQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2xCO0dBQ0YsQ0FBQzs7QUFFRixZQUFVLENBQUMsU0FBUyxHQUFHO0FBQ3JCLE9BQUcsRUFBRSxhQUFTLE1BQU0sRUFBRTtBQUNwQixVQUFJLGVBQVEsTUFBTSxDQUFDLEVBQUU7QUFDbkIsY0FBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7T0FDMUI7QUFDRCxVQUFJLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQztLQUNwQjtBQUNELFdBQU8sRUFBRSxpQkFBUyxNQUFNLEVBQUU7QUFDeEIsVUFBSSxlQUFRLE1BQU0sQ0FBQyxFQUFFO0FBQ25CLGNBQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO09BQzFCO0FBQ0QsVUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztL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T0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQixPQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUViLFdBQU8sR0FBRyxDQUFDO0dBQ1o7Q0FDRixDQUFDOztxQkFFYSxPQUFPIiwiZmlsZSI6ImNvZGUtZ2VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIGRlZmluZSAqL1xuaW1wb3J0IHtpc0FycmF5fSBmcm9tICcuLi91dGlscyc7XG5cbmxldCBTb3VyY2VOb2RlO1xuXG50cnkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAodHlwZW9mIGRlZmluZSAhPT0gJ2Z1bmN0aW9uJyB8fCAhZGVmaW5lLmFtZCkge1xuICAgIC8vIFdlIGRvbid0IHN1cHBvcnQgdGhpcyBpbiBBTUQgZW52aXJvbm1lbnRzLiBGb3IgdGhlc2UgZW52aXJvbm1lbnRzLCB3ZSBhc3VzbWUgdGhhdFxuICAgIC8vIHRoZXkgYXJlIHJ1bm5pbmcgb24gdGhlIGJyb3dzZXIgYW5kIHRodXMgaGF2ZSBubyBuZWVkIGZvciB0aGUgc291cmNlLW1hcCBsaWJyYXJ5LlxuICAgIGxldCBTb3VyY2VNYXAgPSByZXF1aXJlKCdzb3VyY2UtbWFwJyk7XG4gICAgU291cmNlTm9kZSA9IFNvdXJjZU1hcC5Tb3VyY2VOb2RlO1xuICB9XG59IGNhdGNoIChlcnIpIHtcbiAgLyogTk9QICovXG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBpZjogdGVzdGVkIGJ1dCBub3QgY292ZXJlZCBpbiBpc3RhbmJ1bCBkdWUgdG8gZGlzdCBidWlsZCAgKi9cbmlmICghU291cmNlTm9kZSkge1xuICBTb3VyY2VOb2RlID0gZnVuY3Rpb24obGluZSwgY29sdW1uLCBzcmNGaWxlLCBjaHVua3MpIHtcbiAgICB0aGlzLnNyYyA9ICcnO1xuICAgIGlmIChjaHVua3MpIHtcbiAgICAgIHRoaXMuYWRkKGNodW5rcyk7XG4gICAgfVxuICB9O1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBTb3VyY2VOb2RlLnByb3RvdHlwZSA9IHtcbiAgICBhZGQ6IGZ1bmN0aW9uKGNodW5rcykge1xuICAgICAgaWYgKGlzQXJyYXkoY2h1bmtzKSkge1xuICAgICAgICBjaHVua3MgPSBjaHVua3Muam9pbignJyk7XG4gICAgICB9XG4gICAgICB0aGlzLnNyYyArPSBjaHVua3M7XG4gICAgfSxcbiAgICBwcmVwZW5kOiBmdW5jdGlvbihjaHVua3MpIHtcbiAgICAgIGlmIChpc0FycmF5KGNodW5rcykpIHtcbiAgICAgICAgY2h1bmtzID0gY2h1bmtzLmpvaW4oJycpO1xuICAgICAgfVxuICAgICAgdGhpcy5zcmMgPSBjaHVua3MgKyB0aGlzLnNyYztcbiAgICB9LFxuICAgIHRvU3RyaW5nV2l0aFNvdXJjZU1hcDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4ge2NvZGU6IHRoaXMudG9TdHJpbmcoKX07XG4gICAgfSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5zcmM7XG4gICAgfVxuICB9O1xufVxuXG5cbmZ1bmN0aW9uIGNhc3RDaHVuayhjaHVuaywgY29kZUdlbiwgbG9jKSB7XG4gIGlmIChpc0FycmF5KGNodW5rKSkge1xuICAgIGxldCByZXQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjaHVuay5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgcmV0LnB1c2goY29kZUdlbi53cmFwKGNodW5rW2ldLCBsb2MpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgY2h1bmsgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgY2h1bmsgPT09ICdudW1iZXInKSB7XG4gICAgLy8gSGFuZGxlIHByaW1pdGl2ZXMgdGhhdCB0aGUgU291cmNlTm9kZSB3aWxsIHRocm93IHVwIG9uXG4gICAgcmV0dXJuIGNodW5rICsgJyc7XG4gIH1cbiAgcmV0dXJuIGNodW5rO1xufVxuXG5cbmZ1bmN0aW9uIENvZGVHZW4oc3JjRmlsZSkge1xuICB0aGlzLnNyY0ZpbGUgPSBzcmNGaWxlO1xuICB0aGlzLnNvdXJjZSA9IFtdO1xufVxuXG5Db2RlR2VuLnByb3RvdHlwZSA9IHtcbiAgaXNFbXB0eSgpIHtcbiAgICByZXR1cm4gIXRoaXMuc291cmNlLmxlbmd0aDtcbiAgfSxcbiAgcHJlcGVuZDogZnVuY3Rpb24oc291cmNlLCBsb2MpIHtcbiAgICB0aGlzLnNvdXJjZS51bnNoaWZ0KHRoaXMud3JhcChzb3VyY2UsIGxvYykpO1xuICB9LFxuICBwdXNoOiBmdW5jdGlvbihzb3VyY2UsIGxvYykge1xuICAgIHRoaXMuc291cmNlLnB1c2godGhpcy53cmFwKHNvdXJjZSwgbG9jKSk7XG4gIH0sXG5cbiAgbWVyZ2U6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBzb3VyY2UgPSB0aGlzLmVtcHR5KCk7XG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHNvdXJjZS5hZGQoWycgICcsIGxpbmUsICdcXG4nXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfSxcblxuICBlYWNoOiBmdW5jdGlvbihpdGVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuc291cmNlLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpdGVyKHRoaXMuc291cmNlW2ldKTtcbiAgICB9XG4gIH0sXG5cbiAgZW1wdHk6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBsb2MgPSB0aGlzLmN1cnJlbnRMb2NhdGlvbiB8fCB7c3RhcnQ6IHt9fTtcbiAgICByZXR1cm4gbmV3IFNvdXJjZU5vZGUobG9jLnN0YXJ0LmxpbmUsIGxvYy5zdGFydC5jb2x1bW4sIHRoaXMuc3JjRmlsZSk7XG4gIH0sXG4gIHdyYXA6IGZ1bmN0aW9uKGNodW5rLCBsb2MgPSB0aGlzLmN1cnJlbnRMb2NhdGlvbiB8fCB7c3RhcnQ6IHt9fSkge1xuICAgIGlmIChjaHVuayBpbnN0YW5jZW9mIFNvdXJjZU5vZGUpIHtcbiAgICAgIHJldHVybiBjaHVuaztcbiAgICB9XG5cbiAgICBjaHVuayA9IGNhc3RDaHVuayhjaHVuaywgdGhpcywgbG9jKTtcblxuICAgIHJldHVybiBuZXcgU291cmNlTm9kZShsb2Muc3RhcnQubGluZSwgbG9jLnN0YXJ0LmNvbHVtbiwgdGhpcy5zcmNGaWxlLCBjaHVuayk7XG4gIH0sXG5cbiAgZnVuY3Rpb25DYWxsOiBmdW5jdGlvbihmbiwgdHlwZSwgcGFyYW1zKSB7XG4gICAgcGFyYW1zID0gdGhpcy5nZW5lcmF0ZUxpc3QocGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy53cmFwKFtmbiwgdHlwZSA/ICcuJyArIHR5cGUgKyAnKCcgOiAnKCcsIHBhcmFtcywgJyknXSk7XG4gIH0sXG5cbiAgcXVvdGVkU3RyaW5nOiBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gJ1wiJyArIChzdHIgKyAnJylcbiAgICAgIC5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXCcpXG4gICAgICAucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpXG4gICAgICAucmVwbGFjZSgvXFxuL2csICdcXFxcbicpXG4gICAgICAucmVwbGFjZSgvXFxyL2csICdcXFxccicpXG4gICAgICAucmVwbGFjZSgvXFx1MjAyOC9nLCAnXFxcXHUyMDI4JykgICAvLyBQZXIgRWNtYS0yNjIgNy4zICsgNy44LjRcbiAgICAgIC5yZXBsYWNlKC9cXHUyMDI5L2csICdcXFxcdTIwMjknKSArICdcIic7XG4gIH0sXG5cbiAgb2JqZWN0TGl0ZXJhbDogZnVuY3Rpb24ob2JqKSB7XG4gICAgbGV0IHBhaXJzID0gW107XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gY2FzdENodW5rKG9ialtrZXldLCB0aGlzKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHBhaXJzLnB1c2goW3RoaXMucXVvdGVkU3RyaW5nKGtleSksICc6JywgdmFsdWVdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCByZXQgPSB0aGlzLmdlbmVyYXRlTGlzdChwYWlycyk7XG4gICAgcmV0LnByZXBlbmQoJ3snKTtcbiAgICByZXQuYWRkKCd9Jyk7XG4gICAgcmV0dXJuIHJldDtcbiAgfSxcblxuXG4gIGdlbmVyYXRlTGlzdDogZnVuY3Rpb24oZW50cmllcykge1xuICAgIGxldCByZXQgPSB0aGlzLmVtcHR5KCk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gZW50cmllcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKGkpIHtcbiAgICAgICAgcmV0LmFkZCgnLCcpO1xuICAgICAgfVxuXG4gICAgICByZXQuYWRkKGNhc3RDaHVuayhlbnRyaWVzW2ldLCB0aGlzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfSxcblxuICBnZW5lcmF0ZUFycmF5OiBmdW5jdGlvbihlbnRyaWVzKSB7XG4gICAgbGV0IHJldCA9IHRoaXMuZ2VuZXJhdGVMaXN0KGVudHJpZXMpO1xuICAgIHJldC5wcmVwZW5kKCdbJyk7XG4gICAgcmV0LmFkZCgnXScpO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29kZUdlbjtcblxuIl19


/***/ }
/******/ ])
});
;
// @license-end
;
/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */


(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var deletedIds = [];

var document = window.document;

var slice = deletedIds.slice;

var concat = deletedIds.concat;

var push = deletedIds.push;

var indexOf = deletedIds.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "1.12.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1, IE<9
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: deletedIds.sort,
	splice: deletedIds.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type( obj ) === "array";
	},

	isWindow: function( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	isPlainObject: function( obj ) {
		var key;

		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {

			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call( obj, "constructor" ) &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}
		} catch ( e ) {

			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Support: IE<9
		// Handle iteration over inherited properties before own properties.
		if ( !support.ownFirst ) {
			for ( key in obj ) {
				return hasOwn.call( obj, key );
			}
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {

			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data ); // jscs:ignore requireDotNotation
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1, IE<9
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( indexOf ) {
				return indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {

				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		while ( j < len ) {
			first[ i++ ] = second[ j++ ];
		}

		// Support: IE<9
		// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
		if ( len !== len ) {
			while ( second[ j ] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: function() {
		return +( new Date() );
	},

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = deletedIds[ Symbol.iterator ];
}
/* jshint ignore: end */

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, nidselect, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
					while ( i-- ) {
						groups[i] = nidselect + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( (parent = document.defaultView) && parent.top !== parent ) {
		// Support: IE 11
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( (oldCache = uniqueCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) > -1 ) !== not;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// init accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt( 0 ) === "<" &&
				selector.charAt( selector.length - 1 ) === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {

						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[ 2 ] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[ 0 ] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof root.ready !== "undefined" ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter( function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

				// Always skip document fragments
				if ( cur.nodeType < 11 && ( pos ?
					pos.index( cur ) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector( cur, selectors ) ) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[ 0 ], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem, this );
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				ret = jQuery.uniqueSort( ret );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
		}

		return this.pushStack( ret );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = true;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add( function() {

					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 ||
				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred.
			// If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );

					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.progress( updateFunc( i, progressContexts, progressValues ) )
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
} );


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {

	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
} );

/**
 * Clean-up method for dom ready events
 */
function detach() {
	if ( document.addEventListener ) {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );

	} else {
		document.detachEvent( "onreadystatechange", completed );
		window.detachEvent( "onload", completed );
	}
}

/**
 * The ready event handler and self cleanup method
 */
function completed() {

	// readyState === "complete" is good enough for us to call the dom ready in oldIE
	if ( document.addEventListener ||
		window.event.type === "load" ||
		document.readyState === "complete" ) {

		detach();
		jQuery.ready();
	}
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE6-10
		// Older IE sometimes signals "interactive" too soon
		if ( document.readyState === "complete" ||
			( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed );

		// If IE event model is used
		} else {

			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch ( e ) {}

			if ( top && top.doScroll ) {
				( function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {

							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll( "left" );
						} catch ( e ) {
							return window.setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				} )();
			}
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Support: IE<9
// Iteration over object's inherited properties before its own
var i;
for ( i in jQuery( support ) ) {
	break;
}
support.ownFirst = i === "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
jQuery( function() {

	// Minified: var a,b,c,d
	var val, div, body, container;

	body = document.getElementsByTagName( "body" )[ 0 ];
	if ( !body || !body.style ) {

		// Return for frameset docs that don't have a body
		return;
	}

	// Setup
	div = document.createElement( "div" );
	container = document.createElement( "div" );
	container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
	body.appendChild( container ).appendChild( div );

	if ( typeof div.style.zoom !== "undefined" ) {

		// Support: IE<8
		// Check if natively block-level elements act like inline-block
		// elements when setting their display to 'inline' and giving
		// them layout
		div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
		if ( val ) {

			// Prevent IE 6 from affecting layout for positioned elements #11048
			// Prevent IE from shrinking the body in IE 7 mode #12869
			// Support: IE<8
			body.style.zoom = 1;
		}
	}

	body.removeChild( container );
} );


( function() {
	var div = document.createElement( "div" );

	// Support: IE<9
	support.deleteExpando = true;
	try {
		delete div.test;
	} catch ( e ) {
		support.deleteExpando = false;
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();
var acceptData = function( elem ) {
	var noData = jQuery.noData[ ( elem.nodeName + " " ).toLowerCase() ],
		nodeType = +elem.nodeType || 1;

	// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
	return nodeType !== 1 && nodeType !== 9 ?
		false :

		// Nodes accept data unless otherwise specified; rejection can be conditional
		!noData || noData !== true && elem.getAttribute( "classid" ) === noData;
};




var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[ name ] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}

function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( ( !id || !cache[ id ] || ( !pvt && !cache[ id ].data ) ) &&
		data === undefined && typeof name === "string" ) {
		return;
	}

	if ( !id ) {

		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {

		// Avoid exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split( " " );
					}
				}
			} else {

				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			i = name.length;
			while ( i-- ) {
				delete thisCache[ name[ i ] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject( thisCache ) : !jQuery.isEmptyObject( thisCache ) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	} else if ( support.deleteExpando || cache != cache.window ) {
		/* jshint eqeqeq: true */
		delete cache[ id ];

	// When all else fails, undefined
	} else {
		cache[ id ] = undefined;
	}
}

jQuery.extend( {
	cache: {},

	// The following elements (space-suffixed to avoid Object.prototype collisions)
	// throw uncatchable exceptions if you attempt to set expando properties
	noData: {
		"applet ": true,
		"embed ": true,

		// ...but Flash objects (which have this classid) *can* handle expandos
		"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[ jQuery.expando ] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				jQuery.data( this, key );
			} );
		}

		return arguments.length > 1 ?

			// Sets one value
			this.each( function() {
				jQuery.data( this, key, value );
			} ) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
	},

	removeData: function( key ) {
		return this.each( function() {
			jQuery.removeData( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object,
	// or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );


( function() {
	var shrinkWrapBlocksVal;

	support.shrinkWrapBlocks = function() {
		if ( shrinkWrapBlocksVal != null ) {
			return shrinkWrapBlocksVal;
		}

		// Will be changed later if needed.
		shrinkWrapBlocksVal = false;

		// Minified: var b,c,d
		var div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {

			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		// Support: IE6
		// Check if elements with layout shrink-wrap their children
		if ( typeof div.style.zoom !== "undefined" ) {

			// Reset CSS: box-sizing; display; margin; border
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;" +
				"padding:1px;width:1px;zoom:1";
			div.appendChild( document.createElement( "div" ) ).style.width = "5px";
			shrinkWrapBlocksVal = div.offsetWidth !== 3;
		}

		body.removeChild( container );

		return shrinkWrapBlocksVal;
	};

} )();
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		length = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < length; i++ ) {
				fn(
					elems[ i ],
					key,
					raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			length ? fn( elems[ 0 ], key ) : emptyGet;
};
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([\w:-]+)/ );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );

var rleadingWhitespace = ( /^\s+/ );

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
		"details|dialog|figcaption|figure|footer|header|hgroup|main|" +
		"mark|meter|nav|output|picture|progress|section|summary|template|time|video";



function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}


( function() {
	var div = document.createElement( "div" ),
		fragment = document.createDocumentFragment(),
		input = document.createElement( "input" );

	// Setup
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName( "tbody" ).length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone =
		document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	input.type = "checkbox";
	input.checked = true;
	fragment.appendChild( input );
	support.appendChecked = input.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE6-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// #11217 - WebKit loses check when the name is after the checked attribute
	fragment.appendChild( div );

	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input = document.createElement( "input" );
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
	support.noCloneEvent = !!div.addEventListener;

	// Support: IE<9
	// Since attributes and properties are the same in IE,
	// cleanData must set properties to undefined rather than use removeAttribute
	div[ jQuery.expando ] = 1;
	support.attributes = !div.getAttribute( jQuery.expando );
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {
	option: [ 1, "<select multiple='multiple'>", "</select>" ],
	legend: [ 1, "<fieldset>", "</fieldset>" ],
	area: [ 1, "<map>", "</map>" ],

	// Support: IE8
	param: [ 1, "<object>", "</object>" ],
	thead: [ 1, "<table>", "</table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
	// unless wrapped in a div with non-breaking characters in front of it.
	_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
};

// Support: IE8-IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
				undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context;
			( elem = elems[ i ] ) != null;
			i++
		) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; ( elem = elems[ i ] ) != null; i++ ) {
		jQuery._data(
			elem,
			"globalEval",
			!refElements || jQuery._data( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/,
	rtbody = /<tbody/i;

function fixDefaultChecked( elem ) {
	if ( rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

function buildFragment( elems, context, scripts, selection, ignored ) {
	var j, elem, contains,
		tmp, tag, tbody, wrap,
		l = elems.length,

		// Ensure a safe fragment
		safe = createSafeFragment( context ),

		nodes = [],
		i = 0;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || safe.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;

				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Manually add leading whitespace removed by IE
				if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
					nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[ 0 ] ) );
				}

				// Remove IE's autoinserted <tbody> from table fragments
				if ( !support.tbody ) {

					// String was a <table>, *may* have spurious <tbody>
					elem = tag === "table" && !rtbody.test( elem ) ?
						tmp.firstChild :

						// String was a bare <thead> or <tfoot>
						wrap[ 1 ] === "<table>" && !rtbody.test( elem ) ?
							tmp :
							0;

					j = elem && elem.childNodes.length;
					while ( j-- ) {
						if ( jQuery.nodeName( ( tbody = elem.childNodes[ j ] ), "tbody" ) &&
							!tbody.childNodes.length ) {

							elem.removeChild( tbody );
						}
					}
				}

				jQuery.merge( nodes, tmp.childNodes );

				// Fix #12392 for WebKit and IE > 9
				tmp.textContent = "";

				// Fix #12392 for oldIE
				while ( tmp.firstChild ) {
					tmp.removeChild( tmp.firstChild );
				}

				// Remember the top-level container for proper cleanup
				tmp = safe.lastChild;
			}
		}
	}

	// Fix #11356: Clear elements from fragment
	if ( tmp ) {
		safe.removeChild( tmp );
	}

	// Reset defaultChecked for any radios and checkboxes
	// about to be appended to the DOM in IE 6/7 (#8060)
	if ( !support.appendChecked ) {
		jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
	}

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}

			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( safe.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	tmp = null;

	return safe;
}


( function() {
	var i, eventName,
		div = document.createElement( "div" );

	// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
	for ( i in { submit: true, change: true, focusin: true } ) {
		eventName = "on" + i;

		if ( !( support[ i ] = eventName in window ) ) {

			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
			div.setAttribute( eventName, "t" );
			support[ i ] = div.attributes[ eventName ].expando === false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();


var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE9
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" &&
					( !e || jQuery.event.triggered !== e.type ) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};

			// Add elem as a property of the handle fn to prevent a memory leak
			// with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] &&
				jQuery._data( cur, "handle" );

			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if (
				( !special._default ||
				 special._default.apply( eventPath.pop(), data ) === false
				) && acceptData( elem )
			) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {

						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support (at least): Chrome, IE9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox<=42+
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) {
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Safari 6-8+
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split( " " ),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY fromElement offsetX offsetY " +
			"pageX pageY screenX screenY toElement" ).split( " " ),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ?
					original.toElement :
					fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {

						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	// Piggyback on a donor event to simulate a different one
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true

				// Previously, `originalEvent: {}` was set here, so stopPropagation call
				// would not be triggered on donor event, since in our own
				// jQuery.event.stopPropagation function we had a check for existence of
				// originalEvent.stopPropagation method, so, consequently it would be a noop.
				//
				// Guard for simulated events was moved to jQuery.event.stopPropagation function
				// since `originalEvent` should point to the original event for the
				// constancy with other events and for more focused logic
			}
		);

		jQuery.event.trigger( e, null, elem );

		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event,
			// to properly expose it to GC
			if ( typeof elem[ name ] === "undefined" ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: IE < 9, Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( !e || this.isSimulated ) {
			return;
		}

		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

// IE submit delegation
if ( !support.submit ) {

	jQuery.event.special.submit = {
		setup: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {

				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ?

						// Support: IE <=8
						// We use jQuery.prop instead of elem.form
						// to allow fixing the IE8 delegated submit issue (gh-2332)
						// by 3rd party polyfills/workarounds.
						jQuery.prop( elem, "form" ) :
						undefined;

				if ( form && !jQuery._data( form, "submit" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submitBubble = true;
					} );
					jQuery._data( form, "submit", true );
				}
			} );

			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {

			// If form was submitted by the user, bubble the event up the tree
			if ( event._submitBubble ) {
				delete event._submitBubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event );
				}
			}
		},

		teardown: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !support.change ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {

				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._justChanged = true;
						}
					} );
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._justChanged && !event.isTrigger ) {
							this._justChanged = false;
						}

						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event );
					} );
				}
				return false;
			}

			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "change" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event );
						}
					} );
					jQuery._data( elem, "change", true );
				}
			} );
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger ||
				( elem.type !== "radio" && elem.type !== "checkbox" ) ) {

				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					jQuery._removeData( doc, fix );
				} else {
					jQuery._data( doc, fix, attaches );
				}
			}
		};
	} );
}

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	},

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp( "<(?:" + nodeNames + ")[\\s/>]", "i" ),
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement( "div" ) );

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName( "tbody" )[ 0 ] ||
			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( jQuery.find.attr( elem, "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}
	return elem;
}

function cloneCopyEvent( src, dest ) {
	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( support.html5Clone && ( src.innerHTML && !jQuery.trim( dest.innerHTML ) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {

		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var first, node, hasScripts,
		scripts, doc, fragment,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android<4.1, PhantomJS<2
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!jQuery._data( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							jQuery.globalEval(
								( node.text || node.textContent || node.innerHTML || "" )
									.replace( rcleanScript, "" )
							);
						}
					}
				}
			}

			// Fix #11809: Avoid leaking memory
			fragment = first = null;
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		elems = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = elems[ i ] ) != null; i++ ) {

		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( support.html5Clone || jQuery.isXMLDoc( elem ) ||
			!rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {

			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( ( !support.noCloneEvent || !support.noCloneChecked ) &&
				( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; ( node = srcElements[ i ] ) != null; ++i ) {

				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[ i ] ) {
					fixCloneNodeIssues( node, destElements[ i ] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; ( node = srcElements[ i ] ) != null; i++ ) {
					cloneCopyEvent( node, destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems, /* internal */ forceAcceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			attributes = support.attributes,
			special = jQuery.event.special;

		for ( ; ( elem = elems[ i ] ) != null; i++ ) {
			if ( forceAcceptData || acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// Support: IE<9
						// IE does not allow us to delete expando properties from nodes
						// IE creates expando attributes along with the property
						// IE does not have a removeAttribute function on Document nodes
						if ( !attributes && typeof elem.removeAttribute !== "undefined" ) {
							elem.removeAttribute( internalKey );

						// Webkit & Blink performance suffers when deleting properties
						// from DOM nodes, so set to undefined instead
						// https://code.google.com/p/chromium/issues/detail?id=378607
						} else {
							elem[ internalKey ] = undefined;
						}

						deletedIds.push( id );
					}
				}
			}
		}
	}
} );

jQuery.fn.extend( {

	// Keep domManip exposed until 3.0 (gh-2225)
	domManip: domManip,

	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append(
					( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value )
				);
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {

			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {

						// Remove element nodes and prevent memory leaks
						elem = this[ i ] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );


var iframe,
	elemdisplay = {

		// Support: Firefox
		// We have to pre-define these values for FF (#10227)
		HTML: "block",
		BODY: "block"
	};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */

// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		display = jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
				.appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var documentElement = document.documentElement;



( function() {
	var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
		reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	div.style.cssText = "float:left;opacity:.5";

	// Support: IE<9
	// Make sure that element opacity exists (as opposed to filter)
	support.opacity = div.style.opacity === "0.5";

	// Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!div.style.cssFloat;

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container = document.createElement( "div" );
	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	div.innerHTML = "";
	container.appendChild( div );

	// Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
		div.style.WebkitBoxSizing === "";

	jQuery.extend( support, {
		reliableHiddenOffsets: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableHiddenOffsetsVal;
		},

		boxSizingReliable: function() {

			// We're checking for pixelPositionVal here instead of boxSizingReliableVal
			// since that compresses better and they're computed together anyway.
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},

		pixelMarginRight: function() {

			// Support: Android 4.0-4.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelMarginRightVal;
		},

		pixelPosition: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelPositionVal;
		},

		reliableMarginRight: function() {

			// Support: Android 2.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginRightVal;
		},

		reliableMarginLeft: function() {

			// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginLeftVal;
		}
	} );

	function computeStyleTests() {
		var contents, divStyle,
			documentElement = document.documentElement;

		// Setup
		documentElement.appendChild( container );

		div.style.cssText =

			// Support: Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";

		// Support: IE<9
		// Assume reasonable values in the absence of getComputedStyle
		pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
		pixelMarginRightVal = reliableMarginRightVal = true;

		// Check for getComputedStyle so that this code is not run in IE<9.
		if ( window.getComputedStyle ) {
			divStyle = window.getComputedStyle( div );
			pixelPositionVal = ( divStyle || {} ).top !== "1%";
			reliableMarginLeftVal = ( divStyle || {} ).marginLeft === "2px";
			boxSizingReliableVal = ( divStyle || { width: "4px" } ).width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = ( divStyle || { marginRight: "4px" } ).marginRight === "4px";

			// Support: Android 2.3 only
			// Div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			contents = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			contents.style.cssText = div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
			contents.style.marginRight = contents.style.width = "0";
			div.style.width = "1px";

			reliableMarginRightVal =
				!parseFloat( ( window.getComputedStyle( contents ) || {} ).marginRight );

			div.removeChild( contents );
		}

		// Support: IE6-8
		// First check that getClientRects works as expected
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.style.display = "none";
		reliableHiddenOffsetsVal = div.getClientRects().length === 0;
		if ( reliableHiddenOffsetsVal ) {
			div.style.display = "";
			div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			div.childNodes[ 0 ].style.borderCollapse = "separate";
			contents = div.getElementsByTagName( "td" );
			contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
			reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			if ( reliableHiddenOffsetsVal ) {
				contents[ 0 ].style.display = "";
				contents[ 1 ].style.display = "none";
				reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			}
		}

		// Teardown
		documentElement.removeChild( container );
	}

} )();


var getStyles, curCSS,
	rposition = /^(top|right|bottom|left)$/;

if ( window.getComputedStyle ) {
	getStyles = function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

	curCSS = function( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value"
			// instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values,
			// but width seems to be reliably pixels
			// this is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "";
	};
} else if ( documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, computed ) {
		var left, rs, rsLeft, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed[ name ] : undefined;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are
		// proportional to the parent element instead
		// and we can't measure the parent instead because it
		// might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "" || "auto";
	};
}




function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

		ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/i,

	// swappable if display is none or starts with table except
	// "table", "table-cell", or "table-caption"
	// see here for display values:
	// https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;


// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt( 0 ).toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {

			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] =
					jQuery._data( elem, "olddisplay", defaultDisplay( elem.nodeName ) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display && display !== "none" || !hidden ) {
				jQuery._data(
					elem,
					"olddisplay",
					hidden ? display : jQuery.css( elem, "display" )
				);
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = support.boxSizing &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {

		// normalize float css property
		"float": support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight
			// (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				// Support: IE
				// Swallow errors from 'invalid' CSS values (#5509)
				try {
					style[ name ] = value;
				} catch ( e ) {}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					elem.offsetWidth === 0 ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					support.boxSizing &&
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
} );

if ( !support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {

			// IE uses filters for opacity
			return ropacity.test( ( computed && elem.currentStyle ?
				elem.currentStyle.filter :
				elem.style.filter ) || "" ) ?
					( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
					computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist -
			// attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule
				// or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return (
				parseFloat( curCSS( elem, "marginLeft" ) ) ||

				// Support: IE<=11+
				// Running getBoundingClientRect on a disconnected node in IE throws an error
				// Support: IE8 only
				// getClientRects() errors on disconnected elems
				( jQuery.contains( elem.ownerDocument, elem ) ?
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} ) :
					0
				)
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";
			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !support.shrinkWrapBlocks() ) {
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show
				// and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = jQuery._data( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done( function() {
				jQuery( elem ).hide();
			} );
		}
		anim.done( function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		} );
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ?
			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	window.clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var a,
		input = document.createElement( "input" ),
		div = document.createElement( "div" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	// Setup
	div = document.createElement( "div" );
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName( "a" )[ 0 ];

	// Support: Windows Web Apps (WWA)
	// `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "checkbox" );
	div.appendChild( input );

	a = div.getElementsByTagName( "a" )[ 0 ];

	// First batch of tests.
	a.style.cssText = "top:1px";

	// Test setAttribute on camelCase class.
	// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute( "style" ) );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute( "href" ) === "/a";

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement( "form" ).enctype;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE8 only
	// Check if we can trust getAttribute("value")
	input = document.createElement( "input" );
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";
} )();


var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if (
					hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// handle most common string cases
					ret.replace( rreturn, "" ) :

					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled :
								option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1 ) {

						// Support: IE6
						// When new option element is added to select box we need to
						// force reflow of newly added node in order to workaround delay
						// of initialization properties
						try {
							option.selected = optionSet = true;

						} catch ( _ ) {

							// Will be executed only in IE6
							option.scrollHeight;
						}

					} else {
						option.selected = false;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}

				return options;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = support.getSetAttribute,
	getSetInput = support.input;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {

					// Setting the type on a radio button after the value resets the value in IE8-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {

					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;

					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {

			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		} else {

			// Support: IE<9
			// Use defaultChecked and defaultSelected for oldIE
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} else {
		attrHandle[ name ] = function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
			}
		};
	}
} );

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {

				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {

				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {

			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					( ret = elem.ownerDocument.createAttribute( name ) )
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			if ( name === "value" || value === elem.getAttribute( name ) ) {
				return value;
			}
		}
	};

	// Some attributes are constructed with empty-string values when not defined
	attrHandle.id = attrHandle.name = attrHandle.coords =
		function( elem, name, isXML ) {
			var ret;
			if ( !isXML ) {
				return ( ret = elem.getAttributeNode( name ) ) && ret.value !== "" ?
					ret.value :
					null;
			}
		};

	// Fixing value retrieval on a button requires this module
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			if ( ret && ret.specified ) {
				return ret.value;
			}
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each( [ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	} );
}

if ( !support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {

			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case sensitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}




var rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each( function() {

			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch ( e ) {}
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !support.hrefNormalized ) {

	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each( [ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	} );
}

// Support: Safari, IE9+
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );

// IE6/7 call enctype encoding
if ( !support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return jQuery.attr( elem, "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// store className if set
					jQuery._data( this, "__className__", className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				jQuery.attr( this, "class",
					className || value === false ?
					"" :
					jQuery._data( this, "__className__" ) || ""
				);
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




// Return jQuery for attributes-only inclusion


jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );


var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function( data ) {

	// Attempt to parse using the native JSON parser first
	if ( window.JSON && window.JSON.parse ) {

		// Support: Android 2.3
		// Workaround failure to string-cast null input
		return window.JSON.parse( data + "" );
	}

	var requireNonComma,
		depth = null,
		str = jQuery.trim( data + "" );

	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
	// after removing valid tokens
	return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

		// Force termination if we see a misplaced comma
		if ( requireNonComma && comma ) {
			depth = 0;
		}

		// Perform no more replacements after returning to outermost depth
		if ( depth === 0 ) {
			return token;
		}

		// Commas must not follow "[", "{", or ","
		requireNonComma = open || comma;

		// Determine new depth
		// array/object open ("[" or "{"): depth += true - false (increment)
		// array/object close ("]" or "}"): depth += false - true (decrement)
		// other cases ("," or primitive): depth += true - true (numeric cast)
		depth += !close - !open;

		// Remove this token
		return "";
	} ) ) ?
		( Function( "return " + str ) )() :
		jQuery.error( "Invalid JSON: " + data );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	try {
		if ( window.DOMParser ) { // Standard
			tmp = new window.DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} else { // IE
			xml = new window.ActiveXObject( "Microsoft.XMLDOM" );
			xml.async = "false";
			xml.loadXML( data );
		}
	} catch ( e ) {
		xml = undefined;
	}
	if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,

	// IE leaves an \r character at EOL
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType.charAt( 0 ) === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) { // jscs:ignore requireDotNotation
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var

			// Cross-domain detection vars
			parts,

			// Loop variable
			i,

			// URL without anti-cache param
			cacheURL,

			// Response headers as string
			responseHeadersString,

			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,

			// Response headers
			responseHeaders,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {

								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" )
			.replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );

				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapAll( html.call( this, i ) );
			} );
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			var wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function() {
		return this.parent().each( function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		} ).end();
	}
} );


function getDisplay( elem ) {
	return elem.style && elem.style.display || jQuery.css( elem, "display" );
}

function filterHidden( elem ) {

	// Disconnected elements are considered hidden
	if ( !jQuery.contains( elem.ownerDocument || document, elem ) ) {
		return true;
	}
	while ( elem && elem.nodeType === 1 ) {
		if ( getDisplay( elem ) === "none" || elem.type === "hidden" ) {
			return true;
		}
		elem = elem.parentNode;
	}
	return false;
}

jQuery.expr.filters.hidden = function( elem ) {

	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return support.reliableHiddenOffsets() ?
		( elem.offsetWidth <= 0 && elem.offsetHeight <= 0 &&
			!elem.getClientRects().length ) :
			filterHidden( elem );
};

jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {

			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?

	// Support: IE6-IE8
	function() {

		// XHR cannot access local files, always use ActiveX for that case
		if ( this.isLocal ) {
			return createActiveXHR();
		}

		// Support: IE 9-11
		// IE seems to error on cross-domain PATCH requests when ActiveX XHR
		// is used. In IE 9+ always use the native XHR.
		// Note: this condition won't catch Edge as it doesn't define
		// document.documentMode but it also doesn't support ActiveX so it won't
		// reach this code.
		if ( document.documentMode > 8 ) {
			return createStandardXHR();
		}

		// Support: IE<9
		// oldIE XHR does not support non-RFC2616 methods (#13240)
		// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
		// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
		// Although this check for six methods instead of eight
		// since IE also does not support "trace" and "connect"
		return /^(get|post|head|put|delete|options)$/i.test( this.type ) &&
			createStandardXHR() || createActiveXHR();
	} :

	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

var xhrId = 0,
	xhrCallbacks = {},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	} );
}

// Determine support properties
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport( function( options ) {

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !options.crossDomain || support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					// Open the socket
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {

						// Support: IE<9
						// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
						// request header to a null-value.
						//
						// To keep consistent with other XHR implementations, cast the value
						// to string and ignore `undefined`.
						if ( headers[ i ] !== undefined ) {
							xhr.setRequestHeader( i, headers[ i ] + "" );
						}
					}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( options.hasContent && options.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, statusText, responses;

						// Was never called and is aborted or complete
						if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

							// Clean up
							delete xhrCallbacks[ id ];
							callback = undefined;
							xhr.onreadystatechange = jQuery.noop;

							// Abort manually if needed
							if ( isAbort ) {
								if ( xhr.readyState !== 4 ) {
									xhr.abort();
								}
							} else {
								responses = {};
								status = xhr.status;

								// Support: IE<10
								// Accessing binary-data responseText throws an exception
								// (#11426)
								if ( typeof xhr.responseText === "string" ) {
									responses.text = xhr.responseText;
								}

								// Firefox throws an exception when accessing
								// statusText for faulty cross-domain requests
								try {
									statusText = xhr.statusText;
								} catch ( e ) {

									// We normalize with Webkit giving an empty statusText
									statusText = "";
								}

								// Filter status for non standard behaviors

								// If the request is local and we have data: assume a success
								// (success with no data won't get notified, that's the best we
								// can do given current implementations)
								if ( !status && options.isLocal && !options.crossDomain ) {
									status = responses.text ? 200 : 404;

								// IE - #1450: sometimes returns 1223 when it should be 204
								} else if ( status === 1223 ) {
									status = 204;
								}
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, xhr.getAllResponseHeaders() );
						}
					};

					// Do send the request
					// `xhr.send` may raise an exception, but it will be
					// handled in jQuery.ajax (so no try/catch here)
					if ( !options.async ) {

						// If we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {

						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						window.setTimeout( callback );
					} else {

						// Register the callback, but delay it in case `xhr.send` throws
						// Add to the list of active xhr callbacks
						xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	} );
}

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch ( e ) {}
}




// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery( "head" )[ 0 ] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement( "script" );

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// data: string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off, url.length ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};





/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			jQuery.inArray( "auto", [ curCSSTop, curCSSLeft ] ) > -1;

		// need to be able to calculate position if either top or left
		// is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win,
			box = { top: 0, left: 0 },
			elem = this[ 0 ],
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== "undefined" ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? ( prop in win ) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
} );

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
	function( defaultExtra, funcName ) {

		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only,
					// but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}



var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.8.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  'use strict';

  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]), textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[name][type=file]:not([disabled])',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Up-to-date Cross-Site Request Forgery token
    csrfToken: function() {
     return $('meta[name=csrf-token]').attr('content');
    },

    // URL param that must contain the CSRF token
    csrfParam: function() {
     return $('meta[name=csrf-param]').attr('content');
    },

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = rails.csrfToken();
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Make sure that all forms have actual up-to-date tokens (cached forms contain old ones)
    refreshCSRFTokens: function(){
      $('form input[name="' + rails.csrfParam() + '"]').val(rails.csrfToken());
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element[0].href;
    },

    // Checks "data-remote" if true to handle the request through a XHR request.
    isRemote: function(element) {
      return element.data('remote') !== undefined && element.data('remote') !== false;
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.data('ujs:submit-button-formmethod') || element.attr('method');
          url = element.data('ujs:submit-button-formaction') || element.attr('action');
          data = $(element[0]).serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
          element.data('ujs:submit-button-formmethod', null);
          element.data('ujs:submit-button-formaction', null);
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: rails.isCrossDomain(url)
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Determines if the request is a cross domain request.
    isCrossDomain: function(url) {
      var originAnchor = document.createElement('a');
      originAnchor.href = location.href;
      var urlAnchor = document.createElement('a');

      try {
        urlAnchor.href = url;
        // This is a workaround to a IE bug.
        urlAnchor.href = urlAnchor.href;

        // If URL protocol is false or is a string containing a single colon
        // *and* host are false, assume it is not a cross-domain request
        // (should only be the case for IE7 and IE compatibility mode).
        // Otherwise, evaluate protocol and host of the URL against the origin
        // protocol and host.
        return !(((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host) ||
          (originAnchor.protocol + '//' + originAnchor.host ===
            urlAnchor.protocol + '//' + urlAnchor.host));
      } catch (e) {
        // If there is an error parsing the URL, assume it is crossDomain.
        return true;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = rails.csrfToken(),
        csrfParam = rails.csrfParam(),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined && !rails.isCrossDomain(href)) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element[method]());
        element[method](replacement);
      }

      element.prop('disabled', true);
      element.data('ujs:disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (element.data('ujs:enable-with') !== undefined) {
        element[method](element.data('ujs:enable-with'));
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.prop('disabled', false);
      element.removeData('ujs:disabled');
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        try {
          answer = rails.confirm(message);
        } catch (e) {
          (console.error || console.log).call(console, e.stack || e);
        }
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var foundInputs = $(),
        input,
        valueToCheck,
        radiosForNameWithNoneSelected,
        radioName,
        selector = specifiedSelector || 'input,textarea',
        requiredInputs = form.find(selector),
        checkedRadioButtonNames = {};

      requiredInputs.each(function() {
        input = $(this);
        if (input.is('input[type=radio]')) {

          // Don't count unchecked required radio as blank if other radio with same name is checked,
          // regardless of whether same-name radio input has required attribute or not. The spec
          // states https://www.w3.org/TR/html5/forms.html#the-required-attribute
          radioName = input.attr('name');

          // Skip if we've already seen the radio with this name.
          if (!checkedRadioButtonNames[radioName]) {

            // If none checked
            if (form.find('input[type=radio]:checked[name="' + radioName + '"]').length === 0) {
              radiosForNameWithNoneSelected = form.find(
                'input[type=radio][name="' + radioName + '"]');
              foundInputs = foundInputs.add(radiosForNameWithNoneSelected);
            }

            // We only need to check each name once.
            checkedRadioButtonNames[radioName] = radioName;
          }
        } else {
          valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : !!input.val();
          if (valueToCheck === nonBlank) {
            foundInputs = foundInputs.add(input);
          }
        }
      });
      return foundInputs.length ? foundInputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  Replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element.html()); // store enabled state
        element.html(replacement);
      }

      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
      element.data('ujs:disabled', true);
    },

    // Restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
      element.removeData('ujs:disabled');
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    // This event works the same as the load event, except that it fires every
    // time the page is loaded.
    //
    // See https://github.com/rails/jquery-ujs/issues/357
    // See https://developer.mozilla.org/en-US/docs/Using_Firefox_1.5_caching
    $(window).on('pageshow.rails', function () {
      $($.rails.enableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableFormElement(element);
        }
      });

      $($.rails.linkDisableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableElement(element);
        }
      });
    });

    $document.on('ajax:complete', rails.linkDisableSelector, function() {
        rails.enableElement($(this));
    });

    $document.on('ajax:complete', rails.buttonDisableSelector, function() {
        rails.enableFormElement($(this));
    });

    $document.on('click.rails', rails.linkClickSelector, function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (rails.isRemote(link)) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // Response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.fail( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (method) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.on('click.rails', rails.buttonClickSelector, function(e) {
      var button = $(this);

      if (!rails.allowAction(button) || !rails.isRemote(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // Response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.fail( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.on('change.rails', rails.inputChangeSelector, function(e) {
      var link = $(this);
      if (!rails.allowAction(link) || !rails.isRemote(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.on('submit.rails', rails.formSubmitSelector, function(e) {
      var form = $(this),
        remote = rails.isRemote(form),
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // Skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') === undefined) {
        if (form.data('ujs:formnovalidate-button') === undefined) {
          blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector, false);
          if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
            return rails.stopEverything(e);
          }
        } else {
          // Clear the formnovalidate in case the next button click is not on a formnovalidate button
          // Not strictly necessary to do here, since it is also reset on each button click, but just to be certain
          form.data('ujs:formnovalidate-button', undefined);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // Slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // Re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // Slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.on('click.rails', rails.formInputClickSelector, function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // Register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      var form = button.closest('form');
      if (form.length === 0) {
        form = $('#' + button.attr('form'));
      }
      form.data('ujs:submit-button', data);

      // Save attributes from button
      form.data('ujs:formnovalidate-button', button.attr('formnovalidate'));
      form.data('ujs:submit-button-formaction', button.attr('formaction'));
      form.data('ujs:submit-button-formmethod', button.attr('formmethod'));
    });

    $document.on('ajax:send.rails', rails.formSubmitSelector, function(event) {
      if (this === event.target) rails.disableFormElements($(this));
    });

    $document.on('ajax:complete.rails', rails.formSubmitSelector, function(event) {
      if (this === event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
var markers = [],
	map,
	directionsBtn;

function initialize() {
	var lat = parseFloat(gon.lat),
		lng = parseFloat(gon.lng);

	var myOptions = {
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: {
			lat: lat,
			lng: lng
		},
		zoom: 12,
		scrollwheel: false,
		draggable: true,
	};
	var directionsService = new google.maps.DirectionsService(),
		directionsDisplay = new google.maps.DirectionsRenderer(),
		directionsBtn = document.getElementById('directionsBtn'),
		directionForm = document.getElementById('directionForm'),
		mapCanvas = document.getElementById('map'),
		map = new google.maps.Map(mapCanvas, myOptions),
		placeInput = document.getElementById('marker_place_id'),

		addressInput = new google.maps.places.SearchBox(document.getElementById('marker_raw_address')),
		form = document.getElementById('form'),
		markLat = document.getElementById('marker_latitude'),
		markLng = document.getElementById('marker_longitude');

	form.addEventListener("submit", autoComplete);
	map.addListener('bounds_changed', function() {
		addressInput.setBounds(map.getBounds());
	});
	/*
	 * passes place_id from exisiting marker models to getPlaceFromId
	 * traverses hidden table and assigns place_id to the corresponding
	 * markers row
	 */
	document.addEventListener("DOMContentLoaded", function() {
		var placeIds = gon.place_id;
		var id = gon.marker;
		var j = 0
		console.log("j:" + j)
		var interval = setInterval(function() {
			if (j >= placeIds.length) {
				console.log("caling clear interval" + j);
				clearInterval(interval);
			} else {
				var placeId = placeIds[j];
				console.log("calling place from IDs: " + "j:" + j + "pID:" + placeId);
				j++;
				getPlaceFromId(placeId);
			};
		}, 100);
	});


	/*
	 * This function adds existing markers to map
	 * gets google place object through place service request with
	 * place_id's from above;
	 * Calls addMarker on returned place.
	 */
	function getPlaceFromId(place) {

		var request = {
			placeId: place
		};
		var service = new google.maps.places.PlacesService(map);
		service.getDetails(request, callback);

		function callback(place, status) {
			if (status == google.maps.places.PlacesServiceStatus.OK) {

				setInterval(addMarker(place), 100);
			} else {
				setTimeout(function() {
					service.getDetails(request, callback);
				}, 500);
			};
		};
	};


	/*
	 * Auto completes addressInput on form; then gets place on form submit.
	 * Adds place_id to hidden Marker form field
	 * Passes place to addMarker.
	 * Redraws maps bounds to focus on new place/marker
	 */
	function autoComplete() {
		var Gplace = addressInput.getPlaces();
		var bounds = new google.maps.LatLngBounds();
		Gplace.forEach(function(place) {
			if (!place.geometry) {
				console.log("Returned place contains no geometry");
				return;
			}

			if (place.geometry.viewport) {
				// Only geocodes have viewport.
				bounds.union(place.geometry.viewport);
			} else {
				bounds.extend(place.geometry.location);
			}
			console.log("In autoComplete");
			var placeId = place.place_id;
			placeInput.value = placeId;
			addMarker(place);
		});
		map.fitBounds(bounds);
	};


	/*
	 * assigns icon; creates marker pushes to markers array; 
	 * makes Getdetails request from places api
	 * binds formatInfoWindow() to the marker(this = this.marker)
	 */
	function addMarker(place) {
		console.log("in addMarker");
		var icon = {
			url: place.icon,
			size: new google.maps.Size(71, 71),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(17, 34),
			scaledSize: new google.maps.Size(25, 25)
		};
		var marker = new google.maps.Marker({
			map: map,
			icon: icon,
			title: place.name,
			position: place.geometry.location
		});
		markers.push(marker);
		marker.infowindow = new InfoBubble({
			maxWidth: 300
		});

		var markerCluster = new MarkerClusterer(map, markers, {
			imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
		});

		formatInfoWindow(marker, place);
	};

	/*
	 * Creates infowindow template based on returned GetDetails request
	 * Replaces #variable# in template w/ corresponding placeInfo[prop]
	 * Opens infowindow w/ specified content
	 * calls editInfo to add tab w/ edit form
	 */
	function formatInfoWindow(marker, place) {
		var infos = gon.info,
			ids = gon.markerId,
			pIDs = gon.place_id;
		pIDs.forEach(function(pID, i) {
			if (place.place_id === pID) {
				marker.info = (infos[i]).trim();
				marker.id = ids[i];
			}
		}, marker);

		try {
			var placeInfo = {
				name: place.name,
				open: place.opening_hours.open_now,
				address: place.vicinity,
				coords: place.geometry.location,
				phoneI: place.international_phone_number,
				phone: place.formatted_phone_number,
				rating: place.rating,
				reviewAuth: place.reviews[0].author_name,
				reviewText: place.reviews[0].text,
				reviewRate: place.reviews[0].rating,
				website: place.website,
				img: place.photos[0],
				photo: img.getUrl(),
				info: marker.info,
				id: marker.id
			}
		} catch (e) {
			try {
				placeInfo = {
					name: place.name,
					open: place.opening_hours.open_now,
					address: place.vicinity,
					coords: place.geometry.location,
					phoneI: place.international_phone_number,
					phone: place.formatted_phone_number,
					rating: place.rating,
					reviewAuth: place.reviews[0].author_name,
					reviewText: place.reviews[0].text,
					reviewRate: place.reviews[0].rating,
					website: place.website,
					info: marker.info,
					id: marker.id
				}
			} catch (e) {
				placeInfo = {
					name: place.name,
					address: place.vicinity,
					coords: place.geometry.location,
					phoneI: place.international_phone_number,
					phone: place.formatted_phone_number,
					rating: place.rating,
					website: place.website,
					info: marker.info,
					id: marker.id
				}

			}
		}
		var content = HandlebarsTemplates['infowindow'](placeInfo);
		marker.infowindow.addTab(placeInfo.name, content);
		var editContent = HandlebarsTemplates['editInfo'](placeInfo);
		marker.infowindow.addTab('Edit Info', editContent)

		document.onload = google.maps.event.addListener(marker, 'click', function() {
			
			
			//editInfo(marker, placeInfo.name);
			addEvent(marker, marker.id);
			if (!marker.infowindow.isOpen()) {
				geoLocate(place);
				marker.infowindow.open(map, marker);
				directionForm.style.display = "inherit";
			}

		});

		document.onload = google.maps.event.addListener(marker.infowindow, 'closeclick', function() {
				directionForm.style.display = "none";
		});
}


/*
 *Creates infobubble tab with marker update form in it
 */
function editInfo(marker, name) {
	marker.infowindow.removeTab(2);
	//iForm.innerHTML = "";
	var id = marker.id,
		info = marker.info;
	var iForm =
		"<div id=infoForm >" +
		"<form action='/markers/" + id + "/update' method='patch'>" +
		"<p>" + name + "</p>" +
		"<p><textarea name='marker[info]' id='marker_info'>" + info + "</textarea></p>" +
		"<p><input type='submit' value='Update'></p>" +
		"</form>" +
		"<a href='/markers/" + id + "' controller='markers' data-method='delete' id='infoDelBtn'>Delete Marker</a>"
		"</div>";

	marker.infowindow.addTab('Edit Info', iForm);
};


function addEvent(marker, id) {
	marker.infowindow.removeTab(2);
	var mapId = gon.map_id;
	var calForm =
		"<div id='calForm'>" +
		"<form class='new_event' id='new_event' enctype='multipart/form-data' action='/events' method='post'>" +
		"<div class='field'><label for='event_name'>Name:</label>" +
		"<input type='text' name='event[name]' id='event_name'></div>" +

		"<div class='field'>" +
		"<input type='hidden' name='event[map_id]' id='event_map_id' value='" + mapId + "'></div>" +

		"<div class='field'>" +
		"<input type='hidden' name='event[marker_id]' id='event_marker_id' value='" + id + "'></div>" +

		"<div class='field'><label for='event_start_time'>Start Date:</label>" +
		"<select id='event_start_time_1i' name='event[start_time(1i)]'>" +
		"<option value='2017'>2017</option>" +
		"<option value='2018'>2018</option>" +
		"<option value='2019'>2019</option>" +
		"<option value='2020'>2020</option>" +
		"<option value='2021'>2021</option>" +
		"<option value='2022'>2022</option>" +
		"<option value='2023'>2023</option>" +
		"<option value='2024'>2024</option>" +
		"</select>" +
		"<select id='event_start_time_2i' name='event[start_time(2i)]'>" +
		"<option value='1'>January</option>" +
		"<option value='2'>February</option>" +
		"<option value='3'>March</option>" +
		"<option value='4'>April</option>" +
		"<option value='5'>May</option>" +
		"<option value='6'>June</option>" +
		"<option value='7'>July</option>" +
		"<option value='8'>August</option>" +
		"<option value='9'>September</option>" +
		"<option value='10'>October</option>" +
		"<option value='11'>November</option>" +
		"<option value='12'>December</option>" +
		"</select>" +
		"<select id='event_start_time_3i' name='event[start_time(3i)]'>" +
		"<option value='1'>1</option>" +
		"<option value='2'>2</option>" +
		"<option value='3'>3</option>" +
		"<option value='4'>4</option>" +
		"<option value='5'>5</option>" +
		"<option value='6'>6</option>" +
		"<option value='7'>7</option>" +
		"<option value='8'>8</option>" +
		"<option value='9'>9</option>" +
		"<option value='10'>10</option>" +
		"<option value='11'>11</option>" +
		"<option value='12'>12</option>" +
		"<option value='13'>13</option>" +
		"<option value='14'>14</option>" +
		"<option value='15'>15</option>" +
		"<option value='16'>16</option>" +
		"<option value='17'>17</option>" +
		"<option value='18'>18</option>" +
		"<option value='19'>19</option>" +
		"<option value='20'>20</option>" +
		"<option value='21'>21</option>" +
		"<option value='22'>22</option>" +
		"<option value='23'>23</option>" +
		"<option value='24'>24</option>" +
		"<option value='25'>25</option>" +
		"<option value='26'>26</option>" +
		"<option value='27'>27</option>" +
		"<option value='28'>28</option>" +
		"<option value='29'>29</option>" +
		"<option value='30'>30</option>" +
		"<option value='31'>31</option>" +
		"</select></div>" +
		"<div class='field'><label for='event_end_time'>End Date:</label>" +
		"<select id='event_end_time_1i' name='event[end_time(1i)]'>" +
		"<option value='2017'>2017</option>" +
		"<option value='2018'>2018</option>" +
		"<option value='2019'>2019</option>" +
		"<option value='2020'>2020</option>" +
		"<option value='2021'>2021</option>" +
		"<option value='2022'>2022</option>" +
		"<option value='2023'>2023</option>" +
		"<option value='2024'>2024</option>" +
		"</select>" +
		"<select id='event_end_time_2i' name='event[end_time(2i)]'>" +
		"<option value='1'>January</option>" +
		"<option value='2'>February</option>" +
		"<option value='3'>March</option>" +
		"<option value='4'>April</option>" +
		"<option value='5'>May</option>" +
		"<option value='6'>June</option>" +
		"<option value='7'>July</option>" +
		"<option value='8'>August</option>" +
		"<option value='9'>September</option>" +
		"<option value='10'>October</option>" +
		"<option value='11'>November</option>" +
		"<option value='12'>December</option>" +
		"</select>" +
		"<select id='event_end_time_3i' name='event[end_time(3i)]'>" +
		"<option value='1'>1</option>" +
		"<option value='2'>2</option>" +
		"<option value='3'>3</option>" +
		"<option value='4'>4</option>" +
		"<option value='5'>5</option>" +
		"<option value='6'>6</option>" +
		"<option value='7'>7</option>" +
		"<option value='8'>8</option>" +
		"<option value='9'>9</option>" +
		"<option value='10'>10</option>" +
		"<option value='11'>11</option>" +
		"<option value='12'>12</option>" +
		"<option value='13'>13</option>" +
		"<option value='14'>14</option>" +
		"<option value='15'>15</option>" +
		"<option value='16'>16</option>" +
		"<option value='17'>17</option>" +
		"<option value='18'>18</option>" +
		"<option value='19'>19</option>" +
		"<option value='20'>20</option>" +
		"<option value='21'>21</option>" +
		"<option value='22'>22</option>" +
		"<option value='23'>23</option>" +
		"<option value='24'>24</option>" +
		"<option value='25'>25</option>" +
		"<option value='26'>26</option>" +
		"<option value='27'>27</option>" +
		"<option value='28'>28</option>" +
		"<option value='29'>29</option>" +
		"<option value='30'>30</option>" +
		"<option value='31'>31</option>" +
		"</select></div>" +
		"<div class='field'><label for='event_document'>Document</label>" +
		"<input type='file' name='event[document]' id='event_document'></div>" +
		"<div class='actions'>" +
		"<input type='submit' value='Create Event' name='commit'></div>" +
		"</form>" +
		"</div>";
	marker.infowindow.addTab('Add Event', calForm);
};


function getDirections(place, latLng) {
	directionsDisplay.setMap(map);
	directionsDisplay.setPanel(document.getElementById('right-panel'));
	var control = document.getElementById('directionForm');
	control.style.display = 'block';
	map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
	var start = latLng,
		end = place.geometry.location,
		mode = document.getElementById('mode').value;
	var request = {
		origin: start,
		destination: end,
		travelMode: google.maps.TravelMode[mode]
	};
	directionsService.route(request, function(result, status) {
		if (status == 'OK') {
			directionsDisplay.setDirections(result);
		} else {
			console.log("error: " + status);
		}
	});
}


function geoLocate(place) {
	if (navigator.geolocation) {
		navigator.geolocation.watchPosition(function(position) {
			showPosition(position, place)
		});
	} else {
		alert("Geolocation is not supported by this browser.");
	}
}


function showPosition(position, place) {
	directionsBtn.onclick = function() {
		var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		getDirections(place, latLng);
	};
};
};
(function(){var b;
function h(a){this.extend(h,google.maps.OverlayView);this.b=[];this.d=null;this.g=100;this.m=!1;a=a||{};void 0==a.backgroundColor&&(a.backgroundColor=this.A);void 0==a.borderColor&&(a.borderColor=this.B);void 0==a.borderRadius&&(a.borderRadius=this.C);void 0==a.borderWidth&&(a.borderWidth=this.D);void 0==a.padding&&(a.padding=this.H);void 0==a.arrowPosition&&(a.arrowPosition=this.u);void 0==a.disableAutoPan&&(a.disableAutoPan=!1);void 0==a.disableAnimation&&(a.disableAnimation=!1);void 0==a.minWidth&&(a.minWidth=
this.G);void 0==a.shadowStyle&&(a.shadowStyle=this.I);void 0==a.arrowSize&&(a.arrowSize=this.v);void 0==a.arrowStyle&&(a.arrowStyle=this.w);void 0==a.closeSrc&&(a.closeSrc=this.F);m(this);this.setValues(a)}window.InfoBubble=h;b=h.prototype;b.v=15;b.w=0;b.I=1;b.G=50;b.u=50;b.H=10;b.D=1;b.B="#ccc";b.C=10;b.A="#fff";b.F="https://maps.gstatic.com/intl/en_us/mapfiles/iw_close.gif";b.extend=function(a,c){return function(a){for(var c in a.prototype)this.prototype[c]=a.prototype[c];return this}.apply(a,[c])};
function m(a){var c=a.c=document.createElement("DIV");c.style.position="absolute";c.style.zIndex=a.g;(a.i=document.createElement("DIV")).style.position="relative";var d=a.j=document.createElement("IMG");d.style.position="absolute";d.style.border=0;d.style.zIndex=a.g+1;d.style.cursor="pointer";d.className="js-info-bubble-close";d.src=a.get("closeSrc");google.maps.event.addDomListener(d,"click",function(){a.close();google.maps.event.trigger(a,"closeclick")});var e=a.e=document.createElement("DIV");e.style.overflowX="auto";e.style.overflowY=
"auto";e.style.cursor="default";e.style.clear="both";e.style.position="relative";var f=a.k=document.createElement("DIV");e.appendChild(f);f=a.N=document.createElement("DIV");f.style.position="relative";var k=a.n=document.createElement("DIV"),g=a.l=document.createElement("DIV"),l=n(a);k.style.position=g.style.position="absolute";k.style.left=g.style.left="50%";k.style.height=g.style.height="0";k.style.width=g.style.width="0";k.style.marginLeft=t(-l);k.style.borderWidth=t(l);k.style.borderBottomWidth=
0;l=a.a=document.createElement("DIV");l.style.position="absolute";c.style.display=l.style.display="none";c.appendChild(a.i);c.appendChild(d);c.appendChild(e);f.appendChild(k);f.appendChild(g);c.appendChild(f);c=document.createElement("style");c.setAttribute("type","text/css");a.h="_ibani_"+Math.round(1E4*Math.random());c.textContent="."+a.h+"{-webkit-animation-name:"+a.h+";-webkit-animation-duration:0.5s;-webkit-animation-iteration-count:1;}@-webkit-keyframes "+a.h+" {from {-webkit-transform: scale(0)}50% {-webkit-transform: scale(1.2)}90% {-webkit-transform: scale(0.95)}to {-webkit-transform: scale(1)}}";
document.getElementsByTagName("head")[0].appendChild(c)}b.ea=function(a){this.set("backgroundClassName",a)};h.prototype.setBackgroundClassName=h.prototype.ea;h.prototype.O=function(){this.k.className=this.get("backgroundClassName")};h.prototype.backgroundClassName_changed=h.prototype.O;h.prototype.pa=function(a){this.set("tabClassName",a)};h.prototype.setTabClassName=h.prototype.pa;h.prototype.sa=function(){w(this)};h.prototype.tabClassName_changed=h.prototype.sa;
h.prototype.da=function(a){this.set("arrowStyle",a)};h.prototype.setArrowStyle=h.prototype.da;h.prototype.M=function(){this.p()};h.prototype.arrowStyle_changed=h.prototype.M;function n(a){return parseInt(a.get("arrowSize"),10)||0}h.prototype.ca=function(a){this.set("arrowSize",a)};h.prototype.setArrowSize=h.prototype.ca;h.prototype.p=function(){this.r()};h.prototype.arrowSize_changed=h.prototype.p;h.prototype.ba=function(a){this.set("arrowPosition",a)};h.prototype.setArrowPosition=h.prototype.ba;
h.prototype.L=function(){var a=parseInt(this.get("arrowPosition"),10)||0;this.n.style.left=this.l.style.left=a+"%";x(this)};h.prototype.arrowPosition_changed=h.prototype.L;h.prototype.setZIndex=function(a){this.set("zIndex",a)};h.prototype.setZIndex=h.prototype.setZIndex;h.prototype.getZIndex=function(){return parseInt(this.get("zIndex"),10)||this.g};h.prototype.ua=function(){var a=this.getZIndex();this.c.style.zIndex=this.g=a;this.j.style.zIndex=a+1};h.prototype.zIndex_changed=h.prototype.ua;
h.prototype.na=function(a){this.set("shadowStyle",a)};h.prototype.setShadowStyle=h.prototype.na;h.prototype.qa=function(){var a="",c="",d="";switch(parseInt(this.get("shadowStyle"),10)||0){case 0:a="none";break;case 1:c="40px 15px 10px rgba(33,33,33,0.3)";d="transparent";break;case 2:c="0 0 2px rgba(33,33,33,0.3)",d="rgba(33,33,33,0.35)"}this.a.style.boxShadow=this.a.style.webkitBoxShadow=this.a.style.MozBoxShadow=c;this.a.style.backgroundColor=d;this.m&&(this.a.style.display=a,this.draw())};
h.prototype.shadowStyle_changed=h.prototype.qa;h.prototype.ra=function(){this.set("hideCloseButton",!1)};h.prototype.showCloseButton=h.prototype.ra;h.prototype.R=function(){this.set("hideCloseButton",!0)};h.prototype.hideCloseButton=h.prototype.R;h.prototype.S=function(){this.j.style.display=this.get("hideCloseButton")?"none":""};h.prototype.hideCloseButton_changed=h.prototype.S;h.prototype.setBackgroundColor=function(a){a&&this.set("backgroundColor",a)};h.prototype.setBackgroundColor=h.prototype.setBackgroundColor;
h.prototype.P=function(){var a=this.get("backgroundColor");this.e.style.backgroundColor=a;this.l.style.borderColor=a+" transparent transparent";w(this)};h.prototype.backgroundColor_changed=h.prototype.P;h.prototype.setBorderColor=function(a){a&&this.set("borderColor",a)};h.prototype.setBorderColor=h.prototype.setBorderColor;
h.prototype.Q=function(){var a=this.get("borderColor"),c=this.e,d=this.n;c.style.borderColor=a;d.style.borderColor=a+" transparent transparent";c.style.borderStyle=d.style.borderStyle=this.l.style.borderStyle="solid";w(this)};h.prototype.borderColor_changed=h.prototype.Q;h.prototype.fa=function(a){this.set("borderRadius",a)};h.prototype.setBorderRadius=h.prototype.fa;function z(a){return parseInt(a.get("borderRadius"),10)||0}
h.prototype.q=function(){var a=z(this),c=A(this);this.e.style.borderRadius=this.e.style.MozBorderRadius=this.e.style.webkitBorderRadius=this.a.style.borderRadius=this.a.style.MozBorderRadius=this.a.style.webkitBorderRadius=t(a);this.i.style.paddingLeft=this.i.style.paddingRight=t(a+c);x(this)};h.prototype.borderRadius_changed=h.prototype.q;function A(a){return parseInt(a.get("borderWidth"),10)||0}h.prototype.ga=function(a){this.set("borderWidth",a)};h.prototype.setBorderWidth=h.prototype.ga;
h.prototype.r=function(){var a=A(this);this.e.style.borderWidth=t(a);this.i.style.top=t(a);var a=A(this),c=n(this),d=parseInt(this.get("arrowStyle"),10)||0,e=t(c),f=t(Math.max(0,c-a)),k=this.n,g=this.l;this.N.style.marginTop=t(-a);k.style.borderTopWidth=e;g.style.borderTopWidth=f;0==d||1==d?(k.style.borderLeftWidth=e,g.style.borderLeftWidth=f):k.style.borderLeftWidth=g.style.borderLeftWidth=0;0==d||2==d?(k.style.borderRightWidth=e,g.style.borderRightWidth=f):k.style.borderRightWidth=g.style.borderRightWidth=
0;2>d?(k.style.marginLeft=t(-c),g.style.marginLeft=t(-(c-a))):k.style.marginLeft=g.style.marginLeft=0;k.style.display=0==a?"none":"";w(this);this.q();x(this)};h.prototype.borderWidth_changed=h.prototype.r;h.prototype.ma=function(a){this.set("padding",a)};h.prototype.setPadding=h.prototype.ma;h.prototype.ha=function(a){a&&this.j&&(this.j.src=a)};h.prototype.setCloseSrc=h.prototype.ha;function B(a){return parseInt(a.get("padding"),10)||0}
h.prototype.Z=function(){var a=B(this);this.e.style.padding=t(a);w(this);x(this)};h.prototype.padding_changed=h.prototype.Z;function t(a){return a?a+"px":a}function C(a){var c="mousedown mousemove mouseover mouseout mouseup mousewheel DOMMouseScroll touchstart touchend touchmove dblclick contextmenu click".split(" "),d=a.c;a.s=[];for(var e=0,f;f=c[e];e++)a.s.push(google.maps.event.addDomListener(d,f,function(a){a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()}))}
h.prototype.onAdd=function(){this.c||m(this);C(this);var a=this.getPanes();a&&(a.floatPane.appendChild(this.c),a.floatShadow.appendChild(this.a))};h.prototype.onAdd=h.prototype.onAdd;
h.prototype.draw=function(){var a=this.getProjection();if(a){var c=this.get("position");if(c){var d=0;this.d&&(d=this.d.offsetHeight);var e=D(this),f=n(this),k=parseInt(this.get("arrowPosition"),10)||0,k=k/100,a=a.fromLatLngToDivPixel(c),c=this.e.offsetWidth,g=this.c.offsetHeight;if(c){g=a.y-(g+f);e&&(g-=e);var l=a.x-c*k;this.c.style.top=t(g);this.c.style.left=t(l);switch(parseInt(this.get("shadowStyle"),10)){case 1:this.a.style.top=t(g+d-1);this.a.style.left=t(l);this.a.style.width=t(c);this.a.style.height=
t(this.e.offsetHeight-f);break;case 2:c*=.8,this.a.style.top=e?t(a.y):t(a.y+f),this.a.style.left=t(a.x-c*k),this.a.style.width=t(c),this.a.style.height=t(2)}}}else this.close()}};h.prototype.draw=h.prototype.draw;h.prototype.onRemove=function(){this.c&&this.c.parentNode&&this.c.parentNode.removeChild(this.c);this.a&&this.a.parentNode&&this.a.parentNode.removeChild(this.a);for(var a=0,c;c=this.s[a];a++)google.maps.event.removeListener(c)};h.prototype.onRemove=h.prototype.onRemove;h.prototype.T=function(){return this.m};
h.prototype.isOpen=h.prototype.T;h.prototype.close=function(){this.c&&(this.c.style.display="none",this.c.className=this.c.className.replace(this.h,""));this.a&&(this.a.style.display="none",this.a.className=this.a.className.replace(this.h,""));this.m=!1};h.prototype.close=h.prototype.close;h.prototype.open=function(a,c){var d=this;window.setTimeout(function(){E(d,a,c)},0)};
function E(a,c,d){F(a);c&&a.setMap(c);d&&(a.set("anchor",d),a.bindTo("anchorPoint",d),a.bindTo("position",d));a.c.style.display=a.a.style.display="";a.get("disableAnimation")||(a.c.className+=" "+a.h,a.a.className+=" "+a.h);x(a);a.m=!0;a.get("disableAutoPan")||window.setTimeout(function(){a.o()},200)}h.prototype.open=h.prototype.open;h.prototype.setPosition=function(a){a&&this.set("position",a)};h.prototype.setPosition=h.prototype.setPosition;h.prototype.getPosition=function(){return this.get("position")};
h.prototype.getPosition=h.prototype.getPosition;h.prototype.$=function(){this.draw()};h.prototype.position_changed=h.prototype.$;h.prototype.o=function(){var a=this.getProjection();if(a&&this.c){var c=D(this),d=this.c.offsetHeight+c,c=this.get("map"),e=c.getDiv().offsetHeight,f=this.getPosition(),k=a.fromLatLngToContainerPixel(c.getCenter()),f=a.fromLatLngToContainerPixel(f),d=k.y-d,e=e-k.y,k=0;0>d&&(k=(-1*d+e)/2);f.y-=k;f=a.fromContainerPixelToLatLng(f);c.getCenter()!=f&&c.panTo(f)}};
h.prototype.panToView=h.prototype.o;function G(a){a=a.replace(/^\s*([\S\s]*)\b\s*$/,"$1");var c=document.createElement("DIV");c.innerHTML=a;if(1==c.childNodes.length)return c.removeChild(c.firstChild);for(a=document.createDocumentFragment();c.firstChild;)a.appendChild(c.firstChild);return a}function H(a){if(a)for(var c;c=a.firstChild;)a.removeChild(c)}h.prototype.setContent=function(a){this.set("content",a)};h.prototype.setContent=h.prototype.setContent;h.prototype.getContent=function(){return this.get("content")};
h.prototype.getContent=h.prototype.getContent;function F(a){if(a.k){H(a.k);var c=a.getContent();if(c){"string"==typeof c&&(c=G(c));a.k.appendChild(c);for(var c=a.k.getElementsByTagName("IMG"),d=0,e;e=c[d];d++)google.maps.event.addDomListener(e,"load",function(){var c=!a.get("disableAutoPan");x(a);!c||0!=a.b.length&&0!=a.d.index||a.o()});google.maps.event.trigger(a,"domready")}x(a)}}
function w(a){if(a.b&&a.b.length){for(var c=0,d;d=a.b[c];c++)I(a,d.f);a.d.style.zIndex=a.g;c=A(a);d=B(a)/2;a.d.style.borderBottomWidth=0;a.d.style.paddingBottom=t(d+c)}}
function I(a,c){var d=a.get("backgroundColor"),e=a.get("borderColor"),f=z(a),k=A(a),g=B(a),l=t(-Math.max(g,f)),f=t(f),r=a.g;c.index&&(r-=c.index);var d={cssFloat:"left",position:"relative",cursor:"pointer",backgroundColor:d,border:t(k)+" solid "+e,padding:t(g/2)+" "+t(g),marginRight:l,whiteSpace:"nowrap",borderRadiusTopLeft:f,MozBorderRadiusTopleft:f,webkitBorderTopLeftRadius:f,borderRadiusTopRight:f,MozBorderRadiusTopright:f,webkitBorderTopRightRadius:f,zIndex:r,display:"inline"},p;for(p in d)c.style[p]=
d[p];p=a.get("tabClassName");void 0!=p&&(c.className+=" "+p)}function J(a,c){c.U=google.maps.event.addDomListener(c,"click",function(){K(a,this)})}h.prototype.oa=function(a){(a=this.b[a-1])&&K(this,a.f)};h.prototype.setTabActive=h.prototype.oa;
function K(a,c){if(c){var d=B(a)/2,e=A(a);if(a.d){var f=a.d;f.style.zIndex=a.g-f.index;f.style.paddingBottom=t(d);f.style.borderBottomWidth=t(e)}c.style.zIndex=a.g;c.style.borderBottomWidth=0;c.style.marginBottomWidth="-10px";c.style.paddingBottom=t(d+e);a.setContent(a.b[c.index].content);F(a);a.d=c;x(a)}else a.setContent(""),F(a)}h.prototype.ja=function(a){this.set("maxWidth",a)};h.prototype.setMaxWidth=h.prototype.ja;h.prototype.W=function(){x(this)};h.prototype.maxWidth_changed=h.prototype.W;
h.prototype.ia=function(a){this.set("maxHeight",a)};h.prototype.setMaxHeight=h.prototype.ia;h.prototype.V=function(){x(this)};h.prototype.maxHeight_changed=h.prototype.V;h.prototype.la=function(a){this.set("minWidth",a)};h.prototype.setMinWidth=h.prototype.la;h.prototype.Y=function(){x(this)};h.prototype.minWidth_changed=h.prototype.Y;h.prototype.ka=function(a){this.set("minHeight",a)};h.prototype.setMinHeight=h.prototype.ka;h.prototype.X=function(){x(this)};h.prototype.minHeight_changed=h.prototype.X;
h.prototype.J=function(a,c){var d=document.createElement("DIV");d.innerHTML=a;I(this,d);J(this,d);this.i.appendChild(d);this.b.push({label:a,content:c,f:d});d.index=this.b.length-1;d.style.zIndex=this.g-d.index;this.d||K(this,d);d.className=d.className+" "+this.h;x(this)};h.prototype.addTab=h.prototype.J;
h.prototype.ta=function(a,c,d){!this.b.length||0>a||a>=this.b.length||(a=this.b[a],void 0!=c&&(a.f.innerHTML=a.label=c),void 0!=d&&(a.content=d),this.d==a.f&&(this.setContent(a.content),F(this)),x(this))};h.prototype.updateTab=h.prototype.ta;
h.prototype.aa=function(a){if(!(!this.b.length||0>a||a>=this.b.length)){var c=this.b[a];c.f.parentNode.removeChild(c.f);google.maps.event.removeListener(c.f.U);this.b.splice(a,1);delete c;for(var d=0,e;e=this.b[d];d++)e.f.index=d;c.f==this.d&&(this.d=this.b[a]?this.b[a].f:this.b[a-1]?this.b[a-1].f:void 0,K(this,this.d));x(this)}};h.prototype.removeTab=h.prototype.aa;
function L(a,c,d){var e=document.createElement("DIV");e.style.display="inline";e.style.position="absolute";e.style.visibility="hidden";"string"==typeof a?e.innerHTML=a:e.appendChild(a.cloneNode(!0));document.body.appendChild(e);a=new google.maps.Size(e.offsetWidth,e.offsetHeight);c&&a.width>c&&(e.style.width=t(c),a=new google.maps.Size(e.offsetWidth,e.offsetHeight));d&&a.height>d&&(e.style.height=t(d),a=new google.maps.Size(e.offsetWidth,e.offsetHeight));document.body.removeChild(e);delete e;return a}
function x(a){var c=a.get("map");if(c){var d=B(a);A(a);z(a);var e=n(a),f=c.getDiv(),k=2*e,c=f.offsetWidth-k,f=f.offsetHeight-k-D(a),k=0,g=a.get("minWidth")||0,l=a.get("minHeight")||0,r=a.get("maxWidth")||0,p=a.get("maxHeight")||0,r=Math.min(c,r),p=Math.min(f,p),y=0;if(a.b.length)for(var u=0,q;q=a.b[u];u++){var v=L(q.f,r,p);q=L(q.content,r,p);g<v.width&&(g=v.width);y+=v.width;l<v.height&&(l=v.height);v.height>k&&(k=v.height);g<q.width&&(g=q.width);l<q.height&&(l=q.height)}else u=a.get("content"),"string"==
typeof u&&(u=G(u)),u&&(q=L(u,r,p),g<q.width&&(g=q.width),l<q.height&&(l=q.height));r&&(g=Math.min(g,r));p&&(l=Math.min(l,p));g=Math.max(g,y);g==y&&(g+=2*d);g=Math.max(g,2*e);g>c&&(g=c);l>f&&(l=f-k);a.i&&(a.t=k,a.i.style.width=t(y));a.e.style.width=t(g);a.e.style.height=t(l)}z(a);d=A(a);c=2;a.b.length&&a.t&&(c+=a.t);e=2+d;(f=a.e)&&f.clientHeight<f.scrollHeight&&(e+=15);a.j.style.right=t(e);a.j.style.top=t(c+d);a.draw()}function D(a){return a.get("anchor")&&(a=a.get("anchorPoint"))?-1*a.y:0}
h.prototype.K=function(){this.draw()};h.prototype.anchorPoint_changed=h.prototype.K;})();
// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @externs_url http://closure-compiler.googlecode.com/svn/trunk/contrib/externs/maps/google_maps_api_v3_3.js
// ==/ClosureCompiler==

/**
 * @name MarkerClusterer for Google Maps v3
 * @version version 1.0.1
 * @author Luke Mahe
 * @fileoverview
 * The library creates and manages per-zoom-level clusters for large amounts of
 * markers.
 * <br/>
 * This is a v3 implementation of the
 * <a href="http://gmaps-utility-library-dev.googlecode.com/svn/tags/markerclusterer/"
 * >v2 MarkerClusterer</a>.
 */

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * A Marker Clusterer that clusters markers.
 *
 * @param {google.maps.Map} map The Google map to attach to.
 * @param {Array.<google.maps.Marker>=} opt_markers Optional markers to add to
 *   the cluster.
 * @param {Object=} opt_options support the following options:
 *     'gridSize': (number) The grid size of a cluster in pixels.
 *     'maxZoom': (number) The maximum zoom level that a marker can be part of a
 *                cluster.
 *     'zoomOnClick': (boolean) Whether the default behaviour of clicking on a
 *                    cluster is to zoom into it.
 *     'imagePath': (string) The base URL where the images representing
 *                  clusters will be found. The full URL will be:
 *                  {imagePath}[1-5].{imageExtension}
 *                  Default: '../images/m'.
 *     'imageExtension': (string) The suffix for images URL representing
 *                       clusters will be found. See _imagePath_ for details.
 *                       Default: 'png'.
 *     'averageCenter': (boolean) Wether the center of each cluster should be
 *                      the average of all markers in the cluster.
 *     'minimumClusterSize': (number) The minimum number of markers to be in a
 *                           cluster before the markers are hidden and a count
 *                           is shown.
 *     'styles': (object) An object that has style properties:
 *       'url': (string) The image url.
 *       'height': (number) The image height.
 *       'width': (number) The image width.
 *       'anchor': (Array) The anchor position of the label text.
 *       'textColor': (string) The text color.
 *       'textSize': (number) The text size.
 *       'backgroundPosition': (string) The position of the backgound x, y.
 * @constructor
 * @extends google.maps.OverlayView
 */

function MarkerClusterer(map, opt_markers, opt_options) {
  // MarkerClusterer implements google.maps.OverlayView interface. We use the
  // extend function to extend MarkerClusterer with google.maps.OverlayView
  // because it might not always be available when the code is defined so we
  // look for it at the last possible moment. If it doesn't exist now then
  // there is no point going ahead :)
  this.extend(MarkerClusterer, google.maps.OverlayView);
  this.map_ = map;

  /**
   * @type {Array.<google.maps.Marker>}
   * @private
   */
  this.markers_ = [];

  /**
   *  @type {Array.<Cluster>}
   */
  this.clusters_ = [];

  this.sizes = [53, 56, 66, 78, 90];

  /**
   * @private
   */
  this.styles_ = [];

  /**
   * @type {boolean}
   * @private
   */
  this.ready_ = false;

  var options = opt_options || {};

  /**
   * @type {number}
   * @private
   */
  this.gridSize_ = options['gridSize'] || 60;

  /**
   * @private
   */
  this.minClusterSize_ = options['minimumClusterSize'] || 2;


  /**
   * @type {?number}
   * @private
   */
  this.maxZoom_ = options['maxZoom'] || null;

  this.styles_ = options['styles'] || [];

  /**
   * @type {string}
   * @private
   */
  this.imagePath_ = options['imagePath'] ||
      this.MARKER_CLUSTER_IMAGE_PATH_;

  /**
   * @type {string}
   * @private
   */
  this.imageExtension_ = options['imageExtension'] ||
      this.MARKER_CLUSTER_IMAGE_EXTENSION_;

  /**
   * @type {boolean}
   * @private
   */
  this.zoomOnClick_ = true;

  if (options['zoomOnClick'] != undefined) {
    this.zoomOnClick_ = options['zoomOnClick'];
  }

  /**
   * @type {boolean}
   * @private
   */
  this.averageCenter_ = false;

  if (options['averageCenter'] != undefined) {
    this.averageCenter_ = options['averageCenter'];
  }

  this.setupStyles_();

  this.setMap(map);

  /**
   * @type {number}
   * @private
   */
  this.prevZoom_ = this.map_.getZoom();

  // Add the map event listeners
  var that = this;
  google.maps.event.addListener(this.map_, 'zoom_changed', function() {
    // Determines map type and prevent illegal zoom levels
    var zoom = that.map_.getZoom();
    var minZoom = that.map_.minZoom || 0;
    var maxZoom = Math.min(that.map_.maxZoom || 100,
                         that.map_.mapTypes[that.map_.getMapTypeId()].maxZoom);
    zoom = Math.min(Math.max(zoom,minZoom),maxZoom);

    if (that.prevZoom_ != zoom) {
      that.prevZoom_ = zoom;
      that.resetViewport();
    }
  });

  google.maps.event.addListener(this.map_, 'idle', function() {
    that.redraw();
  });

  // Finally, add the markers
  if (opt_markers && (opt_markers.length || Object.keys(opt_markers).length)) {
    this.addMarkers(opt_markers, false);
  }
}


/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_ = '../images/m';


/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_ = 'png';


/**
 * Extends a objects prototype by anothers.
 *
 * @param {Object} obj1 The object to be extended.
 * @param {Object} obj2 The object to extend with.
 * @return {Object} The new extended object.
 * @ignore
 */
MarkerClusterer.prototype.extend = function(obj1, obj2) {
  return (function(object) {
    for (var property in object.prototype) {
      this.prototype[property] = object.prototype[property];
    }
    return this;
  }).apply(obj1, [obj2]);
};


/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.onAdd = function() {
  this.setReady_(true);
};

/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.draw = function() {};

/**
 * Sets up the styles object.
 *
 * @private
 */
MarkerClusterer.prototype.setupStyles_ = function() {
  if (this.styles_.length) {
    return;
  }

  for (var i = 0, size; size = this.sizes[i]; i++) {
    this.styles_.push({
      url: this.imagePath_ + (i + 1) + '.' + this.imageExtension_,
      height: size,
      width: size
    });
  }
};

/**
 *  Fit the map to the bounds of the markers in the clusterer.
 */
MarkerClusterer.prototype.fitMapToMarkers = function() {
  var markers = this.getMarkers();
  var bounds = new google.maps.LatLngBounds();
  for (var i = 0, marker; marker = markers[i]; i++) {
    bounds.extend(marker.getPosition());
  }

  this.map_.fitBounds(bounds);
};


/**
 *  Sets the styles.
 *
 *  @param {Object} styles The style to set.
 */
MarkerClusterer.prototype.setStyles = function(styles) {
  this.styles_ = styles;
};


/**
 *  Gets the styles.
 *
 *  @return {Object} The styles object.
 */
MarkerClusterer.prototype.getStyles = function() {
  return this.styles_;
};


/**
 * Whether zoom on click is set.
 *
 * @return {boolean} True if zoomOnClick_ is set.
 */
MarkerClusterer.prototype.isZoomOnClick = function() {
  return this.zoomOnClick_;
};

/**
 * Whether average center is set.
 *
 * @return {boolean} True if averageCenter_ is set.
 */
MarkerClusterer.prototype.isAverageCenter = function() {
  return this.averageCenter_;
};


/**
 *  Returns the array of markers in the clusterer.
 *
 *  @return {Array.<google.maps.Marker>} The markers.
 */
MarkerClusterer.prototype.getMarkers = function() {
  return this.markers_;
};


/**
 *  Returns the number of markers in the clusterer
 *
 *  @return {Number} The number of markers.
 */
MarkerClusterer.prototype.getTotalMarkers = function() {
  return this.markers_.length;
};


/**
 *  Sets the max zoom for the clusterer.
 *
 *  @param {number} maxZoom The max zoom level.
 */
MarkerClusterer.prototype.setMaxZoom = function(maxZoom) {
  this.maxZoom_ = maxZoom;
};


/**
 *  Gets the max zoom for the clusterer.
 *
 *  @return {number} The max zoom level.
 */
MarkerClusterer.prototype.getMaxZoom = function() {
  return this.maxZoom_;
};


/**
 *  The function for calculating the cluster icon image.
 *
 *  @param {Array.<google.maps.Marker>} markers The markers in the clusterer.
 *  @param {number} numStyles The number of styles available.
 *  @return {Object} A object properties: 'text' (string) and 'index' (number).
 *  @private
 */
MarkerClusterer.prototype.calculator_ = function(markers, numStyles) {
  var index = 0;
  var count = markers.length;
  var dv = count;
  while (dv !== 0) {
    dv = parseInt(dv / 10, 10);
    index++;
  }

  index = Math.min(index, numStyles);
  return {
    text: count,
    index: index
  };
};


/**
 * Set the calculator function.
 *
 * @param {function(Array, number)} calculator The function to set as the
 *     calculator. The function should return a object properties:
 *     'text' (string) and 'index' (number).
 *
 */
MarkerClusterer.prototype.setCalculator = function(calculator) {
  this.calculator_ = calculator;
};


/**
 * Get the calculator function.
 *
 * @return {function(Array, number)} the calculator function.
 */
MarkerClusterer.prototype.getCalculator = function() {
  return this.calculator_;
};


/**
 * Add an array of markers to the clusterer.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarkers = function(markers, opt_nodraw) {
  if (markers.length) {
    for (var i = 0, marker; marker = markers[i]; i++) {
      this.pushMarkerTo_(marker);
    }
  } else if (Object.keys(markers).length) {
    for (var marker in markers) {
      this.pushMarkerTo_(markers[marker]);
    }
  }
  if (!opt_nodraw) {
    this.redraw();
  }
};


/**
 * Pushes a marker to the clusterer.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.pushMarkerTo_ = function(marker) {
  marker.isAdded = false;
  if (marker['draggable']) {
    // If the marker is draggable add a listener so we update the clusters on
    // the drag end.
    var that = this;
    google.maps.event.addListener(marker, 'dragend', function() {
      marker.isAdded = false;
      that.repaint();
    });
  }
  this.markers_.push(marker);
};


/**
 * Adds a marker to the clusterer and redraws if needed.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarker = function(marker, opt_nodraw) {
  this.pushMarkerTo_(marker);
  if (!opt_nodraw) {
    this.redraw();
  }
};


/**
 * Removes a marker and returns true if removed, false if not
 *
 * @param {google.maps.Marker} marker The marker to remove
 * @return {boolean} Whether the marker was removed or not
 * @private
 */
MarkerClusterer.prototype.removeMarker_ = function(marker) {
  var index = -1;
  if (this.markers_.indexOf) {
    index = this.markers_.indexOf(marker);
  } else {
    for (var i = 0, m; m = this.markers_[i]; i++) {
      if (m == marker) {
        index = i;
        break;
      }
    }
  }

  if (index == -1) {
    // Marker is not in our list of markers.
    return false;
  }

  marker.setMap(null);

  this.markers_.splice(index, 1);

  return true;
};


/**
 * Remove a marker from the cluster.
 *
 * @param {google.maps.Marker} marker The marker to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
 * @return {boolean} True if the marker was removed.
 */
MarkerClusterer.prototype.removeMarker = function(marker, opt_nodraw) {
  var removed = this.removeMarker_(marker);

  if (!opt_nodraw && removed) {
    this.resetViewport();
    this.redraw();
    return true;
  } else {
   return false;
  }
};


/**
 * Removes an array of markers from the cluster.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
 */
MarkerClusterer.prototype.removeMarkers = function(markers, opt_nodraw) {
  var removed = false;

  for (var i = 0, marker; marker = markers[i]; i++) {
    var r = this.removeMarker_(marker);
    removed = removed || r;
  }

  if (!opt_nodraw && removed) {
    this.resetViewport();
    this.redraw();
    return true;
  }
};


/**
 * Sets the clusterer's ready state.
 *
 * @param {boolean} ready The state.
 * @private
 */
MarkerClusterer.prototype.setReady_ = function(ready) {
  if (!this.ready_) {
    this.ready_ = ready;
    this.createClusters_();
  }
};


/**
 * Returns the number of clusters in the clusterer.
 *
 * @return {number} The number of clusters.
 */
MarkerClusterer.prototype.getTotalClusters = function() {
  return this.clusters_.length;
};


/**
 * Returns the google map that the clusterer is associated with.
 *
 * @return {google.maps.Map} The map.
 */
MarkerClusterer.prototype.getMap = function() {
  return this.map_;
};


/**
 * Sets the google map that the clusterer is associated with.
 *
 * @param {google.maps.Map} map The map.
 */
MarkerClusterer.prototype.setMap = function(map) {
  this.map_ = map;
};


/**
 * Returns the size of the grid.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getGridSize = function() {
  return this.gridSize_;
};


/**
 * Sets the size of the grid.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setGridSize = function(size) {
  this.gridSize_ = size;
};


/**
 * Returns the min cluster size.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getMinClusterSize = function() {
  return this.minClusterSize_;
};

/**
 * Sets the min cluster size.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setMinClusterSize = function(size) {
  this.minClusterSize_ = size;
};


/**
 * Extends a bounds object by the grid size.
 *
 * @param {google.maps.LatLngBounds} bounds The bounds to extend.
 * @return {google.maps.LatLngBounds} The extended bounds.
 */
MarkerClusterer.prototype.getExtendedBounds = function(bounds) {
  var projection = this.getProjection();

  // Turn the bounds into latlng.
  var tr = new google.maps.LatLng(bounds.getNorthEast().lat(),
      bounds.getNorthEast().lng());
  var bl = new google.maps.LatLng(bounds.getSouthWest().lat(),
      bounds.getSouthWest().lng());

  // Convert the points to pixels and the extend out by the grid size.
  var trPix = projection.fromLatLngToDivPixel(tr);
  trPix.x += this.gridSize_;
  trPix.y -= this.gridSize_;

  var blPix = projection.fromLatLngToDivPixel(bl);
  blPix.x -= this.gridSize_;
  blPix.y += this.gridSize_;

  // Convert the pixel points back to LatLng
  var ne = projection.fromDivPixelToLatLng(trPix);
  var sw = projection.fromDivPixelToLatLng(blPix);

  // Extend the bounds to contain the new bounds.
  bounds.extend(ne);
  bounds.extend(sw);

  return bounds;
};


/**
 * Determins if a marker is contained in a bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @param {google.maps.LatLngBounds} bounds The bounds to check against.
 * @return {boolean} True if the marker is in the bounds.
 * @private
 */
MarkerClusterer.prototype.isMarkerInBounds_ = function(marker, bounds) {
  return bounds.contains(marker.getPosition());
};


/**
 * Clears all clusters and markers from the clusterer.
 */
MarkerClusterer.prototype.clearMarkers = function() {
  this.resetViewport(true);

  // Set the markers a empty array.
  this.markers_ = [];
};


/**
 * Clears all existing clusters and recreates them.
 * @param {boolean} opt_hide To also hide the marker.
 */
MarkerClusterer.prototype.resetViewport = function(opt_hide) {
  // Remove all the clusters
  for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
    cluster.remove();
  }

  // Reset the markers to not be added and to be invisible.
  for (var i = 0, marker; marker = this.markers_[i]; i++) {
    marker.isAdded = false;
    if (opt_hide) {
      marker.setMap(null);
    }
  }

  this.clusters_ = [];
};

/**
 *
 */
MarkerClusterer.prototype.repaint = function() {
  var oldClusters = this.clusters_.slice();
  this.clusters_.length = 0;
  this.resetViewport();
  this.redraw();

  // Remove the old clusters.
  // Do it in a timeout so the other clusters have been drawn first.
  window.setTimeout(function() {
    for (var i = 0, cluster; cluster = oldClusters[i]; i++) {
      cluster.remove();
    }
  }, 0);
};


/**
 * Redraws the clusters.
 */
MarkerClusterer.prototype.redraw = function() {
  this.createClusters_();
};


/**
 * Calculates the distance between two latlng locations in km.
 * @see http://www.movable-type.co.uk/scripts/latlong.html
 *
 * @param {google.maps.LatLng} p1 The first lat lng point.
 * @param {google.maps.LatLng} p2 The second lat lng point.
 * @return {number} The distance between the two points in km.
 * @private
*/
MarkerClusterer.prototype.distanceBetweenPoints_ = function(p1, p2) {
  if (!p1 || !p2) {
    return 0;
  }

  var R = 6371; // Radius of the Earth in km
  var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
  var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
};


/**
 * Add a marker to a cluster, or creates a new cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.addToClosestCluster_ = function(marker) {
  var distance = 40000; // Some large number
  var clusterToAddTo = null;
  var pos = marker.getPosition();
  for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
    var center = cluster.getCenter();
    if (center) {
      var d = this.distanceBetweenPoints_(center, marker.getPosition());
      if (d < distance) {
        distance = d;
        clusterToAddTo = cluster;
      }
    }
  }

  if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
    clusterToAddTo.addMarker(marker);
  } else {
    var cluster = new Cluster(this);
    cluster.addMarker(marker);
    this.clusters_.push(cluster);
  }
};


/**
 * Creates the clusters.
 *
 * @private
 */
MarkerClusterer.prototype.createClusters_ = function() {
  if (!this.ready_) {
    return;
  }

  // Get our current map view bounds.
  // Create a new bounds object so we don't affect the map.
  var mapBounds = new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(),
      this.map_.getBounds().getNorthEast());
  var bounds = this.getExtendedBounds(mapBounds);

  for (var i = 0, marker; marker = this.markers_[i]; i++) {
    if (!marker.isAdded && this.isMarkerInBounds_(marker, bounds)) {
      this.addToClosestCluster_(marker);
    }
  }
};


/**
 * A cluster that contains markers.
 *
 * @param {MarkerClusterer} markerClusterer The markerclusterer that this
 *     cluster is associated with.
 * @constructor
 * @ignore
 */
function Cluster(markerClusterer) {
  this.markerClusterer_ = markerClusterer;
  this.map_ = markerClusterer.getMap();
  this.gridSize_ = markerClusterer.getGridSize();
  this.minClusterSize_ = markerClusterer.getMinClusterSize();
  this.averageCenter_ = markerClusterer.isAverageCenter();
  this.center_ = null;
  this.markers_ = [];
  this.bounds_ = null;
  this.clusterIcon_ = new ClusterIcon(this, markerClusterer.getStyles(),
      markerClusterer.getGridSize());
}

/**
 * Determins if a marker is already added to the cluster.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker is already added.
 */
Cluster.prototype.isMarkerAlreadyAdded = function(marker) {
  if (this.markers_.indexOf) {
    return this.markers_.indexOf(marker) != -1;
  } else {
    for (var i = 0, m; m = this.markers_[i]; i++) {
      if (m == marker) {
        return true;
      }
    }
  }
  return false;
};


/**
 * Add a marker the cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @return {boolean} True if the marker was added.
 */
Cluster.prototype.addMarker = function(marker) {
  if (this.isMarkerAlreadyAdded(marker)) {
    return false;
  }

  if (!this.center_) {
    this.center_ = marker.getPosition();
    this.calculateBounds_();
  } else {
    if (this.averageCenter_) {
      var l = this.markers_.length + 1;
      var lat = (this.center_.lat() * (l-1) + marker.getPosition().lat()) / l;
      var lng = (this.center_.lng() * (l-1) + marker.getPosition().lng()) / l;
      this.center_ = new google.maps.LatLng(lat, lng);
      this.calculateBounds_();
    }
  }

  marker.isAdded = true;
  this.markers_.push(marker);

  var len = this.markers_.length;
  if (len < this.minClusterSize_ && marker.getMap() != this.map_) {
    // Min cluster size not reached so show the marker.
    marker.setMap(this.map_);
  }

  if (len == this.minClusterSize_) {
    // Hide the markers that were showing.
    for (var i = 0; i < len; i++) {
      this.markers_[i].setMap(null);
    }
  }

  if (len >= this.minClusterSize_) {
    marker.setMap(null);
  }

  this.updateIcon();
  return true;
};


/**
 * Returns the marker clusterer that the cluster is associated with.
 *
 * @return {MarkerClusterer} The associated marker clusterer.
 */
Cluster.prototype.getMarkerClusterer = function() {
  return this.markerClusterer_;
};


/**
 * Returns the bounds of the cluster.
 *
 * @return {google.maps.LatLngBounds} the cluster bounds.
 */
Cluster.prototype.getBounds = function() {
  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
  var markers = this.getMarkers();
  for (var i = 0, marker; marker = markers[i]; i++) {
    bounds.extend(marker.getPosition());
  }
  return bounds;
};


/**
 * Removes the cluster
 */
Cluster.prototype.remove = function() {
  this.clusterIcon_.remove();
  this.markers_.length = 0;
  delete this.markers_;
};


/**
 * Returns the center of the cluster.
 *
 * @return {number} The cluster center.
 */
Cluster.prototype.getSize = function() {
  return this.markers_.length;
};


/**
 * Returns the center of the cluster.
 *
 * @return {Array.<google.maps.Marker>} The cluster center.
 */
Cluster.prototype.getMarkers = function() {
  return this.markers_;
};


/**
 * Returns the center of the cluster.
 *
 * @return {google.maps.LatLng} The cluster center.
 */
Cluster.prototype.getCenter = function() {
  return this.center_;
};


/**
 * Calculated the extended bounds of the cluster with the grid.
 *
 * @private
 */
Cluster.prototype.calculateBounds_ = function() {
  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
  this.bounds_ = this.markerClusterer_.getExtendedBounds(bounds);
};


/**
 * Determines if a marker lies in the clusters bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker lies in the bounds.
 */
Cluster.prototype.isMarkerInClusterBounds = function(marker) {
  return this.bounds_.contains(marker.getPosition());
};


/**
 * Returns the map that the cluster is associated with.
 *
 * @return {google.maps.Map} The map.
 */
Cluster.prototype.getMap = function() {
  return this.map_;
};


/**
 * Updates the cluster icon
 */
Cluster.prototype.updateIcon = function() {
  var zoom = this.map_.getZoom();
  var mz = this.markerClusterer_.getMaxZoom();

  if (mz && zoom > mz) {
    // The zoom is greater than our max zoom so show all the markers in cluster.
    for (var i = 0, marker; marker = this.markers_[i]; i++) {
      marker.setMap(this.map_);
    }
    return;
  }

  if (this.markers_.length < this.minClusterSize_) {
    // Min cluster size not yet reached.
    this.clusterIcon_.hide();
    return;
  }

  var numStyles = this.markerClusterer_.getStyles().length;
  var sums = this.markerClusterer_.getCalculator()(this.markers_, numStyles);
  this.clusterIcon_.setCenter(this.center_);
  this.clusterIcon_.setSums(sums);
  this.clusterIcon_.show();
};


/**
 * A cluster icon
 *
 * @param {Cluster} cluster The cluster to be associated with.
 * @param {Object} styles An object that has style properties:
 *     'url': (string) The image url.
 *     'height': (number) The image height.
 *     'width': (number) The image width.
 *     'anchor': (Array) The anchor position of the label text.
 *     'textColor': (string) The text color.
 *     'textSize': (number) The text size.
 *     'backgroundPosition: (string) The background postition x, y.
 * @param {number=} opt_padding Optional padding to apply to the cluster icon.
 * @constructor
 * @extends google.maps.OverlayView
 * @ignore
 */
function ClusterIcon(cluster, styles, opt_padding) {
  cluster.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView);

  this.styles_ = styles;
  this.padding_ = opt_padding || 0;
  this.cluster_ = cluster;
  this.center_ = null;
  this.map_ = cluster.getMap();
  this.div_ = null;
  this.sums_ = null;
  this.visible_ = false;

  this.setMap(this.map_);
}


/**
 * Triggers the clusterclick event and zoom's if the option is set.
 */
ClusterIcon.prototype.triggerClusterClick = function() {
  var markerClusterer = this.cluster_.getMarkerClusterer();

  // Trigger the clusterclick event.
  google.maps.event.trigger(markerClusterer, 'clusterclick', this.cluster_);

  if (markerClusterer.isZoomOnClick()) {
    // Zoom into the cluster.
    this.map_.fitBounds(this.cluster_.getBounds());
  }
};


/**
 * Adding the cluster icon to the dom.
 * @ignore
 */
ClusterIcon.prototype.onAdd = function() {
  this.div_ = document.createElement('DIV');
  if (this.visible_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.cssText = this.createCss(pos);
    this.div_.innerHTML = this.sums_.text;
  }

  var panes = this.getPanes();
  panes.overlayMouseTarget.appendChild(this.div_);

  var that = this;
  google.maps.event.addDomListener(this.div_, 'click', function() {
    that.triggerClusterClick();
  });
};


/**
 * Returns the position to place the div dending on the latlng.
 *
 * @param {google.maps.LatLng} latlng The position in latlng.
 * @return {google.maps.Point} The position in pixels.
 * @private
 */
ClusterIcon.prototype.getPosFromLatLng_ = function(latlng) {
  var pos = this.getProjection().fromLatLngToDivPixel(latlng);
  pos.x -= parseInt(this.width_ / 2, 10);
  pos.y -= parseInt(this.height_ / 2, 10);
  return pos;
};


/**
 * Draw the icon.
 * @ignore
 */
ClusterIcon.prototype.draw = function() {
  if (this.visible_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.top = pos.y + 'px';
    this.div_.style.left = pos.x + 'px';
  }
};


/**
 * Hide the icon.
 */
ClusterIcon.prototype.hide = function() {
  if (this.div_) {
    this.div_.style.display = 'none';
  }
  this.visible_ = false;
};


/**
 * Position and show the icon.
 */
ClusterIcon.prototype.show = function() {
  if (this.div_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.cssText = this.createCss(pos);
    this.div_.style.display = '';
  }
  this.visible_ = true;
};


/**
 * Remove the icon from the map
 */
ClusterIcon.prototype.remove = function() {
  this.setMap(null);
};


/**
 * Implementation of the onRemove interface.
 * @ignore
 */
ClusterIcon.prototype.onRemove = function() {
  if (this.div_ && this.div_.parentNode) {
    this.hide();
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
  }
};


/**
 * Set the sums of the icon.
 *
 * @param {Object} sums The sums containing:
 *   'text': (string) The text to display in the icon.
 *   'index': (number) The style index of the icon.
 */
ClusterIcon.prototype.setSums = function(sums) {
  this.sums_ = sums;
  this.text_ = sums.text;
  this.index_ = sums.index;
  if (this.div_) {
    this.div_.innerHTML = sums.text;
  }

  this.useStyle();
};


/**
 * Sets the icon to the the styles.
 */
ClusterIcon.prototype.useStyle = function() {
  var index = Math.max(0, this.sums_.index - 1);
  index = Math.min(this.styles_.length - 1, index);
  var style = this.styles_[index];
  this.url_ = style['url'];
  this.height_ = style['height'];
  this.width_ = style['width'];
  this.textColor_ = style['textColor'];
  this.anchor_ = style['anchor'];
  this.textSize_ = style['textSize'];
  this.backgroundPosition_ = style['backgroundPosition'];
};


/**
 * Sets the center of the icon.
 *
 * @param {google.maps.LatLng} center The latlng to set as the center.
 */
ClusterIcon.prototype.setCenter = function(center) {
  this.center_ = center;
};


/**
 * Create the css text based on the position of the icon.
 *
 * @param {google.maps.Point} pos The position.
 * @return {string} The css style text.
 */
ClusterIcon.prototype.createCss = function(pos) {
  var style = [];
  style.push('background-image:url(' + this.url_ + ');');
  var backgroundPosition = this.backgroundPosition_ ? this.backgroundPosition_ : '0 0';
  style.push('background-position:' + backgroundPosition + ';');

  if (typeof this.anchor_ === 'object') {
    if (typeof this.anchor_[0] === 'number' && this.anchor_[0] > 0 &&
        this.anchor_[0] < this.height_) {
      style.push('height:' + (this.height_ - this.anchor_[0]) +
          'px; padding-top:' + this.anchor_[0] + 'px;');
    } else {
      style.push('height:' + this.height_ + 'px; line-height:' + this.height_ +
          'px;');
    }
    if (typeof this.anchor_[1] === 'number' && this.anchor_[1] > 0 &&
        this.anchor_[1] < this.width_) {
      style.push('width:' + (this.width_ - this.anchor_[1]) +
          'px; padding-left:' + this.anchor_[1] + 'px;');
    } else {
      style.push('width:' + this.width_ + 'px; text-align:center;');
    }
  } else {
    style.push('height:' + this.height_ + 'px; line-height:' +
        this.height_ + 'px; width:' + this.width_ + 'px; text-align:center;');
  }

  var txtColor = this.textColor_ ? this.textColor_ : 'black';
  var txtSize = this.textSize_ ? this.textSize_ : 11;

  style.push('cursor:pointer; top:' + pos.y + 'px; left:' +
      pos.x + 'px; color:' + txtColor + '; position:absolute; font-size:' +
      txtSize + 'px; font-family:Arial,sans-serif; font-weight:bold');
  return style.join('');
};


// Export Symbols for Closure
// If you are not going to compile with closure then you can remove the
// code below.
window['MarkerClusterer'] = MarkerClusterer;
MarkerClusterer.prototype['addMarker'] = MarkerClusterer.prototype.addMarker;
MarkerClusterer.prototype['addMarkers'] = MarkerClusterer.prototype.addMarkers;
MarkerClusterer.prototype['clearMarkers'] =
    MarkerClusterer.prototype.clearMarkers;
MarkerClusterer.prototype['fitMapToMarkers'] =
    MarkerClusterer.prototype.fitMapToMarkers;
MarkerClusterer.prototype['getCalculator'] =
    MarkerClusterer.prototype.getCalculator;
MarkerClusterer.prototype['getGridSize'] =
    MarkerClusterer.prototype.getGridSize;
MarkerClusterer.prototype['getExtendedBounds'] =
    MarkerClusterer.prototype.getExtendedBounds;
MarkerClusterer.prototype['getMap'] = MarkerClusterer.prototype.getMap;
MarkerClusterer.prototype['getMarkers'] = MarkerClusterer.prototype.getMarkers;
MarkerClusterer.prototype['getMaxZoom'] = MarkerClusterer.prototype.getMaxZoom;
MarkerClusterer.prototype['getStyles'] = MarkerClusterer.prototype.getStyles;
MarkerClusterer.prototype['getTotalClusters'] =
    MarkerClusterer.prototype.getTotalClusters;
MarkerClusterer.prototype['getTotalMarkers'] =
    MarkerClusterer.prototype.getTotalMarkers;
MarkerClusterer.prototype['redraw'] = MarkerClusterer.prototype.redraw;
MarkerClusterer.prototype['removeMarker'] =
    MarkerClusterer.prototype.removeMarker;
MarkerClusterer.prototype['removeMarkers'] =
    MarkerClusterer.prototype.removeMarkers;
MarkerClusterer.prototype['resetViewport'] =
    MarkerClusterer.prototype.resetViewport;
MarkerClusterer.prototype['repaint'] =
    MarkerClusterer.prototype.repaint;
MarkerClusterer.prototype['setCalculator'] =
    MarkerClusterer.prototype.setCalculator;
MarkerClusterer.prototype['setGridSize'] =
    MarkerClusterer.prototype.setGridSize;
MarkerClusterer.prototype['setMaxZoom'] =
    MarkerClusterer.prototype.setMaxZoom;
MarkerClusterer.prototype['onAdd'] = MarkerClusterer.prototype.onAdd;
MarkerClusterer.prototype['draw'] = MarkerClusterer.prototype.draw;

Cluster.prototype['getCenter'] = Cluster.prototype.getCenter;
Cluster.prototype['getSize'] = Cluster.prototype.getSize;
Cluster.prototype['getMarkers'] = Cluster.prototype.getMarkers;

ClusterIcon.prototype['onAdd'] = ClusterIcon.prototype.onAdd;
ClusterIcon.prototype['draw'] = ClusterIcon.prototype.draw;
ClusterIcon.prototype['onRemove'] = ClusterIcon.prototype.onRemove;

Object.keys = Object.keys || function(o) {  
    var result = [];  
    for(var name in o) {  
        if (o.hasOwnProperty(name))  
          result.push(name);  
    }  
    return result;  
};
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["editInfo"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id=infoForm >\n	<form action='/markers/"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"id","hash":{},"data":data}) : helper)))
    + "/update' method='patch'>\n		<p> In template: "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + " </p>\n		<p>\n			<textarea name='marker[info]' id='marker_info'>\n				"
    + container.escapeExpression(((helper = (helper = helpers.info || (depth0 != null ? depth0.info : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"info","hash":{},"data":data}) : helper)))
    + "\n			<textarea>\n		</p>\n		<p><input type='submit' value='Update'></p>\n		</form>\n		<a href='/markers/"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"id","hash":{},"data":data}) : helper)))
    + "' controller='markers' data-method='delete' id='infoDelBtn'>Delete Marker</a>\n	</form>\n</div>";
},"useData":true});
  return this.HandlebarsTemplates["editInfo"];
}).call(this);
(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["infowindow"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "\n<div class='infowindow'>\n	<strong><h1>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1></strong>\n	<address>"
    + container.escapeExpression(((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"address","hash":{},"data":data}) : helper)))
    + "</address>\n	<p>\n	Open Now: "
    + container.escapeExpression(((helper = (helper = helpers.open || (depth0 != null ? depth0.open : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"open","hash":{},"data":data}) : helper)))
    + "&nbsp;&nbsp;&nbsp;\n		Rating: "
    + container.escapeExpression(((helper = (helper = helpers.rating || (depth0 != null ? depth0.rating : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"rating","hash":{},"data":data}) : helper)))
    + "&nbsp;&nbsp;&nbsp; \n		<a href="
    + container.escapeExpression(((helper = (helper = helpers.website || (depth0 != null ? depth0.website : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"website","hash":{},"data":data}) : helper)))
    + ">Website</a>\n	</p>\n	<p><a href=tel:"
    + container.escapeExpression(((helper = (helper = helpers.phoneI || (depth0 != null ? depth0.phoneI : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"phoneI","hash":{},"data":data}) : helper)))
    + ">"
    + container.escapeExpression(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"phone","hash":{},"data":data}) : helper)))
    + "</a></p>\n	<h3><b>Notes:</b></h3>\n	<p>"
    + container.escapeExpression(((helper = (helper = helpers.info || (depth0 != null ? depth0.info : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"info","hash":{},"data":data}) : helper)))
    + "</p>\n	<h4>\n		"
    + container.escapeExpression(((helper = (helper = helpers.reviewAuth || (depth0 != null ? depth0.reviewAuth : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"reviewAuth","hash":{},"data":data}) : helper)))
    + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n		Rating: "
    + container.escapeExpression(((helper = (helper = helpers.reviewRate || (depth0 != null ? depth0.reviewRate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"reviewRate","hash":{},"data":data}) : helper)))
    + "\n	</h4>\n		<p>"
    + container.escapeExpression(((helper = (helper = helpers.reviewText || (depth0 != null ? depth0.reviewText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"reviewText","hash":{},"data":data}) : helper)))
    + "</p>\n		<img src="
    + container.escapeExpression(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"photo","hash":{},"data":data}) : helper)))
    + "></img>\n</div>";
},"useData":true});
  return this.HandlebarsTemplates["infowindow"];
}).call(this);
(function() {


}).call(this);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//








;
