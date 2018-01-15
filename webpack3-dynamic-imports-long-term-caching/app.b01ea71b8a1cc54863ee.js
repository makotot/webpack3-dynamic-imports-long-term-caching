webpackJsonp([4],{

/***/ "eslX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__("F8kA");

var _reactLoadable = __webpack_require__("wF3A");

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _loading = __webpack_require__("rNWz");

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = (0, _reactLoadable2.default)({
  loader: function loader() {
    return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, "Ey7U"));
  },
  loading: _loading2.default
});

var PageOne = (0, _reactLoadable2.default)({
  loader: function loader() {
    return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "+sWQ"));
  },
  loading: _loading2.default
});

var PageTwo = (0, _reactLoadable2.default)({
  loader: function loader() {
    return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "kwMn"));
  },
  loading: _loading2.default
});

var App = function App() {
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: './' },
            'Home'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: './pageOne' },
            'Page One'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: './pageTwo' },
            'Page Two'
          )
        )
      ),
      _react2.default.createElement('hr', null),
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: './', component: Home }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: './pageOne', component: PageOne }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: './pageTwo', component: PageTwo })
      )
    )
  );
};

exports.default = App;

/***/ }),

/***/ "lVK7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("O27J");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = __webpack_require__("eslX");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById('root'));

/***/ }),

/***/ "rNWz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'Loading...'
    )
  );
};

exports.default = Loading;

/***/ })

},["lVK7"]);