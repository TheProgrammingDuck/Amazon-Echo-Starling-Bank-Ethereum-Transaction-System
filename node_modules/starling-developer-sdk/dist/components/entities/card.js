(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'axios', 'debug', '../utils/http', '../utils/validator'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('axios'), require('debug'), require('../utils/http'), require('../utils/validator'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.axios, global.debug, global.http, global.validator);
    global.card = mod.exports;
  }
})(this, function (module, _axios, _debug, _http, _validator) {
  'use strict';

  var _axios2 = _interopRequireDefault(_axios);

  var _debug2 = _interopRequireDefault(_debug);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var log = (0, _debug2.default)('starling:card-service');

  /**
   * Service to interact with a customer card
   */

  var Card = function () {

    /**
     * Creates an instance of the client's card
     * @param {Object} options - configuration parameters
     */
    function Card(options) {
      _classCallCheck(this, Card);

      this.options = options;
    }

    /**
     * Retrieves a customer's card
     * @param {string} accessToken - the oauth bearer token.
     * @return {Promise} - the http request promise
     */


    _createClass(Card, [{
      key: 'getCard',
      value: function getCard(accessToken) {
        (0, _validator.typeValidation)(arguments, getCardParameterDefinition);
        var url = this.options.apiUrl + '/api/v1/cards';
        log('GET ' + url);

        return (0, _axios2.default)({
          method: 'GET',
          url: url,
          headers: (0, _http.defaultHeaders)(accessToken)
        });
      }
    }]);

    return Card;
  }();

  var getCardParameterDefinition = [{ name: 'accessToken', validations: ['required', 'string'] }];

  module.exports = Card;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL2NhcmQuanMiXSwibmFtZXMiOlsibG9nIiwiQ2FyZCIsIm9wdGlvbnMiLCJhY2Nlc3NUb2tlbiIsImFyZ3VtZW50cyIsImdldENhcmRQYXJhbWV0ZXJEZWZpbml0aW9uIiwidXJsIiwiYXBpVXJsIiwibWV0aG9kIiwiaGVhZGVycyIsIm5hbWUiLCJ2YWxpZGF0aW9ucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxNQUFNQSxNQUFNLHFCQUFNLHVCQUFOLENBQVo7O0FBRUE7Ozs7TUFHTUMsSTs7QUFFSjs7OztBQUlBLGtCQUFhQyxPQUFiLEVBQXNCO0FBQUE7O0FBQ3BCLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOztBQUVEOzs7Ozs7Ozs7OEJBS1NDLFcsRUFBYTtBQUNwQix1Q0FBZUMsU0FBZixFQUEwQkMsMEJBQTFCO0FBQ0EsWUFBTUMsTUFBUyxLQUFLSixPQUFMLENBQWFLLE1BQXRCLGtCQUFOO0FBQ0FQLHFCQUFXTSxHQUFYOztBQUVBLGVBQU8scUJBQU07QUFDWEUsa0JBQVEsS0FERztBQUVYRixrQkFGVztBQUdYRyxtQkFBUywwQkFBZU4sV0FBZjtBQUhFLFNBQU4sQ0FBUDtBQUtEOzs7Ozs7QUFHSCxNQUFNRSw2QkFBNkIsQ0FDakMsRUFBQ0ssTUFBTSxhQUFQLEVBQXNCQyxhQUFhLENBQUMsVUFBRCxFQUFhLFFBQWIsQ0FBbkMsRUFEaUMsQ0FBbkM7O0FBSUFDLFNBQU9DLE9BQVAsR0FBaUJaLElBQWpCIiwiZmlsZSI6ImVudGl0aWVzL2NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGRlYnVnIGZyb20gJ2RlYnVnJztcbmltcG9ydCB7ZGVmYXVsdEhlYWRlcnN9IGZyb20gJy4uL3V0aWxzL2h0dHAnO1xuaW1wb3J0IHt0eXBlVmFsaWRhdGlvbn0gZnJvbSAnLi4vdXRpbHMvdmFsaWRhdG9yJztcblxuY29uc3QgbG9nID0gZGVidWcoJ3N0YXJsaW5nOmNhcmQtc2VydmljZScpO1xuXG4vKipcbiAqIFNlcnZpY2UgdG8gaW50ZXJhY3Qgd2l0aCBhIGN1c3RvbWVyIGNhcmRcbiAqL1xuY2xhc3MgQ2FyZCB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGNsaWVudCdzIGNhcmRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnNcbiAgICovXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYSBjdXN0b21lcidzIGNhcmRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFjY2Vzc1Rva2VuIC0gdGhlIG9hdXRoIGJlYXJlciB0b2tlbi5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgaHR0cCByZXF1ZXN0IHByb21pc2VcbiAgICovXG4gIGdldENhcmQgKGFjY2Vzc1Rva2VuKSB7XG4gICAgdHlwZVZhbGlkYXRpb24oYXJndW1lbnRzLCBnZXRDYXJkUGFyYW1ldGVyRGVmaW5pdGlvbik7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5vcHRpb25zLmFwaVVybH0vYXBpL3YxL2NhcmRzYDtcbiAgICBsb2coYEdFVCAke3VybH1gKTtcblxuICAgIHJldHVybiBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsLFxuICAgICAgaGVhZGVyczogZGVmYXVsdEhlYWRlcnMoYWNjZXNzVG9rZW4pXG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgZ2V0Q2FyZFBhcmFtZXRlckRlZmluaXRpb24gPSBbXG4gIHtuYW1lOiAnYWNjZXNzVG9rZW4nLCB2YWxpZGF0aW9uczogWydyZXF1aXJlZCcsICdzdHJpbmcnXX1cbiAgXTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYXJkO1xuIl19
//# sourceMappingURL=card.js.map
