var a=Object.defineProperty;var F=Object.getOwnPropertyDescriptor;var T=Object.getOwnPropertyNames;var y=Object.prototype.hasOwnProperty;var E=(r,t)=>{for(var o in t)a(r,o,{get:t[o],enumerable:!0})},$=(r,t,o,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of T(t))!y.call(r,n)&&n!==o&&a(r,n,{get:()=>t[n],enumerable:!(e=F(t,n))||e.enumerable});return r};var D=r=>$(a({},"__esModule",{value:!0}),r);var H={};E(H,{addCommasToNumber:()=>I,avoidMinusZero:()=>A,bin:()=>_,countFloatDigits:()=>P,countIntDigits:()=>f,countWithZeros:()=>R,enToFaNumber:()=>x,faToEnNumber:()=>w,gcd:()=>p,int:()=>S,isBigNumber:()=>C,isFloat:()=>b,isNumber:()=>l,lcm:()=>j,modulus:()=>O,randomInt:()=>g,range:()=>G,rollDice:()=>h,rollMultipleDices:()=>Z,roundThousands:()=>z,split:()=>W,toFaPercent:()=>B,toPrecision:()=>X,zeroPad:()=>q});module.exports=D(H);var I=(r,t=",")=>{let e=`${r}`.split("."),n=e[0],m=e.length>1?`.${e[1]}`:"",u=/(\d+)(\d{3})/;for(;u.test(n);)n=n.replace(u,`$1${t}$2`);return n+m};var A=r=>r||0;var S=r=>{let t=r[0]==="-"?-1:1,o=t<0?r.slice(1):r;return o=o.slice(0,2)==="0b"?o.slice(2):o,parseInt(o,2)*t},_=r=>(r<0?"-":"")+"0b"+(Math.abs(r)>>>0).toString(2);var b=r=>!Number.isInteger(r)&&!Number.isNaN(r)&&Number.isFinite(r);var P=r=>b(r)?`${r}`.split(".")[1].length:0;var f=r=>Math.max(Math.floor(Math.log10(Math.abs(r))),0)+1;var R=r=>r===0||r==="0"?1:+!!r;var p=(...r)=>{let t=(e,n)=>n===0?e:t(n,e%n),o=r.filter(Boolean).reduce((e,n)=>t(e,n),r[0])||0;return o?Math.abs(o):1/0};var C=r=>r>Number.MAX_SAFE_INTEGER||r<Number.MIN_SAFE_INTEGER;var l=r=>{if(r instanceof Date)return!1;let t=r&&typeof r.valueOf=="function"?r.valueOf():r;return typeof t=="number"&&Number.isFinite(t)};var j=(...r)=>{let t=(o,e)=>o*e/p(o,e);return Math.abs(r.reduce((o,e)=>t(o,e))||0)};var O=(r,t)=>(r%t+t)%t;var k=()=>{let r=n=>Object.fromEntries(Array(10).fill(0).map((m,u)=>{let i=u+"",c=String.fromCharCode(i.charCodeAt(0)+1728);return n===0?[i,c]:[c,i]})),t=r(1),o=r(0),e=n=>m=>`${m}`.split("").map(u=>n[u]||u).join("");return{enToFaNumber:e(o),faToEnNumber:e(t)}},{enToFaNumber:x,faToEnNumber:w}=k(),B=r=>{let t="\u066A ",o=r>=0?x(r):x(Math.abs(+r))+"-";return o==="-\u06F0"?t+"\u06F0":t+o};var g=(r,t)=>t<r?g(t,r):Math.floor(Math.random()*(t-r+1))+r;var G=(r,t,o=1)=>Array.from({length:Math.ceil((t-r)/o)},(e,n)=>r+n*o);var h=()=>Math.floor(Math.random()*6)+1,Z=(r=1)=>Array(r).fill(0).map(()=>h());var z=(r,t=1,o="round")=>{let e=f(r);return Math[o](r/10**(e-t))*10**(e-t)};var W=r=>{let t=Math.abs(r),o=Math.sign(r),e=Math.floor(t),n=e*o||0,m=(t-e)*o||0;return[n,m]};var X=(r,t)=>{if(!t&&t!==0)return r;let o=+r;if(!l(o))return r;let e=Math.floor(o);if(t===0)return e;let n=o-e,m=10**t;return Math.round((e+n)*m)/m};var q=(r,t=2,o,e)=>{let n=+r,m=`${r}`,u=m[0]==="-"||m[0]==="+"?m[0]:"";n>0&&(e===!0&&(u="+"),e===!1&&(u=""));let[i,c]=`${Math.abs(n)}`.split("."),M=u+i.padStart(t,"0"),d=o?`.${"0".repeat(o)}`:"",N=c?`.${c.padEnd(o||c.length,"0")}`:d;return M+N};0&&(module.exports={addCommasToNumber,avoidMinusZero,bin,countFloatDigits,countIntDigits,countWithZeros,enToFaNumber,faToEnNumber,gcd,int,isBigNumber,isFloat,isNumber,lcm,modulus,randomInt,range,rollDice,rollMultipleDices,roundThousands,split,toFaPercent,toPrecision,zeroPad});
