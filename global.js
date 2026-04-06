/* =============================================================
   LE TOP NOTCH — global.js
   MINIMAL CHANGES: Mobile from right→left + accordion
   ============================================================= */

const LTN = {
  announcement: "Free shipping on orders over CA$250",
  discountCode: "WELCOME10",
  discountAmount: "10%",
  cartKey: "letopnotch_cart",
  apiBase: "https://letopnotch-api-v2.letopnotchcanada.workers.dev",
  imgProxy: "https://ltn-image-proxy.letopnotchcanada.workers.dev",
};

function ltn_img(url, width, quality) {
  if (!url) return "";
  const w = width || 800;
  const q = quality || 82;
  return `${LTN.imgProxy}/?url=${encodeURIComponent(url)}&w=${w}&q=${q}`;
}

function ltn_getCart() {
  try { const r = localStorage.getItem(LTN.cartKey); const c = r ? JSON.parse(r) : []; return Array.isArray(c) ? c : []; } catch { return []; }
}
function ltn_updateCartCount() {
  const n = ltn_getCart().reduce((s, i) => s + (Number(i.quantity) || 0), 0);
  document.querySelectorAll(".ltn-cart-link").forEach(el => {
    el.textContent = n;
    el.style.display = n > 0 ? "flex" : "none";
  });
}

