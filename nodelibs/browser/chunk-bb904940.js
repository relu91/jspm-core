var exports$1 = {},
    _dewExec$1 = false;
function dew$1() {
  if (_dewExec$1) return exports$1;
  _dewExec$1 = true;

  if (typeof Object.create === "function") {
    // implementation from standard node.js 'util' module
    exports$1 = function inherits(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      }
    };
  } else {
    // old school shim for old browsers
    exports$1 = function inherits(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;

        var TempCtor = function () {};

        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      }
    };
  }

  return exports$1;
}

var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * Module exports.
   */
  exports = deprecate;
  /**
   * Mark that a method should not be used.
   * Returns a modified function which warns once by default.
   *
   * If `localStorage.noDeprecation = true` is set, then it is a no-op.
   *
   * If `localStorage.throwDeprecation = true` is set, then deprecated functions
   * will throw an Error when invoked.
   *
   * If `localStorage.traceDeprecation = true` is set, then deprecated functions
   * will invoke `console.trace()` instead of `console.error()`.
   *
   * @param {Function} fn - the function to deprecate
   * @param {String} msg - the string to print to the console when `fn` is invoked
   * @returns {Function} a new "deprecated" version of `fn`
   * @api public
   */

  function deprecate(fn, msg) {
    if (config("noDeprecation")) {
      return fn;
    }

    var warned = false;

    function deprecated() {
      if (!warned) {
        if (config("throwDeprecation")) {
          throw new Error(msg);
        } else if (config("traceDeprecation")) {
          console.trace(msg);
        } else {
          console.warn(msg);
        }

        warned = true;
      }

      return fn.apply(this || _global, arguments);
    }

    return deprecated;
  }
  /**
   * Checks `localStorage` for boolean values for the given `name`.
   *
   * @param {String} name
   * @returns {Boolean}
   * @api private
   */


  function config(name) {
    // accessing global.localStorage can trigger a DOMException in sandboxed iframes
    try {
      if (!_global.localStorage) return false;
    } catch (_) {
      return false;
    }

    var val = _global.localStorage[name];
    if (null == val) return false;
    return String(val).toLowerCase() === "true";
  }

  return exports;
}

export { dew$1 as a, dew as d };