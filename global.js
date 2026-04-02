// Le Top Notch Global Scripts
(function(){
  // Cart count
  function updateCartCount(){
    try{
      const cart=JSON.parse(localStorage.getItem("ltn_cart")||"[]");
      const count=cart.reduce((sum,i)=>sum+i.qty,0);
      const badge=document.querySelector(".ltn-cart-count");
      if(badge){
        badge.textContent=count>0?count:"";
        badge.style.display=count>0?"flex":"none";
      }
    }catch(e){console.error("Cart count error:",e);}
  }
  window.ltn_updateCartCount=updateCartCount;

  // Header and Footer
  const header=`<header class="ltn-header">
    <div class="ltn-header-inner">
      <button class="ltn-burger" onclick="document.querySelector('.ltn-nav-mobile').classList.toggle('open')"><span></span><span></span><span></span></button>
      <a href="/" class="ltn-logo">Le Top Notch</a>
      <nav class="ltn-nav">
        <a href="/new-in.html">New In</a>
        <a href="/best-sellers.html">Best Sellers</a>
        <a href="/shop.html">Shop</a>
        <a href="/last-chance.html">Last Chance</a>
        <a href="/about.html">About</a>
      </nav>
      <div class="ltn-actions">
        <a href="/cart.html" class="ltn-cart-icon"><svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3h2l.4 2M7 13h10l4-8H6.4M7 13L5.4 5M7 13l-1.4 5M17 13l1.4 5M9 18h8"/></svg><span class="ltn-cart-count">0</span></a>
      </div>
    </div>
    <nav class="ltn-nav-mobile">
      <a href="/new-in.html">New In</a>
      <a href="/best-sellers.html">Best Sellers</a>
      <a href="/shop.html">Shop</a>
      <a href="/last-chance.html">Last Chance</a>
      <a href="/about.html">About</a>
      <a href="/cart.html">Cart</a>
    </nav>
  </header>
  <style>
    .ltn-header{background:#f7f4ef;border-bottom:1px solid #e7e0d7;position:sticky;top:0;z-index:1000;}
    .ltn-header-inner{display:flex;align-items:center;justify-content:space-between;height:68px;width:min(1600px,calc(100% - 40px));margin:0 auto;}
    .ltn-logo{font-family:"Cormorant Garamond",Georgia,serif;font-size:20px;font-weight:500;text-transform:uppercase;letter-spacing:.08em;}
    .ltn-nav{display:flex;gap:32px;}
    .ltn-nav a{font-size:10px;text-transform:uppercase;letter-spacing:.14em;color:#6e675f;transition:color .2s;}
    .ltn-nav a:hover{color:#171717;}
    .ltn-burger{display:none;flex-direction:column;gap:4px;width:24px;}
    .ltn-burger span{display:block;width:100%;height:1.5px;background:#171717;}
    .ltn-nav-mobile{display:none;flex-direction:column;background:#fff;border-bottom:1px solid #e7e0d7;}
    .ltn-nav-mobile.open{display:flex;}
    .ltn-nav-mobile a{padding:16px 20px;font-size:11px;text-transform:uppercase;letter-spacing:.12em;border-bottom:1px solid #e7e0d7;}
    .ltn-actions{display:flex;gap:20px;}
    .ltn-cart-icon{position:relative;display:flex;align-items:center;}
    .ltn-cart-count{position:absolute;top:-6px;right:-8px;background:#171717;color:#fff;font-size:9px;width:18px;height:18px;border-radius:50%;display:none;align-items:center;justify-content:center;}
    @media(max-width:980px){
      .ltn-nav{display:none;}
      .ltn-burger{display:flex;}
    }
  </style>`;

  const footer=`<footer class="ltn-footer">
    <div class="ltn-footer-inner">
      <div class="ltn-footer-col">
        <h4>Shop</h4>
        <a href="/new-in.html">New In</a>
        <a href="/best-sellers.html">Best Sellers</a>
        <a href="/shop.html">All Products</a>
        <a href="/last-chance.html">Last Chance</a>
      </div>
      <div class="ltn-footer-col">
        <h4>Help</h4>
        <a href="/about.html#faq">FAQ</a>
        <a href="/about.html#returns">Returns</a>
        <a href="/about.html#track">Track Order</a>
        <a href="mailto:sales@letopnotch.com">Contact</a>
      </div>
      <div class="ltn-footer-col">
        <h4>About</h4>
        <a href="/about.html">Our Story</a>
        <a href="/about.html#visit">Visit Us</a>
        <a href="/about.html#privacy">Privacy</a>
        <a href="/about.html#terms">Terms</a>
      </div>
      <div class="ltn-footer-col">
        <h4>Connect</h4>
        <a href="https://instagram.com/letopnotch" target="_blank">Instagram</a>
        <p style="margin-top:20px;font-size:10px;color:#9a9186;">1083 Av. Laurier O<br>Outremont, Montréal<br>sales@letopnotch.com</p>
      </div>
    </div>
    <div class="ltn-footer-bottom">© 2026 Le Top Notch. All rights reserved.</div>
  </footer>
  <style>
    .ltn-footer{background:#f0ece5;border-top:1px solid #e7e0d7;padding:56px 0 32px;}
    .ltn-footer-inner{display:grid;grid-template-columns:repeat(4,1fr);gap:32px;width:min(1600px,calc(100% - 40px));margin:0 auto;padding-bottom:40px;border-bottom:1px solid #e7e0d7;}
    .ltn-footer-col h4{font-size:10px;text-transform:uppercase;letter-spacing:.16em;margin-bottom:16px;}
    .ltn-footer-col a{display:block;font-size:12px;color:#6e675f;margin-bottom:10px;}
    .ltn-footer-col a:hover{color:#171717;}
    .ltn-footer-bottom{text-align:center;font-size:10px;color:#9a9186;margin-top:28px;}
    @media(max-width:900px){.ltn-footer-inner{grid-template-columns:repeat(2,1fr);}}
    @media(max-width:500px){.ltn-footer-inner{grid-template-columns:1fr;}}
  </style>`;

  document.addEventListener("DOMContentLoaded",()=>{
    const hdr=document.getElementById("ltn-header");
    const ftr=document.getElementById("ltn-footer");
    if(hdr)hdr.outerHTML=header;
    if(ftr)ftr.outerHTML=footer;
    updateCartCount();
  });
})();
