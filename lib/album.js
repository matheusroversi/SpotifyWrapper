"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = album;

function album() {
  return {
    getAlbum: id => this.request(`${this.apiURL}/albums/${id}`),
    getAlbums: ids => this.request(`${this.apiURL}/albums/?ids=${ids}`),
    getTracks: id => this.request(`${this.apiURL}/albums/${id}/tracks`)
  };
}