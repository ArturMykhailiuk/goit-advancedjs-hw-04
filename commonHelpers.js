import{a as u,i as p,S as f}from"./assets/vendor-bbeb4f15.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const h=o=>`
  <li class="gallery-card">

  <a class="gallery-link" href="${o.largeImageURL}">
    <img class="gallery-img" src="${o.webformatURL}" alt="${o.tags}" />
  </a>

    <div class="gallery-card-info">
      <div class="image-info">
        <p class="image-info-label">Likes:</p>
        <p class="image-info-counter">${o.likes}</p>
      </div>
      <div class="image-info">
        <p class="image-info-label">Comments:</p>
        <p class="image-info-counter">${o.comments}</p>
      </div>
      <div class="image-info">  
        <p class="image-info-label">Views:</p>
        <p class="image-info-counter">${o.views}</p>
      </div>
      <div class="image-info">
        <p class="image-info-label">Dowloads:</p>
        <p class="image-info-counter">${o.downloads}</p>
      </div>
    </div>
  </li>
  `,y=o=>{const e=document.createElement("div");e.classList.add("loader"),document.querySelector(o).insertAdjacentElement("afterend",e)},i=()=>{document.querySelector(".loader").remove()};u.defaults.baseURL="https://pixabay.com/api";const v=(o,e)=>{const a={params:{key:"45247125-03c336e2130b29d2672f4e8a7",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}};return u.get("",a)},b=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),g=document.querySelector(".js-load-more");let c=1,m=0,n="";const L=async o=>{try{if(o.preventDefault(),n=o.target.elements.user_query.value.trim(),c=1,o.target.elements.user_query.value="",y(".js-search-form"),n.length!==0){const{data:e}=await v(n,c);if(e.hits.length===0){d.innerHTML="",i(),p.show({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});return}m=e.hits.length;const a=e.hits.map(t=>h(t)).join("");d.innerHTML=a,g.classList.remove("is-hidden"),i(),new f(".gallery-card a",{captionsData:"alt",captionDelay:250}).refresh()}else i()}catch(e){console.log(e)}},w=async o=>{try{c++,y(".js-gallery");const{data:e}=await v(n,c);m+=e.hits.length;const a=e.hits.map(s=>h(s)).join("");d.insertAdjacentHTML("beforeend",a);let t=document.querySelector(".gallery-card ").getBoundingClientRect();console.log(t.height),window.scrollBy({top:2*t.height,behavior:"smooth"}),new f(".gallery-card a",{captionsData:"alt",captionDelay:250}).refresh(),i(),m>=e.totalHits&&(g.classList.add("is-hidden"),p.show({title:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"grey"}))}catch(e){console.log(e)}};b.addEventListener("submit",L);g.addEventListener("click",w);
//# sourceMappingURL=commonHelpers.js.map
