var N=(r,t=",")=>{let n=`${r}`.split("."),e=n[0],u=n.length>1?`.${n[1]}`:"",c=/(\d+)(\d{3})/;for(;c.test(e);)e=e.replace(c,`$1${t}$2`);return e+u};var E=r=>r||0;var F=r=>{let t=r[0]==="-"?-1:1,o=t<0?r.slice(1):r;return o=o.slice(0,2)==="0b"?o.slice(2):o,parseInt(o,2)*t},$=r=>(r<0?"-":"")+"0b"+(Math.abs(r)>>>0).toString(2);var b=r=>Math.max(Math.floor(Math.log10(Math.abs(r))),0)+1;var I=r=>r===0||r==="0"?1:+!!r;var _=r=>r>Number.MAX_SAFE_INTEGER||r<Number.MIN_SAFE_INTEGER;var f=r=>{if(r instanceof Date)return!1;let t=r&&typeof r.valueOf=="function"?r.valueOf():r;return typeof t=="number"&&Number.isFinite(t)};var C=(r,t)=>(r%t+t)%t;var h=()=>{let r=e=>Object.fromEntries(Array(10).fill(0).map((u,c)=>{let i=c+"",a=String.fromCharCode(i.charCodeAt(0)+1728);return e===0?[i,a]:[a,i]})),t=r(1),o=r(0),n=e=>u=>`${u}`.split("").map(c=>e[c]||c).join("");return{enToFaNumber:n(o),faToEnNumber:n(t)}},{enToFaNumber:p,faToEnNumber:O}=h(),k=r=>{let t="\u066A ",o=r>=0?p(r):p(Math.abs(+r))+"-";return o==="-\u06F0"?t+"\u06F0":t+o};var d=(r,t)=>t<r?d(t,r):Math.floor(Math.random()*(t-r+1))+r;var Z=(r,t,o=1)=>Array.from({length:Math.ceil((t-r)/o)},(n,e)=>r+e*o);var M=()=>Math.floor(Math.random()*6)+1,B=(r=1)=>Array(r).fill(0).map(()=>M());var q=(r,t=1,o="round")=>{let n=b(r);return Math[o](r/10**(n-t))*10**(n-t)};var K=(r,t)=>{if(!t&&t!==0)return r;let o=+r;if(!f(o))return r;let n=Math.floor(o);if(t===0)return n;let e=o-n,u=10**t;return Math.round((n+e)*u)/u};var Q=(r,t=2,o,n)=>{let e=+r,u=`${r}`,c=u[0]==="-"||u[0]==="+"?u[0]:"";e>0&&(n===!0&&(c="+"),n===!1&&(c=""));let[i,a]=`${Math.abs(e)}`.split("."),l=c+i.padStart(t,"0"),g=o?`.${"0".repeat(o)}`:"",x=a?`.${a.padEnd(o||a.length,"0")}`:g;return l+x};export{N as addCommasToNumber,E as avoidMinusZero,$ as bin,b as countIntDigits,I as countWithZeros,p as enToFaNumber,O as faToEnNumber,F as int,_ as isBigNumber,f as isNumber,C as modulus,d as randomInt,Z as range,M as rollDice,B as rollMultipleDices,q as roundThousands,k as toFaPercent,K as toPrecision,Q as zeroPad};
