(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.http = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var defaultHeaders = exports.defaultHeaders = function defaultHeaders(accessToken) {
    return {
      Accept: 'application/json',
      Authorization: 'Bearer ' + accessToken
    };
  };

  var postHeaders = exports.postHeaders = function postHeaders(accessToken) {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken
    };
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2h0dHAuanMiXSwibmFtZXMiOlsiZGVmYXVsdEhlYWRlcnMiLCJhY2Nlc3NUb2tlbiIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJwb3N0SGVhZGVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsMENBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxXQUFELEVBQWlCO0FBQzdDLFdBQU87QUFDTEMsY0FBUSxrQkFESDtBQUVMQyxpQ0FBeUJGO0FBRnBCLEtBQVA7QUFJRCxHQUxNOztBQU9BLE1BQU1HLG9DQUFjLFNBQWRBLFdBQWMsQ0FBQ0gsV0FBRCxFQUFpQjtBQUMxQyxXQUFPO0FBQ0xDLGNBQVEsa0JBREg7QUFFTCxzQkFBZ0Isa0JBRlg7QUFHTEMsaUNBQXlCRjtBQUhwQixLQUFQO0FBS0QsR0FOTSIsImZpbGUiOiJ1dGlscy9odHRwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGRlZmF1bHRIZWFkZXJzID0gKGFjY2Vzc1Rva2VuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWBcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBwb3N0SGVhZGVycyA9IChhY2Nlc3NUb2tlbikgPT4ge1xuICByZXR1cm4ge1xuICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWBcbiAgfTtcbn07Il19
//# sourceMappingURL=http.js.map
