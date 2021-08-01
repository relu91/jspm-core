var constants = {
  "O_RDONLY": 0,
  "O_WRONLY": 1,
  "O_RDWR": 2,
  "S_IFMT": 61440,
  "S_IFREG": 32768,
  "S_IFDIR": 16384,
  "S_IFCHR": 8192,
  "S_IFBLK": 24576,
  "S_IFIFO": 4096,
  "S_IFLNK": 40960,
  "S_IFSOCK": 49152,
  "O_CREAT": 512,
  "O_EXCL": 2048,
  "O_NOCTTY": 131072,
  "O_TRUNC": 1024,
  "O_APPEND": 8,
  "O_DIRECTORY": 1048576,
  "O_NOFOLLOW": 256,
  "O_SYNC": 128,
  "O_SYMLINK": 2097152,
  "O_NONBLOCK": 4,
  "S_IRWXU": 448,
  "S_IRUSR": 256,
  "S_IWUSR": 128,
  "S_IXUSR": 64,
  "S_IRWXG": 56,
  "S_IRGRP": 32,
  "S_IWGRP": 16,
  "S_IXGRP": 8,
  "S_IRWXO": 7,
  "S_IROTH": 4,
  "S_IWOTH": 2,
  "S_IXOTH": 1,
  "E2BIG": 7,
  "EACCES": 13,
  "EADDRINUSE": 48,
  "EADDRNOTAVAIL": 49,
  "EAFNOSUPPORT": 47,
  "EAGAIN": 35,
  "EALREADY": 37,
  "EBADF": 9,
  "EBADMSG": 94,
  "EBUSY": 16,
  "ECANCELED": 89,
  "ECHILD": 10,
  "ECONNABORTED": 53,
  "ECONNREFUSED": 61,
  "ECONNRESET": 54,
  "EDEADLK": 11,
  "EDESTADDRREQ": 39,
  "EDOM": 33,
  "EDQUOT": 69,
  "EEXIST": 17,
  "EFAULT": 14,
  "EFBIG": 27,
  "EHOSTUNREACH": 65,
  "EIDRM": 90,
  "EILSEQ": 92,
  "EINPROGRESS": 36,
  "EINTR": 4,
  "EINVAL": 22,
  "EIO": 5,
  "EISCONN": 56,
  "EISDIR": 21,
  "ELOOP": 62,
  "EMFILE": 24,
  "EMLINK": 31,
  "EMSGSIZE": 40,
  "EMULTIHOP": 95,
  "ENAMETOOLONG": 63,
  "ENETDOWN": 50,
  "ENETRESET": 52,
  "ENETUNREACH": 51,
  "ENFILE": 23,
  "ENOBUFS": 55,
  "ENODATA": 96,
  "ENODEV": 19,
  "ENOENT": 2,
  "ENOEXEC": 8,
  "ENOLCK": 77,
  "ENOLINK": 97,
  "ENOMEM": 12,
  "ENOMSG": 91,
  "ENOPROTOOPT": 42,
  "ENOSPC": 28,
  "ENOSR": 98,
  "ENOSTR": 99,
  "ENOSYS": 78,
  "ENOTCONN": 57,
  "ENOTDIR": 20,
  "ENOTEMPTY": 66,
  "ENOTSOCK": 38,
  "ENOTSUP": 45,
  "ENOTTY": 25,
  "ENXIO": 6,
  "EOPNOTSUPP": 102,
  "EOVERFLOW": 84,
  "EPERM": 1,
  "EPIPE": 32,
  "EPROTO": 100,
  "EPROTONOSUPPORT": 43,
  "EPROTOTYPE": 41,
  "ERANGE": 34,
  "EROFS": 30,
  "ESPIPE": 29,
  "ESRCH": 3,
  "ESTALE": 70,
  "ETIME": 101,
  "ETIMEDOUT": 60,
  "ETXTBSY": 26,
  "EWOULDBLOCK": 35,
  "EXDEV": 18,
  "SIGHUP": 1,
  "SIGINT": 2,
  "SIGQUIT": 3,
  "SIGILL": 4,
  "SIGTRAP": 5,
  "SIGABRT": 6,
  "SIGIOT": 6,
  "SIGBUS": 10,
  "SIGFPE": 8,
  "SIGKILL": 9,
  "SIGUSR1": 30,
  "SIGSEGV": 11,
  "SIGUSR2": 31,
  "SIGPIPE": 13,
  "SIGALRM": 14,
  "SIGTERM": 15,
  "SIGCHLD": 20,
  "SIGCONT": 19,
  "SIGSTOP": 17,
  "SIGTSTP": 18,
  "SIGTTIN": 21,
  "SIGTTOU": 22,
  "SIGURG": 16,
  "SIGXCPU": 24,
  "SIGXFSZ": 25,
  "SIGVTALRM": 26,
  "SIGPROF": 27,
  "SIGWINCH": 28,
  "SIGIO": 23,
  "SIGSYS": 12,
  "SSL_OP_ALL": 2147486719,
  "SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION": 262144,
  "SSL_OP_CIPHER_SERVER_PREFERENCE": 4194304,
  "SSL_OP_CISCO_ANYCONNECT": 32768,
  "SSL_OP_COOKIE_EXCHANGE": 8192,
  "SSL_OP_CRYPTOPRO_TLSEXT_BUG": 2147483648,
  "SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS": 2048,
  "SSL_OP_EPHEMERAL_RSA": 0,
  "SSL_OP_LEGACY_SERVER_CONNECT": 4,
  "SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER": 32,
  "SSL_OP_MICROSOFT_SESS_ID_BUG": 1,
  "SSL_OP_MSIE_SSLV2_RSA_PADDING": 0,
  "SSL_OP_NETSCAPE_CA_DN_BUG": 536870912,
  "SSL_OP_NETSCAPE_CHALLENGE_BUG": 2,
  "SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG": 1073741824,
  "SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG": 8,
  "SSL_OP_NO_COMPRESSION": 131072,
  "SSL_OP_NO_QUERY_MTU": 4096,
  "SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION": 65536,
  "SSL_OP_NO_SSLv2": 16777216,
  "SSL_OP_NO_SSLv3": 33554432,
  "SSL_OP_NO_TICKET": 16384,
  "SSL_OP_NO_TLSv1": 67108864,
  "SSL_OP_NO_TLSv1_1": 268435456,
  "SSL_OP_NO_TLSv1_2": 134217728,
  "SSL_OP_PKCS1_CHECK_1": 0,
  "SSL_OP_PKCS1_CHECK_2": 0,
  "SSL_OP_SINGLE_DH_USE": 1048576,
  "SSL_OP_SINGLE_ECDH_USE": 524288,
  "SSL_OP_SSLEAY_080_CLIENT_DH_BUG": 128,
  "SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG": 0,
  "SSL_OP_TLS_BLOCK_PADDING_BUG": 512,
  "SSL_OP_TLS_D5_BUG": 256,
  "SSL_OP_TLS_ROLLBACK_BUG": 8388608,
  "ENGINE_METHOD_DSA": 2,
  "ENGINE_METHOD_DH": 4,
  "ENGINE_METHOD_RAND": 8,
  "ENGINE_METHOD_ECDH": 16,
  "ENGINE_METHOD_ECDSA": 32,
  "ENGINE_METHOD_CIPHERS": 64,
  "ENGINE_METHOD_DIGESTS": 128,
  "ENGINE_METHOD_STORE": 256,
  "ENGINE_METHOD_PKEY_METHS": 512,
  "ENGINE_METHOD_PKEY_ASN1_METHS": 1024,
  "ENGINE_METHOD_ALL": 65535,
  "ENGINE_METHOD_NONE": 0,
  "DH_CHECK_P_NOT_SAFE_PRIME": 2,
  "DH_CHECK_P_NOT_PRIME": 1,
  "DH_UNABLE_TO_CHECK_GENERATOR": 4,
  "DH_NOT_SUITABLE_GENERATOR": 8,
  "NPN_ENABLED": 1,
  "RSA_PKCS1_PADDING": 1,
  "RSA_SSLV23_PADDING": 2,
  "RSA_NO_PADDING": 3,
  "RSA_PKCS1_OAEP_PADDING": 4,
  "RSA_X931_PADDING": 5,
  "RSA_PKCS1_PSS_PADDING": 6,
  "POINT_CONVERSION_COMPRESSED": 2,
  "POINT_CONVERSION_UNCOMPRESSED": 4,
  "POINT_CONVERSION_HYBRID": 6,
  "F_OK": 0,
  "R_OK": 4,
  "W_OK": 2,
  "X_OK": 1,
  "UV_UDP_REUSEADDR": 4
};

