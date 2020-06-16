function reverseName() {
  return {
    visitor: {
      Identifier(path) {
        const { node } = path;
        node.name = node.name.split('').reverse().join('');
      }
    }
  }
}

module.exports = reverseName;
