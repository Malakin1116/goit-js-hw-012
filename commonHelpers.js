import{a as w,S as b,i as m}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const v="43967631-6112ded5daea5d7f1facaa737",S="https://pixabay.com/api/",g=async(s="pug",t=1,i=15)=>{const o=new URLSearchParams({key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:i});try{return(await w.get(`${S}?${o}`)).data}catch(e){throw new Error(e.response?e.response.statusText:e.message)}},p=s=>s.map(t=>{const{webformatURL:i="",largeImageURL:o="",tags:e="",likes:r=0,views:l=0,comments:y=0,downloads:L=0}=t;return`
        <li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${i}"
              alt="${e}"
            />
          </a>
          <div class="small-content">
            <span class="text-body-likes"><strong>Likes:</strong> ${r}</span>
            <span class="text-body-views"><strong>Views:</strong> ${l}</span>
            <span class="text-body-comments"><strong>Comments:</strong> ${y}</span>
            <span class="text-body-downloads"><strong>Downloads:</strong> ${L}</span>
          </div>
        </li>
      `}).join(""),n=document.querySelector(".js-gallery"),E=document.querySelector(".js-search-form"),a=document.querySelector(".load-more"),h=document.querySelector("#loader");let f=new b(".gallery a",{captionsData:"alt",captionDelay:250}),d="",u=1,c=0;function P(s){if(s.preventDefault(),d=s.target.elements.searchKeyword.value.trim(),u=1,c=0,d===""){n.innerHTML="",s.target.reset(),m.error({title:"Error",message:"Illegal operation",position:"topRight",timeout:2e3});return}n.innerHTML="",h.classList.remove("hidden"),a.classList.add("hidden"),g(d,u).then(t=>{c=t.totalHits,c===0?m.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"}):(n.innerHTML=p(t.hits),f.refresh(),t.hits.length<c&&a.classList.remove("hidden"))}).catch(t=>console.log(t)).finally(()=>{s.target.reset(),h.classList.add("hidden")})}function x(){u+=1,a.classList.add("hidden"),h.classList.remove("hidden"),g(d,u).then(s=>{const{height:t}=n.firstElementChild.getBoundingClientRect();n.insertAdjacentHTML("beforeend",p(s.hits)),f.refresh(),window.scrollBy({top:t*2,behavior:"smooth"}),n.children.length>=c?(a.classList.add("hidden"),m.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:2e3,color:"blue"})):a.classList.remove("hidden")}).catch(s=>console.log(s)).finally(()=>{h.classList.add("hidden")})}E.addEventListener("submit",P);a.addEventListener("click",x);
//# sourceMappingURL=commonHelpers.js.map
