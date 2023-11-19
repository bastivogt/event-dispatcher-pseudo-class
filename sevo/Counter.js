"use strict";

import EventDispatcher from "./EventDispatcher.js";

const Counter = function (start = 0, stop = 10, step = 1) {
  EventDispatcher.call(this);
  this._start = start;
  this._stop = stop;
  this._step = step;
  this._count = this._start;
};

Counter.prototype = new EventDispatcher();
Counter.prototype.contructor = Counter;

Counter.getEvents = function () {
  return {
    ON_COUNTER_STARTED: "on-counter-started",
    ON_COUNTER_CHANGED: "on-counter-changed",
    ON_COUNTER_FINISHED: "on-counter-finished",
  };
};

Counter.prototype.getCount = function () {
  return this._count;
};

Counter.prototype.run = function () {
  this._count = this._start;
  this.dispatchEvent(Counter.getEvents().ON_COUNTER_STARTED, {
    eventType: Counter.getEvents().ON_COUNTER_STARTED,
    target: this,
    count: this._count,
  });
  for (; this._count < this._stop; this._count += this._step) {
    this.dispatchEvent(Counter.getEvents().ON_COUNTER_CHANGED, {
      eventType: Counter.getEvents().ON_COUNTER_CHANGED,
      target: this,
      count: this._count,
    });
  }
  this.dispatchEvent(Counter.getEvents().ON_COUNTER_FINISHED, {
    eventType: Counter.getEvents().ON_COUNTER_FINISHED,
    target: this,
    count: this._count,
  });
};

export default Counter;
