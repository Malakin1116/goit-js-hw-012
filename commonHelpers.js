import{a as m,S as p,i as c}from"./assets/vendor-c493984e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="43967631-6112ded5daea5d7f1facaa737",f="https://pixabay.com/api/",y=async(o="pug",r=1,s=15)=>{const a=new URLSearchParams({key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:s});try{return(await m.get(`${f}?${a}`)).data}catch(e){throw new Error(e.response?e.response.statusText:e.message)}},h=o=>o.map(r=>{const{webformatURL:s="",largeImageURL:a="",tags:e="",likes:t=0,views:n=0,comments:d=0,downloads:u=0}=r;return`
        <li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${e}"
            />
          </a>
          <div class="small-content">
            <span class="text-body-likes"><strong>Likes:</strong> ${t}</span>
            <span class="text-body-views"><strong>Views:</strong> ${n}</span>
            <span class="text-body-comments"><strong>Comments:</strong> ${d}</span>
            <span class="text-body-downloads"><strong>Downloads:</strong> ${u}</span>
          </div>
        </li>
      `}).join(""),i=document.querySelector(".js-gallery"),L=document.querySelector(".js-search-form"),l=document.querySelector("#loader");let w=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){o.preventDefault();const r=o.target.elements.searchKeyword.value.trim();if(r===""){i.innerHTML="",o.target.reset(),c.error({title:"Error",message:"Illegal operation",position:"topRight",timeout:2e3});return}i.innerHTML="",l.classList.remove("hidden"),y(r).then(s=>{s.totalHits===0?c.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"}):(i.innerHTML=h(s.hits),w.refresh())}).catch(s=>console.log(s)).finally(()=>{o.target.reset(),l.classList.add("hidden")})}L.addEventListener("submit",b);
//# sourceMappingURL=commonHelpers.js.map
