(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'axios', 'debug', '../utils/validator'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('axios'), require('debug'), require('../utils/validator'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.axios, global.debug, global.validator);
    global.oauth = mod.exports;
  }
})(this, function (module, _axios, _debug, _validator) {
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

  var ACCESS_TOKEN_GRANT_TYPE = 'authorization_code';
  var REFRESH_TOKEN_GRANT_TYPE = 'refresh_token';

  var log = (0, _debug2.default)('starling:oauth-service');

  /**
   * Service to interact with a the oauth endpoint
   */

  var OAuth = function () {

    /**
     * Create a new oauth service
     * @param {Object} options - configuration parameters
     */
    function OAuth(options) {
      _classCallCheck(this, OAuth);

      this.options = options;
    }

    /**
     * Exchanges the authorization code for an access token
     * @param {string} authorizationCode - the authorization code, acquired from the user agent after the
     * user authenticates with starling
     * @return {Promise} - the http request promise
     */


    _createClass(OAuth, [{
      key: 'getAccessToken',
      value: function getAccessToken(authorizationCode) {
        (0, _validator.typeValidation)(arguments, authorizationCodeParameterDefinition);
        return this.getOAuthToken({
          'code': authorizationCode,
          'grant_type': ACCESS_TOKEN_GRANT_TYPE,
          'client_id': this.options.clientId,
          'client_secret': this.options.clientSecret,
          'redirect_uri': this.options.redirectUri
        });
      }
    }, {
      key: 'refreshAccessToken',
      value: function refreshAccessToken(refreshToken) {
        (0, _validator.typeValidation)(arguments, refreshTokenParameterDefinition);
        return this.getOAuthToken({
          'refresh_token': refreshToken,
          'grant_type': REFRESH_TOKEN_GRANT_TYPE,
          'client_id': this.options.clientId,
          'client_secret': this.options.clientSecret
        });
      }
    }, {
      key: 'getOAuthToken',
      value: function getOAuthToken(params) {
        if (!this.options.clientId) {
          throw Error('clientId is not configured');
        }

        if (!this.options.clientSecret) {
          throw Error('clientSecret is not configured');
        }

        var url = this.options.oauthUrl + '/oauth/access-token';
        log('POST ' + url + ' queryParams:' + JSON.stringify(params));

        return (0, _axios2.default)({
          url: url,
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json'
          },
          params: params
        });
      }
    }]);

    return OAuth;
  }();

  var refreshTokenParameterDefinition = [{ name: 'refreshToken', validations: ['required', 'string'] }];

  var authorizationCodeParameterDefinition = [{ name: 'authorizationCode', validations: ['required', 'string'] }];

  module.exports = OAuth;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL29hdXRoLmpzIl0sIm5hbWVzIjpbIkFDQ0VTU19UT0tFTl9HUkFOVF9UWVBFIiwiUkVGUkVTSF9UT0tFTl9HUkFOVF9UWVBFIiwibG9nIiwiT0F1dGgiLCJvcHRpb25zIiwiYXV0aG9yaXphdGlvbkNvZGUiLCJhcmd1bWVudHMiLCJhdXRob3JpemF0aW9uQ29kZVBhcmFtZXRlckRlZmluaXRpb24iLCJnZXRPQXV0aFRva2VuIiwiY2xpZW50SWQiLCJjbGllbnRTZWNyZXQiLCJyZWRpcmVjdFVyaSIsInJlZnJlc2hUb2tlbiIsInJlZnJlc2hUb2tlblBhcmFtZXRlckRlZmluaXRpb24iLCJwYXJhbXMiLCJFcnJvciIsInVybCIsIm9hdXRoVXJsIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJuYW1lIiwidmFsaWRhdGlvbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsTUFBTUEsMEJBQTBCLG9CQUFoQztBQUNBLE1BQU1DLDJCQUEyQixlQUFqQzs7QUFFQSxNQUFNQyxNQUFNLHFCQUFNLHdCQUFOLENBQVo7O0FBRUE7Ozs7TUFHTUMsSzs7QUFFSjs7OztBQUlBLG1CQUFhQyxPQUFiLEVBQXNCO0FBQUE7O0FBQ3BCLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOztBQUVEOzs7Ozs7Ozs7O3FDQU1nQkMsaUIsRUFBbUI7QUFDakMsdUNBQWVDLFNBQWYsRUFBMEJDLG9DQUExQjtBQUNBLGVBQU8sS0FBS0MsYUFBTCxDQUFtQjtBQUN4QixrQkFBUUgsaUJBRGdCO0FBRXhCLHdCQUFjTCx1QkFGVTtBQUd4Qix1QkFBYSxLQUFLSSxPQUFMLENBQWFLLFFBSEY7QUFJeEIsMkJBQWlCLEtBQUtMLE9BQUwsQ0FBYU0sWUFKTjtBQUt4QiwwQkFBZ0IsS0FBS04sT0FBTCxDQUFhTztBQUxMLFNBQW5CLENBQVA7QUFPRDs7O3lDQVFtQkMsWSxFQUFjO0FBQ2hDLHVDQUFlTixTQUFmLEVBQTBCTywrQkFBMUI7QUFDQSxlQUFPLEtBQUtMLGFBQUwsQ0FBbUI7QUFDeEIsMkJBQWlCSSxZQURPO0FBRXhCLHdCQUFjWCx3QkFGVTtBQUd4Qix1QkFBYSxLQUFLRyxPQUFMLENBQWFLLFFBSEY7QUFJeEIsMkJBQWlCLEtBQUtMLE9BQUwsQ0FBYU07QUFKTixTQUFuQixDQUFQO0FBTUQ7OztvQ0FPY0ksTSxFQUFRO0FBQ3JCLFlBQUksQ0FBQyxLQUFLVixPQUFMLENBQWFLLFFBQWxCLEVBQTRCO0FBQzFCLGdCQUFNTSxNQUFNLDRCQUFOLENBQU47QUFDRDs7QUFFRCxZQUFJLENBQUMsS0FBS1gsT0FBTCxDQUFhTSxZQUFsQixFQUFnQztBQUM5QixnQkFBTUssTUFBTSxnQ0FBTixDQUFOO0FBQ0Q7O0FBRUQsWUFBTUMsTUFBUyxLQUFLWixPQUFMLENBQWFhLFFBQXRCLHdCQUFOO0FBQ0FmLHNCQUFZYyxHQUFaLHFCQUErQkUsS0FBS0MsU0FBTCxDQUFlTCxNQUFmLENBQS9COztBQUVBLGVBQU8scUJBQU07QUFDWEUsa0JBRFc7QUFFWEksa0JBQVEsTUFGRztBQUdYQyxtQkFBUztBQUNQLDRCQUFnQixtQ0FEVDtBQUVQQyxvQkFBUTtBQUZELFdBSEU7QUFPWFIsa0JBQVFBO0FBUEcsU0FBTixDQUFQO0FBU0Q7Ozs7OztBQUdILE1BQU1ELGtDQUFrQyxDQUN0QyxFQUFDVSxNQUFNLGNBQVAsRUFBdUJDLGFBQWEsQ0FBQyxVQUFELEVBQWEsUUFBYixDQUFwQyxFQURzQyxDQUF4Qzs7QUFJQSxNQUFNakIsdUNBQXVDLENBQzNDLEVBQUNnQixNQUFNLG1CQUFQLEVBQTRCQyxhQUFhLENBQUMsVUFBRCxFQUFhLFFBQWIsQ0FBekMsRUFEMkMsQ0FBN0M7O0FBSUFDLFNBQU9DLE9BQVAsR0FBaUJ2QixLQUFqQiIsImZpbGUiOiJlbnRpdGllcy9vYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgZGVidWcgZnJvbSAnZGVidWcnO1xuaW1wb3J0IHt0eXBlVmFsaWRhdGlvbn0gZnJvbSAnLi4vdXRpbHMvdmFsaWRhdG9yJztcblxuY29uc3QgQUNDRVNTX1RPS0VOX0dSQU5UX1RZUEUgPSAnYXV0aG9yaXphdGlvbl9jb2RlJztcbmNvbnN0IFJFRlJFU0hfVE9LRU5fR1JBTlRfVFlQRSA9ICdyZWZyZXNoX3Rva2VuJztcblxuY29uc3QgbG9nID0gZGVidWcoJ3N0YXJsaW5nOm9hdXRoLXNlcnZpY2UnKTtcblxuLyoqXG4gKiBTZXJ2aWNlIHRvIGludGVyYWN0IHdpdGggYSB0aGUgb2F1dGggZW5kcG9pbnRcbiAqL1xuY2xhc3MgT0F1dGgge1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgb2F1dGggc2VydmljZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVyc1xuICAgKi9cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4Y2hhbmdlcyB0aGUgYXV0aG9yaXphdGlvbiBjb2RlIGZvciBhbiBhY2Nlc3MgdG9rZW5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF1dGhvcml6YXRpb25Db2RlIC0gdGhlIGF1dGhvcml6YXRpb24gY29kZSwgYWNxdWlyZWQgZnJvbSB0aGUgdXNlciBhZ2VudCBhZnRlciB0aGVcbiAgICogdXNlciBhdXRoZW50aWNhdGVzIHdpdGggc3RhcmxpbmdcbiAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgaHR0cCByZXF1ZXN0IHByb21pc2VcbiAgICovXG4gIGdldEFjY2Vzc1Rva2VuIChhdXRob3JpemF0aW9uQ29kZSkge1xuICAgIHR5cGVWYWxpZGF0aW9uKGFyZ3VtZW50cywgYXV0aG9yaXphdGlvbkNvZGVQYXJhbWV0ZXJEZWZpbml0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5nZXRPQXV0aFRva2VuKHtcbiAgICAgICdjb2RlJzogYXV0aG9yaXphdGlvbkNvZGUsXG4gICAgICAnZ3JhbnRfdHlwZSc6IEFDQ0VTU19UT0tFTl9HUkFOVF9UWVBFLFxuICAgICAgJ2NsaWVudF9pZCc6IHRoaXMub3B0aW9ucy5jbGllbnRJZCxcbiAgICAgICdjbGllbnRfc2VjcmV0JzogdGhpcy5vcHRpb25zLmNsaWVudFNlY3JldCxcbiAgICAgICdyZWRpcmVjdF91cmknOiB0aGlzLm9wdGlvbnMucmVkaXJlY3RVcmlcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGNoYW5nZXMgdGhlIGF1dGhvcml6YXRpb24gY29kZSBmb3IgYW4gYWNjZXNzIHRva2VuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWZyZXNoVG9rZW4gLSB0aGUgb2F1dGggcmVmcmVzaCB0b2tlbiwgdXNlZCB3aGVuIHRoZSBhY2Nlc3MgdG9rZW5cbiAgICogZXhwaXJlcyB0byBjbGFpbSBhIG5ldyBhY2Nlc3MgdG9rZW4uXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIGh0dHAgcmVxdWVzdCBwcm9taXNlXG4gICAqL1xuICByZWZyZXNoQWNjZXNzVG9rZW4gKHJlZnJlc2hUb2tlbikge1xuICAgIHR5cGVWYWxpZGF0aW9uKGFyZ3VtZW50cywgcmVmcmVzaFRva2VuUGFyYW1ldGVyRGVmaW5pdGlvbik7XG4gICAgcmV0dXJuIHRoaXMuZ2V0T0F1dGhUb2tlbih7XG4gICAgICAncmVmcmVzaF90b2tlbic6IHJlZnJlc2hUb2tlbixcbiAgICAgICdncmFudF90eXBlJzogUkVGUkVTSF9UT0tFTl9HUkFOVF9UWVBFLFxuICAgICAgJ2NsaWVudF9pZCc6IHRoaXMub3B0aW9ucy5jbGllbnRJZCxcbiAgICAgICdjbGllbnRfc2VjcmV0JzogdGhpcy5vcHRpb25zLmNsaWVudFNlY3JldFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGFjY2VzcyB0b2tlbiBmcm9tIHRoZSBzdGFybGluZyBvYXV0aCBlbmRwb2ludFxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIC0gdGhlIHF1ZXJ5IHBhcmFtcyBwYXNzZWQgdG8gdGhlIG9hdXRoIGVuZHBvaW50IGFzIHBlciB0aGUgb2F1dGggc3BlY1xuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBodHRwIHJlcXVlc3QgcHJvbWlzZVxuICAgKi9cbiAgZ2V0T0F1dGhUb2tlbiAocGFyYW1zKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuY2xpZW50SWQpIHtcbiAgICAgIHRocm93IEVycm9yKCdjbGllbnRJZCBpcyBub3QgY29uZmlndXJlZCcpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5vcHRpb25zLmNsaWVudFNlY3JldCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ2NsaWVudFNlY3JldCBpcyBub3QgY29uZmlndXJlZCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMub3B0aW9ucy5vYXV0aFVybH0vb2F1dGgvYWNjZXNzLXRva2VuYDtcbiAgICBsb2coYFBPU1QgJHt1cmx9IHF1ZXJ5UGFyYW1zOiR7SlNPTi5zdHJpbmdpZnkocGFyYW1zKX1gKTtcblxuICAgIHJldHVybiBheGlvcyh7XG4gICAgICB1cmwsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgcmVmcmVzaFRva2VuUGFyYW1ldGVyRGVmaW5pdGlvbiA9IFtcbiAge25hbWU6ICdyZWZyZXNoVG9rZW4nLCB2YWxpZGF0aW9uczogWydyZXF1aXJlZCcsICdzdHJpbmcnXX1cbl07XG5cbmNvbnN0IGF1dGhvcml6YXRpb25Db2RlUGFyYW1ldGVyRGVmaW5pdGlvbiA9IFtcbiAge25hbWU6ICdhdXRob3JpemF0aW9uQ29kZScsIHZhbGlkYXRpb25zOiBbJ3JlcXVpcmVkJywgJ3N0cmluZyddfVxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBPQXV0aDtcbiJdfQ==
//# sourceMappingURL=oauth.js.map
