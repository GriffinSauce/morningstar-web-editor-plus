(()=>{var S=typeof navigator!="undefined"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function P(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function L(e,t){for(var n=t.slice(0,t.length-1),r=0;r<n.length;r++)n[r]=e[n[r].toLowerCase()];return n}function k(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function H(e,t){for(var n=e.length>=t.length?e:t,r=e.length>=t.length?t:e,i=!0,a=0;a<n.length;a++)r.indexOf(n[a])===-1&&(i=!1);return i}var B={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":S?173:189,"=":S?61:187,";":S?59:186,"'":222,"[":219,"]":221,"\\":220},w={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},q={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},c={16:!1,18:!1,17:!1,91:!1},l={};for(var b=1;b<20;b++)B["f".concat(b)]=111+b;var s=[],M="all",T=[],O=function(t){return B[t.toLowerCase()]||w[t.toLowerCase()]||t.toUpperCase().charCodeAt(0)};function j(e){M=e||"all"}function K(){return M||"all"}function $(){return s.slice(0)}function I(e){var t=e.target||e.srcElement,n=t.tagName,r=!0;return(t.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!t.readOnly)&&(r=!1),r}function G(e){return typeof e=="string"&&(e=O(e)),s.indexOf(e)!==-1}function V(e,t){var n,r;e||(e=K());for(var i in l)if(Object.prototype.hasOwnProperty.call(l,i))for(n=l[i],r=0;r<n.length;)n[r].scope===e?n.splice(r,1):r++;K()===e&&j(t||"all")}function X(e){var t=e.keyCode||e.which||e.charCode,n=s.indexOf(t);if(n>=0&&s.splice(n,1),e.key&&e.key.toLowerCase()==="meta"&&s.splice(0,s.length),(t===93||t===224)&&(t=91),t in c){c[t]=!1;for(var r in w)w[r]===t&&(h[r]=!1)}}function z(e){if(!e)Object.keys(l).forEach(function(o){return delete l[o]});else if(Array.isArray(e))e.forEach(function(o){o.key&&E(o)});else if(typeof e=="object")e.key&&E(e);else if(typeof e=="string"){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0],a=n[1];typeof i=="function"&&(a=i,i=""),E({key:e,scope:i,method:a,splitKey:"+"})}}var E=function(t){var n=t.key,r=t.scope,i=t.method,a=t.splitKey,o=a===void 0?"+":a,f=k(n);f.forEach(function(u){var d=u.split(o),m=d.length,p=d[m-1],g=p==="*"?"*":O(p);if(!!l[g]){r||(r=K());var v=m>1?L(w,d):[];l[g]=l[g].map(function(y){var U=i?y.method===i:!0;return U&&y.scope===r&&H(y.mods,v)?{}:y})}})};function _(e,t,n){var r;if(t.scope===n||t.scope==="all"){r=t.mods.length>0;for(var i in c)Object.prototype.hasOwnProperty.call(c,i)&&(!c[i]&&t.mods.indexOf(+i)>-1||c[i]&&t.mods.indexOf(+i)===-1)&&(r=!1);(t.mods.length===0&&!c[16]&&!c[18]&&!c[17]&&!c[91]||r||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function D(e){var t=l["*"],n=e.keyCode||e.which||e.charCode;if(!!h.filter.call(this,e)){if((n===93||n===224)&&(n=91),s.indexOf(n)===-1&&n!==229&&s.push(n),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(v){var y=q[v];e[v]&&s.indexOf(y)===-1?s.push(y):!e[v]&&s.indexOf(y)>-1?s.splice(s.indexOf(y),1):v==="metaKey"&&e[v]&&s.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(s=s.slice(s.indexOf(y))))}),n in c){c[n]=!0;for(var r in w)w[r]===n&&(h[r]=!0);if(!t)return}for(var i in c)Object.prototype.hasOwnProperty.call(c,i)&&(c[i]=e[q[i]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(s.indexOf(17)===-1&&s.push(17),s.indexOf(18)===-1&&s.push(18),c[17]=!0,c[18]=!0);var a=K();if(t)for(var o=0;o<t.length;o++)t[o].scope===a&&(e.type==="keydown"&&t[o].keydown||e.type==="keyup"&&t[o].keyup)&&_(e,t[o],a);if(n in l){for(var f=0;f<l[n].length;f++)if((e.type==="keydown"&&l[n][f].keydown||e.type==="keyup"&&l[n][f].keyup)&&l[n][f].key){for(var u=l[n][f],d=u.splitKey,m=u.key.split(d),p=[],g=0;g<m.length;g++)p.push(O(m[g]));p.sort().join("")===s.sort().join("")&&_(e,u,a)}}}}function F(e){return T.indexOf(e)>-1}function h(e,t,n){s=[];var r=k(e),i=[],a="all",o=document,f=0,u=!1,d=!0,m="+";for(n===void 0&&typeof t=="function"&&(n=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(a=t.scope),t.element&&(o=t.element),t.keyup&&(u=t.keyup),t.keydown!==void 0&&(d=t.keydown),typeof t.splitKey=="string"&&(m=t.splitKey)),typeof t=="string"&&(a=t);f<r.length;f++)e=r[f].split(m),i=[],e.length>1&&(i=L(w,e)),e=e[e.length-1],e=e==="*"?"*":O(e),e in l||(l[e]=[]),l[e].push({keyup:u,keydown:d,scope:a,mods:i,shortcut:r[f],method:n,key:r[f],splitKey:m});typeof o!="undefined"&&!F(o)&&window&&(T.push(o),P(o,"keydown",function(p){D(p)}),P(window,"focus",function(){s=[]}),P(o,"keyup",function(p){D(p),X(p)}))}var A={setScope:j,getScope:K,deleteScope:V,getPressedKeyCodes:$,isPressed:G,filter:I,unbind:z};for(var C in A)Object.prototype.hasOwnProperty.call(A,C)&&(h[C]=A[C]);typeof window!="undefined"&&(R=window.hotkeys,h.noConflict=function(e){return e&&window.hotkeys===h&&(window.hotkeys=R),h},window.hotkeys=h);var R,x=h;var J=e=>[...document.querySelectorAll("button")].filter(t=>t.innerHTML.includes(e)).pop();x("cmd+s",e=>(e.preventDefault(),J("Save Preset").click(),!1));x("cmd+left,cmd+right",(e,t)=>{e.preventDefault();let n=document.querySelectorAll(".banklabel")[1].innerText,i=[...[...document.querySelectorAll(".dropdown-menu")][1].querySelectorAll("a")],a=i.find(d=>new RegExp(`(Preset|Expr) ${n}`).test(d.innerText)),o={"cmd+left":-1,"cmd+right":1}[t.key],f=i.indexOf(a)+o,u=(i.length+f)%i.length;return i[u].click(),!1});x("cmd+up,cmd+down",(e,t)=>{e.preventDefault();let n=document.querySelectorAll(".banklabel")[0].innerText,i=[...[...document.querySelectorAll(".dropdown-menu")][0].querySelectorAll("a")],a=i.find(d=>new RegExp(`Bank ${n}`).test(d.innerText)),o={"cmd+up":-1,"cmd+down":1}[t.key],f=i.indexOf(a)+o,u=(i.length+f)%i.length;return i[u].click(),!1});x("cmd+c",()=>{if(window.getSelection().type==="Range")return;document.querySelector('[mattooltip="Copy the Preset"]').click()});x("cmd+v+DISABLED",()=>{if(window.getSelection().type==="Range")return;document.querySelector('[mattooltip*="paste the last copied preset').click()});})();
/*!
 * hotkeys-js v3.8.7
 * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
 * 
 * Copyright (c) 2021 kenny wong <wowohoo@qq.com>
 * http://jaywcjlove.github.io/hotkeys
 * 
 * Licensed under the MIT license.
 */