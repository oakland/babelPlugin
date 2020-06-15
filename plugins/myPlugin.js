function myPlugin({types: t}) {
  return {
    visitor: {
      BinaryExpression: {
        exit: (path) => {
          const { node } = path;
          if(t.isBinaryExpression(node)) {
            path.replaceWith(t.NumericLiteral(node.left.value + node.right.value));
          }
        }
      }
    }
  }
}

module.exports = myPlugin;
