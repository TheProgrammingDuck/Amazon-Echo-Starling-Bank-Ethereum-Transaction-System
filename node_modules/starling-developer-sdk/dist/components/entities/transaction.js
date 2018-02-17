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
    global.transaction = mod.exports;
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

  var log = (0, _debug2.default)('starling:transaction-service');

  var transactionSource = function transactionSource(source) {
    if (source === 'MASTER_CARD') {
      return '/mastercard';
    } else if (source === 'FASTER_PAYMENTS_IN') {
      return '/fps/in';
    } else if (source === 'FASTER_PAYMENTS_OUT') {
      return '/fps/out';
    } else if (source === 'DIRECT_DEBIT') {
      return '/direct-debit';
    } else {
      return '';
    }
  };

  /**
   * Service to interact with a customer's transactions
   */

  var Transaction = function () {
    /**
     * Create a new transaction service
     * @param {Object} options - configuration parameters
     */
    function Transaction(options) {
      _classCallCheck(this, Transaction);

      this.options = options;
    }

    /**
     * Gets the customer's transactions over the given period
     * @param {string} accessToken - the oauth bearer token.
     * @param {string} fromDate - filter transactions after this date. Format: YYYY-MM-DD
     * @param {string} toDate - filter transactions before this date. Format: YYYY-MM-DD
     * @param {string=} source - the transaction type (e.g. faster payments, mastercard).
     * If not specified, results are not filtered by source.
     * @return {Promise} - the http request promise
     */


    _createClass(Transaction, [{
      key: 'getTransactions',
      value: function getTransactions(accessToken, fromDate, toDate, source) {
        (0, _validator.typeValidation)(arguments, getTransactionsParameterDefinition);
        var url = this.options.apiUrl + '/api/v1/transactions' + transactionSource(source);
        log('GET ' + url + ' from=' + fromDate + ' to=' + toDate);

        return (0, _axios2.default)({
          method: 'GET',
          url: url,
          params: {
            from: fromDate,
            to: toDate
          },
          headers: (0, _http.defaultHeaders)(accessToken)
        });
      }
    }, {
      key: 'getTransaction',
      value: function getTransaction(accessToken, transactionId, source) {
        (0, _validator.typeValidation)(arguments, getTransactionParameterDefinition);
        var url = this.options.apiUrl + '/api/v1/transactions' + transactionSource(source) + '/' + transactionId;
        log('GET ' + url);
        return (0, _axios2.default)({
          method: 'GET',
          url: url,
          headers: (0, _http.defaultHeaders)(accessToken)
        });
      }
    }]);

    return Transaction;
  }();

  var getTransactionsParameterDefinition = [{ name: 'accessToken', validations: ['required', 'string'] }, { name: 'fromDate', validations: ['optional', 'string'] }, { name: 'toDate', validations: ['optional', 'string'] }, { name: 'source', validations: ['optional', 'string'] }];

  var getTransactionParameterDefinition = [{ name: 'accessToken', validations: ['required', 'string'] }, { name: 'transactionId', validations: ['required', 'string'] }, { name: 'source', validations: ['optional', 'string'] }];

  module.exports = Transaction;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL3RyYW5zYWN0aW9uLmpzIl0sIm5hbWVzIjpbImxvZyIsInRyYW5zYWN0aW9uU291cmNlIiwic291cmNlIiwiVHJhbnNhY3Rpb24iLCJvcHRpb25zIiwiYWNjZXNzVG9rZW4iLCJmcm9tRGF0ZSIsInRvRGF0ZSIsImFyZ3VtZW50cyIsImdldFRyYW5zYWN0aW9uc1BhcmFtZXRlckRlZmluaXRpb24iLCJ1cmwiLCJhcGlVcmwiLCJtZXRob2QiLCJwYXJhbXMiLCJmcm9tIiwidG8iLCJoZWFkZXJzIiwidHJhbnNhY3Rpb25JZCIsImdldFRyYW5zYWN0aW9uUGFyYW1ldGVyRGVmaW5pdGlvbiIsIm5hbWUiLCJ2YWxpZGF0aW9ucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxNQUFNQSxNQUFNLHFCQUFNLDhCQUFOLENBQVo7O0FBRUEsTUFBTUMsb0JBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsTUFBRCxFQUFZO0FBQ3BDLFFBQUlBLFdBQVcsYUFBZixFQUE4QjtBQUM1QixhQUFPLGFBQVA7QUFDRCxLQUZELE1BRU8sSUFBSUEsV0FBVyxvQkFBZixFQUFxQztBQUMxQyxhQUFPLFNBQVA7QUFDRCxLQUZNLE1BRUEsSUFBSUEsV0FBVyxxQkFBZixFQUFzQztBQUMzQyxhQUFPLFVBQVA7QUFDRCxLQUZNLE1BRUEsSUFBSUEsV0FBVyxjQUFmLEVBQStCO0FBQ3BDLGFBQU8sZUFBUDtBQUNELEtBRk0sTUFFQTtBQUNMLGFBQU8sRUFBUDtBQUNEO0FBQ0YsR0FaRDs7QUFjQTs7OztNQUdNQyxXO0FBQ0o7Ozs7QUFJQSx5QkFBYUMsT0FBYixFQUFzQjtBQUFBOztBQUNwQixXQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7OztzQ0FTaUJDLFcsRUFBYUMsUSxFQUFVQyxNLEVBQVFMLE0sRUFBUTtBQUN0RCx1Q0FBZU0sU0FBZixFQUEwQkMsa0NBQTFCO0FBQ0EsWUFBTUMsTUFBUyxLQUFLTixPQUFMLENBQWFPLE1BQXRCLDRCQUFtRFYsa0JBQWtCQyxNQUFsQixDQUF6RDtBQUNBRixxQkFBV1UsR0FBWCxjQUF1QkosUUFBdkIsWUFBc0NDLE1BQXRDOztBQUVBLGVBQU8scUJBQU07QUFDWEssa0JBQVEsS0FERztBQUVYRixrQkFGVztBQUdYRyxrQkFBUTtBQUNOQyxrQkFBTVIsUUFEQTtBQUVOUyxnQkFBSVI7QUFGRSxXQUhHO0FBT1hTLG1CQUFTLDBCQUFlWCxXQUFmO0FBUEUsU0FBTixDQUFQO0FBU0Q7OztxQ0FVZUEsVyxFQUFhWSxhLEVBQWVmLE0sRUFBUTtBQUNsRCx1Q0FBZU0sU0FBZixFQUEwQlUsaUNBQTFCO0FBQ0EsWUFBTVIsTUFBUyxLQUFLTixPQUFMLENBQWFPLE1BQXRCLDRCQUFtRFYsa0JBQWtCQyxNQUFsQixDQUFuRCxTQUFnRmUsYUFBdEY7QUFDQWpCLHFCQUFXVSxHQUFYO0FBQ0EsZUFBTyxxQkFBTTtBQUNYRSxrQkFBUSxLQURHO0FBRVhGLGtCQUZXO0FBR1hNLG1CQUFTLDBCQUFlWCxXQUFmO0FBSEUsU0FBTixDQUFQO0FBS0Q7Ozs7OztBQUdILE1BQU1JLHFDQUFxQyxDQUN6QyxFQUFDVSxNQUFNLGFBQVAsRUFBc0JDLGFBQWEsQ0FBQyxVQUFELEVBQWEsUUFBYixDQUFuQyxFQUR5QyxFQUV6QyxFQUFDRCxNQUFNLFVBQVAsRUFBbUJDLGFBQWEsQ0FBQyxVQUFELEVBQWEsUUFBYixDQUFoQyxFQUZ5QyxFQUd6QyxFQUFDRCxNQUFNLFFBQVAsRUFBaUJDLGFBQWEsQ0FBQyxVQUFELEVBQWEsUUFBYixDQUE5QixFQUh5QyxFQUl6QyxFQUFDRCxNQUFNLFFBQVAsRUFBaUJDLGFBQWEsQ0FBQyxVQUFELEVBQWEsUUFBYixDQUE5QixFQUp5QyxDQUEzQzs7QUFPQSxNQUFNRixvQ0FBb0MsQ0FDeEMsRUFBQ0MsTUFBTSxhQUFQLEVBQXNCQyxhQUFhLENBQUMsVUFBRCxFQUFhLFFBQWIsQ0FBbkMsRUFEd0MsRUFFeEMsRUFBQ0QsTUFBTSxlQUFQLEVBQXdCQyxhQUFhLENBQUMsVUFBRCxFQUFhLFFBQWIsQ0FBckMsRUFGd0MsRUFHeEMsRUFBQ0QsTUFBTSxRQUFQLEVBQWlCQyxhQUFhLENBQUMsVUFBRCxFQUFhLFFBQWIsQ0FBOUIsRUFId0MsQ0FBMUM7O0FBTUFDLFNBQU9DLE9BQVAsR0FBaUJuQixXQUFqQiIsImZpbGUiOiJlbnRpdGllcy90cmFuc2FjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgZGVidWcgZnJvbSAnZGVidWcnO1xuaW1wb3J0IHtkZWZhdWx0SGVhZGVyc30gZnJvbSAnLi4vdXRpbHMvaHR0cCc7XG5pbXBvcnQge3R5cGVWYWxpZGF0aW9ufSBmcm9tICcuLi91dGlscy92YWxpZGF0b3InO1xuXG5jb25zdCBsb2cgPSBkZWJ1Zygnc3Rhcmxpbmc6dHJhbnNhY3Rpb24tc2VydmljZScpO1xuXG5jb25zdCB0cmFuc2FjdGlvblNvdXJjZSA9IChzb3VyY2UpID0+IHtcbiAgaWYgKHNvdXJjZSA9PT0gJ01BU1RFUl9DQVJEJykge1xuICAgIHJldHVybiAnL21hc3RlcmNhcmQnO1xuICB9IGVsc2UgaWYgKHNvdXJjZSA9PT0gJ0ZBU1RFUl9QQVlNRU5UU19JTicpIHtcbiAgICByZXR1cm4gJy9mcHMvaW4nO1xuICB9IGVsc2UgaWYgKHNvdXJjZSA9PT0gJ0ZBU1RFUl9QQVlNRU5UU19PVVQnKSB7XG4gICAgcmV0dXJuICcvZnBzL291dCc7XG4gIH0gZWxzZSBpZiAoc291cmNlID09PSAnRElSRUNUX0RFQklUJykge1xuICAgIHJldHVybiAnL2RpcmVjdC1kZWJpdCc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn07XG5cbi8qKlxuICogU2VydmljZSB0byBpbnRlcmFjdCB3aXRoIGEgY3VzdG9tZXIncyB0cmFuc2FjdGlvbnNcbiAqL1xuY2xhc3MgVHJhbnNhY3Rpb24ge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHRyYW5zYWN0aW9uIHNlcnZpY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnNcbiAgICovXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjdXN0b21lcidzIHRyYW5zYWN0aW9ucyBvdmVyIHRoZSBnaXZlbiBwZXJpb2RcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFjY2Vzc1Rva2VuIC0gdGhlIG9hdXRoIGJlYXJlciB0b2tlbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGZyb21EYXRlIC0gZmlsdGVyIHRyYW5zYWN0aW9ucyBhZnRlciB0aGlzIGRhdGUuIEZvcm1hdDogWVlZWS1NTS1ERFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdG9EYXRlIC0gZmlsdGVyIHRyYW5zYWN0aW9ucyBiZWZvcmUgdGhpcyBkYXRlLiBGb3JtYXQ6IFlZWVktTU0tRERcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBzb3VyY2UgLSB0aGUgdHJhbnNhY3Rpb24gdHlwZSAoZS5nLiBmYXN0ZXIgcGF5bWVudHMsIG1hc3RlcmNhcmQpLlxuICAgKiBJZiBub3Qgc3BlY2lmaWVkLCByZXN1bHRzIGFyZSBub3QgZmlsdGVyZWQgYnkgc291cmNlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBodHRwIHJlcXVlc3QgcHJvbWlzZVxuICAgKi9cbiAgZ2V0VHJhbnNhY3Rpb25zIChhY2Nlc3NUb2tlbiwgZnJvbURhdGUsIHRvRGF0ZSwgc291cmNlKSB7XG4gICAgdHlwZVZhbGlkYXRpb24oYXJndW1lbnRzLCBnZXRUcmFuc2FjdGlvbnNQYXJhbWV0ZXJEZWZpbml0aW9uKTtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLm9wdGlvbnMuYXBpVXJsfS9hcGkvdjEvdHJhbnNhY3Rpb25zJHt0cmFuc2FjdGlvblNvdXJjZShzb3VyY2UpfWA7XG4gICAgbG9nKGBHRVQgJHt1cmx9IGZyb209JHtmcm9tRGF0ZX0gdG89JHt0b0RhdGV9YCk7XG5cbiAgICByZXR1cm4gYXhpb3Moe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybCxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBmcm9tOiBmcm9tRGF0ZSxcbiAgICAgICAgdG86IHRvRGF0ZVxuICAgICAgfSxcbiAgICAgIGhlYWRlcnM6IGRlZmF1bHRIZWFkZXJzKGFjY2Vzc1Rva2VuKVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGZ1bGwgZGV0YWlscyBvZiBhIHNpbmdsZSB0cmFuc2FjdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWNjZXNzVG9rZW4gLSB0aGUgb2F1dGggYmVhcmVyIHRva2VuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFuc2FjdGlvbklkIC0gdGhlIHVuaXF1ZSB0cmFuc2FjdGlvbiBJRFxuICAgKiBAcGFyYW0ge3N0cmluZz19IHNvdXJjZSAtIHRoZSB0cmFuc2FjdGlvbiB0eXBlIChlLmcuIGZhc3RlciBwYXltZW50cywgbWFzdGVyY2FyZCkuXG4gICAqIElmIG5vdCBzcGVjaWZpZWQsIG9ubHkgZ2VuZXJpYyB0cmFuc2FjdGlvbiBpbmZvcm1hdGlvbiB3aWxsIGJlIHJldHVybmVkLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBodHRwIHJlcXVlc3QgcHJvbWlzZVxuICAgKi9cbiAgZ2V0VHJhbnNhY3Rpb24gKGFjY2Vzc1Rva2VuLCB0cmFuc2FjdGlvbklkLCBzb3VyY2UpIHtcbiAgICB0eXBlVmFsaWRhdGlvbihhcmd1bWVudHMsIGdldFRyYW5zYWN0aW9uUGFyYW1ldGVyRGVmaW5pdGlvbik7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5vcHRpb25zLmFwaVVybH0vYXBpL3YxL3RyYW5zYWN0aW9ucyR7dHJhbnNhY3Rpb25Tb3VyY2Uoc291cmNlKX0vJHt0cmFuc2FjdGlvbklkfWA7XG4gICAgbG9nKGBHRVQgJHt1cmx9YCk7XG4gICAgcmV0dXJuIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmwsXG4gICAgICBoZWFkZXJzOiBkZWZhdWx0SGVhZGVycyhhY2Nlc3NUb2tlbilcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBnZXRUcmFuc2FjdGlvbnNQYXJhbWV0ZXJEZWZpbml0aW9uID0gW1xuICB7bmFtZTogJ2FjY2Vzc1Rva2VuJywgdmFsaWRhdGlvbnM6IFsncmVxdWlyZWQnLCAnc3RyaW5nJ119LFxuICB7bmFtZTogJ2Zyb21EYXRlJywgdmFsaWRhdGlvbnM6IFsnb3B0aW9uYWwnLCAnc3RyaW5nJ119LFxuICB7bmFtZTogJ3RvRGF0ZScsIHZhbGlkYXRpb25zOiBbJ29wdGlvbmFsJywgJ3N0cmluZyddfSxcbiAge25hbWU6ICdzb3VyY2UnLCB2YWxpZGF0aW9uczogWydvcHRpb25hbCcsICdzdHJpbmcnXX1cbl07XG5cbmNvbnN0IGdldFRyYW5zYWN0aW9uUGFyYW1ldGVyRGVmaW5pdGlvbiA9IFtcbiAge25hbWU6ICdhY2Nlc3NUb2tlbicsIHZhbGlkYXRpb25zOiBbJ3JlcXVpcmVkJywgJ3N0cmluZyddfSxcbiAge25hbWU6ICd0cmFuc2FjdGlvbklkJywgdmFsaWRhdGlvbnM6IFsncmVxdWlyZWQnLCAnc3RyaW5nJ119LFxuICB7bmFtZTogJ3NvdXJjZScsIHZhbGlkYXRpb25zOiBbJ29wdGlvbmFsJywgJ3N0cmluZyddfVxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc2FjdGlvbjtcbiJdfQ==
//# sourceMappingURL=transaction.js.map
