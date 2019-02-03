(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
}(function () { 'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
	}

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var isMobile = createCommonjsModule(function (module) {
	(function(global) {
	  var apple_phone = /iPhone/i,
	    apple_ipod = /iPod/i,
	    apple_tablet = /iPad/i,
	    android_phone = /\bAndroid(?:.+)Mobile\b/i, // Match 'Android' AND 'Mobile'
	    android_tablet = /Android/i,
	    amazon_phone = /\bAndroid(?:.+)SD4930UR\b/i,
	    amazon_tablet = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,
	    windows_phone = /Windows Phone/i,
	    windows_tablet = /\bWindows(?:.+)ARM\b/i, // Match 'Windows' AND 'ARM'
	    other_blackberry = /BlackBerry/i,
	    other_blackberry_10 = /BB10/i,
	    other_opera = /Opera Mini/i,
	    other_chrome = /\b(CriOS|Chrome)(?:.+)Mobile/i,
	    other_firefox = /\Mobile(?:.+)Firefox\b/i; // Match 'Mobile' AND 'Firefox'

	  function match(regex, userAgent) {
	    return regex.test(userAgent);
	  }

	  function isMobile(userAgent) {
	    var ua =
	      userAgent ||
	      (typeof navigator !== 'undefined' ? navigator.userAgent : '');

	    // Facebook mobile app's integrated browser adds a bunch of strings that
	    // match everything. Strip it out if it exists.
	    var tmp = ua.split('[FBAN');
	    if (typeof tmp[1] !== 'undefined') {
	      ua = tmp[0];
	    }

	    // Twitter mobile app's integrated browser on iPad adds a "Twitter for
	    // iPhone" string. Same probably happens on other tablet platforms.
	    // This will confuse detection so strip it out if it exists.
	    tmp = ua.split('Twitter');
	    if (typeof tmp[1] !== 'undefined') {
	      ua = tmp[0];
	    }

	    var result = {
	      apple: {
	        phone: match(apple_phone, ua) && !match(windows_phone, ua),
	        ipod: match(apple_ipod, ua),
	        tablet:
	          !match(apple_phone, ua) &&
	          match(apple_tablet, ua) &&
	          !match(windows_phone, ua),
	        device:
	          (match(apple_phone, ua) ||
	            match(apple_ipod, ua) ||
	            match(apple_tablet, ua)) &&
	          !match(windows_phone, ua)
	      },
	      amazon: {
	        phone: match(amazon_phone, ua),
	        tablet: !match(amazon_phone, ua) && match(amazon_tablet, ua),
	        device: match(amazon_phone, ua) || match(amazon_tablet, ua)
	      },
	      android: {
	        phone:
	          (!match(windows_phone, ua) && match(amazon_phone, ua)) ||
	          (!match(windows_phone, ua) && match(android_phone, ua)),
	        tablet:
	          !match(windows_phone, ua) &&
	          !match(amazon_phone, ua) &&
	          !match(android_phone, ua) &&
	          (match(amazon_tablet, ua) || match(android_tablet, ua)),
	        device:
	          (!match(windows_phone, ua) &&
	            (match(amazon_phone, ua) ||
	              match(amazon_tablet, ua) ||
	              match(android_phone, ua) ||
	              match(android_tablet, ua))) ||
	          match(/\bokhttp\b/i, ua)
	      },
	      windows: {
	        phone: match(windows_phone, ua),
	        tablet: match(windows_tablet, ua),
	        device: match(windows_phone, ua) || match(windows_tablet, ua)
	      },
	      other: {
	        blackberry: match(other_blackberry, ua),
	        blackberry10: match(other_blackberry_10, ua),
	        opera: match(other_opera, ua),
	        firefox: match(other_firefox, ua),
	        chrome: match(other_chrome, ua),
	        device:
	          match(other_blackberry, ua) ||
	          match(other_blackberry_10, ua) ||
	          match(other_opera, ua) ||
	          match(other_firefox, ua) ||
	          match(other_chrome, ua)
	      }
	    };
	    (result.any =
	      result.apple.device ||
	      result.android.device ||
	      result.windows.device ||
	      result.other.device),
	      // excludes 'other' devices and ipods, targeting touchscreen phones
	      (result.phone =
	        result.apple.phone || result.android.phone || result.windows.phone),
	      (result.tablet =
	        result.apple.tablet || result.android.tablet || result.windows.tablet);

	    return result;
	  }

	  if (
	    module.exports &&
	    typeof window === 'undefined'
	  ) {
	    // Node.js
	    module.exports = isMobile;
	  } else if (
	    module.exports &&
	    typeof window !== 'undefined'
	  ) {
	    // Browserify
	    module.exports = isMobile();
	  } else {
	    global.isMobile = isMobile();
	  }
	})(commonjsGlobal);
	});

	var dist = createCommonjsModule(function (module, exports) {
	(function(f){{module.exports=f();}})(function(){return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof commonjsRequire=="function"&&commonjsRequire;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r);}return n[o].exports}var i=typeof commonjsRequire=="function"&&commonjsRequire;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @class EventDispatcher
	 */

	var EventDispatcher = function () {
	  /**
	   * @constructs EventDispatcher
	   */

	  function EventDispatcher() {
	    _classCallCheck(this, EventDispatcher);

	    this.trigger = this.dispatchEvent;
	    this.on = this.addEventListener;
	    this.off = this.removeEventListener;

	    this._listeners = {};
	  }

	  /**
	   * @method dispatchEvent
	   * @public
	   * @param {string} type
	   * @param {any[]} args
	   * @returns {this}
	   */

	  _createClass(EventDispatcher, [{
	    key: 'dispatchEvent',
	    value: function dispatchEvent(type) {
	      if (!this._listeners[type]) {
	        return;
	      }

	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = this._listeners[type][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var listener = _step.value;

	          listener.apply(undefined, args);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      return this;
	    }

	    /**
	     * Alias for dispatchEvent
	     *
	     * @method trigger
	     * @public
	     */

	  }, {
	    key: 'addEventListener',

	    /**
	     * @method addEventListener
	     * @public
	     * @param {string} type
	     * @param {(any) => any} cb
	     * @returns {this}
	     */
	    value: function addEventListener(type, cb) {
	      if (!this._listeners[type]) {
	        this._listeners[type] = [];
	      }

	      if (this._listeners[type].indexOf(cb) !== -1) {
	        throw new Error('You can\'t add the same listener to the same event more than once');
	      }

	      this._listeners[type].push(cb);

	      return this;
	    }

	    /**
	     * Alias for addEventListener
	     *
	     * @method on
	     * @public
	     */

	  }, {
	    key: 'removeEventListener',

	    /**
	     * @method removeEventListener
	     * @public
	     * @param {string} type
	     * @param {(any) => any} cb
	     * @returns {this}
	     */
	    value: function removeEventListener(type, cb) {
	      if (!this._listeners[type]) {
	        return;
	      }

	      var i = this._listeners[type].indexOf(cb);

	      if (i !== -1) {
	        this._listeners[type].splice(i, 1);
	      }

	      return this;
	    }

	    /**
	     * Alias for removeEventListener
	     *
	     * @method off
	     * @public
	     */

	  }, {
	    key: 'dispose',

	    /**
	     * @method dispose
	     * @public
	     */
	    value: function dispose() {
	      this._listeners = null;
	    }
	  }]);

	  return EventDispatcher;
	}();

	exports.default = EventDispatcher;

	},{}],2:[function(require,module,exports){

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _eventDispatcher = require('@vaalentin/event-dispatcher');

	var _eventDispatcher2 = _interopRequireDefault(_eventDispatcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @class GameLoop
	 */

	var GameLoop = function (_EventDispatcher) {
	  _inherits(GameLoop, _EventDispatcher);

	  /**
	   * @constructs GameLoop
	   * @param {float} [fps = 60]
	   * @param {float} [speed = 1]
	   */

	  function GameLoop() {
	    var fps = arguments.length <= 0 || arguments[0] === undefined ? 60 : arguments[0];
	    var speed = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

	    _classCallCheck(this, GameLoop);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GameLoop).call(this));

	    _this._timeStep = 1000 / fps * speed;
	    _this._prevTime = null;
	    _this._lagTime = 0;

	    _this._frame = _this.frame.bind(_this);
	    _this._frameId = null;
	    return _this;
	  }

	  /**
	   * @method getTime
	   * @private
	   * @returns {float}
	   */


	  _createClass(GameLoop, [{
	    key: 'getTime',
	    value: function getTime() {
	      return performance && performance.now ? performance.now() : Date.now();
	    }

	    /**
	     * @method frame
	     * @private
	     */

	  }, {
	    key: 'frame',
	    value: function frame() {
	      var curTime = this.getTime();
	      var dt = Math.min(1000, curTime - this._prevTime);
	      this._prevTime = curTime;
	      this._lagTime += dt;

	      while (this._lagTime > this._timeStep) {
	        this._lagTime -= this._timeStep;
	        this.dispatchEvent('update', this._timeStep);
	      }

	      this.dispatchEvent('render', dt);

	      this._frameId = requestAnimationFrame(this._frame);
	    }

	    /**
	     * @method start
	     * @public
	     */

	  }, {
	    key: 'start',
	    value: function start() {
	      if (this._prevTime === null) {
	        this.dispatchEvent('init');
	      }

	      this.dispatchEvent('start');
	      this._prevTime = this.getTime();

	      this.frame();
	    }

	    /**
	     * @method stop
	     * @public
	     */

	  }, {
	    key: 'stop',
	    value: function stop() {
	      this.dispatchEvent('stop');
	      cancelAnimationFrame(this._frameId);
	      this._frameId = null;
	    }

	    /**
	     * @method dispose
	     * @public
	     */

	  }, {
	    key: 'dispose',
	    value: function dispose() {
	      this.stop();
	      _get(Object.getPrototypeOf(GameLoop.prototype), 'dispose', this).call(this);
	    }
	  }]);

	  return GameLoop;
	}(_eventDispatcher2.default);

	exports.default = GameLoop;

	},{"@vaalentin/event-dispatcher":1}]},{},[2])(2)
	});
	});

	var GameLoop = unwrapExports(dist);

	var eventemitter3 = createCommonjsModule(function (module) {

	var has = Object.prototype.hasOwnProperty
	  , prefix = '~';

	/**
	 * Constructor to create a storage for our `EE` objects.
	 * An `Events` instance is a plain object whose properties are event names.
	 *
	 * @constructor
	 * @private
	 */
	function Events() {}

	//
	// We try to not inherit from `Object.prototype`. In some engines creating an
	// instance in this way is faster than calling `Object.create(null)` directly.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// character to make sure that the built-in object properties are not
	// overridden or used as an attack vector.
	//
	if (Object.create) {
	  Events.prototype = Object.create(null);

	  //
	  // This hack is needed because the `__proto__` property is still inherited in
	  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
	  //
	  if (!new Events().__proto__) prefix = false;
	}

	/**
	 * Representation of a single event listener.
	 *
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
	 * @constructor
	 * @private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Add a listener for a given event.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} once Specify if the listener is a one-time listener.
	 * @returns {EventEmitter}
	 * @private
	 */
	function addListener(emitter, event, fn, context, once) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('The listener must be a function');
	  }

	  var listener = new EE(fn, context || emitter, once)
	    , evt = prefix ? prefix + event : event;

	  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
	  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
	  else emitter._events[evt] = [emitter._events[evt], listener];

	  return emitter;
	}

	/**
	 * Clear event by name.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} evt The Event name.
	 * @private
	 */
	function clearEvent(emitter, evt) {
	  if (--emitter._eventsCount === 0) emitter._events = new Events();
	  else delete emitter._events[evt];
	}

	/**
	 * Minimal `EventEmitter` interface that is molded against the Node.js
	 * `EventEmitter` interface.
	 *
	 * @constructor
	 * @public
	 */
	function EventEmitter() {
	  this._events = new Events();
	  this._eventsCount = 0;
	}

	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var names = []
	    , events
	    , name;

	  if (this._eventsCount === 0) return names;

	  for (name in (events = this._events)) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }

	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }

	  return names;
	};

	/**
	 * Return the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Array} The registered listeners.
	 * @public
	 */
	EventEmitter.prototype.listeners = function listeners(event) {
	  var evt = prefix ? prefix + event : event
	    , handlers = this._events[evt];

	  if (!handlers) return [];
	  if (handlers.fn) return [handlers.fn];

	  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
	    ee[i] = handlers[i].fn;
	  }

	  return ee;
	};

	/**
	 * Return the number of listeners listening to a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Number} The number of listeners.
	 * @public
	 */
	EventEmitter.prototype.listenerCount = function listenerCount(event) {
	  var evt = prefix ? prefix + event : event
	    , listeners = this._events[evt];

	  if (!listeners) return 0;
	  if (listeners.fn) return 1;
	  return listeners.length;
	};

	/**
	 * Calls each of the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Boolean} `true` if the event had listeners, else `false`.
	 * @public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return false;

	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;

	  if (listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Add a listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  return addListener(this, event, fn, context, false);
	};

	/**
	 * Add a one-time listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  return addListener(this, event, fn, context, true);
	};

	/**
	 * Remove the listeners of a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn Only remove the listeners that match this function.
	 * @param {*} context Only remove the listeners that have this context.
	 * @param {Boolean} once Only remove one-time listeners.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return this;
	  if (!fn) {
	    clearEvent(this, evt);
	    return this;
	  }

	  var listeners = this._events[evt];

	  if (listeners.fn) {
	    if (
	      listeners.fn === fn &&
	      (!once || listeners.once) &&
	      (!context || listeners.context === context)
	    ) {
	      clearEvent(this, evt);
	    }
	  } else {
	    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
	      if (
	        listeners[i].fn !== fn ||
	        (once && !listeners[i].once) ||
	        (context && listeners[i].context !== context)
	      ) {
	        events.push(listeners[i]);
	      }
	    }

	    //
	    // Reset the array, or remove it completely if we have no more listeners.
	    //
	    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
	    else clearEvent(this, evt);
	  }

	  return this;
	};

	/**
	 * Remove all listeners, or those of the specified event.
	 *
	 * @param {(String|Symbol)} [event] The event name.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  var evt;

	  if (event) {
	    evt = prefix ? prefix + event : event;
	    if (this._events[evt]) clearEvent(this, evt);
	  } else {
	    this._events = new Events();
	    this._eventsCount = 0;
	  }

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Allow `EventEmitter` to be imported as module namespace.
	//
	EventEmitter.EventEmitter = EventEmitter;

	//
	// Expose the module.
	//
	{
	  module.exports = EventEmitter;
	}
	});

	class Loop {
	    constructor(frames) {
	        this.loop = new GameLoop(frames);
	        this.events = new eventemitter3();
	        this.init();
	    }
	    run() {
	        this.loop.start();
	    }
	    init() {
	        this.loop.on("init", () => this.events.emit("init"));
	        this.loop.on("update", (dt) => this.events.emit("update", { dt }));
	        this.loop.on("render", (dt) => this.events.emit("render", { dt }));
	    }
	}
	//# sourceMappingURL=loop.js.map

	class Field {
	    constructor(props, context) {
	        this.props = props;
	        this.context = context;
	    }
	    update() { }
	    render({ ctx }) {
	        const { field, cell } = this.context;
	        const { offset = { x: 0, y: 0 } } = this.props;
	        const cellSize = this.props.cellSize || cell.size;
	        const fieldSize = this.props.fieldSize || field.size;
	        ctx.beginPath();
	        ctx.strokeStyle = field.color;
	        for (let i = 0; i <= fieldSize.height; i++) {
	            ctx.moveTo(offset.x, i * cellSize.height + offset.y);
	            ctx.lineTo(offset.x + fieldSize.width * cellSize.width, i * cellSize.height + offset.y);
	        }
	        for (let i = 0; i <= fieldSize.width; i++) {
	            ctx.moveTo(offset.x + i * cellSize.width, offset.y);
	            ctx.lineTo(offset.x + i * cellSize.width, fieldSize.height * cellSize.height + offset.y);
	        }
	        ctx.stroke();
	    }
	}
	//# sourceMappingURL=field.js.map

	class Cell {
	    constructor(props, context) {
	        this.props = props;
	        this.context = context;
	    }
	    update() { }
	    render({ ctx }) {
	        const { cell } = this.context;
	        const { position, offset = { x: 0, y: 0 } } = this.props;
	        const size = this.props.size || cell.size;
	        ctx.beginPath();
	        ctx.fillStyle = cell.color;
	        ctx.rect(offset.x + position.x * size.width + 1, offset.y + position.y * size.height + 1, size.width - 2, size.height - 2);
	        ctx.fill();
	    }
	}
	//# sourceMappingURL=cell.js.map

	class Stats {
	    constructor(props, context) {
	        this.props = props;
	        this.context = context;
	    }
	    update(params, props) {
	        this.props = props;
	    }
	    render({ ctx }) {
	        const { field, cell } = this.context;
	        const offset = {
	            x: isMobile.any ? 100 : field.size.width * cell.size.width + 20,
	            y: isMobile.any ? field.size.height * cell.size.height + 40 : 25
	        };
	        ctx.font = "20px Verdana";
	        ctx.fillText(`Points: ${this.props.points}`, offset.x, offset.y);
	        ctx.fillText(`Level: ${this.props.level}`, offset.x, offset.y + 25);
	        if (!isMobile.any) {
	            ctx.fillText(`Level will change every 10 figures`, field.size.width * cell.size.width + 20, 75);
	        }
	    }
	}
	//# sourceMappingURL=stats.js.map

	class GameOver {
	    constructor(props, context) {
	        this.props = props;
	        this.context = context;
	    }
	    update() { }
	    render({ ctx }) {
	        const { canvas } = this.context;
	        ctx.font = "50px Arial";
	        ctx.textAlign = "center";
	        ctx.fillText("Game Over", canvas.size.width / 2, canvas.size.height / 2);
	        ctx.font = "30px Arial";
	        ctx.fillText(`Your points: ${this.props.points}`, canvas.size.width / 2, canvas.size.height / 2 + 50);
	    }
	}
	//# sourceMappingURL=game-over.js.map

	class NextFigure {
	    constructor(props, context) {
	        this.props = props;
	        this.context = context;
	        this.offset = {
	            x: isMobile.any
	                ? 20
	                : this.context.field.size.width * this.context.cell.size.width + 20,
	            y: isMobile.any
	                ? this.context.field.size.height * this.context.cell.size.height + 20
	                : 100
	        };
	        this.field = new Field({
	            offset: this.offset,
	            fieldSize: {
	                width: 5,
	                height: 5
	            },
	            cellSize: {
	                width: 10,
	                height: 10
	            }
	        }, this.context);
	    }
	    update(params, props) {
	        this.props = props;
	    }
	    render(params) {
	        this.field.render(params);
	        this.renderCells(params);
	    }
	    renderCells(params) {
	        const figure = this.props.figure;
	        figure.forEach((row, y) => row.forEach((cell, x) => {
	            if (!cell)
	                return;
	            const component = new Cell({
	                offset: this.offset,
	                position: { x, y },
	                size: {
	                    width: 10,
	                    height: 10
	                }
	            }, this.context);
	            component.render(params);
	        }));
	    }
	}
	//# sourceMappingURL=next-figure.js.map

	class FieldModel {
	    constructor(context) {
	        this.context = context;
	        const { field: { size } } = this.context;
	        this.field = Array.from({ length: size.height }, () => Array.from({ length: size.width }, () => null));
	    }
	    applyToField({ points, value }) {
	        points.forEach(point => {
	            const row = this.field[point.y];
	            if (row) {
	                row[point.x] = value;
	            }
	        });
	    }
	    removeMatches() {
	        const { width, height } = this.context.field.size;
	        let matches = 0;
	        for (let i = height - 1; i >= 0; i--) {
	            for (let j = 0; j < width; j++) {
	                if (!this.field[i][j])
	                    break;
	                if (j === width - 1) {
	                    this.removeRow(i);
	                    matches++;
	                    i++;
	                }
	            }
	        }
	        return matches;
	    }
	    getField() {
	        return this.field;
	    }
	    removeRow(yPosition) {
	        const { size } = this.context.field;
	        for (let i = yPosition; i >= 0; i--) {
	            for (let j = 0; j < size.width; j++) {
	                const prev = this.field[i - 1];
	                this.field[i][j] = prev ? prev[j] : null;
	            }
	        }
	    }
	}
	//# sourceMappingURL=field-model.js.map

	class FigureModel {
	    constructor(context) {
	        this.context = context;
	        this.figures = [
	            [[0, 0, 0, 0], [0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]],
	            [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]],
	            [[1, 1], [1, 1]],
	            [
	                [0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0],
	                [0, 1, 1, 1, 1, 0],
	                [0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 0, 0, 0]
	            ],
	            [[0, 0, 0, 0, 0], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]],
	            [[1, 1, 0], [0, 1, 1]],
	            [[0, 1, 1], [1, 1, 0]],
	            [[1]]
	        ];
	        this.figure = this.getRandomFigure();
	        this.next = this.getRandomFigure();
	    }
	    setNext(figure) {
	        this.figure = figure;
	        this.next = this.getRandomFigure();
	    }
	    update(figure) {
	        this.figure = figure;
	    }
	    getNext() {
	        return this.next;
	    }
	    getRotate() {
	        const flipMatrix = (matrix) => matrix[0].map((column, idx) => matrix.map(row => row[idx]));
	        const rotateMatrix = (matrix) => flipMatrix(JSON.parse(JSON.stringify(matrix)).reverse());
	        return Object.assign({}, this.figure, { field: rotateMatrix(this.figure.field) });
	    }
	    getMove(delta) {
	        return Object.assign({}, this.figure, { position: {
	                y: this.figure.position.y + delta.y,
	                x: this.figure.position.x + delta.x
	            } });
	    }
	    getPoints(figure = this.figure) {
	        return figure.field.reduce((acc, curr, rowIdx) => {
	            curr.forEach((pattern, cellIdx) => {
	                if (pattern) {
	                    acc.push({
	                        x: figure.position.x + cellIdx,
	                        y: figure.position.y + rowIdx
	                    });
	                }
	            });
	            return acc;
	        }, []);
	    }
	    getRandomFigure() {
	        const field = this.figures[~~(Math.random() * this.figures.length)];
	        return {
	            position: {
	                x: ~~(this.context.field.size.width / 2),
	                y: -field.length
	            },
	            field
	        };
	    }
	}

	class PointsModel {
	    constructor() {
	        this.points = 0;
	    }
	    add(params) {
	        if (params.type === "match") {
	            this.points += params.count * 10;
	        }
	        else {
	            this.points += 1;
	        }
	    }
	    getPoints() {
	        return this.points;
	    }
	}
	//# sourceMappingURL=points-model.js.map

	class LevelModel {
	    constructor() {
	        this.level = 1;
	        this.figures = 0;
	    }
	    incFigures() {
	        this.figures++;
	        this.level = Math.ceil(this.figures / 10);
	    }
	    getLevel() {
	        return this.level;
	    }
	}
	//# sourceMappingURL=level-model.js.map

	class GameModel {
	    constructor(context) {
	        this.context = context;
	        this.points = new PointsModel();
	        this.field = new FieldModel(this.context);
	        this.figure = new FigureModel(this.context);
	        this.level = new LevelModel();
	        this.gameOver = false;
	    }
	    setPointsToField(points) {
	        this.field.applyToField({
	            points,
	            value: 1
	        });
	    }
	    unsetPointsFromField(points) {
	        this.field.applyToField({
	            points,
	            value: null
	        });
	    }
	    checkCollision(points) {
	        const { height, width } = this.context.field.size;
	        const field = this.field.getField();
	        const coords = points.reduce((acc, curr) => {
	            acc.xs.push(curr.x);
	            acc.ys.push(curr.y);
	            return acc;
	        }, { xs: [], ys: [] });
	        const maxY = Math.max(...coords.ys);
	        const minX = Math.min(...coords.xs);
	        const maxX = Math.max(...coords.xs);
	        for (let i = points.length - 1; i >= 0; i--) {
	            const point = points[i];
	            const row = field[point.y];
	            const cell = row && row[point.x];
	            if (cell || maxY >= height || minX < 0 || maxX >= width) {
	                return true;
	            }
	        }
	        return false;
	    }
	    rotate() {
	        const currentPoints = this.figure.getPoints();
	        const nextFigure = this.figure.getRotate();
	        const nextPoints = this.figure.getPoints(nextFigure);
	        this.unsetPointsFromField(currentPoints);
	        if (!this.checkCollision(nextPoints)) {
	            this.figure.update(nextFigure);
	            this.setPointsToField(nextPoints);
	        }
	        else {
	            this.setPointsToField(currentPoints);
	        }
	    }
	    move({ x = 0, y = 0 }) {
	        const currentPoints = this.figure.getPoints();
	        const nextFigure = this.figure.getMove({ y, x });
	        const nextPoints = this.figure.getPoints(nextFigure);
	        this.unsetPointsFromField(currentPoints);
	        if (this.checkCollision(nextPoints)) {
	            this.setPointsToField(currentPoints);
	            if (y) {
	                const matches = this.field.removeMatches();
	                this.points.add({
	                    type: "match",
	                    count: matches
	                });
	                if (this.checkGameOver()) {
	                    this.gameOver = true;
	                }
	                this.nextFigure();
	            }
	        }
	        else {
	            this.figure.update(nextFigure);
	            this.setPointsToField(nextPoints);
	        }
	    }
	    nextFigure() {
	        this.level.incFigures();
	        this.points.add({ type: "next" });
	        const nextFigure = this.figure.getNext();
	        this.figure.setNext(nextFigure);
	    }
	    getModel() {
	        return {
	            field: this.field.getField(),
	            points: this.points.getPoints(),
	            level: this.level.getLevel(),
	            nextFigure: this.figure.getNext().field,
	            gameOver: this.gameOver
	        };
	    }
	    checkGameOver() {
	        const { size } = this.context.field;
	        const field = this.field.getField();
	        for (let i = 0; i < size.width; i++) {
	            if (field[0][i]) {
	                return true;
	            }
	        }
	        return false;
	    }
	}
	//# sourceMappingURL=game-model.js.map

	class UserEvents {
	    constructor() {
	        this.events = new eventemitter3();
	        if (isMobile.any) {
	            this.initMobileControls();
	        }
	        else {
	            this.initDesktopControls();
	        }
	    }
	    initMobileControls() {
	        const controls = [
	            {
	                event: "enter",
	                className: "mobile-rotate",
	                content: "&#10807"
	            },
	            {
	                event: "left",
	                className: "mobile-left",
	                content: "&#8592"
	            },
	            {
	                event: "right",
	                className: "mobile-right",
	                content: "&#8594"
	            }
	        ];
	        controls.forEach(control => {
	            const $el = document.createElement("div");
	            $el.innerHTML = control.content;
	            $el.classList.add(control.className);
	            $el.addEventListener("touchstart", () => this.events.emit(control.event));
	            document.body.appendChild($el);
	        });
	    }
	    initDesktopControls() {
	        document.addEventListener("keydown", e => {
	            if (e.keyCode === 13) {
	                this.events.emit("enter");
	            }
	            if (e.keyCode === 37) {
	                this.events.emit("left");
	            }
	            if (e.keyCode === 39) {
	                this.events.emit("right");
	            }
	        });
	    }
	}
	//# sourceMappingURL=user-events.js.map

	class GameController {
	    constructor(props) {
	        this.props = props;
	        this.game = new GameModel(this.props);
	        this.userEvents = new UserEvents();
	        this.field = new Field({}, this.props);
	        this.stats = new Stats({ points: 0, level: 0 }, this.props);
	        this.nextFigure = new NextFigure({ figure: [] }, this.props);
	        this.timeDelta = 0;
	        this.userEvents.events.on("enter", () => this.game.rotate());
	        this.userEvents.events.on("left", () => this.game.move({ x: -1 }));
	        this.userEvents.events.on("right", () => this.game.move({ x: 1 }));
	    }
	    update(params) {
	        const model = this.game.getModel();
	        this.timeDelta += params.dt;
	        if (this.timeDelta < 400 / Math.log1p(model.level)) {
	            return;
	        }
	        else {
	            this.timeDelta = 0;
	        }
	        if (model.gameOver)
	            return;
	        this.game.move({ y: 1 });
	        this.stats.update(params, {
	            points: model.points,
	            level: model.level
	        });
	        this.nextFigure.update(params, {
	            figure: model.nextFigure
	        });
	    }
	    render(params) {
	        const model = this.game.getModel();
	        if (model.gameOver) {
	            const gameOver = new GameOver({ points: model.points }, this.props);
	            return gameOver.render(params);
	        }
	        this.renderField(params);
	        this.field.render(params);
	        this.stats.render(params);
	        this.nextFigure.render(params);
	    }
	    renderField(params) {
	        const { field } = this.game.getModel();
	        field.forEach((row, y) => {
	            row.forEach((cell, x) => {
	                if (!cell)
	                    return;
	                const component = new Cell({ position: { x, y } }, this.props);
	                component.render(params);
	            });
	        });
	    }
	}
	//# sourceMappingURL=game-controller.js.map

	const WIDTH = window.innerWidth;
	const HEIGHT = window.innerHeight;
	const canvas = document.createElement("canvas");
	document.body.style.margin = "0";
	document.body.style.display = "flex";
	document.body.style.height = "100vh";
	document.body.style.background = "black";
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	canvas.style.display = "block";
	canvas.style.margin = "auto";
	document.body.appendChild(canvas);
	const ctx = canvas.getContext("2d");
	const loop = new Loop(60);
	const game = new GameController({
	    canvas: {
	        size: {
	            width: WIDTH,
	            height: HEIGHT
	        }
	    },
	    field: {
	        size: {
	            width: 15,
	            height: 20
	        },
	        color: "#3f4f60"
	    },
	    cell: {
	        size: {
	            width: isMobile.any ? WIDTH / 15 : 20,
	            height: isMobile.any ? HEIGHT / 30 : 20
	        },
	        color: "#6f7f90"
	    }
	});
	loop.events.on("update", ({ dt }) => game.update({ dt, ctx }));
	loop.events.on("render", ({ dt }) => {
	    ctx.clearRect(0, 0, WIDTH, HEIGHT);
	    game.render({ dt, ctx });
	});
	loop.run();
	//# sourceMappingURL=app.js.map

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvaXNtb2JpbGVqcy9zcmMvaXNNb2JpbGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQHZhYWxlbnRpbi9nYW1lLWxvb3AvZGlzdC9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9ldmVudGVtaXR0ZXIzL2luZGV4LmpzIiwiLi4vc3JjL2xvb3AudHMiLCIuLi9zcmMvY29tcG9uZW50cy9maWVsZC50cyIsIi4uL3NyYy9jb21wb25lbnRzL2NlbGwudHMiLCIuLi9zcmMvY29tcG9uZW50cy9zdGF0cy50cyIsIi4uL3NyYy9jb21wb25lbnRzL2dhbWUtb3Zlci50cyIsIi4uL3NyYy9jb21wb25lbnRzL25leHQtZmlndXJlLnRzIiwiLi4vc3JjL21vZGVsL2ZpZWxkLW1vZGVsLnRzIiwiLi4vc3JjL21vZGVsL2ZpZ3VyZS1tb2RlbC50cyIsIi4uL3NyYy9tb2RlbC9wb2ludHMtbW9kZWwudHMiLCIuLi9zcmMvbW9kZWwvbGV2ZWwtbW9kZWwudHMiLCIuLi9zcmMvbW9kZWwvZ2FtZS1tb2RlbC50cyIsIi4uL3NyYy91c2VyLWV2ZW50cy50cyIsIi4uL3NyYy9nYW1lLWNvbnRyb2xsZXIudHMiLCIuLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihnbG9iYWwpIHtcbiAgdmFyIGFwcGxlX3Bob25lID0gL2lQaG9uZS9pLFxuICAgIGFwcGxlX2lwb2QgPSAvaVBvZC9pLFxuICAgIGFwcGxlX3RhYmxldCA9IC9pUGFkL2ksXG4gICAgYW5kcm9pZF9waG9uZSA9IC9cXGJBbmRyb2lkKD86LispTW9iaWxlXFxiL2ksIC8vIE1hdGNoICdBbmRyb2lkJyBBTkQgJ01vYmlsZSdcbiAgICBhbmRyb2lkX3RhYmxldCA9IC9BbmRyb2lkL2ksXG4gICAgYW1hem9uX3Bob25lID0gL1xcYkFuZHJvaWQoPzouKylTRDQ5MzBVUlxcYi9pLFxuICAgIGFtYXpvbl90YWJsZXQgPSAvXFxiQW5kcm9pZCg/Oi4rKSg/OktGW0EtWl17Miw0fSlcXGIvaSxcbiAgICB3aW5kb3dzX3Bob25lID0gL1dpbmRvd3MgUGhvbmUvaSxcbiAgICB3aW5kb3dzX3RhYmxldCA9IC9cXGJXaW5kb3dzKD86LispQVJNXFxiL2ksIC8vIE1hdGNoICdXaW5kb3dzJyBBTkQgJ0FSTSdcbiAgICBvdGhlcl9ibGFja2JlcnJ5ID0gL0JsYWNrQmVycnkvaSxcbiAgICBvdGhlcl9ibGFja2JlcnJ5XzEwID0gL0JCMTAvaSxcbiAgICBvdGhlcl9vcGVyYSA9IC9PcGVyYSBNaW5pL2ksXG4gICAgb3RoZXJfY2hyb21lID0gL1xcYihDcmlPU3xDaHJvbWUpKD86LispTW9iaWxlL2ksXG4gICAgb3RoZXJfZmlyZWZveCA9IC9cXE1vYmlsZSg/Oi4rKUZpcmVmb3hcXGIvaTsgLy8gTWF0Y2ggJ01vYmlsZScgQU5EICdGaXJlZm94J1xuXG4gIGZ1bmN0aW9uIG1hdGNoKHJlZ2V4LCB1c2VyQWdlbnQpIHtcbiAgICByZXR1cm4gcmVnZXgudGVzdCh1c2VyQWdlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNNb2JpbGUodXNlckFnZW50KSB7XG4gICAgdmFyIHVhID1cbiAgICAgIHVzZXJBZ2VudCB8fFxuICAgICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnID8gbmF2aWdhdG9yLnVzZXJBZ2VudCA6ICcnKTtcblxuICAgIC8vIEZhY2Vib29rIG1vYmlsZSBhcHAncyBpbnRlZ3JhdGVkIGJyb3dzZXIgYWRkcyBhIGJ1bmNoIG9mIHN0cmluZ3MgdGhhdFxuICAgIC8vIG1hdGNoIGV2ZXJ5dGhpbmcuIFN0cmlwIGl0IG91dCBpZiBpdCBleGlzdHMuXG4gICAgdmFyIHRtcCA9IHVhLnNwbGl0KCdbRkJBTicpO1xuICAgIGlmICh0eXBlb2YgdG1wWzFdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdWEgPSB0bXBbMF07XG4gICAgfVxuXG4gICAgLy8gVHdpdHRlciBtb2JpbGUgYXBwJ3MgaW50ZWdyYXRlZCBicm93c2VyIG9uIGlQYWQgYWRkcyBhIFwiVHdpdHRlciBmb3JcbiAgICAvLyBpUGhvbmVcIiBzdHJpbmcuIFNhbWUgcHJvYmFibHkgaGFwcGVucyBvbiBvdGhlciB0YWJsZXQgcGxhdGZvcm1zLlxuICAgIC8vIFRoaXMgd2lsbCBjb25mdXNlIGRldGVjdGlvbiBzbyBzdHJpcCBpdCBvdXQgaWYgaXQgZXhpc3RzLlxuICAgIHRtcCA9IHVhLnNwbGl0KCdUd2l0dGVyJyk7XG4gICAgaWYgKHR5cGVvZiB0bXBbMV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB1YSA9IHRtcFswXTtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgYXBwbGU6IHtcbiAgICAgICAgcGhvbmU6IG1hdGNoKGFwcGxlX3Bob25lLCB1YSkgJiYgIW1hdGNoKHdpbmRvd3NfcGhvbmUsIHVhKSxcbiAgICAgICAgaXBvZDogbWF0Y2goYXBwbGVfaXBvZCwgdWEpLFxuICAgICAgICB0YWJsZXQ6XG4gICAgICAgICAgIW1hdGNoKGFwcGxlX3Bob25lLCB1YSkgJiZcbiAgICAgICAgICBtYXRjaChhcHBsZV90YWJsZXQsIHVhKSAmJlxuICAgICAgICAgICFtYXRjaCh3aW5kb3dzX3Bob25lLCB1YSksXG4gICAgICAgIGRldmljZTpcbiAgICAgICAgICAobWF0Y2goYXBwbGVfcGhvbmUsIHVhKSB8fFxuICAgICAgICAgICAgbWF0Y2goYXBwbGVfaXBvZCwgdWEpIHx8XG4gICAgICAgICAgICBtYXRjaChhcHBsZV90YWJsZXQsIHVhKSkgJiZcbiAgICAgICAgICAhbWF0Y2god2luZG93c19waG9uZSwgdWEpXG4gICAgICB9LFxuICAgICAgYW1hem9uOiB7XG4gICAgICAgIHBob25lOiBtYXRjaChhbWF6b25fcGhvbmUsIHVhKSxcbiAgICAgICAgdGFibGV0OiAhbWF0Y2goYW1hem9uX3Bob25lLCB1YSkgJiYgbWF0Y2goYW1hem9uX3RhYmxldCwgdWEpLFxuICAgICAgICBkZXZpY2U6IG1hdGNoKGFtYXpvbl9waG9uZSwgdWEpIHx8IG1hdGNoKGFtYXpvbl90YWJsZXQsIHVhKVxuICAgICAgfSxcbiAgICAgIGFuZHJvaWQ6IHtcbiAgICAgICAgcGhvbmU6XG4gICAgICAgICAgKCFtYXRjaCh3aW5kb3dzX3Bob25lLCB1YSkgJiYgbWF0Y2goYW1hem9uX3Bob25lLCB1YSkpIHx8XG4gICAgICAgICAgKCFtYXRjaCh3aW5kb3dzX3Bob25lLCB1YSkgJiYgbWF0Y2goYW5kcm9pZF9waG9uZSwgdWEpKSxcbiAgICAgICAgdGFibGV0OlxuICAgICAgICAgICFtYXRjaCh3aW5kb3dzX3Bob25lLCB1YSkgJiZcbiAgICAgICAgICAhbWF0Y2goYW1hem9uX3Bob25lLCB1YSkgJiZcbiAgICAgICAgICAhbWF0Y2goYW5kcm9pZF9waG9uZSwgdWEpICYmXG4gICAgICAgICAgKG1hdGNoKGFtYXpvbl90YWJsZXQsIHVhKSB8fCBtYXRjaChhbmRyb2lkX3RhYmxldCwgdWEpKSxcbiAgICAgICAgZGV2aWNlOlxuICAgICAgICAgICghbWF0Y2god2luZG93c19waG9uZSwgdWEpICYmXG4gICAgICAgICAgICAobWF0Y2goYW1hem9uX3Bob25lLCB1YSkgfHxcbiAgICAgICAgICAgICAgbWF0Y2goYW1hem9uX3RhYmxldCwgdWEpIHx8XG4gICAgICAgICAgICAgIG1hdGNoKGFuZHJvaWRfcGhvbmUsIHVhKSB8fFxuICAgICAgICAgICAgICBtYXRjaChhbmRyb2lkX3RhYmxldCwgdWEpKSkgfHxcbiAgICAgICAgICBtYXRjaCgvXFxib2todHRwXFxiL2ksIHVhKVxuICAgICAgfSxcbiAgICAgIHdpbmRvd3M6IHtcbiAgICAgICAgcGhvbmU6IG1hdGNoKHdpbmRvd3NfcGhvbmUsIHVhKSxcbiAgICAgICAgdGFibGV0OiBtYXRjaCh3aW5kb3dzX3RhYmxldCwgdWEpLFxuICAgICAgICBkZXZpY2U6IG1hdGNoKHdpbmRvd3NfcGhvbmUsIHVhKSB8fCBtYXRjaCh3aW5kb3dzX3RhYmxldCwgdWEpXG4gICAgICB9LFxuICAgICAgb3RoZXI6IHtcbiAgICAgICAgYmxhY2tiZXJyeTogbWF0Y2gob3RoZXJfYmxhY2tiZXJyeSwgdWEpLFxuICAgICAgICBibGFja2JlcnJ5MTA6IG1hdGNoKG90aGVyX2JsYWNrYmVycnlfMTAsIHVhKSxcbiAgICAgICAgb3BlcmE6IG1hdGNoKG90aGVyX29wZXJhLCB1YSksXG4gICAgICAgIGZpcmVmb3g6IG1hdGNoKG90aGVyX2ZpcmVmb3gsIHVhKSxcbiAgICAgICAgY2hyb21lOiBtYXRjaChvdGhlcl9jaHJvbWUsIHVhKSxcbiAgICAgICAgZGV2aWNlOlxuICAgICAgICAgIG1hdGNoKG90aGVyX2JsYWNrYmVycnksIHVhKSB8fFxuICAgICAgICAgIG1hdGNoKG90aGVyX2JsYWNrYmVycnlfMTAsIHVhKSB8fFxuICAgICAgICAgIG1hdGNoKG90aGVyX29wZXJhLCB1YSkgfHxcbiAgICAgICAgICBtYXRjaChvdGhlcl9maXJlZm94LCB1YSkgfHxcbiAgICAgICAgICBtYXRjaChvdGhlcl9jaHJvbWUsIHVhKVxuICAgICAgfVxuICAgIH07XG4gICAgKHJlc3VsdC5hbnkgPVxuICAgICAgcmVzdWx0LmFwcGxlLmRldmljZSB8fFxuICAgICAgcmVzdWx0LmFuZHJvaWQuZGV2aWNlIHx8XG4gICAgICByZXN1bHQud2luZG93cy5kZXZpY2UgfHxcbiAgICAgIHJlc3VsdC5vdGhlci5kZXZpY2UpLFxuICAgICAgLy8gZXhjbHVkZXMgJ290aGVyJyBkZXZpY2VzIGFuZCBpcG9kcywgdGFyZ2V0aW5nIHRvdWNoc2NyZWVuIHBob25lc1xuICAgICAgKHJlc3VsdC5waG9uZSA9XG4gICAgICAgIHJlc3VsdC5hcHBsZS5waG9uZSB8fCByZXN1bHQuYW5kcm9pZC5waG9uZSB8fCByZXN1bHQud2luZG93cy5waG9uZSksXG4gICAgICAocmVzdWx0LnRhYmxldCA9XG4gICAgICAgIHJlc3VsdC5hcHBsZS50YWJsZXQgfHwgcmVzdWx0LmFuZHJvaWQudGFibGV0IHx8IHJlc3VsdC53aW5kb3dzLnRhYmxldCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKFxuICAgIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbW9kdWxlLmV4cG9ydHMgJiZcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuICApIHtcbiAgICAvLyBOb2RlLmpzXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBpc01vYmlsZTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIG1vZHVsZS5leHBvcnRzICYmXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgKSB7XG4gICAgLy8gQnJvd3NlcmlmeVxuICAgIG1vZHVsZS5leHBvcnRzID0gaXNNb2JpbGUoKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoW10sIChnbG9iYWwuaXNNb2JpbGUgPSBpc01vYmlsZSgpKSk7XG4gIH0gZWxzZSB7XG4gICAgZ2xvYmFsLmlzTW9iaWxlID0gaXNNb2JpbGUoKTtcbiAgfVxufSkodGhpcyk7XG4iLCIoZnVuY3Rpb24oZil7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZ0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9ZigpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtdLGYpfWVsc2V7dmFyIGc7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe2c9d2luZG93fWVsc2UgaWYodHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCIpe2c9Z2xvYmFsfWVsc2UgaWYodHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiKXtnPXNlbGZ9ZWxzZXtnPXRoaXN9Zy52YWFsZW50aW5nYW1lTG9vcCA9IGYoKX19KShmdW5jdGlvbigpe3ZhciBkZWZpbmUsbW9kdWxlLGV4cG9ydHM7cmV0dXJuIChmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBAY2xhc3MgRXZlbnREaXNwYXRjaGVyXG4gKi9cblxudmFyIEV2ZW50RGlzcGF0Y2hlciA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RzIEV2ZW50RGlzcGF0Y2hlclxuICAgKi9cblxuICBmdW5jdGlvbiBFdmVudERpc3BhdGNoZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50RGlzcGF0Y2hlcik7XG5cbiAgICB0aGlzLnRyaWdnZXIgPSB0aGlzLmRpc3BhdGNoRXZlbnQ7XG4gICAgdGhpcy5vbiA9IHRoaXMuYWRkRXZlbnRMaXN0ZW5lcjtcbiAgICB0aGlzLm9mZiA9IHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcblxuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZGlzcGF0Y2hFdmVudFxuICAgKiBAcHVibGljXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAqIEBwYXJhbSB7YW55W119IGFyZ3NcbiAgICogQHJldHVybnMge3RoaXN9XG4gICAqL1xuXG4gIF9jcmVhdGVDbGFzcyhFdmVudERpc3BhdGNoZXIsIFt7XG4gICAga2V5OiAnZGlzcGF0Y2hFdmVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQodHlwZSkge1xuICAgICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbdHlwZV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLl9saXN0ZW5lcnNbdHlwZV1bU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIGxpc3RlbmVyID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgICBsaXN0ZW5lci5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGRpc3BhdGNoRXZlbnRcbiAgICAgKlxuICAgICAqIEBtZXRob2QgdHJpZ2dlclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkRXZlbnRMaXN0ZW5lcicsXG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIGFkZEV2ZW50TGlzdGVuZXJcbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0geyhhbnkpID0+IGFueX0gY2JcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYikge1xuICAgICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbdHlwZV0pIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzW3R5cGVdID0gW107XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9saXN0ZW5lcnNbdHlwZV0uaW5kZXhPZihjYikgIT09IC0xKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhblxcJ3QgYWRkIHRoZSBzYW1lIGxpc3RlbmVyIHRvIHRoZSBzYW1lIGV2ZW50IG1vcmUgdGhhbiBvbmNlJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2xpc3RlbmVyc1t0eXBlXS5wdXNoKGNiKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGFkZEV2ZW50TGlzdGVuZXJcbiAgICAgKlxuICAgICAqIEBtZXRob2Qgb25cbiAgICAgKiBAcHVibGljXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZUV2ZW50TGlzdGVuZXInLFxuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCByZW1vdmVFdmVudExpc3RlbmVyXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogQHBhcmFtIHsoYW55KSA9PiBhbnl9IGNiXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2IpIHtcbiAgICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW3R5cGVdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGkgPSB0aGlzLl9saXN0ZW5lcnNbdHlwZV0uaW5kZXhPZihjYik7XG5cbiAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnNbdHlwZV0uc3BsaWNlKGksIDEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICAgICAqXG4gICAgICogQG1ldGhvZCBvZmZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2Rpc3Bvc2UnLFxuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCBkaXNwb3NlXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzID0gbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXZlbnREaXNwYXRjaGVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBFdmVudERpc3BhdGNoZXI7XG5cbn0se31dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikgeyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7IH0gfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH07XG5cbnZhciBfZXZlbnREaXNwYXRjaGVyID0gcmVxdWlyZSgnQHZhYWxlbnRpbi9ldmVudC1kaXNwYXRjaGVyJyk7XG5cbnZhciBfZXZlbnREaXNwYXRjaGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2ZW50RGlzcGF0Y2hlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBAY2xhc3MgR2FtZUxvb3BcbiAqL1xuXG52YXIgR2FtZUxvb3AgPSBmdW5jdGlvbiAoX0V2ZW50RGlzcGF0Y2hlcikge1xuICBfaW5oZXJpdHMoR2FtZUxvb3AsIF9FdmVudERpc3BhdGNoZXIpO1xuXG4gIC8qKlxuICAgKiBAY29uc3RydWN0cyBHYW1lTG9vcFxuICAgKiBAcGFyYW0ge2Zsb2F0fSBbZnBzID0gNjBdXG4gICAqIEBwYXJhbSB7ZmxvYXR9IFtzcGVlZCA9IDFdXG4gICAqL1xuXG4gIGZ1bmN0aW9uIEdhbWVMb29wKCkge1xuICAgIHZhciBmcHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyA2MCA6IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgc3BlZWQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAxIDogYXJndW1lbnRzWzFdO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdhbWVMb29wKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihHYW1lTG9vcCkuY2FsbCh0aGlzKSk7XG5cbiAgICBfdGhpcy5fdGltZVN0ZXAgPSAxMDAwIC8gZnBzICogc3BlZWQ7XG4gICAgX3RoaXMuX3ByZXZUaW1lID0gbnVsbDtcbiAgICBfdGhpcy5fbGFnVGltZSA9IDA7XG5cbiAgICBfdGhpcy5fZnJhbWUgPSBfdGhpcy5mcmFtZS5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5fZnJhbWVJZCA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZ2V0VGltZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmV0dXJucyB7ZmxvYXR9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEdhbWVMb29wLCBbe1xuICAgIGtleTogJ2dldFRpbWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUaW1lKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlICYmIHBlcmZvcm1hbmNlLm5vdyA/IHBlcmZvcm1hbmNlLm5vdygpIDogRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIGZyYW1lXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZnJhbWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmcmFtZSgpIHtcbiAgICAgIHZhciBjdXJUaW1lID0gdGhpcy5nZXRUaW1lKCk7XG4gICAgICB2YXIgZHQgPSBNYXRoLm1pbigxMDAwLCBjdXJUaW1lIC0gdGhpcy5fcHJldlRpbWUpO1xuICAgICAgdGhpcy5fcHJldlRpbWUgPSBjdXJUaW1lO1xuICAgICAgdGhpcy5fbGFnVGltZSArPSBkdDtcblxuICAgICAgd2hpbGUgKHRoaXMuX2xhZ1RpbWUgPiB0aGlzLl90aW1lU3RlcCkge1xuICAgICAgICB0aGlzLl9sYWdUaW1lIC09IHRoaXMuX3RpbWVTdGVwO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3VwZGF0ZScsIHRoaXMuX3RpbWVTdGVwKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdyZW5kZXInLCBkdCk7XG5cbiAgICAgIHRoaXMuX2ZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fZnJhbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZXRob2Qgc3RhcnRcbiAgICAgKiBAcHVibGljXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3N0YXJ0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICBpZiAodGhpcy5fcHJldlRpbWUgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdpbml0Jyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnc3RhcnQnKTtcbiAgICAgIHRoaXMuX3ByZXZUaW1lID0gdGhpcy5nZXRUaW1lKCk7XG5cbiAgICAgIHRoaXMuZnJhbWUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIHN0b3BcbiAgICAgKiBAcHVibGljXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3N0b3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdzdG9wJyk7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9mcmFtZUlkKTtcbiAgICAgIHRoaXMuX2ZyYW1lSWQgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgZGlzcG9zZVxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZGlzcG9zZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKEdhbWVMb29wLnByb3RvdHlwZSksICdkaXNwb3NlJywgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR2FtZUxvb3A7XG59KF9ldmVudERpc3BhdGNoZXIyLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBHYW1lTG9vcDtcblxufSx7XCJAdmFhbGVudGluL2V2ZW50LWRpc3BhdGNoZXJcIjoxfV19LHt9LFsyXSkoMilcbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgLCBwcmVmaXggPSAnfic7XG5cbi8qKlxuICogQ29uc3RydWN0b3IgdG8gY3JlYXRlIGEgc3RvcmFnZSBmb3Igb3VyIGBFRWAgb2JqZWN0cy5cbiAqIEFuIGBFdmVudHNgIGluc3RhbmNlIGlzIGEgcGxhaW4gb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgYXJlIGV2ZW50IG5hbWVzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRXZlbnRzKCkge31cblxuLy9cbi8vIFdlIHRyeSB0byBub3QgaW5oZXJpdCBmcm9tIGBPYmplY3QucHJvdG90eXBlYC4gSW4gc29tZSBlbmdpbmVzIGNyZWF0aW5nIGFuXG4vLyBpbnN0YW5jZSBpbiB0aGlzIHdheSBpcyBmYXN0ZXIgdGhhbiBjYWxsaW5nIGBPYmplY3QuY3JlYXRlKG51bGwpYCBkaXJlY3RseS5cbi8vIElmIGBPYmplY3QuY3JlYXRlKG51bGwpYCBpcyBub3Qgc3VwcG9ydGVkIHdlIHByZWZpeCB0aGUgZXZlbnQgbmFtZXMgd2l0aCBhXG4vLyBjaGFyYWN0ZXIgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGJ1aWx0LWluIG9iamVjdCBwcm9wZXJ0aWVzIGFyZSBub3Rcbi8vIG92ZXJyaWRkZW4gb3IgdXNlZCBhcyBhbiBhdHRhY2sgdmVjdG9yLlxuLy9cbmlmIChPYmplY3QuY3JlYXRlKSB7XG4gIEV2ZW50cy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIC8vXG4gIC8vIFRoaXMgaGFjayBpcyBuZWVkZWQgYmVjYXVzZSB0aGUgYF9fcHJvdG9fX2AgcHJvcGVydHkgaXMgc3RpbGwgaW5oZXJpdGVkIGluXG4gIC8vIHNvbWUgb2xkIGJyb3dzZXJzIGxpa2UgQW5kcm9pZCA0LCBpUGhvbmUgNS4xLCBPcGVyYSAxMSBhbmQgU2FmYXJpIDUuXG4gIC8vXG4gIGlmICghbmV3IEV2ZW50cygpLl9fcHJvdG9fXykgcHJlZml4ID0gZmFsc2U7XG59XG5cbi8qKlxuICogUmVwcmVzZW50YXRpb24gb2YgYSBzaW5nbGUgZXZlbnQgbGlzdGVuZXIuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29uY2U9ZmFsc2VdIFNwZWNpZnkgaWYgdGhlIGxpc3RlbmVyIGlzIGEgb25lLXRpbWUgbGlzdGVuZXIuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEVFKGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHRoaXMuZm4gPSBmbjtcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5vbmNlID0gb25jZSB8fCBmYWxzZTtcbn1cblxuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gZW1pdHRlciBSZWZlcmVuY2UgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGluc3RhbmNlLlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBTcGVjaWZ5IGlmIHRoZSBsaXN0ZW5lciBpcyBhIG9uZS10aW1lIGxpc3RlbmVyLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZExpc3RlbmVyKGVtaXR0ZXIsIGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGxpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVyID0gbmV3IEVFKGZuLCBjb250ZXh0IHx8IGVtaXR0ZXIsIG9uY2UpXG4gICAgLCBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghZW1pdHRlci5fZXZlbnRzW2V2dF0pIGVtaXR0ZXIuX2V2ZW50c1tldnRdID0gbGlzdGVuZXIsIGVtaXR0ZXIuX2V2ZW50c0NvdW50Kys7XG4gIGVsc2UgaWYgKCFlbWl0dGVyLl9ldmVudHNbZXZ0XS5mbikgZW1pdHRlci5fZXZlbnRzW2V2dF0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2UgZW1pdHRlci5fZXZlbnRzW2V2dF0gPSBbZW1pdHRlci5fZXZlbnRzW2V2dF0sIGxpc3RlbmVyXTtcblxuICByZXR1cm4gZW1pdHRlcjtcbn1cblxuLyoqXG4gKiBDbGVhciBldmVudCBieSBuYW1lLlxuICpcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlbWl0dGVyIFJlZmVyZW5jZSB0byB0aGUgYEV2ZW50RW1pdHRlcmAgaW5zdGFuY2UuXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZ0IFRoZSBFdmVudCBuYW1lLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2xlYXJFdmVudChlbWl0dGVyLCBldnQpIHtcbiAgaWYgKC0tZW1pdHRlci5fZXZlbnRzQ291bnQgPT09IDApIGVtaXR0ZXIuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgZWxzZSBkZWxldGUgZW1pdHRlci5fZXZlbnRzW2V2dF07XG59XG5cbi8qKlxuICogTWluaW1hbCBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UgdGhhdCBpcyBtb2xkZWQgYWdhaW5zdCB0aGUgTm9kZS5qc1xuICogYEV2ZW50RW1pdHRlcmAgaW50ZXJmYWNlLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xufVxuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBsaXN0aW5nIHRoZSBldmVudHMgZm9yIHdoaWNoIHRoZSBlbWl0dGVyIGhhcyByZWdpc3RlcmVkXG4gKiBsaXN0ZW5lcnMuXG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICB2YXIgbmFtZXMgPSBbXVxuICAgICwgZXZlbnRzXG4gICAgLCBuYW1lO1xuXG4gIGlmICh0aGlzLl9ldmVudHNDb3VudCA9PT0gMCkgcmV0dXJuIG5hbWVzO1xuXG4gIGZvciAobmFtZSBpbiAoZXZlbnRzID0gdGhpcy5fZXZlbnRzKSkge1xuICAgIGlmIChoYXMuY2FsbChldmVudHMsIG5hbWUpKSBuYW1lcy5wdXNoKHByZWZpeCA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lKTtcbiAgfVxuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgcmV0dXJuIG5hbWVzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGV2ZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIG5hbWVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gVGhlIHJlZ2lzdGVyZWQgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudCkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudFxuICAgICwgaGFuZGxlcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoIWhhbmRsZXJzKSByZXR1cm4gW107XG4gIGlmIChoYW5kbGVycy5mbikgcmV0dXJuIFtoYW5kbGVycy5mbl07XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGgsIGVlID0gbmV3IEFycmF5KGwpOyBpIDwgbDsgaSsrKSB7XG4gICAgZWVbaV0gPSBoYW5kbGVyc1tpXS5mbjtcbiAgfVxuXG4gIHJldHVybiBlZTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBudW1iZXIgb2YgbGlzdGVuZXJzIGxpc3RlbmluZyB0byBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBudW1iZXIgb2YgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbiBsaXN0ZW5lckNvdW50KGV2ZW50KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoIWxpc3RlbmVycykgcmV0dXJuIDA7XG4gIGlmIChsaXN0ZW5lcnMuZm4pIHJldHVybiAxO1xuICByZXR1cm4gbGlzdGVuZXJzLmxlbmd0aDtcbn07XG5cbi8qKlxuICogQ2FsbHMgZWFjaCBvZiB0aGUgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgZXZlbnQgaGFkIGxpc3RlbmVycywgZWxzZSBgZmFsc2VgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50LCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XVxuICAgICwgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgYXJnc1xuICAgICwgaTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKGxpc3RlbmVycy5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnMuZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgY2FzZSAxOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQpLCB0cnVlO1xuICAgICAgY2FzZSAyOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExKSwgdHJ1ZTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIpLCB0cnVlO1xuICAgICAgY2FzZSA0OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMpLCB0cnVlO1xuICAgICAgY2FzZSA1OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgNjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCwgYTUpLCB0cnVlO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm4uYXBwbHkobGlzdGVuZXJzLmNvbnRleHQsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoXG4gICAgICAsIGo7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChsaXN0ZW5lcnNbaV0ub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzW2ldLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgICBjYXNlIDE6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0KTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMik7IGJyZWFrO1xuICAgICAgICBjYXNlIDQ6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIsIGEzKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFhcmdzKSBmb3IgKGogPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgYXJnc1tqIC0gMV0gPSBhcmd1bWVudHNbal07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGlzdGVuZXJzW2ldLmZuLmFwcGx5KGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQWRkIGEgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbihldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGFkZExpc3RlbmVyKHRoaXMsIGV2ZW50LCBmbiwgY29udGV4dCwgZmFsc2UpO1xufTtcblxuLyoqXG4gKiBBZGQgYSBvbmUtdGltZSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZShldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGFkZExpc3RlbmVyKHRoaXMsIGV2ZW50LCBmbiwgY29udGV4dCwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgbGlzdGVuZXJzIG9mIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IG1hdGNoIHRoaXMgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IGhhdmUgdGhpcyBjb250ZXh0LlxuICogQHBhcmFtIHtCb29sZWFufSBvbmNlIE9ubHkgcmVtb3ZlIG9uZS10aW1lIGxpc3RlbmVycy5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gdGhpcztcbiAgaWYgKCFmbikge1xuICAgIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKFxuICAgICAgbGlzdGVuZXJzLmZuID09PSBmbiAmJlxuICAgICAgKCFvbmNlIHx8IGxpc3RlbmVycy5vbmNlKSAmJlxuICAgICAgKCFjb250ZXh0IHx8IGxpc3RlbmVycy5jb250ZXh0ID09PSBjb250ZXh0KVxuICAgICkge1xuICAgICAgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMCwgZXZlbnRzID0gW10sIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBsaXN0ZW5lcnNbaV0uZm4gIT09IGZuIHx8XG4gICAgICAgIChvbmNlICYmICFsaXN0ZW5lcnNbaV0ub25jZSkgfHxcbiAgICAgICAgKGNvbnRleHQgJiYgbGlzdGVuZXJzW2ldLmNvbnRleHQgIT09IGNvbnRleHQpXG4gICAgICApIHtcbiAgICAgICAgZXZlbnRzLnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIFJlc2V0IHRoZSBhcnJheSwgb3IgcmVtb3ZlIGl0IGNvbXBsZXRlbHkgaWYgd2UgaGF2ZSBubyBtb3JlIGxpc3RlbmVycy5cbiAgICAvL1xuICAgIGlmIChldmVudHMubGVuZ3RoKSB0aGlzLl9ldmVudHNbZXZ0XSA9IGV2ZW50cy5sZW5ndGggPT09IDEgPyBldmVudHNbMF0gOiBldmVudHM7XG4gICAgZWxzZSBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMsIG9yIHRob3NlIG9mIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IFtldmVudF0gVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50KSB7XG4gIHZhciBldnQ7XG5cbiAgaWYgKGV2ZW50KSB7XG4gICAgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcbiAgICBpZiAodGhpcy5fZXZlbnRzW2V2dF0pIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vL1xuLy8gQWxpYXMgbWV0aG9kcyBuYW1lcyBiZWNhdXNlIHBlb3BsZSByb2xsIGxpa2UgdGhhdC5cbi8vXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgcHJlZml4LlxuLy9cbkV2ZW50RW1pdHRlci5wcmVmaXhlZCA9IHByZWZpeDtcblxuLy9cbi8vIEFsbG93IGBFdmVudEVtaXR0ZXJgIHRvIGJlIGltcG9ydGVkIGFzIG1vZHVsZSBuYW1lc3BhY2UuXG4vL1xuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgbW9kdWxlLlxuLy9cbmlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG1vZHVsZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbn1cbiIsImltcG9ydCBHYW1lTG9vcCBmcm9tIFwiQHZhYWxlbnRpbi9nYW1lLWxvb3BcIjtcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcImV2ZW50ZW1pdHRlcjNcIjtcblxuZXhwb3J0IGNsYXNzIExvb3Age1xuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRzOiBhbnk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBsb29wOiBHYW1lTG9vcDtcblxuICBjb25zdHJ1Y3RvcihmcmFtZXM6IG51bWJlcikge1xuICAgIHRoaXMubG9vcCA9IG5ldyBHYW1lTG9vcChmcmFtZXMpO1xuXG4gICAgdGhpcy5ldmVudHMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBydW4oKSB7XG4gICAgdGhpcy5sb29wLnN0YXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgdGhpcy5sb29wLm9uKFwiaW5pdFwiLCAoKSA9PiB0aGlzLmV2ZW50cy5lbWl0KFwiaW5pdFwiKSk7XG5cbiAgICB0aGlzLmxvb3Aub24oXCJ1cGRhdGVcIiwgKGR0OiBudW1iZXIpID0+IHRoaXMuZXZlbnRzLmVtaXQoXCJ1cGRhdGVcIiwgeyBkdCB9KSk7XG5cbiAgICB0aGlzLmxvb3Aub24oXCJyZW5kZXJcIiwgKGR0OiBudW1iZXIpID0+IHRoaXMuZXZlbnRzLmVtaXQoXCJyZW5kZXJcIiwgeyBkdCB9KSk7XG4gIH1cbn1cbiIsImludGVyZmFjZSBJRmllbGRQcm9wcyB7XG4gIG9mZnNldD86IElQb2ludDtcbiAgY2VsbFNpemU/OiBJRGltZW5zaW9ucztcbiAgZmllbGRTaXplPzogSURpbWVuc2lvbnM7XG59XG5cbmV4cG9ydCBjbGFzcyBGaWVsZCBpbXBsZW1lbnRzIElDb21wb25lbnQ8SUZpZWxkUHJvcHM+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm9wczogSUZpZWxkUHJvcHMsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dFxuICApIHt9XG5cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHt9XG5cbiAgcHVibGljIHJlbmRlcih7IGN0eCB9OiBJQ29tcG9uZW50UGFyYW1zKTogdm9pZCB7XG4gICAgY29uc3QgeyBmaWVsZCwgY2VsbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IHsgb2Zmc2V0ID0geyB4OiAwLCB5OiAwIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2VsbFNpemUgPSB0aGlzLnByb3BzLmNlbGxTaXplIHx8IGNlbGwuc2l6ZTtcbiAgICBjb25zdCBmaWVsZFNpemUgPSB0aGlzLnByb3BzLmZpZWxkU2l6ZSB8fCBmaWVsZC5zaXplO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGZpZWxkLmNvbG9yO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gZmllbGRTaXplLmhlaWdodDsgaSsrKSB7XG4gICAgICBjdHgubW92ZVRvKG9mZnNldC54LCBpICogY2VsbFNpemUuaGVpZ2h0ICsgb2Zmc2V0LnkpO1xuICAgICAgY3R4LmxpbmVUbyhcbiAgICAgICAgb2Zmc2V0LnggKyBmaWVsZFNpemUud2lkdGggKiBjZWxsU2l6ZS53aWR0aCxcbiAgICAgICAgaSAqIGNlbGxTaXplLmhlaWdodCArIG9mZnNldC55XG4gICAgICApO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGZpZWxkU2l6ZS53aWR0aDsgaSsrKSB7XG4gICAgICBjdHgubW92ZVRvKG9mZnNldC54ICsgaSAqIGNlbGxTaXplLndpZHRoLCBvZmZzZXQueSk7XG4gICAgICBjdHgubGluZVRvKFxuICAgICAgICBvZmZzZXQueCArIGkgKiBjZWxsU2l6ZS53aWR0aCxcbiAgICAgICAgZmllbGRTaXplLmhlaWdodCAqIGNlbGxTaXplLmhlaWdodCArIG9mZnNldC55XG4gICAgICApO1xuICAgIH1cblxuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufVxuIiwiaW50ZXJmYWNlIElDZWxsUHJvcHMge1xuICBwb3NpdGlvbjogSVBvaW50O1xuICBvZmZzZXQ/OiBJUG9pbnQ7XG4gIHNpemU/OiBJRGltZW5zaW9ucztcbn1cblxuZXhwb3J0IGNsYXNzIENlbGwgaW1wbGVtZW50cyBJQ29tcG9uZW50PElDZWxsUHJvcHM+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm9wczogSUNlbGxQcm9wcyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IElDb21wb25lbnRDb250ZXh0XG4gICkge31cblxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge31cblxuICBwdWJsaWMgcmVuZGVyKHsgY3R4IH06IElDb21wb25lbnRQYXJhbXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNlbGwgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCB7IHBvc2l0aW9uLCBvZmZzZXQgPSB7IHg6IDAsIHk6IDAgfSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzaXplID0gdGhpcy5wcm9wcy5zaXplIHx8IGNlbGwuc2l6ZTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gY2VsbC5jb2xvcjtcblxuICAgIGN0eC5yZWN0KFxuICAgICAgb2Zmc2V0LnggKyBwb3NpdGlvbi54ICogc2l6ZS53aWR0aCArIDEsXG4gICAgICBvZmZzZXQueSArIHBvc2l0aW9uLnkgKiBzaXplLmhlaWdodCArIDEsXG4gICAgICBzaXplLndpZHRoIC0gMixcbiAgICAgIHNpemUuaGVpZ2h0IC0gMlxuICAgICk7XG5cbiAgICBjdHguZmlsbCgpO1xuICB9XG59XG4iLCJpbXBvcnQgaXNNb2JpbGUgZnJvbSBcImlzbW9iaWxlanNcIjtcblxuaW50ZXJmYWNlIElTdGF0c1Byb3BzIHtcbiAgcG9pbnRzOiBudW1iZXI7XG4gIGxldmVsOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBTdGF0cyBpbXBsZW1lbnRzIElDb21wb25lbnQ8SVN0YXRzUHJvcHM+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwcm9wczogSVN0YXRzUHJvcHMsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dFxuICApIHt9XG5cbiAgcHVibGljIHVwZGF0ZShwYXJhbXM6IElDb21wb25lbnRQYXJhbXMsIHByb3BzOiBJU3RhdHNQcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoeyBjdHggfTogSUNvbXBvbmVudFBhcmFtcykge1xuICAgIGNvbnN0IHsgZmllbGQsIGNlbGwgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCBvZmZzZXQgPSB7XG4gICAgICB4OiBpc01vYmlsZS5hbnkgPyAxMDAgOiBmaWVsZC5zaXplLndpZHRoICogY2VsbC5zaXplLndpZHRoICsgMjAsXG4gICAgICB5OiBpc01vYmlsZS5hbnkgPyBmaWVsZC5zaXplLmhlaWdodCAqIGNlbGwuc2l6ZS5oZWlnaHQgKyA0MCA6IDI1XG4gICAgfTtcblxuICAgIGN0eC5mb250ID0gXCIyMHB4IFZlcmRhbmFcIjtcblxuICAgIGN0eC5maWxsVGV4dChgUG9pbnRzOiAke3RoaXMucHJvcHMucG9pbnRzfWAsIG9mZnNldC54LCBvZmZzZXQueSk7XG5cbiAgICBjdHguZmlsbFRleHQoYExldmVsOiAke3RoaXMucHJvcHMubGV2ZWx9YCwgb2Zmc2V0LngsIG9mZnNldC55ICsgMjUpO1xuXG4gICAgaWYgKCFpc01vYmlsZS5hbnkpIHtcbiAgICAgIGN0eC5maWxsVGV4dChcbiAgICAgICAgYExldmVsIHdpbGwgY2hhbmdlIGV2ZXJ5IDEwIGZpZ3VyZXNgLFxuICAgICAgICBmaWVsZC5zaXplLndpZHRoICogY2VsbC5zaXplLndpZHRoICsgMjAsXG4gICAgICAgIDc1XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIiwiaW50ZXJmYWNlIElHYW1lT3ZlclByb3BzIHtcbiAgcG9pbnRzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBHYW1lT3ZlciBpbXBsZW1lbnRzIElDb21wb25lbnQ8SUdhbWVPdmVyUHJvcHM+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm9wczogSUdhbWVPdmVyUHJvcHMsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dFxuICApIHt9XG5cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHt9XG5cbiAgcHVibGljIHJlbmRlcih7IGN0eCB9OiBJQ29tcG9uZW50UGFyYW1zKTogdm9pZCB7XG4gICAgY29uc3QgeyBjYW52YXMgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIGN0eC5mb250ID0gXCI1MHB4IEFyaWFsXCI7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG5cbiAgICBjdHguZmlsbFRleHQoXCJHYW1lIE92ZXJcIiwgY2FudmFzLnNpemUud2lkdGggLyAyLCBjYW52YXMuc2l6ZS5oZWlnaHQgLyAyKTtcblxuICAgIGN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG5cbiAgICBjdHguZmlsbFRleHQoXG4gICAgICBgWW91ciBwb2ludHM6ICR7dGhpcy5wcm9wcy5wb2ludHN9YCxcbiAgICAgIGNhbnZhcy5zaXplLndpZHRoIC8gMixcbiAgICAgIGNhbnZhcy5zaXplLmhlaWdodCAvIDIgKyA1MFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBpc01vYmlsZSBmcm9tIFwiaXNtb2JpbGVqc1wiO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiLi9maWVsZFwiO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcblxuaW50ZXJmYWNlIElOZXh0RmlndXJlUHJvcHMge1xuICBmaWd1cmU6IElGaWVsZE1hcFtdW107XG59XG5cbmV4cG9ydCBjbGFzcyBOZXh0RmlndXJlIGltcGxlbWVudHMgSUNvbXBvbmVudDxJTmV4dEZpZ3VyZVByb3BzPiB7XG4gIHByaXZhdGUgb2Zmc2V0ID0ge1xuICAgIHg6IGlzTW9iaWxlLmFueVxuICAgICAgPyAyMFxuICAgICAgOiB0aGlzLmNvbnRleHQuZmllbGQuc2l6ZS53aWR0aCAqIHRoaXMuY29udGV4dC5jZWxsLnNpemUud2lkdGggKyAyMCxcbiAgICB5OiBpc01vYmlsZS5hbnlcbiAgICAgID8gdGhpcy5jb250ZXh0LmZpZWxkLnNpemUuaGVpZ2h0ICogdGhpcy5jb250ZXh0LmNlbGwuc2l6ZS5oZWlnaHQgKyAyMFxuICAgICAgOiAxMDBcbiAgfTtcblxuICBwcml2YXRlIGZpZWxkID0gbmV3IEZpZWxkKFxuICAgIHtcbiAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICBmaWVsZFNpemU6IHtcbiAgICAgICAgd2lkdGg6IDUsXG4gICAgICAgIGhlaWdodDogNVxuICAgICAgfSxcbiAgICAgIGNlbGxTaXplOiB7XG4gICAgICAgIHdpZHRoOiAxMCxcbiAgICAgICAgaGVpZ2h0OiAxMFxuICAgICAgfVxuICAgIH0sXG4gICAgdGhpcy5jb250ZXh0XG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwcm9wczogSU5leHRGaWd1cmVQcm9wcyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IElDb21wb25lbnRDb250ZXh0XG4gICkge31cblxuICBwdWJsaWMgdXBkYXRlKHBhcmFtczogSUNvbXBvbmVudFBhcmFtcywgcHJvcHM6IElOZXh0RmlndXJlUHJvcHMpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHBhcmFtczogSUNvbXBvbmVudFBhcmFtcyk6IHZvaWQge1xuICAgIHRoaXMuZmllbGQucmVuZGVyKHBhcmFtcyk7XG5cbiAgICB0aGlzLnJlbmRlckNlbGxzKHBhcmFtcyk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckNlbGxzKHBhcmFtczogSUNvbXBvbmVudFBhcmFtcykge1xuICAgIGNvbnN0IGZpZ3VyZSA9IHRoaXMucHJvcHMuZmlndXJlO1xuXG4gICAgZmlndXJlLmZvckVhY2goKHJvdywgeSkgPT5cbiAgICAgIHJvdy5mb3JFYWNoKChjZWxsLCB4KSA9PiB7XG4gICAgICAgIGlmICghY2VsbCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBDZWxsKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4LCB5IH0sXG4gICAgICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGhpcy5jb250ZXh0XG4gICAgICAgICk7XG5cbiAgICAgICAgY29tcG9uZW50LnJlbmRlcihwYXJhbXMpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iLCJpbnRlcmZhY2UgSUZpZWxkQXBwbHlQYXJhbXMge1xuICBwb2ludHM6IElQb2ludFtdO1xuICB2YWx1ZTogSUZpZWxkTWFwO1xufVxuXG5leHBvcnQgY2xhc3MgRmllbGRNb2RlbCB7XG4gIHByaXZhdGUgZmllbGQ6IElGaWVsZE1hcFtdW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZpZWxkOiB7IHNpemUgfVxuICAgIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLmZpZWxkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2l6ZS5oZWlnaHQgfSwgKCkgPT5cbiAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IHNpemUud2lkdGggfSwgKCkgPT4gbnVsbClcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGFwcGx5VG9GaWVsZCh7IHBvaW50cywgdmFsdWUgfTogSUZpZWxkQXBwbHlQYXJhbXMpIHtcbiAgICBwb2ludHMuZm9yRWFjaChwb2ludCA9PiB7XG4gICAgICBjb25zdCByb3cgPSB0aGlzLmZpZWxkW3BvaW50LnldO1xuXG4gICAgICBpZiAocm93KSB7XG4gICAgICAgIHJvd1twb2ludC54XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZU1hdGNoZXMoKTogbnVtYmVyIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuY29udGV4dC5maWVsZC5zaXplO1xuICAgIGxldCBtYXRjaGVzID0gMDtcblxuICAgIGZvciAobGV0IGkgPSBoZWlnaHQgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgIGlmICghdGhpcy5maWVsZFtpXVtqXSkgYnJlYWs7XG5cbiAgICAgICAgaWYgKGogPT09IHdpZHRoIC0gMSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlUm93KGkpO1xuICAgICAgICAgIG1hdGNoZXMrKztcbiAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWVsZCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZDtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlUm93KHlQb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgY29uc3QgeyBzaXplIH0gPSB0aGlzLmNvbnRleHQuZmllbGQ7XG5cbiAgICBmb3IgKGxldCBpID0geVBvc2l0aW9uOyBpID49IDA7IGktLSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplLndpZHRoOyBqKyspIHtcbiAgICAgICAgY29uc3QgcHJldiA9IHRoaXMuZmllbGRbaSAtIDFdO1xuICAgICAgICB0aGlzLmZpZWxkW2ldW2pdID0gcHJldiA/IHByZXZbal0gOiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEZpZ3VyZU1vZGVsIHtcbiAgcHJpdmF0ZSBmaWd1cmVzID0gW1xuICAgIFtbMCwgMCwgMCwgMF0sIFswLCAxLCAxLCAwXSwgWzAsIDAsIDEsIDBdLCBbMCwgMCwgMSwgMF0sIFswLCAwLCAwLCAwXV0sXG4gICAgW1swLCAwLCAwLCAwXSwgWzAsIDEsIDEsIDBdLCBbMCwgMSwgMCwgMF0sIFswLCAxLCAwLCAwXSwgWzAsIDAsIDAsIDBdXSxcbiAgICBbWzEsIDFdLCBbMSwgMV1dLFxuICAgIFtcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAxLCAxLCAxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwXVxuICAgIF0sXG4gICAgW1swLCAwLCAwLCAwLCAwXSwgWzAsIDEsIDEsIDEsIDBdLCBbMCwgMCwgMSwgMCwgMF0sIFswLCAwLCAwLCAwLCAwXV0sXG4gICAgW1sxLCAxLCAwXSwgWzAsIDEsIDFdXSxcbiAgICBbWzAsIDEsIDFdLCBbMSwgMSwgMF1dLFxuICAgIFtbMV1dXG4gIF07XG5cbiAgcHJpdmF0ZSBmaWd1cmU6IElGaWd1cmU7XG5cbiAgcHJpdmF0ZSBuZXh0OiBJRmlndXJlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogSUNvbXBvbmVudENvbnRleHQpIHtcbiAgICB0aGlzLmZpZ3VyZSA9IHRoaXMuZ2V0UmFuZG9tRmlndXJlKCk7XG4gICAgdGhpcy5uZXh0ID0gdGhpcy5nZXRSYW5kb21GaWd1cmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXROZXh0KGZpZ3VyZTogSUZpZ3VyZSk6IHZvaWQge1xuICAgIHRoaXMuZmlndXJlID0gZmlndXJlO1xuICAgIHRoaXMubmV4dCA9IHRoaXMuZ2V0UmFuZG9tRmlndXJlKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGZpZ3VyZTogSUZpZ3VyZSk6IHZvaWQge1xuICAgIHRoaXMuZmlndXJlID0gZmlndXJlO1xuICB9XG5cbiAgcHVibGljIGdldE5leHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmV4dDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSb3RhdGUoKTogSUZpZ3VyZSB7XG4gICAgY29uc3QgZmxpcE1hdHJpeCA9IChtYXRyaXg6IElGaWVsZE1hcFtdW10pID0+XG4gICAgICBtYXRyaXhbMF0ubWFwKChjb2x1bW4sIGlkeCkgPT4gbWF0cml4Lm1hcChyb3cgPT4gcm93W2lkeF0pKTtcblxuICAgIGNvbnN0IHJvdGF0ZU1hdHJpeCA9IChtYXRyaXg6IElGaWVsZE1hcFtdW10pID0+XG4gICAgICBmbGlwTWF0cml4KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobWF0cml4KSkucmV2ZXJzZSgpKTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLmZpZ3VyZSxcbiAgICAgIGZpZWxkOiByb3RhdGVNYXRyaXgodGhpcy5maWd1cmUuZmllbGQpXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNb3ZlKGRlbHRhOiBJUG9pbnQpOiBJRmlndXJlIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4udGhpcy5maWd1cmUsXG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB5OiB0aGlzLmZpZ3VyZS5wb3NpdGlvbi55ICsgZGVsdGEueSxcbiAgICAgICAgeDogdGhpcy5maWd1cmUucG9zaXRpb24ueCArIGRlbHRhLnhcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGdldFBvaW50cyhmaWd1cmU6IElGaWd1cmUgPSB0aGlzLmZpZ3VyZSk6IElQb2ludFtdIHtcbiAgICByZXR1cm4gZmlndXJlLmZpZWxkLnJlZHVjZShcbiAgICAgIChhY2MsIGN1cnIsIHJvd0lkeCkgPT4ge1xuICAgICAgICBjdXJyLmZvckVhY2goKHBhdHRlcm4sIGNlbGxJZHgpID0+IHtcbiAgICAgICAgICBpZiAocGF0dGVybikge1xuICAgICAgICAgICAgYWNjLnB1c2goe1xuICAgICAgICAgICAgICB4OiBmaWd1cmUucG9zaXRpb24ueCArIGNlbGxJZHgsXG4gICAgICAgICAgICAgIHk6IGZpZ3VyZS5wb3NpdGlvbi55ICsgcm93SWR4XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LFxuICAgICAgW10gYXMgSVBvaW50W11cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSYW5kb21GaWd1cmUoKTogSUZpZ3VyZSB7XG4gICAgY29uc3QgZmllbGQgPSB0aGlzLmZpZ3VyZXNbfn4oTWF0aC5yYW5kb20oKSAqIHRoaXMuZmlndXJlcy5sZW5ndGgpXTtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiB+fih0aGlzLmNvbnRleHQuZmllbGQuc2l6ZS53aWR0aCAvIDIpLFxuICAgICAgICB5OiAtZmllbGQubGVuZ3RoXG4gICAgICB9LFxuICAgICAgZmllbGRcbiAgICB9O1xuICB9XG59XG4iLCJpbnRlcmZhY2UgSUFkZE1hdGNoUG9pbnRzIHtcbiAgdHlwZTogXCJtYXRjaFwiO1xuICBjb3VudDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSUFkZE5leHRQb2ludHMge1xuICB0eXBlOiBcIm5leHRcIjtcbn1cblxuZXhwb3J0IGNsYXNzIFBvaW50c01vZGVsIHtcbiAgcHJpdmF0ZSBwb2ludHMgPSAwO1xuXG4gIHB1YmxpYyBhZGQocGFyYW1zOiBJQWRkTmV4dFBvaW50cyB8IElBZGRNYXRjaFBvaW50cykge1xuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gXCJtYXRjaFwiKSB7XG4gICAgICB0aGlzLnBvaW50cyArPSBwYXJhbXMuY291bnQgKiAxMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wb2ludHMgKz0gMTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0UG9pbnRzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucG9pbnRzO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgTGV2ZWxNb2RlbCB7XG4gIHByaXZhdGUgbGV2ZWwgPSAxO1xuXG4gIHByaXZhdGUgZmlndXJlcyA9IDA7XG5cbiAgcHVibGljIGluY0ZpZ3VyZXMoKTogdm9pZCB7XG4gICAgdGhpcy5maWd1cmVzKys7XG5cbiAgICB0aGlzLmxldmVsID0gTWF0aC5jZWlsKHRoaXMuZmlndXJlcyAvIDEwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRMZXZlbCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmxldmVsO1xuICB9XG59XG4iLCJpbXBvcnQgeyBGaWVsZE1vZGVsIH0gZnJvbSBcIi4vZmllbGQtbW9kZWxcIjtcbmltcG9ydCB7IEZpZ3VyZU1vZGVsIH0gZnJvbSBcIi4vZmlndXJlLW1vZGVsXCI7XG5pbXBvcnQgeyBQb2ludHNNb2RlbCB9IGZyb20gXCIuL3BvaW50cy1tb2RlbFwiO1xuaW1wb3J0IHsgTGV2ZWxNb2RlbCB9IGZyb20gXCIuL2xldmVsLW1vZGVsXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lTW9kZWwge1xuICBwcml2YXRlIHBvaW50cyA9IG5ldyBQb2ludHNNb2RlbCgpO1xuXG4gIHByaXZhdGUgZmllbGQgPSBuZXcgRmllbGRNb2RlbCh0aGlzLmNvbnRleHQpO1xuXG4gIHByaXZhdGUgZmlndXJlID0gbmV3IEZpZ3VyZU1vZGVsKHRoaXMuY29udGV4dCk7XG5cbiAgcHJpdmF0ZSBsZXZlbCA9IG5ldyBMZXZlbE1vZGVsKCk7XG5cbiAgcHJpdmF0ZSBnYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogSUNvbXBvbmVudENvbnRleHQpIHt9XG5cbiAgcHVibGljIHNldFBvaW50c1RvRmllbGQocG9pbnRzOiBJUG9pbnRbXSk6IHZvaWQge1xuICAgIHRoaXMuZmllbGQuYXBwbHlUb0ZpZWxkKHtcbiAgICAgIHBvaW50cyxcbiAgICAgIHZhbHVlOiAxXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdW5zZXRQb2ludHNGcm9tRmllbGQocG9pbnRzOiBJUG9pbnRbXSk6IHZvaWQge1xuICAgIHRoaXMuZmllbGQuYXBwbHlUb0ZpZWxkKHtcbiAgICAgIHBvaW50cyxcbiAgICAgIHZhbHVlOiBudWxsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2hlY2tDb2xsaXNpb24ocG9pbnRzOiBJUG9pbnRbXSkge1xuICAgIGNvbnN0IHsgaGVpZ2h0LCB3aWR0aCB9ID0gdGhpcy5jb250ZXh0LmZpZWxkLnNpemU7XG4gICAgY29uc3QgZmllbGQgPSB0aGlzLmZpZWxkLmdldEZpZWxkKCk7XG5cbiAgICBjb25zdCBjb29yZHMgPSBwb2ludHMucmVkdWNlKFxuICAgICAgKGFjYywgY3VycikgPT4ge1xuICAgICAgICBhY2MueHMucHVzaChjdXJyLngpO1xuICAgICAgICBhY2MueXMucHVzaChjdXJyLnkpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSxcbiAgICAgIHsgeHM6IFtdLCB5czogW10gfSBhcyB7IHhzOiBudW1iZXJbXTsgeXM6IG51bWJlcltdIH1cbiAgICApO1xuXG4gICAgY29uc3QgbWF4WSA9IE1hdGgubWF4KC4uLmNvb3Jkcy55cyk7XG4gICAgY29uc3QgbWluWCA9IE1hdGgubWluKC4uLmNvb3Jkcy54cyk7XG4gICAgY29uc3QgbWF4WCA9IE1hdGgubWF4KC4uLmNvb3Jkcy54cyk7XG5cbiAgICBmb3IgKGxldCBpID0gcG9pbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBwb2ludCA9IHBvaW50c1tpXTtcbiAgICAgIGNvbnN0IHJvdyA9IGZpZWxkW3BvaW50LnldO1xuICAgICAgY29uc3QgY2VsbCA9IHJvdyAmJiByb3dbcG9pbnQueF07XG5cbiAgICAgIGlmIChjZWxsIHx8IG1heFkgPj0gaGVpZ2h0IHx8IG1pblggPCAwIHx8IG1heFggPj0gd2lkdGgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHJvdGF0ZSgpIHtcbiAgICBjb25zdCBjdXJyZW50UG9pbnRzID0gdGhpcy5maWd1cmUuZ2V0UG9pbnRzKCk7XG4gICAgY29uc3QgbmV4dEZpZ3VyZSA9IHRoaXMuZmlndXJlLmdldFJvdGF0ZSgpO1xuICAgIGNvbnN0IG5leHRQb2ludHMgPSB0aGlzLmZpZ3VyZS5nZXRQb2ludHMobmV4dEZpZ3VyZSk7XG5cbiAgICB0aGlzLnVuc2V0UG9pbnRzRnJvbUZpZWxkKGN1cnJlbnRQb2ludHMpO1xuXG4gICAgaWYgKCF0aGlzLmNoZWNrQ29sbGlzaW9uKG5leHRQb2ludHMpKSB7XG4gICAgICB0aGlzLmZpZ3VyZS51cGRhdGUobmV4dEZpZ3VyZSk7XG4gICAgICB0aGlzLnNldFBvaW50c1RvRmllbGQobmV4dFBvaW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0UG9pbnRzVG9GaWVsZChjdXJyZW50UG9pbnRzKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbW92ZSh7IHggPSAwLCB5ID0gMCB9OiBJRGVsdGFQb2ludCkge1xuICAgIGNvbnN0IGN1cnJlbnRQb2ludHMgPSB0aGlzLmZpZ3VyZS5nZXRQb2ludHMoKTtcbiAgICBjb25zdCBuZXh0RmlndXJlID0gdGhpcy5maWd1cmUuZ2V0TW92ZSh7IHksIHggfSk7XG4gICAgY29uc3QgbmV4dFBvaW50cyA9IHRoaXMuZmlndXJlLmdldFBvaW50cyhuZXh0RmlndXJlKTtcblxuICAgIHRoaXMudW5zZXRQb2ludHNGcm9tRmllbGQoY3VycmVudFBvaW50cyk7XG5cbiAgICBpZiAodGhpcy5jaGVja0NvbGxpc2lvbihuZXh0UG9pbnRzKSkge1xuICAgICAgdGhpcy5zZXRQb2ludHNUb0ZpZWxkKGN1cnJlbnRQb2ludHMpO1xuXG4gICAgICBpZiAoeSkge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5maWVsZC5yZW1vdmVNYXRjaGVzKCk7XG4gICAgICAgIHRoaXMucG9pbnRzLmFkZCh7XG4gICAgICAgICAgdHlwZTogXCJtYXRjaFwiLFxuICAgICAgICAgIGNvdW50OiBtYXRjaGVzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmNoZWNrR2FtZU92ZXIoKSkge1xuICAgICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5uZXh0RmlndXJlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlndXJlLnVwZGF0ZShuZXh0RmlndXJlKTtcbiAgICAgIHRoaXMuc2V0UG9pbnRzVG9GaWVsZChuZXh0UG9pbnRzKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmV4dEZpZ3VyZSgpOiB2b2lkIHtcbiAgICB0aGlzLmxldmVsLmluY0ZpZ3VyZXMoKTtcbiAgICB0aGlzLnBvaW50cy5hZGQoeyB0eXBlOiBcIm5leHRcIiB9KTtcblxuICAgIGNvbnN0IG5leHRGaWd1cmUgPSB0aGlzLmZpZ3VyZS5nZXROZXh0KCk7XG4gICAgdGhpcy5maWd1cmUuc2V0TmV4dChuZXh0RmlndXJlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNb2RlbCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGQ6IHRoaXMuZmllbGQuZ2V0RmllbGQoKSxcbiAgICAgIHBvaW50czogdGhpcy5wb2ludHMuZ2V0UG9pbnRzKCksXG4gICAgICBsZXZlbDogdGhpcy5sZXZlbC5nZXRMZXZlbCgpLFxuICAgICAgbmV4dEZpZ3VyZTogdGhpcy5maWd1cmUuZ2V0TmV4dCgpLmZpZWxkLFxuICAgICAgZ2FtZU92ZXI6IHRoaXMuZ2FtZU92ZXJcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0dhbWVPdmVyKCkge1xuICAgIGNvbnN0IHsgc2l6ZSB9ID0gdGhpcy5jb250ZXh0LmZpZWxkO1xuICAgIGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZC5nZXRGaWVsZCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplLndpZHRoOyBpKyspIHtcbiAgICAgIGlmIChmaWVsZFswXVtpXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcImV2ZW50ZW1pdHRlcjNcIjtcbmltcG9ydCBpc01vYmlsZSBmcm9tIFwiaXNtb2JpbGVqc1wiO1xuXG5leHBvcnQgY2xhc3MgVXNlckV2ZW50cyB7XG4gIHB1YmxpYyBldmVudHM6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGlmIChpc01vYmlsZS5hbnkpIHtcbiAgICAgIHRoaXMuaW5pdE1vYmlsZUNvbnRyb2xzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdERlc2t0b3BDb250cm9scygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdE1vYmlsZUNvbnRyb2xzKCkge1xuICAgIGNvbnN0IGNvbnRyb2xzID0gW1xuICAgICAge1xuICAgICAgICBldmVudDogXCJlbnRlclwiLFxuICAgICAgICBjbGFzc05hbWU6IFwibW9iaWxlLXJvdGF0ZVwiLFxuICAgICAgICBjb250ZW50OiBcIiYjMTA4MDdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZXZlbnQ6IFwibGVmdFwiLFxuICAgICAgICBjbGFzc05hbWU6IFwibW9iaWxlLWxlZnRcIixcbiAgICAgICAgY29udGVudDogXCImIzg1OTJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZXZlbnQ6IFwicmlnaHRcIixcbiAgICAgICAgY2xhc3NOYW1lOiBcIm1vYmlsZS1yaWdodFwiLFxuICAgICAgICBjb250ZW50OiBcIiYjODU5NFwiXG4gICAgICB9XG4gICAgXTtcblxuICAgIGNvbnRyb2xzLmZvckVhY2goY29udHJvbCA9PiB7XG4gICAgICBjb25zdCAkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgJGVsLmlubmVySFRNTCA9IGNvbnRyb2wuY29udGVudDtcbiAgICAgICRlbC5jbGFzc0xpc3QuYWRkKGNvbnRyb2wuY2xhc3NOYW1lKTtcbiAgICAgICRlbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoKSA9PiB0aGlzLmV2ZW50cy5lbWl0KGNvbnRyb2wuZXZlbnQpKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoJGVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdERlc2t0b3BDb250cm9scygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoXCJlbnRlclwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgICAgdGhpcy5ldmVudHMuZW1pdChcImxlZnRcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoXCJyaWdodFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpZWxkXCI7XG5pbXBvcnQgeyBDZWxsIH0gZnJvbSBcIi4vY29tcG9uZW50cy9jZWxsXCI7XG5pbXBvcnQgeyBTdGF0cyB9IGZyb20gXCIuL2NvbXBvbmVudHMvc3RhdHNcIjtcbmltcG9ydCB7IEdhbWVPdmVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9nYW1lLW92ZXJcIjtcbmltcG9ydCB7IE5leHRGaWd1cmUgfSBmcm9tIFwiLi9jb21wb25lbnRzL25leHQtZmlndXJlXCI7XG5pbXBvcnQgeyBHYW1lTW9kZWwgfSBmcm9tIFwiLi9tb2RlbC9nYW1lLW1vZGVsXCI7XG5pbXBvcnQgeyBVc2VyRXZlbnRzIH0gZnJvbSBcIi4vdXNlci1ldmVudHNcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIGltcGxlbWVudHMgSUNvbXBvbmVudDxJQ29tcG9uZW50Q29udGV4dD4ge1xuICBwcml2YXRlIGdhbWUgPSBuZXcgR2FtZU1vZGVsKHRoaXMucHJvcHMpO1xuXG4gIHByaXZhdGUgdXNlckV2ZW50cyA9IG5ldyBVc2VyRXZlbnRzKCk7XG5cbiAgcHJpdmF0ZSBmaWVsZCA9IG5ldyBGaWVsZCh7fSwgdGhpcy5wcm9wcyk7XG5cbiAgcHJpdmF0ZSBzdGF0cyA9IG5ldyBTdGF0cyh7IHBvaW50czogMCwgbGV2ZWw6IDAgfSwgdGhpcy5wcm9wcyk7XG5cbiAgcHJpdmF0ZSBuZXh0RmlndXJlID0gbmV3IE5leHRGaWd1cmUoeyBmaWd1cmU6IFtdIH0sIHRoaXMucHJvcHMpO1xuXG4gIHByaXZhdGUgdGltZURlbHRhID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHByb3BzOiBJQ29tcG9uZW50Q29udGV4dCkge1xuICAgIHRoaXMudXNlckV2ZW50cy5ldmVudHMub24oXCJlbnRlclwiLCAoKSA9PiB0aGlzLmdhbWUucm90YXRlKCkpO1xuICAgIHRoaXMudXNlckV2ZW50cy5ldmVudHMub24oXCJsZWZ0XCIsICgpID0+IHRoaXMuZ2FtZS5tb3ZlKHsgeDogLTEgfSkpO1xuICAgIHRoaXMudXNlckV2ZW50cy5ldmVudHMub24oXCJyaWdodFwiLCAoKSA9PiB0aGlzLmdhbWUubW92ZSh7IHg6IDEgfSkpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShwYXJhbXM6IElDb21wb25lbnRQYXJhbXMpIHtcbiAgICBjb25zdCBtb2RlbCA9IHRoaXMuZ2FtZS5nZXRNb2RlbCgpO1xuXG4gICAgdGhpcy50aW1lRGVsdGEgKz0gcGFyYW1zLmR0O1xuXG4gICAgaWYgKHRoaXMudGltZURlbHRhIDwgNDAwIC8gTWF0aC5sb2cxcChtb2RlbC5sZXZlbCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aW1lRGVsdGEgPSAwO1xuICAgIH1cblxuICAgIGlmIChtb2RlbC5nYW1lT3ZlcikgcmV0dXJuO1xuXG4gICAgdGhpcy5nYW1lLm1vdmUoeyB5OiAxIH0pO1xuXG4gICAgdGhpcy5zdGF0cy51cGRhdGUocGFyYW1zLCB7XG4gICAgICBwb2ludHM6IG1vZGVsLnBvaW50cyxcbiAgICAgIGxldmVsOiBtb2RlbC5sZXZlbFxuICAgIH0pO1xuXG4gICAgdGhpcy5uZXh0RmlndXJlLnVwZGF0ZShwYXJhbXMsIHtcbiAgICAgIGZpZ3VyZTogbW9kZWwubmV4dEZpZ3VyZVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcihwYXJhbXM6IElDb21wb25lbnRQYXJhbXMpIHtcbiAgICBjb25zdCBtb2RlbCA9IHRoaXMuZ2FtZS5nZXRNb2RlbCgpO1xuXG4gICAgaWYgKG1vZGVsLmdhbWVPdmVyKSB7XG4gICAgICBjb25zdCBnYW1lT3ZlciA9IG5ldyBHYW1lT3Zlcih7IHBvaW50czogbW9kZWwucG9pbnRzIH0sIHRoaXMucHJvcHMpO1xuXG4gICAgICByZXR1cm4gZ2FtZU92ZXIucmVuZGVyKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJGaWVsZChwYXJhbXMpO1xuICAgIHRoaXMuZmllbGQucmVuZGVyKHBhcmFtcyk7XG4gICAgdGhpcy5zdGF0cy5yZW5kZXIocGFyYW1zKTtcbiAgICB0aGlzLm5leHRGaWd1cmUucmVuZGVyKHBhcmFtcyk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckZpZWxkKHBhcmFtczogSUNvbXBvbmVudFBhcmFtcykge1xuICAgIGNvbnN0IHsgZmllbGQgfSA9IHRoaXMuZ2FtZS5nZXRNb2RlbCgpO1xuXG4gICAgZmllbGQuZm9yRWFjaCgocm93LCB5KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoY2VsbCwgeCkgPT4ge1xuICAgICAgICBpZiAoIWNlbGwpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgQ2VsbCh7IHBvc2l0aW9uOiB7IHgsIHkgfSB9LCB0aGlzLnByb3BzKTtcbiAgICAgICAgY29tcG9uZW50LnJlbmRlcihwYXJhbXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBpc01vYmlsZSBmcm9tIFwiaXNtb2JpbGVqc1wiO1xuaW1wb3J0IHsgTG9vcCB9IGZyb20gXCIuL2xvb3BcIjtcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vZ2FtZS1jb250cm9sbGVyXCI7XG5cbmNvbnN0IFdJRFRIID0gd2luZG93LmlubmVyV2lkdGg7XG5jb25zdCBIRUlHSFQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cbmRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gXCIwXCI7XG5kb2N1bWVudC5ib2R5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbmRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gXCIxMDB2aFwiO1xuZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJibGFja1wiO1xuXG5jYW52YXMud2lkdGggPSBXSURUSDtcbmNhbnZhcy5oZWlnaHQgPSBIRUlHSFQ7XG5jYW52YXMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbmNhbnZhcy5zdHlsZS5tYXJnaW4gPSBcImF1dG9cIjtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuY29uc3QgbG9vcCA9IG5ldyBMb29wKDYwKTtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZUNvbnRyb2xsZXIoe1xuICBjYW52YXM6IHtcbiAgICBzaXplOiB7XG4gICAgICB3aWR0aDogV0lEVEgsXG4gICAgICBoZWlnaHQ6IEhFSUdIVFxuICAgIH1cbiAgfSxcbiAgZmllbGQ6IHtcbiAgICBzaXplOiB7XG4gICAgICB3aWR0aDogMTUsXG4gICAgICBoZWlnaHQ6IDIwXG4gICAgfSxcbiAgICBjb2xvcjogXCIjM2Y0ZjYwXCJcbiAgfSxcbiAgY2VsbDoge1xuICAgIHNpemU6IHtcbiAgICAgIHdpZHRoOiBpc01vYmlsZS5hbnkgPyBXSURUSCAvIDE1IDogMjAsXG4gICAgICBoZWlnaHQ6IGlzTW9iaWxlLmFueSA/IEhFSUdIVCAvIDMwIDogMjBcbiAgICB9LFxuICAgIGNvbG9yOiBcIiM2ZjdmOTBcIlxuICB9XG59KTtcblxubG9vcC5ldmVudHMub24oXCJ1cGRhdGVcIiwgKHsgZHQgfTogeyBkdDogbnVtYmVyIH0pID0+IGdhbWUudXBkYXRlKHsgZHQsIGN0eCB9KSk7XG5cbmxvb3AuZXZlbnRzLm9uKFwicmVuZGVyXCIsICh7IGR0IH06IHsgZHQ6IG51bWJlciB9KSA9PiB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG5cbiAgZ2FtZS5yZW5kZXIoeyBkdCwgY3R4IH0pO1xufSk7XG5cbmxvb3AucnVuKCk7XG4iXSwibmFtZXMiOlsidGhpcyIsInJlcXVpcmUiLCJFdmVudEVtaXR0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUEsQ0FBQyxTQUFTLE1BQU0sRUFBRTtHQUNoQixJQUFJLFdBQVcsR0FBRyxTQUFTO0tBQ3pCLFVBQVUsR0FBRyxPQUFPO0tBQ3BCLFlBQVksR0FBRyxPQUFPO0tBQ3RCLGFBQWEsR0FBRywwQkFBMEI7S0FDMUMsY0FBYyxHQUFHLFVBQVU7S0FDM0IsWUFBWSxHQUFHLDRCQUE0QjtLQUMzQyxhQUFhLEdBQUcsb0NBQW9DO0tBQ3BELGFBQWEsR0FBRyxnQkFBZ0I7S0FDaEMsY0FBYyxHQUFHLHVCQUF1QjtLQUN4QyxnQkFBZ0IsR0FBRyxhQUFhO0tBQ2hDLG1CQUFtQixHQUFHLE9BQU87S0FDN0IsV0FBVyxHQUFHLGFBQWE7S0FDM0IsWUFBWSxHQUFHLCtCQUErQjtLQUM5QyxhQUFhLEdBQUcseUJBQXlCLENBQUM7O0dBRTVDLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUU7S0FDL0IsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMs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QyxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBT0EsZUFBTyxFQUFFLFVBQVUsRUFBRUEsZUFBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUN4MUI7Q0FFQSxJQUFJLFlBQVksR0FBRyxZQUFZLEVBQUUsU0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFB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RUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUM7T0FDdEUsS0FBSyxDQUFDLEVBQUUsT0FBTyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQztPQUMxRSxLQUFLLENBQUMsRUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQztNQUMvRTs7S0FFRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO09BQ2xELElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzVCOztLQUVELFNBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0MsTUFBTTtLQUNMLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNO1NBQ3pCLENBQUMsQ0FBQzs7S0FFTixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtPQUMzQixJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7O09BRXBGLFFBQVEsR0FBRztTQUNULEtBQUssQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU07U0FDMUQsS0FBSyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU07U0FDOUQsS0FBSyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNO1NBQ2xFLEtBQUssQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU07U0FDdEU7V0FDRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7YUFDN0QsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUI7O1dBRUQsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRDtNQUNGO0lBQ0Y7O0dBRUQsT0FBTyxJQUFJLENBQUM7RUFDYixDQUFDOzs7Ozs7Ozs7OztDQVdGLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFB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
