# Jonathan Sue's "TinyApp" Project (Lighthouse Labs)


## Background

This project was completed as part of the Week 2 requirements while I was a student in the Web Development bootcamp at Lighthouse Labs. The purpose of this assignment was to build a command-line HTTP client that will request the avatars for all contributors to a given project on GitHub and download them to disk.

This project was geared towards helping me learn about how to break down larger problems into smaller steps and work incrementally towards my solution. It was also meant to teach me topics such as HTTP, APIs, JSON, the file system and how I can work with all of those things through JavaScript and Node.


## Problem Statement

Given a GitHub repository name and owner, download all the contributors' profile images and save them to a subdirectory, `avatars/`.


## Expected Usage

This program should be executed from the command line, in the following manner:

`node download_avatars.js <repo-owner-username> <repo-name>`


## User Stories

As an open source project leader,<br />
I want a folder with the avatars of all of my github project's contributors<br />
so that I can use them in a website.<br />

Given...

- I have node installed<br />
- I am in the shell<br />
- I have your file in my current folder<br />

When...

- I execute your file using node, providing a github user and repository as command-line arguments<br />
- For example:<br />
- `$ node download_avatars.js nodejs node`

Then...

- I should find a folder called avatars in my current directory<br />
- The avatars folder should contain images corresponding to the avatars of the contributors of the repo<br />
- The name of each image file should be the contributor's name and the file extension (ex. johnny.png)<br />


## Implementation Requirements

- uses 'request' library to make the HTTP requests<br />
- uses git for version control


## Contact

Questions? Comments? Please tweet me at [@JonoSue](http://twitter.com/JonoSue).


*README: Last updated August 24, 2017*
