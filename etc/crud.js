const fs = require('fs');
const handlebars = require('handlebars');
const helper = require('../etc/generator/helper');

require('handlebars-helpers')({
  handlebars: handlebars
});

module.exports = {
  files: [
    {
      source: 'etc/generator/templates/models/interface.ts.handlebars',
      target: 'src/models/{{name}}Interface.ts',
    },
    {
      source: 'etc/generator/templates/services/data/data-source.ts.handlebars',
      target: 'src/services/data_sources/{{name}}DataSource.ts',
    },
    {
      source: 'etc/generator/templates/pages/detail-page.tsx.handlebars',
      target: 'src/pages/{{name}}DetailsPage.tsx',
    },
    {
      source: 'etc/generator/templates/components/entity-view.tsx.handlebars',
      target: 'src/components/{{name}}EntityView.tsx',
    },
  ],
  arguments(metadata) {
    metadata.hasAssociations = false;
    metadata.route = helper.camelToSnakeCase(metadata.name);
    metadata.property = metadata.name.charAt(0).toLowerCase() + metadata.name.slice(1)

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