var DH_CHECK_P_NOT_PRIME = constants.DH_CHECK_P_NOT_PRIME;
var DH_CHECK_P_NOT_SAFE_PRIME = constants.DH_CHECK_P_NOT_SAFE_PRIME;
var DH_NOT_SUITABLE_GENERATOR = constants.DH_NOT_SUITABLE_GENERATOR;
var DH_UNABLE_TO_CHECK_GENERATOR = constants.DH_UNABLE_TO_CHECK_GENERATOR;
var E2BIG = constants.E2BIG;
var EACCES = constants.EACCES;
var EADDRINUSE = constants.EADDRINUSE;
var EADDRNOTAVAIL = constants.EADDRNOTAVAIL;
var EAFNOSUPPORT = constants.EAFNOSUPPORT;
var EAGAIN = constants.EAGAIN;
var EALREADY = constants.EALREADY;
var EBADF = constants.EBADF;
var EBADMSG = constants.EBADMSG;
var EBUSY = constants.EBUSY;
var ECANCELED = constants.ECANCELED;
var ECHILD = constants.ECHILD;
var ECONNABORTED = constants.ECONNABORTED;
var ECONNREFUSED = constants.ECONNREFUSED;
var ECONNRESET = constants.ECONNRESET;
var EDEADLK = constants.EDEADLK;
var EDESTADDRREQ = constants.EDESTADDRREQ;
var EDOM = constants.EDOM;
var EDQUOT = constants.EDQUOT;
var EEXIST = constants.EEXIST;
var EFAULT = constants.EFAULT;
var EFBIG = constants.EFBIG;
var EHOSTUNREACH = constants.EHOSTUNREACH;
var EIDRM = constants.EIDRM;
var EILSEQ = constants.EILSEQ;
var EINPROGRESS = constants.EINPROGRESS;
var EINTR = constants.EINTR;
var EINVAL = constants.EINVAL;
var EIO = constants.EIO;
var EISCONN = constants.EISCONN;
var EISDIR = constants.EISDIR;
var ELOOP = constants.ELOOP;
var EMFILE = constants.EMFILE;
var EMLINK = constants.EMLINK;
var EMSGSIZE = constants.EMSGSIZE;
var EMULTIHOP = constants.EMULTIHOP;
var ENAMETOOLONG = constants.ENAMETOOLONG;
var ENETDOWN = constants.ENETDOWN;
var ENETRESET = constants.ENETRESET;
var ENETUNREACH = constants.ENETUNREACH;
var ENFILE = constants.ENFILE;
var ENGINE_METHOD_ALL = constants.ENGINE_METHOD_ALL;
var ENGINE_METHOD_CIPHERS = constants.ENGINE_METHOD_CIPHERS;
var ENGINE_METHOD_DH = constants.ENGINE_METHOD_DH;
var ENGINE_METHOD_DIGESTS = constants.ENGINE_METHOD_DIGESTS;
var ENGINE_METHOD_DSA = constants.ENGINE_METHOD_DSA;
var ENGINE_METHOD_ECDH = constants.ENGINE_METHOD_ECDH;
var ENGINE_METHOD_ECDSA = constants.ENGINE_METHOD_ECDSA;
var ENGINE_METHOD_NONE = constants.ENGINE_METHOD_NONE;
var ENGINE_METHOD_PKEY_ASN1_METHS = constants.ENGINE_METHOD_PKEY_ASN1_METHS;
var ENGINE_METHOD_PKEY_METHS = constants.ENGINE_METHOD_PKEY_METHS;
var ENGINE_METHOD_RAND = constants.ENGINE_METHOD_RAND;
var ENGINE_METHOD_STORE = constants.ENGINE_METHOD_STORE;
var ENOBUFS = constants.ENOBUFS;
var ENODATA = constants.ENODATA;
var ENODEV = constants.ENODEV;
var ENOENT = constants.ENOENT;
var ENOEXEC = constants.ENOEXEC;
var ENOLCK = constants.ENOLCK;
var ENOLINK = constants.ENOLINK;
var ENOMEM = constants.ENOMEM;
var ENOMSG = constants.ENOMSG;
var ENOPROTOOPT = constants.ENOPROTOOPT;
var ENOSPC = constants.ENOSPC;
var ENOSR = constants.ENOSR;
var ENOSTR = constants.ENOSTR;
var ENOSYS = constants.ENOSYS;
var ENOTCONN = constants.ENOTCONN;
var ENOTDIR = constants.ENOTDIR;
var ENOTEMPTY = constants.ENOTEMPTY;
var ENOTSOCK = constants.ENOTSOCK;
var ENOTSUP = constants.ENOTSUP;
var ENOTTY = constants.ENOTTY;
var ENXIO = constants.ENXIO;
var EOPNOTSUPP = constants.EOPNOTSUPP;
var EOVERFLOW = constants.EOVERFLOW;
var EPERM = constants.EPERM;
var EPIPE = constants.EPIPE;
var EPROTO = constants.EPROTO;
var EPROTONOSUPPORT = constants.EPROTONOSUPPORT;
var EPROTOTYPE = constants.EPROTOTYPE;
var ERANGE = constants.ERANGE;
var EROFS = constants.EROFS;
var ESPIPE = constants.ESPIPE;
var ESRCH = constants.ESRCH;
var ESTALE = constants.ESTALE;
var ETIME = constants.ETIME;
var ETIMEDOUT = constants.ETIMEDOUT;
var ETXTBSY = constants.ETXTBSY;
var EWOULDBLOCK = constants.EWOULDBLOCK;
var EXDEV = constants.EXDEV;
var F_OK = constants.F_OK;
var NPN_ENABLED = constants.NPN_ENABLED;
var O_APPEND = constants.O_APPEND;
var O_CREAT = constants.O_CREAT;
var O_DIRECTORY = constants.O_DIRECTORY;
var O_EXCL = constants.O_EXCL;
var O_NOCTTY = constants.O_NOCTTY;
var O_NOFOLLOW = constants.O_NOFOLLOW;
var O_NONBLOCK = constants.O_NONBLOCK;
var O_RDONLY = constants.O_RDONLY;
var O_RDWR = constants.O_RDWR;
var O_SYMLINK = constants.O_SYMLINK;
var O_SYNC = constants.O_SYNC;
var O_TRUNC = constants.O_TRUNC;
var O_WRONLY = constants.O_WRONLY;
var POINT_CONVERSION_COMPRESSED = constants.POINT_CONVERSION_COMPRESSED;
var POINT_CONVERSION_HYBRID = constants.POINT_CONVERSION_HYBRID;
var POINT_CONVERSION_UNCOMPRESSED = constants.POINT_CONVERSION_UNCOMPRESSED;
var RSA_NO_PADDING = constants.RSA_NO_PADDING;
var RSA_PKCS1_OAEP_PADDING = constants.RSA_PKCS1_OAEP_PADDING;
var RSA_PKCS1_PADDING = constants.RSA_PKCS1_PADDING;
var RSA_PKCS1_PSS_PADDING = constants.RSA_PKCS1_PSS_PADDING;
var RSA_SSLV23_PADDING = constants.RSA_SSLV23_PADDING;
var RSA_X931_PADDING = constants.RSA_X931_PADDING;
var R_OK = constants.R_OK;
var SIGABRT = constants.SIGABRT;
var SIGALRM = constants.SIGALRM;
var SIGBUS = constants.SIGBUS;
var SIGCHLD = constants.SIGCHLD;
var SIGCONT = constants.SIGCONT;
var SIGFPE = constants.SIGFPE;
var SIGHUP = constants.SIGHUP;
var SIGILL = constants.SIGILL;
var SIGINT = constants.SIGINT;
var SIGIO = constants.SIGIO;
var SIGIOT = constants.SIGIOT;
var SIGKILL = constants.SIGKILL;
var SIGPIPE = constants.SIGPIPE;
var SIGPROF = constants.SIGPROF;
var SIGQUIT = constants.SIGQUIT;
var SIGSEGV = constants.SIGSEGV;
var SIGSTOP = constants.SIGSTOP;
var SIGSYS = constants.SIGSYS;
var SIGTERM = constants.SIGTERM;
var SIGTRAP = constants.SIGTRAP;
var SIGTSTP = constants.SIGTSTP;
var SIGTTIN = constants.SIGTTIN;
var SIGTTOU = constants.SIGTTOU;
var SIGURG = constants.SIGURG;
var SIGUSR1 = constants.SIGUSR1;
var SIGUSR2 = constants.SIGUSR2;
var SIGVTALRM = constants.SIGVTALRM;
var SIGWINCH = constants.SIGWINCH;
var SIGXCPU = constants.SIGXCPU;
var SIGXFSZ = constants.SIGXFSZ;
var SSL_OP_ALL = constants.SSL_OP_ALL;
var SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION = constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION;
var SSL_OP_CIPHER_SERVER_PREFERENCE = constants.SSL_OP_CIPHER_SERVER_PREFERENCE;
var SSL_OP_CISCO_ANYCONNECT = constants.SSL_OP_CISCO_ANYCONNECT;
var SSL_OP_COOKIE_EXCHANGE = constants.SSL_OP_COOKIE_EXCHANGE;
var SSL_OP_CRYPTOPRO_TLSEXT_BUG = constants.SSL_OP_CRYPTOPRO_TLSEXT_BUG;
var SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS = constants.SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS;
var SSL_OP_EPHEMERAL_RSA = constants.SSL_OP_EPHEMERAL_RSA;
var SSL_OP_LEGACY_SERVER_CONNECT = constants.SSL_OP_LEGACY_SERVER_CONNECT;
var SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER = constants.SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER;
var SSL_OP_MICROSOFT_SESS_ID_BUG = constants.SSL_OP_MICROSOFT_SESS_ID_BUG;
var SSL_OP_MSIE_SSLV2_RSA_PADDING = constants.SSL_OP_MSIE_SSLV2_RSA_PADDING;
var SSL_OP_NETSCAPE_CA_DN_BUG = constants.SSL_OP_NETSCAPE_CA_DN_BUG;
var SSL_OP_NETSCAPE_CHALLENGE_BUG = constants.SSL_OP_NETSCAPE_CHALLENGE_BUG;
var SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG = constants.SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG;
var SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG = constants.SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG;
var SSL_OP_NO_COMPRESSION = constants.SSL_OP_NO_COMPRESSION;
var SSL_OP_NO_QUERY_MTU = constants.SSL_OP_NO_QUERY_MTU;
var SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION = constants.SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION;
var SSL_OP_NO_SSLv2 = constants.SSL_OP_NO_SSLv2;
var SSL_OP_NO_SSLv3 = constants.SSL_OP_NO_SSLv3;
var SSL_OP_NO_TICKET = constants.SSL_OP_NO_TICKET;
var SSL_OP_NO_TLSv1 = constants.SSL_OP_NO_TLSv1;
var SSL_OP_NO_TLSv1_1 = constants.SSL_OP_NO_TLSv1_1;
var SSL_OP_NO_TLSv1_2 = constants.SSL_OP_NO_TLSv1_2;
var SSL_OP_PKCS1_CHECK_1 = constants.SSL_OP_PKCS1_CHECK_1;
var SSL_OP_PKCS1_CHECK_2 = constants.SSL_OP_PKCS1_CHECK_2;
var SSL_OP_SINGLE_DH_USE = constants.SSL_OP_SINGLE_DH_USE;
var SSL_OP_SINGLE_ECDH_USE = constants.SSL_OP_SINGLE_ECDH_USE;
var SSL_OP_SSLEAY_080_CLIENT_DH_BUG = constants.SSL_OP_SSLEAY_080_CLIENT_DH_BUG;
var SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG = constants.SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG;
var SSL_OP_TLS_BLOCK_PADDING_BUG = constants.SSL_OP_TLS_BLOCK_PADDING_BUG;
var SSL_OP_TLS_D5_BUG = constants.SSL_OP_TLS_D5_BUG;
var SSL_OP_TLS_ROLLBACK_BUG = constants.SSL_OP_TLS_ROLLBACK_BUG;
var S_IFBLK = constants.S_IFBLK;
var S_IFCHR = constants.S_IFCHR;
var S_IFDIR = constants.S_IFDIR;
var S_IFIFO = constants.S_IFIFO;
var S_IFLNK = constants.S_IFLNK;
var S_IFMT = constants.S_IFMT;
var S_IFREG = constants.S_IFREG;
var S_IFSOCK = constants.S_IFSOCK;
var S_IRGRP = constants.S_IRGRP;
var S_IROTH = constants.S_IROTH;
var S_IRUSR = constants.S_IRUSR;
var S_IRWXG = constants.S_IRWXG;
var S_IRWXO = constants.S_IRWXO;
var S_IRWXU = constants.S_IRWXU;
var S_IWGRP = constants.S_IWGRP;
var S_IWOTH = constants.S_IWOTH;
var S_IWUSR = constants.S_IWUSR;
var S_IXGRP = constants.S_IXGRP;
var S_IXOTH = constants.S_IXOTH;
var S_IXUSR = constants.S_IXUSR;
var UV_UDP_REUSEADDR = constants.UV_UDP_REUSEADDR;
var W_OK = constants.W_OK;
var X_OK = constants.X_OK;

