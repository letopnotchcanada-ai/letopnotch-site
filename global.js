/* =============================================================
   LE TOP NOTCH — global.js
   Cleaner desktop header + mobile nav + search + footer + popup
   ============================================================= */

const LTN = {
  announcement: "Free shipping on orders over CA$250",
  discountCode: "WELCOME10",
  discountAmount: "10%",
  cartKey: "letopnotch_cart",
  popupKey: "ltn_welcome_popup_seen_v1",
  imgProxy: "https://ltn-image-proxy.letopnotchcanada.workers.dev",
  apiBase: "https://letopnotch-api-v2.letopnotchcanada.workers.dev",
  socials: {
    instagram: "https://www.instagram.com/letopnotchcanada/"
  }
};

/* =============================================================
   IMAGE PROXY
   ============================================================= */
function ltn_img(url, width, quality) {
  if (!url) return "";
  const w = width || 900;
  const q = quality || 82;
  return `${LTN.imgProxy}/?url=${encodeURIComponent(url)}&w=${w}&q=${q}`;
}

/* =============================================================
   CART
   ============================================================= */
function ltn_getCart() {
  try {
    const raw = localStorage.getItem(LTN.cartKey);
    const cart = raw ? JSON.parse(raw) : [];
    return Array.isArray(cart) ? cart : [];
  } catch {
    return [];
  }
}

function ltn_updateCartCount() {
  const count = ltn_getCart().reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);

  document.querySelectorAll(".ltn-cart-count").forEach(el => {
    el.textContent = String(count);
    el.style.display = count > 0 ? "flex" : "none";
  });

  document.querySelectorAll("[data-cart-count]").forEach(el => {
    el.textContent = `Cart (${count})`;
  });
}

/* =============================================================
   HEADER HTML
   ============================================================= */
