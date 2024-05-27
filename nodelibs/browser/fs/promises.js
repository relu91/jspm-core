import { promises } from '../fs.js';
export { promises as default } from '../fs.js';
import '../chunk-599d5cd9.js';
import '../assert.js';
import '../chunk-d3799070.js';
import '../chunk-26dfbaee.js';
import '../util.js';
import '../chunk-d5e362e4.js';
import '../path.js';
import '../chunk-00a63e57.js';
import '../chunk-212659f1.js';
import '../events.js';
import '../chunk-4d4fd4b8.js';
import '../stream.js';
import '../chunk-55c62018.js';
import '../chunk-df3a4376.js';
import '../string_decoder.js';
import '../chunk-69361323.js';
import '../url.js';
import '../chunk-ba9b746a.js';
import '../chunk-8e8053a6.js';
import '../buffer.js';

const {
  access,
  copyFile,
  cp,
  open,
  opendir,
  rename,
  truncate,
  rm,
  rmdir,
  mkdir,
  readdir,
  readlink,
  symlink,
  lstat,
  stat,
  link,
  unlink,
  chmod,
  lchmod,
  lchown,
  chown,
  utimes,
  realpath,
  mkdtemp,
  writeFile,
  appendFile,
  readFile,
  watch,
} = promises;

export { access, appendFile, chmod, chown, copyFile, cp, lchmod, lchown, link, lstat, mkdir, mkdtemp, open, opendir, readFile, readdir, readlink, realpath, rename, rm, rmdir, stat, symlink, truncate, unlink, utimes, watch, writeFile };
