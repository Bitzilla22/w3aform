document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".image-container"),t=0;!function l(o){o.style.display="flex",o.style.opacity=0,setTimeout(()=>{o.style.opacity=1,setTimeout(()=>{o.style.opacity=0,setTimeout(()=>{o.style.display="none",t=(t+1)%e.length,l(e[t])},1e3)},3e3)},100)}(e[0]);let l=document.querySelectorAll(".image-container2"),o=0;!function e(t){t.style.display="flex",t.style.opacity=0,setTimeout(()=>{t.style.opacity=1,setTimeout(()=>{t.style.opacity=0,setTimeout(()=>{t.style.display="none",o=(o+1)%l.length,e(l[o])},1e3)},3e3)},100)}(l[0])});
//# sourceMappingURL=index.861436b7.js.map
