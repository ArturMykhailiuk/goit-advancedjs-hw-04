import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as m,i as h}from"./assets/vendor-77e16229.js";let o;document.querySelector('[data-start=""]').disabled=!0;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){o=e[0],console.log(e[0]),p(e[0])}},f=m("#datetime-picker",y);function p(e){const t=new Date;new Date(e)<t?(h.error({title:"Error",position:"topRight",message:"Please choose a date in the future"}),document.querySelector('[data-start=""]').disabled=!0):document.querySelector('[data-start=""]').disabled=!1}function n(e){return String(e).padStart(2,"0")}function S(e){const i=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),u=Math.floor(e%864e5%36e5/6e4),l=Math.floor(e%864e5%36e5%6e4/1e3);return{days:n(i),hours:n(c),minutes:n(u),seconds:n(l)}}const d={deadline:o,elements:{days:document.querySelector('[data-days=""]'),hours:document.querySelector('[data-hours=""]'),minutes:document.querySelector('[data-minutes=""]'),seconds:document.querySelector('[data-seconds=""]')},intervalId:null,start(){this.intervalId=setInterval(()=>{const e=this.deadline-Date.now();if(e<=0){clearInterval(this.intervalId),this.stop();return}const{days:t,hours:r,minutes:s,seconds:a}=S(e);this.elements.days.textContent=t,this.elements.hours.textContent=r,this.elements.minutes.textContent=s,this.elements.seconds.textContent=a},1e3),document.querySelector('[data-start=""]').disabled=!0,document.querySelector("#datetime-picker").disabled=!0},stop(){clearInterval(this.intervalId),document.querySelector("#datetime-picker").disabled=!1}};document.querySelector('[data-start=""]').addEventListener("click",()=>{o&&(d.deadline=new Date(o),d.start())});document.querySelector("#datetime-picker").addEventListener("click",()=>{f.open()});
//# sourceMappingURL=commonHelpers.js.map
