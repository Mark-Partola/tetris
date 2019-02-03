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
	//# sourceMappingURL=figure-model.js.map

	class PointsModel {
	    constructor() {
	        this.points = 0;
	    }
	    add(params) {
	        if (params.type === "match") {
	            const values = Array.from({ length: params.count }, (_, idx) => (idx + 1) * 10);
	            this.points += values.reduce((acc, curr) => acc + curr, 0);
	        }
	        else {
	            this.points += 1;
	        }
	    }
	    getPoints() {
	        return this.points;
	    }
	}

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
	            },
	            {
	                event: "down",
	                className: "mobile-down",
	                content: "&#8595"
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
	            if (e.keyCode === 40) {
	                this.events.emit("down");
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
	        this.userEvents.events.on("down", () => this.game.move({ y: 1 }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvaXNtb2JpbGVqcy9zcmMvaXNNb2JpbGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQHZhYWxlbnRpbi9nYW1lLWxvb3AvZGlzdC9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9ldmVudGVtaXR0ZXIzL2luZGV4LmpzIiwiLi4vc3JjL2xvb3AudHMiLCIuLi9zcmMvY29tcG9uZW50cy9maWVsZC50cyIsIi4uL3NyYy9jb21wb25lbnRzL2NlbGwudHMiLCIuLi9zcmMvY29tcG9uZW50cy9zdGF0cy50cyIsIi4uL3NyYy9jb21wb25lbnRzL2dhbWUtb3Zlci50cyIsIi4uL3NyYy9jb21wb25lbnRzL25leHQtZmlndXJlLnRzIiwiLi4vc3JjL21vZGVsL2ZpZWxkLW1vZGVsLnRzIiwiLi4vc3JjL21vZGVsL2ZpZ3VyZS1tb2RlbC50cyIsIi4uL3NyYy9tb2RlbC9wb2ludHMtbW9kZWwudHMiLCIuLi9zcmMvbW9kZWwvbGV2ZWwtbW9kZWwudHMiLCIuLi9zcmMvbW9kZWwvZ2FtZS1tb2RlbC50cyIsIi4uL3NyYy91c2VyLWV2ZW50cy50cyIsIi4uL3NyYy9nYW1lLWNvbnRyb2xsZXIudHMiLCIuLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihnbG9iYWwpIHtcbiAgdmFyIGFwcGxlX3Bob25lID0gL2lQaG9uZS9pLFxuICAgIGFwcGxlX2lwb2QgPSAvaVBvZC9pLFxuICAgIGFwcGxlX3RhYmxldCA9IC9pUGFkL2ksXG4gICAgYW5kcm9pZF9waG9uZSA9IC9cXGJBbmRyb2lkKD86LispTW9iaWxlXFxiL2ksIC8vIE1hdGNoICdBbmRyb2lkJyBBTkQgJ01vYmlsZSdcbiAgICBhbmRyb2lkX3RhYmxldCA9IC9BbmRyb2lkL2ksXG4gICAgYW1hem9uX3Bob25lID0gL1xcYkFuZHJvaWQoPzouKylTRDQ5MzBVUlxcYi9pLFxuICAgIGFtYXpvbl90YWJsZXQgPSAvXFxiQW5kcm9pZCg/Oi4rKSg/OktGW0EtWl17Miw0fSlcXGIvaSxcbiAgICB3aW5kb3dzX3Bob25lID0gL1dpbmRvd3MgUGhvbmUvaSxcbiAgICB3aW5kb3dzX3RhYmxldCA9IC9cXGJXaW5kb3dzKD86LispQVJNXFxiL2ksIC8vIE1hdGNoICdXaW5kb3dzJyBBTkQgJ0FSTSdcbiAgICBvdGhlcl9ibGFja2JlcnJ5ID0gL0JsYWNrQmVycnkvaSxcbiAgICBvdGhlcl9ibGFja2JlcnJ5XzEwID0gL0JCMTAvaSxcbiAgICBvdGhlcl9vcGVyYSA9IC9PcGVyYSBNaW5pL2ksXG4gICAgb3RoZXJfY2hyb21lID0gL1xcYihDcmlPU3xDaHJvbWUpKD86LispTW9iaWxlL2ksXG4gICAgb3RoZXJfZmlyZWZveCA9IC9cXE1vYmlsZSg/Oi4rKUZpcmVmb3hcXGIvaTsgLy8gTWF0Y2ggJ01vYmlsZScgQU5EICdGaXJlZm94J1xuXG4gIGZ1bmN0aW9uIG1hdGNoKHJlZ2V4LCB1c2VyQWdlbnQpIHtcbiAgICByZXR1cm4gcmVnZXgudGVzdCh1c2VyQWdlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNNb2JpbGUodXNlckFnZW50KSB7XG4gICAgdmFyIHVhID1cbiAgICAgIHVzZXJBZ2VudCB8fFxuICAgICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnID8gbmF2aWdhdG9yLnVzZXJBZ2VudCA6ICcnKTtcblxuICAgIC8vIEZhY2Vib29rIG1vYmlsZSBhcHAncyBpbnRlZ3JhdGVkIGJyb3dzZXIgYWRkcyBhIGJ1bmNoIG9mIHN0cmluZ3MgdGhhdFxuICAgIC8vIG1hdGNoIGV2ZXJ5dGhpbmcuIFN0cmlwIGl0IG91dCBpZiBpdCBleGlzdHMuXG4gICAgdmFyIHRtcCA9IHVhLnNwbGl0KCdbRkJBTicpO1xuICAgIGlmICh0eXBlb2YgdG1wWzFdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdWEgPSB0bXBbMF07XG4gICAgfVxuXG4gICAgLy8gVHdpdHRlciBtb2JpbGUgYXBwJ3MgaW50ZWdyYXRlZCBicm93c2VyIG9uIGlQYWQgYWRkcyBhIFwiVHdpdHRlciBmb3JcbiAgICAvLyBpUGhvbmVcIiBzdHJpbmcuIFNhbWUgcHJvYmFibHkgaGFwcGVucyBvbiBvdGhlciB0YWJsZXQgcGxhdGZvcm1zLlxuICAgIC8vIFRoaXMgd2lsbCBjb25mdXNlIGRldGVjdGlvbiBzbyBzdHJpcCBpdCBvdXQgaWYgaXQgZXhpc3RzLlxuICAgIHRtcCA9IHVhLnNwbGl0KCdUd2l0dGVyJyk7XG4gICAgaWYgKHR5cGVvZiB0bXBbMV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB1YSA9IHRtcFswXTtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgYXBwbGU6IHtcbiAgICAgICAgcGhvbmU6IG1hdGNoKGFwcGxlX3Bob25lLCB1YSkgJiYgIW1hdGNoKHdpbmRvd3NfcGhvbmUsIHVhKSxcbiAgICAgICAgaXBvZDogbWF0Y2goYXBwbGVfaXBvZCwgdWEpLFxuICAgICAgICB0YWJsZXQ6XG4gICAgICAgICAgIW1hdGNoKGFwcGxlX3Bob25lLCB1YSkgJiZcbiAgICAgICAgICBtYXRjaChhcHBsZV90YWJsZXQsIHVhKSAmJlxuICAgICAgICAgICFtYXRjaCh3aW5kb3dzX3Bob25lLCB1YSksXG4gICAgICAgIGRldmljZTpcbiAgICAgICAgICAobWF0Y2goYXBwbGVfcGhvbmUsIHVhKSB8fFxuICAgICAgICAgICAgbWF0Y2goYXBwbGVfaXBvZCwgdWEpIHx8XG4gICAgICAgICAgICBtYXRjaChhcHBsZV90YWJsZXQsIHVhKSkgJiZcbiAgICAgICAgICAhbWF0Y2god2luZG93c19waG9uZSwgdWEpXG4gICAgICB9LFxuICAgICAgYW1hem9uOiB7XG4gICAgICAgIHBob25lOiBtYXRjaChhbWF6b25fcGhvbmUsIHVhKSxcbiAgICAgICAgdGFibGV0OiAhbWF0Y2goYW1hem9uX3Bob25lLCB1YSkgJiYgbWF0Y2goYW1hem9uX3RhYmxldCwgdWEpLFxuICAgICAgICBkZXZpY2U6IG1hdGNoKGFtYXpvbl9waG9uZSwgdWEpIHx8IG1hdGNoKGFtYXpvbl90YWJsZXQsIHVhKVxuICAgICAgfSxcbiAgICAgIGFuZHJvaWQ6IHtcbiAgICAgICAgcGhvbmU6XG4gICAgICAgICAgKCFtYXRjaCh3aW5kb3dzX3Bob25lLCB1YSkgJiYgbWF0Y2goYW1hem9uX3Bob25lLCB1YSkpIHx8XG4gICAgICAgICAgKCFtYXRjaCh3aW5kb3dzX3Bob25lLCB1YSkgJiYgbWF0Y2goYW5kcm9pZF9waG9uZSwgdWEpKSxcbiAgICAgICAgdGFibGV0OlxuICAgICAgICAgICFtYXRjaCh3aW5kb3dzX3Bob25lLCB1YSkgJiZcbiAgICAgICAgICAhbWF0Y2goYW1hem9uX3Bob25lLCB1YSkgJiZcbiAgICAgICAgICAhbWF0Y2goYW5kcm9pZF9waG9uZSwgdWEpICYmXG4gICAgICAgICAgKG1hdGNoKGFtYXpvbl90YWJsZXQsIHVhKSB8fCBtYXRjaChhbmRyb2lkX3RhYmxldCwgdWEpKSxcbiAgICAgICAgZGV2aWNlOlxuICAgICAgICAgICghbWF0Y2god2luZG93c19waG9uZSwgdWEpICYmXG4gICAgICAgICAgICAobWF0Y2goYW1hem9uX3Bob25lLCB1YSkgfHxcbiAgICAgICAgICAgICAgbWF0Y2goYW1hem9uX3RhYmxldCwgdWEpIHx8XG4gICAgICAgICAgICAgIG1hdGNoKGFuZHJvaWRfcGhvbmUsIHVhKSB8fFxuICAgICAgICAgICAgICBtYXRjaChhbmRyb2lkX3RhYmxldCwgdWEpKSkgfHxcbiAgICAgICAgICBtYXRjaCgvXFxib2todHRwXFxiL2ksIHVhKVxuICAgICAgfSxcbiAgICAgIHdpbmRvd3M6IHtcbiAgICAgICAgcGhvbmU6IG1hdGNoKHdpbmRvd3NfcGhvbmUsIHVhKSxcbiAgICAgICAgdGFibGV0OiBtYXRjaCh3aW5kb3dzX3RhYmxldCwgdWEpLFxuICAgICAgICBkZXZpY2U6IG1hdGNoKHdpbmRvd3NfcGhvbmUsIHVhKSB8fCBtYXRjaCh3aW5kb3dzX3RhYmxldCwgdWEpXG4gICAgICB9LFxuICAgICAgb3RoZXI6IHtcbiAgICAgICAgYmxhY2tiZXJyeTogbWF0Y2gob3RoZXJfYmxhY2tiZXJyeSwgdWEpLFxuICAgICAgICBibGFja2JlcnJ5MTA6IG1hdGNoKG90aGVyX2JsYWNrYmVycnlfMTAsIHVhKSxcbiAgICAgICAgb3BlcmE6IG1hdGNoKG90aGVyX29wZXJhLCB1YSksXG4gICAgICAgIGZpcmVmb3g6IG1hdGNoKG90aGVyX2ZpcmVmb3gsIHVhKSxcbiAgICAgICAgY2hyb21lOiBtYXRjaChvdGhlcl9jaHJvbWUsIHVhKSxcbiAgICAgICAgZGV2aWNlOlxuICAgICAgICAgIG1hdGNoKG90aGVyX2JsYWNrYmVycnksIHVhKSB8fFxuICAgICAgICAgIG1hdGNoKG90aGVyX2JsYWNrYmVycnlfMTAsIHVhKSB8fFxuICAgICAgICAgIG1hdGNoKG90aGVyX29wZXJhLCB1YSkgfHxcbiAgICAgICAgICBtYXRjaChvdGhlcl9maXJlZm94LCB1YSkgfHxcbiAgICAgICAgICBtYXRjaChvdGhlcl9jaHJvbWUsIHVhKVxuICAgICAgfVxuICAgIH07XG4gICAgKHJlc3VsdC5hbnkgPVxuICAgICAgcmVzdWx0LmFwcGxlLmRldmljZSB8fFxuICAgICAgcmVzdWx0LmFuZHJvaWQuZGV2aWNlIHx8XG4gICAgICByZXN1bHQud2luZG93cy5kZXZpY2UgfHxcbiAgICAgIHJlc3VsdC5vdGhlci5kZXZpY2UpLFxuICAgICAgLy8gZXhjbHVkZXMgJ290aGVyJyBkZXZpY2VzIGFuZCBpcG9kcywgdGFyZ2V0aW5nIHRvdWNoc2NyZWVuIHBob25lc1xuICAgICAgKHJlc3VsdC5waG9uZSA9XG4gICAgICAgIHJlc3VsdC5hcHBsZS5waG9uZSB8fCByZXN1bHQuYW5kcm9pZC5waG9uZSB8fCByZXN1bHQud2luZG93cy5waG9uZSksXG4gICAgICAocmVzdWx0LnRhYmxldCA9XG4gICAgICAgIHJlc3VsdC5hcHBsZS50YWJsZXQgfHwgcmVzdWx0LmFuZHJvaWQudGFibGV0IHx8IHJlc3VsdC53aW5kb3dzLnRhYmxldCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKFxuICAgIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbW9kdWxlLmV4cG9ydHMgJiZcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuICApIHtcbiAgICAvLyBOb2RlLmpzXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBpc01vYmlsZTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIG1vZHVsZS5leHBvcnRzICYmXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgKSB7XG4gICAgLy8gQnJvd3NlcmlmeVxuICAgIG1vZHVsZS5leHBvcnRzID0gaXNNb2JpbGUoKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoW10sIChnbG9iYWwuaXNNb2JpbGUgPSBpc01vYmlsZSgpKSk7XG4gIH0gZWxzZSB7XG4gICAgZ2xvYmFsLmlzTW9iaWxlID0gaXNNb2JpbGUoKTtcbiAgfVxufSkodGhpcyk7XG4iLCIoZnVuY3Rpb24oZil7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZ0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9ZigpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtdLGYpfWVsc2V7dmFyIGc7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe2c9d2luZG93fWVsc2UgaWYodHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCIpe2c9Z2xvYmFsfWVsc2UgaWYodHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiKXtnPXNlbGZ9ZWxzZXtnPXRoaXN9Zy52YWFsZW50aW5nYW1lTG9vcCA9IGYoKX19KShmdW5jdGlvbigpe3ZhciBkZWZpbmUsbW9kdWxlLGV4cG9ydHM7cmV0dXJuIChmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBAY2xhc3MgRXZlbnREaXNwYXRjaGVyXG4gKi9cblxudmFyIEV2ZW50RGlzcGF0Y2hlciA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RzIEV2ZW50RGlzcGF0Y2hlclxuICAgKi9cblxuICBmdW5jdGlvbiBFdmVudERpc3BhdGNoZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50RGlzcGF0Y2hlcik7XG5cbiAgICB0aGlzLnRyaWdnZXIgPSB0aGlzLmRpc3BhdGNoRXZlbnQ7XG4gICAgdGhpcy5vbiA9IHRoaXMuYWRkRXZlbnRMaXN0ZW5lcjtcbiAgICB0aGlzLm9mZiA9IHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcblxuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZGlzcGF0Y2hFdmVudFxuICAgKiBAcHVibGljXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAqIEBwYXJhbSB7YW55W119IGFyZ3NcbiAgICogQHJldHVybnMge3RoaXN9XG4gICAqL1xuXG4gIF9jcmVhdGVDbGFzcyhFdmVudERpc3BhdGNoZXIsIFt7XG4gICAga2V5OiAnZGlzcGF0Y2hFdmVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQodHlwZSkge1xuICAgICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbdHlwZV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLl9saXN0ZW5lcnNbdHlwZV1bU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIGxpc3RlbmVyID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgICBsaXN0ZW5lci5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGRpc3BhdGNoRXZlbnRcbiAgICAgKlxuICAgICAqIEBtZXRob2QgdHJpZ2dlclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkRXZlbnRMaXN0ZW5lcicsXG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIGFkZEV2ZW50TGlzdGVuZXJcbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0geyhhbnkpID0+IGFueX0gY2JcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYikge1xuICAgICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbdHlwZV0pIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzW3R5cGVdID0gW107XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9saXN0ZW5lcnNbdHlwZV0uaW5kZXhPZihjYikgIT09IC0xKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhblxcJ3QgYWRkIHRoZSBzYW1lIGxpc3RlbmVyIHRvIHRoZSBzYW1lIGV2ZW50IG1vcmUgdGhhbiBvbmNlJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2xpc3RlbmVyc1t0eXBlXS5wdXNoKGNiKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGFkZEV2ZW50TGlzdGVuZXJcbiAgICAgKlxuICAgICAqIEBtZXRob2Qgb25cbiAgICAgKiBAcHVibGljXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZUV2ZW50TGlzdGVuZXInLFxuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCByZW1vdmVFdmVudExpc3RlbmVyXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogQHBhcmFtIHsoYW55KSA9PiBhbnl9IGNiXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2IpIHtcbiAgICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW3R5cGVdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGkgPSB0aGlzLl9saXN0ZW5lcnNbdHlwZV0uaW5kZXhPZihjYik7XG5cbiAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnNbdHlwZV0uc3BsaWNlKGksIDEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICAgICAqXG4gICAgICogQG1ldGhvZCBvZmZcbiAgICAgKiBAcHVibGljXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2Rpc3Bvc2UnLFxuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCBkaXNwb3NlXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzID0gbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXZlbnREaXNwYXRjaGVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBFdmVudERpc3BhdGNoZXI7XG5cbn0se31dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikgeyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7IH0gfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH07XG5cbnZhciBfZXZlbnREaXNwYXRjaGVyID0gcmVxdWlyZSgnQHZhYWxlbnRpbi9ldmVudC1kaXNwYXRjaGVyJyk7XG5cbnZhciBfZXZlbnREaXNwYXRjaGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2ZW50RGlzcGF0Y2hlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBAY2xhc3MgR2FtZUxvb3BcbiAqL1xuXG52YXIgR2FtZUxvb3AgPSBmdW5jdGlvbiAoX0V2ZW50RGlzcGF0Y2hlcikge1xuICBfaW5oZXJpdHMoR2FtZUxvb3AsIF9FdmVudERpc3BhdGNoZXIpO1xuXG4gIC8qKlxuICAgKiBAY29uc3RydWN0cyBHYW1lTG9vcFxuICAgKiBAcGFyYW0ge2Zsb2F0fSBbZnBzID0gNjBdXG4gICAqIEBwYXJhbSB7ZmxvYXR9IFtzcGVlZCA9IDFdXG4gICAqL1xuXG4gIGZ1bmN0aW9uIEdhbWVMb29wKCkge1xuICAgIHZhciBmcHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyA2MCA6IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgc3BlZWQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAxIDogYXJndW1lbnRzWzFdO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdhbWVMb29wKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihHYW1lTG9vcCkuY2FsbCh0aGlzKSk7XG5cbiAgICBfdGhpcy5fdGltZVN0ZXAgPSAxMDAwIC8gZnBzICogc3BlZWQ7XG4gICAgX3RoaXMuX3ByZXZUaW1lID0gbnVsbDtcbiAgICBfdGhpcy5fbGFnVGltZSA9IDA7XG5cbiAgICBfdGhpcy5fZnJhbWUgPSBfdGhpcy5mcmFtZS5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5fZnJhbWVJZCA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZ2V0VGltZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmV0dXJucyB7ZmxvYXR9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEdhbWVMb29wLCBbe1xuICAgIGtleTogJ2dldFRpbWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUaW1lKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlICYmIHBlcmZvcm1hbmNlLm5vdyA/IHBlcmZvcm1hbmNlLm5vdygpIDogRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIGZyYW1lXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZnJhbWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmcmFtZSgpIHtcbiAgICAgIHZhciBjdXJUaW1lID0gdGhpcy5nZXRUaW1lKCk7XG4gICAgICB2YXIgZHQgPSBNYXRoLm1pbigxMDAwLCBjdXJUaW1lIC0gdGhpcy5fcHJldlRpbWUpO1xuICAgICAgdGhpcy5fcHJldlRpbWUgPSBjdXJUaW1lO1xuICAgICAgdGhpcy5fbGFnVGltZSArPSBkdDtcblxuICAgICAgd2hpbGUgKHRoaXMuX2xhZ1RpbWUgPiB0aGlzLl90aW1lU3RlcCkge1xuICAgICAgICB0aGlzLl9sYWdUaW1lIC09IHRoaXMuX3RpbWVTdGVwO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3VwZGF0ZScsIHRoaXMuX3RpbWVTdGVwKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdyZW5kZXInLCBkdCk7XG5cbiAgICAgIHRoaXMuX2ZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fZnJhbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZXRob2Qgc3RhcnRcbiAgICAgKiBAcHVibGljXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3N0YXJ0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICBpZiAodGhpcy5fcHJldlRpbWUgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdpbml0Jyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnc3RhcnQnKTtcbiAgICAgIHRoaXMuX3ByZXZUaW1lID0gdGhpcy5nZXRUaW1lKCk7XG5cbiAgICAgIHRoaXMuZnJhbWUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIHN0b3BcbiAgICAgKiBAcHVibGljXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3N0b3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdzdG9wJyk7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9mcmFtZUlkKTtcbiAgICAgIHRoaXMuX2ZyYW1lSWQgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgZGlzcG9zZVxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZGlzcG9zZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKEdhbWVMb29wLnByb3RvdHlwZSksICdkaXNwb3NlJywgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR2FtZUxvb3A7XG59KF9ldmVudERpc3BhdGNoZXIyLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBHYW1lTG9vcDtcblxufSx7XCJAdmFhbGVudGluL2V2ZW50LWRpc3BhdGNoZXJcIjoxfV19LHt9LFsyXSkoMilcbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgLCBwcmVmaXggPSAnfic7XG5cbi8qKlxuICogQ29uc3RydWN0b3IgdG8gY3JlYXRlIGEgc3RvcmFnZSBmb3Igb3VyIGBFRWAgb2JqZWN0cy5cbiAqIEFuIGBFdmVudHNgIGluc3RhbmNlIGlzIGEgcGxhaW4gb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgYXJlIGV2ZW50IG5hbWVzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRXZlbnRzKCkge31cblxuLy9cbi8vIFdlIHRyeSB0byBub3QgaW5oZXJpdCBmcm9tIGBPYmplY3QucHJvdG90eXBlYC4gSW4gc29tZSBlbmdpbmVzIGNyZWF0aW5nIGFuXG4vLyBpbnN0YW5jZSBpbiB0aGlzIHdheSBpcyBmYXN0ZXIgdGhhbiBjYWxsaW5nIGBPYmplY3QuY3JlYXRlKG51bGwpYCBkaXJlY3RseS5cbi8vIElmIGBPYmplY3QuY3JlYXRlKG51bGwpYCBpcyBub3Qgc3VwcG9ydGVkIHdlIHByZWZpeCB0aGUgZXZlbnQgbmFtZXMgd2l0aCBhXG4vLyBjaGFyYWN0ZXIgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGJ1aWx0LWluIG9iamVjdCBwcm9wZXJ0aWVzIGFyZSBub3Rcbi8vIG92ZXJyaWRkZW4gb3IgdXNlZCBhcyBhbiBhdHRhY2sgdmVjdG9yLlxuLy9cbmlmIChPYmplY3QuY3JlYXRlKSB7XG4gIEV2ZW50cy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIC8vXG4gIC8vIFRoaXMgaGFjayBpcyBuZWVkZWQgYmVjYXVzZSB0aGUgYF9fcHJvdG9fX2AgcHJvcGVydHkgaXMgc3RpbGwgaW5oZXJpdGVkIGluXG4gIC8vIHNvbWUgb2xkIGJyb3dzZXJzIGxpa2UgQW5kcm9pZCA0LCBpUGhvbmUgNS4xLCBPcGVyYSAxMSBhbmQgU2FmYXJpIDUuXG4gIC8vXG4gIGlmICghbmV3IEV2ZW50cygpLl9fcHJvdG9fXykgcHJlZml4ID0gZmFsc2U7XG59XG5cbi8qKlxuICogUmVwcmVzZW50YXRpb24gb2YgYSBzaW5nbGUgZXZlbnQgbGlzdGVuZXIuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29uY2U9ZmFsc2VdIFNwZWNpZnkgaWYgdGhlIGxpc3RlbmVyIGlzIGEgb25lLXRpbWUgbGlzdGVuZXIuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEVFKGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHRoaXMuZm4gPSBmbjtcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5vbmNlID0gb25jZSB8fCBmYWxzZTtcbn1cblxuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gZW1pdHRlciBSZWZlcmVuY2UgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGluc3RhbmNlLlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBTcGVjaWZ5IGlmIHRoZSBsaXN0ZW5lciBpcyBhIG9uZS10aW1lIGxpc3RlbmVyLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZExpc3RlbmVyKGVtaXR0ZXIsIGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGxpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVyID0gbmV3IEVFKGZuLCBjb250ZXh0IHx8IGVtaXR0ZXIsIG9uY2UpXG4gICAgLCBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghZW1pdHRlci5fZXZlbnRzW2V2dF0pIGVtaXR0ZXIuX2V2ZW50c1tldnRdID0gbGlzdGVuZXIsIGVtaXR0ZXIuX2V2ZW50c0NvdW50Kys7XG4gIGVsc2UgaWYgKCFlbWl0dGVyLl9ldmVudHNbZXZ0XS5mbikgZW1pdHRlci5fZXZlbnRzW2V2dF0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2UgZW1pdHRlci5fZXZlbnRzW2V2dF0gPSBbZW1pdHRlci5fZXZlbnRzW2V2dF0sIGxpc3RlbmVyXTtcblxuICByZXR1cm4gZW1pdHRlcjtcbn1cblxuLyoqXG4gKiBDbGVhciBldmVudCBieSBuYW1lLlxuICpcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlbWl0dGVyIFJlZmVyZW5jZSB0byB0aGUgYEV2ZW50RW1pdHRlcmAgaW5zdGFuY2UuXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZ0IFRoZSBFdmVudCBuYW1lLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2xlYXJFdmVudChlbWl0dGVyLCBldnQpIHtcbiAgaWYgKC0tZW1pdHRlci5fZXZlbnRzQ291bnQgPT09IDApIGVtaXR0ZXIuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgZWxzZSBkZWxldGUgZW1pdHRlci5fZXZlbnRzW2V2dF07XG59XG5cbi8qKlxuICogTWluaW1hbCBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UgdGhhdCBpcyBtb2xkZWQgYWdhaW5zdCB0aGUgTm9kZS5qc1xuICogYEV2ZW50RW1pdHRlcmAgaW50ZXJmYWNlLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xufVxuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBsaXN0aW5nIHRoZSBldmVudHMgZm9yIHdoaWNoIHRoZSBlbWl0dGVyIGhhcyByZWdpc3RlcmVkXG4gKiBsaXN0ZW5lcnMuXG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICB2YXIgbmFtZXMgPSBbXVxuICAgICwgZXZlbnRzXG4gICAgLCBuYW1lO1xuXG4gIGlmICh0aGlzLl9ldmVudHNDb3VudCA9PT0gMCkgcmV0dXJuIG5hbWVzO1xuXG4gIGZvciAobmFtZSBpbiAoZXZlbnRzID0gdGhpcy5fZXZlbnRzKSkge1xuICAgIGlmIChoYXMuY2FsbChldmVudHMsIG5hbWUpKSBuYW1lcy5wdXNoKHByZWZpeCA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lKTtcbiAgfVxuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgcmV0dXJuIG5hbWVzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGV2ZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIG5hbWVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gVGhlIHJlZ2lzdGVyZWQgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudCkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudFxuICAgICwgaGFuZGxlcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoIWhhbmRsZXJzKSByZXR1cm4gW107XG4gIGlmIChoYW5kbGVycy5mbikgcmV0dXJuIFtoYW5kbGVycy5mbl07XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGgsIGVlID0gbmV3IEFycmF5KGwpOyBpIDwgbDsgaSsrKSB7XG4gICAgZWVbaV0gPSBoYW5kbGVyc1tpXS5mbjtcbiAgfVxuXG4gIHJldHVybiBlZTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBudW1iZXIgb2YgbGlzdGVuZXJzIGxpc3RlbmluZyB0byBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBudW1iZXIgb2YgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbiBsaXN0ZW5lckNvdW50KGV2ZW50KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoIWxpc3RlbmVycykgcmV0dXJuIDA7XG4gIGlmIChsaXN0ZW5lcnMuZm4pIHJldHVybiAxO1xuICByZXR1cm4gbGlzdGVuZXJzLmxlbmd0aDtcbn07XG5cbi8qKlxuICogQ2FsbHMgZWFjaCBvZiB0aGUgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgZXZlbnQgaGFkIGxpc3RlbmVycywgZWxzZSBgZmFsc2VgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50LCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XVxuICAgICwgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgYXJnc1xuICAgICwgaTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKGxpc3RlbmVycy5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnMuZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgY2FzZSAxOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQpLCB0cnVlO1xuICAgICAgY2FzZSAyOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExKSwgdHJ1ZTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIpLCB0cnVlO1xuICAgICAgY2FzZSA0OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMpLCB0cnVlO1xuICAgICAgY2FzZSA1OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgNjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCwgYTUpLCB0cnVlO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm4uYXBwbHkobGlzdGVuZXJzLmNvbnRleHQsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoXG4gICAgICAsIGo7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChsaXN0ZW5lcnNbaV0ub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzW2ldLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgICBjYXNlIDE6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0KTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMik7IGJyZWFrO1xuICAgICAgICBjYXNlIDQ6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIsIGEzKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFhcmdzKSBmb3IgKGogPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgYXJnc1tqIC0gMV0gPSBhcmd1bWVudHNbal07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGlzdGVuZXJzW2ldLmZuLmFwcGx5KGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQWRkIGEgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbihldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGFkZExpc3RlbmVyKHRoaXMsIGV2ZW50LCBmbiwgY29udGV4dCwgZmFsc2UpO1xufTtcblxuLyoqXG4gKiBBZGQgYSBvbmUtdGltZSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZShldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGFkZExpc3RlbmVyKHRoaXMsIGV2ZW50LCBmbiwgY29udGV4dCwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgbGlzdGVuZXJzIG9mIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IG1hdGNoIHRoaXMgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IGhhdmUgdGhpcyBjb250ZXh0LlxuICogQHBhcmFtIHtCb29sZWFufSBvbmNlIE9ubHkgcmVtb3ZlIG9uZS10aW1lIGxpc3RlbmVycy5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gdGhpcztcbiAgaWYgKCFmbikge1xuICAgIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKFxuICAgICAgbGlzdGVuZXJzLmZuID09PSBmbiAmJlxuICAgICAgKCFvbmNlIHx8IGxpc3RlbmVycy5vbmNlKSAmJlxuICAgICAgKCFjb250ZXh0IHx8IGxpc3RlbmVycy5jb250ZXh0ID09PSBjb250ZXh0KVxuICAgICkge1xuICAgICAgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMCwgZXZlbnRzID0gW10sIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBsaXN0ZW5lcnNbaV0uZm4gIT09IGZuIHx8XG4gICAgICAgIChvbmNlICYmICFsaXN0ZW5lcnNbaV0ub25jZSkgfHxcbiAgICAgICAgKGNvbnRleHQgJiYgbGlzdGVuZXJzW2ldLmNvbnRleHQgIT09IGNvbnRleHQpXG4gICAgICApIHtcbiAgICAgICAgZXZlbnRzLnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIFJlc2V0IHRoZSBhcnJheSwgb3IgcmVtb3ZlIGl0IGNvbXBsZXRlbHkgaWYgd2UgaGF2ZSBubyBtb3JlIGxpc3RlbmVycy5cbiAgICAvL1xuICAgIGlmIChldmVudHMubGVuZ3RoKSB0aGlzLl9ldmVudHNbZXZ0XSA9IGV2ZW50cy5sZW5ndGggPT09IDEgPyBldmVudHNbMF0gOiBldmVudHM7XG4gICAgZWxzZSBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMsIG9yIHRob3NlIG9mIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IFtldmVudF0gVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50KSB7XG4gIHZhciBldnQ7XG5cbiAgaWYgKGV2ZW50KSB7XG4gICAgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcbiAgICBpZiAodGhpcy5fZXZlbnRzW2V2dF0pIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vL1xuLy8gQWxpYXMgbWV0aG9kcyBuYW1lcyBiZWNhdXNlIHBlb3BsZSByb2xsIGxpa2UgdGhhdC5cbi8vXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgcHJlZml4LlxuLy9cbkV2ZW50RW1pdHRlci5wcmVmaXhlZCA9IHByZWZpeDtcblxuLy9cbi8vIEFsbG93IGBFdmVudEVtaXR0ZXJgIHRvIGJlIGltcG9ydGVkIGFzIG1vZHVsZSBuYW1lc3BhY2UuXG4vL1xuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgbW9kdWxlLlxuLy9cbmlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG1vZHVsZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbn1cbiIsImltcG9ydCBHYW1lTG9vcCBmcm9tIFwiQHZhYWxlbnRpbi9nYW1lLWxvb3BcIjtcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcImV2ZW50ZW1pdHRlcjNcIjtcblxuZXhwb3J0IGNsYXNzIExvb3Age1xuICBwdWJsaWMgcmVhZG9ubHkgZXZlbnRzOiBhbnk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBsb29wOiBHYW1lTG9vcDtcblxuICBjb25zdHJ1Y3RvcihmcmFtZXM6IG51bWJlcikge1xuICAgIHRoaXMubG9vcCA9IG5ldyBHYW1lTG9vcChmcmFtZXMpO1xuXG4gICAgdGhpcy5ldmVudHMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBydW4oKSB7XG4gICAgdGhpcy5sb29wLnN0YXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgdGhpcy5sb29wLm9uKFwiaW5pdFwiLCAoKSA9PiB0aGlzLmV2ZW50cy5lbWl0KFwiaW5pdFwiKSk7XG5cbiAgICB0aGlzLmxvb3Aub24oXCJ1cGRhdGVcIiwgKGR0OiBudW1iZXIpID0+IHRoaXMuZXZlbnRzLmVtaXQoXCJ1cGRhdGVcIiwgeyBkdCB9KSk7XG5cbiAgICB0aGlzLmxvb3Aub24oXCJyZW5kZXJcIiwgKGR0OiBudW1iZXIpID0+IHRoaXMuZXZlbnRzLmVtaXQoXCJyZW5kZXJcIiwgeyBkdCB9KSk7XG4gIH1cbn1cbiIsImludGVyZmFjZSBJRmllbGRQcm9wcyB7XG4gIG9mZnNldD86IElQb2ludDtcbiAgY2VsbFNpemU/OiBJRGltZW5zaW9ucztcbiAgZmllbGRTaXplPzogSURpbWVuc2lvbnM7XG59XG5cbmV4cG9ydCBjbGFzcyBGaWVsZCBpbXBsZW1lbnRzIElDb21wb25lbnQ8SUZpZWxkUHJvcHM+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm9wczogSUZpZWxkUHJvcHMsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dFxuICApIHt9XG5cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHt9XG5cbiAgcHVibGljIHJlbmRlcih7IGN0eCB9OiBJQ29tcG9uZW50UGFyYW1zKTogdm9pZCB7XG4gICAgY29uc3QgeyBmaWVsZCwgY2VsbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IHsgb2Zmc2V0ID0geyB4OiAwLCB5OiAwIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2VsbFNpemUgPSB0aGlzLnByb3BzLmNlbGxTaXplIHx8IGNlbGwuc2l6ZTtcbiAgICBjb25zdCBmaWVsZFNpemUgPSB0aGlzLnByb3BzLmZpZWxkU2l6ZSB8fCBmaWVsZC5zaXplO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGZpZWxkLmNvbG9yO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gZmllbGRTaXplLmhlaWdodDsgaSsrKSB7XG4gICAgICBjdHgubW92ZVRvKG9mZnNldC54LCBpICogY2VsbFNpemUuaGVpZ2h0ICsgb2Zmc2V0LnkpO1xuICAgICAgY3R4LmxpbmVUbyhcbiAgICAgICAgb2Zmc2V0LnggKyBmaWVsZFNpemUud2lkdGggKiBjZWxsU2l6ZS53aWR0aCxcbiAgICAgICAgaSAqIGNlbGxTaXplLmhlaWdodCArIG9mZnNldC55XG4gICAgICApO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGZpZWxkU2l6ZS53aWR0aDsgaSsrKSB7XG4gICAgICBjdHgubW92ZVRvKG9mZnNldC54ICsgaSAqIGNlbGxTaXplLndpZHRoLCBvZmZzZXQueSk7XG4gICAgICBjdHgubGluZVRvKFxuICAgICAgICBvZmZzZXQueCArIGkgKiBjZWxsU2l6ZS53aWR0aCxcbiAgICAgICAgZmllbGRTaXplLmhlaWdodCAqIGNlbGxTaXplLmhlaWdodCArIG9mZnNldC55XG4gICAgICApO1xuICAgIH1cblxuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufVxuIiwiaW50ZXJmYWNlIElDZWxsUHJvcHMge1xuICBwb3NpdGlvbjogSVBvaW50O1xuICBvZmZzZXQ/OiBJUG9pbnQ7XG4gIHNpemU/OiBJRGltZW5zaW9ucztcbn1cblxuZXhwb3J0IGNsYXNzIENlbGwgaW1wbGVtZW50cyBJQ29tcG9uZW50PElDZWxsUHJvcHM+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm9wczogSUNlbGxQcm9wcyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IElDb21wb25lbnRDb250ZXh0XG4gICkge31cblxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge31cblxuICBwdWJsaWMgcmVuZGVyKHsgY3R4IH06IElDb21wb25lbnRQYXJhbXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNlbGwgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCB7IHBvc2l0aW9uLCBvZmZzZXQgPSB7IHg6IDAsIHk6IDAgfSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzaXplID0gdGhpcy5wcm9wcy5zaXplIHx8IGNlbGwuc2l6ZTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gY2VsbC5jb2xvcjtcblxuICAgIGN0eC5yZWN0KFxuICAgICAgb2Zmc2V0LnggKyBwb3NpdGlvbi54ICogc2l6ZS53aWR0aCArIDEsXG4gICAgICBvZmZzZXQueSArIHBvc2l0aW9uLnkgKiBzaXplLmhlaWdodCArIDEsXG4gICAgICBzaXplLndpZHRoIC0gMixcbiAgICAgIHNpemUuaGVpZ2h0IC0gMlxuICAgICk7XG5cbiAgICBjdHguZmlsbCgpO1xuICB9XG59XG4iLCJpbXBvcnQgaXNNb2JpbGUgZnJvbSBcImlzbW9iaWxlanNcIjtcblxuaW50ZXJmYWNlIElTdGF0c1Byb3BzIHtcbiAgcG9pbnRzOiBudW1iZXI7XG4gIGxldmVsOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBTdGF0cyBpbXBsZW1lbnRzIElDb21wb25lbnQ8SVN0YXRzUHJvcHM+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwcm9wczogSVN0YXRzUHJvcHMsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dFxuICApIHt9XG5cbiAgcHVibGljIHVwZGF0ZShwYXJhbXM6IElDb21wb25lbnRQYXJhbXMsIHByb3BzOiBJU3RhdHNQcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoeyBjdHggfTogSUNvbXBvbmVudFBhcmFtcykge1xuICAgIGNvbnN0IHsgZmllbGQsIGNlbGwgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCBvZmZzZXQgPSB7XG4gICAgICB4OiBpc01vYmlsZS5hbnkgPyAxMDAgOiBmaWVsZC5zaXplLndpZHRoICogY2VsbC5zaXplLndpZHRoICsgMjAsXG4gICAgICB5OiBpc01vYmlsZS5hbnkgPyBmaWVsZC5zaXplLmhlaWdodCAqIGNlbGwuc2l6ZS5oZWlnaHQgKyA0MCA6IDI1XG4gICAgfTtcblxuICAgIGN0eC5mb250ID0gXCIyMHB4IFZlcmRhbmFcIjtcblxuICAgIGN0eC5maWxsVGV4dChgUG9pbnRzOiAke3RoaXMucHJvcHMucG9pbnRzfWAsIG9mZnNldC54LCBvZmZzZXQueSk7XG5cbiAgICBjdHguZmlsbFRleHQoYExldmVsOiAke3RoaXMucHJvcHMubGV2ZWx9YCwgb2Zmc2V0LngsIG9mZnNldC55ICsgMjUpO1xuXG4gICAgaWYgKCFpc01vYmlsZS5hbnkpIHtcbiAgICAgIGN0eC5maWxsVGV4dChcbiAgICAgICAgYExldmVsIHdpbGwgY2hhbmdlIGV2ZXJ5IDEwIGZpZ3VyZXNgLFxuICAgICAgICBmaWVsZC5zaXplLndpZHRoICogY2VsbC5zaXplLndpZHRoICsgMjAsXG4gICAgICAgIDc1XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIiwiaW50ZXJmYWNlIElHYW1lT3ZlclByb3BzIHtcbiAgcG9pbnRzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBHYW1lT3ZlciBpbXBsZW1lbnRzIElDb21wb25lbnQ8SUdhbWVPdmVyUHJvcHM+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm9wczogSUdhbWVPdmVyUHJvcHMsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dFxuICApIHt9XG5cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHt9XG5cbiAgcHVibGljIHJlbmRlcih7IGN0eCB9OiBJQ29tcG9uZW50UGFyYW1zKTogdm9pZCB7XG4gICAgY29uc3QgeyBjYW52YXMgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIGN0eC5mb250ID0gXCI1MHB4IEFyaWFsXCI7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG5cbiAgICBjdHguZmlsbFRleHQoXCJHYW1lIE92ZXJcIiwgY2FudmFzLnNpemUud2lkdGggLyAyLCBjYW52YXMuc2l6ZS5oZWlnaHQgLyAyKTtcblxuICAgIGN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG5cbiAgICBjdHguZmlsbFRleHQoXG4gICAgICBgWW91ciBwb2ludHM6ICR7dGhpcy5wcm9wcy5wb2ludHN9YCxcbiAgICAgIGNhbnZhcy5zaXplLndpZHRoIC8gMixcbiAgICAgIGNhbnZhcy5zaXplLmhlaWdodCAvIDIgKyA1MFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBpc01vYmlsZSBmcm9tIFwiaXNtb2JpbGVqc1wiO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiLi9maWVsZFwiO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcblxuaW50ZXJmYWNlIElOZXh0RmlndXJlUHJvcHMge1xuICBmaWd1cmU6IElGaWVsZE1hcFtdW107XG59XG5cbmV4cG9ydCBjbGFzcyBOZXh0RmlndXJlIGltcGxlbWVudHMgSUNvbXBvbmVudDxJTmV4dEZpZ3VyZVByb3BzPiB7XG4gIHByaXZhdGUgb2Zmc2V0ID0ge1xuICAgIHg6IGlzTW9iaWxlLmFueVxuICAgICAgPyAyMFxuICAgICAgOiB0aGlzLmNvbnRleHQuZmllbGQuc2l6ZS53aWR0aCAqIHRoaXMuY29udGV4dC5jZWxsLnNpemUud2lkdGggKyAyMCxcbiAgICB5OiBpc01vYmlsZS5hbnlcbiAgICAgID8gdGhpcy5jb250ZXh0LmZpZWxkLnNpemUuaGVpZ2h0ICogdGhpcy5jb250ZXh0LmNlbGwuc2l6ZS5oZWlnaHQgKyAyMFxuICAgICAgOiAxMDBcbiAgfTtcblxuICBwcml2YXRlIGZpZWxkID0gbmV3IEZpZWxkKFxuICAgIHtcbiAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICBmaWVsZFNpemU6IHtcbiAgICAgICAgd2lkdGg6IDUsXG4gICAgICAgIGhlaWdodDogNVxuICAgICAgfSxcbiAgICAgIGNlbGxTaXplOiB7XG4gICAgICAgIHdpZHRoOiAxMCxcbiAgICAgICAgaGVpZ2h0OiAxMFxuICAgICAgfVxuICAgIH0sXG4gICAgdGhpcy5jb250ZXh0XG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwcm9wczogSU5leHRGaWd1cmVQcm9wcyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IElDb21wb25lbnRDb250ZXh0XG4gICkge31cblxuICBwdWJsaWMgdXBkYXRlKHBhcmFtczogSUNvbXBvbmVudFBhcmFtcywgcHJvcHM6IElOZXh0RmlndXJlUHJvcHMpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHBhcmFtczogSUNvbXBvbmVudFBhcmFtcyk6IHZvaWQge1xuICAgIHRoaXMuZmllbGQucmVuZGVyKHBhcmFtcyk7XG5cbiAgICB0aGlzLnJlbmRlckNlbGxzKHBhcmFtcyk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckNlbGxzKHBhcmFtczogSUNvbXBvbmVudFBhcmFtcykge1xuICAgIGNvbnN0IGZpZ3VyZSA9IHRoaXMucHJvcHMuZmlndXJlO1xuXG4gICAgZmlndXJlLmZvckVhY2goKHJvdywgeSkgPT5cbiAgICAgIHJvdy5mb3JFYWNoKChjZWxsLCB4KSA9PiB7XG4gICAgICAgIGlmICghY2VsbCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBDZWxsKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4LCB5IH0sXG4gICAgICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGhpcy5jb250ZXh0XG4gICAgICAgICk7XG5cbiAgICAgICAgY29tcG9uZW50LnJlbmRlcihwYXJhbXMpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iLCJpbnRlcmZhY2UgSUZpZWxkQXBwbHlQYXJhbXMge1xuICBwb2ludHM6IElQb2ludFtdO1xuICB2YWx1ZTogSUZpZWxkTWFwO1xufVxuXG5leHBvcnQgY2xhc3MgRmllbGRNb2RlbCB7XG4gIHByaXZhdGUgZmllbGQ6IElGaWVsZE1hcFtdW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZpZWxkOiB7IHNpemUgfVxuICAgIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLmZpZWxkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2l6ZS5oZWlnaHQgfSwgKCkgPT5cbiAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IHNpemUud2lkdGggfSwgKCkgPT4gbnVsbClcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGFwcGx5VG9GaWVsZCh7IHBvaW50cywgdmFsdWUgfTogSUZpZWxkQXBwbHlQYXJhbXMpIHtcbiAgICBwb2ludHMuZm9yRWFjaChwb2ludCA9PiB7XG4gICAgICBjb25zdCByb3cgPSB0aGlzLmZpZWxkW3BvaW50LnldO1xuXG4gICAgICBpZiAocm93KSB7XG4gICAgICAgIHJvd1twb2ludC54XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZU1hdGNoZXMoKTogbnVtYmVyIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuY29udGV4dC5maWVsZC5zaXplO1xuICAgIGxldCBtYXRjaGVzID0gMDtcblxuICAgIGZvciAobGV0IGkgPSBoZWlnaHQgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgIGlmICghdGhpcy5maWVsZFtpXVtqXSkgYnJlYWs7XG5cbiAgICAgICAgaWYgKGogPT09IHdpZHRoIC0gMSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlUm93KGkpO1xuICAgICAgICAgIG1hdGNoZXMrKztcbiAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaWVsZCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZDtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlUm93KHlQb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgY29uc3QgeyBzaXplIH0gPSB0aGlzLmNvbnRleHQuZmllbGQ7XG5cbiAgICBmb3IgKGxldCBpID0geVBvc2l0aW9uOyBpID49IDA7IGktLSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplLndpZHRoOyBqKyspIHtcbiAgICAgICAgY29uc3QgcHJldiA9IHRoaXMuZmllbGRbaSAtIDFdO1xuICAgICAgICB0aGlzLmZpZWxkW2ldW2pdID0gcHJldiA/IHByZXZbal0gOiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEZpZ3VyZU1vZGVsIHtcbiAgcHJpdmF0ZSBmaWd1cmVzID0gW1xuICAgIFtbMCwgMCwgMCwgMF0sIFswLCAxLCAxLCAwXSwgWzAsIDAsIDEsIDBdLCBbMCwgMCwgMSwgMF0sIFswLCAwLCAwLCAwXV0sXG4gICAgW1swLCAwLCAwLCAwXSwgWzAsIDEsIDEsIDBdLCBbMCwgMSwgMCwgMF0sIFswLCAxLCAwLCAwXSwgWzAsIDAsIDAsIDBdXSxcbiAgICBbWzEsIDFdLCBbMSwgMV1dLFxuICAgIFtcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAxLCAxLCAxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwXVxuICAgIF0sXG4gICAgW1swLCAwLCAwLCAwLCAwXSwgWzAsIDEsIDEsIDEsIDBdLCBbMCwgMCwgMSwgMCwgMF0sIFswLCAwLCAwLCAwLCAwXV0sXG4gICAgW1sxLCAxLCAwXSwgWzAsIDEsIDFdXSxcbiAgICBbWzAsIDEsIDFdLCBbMSwgMSwgMF1dLFxuICAgIFtbMV1dXG4gIF07XG5cbiAgcHJpdmF0ZSBmaWd1cmU6IElGaWd1cmU7XG5cbiAgcHJpdmF0ZSBuZXh0OiBJRmlndXJlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogSUNvbXBvbmVudENvbnRleHQpIHtcbiAgICB0aGlzLmZpZ3VyZSA9IHRoaXMuZ2V0UmFuZG9tRmlndXJlKCk7XG4gICAgdGhpcy5uZXh0ID0gdGhpcy5nZXRSYW5kb21GaWd1cmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXROZXh0KGZpZ3VyZTogSUZpZ3VyZSk6IHZvaWQge1xuICAgIHRoaXMuZmlndXJlID0gZmlndXJlO1xuICAgIHRoaXMubmV4dCA9IHRoaXMuZ2V0UmFuZG9tRmlndXJlKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGZpZ3VyZTogSUZpZ3VyZSk6IHZvaWQge1xuICAgIHRoaXMuZmlndXJlID0gZmlndXJlO1xuICB9XG5cbiAgcHVibGljIGdldE5leHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmV4dDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSb3RhdGUoKTogSUZpZ3VyZSB7XG4gICAgY29uc3QgZmxpcE1hdHJpeCA9IChtYXRyaXg6IElGaWVsZE1hcFtdW10pID0+XG4gICAgICBtYXRyaXhbMF0ubWFwKChjb2x1bW4sIGlkeCkgPT4gbWF0cml4Lm1hcChyb3cgPT4gcm93W2lkeF0pKTtcblxuICAgIGNvbnN0IHJvdGF0ZU1hdHJpeCA9IChtYXRyaXg6IElGaWVsZE1hcFtdW10pID0+XG4gICAgICBmbGlwTWF0cml4KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobWF0cml4KSkucmV2ZXJzZSgpKTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLmZpZ3VyZSxcbiAgICAgIGZpZWxkOiByb3RhdGVNYXRyaXgodGhpcy5maWd1cmUuZmllbGQpXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNb3ZlKGRlbHRhOiBJUG9pbnQpOiBJRmlndXJlIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4udGhpcy5maWd1cmUsXG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB5OiB0aGlzLmZpZ3VyZS5wb3NpdGlvbi55ICsgZGVsdGEueSxcbiAgICAgICAgeDogdGhpcy5maWd1cmUucG9zaXRpb24ueCArIGRlbHRhLnhcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGdldFBvaW50cyhmaWd1cmU6IElGaWd1cmUgPSB0aGlzLmZpZ3VyZSk6IElQb2ludFtdIHtcbiAgICByZXR1cm4gZmlndXJlLmZpZWxkLnJlZHVjZShcbiAgICAgIChhY2MsIGN1cnIsIHJvd0lkeCkgPT4ge1xuICAgICAgICBjdXJyLmZvckVhY2goKHBhdHRlcm4sIGNlbGxJZHgpID0+IHtcbiAgICAgICAgICBpZiAocGF0dGVybikge1xuICAgICAgICAgICAgYWNjLnB1c2goe1xuICAgICAgICAgICAgICB4OiBmaWd1cmUucG9zaXRpb24ueCArIGNlbGxJZHgsXG4gICAgICAgICAgICAgIHk6IGZpZ3VyZS5wb3NpdGlvbi55ICsgcm93SWR4XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LFxuICAgICAgW10gYXMgSVBvaW50W11cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSYW5kb21GaWd1cmUoKTogSUZpZ3VyZSB7XG4gICAgY29uc3QgZmllbGQgPSB0aGlzLmZpZ3VyZXNbfn4oTWF0aC5yYW5kb20oKSAqIHRoaXMuZmlndXJlcy5sZW5ndGgpXTtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiB+fih0aGlzLmNvbnRleHQuZmllbGQuc2l6ZS53aWR0aCAvIDIpLFxuICAgICAgICB5OiAtZmllbGQubGVuZ3RoXG4gICAgICB9LFxuICAgICAgZmllbGRcbiAgICB9O1xuICB9XG59XG4iLCJpbnRlcmZhY2UgSUFkZE1hdGNoUG9pbnRzIHtcbiAgdHlwZTogXCJtYXRjaFwiO1xuICBjb3VudDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSUFkZE5leHRQb2ludHMge1xuICB0eXBlOiBcIm5leHRcIjtcbn1cblxuZXhwb3J0IGNsYXNzIFBvaW50c01vZGVsIHtcbiAgcHJpdmF0ZSBwb2ludHMgPSAwO1xuXG4gIHB1YmxpYyBhZGQocGFyYW1zOiBJQWRkTmV4dFBvaW50cyB8IElBZGRNYXRjaFBvaW50cykge1xuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gXCJtYXRjaFwiKSB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBBcnJheS5mcm9tKFxuICAgICAgICB7IGxlbmd0aDogcGFyYW1zLmNvdW50IH0sXG4gICAgICAgIChfLCBpZHgpID0+IChpZHggKyAxKSAqIDEwXG4gICAgICApO1xuXG4gICAgICB0aGlzLnBvaW50cyArPSB2YWx1ZXMucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIGN1cnIsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvaW50cyArPSAxO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRQb2ludHMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wb2ludHM7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBMZXZlbE1vZGVsIHtcbiAgcHJpdmF0ZSBsZXZlbCA9IDE7XG5cbiAgcHJpdmF0ZSBmaWd1cmVzID0gMDtcblxuICBwdWJsaWMgaW5jRmlndXJlcygpOiB2b2lkIHtcbiAgICB0aGlzLmZpZ3VyZXMrKztcblxuICAgIHRoaXMubGV2ZWwgPSBNYXRoLmNlaWwodGhpcy5maWd1cmVzIC8gMTApO1xuICB9XG5cbiAgcHVibGljIGdldExldmVsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubGV2ZWw7XG4gIH1cbn1cbiIsImltcG9ydCB7IEZpZWxkTW9kZWwgfSBmcm9tIFwiLi9maWVsZC1tb2RlbFwiO1xuaW1wb3J0IHsgRmlndXJlTW9kZWwgfSBmcm9tIFwiLi9maWd1cmUtbW9kZWxcIjtcbmltcG9ydCB7IFBvaW50c01vZGVsIH0gZnJvbSBcIi4vcG9pbnRzLW1vZGVsXCI7XG5pbXBvcnQgeyBMZXZlbE1vZGVsIH0gZnJvbSBcIi4vbGV2ZWwtbW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVNb2RlbCB7XG4gIHByaXZhdGUgcG9pbnRzID0gbmV3IFBvaW50c01vZGVsKCk7XG5cbiAgcHJpdmF0ZSBmaWVsZCA9IG5ldyBGaWVsZE1vZGVsKHRoaXMuY29udGV4dCk7XG5cbiAgcHJpdmF0ZSBmaWd1cmUgPSBuZXcgRmlndXJlTW9kZWwodGhpcy5jb250ZXh0KTtcblxuICBwcml2YXRlIGxldmVsID0gbmV3IExldmVsTW9kZWwoKTtcblxuICBwcml2YXRlIGdhbWVPdmVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCkge31cblxuICBwdWJsaWMgc2V0UG9pbnRzVG9GaWVsZChwb2ludHM6IElQb2ludFtdKTogdm9pZCB7XG4gICAgdGhpcy5maWVsZC5hcHBseVRvRmllbGQoe1xuICAgICAgcG9pbnRzLFxuICAgICAgdmFsdWU6IDFcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1bnNldFBvaW50c0Zyb21GaWVsZChwb2ludHM6IElQb2ludFtdKTogdm9pZCB7XG4gICAgdGhpcy5maWVsZC5hcHBseVRvRmllbGQoe1xuICAgICAgcG9pbnRzLFxuICAgICAgdmFsdWU6IG51bGxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjaGVja0NvbGxpc2lvbihwb2ludHM6IElQb2ludFtdKSB7XG4gICAgY29uc3QgeyBoZWlnaHQsIHdpZHRoIH0gPSB0aGlzLmNvbnRleHQuZmllbGQuc2l6ZTtcbiAgICBjb25zdCBmaWVsZCA9IHRoaXMuZmllbGQuZ2V0RmllbGQoKTtcblxuICAgIGNvbnN0IGNvb3JkcyA9IHBvaW50cy5yZWR1Y2UoXG4gICAgICAoYWNjLCBjdXJyKSA9PiB7XG4gICAgICAgIGFjYy54cy5wdXNoKGN1cnIueCk7XG4gICAgICAgIGFjYy55cy5wdXNoKGN1cnIueSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LFxuICAgICAgeyB4czogW10sIHlzOiBbXSB9IGFzIHsgeHM6IG51bWJlcltdOyB5czogbnVtYmVyW10gfVxuICAgICk7XG5cbiAgICBjb25zdCBtYXhZID0gTWF0aC5tYXgoLi4uY29vcmRzLnlzKTtcbiAgICBjb25zdCBtaW5YID0gTWF0aC5taW4oLi4uY29vcmRzLnhzKTtcbiAgICBjb25zdCBtYXhYID0gTWF0aC5tYXgoLi4uY29vcmRzLnhzKTtcblxuICAgIGZvciAobGV0IGkgPSBwb2ludHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IHBvaW50ID0gcG9pbnRzW2ldO1xuICAgICAgY29uc3Qgcm93ID0gZmllbGRbcG9pbnQueV07XG4gICAgICBjb25zdCBjZWxsID0gcm93ICYmIHJvd1twb2ludC54XTtcblxuICAgICAgaWYgKGNlbGwgfHwgbWF4WSA+PSBoZWlnaHQgfHwgbWluWCA8IDAgfHwgbWF4WCA+PSB3aWR0aCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgcm90YXRlKCkge1xuICAgIGNvbnN0IGN1cnJlbnRQb2ludHMgPSB0aGlzLmZpZ3VyZS5nZXRQb2ludHMoKTtcbiAgICBjb25zdCBuZXh0RmlndXJlID0gdGhpcy5maWd1cmUuZ2V0Um90YXRlKCk7XG4gICAgY29uc3QgbmV4dFBvaW50cyA9IHRoaXMuZmlndXJlLmdldFBvaW50cyhuZXh0RmlndXJlKTtcblxuICAgIHRoaXMudW5zZXRQb2ludHNGcm9tRmllbGQoY3VycmVudFBvaW50cyk7XG5cbiAgICBpZiAoIXRoaXMuY2hlY2tDb2xsaXNpb24obmV4dFBvaW50cykpIHtcbiAgICAgIHRoaXMuZmlndXJlLnVwZGF0ZShuZXh0RmlndXJlKTtcbiAgICAgIHRoaXMuc2V0UG9pbnRzVG9GaWVsZChuZXh0UG9pbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRQb2ludHNUb0ZpZWxkKGN1cnJlbnRQb2ludHMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBtb3ZlKHsgeCA9IDAsIHkgPSAwIH06IElEZWx0YVBvaW50KSB7XG4gICAgY29uc3QgY3VycmVudFBvaW50cyA9IHRoaXMuZmlndXJlLmdldFBvaW50cygpO1xuICAgIGNvbnN0IG5leHRGaWd1cmUgPSB0aGlzLmZpZ3VyZS5nZXRNb3ZlKHsgeSwgeCB9KTtcbiAgICBjb25zdCBuZXh0UG9pbnRzID0gdGhpcy5maWd1cmUuZ2V0UG9pbnRzKG5leHRGaWd1cmUpO1xuXG4gICAgdGhpcy51bnNldFBvaW50c0Zyb21GaWVsZChjdXJyZW50UG9pbnRzKTtcblxuICAgIGlmICh0aGlzLmNoZWNrQ29sbGlzaW9uKG5leHRQb2ludHMpKSB7XG4gICAgICB0aGlzLnNldFBvaW50c1RvRmllbGQoY3VycmVudFBvaW50cyk7XG5cbiAgICAgIGlmICh5KSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLmZpZWxkLnJlbW92ZU1hdGNoZXMoKTtcbiAgICAgICAgdGhpcy5wb2ludHMuYWRkKHtcbiAgICAgICAgICB0eXBlOiBcIm1hdGNoXCIsXG4gICAgICAgICAgY291bnQ6IG1hdGNoZXNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2hlY2tHYW1lT3ZlcigpKSB7XG4gICAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5leHRGaWd1cmUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWd1cmUudXBkYXRlKG5leHRGaWd1cmUpO1xuICAgICAgdGhpcy5zZXRQb2ludHNUb0ZpZWxkKG5leHRQb2ludHMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZXh0RmlndXJlKCk6IHZvaWQge1xuICAgIHRoaXMubGV2ZWwuaW5jRmlndXJlcygpO1xuICAgIHRoaXMucG9pbnRzLmFkZCh7IHR5cGU6IFwibmV4dFwiIH0pO1xuXG4gICAgY29uc3QgbmV4dEZpZ3VyZSA9IHRoaXMuZmlndXJlLmdldE5leHQoKTtcbiAgICB0aGlzLmZpZ3VyZS5zZXROZXh0KG5leHRGaWd1cmUpO1xuICB9XG5cbiAgcHVibGljIGdldE1vZGVsKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZDogdGhpcy5maWVsZC5nZXRGaWVsZCgpLFxuICAgICAgcG9pbnRzOiB0aGlzLnBvaW50cy5nZXRQb2ludHMoKSxcbiAgICAgIGxldmVsOiB0aGlzLmxldmVsLmdldExldmVsKCksXG4gICAgICBuZXh0RmlndXJlOiB0aGlzLmZpZ3VyZS5nZXROZXh0KCkuZmllbGQsXG4gICAgICBnYW1lT3ZlcjogdGhpcy5nYW1lT3ZlclxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGNoZWNrR2FtZU92ZXIoKSB7XG4gICAgY29uc3QgeyBzaXplIH0gPSB0aGlzLmNvbnRleHQuZmllbGQ7XG4gICAgY29uc3QgZmllbGQgPSB0aGlzLmZpZWxkLmdldEZpZWxkKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemUud2lkdGg7IGkrKykge1xuICAgICAgaWYgKGZpZWxkWzBdW2ldKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRlbWl0dGVyM1wiO1xuaW1wb3J0IGlzTW9iaWxlIGZyb20gXCJpc21vYmlsZWpzXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyRXZlbnRzIHtcbiAgcHVibGljIGV2ZW50czogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZXZlbnRzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgaWYgKGlzTW9iaWxlLmFueSkge1xuICAgICAgdGhpcy5pbml0TW9iaWxlQ29udHJvbHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0RGVza3RvcENvbnRyb2xzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0TW9iaWxlQ29udHJvbHMoKSB7XG4gICAgY29uc3QgY29udHJvbHMgPSBbXG4gICAgICB7XG4gICAgICAgIGV2ZW50OiBcImVudGVyXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJtb2JpbGUtcm90YXRlXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiJiMxMDgwN1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBldmVudDogXCJsZWZ0XCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJtb2JpbGUtbGVmdFwiLFxuICAgICAgICBjb250ZW50OiBcIiYjODU5MlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBldmVudDogXCJyaWdodFwiLFxuICAgICAgICBjbGFzc05hbWU6IFwibW9iaWxlLXJpZ2h0XCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiJiM4NTk0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGV2ZW50OiBcImRvd25cIixcbiAgICAgICAgY2xhc3NOYW1lOiBcIm1vYmlsZS1kb3duXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiJiM4NTk1XCJcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgY29udHJvbHMuZm9yRWFjaChjb250cm9sID0+IHtcbiAgICAgIGNvbnN0ICRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAkZWwuaW5uZXJIVE1MID0gY29udHJvbC5jb250ZW50O1xuICAgICAgJGVsLmNsYXNzTGlzdC5hZGQoY29udHJvbC5jbGFzc05hbWUpO1xuICAgICAgJGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsICgpID0+IHRoaXMuZXZlbnRzLmVtaXQoY29udHJvbC5ldmVudCkpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCgkZWwpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0RGVza3RvcENvbnRyb2xzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgdGhpcy5ldmVudHMuZW1pdChcImVudGVyXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAzNykge1xuICAgICAgICB0aGlzLmV2ZW50cy5lbWl0KFwibGVmdFwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgICAgdGhpcy5ldmVudHMuZW1pdChcInJpZ2h0XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSA0MCkge1xuICAgICAgICB0aGlzLmV2ZW50cy5lbWl0KFwiZG93blwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpZWxkXCI7XG5pbXBvcnQgeyBDZWxsIH0gZnJvbSBcIi4vY29tcG9uZW50cy9jZWxsXCI7XG5pbXBvcnQgeyBTdGF0cyB9IGZyb20gXCIuL2NvbXBvbmVudHMvc3RhdHNcIjtcbmltcG9ydCB7IEdhbWVPdmVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9nYW1lLW92ZXJcIjtcbmltcG9ydCB7IE5leHRGaWd1cmUgfSBmcm9tIFwiLi9jb21wb25lbnRzL25leHQtZmlndXJlXCI7XG5pbXBvcnQgeyBHYW1lTW9kZWwgfSBmcm9tIFwiLi9tb2RlbC9nYW1lLW1vZGVsXCI7XG5pbXBvcnQgeyBVc2VyRXZlbnRzIH0gZnJvbSBcIi4vdXNlci1ldmVudHNcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIGltcGxlbWVudHMgSUNvbXBvbmVudDxJQ29tcG9uZW50Q29udGV4dD4ge1xuICBwcml2YXRlIGdhbWUgPSBuZXcgR2FtZU1vZGVsKHRoaXMucHJvcHMpO1xuXG4gIHByaXZhdGUgdXNlckV2ZW50cyA9IG5ldyBVc2VyRXZlbnRzKCk7XG5cbiAgcHJpdmF0ZSBmaWVsZCA9IG5ldyBGaWVsZCh7fSwgdGhpcy5wcm9wcyk7XG5cbiAgcHJpdmF0ZSBzdGF0cyA9IG5ldyBTdGF0cyh7IHBvaW50czogMCwgbGV2ZWw6IDAgfSwgdGhpcy5wcm9wcyk7XG5cbiAgcHJpdmF0ZSBuZXh0RmlndXJlID0gbmV3IE5leHRGaWd1cmUoeyBmaWd1cmU6IFtdIH0sIHRoaXMucHJvcHMpO1xuXG4gIHByaXZhdGUgdGltZURlbHRhID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHByb3BzOiBJQ29tcG9uZW50Q29udGV4dCkge1xuICAgIHRoaXMudXNlckV2ZW50cy5ldmVudHMub24oXCJlbnRlclwiLCAoKSA9PiB0aGlzLmdhbWUucm90YXRlKCkpO1xuICAgIHRoaXMudXNlckV2ZW50cy5ldmVudHMub24oXCJsZWZ0XCIsICgpID0+IHRoaXMuZ2FtZS5tb3ZlKHsgeDogLTEgfSkpO1xuICAgIHRoaXMudXNlckV2ZW50cy5ldmVudHMub24oXCJyaWdodFwiLCAoKSA9PiB0aGlzLmdhbWUubW92ZSh7IHg6IDEgfSkpO1xuICAgIHRoaXMudXNlckV2ZW50cy5ldmVudHMub24oXCJkb3duXCIsICgpID0+IHRoaXMuZ2FtZS5tb3ZlKHsgeTogMSB9KSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKHBhcmFtczogSUNvbXBvbmVudFBhcmFtcykge1xuICAgIGNvbnN0IG1vZGVsID0gdGhpcy5nYW1lLmdldE1vZGVsKCk7XG5cbiAgICB0aGlzLnRpbWVEZWx0YSArPSBwYXJhbXMuZHQ7XG5cbiAgICBpZiAodGhpcy50aW1lRGVsdGEgPCA0MDAgLyBNYXRoLmxvZzFwKG1vZGVsLmxldmVsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbWVEZWx0YSA9IDA7XG4gICAgfVxuXG4gICAgaWYgKG1vZGVsLmdhbWVPdmVyKSByZXR1cm47XG5cbiAgICB0aGlzLmdhbWUubW92ZSh7IHk6IDEgfSk7XG5cbiAgICB0aGlzLnN0YXRzLnVwZGF0ZShwYXJhbXMsIHtcbiAgICAgIHBvaW50czogbW9kZWwucG9pbnRzLFxuICAgICAgbGV2ZWw6IG1vZGVsLmxldmVsXG4gICAgfSk7XG5cbiAgICB0aGlzLm5leHRGaWd1cmUudXBkYXRlKHBhcmFtcywge1xuICAgICAgZmlndXJlOiBtb2RlbC5uZXh0RmlndXJlXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHBhcmFtczogSUNvbXBvbmVudFBhcmFtcykge1xuICAgIGNvbnN0IG1vZGVsID0gdGhpcy5nYW1lLmdldE1vZGVsKCk7XG5cbiAgICBpZiAobW9kZWwuZ2FtZU92ZXIpIHtcbiAgICAgIGNvbnN0IGdhbWVPdmVyID0gbmV3IEdhbWVPdmVyKHsgcG9pbnRzOiBtb2RlbC5wb2ludHMgfSwgdGhpcy5wcm9wcyk7XG5cbiAgICAgIHJldHVybiBnYW1lT3Zlci5yZW5kZXIocGFyYW1zKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlckZpZWxkKHBhcmFtcyk7XG4gICAgdGhpcy5maWVsZC5yZW5kZXIocGFyYW1zKTtcbiAgICB0aGlzLnN0YXRzLnJlbmRlcihwYXJhbXMpO1xuICAgIHRoaXMubmV4dEZpZ3VyZS5yZW5kZXIocGFyYW1zKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyRmllbGQocGFyYW1zOiBJQ29tcG9uZW50UGFyYW1zKSB7XG4gICAgY29uc3QgeyBmaWVsZCB9ID0gdGhpcy5nYW1lLmdldE1vZGVsKCk7XG5cbiAgICBmaWVsZC5mb3JFYWNoKChyb3csIHkpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChjZWxsLCB4KSA9PiB7XG4gICAgICAgIGlmICghY2VsbCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBDZWxsKHsgcG9zaXRpb246IHsgeCwgeSB9IH0sIHRoaXMucHJvcHMpO1xuICAgICAgICBjb21wb25lbnQucmVuZGVyKHBhcmFtcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IGlzTW9iaWxlIGZyb20gXCJpc21vYmlsZWpzXCI7XG5pbXBvcnQgeyBMb29wIH0gZnJvbSBcIi4vbG9vcFwiO1xuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9nYW1lLWNvbnRyb2xsZXJcIjtcblxuY29uc3QgV0lEVEggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbmNvbnN0IEhFSUdIVCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblxuZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcbmRvY3VtZW50LmJvZHkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSBcIjEwMHZoXCI7XG5kb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBcImJsYWNrXCI7XG5cbmNhbnZhcy53aWR0aCA9IFdJRFRIO1xuY2FudmFzLmhlaWdodCA9IEhFSUdIVDtcbmNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuY2FudmFzLnN0eWxlLm1hcmdpbiA9IFwiYXV0b1wiO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XG5cbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG5jb25zdCBsb29wID0gbmV3IExvb3AoNjApO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lQ29udHJvbGxlcih7XG4gIGNhbnZhczoge1xuICAgIHNpemU6IHtcbiAgICAgIHdpZHRoOiBXSURUSCxcbiAgICAgIGhlaWdodDogSEVJR0hUXG4gICAgfVxuICB9LFxuICBmaWVsZDoge1xuICAgIHNpemU6IHtcbiAgICAgIHdpZHRoOiAxNSxcbiAgICAgIGhlaWdodDogMjBcbiAgICB9LFxuICAgIGNvbG9yOiBcIiMzZjRmNjBcIlxuICB9LFxuICBjZWxsOiB7XG4gICAgc2l6ZToge1xuICAgICAgd2lkdGg6IGlzTW9iaWxlLmFueSA/IFdJRFRIIC8gMTUgOiAyMCxcbiAgICAgIGhlaWdodDogaXNNb2JpbGUuYW55ID8gSEVJR0hUIC8gMzAgOiAyMFxuICAgIH0sXG4gICAgY29sb3I6IFwiIzZmN2Y5MFwiXG4gIH1cbn0pO1xuXG5sb29wLmV2ZW50cy5vbihcInVwZGF0ZVwiLCAoeyBkdCB9OiB7IGR0OiBudW1iZXIgfSkgPT4gZ2FtZS51cGRhdGUoeyBkdCwgY3R4IH0pKTtcblxubG9vcC5ldmVudHMub24oXCJyZW5kZXJcIiwgKHsgZHQgfTogeyBkdDogbnVtYmVyIH0pID0+IHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcblxuICBnYW1lLnJlbmRlcih7IGR0LCBjdHggfSk7XG59KTtcblxubG9vcC5ydW4oKTtcbiJdLCJuYW1lcyI6WyJ0aGlzIiwicmVxdWlyZSIsIkV2ZW50RW1pdHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQSxDQUFDLFNBQVMsTUFB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LENBQUMsRUFBRSxVQUFVLENBQUMsQUFBMEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBT0MsZUFBTyxFQUFFLFVBQVUsRUFBRUEsZUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9B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RTlFLFFBQVEsR0FBRztPQUNULEtBQUssQ0FBQyxFQUFFLE9BQU8sU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQztPQUMxRCxLQUFLLENBQUMsRUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDO09BQzlELEtBQUssQ0FBQyxFQUFFLE9BQU8sU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDO09BQ2xFLEtBQUssQ0FBQyxFQUFFLE9BQU8sU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQztPQUN0RSxLQUFLLENBQUMsRUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDO09BQzFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDO01BQy9FOztLQUVELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7T0FDbEQsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDNUI7O0tBRUQsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QyxNQUFNO0tBQ0wsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU07U0FDekIsQ0FBQyxDQUFDOztLQUVOLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO09BQzNCLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQzs7T0FFcEYsUUFBUSxHQUFHO1NBQ1QsS0FBSyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTTtTQUMxRCxLQUFLLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTTtTQUM5RCxLQUFLLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU07U0FDbEUsS0FBSyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTTtTQUN0RTtXQUNFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTthQUM3RCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1Qjs7V0FFRCxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JEO01BQ0Y7SUFDRjs7R0FFRCxPQUFPLElBQUksQ0FBQztFQUNiLENBQUM7Ozs7Ozs7Ozs7O0NBV0YsWUFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsU0FBUyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUU7R0FDMUQsT0FBTyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0VBQ3JELENBQUM7Ozs7Ozs7Ozs7O0NBV0YsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUU7R0FDOUQsT0FBTyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQ3BELENBQUM7Ozs7Ozs7Ozs7OztDQVlGLFlBQVksQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLFNBQVMsY0FBYyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtHQUN4RixJQUFJLEdBQUcsR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUM7O0dBRTFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sSUFBSSxDQUFDO0dBQ3BDLElBQUksQ0FBQyxFQUFFLEVBQUU7S0FDUCxVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3RCLE9BQU8sSUFBSSxDQUFDO0lBQ2I7O0dBRUQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7R0FFbEMsSUFBSSxTQUFTLENBQUMsRUFBRSxFQUFFO0tBQ2hCO09BQ0UsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFO1FBQ2xCLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDeEIsQ0FBQyxPQUFPLElBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUM7T0FDM0M7T0FDQSxVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO01BQ3ZCO0lBQ0YsTUFBTTtLQUNMLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxFQUFFLEVBQUUsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtPQUN2RTtTQUNFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRTtVQUNyQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1VBQzNCLE9BQU8sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQztTQUM3QztTQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0I7TUFDRjs7Ozs7S0FLRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1VBQzNFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDNUI7O0dBRUQsT0FBTyxJQUFJLENBQUM7RUFDYixDQUFDOzs7Ozs7Ozs7Q0FTRixZQUFZLENBQUMsU0FBUyxDQUFDLGtCQUFrQixHQUFHLFNBQVMsa0JBQWtCLENBQUMsS0FBSyxFQUFFO0dBQzdFLElBQUksR0FBRyxDQUFDOztHQUVSLElBQUksS0FBSyxFQUFFO0tBQ1QsR0FBRyxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUN0QyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5QyxNQUFNO0tBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0tBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCOztHQUVELE9BQU8sSUFBSSxDQUFDO0VBQ2IsQ0FBQzs7Ozs7Q0FLRixZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztDQUNuRSxZQUFZLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQzs7Ozs7Q0FLL0QsWUFBWSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7Ozs7O0NBSy9CLFlBQVksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDOzs7OztBQUt6QyxDQUFtQztHQUNqQyxjQUFjLEdBQUcsWUFBWSxDQUFDO0VBQy9COzs7T0M1VVksSUFBSTtLQUtmLFlBQVksTUFBYztTQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBRWpDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSUMsYUFBWSxFQUFFLENBQUM7U0FFakMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO01BQ2I7S0FFTSxHQUFHO1NBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztNQUNuQjtLQUVPLElBQUk7U0FDVixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBRXJELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQVUsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FFM0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBVSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztNQUM1RTtFQUNGOzs7T0NyQlksS0FBSztLQUNoQixZQUNtQixLQUFrQixFQUNsQixPQUEwQjtTQUQxQixVQUFLLEdBQUwsS0FBSyxDQUFhO1NBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQW1CO01BQ3pDO0tBRUcsTUFBTSxNQUFXO0tBRWpCLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBb0I7U0FDckMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JDLE1BQU0sRUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDL0MsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDO1NBRXJELEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNoQixHQUFHLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FFOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7YUFDMUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNyRCxHQUFHLENBQUMsTUFBTSxDQUNSLE1BQU0sQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUMzQyxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUMvQixDQUFDO1VBQ0g7U0FFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTthQUN6QyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BELEdBQUcsQ0FBQyxNQUFNLENBQ1IsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFDN0IsU0FBUyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQzlDLENBQUM7VUFDSDtTQUVELEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztNQUNkO0VBQ0Y7OztPQ25DWSxJQUFJO0tBQ2YsWUFDbUIsS0FBaUIsRUFDakIsT0FBMEI7U0FEMUIsVUFBSyxHQUFMLEtBQUssQ0FBWTtTQUNqQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtNQUN6QztLQUVHLE1BQU0sTUFBVztLQUVqQixNQUFNLENBQUMsRUFBRSxHQUFHLEVBQW9CO1NBQ3JDLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzlCLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3pELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7U0FFMUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2hCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUUzQixHQUFHLENBQUMsSUFBSSxDQUNOLE1BQU0sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFDdEMsTUFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FDaEIsQ0FBQztTQUVGLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztNQUNaO0VBQ0Y7OztPQ3hCWSxLQUFLO0tBQ2hCLFlBQ1UsS0FBa0IsRUFDVCxPQUEwQjtTQURuQyxVQUFLLEdBQUwsS0FBSyxDQUFhO1NBQ1QsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7TUFDekM7S0FFRyxNQUFNLENBQUMsTUFBd0IsRUFBRSxLQUFrQjtTQUN4RCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztNQUNwQjtLQUVNLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBb0I7U0FDckMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JDLE1BQU0sTUFBTSxHQUFHO2FBQ2IsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUU7YUFDL0QsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUU7VUFDakUsQ0FBQztTQUVGLEdBQUcsQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO1NBRTFCLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBRWpFLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUVwRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTthQUNqQixHQUFHLENBQUMsUUFBUSxDQUNWLG9DQUFvQyxFQUNwQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQ3ZDLEVBQUUsQ0FDSCxDQUFDO1VBQ0g7TUFDRjtFQUNGOzs7T0NsQ1ksUUFBUTtLQUNuQixZQUNtQixLQUFxQixFQUNyQixPQUEwQjtTQUQxQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtTQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtNQUN6QztLQUVHLE1BQU0sTUFBVztLQUVqQixNQUFNLENBQUMsRUFBRSxHQUFHLEVBQW9CO1NBQ3JDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBRWhDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO1NBQ3hCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1NBRXpCLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUV6RSxHQUFHLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztTQUV4QixHQUFHLENBQUMsUUFBUSxDQUNWLGdCQUFnQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQzVCLENBQUM7TUFDSDtFQUNGOzs7T0NwQlksVUFBVTtLQXlCckIsWUFDVSxLQUF1QixFQUNkLE9BQTBCO1NBRG5DLFVBQUssR0FBTCxLQUFLLENBQWtCO1NBQ2QsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7U0ExQnJDLFdBQU0sR0FBRzthQUNmLENBQUMsRUFBRSxRQUFRLENBQUMsR0FBRzttQkFDWCxFQUFFO21CQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFO2FBQ3JFLENBQUMsRUFBRSxRQUFRLENBQUMsR0FBRzttQkFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRTttQkFDbkUsR0FBRztVQUNSLENBQUM7U0FFTSxVQUFLLEdBQUcsSUFBSSxLQUFLLENBQ3ZCO2FBQ0UsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ25CLFNBQVMsRUFBRTtpQkFDVCxLQUFLLEVBQUUsQ0FBQztpQkFDUixNQUFNLEVBQUUsQ0FBQztjQUNWO2FBQ0QsUUFBUSxFQUFFO2lCQUNSLEtBQUssRUFBRSxFQUFFO2lCQUNULE1BQU0sRUFBRSxFQUFFO2NBQ1g7VUFDRixFQUNELElBQUksQ0FBQyxPQUFPLENBQ2IsQ0FBQztNQUtFO0tBRUcsTUFBTSxDQUFDLE1BQXdCLEVBQUUsS0FBdUI7U0FDN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7TUFDcEI7S0FFTSxNQUFNLENBQUMsTUFBd0I7U0FDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FFMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztNQUMxQjtLQUVPLFdBQVcsQ0FBQyxNQUF3QjtTQUMxQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUVqQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsS0FDcEIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2xCLElBQUksQ0FBQyxJQUFJO2lCQUFFLE9BQU87YUFFbEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQ3hCO2lCQUNFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtpQkFDbkIsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtpQkFDbEIsSUFBSSxFQUFFO3FCQUNKLEtBQUssRUFBRSxFQUFFO3FCQUNULE1BQU0sRUFBRSxFQUFFO2tCQUNYO2NBQ0YsRUFDRCxJQUFJLENBQUMsT0FBTyxDQUNiLENBQUM7YUFFRixTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1VBQzFCLENBQUMsQ0FDSCxDQUFDO01BQ0g7RUFDRjs7O09DbEVZLFVBQVU7S0FHckIsWUFBNkIsT0FBMEI7U0FBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7U0FDckQsTUFBTSxFQUNKLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxFQUNoQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FFakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUMvQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLElBQUksQ0FBQyxDQUMvQyxDQUFDO01BQ0g7S0FFTSxZQUFZLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQjtTQUN0RCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUs7YUFDbEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFFaEMsSUFBSSxHQUFHLEVBQUU7aUJBQ1AsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7Y0FDdEI7VUFDRixDQUFDLENBQUM7TUFDSjtLQUVNLGFBQWE7U0FDbEIsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDbEQsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO1NBRWhCLEtBQUssSUFBSSxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2FBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7aUJBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFBRSxNQUFNO2lCQUU3QixJQUFJLENBQUMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxFQUFFO3FCQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNsQixPQUFPLEVBQUUsQ0FBQztxQkFDVixDQUFDLEVBQUUsQ0FBQztrQkFDTDtjQUNGO1VBQ0Y7U0FFRCxPQUFPLE9BQU8sQ0FBQztNQUNoQjtLQUVNLFFBQVE7U0FDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7TUFDbkI7S0FFTyxTQUFTLENBQUMsU0FBaUI7U0FDakMsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1NBRXBDLEtBQUssSUFBSSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7YUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7aUJBQ25DLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO2NBQzFDO1VBQ0Y7TUFDRjtFQUNGOzs7T0M3RFksV0FBVztLQXNCdEIsWUFBNkIsT0FBMEI7U0FBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7U0FyQi9DLFlBQU8sR0FBRzthQUNoQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN0RSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN0RSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2hCO2lCQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ2xCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ2xCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ2xCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ2xCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Y0FDbkI7YUFDRCxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3BFLENBQUMs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
