const LTN = {
  announcement: "Free shipping on orders over CA$250",
  discountCode: "WELCOME10",
  discountAmount: "10%",
};

function ltn_getCart() {
  try {
    const raw = localStorage.getItem("letopnotch_cart");
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
    el.style.display = count > 0 ? "inline-flex" : "none";
  });
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    el.textContent = `Cart (${count})`;
  });
}

function ltn_headerHTML() {
  return `
<header class="ltn-shell">
  <div class="ltn-ann">${LTN.announcement}</div>

  <div class="ltn-header">
    <div class="ltn-hi">
      <button class="ltn-burger" onclick="ltn_toggleMobileNav()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>

      <a href="/index.html" class="ltn-brand">LE TOP NOTCH</a>

      <nav class="ltn-nav">
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
              <a class="ltn-img-card" href="/products.html?group=shop-all&category=tops">
                <div class="ltn-img-wrap">
                  <img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-shop-1.webp" alt="Tops">
                </div>
                <div class="ltn-img-info">
                  <div class="ltn-img-title">Tops</div>
                  <div class="ltn-img-sub">Everyday polish</div>
                </div>
              </a>

              <a class="ltn-img-card" href="/products.html?group=shop-all&category=dresses">
                <div class="ltn-img-wrap">
                  <img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-shop-2.webp" alt="Dresses">
                </div>
                <div class="ltn-img-info">
                  <div class="ltn-img-title">Dresses</div>
                  <div class="ltn-img-sub">Refined silhouettes</div>
                </div>
              </a>

              <a class="ltn-img-card" href="/products.html?group=shop-all&category=jackets">
                <div class="ltn-img-wrap">
                  <img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-shop-3.webp" alt="Jackets">
                </div>
                <div class="ltn-img-info">
                  <div class="ltn-img-title">Jackets &amp; Coats</div>
                  <div class="ltn-img-sub">Tailored layers</div>
                </div>
              </a>

              <a class="ltn-img-card" href="/products.html?group=shop-all&category=knitwear">
                <div class="ltn-img-wrap">
                  <img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-shop-4.webp" alt="Knitwear">
                </div>
                <div class="ltn-img-info">
                  <div class="ltn-img-title">Knitwear</div>
                  <div class="ltn-img-sub">Softness &amp; texture</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="ltn-ni">
          <a href="/new-in.html" class="ltn-nl">New In</a>
          <div class="ltn-drop">
            <div class="ltn-left">
              <div class="ltn-col-head">Discover</div>
              <a class="ltn-ac" href="/new-in.html">Shop All New In</a>
              <div class="ltn-div"></div>
              <a href="/products.html?group=new-in&category=tops">Tops</a>
              <a href="/products.html?group=new-in&category=dresses">Dresses</a>
              <a href="/products.html?group=new-in&category=knitwear">Knitwear</a>
              <a href="/products.html?group=new-in&category=jackets">Jackets &amp; Coats</a>
              <a href="/products.html?group=new-in&category=trousers">Trousers</a>
              <a href="/products.html?group=new-in&category=skirts">Skirts</a>
            </div>

            <div class="ltn-right cols3">
              <a class="ltn-img-card" href="/products.html?group=new-in&category=tops">
                <div class="ltn-img-wrap">
                  <img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-new-in-1.webp" alt="Tops">
                </div>
                <div class="ltn-img-info">
                  <div class="ltn-img-title">Tops</div>
                  <div class="ltn-img-sub">Fresh arrivals</div>
                </div>
              </a>

              <a class="ltn-img-card" href="/products.html?group=new-in&category=dresses">
                <div class="ltn-img-wrap">
                  <img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-new-in-2.webp" alt="Dresses">
                </div>
                <div class="ltn-img-info">
                  <div class="ltn-img-title">Dresses</div>
                  <div class="ltn-img-sub">New silhouettes</div>
                </div>
              </a>

              <a class="ltn-img-card" href="/products.html?group=new-in&category=jackets">
                <div class="ltn-img-wrap">
                  <img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-new-in-3.webp" alt="Jackets">
                </div>
                <div class="ltn-img-info">
                  <div class="ltn-img-title">Jackets</div>
                  <div class="ltn-img-sub">New layers</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="ltn-ni">
          <a href="/best-sellers.html" class="ltn-nl">Best Sellers</a>
          <div class="ltn-drop">
            <div class="ltn-left">
              <div class="ltn-col-head">Discover</div>
              <a class="ltn-ac" href="/best-sellers.html">Shop All Best Sellers</a>
              <div class="ltn-div"></div>
              <a href="/products.html?group=best-sellers&category=tops">Tops</a>
              <a href="/products.html?group=best-sellers&category=dresses">Dresses</a>
              <a href="/products.html?group=best-sellers&category=knitwear">Knitwear</a>
              <a href="/products.html?group=best-sellers&category=jackets">Jackets &amp; Coats</a>
              <a href="/products.html?group=best-sellers&category=trousers">Trousers</a>
              <a href="/products.html?group=best-sellers&category=skirts">Skirts</a>
            </div>

            <div class="ltn-right cols3">
              <a class="ltn-img-card" href="/products.html?group=best-sellers&category=tops">
                <div class="ltn-img-wrap">
                  <img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-best-sellers-1.webp" alt="Tops">
                </div>
                <div class="ltn-img-info">
                  <div class="ltn-img-title">Tops</div>
                  <div class="ltn-img-sub">Most loved</div>
                </div>
              </a>

              <a class="ltn-img-card" href="/products.html?group=best-sellers&category=dresses">
                <div class="ltn-img-wrap">
                  <img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-best-sellers-2.webp" alt="Dresses">
                </div>
                <div class="ltn-img-info">
                  <div class="ltn-img-title">Dresses</div>
                  <div class="ltn-img-sub">Customer favorites</div>
                </div>
              </a>

              <a class="ltn-img-card" href="/products.html?group=best-sellers&category=jackets">
                <div class="ltn-img-wrap">
                  <img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-best-sellers-3.webp" alt="Jackets">
                </div>
                <div class="ltn-img-info">
                  <div class="ltn-img-title">Jackets</div>
                  <div class="ltn-img-sub">Top picks</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="ltn-ni">
          <a href="/last-chance.html" class="ltn-nl">Last Chance</a>
          <div class="ltn-drop">
            <div class="ltn-left">
              <div class="ltn-col-head">Discover</div>
              <a class="ltn-ac" href="/last-chance.html">Shop All Last Chance</a>
              <div class="ltn-div"></div>
              <a href="/products.html?group=last-chance&category=tops">Tops</a>
              <a href="/products.html?group=last-chance&category=dresses">Dresses</a>
              <a href="/products.html?group=last-chance&category=knitwear">Knitwear</a>
              <a href="/products.html?group=last-chance&category=jackets">Jackets &amp; Coats</a>
              <a href="/products.html?group=last-chance&category=trousers">Trousers</a>
              <a href="/products.html?group=last-chance&category=skirts">Skirts</a>
            </div>

            <div class="ltn-right cols3">
              <a class="ltn-img-card" href="/products.html?group=last-chance&category=tops">
                <div class="ltn-img-wrap">
                  <img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-last-chance-1.webp" alt="Tops">
                </div>
                <div class="ltn-img-info">
                  <div class="ltn-img-title">Tops</div>
                  <div class="ltn-img-sub">Final pieces</div>
                </div>
              </a>

              <a class="ltn-img-card" href="/products.html?group=last-chance&category=dresses">
                <div class="ltn-img-wrap">
                  <img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-last-chance-2.webp" alt="Dresses">
                </div>
                <div class="ltn-img-info">
                  <div class="ltn-img-title">Dresses</div>
                  <div class="ltn-img-sub">Limited sizes left</div>
                </div>
              </a>

              <a class="ltn-img-card" href="/products.html?group=last-chance&category=jackets">
                <div class="ltn-img-wrap">
                  <img class="ltn-img-inner" src="https://letopnotch-site.pages.dev/images/nav-last-chance-3.webp" alt="Jackets">
                </div>
                <div class="ltn-img-info">
                  <div class="ltn-img-title">Jackets</div>
                  <div class="ltn-img-sub">Before they're gone</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <a href="/about.html" class="ltn-nl">About</a>
      </nav>

      <div class="ltn-hact">
        <button class="ltn-search-btn" onclick="ltn_toggleSearch()" aria-label="Search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>

        <a href="/cart.html" class="ltn-cart-icon-btn" aria-label="Cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span class="ltn-cart-count" style="display:none">0</span>
        </a>
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
        <div class="ltn-mob-div"></div>
        <a href="/about.html">About</a>
        <a href="/cart.html">Cart</a>
      </nav>
    </div>
  </div>
</header>`;
}