function ltn_headerHTML() {
  return `
<div class="ltn-ann">${LTN.announcement}</div>
<header class="ltn-header">
  <div class="ltn-hi">
    <a href="/index.html" class="ltn-brand">LE TOP NOTCH</a>
    <nav class="ltn-nav">
      <div class="ltn-ni">
        <a href="/shop.html" class="ltn-nl">Shop</a>
        <div class="ltn-drop"><div class="ltn-left"><div class="ltn-col-head">Ready-to-Wear</div><a class="ltn-ac" href="/new-in.html">New In</a><a class="ltn-ac" href="/best-sellers.html">Best Sellers</a><a class="ltn-ac" href="/last-chance.html">Last Chance</a><div class="ltn-div"></div><a href="/products.html?group=shop-all&category=tops">Tops</a><a href="/products.html?group=shop-all&category=dresses">Dresses</a><a href="/products.html?group=shop-all&category=knitwear">Knitwear</a><a href="/products.html?group=shop-all&category=jackets">Jackets &amp; Coats</a><a href="/products.html?group=shop-all&category=trousers">Trousers</a><a href="/products.html?group=shop-all&category=skirts">Skirts</a><a href="/products.html?group=shop-all&category=shop-all">Shop All</a></div><div class="ltn-right cols4"><a class="ltn-img-card" href="/products.html?group=shop-all&category=tops"><div class="ltn-img-wrap"><img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-shop-1.webp" alt="Tops"></div><div class="ltn-img-info"><div class="ltn-img-title">Tops</div><div class="ltn-img-sub">Everyday polish</div></div></a><a class="ltn-img-card" href="/products.html?group=shop-all&category=dresses"><div class="ltn-img-wrap"><img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-shop-2.webp" alt="Dresses"></div><div class="ltn-img-info"><div class="ltn-img-title">Dresses</div><div class="ltn-img-sub">Refined silhouettes</div></div></a><a class="ltn-img-card" href="/products.html?group=shop-all&category=jackets"><div class="ltn-img-wrap"><img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-shop-3.webp" alt="Jackets"></div><div class="ltn-img-info"><div class="ltn-img-title">Jackets &amp; Coats</div><div class="ltn-img-sub">Tailored layers</div></div></a><a class="ltn-img-card" href="/products.html?group=shop-all&category=knitwear"><div class="ltn-img-wrap"><img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-shop-4.webp" alt="Knitwear"></div><div class="ltn-img-info"><div class="ltn-img-title">Knitwear</div><div class="ltn-img-sub">Softness &amp; texture</div></div></a></div></div>
      </div>
      <div class="ltn-ni">
        <a href="/new-in.html" class="ltn-nl">New In</a>
        <div class="ltn-drop"><div class="ltn-left"><div class="ltn-col-head">Discover</div><a class="ltn-ac" href="/new-in.html">Shop All New In</a><div class="ltn-div"></div><a href="/products.html?group=new-in&category=tops">Tops</a><a href="/products.html?group=new-in&category=dresses">Dresses</a><a href="/products.html?group=new-in&category=knitwear">Knitwear</a><a href="/products.html?group=new-in&category=jackets">Jackets &amp; Coats</a><a href="/products.html?group=new-in&category=trousers">Trousers</a><a href="/products.html?group=new-in&category=skirts">Skirts</a></div><div class="ltn-right cols3"><a class="ltn-img-card" href="/products.html?group=new-in&category=tops"><div class="ltn-img-wrap"><img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-new-in-1.webp" alt="Tops"></div><div class="ltn-img-info"><div class="ltn-img-title">Tops</div><div class="ltn-img-sub">Fresh arrivals</div></div></a><a class="ltn-img-card" href="/products.html?group=new-in&category=dresses"><div class="ltn-img-wrap"><img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-new-in-2.webp" alt="Dresses"></div><div class="ltn-img-info"><div class="ltn-img-title">Dresses</div><div class="ltn-img-sub">New silhouettes</div></div></a><a class="ltn-img-card" href="/products.html?group=new-in&category=jackets"><div class="ltn-img-wrap"><img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-new-in-3.webp" alt="Jackets"></div><div class="ltn-img-info"><div class="ltn-img-title">Jackets</div><div class="ltn-img-sub">New layers</div></div></a></div></div>
      </div>
      <div class="ltn-ni">
        <a href="/best-sellers.html" class="ltn-nl">Best Sellers</a>
        <div class="ltn-drop"><div class="ltn-left"><div class="ltn-col-head">Discover</div><a class="ltn-ac" href="/best-sellers.html">Shop All Best Sellers</a><div class="ltn-div"></div><a href="/products.html?group=best-sellers&category=tops">Tops</a><a href="/products.html?group=best-sellers&category=dresses">Dresses</a><a href="/products.html?group=best-sellers&category=knitwear">Knitwear</a><a href="/products.html?group=best-sellers&category=jackets">Jackets &amp; Coats</a><a href="/products.html?group=best-sellers&category=trousers">Trousers</a><a href="/products.html?group=best-sellers&category=skirts">Skirts</a></div><div class="ltn-right cols3"><a class="ltn-img-card" href="/products.html?group=best-sellers&category=tops"><div class="ltn-img-wrap"><img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-best-sellers-1.webp" alt="Tops"></div><div class="ltn-img-info"><div class="ltn-img-title">Tops</div><div class="ltn-img-sub">Most loved</div></div></a><a class="ltn-img-card" href="/products.html?group=best-sellers&category=dresses"><div class="ltn-img-wrap"><img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-best-sellers-2.webp" alt="Dresses"></div><div class="ltn-img-info"><div class="ltn-img-title">Dresses</div><div class="ltn-img-sub">Customer favorites</div></div></a><a class="ltn-img-card" href="/products.html?group=best-sellers&category=jackets"><div class="ltn-img-wrap"><img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-best-sellers-3.webp" alt="Jackets"></div><div class="ltn-img-info"><div class="ltn-img-title">Jackets</div><div class="ltn-img-sub">Top picks</div></div></a></div></div>
      </div>
      <div class="ltn-ni">
        <a href="/last-chance.html" class="ltn-nl">Last Chance</a>
        <div class="ltn-drop"><div class="ltn-left"><div class="ltn-col-head">Discover</div><a class="ltn-ac" href="/last-chance.html">Shop All Last Chance</a><div class="ltn-div"></div><a href="/products.html?group=last-chance&category=tops">Tops</a><a href="/products.html?group=last-chance&category=dresses">Dresses</a><a href="/products.html?group=last-chance&category=knitwear">Knitwear</a><a href="/products.html?group=last-chance&category=jackets">Jackets &amp; Coats</a><a href="/products.html?group=last-chance&category=trousers">Trousers</a><a href="/products.html?group=last-chance&category=skirts">Skirts</a></div><div class="ltn-right cols3"><a class="ltn-img-card" href="/products.html?group=last-chance&category=tops"><div class="ltn-img-wrap"><img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-last-chance-1.webp" alt="Tops"></div><div class="ltn-img-info"><div class="ltn-img-title">Tops</div><div class="ltn-img-sub">Final pieces</div></div></a><a class="ltn-img-card" href="/products.html?group=last-chance&category=dresses"><div class="ltn-img-wrap"><img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-last-chance-2.webp" alt="Dresses"></div><div class="ltn-img-info"><div class="ltn-img-title">Dresses</div><div class="ltn-img-sub">Limited sizes left</div></div></a><a class="ltn-img-card" href="/products.html?group=last-chance&category=jackets"><div class="ltn-img-wrap"><img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-last-chance-3.webp" alt="Jackets"></div><div class="ltn-img-info"><div class="ltn-img-title">Jackets</div><div class="ltn-img-sub">Before they're gone</div></div></a></div></div>
      </div>
      <a href="/about.html" class="ltn-nl">About</a>
    </nav>
    <div class="ltn-hact">
      <button class="ltn-search-btn" onclick="ltn_toggleSearch()" aria-label="Search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      </button>
      <a href="/cart.html" class="ltn-cart-icon-btn" aria-label="Cart">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <span class="ltn-cart-count ltn-cart-link" style="display:none">0</span>
      </a>
      <button class="ltn-burger" onclick="ltn_toggleMobileNav()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
  <div class="ltn-search-overlay" id="ltn-search-overlay" style="display:none;">
    <div class="ltn-search-inner">
      <input type="text" id="ltn-search-input" placeholder="Search by name or category…" autocomplete="off">
      <button onclick="ltn_runSearch()" class="ltn-search-go">Search</button>
      <button onclick="ltn_toggleSearch()" class="ltn-search-close">✕</button>
    </div>
  </div>
  <div class="ltn-mob-overlay" id="ltn-mob-overlay" onclick="ltn_toggleMobileNav()"></div>
  <div class="ltn-mob-nav" id="ltn-mob-nav">
    <div class="ltn-mob-top">
      <a href="/index.html" class="ltn-brand">LE TOP NOTCH</a>
      <button class="ltn-mob-close" onclick="ltn_toggleMobileNav()">✕</button>
    </div>
    <nav class="ltn-mob-links">
      <div class="ltn-mob-section">
        <button class="ltn-mob-sec-btn" onclick="ltn_toggleSection(this)">Shop <span class="ltn-mob-arr">+</span></button>
        <div class="ltn-mob-sec-content">
          <a href="/new-in.html">New In</a>
          <a href="/best-sellers.html">Best Sellers</a>
          <a href="/last-chance.html">Last Chance</a>
          <div class="ltn-mob-div"></div>
          <a href="/products.html?group=shop-all&category=tops">Tops</a>
          <a href="/products.html?group=shop-all&category=dresses">Dresses</a>
          <a href="/products.html?group=shop-all&category=knitwear">Knitwear</a>
          <a href="/products.html?group=shop-all&category=jackets">Jackets &amp; Coats</a>
          <a href="/products.html?group=shop-all&category=trousers">Trousers</a>
          <a href="/products.html?group=shop-all&category=skirts">Skirts</a>
          <a href="/products.html?group=shop-all&category=shop-all">Shop All</a>
        </div>
      </div>
      <div class="ltn-mob-div"></div>
      <a href="/about.html">About</a>
      <a href="/cart.html">Cart</a>
    </nav>
  </div>
</header>`;
}