export { DH_CHECK_P_NOT_PRIME, DH_CHECK_P_NOT_SAFE_PRIME, DH_NOT_SUITABLE_GENERATOR, DH_UNABLE_TO_CHECK_GENERATOR, E2BIG, EACCES, EADDRINUSE, EADDRNOTAVAIL, EAFNOSUPPORT, EAGAIN, EALREADY, EBADF, EBADMSG, EBUSY, ECANCELED, ECHILD, ECONNABORTED, ECONNREFUSED, ECONNRESET, EDEADLK, EDESTADDRREQ, EDOM, EDQUOT, EEXIST, EFAULT, EFBIG, EHOSTUNREACH, EIDRM, EILSEQ, EINPROGRESS, EINTR, EINVAL, EIO, EISCONN, EISDIR, ELOOP, EMFILE, EMLINK, EMSGSIZE, EMULTIHOP, ENAMETOOLONG, ENETDOWN, ENETRESET, ENETUNREACH, ENFILE, ENGINE_METHOD_ALL, ENGINE_METHOD_CIPHERS, ENGINE_METHOD_DH, ENGINE_METHOD_DIGESTS, ENGINE_METHOD_DSA, ENGINE_METHOD_ECDH, ENGINE_METHOD_ECDSA, ENGINE_METHOD_NONE, ENGINE_METHOD_PKEY_ASN1_METHS, ENGINE_METHOD_PKEY_METHS, ENGINE_METHOD_RAND, ENGINE_METHOD_STORE, ENOBUFS, ENODATA, ENODEV, ENOENT, ENOEXEC, ENOLCK, ENOLINK, ENOMEM, ENOMSG, ENOPROTOOPT, ENOSPC, ENOSR, ENOSTR, ENOSYS, ENOTCONN, ENOTDIR, ENOTEMPTY, ENOTSOCK, ENOTSUP, ENOTTY, ENXIO, EOPNOTSUPP, EOVERFLOW, EPERM, EPIPE, EPROTO, EPROTONOSUPPORT, EPROTOTYPE, ERANGE, EROFS, ESPIPE, ESRCH, ESTALE, ETIME, ETIMEDOUT, ETXTBSY, EWOULDBLOCK, EXDEV, F_OK, NPN_ENABLED, O_APPEND, O_CREAT, O_DIRECTORY, O_EXCL, O_NOCTTY, O_NOFOLLOW, O_NONBLOCK, O_RDONLY, O_RDWR, O_SYMLINK, O_SYNC, O_TRUNC, O_WRONLY, POINT_CONVERSION_COMPRESSED, POINT_CONVERSION_HYBRID, POINT_CONVERSION_UNCOMPRESSED, RSA_NO_PADDING, RSA_PKCS1_OAEP_PADDING, RSA_PKCS1_PADDING, RSA_PKCS1_PSS_PADDING, RSA_SSLV23_PADDING, RSA_X931_PADDING, R_OK, SIGABRT, SIGALRM, SIGBUS, SIGCHLD, SIGCONT, SIGFPE, SIGHUP, SIGILL, SIGINT, SIGIO, SIGIOT, SIGKILL, SIGPIPE, SIGPROF, SIGQUIT, SIGSEGV, SIGSTOP, SIGSYS, SIGTERM, SIGTRAP, SIGTSTP, SIGTTIN, SIGTTOU, SIGURG, SIGUSR1, SIGUSR2, SIGVTALRM, SIGWINCH, SIGXCPU, SIGXFSZ, SSL_OP_ALL, SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION, SSL_OP_CIPHER_SERVER_PREFERENCE, SSL_OP_CISCO_ANYCONNECT, SSL_OP_COOKIE_EXCHANGE, SSL_OP_CRYPTOPRO_TLSEXT_BUG, SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS, SSL_OP_EPHEMERAL_RSA, SSL_OP_LEGACY_SERVER_CONNECT, SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER, SSL_OP_MICROSOFT_SESS_ID_BUG, SSL_OP_MSIE_SSLV2_RSA_PADDING, SSL_OP_NETSCAPE_CA_DN_BUG, SSL_OP_NETSCAPE_CHALLENGE_BUG, SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG, SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG, SSL_OP_NO_COMPRESSION, SSL_OP_NO_QUERY_MTU, SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION, SSL_OP_NO_SSLv2, SSL_OP_NO_SSLv3, SSL_OP_NO_TICKET, SSL_OP_NO_TLSv1, SSL_OP_NO_TLSv1_1, SSL_OP_NO_TLSv1_2, SSL_OP_PKCS1_CHECK_1, SSL_OP_PKCS1_CHECK_2, SSL_OP_SINGLE_DH_USE, SSL_OP_SINGLE_ECDH_USE, SSL_OP_SSLEAY_080_CLIENT_DH_BUG, SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG, SSL_OP_TLS_BLOCK_PADDING_BUG, SSL_OP_TLS_D5_BUG, SSL_OP_TLS_ROLLBACK_BUG, S_IFBLK, S_IFCHR, S_IFDIR, S_IFIFO, S_IFLNK, S_IFMT, S_IFREG, S_IFSOCK, S_IRGRP, S_IROTH, S_IRUSR, S_IRWXG, S_IRWXO, S_IRWXU, S_IWGRP, S_IWOTH, S_IWUSR, S_IXGRP, S_IXOTH, S_IXUSR, UV_UDP_REUSEADDR, W_OK, X_OK, constants as default };
