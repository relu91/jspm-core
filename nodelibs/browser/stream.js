import { e as exports } from './chunk-55c62018.js';
export { e as default } from './chunk-55c62018.js';
import { promisify } from './util.js';
import './chunk-df3a4376.js';
import './chunk-599d5cd9.js';
import './events.js';
import './chunk-4d4fd4b8.js';
import './chunk-212659f1.js';
import './string_decoder.js';
import './chunk-69361323.js';
import './chunk-d5e362e4.js';
import './chunk-d3799070.js';
import './chunk-26dfbaee.js';

var Readable = exports.Readable;
Readable.wrap = function(src, options) {
  options = Object.assign({ objectMode: src.readableObjectMode != null || src.objectMode != null || true }, options);
  options.destroy = function(err, callback) {
    src.destroy(err);
    callback(err);
  };
  return new Readable(options).wrap(src);
};

var Writable = exports.Writable;
var Duplex = exports.Duplex;
var Transform = exports.Transform;
var PassThrough = exports.PassThrough;
var finished = exports.finished;
var pipeline = exports.pipeline;
var Stream = exports.Stream;

const promises = {
  finished: promisify(exports.finished),
  pipeline: promisify(exports.pipeline)
};

export { Duplex, PassThrough, Readable, Stream, Transform, Writable, finished, pipeline, promises };
