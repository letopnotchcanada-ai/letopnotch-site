/* =============================================================
   LE TOP NOTCH — global.js
   Edit this file to update header, footer, popup across ALL pages
   ============================================================= */

// ── GLOBAL CONFIG — edit these to change site-wide settings ──
const LTN = {
  announcement: "Free shipping on orders over CA$250",   // announcement bar text
  discountCode: "WELCOME10",                              // exit popup discount code
  discountAmount: "10%",                                  // exit popup discount amount
  cartKey: "letopnotch_cart",
  apiBase: "https://letopnotch-api-v2.letopnotchcanada.workers.dev",
};

// ── CART ────────────────────────────────────────────────────
function ltn_getCart() {
  try { const r = localStorage.getItem(LTN.cartKey); const c = r ? JSON.parse(r) : []; return Array.isArray(c) ? c : []; } catch { return []; }
}
function ltn_updateCartCount() {
  const n = ltn_getCart().reduce((s, i) => s + (Number(i.quantity) || 0), 0);
  document.querySelectorAll(".ltn-cart-link").forEach(el => el.textContent = `Cart (${n})`);
}

// ── HEADER HTML ─────────────────────────────────────────────
function ltn_headerHTML() {
  return `
<div class="ltn-ann">${LTN.announcement}</div>
<header class="ltn-header">
  <div class="ltn-hi">
    <a href="/index.html" class="ltn-brand">LE TOP NOTCH</a>
    <nav class="ltn-nav">
      <div class="ltn-ni">
        <a href="/shop.html" class="ltn-nl">Shop</a>
        <div class="ltn-dr">
          <div>
            <div class="ltn-dt">Ready-to-Wear</div>
            <div class="ltn-dl">
              <a class="ltn-ac" href="/new-in.html">New In</a>
              <a class="ltn-ac" href="/best-sellers.html">Best Sellers</a>
              <a class="ltn-ac" href="/last-chance.html">Last Chance</a>
              <br>
              <a href="/products.html?group=shop-all&category=tops">Tops</a>
              <a href="/products.html?group=shop-all&category=dresses">Dresses</a>
              <a href="/products.html?group=shop-all&category=knitwear">Knitwear</a>
              <a href="/products.html?group=shop-all&category=jackets">Jackets &amp; Coats</a>
              <a href="/products.html?group=shop-all&category=trousers">Trousers</a>
              <a href="/products.html?group=shop-all&category=skirts">Skirts</a>
              <a href="/products.html?group=shop-all&category=shop-all">Shop All</a>
            </div>
          </div>
          <div>
            <div class="ltn-dt">Collections</div>
            <div class="ltn-dl">
              <a href="/new-in.html">Spring '26</a>
              <a href="/best-sellers.html">Essentials</a>
              <a href="/last-chance.html">Final Pieces</a>
            </div>
          </div>
          <div class="ltn-dpg">
            <a class="ltn-dpc" href="/shop.html"><div class="ltn-dpi"><img src="" data-asset="nav-shop-1" alt="Shop"></div><div class="ltn-dpt">Shop</div><div class="ltn-dps">Entire collection</div></a>
            <a class="ltn-dpc" href="/products.html?group=shop-all&category=dresses"><div class="ltn-dpi"><img src="" data-asset="nav-shop-2" alt="Dresses"></div><div class="ltn-dpt">Dresses</div><div class="ltn-dps">Refined silhouettes</div></a>
            <a class="ltn-dpc" href="/products.html?group=shop-all&category=tops"><div class="ltn-dpi"><img src="" data-asset="nav-shop-3" alt="Tops"></div><div class="ltn-dpt">Tops</div><div class="ltn-dps">Everyday polish</div></a>
            <a class="ltn-dpc" href="/products.html?group=shop-all&category=jackets"><div class="ltn-dpi"><img src="" data-asset="nav-shop-4" alt="Jackets"></div><div class="ltn-dpt">Jackets</div><div class="ltn-dps">Tailored layers</div></a>
          </div>
        </div>
      </div>
      <div class="ltn-ni">
        <a href="/new-in.html" class="ltn-nl">New In</a>
        <div class="ltn-dr">
          <div>
            <div class="ltn-dt">Just Arrived</div>
            <div class="ltn-dl">
              <a href="/products.html?group=new-in&category=shop-all">Shop All New In</a>
              <a href="/products.html?group=new-in&category=tops">New In Tops</a>
              <a href="/products.html?group=new-in&category=dresses">New In Dresses</a>
              <a href="/products.html?group=new-in&category=jackets">New In Jackets</a>
              <a href="/products.html?group=new-in&category=knitwear">New In Knitwear</a>
              <a href="/products.html?group=new-in&category=trousers">New In Trousers</a>
              <a href="/products.html?group=new-in&category=skirts">New In Skirts</a>
            </div>
          </div>
          <div>
            <div class="ltn-dt">Focus</div>
            <div class="ltn-dl">
              <a href="/new-in.html">Spring '26</a>
              <a href="/products.html?group=new-in&category=shop-all">Latest arrivals</a>
            </div>
          </div>
          <div class="ltn-dpg">
            <a class="ltn-dpc" href="/new-in.html"><div class="ltn-dpi"><img src="" data-asset="nav-new-in-1" alt="New In"></div><div class="ltn-dpt">New In</div><div class="ltn-dps">Spring '26</div></a>
            <a class="ltn-dpc" href="/products.html?group=new-in&category=dresses"><div class="ltn-dpi"><img src="" data-asset="nav-new-in-2" alt="Dresses"></div><div class="ltn-dpt">Dresses</div><div class="ltn-dps">Latest silhouettes</div></a>
            <a class="ltn-dpc" href="/products.html?group=new-in&category=tops"><div class="ltn-dpi"><img src="" data-asset="nav-new-in-3" alt="Tops"></div><div class="ltn-dpt">Tops</div><div class="ltn-dps">Fresh arrivals</div></a>
            <a class="ltn-dpc" href="/products.html?group=new-in&category=jackets"><div class="ltn-dpi"><img src="" data-asset="nav-new-in-4" alt="Jackets"></div><div class="ltn-dpt">Jackets</div><div class="ltn-dps">New layers</div></a>
          </div>
        </div>
      </div>
      <div class="ltn-ni">
        <a href="/best-sellers.html" class="ltn-nl">Best Sellers</a>
        <div class="ltn-dr">
          <div>
            <div class="ltn-dt">Most Loved</div>
            <div class="ltn-dl">
              <a href="/products.html?group=best-sellers&category=shop-all">Shop All Best Sellers</a>
              <a href="/products.html?group=best-sellers&category=tops">Best Seller Tops</a>
              <a href="/products.html?group=best-sellers&category=dresses">Best Seller Dresses</a>
              <a href="/products.html?group=best-sellers&category=jackets">Best Seller Jackets</a>
              <a href="/products.html?group=best-sellers&category=knitwear">Best Seller Knitwear</a>
              <a href="/products.html?group=best-sellers&category=trousers">Best Seller Trousers</a>
              <a href="/products.html?group=best-sellers&category=skirts">Best Seller Skirts</a>
            </div>
          </div>
          <div>
            <div class="ltn-dt">Edit</div>
            <div class="ltn-dl">
              <a href="/best-sellers.html">Essentials</a>
              <a href="/products.html?group=best-sellers&category=shop-all">Proven favorites</a>
            </div>
          </div>
          <div class="ltn-dpg">
            <a class="ltn-dpc" href="/best-sellers.html"><div class="ltn-dpi"><img src="" data-asset="nav-best-sellers-1" alt="Best Sellers"></div><div class="ltn-dpt">Best Sellers</div><div class="ltn-dps">Most loved pieces</div></a>
            <a class="ltn-dpc" href="/products.html?group=best-sellers&category=dresses"><div class="ltn-dpi"><img src="" data-asset="nav-best-sellers-2" alt="Dresses"></div><div class="ltn-dpt">Dresses</div><div class="ltn-dps">Customer favorites</div></a>
            <a class="ltn-dpc" href="/products.html?group=best-sellers&category=tops"><div class="ltn-dpi"><img src="" data-asset="nav-best-sellers-3" alt="Tops"></div><div class="ltn-dpt">Tops</div><div class="ltn-dps">Best-performing styles</div></a>
            <a class="ltn-dpc" href="/products.html?group=best-sellers&category=jackets"><div class="ltn-dpi"><img src="" data-asset="nav-best-sellers-4" alt="Jackets"></div><div class="ltn-dpt">Jackets</div><div class="ltn-dps">Top picks</div></a>
          </div>
        </div>
      </div>
      <div class="ltn-ni">
        <a href="/last-chance.html" class="ltn-nl">Last Chance</a>
        <div class="ltn-dr">
          <div>
            <div class="ltn-dt">Final Pieces</div>
            <div class="ltn-dl">
              <a href="/products.html?group=last-chance&category=shop-all">Shop All Last Chance</a>
              <a href="/products.html?group=last-chance&category=tops">Last Chance Tops</a>
              <a href="/products.html?group=last-chance&category=dresses">Last Chance Dresses</a>
              <a href="/products.html?group=last-chance&category=jackets">Last Chance Jackets</a>
              <a href="/products.html?group=last-chance&category=knitwear">Last Chance Knitwear</a>
              <a href="/products.html?group=last-chance&category=trousers">Last Chance Trousers</a>
              <a href="/products.html?group=last-chance&category=skirts">Last Chance Skirts</a>
            </div>
          </div>
          <div>
            <div class="ltn-dt">Edit</div>
            <div class="ltn-dl">
              <a href="/last-chance.html">Final Pieces</a>
              <a href="/products.html?group=last-chance&category=shop-all">Before they're gone</a>
            </div>
          </div>
          <div class="ltn-dpg">
            <a class="ltn-dpc" href="/last-chance.html"><div class="ltn-dpi"><img src="" data-asset="nav-last-chance-1" alt="Last Chance"></div><div class="ltn-dpt">Last Chance</div><div class="ltn-dps">Final pieces</div></a>
            <a class="ltn-dpc" href="/products.html?group=last-chance&category=dresses"><div class="ltn-dpi"><img src="" data-asset="nav-last-chance-2" alt="Dresses"></div><div class="ltn-dpt">Dresses</div><div class="ltn-dps">Limited sizes left</div></a>
            <a class="ltn-dpc" href="/products.html?group=last-chance&category=tops"><div class="ltn-dpi"><img src="" data-asset="nav-last-chance-3" alt="Tops"></div><div class="ltn-dpt">Tops</div><div class="ltn-dps">End-of-run styles</div></a>
            <a class="ltn-dpc" href="/products.html?group=last-chance&category=jackets"><div class="ltn-dpi"><img src="" data-asset="nav-last-chance-4" alt="Jackets"></div><div class="ltn-dpt">Jackets</div><div class="ltn-dps">Final units</div></a>
          </div>
        </div>
      </div>
      <a href="/about.html" class="ltn-nl">About</a>
    </nav>
    <div class="ltn-hact">
      <a href="/cart.html" class="ltn-cart-link">Cart (0)</a>
    </div>
  </div>
</header>`;
}

