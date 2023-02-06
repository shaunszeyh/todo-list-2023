(()=>{"use strict";const t=JSON.parse(localStorage.getItem("todoList"))||[];function e(t,e,n,a,r){this.name=t,this.dueDate=e,this.completed=n,this.id=a,this.project=r}function n(t,e){const n=document.getElementsByClassName("taskbar")[0];n.innerHTML="";for(const r of t)if(r.project==e||0==e.length||"Inbox"==e){const t=document.createElement("div");t.classList.add("bar");const o=document.createElement("div");o.classList.add("bar-left");const i=document.createElement("div");i.classList.add("bar-right");const u=(r.name+r.dueDate).replace(/\s+/g,"").toLowerCase();t.classList.add(u);const s=document.createElement("input"),d=document.createElement("p"),c=document.createElement("p");s.setAttribute("type","image"),s.setAttribute("src","images/checkbox.png"),s.setAttribute("width","20px"),s.setAttribute("height","20px"),s.classList.add(u),s.addEventListener("click",a,!1),"Inbox"==e||0==e.length?d.textContent=`${r.name} (${r.project})`:d.textContent=r.name,c.textContent=r.dueDate,o.appendChild(s),o.appendChild(d),i.appendChild(c),t.appendChild(o),t.appendChild(i),n.appendChild(t)}}function a(e){const n=document.getElementsByClassName("taskbar")[0],a=e.target.classList[0],r=document.getElementsByClassName(a)[0];n.removeChild(r);for(let e=0;e<t.length;e++)if(t[e].id===a){t.splice(e,1),localStorage.setItem("todoList",JSON.stringify(t));break}}function r(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t){r(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===i(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function s(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}var d=864e5;function c(t){r(1,arguments);var e=u(t),n=e.getUTCDay(),a=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-a),e.setUTCHours(0,0,0,0),e}function l(t){r(1,arguments);var e=u(t),n=e.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var o=c(a),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var s=c(i);return e.getTime()>=o.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}var m=6048e5;var h={};function f(){return h}function g(t,e){var n,a,o,i,d,c,l,m;r(1,arguments);var h=f(),g=s(null!==(n=null!==(a=null!==(o=null!==(i=null==e?void 0:e.weekStartsOn)&&void 0!==i?i:null==e||null===(d=e.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==o?o:h.weekStartsOn)&&void 0!==a?a:null===(l=h.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==n?n:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=u(t),p=v.getUTCDay(),b=(p<g?7:0)+p-g;return v.setUTCDate(v.getUTCDate()-b),v.setUTCHours(0,0,0,0),v}function v(t,e){var n,a,o,i,d,c,l,m;r(1,arguments);var h=u(t),v=h.getUTCFullYear(),p=f(),b=s(null!==(n=null!==(a=null!==(o=null!==(i=null==e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null==e||null===(d=e.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==o?o:p.firstWeekContainsDate)&&void 0!==a?a:null===(l=p.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==n?n:1);if(!(b>=1&&b<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(v+1,0,b),w.setUTCHours(0,0,0,0);var y=g(w,e),C=new Date(0);C.setUTCFullYear(v,0,b),C.setUTCHours(0,0,0,0);var E=g(C,e);return h.getTime()>=y.getTime()?v+1:h.getTime()>=E.getTime()?v:v-1}var p=6048e5;function b(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}const w=function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return b("yy"===e?a%100:a,e.length)},y=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):b(n+1,2)},C=function(t,e){return b(t.getUTCDate(),e.length)},E=function(t,e){return b(t.getUTCHours()%12||12,e.length)},T=function(t,e){return b(t.getUTCHours(),e.length)},k=function(t,e){return b(t.getUTCMinutes(),e.length)},M=function(t,e){return b(t.getUTCSeconds(),e.length)},S=function(t,e){var n=e.length,a=t.getUTCMilliseconds();return b(Math.floor(a*Math.pow(10,n-3)),e.length)};var D={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return w(t,e)},Y:function(t,e,n,a){var r=v(t,a),o=r>0?r:1-r;return"YY"===e?b(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):b(o,e.length)},R:function(t,e){return b(l(t),e.length)},u:function(t,e){return b(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return b(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return b(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return y(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return b(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var o=function(t,e){r(1,arguments);var n=u(t),a=g(n,e).getTime()-function(t,e){var n,a,o,i,u,d,c,l;r(1,arguments);var m=f(),h=s(null!==(n=null!==(a=null!==(o=null!==(i=null==e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null==e||null===(u=e.locale)||void 0===u||null===(d=u.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==o?o:m.firstWeekContainsDate)&&void 0!==a?a:null===(c=m.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==n?n:1),p=v(t,e),b=new Date(0);return b.setUTCFullYear(p,0,h),b.setUTCHours(0,0,0,0),g(b,e)}(n,e).getTime();return Math.round(a/p)+1}(t,a);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):b(o,e.length)},I:function(t,e,n){var a=function(t){r(1,arguments);var e=u(t),n=c(e).getTime()-function(t){r(1,arguments);var e=l(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),c(n)}(e).getTime();return Math.round(n/m)+1}(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):b(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):C(t,e)},D:function(t,e,n){var a=function(t){r(1,arguments);var e=u(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=n-e.getTime();return Math.floor(a/d)+1}(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):b(a,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return b(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return b(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return b(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return E(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):T(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):b(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):b(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):k(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):M(t,e)},S:function(t,e){return S(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return x(r);case"XXXX":case"XX":return N(r);default:return N(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return x(r);case"xxxx":case"xx":return N(r);default:return N(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+L(r,":");default:return"GMT"+N(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+L(r,":");default:return"GMT"+N(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return b(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return b((a._originalDate||t).getTime(),e.length)}};function L(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),o=a%60;if(0===o)return n+String(r);var i=e||"";return n+String(r)+i+b(o,2)}function x(t,e){return t%60==0?(t>0?"-":"+")+b(Math.abs(t)/60,2):N(t,e)}function N(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+b(Math.floor(r/60),2)+n+b(r%60,2)}const P=D;var U=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},A=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},W={p:A,P:function(t,e){var n,a=t.match(/(P+)(p+)?/)||[],r=a[1],o=a[2];if(!o)return U(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",U(r,e)).replace("{{time}}",A(o,e))}};const j=W;var B=["D","DD"],O=["YY","YYYY"];function Y(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var q={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function F(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var H,z={date:F({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:F({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:F({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},I={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Q(t){return function(e,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):r;a=t.formattingValues[o]||t.formattingValues[r]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;a=t.values[u]||t.values[i]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function G(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;var i,u=o[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(u))return n}(s):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(u))return n}(s);return i=t.valueCallback?t.valueCallback(d):d,{value:i=n.valueCallback?n.valueCallback(i):i,rest:e.slice(u.length)}}}const X={code:"en-US",formatDistance:function(t,e,n){var a,r=q[t];return a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:z,formatRelative:function(t,e,n,a){return I[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:Q({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Q({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Q({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Q({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Q({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(H={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(H.matchPattern);if(!n)return null;var a=n[0],r=t.match(H.parsePattern);if(!r)return null;var o=H.valueCallback?H.valueCallback(r[0]):r[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(a.length)}}),era:G({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:G({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:G({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:G({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:G({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var J=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,R=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,$=/^'([^]*?)'?$/,_=/''/g,V=/[a-zA-Z]/;function K(t,e,n){var a,i,d,c,l,m,h,g,v,p,b,w,y,C,E,T,k,M;r(2,arguments);var S=String(e),D=f(),L=null!==(a=null!==(i=null==n?void 0:n.locale)&&void 0!==i?i:D.locale)&&void 0!==a?a:X,x=s(null!==(d=null!==(c=null!==(l=null!==(m=null==n?void 0:n.firstWeekContainsDate)&&void 0!==m?m:null==n||null===(h=n.locale)||void 0===h||null===(g=h.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==l?l:D.firstWeekContainsDate)&&void 0!==c?c:null===(v=D.locale)||void 0===v||null===(p=v.options)||void 0===p?void 0:p.firstWeekContainsDate)&&void 0!==d?d:1);if(!(x>=1&&x<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var N=s(null!==(b=null!==(w=null!==(y=null!==(C=null==n?void 0:n.weekStartsOn)&&void 0!==C?C:null==n||null===(E=n.locale)||void 0===E||null===(T=E.options)||void 0===T?void 0:T.weekStartsOn)&&void 0!==y?y:D.weekStartsOn)&&void 0!==w?w:null===(k=D.locale)||void 0===k||null===(M=k.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==b?b:0);if(!(N>=0&&N<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!L.localize)throw new RangeError("locale must contain localize property");if(!L.formatLong)throw new RangeError("locale must contain formatLong property");var U=u(t);if(!function(t){if(r(1,arguments),!function(t){return r(1,arguments),t instanceof Date||"object"===o(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)&&"number"!=typeof t)return!1;var e=u(t);return!isNaN(Number(e))}(U))throw new RangeError("Invalid time value");var A=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(U),W=function(t,e){return r(2,arguments),function(t,e){r(2,arguments);var n=u(t).getTime(),a=s(e);return new Date(n+a)}(t,-s(e))}(U,A),q={firstWeekContainsDate:x,weekStartsOn:N,locale:L,_originalDate:U};return S.match(R).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,j[e])(t,L.formatLong):t})).join("").match(J).map((function(a){if("''"===a)return"'";var r,o,i=a[0];if("'"===i)return(o=(r=a).match($))?o[1].replace(_,"'"):r;var u,s=P[i];if(s)return null!=n&&n.useAdditionalWeekYearTokens||(u=a,-1===O.indexOf(u))||Y(a,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!function(t){return-1!==B.indexOf(t)}(a)||Y(a,e,String(t)),s(W,a,L.localize,q);if(i.match(V))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return a})).join("")}function Z(t){const e=document.createElement("div"),n=document.createElement("h2"),a=document.createElement("div"),r=t.replace(/\s+/g,"").toLowerCase();return a.classList.add("taskbar"),n.textContent=t,e.classList.add(r,"main"),e.appendChild(n),e.appendChild(a),e.appendChild(tt(t)),e}function tt(a){const r=document.createElement("input");return r.setAttribute("type","button"),r.setAttribute("value","+ Add Task"),r.setAttribute("class","addTaskBtn"),r.addEventListener("click",(function(){!function(a){const r=document.getElementsByClassName("main")[0],o=document.getElementsByClassName("addTaskBtn")[0],i=document.createElement("div");i.classList.add("addTask");const u=document.createElement("input"),s=document.createElement("input"),d=document.createElement("input"),c=document.createElement("input");u.setAttribute("class","input"),s.setAttribute("class","date"),u.setAttribute("type","input"),s.setAttribute("type","date"),d.setAttribute("type","button"),c.setAttribute("type","button"),u.setAttribute("placeholder","e.g. Wash dishes"),d.setAttribute("value","Add"),c.setAttribute("value","Cancel"),d.addEventListener("click",(function(){!function(a){const r=document.getElementsByClassName("input")[0],o=document.getElementsByClassName("date")[0],i=r.value,u=K(new Date(o.value),"dd/MM/yyyy"),s=new e(i,u,!1,(i+u).replace(/\s+/g,"").toLowerCase(),a);var d;i&&o&&(d=s,t.push(d),localStorage.setItem("todoList",JSON.stringify(t)),n(t,a),et(a))}(a)}),!1),c.addEventListener("click",(function(){et(a)}),!1),i.appendChild(u),i.appendChild(s),i.appendChild(d),i.appendChild(c),r.replaceChild(i,o)}(a)}),!1),r}function et(t){const e=document.getElementsByClassName("main")[0],n=document.querySelector(".addTask");console.log(n),e.replaceChild(tt(t),n)}const nt=function(e){const a=document.getElementsByClassName("body")[0],r=document.getElementsByClassName("main")[0];r?a.replaceChild(Z(e),r):a.appendChild(Z(e)),n(t,e)};function at(){const t=document.createElement("div"),e=document.createElement("h2"),n=document.createElement("div");return t.classList.add("today","main"),n.classList.add("taskbar"),e.textContent="Today",t.appendChild(e),t.appendChild(n),t}function rt(t){const e=new Date;return`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()}`==t.dueDate}const ot=function(){const e=document.getElementsByClassName("body")[0],a=document.getElementsByClassName("main")[0];a?e.replaceChild(at(),a):e.appendChild(at()),n(t.filter(rt),"")};function it(t,e){var n,a,o,i,d,c,l,m;r(1,arguments);var h=f(),g=s(null!==(n=null!==(a=null!==(o=null!==(i=null==e?void 0:e.weekStartsOn)&&void 0!==i?i:null==e||null===(d=e.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==o?o:h.weekStartsOn)&&void 0!==a?a:null===(l=h.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==n?n:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=u(t),p=v.getDay(),b=(p<g?7:0)+p-g;return v.setDate(v.getDate()-b),v.setHours(0,0,0,0),v}function ut(){const t=document.createElement("div"),e=document.createElement("h2"),n=document.createElement("div");return t.classList.add("upcoming","main"),n.classList.add("taskbar"),e.textContent="This Week",t.appendChild(e),t.appendChild(n),t}function st(t){const e=new Date,n=t.dueDate.split("/")[0],a=t.dueDate.split("/")[1],o=t.dueDate.split("/")[2];return function(t,e,n){r(2,arguments);var a=it(t,n),o=it(e,n);return a.getTime()===o.getTime()}(e,new Date(o,a-1,n))}const dt=function(){const e=document.getElementsByClassName("body")[0],a=document.getElementsByClassName("main")[0];a?e.replaceChild(ut(),a):e.appendChild(ut()),n(t.filter(st),"")},ct=JSON.parse(localStorage.getItem("projectsList"))||[];function lt(){const t=document.getElementsByClassName("projects")[0],e=document.getElementsByClassName("addProjects")[0],n=document.createElement("div");n.classList.add("projectInput");const a=document.createElement("input");a.id="projectName";const r=document.createElement("input"),o=document.createElement("input");a.classList.add("remove-from-change-colour"),r.classList.add("remove-from-change-colour"),o.classList.add("remove-from-change-colour"),a.setAttribute("type","input"),r.setAttribute("type","button"),o.setAttribute("type","button"),a.setAttribute("placeholder","e.g. School"),r.setAttribute("value","Add"),o.setAttribute("value","Cancel"),a.setAttribute("maxlength",8),r.addEventListener("click",mt,!1),o.addEventListener("click",ht,!1),n.appendChild(a),n.appendChild(r),n.appendChild(o),t.replaceChild(n,e)}function mt(){const t=document.getElementsByClassName("projects")[0],e=document.getElementsByClassName("projectInput")[0],n=document.createElement("div"),a=document.getElementById("projectName").value,r=a.replace(/\s+/g,"").toLowerCase(),o=vt();ct.push(a),localStorage.setItem("projectsList",JSON.stringify(ct)),a&&(n.classList.add(r,"to-highlight","project"),n.textContent=`- ${a}`,n.addEventListener("click",gt,!1),n.addEventListener("click",(function(){nt(a)}),!1),o.classList.add(r),n.appendChild(o),t.insertBefore(n,e),ht())}function ht(){const t=document.getElementsByClassName("projects")[0],e=document.getElementsByClassName("projectInput")[0];t.replaceChild(ft(),e)}function ft(){const t=document.createElement("input");return t.classList.add("addProjects","to-highlight"),t.setAttribute("type","button"),t.setAttribute("value","+ Add Project"),t.addEventListener("click",lt,!1),t}function gt(t){const e=document.querySelectorAll(".to-highlight");for(const t of e)t.style.background="#bbbbbb";t.target.style.background="#aaaaaa"}function vt(){const t=document.createElement("input");return t.classList.add("remove-project"),t.setAttribute("type","button"),t.setAttribute("value","X"),t.addEventListener("click",pt,!1),t}function pt(t){const e=document.getElementsByClassName("projects")[0],n=t.target.classList[1],a=document.getElementsByClassName(n)[0];console.log(a),e.removeChild(a);for(let t=0;t<ct.length;t++)if(ct[t].replace(/\s+/g,"").toLowerCase()===n){ct.splice(t,1),localStorage.setItem("projectsList",JSON.stringify(ct));break}}function bt(t){const e=document.querySelectorAll(".to-highlight");for(const t of e)t.style.background="#bbbbbb";t.target.style.background="#aaaaaa"}!function(){const t=document.getElementById("content"),e=document.getElementsByClassName("body")[0];t.insertBefore(function(){const t=document.createElement("div"),e=document.createElement("h1");return t.classList.add("header"),e.textContent="To-do List",t.appendChild(e),t}(),e),e.appendChild(function(){const t=document.createElement("div"),e=document.createElement("input"),n=document.createElement("input"),a=document.createElement("input"),r=document.createElement("h2"),o=document.createElement("div");return t.classList.add("sidebar"),o.classList.add("projects"),e.classList.add("to-highlight"),n.classList.add("to-highlight"),a.classList.add("to-highlight"),e.setAttribute("type","button"),n.setAttribute("type","button"),a.setAttribute("type","button"),e.setAttribute("value","- Inbox"),n.setAttribute("value","- Today"),a.setAttribute("value","- This Week"),e.style.background="#aaaaaa",r.textContent="Projects",e.addEventListener("click",(function(){nt("Inbox")}),!1),n.addEventListener("click",ot,!1),a.addEventListener("click",dt,!1),e.addEventListener("click",bt,!1),a.addEventListener("click",bt,!1),n.addEventListener("click",bt,!1),o.appendChild(r),o.appendChild(ft()),t.appendChild(e),t.appendChild(n),t.appendChild(a),t.appendChild(o),t}()),t.appendChild(function(){const t=document.createElement("div");return t.classList.add("footer"),t.textContent="Made by Shaun Sze © 2021",t}()),nt("Inbox"),function(){const t=document.getElementsByClassName("projects")[0],e=document.getElementsByClassName("addProjects")[0];for(const n of ct){const a=n.replace(/\s+/g,"").toLowerCase(),r=document.createElement("div"),o=vt();r.classList.add(a,"to-highlight","project"),r.textContent=`- ${n}`,r.addEventListener("click",gt,!1),r.addEventListener("click",(function(){nt(n)}),!1),o.classList.add(a),r.appendChild(o),t.insertBefore(r,e)}}()}()})();