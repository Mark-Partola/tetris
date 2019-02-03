(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
}(function () { 'use strict';

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
	}

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

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
	        ctx.beginPath();
	        ctx.strokeStyle = field.color;
	        for (let i = 0; i <= field.size.height; i++) {
	            ctx.moveTo(0, i * cell.size.height);
	            ctx.lineTo(field.size.width * cell.size.width, i * cell.size.height);
	        }
	        for (let i = 0; i <= field.size.width; i++) {
	            ctx.moveTo(i * cell.size.width, 0);
	            ctx.lineTo(i * cell.size.width, field.size.height * cell.size.height);
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
	        const { position } = this.props;
	        ctx.beginPath();
	        ctx.fillStyle = cell.color;
	        ctx.rect(position.x * cell.size.width + 1, position.y * cell.size.height + 1, cell.size.width - 2, cell.size.height - 2);
	        ctx.fill();
	    }
	}
	//# sourceMappingURL=cell.js.map

	class Points {
	    constructor(props, context) {
	        this.props = props;
	        this.context = context;
	    }
	    update(params, props) {
	        this.props = props;
	    }
	    render({ ctx }) {
	        const { field, cell } = this.context;
	        ctx.font = "20px Verdana";
	        ctx.fillText(`points: ${this.props.points}`, field.size.width * cell.size.width + 20, 20);
	    }
	}
	//# sourceMappingURL=points.js.map

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

	class GameModel {
	    constructor(context) {
	        this.context = context;
	        this.points = 0;
	        this.gameOver = false;
	        this.field = Array.from({ length: this.context.field.size.height }, () => Array.from({ length: this.context.field.size.width }, () => null));
	        this.figure = this.getNext();
	    }
	    setFigureToField(figure) {
	        this.applyToField({
	            field: this.field,
	            points: this.getCoords(figure),
	            value: 1
	        });
	    }
	    unsetFigureFromField(figure) {
	        this.applyToField({
	            field: this.field,
	            points: this.getCoords(figure),
	            value: null
	        });
	    }
	    checkCollision(figure) {
	        const { height, width } = this.context.field.size;
	        const points = this.getCoords(figure);
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
	            const row = this.field[point.y];
	            const cell = row && row[point.x];
	            if (cell || maxY >= height || minX < 0 || maxX >= width) {
	                return true;
	            }
	        }
	        return false;
	    }
	    rotate() {
	        const flipMatrix = (matrix) => matrix[0].map((column, idx) => matrix.map(row => row[idx]));
	        const rotateMatrix = (matrix) => flipMatrix(JSON.parse(JSON.stringify(matrix)).reverse());
	        const figure = Object.assign({}, this.figure, { field: rotateMatrix(this.figure.field) });
	        this.unsetFigureFromField(this.figure);
	        if (!this.checkCollision(figure)) {
	            this.figure = figure;
	        }
	        this.setFigureToField(this.figure);
	    }
	    move({ x = 0, y = 0 }) {
	        this.unsetFigureFromField(this.figure);
	        const nextFigure = Object.assign({}, this.figure, { position: {
	                y: this.figure.position.y + y,
	                x: this.figure.position.x + x
	            } });
	        if (this.checkCollision(nextFigure)) {
	            this.setFigureToField(this.figure);
	            if (x)
	                return;
	            if (y) {
	                this.removeMatches();
	            }
	            if (this.checkGameOver()) {
	                this.gameOver = true;
	            }
	            this.figure = this.getNext();
	        }
	        else {
	            this.figure = nextFigure;
	        }
	        this.setFigureToField(this.figure);
	    }
	    getNext() {
	        this.points++;
	        const figures = [
	            [[1, 1], [0, 1], [0, 1]],
	            [[1, 1], [1, 1]],
	            [[1, 1, 1, 1]],
	            [[1, 1, 1], [0, 1, 0]],
	            [[1, 1, 0], [0, 1, 1]],
	            [[0, 1, 1], [1, 1, 0]],
	            [[1]]
	        ];
	        return {
	            position: {
	                x: ~~(this.context.field.size.width / 2),
	                y: -3
	            },
	            field: figures[~~(Math.random() * figures.length)]
	        };
	    }
	    getModel() {
	        return {
	            field: this.field,
	            points: this.points,
	            gameOver: this.gameOver
	        };
	    }
	    applyToField({ field, points, value }) {
	        points.forEach(point => {
	            const row = field[point.y];
	            if (row) {
	                row[point.x] = value;
	            }
	        });
	    }
	    getCoords(figure) {
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
	    removeMatches() {
	        const { width, height } = this.context.field.size;
	        for (let i = height - 1; i >= 0; i--) {
	            for (let j = 0; j < width; j++) {
	                if (!this.field[i][j])
	                    break;
	                if (j === width - 1) {
	                    this.removeRow(i);
	                    i++;
	                }
	            }
	        }
	    }
	    removeRow(yPosition) {
	        this.points += 10;
	        for (let i = yPosition; i >= 0; i--) {
	            for (let j = 0; j < this.context.field.size.width; j++) {
	                const prev = this.field[i - 1];
	                this.field[i][j] = prev ? prev[j] : null;
	            }
	        }
	    }
	    checkGameOver() {
	        for (let i = 0; i < this.context.field.size.width; i++) {
	            if (this.field[0][i]) {
	                return true;
	            }
	        }
	        return false;
	    }
	}
	//# sourceMappingURL=game-model.js.map

	class GameController {
	    constructor(props) {
	        this.props = props;
	        this.context = this.props;
	        this.components = [
	            new Field({}, this.context),
	            new Points({ points: 0 }, this.context)
	        ];
	        this.game = new GameModel(this.context);
	        document.addEventListener("keydown", e => {
	            if (e.keyCode === 13) {
	                this.game.rotate();
	            }
	            if (e.keyCode === 37) {
	                this.game.move({ x: -1 });
	            }
	            if (e.keyCode === 39) {
	                this.game.move({ x: 1 });
	            }
	        });
	    }
	    update(params) {
	        const model = this.game.getModel();
	        if (model.gameOver)
	            return;
	        this.game.move({ y: 1 });
	        this.components.forEach(component => {
	            if (component instanceof Points) {
	                return component.update(params, {
	                    points: model.points
	                });
	            }
	            component.update(params, {});
	        });
	    }
	    render(params) {
	        const model = this.game.getModel();
	        if (model.gameOver) {
	            const gameOver = new GameOver({ points: model.points }, this.context);
	            return gameOver.render(params);
	        }
	        this.renderField(params);
	        this.components.forEach(component => component.render(params));
	    }
	    renderField(params) {
	        const { field } = this.game.getModel();
	        field.forEach((row, rowIdx) => {
	            row.forEach((cell, cellIdx) => {
	                if (cell) {
	                    const cell = new Cell({
	                        position: {
	                            x: cellIdx,
	                            y: rowIdx
	                        }
	                    }, this.context);
	                    cell.render(params);
	                }
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
	const loop = new Loop(5);
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
	        color: "#6f7f90"
	    },
	    cell: {
	        size: {
	            width: 20,
	            height: 20
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvQHZhYWxlbnRpbi9nYW1lLWxvb3AvZGlzdC9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9ldmVudGVtaXR0ZXIzL2luZGV4LmpzIiwiLi4vc3JjL2xvb3AudHMiLCIuLi9zcmMvY29tcG9uZW50cy9maWVsZC50cyIsIi4uL3NyYy9jb21wb25lbnRzL2NlbGwudHMiLCIuLi9zcmMvY29tcG9uZW50cy9wb2ludHMudHMiLCIuLi9zcmMvY29tcG9uZW50cy9nYW1lLW92ZXIudHMiLCIuLi9zcmMvZ2FtZS1tb2RlbC50cyIsIi4uL3NyYy9nYW1lLWNvbnRyb2xsZXIudHMiLCIuLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihmKXtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiKXttb2R1bGUuZXhwb3J0cz1mKCl9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW10sZil9ZWxzZXt2YXIgZztpZih0eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIil7Zz13aW5kb3d9ZWxzZSBpZih0eXBlb2YgZ2xvYmFsIT09XCJ1bmRlZmluZWRcIil7Zz1nbG9iYWx9ZWxzZSBpZih0eXBlb2Ygc2VsZiE9PVwidW5kZWZpbmVkXCIpe2c9c2VsZn1lbHNle2c9dGhpc31nLnZhYWxlbnRpbmdhbWVMb29wID0gZigpfX0pKGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIEBjbGFzcyBFdmVudERpc3BhdGNoZXJcbiAqL1xuXG52YXIgRXZlbnREaXNwYXRjaGVyID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQGNvbnN0cnVjdHMgRXZlbnREaXNwYXRjaGVyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIEV2ZW50RGlzcGF0Y2hlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnREaXNwYXRjaGVyKTtcblxuICAgIHRoaXMudHJpZ2dlciA9IHRoaXMuZGlzcGF0Y2hFdmVudDtcbiAgICB0aGlzLm9uID0gdGhpcy5hZGRFdmVudExpc3RlbmVyO1xuICAgIHRoaXMub2ZmID0gdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyO1xuXG4gICAgdGhpcy5fbGlzdGVuZXJzID0ge307XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBkaXNwYXRjaEV2ZW50XG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHthbnlbXX0gYXJnc1xuICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICovXG5cbiAgX2NyZWF0ZUNsYXNzKEV2ZW50RGlzcGF0Y2hlciwgW3tcbiAgICBrZXk6ICdkaXNwYXRjaEV2ZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcGF0Y2hFdmVudCh0eXBlKSB7XG4gICAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1t0eXBlXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHRoaXMuX2xpc3RlbmVyc1t0eXBlXVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgIGxpc3RlbmVyLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgZGlzcGF0Y2hFdmVudFxuICAgICAqXG4gICAgICogQG1ldGhvZCB0cmlnZ2VyXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdhZGRFdmVudExpc3RlbmVyJyxcblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgYWRkRXZlbnRMaXN0ZW5lclxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICAqIEBwYXJhbSB7KGFueSkgPT4gYW55fSBjYlxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGNiKSB7XG4gICAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1t0eXBlXSkge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnNbdHlwZV0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2xpc3RlbmVyc1t0eXBlXS5pbmRleE9mKGNiKSAhPT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgY2FuXFwndCBhZGQgdGhlIHNhbWUgbGlzdGVuZXIgdG8gdGhlIHNhbWUgZXZlbnQgbW9yZSB0aGFuIG9uY2UnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fbGlzdGVuZXJzW3R5cGVdLnB1c2goY2IpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgYWRkRXZlbnRMaXN0ZW5lclxuICAgICAqXG4gICAgICogQG1ldGhvZCBvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlRXZlbnRMaXN0ZW5lcicsXG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIHJlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0geyhhbnkpID0+IGFueX0gY2JcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYikge1xuICAgICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbdHlwZV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaSA9IHRoaXMuX2xpc3RlbmVyc1t0eXBlXS5pbmRleE9mKGNiKTtcblxuICAgICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVyc1t0eXBlXS5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciByZW1vdmVFdmVudExpc3RlbmVyXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIG9mZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZGlzcG9zZScsXG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIGRpc3Bvc2VcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMgPSBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFdmVudERpc3BhdGNoZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEV2ZW50RGlzcGF0Y2hlcjtcblxufSx7fV0sMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTsgfSB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfTtcblxudmFyIF9ldmVudERpc3BhdGNoZXIgPSByZXF1aXJlKCdAdmFhbGVudGluL2V2ZW50LWRpc3BhdGNoZXInKTtcblxudmFyIF9ldmVudERpc3BhdGNoZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXZlbnREaXNwYXRjaGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIEBjbGFzcyBHYW1lTG9vcFxuICovXG5cbnZhciBHYW1lTG9vcCA9IGZ1bmN0aW9uIChfRXZlbnREaXNwYXRjaGVyKSB7XG4gIF9pbmhlcml0cyhHYW1lTG9vcCwgX0V2ZW50RGlzcGF0Y2hlcik7XG5cbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RzIEdhbWVMb29wXG4gICAqIEBwYXJhbSB7ZmxvYXR9IFtmcHMgPSA2MF1cbiAgICogQHBhcmFtIHtmbG9hdH0gW3NwZWVkID0gMV1cbiAgICovXG5cbiAgZnVuY3Rpb24gR2FtZUxvb3AoKSB7XG4gICAgdmFyIGZwcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IDYwIDogYXJndW1lbnRzWzBdO1xuICAgIHZhciBzcGVlZCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDEgOiBhcmd1bWVudHNbMV07XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2FtZUxvb3ApO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdhbWVMb29wKS5jYWxsKHRoaXMpKTtcblxuICAgIF90aGlzLl90aW1lU3RlcCA9IDEwMDAgLyBmcHMgKiBzcGVlZDtcbiAgICBfdGhpcy5fcHJldlRpbWUgPSBudWxsO1xuICAgIF90aGlzLl9sYWdUaW1lID0gMDtcblxuICAgIF90aGlzLl9mcmFtZSA9IF90aGlzLmZyYW1lLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLl9mcmFtZUlkID0gbnVsbDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBnZXRUaW1lXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm5zIHtmbG9hdH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoR2FtZUxvb3AsIFt7XG4gICAga2V5OiAnZ2V0VGltZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRpbWUoKSB7XG4gICAgICByZXR1cm4gcGVyZm9ybWFuY2UgJiYgcGVyZm9ybWFuY2Uubm93ID8gcGVyZm9ybWFuY2Uubm93KCkgOiBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgZnJhbWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdmcmFtZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZyYW1lKCkge1xuICAgICAgdmFyIGN1clRpbWUgPSB0aGlzLmdldFRpbWUoKTtcbiAgICAgIHZhciBkdCA9IE1hdGgubWluKDEwMDAsIGN1clRpbWUgLSB0aGlzLl9wcmV2VGltZSk7XG4gICAgICB0aGlzLl9wcmV2VGltZSA9IGN1clRpbWU7XG4gICAgICB0aGlzLl9sYWdUaW1lICs9IGR0O1xuXG4gICAgICB3aGlsZSAodGhpcy5fbGFnVGltZSA+IHRoaXMuX3RpbWVTdGVwKSB7XG4gICAgICAgIHRoaXMuX2xhZ1RpbWUgLT0gdGhpcy5fdGltZVN0ZXA7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndXBkYXRlJywgdGhpcy5fdGltZVN0ZXApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3JlbmRlcicsIGR0KTtcblxuICAgICAgdGhpcy5fZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9mcmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCBzdGFydFxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc3RhcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgIGlmICh0aGlzLl9wcmV2VGltZSA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2luaXQnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdzdGFydCcpO1xuICAgICAgdGhpcy5fcHJldlRpbWUgPSB0aGlzLmdldFRpbWUoKTtcblxuICAgICAgdGhpcy5mcmFtZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZXRob2Qgc3RvcFxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc3RvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3N0b3AnKTtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX2ZyYW1lSWQpO1xuICAgICAgdGhpcy5fZnJhbWVJZCA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCBkaXNwb3NlXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdkaXNwb3NlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoR2FtZUxvb3AucHJvdG90eXBlKSwgJ2Rpc3Bvc2UnLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHYW1lTG9vcDtcbn0oX2V2ZW50RGlzcGF0Y2hlcjIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEdhbWVMb29wO1xuXG59LHtcIkB2YWFsZW50aW4vZXZlbnQtZGlzcGF0Y2hlclwiOjF9XX0se30sWzJdKSgyKVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAsIHByZWZpeCA9ICd+JztcblxuLyoqXG4gKiBDb25zdHJ1Y3RvciB0byBjcmVhdGUgYSBzdG9yYWdlIGZvciBvdXIgYEVFYCBvYmplY3RzLlxuICogQW4gYEV2ZW50c2AgaW5zdGFuY2UgaXMgYSBwbGFpbiBvYmplY3Qgd2hvc2UgcHJvcGVydGllcyBhcmUgZXZlbnQgbmFtZXMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBFdmVudHMoKSB7fVxuXG4vL1xuLy8gV2UgdHJ5IHRvIG5vdCBpbmhlcml0IGZyb20gYE9iamVjdC5wcm90b3R5cGVgLiBJbiBzb21lIGVuZ2luZXMgY3JlYXRpbmcgYW5cbi8vIGluc3RhbmNlIGluIHRoaXMgd2F5IGlzIGZhc3RlciB0aGFuIGNhbGxpbmcgYE9iamVjdC5jcmVhdGUobnVsbClgIGRpcmVjdGx5LlxuLy8gSWYgYE9iamVjdC5jcmVhdGUobnVsbClgIGlzIG5vdCBzdXBwb3J0ZWQgd2UgcHJlZml4IHRoZSBldmVudCBuYW1lcyB3aXRoIGFcbi8vIGNoYXJhY3RlciB0byBtYWtlIHN1cmUgdGhhdCB0aGUgYnVpbHQtaW4gb2JqZWN0IHByb3BlcnRpZXMgYXJlIG5vdFxuLy8gb3ZlcnJpZGRlbiBvciB1c2VkIGFzIGFuIGF0dGFjayB2ZWN0b3IuXG4vL1xuaWYgKE9iamVjdC5jcmVhdGUpIHtcbiAgRXZlbnRzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgLy9cbiAgLy8gVGhpcyBoYWNrIGlzIG5lZWRlZCBiZWNhdXNlIHRoZSBgX19wcm90b19fYCBwcm9wZXJ0eSBpcyBzdGlsbCBpbmhlcml0ZWQgaW5cbiAgLy8gc29tZSBvbGQgYnJvd3NlcnMgbGlrZSBBbmRyb2lkIDQsIGlQaG9uZSA1LjEsIE9wZXJhIDExIGFuZCBTYWZhcmkgNS5cbiAgLy9cbiAgaWYgKCFuZXcgRXZlbnRzKCkuX19wcm90b19fKSBwcmVmaXggPSBmYWxzZTtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIHNpbmdsZSBldmVudCBsaXN0ZW5lci5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHBhcmFtIHtCb29sZWFufSBbb25jZT1mYWxzZV0gU3BlY2lmeSBpZiB0aGUgbGlzdGVuZXIgaXMgYSBvbmUtdGltZSBsaXN0ZW5lci5cbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRUUoZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgdGhpcy5mbiA9IGZuO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLm9uY2UgPSBvbmNlIHx8IGZhbHNlO1xufVxuXG4vKipcbiAqIEFkZCBhIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlbWl0dGVyIFJlZmVyZW5jZSB0byB0aGUgYEV2ZW50RW1pdHRlcmAgaW5zdGFuY2UuXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHBhcmFtIHtCb29sZWFufSBvbmNlIFNwZWNpZnkgaWYgdGhlIGxpc3RlbmVyIGlzIGEgb25lLXRpbWUgbGlzdGVuZXIuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkTGlzdGVuZXIoZW1pdHRlciwgZXZlbnQsIGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICB2YXIgbGlzdGVuZXIgPSBuZXcgRUUoZm4sIGNvbnRleHQgfHwgZW1pdHRlciwgb25jZSlcbiAgICAsIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCFlbWl0dGVyLl9ldmVudHNbZXZ0XSkgZW1pdHRlci5fZXZlbnRzW2V2dF0gPSBsaXN0ZW5lciwgZW1pdHRlci5fZXZlbnRzQ291bnQrKztcbiAgZWxzZSBpZiAoIWVtaXR0ZXIuX2V2ZW50c1tldnRdLmZuKSBlbWl0dGVyLl9ldmVudHNbZXZ0XS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZSBlbWl0dGVyLl9ldmVudHNbZXZ0XSA9IFtlbWl0dGVyLl9ldmVudHNbZXZ0XSwgbGlzdGVuZXJdO1xuXG4gIHJldHVybiBlbWl0dGVyO1xufVxuXG4vKipcbiAqIENsZWFyIGV2ZW50IGJ5IG5hbWUuXG4gKlxuICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IGVtaXR0ZXIgUmVmZXJlbmNlIHRvIHRoZSBgRXZlbnRFbWl0dGVyYCBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldnQgVGhlIEV2ZW50IG5hbWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjbGVhckV2ZW50KGVtaXR0ZXIsIGV2dCkge1xuICBpZiAoLS1lbWl0dGVyLl9ldmVudHNDb3VudCA9PT0gMCkgZW1pdHRlci5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICBlbHNlIGRlbGV0ZSBlbWl0dGVyLl9ldmVudHNbZXZ0XTtcbn1cblxuLyoqXG4gKiBNaW5pbWFsIGBFdmVudEVtaXR0ZXJgIGludGVyZmFjZSB0aGF0IGlzIG1vbGRlZCBhZ2FpbnN0IHRoZSBOb2RlLmpzXG4gKiBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG59XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IGxpc3RpbmcgdGhlIGV2ZW50cyBmb3Igd2hpY2ggdGhlIGVtaXR0ZXIgaGFzIHJlZ2lzdGVyZWRcbiAqIGxpc3RlbmVycy5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHZhciBuYW1lcyA9IFtdXG4gICAgLCBldmVudHNcbiAgICAsIG5hbWU7XG5cbiAgaWYgKHRoaXMuX2V2ZW50c0NvdW50ID09PSAwKSByZXR1cm4gbmFtZXM7XG5cbiAgZm9yIChuYW1lIGluIChldmVudHMgPSB0aGlzLl9ldmVudHMpKSB7XG4gICAgaWYgKGhhcy5jYWxsKGV2ZW50cywgbmFtZSkpIG5hbWVzLnB1c2gocHJlZml4ID8gbmFtZS5zbGljZSgxKSA6IG5hbWUpO1xuICB9XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICByZXR1cm4gbmFtZXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZXZlbnRzKSk7XG4gIH1cblxuICByZXR1cm4gbmFtZXM7XG59O1xuXG4vKipcbiAqIFJldHVybiB0aGUgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0FycmF5fSBUaGUgcmVnaXN0ZXJlZCBsaXN0ZW5lcnMuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKGV2ZW50KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBoYW5kbGVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmICghaGFuZGxlcnMpIHJldHVybiBbXTtcbiAgaWYgKGhhbmRsZXJzLmZuKSByZXR1cm4gW2hhbmRsZXJzLmZuXTtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGhhbmRsZXJzLmxlbmd0aCwgZWUgPSBuZXcgQXJyYXkobCk7IGkgPCBsOyBpKyspIHtcbiAgICBlZVtpXSA9IGhhbmRsZXJzW2ldLmZuO1xuICB9XG5cbiAgcmV0dXJuIGVlO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIG51bWJlciBvZiBsaXN0ZW5lcnMgbGlzdGVuaW5nIHRvIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge051bWJlcn0gVGhlIG51bWJlciBvZiBsaXN0ZW5lcnMuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uIGxpc3RlbmVyQ291bnQoZXZlbnQpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnRcbiAgICAsIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmICghbGlzdGVuZXJzKSByZXR1cm4gMDtcbiAgaWYgKGxpc3RlbmVycy5mbikgcmV0dXJuIDE7XG4gIHJldHVybiBsaXN0ZW5lcnMubGVuZ3RoO1xufTtcblxuLyoqXG4gKiBDYWxscyBlYWNoIG9mIHRoZSBsaXN0ZW5lcnMgcmVnaXN0ZXJlZCBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBldmVudCBoYWQgbGlzdGVuZXJzLCBlbHNlIGBmYWxzZWAuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoZXZlbnQsIGExLCBhMiwgYTMsIGE0LCBhNSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdXG4gICAgLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBhcmdzXG4gICAgLCBpO1xuXG4gIGlmIChsaXN0ZW5lcnMuZm4pIHtcbiAgICBpZiAobGlzdGVuZXJzLm9uY2UpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVycy5mbiwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICBjYXNlIDE6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCksIHRydWU7XG4gICAgICBjYXNlIDI6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEpLCB0cnVlO1xuICAgICAgY2FzZSAzOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiksIHRydWU7XG4gICAgICBjYXNlIDQ6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMyksIHRydWU7XG4gICAgICBjYXNlIDU6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMywgYTQpLCB0cnVlO1xuICAgICAgY2FzZSA2OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0LCBhNSksIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMSwgYXJncyA9IG5ldyBBcnJheShsZW4gLTEpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5mbi5hcHBseShsaXN0ZW5lcnMuY29udGV4dCwgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGhcbiAgICAgICwgajtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGxpc3RlbmVyc1tpXS5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnNbaV0uZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICAgIGNhc2UgMTogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQpOyBicmVhaztcbiAgICAgICAgY2FzZSAyOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEpOyBicmVhaztcbiAgICAgICAgY2FzZSAzOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEsIGEyKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgNDogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMiwgYTMpOyBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoIWFyZ3MpIGZvciAoaiA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICBhcmdzW2ogLSAxXSA9IGFyZ3VtZW50c1tqXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaXN0ZW5lcnNbaV0uZm4uYXBwbHkobGlzdGVuZXJzW2ldLmNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICByZXR1cm4gYWRkTGlzdGVuZXIodGhpcywgZXZlbnQsIGZuLCBjb250ZXh0LCBmYWxzZSk7XG59O1xuXG4vKipcbiAqIEFkZCBhIG9uZS10aW1lIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2NvbnRleHQ9dGhpc10gVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICByZXR1cm4gYWRkTGlzdGVuZXIodGhpcywgZXZlbnQsIGZuLCBjb250ZXh0LCB0cnVlKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBsaXN0ZW5lcnMgb2YgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBPbmx5IHJlbW92ZSB0aGUgbGlzdGVuZXJzIHRoYXQgbWF0Y2ggdGhpcyBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBPbmx5IHJlbW92ZSB0aGUgbGlzdGVuZXJzIHRoYXQgaGF2ZSB0aGlzIGNvbnRleHQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9uY2UgT25seSByZW1vdmUgb25lLXRpbWUgbGlzdGVuZXJzLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHJldHVybiB0aGlzO1xuICBpZiAoIWZuKSB7XG4gICAgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmIChsaXN0ZW5lcnMuZm4pIHtcbiAgICBpZiAoXG4gICAgICBsaXN0ZW5lcnMuZm4gPT09IGZuICYmXG4gICAgICAoIW9uY2UgfHwgbGlzdGVuZXJzLm9uY2UpICYmXG4gICAgICAoIWNvbnRleHQgfHwgbGlzdGVuZXJzLmNvbnRleHQgPT09IGNvbnRleHQpXG4gICAgKSB7XG4gICAgICBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGkgPSAwLCBldmVudHMgPSBbXSwgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGxpc3RlbmVyc1tpXS5mbiAhPT0gZm4gfHxcbiAgICAgICAgKG9uY2UgJiYgIWxpc3RlbmVyc1tpXS5vbmNlKSB8fFxuICAgICAgICAoY29udGV4dCAmJiBsaXN0ZW5lcnNbaV0uY29udGV4dCAhPT0gY29udGV4dClcbiAgICAgICkge1xuICAgICAgICBldmVudHMucHVzaChsaXN0ZW5lcnNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vXG4gICAgLy8gUmVzZXQgdGhlIGFycmF5LCBvciByZW1vdmUgaXQgY29tcGxldGVseSBpZiB3ZSBoYXZlIG5vIG1vcmUgbGlzdGVuZXJzLlxuICAgIC8vXG4gICAgaWYgKGV2ZW50cy5sZW5ndGgpIHRoaXMuX2V2ZW50c1tldnRdID0gZXZlbnRzLmxlbmd0aCA9PT0gMSA/IGV2ZW50c1swXSA6IGV2ZW50cztcbiAgICBlbHNlIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIGxpc3RlbmVycywgb3IgdGhvc2Ugb2YgdGhlIHNwZWNpZmllZCBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gW2V2ZW50XSBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnMoZXZlbnQpIHtcbiAgdmFyIGV2dDtcblxuICBpZiAoZXZlbnQpIHtcbiAgICBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuICAgIGlmICh0aGlzLl9ldmVudHNbZXZ0XSkgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vXG4vLyBBbGlhcyBtZXRob2RzIG5hbWVzIGJlY2F1c2UgcGVvcGxlIHJvbGwgbGlrZSB0aGF0LlxuLy9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBwcmVmaXguXG4vL1xuRXZlbnRFbWl0dGVyLnByZWZpeGVkID0gcHJlZml4O1xuXG4vL1xuLy8gQWxsb3cgYEV2ZW50RW1pdHRlcmAgdG8gYmUgaW1wb3J0ZWQgYXMgbW9kdWxlIG5hbWVzcGFjZS5cbi8vXG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBtb2R1bGUuXG4vL1xuaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgbW9kdWxlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xufVxuIiwiaW1wb3J0IEdhbWVMb29wIGZyb20gXCJAdmFhbGVudGluL2dhbWUtbG9vcFwiO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRlbWl0dGVyM1wiO1xuXG5leHBvcnQgY2xhc3MgTG9vcCB7XG4gIHB1YmxpYyByZWFkb25seSBldmVudHM6IGFueTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGxvb3A6IEdhbWVMb29wO1xuXG4gIGNvbnN0cnVjdG9yKGZyYW1lczogbnVtYmVyKSB7XG4gICAgdGhpcy5sb29wID0gbmV3IEdhbWVMb29wKGZyYW1lcyk7XG5cbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgcHVibGljIHJ1bigpIHtcbiAgICB0aGlzLmxvb3Auc3RhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICB0aGlzLmxvb3Aub24oXCJpbml0XCIsICgpID0+IHRoaXMuZXZlbnRzLmVtaXQoXCJpbml0XCIpKTtcblxuICAgIHRoaXMubG9vcC5vbihcInVwZGF0ZVwiLCAoZHQ6IG51bWJlcikgPT4gdGhpcy5ldmVudHMuZW1pdChcInVwZGF0ZVwiLCB7IGR0IH0pKTtcblxuICAgIHRoaXMubG9vcC5vbihcInJlbmRlclwiLCAoZHQ6IG51bWJlcikgPT4gdGhpcy5ldmVudHMuZW1pdChcInJlbmRlclwiLCB7IGR0IH0pKTtcbiAgfVxufVxuIiwiaW50ZXJmYWNlIElGaWVsZFByb3BzIHt9XG5cbmV4cG9ydCBjbGFzcyBGaWVsZCBpbXBsZW1lbnRzIElDb21wb25lbnQ8SUZpZWxkUHJvcHM+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm9wczogSUZpZWxkUHJvcHMsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dFxuICApIHt9XG5cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHt9XG5cbiAgcHVibGljIHJlbmRlcih7IGN0eCB9OiBJQ29tcG9uZW50UGFyYW1zKTogdm9pZCB7XG4gICAgY29uc3QgeyBmaWVsZCwgY2VsbCB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGZpZWxkLmNvbG9yO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gZmllbGQuc2l6ZS5oZWlnaHQ7IGkrKykge1xuICAgICAgY3R4Lm1vdmVUbygwLCBpICogY2VsbC5zaXplLmhlaWdodCk7XG4gICAgICBjdHgubGluZVRvKGZpZWxkLnNpemUud2lkdGggKiBjZWxsLnNpemUud2lkdGgsIGkgKiBjZWxsLnNpemUuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBmaWVsZC5zaXplLndpZHRoOyBpKyspIHtcbiAgICAgIGN0eC5tb3ZlVG8oaSAqIGNlbGwuc2l6ZS53aWR0aCwgMCk7XG4gICAgICBjdHgubGluZVRvKGkgKiBjZWxsLnNpemUud2lkdGgsIGZpZWxkLnNpemUuaGVpZ2h0ICogY2VsbC5zaXplLmhlaWdodCk7XG4gICAgfVxuXG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG59XG4iLCJpbnRlcmZhY2UgSUNlbGxQcm9wcyB7XG4gIHBvc2l0aW9uOiBJUG9pbnQ7XG59XG5cbmV4cG9ydCBjbGFzcyBDZWxsIGltcGxlbWVudHMgSUNvbXBvbmVudDxJQ2VsbFByb3BzPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJvcHM6IElDZWxsUHJvcHMsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dFxuICApIHt9XG5cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHt9XG5cbiAgcHVibGljIHJlbmRlcih7IGN0eCB9OiBJQ29tcG9uZW50UGFyYW1zKTogdm9pZCB7XG4gICAgY29uc3QgeyBjZWxsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3QgeyBwb3NpdGlvbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gY2VsbC5jb2xvcjtcblxuICAgIGN0eC5yZWN0KFxuICAgICAgcG9zaXRpb24ueCAqIGNlbGwuc2l6ZS53aWR0aCArIDEsXG4gICAgICBwb3NpdGlvbi55ICogY2VsbC5zaXplLmhlaWdodCArIDEsXG4gICAgICBjZWxsLnNpemUud2lkdGggLSAyLFxuICAgICAgY2VsbC5zaXplLmhlaWdodCAtIDJcbiAgICApO1xuXG4gICAgY3R4LmZpbGwoKTtcbiAgfVxufVxuIiwiaW50ZXJmYWNlIElQb2ludFByb3BzIHtcbiAgcG9pbnRzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBQb2ludHMgaW1wbGVtZW50cyBJQ29tcG9uZW50PElQb2ludFByb3BzPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcHJvcHM6IElQb2ludFByb3BzLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogSUNvbXBvbmVudENvbnRleHRcbiAgKSB7fVxuXG4gIHB1YmxpYyB1cGRhdGUocGFyYW1zOiBJQ29tcG9uZW50UGFyYW1zLCBwcm9wczogSVBvaW50UHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHsgY3R4IH06IElDb21wb25lbnRQYXJhbXMpIHtcbiAgICBjb25zdCB7IGZpZWxkLCBjZWxsIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICBjdHguZm9udCA9IFwiMjBweCBWZXJkYW5hXCI7XG5cbiAgICBjdHguZmlsbFRleHQoXG4gICAgICBgcG9pbnRzOiAke3RoaXMucHJvcHMucG9pbnRzfWAsXG4gICAgICBmaWVsZC5zaXplLndpZHRoICogY2VsbC5zaXplLndpZHRoICsgMjAsXG4gICAgICAyMFxuICAgICk7XG4gIH1cbn1cbiIsImludGVyZmFjZSBJR2FtZU92ZXJQcm9wcyB7XG4gIHBvaW50czogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgR2FtZU92ZXIgaW1wbGVtZW50cyBJQ29tcG9uZW50PElHYW1lT3ZlclByb3BzPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJvcHM6IElHYW1lT3ZlclByb3BzLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogSUNvbXBvbmVudENvbnRleHRcbiAgKSB7fVxuXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7fVxuXG4gIHB1YmxpYyByZW5kZXIoeyBjdHggfTogSUNvbXBvbmVudFBhcmFtcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgY2FudmFzIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICBjdHguZm9udCA9IFwiNTBweCBBcmlhbFwiO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXG4gICAgY3R4LmZpbGxUZXh0KFwiR2FtZSBPdmVyXCIsIGNhbnZhcy5zaXplLndpZHRoIC8gMiwgY2FudmFzLnNpemUuaGVpZ2h0IC8gMik7XG5cbiAgICBjdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuXG4gICAgY3R4LmZpbGxUZXh0KFxuICAgICAgYFlvdXIgcG9pbnRzOiAke3RoaXMucHJvcHMucG9pbnRzfWAsXG4gICAgICBjYW52YXMuc2l6ZS53aWR0aCAvIDIsXG4gICAgICBjYW52YXMuc2l6ZS5oZWlnaHQgLyAyICsgNTBcbiAgICApO1xuICB9XG59XG4iLCJpbnRlcmZhY2UgSUZpZWxkQXBwbHlQYXJhbXMge1xuICBmaWVsZDogSUZpZWxkTWFwW11bXTtcbiAgcG9pbnRzOiBJUG9pbnRbXTtcbiAgdmFsdWU6IElGaWVsZE1hcDtcbn1cblxuZXhwb3J0IGNsYXNzIEdhbWVNb2RlbCB7XG4gIHByaXZhdGUgZmllbGQ6IElGaWVsZE1hcFtdW107XG5cbiAgcHJpdmF0ZSBwb2ludHM6IG51bWJlciA9IDA7XG5cbiAgcHJpdmF0ZSBmaWd1cmU6IElGaWd1cmU7XG5cbiAgcHJpdmF0ZSBnYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGV4dDogSUNvbXBvbmVudENvbnRleHQpIHtcbiAgICB0aGlzLmZpZWxkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5jb250ZXh0LmZpZWxkLnNpemUuaGVpZ2h0IH0sICgpID0+XG4gICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNvbnRleHQuZmllbGQuc2l6ZS53aWR0aCB9LCAoKSA9PiBudWxsKVxuICAgICk7XG5cbiAgICB0aGlzLmZpZ3VyZSA9IHRoaXMuZ2V0TmV4dCgpO1xuICB9XG5cbiAgcHVibGljIHNldEZpZ3VyZVRvRmllbGQoZmlndXJlOiBJRmlndXJlKTogdm9pZCB7XG4gICAgdGhpcy5hcHBseVRvRmllbGQoe1xuICAgICAgZmllbGQ6IHRoaXMuZmllbGQsXG4gICAgICBwb2ludHM6IHRoaXMuZ2V0Q29vcmRzKGZpZ3VyZSksXG4gICAgICB2YWx1ZTogMVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVuc2V0RmlndXJlRnJvbUZpZWxkKGZpZ3VyZTogSUZpZ3VyZSk6IHZvaWQge1xuICAgIHRoaXMuYXBwbHlUb0ZpZWxkKHtcbiAgICAgIGZpZWxkOiB0aGlzLmZpZWxkLFxuICAgICAgcG9pbnRzOiB0aGlzLmdldENvb3JkcyhmaWd1cmUpLFxuICAgICAgdmFsdWU6IG51bGxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjaGVja0NvbGxpc2lvbihmaWd1cmU6IElGaWd1cmUpIHtcbiAgICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IHRoaXMuY29udGV4dC5maWVsZC5zaXplO1xuICAgIGNvbnN0IHBvaW50cyA9IHRoaXMuZ2V0Q29vcmRzKGZpZ3VyZSk7XG5cbiAgICBjb25zdCBjb29yZHMgPSBwb2ludHMucmVkdWNlKFxuICAgICAgKGFjYywgY3VycikgPT4ge1xuICAgICAgICBhY2MueHMucHVzaChjdXJyLngpO1xuICAgICAgICBhY2MueXMucHVzaChjdXJyLnkpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSxcbiAgICAgIHsgeHM6IFtdLCB5czogW10gfSBhcyB7IHhzOiBudW1iZXJbXTsgeXM6IG51bWJlcltdIH1cbiAgICApO1xuXG4gICAgY29uc3QgbWF4WSA9IE1hdGgubWF4KC4uLmNvb3Jkcy55cyk7XG4gICAgY29uc3QgbWluWCA9IE1hdGgubWluKC4uLmNvb3Jkcy54cyk7XG4gICAgY29uc3QgbWF4WCA9IE1hdGgubWF4KC4uLmNvb3Jkcy54cyk7XG5cbiAgICBmb3IgKGxldCBpID0gcG9pbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBwb2ludCA9IHBvaW50c1tpXTtcbiAgICAgIGNvbnN0IHJvdyA9IHRoaXMuZmllbGRbcG9pbnQueV07XG4gICAgICBjb25zdCBjZWxsID0gcm93ICYmIHJvd1twb2ludC54XTtcblxuICAgICAgaWYgKGNlbGwgfHwgbWF4WSA+PSBoZWlnaHQgfHwgbWluWCA8IDAgfHwgbWF4WCA+PSB3aWR0aCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgcm90YXRlKCkge1xuICAgIGNvbnN0IGZsaXBNYXRyaXggPSAobWF0cml4OiBJRmllbGRNYXBbXVtdKSA9PlxuICAgICAgbWF0cml4WzBdLm1hcCgoY29sdW1uLCBpZHgpID0+IG1hdHJpeC5tYXAocm93ID0+IHJvd1tpZHhdKSk7XG5cbiAgICBjb25zdCByb3RhdGVNYXRyaXggPSAobWF0cml4OiBJRmllbGRNYXBbXVtdKSA9PlxuICAgICAgZmxpcE1hdHJpeChKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1hdHJpeCkpLnJldmVyc2UoKSk7XG5cbiAgICBjb25zdCBmaWd1cmUgPSB7XG4gICAgICAuLi50aGlzLmZpZ3VyZSxcbiAgICAgIGZpZWxkOiByb3RhdGVNYXRyaXgodGhpcy5maWd1cmUuZmllbGQpXG4gICAgfTtcblxuICAgIHRoaXMudW5zZXRGaWd1cmVGcm9tRmllbGQodGhpcy5maWd1cmUpO1xuXG4gICAgaWYgKCF0aGlzLmNoZWNrQ29sbGlzaW9uKGZpZ3VyZSkpIHtcbiAgICAgIHRoaXMuZmlndXJlID0gZmlndXJlO1xuICAgIH1cblxuICAgIHRoaXMuc2V0RmlndXJlVG9GaWVsZCh0aGlzLmZpZ3VyZSk7XG4gIH1cblxuICBwdWJsaWMgbW92ZSh7IHggPSAwLCB5ID0gMCB9OiBJRGVsdGFQb2ludCkge1xuICAgIHRoaXMudW5zZXRGaWd1cmVGcm9tRmllbGQodGhpcy5maWd1cmUpO1xuXG4gICAgY29uc3QgbmV4dEZpZ3VyZSA9IHtcbiAgICAgIC4uLnRoaXMuZmlndXJlLFxuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgeTogdGhpcy5maWd1cmUucG9zaXRpb24ueSArIHksXG4gICAgICAgIHg6IHRoaXMuZmlndXJlLnBvc2l0aW9uLnggKyB4XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0aGlzLmNoZWNrQ29sbGlzaW9uKG5leHRGaWd1cmUpKSB7XG4gICAgICB0aGlzLnNldEZpZ3VyZVRvRmllbGQodGhpcy5maWd1cmUpO1xuXG4gICAgICBpZiAoeCkgcmV0dXJuO1xuXG4gICAgICBpZiAoeSkge1xuICAgICAgICB0aGlzLnJlbW92ZU1hdGNoZXMoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2hlY2tHYW1lT3ZlcigpKSB7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmZpZ3VyZSA9IHRoaXMuZ2V0TmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpZ3VyZSA9IG5leHRGaWd1cmU7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRGaWd1cmVUb0ZpZWxkKHRoaXMuZmlndXJlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXROZXh0KCkge1xuICAgIHRoaXMucG9pbnRzKys7XG5cbiAgICBjb25zdCBmaWd1cmVzID0gW1xuICAgICAgW1sxLCAxXSwgWzAsIDFdLCBbMCwgMV1dLFxuICAgICAgW1sxLCAxXSwgWzEsIDFdXSxcbiAgICAgIFtbMSwgMSwgMSwgMV1dLFxuICAgICAgW1sxLCAxLCAxXSwgWzAsIDEsIDBdXSxcbiAgICAgIFtbMSwgMSwgMF0sIFswLCAxLCAxXV0sXG4gICAgICBbWzAsIDEsIDFdLCBbMSwgMSwgMF1dLFxuICAgICAgW1sxXV1cbiAgICBdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHg6IH5+KHRoaXMuY29udGV4dC5maWVsZC5zaXplLndpZHRoIC8gMiksXG4gICAgICAgIHk6IC0zXG4gICAgICB9LFxuICAgICAgZmllbGQ6IGZpZ3VyZXNbfn4oTWF0aC5yYW5kb20oKSAqIGZpZ3VyZXMubGVuZ3RoKV1cbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGdldE1vZGVsKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZDogdGhpcy5maWVsZCxcbiAgICAgIHBvaW50czogdGhpcy5wb2ludHMsXG4gICAgICBnYW1lT3ZlcjogdGhpcy5nYW1lT3ZlclxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGFwcGx5VG9GaWVsZCh7IGZpZWxkLCBwb2ludHMsIHZhbHVlIH06IElGaWVsZEFwcGx5UGFyYW1zKSB7XG4gICAgcG9pbnRzLmZvckVhY2gocG9pbnQgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gZmllbGRbcG9pbnQueV07XG5cbiAgICAgIGlmIChyb3cpIHtcbiAgICAgICAgcm93W3BvaW50LnhdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldENvb3JkcyhmaWd1cmU6IElGaWd1cmUpIHtcbiAgICByZXR1cm4gZmlndXJlLmZpZWxkLnJlZHVjZShcbiAgICAgIChhY2MsIGN1cnIsIHJvd0lkeCkgPT4ge1xuICAgICAgICBjdXJyLmZvckVhY2goKHBhdHRlcm4sIGNlbGxJZHgpID0+IHtcbiAgICAgICAgICBpZiAocGF0dGVybikge1xuICAgICAgICAgICAgYWNjLnB1c2goe1xuICAgICAgICAgICAgICB4OiBmaWd1cmUucG9zaXRpb24ueCArIGNlbGxJZHgsXG4gICAgICAgICAgICAgIHk6IGZpZ3VyZS5wb3NpdGlvbi55ICsgcm93SWR4XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LFxuICAgICAgW10gYXMgSVBvaW50W11cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVNYXRjaGVzKCkge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5jb250ZXh0LmZpZWxkLnNpemU7XG5cbiAgICBmb3IgKGxldCBpID0gaGVpZ2h0IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgICBpZiAoIXRoaXMuZmllbGRbaV1bal0pIGJyZWFrO1xuXG4gICAgICAgIGlmIChqID09PSB3aWR0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZVJvdyhpKTtcbiAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVJvdyh5UG9zaXRpb246IG51bWJlcikge1xuICAgIHRoaXMucG9pbnRzICs9IDEwO1xuXG4gICAgZm9yIChsZXQgaSA9IHlQb3NpdGlvbjsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb250ZXh0LmZpZWxkLnNpemUud2lkdGg7IGorKykge1xuICAgICAgICBjb25zdCBwcmV2ID0gdGhpcy5maWVsZFtpIC0gMV07XG4gICAgICAgIHRoaXMuZmllbGRbaV1bal0gPSBwcmV2ID8gcHJldltqXSA6IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0dhbWVPdmVyKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb250ZXh0LmZpZWxkLnNpemUud2lkdGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuZmllbGRbMF1baV0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gXCIuL2NvbXBvbmVudHMvZmllbGRcIjtcbmltcG9ydCB7IENlbGwgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NlbGxcIjtcbmltcG9ydCB7IFBvaW50cyB9IGZyb20gXCIuL2NvbXBvbmVudHMvcG9pbnRzXCI7XG5pbXBvcnQgeyBHYW1lT3ZlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvZ2FtZS1vdmVyXCI7XG5pbXBvcnQgeyBHYW1lTW9kZWwgfSBmcm9tIFwiLi9nYW1lLW1vZGVsXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbGxlciBpbXBsZW1lbnRzIElDb21wb25lbnQ8SUNvbXBvbmVudENvbnRleHQ+IHtcbiAgcHJpdmF0ZSBnYW1lOiBHYW1lTW9kZWw7XG5cbiAgcHJpdmF0ZSBjb250ZXh0ID0gdGhpcy5wcm9wcztcblxuICBwcml2YXRlIGNvbXBvbmVudHM6IElDb21wb25lbnQ8YW55PltdID0gW1xuICAgIG5ldyBGaWVsZCh7fSwgdGhpcy5jb250ZXh0KSxcbiAgICBuZXcgUG9pbnRzKHsgcG9pbnRzOiAwIH0sIHRoaXMuY29udGV4dClcbiAgXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHByb3BzOiBJQ29tcG9uZW50Q29udGV4dCkge1xuICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lTW9kZWwodGhpcy5jb250ZXh0KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgdGhpcy5nYW1lLnJvdGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAzNykge1xuICAgICAgICB0aGlzLmdhbWUubW92ZSh7IHg6IC0xIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSkge1xuICAgICAgICB0aGlzLmdhbWUubW92ZSh7IHg6IDEgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKHBhcmFtczogSUNvbXBvbmVudFBhcmFtcykge1xuICAgIGNvbnN0IG1vZGVsID0gdGhpcy5nYW1lLmdldE1vZGVsKCk7XG5cbiAgICBpZiAobW9kZWwuZ2FtZU92ZXIpIHJldHVybjtcblxuICAgIHRoaXMuZ2FtZS5tb3ZlKHsgeTogMSB9KTtcbiAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgaWYgKGNvbXBvbmVudCBpbnN0YW5jZW9mIFBvaW50cykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LnVwZGF0ZShwYXJhbXMsIHtcbiAgICAgICAgICBwb2ludHM6IG1vZGVsLnBvaW50c1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29tcG9uZW50LnVwZGF0ZShwYXJhbXMsIHt9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIocGFyYW1zOiBJQ29tcG9uZW50UGFyYW1zKSB7XG4gICAgY29uc3QgbW9kZWwgPSB0aGlzLmdhbWUuZ2V0TW9kZWwoKTtcblxuICAgIGlmIChtb2RlbC5nYW1lT3Zlcikge1xuICAgICAgY29uc3QgZ2FtZU92ZXIgPSBuZXcgR2FtZU92ZXIoeyBwb2ludHM6IG1vZGVsLnBvaW50cyB9LCB0aGlzLmNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gZ2FtZU92ZXIucmVuZGVyKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJGaWVsZChwYXJhbXMpO1xuICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQucmVuZGVyKHBhcmFtcykpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJGaWVsZChwYXJhbXM6IElDb21wb25lbnRQYXJhbXMpIHtcbiAgICBjb25zdCB7IGZpZWxkIH0gPSB0aGlzLmdhbWUuZ2V0TW9kZWwoKTtcblxuICAgIGZpZWxkLmZvckVhY2goKHJvdywgcm93SWR4KSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoY2VsbCwgY2VsbElkeCkgPT4ge1xuICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgIGNvbnN0IGNlbGwgPSBuZXcgQ2VsbChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICB4OiBjZWxsSWR4LFxuICAgICAgICAgICAgICAgIHk6IHJvd0lkeFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5jb250ZXh0XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNlbGwucmVuZGVyKHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBMb29wIH0gZnJvbSBcIi4vbG9vcFwiO1xuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9nYW1lLWNvbnRyb2xsZXJcIjtcblxuY29uc3QgV0lEVEggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbmNvbnN0IEhFSUdIVCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblxuZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcbmRvY3VtZW50LmJvZHkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSBcIjEwMHZoXCI7XG5kb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBcImJsYWNrXCI7XG5cbmNhbnZhcy53aWR0aCA9IFdJRFRIO1xuY2FudmFzLmhlaWdodCA9IEhFSUdIVDtcbmNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuY2FudmFzLnN0eWxlLm1hcmdpbiA9IFwiYXV0b1wiO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XG5cbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG5jb25zdCBsb29wID0gbmV3IExvb3AoNSk7XG5jb25zdCBnYW1lID0gbmV3IEdhbWVDb250cm9sbGVyKHtcbiAgY2FudmFzOiB7XG4gICAgc2l6ZToge1xuICAgICAgd2lkdGg6IFdJRFRILFxuICAgICAgaGVpZ2h0OiBIRUlHSFRcbiAgICB9XG4gIH0sXG4gIGZpZWxkOiB7XG4gICAgc2l6ZToge1xuICAgICAgd2lkdGg6IDE1LFxuICAgICAgaGVpZ2h0OiAyMFxuICAgIH0sXG4gICAgY29sb3I6IFwiIzZmN2Y5MFwiXG4gIH0sXG4gIGNlbGw6IHtcbiAgICBzaXplOiB7XG4gICAgICB3aWR0aDogMjAsXG4gICAgICBoZWlnaHQ6IDIwXG4gICAgfSxcbiAgICBjb2xvcjogXCIjNmY3ZjkwXCJcbiAgfVxufSk7XG5cbmxvb3AuZXZlbnRzLm9uKFwidXBkYXRlXCIsICh7IGR0IH06IHsgZHQ6IG51bWJlciB9KSA9PiBnYW1lLnVwZGF0ZSh7IGR0LCBjdHggfSkpO1xuXG5sb29wLmV2ZW50cy5vbihcInJlbmRlclwiLCAoeyBkdCB9OiB7IGR0OiBudW1iZXIgfSkgPT4ge1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpO1xuXG4gIGdhbWUucmVuZGVyKHsgZHQsIGN0eCB9KTtcbn0pO1xuXG5sb29wLnJ1bigpO1xuIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJFdmVudEVtaXR0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxBQUEwRCxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxBQUErTyxDQUFDLEVBQUUsVUFBVSxDQUFDLEFBQTBCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU9BLGVBQU8sRUFBRSxVQUFVLEVBQUVBLGVBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBT0EsZUFBTyxFQUFFLFVBQVUsRUFBRUEsZUFBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUN4MUI7Q0FFQSxJQUFJLFlB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QyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQztPQUNsRSxLQUFLLENBQUMsRUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUM7T0FDdEUsS0FBSyxDQUFDLEVBQUUsT0FBTyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQztPQUMxRSxLQUFLLENBQUMsRUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQztNQUMvRTs7S0FFRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO09BQ2xELElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzVCOztLQUVELFNBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0MsTUFBTTtLQUNMLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNO1NBQ3pCLENBQUMsQ0FBQzs7S0FFTixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtPQUMzQixJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7O09BRXBGLFFBQVEsR0FBRztTQUNULEtBQUssQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU07U0FDMUQsS0FBSyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU07U0FDOUQsS0FBSyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNO1NBQ2xFLEtBQUssQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU07U0FDdEU7V0FDRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7YUFDN0QsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUI7O1dBRUQsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9B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
