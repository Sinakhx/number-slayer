var a=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var d=Object.prototype.hasOwnProperty;var h=(r,t)=>{for(var n in t)a(r,n,{get:t[n],enumerable:!0})},M=(r,t,n,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of x(t))!d.call(r,o)&&o!==n&&a(r,o,{get:()=>t[o],enumerable:!(e=g(t,o))||e.enumerable});return r};var T=r=>M(a({},"__esModule",{value:!0}),r);var R={};h(R,{addCommasToNumber:()=>y,bin:()=>$,countWithZeros:()=>F,enToFaNumber:()=>f,faToEnNumber:()=>P,int:()=>N,isNumber:()=>b,modulus:()=>D,randomInt:()=>p,range:()=>A,rollDice:()=>l,rollMultipleDices:()=>C,toFaPercent:()=>S,toPrecision:()=>j,zeroPad:()=>O});module.exports=T(R);var y=(r,t=",")=>{let e=`${r}`.split("."),o=e[0],u=e.length>1?`.${e[1]}`:"",s=/(\d+)(\d{3})/;for(;s.test(o);)o=o.replace(s,`$1${t}$2`);return o+u};var N=r=>{let t=r[0]==="-"?-1:1,n=t<0?r.slice(1):r;return n=n.slice(0,2)==="0b"?n.slice(2):n,parseInt(n,2)*t},$=r=>(r<0?"-":"")+"0b"+(Math.abs(r)>>>0).toString(2);var F=r=>r===0||r==="0"?1:+!!r;var b=r=>{if(r instanceof Date)return!1;let t=r&&typeof r.valueOf=="function"?r.valueOf():r;return typeof t=="number"&&Number.isFinite(t)};var D=(r,t)=>(r%t+t)%t;var E=()=>{let r=o=>Object.fromEntries(Array(10).fill(0).map((u,s)=>{let m=s+"",i=String.fromCharCode(m.charCodeAt(0)+1728);return o===0?[m,i]:[i,m]})),t=r(1),n=r(0),e=o=>u=>`${u}`.split("").map(s=>o[s]||s).join("");return{enToFaNumber:e(n),faToEnNumber:e(t)}},{enToFaNumber:f,faToEnNumber:P}=E(),S=r=>{let t="\u066A ",n=r>=0?f(r):f(Math.abs(+r))+"-";return n==="-\u06F0"?t+"\u06F0":t+n};var p=(r,t)=>t<r?p(t,r):Math.floor(Math.random()*(t-r+1))+r;var A=(r,t,n=1)=>Array.from({length:Math.ceil((t-r)/n)},(e,o)=>r+o*n);var l=()=>Math.floor(Math.random()*6)+1,C=(r=1)=>Array(r).fill(0).map(()=>l());var j=(r,t)=>{if(!t&&t!==0)return r;let n=+r;if(!b(n))return r;let e=Math.floor(n);if(t===0)return e;let o=n-e,u=10**t;return Math.round((e+o)*u)/u};var O=(r,t=2,n)=>{let e=`${r}`,o=e[0]==="-"||e[0]==="+"?e[0]:"";o&&(e=e.substring(1));let[u,s]=e.split("."),m=o+u.padStart(t,"0"),i=s?`.${s.padEnd(n||s.length,"0")}`:"";return m+i};0&&(module.exports={addCommasToNumber,bin,countWithZeros,enToFaNumber,faToEnNumber,int,isNumber,modulus,randomInt,range,rollDice,rollMultipleDices,toFaPercent,toPrecision,zeroPad});
