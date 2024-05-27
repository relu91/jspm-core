import { promisify } from '../util.js';
import exports from '../timers.js';
import '../chunk-d5e362e4.js';
import '../chunk-d3799070.js';
import '../chunk-26dfbaee.js';
import '../chunk-212659f1.js';

const setTimeout = promisify(exports.setTimeout),
  setImmediate = promisify(exports.setImmediate),
  setInterval = promisify(exports.setInterval);

var promises = {
  setTimeout,
  setImmediate,
  setInterval
};

export { promises as default, setImmediate, setInterval, setTimeout };
