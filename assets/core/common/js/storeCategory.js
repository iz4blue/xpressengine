!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=36)}({0:function(e,t,n){e.exports=n(2)(438)},1:function(e,t){e.exports=_xe_bundle_common},2:function(e,t){e.exports=_xe_bundle_vendor},3:function(e,t,n){e.exports=n(1)(572)},36:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(0),f=o(r),a=n(38),u=o(a),i=n(3),c=o(i);window.jQuery("#btnCreateCategory").on("click",function(e){var t=e.target,n=(0,f.default)(t).closest("form").find('[name="id"]').val(),o={};if(!n)return void u.default.form((0,f.default)(t),"You must first create a category ID.");u.default.form.fn.clear((0,f.default)(t).closest("form")),o.categoryName=n,c.default.post("fieldType.storeCategory",o).then(function(e){var n=(0,f.default)(t).closest(".__xe_df_category");n.find('[name="category_id"]').val(e.data.id),n.find("button").hide(),n.append((0,f.default)("<a>").text(c.default.Lang.trans("xe::categoryManagement")).prop("target","_blank").prop("href","/settings/category/"+e.data.id))})})},38:function(e,t,n){e.exports=n(1)(78)}})});