!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return s.Date.now()};function p(e,t,n){var o,i,a,u,f,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function w(e){return c=e,f=setTimeout(j,t),d?p(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function j(){var e=b();if(O(e))return h(e);f=setTimeout(j,function(e){var n=t-(e-l);return s?g(n,a-(e-c)):n}(e))}function h(e){return f=void 0,m&&o?p(e):(o=i=void 0,u)}function T(){var e=b(),n=O(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return w(l);if(s)return f=setTimeout(j,t),p(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=S(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},T.flush=function(){return void 0===f?u:h(b())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var w=document.querySelector(".feedback-form"),O=document.querySelector("[name='email']"),j=document.querySelector("[name='message']");w.addEventListener("input",e(t)((function(){var e={email:O.value,message:j.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),window.onload=function(){localStorage.getItem("feedback-form-state")&&(O.value=JSON.parse(localStorage.getItem("feedback-form-state")).email,j.value=JSON.parse(localStorage.getItem("feedback-form-state")).message)},w.addEventListener("submit",(function(e){if(e.preventDefault(),""===O.value||""===j.value)return void window.alert("Please input both email and message");console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),O.value="",j.value="",localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.fdad7bad.js.map
