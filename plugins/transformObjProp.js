// const inspect = require('util').inspect;
// const fs = require('fs');

function transformObjPropPlugin({types: t}) {
  return {
    visitor: {
      MemberExpression(path) {
        const { node, scope } = path;
        // fs.writeFile('./output.js', inspect(scope), 'utf8', err => console.log(err))
        if(t.isStringLiteral(node.property)) {
          node.property = t.identifier(node.property.value)
          node.computed = false; // false 时转成 obj.prop，否则会转换成 obj[prop]，
        };
      }
    }
  }
}

module.exports = transformObjPropPlugin;
