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
    global.account = mod.exports;
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

  var log = (0, _debug2.default)('starling:account-service');

  /**
   * Service to interact with a customer's account
   */

  var Account = function () {

    /**
     * Creates an instance of the account client
     * @param {Object} options - application config
     */
    function Account(options) {
      _classCallCheck(this, Account);

      this.options = options;
    }

    /**
     * Retrieves a customer's account
     * @param {string} accessToken - the oauth bearer token
     * @return {Promise} - the http request promise
     */


    _createClass(Account, [{
      key: 'getAccount',
      value: function getAccount(accessToken) {
        (0, _validator.typeValidation)(arguments, getAccountParameterDefinition);
        var url = this.options.apiUrl + '/api/v1/accounts';
        log('GET ' + url);

        return (0, _axios2.default)({
          method: 'GET',
          url: url,
          headers: (0, _http.defaultHeaders)(accessToken)
        });
      }
    }, {
      key: 'getBalance',
      value: function getBalance(accessToken) {
        (0, _validator.typeValidation)(arguments, getBalanceParameterDefinition);
        var url = this.options.apiUrl + '/api/v1/accounts/balance';
        log('GET ' + url);

        return (0, _axios2.default)({
          method: 'GET',
          url: url,
          headers: (0, _http.defaultHeaders)(accessToken)
        });
      }
    }]);

    return Account;
  }();

  var getAccountParameterDefinition = [{ name: 'accessToken', validations: ['required', 'string'] }];

  var getBalanceParameterDefinition = [{ name: 'accessToken', validations: ['required', 'string'] }];

  module.exports = Account;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL2FjY291bnQuanMiXSwibmFtZXMiOlsibG9nIiwiQWNjb3VudCIsIm9wdGlvbnMiLCJhY2Nlc3NUb2tlbiIsImFyZ3VtZW50cyIsImdldEFjY291bnRQYXJhbWV0ZXJEZWZpbml0aW9uIiwidXJsIiwiYXBpVXJsIiwibWV0aG9kIiwiaGVhZGVycyIsImdldEJhbGFuY2VQYXJhbWV0ZXJEZWZpbml0aW9uIiwibmFtZSIsInZhbGlkYXRpb25zIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLE1BQU1BLE1BQU0scUJBQU0sMEJBQU4sQ0FBWjs7QUFFQTs7OztNQUdNQyxPOztBQUVKOzs7O0FBSUEscUJBQWFDLE9BQWIsRUFBc0I7QUFBQTs7QUFDcEIsV0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OztpQ0FLWUMsVyxFQUFhO0FBQ3ZCLHVDQUFlQyxTQUFmLEVBQTBCQyw2QkFBMUI7QUFDQSxZQUFNQyxNQUFTLEtBQUtKLE9BQUwsQ0FBYUssTUFBdEIscUJBQU47QUFDQVAscUJBQVdNLEdBQVg7O0FBRUEsZUFBTyxxQkFBTTtBQUNYRSxrQkFBUSxLQURHO0FBRVhGLGtCQUZXO0FBR1hHLG1CQUFTLDBCQUFlTixXQUFmO0FBSEUsU0FBTixDQUFQO0FBS0Q7OztpQ0FPV0EsVyxFQUFhO0FBQ3ZCLHVDQUFlQyxTQUFmLEVBQTBCTSw2QkFBMUI7QUFDQSxZQUFNSixNQUFTLEtBQUtKLE9BQUwsQ0FBYUssTUFBdEIsNkJBQU47QUFDQVAscUJBQVdNLEdBQVg7O0FBRUEsZUFBTyxxQkFBTTtBQUNYRSxrQkFBUSxLQURHO0FBRVhGLGtCQUZXO0FBR1hHLG1CQUFTLDBCQUFlTixXQUFmO0FBSEUsU0FBTixDQUFQO0FBS0Q7Ozs7OztBQUdILE1BQU1FLGdDQUFnQyxDQUNwQyxFQUFDTSxNQUFNLGFBQVAsRUFBc0JDLGFBQWEsQ0FBQyxVQUFELEVBQWEsUUFBYixDQUFuQyxFQURvQyxDQUF0Qzs7QUFJQSxNQUFNRixnQ0FBZ0MsQ0FDcEMsRUFBQ0MsTUFBTSxhQUFQLEVBQXNCQyxhQUFhLENBQUMsVUFBRCxFQUFhLFFBQWIsQ0FBbkMsRUFEb0MsQ0FBdEM7O0FBSUFDLFNBQU9DLE9BQVAsR0FBaUJiLE9BQWpCIiwiZmlsZSI6ImVudGl0aWVzL2FjY291bnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGRlYnVnIGZyb20gJ2RlYnVnJztcbmltcG9ydCB7ZGVmYXVsdEhlYWRlcnN9IGZyb20gJy4uL3V0aWxzL2h0dHAnO1xuaW1wb3J0IHt0eXBlVmFsaWRhdGlvbn0gZnJvbSAnLi4vdXRpbHMvdmFsaWRhdG9yJztcblxuY29uc3QgbG9nID0gZGVidWcoJ3N0YXJsaW5nOmFjY291bnQtc2VydmljZScpO1xuXG4vKipcbiAqIFNlcnZpY2UgdG8gaW50ZXJhY3Qgd2l0aCBhIGN1c3RvbWVyJ3MgYWNjb3VudFxuICovXG5jbGFzcyBBY2NvdW50IHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgYWNjb3VudCBjbGllbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBhcHBsaWNhdGlvbiBjb25maWdcbiAgICovXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYSBjdXN0b21lcidzIGFjY291bnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFjY2Vzc1Rva2VuIC0gdGhlIG9hdXRoIGJlYXJlciB0b2tlblxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBodHRwIHJlcXVlc3QgcHJvbWlzZVxuICAgKi9cbiAgZ2V0QWNjb3VudCAoYWNjZXNzVG9rZW4pIHtcbiAgICB0eXBlVmFsaWRhdGlvbihhcmd1bWVudHMsIGdldEFjY291bnRQYXJhbWV0ZXJEZWZpbml0aW9uKTtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLm9wdGlvbnMuYXBpVXJsfS9hcGkvdjEvYWNjb3VudHNgO1xuICAgIGxvZyhgR0VUICR7dXJsfWApO1xuXG4gICAgcmV0dXJuIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmwsXG4gICAgICBoZWFkZXJzOiBkZWZhdWx0SGVhZGVycyhhY2Nlc3NUb2tlbilcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGN1c3RvbWVyJ3MgYmFsYW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWNjZXNzVG9rZW4gLSB0aGUgb2F1dGggYmVhcmVyIHRva2VuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIGh0dHAgcmVxdWVzdCBwcm9taXNlXG4gICAqL1xuICBnZXRCYWxhbmNlIChhY2Nlc3NUb2tlbikge1xuICAgIHR5cGVWYWxpZGF0aW9uKGFyZ3VtZW50cywgZ2V0QmFsYW5jZVBhcmFtZXRlckRlZmluaXRpb24pO1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMub3B0aW9ucy5hcGlVcmx9L2FwaS92MS9hY2NvdW50cy9iYWxhbmNlYDtcbiAgICBsb2coYEdFVCAke3VybH1gKTtcblxuICAgIHJldHVybiBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsLFxuICAgICAgaGVhZGVyczogZGVmYXVsdEhlYWRlcnMoYWNjZXNzVG9rZW4pXG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgZ2V0QWNjb3VudFBhcmFtZXRlckRlZmluaXRpb24gPSBbXG4gIHtuYW1lOiAnYWNjZXNzVG9rZW4nLCB2YWxpZGF0aW9uczogWydyZXF1aXJlZCcsICdzdHJpbmcnXX1cbiAgXTtcblxuY29uc3QgZ2V0QmFsYW5jZVBhcmFtZXRlckRlZmluaXRpb24gPSBbXG4gIHtuYW1lOiAnYWNjZXNzVG9rZW4nLCB2YWxpZGF0aW9uczogWydyZXF1aXJlZCcsICdzdHJpbmcnXX1cbiAgXTtcblxubW9kdWxlLmV4cG9ydHMgPSBBY2NvdW50O1xuIl19
//# sourceMappingURL=account.js.map
