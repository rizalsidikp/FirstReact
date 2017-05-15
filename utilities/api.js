var api = {
  getRovers(){
    var url = 'http://jsonplaceholder.typicode.com/posts/1';
    return fetch(url).then((res) => res.json());
  }
}

module.exports = api;
