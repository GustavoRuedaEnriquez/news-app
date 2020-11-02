const axios = require('axios');
require('dotenv').config();

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

class News {
  getNews(req, res) {
    let url = `${apiUrl}everything?apiKey=${apiKey}`;

    for (let query in req.query) {
      url += `&${query}=${req.query[query]}`
    }
    
    axios.get(url).then(response => {
      res.send(response.data.articles);
    }).catch(e => {
      res.send('Oops! Failed!')
      res.end();
    });
  }

  getHeadlines(req, res) {
    let url = `${apiUrl}top-headlines?apiKey=${apiKey}`;

    for (let query in req.query) {
      url += `&${query}=${req.query[query]}`
    }

    axios.get(url).then(response => {
      res.send(response.data.articles);
    }).catch(e => {
      res.send('Oops! Failed!')
      res.end();
    });
  }


  getSources(req, res) {
    let url = `${apiUrl}sources?apiKey=${apiKey}`;

    for (let query in req.query) {
      url += `&${query}=${req.query[query]}`
    }
    
    axios.get(url).then(response => {
      res.send(response.data.sources);
    }).catch(e => {
      res.send('Oops! Failed!')
      res.end();
    });
  }

  getSourcesName(req, res) {
    axios.get(`${apiUrl}sources?apiKey=${apiKey}`).then(response => {
      let sources = [];
      for (let source in response.data.sources) {
        sources.push(response.data.sources[source].id)
      }
      res.send(sources);
    }).catch(e => {
      console.log(e)
      res.send('Oops! Failed!')
      res.end();
    });
  }
}

module.exports = new News();

