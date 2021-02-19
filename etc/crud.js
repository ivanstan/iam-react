const fs = require('fs');
const handlebars = require('handlebars');
const helper = require('../etc/generator/helper');

module.exports = {
  files: [
    {
      source: 'etc/generator/templates/interface.ts.handlebars',
      target: 'src/models/{{name}}Interface.ts',
    },
    {
      source: 'etc/generator/templates/data-source.ts.handlebars',
      target: 'src/services/data_sources/{{name}}DataSource.ts',
    },
    {
      source: 'etc/generator/templates/pages/detail-page.tsx.handlebars',
      target: 'src/pages/{{name}}DetailsPage.tsx',
    },
  ],
  arguments(metadata) {
    metadata.hasAssociations = false;

    for (let i in metadata.fields) {
      metadata.fields[i]['typescript'] = helper.getTypescriptType(metadata.fields[i]);

      if (metadata.fields[i].hasOwnProperty('target')) {
        metadata.hasAssociations = true;
      }
    }

    return metadata;
  },
  print(metadata, callback) {
    fs.readFile('etc/generator/templates/print.handlebars', 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      }

      var template = handlebars.compile(data);

      callback(template(this.arguments(metadata)));
    });
  }
}
