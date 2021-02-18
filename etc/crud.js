const helper = require('../etc/generator/helper');

module.exports = {
  files: [
    {
      source: 'etc/generator/templates/interface.ts.handlebars',
      target: 'src/models/{{name}}Interface.ts',
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
  }
}
