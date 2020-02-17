# webpack-autojs-replaceUILayoutFile-loader

#### 介绍

用于 webpack 打包时, autojs 文件的预处理, 这是一个 loader    
仅用于替换`ui.layoutFile`

```
// 原始内容
// ui.layoutFile("./layout.xml");
// 替换后的内容
// import layout from './layout.xml';
// ui.layout(layout);
```
