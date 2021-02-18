module.exports = {
  getTypescriptType(field) {
    let data = '';

    switch (field.type) {
      case 'json':
        data = 'any';
        break;
      case 'float':
      case 'integer':
        data = 'number';
        break;
      case 'guid':
      case 'datetime':
        data = 'string';
        break;
      default:
        data = field.type;
    }

    if (field.type === 'array') {
      data = field.target + 'Interface[]';
    }

    return data;
  }
};
