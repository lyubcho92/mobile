if (self.CavalryLogger) { CavalryLogger.start_js(["VvVFw"]); } __d("QPLInspector",[],(function(a,b,c,d,e,f){a=function(){"use strict";function a(){this.$1=[],this.$2={}}var b=a.prototype;b.appendLog=function(a){for(var b in this.$2){if(!Object.prototype.hasOwnProperty.call(this.$2,b)||a.marker_id!==b)continue;this.$2[a.marker_id].forEach(function(b){return b(a)})}this.$1.push(a)};b.dumpLogs=function(){return this.$1};b.addListener=function(a,b){Object.prototype.hasOwnProperty.call(this.$2,a)||(this.$2[a]=[]),this.$2[a].push(b),this.$1.forEach(function(c){c.marker_id===a&&b(c)})};b.removeListener=function(a,b){b=this.$2[a].indexOf(b);b!==-1&&this.$2[a].splice(b,1)};return a}();e.exports=new a()}),null);
