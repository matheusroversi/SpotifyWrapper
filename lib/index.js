"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _search = _interopRequireDefault(require("./search"));

var _album = _interopRequireDefault(require("./album"));

var _config = require("./config");

var _utils = _interopRequireDefault(require("./utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || _config.API_URL;
    this.token = options.token;
    this.album = _album.default.bind(this)();
    this.search = _search.default.bind(this)();
  }

  request(url) {
    const headers = {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    };
    return fetch(url, headers).then(_utils.default);
  }

}

exports.default = SpotifyWrapper;