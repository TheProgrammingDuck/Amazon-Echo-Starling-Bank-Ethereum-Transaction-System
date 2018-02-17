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
    global.customer = mod.exports;
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

  var log = (0, _debug2.default)('starling:customer-service');

  /**
   * Service to interact with a customer
   */

  var Customer = function () {

    /**
     * Create a new customer service
     * @param {Object} options - configuration parameters
     */
    function Customer(options) {
      _classCallCheck(this, Customer);

      this.options = options;
    }

    /**
     * Gets the customer's details
     * @param {string} accessToken - the oauth bearer token.
     * @return {Promise} - the http request promise
     */


    _createClass(Customer, [{
      key: 'getCustomer',
      value: function getCustomer(accessToken) {
        (0, _validator.typeValidation)(arguments, getCustomerParameterDefinition);
        var url = this.options.apiUrl + '/api/v1/customers';
        log('GET ' + url);

        return (0, _axios2.default)({
          method: 'GET',
          url: url,
          headers: (0, _http.defaultHeaders)(accessToken)
        });
      }
    }]);

    return Customer;
  }();

  var getCustomerParameterDefinition = [{ name: 'accessToken', validations: ['required', 'string'] }];

  module.exports = Customer;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL2N1c3RvbWVyLmpzIl0sIm5hbWVzIjpbImxvZyIsIkN1c3RvbWVyIiwib3B0aW9ucyIsImFjY2Vzc1Rva2VuIiwiYXJndW1lbnRzIiwiZ2V0Q3VzdG9tZXJQYXJhbWV0ZXJEZWZpbml0aW9uIiwidXJsIiwiYXBpVXJsIiwibWV0aG9kIiwiaGVhZGVycyIsIm5hbWUiLCJ2YWxpZGF0aW9ucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxNQUFNQSxNQUFNLHFCQUFNLDJCQUFOLENBQVo7O0FBRUE7Ozs7TUFHTUMsUTs7QUFFSjs7OztBQUlBLHNCQUFhQyxPQUFiLEVBQXNCO0FBQUE7O0FBQ3BCLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOztBQUVEOzs7Ozs7Ozs7a0NBS2FDLFcsRUFBYTtBQUN4Qix1Q0FBZUMsU0FBZixFQUEwQkMsOEJBQTFCO0FBQ0EsWUFBTUMsTUFBUyxLQUFLSixPQUFMLENBQWFLLE1BQXRCLHNCQUFOO0FBQ0FQLHFCQUFXTSxHQUFYOztBQUVBLGVBQU8scUJBQU07QUFDWEUsa0JBQVEsS0FERztBQUVYRixrQkFGVztBQUdYRyxtQkFBUywwQkFBZU4sV0FBZjtBQUhFLFNBQU4sQ0FBUDtBQUtEOzs7Ozs7QUFHSCxNQUFNRSxpQ0FBaUMsQ0FDckMsRUFBQ0ssTUFBTSxhQUFQLEVBQXNCQyxhQUFhLENBQUMsVUFBRCxFQUFhLFFBQWIsQ0FBbkMsRUFEcUMsQ0FBdkM7O0FBSUFDLFNBQU9DLE9BQVAsR0FBaUJaLFFBQWpCIiwiZmlsZSI6ImVudGl0aWVzL2N1c3RvbWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBkZWJ1ZyBmcm9tICdkZWJ1Zyc7XG5pbXBvcnQge2RlZmF1bHRIZWFkZXJzfSBmcm9tICcuLi91dGlscy9odHRwJztcbmltcG9ydCB7dHlwZVZhbGlkYXRpb259IGZyb20gJy4uL3V0aWxzL3ZhbGlkYXRvcic7XG5cbmNvbnN0IGxvZyA9IGRlYnVnKCdzdGFybGluZzpjdXN0b21lci1zZXJ2aWNlJyk7XG5cbi8qKlxuICogU2VydmljZSB0byBpbnRlcmFjdCB3aXRoIGEgY3VzdG9tZXJcbiAqL1xuY2xhc3MgQ3VzdG9tZXIge1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgY3VzdG9tZXIgc2VydmljZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVyc1xuICAgKi9cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1c3RvbWVyJ3MgZGV0YWlsc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gYWNjZXNzVG9rZW4gLSB0aGUgb2F1dGggYmVhcmVyIHRva2VuLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBodHRwIHJlcXVlc3QgcHJvbWlzZVxuICAgKi9cbiAgZ2V0Q3VzdG9tZXIgKGFjY2Vzc1Rva2VuKSB7XG4gICAgdHlwZVZhbGlkYXRpb24oYXJndW1lbnRzLCBnZXRDdXN0b21lclBhcmFtZXRlckRlZmluaXRpb24pO1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMub3B0aW9ucy5hcGlVcmx9L2FwaS92MS9jdXN0b21lcnNgO1xuICAgIGxvZyhgR0VUICR7dXJsfWApO1xuXG4gICAgcmV0dXJuIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmwsXG4gICAgICBoZWFkZXJzOiBkZWZhdWx0SGVhZGVycyhhY2Nlc3NUb2tlbilcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBnZXRDdXN0b21lclBhcmFtZXRlckRlZmluaXRpb24gPSBbXG4gIHtuYW1lOiAnYWNjZXNzVG9rZW4nLCB2YWxpZGF0aW9uczogWydyZXF1aXJlZCcsICdzdHJpbmcnXX1cbiAgXTtcblxubW9kdWxlLmV4cG9ydHMgPSBDdXN0b21lcjtcbiJdfQ==
//# sourceMappingURL=customer.js.map
