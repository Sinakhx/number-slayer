var x=(r,t=",")=>{let n=`${r}`.split("."),e=n[0],m=n.length>1?`.${n[1]}`:"",s=/(\d+)(\d{3})/;for(;s.test(e);)e=e.replace(s,`$1${t}$2`);return e+m};var h=r=>r===0||r==="0"?1:+!!r;var b=r=>{if(r instanceof Date)return!1;let t=r&&typeof r.valueOf=="function"?r.valueOf():r;return typeof t=="number"&&Number.isFinite(t)};var N=(r,t)=>(r%t+t)%t;var y=(r,t,o=1)=>Array.from({length:Math.ceil((t-r+1)/o)},(n,e)=>r+e*o);var p=()=>{let r=e=>Object.fromEntries(Array(10).fill(0).map((m,s)=>{let i=s+"",a=String.fromCharCode(i.charCodeAt(0)+1728);return e===0?[i,a]:[a,i]})),t=r(1),o=r(0),n=e=>m=>`${m}`.split("").map(s=>e[s]||s).join("");return{enToFaNumber:n(o),faToEnNumber:n(t)}},{enToFaNumber:f,faToEnNumber:D}=p(),E=r=>{let t="\u066A ",o=r>=0?f(r):f(Math.abs(+r))+"-";return o==="-\u06F0"?t+"\u06F0":t+o};var l=(r,t)=>t<r?l(t,r):Math.floor(Math.random()*(t-r+1))+r;var g=()=>Math.floor(Math.random()*6)+1,C=(r=1)=>Array(r).fill(0).map(()=>g());var O=(r,t)=>{if(!t&&t!==0)return r;let o=+r;if(!b(o))return r;let n=Math.floor(o);if(t===0)return n;let e=o-n,m=10**t;return Math.round((n+e)*m)/m};var k=(r,t=2,o)=>{let n=`${r}`,e=n[0]==="-"||n[0]==="+"?n[0]:"";e&&(n=n.substring(1));let[m,s]=n.split("."),i=e+m.padStart(t,"0"),a=s?`.${s.padEnd(o||s.length,"0")}`:"";return i+a};export{x as addCommasToNumber,h as countWithZeros,f as enToFaNumber,D as faToEnNumber,b as isNumber,N as modulus,y as numbersList,l as randomInteger,g as rollDice,C as rollMultipleDices,E as toFaPercent,O as toPrecision,k as zeroPad};
