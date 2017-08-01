// We need to require the request module, as well as the file system module (since we will be writing images to the disk)
var request = require('request');
var fs = require('fs');

// Although it may be wise to conceal/obscure the GitHub API token, I have not done this for the purposes of this exercise.
var GITHUB_USER = "jonosue";
var GITHUB_TOKEN = "a3efe2b10af74e29f9ccd2b8e587117f553f562d";

// This allows the user to pass command-line arguments for the GitHub repo owner as well as the GitHub repo name to avoid hard-coding values.
var owner = process.argv[2];
var name = process.argv[3];

// This function accepts two arguments related to the repo, and other for a callback function which works with the results of the JSON parse.
function getRepoContributors(repoOwner, repoName, cb) {
// Added logic to enforce command-line arguments. If the two arguments are not passed, then the program fails. Otherwise, it proceeds normally.
  if (!owner || !name) {
    console.log("USER ERROR. Please enter two arguments. The first should be the GitHub username of the repo owner, and the second should be the repo name. Please note, the repo must be public." + "\n" + "\n")
  }
  else {
// We need to define our URL in this format, in order to pass 'User-Agent' in the headers.
    var options = {
      url: 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
        headers: {
          'User-Agent': 'GitHub Avatar Downloader - Student Project'
        }
    };

// This is a very simple request that either throws an error or parses the body of the response from our URL. It passes the err and the response to the callback function.
    request(options, function(err, response, body) {
      if (err) throw err;
      cb(err, JSON.parse(response.body));
    });
  }
};

// This function will accept the avatar URL and the filepath in order to create the images on disk.
function downloadImageByURL(url, filePath) {
  request.get(url)
// We will throw an error and log it if we experience an issue.
  .on('error', function (err) {
    throw err;
  })
// Let's tell the user as each image finishes downloading to our local file system.
  .on('end', function() {
    console.log('Image download complete.');
  })
// This downloads the image to the file path we specify.
  .pipe(fs.createWriteStream(filePath));

};

// This invokes the function and passes the command line arguments as parameters. The callback function iterates through the JSON result and downloads each image one by one.
getRepoContributors(owner, name, function(err, result) {
// Throw an error if there is an issue.
  if (err) {
    console.log('There was an error with your request. Please ensure that you have spelled the user name and repo name correctly.')
  }
  else {
    for (var x in result) {
      var avatarURL = result[x].avatar_url;
      var downloadPath = './avatars/' + result[x].login + '.jpg';
// Execute the downloadImageByURL function for each iteration for the "for..in" loop
      downloadImageByURL(avatarURL, downloadPath);
    }
  }
});