import chai, { expect } from 'chai';
import sinon from 'sinon'; // Pra ter o stub fetch precisa importar o sinon
import sinonChai from 'sinon-chai';  // plugin de comunicação do sinon com o Chai
chai.use(sinonChai)  // conecta o chai com o plugin sinon-chai

global.fetch = require('node-fetch');


import SpotifyWrapper from '../src/index';

describe('SpotifyWrapper library', function() {

    it('shoud create an instance of SpotifyWrapper', () => {
      let spotify = new SpotifyWrapper({});
      expect(spotify).to.be.an.instanceof(SpotifyWrapper);
    });


    it('shoud receve apiURL as a option', () => {
      let spotify = new SpotifyWrapper({
        apiURL: 'asdf'
      });
      expect(spotify.apiURL).to.be.equal('asdf');
    });

    it('shoud use default apiURL if not provided', () => {
      let spotify = new SpotifyWrapper({});
      expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
    });


    it('shoud receve apiURL as a option', () => {
      let spotify = new SpotifyWrapper({
        token: 'foo'
      });
      expect(spotify.token).to.be.equal('foo');
    });


  describe('request method', () => {
    let stubedFetch;
    let promise;

    beforeEach( () => {
      stubedFetch = sinon.stub(global, 'fetch');
      promise = stubedFetch.resolves({ json: () => ({ album: 'name' }) });
    });

    afterEach( () => {
      stubedFetch.restore();
    });

    it('should have request method', () => {
      let spotify = new SpotifyWrapper({});
      expect(spotify.request).to.exist;
    });

    it('should call fetch when request', () => {
      let spotify = new SpotifyWrapper({
        token: 'foo'
      });
      spotify.request('url');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch when right url passed', () => {
      let spotify = new SpotifyWrapper({
        token: 'foo'
      });
      spotify.request('url');
      expect(stubedFetch).to.have.been.calledWith('url');
    });

    it('should call fetch with right headers passed', () => {
      let spotify = new SpotifyWrapper({
        token: 'foo'
      });
      spotify.request('url');

      const headers = {
        headers: {
          Authorization: `Bearer foo`,
        },
      };

      expect(stubedFetch).to.have.been.calledWith('url', headers);
    });


  });


});


