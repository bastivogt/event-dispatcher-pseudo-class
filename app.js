"use strict";

import Counter from "./sevo/Counter.js";

const counter = new Counter();

console.log(Counter.getEvents().ON_COUNTER_STARTED);

counter.addListener(Counter.getEvents().ON_COUNTER_STARTED, (evt) => {
  console.log(
    Counter.getEvents().ON_COUNTER_STARTED,
    "count:",
    evt.target.getCount()
  );
});

counter.addListener(Counter.getEvents().ON_COUNTER_CHANGED, (evt) => {
  console.log(
    Counter.getEvents().ON_COUNTER_CHANGED,
    "count:",
    evt.target.getCount()
  );
});

counter.addListener(Counter.getEvents().ON_COUNTER_FINISHED, (evt) => {
  console.log(
    Counter.getEvents().ON_COUNTER_FINISHED,
    "count:",
    evt.target.getCount()
  );
});

counter.run();
