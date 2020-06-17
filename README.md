# babelPlugin
babel plugin test

## @babel/parser, @babel/traverse
```javascript
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
```
parse 就是把 code 转成 AST。
traverse 遍历 ast，然后对 ast 改造。

感觉 traverse 好像可以替代 babel plugins ？ 
