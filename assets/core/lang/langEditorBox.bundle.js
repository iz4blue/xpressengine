!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var a in n)("object"==typeof exports?exports:e)[a]=n[a]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=30)}({0:function(e,t,n){e.exports=n(2)(438)},1:function(e,t){e.exports=_xe_bundle_common},2:function(e,t){e.exports=_xe_bundle_vendor},30:function(e,t,n){e.exports=n(31)},31:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){var e=[],t=[],n=0;(0,s.default)(".lang-editor-box").length>0&&((0,s.default)(".lang-editor-box").each(function(a,i){var o=(0,s.default)(this),l=o.data("name"),r=o.data("lang-key"),u=o.data("multiline"),d=o.data("lines"),c=o.data("autocomplete");r&&e.push(r),t.push({name:l,langKey:r,multiline:u,lines:d,autocomplete:c,target:o[0]}),n++}),e.length>0?window.XE.ajax({type:"get",dataType:"json",url:d.default.getters["router/origin"]+"/lang/lines/many",data:{keys:e},success:function(e){s.default.each(e,function(e,n){s.default.each(t,function(){e===this.langKey&&(this.lines=n)})}),s.default.each(t,function(){window.langEditorBoxRender(this,"obj")})}}):s.default.each(t,function(){window.langEditorBoxRender(this,"obj")})),window.XE.Validator.put("langrequired",function(e,t){var n=e.closest(".lang-editor-box").find("input[name^='xe_lang_preprocessor']:not(:hidden):first"),a=n.val(),i=e.closest(".lang-editor-box").data("valid-name")||e.closest(".lang-editor-box").data("name");return""!==a||(window.XE.Validator.error(n,window.XE.Lang.trans("validation.required",{attribute:i})),!1)})}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),s=a(r),u=n(32),d=a(u),c=function(){function e(t){var n=t.$wrapper,a=t.seq,o=t.name,l=t.langKey,r=t.multiline,s=t.lines,u=t.autocomplete;i(this,e),this.$wrapper=n,this.seq=a,this.name=o,this.langKey=l,this.multiline=r,this.lines=s||[],this.autocomplete=u,this.init()}return l(e,[{key:"init",value:function(){this.langKey&&0==this.lines.length?window.XE.ajax({type:"get",dataType:"json",url:d.default.getters["router/origin"]+"/lang/lines/"+this.langKey,success:function(e){this.setLines(e),this.render(),this.bindEvents()}.bind(this)}):(this.render(),this.bindEvents())}},{key:"bindEvents",value:function(){this.autocomplete&&this.$wrapper.find("input[type=text]:first,textarea:first").autocomplete({source:"/lang/search/"+d.default.getters["lang/current"].code,minLength:1,focus:function(e,t){e.preventDefault()},select:function(e,t){this.setLines(t.item.lines)}})}},{key:"render",value:function(){var e=this,t=d.default.getters["lang/default"],n=d.default.getters["lang/fallback"],a="xe_lang_preprocessor://lang/seq/"+this.seq,i=this.getValueFromLinesWithLocale(t.code)||"",o=this.multiline?"textarea":"text",l=this.multiline?'<input type="hidden" name="'+a+'/multiline" value="true" />':"",r=this.getEditor(a,t.code,i),s="";n.forEach(function(t,n){var i=e.getValueFromLinesWithLocale(t.code)||"",o=e.getEditor(a,t.code,i);s+=['<div key="'+t.code+'" class="input-group">',""+o,'<span class="input-group-addon">','<span class="flag-code"><i class="'+t.code+' xe-flag"></i>'+t.nativeName+"</span>","</span>","</div>"].join("\n")});var u=['<div class="'+o+'">','<input type="hidden" name="xe_use_request_preprocessor" value="Y"/>','<input type="hidden" name="'+a+'/name" value="'+this.name+'" />','<input type="hidden" name="'+a+'/key" value="'+(this.langKey||"")+'" />',""+l,'<input type="hidden" name="'+this.name+'" value="'+(this.langKey||"")+'" />','<div key="'+t.code+'" class="input-group">',""+r,'<span class="input-group-addon">','<span class="flag-code"><i class="'+t.code+' xe-flag"></i>'+t.nativeName+"</span>","</span>","</div>",'<div class="sub">'+s+"</div>","</div>"].join("\n");this.$wrapper.html(u)}},{key:"setLines",value:function(e){var t=this;this.lines=e,window.XE.Lang.locales.map(function(e){var n="#input-"+t.seq+"-"+e.code,a=t.getValueFromLinesWithLocale(e.code);(0,s.default)(n).val(a)})}},{key:"getValueFromLinesWithLocale",value:function(e){for(var t=this.lines,n=t.length,a={};n--;)if(a=t[n],a.locale==e)return a.value}},{key:"getEditor",value:function(e,t,n){var a=null,i="input-"+this.seq+"-"+t,o=e+"/locale/"+t;return a=this.multiline?(0,s.default)('<textarea class="form-control" id="'+i+'" name="'+o+'"></textarea>').text(n):(0,s.default)('<input type="text" class="form-control" id="'+i+'" name="'+o+'" />').attr("value",n),a.prop("outerHTML")}}]),e}(),f=0;window.langEditorBoxRender=function(e,t){if("obj"===t){var n=e.name,a=e.langKey,i=e.multiline,o=e.lines,l=e.autocomplete;e.target;new c({$wrapper:(0,s.default)(e.target),seq:f,name:n,langKey:a,multiline:i,lines:o,autocomplete:l})}else{var r=e.data("name"),u=e.data("lang-key"),d=e.data("multiline"),p=e.data("lines"),h=e.data("autocomplete");new c({$wrapper:e,seq:f,name:r,langKey:u,multiline:d,lines:p,autocomplete:h})}f++},(0,s.default)(function(){o()}),(0,s.default)(document).on("focus",".lang-editor-box input, textarea",function(){var e=(0,s.default)(this).closest(".lang-editor-box"),t=e.find(".sub");(0,s.default)(t).is(":hidden")&&(0,s.default)(t).slideDown("fast")})},32:function(e,t,n){e.exports=n(1)(56)}})});