function ltn_footerHTML() {
  return `
<div class="ltn-trust">
  <div class="ltn-fw">
    <div class="ltn-trust-grid">
      <div class="ltn-trust-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="flex-shrink:0;margin-top:1px"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        <div><h4>Free Delivery</h4><p>On orders over CA$250.</p></div>
      </div>
      <div class="ltn-trust-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="flex-shrink:0;margin-top:1px"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        <div><h4>Free Returns</h4><p>Seamless returns all year round.</p></div>
      </div>
      <div class="ltn-trust-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="flex-shrink:0;margin-top:1px"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
        <div><h4>Secure Payment</h4><p>Visa, Mastercard, Amex &amp; more.</p></div>
      </div>
    </div>
  </div>
</div>
<footer class="ltn-footer">
  <div class="ltn-fw">
    <div class="ltn-fg">
      <div class="ltn-fc">
        <h4>Need Help?</h4>
        <a href="#">FAQ</a>
        <a href="#">Make a Return</a>
        <a href="#">Track my order</a>
        <div class="ltn-clbl">Contact</div>
        <a href="mailto:sales@letopnotch.com">sales@letopnotch.com</a>
        <div class="ltn-clbl">Info</div>
        <a href="/cart.html">My Cart</a>
        <a href="#">Shipping Info</a>
        <a href="#">Returns Policy</a>
      </div>
      <div class="ltn-fc">
        <h4>About</h4>
        <a href="/about.html">Our Story</a>
        <a href="#">Our Commitments</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms &amp; Conditions</a>
      </div>
      <div class="ltn-fc">
        <h4>Our Locations</h4>
        <p>1083 Av. Laurier O</p>
        <p>Outremont, Montréal</p>
        <p>QC H2V 2L2</p>
      </div>
      <div class="ltn-fc">
        <h4>Newsletter</h4>
        <p>New arrivals &amp; exclusive offers.</p>
        <form class="ltn-nlf" onsubmit="return false;">
          <input type="email" id="ltn-nl-email" placeholder="Your e-mail address">
          <button type="submit">OK</button>
        </form>
        <div class="ltn-fsoc">
          <a href="#">Instagram</a>
          <a href="#">Pinterest</a>
          <a href="#">TikTok</a>
          <a href="#">Facebook</a>
        </div>
      </div>
    </div>
    <div class="ltn-fbot"><p>© LE TOP NOTCH &nbsp;&middot;&nbsp; Montréal, Québec &nbsp;&middot;&nbsp; Canada</p></div>
  </div>
</footer>`;
}

