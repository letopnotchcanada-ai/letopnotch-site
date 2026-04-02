// Simple cookie consent for Le Top Notch
(function(){
  if(localStorage.getItem("ltn_cookies_accepted")) return;
  
  const banner=document.createElement("div");
  banner.className="ltn-cookie-banner";
  banner.innerHTML=`
    <div class="ltn-cookie-content">
      <p>We use cookies to improve your experience. By continuing, you accept our use of cookies.</p>
      <button onclick="this.closest('.ltn-cookie-banner').remove();localStorage.setItem('ltn_cookies_accepted','1')">Accept</button>
    </div>
  `;
  
  const style=document.createElement("style");
  style.textContent=`
    .ltn-cookie-banner{position:fixed;bottom:0;left:0;right:0;background:#171717;color:#fff;z-index:9999;padding:20px;}
    .ltn-cookie-content{display:flex;align-items:center;justify-content:space-between;max-width:1200px;margin:0 auto;gap:20px;flex-wrap:wrap;}
    .ltn-cookie-content p{font-size:12px;margin:0;}
    .ltn-cookie-content button{background:#fff;color:#171717;border:none;padding:10px 24px;font-size:10px;text-transform:uppercase;letter-spacing:.12em;cursor:pointer;}
    @media(max-width:600px){
      .ltn-cookie-content{flex-direction:column;text-align:center;}
      .ltn-cookie-content button{width:100%;}
    }
  `;
  
  document.head.appendChild(style);
  document.body.appendChild(banner);
})();
