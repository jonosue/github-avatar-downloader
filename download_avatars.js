var request = require('request');
var fs = require('fs');

var GITHUB_USER = "jonosue";
var GITHUB_TOKEN = "a3efe2b10af74e29f9ccd2b8e587117f553f562d";

function getRepoContributors(repoOwner, repoName, cb) {

  var options = {
    url: 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      'User-Agent': 'GitHub Avatar Downloader - Student Project'
    }
  };

  request(options, function(err, response, body) {
    if (err) throw err;
    console.log(response.body);
});


}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});