function ltn_footerHTML() {
  return `
<footer class="ltn-footer">
  <div class="ltn-fw">
    <div class="ltn-fg">
      <div class="ltn-fc">
        <h4>Shop</h4>
        <a href="/new-in.html">New In</a>
        <a href="/best-sellers.html">Best Sellers</a>
        <a href="/last-chance.html">Last Chance</a>
        <a href="/shop.html">Collection</a>
      </div>

      <div class="ltn-fc">
        <h4>Categories</h4>
        <a href="/products.html?group=shop-all&category=tops">Tops</a>
        <a href="/products.html?group=shop-all&category=dresses">Dresses</a>
        <a href="/products.html?group=shop-all&category=knitwear">Knitwear</a>
        <a href="/products.html?group=shop-all&category=jackets">Jackets &amp; Coats</a>
        <a href="/products.html?group=shop-all&category=trousers">Trousers</a>
        <a href="/products.html?group=shop-all&category=skirts">Skirts</a>
      </div>

      <div class="ltn-fc">
        <h4>Information</h4>
        <a href="/about.html#our-story">Our Story</a>
        <a href="/about.html#visit">Visit Us</a>
        <a href="/about.html#faq">FAQ</a>
        <a href="/about.html#returns">Returns</a>
      </div>

      <div class="ltn-fc">
        <h4>Visit</h4>
        <p>1083 Avenue Laurier Ouest<br>Montréal, Québec</p>
        <div class="ltn-fsoc">
          <a href="https://www.instagram.com/letopnotchcanada/" target="_blank" rel="noopener">Instagram</a>
        </div>
      </div>
    </div>

    <div class="ltn-trust">
      <div class="ltn-trust-grid">
        <div class="ltn-trust-item">
          <h4>Shipping</h4>
          <p>Complimentary shipping on orders over CA$250.</p>
        </div>
        <div class="ltn-trust-item">
          <h4>Returns</h4>
          <p>Eligible online returns within 15 days.</p>
        </div>
        <div class="ltn-trust-item">
          <h4>Service</h4>
          <p>Curated in-store experience in Montréal.</p>
        </div>
      </div>
    </div>

    <div class="ltn-fbot">
      <span>© ${new Date().getFullYear()} Le Top Notch</span>
      <button type="button" onclick="window.ltn_openCookiePrefs && window.ltn_openCookiePrefs()">Cookie Preferences</button>
    </div>
  </div>
</footer>`;
}

