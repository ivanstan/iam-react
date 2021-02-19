const readline = require("readline");
const https = require("https");
const fs = require('fs');
const config = require('../etc/crud');
const handlebars = require('handlebars');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

if (process.argv[2]) {
  getEntity(process.argv[2]).then((data) => generate(data));
} else {
  rl.question("Enter entity detail url: ", function (url) {
    getEntity(url).then((data) => generate(data));
  });
}

function getEntity(url) {
  return new Promise((resolve, rejects) => {
    https.get(url, (response) => {
      let body = '';

      response.on('data', function (chunk) {
        body += chunk;
      });

      response.on('end', () => resolve(JSON.parse(body)));
    }).on('error', rejects);
  })
}

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function generate(metadata) {
  let finished  = 0;
  console.log('');

  for (let i in config.files) {
    fs.readFile(config.files[i]['source'], 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      }

      var template = handlebars.compile(data);
      var target = handlebars.compile(config.files[i]['target']);
      target = target(config.arguments(metadata));

      ensureDirectoryExistence(target);
      fs.writeFile(target, template(config.arguments(metadata)), () => {
        console.log('New file created: ' + target);

        finished++;

        if (config.files.length === finished) {
          config.print(metadata, (message) => {
            console.log('');
            console.info(message);
            process.exit(0);
          });
        }
      });
    });
  }
}
