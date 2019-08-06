
### `npm start`
运行项目

- vw布局的三种使用方式
  1. 直接使用css文件
  2. 使用sass
  3. 使用styled-components

### 步骤
- 显示react配置文件
```
npm run eject
```
- 安装postCss
```
npm i postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-cssnext postcss-viewport-units cssnano -D
```
- 配置postCss
```javascript
// vw适配引入
const postcssAspectRatioMini = require('postcss-aspect-ratio-mini');
const postcssPxToViewport = require('postcss-px-to-viewport');
const postcssWriteSvg = require('postcss-write-svg');
const postcssCssnext = require('postcss-cssnext');
const postcssViewportUnits = require('postcss-viewport-units');
const cssnano = require('cssnano');
// 使用
{
        loader: require.resolve('postcss-loader'),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebook/create-react-app/issues/2677
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
            }),
            // Adds PostCSS Normalize as the reset css with default options,
            // so that it honors browserslist config in package.json
            // which in turn let's users customize the target behavior as per their needs.
            postcssNormalize(),
            postcssAspectRatioMini({}),
            postcssWriteSvg({
              utf8:false,
            }),
            postcssCssnext({}),
            postcssPxToViewport({
              viewportWidth: 750, // 视窗的宽度，对应我们设计稿的宽度，一般是750
                unitPrecision: 3, // 指定'px'转换为视窗单位值得小数位数（很多时候无法整除）
                viewportUnit: 'vw', // 指定需要转换成的视窗单位,建议使用vw
                selectorBlackList: [
                    '.ignore',
                    '.hairliness',
                ], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
                minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值。
                mediaQuery: false, // 允许在媒体查询中转换`px`
            }),
            postcssViewportUnits({}),
            cssnano({
              autoprefixer:false,
              'postcss-zindex':false,
            }),
          ],
          sourceMap: isEnvProduction && shouldUseSourceMap,
        },
      }
```