function ltn_popupHTML() {
  return `
<div class="ltn-ei-overlay" id="ltnEiOverlay">
  <div class="ltn-ei-modal">
    <div class="ltn-ei-image"></div>
    <div class="ltn-ei-content">
      <button class="ltn-ei-close" id="ltnEiClose" aria-label="Close">✕</button>

      <div id="ltnEiForm">
        <div class="ltn-ei-kicker">Welcome to Le Top Notch</div>
        <h3>Enjoy ${LTN.discountAmount} off your first order</h3>
        <p>Sign up to receive early access to new arrivals and exclusive updates.</p>

        <div class="ltn-nlf">
          <input type="email" id="ltnEiEmail" placeholder="Enter your email">
          <button id="ltnEiSubmit">Join</button>
        </div>

        <button class="ltn-ei-skip" id="ltnEiSkip">No thanks</button>
      </div>

      <div id="ltnEiSuccess" style="display:none;">
        <div class="ltn-ei-success-code">${LTN.discountCode}</div>
        <div class="ltn-ei-success-sub">Use it at checkout for ${LTN.discountAmount} off.</div>
      </div>
    </div>
  </div>
</div>`;
}

function ltn_injectCSS() {
  if (!document.querySelector('link[href*="Cormorant"]')) {
    const fl = document.createElement("link");
    fl.rel = "stylesheet";
    fl.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap";
    fl.media = "print";
    fl.onload = () => { fl.media = "all"; };
    document.head.appendChild(fl);
  }

  const css = `
  :root{--bg:#f7f4ef;--text:#171717;--muted:#6e675f;--line:#e7e0d7;--banner:#ebe4da;--hbg:rgba(247,244,239,.96);--white:#fff;--max:1600px;}

  .ltn-ann{min-height:24px;display:flex;align-items:center;justify-content:center;padding:4px 14px;background:var(--banner);border-bottom:1px solid var(--line);font-size:9px;letter-spacing:.15em;text-transform:uppercase;}
  .ltn-header{position:sticky;top:0;z-index:300;background:var(--hbg);backdrop-filter:blur(8px);border-bottom:1px solid rgba(231,224,215,.75);}
  .ltn-hi{width:min(var(--max),calc(100% - 36px));margin:0 auto;min-height:56px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:18px;position:relative;}
  .ltn-brand{font-size:15px;letter-spacing:.22em;text-transform:uppercase;white-space:nowrap;font-family:"Cormorant Garamond",Georgia,serif;font-weight:500;color:inherit;text-decoration:none;justify-self:center;}
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

  .ltn-drop{position:fixed;left:50%;transform:translateX(-50%);top:calc(var(--ltn-header-bottom,80px));width:min(1380px,calc(100vw - 44px));background:#f7f4ef;border:1px solid var(--line);display:none;grid-template-columns:280px 1fr;gap:24px;padding:24px 26px 28px;box-shadow:0 20px 60px rgba(0,0,0,.08);z-index:600;}
  .ltn-ni:hover .ltn-drop{display:grid;}

  .ltn-left{padding-right:0;}
  .ltn-col-head{font-size:9px;letter-spacing:.20em;text-transform:uppercase;color:#a59c92;margin-bottom:14px;}
  .ltn-left a{display:block;color:inherit;text-decoration:none;font-size:16px;line-height:1.45;padding:4px 0;}
  .ltn-left .ltn-ac{font-weight:600;}
  .ltn-div{height:1px;background:var(--line);margin:14px 0;}

  .ltn-right{display:grid;gap:14px;}
  .ltn-right.cols4{grid-template-columns:repeat(4,1fr);}
  .ltn-right.cols3{grid-template-columns:repeat(3,1fr);}

  .ltn-img-card{display:block;color:inherit;text-decoration:none;}
  .ltn-img-wrap{position:relative;overflow:hidden;background:#ebe4da;aspect-ratio:3/4;}
  .ltn-img-inner{width:100%;height:100%;object-fit:cover;display:block;transition:transform .35s ease;}
  .ltn-img-card:hover .ltn-img-inner{transform:scale(1.03);}
  .ltn-img-info{padding-top:10px;text-align:center;}
  .ltn-img-title{font-size:11px;letter-spacing:.10em;text-transform:uppercase;line-height:1.2;margin-bottom:4px;}
  .ltn-img-sub{font-size:11px;line-height:1.3;color:var(--muted);}

  .ltn-cart-icon-btn{position:relative;}
  .ltn-cart-count{position:absolute;top:10px;right:-8px;min-width:16px;height:16px;padding:0 4px;border-radius:999px;background:#171717;color:#fff;font-size:9px;align-items:center;justify-content:center;line-height:1;}
  .ltn-burger{display:none;background:none;border:none;cursor:pointer;padding:0;width:22px;height:22px;align-items:center;justify-content:center;flex-direction:column;gap:4px;position:absolute;left:0;top:50%;transform:translateY(-50%);}
  .ltn-burger span{display:block;width:20px;height:1.5px;background:currentColor;border-radius:999px;}

  .ltn-footer{padding:44px 0 28px;border-top:1px solid var(--line);}
  .ltn-fw{width:min(var(--max),calc(100% - 44px));margin:0 auto;}
  .ltn-fg{display:grid;grid-template-columns:repeat(4,1fr);gap:34px;padding-bottom:24px;border-bottom:1px solid var(--line);}
  .ltn-fc h4{font-size:10px;letter-spacing:.16em;text-transform:uppercase;margin-bottom:14px;}
  .ltn-fc a,.ltn-fc p{display:block;font-size:13px;color:var(--muted);line-height:1.9;text-decoration:none;}
  .ltn-fsoc{display:flex;gap:14px;margin-top:12px;}
  .ltn-fsoc a{font-size:12px;color:#171717;text-decoration:none;}

  .ltn-trust{padding:28px 0;border-bottom:1px solid var(--line);}
  .ltn-trust-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;}
  .ltn-trust-item h4{font-size:10px;letter-spacing:.16em;text-transform:uppercase;margin-bottom:10px;}
  .ltn-trust-item p{font-size:12px;color:var(--muted);line-height:1.7;max-width:280px;}
  .ltn-fbot{display:flex;align-items:center;justify-content:space-between;gap:20px;padding-top:18px;font-size:11px;color:var(--muted);}
  .ltn-fbot button{background:none;border:none;color:inherit;font:inherit;cursor:pointer;padding:0;}

  .ltn-ei-overlay{position:fixed;inset:0;background:rgba(0,0,0,.28);display:none;align-items:center;justify-content:center;z-index:1600;padding:18px;}
  .ltn-ei-overlay.on{display:flex;}
  .ltn-ei-modal{width:min(940px,100%);display:grid;grid-template-columns:1fr 1fr;background:#fff;min-height:520px;box-shadow:0 30px 80px rgba(0,0,0,.12);}
  .ltn-ei-image{background:url('https://letopnotch-site.pages.dev/images/hero-home.webp') center/cover no-repeat;}
  .ltn-ei-content{position:relative;padding:48px 42px;display:flex;flex-direction:column;justify-content:center;}
  .ltn-ei-close{position:absolute;top:16px;right:18px;background:none;border:none;font-size:22px;cursor:pointer;color:#6e675f;}
  .ltn-ei-kicker{font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:#9a9186;margin-bottom:12px;}
  .ltn-ei-content h3{font-family:"Cormorant Garamond",Georgia,serif;font-size:44px;line-height:.95;font-weight:500;margin-bottom:14px;}
  .ltn-ei-content p{font-size:14px;color:#6e675f;line-height:1.6;margin-bottom:20px;}
  .ltn-nlf{display:flex;gap:10px;margin-bottom:14px;}
  .ltn-nlf input{flex:1;height:46px;border:1px solid #e7e0d7;padding:0 14px;font-size:14px;font-family:inherit;background:#f7f4ef;outline:none;}
  .ltn-nlf button{height:46px;padding:0 20px;background:#171717;color:#fff;border:none;cursor:pointer;font-size:10px;letter-spacing:.14em;text-transform:uppercase;}
  .ltn-ei-skip{background:none;border:none;padding:0;font-size:12px;color:#6e675f;cursor:pointer;text-align:left;}
  .ltn-ei-success-code{font-family:"Cormorant Garamond",Georgia,serif;font-size:54px;line-height:1;margin-bottom:10px;}
  .ltn-ei-success-sub{font-size:14px;color:#6e675f;}

  .ltn-mob-overlay{position:fixed;inset:0;background:rgba(0,0,0,.18);z-index:498;opacity:0;pointer-events:none;transition:opacity .25s ease;}
  .ltn-mob-overlay.on{opacity:1;pointer-events:auto;}
  .ltn-mob-nav{position:fixed;right:0;top:0;bottom:0;width:min(320px,85vw);background:#f7f4ef;z-index:499;transform:translateX(100%);transition:transform .32s cubic-bezier(.22,.61,.36,1);overflow-y:auto;display:flex;flex-direction:column;}
  .ltn-mob-nav.on{transform:translateX(0);}
  .ltn-mob-top{display:flex;align-items:center;justify-content:space-between;padding:18px 20px;border-bottom:1px solid #e7e0d7;min-height:56px;}
  .ltn-mob-close{background:none;border:none;font-size:22px;cursor:pointer;color:#6e675f;line-height:1;}
  .ltn-mob-links{display:flex;flex-direction:column;padding:16px 0 40px;}
  .ltn-mob-links a{display:block;padding:14px 24px;font-size:13px;text-transform:uppercase;letter-spacing:.10em;color:#171717;border-bottom:1px solid rgba(231,224,215,.5);text-decoration:none;}
  .ltn-mob-links a:hover{background:#f0ece5;}
  .ltn-mob-div{height:1px;background:#e7e0d7;margin:8px 0;}

  @media(max-width:980px){
    .ltn-nav{display:none;}
    .ltn-burger{display:flex;}
    .ltn-hi{grid-template-columns:auto 1fr auto;width:calc(100% - 28px);min-height:52px;gap:0;padding-left:26px;}
    .ltn-brand{font-size:13px;letter-spacing:.18em;}
    .ltn-hact{gap:18px;}
    .ltn-search-btn,.ltn-cart-icon-btn,.ltn-burger{min-height:52px;}
    .ltn-drop{display:none!important;}
    .ltn-fg{grid-template-columns:1fr 1fr;gap:28px;}
    .ltn-trust-grid{grid-template-columns:1fr;gap:18px;}
    .ltn-trust{padding:24px 0;}
  }

  @media(max-width:640px){
    .ltn-hi{width:calc(100% - 20px);min-height:50px;padding-left:24px;}
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

  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  requestAnimationFrame(() => {
    const header = document.querySelector(".ltn-header");
    if (header) {
      document.documentElement.style.setProperty("--ltn-header-bottom", `${header.getBoundingClientRect().bottom}px`);
    }
  });
  window.addEventListener("resize", () => {
    const header = document.querySelector(".ltn-header");
    if (header) {
      document.documentElement.style.setProperty("--ltn-header-bottom", `${header.getBoundingClientRect().bottom}px`);
    }
  });
}

function ltn_injectHeader() {
  const el = document.getElementById("ltn-header");
  if (el) el.innerHTML = ltn_headerHTML();
}

function ltn_injectFooter() {
  const el = document.getElementById("ltn-footer");
  if (el) el.innerHTML = ltn_footerHTML();
}

function ltn_injectPopup() {
  const div = document.createElement("div");
  div.innerHTML = ltn_popupHTML();
  document.body.appendChild(div.firstElementChild);

  const overlay = document.getElementById("ltnEiOverlay");
  const closeBtn = document.getElementById("ltnEiClose");
  const skipBtn = document.getElementById("ltnEiSkip");
  const submitBtn = document.getElementById("ltnEiSubmit");
  const emailInput = document.getElementById("ltnEiEmail");
  const formDiv = document.getElementById("ltnEiForm");
  const successDiv = document.getElementById("ltnEiSuccess");
  if (!overlay) return;

  const EI_KEY = "ltn_ei_shown";
  if (sessionStorage.getItem(EI_KEY)) return;

  function showPopup() {
    if (sessionStorage.getItem(EI_KEY)) return;
    overlay.classList.add("on");
    sessionStorage.setItem(EI_KEY, "1");
  }

  function hidePopup() {
    overlay.classList.remove("on");
  }

  document.addEventListener("mouseleave", e => {
    if (e.clientY < 10) showPopup();
  });

  setTimeout(showPopup, 30000);

  closeBtn.onclick = hidePopup;
  skipBtn.onclick = hidePopup;
  overlay.onclick = e => {
    if (e.target === overlay) hidePopup();
  };

  submitBtn.onclick = () => {
    const email = emailInput.value.trim();
    if (!email || !email.includes("@")) {
      emailInput.style.borderColor = "#c0392b";
      emailInput.focus();
      return;
    }
    emailInput.style.borderColor = "";
    formDiv.style.display = "none";
    successDiv.style.display = "block";
    localStorage.setItem("ltn_subscriber", email);
  };

  emailInput.addEventListener("keydown", e => {
    if (e.key === "Enter") submitBtn.click();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  ltn_injectCSS();
  ltn_injectHeader();
  ltn_injectFooter();
  ltn_injectPopup();
  ltn_updateCartCount();
});

window.addEventListener("pageshow", ltn_updateCartCount);

/* ── MOBILE NAV ── */
function ltn_toggleMobileNav() {
  const nav = document.getElementById("ltn-mob-nav");
  const overlay = document.getElementById("ltn-mob-overlay");
  if (!nav) return;
  const isOpen = nav.classList.contains("on");
  nav.classList.toggle("on", !isOpen);
  if (overlay) overlay.classList.toggle("on", !isOpen);
  document.body.style.overflow = isOpen ? "" : "hidden";
}

/* ── SEARCH ── */
function ltn_toggleSearch() {
  const overlay = document.getElementById("ltn-search-overlay");
  if (!overlay) return;
  const isOpen = overlay.style.display !== "none";
  overlay.style.display = isOpen ? "none" : "flex";
  if (!isOpen) {
    const input = document.getElementById("ltn-search-input");
    if (input) {
      input.value = "";
      input.focus();
    }
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
