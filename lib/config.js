"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADERS = exports.API_URL = void 0;
const TOKEN_API = 'BQDVTK-Oq27FEBtqIi9_mgta4s08ebe5lu2Ph4O_iNo06OI3OwA6xAVRoNMERY9R3azClx-5MJDjPcgYDjHJvum81m9OQ3BNPSFv1GU7YaQk3_HGbuahfcu5wdCloDtUOtySN80mt50GA4SQ9RS0HM_xLDn7Hg7uKxrm13gL232FeA6JB79rsVJzfqjNMZG_e4iXgRzH-Y4vE6EkQcDv6P2qUbHUzd1mtK-k_vcbRfjYBC8IuTzBSmoG270JfJoeYxoi2uy2o5AjMAq7Reua2';
const API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
const HEADERS = {
  headers: {
    Autorization: `Bearer ${TOKEN_API}`
  }
};
exports.HEADERS = HEADERS;