!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t){return e[t]}n.r(t);let r={};const i=function(){const e=document.querySelector("[data-imatic-autocomplete-url]");if(null===e)return null;return e.dataset.imaticAutocompleteUrl}();let c;function l(){const e=document.querySelector("#imaticAutocompleteWidget");e&&(c(),e.remove())}function u(){const e=document.querySelector("#imaticAutocompleteWidget");e&&e.focus()}function s(e){let t=!1,n=0,s=null;function d(){t&&(t=!1,l())}function a(){return e.selectionStart-n}function f(){const t=a(),o=e.value.substr(n,t);return 0===o.length||null!=o.match(/[\n ]/)?null:o}const p=()=>{if(0!==e.selectionStart){if("@"===e.value[e.selectionStart-1])return t=!0,n=e.selectionStart,void(s=null);if(t){const u=f();if(null==u)return void d();const p=()=>{const i=function(e,t){for(let n=t.length;n>0;n--){const r=o(e,t.substr(0,n));if(null!=r)return r}}(r,f());if(null==i||0===i.length||!t)return l(),void(s=null);if(function(e,t){if(null==e||null==t)return null==e&&null==t;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(s,i))return;const u=a();s=i,function({completions:e,onSelect:t,focusInput:n,onRestyle:o,input:r}){l();let i=0;const u=e.map(e=>{const t=document.createTextNode(e),n=document.createElement("li");return n.setAttribute("tabindex",-1),n.appendChild(t),n}),s=document.createElement("ul");s.className="imatic-autocomplete",s.setAttribute("id","imaticAutocompleteWidget"),s.setAttribute("tabindex",-1),u.forEach(e=>s.appendChild(e));const d=new Set(["ArrowDown","ArrowUp","Enter"]);s.addEventListener("keydown",o=>{if(d.has(o.code))switch(o.preventDefault(),o.code){case"ArrowUp":{const e=s.querySelector(`li:nth-child(${i})`);e?(i--,e.focus()):n();break}case"ArrowDown":{const e=s.querySelector(`li:nth-child(${i+2})`);e&&(i++,e.focus())}break;case"Enter":t&&t({val:e[i]}),l()}}),s.addEventListener("click",e=>{var n=$(e.target).text();t({val:n}),l()}),s.addEventListener("focus",e=>{const t=s.querySelector("li");i=0,t&&t.focus()});const a=()=>o(s),f=e=>{e.target===r||e.target===s||s.contains(e.target)||l()},p=r.closest(".table-responsive");window.addEventListener("touchend",a),r.addEventListener("touchend",a),window.addEventListener("scroll",a),window.addEventListener("resize",a),r.addEventListener("scroll",a),p&&p.addEventListener("scroll",a),window.addEventListener("click",f),window.addEventListener("focusin",f),c=()=>{window.removeEventListener("touchend",a),window.removeEventListener("scroll",a),window.removeEventListener("resize",a),r.removeEventListener("scroll",a),p&&p.removeEventListener("scroll",a),window.removeEventListener("click",f),window.removeEventListener("focusin",f)},document.body.appendChild(s),a()}({completions:i,input:e,focusInput:()=>{const t=n+u;e.focus(),e.setSelectionRange(t,t)},onSelect:({val:o})=>{if(!t)return;const r=n+u;e.focus(),e.setRangeText(o.substr(u),r,r,"end")},onRestyle:t=>{const n=e.getBoundingClientRect(),o=function(e,t){const n=document.createElement("span");n.textContent=t;const o=document.createElement("div");o.appendChild(n),Array.from(e).forEach((function(t){o.style.setProperty(t,e.getPropertyValue(t),e.getPropertyPriority(t))})),o.style.visibility="hidden",document.body.appendChild(o);const r={width:n.offsetWidth,height:n.offsetHeight};return o.remove(),r}(getComputedStyle(e),e.value.substr(0,e.selectionStart)).height;t.style.position="fixed",t.style.left=Math.max(0,n.x)+"px",t.style.top=n.y+o+5-e.scrollTop+"px",t.style.width=e.clientWidth+"px"}})};if(null!=o(r,u))return p(o(r,u));fetch(function(e){const t=new URL(i,location.href);return t.searchParams.append("search",e),t}(u)).then(e=>e.json()).then(e=>{r=function(e,t,n){return Object.assign({},e,{[t]:n})}(r,u,e),p()})}}else d()};e.addEventListener("keydown",e=>{if(t){switch(e.code){case"ArrowDown":e.preventDefault(),u();break;case"ArrowUp":d();break;case"ArrowLeft":case"ArrowRight":setTimeout(()=>p(),0)}"ArrowDown"===e.code&&u()}}),e.addEventListener("input",e=>{p()})}null!=i&&document.querySelectorAll("#bugnote_text, #description, #steps_to_reproduce, #additional_info, #summary, #additional_information").forEach(e=>{s(e)})}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvY2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvdXRpbHMuanMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJjYWNoZSIsInRlcm0iLCJyZXN1bHRDYWNoZSIsIl9hdXRvY29tcGxldGVVcmwiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRhdGFzZXQiLCJpbWF0aWNBdXRvY29tcGxldGVVcmwiLCJhdXRvY29tcGxldGVVcmwiLCJkZXN0cm95TGlzdEZuIiwiY2xvc2VBdXRvY29tcGxldGVMaXN0RWwiLCJyZW1vdmUiLCJmb2N1c0F1dG9jb21wbGV0ZUxpc3QiLCJmb2N1cyIsImF1dG9jb21wbGV0ZSIsImF1dG9jb21wbGV0aW5nIiwic3RhcnRTZWwiLCJhY3RpdmVDb21wbGV0aW9ucyIsInN0b3BBdXRvY29tcGxldGUiLCJnZXRTZWxlY3Rpb25MZW5ndGgiLCJzZWxlY3Rpb25TdGFydCIsImdldFNlbGVjdGlvbiIsImxlbiIsInNlbGVjdGlvbiIsInN1YnN0ciIsImxlbmd0aCIsIm1hdGNoIiwiaGFuZGxlQ2hhbmdlIiwidiIsInJlY2VpdmVDb21wbGV0aW9ucyIsImNvbXBsZXRpb25zIiwicmVzIiwidjEiLCJ2MiIsImZsYXRBcnJheXNFcXVhbCIsIm9uU2VsZWN0IiwiZm9jdXNJbnB1dCIsIm9uUmVzdHlsZSIsImlucHV0IiwiZm9jdXNlZCIsImNvbXBsZXRpb25FbHMiLCJtYXAiLCJ0ZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsInVsIiwiY2xhc3NOYW1lIiwiZm9yRWFjaCIsImNvbnRyb2xLZXlzIiwiU2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJoYXMiLCJjb2RlIiwicHJldmVudERlZmF1bHQiLCJuZXdBY3RpdmUiLCJ2YWwiLCIkIiwidGFyZ2V0IiwiZmlyc3RMaSIsInJlc3R5bGUiLCJjbG9zZUlmT3V0c2lkZVRhcmdldCIsImNvbnRhaW5zIiwic2NDb250YWluZXIiLCJjbG9zZXN0Iiwid2luZG93IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJvZHkiLCJvcGVuQXV0b2NvbXBsZXRlTGlzdEVsIiwicmVxdWlyZWRTZWwiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInNldFJhbmdlVGV4dCIsImxpc3RFbCIsImxpc3RQb3MiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0ZXh0SGVpZ2h0IiwiY29tcHV0ZWRTdHlsZSIsInNwYW4iLCJ0ZXh0Q29udGVudCIsImRpdiIsIkFycmF5IiwiZnJvbSIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZ2V0UHJvcGVydHlQcmlvcml0eSIsInZpc2liaWxpdHkiLCJkYXRhIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImdldENvbXB1dGVkU3R5bGUiLCJwb3NpdGlvbiIsImxlZnQiLCJNYXRoIiwibWF4IiwieCIsInRvcCIsInkiLCJzY3JvbGxUb3AiLCJjbGllbnRXaWR0aCIsImZldGNoIiwidXJsIiwiVVJMIiwibG9jYXRpb24iLCJocmVmIiwic2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwic2VhcmNoVXJsIiwidGhlbiIsImpzb24iLCJhc3NpZ24iLCJzZXRUaW1lb3V0IiwicXVlcnlTZWxlY3RvckFsbCJdLCJtYXBwaW5ncyI6ImFBQ0UsSUFBSUEsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVUMsUUFHbkMsSUFBSUMsRUFBU0osRUFBaUJFLEdBQVksQ0FDekNHLEVBQUdILEVBQ0hJLEdBQUcsRUFDSEgsUUFBUyxJQVVWLE9BTkFJLEVBQVFMLEdBQVVNLEtBQUtKLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVNGLEdBRy9ERyxFQUFPRSxHQUFJLEVBR0pGLEVBQU9ELFFBS2ZGLEVBQW9CUSxFQUFJRixFQUd4Qk4sRUFBb0JTLEVBQUlWLEVBR3hCQyxFQUFvQlUsRUFBSSxTQUFTUixFQUFTUyxFQUFNQyxHQUMzQ1osRUFBb0JhLEVBQUVYLEVBQVNTLElBQ2xDRyxPQUFPQyxlQUFlYixFQUFTUyxFQUFNLENBQUVLLFlBQVksRUFBTUMsSUFBS0wsS0FLaEVaLEVBQW9Ca0IsRUFBSSxTQUFTaEIsR0FDWCxvQkFBWGlCLFFBQTBCQSxPQUFPQyxhQUMxQ04sT0FBT0MsZUFBZWIsRUFBU2lCLE9BQU9DLFlBQWEsQ0FBRUMsTUFBTyxXQUU3RFAsT0FBT0MsZUFBZWIsRUFBUyxhQUFjLENBQUVtQixPQUFPLEtBUXZEckIsRUFBb0JzQixFQUFJLFNBQVNELEVBQU9FLEdBRXZDLEdBRFUsRUFBUEEsSUFBVUYsRUFBUXJCLEVBQW9CcUIsSUFDL0IsRUFBUEUsRUFBVSxPQUFPRixFQUNwQixHQUFXLEVBQVBFLEdBQThCLGlCQUFWRixHQUFzQkEsR0FBU0EsRUFBTUcsV0FBWSxPQUFPSCxFQUNoRixJQUFJSSxFQUFLWCxPQUFPWSxPQUFPLE1BR3ZCLEdBRkExQixFQUFvQmtCLEVBQUVPLEdBQ3RCWCxPQUFPQyxlQUFlVSxFQUFJLFVBQVcsQ0FBRVQsWUFBWSxFQUFNSyxNQUFPQSxJQUN0RCxFQUFQRSxHQUE0QixpQkFBVEYsRUFBbUIsSUFBSSxJQUFJTSxLQUFPTixFQUFPckIsRUFBb0JVLEVBQUVlLEVBQUlFLEVBQUssU0FBU0EsR0FBTyxPQUFPTixFQUFNTSxJQUFRQyxLQUFLLEtBQU1ELElBQzlJLE9BQU9GLEdBSVJ6QixFQUFvQjZCLEVBQUksU0FBUzFCLEdBQ2hDLElBQUlTLEVBQVNULEdBQVVBLEVBQU9xQixXQUM3QixXQUF3QixPQUFPckIsRUFBZ0IsU0FDL0MsV0FBOEIsT0FBT0EsR0FFdEMsT0FEQUgsRUFBb0JVLEVBQUVFLEVBQVEsSUFBS0EsR0FDNUJBLEdBSVJaLEVBQW9CYSxFQUFJLFNBQVNpQixFQUFRQyxHQUFZLE9BQU9qQixPQUFPa0IsVUFBVUMsZUFBZTFCLEtBQUt1QixFQUFRQyxJQUd6Ry9CLEVBQW9Ca0MsRUFBSSxHQUlqQmxDLEVBQW9CQSxFQUFvQm1DLEVBQUksRywrQkMxRTlDLFNBQVNsQixFQUFJbUIsRUFBT0MsR0FDdkIsT0FBT0QsRUFBTUMsRyxPQ05qQixJQUFJQyxFREZPLEdDR1gsTUFBTUMsRUF1VU4sV0FDSSxNQUFNQyxFQUFLQyxTQUFTQyxjQUFjLGtDQUNsQyxHQUFXLE9BQVBGLEVBQ0EsT0FBTyxLQUdYLE9BQU9BLEVBQUdHLFFBQVFDLHNCQTdVR0MsR0FFekIsSUFBSUMsRUFpSkosU0FBU0MsSUFDTCxNQUFNUCxFQUFLQyxTQUFTQyxjQUFjLDZCQUM5QkYsSUFDQU0sSUFDQU4sRUFBR1EsVUFJWCxTQUFTQyxJQUNMLE1BQU1ULEVBQUtDLFNBQVNDLGNBQWMsNkJBQzdCRixHQUlMQSxFQUFHVSxRQUdQLFNBQVNDLEVBQWFYLEdBQ2xCLElBQUlZLEdBQWlCLEVBQ2pCQyxFQUFXLEVBQ1hDLEVBQW9CLEtBRXhCLFNBQVNDLElBQ0FILElBSUxBLEdBQWlCLEVBQ2pCTCxLQUdKLFNBQVNTLElBQ0wsT0FBT2hCLEVBQUdpQixlQUFpQkosRUFHL0IsU0FBU0ssSUFDTCxNQUFNQyxFQUFNSCxJQUNOSSxFQUFZcEIsRUFBR25CLE1BQU13QyxPQUFPUixFQUFVTSxHQUU1QyxPQUF5QixJQUFyQkMsRUFBVUUsUUFBNEMsTUFBNUJGLEVBQVVHLE1BQU0sU0FDbkMsS0FHSkgsRUFHWCxNQUFNSSxFQUFlLEtBQ2pCLEdBQTBCLElBQXRCeEIsRUFBR2lCLGVBQVAsQ0FLQSxHQUF3QyxNQUFwQ2pCLEVBQUduQixNQUFNbUIsRUFBR2lCLGVBQWlCLEdBSTdCLE9BSEFMLEdBQWlCLEVBQ2pCQyxFQUFXYixFQUFHaUIsb0JBQ2RILEVBQW9CLE1BSXhCLEdBQUlGLEVBQWdCLENBQ2hCLE1BQU1hLEVBQUlQLElBQ1YsR0FBUyxNQUFMTyxFQUVBLFlBREFWLElBSUosTUFBTVcsRUFBcUIsS0FDdkIsTUFBTUMsRUQxTWYsU0FBc0IvQixFQUFPQyxHQUNoQyxJQUFLLElBQUlqQyxFQUFJaUMsRUFBS3lCLE9BQVExRCxFQUFJLEVBQUdBLElBQUssQ0FDbEMsTUFBTWdFLEVBQU1uRCxFQUFJbUIsRUFBT0MsRUFBS3dCLE9BQU8sRUFBR3pELElBQ3RDLEdBQVcsTUFBUGdFLEVBQ0EsT0FBT0EsR0NzTWlCLENBQ2hCOUIsRUFDQW9CLEtBRUosR0FDbUIsTUFBZlMsR0FDdUIsSUFBdkJBLEVBQVlMLFNBQ1hWLEVBSUQsT0FGQUwsU0FDQU8sRUFBb0IsTUFJeEIsR0FoT2hCLFNBQXlCZSxFQUFJQyxHQUN6QixHQUFVLE1BQU5ELEdBQW9CLE1BQU5DLEVBQ2QsT0FBYSxNQUFORCxHQUFvQixNQUFOQyxFQUd6QixHQUFJRCxFQUFHUCxTQUFXUSxFQUFHUixPQUNqQixPQUFPLEVBR1gsSUFBSyxJQUFJMUQsRUFBSSxFQUFHQSxFQUFJaUUsRUFBR1AsT0FBUTFELElBQzNCLEdBQUlpRSxFQUFHakUsS0FBT2tFLEVBQUdsRSxHQUNiLE9BQU8sRUFJZixPQUFPLEVBaU5TbUUsQ0FBZ0JqQixFQUFtQmEsR0FDbkMsT0FHSixNQUFNUixFQUFNSCxJQUNaRixFQUFvQmEsRUFuTnBDLFVBQWdDLFlBQzVCQSxFQUFXLFNBQ1hLLEVBQVEsV0FDUkMsRUFBVSxVQUNWQyxFQUFTLE1BQ1RDLElBRUE1QixJQUVBLElBQUk2QixFQUFVLEVBRWQsTUFBTUMsRUFBZ0JWLEVBQVlXLElBQUtiLElBQ25DLE1BQU1jLEVBQU90QyxTQUFTdUMsZUFBZWYsR0FFL0JnQixFQUFLeEMsU0FBU3lDLGNBQWMsTUFJbEMsT0FIQUQsRUFBR0UsYUFBYSxZQUFhLEdBQzdCRixFQUFHRyxZQUFZTCxHQUVSRSxJQUdMSSxFQUFLNUMsU0FBU3lDLGNBQWMsTUFDbENHLEVBQUdDLFVBQVksc0JBQ2ZELEVBQUdGLGFBQWEsS0FBTSw0QkFDdEJFLEVBQUdGLGFBQWEsWUFBYSxHQUM3Qk4sRUFBY1UsUUFBUy9DLEdBQU82QyxFQUFHRCxZQUFZNUMsSUFFN0MsTUFBTWdELEVBQWMsSUFBSUMsSUFBSSxDQUFDLFlBQWEsVUFBVyxVQUVyREosRUFBR0ssaUJBQWlCLFVBQVlDLElBQzVCLEdBQUtILEVBQVlJLElBQUlELEVBQUVFLE1BTXZCLE9BRkFGLEVBQUVHLGlCQUVNSCxFQUFFRSxNQUNOLElBQUssVUFBVyxDQUNaLE1BQU1FLEVBQVlWLEVBQUczQyxjQUFjLGdCQUFnQmtDLE1BQy9DbUIsR0FDQW5CLElBQ0FtQixFQUFVN0MsU0FFVnVCLElBRUosTUFFSixJQUFLLFlBQ0QsQ0FDSSxNQUFNc0IsRUFBWVYsRUFBRzNDLGNBQ2pCLGdCQUFnQmtDLEVBQVUsTUFFMUJtQixJQUNBbkIsSUFDQW1CLEVBQVU3QyxTQUdsQixNQUNKLElBQUssUUFFT3NCLEdBQ0FBLEVBQVMsQ0FBQ3dCLElBQUs3QixFQUFZUyxLQUUvQjdCLE9BTWhCc0MsRUFBR0ssaUJBQWlCLFFBQVVDLElBQzFCLElBQUlaLEVBQU9rQixFQUFFTixFQUFFTyxRQUFRbkIsT0FDdkJQLEVBQVMsQ0FBQ3dCLElBQUtqQixJQUNmaEMsTUFHSnNDLEVBQUdLLGlCQUFpQixRQUFVQyxJQUMxQixNQUFNUSxFQUFVZCxFQUFHM0MsY0FBYyxNQUNqQ2tDLEVBQVUsRUFDTnVCLEdBQ0FBLEVBQVFqRCxVQUloQixNQUFNa0QsRUFBVSxJQUFNMUIsRUFBVVcsR0FFMUJnQixFQUF3QlYsSUFDdEJBLEVBQUVPLFNBQVd2QixHQUFTZ0IsRUFBRU8sU0FBV2IsR0FBTUEsRUFBR2lCLFNBQVNYLEVBQUVPLFNBSTNEbkQsS0FHRXdELEVBQWM1QixFQUFNNkIsUUFBUSxxQkFFbENDLE9BQU9mLGlCQUFpQixXQUFZVSxHQUNwQ3pCLEVBQU1lLGlCQUFpQixXQUFZVSxHQUVuQ0ssT0FBT2YsaUJBQWlCLFNBQVVVLEdBQ2xDSyxPQUFPZixpQkFBaUIsU0FBVVUsR0FDbEN6QixFQUFNZSxpQkFBaUIsU0FBVVUsR0FDN0JHLEdBQ0FBLEVBQVliLGlCQUFpQixTQUFVVSxHQUUzQ0ssT0FBT2YsaUJBQWlCLFFBQVNXLEdBQ2pDSSxPQUFPZixpQkFBaUIsVUFBV1csR0FFbkN2RCxFQUFnQixLQUNaMkQsT0FBT0Msb0JBQW9CLFdBQVlOLEdBRXZDSyxPQUFPQyxvQkFBb0IsU0FBVU4sR0FDckNLLE9BQU9DLG9CQUFvQixTQUFVTixHQUNyQ3pCLEVBQU0rQixvQkFBb0IsU0FBVU4sR0FDaENHLEdBQ0FBLEVBQVlHLG9CQUFvQixTQUFVTixHQUU5Q0ssT0FBT0Msb0JBQW9CLFFBQVNMLEdBQ3BDSSxPQUFPQyxvQkFBb0IsVUFBV0wsSUFHMUM1RCxTQUFTa0UsS0FBS3ZCLFlBQVlDLEdBRTFCZSxJQTJGWVEsQ0FBdUIsQ0FDbkJ6QyxZQUFhQSxFQUNiUSxNQUFPbkMsRUFDUGlDLFdBQVksS0FDUixNQUFNb0MsRUFBY3hELEVBQVdNLEVBQy9CbkIsRUFBR1UsUUFDSFYsRUFBR3NFLGtCQUFrQkQsRUFBYUEsSUFFdENyQyxTQUFVLEVBQUV3QixVQUNSLElBQUs1QyxFQUNELE9BR0osTUFBTXlELEVBQWN4RCxFQUFXTSxFQUMvQm5CLEVBQUdVLFFBQ0hWLEVBQUd1RSxhQUNDZixFQUFJbkMsT0FBT0YsR0FDWGtELEVBQ0FBLEVBQ0EsUUFHUm5DLFVBQVlzQyxJQUNSLE1BQU1DLEVBQVV6RSxFQUFHMEUsd0JBR2JDLEVDblF2QixTQUFrQkMsRUFBZXJDLEdBQ3BDLE1BQU1zQyxFQUFPNUUsU0FBU3lDLGNBQWMsUUFDcENtQyxFQUFLQyxZQUFjdkMsRUFFbkIsTUFBTXdDLEVBQU05RSxTQUFTeUMsY0FBYyxPQUNuQ3FDLEVBQUluQyxZQUFZaUMsR0FDaEJHLE1BQU1DLEtBQUtMLEdBQWU3QixTQUFRLFNBQVU1RCxHQUN4QzRGLEVBQUlHLE1BQU1DLFlBQ05oRyxFQUNBeUYsRUFBY1EsaUJBQWlCakcsR0FDL0J5RixFQUFjUyxvQkFBb0JsRyxPQUcxQzRGLEVBQUlHLE1BQU1JLFdBQWEsU0FDdkJyRixTQUFTa0UsS0FBS3ZCLFlBQVltQyxHQUUxQixNQUFNUSxFQUFPLENBQUNDLE1BQU9YLEVBQUtZLFlBQWFDLE9BQVFiLEVBQUtjLGNBSXBELE9BRkFaLEVBQUl2RSxTQUVHK0UsRUQrT2dDLENBRkZLLGlCQUFpQjVGLEdBSTlCQSxFQUFHbkIsTUFBTXdDLE9BQU8sRUFBR3JCLEVBQUdpQixpQkFDeEJ5RSxPQUVGbEIsRUFBT1UsTUFBTVcsU0FBVyxRQUN4QnJCLEVBQU9VLE1BQU1ZLEtBQU9DLEtBQUtDLElBQUksRUFBR3ZCLEVBQVF3QixHQUFLLEtBQzdDekIsRUFBT1UsTUFBTWdCLElBQ1p6QixFQUFRMEIsRUFBSXhCLEVBQWEsRUFBSTNFLEVBQUdvRyxVQUFZLEtBQzdDNUIsRUFBT1UsTUFBTU0sTUFBUXhGLEVBQUdxRyxZQUFjLFNBS2xELEdEMVFtQixNQUFwQjVILEVDMFFlcUIsRUFBYTJCLEdBQ3ZCLE9BQU9DLEVBQW1CLEVBQVU1QixFQUFhMkIsSUFHckQ2RSxNQXlEWixTQUFtQjNHLEdBQ2YsTUFBTTRHLEVBQU0sSUFBSUMsSUFBSXpHLEVBQWtCMEcsU0FBU0MsTUFHL0MsT0FGQUgsRUFBSUksYUFBYUMsT0FBTyxTQUFVakgsR0FFM0I0RyxFQTdET00sQ0FBVXBGLElBQ1hxRixLQUFNbEYsR0FBUUEsRUFBSW1GLFFBQ2xCRCxLQUFNbkYsSUFDSDdCLEVEMVJiLFNBQWFGLEVBQU9DLEVBQU1oQixHQUM3QixPQUFPUCxPQUFPMEksT0FBTyxHQUFJcEgsRUFBTyxDQUFDLENBQUNDLEdBQU9oQixJQ3lSWCxDQUFVaUIsRUFBYTJCLEVBQUdFLEdBQ3hDRCxZQXhGUlgsS0E2RlJmLEVBQUdrRCxpQkFBaUIsVUFBWUMsSUFDNUIsR0FBS3ZDLEVBQUwsQ0FJQSxPQUFRdUMsRUFBRUUsTUFDTixJQUFLLFlBQ0RGLEVBQUVHLGlCQUNGN0MsSUFDQSxNQUNKLElBQUssVUFDRE0sSUFDQSxNQUNKLElBQUssWUFDTCxJQUFLLGFBRURrRyxXQUFXLElBQU16RixJQUFnQixHQUcxQixjQUFYMkIsRUFBRUUsTUFDRjVDLE9BR1JULEVBQUdrRCxpQkFBaUIsUUFBVUMsSUFDMUIzQixNQStCZ0IsTUFBcEJ6QixHQUNBRSxTQUNLaUgsaUJBQ0cseUdBRUhuRSxRQUFTL0MsSUFDTlcsRUFBYVgiLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQoY2FjaGUsIHRlcm0sIHZhbHVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNhY2hlLCB7W3Rlcm1dOiB2YWx1ZX0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0KGNhY2hlLCB0ZXJtKSB7XG4gICAgcmV0dXJuIGNhY2hlW3Rlcm1dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzKGNhY2hlLCB0ZXJtKSB7XG4gICAgcmV0dXJuIGdldChjYWNoZSwgdGVybSkgIT0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJlc3RNYXRjaChjYWNoZSwgdGVybSkge1xuICAgIGZvciAobGV0IGkgPSB0ZXJtLmxlbmd0aDsgaSA+IDA7IGktLSkge1xuICAgICAgICBjb25zdCByZXMgPSBnZXQoY2FjaGUsIHRlcm0uc3Vic3RyKDAsIGkpKTtcbiAgICAgICAgaWYgKHJlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgdSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCAqIGFzIGNhY2hlIGZyb20gJy4vY2FjaGUnO1xuXG5sZXQgcmVzdWx0Q2FjaGUgPSBjYWNoZS5jcmVhdGUoKTtcbmNvbnN0IF9hdXRvY29tcGxldGVVcmwgPSBhdXRvY29tcGxldGVVcmwoKTtcbmNvbnN0IG1heF9sZW4gPSAxOTE7XG5sZXQgZGVzdHJveUxpc3RGbjtcblxuZnVuY3Rpb24gZmxhdEFycmF5c0VxdWFsKHYxLCB2Mikge1xuICAgIGlmICh2MSA9PSBudWxsIHx8IHYyID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHYxID09IG51bGwgJiYgdjIgPT0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodjEubGVuZ3RoICE9PSB2Mi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdjEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHYxW2ldICE9PSB2MltpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG9wZW5BdXRvY29tcGxldGVMaXN0RWwoe1xuICAgIGNvbXBsZXRpb25zLFxuICAgIG9uU2VsZWN0LFxuICAgIGZvY3VzSW5wdXQsXG4gICAgb25SZXN0eWxlLFxuICAgIGlucHV0LFxufSkge1xuICAgIGNsb3NlQXV0b2NvbXBsZXRlTGlzdEVsKCk7XG5cbiAgICBsZXQgZm9jdXNlZCA9IDA7XG5cbiAgICBjb25zdCBjb21wbGV0aW9uRWxzID0gY29tcGxldGlvbnMubWFwKCh2KSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2KTtcblxuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAtMSk7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgICAgIHJldHVybiBsaTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB1bC5jbGFzc05hbWUgPSAnaW1hdGljLWF1dG9jb21wbGV0ZSc7XG4gICAgdWwuc2V0QXR0cmlidXRlKCdpZCcsICdpbWF0aWNBdXRvY29tcGxldGVXaWRnZXQnKTtcbiAgICB1bC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpO1xuICAgIGNvbXBsZXRpb25FbHMuZm9yRWFjaCgoZWwpID0+IHVsLmFwcGVuZENoaWxkKGVsKSk7XG5cbiAgICBjb25zdCBjb250cm9sS2V5cyA9IG5ldyBTZXQoWydBcnJvd0Rvd24nLCAnQXJyb3dVcCcsICdFbnRlciddKTtcblxuICAgIHVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICBpZiAoIWNvbnRyb2xLZXlzLmhhcyhlLmNvZGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIHByZXZlbnQgc2Nyb2xsaW5nXG5cbiAgICAgICAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3QWN0aXZlID0gdWwucXVlcnlTZWxlY3RvcihgbGk6bnRoLWNoaWxkKCR7Zm9jdXNlZH0pYCk7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb2N1c2VkLS07XG4gICAgICAgICAgICAgICAgICAgIG5ld0FjdGl2ZS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvY3VzSW5wdXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3QWN0aXZlID0gdWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBsaTpudGgtY2hpbGQoJHtmb2N1c2VkICsgMn0pYFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3QWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2VkKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBY3RpdmUuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvblNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Qoe3ZhbDogY29tcGxldGlvbnNbZm9jdXNlZF19KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjbG9zZUF1dG9jb21wbGV0ZUxpc3RFbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB2YXIgdGV4dCA9ICQoZS50YXJnZXQpLnRleHQoKTtcbiAgICAgICAgb25TZWxlY3Qoe3ZhbDogdGV4dH0pO1xuICAgICAgICBjbG9zZUF1dG9jb21wbGV0ZUxpc3RFbCgpO1xuICAgIH0pXG5cbiAgICB1bC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpcnN0TGkgPSB1bC5xdWVyeVNlbGVjdG9yKCdsaScpO1xuICAgICAgICBmb2N1c2VkID0gMDtcbiAgICAgICAgaWYgKGZpcnN0TGkpIHtcbiAgICAgICAgICAgIGZpcnN0TGkuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzdHlsZSA9ICgpID0+IG9uUmVzdHlsZSh1bCk7XG5cbiAgICBjb25zdCBjbG9zZUlmT3V0c2lkZVRhcmdldCA9IChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gaW5wdXQgfHwgZS50YXJnZXQgPT09IHVsIHx8IHVsLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY2xvc2VBdXRvY29tcGxldGVMaXN0RWwoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2NDb250YWluZXIgPSBpbnB1dC5jbG9zZXN0KCcudGFibGUtcmVzcG9uc2l2ZScpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgcmVzdHlsZSk7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCByZXN0eWxlKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCByZXN0eWxlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzdHlsZSk7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcmVzdHlsZSk7XG4gICAgaWYgKHNjQ29udGFpbmVyKSB7XG4gICAgICAgIHNjQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHJlc3R5bGUpO1xuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUlmT3V0c2lkZVRhcmdldCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBjbG9zZUlmT3V0c2lkZVRhcmdldCk7XG5cbiAgICBkZXN0cm95TGlzdEZuID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCByZXN0eWxlKTtcblxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcmVzdHlsZSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXN0eWxlKTtcbiAgICAgICAgaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcmVzdHlsZSk7XG4gICAgICAgIGlmIChzY0NvbnRhaW5lcikge1xuICAgICAgICAgICAgc2NDb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcmVzdHlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VJZk91dHNpZGVUYXJnZXQpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGNsb3NlSWZPdXRzaWRlVGFyZ2V0KTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgICByZXN0eWxlKCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlQXV0b2NvbXBsZXRlTGlzdEVsKCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYXRpY0F1dG9jb21wbGV0ZVdpZGdldCcpO1xuICAgIGlmIChlbCkge1xuICAgICAgICBkZXN0cm95TGlzdEZuKCk7XG4gICAgICAgIGVsLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9jdXNBdXRvY29tcGxldGVMaXN0KCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYXRpY0F1dG9jb21wbGV0ZVdpZGdldCcpO1xuICAgIGlmICghZWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsLmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIGF1dG9jb21wbGV0ZShlbCkge1xuICAgIGxldCBhdXRvY29tcGxldGluZyA9IGZhbHNlO1xuICAgIGxldCBzdGFydFNlbCA9IDA7XG4gICAgbGV0IGFjdGl2ZUNvbXBsZXRpb25zID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIHN0b3BBdXRvY29tcGxldGUoKSB7XG4gICAgICAgIGlmICghYXV0b2NvbXBsZXRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGF1dG9jb21wbGV0aW5nID0gZmFsc2U7XG4gICAgICAgIGNsb3NlQXV0b2NvbXBsZXRlTGlzdEVsKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2VsZWN0aW9uTGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gZWwuc2VsZWN0aW9uU3RhcnQgLSBzdGFydFNlbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTZWxlY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGxlbiA9IGdldFNlbGVjdGlvbkxlbmd0aCgpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBlbC52YWx1ZS5zdWJzdHIoc3RhcnRTZWwsIGxlbik7XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbi5sZW5ndGggPT09IDAgfHwgc2VsZWN0aW9uLm1hdGNoKC9bXFxuIF0vKSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZWxlY3Rpb247XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBpZiAoZWwuc2VsZWN0aW9uU3RhcnQgPT09IDApIHtcbiAgICAgICAgICAgIHN0b3BBdXRvY29tcGxldGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbC52YWx1ZVtlbC5zZWxlY3Rpb25TdGFydCAtIDFdID09PSAnQCcpIHtcbiAgICAgICAgICAgIGF1dG9jb21wbGV0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHN0YXJ0U2VsID0gZWwuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICBhY3RpdmVDb21wbGV0aW9ucyA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXV0b2NvbXBsZXRpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBnZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIGlmICh2ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzdG9wQXV0b2NvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZWNlaXZlQ29tcGxldGlvbnMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcGxldGlvbnMgPSBjYWNoZS5nZXRCZXN0TWF0Y2goXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdENhY2hlLFxuICAgICAgICAgICAgICAgICAgICBnZXRTZWxlY3Rpb24oKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9ucyA9PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRpb25zLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAgICAgICAgICAgICAhYXV0b2NvbXBsZXRpbmdcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VBdXRvY29tcGxldGVMaXN0RWwoKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ29tcGxldGlvbnMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGZsYXRBcnJheXNFcXVhbChhY3RpdmVDb21wbGV0aW9ucywgY29tcGxldGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBsZW4gPSBnZXRTZWxlY3Rpb25MZW5ndGgoKTtcbiAgICAgICAgICAgICAgICBhY3RpdmVDb21wbGV0aW9ucyA9IGNvbXBsZXRpb25zO1xuXG4gICAgICAgICAgICAgICAgb3BlbkF1dG9jb21wbGV0ZUxpc3RFbCh7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRpb25zOiBjb21wbGV0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGVsLFxuICAgICAgICAgICAgICAgICAgICBmb2N1c0lucHV0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXF1aXJlZFNlbCA9IHN0YXJ0U2VsICsgbGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnNldFNlbGVjdGlvblJhbmdlKHJlcXVpcmVkU2VsLCByZXF1aXJlZFNlbCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0OiAoe3ZhbH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYXV0b2NvbXBsZXRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVpcmVkU2VsID0gc3RhcnRTZWwgKyBsZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuc2V0UmFuZ2VUZXh0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5zdWJzdHIobGVuKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFNlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFNlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZW5kJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb25SZXN0eWxlOiAobGlzdEVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXN0UG9zID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbFN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0SGVpZ2h0ID0gdS50ZXh0U2l6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbFN0eWxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC52YWx1ZS5zdWJzdHIoMCwgZWwuc2VsZWN0aW9uU3RhcnQpXG4gICAgICAgICAgICAgICAgICAgICAgICApLmhlaWdodDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdEVsLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RFbC5zdHlsZS5sZWZ0ID0gTWF0aC5tYXgoMCwgbGlzdFBvcy54KSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0RWwuc3R5bGUudG9wID1cbiAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0UG9zLnkgKyB0ZXh0SGVpZ2h0ICsgNSAtIGVsLnNjcm9sbFRvcCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0RWwuc3R5bGUud2lkdGggPSBlbC5jbGllbnRXaWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoY2FjaGUuaGFzKHJlc3VsdENhY2hlLCB2KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWNlaXZlQ29tcGxldGlvbnMoY2FjaGUuZ2V0KHJlc3VsdENhY2hlLCB2KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZldGNoKHNlYXJjaFVybCh2KSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKChjb21wbGV0aW9ucykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRDYWNoZSA9IGNhY2hlLnNldChyZXN1bHRDYWNoZSwgdiwgY29tcGxldGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICByZWNlaXZlQ29tcGxldGlvbnMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgaWYgKCFhdXRvY29tcGxldGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50IHNjcm9sbGluZ1xuICAgICAgICAgICAgICAgIGZvY3VzQXV0b2NvbXBsZXRlTGlzdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICAgICAgc3RvcEF1dG9jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IGVsZW1lbnQgaGFzIGNvcnJlY3Qgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBoYW5kbGVDaGFuZ2UoKSwgMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUuY29kZSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgICAgIGZvY3VzQXV0b2NvbXBsZXRlTGlzdCgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICBoYW5kbGVDaGFuZ2UoKTtcbiAgICB9KTtcbn1cblxuXG5mdW5jdGlvbiBnZXRPZmZzZXQoZWwpIHtcbiAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICByZXR1cm4gcmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWVxuICAgIHJldHVybiB7XG4gICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgIHRvcDogcmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWVxuICAgIH07XG4gIH1cblxuZnVuY3Rpb24gYXV0b2NvbXBsZXRlVXJsKCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtaW1hdGljLWF1dG9jb21wbGV0ZS11cmxdJyk7XG4gICAgaWYgKGVsID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBlbC5kYXRhc2V0LmltYXRpY0F1dG9jb21wbGV0ZVVybDtcbn1cblxuZnVuY3Rpb24gc2VhcmNoVXJsKHMpIHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKF9hdXRvY29tcGxldGVVcmwsIGxvY2F0aW9uLmhyZWYpO1xuICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCdzZWFyY2gnLCBzKTtcblxuICAgIHJldHVybiB1cmw7XG59XG5cbmlmIChfYXV0b2NvbXBsZXRlVXJsICE9IG51bGwpIHtcbiAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICcjYnVnbm90ZV90ZXh0LCAjZGVzY3JpcHRpb24sICNzdGVwc190b19yZXByb2R1Y2UsICNhZGRpdGlvbmFsX2luZm8sICNzdW1tYXJ5LCAjYWRkaXRpb25hbF9pbmZvcm1hdGlvbidcbiAgICAgICAgKVxuICAgICAgICAuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZShlbCk7XG4gICAgICAgIH0pO1xufVxuIiwiLyoqXG4gKiBAcGFyYW0ge0NTU1N0eWxlRGVjbGFyYXRpb259IGNvbXB1dGVkU3R5bGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gKlxuICogQHJldHVybnMge3t3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcn19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0U2l6ZShjb21wdXRlZFN0eWxlLCB0ZXh0KSB7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLnRleHRDb250ZW50ID0gdGV4dDtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBBcnJheS5mcm9tKGNvbXB1dGVkU3R5bGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBkaXYuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoa2V5KSxcbiAgICAgICAgICAgIGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlQcmlvcml0eShrZXkpXG4gICAgICAgICk7XG4gICAgfSk7XG4gICAgZGl2LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICBjb25zdCBkYXRhID0ge3dpZHRoOiBzcGFuLm9mZnNldFdpZHRoLCBoZWlnaHQ6IHNwYW4ub2Zmc2V0SGVpZ2h0fTtcblxuICAgIGRpdi5yZW1vdmUoKTtcblxuICAgIHJldHVybiBkYXRhO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==