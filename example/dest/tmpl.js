var tmpl = {
"main": function (data) {
var __p=[],_p=function(s){__p.push(s)};
var __a={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'},
__b=/[&<>"']/g,
__e=function (s) {s = String(s);return s.replace(__b, function (m) {return __a[m]});};
with(data){
;_p('<h1>');
;_p(__e( name));
;_p('</h1>\r\n\
');
}
return __p.join("");
},
"tp1": function (data) {
var __p=[],_p=function(s){__p.push(s)};
var __a={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'},
__b=/[&<>"']/g,
__e=function (s) {s = String(s);return s.replace(__b, function (m) {return __a[m]});};
with(data){
;_p('<div>tmpl1 ');
;_p(__e(sec));
;_p('</div>');
}
return __p.join("");
}
};
module.exports = tmpl;