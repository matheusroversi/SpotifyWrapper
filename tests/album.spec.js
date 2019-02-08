import chai, { expect } from 'chai';
import sinon from 'sinon';            // Pra ter o stub fetch precisa importar o sinon
import sinonChai from 'sinon-chai';   // plugin de comunicação do sinon com o Chai
chai.use(sinonChai)                   // conecta o chai com o plugin sinon-chai

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

describe('Album',  () => {
  let stubedFetch;
  let promise;
  let spotify;

  beforeEach( () => {
    spotify = new SpotifyWrapper({
      token: 'foo'
    });

    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.resolves({ json: () => ({ album: 'name' }) });
  });

  afterEach( () => {
    stubedFetch.restore();
  });


  describe('smoke tests Album', () => {

    it('shoud have getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    });

    it('shoud have getAlbums method', () => {
      expect(spotify.album.getAlbums).to.exist;
    });

    it('should have getAlbumTracks method', () => {
      expect(spotify.album.getTracks).to.exist;
    });

  });


  describe('getAlbum', () => {
    // verifica se o fetch ocorre
    it('Should call fetch method', () => {
      const album = spotify.album.getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    // veririca se o fetch ocorre com a url desejada
    it('Should call fetch witch correct  URL', () => {
      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');

      const album2 = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTk');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk');
    });


    // verifica se o dado é recebido pela Promise
    it('should return the correct data from Promise', () => {
      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      album.then((data) => {
        expect(data).to.be.eql({ album: 'name'});
      })
    });


  });



  describe('getAlbums', () => {
    // verifica se o fetch ocorre
    it('Should call fetch method', () => {
      const albums = spotify.album.getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    // veririca se o fetch ocorre com a url desejada
    it('Should call fetch witch correct  URL', () => {
      const albums = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy','4aawyAB9vmqN3uQ7FjRGTk']);
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk');
    });

    // verifica se o dado é recebido pela Promise
    it('should return the correct data from Promise', () => {
      const albums = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
      albums.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });

  });


  describe('getTracks', () => {
    // verifica se o fetch ocorre
    it('Should call fetch method', () => {
      const tracks = spotify.album.getTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    // veririca se o fetch ocorre com a url desejada
    it('Should call fetch witch correct  URL', () => {
      const tracks = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
    });

    // verifica se o dado é recebido pela Promise
    it('Should return the correct data from promise', () => {
      const tracks = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
      tracks.then((data) => {
        expect(data).to.be.eql({ album: 'name'});
      });
    });

  });


});