// ── FOOTER HTML ─────────────────────────────────────────────
function ltn_footerHTML() {
  return `
<div class="ltn-trust">
  <div class="ltn-fw ltn-trust-grid">
    <div class="ltn-trust-item"><h4>Free Delivery</h4><p>For orders over CA$250.</p></div>
    <div class="ltn-trust-item"><h4>Free Returns</h4><p>We offer free and seamless returns all year round.</p></div>
    <div class="ltn-trust-item"><h4>Secure Payment</h4><p>Visa, Mastercard, Amex, Paypal, Maestro, Diners, Discover.</p></div>
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
        <div class="ltn-clbl">Contact:</div>
        <a href="mailto:sales@letopnotch.com">sales@letopnotch.com</a>
        <a href="#">Instagram: @letopnotch</a>
        <div class="ltn-clbl">Useful Information:</div>
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
        <a href="#">Join Us</a>
      </div>
      <div class="ltn-fc">
        <h4>Our Locations</h4>
        <a href="#">1083 Av. Laurier O</a>
        <p>Outremont, Montréal</p>
        <p>QC H2V 2L2</p>
      </div>
      <div class="ltn-fc">
        <h4>Subscribe to our newsletter</h4>
        <p>New arrivals, style notes and exclusive offers.</p>
        <form class="ltn-nlf" onsubmit="return false;">
          <input type="email" id="ltn-nl-email" placeholder="Your e-mail address">
          <button type="submit">OK</button>
        </form>
        <div class="ltn-fsoc">
          <a href="#">Instagram</a>
          <a href="#">Pinterest</a>
          <a href="#">TikTok</a>
          <a href="#">Facebook</a>
          <a href="#">YouTube</a>
        </div>
      </div>
    </div>
    <div class="ltn-fbot"><p>LE TOP NOTCH &nbsp;&middot;&nbsp; Montréal, Québec &nbsp;&middot;&nbsp; Canada</p></div>
  </div>
</footer>`;
}

