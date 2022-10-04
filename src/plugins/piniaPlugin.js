import { debounce, throttle } from "lodash-es";

export default function PiniaPlugin({ options, store }) {
  console.error("plugin is loaded");
  if (options.debounce) {
    return Object.keys(options.debounce).reduce((debouncedActions, action) => {
      debouncedActions[action] = debounce(
        store[action],
        options.debounce[action]
      );
      return debouncedActions;
    }, {});
  }
  if (options.throttle) {
    return Object.keys(options.throttle).reduce((throttledActions, action) => {
      throttledActions[action] = throttle(
        store[action],
        options.throttle[action]
      );
      return throttledActions;
    }, {});
  }
}