function ltn_popupHTML() {
  return `
<div class="ltn-ei-overlay" id="ltnEiOverlay">
  <div class="ltn-ei-modal">
    <button class="ltn-ei-close" id="ltnEiClose">&times;</button>
    <div class="ltn-ei-image">
      <img src="https://letopnotch-site.pages.dev/images/hero-home.webp" alt="Le Top Notch">
    </div>
    <div class="ltn-ei-content">
      <div id="ltnEiForm">
        <div class="ltn-ei-tag">Exclusive Offer</div>
        <div class="ltn-ei-title">Before you go —<br>enjoy ${LTN.discountAmount} off</div>
        <div class="ltn-ei-sub">Subscribe and receive ${LTN.discountAmount} off your first order.</div>
        <div class="ltn-ei-form">
          <input class="ltn-ei-input" id="ltnEiEmail" type="email" placeholder="Your e-mail address">
          <button class="ltn-ei-btn" id="ltnEiSubmit">Get My ${LTN.discountAmount} Off</button>
        </div>
        <div class="ltn-ei-skip" id="ltnEiSkip">No thanks, I'll pay full price</div>
      </div>
      <div class="ltn-ei-success" id="ltnEiSuccess">
        <div class="ltn-ei-success-icon">✓</div>
        <div class="ltn-ei-success-title">Welcome to Le Top Notch</div>
        <div class="ltn-ei-success-sub">Your discount code:</div>
        <div class="ltn-ei-code">${LTN.discountCode}</div>
        <div class="ltn-ei-success-sub">Use it at checkout for ${LTN.discountAmount} off.</div>
      </div>
    </div>
  </div>
</div>`;
}

