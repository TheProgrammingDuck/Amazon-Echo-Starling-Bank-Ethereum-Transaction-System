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
    global.validator = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var runRules = function runRules(pos, name, rules, value) {
    var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);

    if (rules[0] == 'optional') {
      if (value && valueType !== rules[1]) {
        return name + ' parameter in position ' + pos + ' is an optional ' + rules[1] + ' but was ' + valueType;
      }
    }
    if (rules[0] == 'required') {
      if (value && valueType !== rules[1]) {
        return name + ' parameter in position ' + pos + ' is a required ' + rules[1] + ' but was ' + valueType;
      } else if (!value) {
        return name + ' parameter in position ' + pos + ' is a required ' + rules[1] + ' but was ' + value;
      }
    }
  };

  var typeValidation = exports.typeValidation = function typeValidation(args, def) {
    var problems = [];
    for (var i = 0; i < def.length; i++) {
      var pos = i;
      var name = def[i].name;
      var rules = def[i].validations;
      var value = i <= args.length ? args[i] : undefined;
      var problem = runRules(pos, name, rules, value);
      if (problem) problems.push(problem);
    }

    if (problems.length) {
      throw problems;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3ZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJydW5SdWxlcyIsInBvcyIsIm5hbWUiLCJydWxlcyIsInZhbHVlIiwidmFsdWVUeXBlIiwidHlwZVZhbGlkYXRpb24iLCJhcmdzIiwiZGVmIiwicHJvYmxlbXMiLCJpIiwibGVuZ3RoIiwidmFsaWRhdGlvbnMiLCJ1bmRlZmluZWQiLCJwcm9ibGVtIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE1BQU1BLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBWUMsS0FBWixFQUFtQkMsS0FBbkIsRUFBNkI7QUFDNUMsUUFBTUMsbUJBQW1CRCxLQUFuQix5Q0FBbUJBLEtBQW5CLENBQU47O0FBRUEsUUFBSUQsTUFBTSxDQUFOLEtBQVksVUFBaEIsRUFBNEI7QUFDMUIsVUFBSUMsU0FBVUMsY0FBY0YsTUFBTSxDQUFOLENBQTVCLEVBQXVDO0FBQ3JDLGVBQVVELElBQVYsK0JBQXdDRCxHQUF4Qyx3QkFBOERFLE1BQU0sQ0FBTixDQUE5RCxpQkFBa0ZFLFNBQWxGO0FBQ0Q7QUFDRjtBQUNELFFBQUlGLE1BQU0sQ0FBTixLQUFZLFVBQWhCLEVBQTRCO0FBQzFCLFVBQUlDLFNBQVVDLGNBQWNGLE1BQU0sQ0FBTixDQUE1QixFQUF1QztBQUNyQyxlQUFVRCxJQUFWLCtCQUF3Q0QsR0FBeEMsdUJBQTZERSxNQUFNLENBQU4sQ0FBN0QsaUJBQWlGRSxTQUFqRjtBQUNELE9BRkQsTUFFTyxJQUFJLENBQUNELEtBQUwsRUFBWTtBQUNqQixlQUFVRixJQUFWLCtCQUF3Q0QsR0FBeEMsdUJBQTZERSxNQUFNLENBQU4sQ0FBN0QsaUJBQWlGQyxLQUFqRjtBQUNEO0FBQ0Y7QUFDRixHQWZEOztBQWlCTyxNQUFPRSwwQ0FBaUIsU0FBakJBLGNBQWlCLENBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQzVDLFFBQUlDLFdBQVcsRUFBZjtBQUNBLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixJQUFJRyxNQUF4QixFQUFnQ0QsR0FBaEMsRUFBcUM7QUFDbkMsVUFBTVQsTUFBTVMsQ0FBWjtBQUNBLFVBQU1SLE9BQU9NLElBQUlFLENBQUosRUFBT1IsSUFBcEI7QUFDQSxVQUFNQyxRQUFRSyxJQUFJRSxDQUFKLEVBQU9FLFdBQXJCO0FBQ0EsVUFBTVIsUUFBUU0sS0FBS0gsS0FBS0ksTUFBVixHQUFtQkosS0FBS0csQ0FBTCxDQUFuQixHQUE2QkcsU0FBM0M7QUFDQSxVQUFNQyxVQUFVZCxTQUFTQyxHQUFULEVBQWNDLElBQWQsRUFBb0JDLEtBQXBCLEVBQTJCQyxLQUEzQixDQUFoQjtBQUNBLFVBQUlVLE9BQUosRUFBYUwsU0FBU00sSUFBVCxDQUFjRCxPQUFkO0FBQ2Q7O0FBRUQsUUFBSUwsU0FBU0UsTUFBYixFQUFxQjtBQUNuQixZQUFNRixRQUFOO0FBQ0Q7QUFFRixHQWZNIiwiZmlsZSI6InV0aWxzL3ZhbGlkYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgcnVuUnVsZXMgPSAocG9zLCBuYW1lLCBydWxlcywgdmFsdWUpID0+IHtcbiAgY29uc3QgdmFsdWVUeXBlID0gdHlwZW9mIHZhbHVlO1xuXG4gIGlmIChydWxlc1swXSA9PSAnb3B0aW9uYWwnKSB7XG4gICAgaWYgKHZhbHVlICYmICh2YWx1ZVR5cGUgIT09IHJ1bGVzWzFdKSkge1xuICAgICAgcmV0dXJuIGAke25hbWV9IHBhcmFtZXRlciBpbiBwb3NpdGlvbiAke3Bvc30gaXMgYW4gb3B0aW9uYWwgJHtydWxlc1sxXX0gYnV0IHdhcyAke3ZhbHVlVHlwZX1gXG4gICAgfVxuICB9XG4gIGlmIChydWxlc1swXSA9PSAncmVxdWlyZWQnKSB7XG4gICAgaWYgKHZhbHVlICYmICh2YWx1ZVR5cGUgIT09IHJ1bGVzWzFdKSkge1xuICAgICAgcmV0dXJuIGAke25hbWV9IHBhcmFtZXRlciBpbiBwb3NpdGlvbiAke3Bvc30gaXMgYSByZXF1aXJlZCAke3J1bGVzWzFdfSBidXQgd2FzICR7dmFsdWVUeXBlfWBcbiAgICB9IGVsc2UgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIGAke25hbWV9IHBhcmFtZXRlciBpbiBwb3NpdGlvbiAke3Bvc30gaXMgYSByZXF1aXJlZCAke3J1bGVzWzFdfSBidXQgd2FzICR7dmFsdWV9YFxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0ICB0eXBlVmFsaWRhdGlvbiA9IChhcmdzLCBkZWYpID0+IHtcbiAgbGV0IHByb2JsZW1zID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGVmLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcG9zID0gaTtcbiAgICBjb25zdCBuYW1lID0gZGVmW2ldLm5hbWU7XG4gICAgY29uc3QgcnVsZXMgPSBkZWZbaV0udmFsaWRhdGlvbnM7XG4gICAgY29uc3QgdmFsdWUgPSBpIDw9IGFyZ3MubGVuZ3RoID8gYXJnc1tpXSA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBwcm9ibGVtID0gcnVuUnVsZXMocG9zLCBuYW1lLCBydWxlcywgdmFsdWUpO1xuICAgIGlmIChwcm9ibGVtKSBwcm9ibGVtcy5wdXNoKHByb2JsZW0pO1xuICB9XG5cbiAgaWYgKHByb2JsZW1zLmxlbmd0aCkge1xuICAgIHRocm93IHByb2JsZW1zO1xuICB9XG5cbn07XG5cbiJdfQ==
//# sourceMappingURL=validator.js.map
