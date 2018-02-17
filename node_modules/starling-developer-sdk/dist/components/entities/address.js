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
    global.address = mod.exports;
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

  var log = (0, _debug2.default)('starling:address-service');

  /**
   * Service to interact with a customer address
   */

  var Address = function () {

    /**
     * Creates an instance of the address client
     * @param {Object} options - configuration parameters
     */
    function Address(options) {
      _classCallCheck(this, Address);

      this.options = options;
    }

    /**
     * Retrieves a customer's address
     * @param {string} accessToken - the oauth bearer token.
     * @return {Promise} - the http request promise
     */


    _createClass(Address, [{
      key: 'getAddresses',
      value: function getAddresses(accessToken) {
        (0, _validator.typeValidation)(arguments, getAddressParameterDefinition);
        var url = this.options.apiUrl + '/api/v1/addresses';
        log('GET ' + url);

        return (0, _axios2.default)({
          method: 'GET',
          url: url,
          headers: (0, _http.defaultHeaders)(accessToken)
        });
      }
    }]);

    return Address;
  }();

  var getAddressParameterDefinition = [{ name: 'accessToken', validations: ['required', 'string'] }];

  module.exports = Address;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL2FkZHJlc3MuanMiXSwibmFtZXMiOlsibG9nIiwiQWRkcmVzcyIsIm9wdGlvbnMiLCJhY2Nlc3NUb2tlbiIsImFyZ3VtZW50cyIsImdldEFkZHJlc3NQYXJhbWV0ZXJEZWZpbml0aW9uIiwidXJsIiwiYXBpVXJsIiwibWV0aG9kIiwiaGVhZGVycyIsIm5hbWUiLCJ2YWxpZGF0aW9ucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxNQUFNQSxNQUFNLHFCQUFNLDBCQUFOLENBQVo7O0FBRUE7Ozs7TUFHTUMsTzs7QUFFSjs7OztBQUlBLHFCQUFhQyxPQUFiLEVBQXNCO0FBQUE7O0FBQ3BCLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOztBQUVEOzs7Ozs7Ozs7bUNBS2NDLFcsRUFBYTtBQUN6Qix1Q0FBZUMsU0FBZixFQUEwQkMsNkJBQTFCO0FBQ0EsWUFBTUMsTUFBUyxLQUFLSixPQUFMLENBQWFLLE1BQXRCLHNCQUFOO0FBQ0FQLHFCQUFXTSxHQUFYOztBQUVBLGVBQU8scUJBQU07QUFDWEUsa0JBQVEsS0FERztBQUVYRixrQkFGVztBQUdYRyxtQkFBUywwQkFBZU4sV0FBZjtBQUhFLFNBQU4sQ0FBUDtBQUtEOzs7Ozs7QUFHSCxNQUFNRSxnQ0FBZ0MsQ0FDcEMsRUFBQ0ssTUFBTSxhQUFQLEVBQXNCQyxhQUFhLENBQUMsVUFBRCxFQUFhLFFBQWIsQ0FBbkMsRUFEb0MsQ0FBdEM7O0FBSUFDLFNBQU9DLE9BQVAsR0FBaUJaLE9BQWpCIiwiZmlsZSI6ImVudGl0aWVzL2FkZHJlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGRlYnVnIGZyb20gJ2RlYnVnJztcbmltcG9ydCB7ZGVmYXVsdEhlYWRlcnN9IGZyb20gJy4uL3V0aWxzL2h0dHAnO1xuaW1wb3J0IHt0eXBlVmFsaWRhdGlvbn0gZnJvbSAnLi4vdXRpbHMvdmFsaWRhdG9yJztcblxuY29uc3QgbG9nID0gZGVidWcoJ3N0YXJsaW5nOmFkZHJlc3Mtc2VydmljZScpO1xuXG4vKipcbiAqIFNlcnZpY2UgdG8gaW50ZXJhY3Qgd2l0aCBhIGN1c3RvbWVyIGFkZHJlc3NcbiAqL1xuY2xhc3MgQWRkcmVzcyB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGFkZHJlc3MgY2xpZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzXG4gICAqL1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIGEgY3VzdG9tZXIncyBhZGRyZXNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhY2Nlc3NUb2tlbiAtIHRoZSBvYXV0aCBiZWFyZXIgdG9rZW4uXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIGh0dHAgcmVxdWVzdCBwcm9taXNlXG4gICAqL1xuICBnZXRBZGRyZXNzZXMgKGFjY2Vzc1Rva2VuKSB7XG4gICAgdHlwZVZhbGlkYXRpb24oYXJndW1lbnRzLCBnZXRBZGRyZXNzUGFyYW1ldGVyRGVmaW5pdGlvbik7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5vcHRpb25zLmFwaVVybH0vYXBpL3YxL2FkZHJlc3Nlc2A7XG4gICAgbG9nKGBHRVQgJHt1cmx9YCk7XG5cbiAgICByZXR1cm4gYXhpb3Moe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybCxcbiAgICAgIGhlYWRlcnM6IGRlZmF1bHRIZWFkZXJzKGFjY2Vzc1Rva2VuKVxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IGdldEFkZHJlc3NQYXJhbWV0ZXJEZWZpbml0aW9uID0gW1xuICB7bmFtZTogJ2FjY2Vzc1Rva2VuJywgdmFsaWRhdGlvbnM6IFsncmVxdWlyZWQnLCAnc3RyaW5nJ119XG4gIF07XG5cbm1vZHVsZS5leHBvcnRzID0gQWRkcmVzcztcbiJdfQ==
//# sourceMappingURL=address.js.map
