import{a as b,S as w,i as m}from"./assets/vendor-c493984e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const S="43967631-6112ded5daea5d7f1facaa737",v="https://pixabay.com/api/",g=async(t="pug",s=1,n=15)=>{const o=new URLSearchParams({key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:n});try{return(await b.get(`${v}?${o}`)).data}catch(e){throw new Error(e.response?e.response.statusText:e.message)}},p=t=>t.map(s=>{const{webformatURL:n="",largeImageURL:o="",tags:e="",likes:r=0,views:a=0,comments:y=0,downloads:L=0}=s;return`
        <li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${n}"
              alt="${e}"
            />
          </a>
          <div class="small-content">
            <span class="text-body-likes"><strong>Likes:</strong> ${r}</span>
            <span class="text-body-views"><strong>Views:</strong> ${a}</span>
            <span class="text-body-comments"><strong>Comments:</strong> ${y}</span>
            <span class="text-body-downloads"><strong>Downloads:</strong> ${L}</span>
          </div>
        </li>
      `}).join(""),l=document.querySelector(".js-gallery"),E=document.querySelector(".js-search-form"),d=document.querySelector(".load-more"),u=document.querySelector("#loader");let f=new w(".gallery a",{captionsData:"alt",captionDelay:250}),c="",h=1,i=0;function P(t){if(t.preventDefault(),c=t.target.elements.searchKeyword.value.trim(),h=1,i=0,c===""){l.innerHTML="",t.target.reset(),m.error({title:"Error",message:"Illegal operation",position:"topRight",timeout:2e3});return}l.innerHTML="",u.classList.remove("hidden"),d.classList.add("hidden"),g(c,h).then(s=>{i=s.totalHits,i===0?m.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"}):(l.innerHTML=p(s.hits),f.refresh(),s.hits.length<i&&d.classList.remove("hidden"))}).catch(s=>console.log(s)).finally(()=>{t.target.reset(),u.classList.add("hidden")})}function x(){h+=1,u.classList.remove("hidden"),g(c,h).then(t=>{l.insertAdjacentHTML("beforeend",p(t.hits)),f.refresh(),l.children.length>=i&&(d.classList.add("hidden"),m.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:2e3,color:"blue"}))}).catch(t=>console.log(t)).finally(()=>{u.classList.add("hidden")})}E.addEventListener("submit",P);d.addEventListener("click",x);
//# sourceMappingURL=commonHelpers.js.map
