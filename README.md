# gulp-ejs-compile-commonjs

[![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url] [![Code Climate][codeclimate-image]][codeclimate-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][david-image]][david-url] [![devDependencies][david-dev-image]][david-dev-url]

gulp-ejs-compile-commonjs 此插件可以将ejs模板编译成js文件并合并生成commonJs风格的模块化文件.

## DEMO

tmpl1.ejs
```ejs
<h1><%=title%></h1>
```
tmpl2.ejs
```ejs
<div><%=name%></div>
```
result:
```javascript
var tmpl = {
"tmpl1": function (data) {
var __p=[],_p=function(s){__p.push(s)};
;_p('<h1>');
;_p(__e(title));
;_p('</h1>\r\n\
');
return __p.join("");
},
"tmpl2": function (data) {
var __p=[],_p=function(s){__p.push(s)};
;_p('<div>');
;_p(__e(name));
;_p('</div>\r\n\
');
return __p.join("");
}
};
module.exports = tmpl;
```
use module:
```javascript
var tmpl = require('tmpl');
var tempStr = tmpl.tmpl1({params...});
```

## Use Example
```javascript
var gulp = require('gulp');
var ejsCompiler = require('gulp-ejs-compile-commonjs');

gulp.task('default', function(){
	gulp.src('./js/*/tmpl/*.ejs')
		.pipe(ejsCompiler('tmpl.js'))
		.pipe(gulp.dest('./dist/'));
});
```


## License

This project is distributed under the MIT license.

