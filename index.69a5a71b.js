var e=document.querySelector(".average-population"),t=document.querySelector(".total-population"),n=Array.from(document.querySelectorAll(".population"),function(e){return Number(e.textContent.replaceAll(",",""))||0}),o=n.reduce(function(e,t){return e+t},0),r=o/n.length;e.textContent=r.toLocaleString("en-US"),t.textContent=o.toLocaleString("en-US");
//# sourceMappingURL=index.69a5a71b.js.map