function ltn_injectCSS() {
  if (!document.querySelector('link[href*="Cormorant"]')) {
    const fl = document.createElement('link');
    fl.rel = 'stylesheet';
    fl.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap';
    fl.media = 'print';
    fl.onload = () => { fl.media = 'all'; };
    document.head.appendChild(fl);
  }
  const css = `
  :root{--bg:#f7f4ef;--text:#171717;--muted:#6e675f;--line:#e7e0d7;--banner:#ebe4da;--hbg:rgba(247,244,239,.96);--white:#fff;--max:1600px;}
  .ltn-ann{min-height:24px;display:flex;align-items:center;justify-content:center;padding:4px 14px;background:var(--banner);border-bottom:1px solid var(--line);font-size:9px;letter-spacing:.15em;text-transform:uppercase;}
  .ltn-header{position:sticky;top:0;z-index:300;background:var(--hbg);backdrop-filter:blur(8px);border-bottom:1px solid rgba(231,224,215,.75);}
  .ltn-hi{width:min(var(--max),calc(100% - 36px));margin:0 auto;min-height:56px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:18px;}
  .ltn-brand{font-size:15px;letter-spacing:.22em;text-transform:uppercase;white-space:nowrap;font-family:"Cormorant Garamond",Georgia,serif;font-weight:500;color:inherit;text-decoration:none;}
  .ltn-nav{display:flex;align-items:center;justify-content:center;gap:22px;font-size:12px;text-transform:uppercase;letter-spacing:.08em;white-space:nowrap;font-weight:500;}
  .ltn-hact{display:flex;align-items:center;justify-content:flex-end;gap:14px;font-size:12px;text-transform:uppercase;letter-spacing:.08em;font-weight:500;}
  .ltn-search-btn{background:none;border:none;cursor:pointer;display:flex;align-items:center;color:inherit;padding:0;min-height:56px;}
  .ltn-search-btn:hover{opacity:.6;}
  .ltn-search-overlay{position:fixed;top:0;left:0;right:0;z-index:2000;background:#fff;border-bottom:1px solid #e7e0d7;padding:20px 22px;animation:ltn-sfade .2s ease;}
  @keyframes ltn-sfade{from{opacity:0;transform:translateY(-8px);}to{opacity:1;transform:translateY(0);}}
  .ltn-search-inner{display:flex;align-items:center;gap:10px;width:min(700px,100%);}
  #ltn-search-input{flex:1;height:46px;border:1px solid #e7e0d7;background:#f7f4ef;padding:0 16px;font-size:14px;font-family:inherit;outline:none;}
  #ltn-search-input:focus{border-color:#171717;}
  .ltn-search-go{height:46px;padding:0 22px;background:#171717;color:#fff;font-size:10px;text-transform:uppercase;letter-spacing:.14em;font-family:inherit;border:none;cursor:pointer;}
  .ltn-search-close{height:46px;width:46px;border:1px solid #e7e0d7;background:none;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;}
  .ltn-ni{position:relative;}
  .ltn-nl{position:relative;display:inline-flex;align-items:center;min-height:56px;color:inherit;text-decoration:none;}
  .ltn-nl::after{content:"";position:absolute;left:0;bottom:14px;width:0;height:1px;background:currentColor;transition:width .2s;}
  .ltn-ni:hover>.ltn-nl::after{width:100%;}

  .ltn-hact a{position:relative;display:inline-flex;align-items:center;min-height:56px;color:inherit;text-decoration:none;}
  .ltn-hact a::after{content:"";position:absolute;left:0;bottom:14px;width:0;height:1px;background:currentColor;transition:width .2s;}
  .ltn-hact a:hover::after{width:100%;}

  /* ── DESKTOP DROPDOWN (UNCHANGED FROM WORKING VERSION) ── */
.ltn-drop {
  position: fixed;
  left: 0;
  right: 0;
  top: 57px;
  width: 100%;
  background: #fff;
  border-top: 1px solid #e8e1d8;
  box-shadow: 0 2px 20px rgba(0,0,0,.06);
  z-index: 400;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity .22s ease, visibility .22s ease;
  display: flex;
  align-items: stretch;
}
.ltn-drop::before {
  content: "";
  position: absolute;
  top: -14px; left: 0; right: 0;
  height: 14px;
}
.ltn-ni:hover > .ltn-drop {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

/* LEFT: links */
.ltn-left {
  flex-shrink: 0;
  width: 280px;
  padding: 52px 52px 52px 64px;
  display: flex;
  flex-direction: column;
}
.ltn-col-head {
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: .14em;
  color: #9a9186;
  margin-bottom: 24px;
  font-family: "Helvetica Neue", Arial, sans-serif;
}
.ltn-left a {
  display: block;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  padding: 10px 0;
  color: #1a1a1a;
  text-decoration: none;
  letter-spacing: -.01em;
  font-family: "Helvetica Neue", Arial, sans-serif;
  transition: color .15s;
}
.ltn-left a:hover { color: #555; }
.ltn-left a.ltn-ac {
  color: #a87837;
  font-style: italic;
  font-size: 15px;
}
.ltn-div {
  height: 1px;
  background: #e8e1d8;
  margin: 16px 0 20px;
}

/* RIGHT: images */
.ltn-right {
  flex: 1;
  display: grid;
  gap: 3px;
  background: #e8e1d8;
}
.ltn-right.cols4 { grid-template-columns: repeat(4, 1fr); }
.ltn-right.cols3 { grid-template-columns: repeat(3, 1fr); }

.ltn-img-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #1a1a1a;
  overflow: hidden;
  background: #fff;
}
.ltn-img-card:hover .ltn-img-inner { transform: scale(1.03); }

.ltn-img-wrap {
  overflow: hidden;
  background: #ede8e0;
  height: 72vh;
  flex-shrink: 0;
}
.ltn-img-inner {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: center top !important;
  display: block !important;
  transition: transform .5s ease;
}
.ltn-img-info {
  padding: 14px 20px 16px;
  background: #fff;
  border-top: 1px solid #e8e1d8;
}
.ltn-img-title {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .12em;
  color: #1a1a1a;
  margin-bottom: 3px;
  font-family: "Helvetica Neue", Arial, sans-serif;
}
.ltn-img-sub {
  font-size: 13px;
  color: #9a9186;
  font-weight: 400;
  letter-spacing: 0;
  font-family: "Helvetica Neue", Arial, sans-serif;
}

@media(max-width: 980px) { .ltn-drop { display: none !important; } }


  .ltn-trust{border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:28px 0;}
  .ltn-trust-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
  .ltn-trust-item{display:flex;align-items:flex-start;gap:10px;}
  .ltn-trust-item h4{font-size:10px;text-transform:uppercase;letter-spacing:.16em;font-weight:600;margin-bottom:4px;}
  .ltn-trust-item p{font-size:11px;color:var(--muted);line-height:1.6;}
  .ltn-footer{padding:40px 0 24px;background:var(--bg);}
  .ltn-fw{width:min(var(--max),calc(100% - 40px));margin:0 auto;}
  .ltn-fg{display:grid;grid-template-columns:1.1fr 1fr 1fr 1.4fr;gap:32px;padding-bottom:32px;border-bottom:1px solid var(--line);}
  .ltn-fc h4{font-size:9px;text-transform:uppercase;letter-spacing:.18em;font-weight:700;margin-bottom:14px;}
  .ltn-fc a,.ltn-fc p{display:block;font-size:12px;color:var(--muted);line-height:1.9;text-decoration:none;}
  .ltn-fc a:hover{color:var(--text);}
  .ltn-clbl{font-size:9px;text-transform:uppercase;letter-spacing:.14em;font-weight:600;color:var(--text);margin-top:10px;margin-bottom:4px;}
  .ltn-nlf{display:flex;margin-top:10px;}
  .ltn-nlf input{flex:1;min-height:42px;border:1px solid var(--line);background:#fff;padding:0 14px;font-size:12px;font-family:inherit;outline:none;}
  .ltn-nlf button{min-width:52px;background:#111;color:#fff;border:none;font-size:10px;text-transform:uppercase;letter-spacing:.12em;cursor:pointer;font-family:inherit;}
  .ltn-fsoc{display:flex;gap:14px;margin-top:14px;flex-wrap:wrap;}
  .ltn-fsoc a{font-size:12px;color:var(--muted);text-decoration:none;}
  .ltn-fsoc a:hover{color:var(--text);}
  .ltn-fbot{padding-top:18px;text-align:center;font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);}
  .ltn-ei-overlay{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:900;display:none;align-items:center;justify-content:center;padding:20px;}
  .ltn-ei-overlay.on{display:flex;}
  .ltn-ei-modal{background:#fff;width:min(900px,100%);display:grid;grid-template-columns:1fr 1fr;position:relative;overflow:hidden;max-height:90vh;}
  .ltn-ei-image{background:#d9d2c8;min-height:420px;}
  .ltn-ei-image img{width:100%;height:100%;object-fit:cover;object-position:center top;}
  .ltn-ei-content{padding:52px 44px;display:flex;flex-direction:column;justify-content:center;}
  .ltn-ei-close{position:absolute;top:16px;right:18px;font-size:22px;color:var(--muted);cursor:pointer;background:none;border:none;z-index:10;line-height:1;}
  .ltn-ei-tag{font-size:9px;letter-spacing:.22em;text-transform:uppercase;color:var(--muted);margin-bottom:14px;}
  .ltn-ei-title{font-family:"Cormorant Garamond",Georgia,serif;font-size:clamp(26px,3vw,42px);font-weight:500;line-height:1.1;margin-bottom:10px;}
  .ltn-ei-sub{font-size:13px;color:var(--muted);line-height:1.7;margin-bottom:24px;max-width:32ch;}
  .ltn-ei-form{display:flex;flex-direction:column;gap:10px;}
  .ltn-ei-input{height:46px;border:1px solid var(--line);background:#faf8f5;padding:0 16px;font-size:13px;font-family:inherit;outline:none;width:100%;}
  .ltn-ei-input:focus{border-color:#111;}
  .ltn-ei-btn{height:46px;background:#111;color:#fff;border:none;font-size:10px;text-transform:uppercase;letter-spacing:.16em;cursor:pointer;font-family:inherit;transition:opacity .2s;}
  .ltn-ei-btn:hover{opacity:.85;}
  .ltn-ei-skip{font-size:10px;color:var(--muted);text-align:center;cursor:pointer;text-decoration:underline;text-underline-offset:3px;margin-top:8px;}
  .ltn-ei-success{display:none;text-align:center;padding:20px 0;}
  .ltn-ei-success-icon{font-size:32px;margin-bottom:12px;}
  .ltn-ei-success-title{font-family:"Cormorant Garamond",Georgia,serif;font-size:28px;font-weight:500;margin-bottom:8px;}
  .ltn-ei-success-sub{font-size:13px;color:var(--muted);}
  .ltn-ei-code{font-size:20px;font-weight:700;letter-spacing:.18em;margin:14px 0;color:#111;}
  .ltn-cart-icon-btn{position:relative;display:inline-flex;align-items:center;justify-content:center;min-height:56px;color:inherit;text-decoration:none;}
  .ltn-cart-icon-btn svg{display:block;}
  .ltn-cart-icon-btn:hover{opacity:.6;}
  .ltn-cart-count{position:absolute;top:10px;right:-8px;min-width:16px;height:16px;padding:0 4px;background:#171717;color:#fff;font-size:9px;font-weight:700;border-radius:8px;align-items:center;justify-content:center;letter-spacing:0;font-family:"Helvetica Neue",Arial,sans-serif;}

  .ltn-burger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:4px;min-height:56px;align-items:center;justify-content:center;}
  .ltn-burger span{display:block;width:22px;height:1.5px;background:currentColor;transition:all .2s;}

  /* ── MOBILE NAV - CHANGED FROM RIGHT TO LEFT + ACCORDION ── */
  .ltn-mob-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:498;}
  .ltn-mob-overlay.on{display:block;}
  .ltn-mob-nav{position:fixed;top:0;left:0;bottom:0;width:min(320px,85vw);background:#f7f4ef;z-index:499;transform:translateX(-100%);transition:transform .32s cubic-bezier(.22,.61,.36,1);overflow-y:auto;display:flex;flex-direction:column;}
  .ltn-mob-nav.on{transform:translateX(0);}
  .ltn-mob-top{display:flex;align-items:center;justify-content:space-between;padding:18px 20px;border-bottom:1px solid #e7e0d7;min-height:56px;}
  .ltn-mob-close{background:none;border:none;font-size:22px;cursor:pointer;color:#6e675f;line-height:1;}
  .ltn-mob-links{display:flex;flex-direction:column;padding:16px 0 40px;}
  .ltn-mob-links a{display:block;padding:14px 24px;font-size:13px;text-transform:uppercase;letter-spacing:.10em;color:#171717;border-bottom:1px solid rgba(231,224,215,.5);text-decoration:none;}
  .ltn-mob-links a:hover{background:#f0ece5;}
  .ltn-mob-div{height:1px;background:#e7e0d7;margin:8px 0;}
  
  .ltn-mob-section{border-bottom:1px solid rgba(231,224,215,.5);}
  .ltn-mob-sec-btn{width:100%;padding:14px 24px;background:none;border:none;font-size:13px;text-transform:uppercase;letter-spacing:.10em;color:#171717;display:flex;align-items:center;justify-content:space-between;cursor:pointer;text-align:left;}
  .ltn-mob-arr{transition:transform .2s;}
  .ltn-mob-sec-btn.open .ltn-mob-arr{transform:rotate(45deg);}
  .ltn-mob-sec-content{max-height:0;overflow:hidden;transition:max-height .3s ease;}
  .ltn-mob-sec-content.open{max-height:600px;}
  .ltn-mob-sec-content a{padding-left:32px;}

  @media(max-width:980px){
    .ltn-nav{display:none;}
    .ltn-burger{display:flex;}
    .ltn-hi{grid-template-columns:auto 1fr auto;width:calc(100% - 28px);min-height:52px;gap:0;}
    .ltn-brand{font-size:13px;letter-spacing:.18em;}
    .ltn-hact{gap:18px;}
    .ltn-search-btn,.ltn-cart-icon-btn,.ltn-burger{min-height:52px;}
    .ltn-drop{display:none!important;}
    .ltn-fg{grid-template-columns:1fr 1fr;gap:28px;}
    .ltn-trust-grid{grid-template-columns:1fr;gap:18px;}
    .ltn-trust{padding:24px 0;}
  }
  @media(max-width:640px){
    .ltn-hi{width:calc(100% - 20px);min-height:50px;}
    .ltn-brand{font-size:12px;letter-spacing:.15em;}
    .ltn-ann{font-size:8px;letter-spacing:.08em;padding:5px 12px;min-height:28px;}
    .ltn-fw{width:calc(100% - 28px);}
    .ltn-footer{padding:28px 0 20px;}
    .ltn-fg{grid-template-columns:1fr;gap:0;padding-bottom:0;border-bottom:none;}
    .ltn-fc{border-bottom:1px solid var(--line);padding:16px 0;}
    .ltn-fc h4{margin-bottom:0;font-size:10px;letter-spacing:.14em;}
    .ltn-fc a,.ltn-fc p{display:block;font-size:12px;color:var(--muted);line-height:1.9;text-decoration:none;}
    .ltn-trust{padding:20px 0;}
    .ltn-trust-grid{grid-template-columns:1fr;gap:14px;}
    .ltn-trust-item{display:flex;align-items:baseline;gap:8px;text-align:left;}
    .ltn-trust-item h4{margin-bottom:0;white-space:nowrap;flex-shrink:0;}
    .ltn-trust-item p{font-size:11px;max-width:none;margin:0;}
    .ltn-fsoc{gap:10px;flex-wrap:wrap;}
    .ltn-fsoc a{font-size:11px;}
    .ltn-nlf input{font-size:16px;}
    .ltn-fbot{padding-top:14px;font-size:10px;}
    .ltn-ei-modal{grid-template-columns:1fr;}
    .ltn-ei-image{display:none;}
    .ltn-ei-content{padding:32px 20px;}
  }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
}

function ltn_injectHeader() {
  const el = document.getElementById('ltn-header');
  if (el) el.innerHTML = ltn_headerHTML();
}

function ltn_injectFooter() {
  const el = document.getElementById('ltn-footer');
  if (el) el.innerHTML = ltn_footerHTML();
}

function ltn_injectPopup() {
  const div = document.createElement('div');
  div.innerHTML = ltn_popupHTML();
  document.body.appendChild(div.firstElementChild);
  const overlay = document.getElementById('ltnEiOverlay');
  const closeBtn = document.getElementById('ltnEiClose');
  const skipBtn = document.getElementById('ltnEiSkip');
  const submitBtn = document.getElementById('ltnEiSubmit');
  const emailInput = document.getElementById('ltnEiEmail');
  const formDiv = document.getElementById('ltnEiForm');
  const successDiv = document.getElementById('ltnEiSuccess');
  if (!overlay) return;
  const EI_KEY = 'ltn_ei_shown';
  if (sessionStorage.getItem(EI_KEY)) return;
  function showPopup() { if (sessionStorage.getItem(EI_KEY)) return; overlay.classList.add('on'); sessionStorage.setItem(EI_KEY, '1'); }
  function hidePopup() { overlay.classList.remove('on'); }
  document.addEventListener('mouseleave', e => { if (e.clientY < 10) showPopup(); });
  setTimeout(showPopup, 30000);
  closeBtn.onclick = hidePopup;
  skipBtn.onclick = hidePopup;
  overlay.onclick = e => { if (e.target === overlay) hidePopup(); };
  submitBtn.onclick = () => {
    const email = emailInput.value.trim();
    if (!email || !email.includes('@')) { emailInput.style.borderColor = '#c0392b'; emailInput.focus(); return; }
    emailInput.style.borderColor = '';
    formDiv.style.display = 'none';
    successDiv.style.display = 'block';
    localStorage.setItem('ltn_subscriber', email);
  };
  emailInput.addEventListener('keydown', e => { if (e.key === 'Enter') submitBtn.click(); });
}

document.addEventListener('DOMContentLoaded', () => {
  ltn_injectCSS();
  ltn_injectHeader();
  ltn_injectFooter();
  ltn_injectPopup();
  ltn_updateCartCount();
});
window.addEventListener('pageshow', ltn_updateCartCount);

function ltn_toggleMobileNav() {
  const nav = document.getElementById("ltn-mob-nav");
  const overlay = document.getElementById("ltn-mob-overlay");
  if (!nav) return;
  const isOpen = nav.classList.contains("on");
  nav.classList.toggle("on", !isOpen);
  overlay.classList.toggle("on", !isOpen);
  document.body.style.overflow = isOpen ? "" : "hidden";
}

function ltn_toggleSection(btn) {
  const content = btn.nextElementSibling;
  const isOpen = content.classList.contains("open");
  content.classList.toggle("open", !isOpen);
  btn.classList.toggle("open", !isOpen);
}

function ltn_toggleSearch() {
  const overlay = document.getElementById("ltn-search-overlay");
  if (!overlay) return;
  const isOpen = overlay.style.display !== "none";
  overlay.style.display = isOpen ? "none" : "flex";
  if (!isOpen) {
    const input = document.getElementById("ltn-search-input");
    if (input) { input.value = ""; input.focus(); }
  }
}

function ltn_runSearch() {
  const input = document.getElementById("ltn-search-input");
  const query = (input ? input.value : "").trim();
  if (!query) return;
  const cats = ["tops","dresses","knitwear","jackets","trousers","skirts"];
  const q = query.toLowerCase();
  const matchCat = cats.find(c => c.includes(q) || q.includes(c));
  if (matchCat) {
    window.location.href = `/products.html?group=shop-all&category=${matchCat}&q=${encodeURIComponent(query)}`;
  } else {
    window.location.href = `/products.html?group=shop-all&category=shop-all&q=${encodeURIComponent(query)}`;
  }
}

document.addEventListener("keydown", function(e) {
  const input = document.getElementById("ltn-search-input");
  if (e.key === "Enter" && document.activeElement === input) ltn_runSearch();
  if (e.key === "Escape") {
    const overlay = document.getElementById("ltn-search-overlay");
    if (overlay && overlay.style.display !== "none") ltn_toggleSearch();
  }
});
