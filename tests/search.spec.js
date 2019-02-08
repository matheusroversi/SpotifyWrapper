import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

global.fetch = require('node-fetch');


import SpotifyWrapper from '../src/index';


describe('Search', () => {
    let spotify;
    let fetchedStub;
    let promise;

    beforeEach( () => {
      spotify = new SpotifyWrapper({
        token: 'foo'
      });

      fetchedStub = sinon.stub(global,'fetch');
      //promise = fetchedStub.resolves({ json: () => ({ album: 'name' }) });
      fetchedStub.resolves({ json: () => {} });
    });

    afterEach( () => {
      fetchedStub.restore();
    });


  describe('smoke tests search', () =>{


    it('Shoud exist the spotify.search.albums method', () => {
      expect(spotify.search.albums).to.exist;
    });

    it('Shoud exist the spotify.search.artists method', () => {
      expect(spotify.search.artists).to.exist;
    });

    it('Shoud exist the spotify.search.tracks method', () => {
      expect(spotify.search.tracks).to.exist;
    });

    it('Shoud exist the spotify.search.playlists method', () => {
      expect(spotify.search.playlists).to.exist;
    });

  });


  describe('spotify.search.artists', () => {

    it('Should call fetch function', () => {
      const artists = spotify.search.artists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should receibe the correct url to fetch', () => {
        const artists = spotify.search.artists('Incubus');
        expect(fetchedStub).to.have.been
            .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

        const artists2 = spotify.search.artists('Muse');
        expect(fetchedStub).to.have.been
            .calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');
    });

  });


  describe('spotify.search.albums', () => {

    it('Should call fetch function', () => {
      const albums = spotify.search.albums('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should receibe the correct url to fetch', () => {
        const albums = spotify.search.albums('Incubus');
        expect(fetchedStub).to.have.been
            .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

        const albums2 = spotify.search.albums('Muse');
        expect(fetchedStub).to.have.been
            .calledWith('https://api.spotify.com/v1/search?q=Muse&type=album');
    });

  });



  describe('spotify.search.tracks', () => {

    it('Should call fetch function', () => {
      const tracks = spotify.search.tracks('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should receibe the correct url to fetch', () => {
        const tracks = spotify.search.tracks('Incubus');
        expect(fetchedStub).to.have.been
            .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');

        const tracks2 = spotify.search.tracks('Muse');
        expect(fetchedStub).to.have.been
            .calledWith('https://api.spotify.com/v1/search?q=Muse&type=track');
    });

  });


  describe('spotify.search.playlists', () => {

    it('Should call fetch function', () => {
      const playlists = spotify.search.playlists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should receibe the correct url to fetch', () => {
        const playlists = spotify.search.playlists('Incubus');
        expect(fetchedStub).to.have.been
            .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');

        const playlists2 = spotify.search.playlists('Muse');
        expect(fetchedStub).to.have.been
            .calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist');
    });

  });




});