// ── EXIT INTENT POPUP HTML ───────────────────────────────────
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
        <div class="ltn-ei-sub">Subscribe to our newsletter and receive ${LTN.discountAmount} off your first order, plus early access to new arrivals and exclusive offers.</div>
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
        <div class="ltn-ei-success-sub">Use it at checkout for ${LTN.discountAmount} off your first order.</div>
      </div>
    </div>
  </div>
</div>`;
}

// ── GLOBAL CSS ───────────────────────────────────────────────
function ltn_injectCSS() {
  const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

  :root{--bg:#f7f4ef;--text:#171717;--muted:#6e675f;--line:#e7e0d7;--banner:#ebe4da;--hbg:rgba(247,244,239,.96);--white:#fff;--max:1600px;}

  .ltn-ann{min-height:24px;display:flex;align-items:center;justify-content:center;padding:4px 14px;background:var(--banner);border-bottom:1px solid var(--line);font-size:9px;letter-spacing:.15em;text-transform:uppercase;}

  .ltn-header{position:sticky;top:0;z-index:300;background:var(--hbg);backdrop-filter:blur(8px);border-bottom:1px solid rgba(231,224,215,.75);}
  .ltn-hi{width:min(var(--max),calc(100% - 36px));margin:0 auto;min-height:56px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:18px;}
  .ltn-brand{font-size:15px;letter-spacing:.22em;text-transform:uppercase;white-space:nowrap;font-family:"Cormorant Garamond",Georgia,serif;font-weight:500;color:inherit;text-decoration:none;}
  .ltn-nav{display:flex;align-items:center;justify-content:center;gap:22px;font-size:12px;text-transform:uppercase;letter-spacing:.08em;white-space:nowrap;font-weight:500;}
  .ltn-hact{display:flex;align-items:center;justify-content:flex-end;gap:14px;font-size:12px;text-transform:uppercase;letter-spacing:.08em;font-weight:500;}
  .ltn-ni{position:relative;}
  .ltn-nl{position:relative;display:inline-flex;align-items:center;min-height:56px;color:inherit;text-decoration:none;}
  .ltn-nl::after{content:"";position:absolute;left:0;bottom:14px;width:0;height:1px;background:currentColor;transition:width .2s;}
  .ltn-ni:hover>.ltn-nl::after{width:100%;}
  .ltn-hact a{position:relative;display:inline-flex;align-items:center;min-height:56px;color:inherit;text-decoration:none;}
  .ltn-hact a::after{content:"";position:absolute;left:0;bottom:14px;width:0;height:1px;background:currentColor;transition:width .2s;}
  .ltn-hact a:hover::after{width:100%;}
  .ltn-dr{position:absolute;left:50%;top:100%;transform:translateX(-50%);width:min(1120px,calc(100vw - 40px));background:rgba(247,244,239,.99);border:1px solid var(--line);box-shadow:0 18px 34px rgba(0,0,0,.06);padding:26px 28px;display:none;grid-template-columns:1fr 1fr 1.25fr;gap:34px;z-index:350;}
  .ltn-ni:hover .ltn-dr{display:grid;}
  .ltn-dt{font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px;}
  .ltn-dl{display:flex;flex-direction:column;gap:8px;}
  .ltn-dl a{width:fit-content;font-size:14px;line-height:1.6;text-transform:none;letter-spacing:0;font-weight:400;color:inherit;text-decoration:none;}
  .ltn-dl a:hover{text-decoration:underline;text-underline-offset:2px;}
  .ltn-ac{color:#a87837!important;font-style:italic;}
  .ltn-dpg{display:grid;grid-template-columns:1fr 1fr;gap:18px 22px;align-content:start;}
  .ltn-dpc{display:block;text-decoration:none;color:inherit;}
  .ltn-dpi{aspect-ratio:1.45/1;overflow:hidden;background:#ddd4ca;margin-bottom:8px;}
  .ltn-dpi img{width:100%;height:100%;object-fit:cover;}
  .ltn-dpt{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px;}
  .ltn-dps{font-size:12px;color:var(--muted);}

  /* TRUST */
  .ltn-trust{border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:32px 0;}
  .ltn-trust-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;text-align:center;}
  .ltn-trust-item h4{font-size:10px;text-transform:uppercase;letter-spacing:.18em;font-weight:600;margin-bottom:10px;}
  .ltn-trust-item p{font-size:12px;color:var(--muted);line-height:1.75;max-width:26ch;margin:0 auto;}

  /* FOOTER */
  .ltn-footer{padding:40px 0 28px;background:var(--bg);}
  .ltn-fw{width:min(var(--max),calc(100% - 40px));margin:0 auto;}
  .ltn-fg{display:grid;grid-template-columns:1.1fr 1fr 1fr 1.4fr;gap:32px;padding-bottom:36px;border-bottom:1px solid var(--line);}
  .ltn-fc h4{font-size:9px;text-transform:uppercase;letter-spacing:.18em;font-weight:700;margin-bottom:16px;}
  .ltn-fc a,.ltn-fc p{display:block;font-size:12px;color:var(--muted);line-height:1.9;text-decoration:none;}
  .ltn-fc a:hover{color:var(--text);}
  .ltn-clbl{font-size:9px;text-transform:uppercase;letter-spacing:.14em;font-weight:600;color:var(--text);margin-top:10px;margin-bottom:4px;}
  .ltn-nlf{display:flex;margin-top:10px;}
  .ltn-nlf input{flex:1;min-height:42px;border:1px solid var(--line);background:#fff;padding:0 14px;font-size:12px;font-family:inherit;outline:none;}
  .ltn-nlf button{min-width:52px;background:#111;color:#fff;border:none;font-size:10px;text-transform:uppercase;letter-spacing:.12em;cursor:pointer;font-family:inherit;}
  .ltn-fsoc{display:flex;gap:16px;margin-top:14px;flex-wrap:wrap;}
  .ltn-fsoc a{font-size:12px;color:var(--muted);}
  .ltn-fbot{padding-top:20px;text-align:center;font-size:11px;letter-spacing:.20em;text-transform:uppercase;color:#4a4a4a;}

  /* EXIT INTENT POPUP */
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

  @media(max-width:980px){
    .ltn-hi{grid-template-columns:1fr;justify-items:center;min-height:auto;padding:12px 0;}
    .ltn-nav,.ltn-hact{flex-wrap:wrap;justify-content:center;}
    .ltn-nl,.ltn-hact a{min-height:auto;}
    .ltn-dr{display:none!important;}
    .ltn-fg{grid-template-columns:1fr 1fr;}
    .ltn-trust-grid{grid-template-columns:1fr;}
  }
  @media(max-width:640px){
    .ltn-fg{grid-template-columns:1fr;}
    .ltn-ei-modal{grid-template-columns:1fr;}
    .ltn-ei-image{display:none;}
    .ltn-ei-content{padding:36px 24px;}
  }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
}

// ── INJECT HEADER ────────────────────────────────────────────
function ltn_injectHeader() {
  const el = document.getElementById('ltn-header');
  if (el) el.innerHTML = ltn_headerHTML();
}

// ── INJECT FOOTER ────────────────────────────────────────────
function ltn_injectFooter() {
  const el = document.getElementById('ltn-footer');
  if (el) el.innerHTML = ltn_footerHTML();
}

// ── INJECT POPUP ─────────────────────────────────────────────
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

  function showPopup() {
    if (sessionStorage.getItem(EI_KEY)) return;
    overlay.classList.add('on');
    sessionStorage.setItem(EI_KEY, '1');
  }
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

// ── LOAD ASSETS INTO NAV DROPDOWNS ───────────────────────────
async function ltn_loadNavAssets() {
  try {
    const res = await fetch(LTN.apiBase + '/assets');
    const assets = await res.json();
    document.querySelectorAll('[data-asset]').forEach(img => {
      const key = img.dataset.asset;
      if (assets[key]?.url) img.src = assets[key].url;
    });
  } catch (e) {}
}

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  ltn_injectCSS();
  ltn_injectHeader();
  ltn_injectFooter();
  ltn_injectPopup();
  ltn_updateCartCount();
  ltn_loadNavAssets();
});
window.addEventListener('pageshow', ltn_updateCartCount);