function ltn_headerHTML() {
  return `
    <div class="ltn-ann">${LTN.announcement}</div>

    <header class="ltn-header">
      <div class="ltn-hi">

        <div class="ltn-left-zone">
          <button class="ltn-burger" aria-label="Open menu" onclick="ltn_toggleMobileNav()">
            <span></span><span></span><span></span>
          </button>

          <nav class="ltn-nav" aria-label="Primary">
            <div class="ltn-ni">
              <a href="/shop.html" class="ltn-nl">Shop</a>
              <div class="ltn-drop">
                <div class="ltn-left">
                  <div class="ltn-col-head">Ready-to-Wear</div>
                  <a class="ltn-ac" href="/new-in.html">New In</a>
                  <a class="ltn-ac" href="/best-sellers.html">Best Sellers</a>
                  <a class="ltn-ac" href="/last-chance.html">Last Chance</a>
                  <div class="ltn-div"></div>
                  <a href="/products.html?group=shop-all&category=tops">Tops</a>
                  <a href="/products.html?group=shop-all&category=dresses">Dresses</a>
                  <a href="/products.html?group=shop-all&category=knitwear">Knitwear</a>
                  <a href="/products.html?group=shop-all&category=jackets">Jackets &amp; Coats</a>
                  <a href="/products.html?group=shop-all&category=trousers">Trousers</a>
                  <a href="/products.html?group=shop-all&category=skirts">Skirts</a>
                  <a href="/products.html?group=shop-all&category=shop-all">Shop All</a>
                </div>

                <div class="ltn-right cols4">
                  <a class="ltn-img-card" href="/new-in.html">
                    <div class="ltn-img-wrap">
                      <img src="/images/nav-new-in-3.webp" alt="New In">
                      <div class="ltn-img-info">
                        <div class="ltn-img-title">New In</div>
                        <div class="ltn-img-sub">Discover the latest arrivals</div>
                      </div>
                    </div>
                  </a>

                  <a class="ltn-img-card" href="/best-sellers.html">
                    <div class="ltn-img-wrap">
                      <img src="/images/nav-best-sellers-3.webp" alt="Best Sellers">
                      <div class="ltn-img-info">
                        <div class="ltn-img-title">Best Sellers</div>
                        <div class="ltn-img-sub">Most loved pieces</div>
                      </div>
                    </div>
                  </a>

                  <a class="ltn-img-card" href="/products.html?group=shop-all&category=tops">
                    <div class="ltn-img-wrap">
                      <img src="/images/nav-tops-3.webp" alt="Tops">
                      <div class="ltn-img-info">
                        <div class="ltn-img-title">Tops</div>
                        <div class="ltn-img-sub">Elevated essentials</div>
                      </div>
                    </div>
                  </a>

                  <a class="ltn-img-card" href="/products.html?group=shop-all&category=dresses">
                    <div class="ltn-img-wrap">
                      <img src="/images/nav-dresses-3.webp" alt="Dresses">
                      <div class="ltn-img-info">
                        <div class="ltn-img-title">Dresses</div>
                        <div class="ltn-img-sub">Timeless silhouettes</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <a href="/new-in.html" class="ltn-nl">New In</a>
            <a href="/best-sellers.html" class="ltn-nl">Best Sellers</a>
            <a href="/about.html" class="ltn-nl">About</a>
          </nav>
        </div>

        <a href="/index.html" class="ltn-brand">LE TOP NOTCH</a>

        <div class="ltn-actions">
          <button class="ltn-icon-btn" aria-label="Search" onclick="ltn_toggleSearch()">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.8" fill="none"></circle>
              <path d="M20 20L16.65 16.65" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
            </svg>
          </button>

          <a href="/cart.html" class="ltn-icon-btn ltn-cart-icon-wrap" aria-label="Cart">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.5 7H17.5L16.7 19H7.3L6.5 7Z" stroke="currentColor" stroke-width="1.8" fill="none"></path>
              <path d="M9 7V5.8C9 4.25 10.2 3 12 3C13.8 3 15 4.25 15 5.8V7" stroke="currentColor" stroke-width="1.8" fill="none"></path>
            </svg>
            <span class="ltn-cart-count">0</span>
          </a>
        </div>
      </div>
    </header>

    <div id="ltn-mob-overlay" class="ltn-mob-overlay" onclick="ltn_closeMobileNav()"></div>

    <aside id="ltn-mob-nav" class="ltn-mob-nav" aria-label="Mobile navigation">
      <div class="ltn-mob-head">
        <div class="ltn-mob-brand">LE TOP NOTCH</div>
        <button class="ltn-mob-close" aria-label="Close menu" onclick="ltn_closeMobileNav()">×</button>
      </div>

      <div class="ltn-mob-links">
        <a href="/index.html" onclick="ltn_closeMobileNav()">Home</a>
        <a href="/shop.html" onclick="ltn_closeMobileNav()">Shop</a>
        <a href="/new-in.html" onclick="ltn_closeMobileNav()">New In</a>
        <a href="/best-sellers.html" onclick="ltn_closeMobileNav()">Best Sellers</a>
        <a href="/last-chance.html" onclick="ltn_closeMobileNav()">Last Chance</a>

        <div class="ltn-mob-divider"></div>

        <a href="/products.html?group=shop-all&category=tops" onclick="ltn_closeMobileNav()">Tops</a>
        <a href="/products.html?group=shop-all&category=dresses" onclick="ltn_closeMobileNav()">Dresses</a>
        <a href="/products.html?group=shop-all&category=knitwear" onclick="ltn_closeMobileNav()">Knitwear</a>
        <a href="/products.html?group=shop-all&category=jackets" onclick="ltn_closeMobileNav()">Jackets &amp; Coats</a>
        <a href="/products.html?group=shop-all&category=trousers" onclick="ltn_closeMobileNav()">Trousers</a>
        <a href="/products.html?group=shop-all&category=skirts" onclick="ltn_closeMobileNav()">Skirts</a>
        <a href="/products.html?group=shop-all&category=shop-all" onclick="ltn_closeMobileNav()">Shop All</a>

        <div class="ltn-mob-divider"></div>

        <a href="/about.html#our-story" onclick="ltn_closeMobileNav()">Our Story</a>
        <a href="/about.html#visit" onclick="ltn_closeMobileNav()">Visit Us</a>
        <a href="/about.html#faq" onclick="ltn_closeMobileNav()">FAQ</a>
        <a href="/about.html#returns" onclick="ltn_closeMobileNav()">Returns</a>
        <a href="/cart.html" onclick="ltn_closeMobileNav()">Cart</a>
      </div>
    </aside>

    <div id="ltn-search-overlay" class="ltn-search-overlay" style="display:none;">
      <div class="ltn-search-box">
        <button class="ltn-search-close" aria-label="Close search" onclick="ltn_toggleSearch()">×</button>
        <div class="ltn-search-title">Search the collection</div>
        <div class="ltn-search-row">
          <input id="ltn-search-input" class="ltn-search-input" type="text" placeholder="Search by product, category, colour..." />
          <button class="ltn-search-btn" onclick="ltn_runSearch()">Search</button>
        </div>
      </div>
    </div>
  `;
}

