const helper = require('../etc/generator/helper');

module.exports = {
  files: [
    {
      source: 'etc/generator/templates/interface.ts.handlebars',
      target: 'src/model/{{name}}Interface.ts',
    }
  ],
  arguments(metadata) {
    for (let i in metadata.fields) {
      metadata.fields[i]['typescript'] = helper.getTypescriptType(metadata.fields[i]);
    }

    return metadata;
  }
}
