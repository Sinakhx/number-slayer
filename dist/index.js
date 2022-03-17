var n=()=>Math.floor(Math.random()*6)+1,u=(r=1)=>Array(r).fill(0).map(()=>n());var l=(r,o)=>o<r?l(o,r):Math.floor(Math.random()*(o-r+1))+r;export{l as randomInteger,n as rollDice,u as rollDices};
