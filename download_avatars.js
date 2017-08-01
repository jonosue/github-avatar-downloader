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
    cb(err, JSON.parse(response.body));

  });

};


function downloadImageByURL(url, filePath) {

  request.get(url)

  .on('error', function (err) {
    throw err;
    console.log('There was an error with your request.')
  })

  .on('end', function() {
    console.log('Image download complete.');
  })

  .pipe(fs.createWriteStream(filePath));




getRepoContributors("jquery", "jquery", function(err, result) {
  if (err) {
    console.log(err);
  }
  else {
    for (var x in result) {
      var avatarRes = result[x].avatar_url;
      var urlRes = result[x].login;
    }
  }
});