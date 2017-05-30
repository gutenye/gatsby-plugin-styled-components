'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _server = require('react-dom/server');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.replaceServerBodyRender = function (_ref) {
  var component = _ref.component;

  var sheet = new _styledComponents.ServerStyleSheet();

  var app = _react2.default.createElement(
    _styledComponents.StyleSheetManager,
    { sheet: sheet.instance },
    component
  );

  var html = (0, _server.renderToString)(app);
  var styles = sheet.getStyleElement();

  return { body: html, styles: styles };
};