/* =============================================================
   FOOTER HTML
   ============================================================= */
function ltn_footerHTML() {
  return `
    <footer class="ltn-footer">
      <div class="ltn-fi">
        <div class="ltn-fcol">
          <div class="ltn-fh">Le Top Notch</div>
          <p class="ltn-fp">Curated womenswear with a refined, timeless point of view.</p>
        </div>

        <div class="ltn-fcol">
          <div class="ltn-fh">Shop</div>
          <a href="/new-in.html">New In</a>
          <a href="/best-sellers.html">Best Sellers</a>
          <a href="/last-chance.html">Last Chance</a>
          <a href="/shop.html">Collection</a>
        </div>

        <div class="ltn-fcol">
          <div class="ltn-fh">Categories</div>
          <a href="/products.html?group=shop-all&category=tops">Tops</a>
          <a href="/products.html?group=shop-all&category=dresses">Dresses</a>
          <a href="/products.html?group=shop-all&category=knitwear">Knitwear</a>
          <a href="/products.html?group=shop-all&category=jackets">Jackets &amp; Coats</a>
          <a href="/products.html?group=shop-all&category=trousers">Trousers</a>
          <a href="/products.html?group=shop-all&category=skirts">Skirts</a>
        </div>

        <div class="ltn-fcol">
          <div class="ltn-fh">Information</div>
          <a href="/about.html#our-story">Our Story</a>
          <a href="/about.html#visit">Visit Us</a>
          <a href="/about.html#faq">FAQ</a>
          <a href="/about.html#returns">Returns</a>
          <a href="/about.html#privacy">Privacy</a>
          <a href="/about.html#terms">Terms</a>
        </div>

        <div class="ltn-fcol">
          <div class="ltn-fh">Connect</div>
          <a href="${LTN.socials.instagram}" target="_blank" rel="noopener">Instagram</a>
          <p class="ltn-fp">1083 Avenue Laurier Ouest<br>Montréal, Québec</p>
        </div>
      </div>

      <div class="ltn-fbottom">
        <div>© ${new Date().getFullYear()} Le Top Notch</div>
        <button class="ltn-cookie-link" onclick="window.ltn_openCookiePrefs && window.ltn_openCookiePrefs()">Cookie Preferences</button>
      </div>
    </footer>
  `;
}

/* =============================================================
   POPUP HTML
   ============================================================= */
function ltn_popupHTML() {
  return `
    <div id="ltn-email-overlay" class="ltn-email-overlay" aria-hidden="true">
      <div class="ltn-email-inner">
        <button class="ltn-email-close" aria-label="Close" onclick="ltn_closePopup()">×</button>
        <div class="ltn-email-card">
          <div class="ltn-email-eyebrow">Welcome to Le Top Notch</div>
          <div class="ltn-email-title">Enjoy ${LTN.discountAmount} off your first order</div>
          <div class="ltn-email-copy">Use code <strong>${LTN.discountCode}</strong> at checkout.</div>
          <button class="ltn-email-btn" onclick="ltn_closePopup()">Continue Shopping</button>
        </div>
      </div>
    </div>
  `;
}

/* =============================================================
   MOBILE NAV
   ============================================================= */
function ltn_toggleMobileNav() {
  const nav = document.getElementById("ltn-mob-nav");
  const overlay = document.getElementById("ltn-mob-overlay");
  if (!nav || !overlay) return;

  const isOpen = nav.classList.contains("on");
  nav.classList.toggle("on", !isOpen);
  overlay.classList.toggle("on", !isOpen);
  document.body.style.overflow = isOpen ? "" : "hidden";
}

function ltn_closeMobileNav() {
  const nav = document.getElementById("ltn-mob-nav");
  const overlay = document.getElementById("ltn-mob-overlay");
  if (nav) nav.classList.remove("on");
  if (overlay) overlay.classList.remove("on");
  document.body.style.overflow = "";
}

/* =============================================================
   SEARCH
   ============================================================= */
