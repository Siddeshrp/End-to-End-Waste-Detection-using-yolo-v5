(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[9473,9897,4155,6309,2138,0],{7049:(t,e,n)=>{"use strict";n.d(e,{Dp:()=>i,Z$:()=>s,kJ:()=>h,s7:()=>c});const s=t=>t[t.length-1];const r=()=>[];const o=t=>t.slice();const c=(t,e)=>{for(let n=0;n<e.length;n++){t.push(e[n])}};const i=Array.from;const a=(t,e)=>t.every(e);const l=(t,e)=>t.some(e);const u=(t,e)=>t.length===e.length&&a(t,((t,n)=>t===e[n]));const f=t=>t.reduce(((t,e)=>t.concat(e)),[]);const h=Array.isArray},97027:(t,e,n)=>{"use strict";n.d(e,{Hi:()=>u,PP:()=>r});var s=n(59735);const r=(t,e,n=0)=>{try{for(;n<t.length;n++){t[n](...e)}}finally{if(n<t.length){r(t,e,n+1)}}};const o=()=>{};const c=t=>t();const i=t=>t;const a=(t,e)=>t===e;const l=(t,e)=>t===e||t!=null&&e!=null&&t.constructor===e.constructor&&(t instanceof Array&&array.equalFlat(t,e)||typeof t==="object"&&object.equalFlat(t,e));const u=(t,e)=>{if(t==null||e==null){return a(t,e)}if(t.constructor!==e.constructor){return false}if(t===e){return true}switch(t.constructor){case ArrayBuffer:t=new Uint8Array(t);e=new Uint8Array(e);case Uint8Array:{if(t.byteLength!==e.byteLength){return false}for(let n=0;n<t.length;n++){if(t[n]!==e[n]){return false}}break}case Set:{if(t.size!==e.size){return false}for(const n of t){if(!e.has(n)){return false}}break}case Map:{if(t.size!==e.size){return false}for(const n of t.keys()){if(!e.has(n)||!u(t.get(n),e.get(n))){return false}}break}case Object:if(s.kE(t)!==s.kE(e)){return false}for(const n in t){if(!s.l$(t,n)||!u(t[n],e[n])){return false}}break;case Array:if(t.length!==e.length){return false}for(let n=0;n<t.length;n++){if(!u(t[n],e[n])){return false}}break;default:return false}return true}},72382:(t,e,n)=>{"use strict";n.d(e,{JG:()=>r,UI:()=>c,Ue:()=>s,Yj:()=>i,Yu:()=>o});const s=()=>new Map;const r=t=>{const e=s();t.forEach(((t,n)=>{e.set(n,t)}));return e};const o=(t,e,n)=>{let s=t.get(e);if(s===undefined){t.set(e,s=n())}return s};const c=(t,e)=>{const n=[];for(const[s,r]of t){n.push(e(r,s))}return n};const i=(t,e)=>{for(const[n,s]of t){if(e(s,n)){return true}}return false};const a=(t,e)=>{for(const[n,s]of t){if(!e(s,n)){return false}}return true}},14247:(t,e,n)=>{"use strict";n.d(e,{Fp:()=>g,GR:()=>w,GW:()=>s,VV:()=>d,Wn:()=>o,sQ:()=>m});const s=Math.floor;const r=Math.ceil;const o=Math.abs;const c=Math.imul;const i=Math.round;const a=Math.log10;const l=Math.log2;const u=Math.log;const f=Math.sqrt;const h=(t,e)=>t+e;const d=(t,e)=>t<e?t:e;const g=(t,e)=>t>e?t:e;const p=Number.isNaN;const m=Math.pow;const y=t=>Math.pow(10,t);const v=Math.sign;const w=t=>t!==0?t<0:1/t<0},59735:(t,e,n)=>{"use strict";n.d(e,{$m:()=>h,UI:()=>i,kE:()=>a,l$:()=>f});const s=()=>Object.create(null);const r=Object.assign;const o=Object.keys;const c=(t,e)=>{for(const n in t){e(t[n],n)}};const i=(t,e)=>{const n=[];for(const s in t){n.push(e(t[s],s))}return n};const a=t=>o(t).length;const l=(t,e)=>{for(const n in t){if(e(t[n],n)){return true}}return false};const u=(t,e)=>{for(const n in t){if(!e(t[n],n)){return false}}return true};const f=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);const h=(t,e)=>t===e||a(t)===a(e)&&u(t,((t,n)=>(t!==undefined||f(e,n))&&e[n]===t))},58290:(t,e,n)=>{"use strict";n.d(e,{y:()=>c});var s=n(72382);var r=n(48307);var o=n(7049);class c{constructor(){this._observers=s.Ue()}on(t,e){s.Yu(this._observers,t,r.Ue).add(e)}once(t,e){const n=(...s)=>{this.off(t,n);e(...s)};this.on(t,n)}off(t,e){const n=this._observers.get(t);if(n!==undefined){n.delete(e);if(n.size===0){this._observers.delete(t)}}}emit(t,e){return o.Dp((this._observers.get(t)||s.Ue()).values()).forEach((t=>t(...e)))}destroy(){this._observers=s.Ue()}}},48307:(t,e,n)=>{"use strict";n.d(e,{Ue:()=>s});const s=()=>new Set;const r=t=>Array.from(t);const o=t=>t.values().next().value||undefined;const c=t=>new Set(t)},20817:(t,e,n)=>{"use strict";n.d(e,{ZG:()=>r});const s=()=>new Date;const r=Date.now;const o=t=>{if(t<6e4){const e=metric.prefix(t,-1);return math.round(e.n*100)/100+e.prefix+"s"}t=math.floor(t/1e3);const e=t%60;const n=math.floor(t/60)%60;const s=math.floor(t/3600)%24;const r=math.floor(t/86400);if(r>0){return r+"d"+(s>0||n>30?" "+(n>30?s+1:s)+"h":"")}if(s>0){return s+"h"+(n>0||e>30?" "+(e>30?n+1:n)+"min":"")}return n+"min"+(e>0?" "+e+"s":"")}},34155:t=>{var e=t.exports={};var n;var s;function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){n=setTimeout}else{n=r}}catch(t){n=r}try{if(typeof clearTimeout==="function"){s=clearTimeout}else{s=o}}catch(t){s=o}})();function c(t){if(n===setTimeout){return setTimeout(t,0)}if((n===r||!n)&&setTimeout){n=setTimeout;return setTimeout(t,0)}try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}function i(t){if(s===clearTimeout){return clearTimeout(t)}if((s===o||!s)&&clearTimeout){s=clearTimeout;return clearTimeout(t)}try{return s(t)}catch(e){try{return s.call(null,t)}catch(e){return s.call(this,t)}}}var a=[];var l=false;var u;var f=-1;function h(){if(!l||!u){return}l=false;if(u.length){a=u.concat(a)}else{f=-1}if(a.length){d()}}function d(){if(l){return}var t=c(h);l=true;var e=a.length;while(e){u=a;a=[];while(++f<e){if(u){u[f].run()}}f=-1;e=a.length}u=null;l=false;i(t)}e.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1){for(var n=1;n<arguments.length;n++){e[n-1]=arguments[n]}}a.push(new g(t,e));if(a.length===1&&!l){c(d)}};function g(t,e){this.fun=t;this.array=e}g.prototype.run=function(){this.fun.apply(null,this.array)};e.title="browser";e.browser=true;e.env={};e.argv=[];e.version="";e.versions={};function p(){}e.on=p;e.addListener=p;e.once=p;e.off=p;e.removeListener=p;e.removeAllListeners=p;e.emit=p;e.prependListener=p;e.prependOnceListener=p;e.listeners=function(t){return[]};e.binding=function(t){throw new Error("process.binding is not supported")};e.cwd=function(){return"/"};e.chdir=function(t){throw new Error("process.chdir is not supported")};e.umask=function(){return 0}},1057:(t,e,n)=>{"use strict";n.d(e,{Ag:()=>d,GL:()=>h,oy:()=>m,xq:()=>g});var s=n(88534);var r=n(64485);var o=n(20817);var c=n(14247);var i=n(58290);var a=n(97027);var l=n(66350);var u=n.n(l);const f=3e4;class h extends i.y{constructor(t){super();this.doc=t;this.clientID=t.clientID;this.states=new Map;this.meta=new Map;this._checkInterval=setInterval((()=>{const t=o.ZG();if(this.getLocalState()!==null&&f/2<=t-this.meta.get(this.clientID).lastUpdated){this.setLocalState(this.getLocalState())}const e=[];this.meta.forEach(((n,s)=>{if(s!==this.clientID&&f<=t-n.lastUpdated&&this.states.has(s)){e.push(s)}}));if(e.length>0){d(this,e,"timeout")}}),c.GW(f/10));t.on("destroy",(()=>{this.destroy()}));this.setLocalState({})}destroy(){this.emit("destroy",[this]);this.setLocalState(null);super.destroy();clearInterval(this._checkInterval)}getLocalState(){return this.states.get(this.clientID)||null}setLocalState(t){const e=this.clientID;const n=this.meta.get(e);const s=n===undefined?0:n.clock+1;const r=this.states.get(e);if(t===null){this.states.delete(e)}else{this.states.set(e,t)}this.meta.set(e,{clock:s,lastUpdated:o.ZG()});const c=[];const i=[];const l=[];const u=[];if(t===null){u.push(e)}else if(r==null){if(t!=null){c.push(e)}}else{i.push(e);if(!a.Hi(r,t)){l.push(e)}}if(c.length>0||l.length>0||u.length>0){this.emit("change",[{added:c,updated:l,removed:u},"local"])}this.emit("update",[{added:c,updated:i,removed:u},"local"])}setLocalStateField(t,e){const n=this.getLocalState();if(n!==null){this.setLocalState({...n,[t]:e})}}getStates(){return this.states}}const d=(t,e,n)=>{const s=[];for(let r=0;r<e.length;r++){const n=e[r];if(t.states.has(n)){t.states.delete(n);if(n===t.clientID){const e=t.meta.get(n);t.meta.set(n,{clock:e.clock+1,lastUpdated:o.ZG()})}s.push(n)}}if(s.length>0){t.emit("change",[{added:[],updated:[],removed:s},n]);t.emit("update",[{added:[],updated:[],removed:s},n])}};const g=(t,e,n=t.states)=>{const r=e.length;const o=s.Mf();s.uE(o,r);for(let c=0;c<r;c++){const r=e[c];const i=n.get(r)||null;const a=t.meta.get(r).clock;s.uE(o,r);s.uE(o,a);s.uw(o,JSON.stringify(i))}return s._f(o)};const p=(t,e)=>{const n=decoding.createDecoder(t);const s=encoding.createEncoder();const r=decoding.readVarUint(n);encoding.writeVarUint(s,r);for(let o=0;o<r;o++){const t=decoding.readVarUint(n);const r=decoding.readVarUint(n);const o=JSON.parse(decoding.readVarString(n));const c=e(o);encoding.writeVarUint(s,t);encoding.writeVarUint(s,r);encoding.writeVarString(s,JSON.stringify(c))}return encoding.toUint8Array(s)};const m=(t,e,n)=>{const s=r.l1(e);const c=o.ZG();const i=[];const l=[];const u=[];const f=[];const h=r.yg(s);for(let o=0;o<h;o++){const e=r.yg(s);let n=r.yg(s);const o=JSON.parse(r.kf(s));const h=t.meta.get(e);const d=t.states.get(e);const g=h===undefined?0:h.clock;if(g<n||g===n&&o===null&&t.states.has(e)){if(o===null){if(e===t.clientID&&t.getLocalState()!=null){n++}else{t.states.delete(e)}}else{t.states.set(e,o)}t.meta.set(e,{clock:n,lastUpdated:c});if(h===undefined&&o!==null){i.push(e)}else if(h!==undefined&&o===null){f.push(e)}else if(o!==null){if(!a.Hi(o,d)){u.push(e)}l.push(e)}}}if(i.length>0||u.length>0||f.length>0){t.emit("change",[{added:i,updated:u,removed:f},n])}if(i.length>0||l.length>0||f.length>0){t.emit("update",[{added:i,updated:l,removed:f},n])}}}}]);
//# sourceMappingURL=9473.be34741ef049beed4931.js.map?v=be34741ef049beed4931