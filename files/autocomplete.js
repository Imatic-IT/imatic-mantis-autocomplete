!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t){return e[t]}n.r(t);let r,i={};const c=function(){const e=document.querySelector("[data-imatic-autocomplete-url]");if(null===e)return null;return e.dataset.imaticAutocompleteUrl}();let s;function l(){const e=document.querySelector("#imaticAutocompleteWidget");e&&(s(),e.remove())}function u(){const e=document.querySelector("#imaticAutocompleteWidget");e&&e.focus()}function a(e){let t=!1,n=0;function a(){t&&(t=!1,l())}const d=()=>{if(0!==e.selectionStart)if(t){const u=e.selectionStart-n;if(u<0||u>191)return void a();if("@"===e.value[e.selectionStart-1])return t=!0,void(n=e.selectionStart);const d=e.value.substr(n,u);if(null!=d.match(/[\n ]/))return void a();if(d.length>0){r&&r.abort(),r=new AbortController,l();const a=o=>{0!==o.length&&t&&function({completions:e,onSelect:t,focusInput:n,onRestyle:o,input:r}){l();let i=0;const c=e.map(e=>{const t=document.createTextNode(e),n=document.createElement("li");return n.setAttribute("tabindex",-1),n.appendChild(t),n}),u=document.createElement("ul");u.className="imatic-autocomplete",u.setAttribute("id","imaticAutocompleteWidget"),u.setAttribute("tabindex",-1),c.forEach(e=>u.appendChild(e));const a=new Set(["ArrowDown","ArrowUp","Enter"]);u.addEventListener("keydown",o=>{if(a.has(o.code))switch(o.preventDefault(),o.code){case"ArrowUp":{const e=u.querySelector(`li:nth-child(${i})`);e?(i--,e.focus()):n();break}case"ArrowDown":{const e=u.querySelector(`li:nth-child(${i+2})`);e&&(i++,e.focus())}break;case"Enter":t&&t({val:e[i]}),l()}}),u.addEventListener("focus",e=>{const t=u.querySelector("li");i=0,t&&t.focus()});const d=()=>o(u),f=e=>{e.target===r||e.target===u||u.contains(e.target)||l()},p=r.closest(".table-responsive");window.addEventListener("scroll",d),window.addEventListener("resize",d),r.addEventListener("scroll",d),p&&p.addEventListener("scroll",d),window.addEventListener("click",f),window.addEventListener("focusin",f),s=()=>{window.removeEventListener("scroll",d),window.removeEventListener("resize",d),r.removeEventListener("scroll",d),p&&p.removeEventListener("scroll",d),window.removeEventListener("click",f),window.removeEventListener("focusin",f)},document.body.appendChild(u),d()}({completions:o,input:e,focusInput:()=>{const t=n+u;e.focus(),e.setSelectionRange(t,t)},onSelect:({val:o})=>{if(!t)return;const r=n+u;e.focus(),e.setRangeText(o.substr(u),r,r,"end")},onRestyle:t=>{const n=e.getBoundingClientRect(),o=function(e,t){const n=document.createElement("span");n.textContent=t;const o=document.createElement("div");o.appendChild(n),Array.from(e).forEach((function(t){o.style.setProperty(t,e.getPropertyValue(t),e.getPropertyPriority(t))})),o.style.visibility="hidden",document.body.appendChild(o);const r={width:n.offsetWidth,height:n.offsetHeight};return o.remove(),r}(getComputedStyle(e),e.value.substr(0,e.selectionStart)).height;t.style.position="fixed",t.style.left=Math.max(0,n.x)+"px",t.style.top=n.y+o+5-e.scrollTop+"px",t.style.width=e.clientWidth+"px"}})};if(null!=o(i,d))return a(o(i,d));fetch(function(e){const t=new URL(c,location.href);return t.searchParams.append("search",e),t}(d),{signal:r.signal}).then(e=>e.json()).then(e=>{i=function(e,t,n){return Object.assign({},e,{[t]:n})}(i,d,e),a(e)})}}else"@"===e.value[e.selectionStart-1]&&(t=!0,n=e.selectionStart);else a()};e.addEventListener("keydown",e=>{if(t){switch(e.code){case"ArrowDown":e.preventDefault(),u();break;case"ArrowUp":a();break;case"ArrowLeft":case"ArrowRight":setTimeout(()=>d(),0)}"ArrowDown"===e.code&&u()}}),e.addEventListener("input",e=>{d()})}null!=c&&document.querySelectorAll("#bugnote_text, #description, #steps_to_reproduce, #additional_info, #summary, #additional_information").forEach(e=>{a(e)})}]);
//# sourceMappingURL=autocomplete.js.map