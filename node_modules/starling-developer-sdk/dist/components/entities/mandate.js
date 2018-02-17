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
    global.mandate = mod.exports;
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

  var log = (0, _debug2.default)('starling:mandate-service');

  /**
   * Service to interact with a customer's transactions
   */

  var Mandate = function () {
    /**
     * Create a new transaction service
     * @param {Object} options - configuration parameters
     */
    function Mandate(options) {
      _classCallCheck(this, Mandate);

      this.options = options;
    }

    /**
     * Gets a list of the customer's current direct debit mandates
     * @param {string} accessToken - the oauth bearer token.
     * @return {Promise} - the http request promise
     */


    _createClass(Mandate, [{
      key: 'listMandates',
      value: function listMandates(accessToken) {
        (0, _validator.typeValidation)(arguments, listMandatesParameterDefinition);
        var url = this.options.apiUrl + '/api/v1/direct-debit/mandates';
        log('GET ' + url);
        return (0, _axios2.default)({
          method: 'GET',
          url: url,
          headers: (0, _http.defaultHeaders)(accessToken)
        });
      }
    }, {
      key: 'deleteMandate',
      value: function deleteMandate(accessToken, mandateId) {
        (0, _validator.typeValidation)(arguments, deleteMandateParameterDefinition);
        var url = this.options.apiUrl + '/api/v1/direct-debit/mandates/' + mandateId;
        log('DELETE ' + url);
        return (0, _axios2.default)({
          method: 'DELETE',
          url: url,
          headers: (0, _http.defaultHeaders)(accessToken)
        });
      }
    }]);

    return Mandate;
  }();

  var listMandatesParameterDefinition = [{ name: 'accessToken', validations: ['required', 'string'] }];

  var deleteMandateParameterDefinition = [{ name: 'accessToken', validations: ['required', 'string'] }, { name: 'mandateId', validations: ['required', 'string'] }];

  module.exports = Mandate;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL21hbmRhdGUuanMiXSwibmFtZXMiOlsibG9nIiwiTWFuZGF0ZSIsIm9wdGlvbnMiLCJhY2Nlc3NUb2tlbiIsImFyZ3VtZW50cyIsImxpc3RNYW5kYXRlc1BhcmFtZXRlckRlZmluaXRpb24iLCJ1cmwiLCJhcGlVcmwiLCJtZXRob2QiLCJoZWFkZXJzIiwibWFuZGF0ZUlkIiwiZGVsZXRlTWFuZGF0ZVBhcmFtZXRlckRlZmluaXRpb24iLCJuYW1lIiwidmFsaWRhdGlvbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsTUFBTUEsTUFBTSxxQkFBTSwwQkFBTixDQUFaOztBQUdBOzs7O01BR01DLE87QUFDSjs7OztBQUlBLHFCQUFhQyxPQUFiLEVBQXNCO0FBQUE7O0FBQ3BCLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOztBQUVEOzs7Ozs7Ozs7bUNBS2NDLFcsRUFBYTtBQUN6Qix1Q0FBZUMsU0FBZixFQUEwQkMsK0JBQTFCO0FBQ0EsWUFBTUMsTUFBUyxLQUFLSixPQUFMLENBQWFLLE1BQXRCLGtDQUFOO0FBQ0FQLHFCQUFXTSxHQUFYO0FBQ0EsZUFBTyxxQkFBTTtBQUNYRSxrQkFBUSxLQURHO0FBRVhGLGtCQUZXO0FBR1hHLG1CQUFTLDBCQUFlTixXQUFmO0FBSEUsU0FBTixDQUFQO0FBS0Q7OztvQ0FRY0EsVyxFQUFhTyxTLEVBQVc7QUFDckMsdUNBQWVOLFNBQWYsRUFBMEJPLGdDQUExQjtBQUNBLFlBQU1MLE1BQVMsS0FBS0osT0FBTCxDQUFhSyxNQUF0QixzQ0FBNkRHLFNBQW5FO0FBQ0FWLHdCQUFjTSxHQUFkO0FBQ0EsZUFBTyxxQkFBTTtBQUNYRSxrQkFBUSxRQURHO0FBRVhGLGtCQUZXO0FBR1hHLG1CQUFTLDBCQUFlTixXQUFmO0FBSEUsU0FBTixDQUFQO0FBS0Q7Ozs7OztBQUdILE1BQU1FLGtDQUFrQyxDQUN0QyxFQUFDTyxNQUFNLGFBQVAsRUFBc0JDLGFBQWEsQ0FBQyxVQUFELEVBQWEsUUFBYixDQUFuQyxFQURzQyxDQUF4Qzs7QUFJQSxNQUFNRixtQ0FBbUMsQ0FDdkMsRUFBQ0MsTUFBTSxhQUFQLEVBQXNCQyxhQUFhLENBQUMsVUFBRCxFQUFhLFFBQWIsQ0FBbkMsRUFEdUMsRUFFdkMsRUFBQ0QsTUFBTSxXQUFQLEVBQW9CQyxhQUFhLENBQUMsVUFBRCxFQUFhLFFBQWIsQ0FBakMsRUFGdUMsQ0FBekM7O0FBS0FDLFNBQU9DLE9BQVAsR0FBaUJkLE9BQWpCIiwiZmlsZSI6ImVudGl0aWVzL21hbmRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGRlYnVnIGZyb20gJ2RlYnVnJztcbmltcG9ydCB7ZGVmYXVsdEhlYWRlcnN9IGZyb20gJy4uL3V0aWxzL2h0dHAnO1xuaW1wb3J0IHt0eXBlVmFsaWRhdGlvbn0gZnJvbSAnLi4vdXRpbHMvdmFsaWRhdG9yJztcblxuY29uc3QgbG9nID0gZGVidWcoJ3N0YXJsaW5nOm1hbmRhdGUtc2VydmljZScpO1xuXG5cbi8qKlxuICogU2VydmljZSB0byBpbnRlcmFjdCB3aXRoIGEgY3VzdG9tZXIncyB0cmFuc2FjdGlvbnNcbiAqL1xuY2xhc3MgTWFuZGF0ZSB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgdHJhbnNhY3Rpb24gc2VydmljZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVyc1xuICAgKi9cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBsaXN0IG9mIHRoZSBjdXN0b21lcidzIGN1cnJlbnQgZGlyZWN0IGRlYml0IG1hbmRhdGVzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhY2Nlc3NUb2tlbiAtIHRoZSBvYXV0aCBiZWFyZXIgdG9rZW4uXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIGh0dHAgcmVxdWVzdCBwcm9taXNlXG4gICAqL1xuICBsaXN0TWFuZGF0ZXMgKGFjY2Vzc1Rva2VuKSB7XG4gICAgdHlwZVZhbGlkYXRpb24oYXJndW1lbnRzLCBsaXN0TWFuZGF0ZXNQYXJhbWV0ZXJEZWZpbml0aW9uKTtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLm9wdGlvbnMuYXBpVXJsfS9hcGkvdjEvZGlyZWN0LWRlYml0L21hbmRhdGVzYDtcbiAgICBsb2coYEdFVCAke3VybH1gKTtcbiAgICByZXR1cm4gYXhpb3Moe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybCxcbiAgICAgIGhlYWRlcnM6IGRlZmF1bHRIZWFkZXJzKGFjY2Vzc1Rva2VuKVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgc3BlY2lmaWMgZGlyZWN0IGRlYml0IG1hbmRhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFjY2Vzc1Rva2VuIC0gdGhlIG9hdXRoIGJlYXJlciB0b2tlbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hbmRhdGVJZCAtIHRoZSB1bmlxdWUgbWFuZGF0ZSBJRFxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBodHRwIHJlcXVlc3QgcHJvbWlzZVxuICAgKi9cbiAgZGVsZXRlTWFuZGF0ZSAoYWNjZXNzVG9rZW4sIG1hbmRhdGVJZCkge1xuICAgIHR5cGVWYWxpZGF0aW9uKGFyZ3VtZW50cywgZGVsZXRlTWFuZGF0ZVBhcmFtZXRlckRlZmluaXRpb24pO1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMub3B0aW9ucy5hcGlVcmx9L2FwaS92MS9kaXJlY3QtZGViaXQvbWFuZGF0ZXMvJHttYW5kYXRlSWR9YDtcbiAgICBsb2coYERFTEVURSAke3VybH1gKTtcbiAgICByZXR1cm4gYXhpb3Moe1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIHVybCxcbiAgICAgIGhlYWRlcnM6IGRlZmF1bHRIZWFkZXJzKGFjY2Vzc1Rva2VuKVxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IGxpc3RNYW5kYXRlc1BhcmFtZXRlckRlZmluaXRpb24gPSBbXG4gIHtuYW1lOiAnYWNjZXNzVG9rZW4nLCB2YWxpZGF0aW9uczogWydyZXF1aXJlZCcsICdzdHJpbmcnXX1cbl07XG5cbmNvbnN0IGRlbGV0ZU1hbmRhdGVQYXJhbWV0ZXJEZWZpbml0aW9uID0gW1xuICB7bmFtZTogJ2FjY2Vzc1Rva2VuJywgdmFsaWRhdGlvbnM6IFsncmVxdWlyZWQnLCAnc3RyaW5nJ119LFxuICB7bmFtZTogJ21hbmRhdGVJZCcsIHZhbGlkYXRpb25zOiBbJ3JlcXVpcmVkJywgJ3N0cmluZyddfVxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYW5kYXRlO1xuIl19
//# sourceMappingURL=mandate.js.map
