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
    global.whoAmI = mod.exports;
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

  var log = (0, _debug2.default)('starling:who-am-i-service');

  /**
   * Service to interact with the Who Am I endpoint
   */

  var WhoAmI = function () {

    /**
     * Creates an instance of the who am I client
     * @param {Object} options - configuration parameters
     */
    function WhoAmI(options) {
      _classCallCheck(this, WhoAmI);

      this.options = options;
    }

    /**
     * Retrieves the customer UUID and permissions corresponding to the access token passed
     * @param {string} accessToken - the oauth bearer token.
     * @return {Promise} - the http request promise
     */


    _createClass(WhoAmI, [{
      key: 'getMe',
      value: function getMe(accessToken) {
        (0, _validator.typeValidation)(arguments, getMeParameterDefinition);
        var url = this.options.apiUrl + '/api/v1/me';
        log('GET ' + url);

        return (0, _axios2.default)({
          method: 'GET',
          url: url,
          headers: (0, _http.defaultHeaders)(accessToken)
        });
      }
    }]);

    return WhoAmI;
  }();

  var getMeParameterDefinition = [{ name: 'accessToken', validations: ['required', 'string'] }];

  module.exports = WhoAmI;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL3dob0FtSS5qcyJdLCJuYW1lcyI6WyJsb2ciLCJXaG9BbUkiLCJvcHRpb25zIiwiYWNjZXNzVG9rZW4iLCJhcmd1bWVudHMiLCJnZXRNZVBhcmFtZXRlckRlZmluaXRpb24iLCJ1cmwiLCJhcGlVcmwiLCJtZXRob2QiLCJoZWFkZXJzIiwibmFtZSIsInZhbGlkYXRpb25zIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLE1BQU1BLE1BQU0scUJBQU0sMkJBQU4sQ0FBWjs7QUFFQTs7OztNQUdNQyxNOztBQUVKOzs7O0FBSUEsb0JBQWFDLE9BQWIsRUFBc0I7QUFBQTs7QUFDcEIsV0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs0QkFLT0MsVyxFQUFhO0FBQ2xCLHVDQUFlQyxTQUFmLEVBQTBCQyx3QkFBMUI7QUFDQSxZQUFNQyxNQUFTLEtBQUtKLE9BQUwsQ0FBYUssTUFBdEIsZUFBTjtBQUNBUCxxQkFBV00sR0FBWDs7QUFFQSxlQUFPLHFCQUFNO0FBQ1hFLGtCQUFRLEtBREc7QUFFWEYsa0JBRlc7QUFHWEcsbUJBQVMsMEJBQWVOLFdBQWY7QUFIRSxTQUFOLENBQVA7QUFLRDs7Ozs7O0FBR0gsTUFBTUUsMkJBQTJCLENBQy9CLEVBQUNLLE1BQU0sYUFBUCxFQUFzQkMsYUFBYSxDQUFDLFVBQUQsRUFBYSxRQUFiLENBQW5DLEVBRCtCLENBQWpDOztBQUlBQyxTQUFPQyxPQUFQLEdBQWlCWixNQUFqQiIsImZpbGUiOiJlbnRpdGllcy93aG9BbUkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGRlYnVnIGZyb20gJ2RlYnVnJztcbmltcG9ydCB7ZGVmYXVsdEhlYWRlcnN9IGZyb20gJy4uL3V0aWxzL2h0dHAnO1xuaW1wb3J0IHt0eXBlVmFsaWRhdGlvbn0gZnJvbSAnLi4vdXRpbHMvdmFsaWRhdG9yJztcblxuY29uc3QgbG9nID0gZGVidWcoJ3N0YXJsaW5nOndoby1hbS1pLXNlcnZpY2UnKTtcblxuLyoqXG4gKiBTZXJ2aWNlIHRvIGludGVyYWN0IHdpdGggdGhlIFdobyBBbSBJIGVuZHBvaW50XG4gKi9cbmNsYXNzIFdob0FtSSB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIHdobyBhbSBJIGNsaWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVyc1xuICAgKi9cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgY3VzdG9tZXIgVVVJRCBhbmQgcGVybWlzc2lvbnMgY29ycmVzcG9uZGluZyB0byB0aGUgYWNjZXNzIHRva2VuIHBhc3NlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWNjZXNzVG9rZW4gLSB0aGUgb2F1dGggYmVhcmVyIHRva2VuLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBodHRwIHJlcXVlc3QgcHJvbWlzZVxuICAgKi9cbiAgZ2V0TWUgKGFjY2Vzc1Rva2VuKSB7XG4gICAgdHlwZVZhbGlkYXRpb24oYXJndW1lbnRzLCBnZXRNZVBhcmFtZXRlckRlZmluaXRpb24pO1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMub3B0aW9ucy5hcGlVcmx9L2FwaS92MS9tZWA7XG4gICAgbG9nKGBHRVQgJHt1cmx9YCk7XG5cbiAgICByZXR1cm4gYXhpb3Moe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybCxcbiAgICAgIGhlYWRlcnM6IGRlZmF1bHRIZWFkZXJzKGFjY2Vzc1Rva2VuKVxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IGdldE1lUGFyYW1ldGVyRGVmaW5pdGlvbiA9IFtcbiAge25hbWU6ICdhY2Nlc3NUb2tlbicsIHZhbGlkYXRpb25zOiBbJ3JlcXVpcmVkJywgJ3N0cmluZyddfVxuICBdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdob0FtSTtcbiJdfQ==
//# sourceMappingURL=whoAmI.js.map
