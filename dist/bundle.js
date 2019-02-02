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

	class Field {
	    constructor(props, context) {
	        this.props = props;
	        this.context = context;
	    }
	    update() {
	    }
	    render({ ctx }) {
	        ctx.beginPath();
	        ctx.strokeStyle = this.context.theme.fieldColor;
	        for (let i = 0; i <= this.context.dimensions.height; i++) {
	            ctx.moveTo(0, i * this.context.cell.size.height);
	            ctx.lineTo(this.context.dimensions.width * this.context.cell.size.width, i * this.context.cell.size.height);
	        }
	        for (let i = 0; i <= this.context.dimensions.width; i++) {
	            ctx.moveTo(i * this.context.cell.size.width, 0);
	            ctx.lineTo(i * this.context.cell.size.width, this.context.dimensions.height * this.context.cell.size.height);
	        }
	        ctx.stroke();
	    }
	}

	class Cell {
	    constructor(props, context) {
	        this.props = props;
	        this.context = context;
	    }
	    update() {
	    }
	    render({ ctx }) {
	        const { cell } = this.context;
	        const { position } = this.props;
	        ctx.beginPath();
	        ctx.fillStyle = this.context.theme.cellColor;
	        ctx.rect(position.x * cell.size.width + 1, position.y * cell.size.height + 1, cell.size.width - 2, cell.size.height - 2);
	        ctx.fill();
	    }
	}

	class Points {
	    constructor(props, context) {
	        this.props = props;
	        this.context = context;
	    }
	    update(params, props) {
	        this.props = props;
	    }
	    render({ ctx }) {
	        ctx.font = "30px Arial";
	        ctx.fillText(`points: ${this.props.points}`, this.context.size.width + 20, 30);
	    }
	}

	class GameModel {
	    constructor(context) {
	        this.context = context;
	        this.points = 0;
	        this.field = Array.from({ length: this.context.dimensions.height }, () => Array.from({ length: this.context.dimensions.width }, () => null));
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
	        const { height, width } = this.context.dimensions;
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
	        this.unsetFigureFromField(this.figure);
	        const flipMatrix = (matrix) => matrix[0].map((column, index) => matrix.map(row => row[index]));
	        const rotateMatrix = (matrix) => flipMatrix(matrix.reverse());
	        this.figure = Object.assign({}, this.figure, { field: rotateMatrix(this.figure.field) });
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
	                x: ~~(this.context.dimensions.width / 2),
	                y: -3
	            },
	            field: figures[~~(Math.random() * figures.length)]
	        };
	    }
	    getModel() {
	        return {
	            field: this.field,
	            points: this.points
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
	        const { width, height } = this.context.dimensions;
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
	            for (let j = 0; j < this.context.dimensions.width; j++) {
	                const prev = this.field[i - 1];
	                this.field[i][j] = prev ? prev[j] : null;
	            }
	        }
	    }
	}

	class GameController {
	    constructor(props) {
	        this.props = props;
	        this.fieldConfig = {
	            width: 10,
	            height: 20
	        };
	        this.context = {
	            theme: {
	                cellColor: "#6f7f90",
	                fieldColor: "#6f7f90"
	            },
	            dimensions: this.fieldConfig,
	            size: {
	                width: this.props.dimensions.width,
	                height: this.props.dimensions.height
	            },
	            cell: {
	                size: {
	                    width: this.props.dimensions.width / this.fieldConfig.width,
	                    height: this.props.dimensions.height / this.fieldConfig.height
	                }
	            }
	        };
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
	        this.game.move({ y: 1 });
	        this.components.forEach(component => {
	            if (component instanceof Points) {
	                return component.update(params, {
	                    points: this.game.getModel().points
	                });
	            }
	            component.update(params, {});
	        });
	    }
	    render(params) {
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

	const WIDTH = 800;
	const HEIGHT = 600;
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
	    dimensions: {
	        width: 300,
	        height: 400
	    }
	});
	loop.events.on("update", ({ dt }) => {
	    game.update({ dt, ctx });
	});
	loop.events.on("render", ({ dt }) => {
	    ctx.clearRect(0, 0, WIDTH, HEIGHT);
	    game.render({ dt, ctx });
	});
	loop.run();

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvQHZhYWxlbnRpbi9nYW1lLWxvb3AvZGlzdC9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9ldmVudGVtaXR0ZXIzL2luZGV4LmpzIiwiLi4vc3JjL2xvb3AudHMiLCIuLi9zcmMvY29tcG9uZW50cy9maWVsZC50cyIsIi4uL3NyYy9jb21wb25lbnRzL2NlbGwudHMiLCIuLi9zcmMvY29tcG9uZW50cy9wb2ludHMudHMiLCIuLi9zcmMvZ2FtZS1tb2RlbC50cyIsIi4uL3NyYy9nYW1lLWNvbnRyb2xsZXIudHMiLCIuLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihmKXtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiKXttb2R1bGUuZXhwb3J0cz1mKCl9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW10sZil9ZWxzZXt2YXIgZztpZih0eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIil7Zz13aW5kb3d9ZWxzZSBpZih0eXBlb2YgZ2xvYmFsIT09XCJ1bmRlZmluZWRcIil7Zz1nbG9iYWx9ZWxzZSBpZih0eXBlb2Ygc2VsZiE9PVwidW5kZWZpbmVkXCIpe2c9c2VsZn1lbHNle2c9dGhpc31nLnZhYWxlbnRpbmdhbWVMb29wID0gZigpfX0pKGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIEBjbGFzcyBFdmVudERpc3BhdGNoZXJcbiAqL1xuXG52YXIgRXZlbnREaXNwYXRjaGVyID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQGNvbnN0cnVjdHMgRXZlbnREaXNwYXRjaGVyXG4gICAqL1xuXG4gIGZ1bmN0aW9uIEV2ZW50RGlzcGF0Y2hlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnREaXNwYXRjaGVyKTtcblxuICAgIHRoaXMudHJpZ2dlciA9IHRoaXMuZGlzcGF0Y2hFdmVudDtcbiAgICB0aGlzLm9uID0gdGhpcy5hZGRFdmVudExpc3RlbmVyO1xuICAgIHRoaXMub2ZmID0gdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyO1xuXG4gICAgdGhpcy5fbGlzdGVuZXJzID0ge307XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBkaXNwYXRjaEV2ZW50XG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHthbnlbXX0gYXJnc1xuICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICovXG5cbiAgX2NyZWF0ZUNsYXNzKEV2ZW50RGlzcGF0Y2hlciwgW3tcbiAgICBrZXk6ICdkaXNwYXRjaEV2ZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcGF0Y2hFdmVudCh0eXBlKSB7XG4gICAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1t0eXBlXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHRoaXMuX2xpc3RlbmVyc1t0eXBlXVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgIGxpc3RlbmVyLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgZGlzcGF0Y2hFdmVudFxuICAgICAqXG4gICAgICogQG1ldGhvZCB0cmlnZ2VyXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdhZGRFdmVudExpc3RlbmVyJyxcblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgYWRkRXZlbnRMaXN0ZW5lclxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICAqIEBwYXJhbSB7KGFueSkgPT4gYW55fSBjYlxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGNiKSB7XG4gICAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1t0eXBlXSkge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnNbdHlwZV0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2xpc3RlbmVyc1t0eXBlXS5pbmRleE9mKGNiKSAhPT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgY2FuXFwndCBhZGQgdGhlIHNhbWUgbGlzdGVuZXIgdG8gdGhlIHNhbWUgZXZlbnQgbW9yZSB0aGFuIG9uY2UnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fbGlzdGVuZXJzW3R5cGVdLnB1c2goY2IpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgYWRkRXZlbnRMaXN0ZW5lclxuICAgICAqXG4gICAgICogQG1ldGhvZCBvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlRXZlbnRMaXN0ZW5lcicsXG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIHJlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0geyhhbnkpID0+IGFueX0gY2JcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYikge1xuICAgICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbdHlwZV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaSA9IHRoaXMuX2xpc3RlbmVyc1t0eXBlXS5pbmRleE9mKGNiKTtcblxuICAgICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVyc1t0eXBlXS5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciByZW1vdmVFdmVudExpc3RlbmVyXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIG9mZlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZGlzcG9zZScsXG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIGRpc3Bvc2VcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMgPSBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFdmVudERpc3BhdGNoZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEV2ZW50RGlzcGF0Y2hlcjtcblxufSx7fV0sMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTsgfSB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfTtcblxudmFyIF9ldmVudERpc3BhdGNoZXIgPSByZXF1aXJlKCdAdmFhbGVudGluL2V2ZW50LWRpc3BhdGNoZXInKTtcblxudmFyIF9ldmVudERpc3BhdGNoZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXZlbnREaXNwYXRjaGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIEBjbGFzcyBHYW1lTG9vcFxuICovXG5cbnZhciBHYW1lTG9vcCA9IGZ1bmN0aW9uIChfRXZlbnREaXNwYXRjaGVyKSB7XG4gIF9pbmhlcml0cyhHYW1lTG9vcCwgX0V2ZW50RGlzcGF0Y2hlcik7XG5cbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RzIEdhbWVMb29wXG4gICAqIEBwYXJhbSB7ZmxvYXR9IFtmcHMgPSA2MF1cbiAgICogQHBhcmFtIHtmbG9hdH0gW3NwZWVkID0gMV1cbiAgICovXG5cbiAgZnVuY3Rpb24gR2FtZUxvb3AoKSB7XG4gICAgdmFyIGZwcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IDYwIDogYXJndW1lbnRzWzBdO1xuICAgIHZhciBzcGVlZCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDEgOiBhcmd1bWVudHNbMV07XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2FtZUxvb3ApO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdhbWVMb29wKS5jYWxsKHRoaXMpKTtcblxuICAgIF90aGlzLl90aW1lU3RlcCA9IDEwMDAgLyBmcHMgKiBzcGVlZDtcbiAgICBfdGhpcy5fcHJldlRpbWUgPSBudWxsO1xuICAgIF90aGlzLl9sYWdUaW1lID0gMDtcblxuICAgIF90aGlzLl9mcmFtZSA9IF90aGlzLmZyYW1lLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLl9mcmFtZUlkID0gbnVsbDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBnZXRUaW1lXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm5zIHtmbG9hdH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoR2FtZUxvb3AsIFt7XG4gICAga2V5OiAnZ2V0VGltZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRpbWUoKSB7XG4gICAgICByZXR1cm4gcGVyZm9ybWFuY2UgJiYgcGVyZm9ybWFuY2Uubm93ID8gcGVyZm9ybWFuY2Uubm93KCkgOiBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgZnJhbWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdmcmFtZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZyYW1lKCkge1xuICAgICAgdmFyIGN1clRpbWUgPSB0aGlzLmdldFRpbWUoKTtcbiAgICAgIHZhciBkdCA9IE1hdGgubWluKDEwMDAsIGN1clRpbWUgLSB0aGlzLl9wcmV2VGltZSk7XG4gICAgICB0aGlzLl9wcmV2VGltZSA9IGN1clRpbWU7XG4gICAgICB0aGlzLl9sYWdUaW1lICs9IGR0O1xuXG4gICAgICB3aGlsZSAodGhpcy5fbGFnVGltZSA+IHRoaXMuX3RpbWVTdGVwKSB7XG4gICAgICAgIHRoaXMuX2xhZ1RpbWUgLT0gdGhpcy5fdGltZVN0ZXA7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndXBkYXRlJywgdGhpcy5fdGltZVN0ZXApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3JlbmRlcicsIGR0KTtcblxuICAgICAgdGhpcy5fZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9mcmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCBzdGFydFxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc3RhcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgIGlmICh0aGlzLl9wcmV2VGltZSA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2luaXQnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdzdGFydCcpO1xuICAgICAgdGhpcy5fcHJldlRpbWUgPSB0aGlzLmdldFRpbWUoKTtcblxuICAgICAgdGhpcy5mcmFtZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZXRob2Qgc3RvcFxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc3RvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3N0b3AnKTtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX2ZyYW1lSWQpO1xuICAgICAgdGhpcy5fZnJhbWVJZCA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCBkaXNwb3NlXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdkaXNwb3NlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoR2FtZUxvb3AucHJvdG90eXBlKSwgJ2Rpc3Bvc2UnLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHYW1lTG9vcDtcbn0oX2V2ZW50RGlzcGF0Y2hlcjIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEdhbWVMb29wO1xuXG59LHtcIkB2YWFsZW50aW4vZXZlbnQtZGlzcGF0Y2hlclwiOjF9XX0se30sWzJdKSgyKVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAsIHByZWZpeCA9ICd+JztcblxuLyoqXG4gKiBDb25zdHJ1Y3RvciB0byBjcmVhdGUgYSBzdG9yYWdlIGZvciBvdXIgYEVFYCBvYmplY3RzLlxuICogQW4gYEV2ZW50c2AgaW5zdGFuY2UgaXMgYSBwbGFpbiBvYmplY3Qgd2hvc2UgcHJvcGVydGllcyBhcmUgZXZlbnQgbmFtZXMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBFdmVudHMoKSB7fVxuXG4vL1xuLy8gV2UgdHJ5IHRvIG5vdCBpbmhlcml0IGZyb20gYE9iamVjdC5wcm90b3R5cGVgLiBJbiBzb21lIGVuZ2luZXMgY3JlYXRpbmcgYW5cbi8vIGluc3RhbmNlIGluIHRoaXMgd2F5IGlzIGZhc3RlciB0aGFuIGNhbGxpbmcgYE9iamVjdC5jcmVhdGUobnVsbClgIGRpcmVjdGx5LlxuLy8gSWYgYE9iamVjdC5jcmVhdGUobnVsbClgIGlzIG5vdCBzdXBwb3J0ZWQgd2UgcHJlZml4IHRoZSBldmVudCBuYW1lcyB3aXRoIGFcbi8vIGNoYXJhY3RlciB0byBtYWtlIHN1cmUgdGhhdCB0aGUgYnVpbHQtaW4gb2JqZWN0IHByb3BlcnRpZXMgYXJlIG5vdFxuLy8gb3ZlcnJpZGRlbiBvciB1c2VkIGFzIGFuIGF0dGFjayB2ZWN0b3IuXG4vL1xuaWYgKE9iamVjdC5jcmVhdGUpIHtcbiAgRXZlbnRzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgLy9cbiAgLy8gVGhpcyBoYWNrIGlzIG5lZWRlZCBiZWNhdXNlIHRoZSBgX19wcm90b19fYCBwcm9wZXJ0eSBpcyBzdGlsbCBpbmhlcml0ZWQgaW5cbiAgLy8gc29tZSBvbGQgYnJvd3NlcnMgbGlrZSBBbmRyb2lkIDQsIGlQaG9uZSA1LjEsIE9wZXJhIDExIGFuZCBTYWZhcmkgNS5cbiAgLy9cbiAgaWYgKCFuZXcgRXZlbnRzKCkuX19wcm90b19fKSBwcmVmaXggPSBmYWxzZTtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIHNpbmdsZSBldmVudCBsaXN0ZW5lci5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHBhcmFtIHtCb29sZWFufSBbb25jZT1mYWxzZV0gU3BlY2lmeSBpZiB0aGUgbGlzdGVuZXIgaXMgYSBvbmUtdGltZSBsaXN0ZW5lci5cbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRUUoZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgdGhpcy5mbiA9IGZuO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLm9uY2UgPSBvbmNlIHx8IGZhbHNlO1xufVxuXG4vKipcbiAqIEFkZCBhIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlbWl0dGVyIFJlZmVyZW5jZSB0byB0aGUgYEV2ZW50RW1pdHRlcmAgaW5zdGFuY2UuXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHBhcmFtIHtCb29sZWFufSBvbmNlIFNwZWNpZnkgaWYgdGhlIGxpc3RlbmVyIGlzIGEgb25lLXRpbWUgbGlzdGVuZXIuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYWRkTGlzdGVuZXIoZW1pdHRlciwgZXZlbnQsIGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICB2YXIgbGlzdGVuZXIgPSBuZXcgRUUoZm4sIGNvbnRleHQgfHwgZW1pdHRlciwgb25jZSlcbiAgICAsIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCFlbWl0dGVyLl9ldmVudHNbZXZ0XSkgZW1pdHRlci5fZXZlbnRzW2V2dF0gPSBsaXN0ZW5lciwgZW1pdHRlci5fZXZlbnRzQ291bnQrKztcbiAgZWxzZSBpZiAoIWVtaXR0ZXIuX2V2ZW50c1tldnRdLmZuKSBlbWl0dGVyLl9ldmVudHNbZXZ0XS5wdXNoKGxpc3RlbmVyKTtcbiAgZWxzZSBlbWl0dGVyLl9ldmVudHNbZXZ0XSA9IFtlbWl0dGVyLl9ldmVudHNbZXZ0XSwgbGlzdGVuZXJdO1xuXG4gIHJldHVybiBlbWl0dGVyO1xufVxuXG4vKipcbiAqIENsZWFyIGV2ZW50IGJ5IG5hbWUuXG4gKlxuICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IGVtaXR0ZXIgUmVmZXJlbmNlIHRvIHRoZSBgRXZlbnRFbWl0dGVyYCBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldnQgVGhlIEV2ZW50IG5hbWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjbGVhckV2ZW50KGVtaXR0ZXIsIGV2dCkge1xuICBpZiAoLS1lbWl0dGVyLl9ldmVudHNDb3VudCA9PT0gMCkgZW1pdHRlci5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICBlbHNlIGRlbGV0ZSBlbWl0dGVyLl9ldmVudHNbZXZ0XTtcbn1cblxuLyoqXG4gKiBNaW5pbWFsIGBFdmVudEVtaXR0ZXJgIGludGVyZmFjZSB0aGF0IGlzIG1vbGRlZCBhZ2FpbnN0IHRoZSBOb2RlLmpzXG4gKiBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG59XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IGxpc3RpbmcgdGhlIGV2ZW50cyBmb3Igd2hpY2ggdGhlIGVtaXR0ZXIgaGFzIHJlZ2lzdGVyZWRcbiAqIGxpc3RlbmVycy5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHZhciBuYW1lcyA9IFtdXG4gICAgLCBldmVudHNcbiAgICAsIG5hbWU7XG5cbiAgaWYgKHRoaXMuX2V2ZW50c0NvdW50ID09PSAwKSByZXR1cm4gbmFtZXM7XG5cbiAgZm9yIChuYW1lIGluIChldmVudHMgPSB0aGlzLl9ldmVudHMpKSB7XG4gICAgaWYgKGhhcy5jYWxsKGV2ZW50cywgbmFtZSkpIG5hbWVzLnB1c2gocHJlZml4ID8gbmFtZS5zbGljZSgxKSA6IG5hbWUpO1xuICB9XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICByZXR1cm4gbmFtZXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZXZlbnRzKSk7XG4gIH1cblxuICByZXR1cm4gbmFtZXM7XG59O1xuXG4vKipcbiAqIFJldHVybiB0aGUgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0FycmF5fSBUaGUgcmVnaXN0ZXJlZCBsaXN0ZW5lcnMuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKGV2ZW50KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBoYW5kbGVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmICghaGFuZGxlcnMpIHJldHVybiBbXTtcbiAgaWYgKGhhbmRsZXJzLmZuKSByZXR1cm4gW2hhbmRsZXJzLmZuXTtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGhhbmRsZXJzLmxlbmd0aCwgZWUgPSBuZXcgQXJyYXkobCk7IGkgPCBsOyBpKyspIHtcbiAgICBlZVtpXSA9IGhhbmRsZXJzW2ldLmZuO1xuICB9XG5cbiAgcmV0dXJuIGVlO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIG51bWJlciBvZiBsaXN0ZW5lcnMgbGlzdGVuaW5nIHRvIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge051bWJlcn0gVGhlIG51bWJlciBvZiBsaXN0ZW5lcnMuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uIGxpc3RlbmVyQ291bnQoZXZlbnQpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnRcbiAgICAsIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmICghbGlzdGVuZXJzKSByZXR1cm4gMDtcbiAgaWYgKGxpc3RlbmVycy5mbikgcmV0dXJuIDE7XG4gIHJldHVybiBsaXN0ZW5lcnMubGVuZ3RoO1xufTtcblxuLyoqXG4gKiBDYWxscyBlYWNoIG9mIHRoZSBsaXN0ZW5lcnMgcmVnaXN0ZXJlZCBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBldmVudCBoYWQgbGlzdGVuZXJzLCBlbHNlIGBmYWxzZWAuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoZXZlbnQsIGExLCBhMiwgYTMsIGE0LCBhNSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdXG4gICAgLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBhcmdzXG4gICAgLCBpO1xuXG4gIGlmIChsaXN0ZW5lcnMuZm4pIHtcbiAgICBpZiAobGlzdGVuZXJzLm9uY2UpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVycy5mbiwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICBjYXNlIDE6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCksIHRydWU7XG4gICAgICBjYXNlIDI6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEpLCB0cnVlO1xuICAgICAgY2FzZSAzOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiksIHRydWU7XG4gICAgICBjYXNlIDQ6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMyksIHRydWU7XG4gICAgICBjYXNlIDU6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMywgYTQpLCB0cnVlO1xuICAgICAgY2FzZSA2OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0LCBhNSksIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMSwgYXJncyA9IG5ldyBBcnJheShsZW4gLTEpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5mbi5hcHBseShsaXN0ZW5lcnMuY29udGV4dCwgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGhcbiAgICAgICwgajtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGxpc3RlbmVyc1tpXS5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnNbaV0uZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICAgIGNhc2UgMTogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQpOyBicmVhaztcbiAgICAgICAgY2FzZSAyOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEpOyBicmVhaztcbiAgICAgICAgY2FzZSAzOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEsIGEyKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgNDogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMiwgYTMpOyBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoIWFyZ3MpIGZvciAoaiA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICBhcmdzW2ogLSAxXSA9IGFyZ3VtZW50c1tqXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaXN0ZW5lcnNbaV0uZm4uYXBwbHkobGlzdGVuZXJzW2ldLmNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICByZXR1cm4gYWRkTGlzdGVuZXIodGhpcywgZXZlbnQsIGZuLCBjb250ZXh0LCBmYWxzZSk7XG59O1xuXG4vKipcbiAqIEFkZCBhIG9uZS10aW1lIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2NvbnRleHQ9dGhpc10gVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICByZXR1cm4gYWRkTGlzdGVuZXIodGhpcywgZXZlbnQsIGZuLCBjb250ZXh0LCB0cnVlKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBsaXN0ZW5lcnMgb2YgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBPbmx5IHJlbW92ZSB0aGUgbGlzdGVuZXJzIHRoYXQgbWF0Y2ggdGhpcyBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBPbmx5IHJlbW92ZSB0aGUgbGlzdGVuZXJzIHRoYXQgaGF2ZSB0aGlzIGNvbnRleHQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9uY2UgT25seSByZW1vdmUgb25lLXRpbWUgbGlzdGVuZXJzLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHJldHVybiB0aGlzO1xuICBpZiAoIWZuKSB7XG4gICAgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1tldnRdO1xuXG4gIGlmIChsaXN0ZW5lcnMuZm4pIHtcbiAgICBpZiAoXG4gICAgICBsaXN0ZW5lcnMuZm4gPT09IGZuICYmXG4gICAgICAoIW9uY2UgfHwgbGlzdGVuZXJzLm9uY2UpICYmXG4gICAgICAoIWNvbnRleHQgfHwgbGlzdGVuZXJzLmNvbnRleHQgPT09IGNvbnRleHQpXG4gICAgKSB7XG4gICAgICBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGkgPSAwLCBldmVudHMgPSBbXSwgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGxpc3RlbmVyc1tpXS5mbiAhPT0gZm4gfHxcbiAgICAgICAgKG9uY2UgJiYgIWxpc3RlbmVyc1tpXS5vbmNlKSB8fFxuICAgICAgICAoY29udGV4dCAmJiBsaXN0ZW5lcnNbaV0uY29udGV4dCAhPT0gY29udGV4dClcbiAgICAgICkge1xuICAgICAgICBldmVudHMucHVzaChsaXN0ZW5lcnNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vXG4gICAgLy8gUmVzZXQgdGhlIGFycmF5LCBvciByZW1vdmUgaXQgY29tcGxldGVseSBpZiB3ZSBoYXZlIG5vIG1vcmUgbGlzdGVuZXJzLlxuICAgIC8vXG4gICAgaWYgKGV2ZW50cy5sZW5ndGgpIHRoaXMuX2V2ZW50c1tldnRdID0gZXZlbnRzLmxlbmd0aCA9PT0gMSA/IGV2ZW50c1swXSA6IGV2ZW50cztcbiAgICBlbHNlIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIGxpc3RlbmVycywgb3IgdGhvc2Ugb2YgdGhlIHNwZWNpZmllZCBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gW2V2ZW50XSBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnMoZXZlbnQpIHtcbiAgdmFyIGV2dDtcblxuICBpZiAoZXZlbnQpIHtcbiAgICBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuICAgIGlmICh0aGlzLl9ldmVudHNbZXZ0XSkgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vXG4vLyBBbGlhcyBtZXRob2RzIG5hbWVzIGJlY2F1c2UgcGVvcGxlIHJvbGwgbGlrZSB0aGF0LlxuLy9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBwcmVmaXguXG4vL1xuRXZlbnRFbWl0dGVyLnByZWZpeGVkID0gcHJlZml4O1xuXG4vL1xuLy8gQWxsb3cgYEV2ZW50RW1pdHRlcmAgdG8gYmUgaW1wb3J0ZWQgYXMgbW9kdWxlIG5hbWVzcGFjZS5cbi8vXG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBtb2R1bGUuXG4vL1xuaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgbW9kdWxlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xufVxuIiwiaW1wb3J0IEdhbWVMb29wIGZyb20gXCJAdmFhbGVudGluL2dhbWUtbG9vcFwiO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRlbWl0dGVyM1wiO1xuXG5leHBvcnQgY2xhc3MgTG9vcCB7XG4gIHB1YmxpYyByZWFkb25seSBldmVudHM6IGFueTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGxvb3A6IEdhbWVMb29wO1xuXG4gIGNvbnN0cnVjdG9yKGZyYW1lczogbnVtYmVyKSB7XG4gICAgdGhpcy5sb29wID0gbmV3IEdhbWVMb29wKGZyYW1lcyk7XG5cbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgcHVibGljIHJ1bigpIHtcbiAgICB0aGlzLmxvb3Auc3RhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICB0aGlzLmxvb3Aub24oXCJpbml0XCIsICgpID0+IHRoaXMuZXZlbnRzLmVtaXQoXCJpbml0XCIpKTtcblxuICAgIHRoaXMubG9vcC5vbihcInVwZGF0ZVwiLCAoZHQ6IG51bWJlcikgPT4gdGhpcy5ldmVudHMuZW1pdChcInVwZGF0ZVwiLCB7IGR0IH0pKTtcblxuICAgIHRoaXMubG9vcC5vbihcInJlbmRlclwiLCAoZHQ6IG51bWJlcikgPT4gdGhpcy5ldmVudHMuZW1pdChcInJlbmRlclwiLCB7IGR0IH0pKTtcbiAgfVxufVxuIiwiaW50ZXJmYWNlIElGaWVsZFByb3BzIHt9XG5cbmV4cG9ydCBjbGFzcyBGaWVsZCBpbXBsZW1lbnRzIElDb21wb25lbnQ8SUZpZWxkUHJvcHM+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm9wczogSUZpZWxkUHJvcHMsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dFxuICApIHt9XG5cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAvLyBwYXNzXG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHsgY3R4IH06IElDb21wb25lbnRQYXJhbXMpOiB2b2lkIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb250ZXh0LnRoZW1lLmZpZWxkQ29sb3I7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLmNvbnRleHQuZGltZW5zaW9ucy5oZWlnaHQ7IGkrKykge1xuICAgICAgY3R4Lm1vdmVUbygwLCBpICogdGhpcy5jb250ZXh0LmNlbGwuc2l6ZS5oZWlnaHQpO1xuICAgICAgY3R4LmxpbmVUbyhcbiAgICAgICAgdGhpcy5jb250ZXh0LmRpbWVuc2lvbnMud2lkdGggKiB0aGlzLmNvbnRleHQuY2VsbC5zaXplLndpZHRoLFxuICAgICAgICBpICogdGhpcy5jb250ZXh0LmNlbGwuc2l6ZS5oZWlnaHRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy5jb250ZXh0LmRpbWVuc2lvbnMud2lkdGg7IGkrKykge1xuICAgICAgY3R4Lm1vdmVUbyhpICogdGhpcy5jb250ZXh0LmNlbGwuc2l6ZS53aWR0aCwgMCk7XG4gICAgICBjdHgubGluZVRvKFxuICAgICAgICBpICogdGhpcy5jb250ZXh0LmNlbGwuc2l6ZS53aWR0aCxcbiAgICAgICAgdGhpcy5jb250ZXh0LmRpbWVuc2lvbnMuaGVpZ2h0ICogdGhpcy5jb250ZXh0LmNlbGwuc2l6ZS5oZWlnaHRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG59XG4iLCJpbnRlcmZhY2UgSUNlbGxQcm9wcyB7XG4gIHBvc2l0aW9uOiBJUG9pbnQ7XG59XG5cbmV4cG9ydCBjbGFzcyBDZWxsIGltcGxlbWVudHMgSUNvbXBvbmVudDxJQ2VsbFByb3BzPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcHJvcHM6IElDZWxsUHJvcHMsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dFxuICApIHt9XG5cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAvLyBwYXNzXG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHsgY3R4IH06IElDb21wb25lbnRQYXJhbXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNlbGwgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCB7IHBvc2l0aW9uIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbnRleHQudGhlbWUuY2VsbENvbG9yO1xuXG4gICAgY3R4LnJlY3QoXG4gICAgICBwb3NpdGlvbi54ICogY2VsbC5zaXplLndpZHRoICsgMSxcbiAgICAgIHBvc2l0aW9uLnkgKiBjZWxsLnNpemUuaGVpZ2h0ICsgMSxcbiAgICAgIGNlbGwuc2l6ZS53aWR0aCAtIDIsXG4gICAgICBjZWxsLnNpemUuaGVpZ2h0IC0gMlxuICAgICk7XG5cbiAgICBjdHguZmlsbCgpO1xuICB9XG59XG4iLCJpbnRlcmZhY2UgSVBvaW50UHJvcHMge1xuICBwb2ludHM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFBvaW50cyBpbXBsZW1lbnRzIElDb21wb25lbnQ8SVBvaW50UHJvcHM+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwcm9wczogSVBvaW50UHJvcHMsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dFxuICApIHt9XG5cbiAgcHVibGljIHVwZGF0ZShwYXJhbXM6IElDb21wb25lbnRQYXJhbXMsIHByb3BzOiBJUG9pbnRQcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoeyBjdHggfTogSUNvbXBvbmVudFBhcmFtcykge1xuICAgIGN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG5cbiAgICBjdHguZmlsbFRleHQoXG4gICAgICBgcG9pbnRzOiAke3RoaXMucHJvcHMucG9pbnRzfWAsXG4gICAgICB0aGlzLmNvbnRleHQuc2l6ZS53aWR0aCArIDIwLFxuICAgICAgMzBcbiAgICApO1xuICB9XG59XG4iLCJpbnRlcmZhY2UgSUZpZWxkQXBwbHlQYXJhbXMge1xuICBmaWVsZDogSUZpZWxkTWFwW11bXTtcbiAgcG9pbnRzOiBJUG9pbnRbXTtcbiAgdmFsdWU6IElGaWVsZE1hcDtcbn1cblxuZXhwb3J0IGNsYXNzIEdhbWVNb2RlbCB7XG4gIHByaXZhdGUgZmllbGQ6IElGaWVsZE1hcFtdW107XG5cbiAgcHJpdmF0ZSBwb2ludHM6IG51bWJlciA9IDA7XG5cbiAgcHJpdmF0ZSBmaWd1cmU6IElGaWd1cmU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250ZXh0OiBJQ29tcG9uZW50Q29udGV4dCkge1xuICAgIHRoaXMuZmllbGQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmNvbnRleHQuZGltZW5zaW9ucy5oZWlnaHQgfSwgKCkgPT5cbiAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuY29udGV4dC5kaW1lbnNpb25zLndpZHRoIH0sICgpID0+IG51bGwpXG4gICAgKTtcblxuICAgIHRoaXMuZmlndXJlID0gdGhpcy5nZXROZXh0KCk7XG4gIH1cblxuICBwdWJsaWMgc2V0RmlndXJlVG9GaWVsZChmaWd1cmU6IElGaWd1cmUpOiB2b2lkIHtcbiAgICB0aGlzLmFwcGx5VG9GaWVsZCh7XG4gICAgICBmaWVsZDogdGhpcy5maWVsZCxcbiAgICAgIHBvaW50czogdGhpcy5nZXRDb29yZHMoZmlndXJlKSxcbiAgICAgIHZhbHVlOiAxXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdW5zZXRGaWd1cmVGcm9tRmllbGQoZmlndXJlOiBJRmlndXJlKTogdm9pZCB7XG4gICAgdGhpcy5hcHBseVRvRmllbGQoe1xuICAgICAgZmllbGQ6IHRoaXMuZmllbGQsXG4gICAgICBwb2ludHM6IHRoaXMuZ2V0Q29vcmRzKGZpZ3VyZSksXG4gICAgICB2YWx1ZTogbnVsbFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNoZWNrQ29sbGlzaW9uKGZpZ3VyZTogSUZpZ3VyZSkge1xuICAgIGNvbnN0IHsgaGVpZ2h0LCB3aWR0aCB9ID0gdGhpcy5jb250ZXh0LmRpbWVuc2lvbnM7XG4gICAgY29uc3QgcG9pbnRzID0gdGhpcy5nZXRDb29yZHMoZmlndXJlKTtcblxuICAgIGNvbnN0IGNvb3JkcyA9IHBvaW50cy5yZWR1Y2UoXG4gICAgICAoYWNjLCBjdXJyKSA9PiB7XG4gICAgICAgIGFjYy54cy5wdXNoKGN1cnIueCk7XG4gICAgICAgIGFjYy55cy5wdXNoKGN1cnIueSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LFxuICAgICAgeyB4czogW10sIHlzOiBbXSB9IGFzIHsgeHM6IG51bWJlcltdOyB5czogbnVtYmVyW10gfVxuICAgICk7XG5cbiAgICBjb25zdCBtYXhZID0gTWF0aC5tYXgoLi4uY29vcmRzLnlzKTtcbiAgICBjb25zdCBtaW5YID0gTWF0aC5taW4oLi4uY29vcmRzLnhzKTtcbiAgICBjb25zdCBtYXhYID0gTWF0aC5tYXgoLi4uY29vcmRzLnhzKTtcblxuICAgIGZvciAobGV0IGkgPSBwb2ludHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IHBvaW50ID0gcG9pbnRzW2ldO1xuICAgICAgY29uc3Qgcm93ID0gdGhpcy5maWVsZFtwb2ludC55XTtcbiAgICAgIGNvbnN0IGNlbGwgPSByb3cgJiYgcm93W3BvaW50LnhdO1xuXG4gICAgICBpZiAoY2VsbCB8fCBtYXhZID49IGhlaWdodCB8fCBtaW5YIDwgMCB8fCBtYXhYID49IHdpZHRoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyByb3RhdGUoKSB7XG4gICAgdGhpcy51bnNldEZpZ3VyZUZyb21GaWVsZCh0aGlzLmZpZ3VyZSk7XG5cbiAgICBjb25zdCBmbGlwTWF0cml4ID0gKG1hdHJpeDogSUZpZWxkTWFwW11bXSkgPT5cbiAgICAgIG1hdHJpeFswXS5tYXAoKGNvbHVtbiwgaW5kZXgpID0+IG1hdHJpeC5tYXAocm93ID0+IHJvd1tpbmRleF0pKTtcblxuICAgIGNvbnN0IHJvdGF0ZU1hdHJpeCA9IChtYXRyaXg6IElGaWVsZE1hcFtdW10pID0+XG4gICAgICBmbGlwTWF0cml4KG1hdHJpeC5yZXZlcnNlKCkpO1xuXG4gICAgdGhpcy5maWd1cmUgPSB7XG4gICAgICAuLi50aGlzLmZpZ3VyZSxcbiAgICAgIGZpZWxkOiByb3RhdGVNYXRyaXgodGhpcy5maWd1cmUuZmllbGQpXG4gICAgfTtcblxuICAgIHRoaXMuc2V0RmlndXJlVG9GaWVsZCh0aGlzLmZpZ3VyZSk7XG4gIH1cblxuICBwdWJsaWMgbW92ZSh7IHggPSAwLCB5ID0gMCB9OiBJRGVsdGFQb2ludCkge1xuICAgIHRoaXMudW5zZXRGaWd1cmVGcm9tRmllbGQodGhpcy5maWd1cmUpO1xuXG4gICAgY29uc3QgbmV4dEZpZ3VyZSA9IHtcbiAgICAgIC4uLnRoaXMuZmlndXJlLFxuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgeTogdGhpcy5maWd1cmUucG9zaXRpb24ueSArIHksXG4gICAgICAgIHg6IHRoaXMuZmlndXJlLnBvc2l0aW9uLnggKyB4XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0aGlzLmNoZWNrQ29sbGlzaW9uKG5leHRGaWd1cmUpKSB7XG4gICAgICB0aGlzLnNldEZpZ3VyZVRvRmllbGQodGhpcy5maWd1cmUpO1xuXG4gICAgICBpZiAoeCkgcmV0dXJuO1xuXG4gICAgICBpZiAoeSkge1xuICAgICAgICB0aGlzLnJlbW92ZU1hdGNoZXMoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5maWd1cmUgPSB0aGlzLmdldE5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWd1cmUgPSBuZXh0RmlndXJlO1xuICAgIH1cblxuICAgIHRoaXMuc2V0RmlndXJlVG9GaWVsZCh0aGlzLmZpZ3VyZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TmV4dCgpIHtcbiAgICB0aGlzLnBvaW50cysrO1xuXG4gICAgY29uc3QgZmlndXJlcyA9IFtcbiAgICAgIFtbMSwgMV0sIFswLCAxXSwgWzAsIDFdXSxcbiAgICAgIFtbMSwgMV0sIFsxLCAxXV0sXG4gICAgICBbWzEsIDEsIDEsIDFdXSxcbiAgICAgIFtbMSwgMSwgMV0sIFswLCAxLCAwXV0sXG4gICAgICBbWzEsIDEsIDBdLCBbMCwgMSwgMV1dLFxuICAgICAgW1swLCAxLCAxXSwgWzEsIDEsIDBdXSxcbiAgICAgIFtbMV1dXG4gICAgXTtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiB+fih0aGlzLmNvbnRleHQuZGltZW5zaW9ucy53aWR0aCAvIDIpLFxuICAgICAgICB5OiAtM1xuICAgICAgfSxcbiAgICAgIGZpZWxkOiBmaWd1cmVzW35+KE1hdGgucmFuZG9tKCkgKiBmaWd1cmVzLmxlbmd0aCldXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNb2RlbCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGQ6IHRoaXMuZmllbGQsXG4gICAgICBwb2ludHM6IHRoaXMucG9pbnRzXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlUb0ZpZWxkKHsgZmllbGQsIHBvaW50cywgdmFsdWUgfTogSUZpZWxkQXBwbHlQYXJhbXMpIHtcbiAgICBwb2ludHMuZm9yRWFjaChwb2ludCA9PiB7XG4gICAgICBjb25zdCByb3cgPSBmaWVsZFtwb2ludC55XTtcblxuICAgICAgaWYgKHJvdykge1xuICAgICAgICByb3dbcG9pbnQueF0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29vcmRzKGZpZ3VyZTogSUZpZ3VyZSkge1xuICAgIHJldHVybiBmaWd1cmUuZmllbGQucmVkdWNlKFxuICAgICAgKGFjYywgY3Vyciwgcm93SWR4KSA9PiB7XG4gICAgICAgIGN1cnIuZm9yRWFjaCgocGF0dGVybiwgY2VsbElkeCkgPT4ge1xuICAgICAgICAgIGlmIChwYXR0ZXJuKSB7XG4gICAgICAgICAgICBhY2MucHVzaCh7XG4gICAgICAgICAgICAgIHg6IGZpZ3VyZS5wb3NpdGlvbi54ICsgY2VsbElkeCxcbiAgICAgICAgICAgICAgeTogZmlndXJlLnBvc2l0aW9uLnkgKyByb3dJZHhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sXG4gICAgICBbXSBhcyBJUG9pbnRbXVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZU1hdGNoZXMoKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLmNvbnRleHQuZGltZW5zaW9ucztcblxuICAgIGZvciAobGV0IGkgPSBoZWlnaHQgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgIGlmICghdGhpcy5maWVsZFtpXVtqXSkgYnJlYWs7XG5cbiAgICAgICAgaWYgKGogPT09IHdpZHRoIC0gMSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlUm93KGkpO1xuICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlUm93KHlQb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgdGhpcy5wb2ludHMgKz0gMTA7XG5cbiAgICBmb3IgKGxldCBpID0geVBvc2l0aW9uOyBpID49IDA7IGktLSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbnRleHQuZGltZW5zaW9ucy53aWR0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IHByZXYgPSB0aGlzLmZpZWxkW2kgLSAxXTtcbiAgICAgICAgdGhpcy5maWVsZFtpXVtqXSA9IHByZXYgPyBwcmV2W2pdIDogbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSBcIi4vY29tcG9uZW50cy9maWVsZFwiO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2VsbFwiO1xuaW1wb3J0IHsgUG9pbnRzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9wb2ludHNcIjtcbmltcG9ydCB7IEdhbWVNb2RlbCB9IGZyb20gXCIuL2dhbWUtbW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIGltcGxlbWVudHMgSUNvbXBvbmVudDxudWxsPiB7XG4gIHByaXZhdGUgZ2FtZTogR2FtZU1vZGVsO1xuXG4gIHByaXZhdGUgZmllbGRDb25maWcgPSB7XG4gICAgd2lkdGg6IDEwLFxuICAgIGhlaWdodDogMjBcbiAgfTtcblxuICBwcml2YXRlIGNvbnRleHQgPSB7XG4gICAgdGhlbWU6IHtcbiAgICAgIGNlbGxDb2xvcjogXCIjNmY3ZjkwXCIsXG4gICAgICBmaWVsZENvbG9yOiBcIiM2ZjdmOTBcIlxuICAgIH0sXG4gICAgZGltZW5zaW9uczogdGhpcy5maWVsZENvbmZpZyxcbiAgICBzaXplOiB7XG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy5kaW1lbnNpb25zLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLmRpbWVuc2lvbnMuaGVpZ2h0XG4gICAgfSxcbiAgICBjZWxsOiB7XG4gICAgICBzaXplOiB7XG4gICAgICAgIHdpZHRoOiB0aGlzLnByb3BzLmRpbWVuc2lvbnMud2lkdGggLyB0aGlzLmZpZWxkQ29uZmlnLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuZGltZW5zaW9ucy5oZWlnaHQgLyB0aGlzLmZpZWxkQ29uZmlnLmhlaWdodFxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIGNvbXBvbmVudHM6IElDb21wb25lbnQ8YW55PltdID0gW1xuICAgIG5ldyBGaWVsZCh7fSwgdGhpcy5jb250ZXh0KSxcbiAgICBuZXcgUG9pbnRzKHsgcG9pbnRzOiAwIH0sIHRoaXMuY29udGV4dClcbiAgXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHByb3BzOiB7IGRpbWVuc2lvbnM6IElEaW1lbnNpb25zIH0pIHtcbiAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZU1vZGVsKHRoaXMuY29udGV4dCk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5yb3RhdGUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgICAgdGhpcy5nYW1lLm1vdmUoeyB4OiAtMSB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgICAgdGhpcy5nYW1lLm1vdmUoeyB4OiAxIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShwYXJhbXM6IElDb21wb25lbnRQYXJhbXMpIHtcbiAgICB0aGlzLmdhbWUubW92ZSh7IHk6IDEgfSk7XG4gICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgIGlmIChjb21wb25lbnQgaW5zdGFuY2VvZiBQb2ludHMpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC51cGRhdGUocGFyYW1zLCB7XG4gICAgICAgICAgcG9pbnRzOiB0aGlzLmdhbWUuZ2V0TW9kZWwoKS5wb2ludHNcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudC51cGRhdGUocGFyYW1zLCB7fSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHBhcmFtczogSUNvbXBvbmVudFBhcmFtcykge1xuICAgIHRoaXMucmVuZGVyRmllbGQocGFyYW1zKTtcbiAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50LnJlbmRlcihwYXJhbXMpKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyRmllbGQocGFyYW1zOiBJQ29tcG9uZW50UGFyYW1zKSB7XG4gICAgY29uc3QgeyBmaWVsZCB9ID0gdGhpcy5nYW1lLmdldE1vZGVsKCk7XG5cbiAgICBmaWVsZC5mb3JFYWNoKChyb3csIHJvd0lkeCkgPT4ge1xuICAgICAgcm93LmZvckVhY2goKGNlbGwsIGNlbGxJZHgpID0+IHtcbiAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICBjb25zdCBjZWxsID0gbmV3IENlbGwoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgeDogY2VsbElkeCxcbiAgICAgICAgICAgICAgICB5OiByb3dJZHhcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuY29udGV4dFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjZWxsLnJlbmRlcihwYXJhbXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTG9vcCB9IGZyb20gXCIuL2xvb3BcIjtcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vZ2FtZS1jb250cm9sbGVyXCI7XG5cbmNvbnN0IFdJRFRIID0gODAwO1xuY29uc3QgSEVJR0hUID0gNjAwO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXG5kb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpbiA9IFwiMFwiO1xuZG9jdW1lbnQuYm9keS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5kb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9IFwiMTAwdmhcIjtcbmRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IFwiYmxhY2tcIjtcblxuY2FudmFzLndpZHRoID0gV0lEVEg7XG5jYW52YXMuaGVpZ2h0ID0gSEVJR0hUO1xuY2FudmFzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5jYW52YXMuc3R5bGUubWFyZ2luID0gXCJhdXRvXCI7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbmNvbnN0IGxvb3AgPSBuZXcgTG9vcCg1KTtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZUNvbnRyb2xsZXIoe1xuICBkaW1lbnNpb25zOiB7XG4gICAgd2lkdGg6IDMwMCxcbiAgICBoZWlnaHQ6IDQwMFxuICB9XG59KTtcblxubG9vcC5ldmVudHMub24oXCJ1cGRhdGVcIiwgKHsgZHQgfTogeyBkdDogbnVtYmVyIH0pID0+IHtcbiAgZ2FtZS51cGRhdGUoeyBkdCwgY3R4IH0pO1xufSk7XG5cbmxvb3AuZXZlbnRzLm9uKFwicmVuZGVyXCIsICh7IGR0IH06IHsgZHQ6IG51bWJlciB9KSA9PiB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7XG5cbiAgZ2FtZS5yZW5kZXIoeyBkdCwgY3R4IH0pO1xufSk7XG5cbmxvb3AucnVuKCk7XG4iXSwibmFtZXMiOlsicmVxdWlyZSIsIkV2ZW50RW1pdHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEFBQTBELENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRSxDQUFDLEFBQStPLENBQUMsRUFBRSxVQUFVLENBQUMsQUFBMEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBT0EsZUFBTyxFQUFFLFVBQVUsRUFBRUEsZUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPQSxlQUFPLEVBQUUsVUFBVSxFQUFFQSxlQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0FBQ3gxQjtDQUVBLElBQUksWUFBWSxHQUFHLFlBQVksRUFBRSxTQUFTLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcs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QUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0dBQ3JFLElBQUksR0FBRyxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQzs7R0FFMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxLQUFLLENBQUM7O0dBRXJDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO09BQzdCLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTTtPQUN0QixJQUFJO09BQ0osQ0FBQyxDQUFDOztHQUVOLElBQUksU0FBUyxDQUFDLEVBQUUsRUFBRTtLQUNoQixJQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7O0tBRTlFLFFBQVEsR0FBRztPQUNULEtBQUssQ0FBQyxFQUFFLE9BQU8sU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQztPQUMxRCxLQUFLLENBQUMsRUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDO09BQzlELEtBQUssQ0FBQyxFQUFFLE9BQU8sU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDO09BQ2xFLEtBQUssQ0FBQyxFQUFFLE9BQU8sU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQztPQUN0RSxLQUFLLENBQUMsRUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDO09BQzFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDO01BQy9FOztLQUVELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7T0FDbEQsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDNUI7O0tBRUQsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QyxNQUFNO0tBQ0wsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU07U0FDekIsQ0FBQyxDQUFDOztLQUVOLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO09BQzNCLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQzs7T0FFcEYsUUFBUSxHQUFHO1NBQ1QsS0FBSyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTTtTQUMx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