function ltn_toggleSearch() {
  const overlay = document.getElementById("ltn-search-overlay");
  if (!overlay) return;

  const isOpen = overlay.style.display !== "none";
  overlay.style.display = isOpen ? "none" : "flex";

  if (!isOpen) {
    const input = document.getElementById("ltn-search-input");
    if (input) {
      input.value = "";
      setTimeout(() => input.focus(), 40);
    }
  }
}

function ltn_runSearch() {
  const input = document.getElementById("ltn-search-input");
  const query = (input ? input.value : "").trim();
  if (!query) return;

  const cats = ["tops", "dresses", "knitwear", "jackets", "trousers", "skirts"];
  const q = query.toLowerCase();
  const matchCat = cats.find(c => c.includes(q) || q.includes(c));

  if (matchCat) {
    window.location.href = `/products.html?group=shop-all&category=${matchCat}&q=${encodeURIComponent(query)}`;
  } else {
    window.location.href = `/products.html?group=shop-all&category=shop-all&q=${encodeURIComponent(query)}`;
  }
}

/* =============================================================
   POPUP
   ============================================================= */
function ltn_openPopup() {
  const overlay = document.getElementById("ltn-email-overlay");
  if (!overlay) return;
  overlay.classList.add("on");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function ltn_closePopup() {
  const overlay = document.getElementById("ltn-email-overlay");
  if (!overlay) return;
  overlay.classList.remove("on");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  try { localStorage.setItem(LTN.popupKey, "1"); } catch {}
}

function ltn_shouldShowPopup() {
  try {
    return !localStorage.getItem(LTN.popupKey);
  } catch {
    return false;
  }
}

/* =============================================================
   CSS
   ============================================================= */
function ltn_injectCSS() {
  if (document.getElementById("ltn-global-css")) return;

  if (!document.querySelector('link[href*="Cormorant+Garamond"]')) {
    const fl = document.createElement("link");
    fl.rel = "stylesheet";
    fl.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap";
    document.head.appendChild(fl);
  }

  const style = document.createElement("style");
  style.id = "ltn-global-css";
  style.textContent = `
    :root{
      --bg:#f7f4ef;
      --text:#171717;
      --muted:#6e675f;
      --line:#e7e0d7;
      --banner:#ebe4da;
      --white:#ffffff;
      --hbg:rgba(247,244,239,.96);
      --max:1600px;
    }

    .ltn-ann{
      min-height:24px;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:8px 14px;
      background:var(--banner);
      border-bottom:1px solid var(--line);
      font-size:9px;
      letter-spacing:.15em;
      text-transform:uppercase;
      text-align:center;
    }

    .ltn-header{
      position:sticky;
      top:0;
      z-index:300;
      background:var(--hbg);
      backdrop-filter:blur(8px);
      border-bottom:1px solid rgba(231,224,215,.75);
    }

    .ltn-hi{
      width:min(var(--max),calc(100% - 56px));
      margin:0 auto;
      min-height:82px;
      display:grid;
      grid-template-columns:1fr auto 1fr;
      align-items:center;
      gap:18px;
    }

    .ltn-left-zone{
      display:flex;
      align-items:center;
      justify-content:flex-start;
      min-width:0;
    }

    .ltn-brand{
      justify-self:center;
      font-size:21px;
      letter-spacing:.20em;
      text-transform:uppercase;
      white-space:nowrap;
      font-family:"Cormorant Garamond",Georgia,serif;
      font-weight:500;
      color:inherit;
      text-decoration:none;
      line-height:1;
    }

    .ltn-actions{
      display:flex;
      align-items:center;
      justify-content:flex-end;
      gap:16px;
    }

    .ltn-icon-btn{
      appearance:none;
      border:0;
      background:none;
      color:inherit;
      cursor:pointer;
      padding:0;
      width:24px;
      height:24px;
      display:inline-flex;
      align-items:center;
      justify-content:center;
      position:relative;
      text-decoration:none;
      flex-shrink:0;
    }

    .ltn-icon-btn svg{
      width:24px;
      height:24px;
      display:block;
    }

    .ltn-cart-icon-wrap{
      position:relative;
    }

    .ltn-cart-count{
      position:absolute;
      top:-5px;
      right:-7px;
      min-width:16px;
      height:16px;
      padding:0 4px;
      border-radius:999px;
      background:#171717;
      color:#fff;
      font-size:9px;
      display:none;
      align-items:center;
      justify-content:center;
      line-height:1;
    }

    .ltn-burger{
      appearance:none;
      border:0;
      background:none;
      cursor:pointer;
      width:24px;
      height:24px;
      padding:0;
      display:none;
      align-items:center;
      justify-content:center;
      flex-direction:column;
      gap:4px;
      margin-right:8px;
    }

    .ltn-burger span{
      display:block;
      width:22px;
      height:1.6px;
      background:#171717;
      border-radius:999px;
    }

    .ltn-nav{
      display:flex;
      align-items:center;
      gap:28px;
      min-width:0;
    }

    .ltn-ni{
      position:relative;
      display:flex;
      align-items:center;
    }

    .ltn-nl{
      font-size:10px;
      letter-spacing:.14em;
      text-transform:uppercase;
      color:inherit;
      text-decoration:none;
      padding:10px 0;
      white-space:nowrap;
      line-height:1;
    }

    .ltn-drop{
      position:absolute;
      top:calc(100% + 16px);
      left:0;
      width:min(1180px,calc(100vw - 80px));
      background:#f7f4ef;
      border:1px solid var(--line);
      display:none;
      grid-template-columns:280px 1fr;
      gap:24px;
      padding:24px;
      box-shadow:0 18px 60px rgba(0,0,0,.08);
      z-index:20;
    }

    .ltn-ni:hover .ltn-drop{
      display:grid;
    }

    .ltn-left{
      display:flex;
      flex-direction:column;
      gap:10px;
    }

    .ltn-col-head{
      font-size:9px;
      letter-spacing:.22em;
      text-transform:uppercase;
      color:#9a9186;
      margin-bottom:6px;
    }

    .ltn-left a{
      font-size:13px;
      color:inherit;
      text-decoration:none;
      line-height:1.35;
    }

    .ltn-ac{
      font-weight:600;
    }

    .ltn-div{
      height:1px;
      background:var(--line);
      margin:8px 0;
    }

    .ltn-right{
      display:grid;
      gap:14px;
    }

    .ltn-right.cols4{
      grid-template-columns:repeat(4,1fr);
    }

    .ltn-img-card{
      display:block;
      color:inherit;
      text-decoration:none;
    }

    .ltn-img-wrap{
      position:relative;
      overflow:hidden;
      background:#ebe4da;
      aspect-ratio:3 / 4;
    }

    .ltn-img-wrap img{
      width:100%;
      height:100%;
      object-fit:cover;
      display:block;
      transition:transform .35s ease;
    }

    .ltn-img-card:hover .ltn-img-wrap img{
      transform:scale(1.03);
    }

    .ltn-img-info{
      position:absolute;
      inset:auto 0 0 0;
      padding:14px 12px;
      background:linear-gradient(to top, rgba(0,0,0,.22), rgba(0,0,0,.04));
      color:#fff;
      text-align:center;
    }

    .ltn-img-title{
      font-size:11px;
      letter-spacing:.08em;
      text-transform:uppercase;
      line-height:1.2;
      margin-bottom:4px;
    }

    .ltn-img-sub{
      font-size:11px;
      line-height:1.25;
      opacity:.92;
    }

    .ltn-mob-overlay{
      position:fixed;
      inset:0;
      background:rgba(0,0,0,.25);
      opacity:0;
      pointer-events:none;
      transition:opacity .25s ease;
      z-index:399;
    }

    .ltn-mob-overlay.on{
      opacity:1;
      pointer-events:auto;
    }

    .ltn-mob-nav{
      position:fixed;
      top:0;
      left:0;
      width:min(86vw,380px);
      height:100vh;
      background:#f7f4ef;
      border-right:1px solid var(--line);
      transform:translateX(-100%);
      transition:transform .28s ease;
      z-index:400;
      display:flex;
      flex-direction:column;
    }

    .ltn-mob-nav.on{
      transform:translateX(0);
    }

    .ltn-mob-head{
      min-height:72px;
      padding:0 20px;
      border-bottom:1px solid var(--line);
      display:flex;
      align-items:center;
      justify-content:space-between;
      flex-shrink:0;
    }

    .ltn-mob-brand{
      font-family:"Cormorant Garamond",Georgia,serif;
      font-size:18px;
      letter-spacing:.18em;
      text-transform:uppercase;
      white-space:nowrap;
    }

    .ltn-mob-close{
      appearance:none;
      border:0;
      background:none;
      color:#6e675f;
      font-size:42px;
      line-height:1;
      cursor:pointer;
      padding:0;
    }

    .ltn-mob-links{
      flex:1;
      overflow-y:auto;
      -webkit-overflow-scrolling:touch;
      padding:18px 20px 24px;
      display:flex;
      flex-direction:column;
      gap:0;
    }

    .ltn-mob-links a{
      display:block;
      padding:16px 0;
      border-bottom:1px solid rgba(231,224,215,.8);
      font-size:12px;
      letter-spacing:.10em;
      text-transform:uppercase;
      color:#171717;
      text-decoration:none;
    }

    .ltn-mob-divider{
      height:20px;
    }

    .ltn-search-overlay{
      position:fixed;
      inset:0;
      z-index:500;
      background:rgba(0,0,0,.20);
      align-items:flex-start;
      justify-content:center;
      padding:70px 18px 18px;
    }

    .ltn-search-box{
      width:min(780px,100%);
      background:#f7f4ef;
      border:1px solid var(--line);
      padding:22px;
      position:relative;
      box-shadow:0 18px 60px rgba(0,0,0,.08);
    }

    .ltn-search-close{
      appearance:none;
      border:0;
      background:none;
      position:absolute;
      top:10px;
      right:14px;
      font-size:34px;
      color:#6e675f;
      cursor:pointer;
      line-height:1;
      padding:0;
    }

    .ltn-search-title{
      font-family:"Cormorant Garamond",Georgia,serif;
      font-size:32px;
      line-height:.95;
      margin-bottom:16px;
    }

    .ltn-search-row{
      display:grid;
      grid-template-columns:1fr auto;
      gap:10px;
    }

    .ltn-search-input{
      height:46px;
      border:1px solid var(--line);
      background:#fff;
      padding:0 14px;
      font:inherit;
      outline:none;
    }

    .ltn-search-btn{
      height:46px;
      border:1px solid #171717;
      background:#171717;
      color:#fff;
      padding:0 18px;
      font-size:10px;
      letter-spacing:.14em;
      text-transform:uppercase;
      cursor:pointer;
    }

    .ltn-footer{
      margin-top:80px;
      border-top:1px solid var(--line);
      background:#f3efe8;
    }

    .ltn-fi{
      width:min(var(--max),calc(100% - 40px));
      margin:0 auto;
      padding:44px 0 28px;
      display:grid;
      grid-template-columns:1.3fr 1fr 1fr 1fr 1fr;
      gap:28px;
    }

    .ltn-fcol{
      display:flex;
      flex-direction:column;
      gap:10px;
    }

    .ltn-fh{
      font-size:10px;
      letter-spacing:.16em;
      text-transform:uppercase;
      color:#9a9186;
      margin-bottom:4px;
    }

    .ltn-fcol a,
    .ltn-fp{
      font-size:13px;
      line-height:1.55;
      color:#171717;
      text-decoration:none;
    }

    .ltn-fbottom{
      width:min(var(--max),calc(100% - 40px));
      margin:0 auto;
      border-top:1px solid var(--line);
      padding:16px 0 22px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:16px;
      font-size:11px;
      color:#6e675f;
    }

    .ltn-cookie-link{
      appearance:none;
      border:0;
      background:none;
      color:inherit;
      cursor:pointer;
      padding:0;
      font:inherit;
    }

    .ltn-email-overlay{
      position:fixed;
      inset:0;
      z-index:700;
      background:rgba(0,0,0,.28);
      display:none;
      align-items:center;
      justify-content:center;
      padding:18px;
    }

    .ltn-email-overlay.on{
      display:flex;
    }

    .ltn-email-inner{
      width:min(520px,100%);
      position:relative;
    }

    .ltn-email-card{
      background:#f7f4ef;
      border:1px solid var(--line);
      padding:34px 28px 28px;
      text-align:center;
      box-shadow:0 20px 70px rgba(0,0,0,.10);
    }

    .ltn-email-close{
      appearance:none;
      border:0;
      background:none;
      position:absolute;
      top:10px;
      right:14px;
      color:#6e675f;
      font-size:34px;
      line-height:1;
      cursor:pointer;
      padding:0;
    }

    .ltn-email-eyebrow{
      font-size:10px;
      letter-spacing:.18em;
      text-transform:uppercase;
      color:#9a9186;
      margin-bottom:10px;
    }

    .ltn-email-title{
      font-family:"Cormorant Garamond",Georgia,serif;
      font-size:42px;
      line-height:.95;
      margin-bottom:12px;
    }

    .ltn-email-copy{
      font-size:14px;
      color:#6e675f;
      line-height:1.5;
      margin-bottom:18px;
    }

    .ltn-email-btn{
      min-height:44px;
      padding:0 18px;
      border:1px solid #171717;
      background:#171717;
      color:#fff;
      font-size:10px;
      letter-spacing:.16em;
      text-transform:uppercase;
      cursor:pointer;
    }

    @media (max-width: 1180px){
      .ltn-hi{
        width:calc(100% - 30px);
        grid-template-columns:auto 1fr auto;
        min-height:72px;
        gap:12px;
      }

      .ltn-nav{
        display:none;
      }

      .ltn-burger{
        display:inline-flex;
      }

      .ltn-brand{
        justify-self:center;
        font-size:16px;
        letter-spacing:.17em;
      }

      .ltn-fi{
        grid-template-columns:repeat(2,1fr);
      }
    }

    @media (max-width: 700px){
      .ltn-ann{
        font-size:8px;
        letter-spacing:.12em;
        padding:8px 10px;
      }

      .ltn-hi{
        width:calc(100% - 22px);
        min-height:64px;
        gap:10px;
      }

      .ltn-brand{
        font-size:15px;
        letter-spacing:.14em;
        max-width:100%;
        overflow:hidden;
        text-overflow:ellipsis;
      }

      .ltn-actions{
        gap:12px;
      }

      .ltn-icon-btn{
        width:22px;
        height:22px;
      }

      .ltn-burger{
        width:22px;
        height:22px;
      }

      .ltn-burger span{
        width:20px;
      }

      .ltn-mob-nav{
        width:min(88vw,360px);
      }

      .ltn-search-row{
        grid-template-columns:1fr;
      }

      .ltn-search-btn{
        width:100%;
      }

      .ltn-fi{
        width:calc(100% - 28px);
        grid-template-columns:1fr;
        gap:22px;
      }

      .ltn-fbottom{
        width:calc(100% - 28px);
        flex-direction:column;
        align-items:flex-start;
      }

      .ltn-email-title{
        font-size:34px;
      }
    }
  `;
  document.head.appendChild(style);
}

/* =============================================================
   RENDER
   ============================================================= */
function ltn_renderGlobals() {
  const header = document.getElementById("ltn-header");
  if (header) header.innerHTML = ltn_headerHTML();

  const footer = document.getElementById("ltn-footer");
  if (footer) footer.innerHTML = ltn_footerHTML();

  if (!document.getElementById("ltn-email-overlay")) {
    document.body.insertAdjacentHTML("beforeend", ltn_popupHTML());
  }

  ltn_updateCartCount();
}

/* =============================================================
   EVENTS
   ============================================================= */
document.addEventListener("keydown", function (e) {
  const input = document.getElementById("ltn-search-input");

  if (e.key === "Enter" && document.activeElement === input) {
    ltn_runSearch();
  }

  if (e.key === "Escape") {
    const searchOverlay = document.getElementById("ltn-search-overlay");
    if (searchOverlay && searchOverlay.style.display !== "none") {
      ltn_toggleSearch();
    }
    ltn_closeMobileNav();
  }
});

window.addEventListener("storage", ltn_updateCartCount);
window.addEventListener("pageshow", ltn_updateCartCount);

/* =============================================================
   INIT
   ============================================================= */
(function initLTNGlobal() {
  ltn_injectCSS();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      ltn_renderGlobals();
      setTimeout(() => {
        if (ltn_shouldShowPopup()) ltn_openPopup();
      }, 1200);
    });
  } else {
    ltn_renderGlobals();
    setTimeout(() => {
      if (ltn_shouldShowPopup()) ltn_openPopup();
    }, 1200);
  }
})();

/* =============================================================
   EXPOSE
   ============================================================= */
window.ltn_img = ltn_img;
window.ltn_getCart = ltn_getCart;
window.ltn_updateCartCount = ltn_updateCartCount;
window.ltn_toggleMobileNav = ltn_toggleMobileNav;
window.ltn_closeMobileNav = ltn_closeMobileNav;
window.ltn_toggleSearch = ltn_toggleSearch;
window.ltn_runSearch = ltn_runSearch;
window.ltn_openPopup = ltn_openPopup;
window.ltn_closePopup = ltn_closePopup;
