global.fetch = require('node-fetch');

import spotifyWrapper from '../src/index';

const spotify = new spotifyWrapper({
  token: 'BQA1Wq4h9IlPhFFfLzIWRuCYJsFeKbhkUFW72jVqqyKgKa73rdXiKH4bXkAedRksBT86ssk9nMv_-XFcb4GPG7lINhU9wNpX-e8DiYxayTYMaaaJcSWwca6TVVTgyq1se_vJVldZxB_lZfCnxMXWNm4DhHFcxdZAwdCo_aDCk_DRvsqsDI2fQpe51Nml65lTyVuFfngWciHsk88M9rvYRT_DLDdT-AVYmwSL-vcjF2cqI5TH7yyWWCk9FQbCdFiuEcvrUwpuhd2jEV9Hoq7I'
})

const albums = spotify.search.albums('Madonna');

//albums.then(data => console.log(data));
albums.then(data => data.albums.items.map(item => console.log(item.name)));
