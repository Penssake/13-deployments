'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // TODO: Refactor your ajax call to use the $.get method, and make a request to our new proxy route.
    //       Don't forget to remove the headers from our request - we're no longer using a token on the
    //       client side of our app, our new proxyGitHub function will be handling the token using our
    //       new environment variable!
    // $.get('/github/users/penssake/repos', function(data){
    //   console.log(data);
    // })

    $.ajax({
      url: `https://api.github.com/users/repos`,
      type: 'GET',
      headers: {'Authorization': `token ${githubToken}`}
    })
    .then(data => repos.all = data, err => console.error(err)) // es6 syntax arrow functions
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
