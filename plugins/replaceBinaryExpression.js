function myPlugin({types: t}) {
  return {
    visitor: {
      BinaryExpression: {
        exit: (path) => {
          const { node } = path;
          switch(node.operator) {
            case '+':
              path.replaceWith(t.NumericLiteral(node.left.value + node.right.value));
              break;
            case '-':
              path.replaceWith(t.NumericLiteral(node.left.value - node.right.value));
              break;
            case '*':
              path.replaceWith(t.NumericLiteral(node.left.value * node.right.value));
              break;
            case '/':
              path.replaceWith(t.NumericLiteral(node.left.value / node.right.value));
              break;
            default:
              throw 'unknow operator'
          }
        }
      }
    }
  }
}

module.exports = myPlugin;
