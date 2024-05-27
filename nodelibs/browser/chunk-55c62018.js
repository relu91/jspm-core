import { d as dew$1, a as dew$2 } from './chunk-df3a4376.js';

var exports$1 = {},
    _dewExec = false;
function dew() {
  if (_dewExec) return exports$1;
  _dewExec = true;

  const CustomStream = dew$1();

  const promises = dew$2();

  const originalDestroy = CustomStream.Readable.destroy;
  exports$1 = CustomStream.Readable; // Explicit export naming is needed for ESM

  exports$1._uint8ArrayToBuffer = CustomStream._uint8ArrayToBuffer;
  exports$1._isUint8Array = CustomStream._isUint8Array;
  exports$1.isDisturbed = CustomStream.isDisturbed;
  exports$1.isErrored = CustomStream.isErrored;
  exports$1.isReadable = CustomStream.isReadable;
  exports$1.Readable = CustomStream.Readable;
  exports$1.Writable = CustomStream.Writable;
  exports$1.Duplex = CustomStream.Duplex;
  exports$1.Transform = CustomStream.Transform;
  exports$1.PassThrough = CustomStream.PassThrough;
  exports$1.addAbortSignal = CustomStream.addAbortSignal;
  exports$1.finished = CustomStream.finished;
  exports$1.destroy = CustomStream.destroy;
  exports$1.destroy = originalDestroy;
  exports$1.pipeline = CustomStream.pipeline;
  exports$1.compose = CustomStream.compose;
  Object.defineProperty(CustomStream, "promises", {
    configurable: true,
    enumerable: true,

    get() {
      return promises;
    }

  });
  exports$1.Stream = CustomStream.Stream; // Allow default importing

  exports$1.default = exports$1;
  return exports$1;
}

const exports = dew();
exports['_uint8ArrayToBuffer']; exports['_isUint8Array']; exports['isDisturbed']; exports['isErrored']; exports['isReadable']; exports['Readable']; exports['Writable']; exports['Duplex']; exports['Transform']; exports['PassThrough']; exports['addAbortSignal']; exports['finished']; exports['destroy']; exports['pipeline']; exports['compose']; exports['Stream'];

export { exports as e };
