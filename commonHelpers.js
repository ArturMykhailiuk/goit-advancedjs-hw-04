import{i as c,S as m}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const d=e=>`
  <li class="gallery-card">

  <a class="gallery-link" href="${e.largeImageURL}">
    <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" />
  </a>

    <div class="gallery-card-info">
      <div class="image-info">
        <p class="image-info-label">Likes:</p>
        <p class="image-info-counter">${e.likes}</p>
      </div>
      <div class="image-info">
        <p class="image-info-label">Comments:</p>
        <p class="image-info-counter">${e.comments}</p>
      </div>
      <div class="image-info">  
        <p class="image-info-label">Views:</p>
        <p class="image-info-counter">${e.views}</p>
      </div>
      <div class="image-info">
        <p class="image-info-label">Dowloads:</p>
        <p class="image-info-counter">${e.downloads}</p>
      </div>
    </div>
  </li>
  `,u=()=>{const e=document.createElement("div");e.classList.add("loader"),document.querySelector(".js-search-form").insertAdjacentElement("afterend",e)},n=()=>{document.querySelector(".loader").remove()},f=e=>fetch(`https://pixabay.com/api/?key=45247125-03c336e2130b29d2672f4e8a7&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}),g=document.querySelector(".js-search-form"),i=document.querySelector(".js-gallery"),p=e=>{e.preventDefault();const o=e.target.elements.user_query.value.trim();e.target.elements.user_query.value="",u(),o.length!==0&&f(o).then(({hits:a})=>{if(a.length===0){i.innerHTML="",n(),c.show({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});return}const s=a.map(t=>d(t)).join("");i.innerHTML=s,n(),new m(".gallery-card a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(a=>{console.log(a)})};g.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
