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
    global.payment = mod.exports;
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

  var log = (0, _debug2.default)('starling:payment-service');

  /**
   * Service to interact with a customer's transactions
   */

  var Payment = function () {
    /**
     * Create a new transaction service
     * @param {Object} options - configuration parameters
     */
    function Payment(options) {
      _classCallCheck(this, Payment);

      this.options = options;
    }

    /**
     * Makes a payment on behalf of the customer to another UK bank account using the Faster Payments network
     * @param {string} accessToken - the oauth bearer token.
     *  @param {string} destinationAccountUid - the account identifier of the recipient
     * @param {string} reference - The payment reference, max. 18 characters.
     * @param {string} amount - the amount to be send.
     * @param {string=} currency - the currency, optional, defaults to "GBP".
     * @return {Promise} - the http request promise
     */


    _createClass(Payment, [{
      key: 'makeLocalPayment',
      value: function makeLocalPayment(accessToken, destinationAccountUid, reference, amount, currency) {
        (0, _validator.typeValidation)(arguments, makeLocalPaymentParameterDefinition);
        var url = this.options.apiUrl + '/api/v1/payments/local';
        log('POST ' + url);
        return (0, _axios2.default)({
          method: 'POST',
          url: url,
          headers: (0, _http.postHeaders)(accessToken),
          data: JSON.stringify({
            destinationAccountUid: destinationAccountUid,
            payment: {
              amount: amount,
              currency: currency
            },
            reference: reference
          })
        });
      }
    }, {
      key: 'listScheduledPayments',
      value: function listScheduledPayments(accessToken) {
        (0, _validator.typeValidation)(arguments, listScheduledPaymentsParameterDefinition);
        var url = this.options.apiUrl + '/api/v1/payments/scheduled';
        log('GET ' + url);
        return (0, _axios2.default)({
          method: 'GET',
          url: url,
          headers: (0, _http.defaultHeaders)(accessToken)
        });
      }
    }]);

    return Payment;
  }();

  var makeLocalPaymentParameterDefinition = [{ name: 'accessToken', validations: ['required', 'string'] }, { name: 'destinationAccountUid', validations: ['required', 'string'] }, { name: 'reference', validations: ['required', 'string'] }, { name: 'amount', validations: ['required', 'string'] }, { name: 'currency', validations: ['optional', 'string'] }];

  var listScheduledPaymentsParameterDefinition = [{ name: 'accessToken', validations: ['required', 'string'] }];

  module.exports = Payment;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL3BheW1lbnQuanMiXSwibmFtZXMiOlsibG9nIiwiUGF5bWVudCIsIm9wdGlvbnMiLCJhY2Nlc3NUb2tlbiIsImRlc3RpbmF0aW9uQWNjb3VudFVpZCIsInJlZmVyZW5jZSIsImFtb3VudCIsImN1cnJlbmN5IiwiYXJndW1lbnRzIiwibWFrZUxvY2FsUGF5bWVudFBhcmFtZXRlckRlZmluaXRpb24iLCJ1cmwiLCJhcGlVcmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXltZW50IiwibGlzdFNjaGVkdWxlZFBheW1lbnRzUGFyYW1ldGVyRGVmaW5pdGlvbiIsIm5hbWUiLCJ2YWxpZGF0aW9ucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxNQUFNQSxNQUFNLHFCQUFNLDBCQUFOLENBQVo7O0FBR0E7Ozs7TUFHTUMsTztBQUNKOzs7O0FBSUEscUJBQWFDLE9BQWIsRUFBc0I7QUFBQTs7QUFDcEIsV0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7dUNBU2tCQyxXLEVBQWFDLHFCLEVBQXVCQyxTLEVBQVdDLE0sRUFBUUMsUSxFQUFVO0FBQ2pGLHVDQUFlQyxTQUFmLEVBQTBCQyxtQ0FBMUI7QUFDQSxZQUFNQyxNQUFTLEtBQUtSLE9BQUwsQ0FBYVMsTUFBdEIsMkJBQU47QUFDQVgsc0JBQVlVLEdBQVo7QUFDQSxlQUFPLHFCQUFNO0FBQ1hFLGtCQUFRLE1BREc7QUFFWEYsa0JBRlc7QUFHWEcsbUJBQVMsdUJBQVlWLFdBQVosQ0FIRTtBQUlYVyxnQkFBTUMsS0FBS0MsU0FBTCxDQUFlO0FBQ25CWix3REFEbUI7QUFFbkJhLHFCQUFTO0FBQ1BYLDRCQURPO0FBRVBDO0FBRk8sYUFGVTtBQU1uQkY7QUFObUIsV0FBZjtBQUpLLFNBQU4sQ0FBUDtBQWFEOzs7NENBUXNCRixXLEVBQWE7QUFDbEMsdUNBQWVLLFNBQWYsRUFBMEJVLHdDQUExQjtBQUNBLFlBQU1SLE1BQVMsS0FBS1IsT0FBTCxDQUFhUyxNQUF0QiwrQkFBTjtBQUNBWCxxQkFBV1UsR0FBWDtBQUNBLGVBQU8scUJBQU07QUFDWEUsa0JBQVEsS0FERztBQUVYRixrQkFGVztBQUdYRyxtQkFBUywwQkFBZVYsV0FBZjtBQUhFLFNBQU4sQ0FBUDtBQUtEOzs7Ozs7QUFHSCxNQUFNTSxzQ0FBc0MsQ0FDMUMsRUFBQ1UsTUFBTSxhQUFQLEVBQXNCQyxhQUFhLENBQUMsVUFBRCxFQUFhLFFBQWIsQ0FBbkMsRUFEMEMsRUFFMUMsRUFBQ0QsTUFBTSx1QkFBUCxFQUFnQ0MsYUFBYSxDQUFDLFVBQUQsRUFBYSxRQUFiLENBQTdDLEVBRjBDLEVBRzFDLEVBQUNELE1BQU0sV0FBUCxFQUFvQkMsYUFBYSxDQUFDLFVBQUQsRUFBYSxRQUFiLENBQWpDLEVBSDBDLEVBSTFDLEVBQUNELE1BQU0sUUFBUCxFQUFpQkMsYUFBYSxDQUFDLFVBQUQsRUFBYSxRQUFiLENBQTlCLEVBSjBDLEVBSzFDLEVBQUNELE1BQU0sVUFBUCxFQUFtQkMsYUFBYSxDQUFDLFVBQUQsRUFBYSxRQUFiLENBQWhDLEVBTDBDLENBQTVDOztBQVFBLE1BQU1GLDJDQUEyQyxDQUMvQyxFQUFDQyxNQUFNLGFBQVAsRUFBc0JDLGFBQWEsQ0FBQyxVQUFELEVBQWEsUUFBYixDQUFuQyxFQUQrQyxDQUFqRDs7QUFJQUMsU0FBT0MsT0FBUCxHQUFpQnJCLE9BQWpCIiwiZmlsZSI6ImVudGl0aWVzL3BheW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGRlYnVnIGZyb20gJ2RlYnVnJztcbmltcG9ydCB7ZGVmYXVsdEhlYWRlcnMsIHBvc3RIZWFkZXJzfSBmcm9tICcuLi91dGlscy9odHRwJztcbmltcG9ydCB7dHlwZVZhbGlkYXRpb259IGZyb20gJy4uL3V0aWxzL3ZhbGlkYXRvcic7XG5cbmNvbnN0IGxvZyA9IGRlYnVnKCdzdGFybGluZzpwYXltZW50LXNlcnZpY2UnKTtcblxuXG4vKipcbiAqIFNlcnZpY2UgdG8gaW50ZXJhY3Qgd2l0aCBhIGN1c3RvbWVyJ3MgdHJhbnNhY3Rpb25zXG4gKi9cbmNsYXNzIFBheW1lbnQge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHRyYW5zYWN0aW9uIHNlcnZpY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnNcbiAgICovXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlcyBhIHBheW1lbnQgb24gYmVoYWxmIG9mIHRoZSBjdXN0b21lciB0byBhbm90aGVyIFVLIGJhbmsgYWNjb3VudCB1c2luZyB0aGUgRmFzdGVyIFBheW1lbnRzIG5ldHdvcmtcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFjY2Vzc1Rva2VuIC0gdGhlIG9hdXRoIGJlYXJlciB0b2tlbi5cbiAgICogIEBwYXJhbSB7c3RyaW5nfSBkZXN0aW5hdGlvbkFjY291bnRVaWQgLSB0aGUgYWNjb3VudCBpZGVudGlmaWVyIG9mIHRoZSByZWNpcGllbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlZmVyZW5jZSAtIFRoZSBwYXltZW50IHJlZmVyZW5jZSwgbWF4LiAxOCBjaGFyYWN0ZXJzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYW1vdW50IC0gdGhlIGFtb3VudCB0byBiZSBzZW5kLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IGN1cnJlbmN5IC0gdGhlIGN1cnJlbmN5LCBvcHRpb25hbCwgZGVmYXVsdHMgdG8gXCJHQlBcIi5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgaHR0cCByZXF1ZXN0IHByb21pc2VcbiAgICovXG4gIG1ha2VMb2NhbFBheW1lbnQgKGFjY2Vzc1Rva2VuLCBkZXN0aW5hdGlvbkFjY291bnRVaWQsIHJlZmVyZW5jZSwgYW1vdW50LCBjdXJyZW5jeSkge1xuICAgIHR5cGVWYWxpZGF0aW9uKGFyZ3VtZW50cywgbWFrZUxvY2FsUGF5bWVudFBhcmFtZXRlckRlZmluaXRpb24pO1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMub3B0aW9ucy5hcGlVcmx9L2FwaS92MS9wYXltZW50cy9sb2NhbGA7XG4gICAgbG9nKGBQT1NUICR7dXJsfWApO1xuICAgIHJldHVybiBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybCxcbiAgICAgIGhlYWRlcnM6IHBvc3RIZWFkZXJzKGFjY2Vzc1Rva2VuKSxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZGVzdGluYXRpb25BY2NvdW50VWlkLFxuICAgICAgICBwYXltZW50OiB7XG4gICAgICAgICAgYW1vdW50LFxuICAgICAgICAgIGN1cnJlbmN5XG4gICAgICAgIH0sXG4gICAgICAgIHJlZmVyZW5jZVxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIExpc3RzIHRoZSBjdXN0b21lcidzIHNjaGVkdWxlZCBwYXltZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gYWNjZXNzVG9rZW4gLSB0aGUgb2F1dGggYmVhcmVyIHRva2VuLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBodHRwIHJlcXVlc3QgcHJvbWlzZVxuICAgKi9cbiAgbGlzdFNjaGVkdWxlZFBheW1lbnRzIChhY2Nlc3NUb2tlbikge1xuICAgIHR5cGVWYWxpZGF0aW9uKGFyZ3VtZW50cywgbGlzdFNjaGVkdWxlZFBheW1lbnRzUGFyYW1ldGVyRGVmaW5pdGlvbik7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5vcHRpb25zLmFwaVVybH0vYXBpL3YxL3BheW1lbnRzL3NjaGVkdWxlZGA7XG4gICAgbG9nKGBHRVQgJHt1cmx9YCk7XG4gICAgcmV0dXJuIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmwsXG4gICAgICBoZWFkZXJzOiBkZWZhdWx0SGVhZGVycyhhY2Nlc3NUb2tlbilcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBtYWtlTG9jYWxQYXltZW50UGFyYW1ldGVyRGVmaW5pdGlvbiA9IFtcbiAge25hbWU6ICdhY2Nlc3NUb2tlbicsIHZhbGlkYXRpb25zOiBbJ3JlcXVpcmVkJywgJ3N0cmluZyddfSxcbiAge25hbWU6ICdkZXN0aW5hdGlvbkFjY291bnRVaWQnLCB2YWxpZGF0aW9uczogWydyZXF1aXJlZCcsICdzdHJpbmcnXX0sXG4gIHtuYW1lOiAncmVmZXJlbmNlJywgdmFsaWRhdGlvbnM6IFsncmVxdWlyZWQnLCAnc3RyaW5nJ119LFxuICB7bmFtZTogJ2Ftb3VudCcsIHZhbGlkYXRpb25zOiBbJ3JlcXVpcmVkJywgJ3N0cmluZyddfSxcbiAge25hbWU6ICdjdXJyZW5jeScsIHZhbGlkYXRpb25zOiBbJ29wdGlvbmFsJywgJ3N0cmluZyddfVxuXTtcblxuY29uc3QgbGlzdFNjaGVkdWxlZFBheW1lbnRzUGFyYW1ldGVyRGVmaW5pdGlvbiA9IFtcbiAge25hbWU6ICdhY2Nlc3NUb2tlbicsIHZhbGlkYXRpb25zOiBbJ3JlcXVpcmVkJywgJ3N0cmluZyddfVxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXltZW50O1xuIl19
//# sourceMappingURL=payment.js.map
